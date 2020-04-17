(ns conditionals.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn status [age]
  (cond
    (< age 18) "Can't vote or drink."
    (< age 21) "Can vote; can't drink"
    (< age 65) "Can vote and drink"
    :else "With age comes wisdom"))
