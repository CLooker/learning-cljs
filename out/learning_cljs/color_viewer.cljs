(ns learning-cljs.color-viewer
  (:require [reagent.core :as reagent :refer [atom]]
            [goog.color :as color]))

(def centered-cols-style {:style {:display "flex"
                                  :flex-direction "column"
                                  :justify-content "center"
                                  :align-items "center"}})

(def input-width {:width "7ch"})

(defonce state (atom {:r 0
                      :g 0
                      :b 0
                      :hex "#000000"}))

(defn hex-change [ev]
  (let [hex (str "#" (-> ev .-target .-value))]
    (if (color/isValidColor hex)
      (let [[r g b] (color/hexToRgb hex)]
        (swap! state assoc :r r :g g :b b :hex hex))
      (swap! state assoc :hex hex))))

(defn hex-in []
  [:input {:type "text"
           :width "5vw"
           :value (subs (:hex @state) 1)
           :on-change hex-change
           :style input-width}])

(defn in-range [min max x]
  (cond
    (js/Number.isNaN x) min
    (<= x min max) min
    (<= min x max) x
    (<= min max x) max))

(def in-rgb-range (partial in-range 0 255))

(defn rgb-change [k ev]
  (let [v (-> ev .-target .-value)]
    (swap! state assoc k (if (= v "") v (in-rgb-range v)))
    (swap! state assoc :hex (color/rgbToHex (:r @state) (:g @state) (:b @state)))))

(defn rgb-in [k]
  [:input {:type "text"
           :value (@state k)
           :style input-width
           :on-change (fn [ev] (rgb-change k ev))}])

(defn ins []
  [:div centered-cols-style
   [:div
    [:label "Hex: #"]
    [hex-in]]
   [:div {:style {:display "flex" :align-items "baseline"}}
    [:label {:style {:margin-right "0.75em"}} "RGB: "]
    [:div {:style {:display "flex" :flex-direction "column"}}
     [rgb-in :r]
     [rgb-in :g]
     [rgb-in :b]]]])

(defn out []
  [:div {:style {:height "40vh"
                 :width "50vw"
                 :margin-bottom "1.25em"
                 :border "1px solid black"
                 :background-color (@state :hex)}}])

(defn ui []
  [:div centered-cols-style
   [out] [ins]])

(def color-viewer-el (.getElementById js/document "color-viewer"))
(when color-viewer-el
  (reagent/render-component [ui] color-viewer-el))