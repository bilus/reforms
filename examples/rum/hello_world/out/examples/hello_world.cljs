(ns examples.hello-world
  (:require [reforms.rum :include-macros true :as f]
            [rum.core :include-macros true :as rum]
            [examples.shared.utils :refer [inspector-view]]))

(def app-state (atom {:name "John"}))

(rum/defc simple-view < rum/cursored rum/cursored-watch [data horizontal-orientation]
  (f/with-options
    {:form {:horizontal @horizontal-orientation}}
    (f/panel
     "Hello, world"
     (f/form
      {:on-submit #(js/alert "Submitted")}
      (f/text "Your name" data [:name] :placeholder "Type your name here")
      (f/form-buttons
       (f/button-primary "Submit" #(js/alert (:name @data)))
       (f/button-default "Cancel" #(js/alert "Cancel!")))
      (f/checkbox "Horizontal form" horizontal-orientation [])))))

(rum/defc main-view []
  [:div
   (simple-view app-state (atom false))
   (inspector-view app-state)])

(rum/mount (main-view) (. js/document (getElementById "app")))
