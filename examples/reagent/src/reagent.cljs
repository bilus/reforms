(ns examples.reagent
  (:require [reforms.core :as f :include-macros true]
            [reforms.binding.reagent]
            [reagent.core :refer [atom render-component]]))

(def app-state (atom {:name "John"}))

(defn simple-view
  [data]
  (f/with-options
    {:form {:horizontal (:orientation-horizontal data)}}
    (f/panel
      "Hello, world"
      (f/form
        (f/text "Your name" "Type your name here" data [:name])
        (f/form-buttons
          (f/button-primary "Submit" #(js/alert (:name @data)))
          (f/button-default "Cancel" #(js/alert "Cancel!")))))))

(defn inspector-view
  [app-state]
  [:div.inspector (prn-str @app-state)])

(defn main-view
  []
  [:div
   [simple-view app-state]
   [inspector-view app-state]])

(render-component
  [main-view]
  (. js/document (getElementById "app")))

