// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.progress');
goog.require('cljs.core');
goog.require('reforms.reagent');
goog.require('reforms.validation');
goog.require('reagent.core');
goog.require('examples.shared.utils');
goog.require('cljs.core.async');
examples.progress.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null));
examples.progress.simulate_long_operation_BANG_ = (function examples$progress$simulate_long_operation_BANG_(operation,data,success){
var c__17745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto__){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto__){
return (function (state_19948){
var state_val_19949 = (state_19948[(1)]);
if((state_val_19949 === (1))){
var inst_19925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19926 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_19927 = (new cljs.core.PersistentVector(null,1,(5),inst_19925,inst_19926,null));
var inst_19928 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_19927,operation);
var inst_19929 = cljs.core.async.timeout.call(null,(2000));
var state_19948__$1 = (function (){var statearr_19950 = state_19948;
(statearr_19950[(7)] = inst_19928);

return statearr_19950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19948__$1,(2),inst_19929);
} else {
if((state_val_19949 === (2))){
var inst_19931 = (state_19948[(2)]);
var inst_19932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19933 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_19934 = (new cljs.core.PersistentVector(null,1,(5),inst_19932,inst_19933,null));
var inst_19935 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_19934,null);
var state_19948__$1 = (function (){var statearr_19951 = state_19948;
(statearr_19951[(8)] = inst_19931);

(statearr_19951[(9)] = inst_19935);

return statearr_19951;
})();
if(cljs.core.truth_(success)){
var statearr_19952_19963 = state_19948__$1;
(statearr_19952_19963[(1)] = (3));

} else {
var statearr_19953_19964 = state_19948__$1;
(statearr_19953_19964[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (3))){
var inst_19937 = reforms.validation.no_error.call(null);
var inst_19938 = reforms.validation.validate_BANG_.call(null,data,data,inst_19937);
var state_19948__$1 = state_19948;
var statearr_19954_19965 = state_19948__$1;
(statearr_19954_19965[(2)] = inst_19938);

(statearr_19954_19965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (4))){
var inst_19940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19941 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_19942 = (new cljs.core.PersistentVector(null,1,(5),inst_19940,inst_19941,null));
var inst_19943 = reforms.validation.force_error.call(null,inst_19942,"The operation has failed.");
var inst_19944 = reforms.validation.validate_BANG_.call(null,data,data,inst_19943);
var state_19948__$1 = state_19948;
var statearr_19955_19966 = state_19948__$1;
(statearr_19955_19966[(2)] = inst_19944);

(statearr_19955_19966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19949 === (5))){
var inst_19946 = (state_19948[(2)]);
var state_19948__$1 = state_19948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19948__$1,inst_19946);
} else {
return null;
}
}
}
}
}
});})(c__17745__auto__))
;
return ((function (switch__17683__auto__,c__17745__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto____0 = (function (){
var statearr_19959 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19959[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto__);

(statearr_19959[(1)] = (1));

return statearr_19959;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto____1 = (function (state_19948){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_19948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e19960){if((e19960 instanceof Object)){
var ex__17687__auto__ = e19960;
var statearr_19961_19967 = state_19948;
(statearr_19961_19967[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19968 = state_19948;
state_19948 = G__19968;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto__ = function(state_19948){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto____1.call(this,state_19948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto__))
})();
var state__17747__auto__ = (function (){var statearr_19962 = f__17746__auto__.call(null);
(statearr_19962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto__);

return statearr_19962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto__))
);

return c__17745__auto__;
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
return reforms.validation.text.call(null,"Your name","Type your name here",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
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