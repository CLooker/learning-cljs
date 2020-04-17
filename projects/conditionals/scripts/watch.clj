(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'conditionals.core
   :output-to "out/conditionals.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
