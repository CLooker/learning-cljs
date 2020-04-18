(ns seq_averages.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as $]
            [domina.events :as $ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn arithmetic-mean [xs]
      (/ (reduce + xs)
         (count xs)))

(defn geometric-mean [xs]
      (let [non-zeroes (remove zero? xs)
            pos-xs (map #(.abs js/Math %) non-zeroes)
            n (count pos-xs)]
           (.pow js/Math (reduce * pos-xs) (/ 1.0 n))))


(defn harmonic-mean [xs]
      (let [pos-xs (remove zero? xs)
            recips (map #(/ 1 %) pos-xs)]
           (/ (count recips) (reduce + 0 recips))))

(defn mean [choice vs]
      (cond
        (= choice "arithmetic") (arithmetic-mean vs)
        (= choice "geometric") (geometric-mean vs)
        (= choice "harmonic") (harmonic-mean vs)))

(defn calc! [ev]
      (let [choice ($/value ($/by-id "meanType"))
            n-str ($/value ($/by-id "numbers"))
            xs (cstr/split n-str #"[ ,]+")
            vals (map #(.parseFloat js/window %) xs)]
           ($/set-text! ($/by-id "result") (mean choice vals))))

($ev/listen! ($/by-id "calculate") "click" calc!)
