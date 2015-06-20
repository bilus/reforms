;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core.impl
  (:require [reforms.binding.core :as binding]
            [reforms.core.options :refer [get-options]]
            [clojure.string :as str]
            [clojure.set :as set])
  (:refer-clojure :exclude [time])
  (:import [goog.ui IdGenerator]))

(declare spinner feedback-icon)

(defn form-horizontal?
  []
  (get-options [:form :horizontal]))

(defn gen-dom-id
  ([path]
   (str/join "-" (map name path)))
  ([cursor korks]
   (gen-dom-id (concat (binding/path cursor) korks)))
  ([]
   (.getNextUniqueId (.getInstance IdGenerator))))

(defn label-column-class
  []
  (when (form-horizontal?)
    (get-options [:form :label-column-class])))

(defn input-column-class
  []
  (when (form-horizontal?)
    (get-options [:form :input-column-class])))

(defn input-column
  [& elems]
  (if (form-horizontal?)
    [:div {:class (input-column-class)} elems]
    elems))

(defn unstr-option
  "Converts an option converted to string to be used in <select> tag back to its
   representation as in options (it's often a keyword).

   Example:

   (unstr-option \":foo\"
                [:foo \"foobar\" :foo2 \"zoobar\"]) ;; => :foo"
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

(defn extend-attrs
  [attrs extensions]
  (merge-with (fn [& vals]
                (let [result (let [vals' (remove nil? vals)]
                               (if (some #(satisfies? Fn %) vals')
                                 (fn [& args] (last (map (fn [f] (apply f args)) vals')))
                                 (str/join " " vals')))]
                  result))
              attrs
              extensions))

(defn override-attrs
  [old new]
  (merge-with (fn [old new]
                (cond
                  (map? old) (override-attrs old new)
                  :else new))
              old
              new))


(defn merge-attrs
  [defaults overrides extensions]
  (as-> overrides $
        (override-attrs defaults $)
        (extend-attrs $ extensions)))

(defn parse-args
  [args]
  (if (map? (first args))
    [(first args) (rest args)]
    [{} args]))

(defn resolve-args
  ([ks ext-attrs args]
   (let [[attrs rest-args] (parse-args args)]
     [(merge-attrs
        (->> ks
             (map #(get-options [% :attrs]))
             (reduce (fn [attrs crn-attrs]
                       (merge-attrs attrs crn-attrs {}))))
        attrs
        ext-attrs)
      rest-args])))

(defn parse-options
  [args]
  (let [[options rest-args] (split-with (comp keyword? first) (partition-all 2 args))]
    [(apply hash-map (mapcat identity options)) (mapcat identity (or rest-args []))]))

(defn input*
  [tag attrs label cursor korks {:keys [valid? validation-error-fn in-progress warn-fn help inline large]} & inner]
  (let [dom-id (gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))
        warning (and warn-fn (warn-fn (binding/get-in cursor korks)))]
    (labeled-control
      inline (str/join " " [(when (or warning in-progress) "has-feedback")
                            (when-not valid "has-error")
                            (when large "form-group-lg")])
      label dom-id
      [tag attrs inner]
      (cond
        in-progress (spinner "form-control-feedback")
        warning (feedback-icon (str (get-options [:icon-warning]) " form-control-feedback"))
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
                                 {:on-change #(binding/reset! cursor korks (.. % -target -value))
                                  :value    (binding/get-in cursor korks)})]
    (input* :input input-attrs label cursor korks opts)))

(defn spinner
  "A spinner.

   Arguments:

   [attrs]

   attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)"
  [& args]
  (let [[attrs] (resolve-args [:spinner] {} args)]
    [:i attrs]))