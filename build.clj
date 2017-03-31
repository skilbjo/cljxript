(require 'cljs.build.api)

(cljs.build.api/build "src" {:output-to "target/main.js"})
