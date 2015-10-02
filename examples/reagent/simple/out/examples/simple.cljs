(ns examples.simple
  (:require [reforms.reagent :include-macros true :as f]
            [reagent.core :refer [atom render-component]]
            [examples.shared.utils :refer [inspector-view]]))

(def customer (atom {:type :private}))

(defmulti render-details (comp :type deref))

(defmethod render-details :private
  [customer]
  (list
    (f/text "First name"
            customer [:first]
            :placeholder "Enter first name")
    (f/text "Last name"
            customer [:last]
            :placeholder "Enter last name")))

(defmethod render-details :corporate
  [customer]
  (list
    (f/text "Company name"
            customer [:company-name])
    (f/text "Reg number"
            customer [:reg-no])
    (f/select "Country" customer [:country]
              [[:us "USA"] [:gb "United Kingdom"] [:pl "Poland"] [:de "Germany"]])))

(defn render-address
  [customer]
  (list
    (f/text "Address"
            customer [:address1]
            :placeholder "Enter address line 1")
    (f/text customer [:address2]
            :placeholder "Enter address line 2")
    (f/text "City"
            customer [:city]
            :placeholder "Enter city name")))

(defn customer-form-view
  [customer]
  (f/form
    (f/group-title {:class "group-title-main"} "Customer info")
    (f/select "Customer type" customer [:type]
              [[:private "Private"] [:corporate "Corporate"]])
    (f/group-title {:class "group-title-minor"} "Details")
    (render-details customer)
    (f/group-title {:class "group-title-minor"} "Address")
    (render-address customer)
    (f/group-title {:class "group-title-main"} "Access credentials")
    (f/text "Login" customer [:login] :placeholder "Enter login")
    (f/password "Password" customer [:password] :placeholder "Enter password")
    (f/form-buttons
      (f/button "Save" #(js/alert "clicked")))))

(defn main-view
  []
  [:div.main-view
   [customer-form-view customer]
   [inspector-view customer]])

;; Styling the form using global configuration options. Probably not such a good idea but good for the demo.
(f/set-options!
  {:form        {:horizontal true
                 :attrs      {:style {:border           "1px solid #BBB"
                                      :border-radius    "5px"
                                      :background-color "#EFEFEF"
                                      :padding          "10px 20px"}}}
   :group-title {:tag   :h3
                 :attrs {:style {:color "#666"}}}})

(render-component
  [main-view]
  (. js/document (getElementById "app")))

