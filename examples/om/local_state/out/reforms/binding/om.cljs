;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.binding.om
  (:require [reforms.binding.protocol :refer [IBinding]]
            [om.core :as om]))

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
  (-swap!
    ([this f]
     (om/transact! this f))
    ([this ks f]
     (om/transact! this ks f)))
  (-get-in [this ks]
    (get-in this ks))
  (-path [this]
    (om/path this)))
