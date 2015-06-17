(ns examples.simple
  (:require [om-forms.core :as f :include-macros true]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]
            [examples.shared.utils :refer [inspector-view]]))

(def app-state (atom {:customer {:type :private}}))

(defmulti render-details :type)

(defmethod render-details :private
  [customer]
  (list
    (f/text "First name"
            ""
            customer [:first])
    (f/text "Last name"
            ""
            customer [:last])))

(defmethod render-details :corporate
  [customer]
  (list
    (f/text "Company name"
            ""
            customer [:company-name])
    (f/text "Reg number"
            ""
            customer [:reg-no])
    (f/select "Country" customer [:country]
              [[:us "USA"] [:gb "United Kingdom"] [:pl "Poland"] [:de "Germany"]])))

(defn customer-form-view
  [customer _owner]
  (reify
    om/IRender
    (render [_]
      (html
        (f/with-options
          {:group-title     {:tag :h3}}
          (f/form {:onSubmit #(.preventDefault %)}
                  (f/group-title "Customer")
                  (f/select "Customer type" customer [:type]
                            [[:private "Private"] [:corporate "Corporate"]])
                  (f/group-title "Details")
                  (render-details customer)
                  (f/group-title "Chosen login")
                  (f/text "Login" "Choose your login" customer [:login])
                  (f/password "Password" "Enter your password" customer [:password])
                  (f/form-buttons
                    (f/button "Save" #(js/alert "clicked")))))))))

(defn simple-view
  [customer _owner]
  (om/component
    (html
      (f/form
        {}
        (f/text "Your name" "Type your name here" customer [:name])
        (f/button "Submit" #(js/alert (:name @customer)))))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         [:br]
         [:br]
         (om/build simple-view (:customer app-state))
         #_(om/build customer-form-view (:customer app-state))
         #_(om/build inspector-view app-state)]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})