(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'great_circle.core
   :output-to "out/great_circle.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
