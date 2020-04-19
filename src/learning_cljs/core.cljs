(ns learning-cljs.core
  (:require [clojure.browser.repl :as repl]
            [domina :as $]
            [domina.events :as $ev]))

;; TODO create own build script that places assets in /docs dir and use that dir on ghpages

;; global
(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn el-id->n [el-id]
  (.parseFloat js/window ($/value ($/by-id el-id))))

(defn m->sorted-by-val [m]
  (into (sorted-map-by
         (fn [k1 k2]
           (compare [(get m k2) k2]
                    [(get m k1) k1])))
        m))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; averages
(defn arithmetic-mean [a b]
  (/ (+ a b) 2))

(defn geometric-mean [a b] (.sqrt js/Math (* a b)))

(defn harmonic-mean [a b]
  (->> (/ 1 a)
       (+ (/ 1 b))
       (/ 2)))

($ev/listen!
 ($/by-id "averages-btn")
 "click"
 (fn [ev]
   (let [a-n (el-id->n "A")
         b-n (el-id->n "B")
         invalid? (or (zero? a-n)
                      (zero? b-n)
                      (js/isNaN a-n)
                      (js/isNaN b-n))]
     (when-not invalid?
       ($/set-text! ($/by-id "arithmetic")
                    (.toFixed (arithmetic-mean a-n b-n) 2))
       ($/set-text! ($/by-id "geometric")
                    (.toFixed (geometric-mean a-n b-n) 2))
       ($/set-text! ($/by-id "harmonic")
                    (.toFixed (harmonic-mean a-n b-n) 2))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; discount
(defn price [quantity unit-price]
  (.toFixed (* quantity unit-price) 2))

(defn discount-rate [quantity]
  (cond
    (<= quantity 10) 0
    (<= 11 quantity 50) .01
    (<= 51 quantity 100) .03
    (<= 101 quantity 200) .05
    (<= 201 quantity) .075))

(defn discount [quantity unit-price]
  (.toFixed (* (price quantity unit-price)
               (discount-rate quantity))
            2))

($ev/listen!
 ($/by-id "discount-btn")
 "click"
 (fn [ev]
   (let [qty (el-id->n "qty")
         pr (el-id->n "price")
         valid? (every? pos? [qty pr])]
     (when valid?
       (let [price-before-discount (price qty pr)
             disc (discount qty pr)
             price-after-discount (.toFixed (- price-before-discount disc) 2)]
         ($/set-text! ($/by-id "total-val")
                      (str "$"  price-before-discount))
         ($/set-text! ($/by-id "discount-val")
                      (str "$"  disc))
         ($/set-text! ($/by-id "discounted-val")
                      (str "$"  price-after-discount)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; payment
(defn payment [principal apr years]
  (let [r (/ apr (* 12 100))
        n (* 12 years)
        rate-factor (.pow js/Math (inc r) n)]
    (/ (* principal r rate-factor) (dec rate-factor))))

(defn calculate-payment! [ev]
  (let [principal (el-id->n "principal")
        apr (el-id->n "apr")
        years (el-id->n "years")
        valid? (every? pos? [principal apr years])]
    ($/set-text! ($/by-id "payment-calculation")
                 (if (not valid?)
                   ""
                   (str "$"
                        (.toFixed (payment principal apr years) 2))))))

($ev/listen! ($/by-id "calculate-payment-btn") "click" calculate-payment!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; word count
;; ?=\S*['-])([a-zA-Z'-]+
(defn s->trs [s]
  (->> s
       (re-seq  #"([\w'-]+)") ;; regex for words
       (mapcat #(concat (rest %))) ;; take the matches
       (frequencies)
       (m->sorted-by-val) ;; sort by val
       (reduce ;; table rows
        (fn
          [acc [k v]]
          (str acc "<tr><td>" k "</td><td>" v "</td></tr>"))
        "")))

(defn count-words! [ev]
  ($/destroy-children! ($/by-id "word-count-table-tbody"))
  (->> "words"
       ($/by-id)
       ($/value)
       (s->trs)
       ($/append! ($/by-id "word-count-table-tbody"))))


($ev/listen! ($/by-id "count-words-btn") "click" count-words!)
