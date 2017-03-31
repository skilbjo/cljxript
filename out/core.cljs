(ns core)

(defn parse-int  [s]
  (Integer. (re-find #"[0-9]*" s)))

(defn seq-contains? [coll target]
  (if (some #(= target %) coll) true false))

(defn sieve [s]
  (cons (first s)
        (lazy-seq (sieve (filter #(not= 0 (mod % (first s)))
                                 (rest s))))))

(defn is-prime? [n]
  (seq-contains?
    (take n (sieve (iterate inc 2))) n))

(defn create-shape
  ([n] (create-shape (dec n) [0]))
  ([n acc] (if (= n 0) acc
             (recur (dec n) (conj acc 0)))))

(defn create-shape-index
  ([n] (create-shape-index (dec n) [0] 1))
  ([n acc idx]
   (if (= n 0) acc
     (recur (dec n) (conj acc idx) (inc idx)))))

(def test-arr (create-shape 4))

(defn primes-vector [n]
  (vec (take n (sieve (iterate inc 2)))))

(defn answer [n]
  [(create-shape-index n)
   (primes-vector n)])

(defn -main
  [& args]
  (if (first args)
    (println (answer (parse-int (first args))))
    (println "Usage: provide a number to check if prime")))
