(defproject payment "0.1.0-SNAPSHOT"
  :description "Use let and def in calculating monthly loan payment."
  :url "http://example.com/payment"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.597"]
                 [domina "1.0.3"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :node-dependencies [[source-map-support "0.2.8"]]
  :plugins [[lein-npm "0.4.0"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target")
