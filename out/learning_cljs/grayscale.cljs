(ns learning-cljs.grayscale
  (:require [clojure.browser.repl :as repl]
            [reagent.core :as reagent :refer [atom]]))

(defonce gray (atom 0))

(defn header []
  [:h1.header.title "Grayscale"])

(defn in []
  [:input {:type "text"
           :value @gray
           :style {:width "7vw"}
           :on-change (fn [ev]
                        (->> ev
                             .-target
                             .-value
                             js/parseInt
                             (#(cond
                                 (js/Number.isNaN %) 0
                                 (< % 0) 0
                                 (> % 255) 255
                                 :else %))
                             (reset! gray)))}])

(defn out []
  [:div {:style {:height "75vh"
                 :width "75vw"
                 :margin "10px"
                 :border "1px solid black"
                 :background-color (str "rgb(" @gray "," @gray "," @gray ")")}}])

(defn ui []
  [:div [in] [out]])

(def grayscale-el (.getElementById js/document "grayscale"))
(when grayscale-el
  (reagent/render-component
   [ui]
   grayscale-el))
