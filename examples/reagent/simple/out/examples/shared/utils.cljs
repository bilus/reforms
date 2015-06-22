(ns examples.shared.utils
  (:require [cljs.pprint :as pprint]))

(defn inspect
      [data]
      (with-out-str (pprint/pprint data)))

(defn inspector-view
      [data]
      [:pre.inspector {:key "inspector-view"}
       (inspect @data)])