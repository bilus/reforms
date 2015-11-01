// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.om');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('om.core');
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
return om.core.cursor_QMARK_.call(null,this$);
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
return cljs.core.deref.call(null,this$);
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__23110 = null;
var G__23110__2 = (function (this$,v){
return om.core.update_BANG_.call(null,this$,v);
});
var G__23110__3 = (function (this$,ks,v){
return om.core.update_BANG_.call(null,this$,ks,v);
});
G__23110 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__23110__2.call(this,this$,ks);
case 3:
return G__23110__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23110.cljs$core$IFn$_invoke$arity$2 = G__23110__2;
G__23110.cljs$core$IFn$_invoke$arity$3 = G__23110__3;
return G__23110;
})()
);

(reforms.binding.protocol._swap_BANG_["_"] = (function() {
var G__23111 = null;
var G__23111__2 = (function (this$,f){
return om.core.transact_BANG_.call(null,this$,f);
});
var G__23111__3 = (function (this$,ks,f){
return om.core.transact_BANG_.call(null,this$,ks,f);
});
G__23111 = function(this$,ks,f){
switch(arguments.length){
case 2:
return G__23111__2.call(this,this$,ks);
case 3:
return G__23111__3.call(this,this$,ks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23111.cljs$core$IFn$_invoke$arity$2 = G__23111__2;
G__23111.cljs$core$IFn$_invoke$arity$3 = G__23111__3;
return G__23111;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.call(null,this$,ks);
}));

(reforms.binding.protocol._path["_"] = (function (this$){
return om.core.path.call(null,this$);
}));

//# sourceMappingURL=om.js.map