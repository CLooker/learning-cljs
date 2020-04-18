(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'seq_averages.core
   :output-to "out/seq_averages.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
