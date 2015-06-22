(ns reforms.binding.reagent
  (:require [reforms.binding.protocol :refer [IBinding]]
            [reagent.ratom :refer [RCursor]]))

(defn- do-reset!
  [x ks v]
  (swap! x (fn [x]
             (assoc-in x ks v))))

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
  (-get-in [this ks]
    (get-in @this ks))
  (-path [_]
    nil))
