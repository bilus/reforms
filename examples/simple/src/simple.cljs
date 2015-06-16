(ns examples.simple
  (:require [om-forms.core :as f :include-macros true]
            [om.core :as om]
            [sablono.core :refer-macros [html]]))

(def app-state (atom {:customer {:type :private}}))

(defn customer-form-view
  [customer _owner]
  (reify
    om/IRender
    (render [_]
      (html
        (f/with-options
          {:form-horizontal true}
          (f/form {:onSubmit #(.preventDefault %)}
                  (f/group-title "Customer")
                  (f/select "Customer type" customer [:type]
                            [[:corporate "Corporate"] [:private "Private"]]
                            :large true)
                  (f/group-title "Details")
                  (f/text "First name"
                          ""
                          customer [:first])
                  (f/text "Last name"
                          ""
                          customer [:last])
                  (f/group-title "Chosen login")
                  (f/text "Login" "Choose your login" customer [:login])
                  (f/password "Password" "Enter your password" customer [:password])
                  (f/button "Save" #(js/alert "clicked"))))))))

(defn customer-view
  [customer _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         (prn-str customer)]))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
            (html
              [:div
               (om/build customer-form-view (:customer app-state))
               (om/build customer-view (:customer app-state))]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})