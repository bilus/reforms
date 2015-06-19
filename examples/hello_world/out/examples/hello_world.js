// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.hello_world');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('om.core');
goog.require('sablono.core');
examples.hello_world.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270),false], null)], null));
examples.hello_world.simple_view = (function examples$hello_world$simple_view(data,_owner){
if(typeof examples.hello_world.t37044 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.hello_world.t37044 = (function (simple_view,data,_owner,meta37045){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta37045 = meta37045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.hello_world.t37044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37046,meta37045__$1){
var self__ = this;
var _37046__$1 = this;
return (new examples.hello_world.t37044(self__.simple_view,self__.data,self__._owner,meta37045__$1));
});

examples.hello_world.t37044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37046){
var self__ = this;
var _37046__$1 = this;
return self__.meta37045;
});

examples.hello_world.t37044.prototype.om$core$IRender$ = true;

examples.hello_world.t37044.prototype.om$core$IRender$render$arity$1 = (function (this__7878__auto__){
var self__ = this;
var this__7878__auto____$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_37047 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null));

try{return reforms.core.panel.call(null,"Hello, world",reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_37047,this__7878__auto____$1){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_37047,this__7878__auto____$1))
], null),reforms.core.text.call(null,"Your name","Type your name here",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)),reforms.core.form_buttons.call(null,reforms.core.button_primary.call(null,"Submit",((function (_STAR_options_STAR_37047,this__7878__auto____$1){
return (function (){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)));
});})(_STAR_options_STAR_37047,this__7878__auto____$1))
),reforms.core.button_default.call(null,"Cancel",((function (_STAR_options_STAR_37047,this__7878__auto____$1){
return (function (){
return alert("Cancel!");
});})(_STAR_options_STAR_37047,this__7878__auto____$1))
)),reforms.core.checkbox.call(null,"Horizontal form",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270)], null))));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_37047;
}})());
});

examples.hello_world.t37044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta37045","meta37045",-1648473940,null)], null);
});

examples.hello_world.t37044.cljs$lang$type = true;

examples.hello_world.t37044.cljs$lang$ctorStr = "examples.hello-world/t37044";

examples.hello_world.t37044.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.hello-world/t37044");
});

examples.hello_world.__GT_t37044 = (function examples$hello_world$simple_view_$___GT_t37044(simple_view__$1,data__$1,_owner__$1,meta37045){
return (new examples.hello_world.t37044(simple_view__$1,data__$1,_owner__$1,meta37045));
});

}

return (new examples.hello_world.t37044(examples$hello_world$simple_view,data,_owner,null));
});
examples.hello_world.main_view = (function examples$hello_world$main_view(app_state,_owner){
if(typeof examples.hello_world.t37055 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.hello_world.t37055 = (function (main_view,app_state,_owner,meta37056){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta37056 = meta37056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.hello_world.t37055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37057,meta37056__$1){
var self__ = this;
var _37057__$1 = this;
return (new examples.hello_world.t37055(self__.main_view,self__.app_state,self__._owner,meta37056__$1));
});

examples.hello_world.t37055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37057){
var self__ = this;
var _37057__$1 = this;
return self__.meta37056;
});

examples.hello_world.t37055.prototype.om$core$IRender$ = true;

examples.hello_world.t37055.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.hello_world.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});

examples.hello_world.t37055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta37056","meta37056",-2041690936,null)], null);
});

examples.hello_world.t37055.cljs$lang$type = true;

examples.hello_world.t37055.cljs$lang$ctorStr = "examples.hello-world/t37055";

examples.hello_world.t37055.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.hello-world/t37055");
});

examples.hello_world.__GT_t37055 = (function examples$hello_world$main_view_$___GT_t37055(main_view__$1,app_state__$1,_owner__$1,meta37056){
return (new examples.hello_world.t37055(main_view__$1,app_state__$1,_owner__$1,meta37056));
});

}

return (new examples.hello_world.t37055(examples$hello_world$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.hello_world.main_view,examples.hello_world.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=hello_world.js.map