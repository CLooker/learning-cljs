(ns discount.core
  (:require [clojure.browser.repl :as repl]
             [domina :as dom]
             [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

