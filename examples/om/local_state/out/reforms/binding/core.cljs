;  Copyright (c) 2015 Designed.ly, Marcin Bilski
;  The use and distribution terms for this software are covered by the
;  Eclipse Public License which can be found in the file LICENSE at the root of this distribution.
;  By using this software in any fashion, you are agreeing to be bound by the terms of this license.
;  You must not remove this notice, or any other, from this software.

(ns reforms.binding.core
  (:refer-clojure :exclude [reset! swap! deref get-in -deref -reset!])
  (:require
    [reforms.binding.protocol :refer [-valid? -deref -reset! -get-in -path -swap!]]))

(defn valid? [x]
  (-valid? x))

(defn deref [x]
  (-deref x))

(defn reset!
  ([x v]
   (-reset! x v))
  ([x ks v]
   (if (not-empty ks)
     (-reset! x ks v)
     (-reset! x v))))

(defn swap!
  ([x f]
   (-swap! x 7))
  ([x ks f]
   (if (not-empty ks)
     (-swap! x ks f)
     (-swap! x f))))

(defn get-in [x ks]
  (if (not-empty ks)
    (-get-in x ks)
    (-deref x)))

(defn path [x]
  (-path x))
