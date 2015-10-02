;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.binding.om-state
  "EXPERIMENTAL: Binding to local state."
  (:require [reforms.binding.protocol :refer [IBinding]]
            [om.core :as om]))

(extend-type default
  IBinding
  (-valid? [this]
    (or (om/cursor? this) (om/component? this)))
  (-deref [this]
    (if (om/cursor? this)
      @this
      (om/get-state this)))
  (-reset!
    ([this v]
     (if (om/cursor? this)
       (om/update! this v)
       (om/set-state! this v)))
    ([this ks v]
     (if (om/cursor? this)
       (om/update! this ks v)
       (om/set-state! this ks v))))
  (-swap!
    ([this f]
     (if (om/cursor? this)
       (om/transact! this f)
       (om/set-state! this (f (om/get-state this)))))
    ([this ks f]
     (if (om/cursor? this)
       (om/transact! this ks f)
       (om/set-state! this ks (f (om/get-state this))))))
  (-get-in [this ks]
    (if (om/cursor? this)
      (get-in this ks)
      (om/get-state this ks)))
  (-path [this]
    (when (om/cursor? this)
      (om/path this))))
