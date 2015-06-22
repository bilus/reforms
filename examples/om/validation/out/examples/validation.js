// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.validation');
goog.require('cljs.core');
goog.require('reforms.validation');
goog.require('reforms.om');
goog.require('sablono.core');
goog.require('examples.shared.utils');
goog.require('om.core');
goog.require('clojure.string');
examples.validation.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"customers","customers",635915531),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),"New York"], null),new cljs.core.Keyword(null,"ui-state","ui-state",646932351),cljs.core.PersistentArrayMap.EMPTY], null));
examples.validation.positive_number_QMARK_ = (function examples$validation$positive_number_QMARK_(s){
return (parseInt(s) > (0));
});
examples.validation.positive_number = (function examples$validation$positive_number(korks,error_message){
return reforms.validation.is_true.call(null,korks,examples.validation.positive_number_QMARK_,error_message);
});
examples.validation.customer_validators = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),"Enter first name"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),"Enter last name"),examples.validation.positive_number.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),"Age must be a positive number"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"Enter login name"),reforms.validation.equal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Passwords do not match"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),"Choose password"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Re-enter password")], null);
examples.validation.sign_up_BANG_ = (function examples$validation$sign_up_BANG_(customers,customer,ui_state){
if(cljs.core.truth_(cljs.core.apply.call(null,reforms.validation.validate_BANG_,customer,ui_state,examples.validation.customer_validators))){
return om.core.transact_BANG_.call(null,customers,(function (xs){
return cljs.core.conj.call(null,xs,cljs.core.deref.call(null,customer));
}));
} else {
return null;
}
});
examples.validation.force_error_BANG_ = (function examples$validation$force_error_BANG_(customer,ui_state){
return reforms.validation.validate_BANG_.call(null,customer,ui_state,reforms.validation.force_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null),"An error has occurred"));
});
examples.validation.signup_form_view = (function examples$validation$signup_form_view(p__20065,_owner){
var vec__20071 = p__20065;
var customers = cljs.core.nth.call(null,vec__20071,(0),null);
var customer = cljs.core.nth.call(null,vec__20071,(1),null);
var ui_state = cljs.core.nth.call(null,vec__20071,(2),null);
if(typeof examples.validation.t20072 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.validation.t20072 = (function (signup_form_view,p__20065,_owner,vec__20071,customers,customer,ui_state,meta20073){
this.signup_form_view = signup_form_view;
this.p__20065 = p__20065;
this._owner = _owner;
this.vec__20071 = vec__20071;
this.customers = customers;
this.customer = customer;
this.ui_state = ui_state;
this.meta20073 = meta20073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t20072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__20071,customers,customer,ui_state){
return (function (_20074,meta20073__$1){
var self__ = this;
var _20074__$1 = this;
return (new examples.validation.t20072(self__.signup_form_view,self__.p__20065,self__._owner,self__.vec__20071,self__.customers,self__.customer,self__.ui_state,meta20073__$1));
});})(vec__20071,customers,customer,ui_state))
;

examples.validation.t20072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__20071,customers,customer,ui_state){
return (function (_20074){
var self__ = this;
var _20074__$1 = this;
return self__.meta20073;
});})(vec__20071,customers,customer,ui_state))
;

examples.validation.t20072.prototype.om$core$IRender$ = true;

