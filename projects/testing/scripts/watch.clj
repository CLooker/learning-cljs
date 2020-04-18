(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'testing.core
   :output-to "out/testing.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
