(defproject reforms "0.2.0-SNAPSHOT"
            :description "Form helpers for Om."
            :url "http://github.com/bilus/reforms"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                           [org.clojure/clojurescript "0.0-3308"]
                           [org.omcljs/om "0.8.8"]
                           [sablono "0.3.4"]]
            :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
            :auto-clean false
            :source-paths ["src"]

            :plugins [[lein-cljsbuild "1.0.6"]]

            :clean-targets ["examples/hello_world/out"
                            "examples/simple/out"
                            "examples/validation/out"
                            "examples/controls/out"
                            "target/"]

            :codox {:language :clojurescript
                    :include [reforms.core reforms.core.options reforms.validation]
                    :src-dir-uri "http://github.com/bilus/reform/blob/master/"
                    :src-linenum-anchor-prefix "L"
                    :defaults {:doc/format :markdown}}
            :profiles {:doc {:dependencies [[org.clojure/clojurescript "0.0-2985"]]}}
            :aliases {"doc" ["with-profile" "doc" "doc"]}

            :cljsbuild {:builds {:hello-world
                                 {:source-paths ["examples/shared/" "examples/hello_world/src" "src"]
                                  :compiler     {:output-to     "examples/hello_world/out/main.js"
                                                 :output-dir    "examples/hello_world/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :controls
                                 {:source-paths ["examples/shared/" "examples/controls/src" "src"]
                                  :compiler     {:output-to     "examples/controls/out/main.js"
                                                 :output-dir    "examples/controls/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :simple
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

