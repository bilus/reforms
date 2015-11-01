// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.core.react_keys');
goog.require('cljs.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
goog.require('goog.ui.IdGenerator');
reforms.core.react_keys.to_str = (function reforms$core$react_keys$to_str(x){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,x))){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,reforms$core$react_keys$to_str,reforms.binding.core.path.call(null,x)));
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,reforms$core$react_keys$to_str,x));
} else {
return [cljs.core.str(x)].join('');

}
}
}
});
reforms.core.react_keys.gen_key = (function reforms$core$react_keys$gen_key(var_args){
var args__5658__auto__ = [];
var len__5651__auto___18545 = arguments.length;
var i__5652__auto___18546 = (0);
while(true){
if((i__5652__auto___18546 < len__5651__auto___18545)){
args__5658__auto__.push((arguments[i__5652__auto___18546]));

var G__18547 = (i__5652__auto___18546 + (1));
i__5652__auto___18546 = G__18547;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.react_keys.gen_key.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.react_keys.gen_key.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var or__4593__auto__ = cljs.core.not_empty.call(null,clojure.string.replace.call(null,clojure.string.lower_case.call(null,clojure.string.join.call(null,"-",cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,reforms.core.react_keys.to_str,cljs.core.remove.call(null,cljs.core.nil_QMARK_,args))))),/[^a-zA-Z0-9_$]/,"-"));
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
});

reforms.core.react_keys.gen_key.cljs$lang$maxFixedArity = (0);

reforms.core.react_keys.gen_key.cljs$lang$applyTo = (function (seq18544){
return reforms.core.react_keys.gen_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18544));
});

//# sourceMappingURL=react_keys.js.map