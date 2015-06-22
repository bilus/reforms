// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reforms.binding.om');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('om.core');
if(cljs.core.truth_(console)){
var G__15888_15889 = "Loading Om bindings.";
console.log(G__15888_15889);
} else {
}
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
return om.core.cursor_QMARK_(this$);
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
var G__15890 = this$;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15890) : cljs.core.deref.call(null,G__15890));
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__15892 = null;
var G__15892__2 = (function (this$,v){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(this$,v);
});
var G__15892__3 = (function (this$,ks,v){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(this$,ks,v);
});
G__15892 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__15892__2.call(this,this$,ks);
case 3:
return G__15892__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15892.cljs$core$IFn$_invoke$arity$2 = G__15892__2;
G__15892.cljs$core$IFn$_invoke$arity$3 = G__15892__3;
return G__15892;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,ks);
}));

(reforms.binding.protocol._path["_"] = (function (this$){
var G__15891 = this$;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__15891) : om.core.path.call(null,G__15891));
}));
