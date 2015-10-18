(ns examples.progress
  (:require [reforms.rum :include-macros true :as f]
            [reforms.validation :include-macros true :as v]
            [rum.core :as rum]
            [examples.shared.utils :as utils]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def app-state (atom {:name "John"}))

(defn simulate-long-operation!
  [operation data success]
  (go
    (swap! data assoc-in [:progress] operation)
    (<! (timeout 2000))
    (swap! data assoc-in [:progress] nil)
    (if success
      (v/validate! data data (v/no-error))
      (v/validate! data data (v/force-error [:operation-failed] "The operation has failed.")))))

(defn start-succeed!
  [operation data]
  (simulate-long-operation! operation data true))

(defn start-fail!
  [operation data]
  (simulate-long-operation! operation data false))

(rum/defc simple-view < rum/cursored rum/cursored-watch
  [data]
  (f/panel {:key "p"}
           "Progress"
           (v/form
             data
             {:key "f"}
             (v/text "Your name" data [:name] :placeholder "Type your name here")
             (v/error-alert [:operation-failed])
             (f/form-buttons
               (v/button-primary "Successful operation" #(start-succeed! :op1 data)
                                 :in-progress (= :op1 (:progress @data)) :disabled (:progress @data))
               (v/button-default "Failing operation" #(start-fail! :op2 data)
                                 :in-progress (= :op2 (:progress @data)) :disabled (:progress @data))))))

(rum/defc main-view
  []
  [:div
   [:br]
   [:br]
   (simple-view app-state)
   (utils/inspector-view app-state)])

(rum/mount (main-view) (. js/document (getElementById "app")))
