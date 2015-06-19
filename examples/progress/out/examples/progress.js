// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.progress');
goog.require('cljs.core');
goog.require('reforms.validation');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('examples.shared.utils');
goog.require('om.core');
goog.require('reforms.core');
examples.progress.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
examples.progress.simulate_long_operation_BANG_ = (function examples$progress$simulate_long_operation_BANG_(operation,data,success){
var c__25412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto__){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto__){
return (function (state_27614){
var state_val_27615 = (state_27614[(1)]);
if((state_val_27615 === (1))){
var inst_27591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27592 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_27593 = (new cljs.core.PersistentVector(null,1,(5),inst_27591,inst_27592,null));
var inst_27594 = om.core.update_BANG_.call(null,data,inst_27593,operation);
var inst_27595 = cljs.core.async.timeout.call(null,(2000));
var state_27614__$1 = (function (){var statearr_27616 = state_27614;
(statearr_27616[(7)] = inst_27594);

return statearr_27616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(2),inst_27595);
} else {
if((state_val_27615 === (2))){
var inst_27597 = (state_27614[(2)]);
var inst_27598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27599 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_27600 = (new cljs.core.PersistentVector(null,1,(5),inst_27598,inst_27599,null));
var inst_27601 = om.core.update_BANG_.call(null,data,inst_27600,null);
var state_27614__$1 = (function (){var statearr_27617 = state_27614;
(statearr_27617[(8)] = inst_27601);

(statearr_27617[(9)] = inst_27597);

return statearr_27617;
})();
if(cljs.core.truth_(success)){
var statearr_27618_27629 = state_27614__$1;
(statearr_27618_27629[(1)] = (3));

} else {
var statearr_27619_27630 = state_27614__$1;
(statearr_27619_27630[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (3))){
var inst_27603 = reforms.validation.no_error.call(null);
var inst_27604 = reforms.validation.validate_BANG_.call(null,data,data,inst_27603);
var state_27614__$1 = state_27614;
var statearr_27620_27631 = state_27614__$1;
(statearr_27620_27631[(2)] = inst_27604);

(statearr_27620_27631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (4))){
var inst_27606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27607 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_27608 = (new cljs.core.PersistentVector(null,1,(5),inst_27606,inst_27607,null));
var inst_27609 = reforms.validation.force_error.call(null,inst_27608,"The operation has failed.");
var inst_27610 = reforms.validation.validate_BANG_.call(null,data,data,inst_27609);
var state_27614__$1 = state_27614;
var statearr_27621_27632 = state_27614__$1;
(statearr_27621_27632[(2)] = inst_27610);

(statearr_27621_27632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (5))){
var inst_27612 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27614__$1,inst_27612);
} else {
return null;
}
}
}
}
}
});})(c__25412__auto__))
;
return ((function (switch__25350__auto__,c__25412__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto____0 = (function (){
var statearr_27625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27625[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto__);

(statearr_27625[(1)] = (1));

return statearr_27625;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto____1 = (function (state_27614){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_27614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e27626){if((e27626 instanceof Object)){
var ex__25354__auto__ = e27626;
var statearr_27627_27633 = state_27614;
(statearr_27627_27633[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27634 = state_27614;
state_27614 = G__27634;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto__ = function(state_27614){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto____1.call(this,state_27614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto__))
})();
var state__25414__auto__ = (function (){var statearr_27628 = f__25413__auto__.call(null);
(statearr_27628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto__);

return statearr_27628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto__))
);

return c__25412__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function examples$progress$simple_view(data,_owner){
if(typeof examples.progress.t27638 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.progress.t27638 = (function (simple_view,data,_owner,meta27639){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta27639 = meta27639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t27638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27640,meta27639__$1){
var self__ = this;
var _27640__$1 = this;
return (new examples.progress.t27638(self__.simple_view,self__.data,self__._owner,meta27639__$1));
});

examples.progress.t27638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27640){
var self__ = this;
var _27640__$1 = this;
return self__.meta27639;
});

examples.progress.t27638.prototype.om$core$IRender$ = true;

examples.progress.t27638.prototype.om$core$IRender$render$arity$1 = (function (this__7878__auto__){
var self__ = this;
var this__7878__auto____$1 = this;
return sablono.interpreter.interpret.call(null,reforms.core.panel.call(null,"Progress",(function (){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,self__.data))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a cursor."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("om.core","cursor?","om.core/cursor?",231630545,null),new cljs.core.Symbol(null,"data","data",1407862150,null))))].join('')));
}

return reforms.core.form.call(null,cljs.core.PersistentArrayMap.EMPTY,reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.data),((function (this__7878__auto____$1){
return (function (){
return reforms.validation.text.call(null,"Your name","Type your name here",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
});})(this__7878__auto____$1))
,((function (this__7878__auto____$1){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)], null));
});})(this__7878__auto____$1))
,((function (this__7878__auto____$1){
return (function (){
return reforms.core.form_buttons.call(null,reforms.validation.button_primary.call(null,"Successful operation",((function (this__7878__auto____$1){
return (function (){
return examples.progress.start_succeed_BANG_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),self__.data);
});})(this__7878__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),reforms.validation.button_default.call(null,"Failing operation",((function (this__7878__auto____$1){
return (function (){
return examples.progress.start_fail_BANG_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),self__.data);
});})(this__7878__auto____$1))
,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(this__7878__auto____$1))
));
})()
));
});

examples.progress.t27638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta27639","meta27639",1850280114,null)], null);
});

examples.progress.t27638.cljs$lang$type = true;

examples.progress.t27638.cljs$lang$ctorStr = "examples.progress/t27638";

examples.progress.t27638.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.progress/t27638");
});

examples.progress.__GT_t27638 = (function examples$progress$simple_view_$___GT_t27638(simple_view__$1,data__$1,_owner__$1,meta27639){
return (new examples.progress.t27638(simple_view__$1,data__$1,_owner__$1,meta27639));
});

}

return (new examples.progress.t27638(examples$progress$simple_view,data,_owner,null));
});
examples.progress.main_view = (function examples$progress$main_view(app_state,_owner){
if(typeof examples.progress.t27648 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.progress.t27648 = (function (main_view,app_state,_owner,meta27649){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta27649 = meta27649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t27648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27650,meta27649__$1){
var self__ = this;
var _27650__$1 = this;
return (new examples.progress.t27648(self__.main_view,self__.app_state,self__._owner,meta27649__$1));
});

examples.progress.t27648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27650){
var self__ = this;
var _27650__$1 = this;
return self__.meta27649;
});

examples.progress.t27648.prototype.om$core$IRender$ = true;

examples.progress.t27648.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.progress.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.progress.t27648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta27649","meta27649",670304083,null)], null);
});

examples.progress.t27648.cljs$lang$type = true;

examples.progress.t27648.cljs$lang$ctorStr = "examples.progress/t27648";

examples.progress.t27648.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.progress/t27648");
});

examples.progress.__GT_t27648 = (function examples$progress$main_view_$___GT_t27648(main_view__$1,app_state__$1,_owner__$1,meta27649){
return (new examples.progress.t27648(main_view__$1,app_state__$1,_owner__$1,meta27649));
});

}

return (new examples.progress.t27648(examples$progress$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.progress.main_view,examples.progress.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=progress.js.map