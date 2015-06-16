(ns om-forms.validation
  (:require [om-forms.core :as f]
            [om.core :as om :include-macros true]
            [clojure.string :as str]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defn find-validation-error
  [kork failures]
  (when (not-empty failures)
    (->>
      failures
      (filter #((:korks %) kork))
      first)))

(defn sequable?
  [x]
  (try
    (seq x)
    true
    (catch js/Error _                                       ; Slow.
      false)))

(defn present?
  [x]
  (when (and x
             (not (and (string? x) (str/blank? x)))
             (not (and (sequable? x) (empty? x))))
    true))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Stateless methods

(defn validate
  [cursor & validators]
  (-> (keep #(% cursor) validators)
      flatten
      distinct
      doall))

(defn valid?
  ([errors]
   (or (nil? errors) (empty? errors)))
  ([kork failures]
   (nil? (find-validation-error kork failures))))

(def invalid? (complement valid?))

(defn render-errors
  [errors]
  [:ul {:class (str "error validation" (when (seq errors) " validation-failed"))}
   (for [failure errors]
     [:li (:error-message failure)])])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Validators

(defn validation-error
  [korks error-message]
  {:korks         (into #{} (seq korks))
   :error-message error-message})

(defn equal
  [korks1 korks2 error-message]
  (fn [cursor]
    (let [lhs (or (get-in cursor korks1) "")
          rhs (or (get-in cursor korks2) "")]
      (when-not (= lhs rhs)
        (validation-error [korks2]                          ; Show error only next to the second control.
                          error-message)))))

(defn present
  [korks error-message]
  (fn [cursor]
    (let [x (get-in cursor korks)]
      (when-not (present? x)
        (validation-error [korks] error-message)))))

(defn matches
  [korks re error-message]
  (fn [cursor]
    (let [x (get-in cursor korks)]
      (when-not (re-matches re x)
        (validation-error [korks] error-message)))))

(defn is-true
  [korks f error-message]
  (fn [cursor]
    (when-not (f cursor)
      (validation-error [korks] error-message))))

(defn force-error
  [korks error-message]
  (fn [_]
    (validation-error [korks] error-message)))

(defn no-error
  []
  (fn [_]
    nil))

(defn all
  [& validators]
  (fn [cursor]
    (apply validate cursor validators)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Stateful methods

(defn validate!
  [cursor ui-state-cursor & validators]
  (let [validation-errors (apply validate @cursor validators)]
    (om/update! ui-state-cursor [:validation-errors] validation-errors)
    (valid? validation-errors)))

(defn validation-errors
  [ui-state-cursor]
  (get-in ui-state-cursor [:validation-errors]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Form helpers

(def ^:dynamic *validation-errors* nil)

(defn validating-fields-fn                                 ; See node.validation macro in validation.clj
  [validation-errors & fields]
  (binding [*validation-errors* validation-errors]
    (doall
      (for [field fields]
        (field)))))

(defn validating-field
  [field-fn & args]
  (assert (not-any? #{:validation-error-fn} args) "The validating version uses :validation-error-fn internally.")
  (apply field-fn (conj (vec args)
                        :valid? (fn [korks] (valid? korks *validation-errors*))
                        :validation-error-fn (fn [korks] (when-let [err (find-validation-error korks *validation-errors*)]
                                                           (:error-message err))))))

(defn password
  [& args]
  (apply validating-field f/password args))

(defn text
  [& args]
  (apply validating-field f/text args))

(defn checkbox
  [& args]
  (apply validating-field f/checkbox args))

(defn select
  [& args]
  (apply validating-field f/select args))

(defn button
  [& args]
  (apply validating-field f/button args))

(defn button-primary
  [& args]
  (apply validating-field f/button-primary args))

(defn button-default
  [& args]
  (apply validating-field f/button-default args))

(defn error-alert
  [& korks]
  (render-errors (keep (fn [kork]
                         (when-let [err (find-validation-error kork *validation-errors*)]
                           err)) korks)))
