// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.controls');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('examples.shared.utils');
examples.controls.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#c26b66"], null)], null));
examples.controls.simple_view = (function examples$controls$simple_view(data,_owner){
if(typeof examples.controls.t36786 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.controls.t36786 = (function (simple_view,data,_owner,meta36787){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta36787 = meta36787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.controls.t36786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36788,meta36787__$1){
var self__ = this;
var _36788__$1 = this;
return (new examples.controls.t36786(self__.simple_view,self__.data,self__._owner,meta36787__$1));
});

examples.controls.t36786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36788){
var self__ = this;
var _36788__$1 = this;
return self__.meta36787;
});

examples.controls.t36786.prototype.om$core$IRender$ = true;

examples.controls.t36786.prototype.om$core$IRender$render$arity$1 = (function (this__7878__auto__){
var self__ = this;
var this__7878__auto____$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_36789 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),false], null)], null));

try{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Supported controls"], null),reforms.core.panel.call(null,"Panel",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 3"], null)),reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_36789,this__7878__auto____$1){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_36789,this__7878__auto____$1))
], null),reforms.core.text.call(null,"Text","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null)),reforms.core.password.call(null,"Password","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null)),reforms.core.textarea.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),(8)], null),"Textarea","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)),reforms.core.select.call(null,"Select",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option1","option1",-243284328),"Option 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option2","option2",-1826934888),"Option 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option3","option3",-1459092684),"Option 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option4","option4",-462338057),"Option 4"], null)], null)),reforms.core.button.call(null,"Button",((function (_STAR_options_STAR_36789,this__7878__auto____$1){
return (function (){
return alert("Click");
});})(_STAR_options_STAR_36789,this__7878__auto____$1))
),reforms.core.button_primary.call(null,"Primary button",((function (_STAR_options_STAR_36789,this__7878__auto____$1){
return (function (){
return alert("Click");
});})(_STAR_options_STAR_36789,this__7878__auto____$1))
),reforms.core.button_default.call(null,"Default button",((function (_STAR_options_STAR_36789,this__7878__auto____$1){
return (function (){
return alert("Click");
});})(_STAR_options_STAR_36789,this__7878__auto____$1))
),reforms.core.checkbox.call(null,"Checkbox",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null)),reforms.core.radio.call(null,"Radio",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null)),reforms.core.datetime_local.call(null,"Datetime local","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072)], null)),reforms.core.date.call(null,"Date","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null)),reforms.core.month.call(null,"Month","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533)], null)),reforms.core.time.call(null,"Time","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null)),reforms.core.week.call(null,"Week","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week","week",-1326473278)], null)),reforms.core.number.call(null,"Number","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null)),reforms.core.email.call(null,"Email","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706)], null)),reforms.core.url.call(null,"Url","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null)),reforms.core.search.call(null,"Search","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null)),reforms.core.tel.call(null,"Tel","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tel","tel",224138159)], null)),reforms.core.color.call(null,"Color","A placeholder",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null)))], null);
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_36789;
}})());
});

examples.controls.t36786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta36787","meta36787",1512955545,null)], null);
});

examples.controls.t36786.cljs$lang$type = true;

examples.controls.t36786.cljs$lang$ctorStr = "examples.controls/t36786";

examples.controls.t36786.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.controls/t36786");
});

examples.controls.__GT_t36786 = (function examples$controls$simple_view_$___GT_t36786(simple_view__$1,data__$1,_owner__$1,meta36787){
return (new examples.controls.t36786(simple_view__$1,data__$1,_owner__$1,meta36787));
});

}

return (new examples.controls.t36786(examples$controls$simple_view,data,_owner,null));
});
examples.controls.main_view = (function examples$controls$main_view(app_state,_owner){
if(typeof examples.controls.t36794 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.controls.t36794 = (function (main_view,app_state,_owner,meta36795){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta36795 = meta36795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.controls.t36794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36796,meta36795__$1){
var self__ = this;
var _36796__$1 = this;
return (new examples.controls.t36794(self__.main_view,self__.app_state,self__._owner,meta36795__$1));
});

examples.controls.t36794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36796){
var self__ = this;
var _36796__$1 = this;
return self__.meta36795;
});

examples.controls.t36794.prototype.om$core$IRender$ = true;

examples.controls.t36794.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var attrs36797 = om.core.build.call(null,examples.controls.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36797))?sablono.interpreter.attributes.call(null,attrs36797):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs36797))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36797),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state))], null))));
});

examples.controls.t36794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta36795","meta36795",-841496977,null)], null);
});

examples.controls.t36794.cljs$lang$type = true;

examples.controls.t36794.cljs$lang$ctorStr = "examples.controls/t36794";

examples.controls.t36794.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.controls/t36794");
});

examples.controls.__GT_t36794 = (function examples$controls$main_view_$___GT_t36794(main_view__$1,app_state__$1,_owner__$1,meta36795){
return (new examples.controls.t36794(main_view__$1,app_state__$1,_owner__$1,meta36795));
});

}

return (new examples.controls.t36794(examples$controls$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.controls.main_view,examples.controls.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=controls.js.map