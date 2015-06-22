// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.progress');
goog.require('cljs.core');
goog.require('reforms.validation');
goog.require('reforms.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('examples.shared.utils');
goog.require('om.core');
examples.progress.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
examples.progress.simulate_long_operation_BANG_ = (function examples$progress$simulate_long_operation_BANG_(operation,data,success){
var c__25357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto__){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto__){
return (function (state_27559){
var state_val_27560 = (state_27559[(1)]);
if((state_val_27560 === (1))){
var inst_27536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27537 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_27538 = (new cljs.core.PersistentVector(null,1,(5),inst_27536,inst_27537,null));
var inst_27539 = om.core.update_BANG_.call(null,data,inst_27538,operation);
var inst_27540 = cljs.core.async.timeout.call(null,(2000));
var state_27559__$1 = (function (){var statearr_27561 = state_27559;
(statearr_27561[(7)] = inst_27539);

return statearr_27561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27559__$1,(2),inst_27540);
} else {
if((state_val_27560 === (2))){
var inst_27542 = (state_27559[(2)]);
var inst_27543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27544 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_27545 = (new cljs.core.PersistentVector(null,1,(5),inst_27543,inst_27544,null));
var inst_27546 = om.core.update_BANG_.call(null,data,inst_27545,null);
var state_27559__$1 = (function (){var statearr_27562 = state_27559;
(statearr_27562[(8)] = inst_27542);

(statearr_27562[(9)] = inst_27546);

return statearr_27562;
})();
if(cljs.core.truth_(success)){
var statearr_27563_27574 = state_27559__$1;
(statearr_27563_27574[(1)] = (3));

} else {
var statearr_27564_27575 = state_27559__$1;
(statearr_27564_27575[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (3))){
var inst_27548 = reforms.validation.no_error.call(null);
var inst_27549 = reforms.validation.validate_BANG_.call(null,data,data,inst_27548);
var state_27559__$1 = state_27559;
var statearr_27565_27576 = state_27559__$1;
(statearr_27565_27576[(2)] = inst_27549);

(statearr_27565_27576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (4))){
var inst_27551 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27552 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_27553 = (new cljs.core.PersistentVector(null,1,(5),inst_27551,inst_27552,null));
var inst_27554 = reforms.validation.force_error.call(null,inst_27553,"The operation has failed.");
var inst_27555 = reforms.validation.validate_BANG_.call(null,data,data,inst_27554);
var state_27559__$1 = state_27559;
var statearr_27566_27577 = state_27559__$1;
(statearr_27566_27577[(2)] = inst_27555);

(statearr_27566_27577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (5))){
var inst_27557 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27559__$1,inst_27557);
} else {
return null;
}
}
}
}
}
});})(c__25357__auto__))
;
return ((function (switch__25295__auto__,c__25357__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto____0 = (function (){
var statearr_27570 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27570[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto__);

(statearr_27570[(1)] = (1));

return statearr_27570;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto____1 = (function (state_27559){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_27559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e27571){if((e27571 instanceof Object)){
var ex__25299__auto__ = e27571;
var statearr_27572_27578 = state_27559;
(statearr_27572_27578[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27579 = state_27559;
state_27559 = G__27579;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto__ = function(state_27559){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto____1.call(this,state_27559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto__))
})();
var state__25359__auto__ = (function (){var statearr_27573 = f__25358__auto__.call(null);
(statearr_27573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto__);

return statearr_27573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto__))
);

return c__25357__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function examples$progress$simple_view(data,_owner){
if(typeof examples.progress.t27583 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.progress.t27583 = (function (simple_view,data,_owner,meta27584){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta27584 = meta27584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t27583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27585,meta27584__$1){
var self__ = this;
var _27585__$1 = this;
return (new examples.progress.t27583(self__.simple_view,self__.data,self__._owner,meta27584__$1));
});

examples.progress.t27583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27585){
var self__ = this;
var _27585__$1 = this;
return self__.meta27584;
});

examples.progress.t27583.prototype.om$core$IRender$ = true;

examples.progress.t27583.prototype.om$core$IRender$render$arity$1 = (function (this__7868__auto__){
var self__ = this;
var this__7868__auto____$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.panel.call(null,"Progress",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,self__.data))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"data","data",1407862150,null))))].join('')));
}

return reforms.core.form.call(null,cljs.core.PersistentArrayMap.EMPTY,reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.data),((function (this__7868__auto____$1){
return (function (){
return reforms.validation.text.call(null,"Your name","Type your name here",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
});})(this__7868__auto____$1))
,((function (this__7868__auto____$1){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)], null));
});})(this__7868__auto____$1))
,((function (this__7868__auto____$1){
return (function (){
return reforms.om.form_buttons.call(null,reforms.validation.button_primary.call(null,"Successful operation",((function (this__7868__auto____$1){
return (function (){
return examples.progress.start_succeed_BANG_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),self__.data);
});})(this__7868__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),reforms.validation.button_default.call(null,"Failing operation",((function (this__7868__auto____$1){
return (function (){
return examples.progress.start_fail_BANG_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),self__.data);
});})(this__7868__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this__7868__auto____$1))
));
})()
));
});

examples.progress.t27583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta27584","meta27584",-465156089,null)], null);
});

examples.progress.t27583.cljs$lang$type = true;

examples.progress.t27583.cljs$lang$ctorStr = "examples.progress/t27583";

examples.progress.t27583.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.progress/t27583");
});

examples.progress.__GT_t27583 = (function examples$progress$simple_view_$___GT_t27583(simple_view__$1,data__$1,_owner__$1,meta27584){
return (new examples.progress.t27583(simple_view__$1,data__$1,_owner__$1,meta27584));
});

}

return (new examples.progress.t27583(examples$progress$simple_view,data,_owner,null));
});
examples.progress.main_view = (function examples$progress$main_view(app_state,_owner){
if(typeof examples.progress.t27593 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.progress.t27593 = (function (main_view,app_state,_owner,meta27594){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta27594 = meta27594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t27593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27595,meta27594__$1){
var self__ = this;
var _27595__$1 = this;
return (new examples.progress.t27593(self__.main_view,self__.app_state,self__._owner,meta27594__$1));
});

examples.progress.t27593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27595){
var self__ = this;
var _27595__$1 = this;
return self__.meta27594;
});

examples.progress.t27593.prototype.om$core$IRender$ = true;

examples.progress.t27593.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.progress.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.progress.t27593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta27594","meta27594",875571988,null)], null);
});

examples.progress.t27593.cljs$lang$type = true;

examples.progress.t27593.cljs$lang$ctorStr = "examples.progress/t27593";

examples.progress.t27593.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.progress/t27593");
});

examples.progress.__GT_t27593 = (function examples$progress$main_view_$___GT_t27593(main_view__$1,app_state__$1,_owner__$1,meta27594){
return (new examples.progress.t27593(main_view__$1,app_state__$1,_owner__$1,meta27594));
});

}

return (new examples.progress.t27593(examples$progress$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.progress.main_view,examples.progress.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=progress.js.map