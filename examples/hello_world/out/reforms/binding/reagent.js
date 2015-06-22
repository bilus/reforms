// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reforms.binding.reagent');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('reagent.ratom');
if(cljs.core.truth_(console)){
var G__15895_15896 = "Loading Reagent bindings.";
console.log(G__15895_15896);
} else {
}
reforms.binding.reagent.do_reset_BANG_ = (function reforms$binding$reagent$do_reset_BANG_(x,ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,(function (x__$1){
return cljs.core.assoc_in(x__$1,ks,v);
}));
});
reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$ = true;

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_deref$arity$1 = (function (this$){
var this$__$1 = this;
var G__15897 = this$__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15897) : cljs.core.deref.call(null,G__15897));
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
var G__15898 = this$__$1;
var G__15899 = v;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15898,G__15899) : cljs.core.reset_BANG_.call(null,G__15898,G__15899));
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3 = (function (this$,ks,v){
var this$__$1 = this;
return reforms.binding.reagent.do_reset_BANG_(this$__$1,ks,v);
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_get_in$arity$2 = (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__15900 = this$__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15900) : cljs.core.deref.call(null,G__15900));
})(),ks);
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.path;
});
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
var G__15901 = this$;
if(G__15901){
var bit__4983__auto__ = (G__15901.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4983__auto__) || (G__15901.cljs$core$IAtom$)){
return true;
} else {
if((!G__15901.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__15901);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__15901);
}
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
var G__15902 = this$;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15902) : cljs.core.deref.call(null,G__15902));
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__15906 = null;
var G__15906__2 = (function (this$,v){
var G__15903 = this$;
var G__15904 = v;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15903,G__15904) : cljs.core.reset_BANG_.call(null,G__15903,G__15904));
});
var G__15906__3 = (function (this$,ks,v){
return reforms.binding.reagent.do_reset_BANG_(this$,ks,v);
});
G__15906 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__15906__2.call(this,this$,ks);
case 3:
return G__15906__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15906.cljs$core$IFn$_invoke$arity$2 = G__15906__2;
G__15906.cljs$core$IFn$_invoke$arity$3 = G__15906__3;
return G__15906;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__15905 = this$;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15905) : cljs.core.deref.call(null,G__15905));
})(),ks);
}));

(reforms.binding.protocol._path["_"] = (function (_){
return null;
}));
