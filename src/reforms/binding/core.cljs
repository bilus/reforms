(ns reforms.binding.core
  (:refer-clojure :exclude [reset! swap! deref get-in]))

(defprotocol IBinding
  (valid? [x])
  (deref [x])
  (reset! [x v] [x ks v])
  (get-in [x ks])
  (path [x]))
