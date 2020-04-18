(ns fiddle)

;; stuff I see that doesn't fit in a project but I think was worth remembering
(def data [2 5 6])

;; list comprehensions
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

