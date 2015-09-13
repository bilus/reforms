(ns reforms.core.impl-test
  (:require [reforms.core.impl :refer [parse-args gen-dom-id]]
            [cljs.test :refer-macros [deftest is are testing run-tests]]))


(deftest parse-args-test
  (are [result args opts] (= result (parse-args args opts))
    [{} 5 6] [5 6] [[map? {}]]
    [{:foo "bar"} "" 5 6] [{:foo "bar"} 5 6] [[map? {}] [string? ""]]
    [{} "" 5 6] [5 6] [[map? {}] [string? ""]]
    [{} 5 6] [5 6] [[map? {}] [number? nil]]
    [{} nil 5 6] [5 6] [[map? {}] [(complement number?) nil]]
    [{:foo "bar"} nil 5 6] [{:foo "bar"} 5 6] [[map? {}] [(complement number?) nil]]
    [{} "a" 5 6] ["a" 5 6] [[map? {}] [(complement number?) nil]]
    [{:foo "bar"} "a" 5 6] [{:foo "bar"} "a" 5 6] [[map? {}] [(complement number?) nil]]
    [{:foo "bar"} nil nil 5 6] [{:foo "bar"} 5 6] [[map? {}] [(complement number?) nil] [(complement number?) nil]]
    [{} nil nil 5 6] [5 6] [[map? {}] [(complement number?) nil] [(complement number?) nil]]
    [{} "a" nil 5 6] ["a" 5 6] [[map? {}] [(complement number?) nil] [(complement number?) nil]]
    [{:foo "bar"} "a" nil 5 6] [{:foo "bar"} "a" 5 6] [[map? {}] [(complement number?) nil] [(complement number?) nil]]
    [{:foo "bar"} "a" "b" 5 6] [{:foo "bar"} "a" "b" 5 6] [[map? {}] [(complement number?) nil] [(complement number?) nil]]
    [{} "a" "b" 5 6] ["a" "b" 5 6] [[map? {}] [(complement number?) nil] [(complement number?) nil]]))

(deftest gen-dom-id-test
  (are [dom-id korks] (= dom-id (gen-dom-id korks))
    "a" [:a]
    "a-b" [:a :b]
    "a-b" ["a" "b"]
    "1-2" [1 2]))

