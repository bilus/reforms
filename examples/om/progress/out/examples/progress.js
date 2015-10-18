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
var c__29854__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29854__auto__){
return (function (){
var f__29855__auto__ = (function (){var switch__29789__auto__ = ((function (c__29854__auto__){
return (function (state_174616){
var state_val_174617 = (state_174616[(1)]);
if((state_val_174617 === (1))){
var inst_174593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_174594 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_174595 = (new cljs.core.PersistentVector(null,1,(5),inst_174593,inst_174594,null));
var inst_174596 = om.core.update_BANG_.call(null,data,inst_174595,operation);
var inst_174597 = cljs.core.async.timeout.call(null,(2000));
var state_174616__$1 = (function (){var statearr_174618 = state_174616;
(statearr_174618[(7)] = inst_174596);

return statearr_174618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_174616__$1,(2),inst_174597);
} else {
if((state_val_174617 === (2))){
var inst_174599 = (state_174616[(2)]);
var inst_174600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_174601 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_174602 = (new cljs.core.PersistentVector(null,1,(5),inst_174600,inst_174601,null));
var inst_174603 = om.core.update_BANG_.call(null,data,inst_174602,null);
var state_174616__$1 = (function (){var statearr_174619 = state_174616;
(statearr_174619[(8)] = inst_174603);

(statearr_174619[(9)] = inst_174599);

return statearr_174619;
})();
if(cljs.core.truth_(success)){
var statearr_174620_174631 = state_174616__$1;
(statearr_174620_174631[(1)] = (3));

} else {
var statearr_174621_174632 = state_174616__$1;
(statearr_174621_174632[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174617 === (3))){
var inst_174605 = reforms.validation.no_error.call(null);
var inst_174606 = reforms.validation.validate_BANG_.call(null,data,data,inst_174605);
var state_174616__$1 = state_174616;
var statearr_174622_174633 = state_174616__$1;
(statearr_174622_174633[(2)] = inst_174606);

(statearr_174622_174633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174617 === (4))){
var inst_174608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_174609 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_174610 = (new cljs.core.PersistentVector(null,1,(5),inst_174608,inst_174609,null));
var inst_174611 = reforms.validation.force_error.call(null,inst_174610,"The operation has failed.");
var inst_174612 = reforms.validation.validate_BANG_.call(null,data,data,inst_174611);
var state_174616__$1 = state_174616;
var statearr_174623_174634 = state_174616__$1;
(statearr_174623_174634[(2)] = inst_174612);

(statearr_174623_174634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_174617 === (5))){
var inst_174614 = (state_174616[(2)]);
var state_174616__$1 = state_174616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_174616__$1,inst_174614);
} else {
return null;
}
}
}
}
}
});})(c__29854__auto__))
;
return ((function (switch__29789__auto__,c__29854__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto____0 = (function (){
var statearr_174627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_174627[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto__);

(statearr_174627[(1)] = (1));

return statearr_174627;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto____1 = (function (state_174616){
while(true){
var ret_value__29791__auto__ = (function (){try{while(true){
var result__29792__auto__ = switch__29789__auto__.call(null,state_174616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29792__auto__;
}
break;
}
}catch (e174628){if((e174628 instanceof Object)){
var ex__29793__auto__ = e174628;
var statearr_174629_174635 = state_174616;
(statearr_174629_174635[(5)] = ex__29793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_174616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e174628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__174636 = state_174616;
state_174616 = G__174636;
continue;
} else {
return ret_value__29791__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto__ = function(state_174616){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto____1.call(this,state_174616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__29790__auto__;
})()
;})(switch__29789__auto__,c__29854__auto__))
})();
var state__29856__auto__ = (function (){var statearr_174630 = f__29855__auto__.call(null);
(statearr_174630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29854__auto__);

return statearr_174630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29856__auto__);
});})(c__29854__auto__))
);

return c__29854__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function examples$progress$simple_view(data,_owner){
if(typeof examples.progress.t_examples$progress174640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.progress.t_examples$progress174640 = (function (simple_view,data,_owner,meta174641){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta174641 = meta174641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t_examples$progress174640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174642,meta174641__$1){
var self__ = this;
var _174642__$1 = this;
return (new examples.progress.t_examples$progress174640(self__.simple_view,self__.data,self__._owner,meta174641__$1));
});

examples.progress.t_examples$progress174640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174642){
var self__ = this;
var _174642__$1 = this;
return self__.meta174641;
});

examples.progress.t_examples$progress174640.prototype.om$core$IRender$ = true;

examples.progress.t_examples$progress174640.prototype.om$core$IRender$render$arity$1 = (function (this__8300__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.panel.call(null,"Progress",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,self__.data))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"data","data",1407862150,null))))].join('')));
}

