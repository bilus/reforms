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
var c__25247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto__){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto__){
return (function (state_42966){
var state_val_42967 = (state_42966[(1)]);
if((state_val_42967 === (1))){
var inst_42943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42944 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_42945 = (new cljs.core.PersistentVector(null,1,(5),inst_42943,inst_42944,null));
var inst_42946 = om.core.update_BANG_.call(null,data,inst_42945,operation);
var inst_42947 = cljs.core.async.timeout.call(null,(2000));
var state_42966__$1 = (function (){var statearr_42968 = state_42966;
(statearr_42968[(7)] = inst_42946);

return statearr_42968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42966__$1,(2),inst_42947);
} else {
if((state_val_42967 === (2))){
var inst_42949 = (state_42966[(2)]);
var inst_42950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42951 = [new cljs.core.Keyword(null,"progress","progress",244323547)];
var inst_42952 = (new cljs.core.PersistentVector(null,1,(5),inst_42950,inst_42951,null));
var inst_42953 = om.core.update_BANG_.call(null,data,inst_42952,null);
var state_42966__$1 = (function (){var statearr_42969 = state_42966;
(statearr_42969[(8)] = inst_42949);

(statearr_42969[(9)] = inst_42953);

return statearr_42969;
})();
if(cljs.core.truth_(success)){
var statearr_42970_42981 = state_42966__$1;
(statearr_42970_42981[(1)] = (3));

} else {
var statearr_42971_42982 = state_42966__$1;
(statearr_42971_42982[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42967 === (3))){
var inst_42955 = reforms.validation.no_error.call(null);
var inst_42956 = reforms.validation.validate_BANG_.call(null,data,data,inst_42955);
var state_42966__$1 = state_42966;
var statearr_42972_42983 = state_42966__$1;
(statearr_42972_42983[(2)] = inst_42956);

(statearr_42972_42983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42967 === (4))){
var inst_42958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42959 = [new cljs.core.Keyword(null,"operation-failed","operation-failed",-884874318)];
var inst_42960 = (new cljs.core.PersistentVector(null,1,(5),inst_42958,inst_42959,null));
var inst_42961 = reforms.validation.force_error.call(null,inst_42960,"The operation has failed.");
var inst_42962 = reforms.validation.validate_BANG_.call(null,data,data,inst_42961);
var state_42966__$1 = state_42966;
var statearr_42973_42984 = state_42966__$1;
(statearr_42973_42984[(2)] = inst_42962);

(statearr_42973_42984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42967 === (5))){
var inst_42964 = (state_42966[(2)]);
var state_42966__$1 = state_42966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42966__$1,inst_42964);
} else {
return null;
}
}
}
}
}
});})(c__25247__auto__))
;
return ((function (switch__25185__auto__,c__25247__auto__){
return (function() {
var examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto__ = null;
var examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto____0 = (function (){
var statearr_42977 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42977[(0)] = examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto__);

(statearr_42977[(1)] = (1));

return statearr_42977;
});
var examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto____1 = (function (state_42966){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_42966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e42978){if((e42978 instanceof Object)){
var ex__25189__auto__ = e42978;
var statearr_42979_42985 = state_42966;
(statearr_42979_42985[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42986 = state_42966;
state_42966 = G__42986;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto__ = function(state_42966){
switch(arguments.length){
case 0:
return examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto____0.call(this);
case 1:
return examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto____1.call(this,state_42966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto____0;
examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto____1;
return examples$progress$simulate_long_operation_BANG__$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto__))
})();
var state__25249__auto__ = (function (){var statearr_42980 = f__25248__auto__.call(null);
(statearr_42980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto__);

return statearr_42980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto__))
);

return c__25247__auto__;
});
examples.progress.start_succeed_BANG_ = (function examples$progress$start_succeed_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,true);
});
examples.progress.start_fail_BANG_ = (function examples$progress$start_fail_BANG_(operation,data){
return examples.progress.simulate_long_operation_BANG_.call(null,operation,data,false);
});
examples.progress.simple_view = (function examples$progress$simple_view(data,_owner){
if(typeof examples.progress.t42990 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.progress.t42990 = (function (simple_view,data,_owner,meta42991){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta42991 = meta42991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t42990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42992,meta42991__$1){
var self__ = this;
var _42992__$1 = this;
return (new examples.progress.t42990(self__.simple_view,self__.data,self__._owner,meta42991__$1));
});

examples.progress.t42990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42992){
var self__ = this;
var _42992__$1 = this;
return self__.meta42991;
});

examples.progress.t42990.prototype.om$core$IRender$ = true;

examples.progress.t42990.prototype.om$core$IRender$render$arity$1 = (function (this__7878__auto__){
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

examples.progress.t42990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta42991","meta42991",-776957378,null)], null);
});

examples.progress.t42990.cljs$lang$type = true;

examples.progress.t42990.cljs$lang$ctorStr = "examples.progress/t42990";

examples.progress.t42990.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.progress/t42990");
});

examples.progress.__GT_t42990 = (function examples$progress$simple_view_$___GT_t42990(simple_view__$1,data__$1,_owner__$1,meta42991){
return (new examples.progress.t42990(simple_view__$1,data__$1,_owner__$1,meta42991));
});

}

return (new examples.progress.t42990(examples$progress$simple_view,data,_owner,null));
});
examples.progress.main_view = (function examples$progress$main_view(app_state,_owner){
if(typeof examples.progress.t43000 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.progress.t43000 = (function (main_view,app_state,_owner,meta43001){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta43001 = meta43001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.progress.t43000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43002,meta43001__$1){
var self__ = this;
var _43002__$1 = this;
return (new examples.progress.t43000(self__.main_view,self__.app_state,self__._owner,meta43001__$1));
});

examples.progress.t43000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43002){
var self__ = this;
var _43002__$1 = this;
return self__.meta43001;
});

examples.progress.t43000.prototype.om$core$IRender$ = true;

examples.progress.t43000.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.progress.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state)));
});

examples.progress.t43000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta43001","meta43001",-673175748,null)], null);
});

examples.progress.t43000.cljs$lang$type = true;

examples.progress.t43000.cljs$lang$ctorStr = "examples.progress/t43000";

examples.progress.t43000.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.progress/t43000");
});

examples.progress.__GT_t43000 = (function examples$progress$main_view_$___GT_t43000(main_view__$1,app_state__$1,_owner__$1,meta43001){
return (new examples.progress.t43000(main_view__$1,app_state__$1,_owner__$1,meta43001));
});

}

return (new examples.progress.t43000(examples$progress$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.progress.main_view,examples.progress.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=progress.js.map