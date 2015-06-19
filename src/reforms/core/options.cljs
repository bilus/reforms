(ns reforms.core.options)

(def ^:dynamic *options* {:form         {:horizontal         false
                                         :label-column-class "col-sm-3"
                                         :input-column-class "col-sm-7"}
                          :spinner      {:attrs {:class "fa fa-clock-o fa-spin"}}
                          :input        {:icon-warning "fa fa-warning"}
                          :panel        {:icon-close "fa fa-times"}
                          :group-title  {:tag :h2}
                          :button-group {:align "text-left"}})

(defn get-option
  [ks]
  (get-in *options* ks))