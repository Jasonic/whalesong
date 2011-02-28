#lang typed/racket/base

(define-struct: (A) set ([ht : (HashTable A Boolean)]))
(define-type (Setof A) (set A))

(: new-set (All (A) (->  (Setof A))))
(define (new-set)
  (make-set ((inst make-hash A Boolean))))

(: new-seteq (All (A) (->  (Setof A))))
(define (new-seteq)
  (make-set ((inst make-hasheq A Boolean))))

(: set-insert! (All (A) ((Setof A) A -> Void)))
(define (set-insert! s elt)
  (hash-set! (set-ht s) elt #t)
  (void))
  
(: set-remove! (All (A) ((Setof A) A -> Void)))
(define (set-remove! s elt)
  ((inst hash-remove! A Boolean) (set-ht s) elt)
  (void))

(: set-contains? (All (A) ((Setof A) A -> Boolean)))
(define (set-contains? s elt)
  (hash-has-key? (set-ht s) elt))

(: set-for-each (All (A) ((A -> Any) (Setof A) -> Void)))
(define (set-for-each f s)
  ((inst hash-for-each A Boolean Any)
   (set-ht s)
   (lambda: ([k : A] [v : Boolean])
            (f k)))
  (void))


(: set-map (All (A B) ((A -> B) (Setof A) -> (Listof B))))
(define (set-map f s)
  ((inst hash-map A Boolean B) (set-ht s) (lambda: ([k : A] [v : Boolean])
                                                   (f k))))