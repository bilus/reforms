(ns om-forms.core)

(defmacro with-options
  [options & body]
  `(binding [om-forms.core/*options* (cljs.core/merge om-forms.core/*options* ~options)]
     ~@body))