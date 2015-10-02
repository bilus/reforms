// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.core');
goog.require('sablono.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5683__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_156580_156582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_156581_156583 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_156580_156582,_STAR_print_fn_STAR_156581_156583,sb__5683__auto__){
return (function (x__5684__auto__){
return sb__5683__auto__.append(x__5684__auto__);
});})(_STAR_print_newline_STAR_156580_156582,_STAR_print_fn_STAR_156581_156583,sb__5683__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_156581_156583;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_156580_156582;
}
return [cljs.core.str(sb__5683__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(data,_owner){
if(typeof examples.shared.utils.t_examples$shared$utils156587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.shared.utils.t_examples$shared$utils156587 = (function (inspector_view,data,_owner,meta156588){
this.inspector_view = inspector_view;
this.data = data;
this._owner = _owner;
this.meta156588 = meta156588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.shared.utils.t_examples$shared$utils156587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156589,meta156588__$1){
var self__ = this;
var _156589__$1 = this;
return (new examples.shared.utils.t_examples$shared$utils156587(self__.inspector_view,self__.data,self__._owner,meta156588__$1));
});

examples.shared.utils.t_examples$shared$utils156587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156589){
var self__ = this;
var _156589__$1 = this;
return self__.meta156588;
});

examples.shared.utils.t_examples$shared$utils156587.prototype.om$core$IRender$ = true;

examples.shared.utils.t_examples$shared$utils156587.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("pre",{"key": "inspector-view", "className": "inspector"},sablono.interpreter.interpret.call(null,examples.shared.utils.inspect.call(null,self__.data)));
});

examples.shared.utils.t_examples$shared$utils156587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"inspector-view","inspector-view",-235962653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta156588","meta156588",1460420581,null)], null);
});

examples.shared.utils.t_examples$shared$utils156587.cljs$lang$type = true;

examples.shared.utils.t_examples$shared$utils156587.cljs$lang$ctorStr = "examples.shared.utils/t_examples$shared$utils156587";

examples.shared.utils.t_examples$shared$utils156587.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.shared.utils/t_examples$shared$utils156587");
});

examples.shared.utils.__GT_t_examples$shared$utils156587 = (function examples$shared$utils$inspector_view_$___GT_t_examples$shared$utils156587(inspector_view__$1,data__$1,_owner__$1,meta156588){
return (new examples.shared.utils.t_examples$shared$utils156587(inspector_view__$1,data__$1,_owner__$1,meta156588));
});

}

return (new examples.shared.utils.t_examples$shared$utils156587(examples$shared$utils$inspector_view,data,_owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utils.js.map