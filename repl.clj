(require 'cljs.repl)
(require 'cljs.build.api)
;(require 'cljs.repl.browser)
(require 'cljs.repl.node)

(cljs.build.api/build "src"
                      {:main      'reforms.core
                       :output-to "out/main.js"
                       :verbose   true})

;(cljs.repl/repl (cljs.repl.browser/repl-env)
(cljs.repl/repl (cljs.repl.node/repl-env)
                :watch "src"
                :output-dir "out")

