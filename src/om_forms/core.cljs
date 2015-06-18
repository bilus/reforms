(ns om-forms.core
  (:require [om.core :as om :include-macros true]
            [clojure.string :as str]
            [clojure.set :as set])
  (:refer-clojure :exclude [time])
  (:import [goog.ui IdGenerator]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Defaults

(def ^:dynamic *options* {:form         {:horizontal         false
                                         :label-column-class "col-sm-3"
                                         :input-column-class "col-sm-7"}
                          :spinner      {:attrs {:class "fa fa-clock-o fa-spin"}}
                          :input        {:icon-warning "fa fa-warning"}
                          :panel        {:icon-close "fa fa-times"}
                          :group-title  {:tag :h2}
                          :button-group {:align "text-left"}})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(declare spinner feedback-icon)

(defn form-horizontal?
  []
  (get-in *options* [:form :horizontal]))

(defn gen-dom-id
  ([path]
   (str/join "-" (map name path)))
  ([cursor korks]
   (gen-dom-id (concat (om/path cursor) korks)))
  ([]
   (.getNextUniqueId (.getInstance IdGenerator))))

(defn label-column-class
  []
  (when (form-horizontal?)
    (get-in *options* [:form :label-column-class])))

(defn input-column-class
  []
  (when (form-horizontal?)
    (get-in *options* [:form :input-column-class])))

(defn input-column
  [& elems]
  (if (form-horizontal?)
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
  [:i {:class class}])

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

(defn unlabeled-control
  [inline & xs]
  (if inline
    xs
    [:div.form-group
     (list (when (form-horizontal?)
             [:div {:class (label-column-class)}])
           (input-column xs))]))

(defn labeled-control
  [inline form-group-class label dom-id & xs]
  (if inline
    (list
      [:label {:for   dom-id
               :class "control-label"} label]
      xs)
    [:div.form-group {:class form-group-class
                      :key   dom-id}
     (list
       [:label {:for   dom-id
                :class (str "control-label " (label-column-class))} label]
       (input-column xs))]))

(defn extend-attr
  [& vals]
  (let [result (let [vals' (remove nil? vals)]
                 (if (some #(satisfies? Fn %) vals')
                   (fn [& args] (last (map (fn [f] (apply f args)) vals')))
                   (str/join " " vals')))]
    result))

(defn merge-attrs
  [defaults overrides extensions]
  (as-> overrides $
        (merge defaults $)
        (merge-with extend-attr $ extensions)))

(defn parse-args
  [args]
  (if (map? (first args))
    [(first args) (rest args)]
    [{} args]))

(defn resolve-args
  [name ext-attrs args]
  (let [[attrs rest-args] (parse-args args)]
    [(merge-attrs (get-in *options* [name :attrs])
                  attrs
                  ext-attrs)
     rest-args]))

(defn parse-options
  [args]
  (let [[options [rest-args]] (split-with (comp keyword? first) (partition-all 2 args))]
    [(apply hash-map (mapcat identity options)) (or rest-args [])]))

(defn input*
  [tag attrs label cursor korks {:keys [valid? validation-error-fn in-progress warn-fn help inline large]} & inner]
  (let [dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))
        warning (and warn-fn (warn-fn (get-in cursor korks)))]
    (labeled-control
      inline (str/join " " [(when (or warning in-progress) "has-feedback")
                            (when-not valid "has-error")
                            (when large "form-group-lg")])
      label dom-id
      [tag attrs inner]
      (cond
        in-progress (spinner "form-control-feedback")
        warning (feedback-icon (str (get-in *options* [:input :icon-warning]) " form-control-feedback"))
        :else nil)
      (when warning
        (warning-label warning))
      (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
        (error-label validation-error))
      (when help
        [:p.help-block help]))))

(defn html5-input*
  [attrs label placeholder cursor korks type & opts]
  (let [dom-id (gen-dom-id cursor korks)
        input-attrs (merge-attrs {:type        type
                                  :class       "form-control"
                                  :id          dom-id
                                  :placeholder placeholder}
                                 attrs
                                 {:on-input #(om/update! cursor korks (.. % -target -value))
                                  :value    (get-in cursor korks)})]
    (input* :input input-attrs label cursor korks opts)))

(defn html5-input
  [type & args]
  (let [[attrs [label placeholder cursor korks & opts]] (resolve-args type {} args)]
    (apply html5-input* attrs label placeholder cursor korks (name type) opts)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn panel
  [& args]
  (let [[attrs [title & rest-args]] (resolve-args :panel {:class "panel panel-default"} args)
        [{:keys [close]} [& contents]] (parse-options rest-args)]
    [:div attrs
     [:div {:class "panel-heading"}
      [:h3 {:class "panel-title"} title]
      (when close
        [:div {:class "actions pull-right"}
         [:i {:class   (get-in *options* [:panel :icon-close])
              :onClick close}]])]
     [:div {:class "panel-body"}
      (seq contents)]]))

(defn form
  [& args]
  (let [[attrs & elems] (resolve-args :form
                                      {:on-submit #(.preventDefault %)
                                       :class     (when (form-horizontal?) "form-horizontal")}
                                      args)]
    [:form attrs elems]))

(defn group-title
  [& args]
  (let [[attrs [title & {:keys [tag]}]] (resolve-args :group-title {:class "group-title"} args)]
    [(or tag (get-in *options* [:group-title :tag]))
     attrs
     title]))

(defn text
  [& args]
  (apply html5-input :text args))

(defn password
  [& args]
  (apply html5-input :password args))


(defn form-buttons
  [& buttons]
  [:div.form-group.form-buttons
   (apply unlabeled-control false buttons)])

(defn button
  [& args]
  (let [[attrs [label on-click & {:keys [in-progress disabled]}]] (resolve-args :button
                                                                                {:type  "button"
                                                                                 :class "btn"}
                                                                                args)]
    [:button
     (merge {:disabled disabled
             :on-click #(when-not disabled
                         (on-click))}
            attrs)
     label
     (when in-progress
       (list " "
             (spinner)))]))

(defn button-primary
  [& args]
  (let [[attrs [& rest-args]] (resolve-args :button-primary {:class "btn-primary"} args)]
    (apply button attrs rest-args)))

(defn button-default
  [& args]
  (let [[attrs [& rest-args]] (resolve-args :button-default {:class "btn-default"} args)]
    (apply button attrs rest-args)))

(defn button-group
  [& args]
  (let [[attrs [& buttons]] (resolve-args :button-group {:class "button-group"} args)]
    [:div attrs (seq buttons)]))

(defn checkbox
  [& args]
  (let [[attrs [label cursor korks & {:keys [valid? validation-error-fn inline]}]] (resolve-args :checkbox {} args)
        dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (list
      (unlabeled-control
        inline
        [:div {:class (str "checkbox" (when-not valid " has-error") (when inline " checkbox-inline"))}
         [:label
          [:input
           (merge-attrs {:on-change #(do
                                      (om/update! cursor korks (.. % -target -checked)))
                         :checked   (get-in cursor korks)
                         :type      "checkbox"
                         :id        dom-id}
                        attrs
                        {})]
          label]]
        (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
          (error-label validation-error))))))

(defn radio                                                 ;; TODO: Extract common method for `radio` and `checkbox`.
  [& args]
  (let [[attrs [label cursor korks value & {:keys [valid? validation-error-fn inline]}]] (resolve-args :radio {} args)
        dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (list
      (unlabeled-control
        inline
        [:div {:class (str "radio" (when-not valid " has-error") (when inline " radio-inline"))}
         [:label
          [:input
           (merge-attrs {:on-change #(when (.. % -target -checked)
                                      (om/update! cursor korks value))
                         :checked   (= value (get-in cursor korks))
                         :type      "radio"
                         :id        dom-id
                         :name      dom-id
                         :value     value}
                        attrs
                        {})]
          label]]
        (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
          (error-label validation-error))))))


(defn textarea
  [& args]
  (js/console.log (prn-str args))
  (let [[attrs [label placeholder cursor korks & opts]] (resolve-args :textarea {:class "form-control"} args)
        dom-id (gen-dom-id cursor korks)
        textarea-attrs (merge-attrs {:class       "form-control"
                                     :id          dom-id
                                     :placeholder placeholder}
                                    attrs
                                    {:on-input #(om/update! cursor korks (.. % -target -value))})]
    (input* :textarea textarea-attrs label cursor korks opts (or (get-in cursor korks) ""))))


(defn select
  [& args]
  (let [[attrs [label cursor korks options & {:keys [on-change] :as opts}]] (resolve-args :select {:class "form-control"} args)
        dom-id (gen-dom-id cursor korks)
        selected-val (get-in cursor korks)
        input-attrs (merge-attrs {} attrs {:value     (str selected-val)
                                           :on-change (fn [dom-event]
                                                        (om/update! cursor
                                                                    korks
                                                                    (unstr-option (.. dom-event -target -value) options))
                                                        (when on-change
                                                          (on-change)))
                                           :id        dom-id})]
    (apply input* :select input-attrs label cursor korks opts
           (map #(vector :option {:value (str (first %))} (second %)) options))))

(defn datetime
  [& args]
  (apply html5-input :datetime args))

(defn datetime-local
  [& args]
  (apply html5-input :datetime-local args))

(defn date
  [& args]
  (apply html5-input :date args))

(defn month
  [& args]
  (apply html5-input :month args))

(defn time
  [& args]
  (apply html5-input :time args))

(defn week
  [& args]
  (apply html5-input :week args))

(defn number
  [& args]
  (apply html5-input :number args))

(defn email
  [& args]
  (apply html5-input :email args))

(defn url
  [& args]
  (apply html5-input :url args))

(defn search
  [& args]
  (apply html5-input :search args))

(defn tel
  [& args]
  (apply html5-input :tel args))

(defn color
  [& args]
  (apply html5-input :color args))

(defn spinner
  [& args]
  (let [[attrs] (resolve-args :spinner {} args)]
    [:i attrs]))

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
  (let [[attrs [rows & {:keys [columns checkboxes] :or {columns {}}}]] (resolve-args :table {:class "table"} args)
        labels (into {} columns)
        col-keys (or (not-empty (map first columns))
                     (->> rows
                          (mapcat keys)
                          distinct))
        {sel-cursor :cursor sel-korks :korks value-fn :value :or {value-fn (comp first vals)}} checkboxes
        selected (or (get-in sel-cursor sel-korks) #{})
        select-all (nil? (get-in sel-cursor sel-korks))]
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
