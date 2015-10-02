(ns examples.hello-world
  (:require [reforms.om :include-macros true :as f]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]
            #_[clojure.browser.repl :as repl]))

;(enable-console-print!)

;(defonce conn
;         (do
;           (println "Connecting.")
;           (repl/connect "http://localhost:9000/repl")))

(def app-state (atom {:data {:orientation-horizontal false}}))

(defn simple-view
  [data _owner]
  (om/component
    (html
      (f/with-options {:form {:horizontal (:orientation-horizontal data)}}
                      (f/panel
                        "Hello, world"
                        (f/form
                          {:on-submit #(js/alert "Submitted")}
                          (f/text "Your name" data [:name] :placeholder "Type your name here")
                          (f/form-buttons
                            (f/button-primary "Submit" #(js/alert (:name @data)))
                            (f/button-default "Cancel" #(js/alert "Cancel!")))
                          (f/checkbox "Horizontal form" data [:orientation-horizontal])))))))

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

