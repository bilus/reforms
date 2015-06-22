(ns examples.hello-world
  (:require [reforms.reagent :include-macros true :as f]
            [reagent.core :refer [atom render-component]]
            [examples.shared.utils :refer [inspector-view]]))

(defn simple-view
      [data]
      (let [horizontal-orientation (atom false)]
           (fn []
               (f/with-options {:form {:horizontal @horizontal-orientation}}
                               (f/panel
                                 "Hello, world"
                                 ;[inspector-view horizontal-orientation]
                                 (f/form
                                   {:on-submit #(js/alert "Submitted")}
                                   (f/text "Your name" "Type your name here" data [:name])
                                   (f/form-buttons
                                     (f/button-primary "Submit" #(js/alert (:name @data)))
                                     (f/button-default "Cancel" #(js/alert "Cancel!")))
                                   (f/checkbox "Horizontal form" horizontal-orientation [])))))))

(def app-state (atom {:name "John"}))

(defn main-view
      []
      [:div
       [simple-view app-state]
       [inspector-view app-state]])

(render-component
  [main-view]
  (. js/document (getElementById "app")))

