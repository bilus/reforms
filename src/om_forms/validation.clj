;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns om-forms.validation)

(defmacro validating-fields
  "Low-level macro to wrap validating fields. Normally you'll use the [[om-forms.validation/form]] macro.

   Example:

       (let [errors (validation-errors ui-state)]
           (form
              (validating-fields
                 errors
                 (text ...)
                 (text ...))))"
  [validation-errors & body]
  (let [funs (map (fn validating-fields-fn [b]
                    `(cljs.core/fn [] (~@b)))
                  body)]
    `(om-forms.validation/validating-fields-fn ~validation-errors ~@funs)))

(defn parse-args                                            ;; TODO: Duplicated in om-forms.core; move to .cljc
  [args]
  (if (map? (first args))
    [(first args) (rest args)]
    [{} args]))

(defmacro form
  "Wrapper for [[om-forms.core/form]]. **This is a macro.**"
  [cursor & args]
  (let [[attrs [& elems]] (parse-args args)]
    `(om-forms.core/form
       ~attrs
       (om-forms.validation/validating-fields
         (om-forms.validation/validation-errors ~cursor)
         ~@elems))))

