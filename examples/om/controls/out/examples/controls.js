// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.controls');
goog.require('cljs.core');
goog.require('reforms.om');
goog.require('om.core');
goog.require('sablono.core');
goog.require('examples.shared.utils');
examples.controls.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#c26b66"], null)], null));
examples.controls.simple_view = (function examples$controls$simple_view(data,_owner){
if(typeof examples.controls.t12270 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.controls.t12270 = (function (simple_view,data,_owner,meta12271){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta12271 = meta12271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.controls.t12270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12272,meta12271__$1){
var self__ = this;
var _12272__$1 = this;
return (new examples.controls.t12270(self__.simple_view,self__.data,self__._owner,meta12271__$1));
});

examples.controls.t12270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12272){
var self__ = this;
var _12272__$1 = this;
return self__.meta12271;
});

examples.controls.t12270.prototype.om$core$IRender$ = true;

examples.controls.t12270.prototype.om$core$IRender$render$arity$1 = (function (this__7868__auto__){
var self__ = this;
var this__7868__auto____$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_12273 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),false], null)], null));

try{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"h1"], null),"Supported controls"], null),reforms.om.panel.call(null,"Panel",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 3"], null)),reforms.om.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_12273,this__7868__auto____$1){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_12273,this__7868__auto____$1))
], null),reforms.om.text.call(null,"Text","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null)),reforms.om.password.call(null,"Password","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null)),reforms.om.textarea.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),(8)], null),"Textarea","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)),reforms.om.select.call(null,"Select",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option1","option1",-243284328),"Option 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option2","option2",-1826934888),"Option 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option3","option3",-1459092684),"Option 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option4","option4",-462338057),"Option 4"], null)], null)),reforms.om.button.call(null,"Button",((function (_STAR_options_STAR_12273,this__7868__auto____$1){
return (function (){
return alert("Click");
});})(_STAR_options_STAR_12273,this__7868__auto____$1))
),reforms.om.button_primary.call(null,"Primary button",((function (_STAR_options_STAR_12273,this__7868__auto____$1){
return (function (){
return alert("Click");
});})(_STAR_options_STAR_12273,this__7868__auto____$1))
),reforms.om.button_default.call(null,"Default button",((function (_STAR_options_STAR_12273,this__7868__auto____$1){
return (function (){
return alert("Click");
});})(_STAR_options_STAR_12273,this__7868__auto____$1))
),reforms.om.checkbox.call(null,"Checkbox",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null)),reforms.om.radio.call(null,"Radio",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null)),reforms.om.datetime_local.call(null,"Datetime local","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072)], null)),reforms.om.date.call(null,"Date","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null)),reforms.om.month.call(null,"Month","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533)], null)),reforms.om.time.call(null,"Time","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null)),reforms.om.week.call(null,"Week","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week","week",-1326473278)], null)),reforms.om.number.call(null,"Number","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)),reforms.om.email.call(null,"Email","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706)], null)),reforms.om.url.call(null,"Url","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null)),reforms.om.search.call(null,"Search","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null)),reforms.om.tel.call(null,"Tel","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tel","tel",224138159)], null)),reforms.om.color.call(null,"Color","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null)))], null);
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_12273;
}})());
});

examples.controls.t12270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta12271","meta12271",1457804876,null)], null);
});

examples.controls.t12270.cljs$lang$type = true;

examples.controls.t12270.cljs$lang$ctorStr = "examples.controls/t12270";

examples.controls.t12270.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.controls/t12270");
});

examples.controls.__GT_t12270 = (function examples$controls$simple_view_$___GT_t12270(simple_view__$1,data__$1,_owner__$1,meta12271){
return (new examples.controls.t12270(simple_view__$1,data__$1,_owner__$1,meta12271));
});

}

return (new examples.controls.t12270(examples$controls$simple_view,data,_owner,null));
});
examples.controls.main_view = (function examples$controls$main_view(app_state,_owner){
if(typeof examples.controls.t12278 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.controls.t12278 = (function (main_view,app_state,_owner,meta12279){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta12279 = meta12279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.controls.t12278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12280,meta12279__$1){
var self__ = this;
var _12280__$1 = this;
return (new examples.controls.t12278(self__.main_view,self__.app_state,self__._owner,meta12279__$1));
});

examples.controls.t12278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12280){
var self__ = this;
var _12280__$1 = this;
return self__.meta12279;
});

examples.controls.t12278.prototype.om$core$IRender$ = true;

examples.controls.t12278.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var attrs12281 = om.core.build.call(null,examples.controls.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs12281))?sablono.interpreter.attributes.call(null,attrs12281):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12281))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12281),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state))], null))));
});

examples.controls.t12278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta12279","meta12279",127453927,null)], null);
});

examples.controls.t12278.cljs$lang$type = true;

examples.controls.t12278.cljs$lang$ctorStr = "examples.controls/t12278";

examples.controls.t12278.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.controls/t12278");
});

examples.controls.__GT_t12278 = (function examples$controls$main_view_$___GT_t12278(main_view__$1,app_state__$1,_owner__$1,meta12279){
return (new examples.controls.t12278(main_view__$1,app_state__$1,_owner__$1,meta12279));
});

}

return (new examples.controls.t12278(examples$controls$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.controls.main_view,examples.controls.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=controls.js.map