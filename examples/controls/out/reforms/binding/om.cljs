(ns reforms.binding.om
  (:require [reforms.binding.protocol :refer [IBinding]]
            [om.core :as om]))

(when js/console
  (js/console.log "Loading Om bindings."))

(extend-type default
  IBinding
  (-valid? [this]
    (om/cursor? this))
  (-deref [this]
    @this)
  (-reset!
    ([this v]
           (om/update! this v))
    ([this ks v]
     (om/update! this ks v)))
  (-get-in [this ks]
    (get-in this ks))
  (-path [this]
    (om/path this)))
