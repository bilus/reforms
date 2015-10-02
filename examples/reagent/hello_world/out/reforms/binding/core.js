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
var args76017 = [];
var len__5651__auto___76020 = arguments.length;
var i__5652__auto___76021 = (0);
while(true){
if((i__5652__auto___76021 < len__5651__auto___76020)){
args76017.push((arguments[i__5652__auto___76021]));

var G__76022 = (i__5652__auto___76021 + (1));
i__5652__auto___76021 = G__76022;
continue;
} else {
}
break;
}

var G__76019 = args76017.length;
switch (G__76019) {
case 2:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76017.length)].join('')));

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
var args76024 = [];
var len__5651__auto___76027 = arguments.length;
var i__5652__auto___76028 = (0);
while(true){
if((i__5652__auto___76028 < len__5651__auto___76027)){
args76024.push((arguments[i__5652__auto___76028]));

var G__76029 = (i__5652__auto___76028 + (1));
i__5652__auto___76028 = G__76029;
continue;
} else {
}
break;
}

var G__76026 = args76024.length;
switch (G__76026) {
case 2:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76024.length)].join('')));

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