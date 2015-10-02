(ns examples.shared.utils
  (:require [cljs.pprint :as pprint]))

(defn inspect
      [data]
      (with-out-str (pprint/pprint data)))

(defn inspector-view
      [data & [path]]
      [:pre.inspector {:key "inspector-view"}
       (inspect (get-in @data path))])
