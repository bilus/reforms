// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.validation');
goog.require('cljs.core');
goog.require('reforms.validation');
goog.require('sablono.core');
goog.require('examples.shared.utils');
goog.require('om.core');
goog.require('clojure.string');
goog.require('reforms.core');
examples.validation.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"customers","customers",635915531),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"customer","customer",1742966319),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ui-state","ui-state",646932351),cljs.core.PersistentArrayMap.EMPTY], null));
examples.validation.customer_validators = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),"Enter first name"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),"Enter last name"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"Enter login name"),reforms.validation.equal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Passwords do not match"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),"Choose password"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Re-enter password")], null);
examples.validation.sign_up_BANG_ = (function examples$validation$sign_up_BANG_(customers,customer,ui_state){
if(cljs.core.truth_(cljs.core.apply.call(null,reforms.validation.validate_BANG_,customer,ui_state,examples.validation.customer_validators))){
return om.core.transact_BANG_.call(null,customers,(function (xs){
return cljs.core.conj.call(null,xs,cljs.core.deref.call(null,customer));
}));
} else {
return null;
}
});
examples.validation.signup_form_view = (function examples$validation$signup_form_view(p__38528,_owner){
var vec__38534 = p__38528;
var customers = cljs.core.nth.call(null,vec__38534,(0),null);
var customer = cljs.core.nth.call(null,vec__38534,(1),null);
var ui_state = cljs.core.nth.call(null,vec__38534,(2),null);
if(typeof examples.validation.t38535 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.validation.t38535 = (function (signup_form_view,p__38528,_owner,vec__38534,customers,customer,ui_state,meta38536){
this.signup_form_view = signup_form_view;
this.p__38528 = p__38528;
this._owner = _owner;
this.vec__38534 = vec__38534;
this.customers = customers;
this.customer = customer;
this.ui_state = ui_state;
this.meta38536 = meta38536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t38535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__38534,customers,customer,ui_state){
return (function (_38537,meta38536__$1){
var self__ = this;
var _38537__$1 = this;
return (new examples.validation.t38535(self__.signup_form_view,self__.p__38528,self__._owner,self__.vec__38534,self__.customers,self__.customer,self__.ui_state,meta38536__$1));
});})(vec__38534,customers,customer,ui_state))
;

examples.validation.t38535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__38534,customers,customer,ui_state){
return (function (_38537){
var self__ = this;
var _38537__$1 = this;
return self__.meta38536;
});})(vec__38534,customers,customer,ui_state))
;

examples.validation.t38535.prototype.om$core$IRender$ = true;

examples.validation.t38535.prototype.om$core$IRender$render$arity$1 = ((function (vec__38534,customers,customer,ui_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,reforms.core.panel.call(null,"Add customer",(function (){var _STAR_options_STAR_38538 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-horizontal","form-horizontal",479603727),true,new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589),"col-md-4",new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433),"col-md-8"], null));

try{return reforms.core.form.call(null,cljs.core.PersistentArrayMap.EMPTY,reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.ui_state),((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"First name","Enter first name",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null));
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
,((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"Last name","Enter last name",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null));
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
,((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"Login","Choose login",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
,((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return reforms.validation.password.call(null,"Password","Enter password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null));
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
,((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return reforms.validation.password.call(null,"Confirm password","Re-enter password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null));
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
,((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return reforms.core.form_buttons.call(null,reforms.core.button_primary.call(null,"Save",((function (_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state){
return (function (){
return examples.validation.sign_up_BANG_.call(null,self__.customers,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
));
});})(_STAR_options_STAR_38538,___$1,vec__38534,customers,customer,ui_state))
));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_38538;
}})()));
});})(vec__38534,customers,customer,ui_state))
;

examples.validation.t38535.getBasis = ((function (vec__38534,customers,customer,ui_state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"signup-form-view","signup-form-view",-2000434242,null),new cljs.core.Symbol(null,"p__38528","p__38528",1810964039,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"vec__38534","vec__38534",-662433742,null),new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null),new cljs.core.Symbol(null,"meta38536","meta38536",-1390900737,null)], null);
});})(vec__38534,customers,customer,ui_state))
;

examples.validation.t38535.cljs$lang$type = true;

examples.validation.t38535.cljs$lang$ctorStr = "examples.validation/t38535";

examples.validation.t38535.cljs$lang$ctorPrWriter = ((function (vec__38534,customers,customer,ui_state){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.validation/t38535");
});})(vec__38534,customers,customer,ui_state))
;

examples.validation.__GT_t38535 = ((function (vec__38534,customers,customer,ui_state){
return (function examples$validation$signup_form_view_$___GT_t38535(signup_form_view__$1,p__38528__$1,_owner__$1,vec__38534__$1,customers__$1,customer__$1,ui_state__$1,meta38536){
return (new examples.validation.t38535(signup_form_view__$1,p__38528__$1,_owner__$1,vec__38534__$1,customers__$1,customer__$1,ui_state__$1,meta38536));
});})(vec__38534,customers,customer,ui_state))
;

}

