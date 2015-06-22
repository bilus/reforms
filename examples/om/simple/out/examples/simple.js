// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.simple');
goog.require('cljs.core');
goog.require('reforms.om');
goog.require('om.core');
goog.require('sablono.core');
goog.require('examples.shared.utils');
examples.simple.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"private","private",-558947994)], null)], null));
if(typeof examples.simple.render_details !== 'undefined'){
} else {
examples.simple.render_details = (function (){var method_table__5234__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5235__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5236__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5238__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"examples.simple","render-details"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5238__auto__,method_table__5234__auto__,prefer_table__5235__auto__,method_cache__5236__auto__,cached_hierarchy__5237__auto__));
})();
}
cljs.core._add_method.call(null,examples.simple.render_details,new cljs.core.Keyword(null,"private","private",-558947994),(function (customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.om.text.call(null,"Last name","Enter last name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null))),reforms.om.text.call(null,"First name","Enter first name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null)));
}));
cljs.core._add_method.call(null,examples.simple.render_details,new cljs.core.Keyword(null,"corporate","corporate",2037871850),(function (customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.om.select.call(null,"Country",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"country","country",312965309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",746429226),"USA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gb","gb",1226072392),"United Kingdom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pl","pl",-1690940563),"Poland"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"de","de",1547124116),"Germany"], null)], null))),reforms.om.text.call(null,"Reg number","",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reg-no","reg-no",1596254887)], null))),reforms.om.text.call(null,"Company name","",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-name","company-name",1213910953)], null)));
}));
examples.simple.render_address = (function examples$simple$render_address(customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.om.text.call(null,"City","Enter city name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null))),reforms.om.text.call(null,"Address 2","Enter address line 2",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address2","address2",1133017811)], null))),reforms.om.text.call(null,"Address 1","Enter address line 1",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address1","address1",1491072176)], null)));
});
examples.simple.customer_form_view = (function examples$simple$customer_form_view(customer,_owner){
if(typeof examples.simple.t8407 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.t8407 = (function (customer_form_view,customer,_owner,meta8408){
this.customer_form_view = customer_form_view;
this.customer = customer;
this._owner = _owner;
this.meta8408 = meta8408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.simple.t8407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8409,meta8408__$1){
var self__ = this;
var _8409__$1 = this;
return (new examples.simple.t8407(self__.customer_form_view,self__.customer,self__._owner,meta8408__$1));
});

examples.simple.t8407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8409){
var self__ = this;
var _8409__$1 = this;
return self__.meta8408;
});

examples.simple.t8407.prototype.om$core$IRender$ = true;

examples.simple.t8407.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.form.call(null,reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-main"], null),"Customer info"),reforms.om.select.call(null,"Customer type",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"private","private",-558947994),"Private"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"corporate","corporate",2037871850),"Corporate"], null)], null)),reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-minor"], null),"Details"),examples.simple.render_details.call(null,self__.customer),reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-minor"], null),"Address"),examples.simple.render_address.call(null,self__.customer),reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-main"], null),"Access credentials"),reforms.om.text.call(null,"Login","Enter login",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null)),reforms.om.password.call(null,"Password","Enter password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null)),reforms.om.form_buttons.call(null,reforms.om.button.call(null,"Save",((function (___$1){
return (function (){
return alert("clicked");
});})(___$1))
))));
});

examples.simple.t8407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"customer-form-view","customer-form-view",601730341,null),new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta8408","meta8408",-1683261710,null)], null);
});

examples.simple.t8407.cljs$lang$type = true;

examples.simple.t8407.cljs$lang$ctorStr = "examples.simple/t8407";

examples.simple.t8407.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.simple/t8407");
});

examples.simple.__GT_t8407 = (function examples$simple$customer_form_view_$___GT_t8407(customer_form_view__$1,customer__$1,_owner__$1,meta8408){
return (new examples.simple.t8407(customer_form_view__$1,customer__$1,_owner__$1,meta8408));
});

}

return (new examples.simple.t8407(examples$simple$customer_form_view,customer,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.simple.main_view = (function examples$simple$main_view(app_state,_owner){
if(typeof examples.simple.t8417 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.t8417 = (function (main_view,app_state,_owner,meta8418){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta8418 = meta8418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.simple.t8417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8419,meta8418__$1){
var self__ = this;
var _8419__$1 = this;
return (new examples.simple.t8417(self__.main_view,self__.app_state,self__._owner,meta8418__$1));
});

examples.simple.t8417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8419){
var self__ = this;
var _8419__$1 = this;
return self__.meta8418;
});

examples.simple.t8417.prototype.om$core$IRender$ = true;

examples.simple.t8417.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.simple.customer_form_view,new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.simple.t8417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta8418","meta8418",1816979166,null)], null);
});

examples.simple.t8417.cljs$lang$type = true;

examples.simple.t8417.cljs$lang$ctorStr = "examples.simple/t8417";

examples.simple.t8417.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.simple/t8417");
});

examples.simple.__GT_t8417 = (function examples$simple$main_view_$___GT_t8417(main_view__$1,app_state__$1,_owner__$1,meta8418){
return (new examples.simple.t8417(main_view__$1,app_state__$1,_owner__$1,meta8418));
});

}

return (new examples.simple.t8417(examples$simple$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
reforms.om.set_options_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #BBB",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEFEF",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null)], null),new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null)], null)], null));
om.core.root.call(null,examples.simple.main_view,examples.simple.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=simple.js.map