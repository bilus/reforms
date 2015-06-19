;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.core.options)

(def ^:dynamic *options* {:form         {:horizontal         false
                                         :label-column-class "col-sm-3"
                                         :input-column-class "col-sm-7"}
                          :spinner      {:attrs {:class "fa fa-clock-o fa-spin"}}
                          :input        {:icon-warning "fa fa-warning"}
                          :panel        {:icon-close "fa fa-times"}
                          :group-title  {:tag :h2}
                          :button-group {:align "text-left"}})

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

(defn get-option
  [ks]
  (get-in *options* ks))

(defn set-options!
  [options]
  (set! *options* (merge-options options)))