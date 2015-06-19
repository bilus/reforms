;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns om-forms.core
  "Core controls and helpers. TODO"
  (:require [om.core :as om :include-macros true]
            [om-forms.core.impl :as impl]
            [om-forms.core.options :refer [get-option]])
  (:refer-clojure :exclude [time]))

(defn panel
  "A panel. See http://getbootstrap.com/components/#panels

   Arguments:

   [attrs] title [:close <lambda>] element1 ... element2

    - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
    - title - panel title; a string or Hiccup/Sablono style template
    - :close - (optional) lambda to call when panel is closed; when the option is set, the panel shows a close icon (FontAwesome by default)
    - contents - (optional) the contained elements

   Examples:

       (panel \"A simple panel\"
           [:div \"Contents go here\"])
       (panel {:class \"my-special-panel\"} \"My special panel\" :close #(js/alert \"closed\")
           [:div \"Contents go here\"])"
  [& args]
  (let [[attrs [title & rest-args]] (impl/resolve-args :panel {:class "panel panel-default"} args)
        [{:keys [close]} & contents] (impl/parse-options rest-args)]
    [:div attrs
     [:div {:class "panel-heading"}
      [:h3 {:class "panel-title"} title]
      (when close
        [:div {:class "actions pull-right"}
         [:i {:class   (get-option [:panel :icon-close])
              :onClick close}]])]
     [:div {:class "panel-body"}
      (seq contents)]]))

(defn form
  "A form. See http://getbootstrap.com/css/#forms

   Arguments:

   [attrs] element1 ... element2

   - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - contents - (optional) the contained elements

   Examples:

       (form [:div \"Contents go here\"])
       (form {:style {:background-color \"red\"}} [:div \"Contents go here\"])"
  [& args]
  (let [[attrs & elems] (impl/resolve-args :form
                                      {:on-submit #(.preventDefault %)
                                       :class     (when (impl/form-horizontal?) "form-horizontal")}
                                      args)]
    [:form attrs elems]))

(defn group-title
  "A title for a logical group of controls.

   Arguments:

   [attrs] title [:tag <tag-name>]

   - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - title - the title; a string or Hiccup/Sablono style template
   - tag   - (optional) name of the tag to use, e.g. :h4"
  [& args]
  (let [[attrs [title & {:keys [tag]}]] (impl/resolve-args :group-title {:class "group-title"} args)]
    [(or tag (get-option [:group-title :tag]))
     attrs
     title]))

(defn html5-input
  "An HTML5-compatible input. Used internally to implement most input types.

   Arguments:

   type [attrs] label placeholder cursor korks
   [:valid? <bool> validation-error-fn <lambda> in-progress <bool> warn-fn <bool> help <string> inline <bool> large <bool>]}

   - type                  - input type
   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - :inline               - (optional) if true renders the control inline
   - :valid?               - (optional) if false shows a validation error; internal
   - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal"
  [type & args]
  (let [[attrs [label placeholder cursor korks & opts]] (impl/resolve-args type {} args)]
    (apply impl/html5-input* attrs label placeholder cursor korks (name type) opts)))



(defn text
  "Text input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :text args))

(defn password
  "Password input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :password args))


(defn form-buttons
  "Auto-aligning form buttons.

   Arguments:

   button-1 ... button-n"
  [& buttons]
  (apply impl/unlabeled-control false buttons))

(defn button
  "Button. See http://getbootstrap.com/css/#buttons

   Arguments:

   [attrs] label on-click [:in-progress <bool> :disabled <bool]

   - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label        - button label; a string or Hiccup/Sablono style template
   - on-click     - lambda to handle clicks
   - :in-progress - true to show an indicator that a background action is in progress and disable the button
   - :disabled    - true to disable the button"
  [& args]
  (let [[attrs [label on-click & {:keys [in-progress disabled]}]] (impl/resolve-args :button
                                                                                {:type  "button"
                                                                                 :class "btn"}
                                                                                args)]
    [:button
     (merge {:disabled disabled
             :on-click #(when-not disabled
                         (on-click))}
            attrs)
     label
     (when in-progress
       (list " "
             (impl/spinner)))]))

(defn button-primary
  "Primary button. See http://getbootstrap.com/css/#buttons

   Arguments:

   See `button`."
  [& args]
  (let [[attrs [& rest-args]] (impl/resolve-args :button-primary {:class "btn-primary"} args)]
    (apply button attrs rest-args)))

(defn button-default
  "Default button. See http://getbootstrap.com/css/#buttons

   Arguments:

   See `button`."
  [& args]
  (let [[attrs [& rest-args]] (impl/resolve-args :button-default {:class "btn-default"} args)]
    (apply button attrs rest-args)))

(defn button-group
  "Button group.

   Arguments:

   [attrs] button-1 ... button-n

   - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)"
  [& args]
  (let [[attrs [& buttons]] (impl/resolve-args :button-group {:class "button-group"} args)]
    [:div attrs (seq buttons)]))

(defn checkbox
  "Checkbox. See http://getbootstrap.com/css/#checkboxes-and-radios

  Arguments:

  [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - :inline               - (optional) if true renders the control inline
   - :valid?               - (optional) if false shows a validation error; internal
   - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal"
  [& args]
  (let [[attrs [label cursor korks & {:keys [valid? validation-error-fn inline]}]] (impl/resolve-args :checkbox {} args)
        dom-id (impl/gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (list
      (impl/unlabeled-control
        inline
        [:div {:class (str "checkbox" (when-not valid " has-error") (when inline " checkbox-inline"))}
         [:label
          [:input
           (impl/merge-attrs {:on-change #(do
                                      (om/update! cursor korks (.. % -target -checked)))
                         :checked   (get-in cursor korks)
                         :type      "checkbox"
                         :id        dom-id}
                        attrs
                        {})]
          label]]
        (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
          (impl/error-label validation-error))))))

(defn radio                                                 ;; TODO: Extract common method for `radio` and `checkbox`.
  "Radio button. See http://getbootstrap.com/css/#checkboxes-and-radios

   Arguments:

   [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - :inline               - (optional) if true renders the control inline
   - :valid?               - (optional) if false shows a validation error; internal
   - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal"
  [& args]
  (let [[attrs [label cursor korks value & {:keys [valid? validation-error-fn inline]}]] (impl/resolve-args :radio {} args)
        dom-id (impl/gen-dom-id cursor korks)
        valid (or (nil? valid?) (valid? korks))]
    (list
      (impl/unlabeled-control
        inline
        [:div {:class (str "radio" (when-not valid " has-error") (when inline " radio-inline"))}
         [:label
          [:input
           (impl/merge-attrs {:on-change #(when (.. % -target -checked)
                                      (om/update! cursor korks value))
                         :checked   (= value (get-in cursor korks))
                         :type      "radio"
                         :id        dom-id
                         :name      dom-id
                         :value     value}
                        attrs
                        {})]
          label]]
        (when-let [validation-error (and validation-error-fn (validation-error-fn korks))]
          (impl/error-label validation-error))))))


(defn textarea
  "Textarea element. See http://getbootstrap.com/css/#textarea

   Arguments:

   [attrs] label placeholder cursor korks [opts]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - placeholder           - placeholder text shown if there is no value
   - cursor, korks         - data to bind to
   - opts                  - see [[html5-input]]


   Examples:

       (f/textarea \"Textarea\" \"A placeholder\" data [:some-text])
       (f/textarea {:rows 8} \"Textarea\" \"A placeholder\" data [:some-text] :inline true)"
  [& args]
  (let [[attrs [label placeholder cursor korks & opts]] (impl/resolve-args :textarea {:class "form-control"} args)
        dom-id (impl/gen-dom-id cursor korks)
        textarea-attrs (impl/merge-attrs {:class       "form-control"
                                     :id          dom-id
                                     :placeholder placeholder}
                                    attrs
                                    {:on-input #(om/update! cursor korks (.. % -target -value))})]
    (impl/input* :textarea textarea-attrs label cursor korks opts (or (get-in cursor korks) ""))))


(defn select
  "Select element. See http://getbootstrap.com/css/#selects

   Arguments:

   [attrs] label cursor korks options [:on-change <lambda>]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
   - label                 - the label; a string or Hiccup/Sablono style template
   - cursor, korks         - data to bind to
   - options               - a vector containing options and their labels (see examples below)
   - :on-change            - (optional) lambda to call on selection


   Examples:

       (f/select \"Select\" data [:select]
           [[:option1 \"Option 1\"] [:option2 \"Option 2\"] [:option3 \"Option 3\"]])
       (f/select {:class \"my-special-selector\"} \"Select\" data [:select]
           :on-change #(js/alert @data)
           [[:option1 \"Option 1\"] [:option2 \"Option 2\"] [:option3 \"Option 3\"]])"
  [& args]
  (let [[attrs [label cursor korks options & {:keys [on-change] :as opts}]] (impl/resolve-args :select {:class "form-control"} args)
        dom-id (impl/gen-dom-id cursor korks)
        selected-val (get-in cursor korks)
        input-attrs (impl/merge-attrs {} attrs {:value     (str selected-val)
                                           :on-change (fn [dom-event]
                                                        (om/update! cursor
                                                                    korks
                                                                    (impl/unstr-option (.. dom-event -target -value) options))
                                                        (when on-change
                                                          (on-change)))
                                           :id        dom-id})]
    (apply impl/input* :select input-attrs label cursor korks opts
           (map #(vector :option {:value (str (first %))} (second %)) options))))

(defn datetime
  "Datetime input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :datetime args))

(defn datetime-local
  "Datetime-local input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :datetime-local args))

(defn date
  "Date input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :date args))

(defn month
  "Month input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :month args))

(defn time
  "Time input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :time args))

(defn week
  "Week input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :week args))

(defn number
  "Number input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :number args))

(defn email
  "Email input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :email args))

(defn url
  "Url input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :url args))

(defn search
  "Search input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :search args))

(defn tel
  "Tel input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :tel args))

(defn color
  "Color input. See http://getbootstrap.com/css/#inputs

   Arguments:

   See [[html5-input]]

   **Important:** May be unsupported by some popular browsers.
   For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp"
  [& args]
  (apply html5-input :color args))

(defn spinner
  "A spinner.

   Arguments:

   [attrs]

   - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)"
  [& args]
  (apply impl/spinner args))

