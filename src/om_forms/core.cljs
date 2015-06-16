(ns om-forms.core
  (:require [om.core :as om :include-macros true]
            [clojure.string :as str]
            [sablono.core :refer-macros [html]]
            [clojure.set :as set])
  (:import [goog.ui IdGenerator]))

(def ^:dynamic *options* {:form-horizontal    false
                          :label-column-class "col-sm-3"
                          :input-column-class "col-sm-7"
                          :group-title        {:tag :h2}})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(declare spinner feedback-icon)

(defn gen-dom-id
  ([path]
   (str/join "-" (map name path)))
  ([cursor korks]
   (gen-dom-id (concat (om/path cursor) korks)))
  ([]
   (.getNextUniqueId (.getInstance IdGenerator))))

(defn label-column-class
  []
  (when (:form-horizontal *options*)
    (:label-column-class *options*)))

(defn input-column-class
  []
  (when (:form-horizontal *options*)
    (:input-column-class *options*)))

(defn input-column
  [& elems]
  (if (:form-horizontal *options*)
    [:div {:class (input-column-class)} elems]
    elems))

(defn unstr-option
  "Convert an option converted to string to be used in <select> tag back to its
   representation as in options. Often a keyword, example:

   <pre><code>(unstr-option \":foo\"
                [:foo \"foobar\" :foo2 \"zoobar\"])
              => :foo
  </code></pre>"
  [s options]
  (let [m (->> options
               (map (fn str->orig [[k _v]] [(str k) k]))
               (into {}))]
    (or (m s) s)))

(defn feedback-icon
  [class]
  (html [:i {:class class}]))

(defn simple-checkbox
  [checked & {:keys [on-click]}]
  [:input {:onChange #(on-click (.. % -target -checked))
           :checked  checked
           :type     "checkbox"}])

(defn all-selected?
  [selected-values all-values]
  (set/subset? (into #{} all-values) selected-values))

(defn error-label
  [error]
  [:label {:class "error"} error])

(defn warning-label
  [warning]
  [:label {:class "warning"} warning])

(defn input
  [label placeholder cursor korks type & {:keys [valid? validation-error-fn in-progress warn-fn help]}]
  (let [dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))
        warning (and warn-fn (warn-fn (get-in cursor korks)))]
    [:div {:class (str "form-group" (when (or warning in-progress) " has-feedback") (when-not valid " has-error"))
           :key   dom-id}
     [:label {:for   dom-id
              :class (str "control-label " (label-column-class))} label]
     (input-column [:input {:onChange    #(do
                                           (om/update! cursor korks (.. % -target -value)))
                            :value       (get-in cursor korks)
                            :type        type
                            :class       "form-control"
                            :id          dom-id
                            :placeholder placeholder}]
                   (cond
                     in-progress (spinner "form-control-feedback")
                     warning (feedback-icon "fa fa-warning form-control-feedback")
                     :else nil)
                   (when warning
                     (warning-label warning))
                   (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
                     (error-label validation-error))
                   (when help
                     [:p.help-block help]))]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn form
  [opts & elems]
  [:form (if (:form-horizontal *options*)
           (merge-with str opts {:class " form-horizontal"})
           opts) elems])

(defn text
  [label placeholder cursor korks & opts]
  (apply input label placeholder cursor korks "text" opts))

(defn password
  [label placeholder cursor korks & opts]
  (apply input label placeholder cursor korks "password" opts))

(defn group-title
  [title & {:keys [class tag]}]
  [(or tag (get-in *options* [:group-title :tag]) :h2) {:class (str "group-title" (when class (str " " class)))} title])

(defn button
  [label on-click & {:keys [in-progress disabled] :as opts}]
  [:button
   (merge {:type     "button"
           :class    "btn"
           :disabled disabled
           :onClick  #(when-not disabled
                       (on-click))}
          opts)
   label
   (when in-progress
     (list " "
           (spinner)))])

(defn button-group
  [& buttons]
  [:div {:class "button-group text-right"} (seq buttons)])

(defn checkbox
  [label cursor korks & {:keys [valid? validation-error-fn inline]}]
  (let [dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (list
      [:div {:class (str "checkbox" (when-not valid " has-error") (when inline " checkbox-inline"))}
       [:label
        [:input {:onChange #(do
                             (om/update! cursor korks (.. % -target -checked)))
                 :checked  (get-in cursor korks)
                 :type     "checkbox"
                 :id       dom-id}]
        label]]
      (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
        (error-label validation-error)))))

(defn radio
  [label cursor korks value & {:keys [valid? validation-error-fn inline]}]
  (let [dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (list
      [:div {:class (str "radio" (when-not valid " has-error") (when inline " radio-inline"))}
       [:label
        [:input {:onChange #(when (.. % -target -checked)
                             (om/update! cursor korks value))
                 :checked  (= value (get-in cursor korks))
                 :type     "radio"
                 :id       dom-id
                 :name     dom-id
                 :value    value}]
        label]]
      (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
        (error-label validation-error)))))

(defn select
  [label cursor korks options & {:keys [large on-change]}]
  (let [selected-val (get-in cursor korks)
        dom-id (gen-dom-id cursor korks)]
    [:div {:class (str "form-group" (when large " form-group-lg"))
           :key   dom-id}
     [:label {:for   dom-id
              :class (str "control-label " (label-column-class))} label]
     (input-column [:select {:class    "form-control"
                             :value    (str selected-val)
                             :onChange (fn [dom-event]
                                         (om/update! cursor
                                                     korks
                                                     (unstr-option (.. dom-event -target -value) options))
                                         (when on-change
                                           (on-change)))
                             :id       dom-id}
                    (map #(vector :option {:value (str (first %))} (second %)) options)])]))

(defn spinner
  [& [class]]
  (html [:i {:class (str "fa fa-clock-o fa-spin" (when class (str " " class)))}]))

(defn panel
  [title {:keys [close]} & contents]
  (html [:div {:class "panel panel-default"}
         [:div {:class "panel-heading"}
          [:h3 {:class "panel-title"} title]
          (when close
            [:div {:class "actions pull-right"}
             [:i {:class   "fa fa-times"
                  :onClick close}]])]
         [:div {:class "panel-body"}
          (seq contents)]]))

(defn navbar-link
  [title click-fn & {:keys [icon-left icon-right]}]
  [:a {:href    "#"
       :onClick click-fn
       :class   "navbar-link"
       :style   {:white-space "nowrap"}}
   (when icon-left
     (list [:span {:class icon-left}]
           " "))
   title
   (when icon-right
     (list " "
           [:span {:class icon-right}]))])

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

  [rows & {:keys [columns class checkboxes] :or {columns {}}}]
  (let [labels (into {} columns)
        col-keys (or (not-empty (map first columns))
                     (->> rows
                          (mapcat keys)
                          distinct))
        {sel-cursor :cursor sel-korks :korks value-fn :value :or {value-fn (comp first vals)}} checkboxes
        selected (or (get-in sel-cursor sel-korks) #{})
        select-all (nil? (get-in sel-cursor sel-korks))]
    [:table.table {:class class}
     [:thead
      [:tr
       (concat
         (when checkboxes
           (let [all-values (map value-fn rows)]
             (list
               (let []
                 [:th (simple-checkbox (or select-all (all-selected? selected all-values))
                                       :on-click (fn [checked]
                                                   (om/transact! sel-cursor sel-korks
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
                                                  (om/transact! sel-cursor sel-korks
                                                                (fn [prev-selected]
                                                                  (cond
                                                                    select-all (disj (into #{} all-values) value)
                                                                    checked (conj (or prev-selected #{}) value)
                                                                    :else (disj (or prev-selected #{}) value))))))]]))
           (for [col col-keys]
             [:td (row col)]))])]]))
