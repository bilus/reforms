// Compiled by ClojureScript 0.0-3308 {}
goog.provide('progress.hello_world');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
progress.hello_world.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
progress.hello_world.simple_view = (function progress$hello_world$simple_view(data,_owner){
if(typeof progress.hello_world.t27505 !== 'undefined'){
} else {

/**
* @constructor
*/
progress.hello_world.t27505 = (function (simple_view,data,_owner,meta27506){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta27506 = meta27506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
progress.hello_world.t27505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27507,meta27506__$1){
var self__ = this;
var _27507__$1 = this;
return (new progress.hello_world.t27505(self__.simple_view,self__.data,self__._owner,meta27506__$1));
});

progress.hello_world.t27505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27507){
var self__ = this;
var _27507__$1 = this;
return self__.meta27506;
});

progress.hello_world.t27505.prototype.om$core$IRender$ = true;

progress.hello_world.t27505.prototype.om$core$IRender$render$arity$1 = (function (this__7878__auto__){
var self__ = this;
var this__7878__auto____$1 = this;
return sablono.interpreter.interpret.call(null,reforms.core.panel.call(null,"Progress",reforms.core.form.call(null,reforms.core.text.call(null,"Your name","Type your name here",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)),reforms.core.form_buttons.call(null,reforms.core.button_primary.call(null,"Successful operation",((function (this__7878__auto____$1){
return (function (){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)));
});})(this__7878__auto____$1))
),reforms.core.button_default.call(null,"Failing operation",((function (this__7878__auto____$1){
return (function (){
return alert("Cancel!");
});})(this__7878__auto____$1))
)),reforms.core.checkbox.call(null,"Horizontal form",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270)], null)))));
});

progress.hello_world.t27505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta27506","meta27506",-1052276881,null)], null);
});

progress.hello_world.t27505.cljs$lang$type = true;

progress.hello_world.t27505.cljs$lang$ctorStr = "progress.hello-world/t27505";

progress.hello_world.t27505.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"progress.hello-world/t27505");
});

progress.hello_world.__GT_t27505 = (function progress$hello_world$simple_view_$___GT_t27505(simple_view__$1,data__$1,_owner__$1,meta27506){
return (new progress.hello_world.t27505(simple_view__$1,data__$1,_owner__$1,meta27506));
});

}

return (new progress.hello_world.t27505(progress$hello_world$simple_view,data,_owner,null));
});
progress.hello_world.main_view = (function progress$hello_world$main_view(app_state,_owner){
if(typeof progress.hello_world.t27515 !== 'undefined'){
} else {

/**
* @constructor
*/
progress.hello_world.t27515 = (function (main_view,app_state,_owner,meta27516){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta27516 = meta27516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
progress.hello_world.t27515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27517,meta27516__$1){
var self__ = this;
var _27517__$1 = this;
return (new progress.hello_world.t27515(self__.main_view,self__.app_state,self__._owner,meta27516__$1));
});

progress.hello_world.t27515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27517){
var self__ = this;
var _27517__$1 = this;
return self__.meta27516;
});

progress.hello_world.t27515.prototype.om$core$IRender$ = true;

progress.hello_world.t27515.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,progress.hello_world.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});

progress.hello_world.t27515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta27516","meta27516",-1788332939,null)], null);
});

progress.hello_world.t27515.cljs$lang$type = true;

progress.hello_world.t27515.cljs$lang$ctorStr = "progress.hello-world/t27515";

progress.hello_world.t27515.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"progress.hello-world/t27515");
});

progress.hello_world.__GT_t27515 = (function progress$hello_world$main_view_$___GT_t27515(main_view__$1,app_state__$1,_owner__$1,meta27516){
return (new progress.hello_world.t27515(main_view__$1,app_state__$1,_owner__$1,meta27516));
});

}

return (new progress.hello_world.t27515(progress$hello_world$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,progress.hello_world.main_view,progress.hello_world.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=hello_world.js.map