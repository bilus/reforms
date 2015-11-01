// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.simple');
goog.require('cljs.core');
goog.require('reforms.om');
goog.require('om.core');
goog.require('sablono.core');
goog.require('examples.shared.utils');
examples.simple.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"private","private",-558947994)], null)], null));
if(typeof examples.simple.render_details !== 'undefined'){
} else {
examples.simple.render_details = (function (){var method_table__5506__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5507__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5508__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5509__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5510__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"examples.simple","render-details"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5510__auto__,method_table__5506__auto__,prefer_table__5507__auto__,method_cache__5508__auto__,cached_hierarchy__5509__auto__));
})();
}
cljs.core._add_method.call(null,examples.simple.render_details,new cljs.core.Keyword(null,"private","private",-558947994),(function (customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.om.text.call(null,"Last name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter last name")),reforms.om.text.call(null,"First name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter first name"));
}));
cljs.core._add_method.call(null,examples.simple.render_details,new cljs.core.Keyword(null,"corporate","corporate",2037871850),(function (customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.om.select.call(null,"Country",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"country","country",312965309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",746429226),"USA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gb","gb",1226072392),"United Kingdom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pl","pl",-1690940563),"Poland"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"de","de",1547124116),"Germany"], null)], null))),reforms.om.text.call(null,"Reg number",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reg-no","reg-no",1596254887)], null))),reforms.om.text.call(null,"Company name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-name","company-name",1213910953)], null)));
}));
examples.simple.render_address = (function examples$simple$render_address(customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.om.text.call(null,"City",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter city name")),reforms.om.text.call(null,customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address2","address2",1133017811)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter address line 2")),reforms.om.text.call(null,"Address",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address1","address1",1491072176)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter address line 1"));
});
examples.simple.customer_form_view = (function examples$simple$customer_form_view(customer,_owner){
if(typeof examples.simple.t_examples$simple8739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.simple.t_examples$simple8739 = (function (customer_form_view,customer,_owner,meta8740){
this.customer_form_view = customer_form_view;
this.customer = customer;
this._owner = _owner;
this.meta8740 = meta8740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.simple.t_examples$simple8739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8741,meta8740__$1){
var self__ = this;
var _8741__$1 = this;
return (new examples.simple.t_examples$simple8739(self__.customer_form_view,self__.customer,self__._owner,meta8740__$1));
});

examples.simple.t_examples$simple8739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8741){
var self__ = this;
var _8741__$1 = this;
return self__.meta8740;
});

examples.simple.t_examples$simple8739.prototype.om$core$IRender$ = true;

examples.simple.t_examples$simple8739.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.form.call(null,reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-main"], null),"Customer info"),reforms.om.select.call(null,"Customer type",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"private","private",-558947994),"Private"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"corporate","corporate",2037871850),"Corporate"], null)], null)),reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-minor"], null),"Details"),examples.simple.render_details.call(null,self__.customer),reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-minor"], null),"Address"),examples.simple.render_address.call(null,self__.customer),reforms.om.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-main"], null),"Access credentials"),reforms.om.text.call(null,"Login",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter login"),reforms.om.password.call(null,"Password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter password"),reforms.om.form_buttons.call(null,reforms.om.button.call(null,"Save",((function (___$1){
return (function (){
return alert("clicked");
});})(___$1))
))));
});

examples.simple.t_examples$simple8739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"customer-form-view","customer-form-view",601730341,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta8740","meta8740",-1543359150,null)], null);
});

examples.simple.t_examples$simple8739.cljs$lang$type = true;

examples.simple.t_examples$simple8739.cljs$lang$ctorStr = "examples.simple/t_examples$simple8739";

examples.simple.t_examples$simple8739.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"examples.simple/t_examples$simple8739");
});

examples.simple.__GT_t_examples$simple8739 = (function examples$simple$customer_form_view_$___GT_t_examples$simple8739(customer_form_view__$1,customer__$1,_owner__$1,meta8740){
return (new examples.simple.t_examples$simple8739(customer_form_view__$1,customer__$1,_owner__$1,meta8740));
});

}

return (new examples.simple.t_examples$simple8739(examples$simple$customer_form_view,customer,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.simple.main_view = (function examples$simple$main_view(app_state,_owner){
if(typeof examples.simple.t_examples$simple8749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.simple.t_examples$simple8749 = (function (main_view,app_state,_owner,meta8750){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta8750 = meta8750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.simple.t_examples$simple8749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8751,meta8750__$1){
var self__ = this;
var _8751__$1 = this;
return (new examples.simple.t_examples$simple8749(self__.main_view,self__.app_state,self__._owner,meta8750__$1));
});

examples.simple.t_examples$simple8749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8751){
var self__ = this;
var _8751__$1 = this;
return self__.meta8750;
});

examples.simple.t_examples$simple8749.prototype.om$core$IRender$ = true;

examples.simple.t_examples$simple8749.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.simple.customer_form_view,new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.simple.t_examples$simple8749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta8750","meta8750",1006117461,null)], null);
});

examples.simple.t_examples$simple8749.cljs$lang$type = true;

examples.simple.t_examples$simple8749.cljs$lang$ctorStr = "examples.simple/t_examples$simple8749";

examples.simple.t_examples$simple8749.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"examples.simple/t_examples$simple8749");
});

examples.simple.__GT_t_examples$simple8749 = (function examples$simple$main_view_$___GT_t_examples$simple8749(main_view__$1,app_state__$1,_owner__$1,meta8750){
return (new examples.simple.t_examples$simple8749(main_view__$1,app_state__$1,_owner__$1,meta8750));
});

}

return (new examples.simple.t_examples$simple8749(examples$simple$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
reforms.om.set_options_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #BBB",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEFEF",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null)], null),new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null)], null)], null));
om.core.root.call(null,examples.simple.main_view,examples.simple.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=simple.js.map