(ns examples.validation
  (:require [reforms.reagent :include-macros true :as f]
            [reforms.validation :as v :include-macros true]
            [reagent.core :refer [atom render-component]]
            [examples.shared.utils :refer [inspector-view]]
            [clojure.string :as str]))

(def customers (atom []))
(def customer (atom {:city "New York"}))
(def ui-state (atom {}))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Custom validator

(defn positive-number?
      [s]
      (pos? (js/parseInt s)))

(defn positive-number
      [korks error-message]
      (v/is-true korks positive-number? error-message))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def customer-validators
  [(v/present [:first] "Enter first name")
   (v/present [:last] "Enter last name")
   (positive-number [:age] "Age must be a positive number")
   (v/present [:login] "Enter login name")
   (v/equal [:password1] [:password2] "Passwords do not match")
   (v/present [:password1] "Choose password")
   (v/present [:password2] "Re-enter password")])

(defn sign-up!
      [customers customer ui-state]
      (js/console.log (prn-str customer))
      (when (apply v/validate! customer ui-state customer-validators)
            (swap! customers (fn [xs] (conj xs @customer)))))

(defn force-error!
      [customer ui-state]
      (v/validate!
        customer
        ui-state
        (v/force-error [:server-error] "An error has occurred")))

(defn signup-form-view
      [customers customer ui-state]
      (f/panel
        "Add customer"
        (f/with-options
          {:form-horizontal    true
           :label-column-class "col-md-4"
           :input-column-class "col-md-8"}
          (v/form ui-state
                  {:on-submit #(sign-up! customers customer ui-state)}
                  (v/text "First name" "Enter first name" customer [:first])
                  (v/text "Last name" "Enter last name" customer [:last])
                  (v/text "City" "Where are you?" customer [:city] :warn-fn #(when-not (= "Kansas" %) "We're not in Kansas anymore"))
                  (v/number "Age" "Enter your age" customer [:age])
                  (v/text "Login" "Choose login" customer [:login])
                  (v/password "Password" "Enter password" customer [:password1])
                  (v/password "Confirm password" "Re-enter password" customer [:password2])
                  (v/error-alert [:server-error])
                  (f/form-buttons
                    (f/button-primary "Save" #(sign-up! customers customer ui-state))
                    (f/button-default "Simulate server error" #(force-error! customer ui-state)))))))

(defn customer-list-view
      [customers]
      [:div.customers
       [:h3 "Customers"]
       (if (not-empty @customers)
         [:ul.list-unstyled
          (for [{:keys [first last]} @customers]
               [:li (str/join " " [first last])])]
         [:em "No customers."])])

(defn main-view
      []
      [:div
       [:div.row
        [:div.col-md-4.col-md-offset-2 [signup-form-view customers customer ui-state]]
        [:div.col-md-4
         [customer-list-view customers]]]
       [:div.row
        [:div.col-md-8.col-md-offset-2
         [inspector-view customers]
         [inspector-view customer]
         [inspector-view ui-state]]]])

(render-component
  [main-view]
  (. js/document (getElementById "app")))

