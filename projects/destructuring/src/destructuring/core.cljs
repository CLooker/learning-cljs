(ns destructuring.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]))

(enable-console-print!)

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(def cities
  {:Tokyo ["Japan" 9071577 [35.69 139.69]],
   :Paris ["France" 2273305 [48.86 2.35]],
   :Toronto ["Canada" 2615060 [43.65 -79.38]],
   :Lima ["Perú" 8693387 [-12.05 -77.04]]})

(defn create-row [item]
  (let [[city [country population [lat lon]]] item]
    (str "<tr><td>"
         (cstr/join "</td><td>"
                     [(name city) country population
                      (str lat "°")
                      (str lon "°")])
         "</td></tr>")))

(defn make-table [node city-map]
  (doseq [item (sort city-map)]
    (dom/append! node (create-row item))))

(make-table (dom/by-id "cityBody") cities)

