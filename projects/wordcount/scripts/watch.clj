(require '[cljs.closure :as cljsc])

(cljsc/watch "src"
  {:main 'wordcount.core
   :output-to "out/wordcount.js"
   :output-dir "out"
   :optimizations :none
   :cache-analysis true
   :source-map true})
