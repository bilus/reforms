// Compiled by ClojureScript 0.0-3211 {}
goog.provide('examples.simple');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om_forms.core');
examples.simple.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.simple.view = (function examples$simple$view(data,owner){
if(typeof examples.simple.t8577 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.t8577 = (function (owner,data,view,meta8578){
this.owner = owner;
this.data = data;
this.view = view;
this.meta8578 = meta8578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.t8577.prototype.om$core$IRender$ = true;

examples.simple.t8577.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,"Hello, world");
});

examples.simple.t8577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8579){
var self__ = this;
var _8579__$1 = this;
return self__.meta8578;
});

examples.simple.t8577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8579,meta8578__$1){
var self__ = this;
var _8579__$1 = this;
return (new examples.simple.t8577(self__.owner,self__.data,self__.view,meta8578__$1));
});

examples.simple.t8577.cljs$lang$type = true;

examples.simple.t8577.cljs$lang$ctorStr = "examples.simple/t8577";

examples.simple.t8577.cljs$lang$ctorPrWriter = (function (this__4914__auto__,writer__4915__auto__,opt__4916__auto__){
return cljs.core._write.call(null,writer__4915__auto__,"examples.simple/t8577");
});

examples.simple.__GT_t8577 = (function examples$simple$view_$___GT_t8577(owner__$1,data__$1,view__$1,meta8578){
return (new examples.simple.t8577(owner__$1,data__$1,view__$1,meta8578));
});

}

return (new examples.simple.t8577(owner,data,examples$simple$view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.simple.view,examples.simple.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=simple.js.map