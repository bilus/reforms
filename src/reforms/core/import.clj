(ns reforms.core.import
  (:require [cljs.analyzer.api :as ana-api]))

(defmacro import-vars [[_quote ns]]
  `(do
     ~@(->>
         (ana-api/ns-interns ns)
         (remove (comp :macro second))
         (map (fn [[k# _]]
                `(def ~(symbol k#) ~(symbol (name ns) (name k#))))))))
