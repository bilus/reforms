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

   Arguments:

       [attrs] rows [options]

       - attrs - (optional) attributes for <table> handed over to React (see https://github.com/r0man/sablono#html-attributes)
       - rows - an array of col->val maps
       - options - (optional) options to customize the table

   Options:

       - :columns - map of keys used in `rows` to human-friendly column names
       - :checkboxes - use this to support row selection using checkboxes, the map contains:
           :selection - atom/cursor to keep selected rows in
           :path - (optional) korks/path into the selection atom/cursor
           :row-id - function applied to row map to calculate a unique row id to put into the selection set
           :nil-selects-all? - (optional) selection set to nil (as opposed to #{}) selects all rows (default: false)
         See the second example.

   Example:

        (table [{:name \"Tom\" :id 12} {:name \"Jerry\" :id 23}]
               :columns {:name \"Hero name\"})

   Result:
  
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
              :checkboxes {:selection     app-state
                           :path          [:selected-heroes]
                           :row-id        :id}
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
        {selection :selection selection-path :path row-id-fn :row-id nil-selects-all? :nil-selects-all? :or {row-id-fn (comp first vals)}} checkboxes
        selected (when selection (or (binding/get-in selection selection-path) #{})) ; selection-path may be nil
        select-all (when selection (and nil-selects-all? (nil? (binding/get-in selection selection-path))))]
    [:table attrs
     [:thead
      [:tr
       (concat
        (when checkboxes
          (let [all-values (map row-id-fn rows)]
            (list
             (let []
               [:th (simple-checkbox (or select-all (all-selected? selected all-values))
                                     :on-click (fn [checked]
                                                 (binding/swap! selection selection-path
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
            (let [value (row-id-fn row)
                  all-values (map row-id-fn rows)]
              [[:td (simple-checkbox (or select-all (selected value))
                                     :on-click (fn [checked]
                                                 (binding/swap! selection selection-path
                                                                (fn [prev-selected]
                                                                  (cond
                                                                    select-all (disj (into #{} all-values) value)
                                                                    checked (conj (or prev-selected #{}) value)
                                                                    :else (disj (or prev-selected #{}) value))))))]]))
          (for [col col-keys]
            [:td (xf col (row col))]))])]]))
