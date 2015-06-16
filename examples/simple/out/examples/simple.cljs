(ns examples.simple
  (:require [om-forms.core :as f :include-macros true]
            [om.core :as om]
            [om.core :as om]
            [sablono.core :refer-macros [html]]))

(def app-state (atom {}))

(defn view
      [data owner]
      (reify
        om/IRender
        (render [_]
                (html
                  [:div "Hello, world"]))))

(om/root
  view
  app-state
  {:target (. js/document (getElementById "app"))})