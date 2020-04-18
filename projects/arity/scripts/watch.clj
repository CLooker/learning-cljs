(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'arity.core
   :output-to "out/arity.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
