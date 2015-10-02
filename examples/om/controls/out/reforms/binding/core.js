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
var args156684 = [];
var len__5767__auto___156687 = arguments.length;
var i__5768__auto___156688 = (0);
while(true){
if((i__5768__auto___156688 < len__5767__auto___156687)){
args156684.push((arguments[i__5768__auto___156688]));

var G__156689 = (i__5768__auto___156688 + (1));
i__5768__auto___156688 = G__156689;
continue;
} else {
}
break;
}

var G__156686 = args156684.length;
switch (G__156686) {
case 2:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156684.length)].join('')));

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
var args156691 = [];
var len__5767__auto___156694 = arguments.length;
var i__5768__auto___156695 = (0);
while(true){
if((i__5768__auto___156695 < len__5767__auto___156694)){
args156691.push((arguments[i__5768__auto___156695]));

var G__156696 = (i__5768__auto___156695 + (1));
i__5768__auto___156695 = G__156696;
continue;
} else {
}
break;
}

var G__156693 = args156691.length;
switch (G__156693) {
case 2:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156691.length)].join('')));

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