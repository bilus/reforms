(ns reforms.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [reforms.core.react-keys-test]))

(doo-tests 'reforms.core.react-keys-test)