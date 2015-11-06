// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.progress');
goog.require('cljs.core');
goog.require('reforms.reagent');
goog.require('reforms.validation');
goog.require('reagent.core');
goog.require('examples.shared.utils');
goog.require('cljs.core.async');
examples.progress.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null));
examples.progress.simulate_long_operation_BANG_ = (function examples$progress$simulate_long_operation_BANG_(operation,data,success){
var c__19653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto__){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto__){
return (function (state_21961){
var state_val_21962 = (state_21961[(1)]);
if((state_val_21962 === (1))){
var inst_21938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21939 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_21940 = (new cljs.core.PersistentVector(null,1,(5),inst_21938,inst_21939,null));
var inst_21941 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_21940,operation);
var inst_21942 = cljs.core.async.timeout.call(null,(2000));
var state_21961__$1 = (function (){var statearr_21963 = state_21961;
(statearr_21963[(7)] = inst_21941);

return statearr_21963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(2),inst_21942);
} else {
if((state_val_21962 === (2))){
var inst_21944 = (state_21961[(2)]);
var inst_21945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21946 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_21947 = (new cljs.core.PersistentVector(null,1,(5),inst_21945,inst_21946,null));
var inst_21948 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_21947,null);
var state_21961__$1 = (function (){var statearr_21964 = state_21961;
(statearr_21964[(8)] = inst_21948);

(statearr_21964[(9)] = inst_21944);

return statearr_21964;
})();
if(cljs.core.truth_(success)){
var statearr_21965_21976 = state_21961__$1;
(statearr_21965_21976[(1)] = (3));

} else {
var statearr_21966_21977 = state_21961__$1;
(statearr_21966_21977[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (3))){
var inst_21950 = reforms.validation.no_error.call(null);
var inst_21951 = reforms.validation.validate_BANG_.call(null,data,data,inst_21950);
var state_21961__$1 = state_21961;
var statearr_21967_21978 = state_21961__$1;
(statearr_21967_21978[(2)] = inst_21951);

(statearr_21967_21978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (4))){
var inst_21953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21954 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_21955 = (new cljs.core.PersistentVector(null,1,(5),inst_21953,inst_21954,null));
var inst_21956 = reforms.validation.force_error.call(null,inst_21955,"The operation has failed.");
var inst_21957 = reforms.validation.validate_BANG_.call(null,data,data,inst_21956);
var state_21961__$1 = state_21961;
var statearr_21968_21979 = state_21961__$1;
(statearr_21968_21979[(2)] = inst_21957);

(statearr_21968_21979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (5))){
var inst_21959 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else {
return null;
}
}
}
}
}
});})(c__19653__auto__))
;
return ((function (switch__19588__auto__,c__19653__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto____0 = (function (){
var statearr_21972 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21972[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto__);

(statearr_21972[(1)] = (1));

return statearr_21972;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto____1 = (function (state_21961){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_21961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e21973){if((e21973 instanceof Object)){
var ex__19592__auto__ = e21973;
var statearr_21974_21980 = state_21961;
(statearr_21974_21980[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21981 = state_21961;
state_21961 = G__21981;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto__))
})();
var state__19655__auto__ = (function (){var statearr_21975 = f__19654__auto__.call(null);
(statearr_21975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto__);

return statearr_21975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto__))
);

return c__19653__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function examples$progress$simple_view(data){
return reforms.reagent.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"p"], null),"Progress",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,data))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"data","data",1407862150,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,data),(function (){
return reforms.validation.text.call(null,"Your name",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here");
}),(function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)], null));
}),(function (){
return reforms.reagent.form_buttons.call(null,reforms.validation.button_primary.call(null,"Successful operation",(function (){
return examples.progress.start_succeed_BANG_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),data);
}),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),reforms.validation.button_default.call(null,"Failing operation",(function (){
return examples.progress.start_fail_BANG_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),data);
}),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));
})));
})()
);
});
examples.progress.main_view = (function examples$progress$main_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.progress.simple_view,examples.progress.app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.shared.utils.inspector_view,examples.progress.app_state], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.progress.main_view], null),document.getElementById("app"));

//# sourceMappingURL=progress.js.map