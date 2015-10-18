(ns examples.shared.utils
  (:require [cljs.pprint :as pprint]
            [rum.core :as rum]))

(defn inspect
      [data]
      (with-out-str (pprint/pprint data)))

(rum/defc inspector-view < rum/cursored rum/cursored-watch
      [data & [path]]
      [:pre.inspector {:key "inspector-view"}
       (inspect (get-in @data path))])
