// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.progress');
goog.require('cljs.core');
goog.require('reforms.rum');
goog.require('reforms.validation');
goog.require('rum.core');
goog.require('examples.shared.utils');
goog.require('cljs.core.async');
examples.progress.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null));
examples.progress.simulate_long_operation_BANG_ = (function examples$progress$simulate_long_operation_BANG_(operation,data,success){
var c__21741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto__){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto__){
return (function (state_24049){
var state_val_24050 = (state_24049[(1)]);
if((state_val_24050 === (1))){
var inst_24026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24027 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_24028 = (new cljs.core.PersistentVector(null,1,(5),inst_24026,inst_24027,null));
var inst_24029 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_24028,operation);
var inst_24030 = cljs.core.async.timeout.call(null,(2000));
var state_24049__$1 = (function (){var statearr_24051 = state_24049;
(statearr_24051[(7)] = inst_24029);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(2),inst_24030);
} else {
if((state_val_24050 === (2))){
var inst_24032 = (state_24049[(2)]);
var inst_24033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24034 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_24035 = (new cljs.core.PersistentVector(null,1,(5),inst_24033,inst_24034,null));
var inst_24036 = cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,inst_24035,null);
var state_24049__$1 = (function (){var statearr_24052 = state_24049;
(statearr_24052[(8)] = inst_24036);

(statearr_24052[(9)] = inst_24032);

return statearr_24052;
})();
if(cljs.core.truth_(success)){
var statearr_24053_24064 = state_24049__$1;
(statearr_24053_24064[(1)] = (3));

} else {
var statearr_24054_24065 = state_24049__$1;
(statearr_24054_24065[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (3))){
var inst_24038 = reforms.validation.no_error.call(null);
var inst_24039 = reforms.validation.validate_BANG_.call(null,data,data,inst_24038);
var state_24049__$1 = state_24049;
var statearr_24055_24066 = state_24049__$1;
(statearr_24055_24066[(2)] = inst_24039);

(statearr_24055_24066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (4))){
var inst_24041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24042 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_24043 = (new cljs.core.PersistentVector(null,1,(5),inst_24041,inst_24042,null));
var inst_24044 = reforms.validation.force_error.call(null,inst_24043,"The operation has failed.");
var inst_24045 = reforms.validation.validate_BANG_.call(null,data,data,inst_24044);
var state_24049__$1 = state_24049;
var statearr_24056_24067 = state_24049__$1;
(statearr_24056_24067[(2)] = inst_24045);

(statearr_24056_24067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (5))){
var inst_24047 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24049__$1,inst_24047);
} else {
return null;
}
}
}
}
}
});})(c__21741__auto__))
;
return ((function (switch__21676__auto__,c__21741__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto____0 = (function (){
var statearr_24060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24060[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto__);

(statearr_24060[(1)] = (1));

return statearr_24060;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto____1 = (function (state_24049){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_24049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object)){
var ex__21680__auto__ = e24061;
var statearr_24062_24068 = state_24049;
(statearr_24062_24068[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24069 = state_24049;
state_24049 = G__24069;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto__ = function(state_24049){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto____1.call(this,state_24049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto__))
})();
var state__21743__auto__ = (function (){var statearr_24063 = f__21742__auto__.call(null);
(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto__);

return statearr_24063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto__))
);

return c__21741__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (data){
return sablono.interpreter.interpret.call(null,reforms.rum.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"p"], null),"Progress",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,data))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"data","data",1407862150,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"f"], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,data),(function (){
return reforms.validation.text.call(null,"Your name",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here");
}),(function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)], null));
}),(function (){
return reforms.rum.form_buttons.call(null,reforms.validation.button_primary.call(null,"Successful operation",(function (){
return examples.progress.start_succeed_BANG_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),data);
}),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),reforms.validation.button_default.call(null,"Failing operation",(function (){
return examples.progress.start_fail_BANG_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),data);
}),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op2","op2",935389141),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));
})));
})()
));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"simple-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__24070__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__24070 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__24071__i = 0, G__24071__a = new Array(arguments.length -  0);
while (G__24071__i < G__24071__a.length) {G__24071__a[G__24071__i] = arguments[G__24071__i + 0]; ++G__24071__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__24071__a,0);
} 
return G__24070__delegate.call(this,args__6384__auto__);};
G__24070.cljs$lang$maxFixedArity = 0;
G__24070.cljs$lang$applyTo = (function (arglist__24072){
var args__6384__auto__ = cljs.core.seq(arglist__24072);
return G__24070__delegate(args__6384__auto__);
});
G__24070.cljs$core$IFn$_invoke$arity$variadic = G__24070__delegate;
return G__24070;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
examples.progress.main_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,examples.progress.simple_view.call(null,examples.progress.app_state)),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.progress.app_state)));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),null),"main-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__24077__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__24077 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__24078__i = 0, G__24078__a = new Array(arguments.length -  0);
while (G__24078__i < G__24078__a.length) {G__24078__a[G__24078__i] = arguments[G__24078__i + 0]; ++G__24078__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__24078__a,0);
} 
return G__24077__delegate.call(this,args__6384__auto__);};
G__24077.cljs$lang$maxFixedArity = 0;
G__24077.cljs$lang$applyTo = (function (arglist__24079){
var args__6384__auto__ = cljs.core.seq(arglist__24079);
return G__24077__delegate(args__6384__auto__);
});
G__24077.cljs$core$IFn$_invoke$arity$variadic = G__24077__delegate;
return G__24077;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
rum.core.mount.call(null,examples.progress.main_view.call(null),document.getElementById("app"));

//# sourceMappingURL=progress.js.map