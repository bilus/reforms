(ns om-forms.core)

(defmacro with-options
  [options & body]
  `(binding [om-forms.core/*options*
             (cljs.core/merge-with
               (cljs.core/fn [old# new#]
                 (cljs.core/cond
                   (cljs.core/map? old#) (cljs.core/merge old# new#)
                   :else new#))
               om-forms.core/*options*
               ~options)]
     ~@body))