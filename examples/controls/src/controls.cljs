(ns examples.controls
  (:require [reforms.core :as f :include-macros true]
            [reforms.binding.om]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]
            [examples.shared.utils :refer [inspector-view]]))

(def app-state (atom {:data {:color "#c26b66"}}))

(defn simple-view
  [data _owner]
  (om/component
    (html
      (f/with-options {:form {:horizontal false}}
                      [:div
                       [:h1 "Supported controls"]
                       (f/panel
                         "Panel"
                         [:div "Contents 1"]
                         [:div "Contents 2"]
                         [:div "Contents 3"])
                       (f/form
                         {:on-submit #(js/alert "Submitted")}
                         (f/text "Text" "A placeholder" data [:text])
                         (f/password "Password" "A placeholder" data [:password])
                         (f/textarea {:rows 8} "Textarea" "A placeholder" data [:textarea])
                         (f/select "Select" data [:select]
                                   [[:option1 "Option 1"] [:option2 "Option 2"] [:option3 "Option 3"] [:option4 "Option 4"]])
                         (f/button "Button" #(js/alert "Click"))
                         (f/button-primary "Primary button" #(js/alert "Click"))
                         (f/button-default "Default button" #(js/alert "Click"))
                         (f/checkbox "Checkbox" data [:checkbox])
                         (f/radio "Radio" data [:radio])
                         ;datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
                         (f/datetime-local "Datetime local" "A placeholder" data [:datetime-local])
                         (f/date "Date" "A placeholder" data [:date])
                         (f/month "Month" "A placeholder" data [:month])
                         (f/time "Time" "A placeholder" data [:time])
                         (f/week "Week" "A placeholder" data [:week])
                         (f/number "Number" "A placeholder" data [:number])
                         (f/email "Email" "A placeholder" data [:email])
                         (f/url "Url" "A placeholder" data [:url])
                         (f/search "Search" "A placeholder" data [:search])
                         (f/tel "Tel" "A placeholder" data [:tel])
                         (f/color "Color" "A placeholder" data [:color]))]))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         (om/build simple-view (:data app-state))
         (om/build inspector-view app-state)]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})

