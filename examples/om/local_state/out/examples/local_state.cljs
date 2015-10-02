;; EXPERIMENTAL.

(ns examples.local-state
  (:require [reforms.om :include-macros true :as f]
            [reforms.binding.om-state]                      ; Enable binding to local state.
            [reforms.validation :as v :include-macros true]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]))

(def app-state (atom {}))

(defn local-state-demo-view
  [_data owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (html
        (f/with-options {:form {:horizontal (:orientation-horizontal state)}}
          (f/panel
            "Binding to local state"
            (v/form
              owner
              {:on-submit #(js/alert "Submitted")}
              (v/text "Your name" owner [:name] :placeholder "Type your name here")
              (f/form-buttons
                (f/button-primary "Submit" #(when (v/validate! owner owner
                                                              (v/present [:name] "Enter your name"))
                                             (js/alert (:name (om/get-state owner)))))
                (f/button-default "Cancel" #(js/alert "Cancel!")))
              (v/checkbox "Horizontal form" owner [:orientation-horizontal]))
            [:pre (:name state)]))))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         [:br]
         [:br]
         (om/build local-state-demo-view (:data app-state))]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})
