(ns progress.hello-world
  (:require [reforms.core :as f :include-macros true]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def app-state (atom {:data {}}))

(defn simple-view
  [data _owner]
  (om/component
    (html
      (f/panel
        "Progress"
        (f/form
          (f/text "Your name" "Type your name here" data [:name])
          (f/form-buttons
            (f/button-primary "Successful operation" #(js/alert (:name @data)))
            (f/button-default "Failing operation" #(js/alert "Cancel!")))
          (f/checkbox "Horizontal form" data [:orientation-horizontal]))))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         [:br]
         [:br]
         (om/build simple-view (:data app-state))]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})

