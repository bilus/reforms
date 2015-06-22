// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.core');
goog.require('sablono.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5305__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33547_33549 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33548_33550 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33547_33549,_STAR_print_fn_STAR_33548_33550,sb__5305__auto__){
return (function (x__5306__auto__){
return sb__5305__auto__.append(x__5306__auto__);
});})(_STAR_print_newline_STAR_33547_33549,_STAR_print_fn_STAR_33548_33550,sb__5305__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33548_33550;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33547_33549;
}
return [cljs.core.str(sb__5305__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(data,_owner){
if(typeof examples.shared.utils.t33554 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.shared.utils.t33554 = (function (inspector_view,data,_owner,meta33555){
this.inspector_view = inspector_view;
this.data = data;
this._owner = _owner;
this.meta33555 = meta33555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.shared.utils.t33554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33556,meta33555__$1){
var self__ = this;
var _33556__$1 = this;
return (new examples.shared.utils.t33554(self__.inspector_view,self__.data,self__._owner,meta33555__$1));
});

examples.shared.utils.t33554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33556){
var self__ = this;
var _33556__$1 = this;
return self__.meta33555;
});

examples.shared.utils.t33554.prototype.om$core$IRender$ = true;

examples.shared.utils.t33554.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("pre",{"key": "inspector-view", "className": "inspector"},sablono.interpreter.interpret.call(null,examples.shared.utils.inspect.call(null,self__.data)));
});

examples.shared.utils.t33554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inspector-view","inspector-view",-235962653,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta33555","meta33555",1637923777,null)], null);
});

examples.shared.utils.t33554.cljs$lang$type = true;

examples.shared.utils.t33554.cljs$lang$ctorStr = "examples.shared.utils/t33554";

examples.shared.utils.t33554.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.shared.utils/t33554");
});

examples.shared.utils.__GT_t33554 = (function examples$shared$utils$inspector_view_$___GT_t33554(inspector_view__$1,data__$1,_owner__$1,meta33555){
return (new examples.shared.utils.t33554(inspector_view__$1,data__$1,_owner__$1,meta33555));
});

}

return (new examples.shared.utils.t33554(examples$shared$utils$inspector_view,data,_owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utils.js.map