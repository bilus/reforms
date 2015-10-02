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
var args157322 = [];
var len__5767__auto___157325 = arguments.length;
var i__5768__auto___157326 = (0);
while(true){
if((i__5768__auto___157326 < len__5767__auto___157325)){
args157322.push((arguments[i__5768__auto___157326]));

var G__157327 = (i__5768__auto___157326 + (1));
i__5768__auto___157326 = G__157327;
continue;
} else {
}
break;
}

var G__157324 = args157322.length;
switch (G__157324) {
case 2:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157322.length)].join('')));

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
var args157329 = [];
var len__5767__auto___157332 = arguments.length;
var i__5768__auto___157333 = (0);
while(true){
if((i__5768__auto___157333 < len__5767__auto___157332)){
args157329.push((arguments[i__5768__auto___157333]));

var G__157334 = (i__5768__auto___157333 + (1));
i__5768__auto___157333 = G__157334;
continue;
} else {
}
break;
}

var G__157331 = args157329.length;
switch (G__157331) {
case 2:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157329.length)].join('')));

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