examples.validation.t20072.prototype.om$core$IRender$render$arity$1 = ((function (vec__20071,customers,customer,ui_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.panel.call(null,"Add customer",(function (){var _STAR_options_STAR_20075 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-horizontal","form-horizontal",479603727),true,new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589),"col-md-4",new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433),"col-md-8"], null));

try{if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,self__.ui_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return examples.validation.sign_up_BANG_.call(null,self__.customers,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.ui_state),((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"First name","Enter first name",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"Last name","Enter last name",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"City","Where are you?",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null),new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594),((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (p1__20064_SHARP_){
if(cljs.core._EQ_.call(null,"Kansas",p1__20064_SHARP_)){
return null;
} else {
return "We're not in Kansas anymore";
}
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
);
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.number.call(null,"Age","Enter your age",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"Login","Choose login",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.password.call(null,"Password","Enter password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.password.call(null,"Confirm password","Re-enter password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
,((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return reforms.om.form_buttons.call(null,reforms.om.button_primary.call(null,"Save",((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return examples.validation.sign_up_BANG_.call(null,self__.customers,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
),reforms.om.button_default.call(null,"Simulate server error",((function (_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state){
return (function (){
return examples.validation.force_error_BANG_.call(null,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
));
});})(_STAR_options_STAR_20075,___$1,vec__20071,customers,customer,ui_state))
));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_20075;
}})()));
});})(vec__20071,customers,customer,ui_state))
;

examples.validation.t20072.getBasis = ((function (vec__20071,customers,customer,ui_state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"signup-form-view","signup-form-view",-2000434242,null),new cljs.core.Symbol(null,"p__20065","p__20065",480852024,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"vec__20071","vec__20071",2115097759,null),new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null),new cljs.core.Symbol(null,"meta20073","meta20073",1044284167,null)], null);
});})(vec__20071,customers,customer,ui_state))
;

examples.validation.t20072.cljs$lang$type = true;

examples.validation.t20072.cljs$lang$ctorStr = "examples.validation/t20072";

examples.validation.t20072.cljs$lang$ctorPrWriter = ((function (vec__20071,customers,customer,ui_state){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.validation/t20072");
});})(vec__20071,customers,customer,ui_state))
;

examples.validation.__GT_t20072 = ((function (vec__20071,customers,customer,ui_state){
return (function examples$validation$signup_form_view_$___GT_t20072(signup_form_view__$1,p__20065__$1,_owner__$1,vec__20071__$1,customers__$1,customer__$1,ui_state__$1,meta20073){
return (new examples.validation.t20072(signup_form_view__$1,p__20065__$1,_owner__$1,vec__20071__$1,customers__$1,customer__$1,ui_state__$1,meta20073));
});})(vec__20071,customers,customer,ui_state))
;

}

return (new examples.validation.t20072(examples$validation$signup_form_view,p__20065,_owner,vec__20071,customers,customer,ui_state,cljs.core.PersistentArrayMap.EMPTY));
});
examples.validation.customer_list_view = (function examples$validation$customer_list_view(customers,_owner){
if(typeof examples.validation.t20092 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.validation.t20092 = (function (customer_list_view,customers,_owner,meta20093){
this.customer_list_view = customer_list_view;
this.customers = customers;
this._owner = _owner;
this.meta20093 = meta20093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t20092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20094,meta20093__$1){
var self__ = this;
var _20094__$1 = this;
return (new examples.validation.t20092(self__.customer_list_view,self__.customers,self__._owner,meta20093__$1));
});

examples.validation.t20092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20094){
var self__ = this;
var _20094__$1 = this;
return self__.meta20093;
});

examples.validation.t20092.prototype.om$core$IRender$ = true;

examples.validation.t20092.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "customers"},React.createElement("h3",null,"Customers"),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.customers))?React.createElement("ul",{"className": "list-unstyled"},cljs.core.into_array.call(null,(function (){var iter__5093__auto__ = ((function (___$1){
return (function examples$validation$customer_list_view_$_iter__20100(s__20101){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__20101__$1 = s__20101;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__20101__$1);
if(temp__4423__auto__){
var s__20101__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20101__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__20101__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__20103 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__20102 = (0);
while(true){
if((i__20102 < size__5092__auto__)){
var map__20106 = cljs.core._nth.call(null,c__5091__auto__,i__20102);
var map__20106__$1 = ((cljs.core.seq_QMARK_.call(null,map__20106))?cljs.core.apply.call(null,cljs.core.hash_map,map__20106):map__20106);
var first = cljs.core.get.call(null,map__20106__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__20106__$1,new cljs.core.Keyword(null,"last","last",1105735132));
cljs.core.chunk_append.call(null,b__20103,(function (){var attrs20097 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs20097))?sablono.interpreter.attributes.call(null,attrs20097):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20097))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20097)], null))));
})());

var G__20108 = (i__20102 + (1));
i__20102 = G__20108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20103),examples$validation$customer_list_view_$_iter__20100.call(null,cljs.core.chunk_rest.call(null,s__20101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20103),null);
}
} else {
var map__20107 = cljs.core.first.call(null,s__20101__$2);
var map__20107__$1 = ((cljs.core.seq_QMARK_.call(null,map__20107))?cljs.core.apply.call(null,cljs.core.hash_map,map__20107):map__20107);
var first = cljs.core.get.call(null,map__20107__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__20107__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return cljs.core.cons.call(null,(function (){var attrs20097 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs20097))?sablono.interpreter.attributes.call(null,attrs20097):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20097))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20097)], null))));
})(),examples$validation$customer_list_view_$_iter__20100.call(null,cljs.core.rest.call(null,s__20101__$2)));
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
return iter__5093__auto__.call(null,self__.customers);
})())):React.createElement("em",null,"No customers.")));
});