return (new examples.validation.t38535(examples$validation$signup_form_view,p__38528,_owner,vec__38534,customers,customer,ui_state,cljs.core.PersistentArrayMap.EMPTY));
});
examples.validation.customer_list_view = (function examples$validation$customer_list_view(customers,_owner){
if(typeof examples.validation.t38555 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.validation.t38555 = (function (customer_list_view,customers,_owner,meta38556){
this.customer_list_view = customer_list_view;
this.customers = customers;
this._owner = _owner;
this.meta38556 = meta38556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t38555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38557,meta38556__$1){
var self__ = this;
var _38557__$1 = this;
return (new examples.validation.t38555(self__.customer_list_view,self__.customers,self__._owner,meta38556__$1));
});

examples.validation.t38555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38557){
var self__ = this;
var _38557__$1 = this;
return self__.meta38556;
});

examples.validation.t38555.prototype.om$core$IRender$ = true;

examples.validation.t38555.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "customers"},React.createElement("h3",null,"Customers"),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.customers))?React.createElement("ul",{"className": "list-unstyled"},cljs.core.into_array.call(null,(function (){var iter__5103__auto__ = ((function (___$1){
return (function examples$validation$customer_list_view_$_iter__38563(s__38564){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__38564__$1 = s__38564;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__38564__$1);
if(temp__4423__auto__){
var s__38564__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38564__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__38564__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__38566 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__38565 = (0);
while(true){
if((i__38565 < size__5102__auto__)){
var map__38569 = cljs.core._nth.call(null,c__5101__auto__,i__38565);
var map__38569__$1 = ((cljs.core.seq_QMARK_.call(null,map__38569))?cljs.core.apply.call(null,cljs.core.hash_map,map__38569):map__38569);
var first = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__38569__$1,new cljs.core.Keyword(null,"last","last",1105735132));
cljs.core.chunk_append.call(null,b__38566,(function (){var attrs38560 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs38560))?sablono.interpreter.attributes.call(null,attrs38560):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs38560))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38560)], null))));
})());

var G__38571 = (i__38565 + (1));
i__38565 = G__38571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38566),examples$validation$customer_list_view_$_iter__38563.call(null,cljs.core.chunk_rest.call(null,s__38564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38566),null);
}
} else {
var map__38570 = cljs.core.first.call(null,s__38564__$2);
var map__38570__$1 = ((cljs.core.seq_QMARK_.call(null,map__38570))?cljs.core.apply.call(null,cljs.core.hash_map,map__38570):map__38570);
var first = cljs.core.get.call(null,map__38570__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__38570__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return cljs.core.cons.call(null,(function (){var attrs38560 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs38560))?sablono.interpreter.attributes.call(null,attrs38560):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs38560))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38560)], null))));
})(),examples$validation$customer_list_view_$_iter__38563.call(null,cljs.core.rest.call(null,s__38564__$2)));
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__5103__auto__.call(null,self__.customers);
})())):React.createElement("em",null,"No customers.")));
});

examples.validation.t38555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"customer-list-view","customer-list-view",-701607200,null),new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta38556","meta38556",-1457519369,null)], null);
});

examples.validation.t38555.cljs$lang$type = true;

examples.validation.t38555.cljs$lang$ctorStr = "examples.validation/t38555";

examples.validation.t38555.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.validation/t38555");
});

examples.validation.__GT_t38555 = (function examples$validation$customer_list_view_$___GT_t38555(customer_list_view__$1,customers__$1,_owner__$1,meta38556){
return (new examples.validation.t38555(customer_list_view__$1,customers__$1,_owner__$1,meta38556));
});

}

return (new examples.validation.t38555(examples$validation$customer_list_view,customers,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.validation.main_view = (function examples$validation$main_view(app_state,_owner){
if(typeof examples.validation.t38578 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.validation.t38578 = (function (main_view,app_state,_owner,meta38579){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta38579 = meta38579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t38578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38580,meta38579__$1){
var self__ = this;
var _38580__$1 = this;
return (new examples.validation.t38578(self__.main_view,self__.app_state,self__._owner,meta38579__$1));
});

examples.validation.t38578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38580){
var self__ = this;
var _38580__$1 = this;
return self__.meta38579;
});

examples.validation.t38578.prototype.om$core$IRender$ = true;

examples.validation.t38578.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("div",{"className": "row"},(function (){var attrs38581 = om.core.build.call(null,examples.validation.signup_form_view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38581))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4","col-md-offset-2"], null)], null),attrs38581)):{"className": "col-md-4 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs38581))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38581)], null))));
})(),(function (){var attrs38582 = om.core.build.call(null,examples.validation.customer_list_view,new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38582))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs38582)):{"className": "col-md-4"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs38582))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38582)], null))));
})()),React.createElement("div",{"className": "row"},(function (){var attrs38583 = om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38583))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-8","col-md-offset-2"], null)], null),attrs38583)):{"className": "col-md-8 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs38583))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38583)], null))));
})()));
});

examples.validation.t38578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta38579","meta38579",-1969583406,null)], null);
});

examples.validation.t38578.cljs$lang$type = true;

examples.validation.t38578.cljs$lang$ctorStr = "examples.validation/t38578";

examples.validation.t38578.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.validation/t38578");
});

examples.validation.__GT_t38578 = (function examples$validation$main_view_$___GT_t38578(main_view__$1,app_state__$1,_owner__$1,meta38579){
return (new examples.validation.t38578(main_view__$1,app_state__$1,_owner__$1,meta38579));
});

}

return (new examples.validation.t38578(examples$validation$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.validation.main_view,examples.validation.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=validation.js.map