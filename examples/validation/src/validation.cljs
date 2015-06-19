(ns examples.validation
  (:require [reforms.core :as f :include-macros true]
            [reforms.validation :as v :include-macros true]
            [reforms.binding.om]
            [om.core :as om]
            [sablono.core :refer-macros [html]]
            [clojure.string :as str]
            [examples.shared.utils :refer [inspector-view]]))

(def app-state (atom {:customers []
                      :customer  {:city "New York"}
                      :ui-state  {}}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; 
;;; Custom validator

(defn positive-number?
  [s]
  (pos? (js/parseInt s)))

;(defn positive-number
;  [korks error-message]                                       ;; 1
;  (fn [cursor]                                                ;; 2
;    (when-not (positive-number? (get-in cursor korks))        ;; 3
;      (v/validation-error [korks] error-message))))           ;; 4

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
  (when (apply v/validate! customer ui-state customer-validators)
    (om/transact! customers (fn [xs] (conj xs @customer)))))

(defn force-error!
  [customer ui-state]
  (v/validate!
    customer
    ui-state
    (v/force-error [:server-error] "An error has occurred")))

(defn signup-form-view
  [[customers customer ui-state] _owner]
  (reify
    om/IRender
    (render [_]
      (html
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
                      (f/button-default "Simulate server error" #(force-error! customer ui-state))))))))))

(defn customer-list-view
  [customers _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div.customers
         [:h3 "Customers"]
         (if (not-empty customers)
           [:ul.list-unstyled
            (for [{:keys [first last]} customers]
              [:li (str/join " " [first last])])]
           [:em "No customers."])]))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         [:div.row
          [:div.col-md-4.col-md-offset-2 (om/build signup-form-view [(:customers app-state)
                                                                     (:customer app-state)
                                                                     (:ui-state app-state)])]
          [:div.col-md-4
           (om/build customer-list-view (:customers app-state))]]
         [:div.row
          [:div.col-md-8.col-md-offset-2
           (om/build inspector-view app-state)]]]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})

