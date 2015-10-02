// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.om_state');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('om.core');
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
var or__4709__auto__ = om.core.cursor_QMARK_.call(null,this$);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return om.core.component_QMARK_.call(null,this$);
}
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return cljs.core.deref.call(null,this$);
} else {
return om.core.get_state.call(null,this$);
}
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__156664 = null;
var G__156664__2 = (function (this$,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.update_BANG_.call(null,this$,v);
} else {
return om.core.set_state_BANG_.call(null,this$,v);
}
});
var G__156664__3 = (function (this$,ks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.update_BANG_.call(null,this$,ks,v);
} else {
return om.core.set_state_BANG_.call(null,this$,ks,v);
}
});
G__156664 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__156664__2.call(this,this$,ks);
case 3:
return G__156664__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__156664.cljs$core$IFn$_invoke$arity$2 = G__156664__2;
G__156664.cljs$core$IFn$_invoke$arity$3 = G__156664__3;
return G__156664;
})()
);

(reforms.binding.protocol._swap_BANG_["_"] = (function() {
var G__156665 = null;
var G__156665__2 = (function (this$,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.transact_BANG_.call(null,this$,f);
} else {
return om.core.set_state_BANG_.call(null,this$,f.call(null,om.core.get_state.call(null,this$)));
}
});
var G__156665__3 = (function (this$,ks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.transact_BANG_.call(null,this$,ks,f);
} else {
return om.core.set_state_BANG_.call(null,this$,ks,f.call(null,om.core.get_state.call(null,this$)));
}
});
G__156665 = function(this$,ks,f){
switch(arguments.length){
case 2:
return G__156665__2.call(this,this$,ks);
case 3:
return G__156665__3.call(this,this$,ks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__156665.cljs$core$IFn$_invoke$arity$2 = G__156665__2;
G__156665.cljs$core$IFn$_invoke$arity$3 = G__156665__3;
return G__156665;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return cljs.core.get_in.call(null,this$,ks);
} else {
return om.core.get_state.call(null,this$,ks);
}
}));

(reforms.binding.protocol._path["_"] = (function (this$){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.path.call(null,this$);
} else {
return null;
}
}));

//# sourceMappingURL=om_state.js.map