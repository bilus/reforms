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
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto__){
return (function (state_21769){
var state_val_21770 = (state_21769[(1)]);
if((state_val_21770 === (1))){
var inst_21746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21747 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_21748 = (new cljs.core.PersistentVector(null,1,(5),inst_21746,inst_21747,null));
var inst_21749 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_21748,operation);
var inst_21750 = cljs.core.async.timeout.call(null,(2000));
var state_21769__$1 = (function (){var statearr_21771 = state_21769;
(statearr_21771[(7)] = inst_21749);

return statearr_21771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21769__$1,(2),inst_21750);
} else {
if((state_val_21770 === (2))){
var inst_21752 = (state_21769[(2)]);
var inst_21753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21754 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_21755 = (new cljs.core.PersistentVector(null,1,(5),inst_21753,inst_21754,null));
var inst_21756 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_21755,null);
var state_21769__$1 = (function (){var statearr_21772 = state_21769;
(statearr_21772[(8)] = inst_21752);

(statearr_21772[(9)] = inst_21756);

return statearr_21772;
})();
if(cljs.core.truth_(success)){
var statearr_21773_21784 = state_21769__$1;
(statearr_21773_21784[(1)] = (3));

} else {
var statearr_21774_21785 = state_21769__$1;
(statearr_21774_21785[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (3))){
var inst_21758 = reforms.validation.no_error.call(null);
var inst_21759 = reforms.validation.validate_BANG_.call(null,data,data,inst_21758);
var state_21769__$1 = state_21769;
var statearr_21775_21786 = state_21769__$1;
(statearr_21775_21786[(2)] = inst_21759);

(statearr_21775_21786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (4))){
var inst_21761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21762 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_21763 = (new cljs.core.PersistentVector(null,1,(5),inst_21761,inst_21762,null));
var inst_21764 = reforms.validation.force_error.call(null,inst_21763,"The operation has failed.");
var inst_21765 = reforms.validation.validate_BANG_.call(null,data,data,inst_21764);
var state_21769__$1 = state_21769;
var statearr_21776_21787 = state_21769__$1;
(statearr_21776_21787[(2)] = inst_21765);

(statearr_21776_21787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (5))){
var inst_21767 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21769__$1,inst_21767);
} else {
return null;
}
}
}
}
}
});})(c__19461__auto__))
;
return ((function (switch__19396__auto__,c__19461__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto____0 = (function (){
var statearr_21780 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21780[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto__);

(statearr_21780[(1)] = (1));

return statearr_21780;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto____1 = (function (state_21769){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_21769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e21781){if((e21781 instanceof Object)){
var ex__19400__auto__ = e21781;
var statearr_21782_21788 = state_21769;
(statearr_21782_21788[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21789 = state_21769;
state_21769 = G__21789;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto__ = function(state_21769){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto____1.call(this,state_21769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_21783 = f__19462__auto__.call(null);
(statearr_21783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_21783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
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