return reforms.core.form.call(null,cljs.core.PersistentArrayMap.EMPTY,reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.data),((function (this__8300__auto____$1){
return (function (){
return reforms.validation.text.call(null,"Your name",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here");
});})(this__8300__auto____$1))
,((function (this__8300__auto____$1){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)], null));
});})(this__8300__auto____$1))
,((function (this__8300__auto____$1){
return (function (){
return reforms.om.form_buttons.call(null,reforms.validation.button_primary.call(null,"Successful operation",((function (this__8300__auto____$1){
return (function (){
return examples.progress.start_succeed_BANG_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),self__.data);
});})(this__8300__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),reforms.validation.button_default.call(null,"Failing operation",((function (this__8300__auto____$1){
return (function (){
return examples.progress.start_fail_BANG_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),self__.data);
});})(this__8300__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this__8300__auto____$1))
));
})()
));
});

examples.progress.t_examples$progress174640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta174641","meta174641",628960135,null)], null);
});

examples.progress.t_examples$progress174640.cljs$lang$type = true;

examples.progress.t_examples$progress174640.cljs$lang$ctorStr = "examples.progress/t_examples$progress174640";

examples.progress.t_examples$progress174640.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.progress/t_examples$progress174640");
});

examples.progress.__GT_t_examples$progress174640 = (function examples$progress$simple_view_$___GT_t_examples$progress174640(simple_view__$1,data__$1,_owner__$1,meta174641){
return (new examples.progress.t_examples$progress174640(simple_view__$1,data__$1,_owner__$1,meta174641));
});

}

return (new examples.progress.t_examples$progress174640(examples$progress$simple_view,data,_owner,null));
});
examples.progress.main_view = (function examples$progress$main_view(app_state,_owner){
if(typeof examples.progress.t_examples$progress174650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.progress.t_examples$progress174650 = (function (main_view,app_state,_owner,meta174651){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta174651 = meta174651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t_examples$progress174650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_174652,meta174651__$1){
var self__ = this;
var _174652__$1 = this;
return (new examples.progress.t_examples$progress174650(self__.main_view,self__.app_state,self__._owner,meta174651__$1));
});

examples.progress.t_examples$progress174650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_174652){
var self__ = this;
var _174652__$1 = this;
return self__.meta174651;
});

examples.progress.t_examples$progress174650.prototype.om$core$IRender$ = true;

examples.progress.t_examples$progress174650.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.progress.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.progress.t_examples$progress174650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta174651","meta174651",1891386633,null)], null);
});

examples.progress.t_examples$progress174650.cljs$lang$type = true;

examples.progress.t_examples$progress174650.cljs$lang$ctorStr = "examples.progress/t_examples$progress174650";

examples.progress.t_examples$progress174650.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.progress/t_examples$progress174650");
});

examples.progress.__GT_t_examples$progress174650 = (function examples$progress$main_view_$___GT_t_examples$progress174650(main_view__$1,app_state__$1,_owner__$1,meta174651){
return (new examples.progress.t_examples$progress174650(main_view__$1,app_state__$1,_owner__$1,meta174651));
});

}

return (new examples.progress.t_examples$progress174650(examples$progress$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.progress.main_view,examples.progress.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=progress.js.map