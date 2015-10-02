;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.binding.reagent
  (:require [reforms.binding.protocol :refer [IBinding]]
            [reagent.ratom :refer [RCursor]]))

(defn- do-reset!
  [x ks v]
  (swap! x (fn [x]
             (assoc-in x ks v))))

(defn- do-swap!
  [x ks f]
  (swap! x (fn [x]
             (update-in x ks f))))

(extend-type RCursor
  IBinding
  (-valid? [_]
    true)
  (-deref [this]
    @this)
  (-reset!
    ([this v]
     (reset! this v))
    ([this ks v]
     (do-reset! this ks v)))
  (-swap!
    ([this f]
     (swap! this f))
    ([this ks f]
     (do-swap! this ks f)))
  (-get-in [this ks]
    (get-in @this ks))
  (-path [this]
    (.-path this)))

(extend-type default
  IBinding
  (-valid? [this]
    (satisfies? IAtom this))
  (-deref [this]
    @this)
  (-reset!
    ([this v]
     (reset! this v))
    ([this ks v]
     (do-reset! this ks v)))
  (-swap!
    ([this f]
     (swap! this f))
    ([this ks f]
     (do-swap! this ks f)))
  (-get-in [this ks]
    (get-in @this ks))
  (-path [_]
    nil))
