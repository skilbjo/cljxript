(ns cljxript.config
  (:require [cljs.nodejs :as nodejs]
            [cljxript.core :as core]))

; Required magic vars.
(nodejs/enable-util-print!)
(set! *main-cli-fn* core/-main)
