(ns om-forms.validation)

(defmacro validating-fields
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
  [cursor & args]
  (let [[attrs [& elems]] (parse-args args)]
    `(om-forms.core/form
       ~attrs
       (om-forms.validation/validating-fields
         (om-forms.validation/validation-errors ~cursor)
         ~@elems))))

