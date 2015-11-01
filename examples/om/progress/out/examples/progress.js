// Compiled by ClojureScript 1.7.122 {}
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
var c__29194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto__){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto__){
return (function (state_31501){
var state_val_31502 = (state_31501[(1)]);
if((state_val_31502 === (1))){
var inst_31478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31479 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_31480 = (new cljs.core.PersistentVector(null,1,(5),inst_31478,inst_31479,null));
var inst_31481 = om.core.update_BANG_.call(null,data,inst_31480,operation);
var inst_31482 = cljs.core.async.timeout.call(null,(2000));
var state_31501__$1 = (function (){var statearr_31503 = state_31501;
(statearr_31503[(7)] = inst_31481);

return statearr_31503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31501__$1,(2),inst_31482);
} else {
if((state_val_31502 === (2))){
var inst_31484 = (state_31501[(2)]);
var inst_31485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31486 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_31487 = (new cljs.core.PersistentVector(null,1,(5),inst_31485,inst_31486,null));
var inst_31488 = om.core.update_BANG_.call(null,data,inst_31487,null);
var state_31501__$1 = (function (){var statearr_31504 = state_31501;
(statearr_31504[(8)] = inst_31484);

(statearr_31504[(9)] = inst_31488);

return statearr_31504;
})();
if(cljs.core.truth_(success)){
var statearr_31505_31516 = state_31501__$1;
(statearr_31505_31516[(1)] = (3));

} else {
var statearr_31506_31517 = state_31501__$1;
(statearr_31506_31517[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (3))){
var inst_31490 = reforms.validation.no_error.call(null);
var inst_31491 = reforms.validation.validate_BANG_.call(null,data,data,inst_31490);
var state_31501__$1 = state_31501;
var statearr_31507_31518 = state_31501__$1;
(statearr_31507_31518[(2)] = inst_31491);

(statearr_31507_31518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (4))){
var inst_31493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31494 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_31495 = (new cljs.core.PersistentVector(null,1,(5),inst_31493,inst_31494,null));
var inst_31496 = reforms.validation.force_error.call(null,inst_31495,"The operation has failed.");
var inst_31497 = reforms.validation.validate_BANG_.call(null,data,data,inst_31496);
var state_31501__$1 = state_31501;
var statearr_31508_31519 = state_31501__$1;
(statearr_31508_31519[(2)] = inst_31497);

(statearr_31508_31519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31502 === (5))){
var inst_31499 = (state_31501[(2)]);
var state_31501__$1 = state_31501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31501__$1,inst_31499);
} else {
return null;
}
}
}
}
}
});})(c__29194__auto__))
;
return ((function (switch__29129__auto__,c__29194__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto____0 = (function (){
var statearr_31512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31512[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto__);

(statearr_31512[(1)] = (1));

return statearr_31512;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto____1 = (function (state_31501){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_31501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e31513){if((e31513 instanceof Object)){
var ex__29133__auto__ = e31513;
var statearr_31514_31520 = state_31501;
(statearr_31514_31520[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31521 = state_31501;
state_31501 = G__31521;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto__ = function(state_31501){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto____1.call(this,state_31501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto__))
})();
var state__29196__auto__ = (function (){var statearr_31515 = f__29195__auto__.call(null);
(statearr_31515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto__);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto__))
);

return c__29194__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function examples$progress$simple_view(data,_owner){
if(typeof examples.progress.t_examples$progress31525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.progress.t_examples$progress31525 = (function (simple_view,data,_owner,meta31526){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta31526 = meta31526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t_examples$progress31525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31527,meta31526__$1){
var self__ = this;
var _31527__$1 = this;
return (new examples.progress.t_examples$progress31525(self__.simple_view,self__.data,self__._owner,meta31526__$1));
});

examples.progress.t_examples$progress31525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31527){
var self__ = this;
var _31527__$1 = this;
return self__.meta31526;
});

examples.progress.t_examples$progress31525.prototype.om$core$IRender$ = true;

examples.progress.t_examples$progress31525.prototype.om$core$IRender$render$arity$1 = (function (this__8184__auto__){
var self__ = this;
var this__8184__auto____$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.panel.call(null,"Progress",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,self__.data))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"data","data",1407862150,null))))].join('')));
}

return reforms.core.form.call(null,cljs.core.PersistentArrayMap.EMPTY,reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.data),((function (this__8184__auto____$1){
return (function (){
return reforms.validation.text.call(null,"Your name",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here");
});})(this__8184__auto____$1))
,((function (this__8184__auto____$1){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)], null));
});})(this__8184__auto____$1))
,((function (this__8184__auto____$1){
return (function (){
return reforms.om.form_buttons.call(null,reforms.validation.button_primary.call(null,"Successful operation",((function (this__8184__auto____$1){
return (function (){
return examples.progress.start_succeed_BANG_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),self__.data);
});})(this__8184__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),reforms.validation.button_default.call(null,"Failing operation",((function (this__8184__auto____$1){
return (function (){
return examples.progress.start_fail_BANG_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),self__.data);
});})(this__8184__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this__8184__auto____$1))
));
})()
));
});

examples.progress.t_examples$progress31525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta31526","meta31526",-1851911549,null)], null);
});

examples.progress.t_examples$progress31525.cljs$lang$type = true;

examples.progress.t_examples$progress31525.cljs$lang$ctorStr = "examples.progress/t_examples$progress31525";

examples.progress.t_examples$progress31525.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"examples.progress/t_examples$progress31525");
});

examples.progress.__GT_t_examples$progress31525 = (function examples$progress$simple_view_$___GT_t_examples$progress31525(simple_view__$1,data__$1,_owner__$1,meta31526){
return (new examples.progress.t_examples$progress31525(simple_view__$1,data__$1,_owner__$1,meta31526));
});

}

return (new examples.progress.t_examples$progress31525(examples$progress$simple_view,data,_owner,null));
});
examples.progress.main_view = (function examples$progress$main_view(app_state,_owner){
if(typeof examples.progress.t_examples$progress31535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.progress.t_examples$progress31535 = (function (main_view,app_state,_owner,meta31536){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta31536 = meta31536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t_examples$progress31535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31537,meta31536__$1){
var self__ = this;
var _31537__$1 = this;
return (new examples.progress.t_examples$progress31535(self__.main_view,self__.app_state,self__._owner,meta31536__$1));
});

examples.progress.t_examples$progress31535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31537){
var self__ = this;
var _31537__$1 = this;
return self__.meta31536;
});

examples.progress.t_examples$progress31535.prototype.om$core$IRender$ = true;

examples.progress.t_examples$progress31535.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.progress.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.progress.t_examples$progress31535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta31536","meta31536",-781438679,null)], null);
});

examples.progress.t_examples$progress31535.cljs$lang$type = true;

examples.progress.t_examples$progress31535.cljs$lang$ctorStr = "examples.progress/t_examples$progress31535";

examples.progress.t_examples$progress31535.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"examples.progress/t_examples$progress31535");
});

examples.progress.__GT_t_examples$progress31535 = (function examples$progress$main_view_$___GT_t_examples$progress31535(main_view__$1,app_state__$1,_owner__$1,meta31536){
return (new examples.progress.t_examples$progress31535(main_view__$1,app_state__$1,_owner__$1,meta31536));
});

}

return (new examples.progress.t_examples$progress31535(examples$progress$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.progress.main_view,examples.progress.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=progress.js.map