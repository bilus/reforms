// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.rum');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
reforms.binding.rum.do_reset_BANG_ = (function reforms$binding$rum$do_reset_BANG_(x,ks,v){
return cljs.core.swap_BANG_.call(null,x,(function (x__$1){
return cljs.core.assoc_in.call(null,x__$1,ks,v);
}));
});
reforms.binding.rum.do_swap_BANG_ = (function reforms$binding$rum$do_swap_BANG_(x,ks,f){
return cljs.core.swap_BANG_.call(null,x,(function (x__$1){
return cljs.core.update_in.call(null,x__$1,ks,f);
}));
});
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
if(!((this$ == null))){
if(((this$.cljs$lang$protocol_mask$partition1$ & (16384))) || (this$.cljs$core$IAtom$)){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,this$);
}
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
return cljs.core.deref.call(null,this$);
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__17134 = null;
var G__17134__2 = (function (this$,v){
return cljs.core.reset_BANG_.call(null,this$,v);
});
var G__17134__3 = (function (this$,ks,v){
return reforms.binding.rum.do_reset_BANG_.call(null,this$,ks,v);
});
G__17134 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__17134__2.call(this,this$,ks);
case 3:
return G__17134__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17134.cljs$core$IFn$_invoke$arity$2 = G__17134__2;
G__17134.cljs$core$IFn$_invoke$arity$3 = G__17134__3;
return G__17134;
})()
);

(reforms.binding.protocol._swap_BANG_["_"] = (function() {
var G__17135 = null;
var G__17135__2 = (function (this$,f){
return cljs.core.swap_BANG_.call(null,this$,f);
});
var G__17135__3 = (function (this$,ks,f){
return reforms.binding.rum.do_swap_BANG_.call(null,this$,ks,f);
});
G__17135 = function(this$,ks,f){
switch(arguments.length){
case 2:
return G__17135__2.call(this,this$,ks);
case 3:
return G__17135__3.call(this,this$,ks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17135.cljs$core$IFn$_invoke$arity$2 = G__17135__2;
G__17135.cljs$core$IFn$_invoke$arity$3 = G__17135__3;
return G__17135;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),ks);
}));

(reforms.binding.protocol._path["_"] = (function (_){
return null;
}));

//# sourceMappingURL=rum.js.map