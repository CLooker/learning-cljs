(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'discount.core
   :output-to "out/discount.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
