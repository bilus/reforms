// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.controls');
goog.require('cljs.core');
goog.require('reforms.table');
goog.require('reforms.validation');
goog.require('reforms.om');
goog.require('sablono.core');
goog.require('examples.shared.utils');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.controls.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#c26b66",new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"login","login",55217519),cljs.core.PersistentArrayMap.EMPTY], null)], null));
examples.controls.simple_view = (function examples$controls$simple_view(data,_owner){
if(typeof examples.controls.t_examples$controls164598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.controls.t_examples$controls164598 = (function (simple_view,data,_owner,meta164599){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta164599 = meta164599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.controls.t_examples$controls164598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164600,meta164599__$1){
var self__ = this;
var _164600__$1 = this;
return (new examples.controls.t_examples$controls164598(self__.simple_view,self__.data,self__._owner,meta164599__$1));
});

examples.controls.t_examples$controls164598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164600){
var self__ = this;
var _164600__$1 = this;
return self__.meta164599;
});

examples.controls.t_examples$controls164598.prototype.om$core$IRender$ = true;

examples.controls.t_examples$controls164598.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("h1",{"key": "h1"},"Supported controls"),React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col col-md-6"},React.createElement("h4",null,"Panel"),sablono.interpreter.interpret.call(null,reforms.om.panel.call(null,"Panel title",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 3"], null))),React.createElement("h4",null,"Auto-aligning form with validation"),sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_164621 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null))], null)], null));

try{return reforms.om.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_164621,___$1){
return (function (){
return alert("Logging in");
});})(_STAR_options_STAR_164621,___$1))
], null),reforms.om.text.call(null,"Username",self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"username","username",1605666410)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your login here"),reforms.om.password.call(null,"Password",self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your password"),reforms.om.checkbox.call(null,"Remember password",self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"remember","remember",766665467)], null)),reforms.om.button_group.call(null,reforms.om.button.call(null,"Login",((function (_STAR_options_STAR_164621,___$1){
return (function (){
return alert("Click!");
});})(_STAR_options_STAR_164621,___$1))
)));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_164621;
}})()),sablono.interpreter.interpret.call(null,reforms.om.checkbox.call(null,"Horizontal orientation",self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(self__.data))),React.createElement("h4",null,"Table"),sablono.interpreter.interpret.call(null,reforms.table.table.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tom",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jerry",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mickey",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Minnie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Hero name"], null))),React.createElement("h4",null,"Styled table"),React.createElement("div",null,"See ",React.createElement("a",{"href": "http://getbootstrap.com/css/#tables", "target": "_blank"},"Bootstrap tables")),sablono.interpreter.interpret.call(null,reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"styled-table",new cljs.core.Keyword(null,"class","class",-2030961996),"table-striped table-bordered"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tom",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jerry",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mickey",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Minnie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Hero name"], null))),React.createElement("h4",null,"Table with row selection"),sablono.interpreter.interpret.call(null,reforms.table.table.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tom",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jerry",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mickey",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Minnie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Hero name"], null),new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),self__.data,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"id","id",-1388402092)], null))),React.createElement("div",null,"Selection:"),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.data)))),React.createElement("div",{"className": "col col-md-6"},React.createElement("h4",null,"Buttons"),sablono.interpreter.interpret.call(null,reforms.om.button.call(null,"Button",((function (___$1){
return (function (){
return alert("Click");
});})(___$1))
)),sablono.interpreter.interpret.call(null,reforms.om.button_primary.call(null,"Primary button",((function (___$1){
return (function (){
return alert("Click");
});})(___$1))
)),sablono.interpreter.interpret.call(null,reforms.om.button_default.call(null,"Default button",((function (___$1){
return (function (){
return alert("Click");
});})(___$1))
)),React.createElement("h4",null,"Controls with automatic labels"),sablono.interpreter.interpret.call(null,reforms.om.text.call(null,"Text",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.password.call(null,"Password",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.textarea.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),(8)], null),"Textarea",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.select.call(null,"Select",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option1","option1",-243284328),"Option 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option2","option2",-1826934888),"Option 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option3","option3",-1459092684),"Option 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option4","option4",-462338057),"Option 4"], null)], null))),sablono.interpreter.interpret.call(null,reforms.om.checkbox.call(null,"Checkbox",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null))),sablono.interpreter.interpret.call(null,reforms.om.radio.call(null,"Radio",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null))),sablono.interpreter.interpret.call(null,reforms.om.datetime_local.call(null,"Date-time local",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.date.call(null,"Date",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.month.call(null,"Month",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.time.call(null,"Time",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.week.call(null,"Week",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week","week",-1326473278)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.number.call(null,"Number",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.email.call(null,"Email",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.url.call(null,"Url",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.search.call(null,"Search",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.tel.call(null,"Tel",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tel","tel",224138159)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.om.color.call(null,"Color",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")))));
});

examples.controls.t_examples$controls164598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta164599","meta164599",418939080,null)], null);
});

examples.controls.t_examples$controls164598.cljs$lang$type = true;

examples.controls.t_examples$controls164598.cljs$lang$ctorStr = "examples.controls/t_examples$controls164598";

examples.controls.t_examples$controls164598.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.controls/t_examples$controls164598");
});

examples.controls.__GT_t_examples$controls164598 = (function examples$controls$simple_view_$___GT_t_examples$controls164598(simple_view__$1,data__$1,_owner__$1,meta164599){
return (new examples.controls.t_examples$controls164598(simple_view__$1,data__$1,_owner__$1,meta164599));
});

}

return (new examples.controls.t_examples$controls164598(examples$controls$simple_view,data,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.controls.main_view = (function examples$controls$main_view(app_state,_owner){
if(typeof examples.controls.t_examples$controls164630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.controls.t_examples$controls164630 = (function (main_view,app_state,_owner,meta164631){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta164631 = meta164631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.controls.t_examples$controls164630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_164632,meta164631__$1){
var self__ = this;
var _164632__$1 = this;
return (new examples.controls.t_examples$controls164630(self__.main_view,self__.app_state,self__._owner,meta164631__$1));
});

examples.controls.t_examples$controls164630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_164632){
var self__ = this;
var _164632__$1 = this;
return self__.meta164631;
});

examples.controls.t_examples$controls164630.prototype.om$core$IRender$ = true;

examples.controls.t_examples$controls164630.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var attrs164633 = om.core.build.call(null,examples.controls.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs164633))?sablono.interpreter.attributes.call(null,attrs164633):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs164633))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",null,React.createElement("div",null,"Data"),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs164633),React.createElement("div",null,React.createElement("div",null,"Data"),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)))], null))));
});

examples.controls.t_examples$controls164630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta164631","meta164631",1419591390,null)], null);
});

examples.controls.t_examples$controls164630.cljs$lang$type = true;

examples.controls.t_examples$controls164630.cljs$lang$ctorStr = "examples.controls/t_examples$controls164630";

examples.controls.t_examples$controls164630.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.controls/t_examples$controls164630");
});

examples.controls.__GT_t_examples$controls164630 = (function examples$controls$main_view_$___GT_t_examples$controls164630(main_view__$1,app_state__$1,_owner__$1,meta164631){
return (new examples.controls.t_examples$controls164630(main_view__$1,app_state__$1,_owner__$1,meta164631));
});

}

return (new examples.controls.t_examples$controls164630(examples$controls$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.controls.main_view,examples.controls.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=controls.js.map