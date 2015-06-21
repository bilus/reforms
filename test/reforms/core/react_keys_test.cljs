(ns reforms.core.react-keys-test
  (:require [reforms.core.react-keys :refer [gen-key]]
            [reforms.binding.protocol :refer [IBinding]]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(defn make-cursor [path]
  (reify
    IBinding
    (-valid? [x]
      true)
    (-path [x]
      path)))

(deftest
  gen-key-test
  (testing "given no args returns unique id"
           (is (not= (gen-key) (gen-key))))
  (testing "given nil args returns unique id"
           (is (not= (gen-key nil nil) (gen-key nil nil))))
  (testing "given strings joins them with hyphens"
           (is (= "label-this-is-something") (gen-key "label" "this-is-something")))
  (testing "converts strings into lowercase identifiers"
           (is (= "long-label-this--is-something") (gen-key "Long label" "This,?is-something")))
  (testing "cursor, path and symbol"
           (is (= "path1-path2" (gen-key [:path1 :path2])))
           (is (= "path1-path2" (gen-key :path1 :path2)))
           (is (= "foo-cursor-path-bar-path1-path2" (gen-key "foo"
                                                             (make-cursor [:cursor :path])
                                                             :bar
                                                             [:path1 :path2])))))