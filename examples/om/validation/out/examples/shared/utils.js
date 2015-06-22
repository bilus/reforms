// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.core');
goog.require('sablono.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5295__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19851_19853 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19852_19854 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19851_19853,_STAR_print_fn_STAR_19852_19854,sb__5295__auto__){
return (function (x__5296__auto__){
return sb__5295__auto__.append(x__5296__auto__);
});})(_STAR_print_newline_STAR_19851_19853,_STAR_print_fn_STAR_19852_19854,sb__5295__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19852_19854;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19851_19853;
}
return [cljs.core.str(sb__5295__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(data,_owner){
if(typeof examples.shared.utils.t19858 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.shared.utils.t19858 = (function (inspector_view,data,_owner,meta19859){
this.inspector_view = inspector_view;
this.data = data;
this._owner = _owner;
this.meta19859 = meta19859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.shared.utils.t19858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19860,meta19859__$1){
var self__ = this;
var _19860__$1 = this;
return (new examples.shared.utils.t19858(self__.inspector_view,self__.data,self__._owner,meta19859__$1));
});

examples.shared.utils.t19858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19860){
var self__ = this;
var _19860__$1 = this;
return self__.meta19859;
});

examples.shared.utils.t19858.prototype.om$core$IRender$ = true;

examples.shared.utils.t19858.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("pre",{"key": "inspector-view", "className": "inspector"},sablono.interpreter.interpret.call(null,examples.shared.utils.inspect.call(null,self__.data)));
});

examples.shared.utils.t19858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inspector-view","inspector-view",-235962653,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta19859","meta19859",842980014,null)], null);
});

examples.shared.utils.t19858.cljs$lang$type = true;

examples.shared.utils.t19858.cljs$lang$ctorStr = "examples.shared.utils/t19858";

examples.shared.utils.t19858.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"examples.shared.utils/t19858");
});

examples.shared.utils.__GT_t19858 = (function examples$shared$utils$inspector_view_$___GT_t19858(inspector_view__$1,data__$1,_owner__$1,meta19859){
return (new examples.shared.utils.t19858(inspector_view__$1,data__$1,_owner__$1,meta19859));
});

}

return (new examples.shared.utils.t19858(examples$shared$utils$inspector_view,data,_owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utils.js.map