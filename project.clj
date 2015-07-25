(defproject reforms "0.4.0-SNAPSHOT"
            :description "Form helpers for React-based Clojurescript libraries."
            :url "http://bilus.github.io/reforms/"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                           [org.clojure/clojurescript "0.0-3308"]]
            :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
            :auto-clean false
            :source-paths ["src"]

            :plugins [[lein-cljsbuild "1.0.6"]
                      [lein-doo "0.1.1-SNAPSHOT"]]

            :clean-targets ^{:protect false} ["target/"
                                              "resources/public/js/testable.js"]

            :codox {:language                  :clojurescript
                    :include                   [reforms.core reforms.core.options reforms.validation]
                    :src-dir-uri               "http://github.com/bilus/reform/blob/master/"
                    :src-linenum-anchor-prefix "L"
                    :defaults                  {:doc/format :markdown}}

            :profiles {:doc {:dependencies [[org.clojure/clojurescript "0.0-2985"]]}
                       :dev {:dependencies [[org.clojure/core.async "0.1.346.0-17112a-alpha"]]}}

            :aliases {"doc"       ["with-profile" "doc" "doc"]
                      "cljsbuild" ["with-profile" "dev" "cljsbuild"]}

            :cljsbuild {:builds {:test {:source-paths ["src" "test"]
                                        :compiler     {:output-to     "resources/public/js/testable.js"
                                                       :main          'reforms.runner
                                                       :optimizations :whitespace}}}})

