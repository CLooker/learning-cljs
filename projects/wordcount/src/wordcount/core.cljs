(ns wordcount.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn add-word [wordmap word]
  (let [n (wordmap word)] ;; current count or nil
    (assoc wordmap word (if (nil? n) 1 (+ 1 n)))))

(defn create-word-map [wordlist]
  (reduce add-word {} wordlist))

(defn make-list [input-map]
  (let [the-keys (sort (keys input-map))]
    (reduce (fn [acc x]
              (str acc "<li>"
                   x ": " (input-map x)
                   "</li>" )) "" the-keys)))

(defn update-page [evt]
  (let [the-text (dom/value (dom/by-id "words"))
        wordlist (cstr/split the-text #"[^a-zA-Z]+")
        freq-map (create-word-map wordlist)
        result (dom/by-id "result")]
    (dom/destroy-children! result)
    (dom/append! result (make-list freq-map))))

(defn foo [evt]
      (println evt))

(ev/listen! (dom/by-id "go") "click" update-page)
