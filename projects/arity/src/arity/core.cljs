(ns arity.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn radians
  "Convert degrees to radians"
  [d]
  (/ (* d (.-PI js/Math)) 180))

(def polar-example {:r 50 :theta 45})

(defn cartesian
  "Convert polar coordinate (radius, degrees) to cartesian (x,y)"
   [{:keys [r theta]}]
  {:x (* (.cos js/Math (radians theta)) r)
   :y (* (.sin js/Math (radians theta)) r)})

(defn name1
  "Reformat name, converting middle name to an initial."
   [surname given middle]
   (str given " " (str (first middle) ".") " " surname))

(defn make-initials [names]
  (if-not (empty? names)
    (reduce (fn [acc item] (str acc (first item) ". ")) "" names)
    ""))

(defn name2
  "Reformat name, converting middle names to initials."
   [surname given & others]
   (str given " " (make-initials others) surname))

(defn area
  "Area of square, rectangle, and trapezoid"
  ([s] (* s s))
  ([w h] (* w h))
  ([b1 b2 h] (* (/ (+ b1 b2) 2) h)))
