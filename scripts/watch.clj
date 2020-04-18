(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'learning-cljs.core
   :output-to "out/learning_cljs.js"
   :output-dir "out"})
