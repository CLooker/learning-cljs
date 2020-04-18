(ns testing.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; list comprehensions
(def data [2 5 6])

;; vector of square roots
(for [x data] (.sqrt js/Math x))

;; list comprehension using multiple vectors
;; (4 5 8 10 12 15)
(for [x [1 2 3]
      y [4 5]]
     (* x y))

;; :when
(for [x data] :when (even? x) (* x x))

;; :let
(for [x data]
     :let [s (.sqrt js/Math x)]
     (+ x s))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; destructuring
(def full-name ["Maria" "Linda" "Fulano"])

(let [given (first full-name)
      middle (second full-name)
      surname (last full-name)])

(let [[given middle surname] full-name])

(let [given (first full-name)
      others (rest full-name)])

(let [given & others] full-name)

(def endpoints [[5 3] [7 9]])
(let [[x1 y1]
      [x2 y2] endpoints])

(def inventory {:item "pen" :price 3.49 :qty 50})
(let [{item :item price :price qty :qty} inventory])
(let [:keys [item price qty] inventory])

(let [[a b c :as v] [1 2 3 4 5]])
(let [{:keys [item price] :as m} inventory])
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
