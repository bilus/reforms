(ns reforms.core.react-keys
  (:require [reforms.binding.core :as binding]
            [clojure.string :as str])
  (:import [goog.ui IdGenerator]))

(defn to-str
  [x]
  (cond
    (binding/valid? x) (->> (binding/path x)
                            (map to-str)
                            (str/join "-"))
    (keyword? x) (name x)
    (vector? x) (->> x
                     (map to-str)
                     (str/join "-"))
    :else (str x)))

(defn gen-key [& args]
  (or (not-empty (str/replace (->> args
                                   (remove nil?)
                                   (map to-str)
                                   (remove empty?)
                                   (str/join "-")
                                   (str/lower-case)) #"[^a-zA-Z0-9_$]" "-"))
      (.getNextUniqueId (.getInstance IdGenerator))))