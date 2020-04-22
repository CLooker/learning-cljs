(defproject learning-cljs "0.1.0-SNAPSHOT"
  :description "Building a website using basic cljs"
  :url "http://github.com/learning-cljs"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.597"]
                 [domina "1.0.3"]
                 [reagent "0.5.0"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets [:target-path "out" "release"]
  :target-path "target")