examples.validation.t20092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"customer-list-view","customer-list-view",-701607200,null),new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta20093","meta20093",685593725,null)], null);
});

examples.validation.t20092.cljs$lang$type = true;

examples.validation.t20092.cljs$lang$ctorStr = "examples.validation/t20092";

examples.validation.t20092.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.validation/t20092");
});

examples.validation.__GT_t20092 = (function examples$validation$customer_list_view_$___GT_t20092(customer_list_view__$1,customers__$1,_owner__$1,meta20093){
return (new examples.validation.t20092(customer_list_view__$1,customers__$1,_owner__$1,meta20093));
});

}

return (new examples.validation.t20092(examples$validation$customer_list_view,customers,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.validation.main_view = (function examples$validation$main_view(app_state,_owner){
if(typeof examples.validation.t20115 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.validation.t20115 = (function (main_view,app_state,_owner,meta20116){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta20116 = meta20116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t20115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20117,meta20116__$1){
var self__ = this;
var _20117__$1 = this;
return (new examples.validation.t20115(self__.main_view,self__.app_state,self__._owner,meta20116__$1));
});

examples.validation.t20115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20117){
var self__ = this;
var _20117__$1 = this;
return self__.meta20116;
});

examples.validation.t20115.prototype.om$core$IRender$ = true;

examples.validation.t20115.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("div",{"className": "row"},(function (){var attrs20118 = om.core.build.call(null,examples.validation.signup_form_view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs20118))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4","col-md-offset-2"], null)], null),attrs20118)):{"className": "col-md-4 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20118))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20118)], null))));
})(),(function (){var attrs20119 = om.core.build.call(null,examples.validation.customer_list_view,new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs20119))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs20119)):{"className": "col-md-4"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20119))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20119)], null))));
})()),React.createElement("div",{"className": "row"},(function (){var attrs20120 = om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs20120))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-8","col-md-offset-2"], null)], null),attrs20120)):{"className": "col-md-8 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20120))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20120)], null))));
})()));
});

examples.validation.t20115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta20116","meta20116",9560425,null)], null);
});

examples.validation.t20115.cljs$lang$type = true;

examples.validation.t20115.cljs$lang$ctorStr = "examples.validation/t20115";

examples.validation.t20115.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.validation/t20115");
});

examples.validation.__GT_t20115 = (function examples$validation$main_view_$___GT_t20115(main_view__$1,app_state__$1,_owner__$1,meta20116){
return (new examples.validation.t20115(main_view__$1,app_state__$1,_owner__$1,meta20116));
});

}

return (new examples.validation.t20115(examples$validation$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.validation.main_view,examples.validation.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=validation.js.map