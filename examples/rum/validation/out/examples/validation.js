// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.validation');
goog.require('cljs.core');
goog.require('reforms.rum');
goog.require('reforms.validation');
goog.require('rum.core');
goog.require('examples.shared.utils');
goog.require('clojure.string');
examples.validation.customers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
examples.validation.customer = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),"New York"], null));
examples.validation.ui_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.validation.positive_number_QMARK_ = (function examples$validation$positive_number_QMARK_(s){
return (parseInt(s) > (0));
});
examples.validation.positive_number = (function examples$validation$positive_number(korks,error_message){
return reforms.validation.is_true.call(null,korks,examples.validation.positive_number_QMARK_,error_message);
});
examples.validation.customer_validators = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),"Enter first name"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),"Enter last name"),examples.validation.positive_number.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),"Age must be a positive number"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"Enter login name"),reforms.validation.equal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Passwords do not match"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),"Choose password"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Re-enter password")], null);
examples.validation.sign_up_BANG_ = (function examples$validation$sign_up_BANG_(customers,customer,ui_state){
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
examples.validation.signup_form_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (customers,customer,ui_state){
return sablono.interpreter.interpret.call(null,reforms.rum.panel.call(null,"Add customer",(function (){var _STAR_options_STAR_17100 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-horizontal","form-horizontal",479603727),true,new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589),"col-md-4",new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433),"col-md-8"], null));

try{if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,ui_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_17100){
return (function (){
return examples.validation.sign_up_BANG_.call(null,customers,customer,ui_state);
});})(_STAR_options_STAR_17100))
], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,ui_state),((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.text.call(null,"First name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter first name");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.text.call(null,"Last name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter last name");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.text.call(null,"City",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null),new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594),((function (_STAR_options_STAR_17100){
return (function (p1__17099_SHARP_){
if(cljs.core._EQ_.call(null,"Kansas",p1__17099_SHARP_)){
return null;
} else {
return "We're not in Kansas anymore";
}
});})(_STAR_options_STAR_17100))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Where are you?");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.number.call(null,"Age",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter your age");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.text.call(null,"Login",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Choose login");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.password.call(null,"Password",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter password");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.password.call(null,"Confirm password",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Re-enter password");
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null));
});})(_STAR_options_STAR_17100))
,((function (_STAR_options_STAR_17100){
return (function (){
return reforms.rum.form_buttons.call(null,reforms.rum.button_primary.call(null,"Save",((function (_STAR_options_STAR_17100){
return (function (){
return examples.validation.sign_up_BANG_.call(null,customers,customer,ui_state);
});})(_STAR_options_STAR_17100))
),reforms.rum.button_default.call(null,"Simulate server error",((function (_STAR_options_STAR_17100){
return (function (){
return examples.validation.force_error_BANG_.call(null,customer,ui_state);
});})(_STAR_options_STAR_17100))
));
});})(_STAR_options_STAR_17100))
));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_17100;
}})()));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"signup-form-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__17101__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__17101 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__17102__i = 0, G__17102__a = new Array(arguments.length -  0);
while (G__17102__i < G__17102__a.length) {G__17102__a[G__17102__i] = arguments[G__17102__i + 0]; ++G__17102__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__17102__a,0);
} 
return G__17101__delegate.call(this,args__6384__auto__);};
G__17101.cljs$lang$maxFixedArity = 0;
G__17101.cljs$lang$applyTo = (function (arglist__17103){
var args__6384__auto__ = cljs.core.seq(arglist__17103);
return G__17101__delegate(args__6384__auto__);
});
G__17101.cljs$core$IFn$_invoke$arity$variadic = G__17101__delegate;
return G__17101;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
examples.validation.customer_list_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (customers){
return React.createElement("div",{"className": "customers"},React.createElement("h3",null,"Customers"),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,customers)))?React.createElement("ul",{"className": "list-unstyled"},cljs.core.into_array.call(null,(function (){var iter__5365__auto__ = (function examples$validation$iter__17109(s__17110){
return (new cljs.core.LazySeq(null,(function (){
var s__17110__$1 = s__17110;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17110__$1);
if(temp__4425__auto__){
var s__17110__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17110__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__17110__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__17112 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__17111 = (0);
while(true){
if((i__17111 < size__5364__auto__)){
var map__17117 = cljs.core._nth.call(null,c__5363__auto__,i__17111);
var map__17117__$1 = ((((!((map__17117 == null)))?((((map__17117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17117):map__17117);
var first = cljs.core.get.call(null,map__17117__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__17117__$1,new cljs.core.Keyword(null,"last","last",1105735132));
cljs.core.chunk_append.call(null,b__17112,(function (){var attrs17106 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs17106))?sablono.interpreter.attributes.call(null,attrs17106):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17106)], null))));
})());

var G__17121 = (i__17111 + (1));
i__17111 = G__17121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17112),examples$validation$iter__17109.call(null,cljs.core.chunk_rest.call(null,s__17110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17112),null);
}
} else {
var map__17119 = cljs.core.first.call(null,s__17110__$2);
var map__17119__$1 = ((((!((map__17119 == null)))?((((map__17119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17119):map__17119);
var first = cljs.core.get.call(null,map__17119__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__17119__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return cljs.core.cons.call(null,(function (){var attrs17106 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs17106))?sablono.interpreter.attributes.call(null,attrs17106):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17106)], null))));
})(),examples$validation$iter__17109.call(null,cljs.core.rest.call(null,s__17110__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,cljs.core.deref.call(null,customers));
})())):React.createElement("em",null,"No customers.")));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"customer-list-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__17122__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__17122 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__17123__i = 0, G__17123__a = new Array(arguments.length -  0);
while (G__17123__i < G__17123__a.length) {G__17123__a[G__17123__i] = arguments[G__17123__i + 0]; ++G__17123__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__17123__a,0);
} 
return G__17122__delegate.call(this,args__6384__auto__);};
G__17122.cljs$lang$maxFixedArity = 0;
G__17122.cljs$lang$applyTo = (function (arglist__17124){
var args__6384__auto__ = cljs.core.seq(arglist__17124);
return G__17122__delegate(args__6384__auto__);
});
G__17122.cljs$core$IFn$_invoke$arity$variadic = G__17122__delegate;
return G__17122;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
examples.validation.main_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("div",{"className": "row"},(function (){var attrs17125 = examples.validation.signup_form_view.call(null,examples.validation.customers,examples.validation.customer,examples.validation.ui_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs17125))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4","col-md-offset-2"], null)], null),attrs17125)):{"className": "col-md-4 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17125))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17125)], null))));
})(),(function (){var attrs17126 = examples.validation.customer_list_view.call(null,examples.validation.customers);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs17126))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs17126)):{"className": "col-md-4"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17126))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17126)], null))));
})()),React.createElement("div",{"className": "row"},(function (){var attrs17127 = examples.shared.utils.inspector_view.call(null,examples.validation.customers);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs17127))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-8","col-md-offset-2"], null)], null),attrs17127)):{"className": "col-md-8 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17127))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.validation.customer)),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.validation.ui_state))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17127),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.validation.customer)),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.validation.ui_state))], null))));
})()));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),null),"main-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__17128__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__17128 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__17129__i = 0, G__17129__a = new Array(arguments.length -  0);
while (G__17129__i < G__17129__a.length) {G__17129__a[G__17129__i] = arguments[G__17129__i + 0]; ++G__17129__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__17129__a,0);
} 
return G__17128__delegate.call(this,args__6384__auto__);};
G__17128.cljs$lang$maxFixedArity = 0;
G__17128.cljs$lang$applyTo = (function (arglist__17130){
var args__6384__auto__ = cljs.core.seq(arglist__17130);
return G__17128__delegate(args__6384__auto__);
});
G__17128.cljs$core$IFn$_invoke$arity$variadic = G__17128__delegate;
return G__17128;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
rum.core.mount.call(null,examples.validation.main_view.call(null),document.getElementById("app"));

//# sourceMappingURL=validation.js.map