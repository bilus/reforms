;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core.import
  (:require [cljs.analyzer.api :as ana-api]))

(defmacro import-vars [[_quote ns]]
  `(do
     ~@(->>
         (ana-api/ns-interns ns)
         (remove (comp :macro second))
         (map (fn [[k# _]]
                `(def ~(symbol k#) ~(symbol (name ns) (name k#))))))))
