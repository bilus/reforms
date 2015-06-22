(ns reforms.binding.protocol
  (:refer-clojure :exclude [-deref -reset!]))

;; "No protocol method IBinding.<method> ..." error around here probably means you forgot
;; to require `reforms.binding.*` in a namespace (where * corresponds to the name of the
;; react wrapper library you are using) e.g. `reforms.binding.om` or `reforms.binding.reagent`.
(defprotocol IBinding
  (-valid? [x])
  (-deref [x])
  (-reset! [x v] [x ks v])
  (-get-in [x ks])
  (-path [x]))
