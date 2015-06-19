;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns om-forms.validation
  "Validation functionality. TODO"
  (:require [om-forms.core :as f]
            [om.core :as om :include-macros true]
            [clojure.string :as str])
  (:refer-clojure :exclude [time]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defn find-validation-error
  [kork errors]
  (when (not-empty errors)
    (->>
      errors
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

(def ^:dynamic *validation-errors* nil)

(defn validating-field
  [field-fn & args]
  (assert (not-any? #{:validation-error-fn} args) "The validating version uses :validation-error-fn internally.")
  (apply field-fn (conj (vec args)
                        :valid? (fn [korks] (valid? korks *validation-errors*))
                        :validation-error-fn (fn [korks] (when-let [err (find-validation-error korks *validation-errors*)]
                                                           (:error-message err))))))

(defn validating-fields-fn
  "Used by [om-forms.validation/validating-fields] macro."
  [validation-errors & fields]
  (binding [*validation-errors* validation-errors]
    (doall
      (for [field fields]
        (field)))))

(defn validation-error
  "Returns a validation error for a key sequence.

   Arguments:

   - korks         - key sequence the error refers to
   - error-message - string containing the error message"
  [korks error-message]
  {:korks         (into #{} (seq korks))
   :error-message error-message})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Stateless methods

(defn validate
  "Validates a cursor and returns a list of errors.

   Arguments:

   - cursor     - data
   - validators - seq of validators to use"
  [cursor & validators]
  (-> (keep #(% cursor) validators)
      flatten
      distinct
      doall))

(defn valid?
  "Returns true if there are no errors.

   Arguments:

   - errors - result of validation
   - kork   - (optional) match against this key seq"
  ([errors]
   (or (nil? errors) (empty? errors)))
  ([kork errors]
   (nil? (find-validation-error kork errors))))

(def invalid?
  "Complement of [[valid?]]"
  (complement valid?))

(defn render-errors
  "Renders errors as unordered list.

   Arguments:

   - errors - results of validation"
  [errors]
  [:ul {:class (str "error validation" (when (seq errors) " validation-failed"))}
   (for [failure errors]
     [:li (:error-message failure)])])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Validators

(defn equal
  "Equality validator.

   Example:

       (equal [:user :password1] [:user :password2] \"Passwords do not match\"]"
  [korks1 korks2 error-message]
  (fn [cursor]
    (let [lhs (or (get-in cursor korks1) "")
          rhs (or (get-in cursor korks2) "")]
      (when-not (= lhs rhs)
        (validation-error [korks2]                          ; Show error only next to the second control.
                          error-message)))))

(defn present
  "Presence validator.

  Example:

      (present [:user :login] \"Enter the login\"]"
  [korks error-message]
  (fn [cursor]
    (let [x (get-in cursor korks)]
      (when-not (present? x)
        (validation-error [korks] error-message)))))

(defn matches
  "Regex validator.

  Example:

      (matches [:user :email] #\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\" \"Invalid email address\"]"
  [korks re error-message]
  (fn [cursor]
    (let [x (get-in cursor korks)]
      (when-not (re-matches re x)
        (validation-error [korks] error-message)))))

(defn is-true
  "Predicate-based validator.

  Example:

     (is-true [:user :email] #(nil? (find-by-email %)) \"Email already exists\"]"

  [korks f error-message]
  (fn [cursor]
    (when-not (f cursor)
      (validation-error [korks] error-message))))

(defn force-error
  "Generates an error. Useful for errors not coming from data but from external sources such as Ajax or RPC.

   Example:

       (force-error [:server-error] \"Problem connecting to the REST API server\")"
  [korks error-message]
  (fn [_]
    (validation-error [korks] error-message)))

(defn no-error
  "Generates a 'no error' placeholder."
  []
  (fn [_]
    nil))

(defn all
  "Groups validators using 'and' boolean logic."
  [& validators]
  (fn [cursor]
    (apply validate cursor validators)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Stateful methods

(defn validate!
  "Validates data and saves the result. **A stateful method.**

   Arguments:

   - cursor          - the data to validate
   - ui-state-cursor - this is where validation result will be stored
   - validators      - a seq of validators"
  [cursor ui-state-cursor & validators]
  (let [validation-errors (apply validate @cursor validators)]
    (om/update! ui-state-cursor [:validation-errors] validation-errors)
    (valid? validation-errors)))

(defn validation-errors
  "Returns validation errors saved by [[validate!]] into ui-state-cursor."
  [ui-state-cursor]
  (get-in ui-state-cursor [:validation-errors]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Form helpers

(defn html5-input
  "Wrapper for [[om-forms.core/html5-input]] adding support for validation."
  [& args]
  (apply validating-field f/html5-input args))

(defn password
  "Wrapper for [[om-forms.core/password]] adding support for validation."
  [& args]
  (apply validating-field f/password args))

(defn text
  "Wrapper for [[om-forms.core/text]] adding support for validation."
  [& args]
  (apply validating-field f/text args))

(defn textarea
  "Wrapper for [[om-forms.core/textarea]] adding support for validation."
  [& args]
  (apply validating-field f/textarea args))

(defn checkbox
  "Wrapper for [[om-forms.core/checkbox]] adding support for validation."
  [& args]
  (apply validating-field f/checkbox args))

(defn select
  "Wrapper for [[om-forms.core/select]] adding support for validation."
  [& args]
  (apply validating-field f/select args))

(defn button
  "Wrapper for [[om-forms.core/button]] adding support for validation."
  [& args]
  (apply validating-field f/button args))

(defn button-primary
  "Wrapper for [[om-forms.core/button-primary]] adding support for validation."
  [& args]
  (apply validating-field f/button-primary args))

(defn button-default
  "Wrapper for [[om-forms.core/button-default]] adding support for validation."
  [& args]
  (apply validating-field f/button-default args))

(defn datetime
  "Wrapper for [[om-forms.core/datetime]] adding support for validation."
  [& args]
  (apply validating-field f/datetime args))

(defn datetime-local
  "Wrapper for [[om-forms.core/datetime-local]] adding support for validation."
  [& args]
  (apply validating-field f/datetime-local args))

(defn date
  "Wrapper for [[om-forms.core/date]] adding support for validation."
  [& args]
  (apply validating-field f/date args))

(defn month
  "Wrapper for [[om-forms.core/month]] adding support for validation."
  [& args]
  (apply validating-field f/month args))

(defn time
  "Wrapper for [[om-forms.core/time]] adding support for validation."
  [& args]
  (apply validating-field f/time args))

(defn week
  "Wrapper for [[om-forms.core/week]] adding support for validation."
  [& args]
  (apply validating-field f/week args))

(defn number
  "Wrapper for [[om-forms.core/number]] adding support for validation."
  [& args]
  (apply validating-field f/number args))

(defn email
  "Wrapper for [[om-forms.core/email]] adding support for validation."
  [& args]
  (apply validating-field f/email args))

(defn url
  "Wrapper for [[om-forms.core/url]] adding support for validation."
  [& args]
  (apply validating-field f/url args))

(defn search
  "Wrapper for [[om-forms.core/search]] adding support for validation."
  [& args]
  (apply validating-field f/search args))

(defn tel
  "Wrapper for [[om-forms.core/tel]] adding support for validation."
  [& args]
  (apply validating-field f/tel args))

(defn color
  "Wrapper for [[om-forms.core/color]] adding support for validation."
  [& args]
  (apply validating-field f/color args))

(defn error-alert
  "Renders errors for specified key seqs.

  Example:

      (render-errors [:user :name] [:my-custom-error])"
  [& korks]
  (render-errors (keep (fn [kork]
                         (when-let [err (find-validation-error kork *validation-errors*)]
                           err)) korks)))
