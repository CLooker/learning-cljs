(ns averages.core
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as dom]
            [domina :as $]
            [domina.events :as $ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")

;; js interop
;; method access
(println "random number:" (.random js/Math))
(println "the square root of 2:" (.sqrt js/Math 2))

;; property access
(println "Pi:" (.-PI js/Math))

;; (.alert js/window "It works!")
;; (js/alert "This works, too!")

;; DOM manipulation using google closure library
(println "element with id of A:" (dom/getElement "A"))
(println "value of element with id of A:" (.-value (dom/getElement "A")))
(println "setting value of element with id of A to be 2010")
(set! (.-value (dom/getElement "A")) 2010)
(println "value of element with id of A:" (.-value (dom/getElement "A")))
(set! (.-size (dom/getElement "B")) 25)

;; functions
(defn square [a] (* a a))
(defn add [& ns] (apply + ns))
(defn hypotenuse [a b] (js/Math.sqrt (add (square a) (square b))))
(println "hypotenuse of 5 and 12:" (hypotenuse 5 12))

;; arithmetic mean a + b / 2
(defn arithmetic-mean [a b]
      (/ (+ a b) 2))
(println "average of 3 and 4:" (arithmetic-mean 3 4))

;; geometric mean sqrt(a * b)
(defn geometric-mean [a b] (.sqrt js/Math (* a b)))
(println "geometric mean of 5 and 6:" (geometric-mean 5 6))

;; harmonic mean 2 / ((1 / a) + (1 / b))
(defn harmonic-mean [a b]
      (->> (/ 1 a)
           (+ (/ 1 b))
           (/ 2)))
(println "harmonic mean of 2 and 6:" (harmonic-mean 2 6))

;; using domina, which is like jQuery
(println "element with id of A:" $/by-id "A")
(println "value of element with id of A:" ($/value ($/by-id "A")))
(println "setting value of element with id of A to 42")
($/set-value! ($/by-id "A") 42)
(println "value of element with id of A:" ($/value ($/by-id "A")))

;; DOM event handling
(defn el-id->n [el-id]
      (.parseFloat js/window ($/value ($/by-id el-id))))

($ev/listen!
  ($/by-id "calculate")
  "click"
  (fn [ev]
      ($/set-text! ($/by-id "arithmetic")
                   (arithmetic-mean (el-id->n "A") (el-id->n "B")))
      ($/set-text! ($/by-id "geometric")
                   (geometric-mean (el-id->n "A") (el-id->n "B")))
      ($/set-text! ($/by-id "harmonic")
                   (harmonic-mean (el-id->n "A") (el-id->n "B")))))
