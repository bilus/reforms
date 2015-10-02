// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.local_state');
goog.require('cljs.core');
goog.require('reforms.om');
goog.require('reforms.binding.om_state');
goog.require('reforms.validation');
goog.require('om.core');
goog.require('sablono.core');
examples.local_state.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.local_state.local_state_demo_view = (function examples$local_state$local_state_demo_view(_data,owner){
if(typeof examples.local_state.t_examples$local_state159313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.local_state.t_examples$local_state159313 = (function (local_state_demo_view,_data,owner,meta159314){
this.local_state_demo_view = local_state_demo_view;
this._data = _data;
this.owner = owner;
this.meta159314 = meta159314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.local_state.t_examples$local_state159313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_159315,meta159314__$1){
var self__ = this;
var _159315__$1 = this;
return (new examples.local_state.t_examples$local_state159313(self__.local_state_demo_view,self__._data,self__.owner,meta159314__$1));
});

examples.local_state.t_examples$local_state159313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_159315){
var self__ = this;
var _159315__$1 = this;
return self__.meta159314;
});

examples.local_state.t_examples$local_state159313.prototype.om$core$IRenderState$ = true;

examples.local_state.t_examples$local_state159313.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_159316 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270).cljs$core$IFn$_invoke$arity$1(state)], null)], null));

try{return reforms.om.panel.call(null,"Binding to local state",(function (){
if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,self__.owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_159316,___$1){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_159316,___$1))
], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.owner),((function (_STAR_options_STAR_159316,___$1){
return (function (){
return reforms.validation.text.call(null,"Your name",self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here");
});})(_STAR_options_STAR_159316,___$1))
,((function (_STAR_options_STAR_159316,___$1){
return (function (){
return reforms.om.form_buttons.call(null,reforms.om.button_primary.call(null,"Submit",((function (_STAR_options_STAR_159316,___$1){
return (function (){
if(cljs.core.truth_(reforms.validation.validate_BANG_.call(null,self__.owner,self__.owner,reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),"Enter your name")))){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner)));
} else {
return null;
}
});})(_STAR_options_STAR_159316,___$1))
),reforms.om.button_default.call(null,"Cancel",((function (_STAR_options_STAR_159316,___$1){
return (function (){
return alert("Cancel!");
});})(_STAR_options_STAR_159316,___$1))
));
});})(_STAR_options_STAR_159316,___$1))
,((function (_STAR_options_STAR_159316,___$1){
return (function (){
return reforms.validation.checkbox.call(null,"Horizontal form",self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270)], null));
});})(_STAR_options_STAR_159316,___$1))
));
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)], null));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_159316;
}})());
});

examples.local_state.t_examples$local_state159313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"local-state-demo-view","local-state-demo-view",778158577,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_data","_data",246266088,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_data","_data",246266088,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta159314","meta159314",-150943676,null)], null);
});

examples.local_state.t_examples$local_state159313.cljs$lang$type = true;

examples.local_state.t_examples$local_state159313.cljs$lang$ctorStr = "examples.local-state/t_examples$local_state159313";

examples.local_state.t_examples$local_state159313.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.local-state/t_examples$local_state159313");
});

examples.local_state.__GT_t_examples$local_state159313 = (function examples$local_state$local_state_demo_view_$___GT_t_examples$local_state159313(local_state_demo_view__$1,_data__$1,owner__$1,meta159314){
return (new examples.local_state.t_examples$local_state159313(local_state_demo_view__$1,_data__$1,owner__$1,meta159314));
});

}

return (new examples.local_state.t_examples$local_state159313(examples$local_state$local_state_demo_view,_data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.local_state.main_view = (function examples$local_state$main_view(app_state,_owner){
if(typeof examples.local_state.t_examples$local_state159324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.local_state.t_examples$local_state159324 = (function (main_view,app_state,_owner,meta159325){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta159325 = meta159325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.local_state.t_examples$local_state159324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_159326,meta159325__$1){
var self__ = this;
var _159326__$1 = this;
return (new examples.local_state.t_examples$local_state159324(self__.main_view,self__.app_state,self__._owner,meta159325__$1));
});

examples.local_state.t_examples$local_state159324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_159326){
var self__ = this;
var _159326__$1 = this;
return self__.meta159325;
});

examples.local_state.t_examples$local_state159324.prototype.om$core$IRender$ = true;

examples.local_state.t_examples$local_state159324.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.local_state.local_state_demo_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});

examples.local_state.t_examples$local_state159324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta159325","meta159325",-1025560345,null)], null);
});

examples.local_state.t_examples$local_state159324.cljs$lang$type = true;

examples.local_state.t_examples$local_state159324.cljs$lang$ctorStr = "examples.local-state/t_examples$local_state159324";

examples.local_state.t_examples$local_state159324.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.local-state/t_examples$local_state159324");
});

examples.local_state.__GT_t_examples$local_state159324 = (function examples$local_state$main_view_$___GT_t_examples$local_state159324(main_view__$1,app_state__$1,_owner__$1,meta159325){
return (new examples.local_state.t_examples$local_state159324(main_view__$1,app_state__$1,_owner__$1,meta159325));
});

}

return (new examples.local_state.t_examples$local_state159324(examples$local_state$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.local_state.main_view,examples.local_state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=local_state.js.map