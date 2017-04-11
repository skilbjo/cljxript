(ns cljxript.util
  (:require [cljs.nodejs :as nodejs]
            [clojure.pprint :as pprint]
            [clojure.string :as string]))

; -- string --------------------------------------------
(defn dasherize [s]
  (string/replace s #"_" "-"))

(defn underscoreize [s]
  (string/replace s #"-" "_"))

(defn no-doterize [s]
  (string/replace s #"\." ""))

(defn keywordize [s]
  (-> s
      (string/replace #"\s" "-")
      string/lower-case keyword))
