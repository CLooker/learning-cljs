(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'payment.core
   :output-to "out/payment.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
