(ns examples.controls
  (:require [reforms.om :as f :include-macros true]
            [reforms.table :as t]
            [reforms.validation :as v]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]
            [examples.shared.utils :refer [inspector-view]]))

(enable-console-print!)

(def app-state (atom {:data
                      {:color "#c26b66"
                       :selected nil
                       :login {}}}))

(defn simple-view
  [data _owner]
  
  (reify
    om/IRender
    (render [_]
      (html
       [:div
        [:h1 {:key "h1"} "Supported controls"]
        [:div.row
         [:div.col.col-md-6
          [:h4 "Panel"]
          (f/panel
           "Panel title"
           [:div "Contents 1"]
           [:div "Contents 2"]
           [:div "Contents 3"])

          [:h4 "Auto-aligning form with validation"]
          (f/with-options
            {:form {:horizontal (get-in data [:login :horizontal])}}
            (f/form
             {:on-submit #(js/alert "Logging in")}
             (f/text "Username" data [:login :username] :placeholder "Type your login here")
             (f/password "Password" data [:login :password] :placeholder "Type your password")
             (f/checkbox "Remember password" data [:login :remember])
             (f/button-group
              (f/button "Login" #(js/alert "Click!")))))
          (f/checkbox "Horizontal orientation" data [:login :horizontal])
          (om/build inspector-view (:login data))
          
          [:h4 "Table"]
          (t/table [{:name "Tom" :id 1} {:name "Jerry" :id 2} {:name "Mickey" :id 3} {:name "Minnie" :id 4}]
                   :columns {:name "Hero name"})

          [:h4 "Styled table"]
          [:div "See "
           [:a {:href "http://getbootstrap.com/css/#tables"
                :target "_blank"}
            "Bootstrap tables"]]
          (t/table {:key "styled-table" :class "table-striped table-bordered"}
                   [{:name "Tom" :id 1} {:name "Jerry" :id 2} {:name "Mickey" :id 3} {:name "Minnie" :id 4}]
                   :columns {:name "Hero name"})

          [:h4 "Table with row selection"]
          (t/table [{:name "Tom" :id 1} {:name "Jerry" :id 2} {:name "Mickey" :id 3} {:name "Minnie" :id 4}]
                   :columns {:name "Hero name"}
                   :checkboxes {:selection data
                                :path      [:selected]
                                :row-id    :id})
          [:div "Selection:"]
          (om/build inspector-view (:selected data))]
         
         [:div.col.col-md-6
          [:h4 "Buttons"]
          (f/button "Button" #(js/alert "Click"))
          (f/button-primary "Primary button" #(js/alert "Click"))
          (f/button-default "Default button" #(js/alert "Click"))
          
          [:h4 "Controls with automatic labels"]
          (f/text "Text" data [:text] :placeholder "A placeholder")
          (f/password "Password" data [:password] :placeholder "A placeholder")
          (f/textarea {:rows 8} "Textarea" data [:textarea] :placeholder "A placeholder")
          (f/select "Select" data [:select]
                    [[:option1 "Option 1"] [:option2 "Option 2"] [:option3 "Option 3"] [:option4 "Option 4"]])
          (f/checkbox "Checkbox" data [:checkbox])
          (f/radio "Radio" data [:radio])
                                        ;datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
          (f/datetime-local "Date-time local" data [:datetime-local] :placeholder "A placeholder")
          (f/date "Date" data [:date] :placeholder "A placeholder")
          (f/month "Month" data [:month] :placeholder "A placeholder")
          (f/time "Time" data [:time] :placeholder "A placeholder")
          (f/week "Week" data [:week] :placeholder "A placeholder")
          (f/number "Number" data [:number] :placeholder "A placeholder")
          (f/email "Email" data [:email] :placeholder "A placeholder")
          (f/url "Url" data [:url] :placeholder "A placeholder")
          (f/search "Search" data [:search] :placeholder "A placeholder")
          (f/tel "Tel" data [:tel] :placeholder "A placeholder")
          (f/color "Color" data [:color] :placeholder "A placeholder")]]]))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         (om/build simple-view (:data app-state))
         [:div
          [:div "Data"]
          (om/build inspector-view app-state)]]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})

