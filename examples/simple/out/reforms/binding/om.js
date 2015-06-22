// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reforms.binding.om');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('om.core');
if(cljs.core.truth_(console)){
console.log("Loading Om bindings.");
} else {
}
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
return om.core.cursor_QMARK_.call(null,this$);
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
return cljs.core.deref.call(null,this$);
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__8582 = null;
var G__8582__2 = (function (this$,v){
return om.core.update_BANG_.call(null,this$,v);
});
var G__8582__3 = (function (this$,ks,v){
return om.core.update_BANG_.call(null,this$,ks,v);
});
G__8582 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__8582__2.call(this,this$,ks);
case 3:
return G__8582__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8582.cljs$core$IFn$_invoke$arity$2 = G__8582__2;
G__8582.cljs$core$IFn$_invoke$arity$3 = G__8582__3;
return G__8582;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.call(null,this$,ks);
}));

(reforms.binding.protocol._path["_"] = (function (this$){
return om.core.path.call(null,this$);
}));

//# sourceMappingURL=om.js.map