(ns payment.core
  (:require [clojure.browser.repl :as repl]
            [domina :as $]
            [domina.events :as $ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; payment fn
(defn payment [principal years apr]
  (let [r (/ apr (* 12 100))
        n (* years 12)
        rate-factor (.pow js/Math (inc r) n)]
    (/ (* principal r rate-factor)
       (dec rate-factor))))

(def principal-field ($/by-id "principal"))
(def apr-field ($/by-id "apr"))
(def years-field ($/by-id "years"))

(defn field->n [field]
      (.parseFloat js/window ($/value field)))

(defn show-payment [ev]
      (let [apr (field->n apr-field)
            principal (field->n principal-field)
            years (field->n years-field)]
           ($/set-text! ($/by-id "payment") (payment principal years apr))))

($ev/listen! ($/by-id "calculate") "click" show-payment)