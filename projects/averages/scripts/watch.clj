(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'averages.core
   :output-to "out/averages.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
