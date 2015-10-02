;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.om
  (:require [reforms.core :include-macros true]
            [reforms.binding.om])
  (:refer-clojure :exclude [time])
  (:require-macros [reforms.core.import :refer [import-vars]]))

(import-vars 'reforms.core)
