(ns cljxript.core
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [cljxript.util :as util]))

(def my-var "hello_world")

(defn say-hello []
  (println "Hello world!"))

(defn -main [& args]
  (say-hello)
  (println (util/dasherize my-var))
  (if (first args)
    (println "you gave me " args)
    (println "Give me an arg!")))
