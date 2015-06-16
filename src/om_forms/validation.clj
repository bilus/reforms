(ns om-forms.validation)

(defmacro validating-fields
          [validation-errors & body]
          (let [funs (map (fn validating-fields-fn [b]
                            `(cljs.core/fn [] (~@b))) body)]
            `(om-forms.validation/validating-fields-fn ~validation-errors ~@funs)))
