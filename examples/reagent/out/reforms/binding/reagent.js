// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reforms.binding.reagent');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('reagent.ratom');
if(cljs.core.truth_(console)){
console.log("Loading Reagent bindings.");
} else {
}
reforms.binding.reagent.do_reset_BANG_ = (function reforms$binding$reagent$do_reset_BANG_(x,ks,v){
return cljs.core.swap_BANG_.call(null,x,(function (x__$1){
return cljs.core.assoc_in.call(null,x__$1,ks,v);
}));
});
reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$ = true;

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,this$__$1);
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,v);
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3 = (function (this$,ks,v){
var this$__$1 = this;
return reforms.binding.reagent.do_reset_BANG_.call(null,this$__$1,ks,v);
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_get_in$arity$2 = (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,this$__$1),ks);
});

reagent.ratom.RCursor.prototype.reforms$binding$protocol$IBinding$_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.path;
});
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
var G__34033 = this$;
if(G__34033){
var bit__5023__auto__ = (G__34033.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5023__auto__) || (G__34033.cljs$core$IAtom$)){
return true;
} else {
if((!G__34033.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__34033);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__34033);
}
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
return cljs.core.deref.call(null,this$);
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__34034 = null;
var G__34034__2 = (function (this$,v){
return cljs.core.reset_BANG_.call(null,this$,v);
});
var G__34034__3 = (function (this$,ks,v){
return reforms.binding.reagent.do_reset_BANG_.call(null,this$,ks,v);
});
G__34034 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__34034__2.call(this,this$,ks);
case 3:
return G__34034__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34034.cljs$core$IFn$_invoke$arity$2 = G__34034__2;
G__34034.cljs$core$IFn$_invoke$arity$3 = G__34034__3;
return G__34034;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),ks);
}));

(reforms.binding.protocol._path["_"] = (function (_){
return null;
}));

//# sourceMappingURL=reagent.js.map