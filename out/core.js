// Compiled by ClojureScript 1.9.293 {}
goog.provide('core');
goog.require('cljs.core');
core.parse_int = (function core$parse_int(s){
return (new core.Integer(cljs.core.re_find.call(null,/[0-9]*/,s)));
});
core.seq_contains_QMARK_ = (function core$seq_contains_QMARK_(coll,target){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28_SHARP_){
return cljs.core._EQ_.call(null,target,p1__28_SHARP_);
}),coll))){
return true;
} else {
return false;
}
});
core.sieve = (function core$sieve(s){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return core.sieve.call(null,cljs.core.filter.call(null,(function (p1__29_SHARP_){
return cljs.core.not_EQ_.call(null,(0),cljs.core.mod.call(null,p1__29_SHARP_,cljs.core.first.call(null,s)));
}),cljs.core.rest.call(null,s)));
}),null,null)));
});
core.is_prime_QMARK_ = (function core$is_prime_QMARK_(n){
return core.seq_contains_QMARK_.call(null,cljs.core.take.call(null,n,core.sieve.call(null,cljs.core.iterate.call(null,cljs.core.inc,(2)))),n);
});
core.create_shape = (function core$create_shape(var_args){
var args30 = [];
var len__3829__auto___33 = arguments.length;
var i__3830__auto___34 = (0);
while(true){
if((i__3830__auto___34 < len__3829__auto___33)){
args30.push((arguments[i__3830__auto___34]));

var G__35 = (i__3830__auto___34 + (1));
i__3830__auto___34 = G__35;
continue;
} else {
}
break;
}

var G__32 = args30.length;
switch (G__32) {
case 1:
return core.create_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return core.create_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30.length)].join('')));

}
});

core.create_shape.cljs$core$IFn$_invoke$arity$1 = (function (n){
return core.create_shape.call(null,(n - (1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
});

core.create_shape.cljs$core$IFn$_invoke$arity$2 = (function (n,acc){
while(true){
if(cljs.core._EQ_.call(null,n,(0))){
return acc;
} else {
var G__37 = (n - (1));
var G__38 = cljs.core.conj.call(null,acc,(0));
n = G__37;
acc = G__38;
continue;
}
break;
}
});

core.create_shape.cljs$lang$maxFixedArity = 2;

core.create_shape_index = (function core$create_shape_index(var_args){
var args39 = [];
var len__3829__auto___42 = arguments.length;
var i__3830__auto___43 = (0);
while(true){
if((i__3830__auto___43 < len__3829__auto___42)){
args39.push((arguments[i__3830__auto___43]));

var G__44 = (i__3830__auto___43 + (1));
i__3830__auto___43 = G__44;
continue;
} else {
}
break;
}

var G__41 = args39.length;
switch (G__41) {
case 1:
return core.create_shape_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return core.create_shape_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39.length)].join('')));

}
});

core.create_shape_index.cljs$core$IFn$_invoke$arity$1 = (function (n){
return core.create_shape_index.call(null,(n - (1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(1));
});

core.create_shape_index.cljs$core$IFn$_invoke$arity$3 = (function (n,acc,idx){
while(true){
if(cljs.core._EQ_.call(null,n,(0))){
return acc;
} else {
var G__46 = (n - (1));
var G__47 = cljs.core.conj.call(null,acc,idx);
var G__48 = (idx + (1));
n = G__46;
acc = G__47;
idx = G__48;
continue;
}
break;
}
});

core.create_shape_index.cljs$lang$maxFixedArity = 3;

core.test_arr = core.create_shape.call(null,(4));
core.primes_vector = (function core$primes_vector(n){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,core.sieve.call(null,cljs.core.iterate.call(null,cljs.core.inc,(2)))));
});
core.answer = (function core$answer(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [core.create_shape_index.call(null,n),core.primes_vector.call(null,n)], null);
});
core._main = (function core$_main(var_args){
var args__3832__auto__ = [];
var len__3829__auto___50 = arguments.length;
var i__3830__auto___51 = (0);
while(true){
if((i__3830__auto___51 < len__3829__auto___50)){
args__3832__auto__.push((arguments[i__3830__auto___51]));

var G__52 = (i__3830__auto___51 + (1));
i__3830__auto___51 = G__52;
continue;
} else {
}
break;
}

var argseq__3833__auto__ = ((((0) < args__3832__auto__.length))?(new cljs.core.IndexedSeq(args__3832__auto__.slice((0)),(0),null)):null);
return core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3833__auto__);
});

core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(cljs.core.first.call(null,args))){
return cljs.core.println.call(null,core.answer.call(null,core.parse_int.call(null,cljs.core.first.call(null,args))));
} else {
return cljs.core.println.call(null,"Usage: provide a number to check if prime");
}
});

core._main.cljs$lang$maxFixedArity = (0);

core._main.cljs$lang$applyTo = (function (seq49){
return core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49));
});


//# sourceMappingURL=core.js.map