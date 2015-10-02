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
var G__157302 = null;
var G__157302__2 = (function (this$,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.update_BANG_.call(null,this$,v);
} else {
return om.core.set_state_BANG_.call(null,this$,v);
}
});
var G__157302__3 = (function (this$,ks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.update_BANG_.call(null,this$,ks,v);
} else {
return om.core.set_state_BANG_.call(null,this$,ks,v);
}
});
G__157302 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__157302__2.call(this,this$,ks);
case 3:
return G__157302__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__157302.cljs$core$IFn$_invoke$arity$2 = G__157302__2;
G__157302.cljs$core$IFn$_invoke$arity$3 = G__157302__3;
return G__157302;
})()
);

(reforms.binding.protocol._swap_BANG_["_"] = (function() {
var G__157303 = null;
var G__157303__2 = (function (this$,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.transact_BANG_.call(null,this$,f);
} else {
return om.core.set_state_BANG_.call(null,this$,f.call(null,om.core.get_state.call(null,this$)));
}
});
var G__157303__3 = (function (this$,ks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,this$))){
return om.core.transact_BANG_.call(null,this$,ks,f);
} else {
return om.core.set_state_BANG_.call(null,this$,ks,f.call(null,om.core.get_state.call(null,this$)));
}
});
G__157303 = function(this$,ks,f){
switch(arguments.length){
case 2:
return G__157303__2.call(this,this$,ks);
case 3:
return G__157303__3.call(this,this$,ks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__157303.cljs$core$IFn$_invoke$arity$2 = G__157303__2;
G__157303.cljs$core$IFn$_invoke$arity$3 = G__157303__3;
return G__157303;
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