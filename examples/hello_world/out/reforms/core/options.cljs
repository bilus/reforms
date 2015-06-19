;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core.options
  "Configuration options. You can override the defaults using [[set-options!]] or [[with-options]].")

(def ^:dynamic *options*
  "Note that top-level key corresponds to a helper in [[reforms.core]].

  Common for all form helpers:

  - :attrs - specify attributes to be passed to React node; see see https://github.com/r0man/sablono#html-attributes

  Example:

      ;; Set background of every form to red color.
      (set-options! {:form {:attrs {:style {:background-color \"red\"}}}})

  - :form                   - options for [[reforms.core/form]]
      - :horizontal         - set to true for horizontal orientation; see http://getbootstrap.com/css/#forms-horizontal
      - :label-column-class - class for the label column (horizontal orientation only), e.g. \"col-sm-3\"
      - :input-column-class - class for the input column (horizontal orientation only), e.g. \"col-sm-9\"
  - :panel                  - options for [[reforms.core/panel]]
        - :icon-close       - close panel icon
  - :html5-input            - options for [[reforms.core/html5-input]], common for all helpers based on it, e.g. [[reforms.core/text]]
      - :icon-warning       - icon to represent a warning
  - :text                   - options for [[reforms.core/text]]
      Same as for :html-5-input
  - group-title             - options for [[reforms.core/group-title]]
      - :tag                - tag to use, e.g. :h4
  - button-group            - options for [[reforms.core/button-group]]
  - :spinner                - options for [[reforms.core/spinner]].

  ... Each helper is supported - :password, :select, :color etc. see [[reforms.core]] for available form helpers...


  For the defaults, see the source."
  {:form         {:horizontal         false
                  :label-column-class "col-sm-3"
                  :input-column-class "col-sm-7"}
   :panel        {:icon-close "fa fa-times"}
   :html5-input  {:icon-warning "fa fa-warning"}
   :group-title  {:tag :h2}
   :button-group {:align "text-left"}
   :spinner      {:attrs {:class "fa fa-clock-o fa-spin"}}})

(defn merge-options
  ([options]
   (merge-options *options* options))
  ([prev-options new-options]
   (merge-with
     (fn [old new]
       (cond
         (map? old) (merge-options old new)
         :else new))
     prev-options
     new-options)))

(defn get-options
  "See [[reforms.core/get-options]]"
  [ks]
  (get-in *options* ks))

(defn set-options!
  "See [[reforms.core/set-options!]]"
  [options]
  (set! *options* (merge-options options)))