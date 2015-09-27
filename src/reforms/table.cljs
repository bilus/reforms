(ns reforms.table
  (:require [reforms.core.impl :as impl]
            [reforms.binding.core :as binding]
            [clojure.set :as set]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Implementation

(defn simple-checkbox
  [checked & {:keys [on-click]}]
  [:input {:onChange #(on-click (.. % -target -checked))
           :checked  checked
           :type     "checkbox"}])

(defn all-selected?
  [selected-values all-values]
  (set/subset? (into #{} all-values) selected-values))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Public

(defn table
  "Renders a table of `rows` (col => value). An optional map of columns to labels can be specified which also
   restricts which columns are visible.

   Example:

   (table [{:name \"Tom\" :id 12} {:name \"Jerry\" :id 23}]
          :columns {:name \"Hero name\"})

   | Hero name |
   | Tom       |
   | Jerry     |

   As an option, each row can have an on/off checkbox to the left; to turn this on, `checkboxes` must be a map
   with :cursor and :korks pointing to where to store the selection.  The resulting selection
   is either a set containing values or nil; the latter means that all rows are selected.
   The values are taken from the first val in the respective row or a result of :value function of
   signature (fn [row]).

   Example:

   (table [{:name \"Tom\" :id 12} {:name \"Jerry\" :id 23}]
          :checkboxes {:cursor     app-state
                       :korks      [:selected-heroes]
                       :value      :id}
          :columns {:name \"Hero name\"})

   | [ ] Hero name |
   | [x] Tom       |
   | [ ] Jerry     |

   ;; For the above selection:
   (get-in app-state [:selected-heroes]) => #{12}

   Depending on the initial value of `app-state` in the above example the table start either

   a) with all checkboxes on for `app-state` containing {:selected-heroes nil}, or
   b) with no selection with {:selected-heroes #{}}."

  [& args]
  (let [[attrs [rows & {:keys [columns checkboxes xf] :or {columns {} xf (fn [col val] val)}}]] (impl/resolve-args [:table] {:class "table"} args)
        labels (into {} columns)
        col-keys (or (not-empty (map first columns))
                     (->> rows
                          (mapcat keys)
                          distinct))
        {sel-cursor :cursor sel-korks :korks value-fn :value :or {value-fn (comp first vals)}} checkboxes
        selected (or (binding/get-in sel-cursor sel-korks) #{})
        select-all (nil? (binding/get-in sel-cursor sel-korks))]
    [:table attrs
     [:thead
      [:tr
       (concat
        (when checkboxes
          (let [all-values (map value-fn rows)]
            (list
             (let []
               [:th (simple-checkbox (or select-all (all-selected? selected all-values))
                                     :on-click (fn [checked]
                                                 (binding/swap! sel-cursor sel-korks
                                                                (fn [prev-selected]
                                                                  (if checked
                                                                    (into prev-selected all-values)
                                                                    #{})))))]))))
        (for [col col-keys]
          [:th (or (labels col) col)]))]]
     [:tbody
      (for [row rows]
        [:tr
         (concat
          (when checkboxes
            (let [value (value-fn row)
                  all-values (map value-fn rows)]
              [[:td (simple-checkbox (or select-all (selected value))
                                     :on-click (fn [checked]
                                                 (binding/swap! sel-cursor sel-korks
                                                                (fn [prev-selected]
                                                                  (cond
                                                                    select-all (disj (into #{} all-values) value)
                                                                    checked (conj (or prev-selected #{}) value)
                                                                    :else (disj (or prev-selected #{}) value))))))]]))
          (for [col col-keys]
            [:td (xf col (row col))]))])]]))
