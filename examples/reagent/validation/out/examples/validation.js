// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.validation');
goog.require('cljs.core');
goog.require('reforms.reagent');
goog.require('reforms.validation');
goog.require('reagent.core');
goog.require('examples.shared.utils');
goog.require('clojure.string');
examples.validation.customers = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
examples.validation.customer = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),"New York"], null));
examples.validation.ui_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.validation.positive_number_QMARK_ = (function examples$validation$positive_number_QMARK_(s){
return (parseInt(s) > (0));
});
examples.validation.positive_number = (function examples$validation$positive_number(korks,error_message){
return reforms.validation.is_true.call(null,korks,examples.validation.positive_number_QMARK_,error_message);
});
examples.validation.customer_validators = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),"Enter first name"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),"Enter last name"),examples.validation.positive_number.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),"Age must be a positive number"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"Enter login name"),reforms.validation.equal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Passwords do not match"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),"Choose password"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Re-enter password")], null);
examples.validation.sign_up_BANG_ = (function examples$validation$sign_up_BANG_(customers,customer,ui_state){
console.log(cljs.core.prn_str.call(null,customer));

if(cljs.core.truth_(cljs.core.apply.call(null,reforms.validation.validate_BANG_,customer,ui_state,examples.validation.customer_validators))){
return cljs.core.swap_BANG_.call(null,customers,(function (xs){
return cljs.core.conj.call(null,xs,cljs.core.deref.call(null,customer));
}));
} else {
return null;
}
});
examples.validation.force_error_BANG_ = (function examples$validation$force_error_BANG_(customer,ui_state){
return reforms.validation.validate_BANG_.call(null,customer,ui_state,reforms.validation.force_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null),"An error has occurred"));
});
examples.validation.signup_form_view = (function examples$validation$signup_form_view(customers,customer,ui_state){
return reforms.reagent.panel.call(null,"Add customer",(function (){var _STAR_options_STAR_13911 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-horizontal","form-horizontal",479603727),true,new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589),"col-md-4",new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433),"col-md-8"], null));

try{if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,ui_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_13911){
return (function (){
return examples.validation.sign_up_BANG_.call(null,customers,customer,ui_state);
});})(_STAR_options_STAR_13911))
], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,ui_state),((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.text.call(null,"First name","Enter first name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.text.call(null,"Last name","Enter last name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.text.call(null,"City","Where are you?",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null),new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594),((function (_STAR_options_STAR_13911){
return (function (p1__13909_SHARP_){
if(cljs.core._EQ_.call(null,"Kansas",p1__13909_SHARP_)){
return null;
} else {
return "We're not in Kansas anymore";
}
});})(_STAR_options_STAR_13911))
);
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.number.call(null,"Age","Enter your age",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.text.call(null,"Login","Choose login",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.password.call(null,"Password","Enter password",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.password.call(null,"Confirm password","Re-enter password",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null));
});})(_STAR_options_STAR_13911))
,((function (_STAR_options_STAR_13911){
return (function (){
return reforms.reagent.form_buttons.call(null,reforms.reagent.button_primary.call(null,"Save",((function (_STAR_options_STAR_13911){
return (function (){
return examples.validation.sign_up_BANG_.call(null,customers,customer,ui_state);
});})(_STAR_options_STAR_13911))
),reforms.reagent.button_default.call(null,"Simulate server error",((function (_STAR_options_STAR_13911){
return (function (){
return examples.validation.force_error_BANG_.call(null,customer,ui_state);
});})(_STAR_options_STAR_13911))
));
});})(_STAR_options_STAR_13911))
));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_13911;
}})());
});
examples.validation.customer_list_view = (function examples$validation$customer_list_view(customers){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.customers","div.customers",114922621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Customers"], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,customers)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-unstyled","ul.list-unstyled",1077310460),(function (){var iter__5093__auto__ = (function examples$validation$customer_list_view_$_iter__13920(s__13921){
return (new cljs.core.LazySeq(null,(function (){
var s__13921__$1 = s__13921;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__13921__$1);
if(temp__4423__auto__){
var s__13921__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13921__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__13921__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__13923 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__13922 = (0);
while(true){
if((i__13922 < size__5092__auto__)){
var map__13926 = cljs.core._nth.call(null,c__5091__auto__,i__13922);
var map__13926__$1 = ((cljs.core.seq_QMARK_.call(null,map__13926))?cljs.core.apply.call(null,cljs.core.hash_map,map__13926):map__13926);
var first = cljs.core.get.call(null,map__13926__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__13926__$1,new cljs.core.Keyword(null,"last","last",1105735132));
cljs.core.chunk_append.call(null,b__13923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null))], null));

var G__13928 = (i__13922 + (1));
i__13922 = G__13928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13923),examples$validation$customer_list_view_$_iter__13920.call(null,cljs.core.chunk_rest.call(null,s__13921__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13923),null);
}
} else {
var map__13927 = cljs.core.first.call(null,s__13921__$2);
var map__13927__$1 = ((cljs.core.seq_QMARK_.call(null,map__13927))?cljs.core.apply.call(null,cljs.core.hash_map,map__13927):map__13927);
var first = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null))], null),examples$validation$customer_list_view_$_iter__13920.call(null,cljs.core.rest.call(null,s__13921__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5093__auto__.call(null,cljs.core.deref.call(null,customers));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"No customers."], null))], null);
});
examples.validation.main_view = (function examples$validation$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4.col-md-offset-2","div.col-md-4.col-md-offset-2",341237204),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.validation.signup_form_view,examples.validation.customers,examples.validation.customer,examples.validation.ui_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.validation.customer_list_view,examples.validation.customers], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.shared.utils.inspector_view,examples.validation.customers], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.shared.utils.inspector_view,examples.validation.customer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.shared.utils.inspector_view,examples.validation.ui_state], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.validation.main_view], null),document.getElementById("app"));

//# sourceMappingURL=validation.js.map