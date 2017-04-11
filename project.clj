(defproject cljxript "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.494"]
                 [environ "1.1.0"]]
  :plugins [[lein-cljsbuild "1.1.5"]]
  :uberjar-name "cljxript.jar"
  :main cljxript.core
  :aot :all
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src"]
        :compiler {
          :output-to "target/cljxript.js"
          :target :nodejs
          :optimizations :simple
          :pretty-print true}}]})
