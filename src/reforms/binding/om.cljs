(ns reforms.binding.om
  (:require [reforms.binding.core :refer [IBinding]]
            [om.core :as om]))

(extend-type default
  IBinding
  (valid? [this]
    (om/cursor? this))
  (deref [this]
    @this)
  (reset!
    ([this v]
           (om/update! this v))
    ([this ks v]
     (om/update! this ks v)))
  (get-in [this ks]
    (get-in this ks))
  (path [this]
    (om/path this)))
