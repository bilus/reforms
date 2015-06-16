(defproject om-forms "0.1.0-SNAPSHOT"
            :description "Form helpers for Om."
            :url "http://github.com/bilus/om-forms"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0-RC1" :scope "provided"]
                           [org.clojure/clojurescript "0.0-3308" :scope "provided"]
                           [org.omcljs/om "0.8.8" :scope "provided"]
                           [sablono "0.3.4" :scope "provided"]]
            :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
            :auto-clean false
            :source-paths ["src"]

            :plugins [[lein-cljsbuild "1.0.6"]]

            :clean-targets ["examples/simple/out"
                            "examples/validation/out"
                            "target/"]

            :cljsbuild {:builds {:simple
                                 {:source-paths ["examples/shared/" "examples/simple/src" "src"]
                                  :compiler     {:output-to     "examples/simple/out/main.js"
                                                 :output-dir    "examples/simple/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :validation
                                 {:source-paths ["examples/shared/" "examples/validation/src" "src"]
                                  :compiler     {:output-to     "examples/validation/out/main.js"
                                                 :output-dir    "examples/validation/out"
                                                 :source-map    true
                                                 :optimizations :none}}}})

