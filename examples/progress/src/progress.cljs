(ns examples.progress
  (:require [reforms.core :as f :include-macros true]
            [om.core :include-macros true :as om]
            [examples.shared.utils :as utils]
            [sablono.core :refer-macros [html]]
            [cljs.core.async :refer [<! timeout]]
            [reforms.validation :include-macros true :as v])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def app-state (atom {:data {}}))

(defn simulate-long-operation!
  [operation data success]
  (go
    (om/update! data [:progress] operation)
    (<! (timeout 2000))
    (om/update! data [:progress] nil)
    (if success
      (v/validate! data data (v/no-error))
      (v/validate! data data (v/force-error [:operation-failed] "The operation has failed.")))))

(defn start-succeed!
  [operation data]
  (simulate-long-operation! operation data true))

(defn start-fail!
  [operation data]
  (simulate-long-operation! operation data false))

(defn simple-view
  [data _owner]
  (om/component
    (html
      (f/panel
        "Progress"
        (v/form
          data
          (v/text "Your name" "Type your name here" data [:name])
          (v/error-alert [:operation-failed])
          (f/form-buttons
            (v/button-primary "Successful operation" #(start-succeed! :op1 data)
                              :in-progress (= :op1 (:progress data)) :disabled (:progress data))
            (v/button-default "Failing operation" #(start-fail! :op2 data)
                              :in-progress (= :op2 (:progress data)) :disabled (:progress data))))))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         [:br]
         [:br]
         (om/build simple-view (:data app-state))
         (om/build utils/inspector-view app-state)]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})

