(ns examples.shared.utils
  (:require [cljs.pprint :as pprint]
            [om.core :as om]
            [sablono.core :refer-macros [html]]))

(defn inspect
  [data]
  (with-out-str (pprint/pprint data)))

(defn inspector-view
  [data _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:pre.inspector
         (inspect data)]))))