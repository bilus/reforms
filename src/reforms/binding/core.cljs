(ns reforms.binding.core
  (:refer-clojure :exclude [reset! swap! deref get-in -deref -reset!])
  (:require
    [reforms.binding.protocol :refer [-valid? -deref -reset! -get-in -path]]
    #_[clojure.string :as str]))

(defn valid? [x]
  (-valid? x))

(defn deref [x]
  (-deref x))

(defn reset!
  ([x v]
   (-reset! x v))
  ([x ks v]
   (-reset! x ks v)))

(defn get-in [x ks]
  (-get-in x ks))

(defn path [x]
  (-path x))

;(defn ->js [var-name]
;  (-> var-name
;      (str/replace #"/" ".")
;      (str/replace #"-" "_")))
;
;(defn- ns?
;  [ns-name]
;  (try
;    (js/eval (->js (str ns-name)))
;    (catch js/Error _
;      false)))

;(defn- load-ns
;  [ns-name]
;  (try
;    (goog.require (->js (str ns-name)))
;    (catch js/Error _)))

;(defn- auto-load-bindings!
;  [dep ns msg]
;  (when (and (not (ns? ns)) (ns? dep))
;    (when (and js/console js/console.log)
;      (js/console.log msg))
;    (load-ns ns)))

;(defn auto-load!
;  []
;  #_(load-file "om.cljs")
;
;  #_(auto-load-bindings! 'om.core 'reforms.binding.om "Auto-loading Om bindings.")
;  #_(auto-load-bindings! 'reagent.core 'reforms.binding.reagent "Auto-loading Reagent bindings."))