// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.core');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
reforms.binding.core.valid_QMARK_ = (function reforms$binding$core$valid_QMARK_(x){
return reforms.binding.protocol._valid_QMARK_.call(null,x);
});
reforms.binding.core.deref = (function reforms$binding$core$deref(x){
return reforms.binding.protocol._deref.call(null,x);
});
reforms.binding.core.reset_BANG_ = (function reforms$binding$core$reset_BANG_(var_args){
var args159359 = [];
var len__5767__auto___159362 = arguments.length;
var i__5768__auto___159363 = (0);
while(true){
if((i__5768__auto___159363 < len__5767__auto___159362)){
args159359.push((arguments[i__5768__auto___159363]));

var G__159364 = (i__5768__auto___159363 + (1));
i__5768__auto___159363 = G__159364;
continue;
} else {
}
break;
}

var G__159361 = args159359.length;
switch (G__159361) {
case 2:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args159359.length)].join('')));

}
});

reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,v){
return reforms.binding.protocol._reset_BANG_.call(null,x,v);
});

reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,v){
if(cljs.core.truth_(cljs.core.not_empty.call(null,ks))){
return reforms.binding.protocol._reset_BANG_.call(null,x,ks,v);
} else {
return reforms.binding.protocol._reset_BANG_.call(null,x,v);
}
});

reforms.binding.core.reset_BANG_.cljs$lang$maxFixedArity = 3;
reforms.binding.core.swap_BANG_ = (function reforms$binding$core$swap_BANG_(var_args){
var args159366 = [];
var len__5767__auto___159369 = arguments.length;
var i__5768__auto___159370 = (0);
while(true){
if((i__5768__auto___159370 < len__5767__auto___159369)){
args159366.push((arguments[i__5768__auto___159370]));

var G__159371 = (i__5768__auto___159370 + (1));
i__5768__auto___159370 = G__159371;
continue;
} else {
}
break;
}

var G__159368 = args159366.length;
switch (G__159368) {
case 2:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args159366.length)].join('')));

}
});

reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
return reforms.binding.protocol._swap_BANG_.call(null,x,(7));
});

reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,f){
if(cljs.core.truth_(cljs.core.not_empty.call(null,ks))){
return reforms.binding.protocol._swap_BANG_.call(null,x,ks,f);
} else {
return reforms.binding.protocol._swap_BANG_.call(null,x,f);
}
});

reforms.binding.core.swap_BANG_.cljs$lang$maxFixedArity = 3;
reforms.binding.core.get_in = (function reforms$binding$core$get_in(x,ks){
if(cljs.core.truth_(cljs.core.not_empty.call(null,ks))){
return reforms.binding.protocol._get_in.call(null,x,ks);
} else {
return reforms.binding.protocol._deref.call(null,x);
}
});
reforms.binding.core.path = (function reforms$binding$core$path(x){
return reforms.binding.protocol._path.call(null,x);
});

//# sourceMappingURL=core.js.map