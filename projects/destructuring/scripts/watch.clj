(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'destructuring.core
   :output-to "out/destructuring.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
