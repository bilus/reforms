// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.core');
goog.require('sablono.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5305__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37026_37028 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37027_37029 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37026_37028,_STAR_print_fn_STAR_37027_37029,sb__5305__auto__){
return (function (x__5306__auto__){
return sb__5305__auto__.append(x__5306__auto__);
});})(_STAR_print_newline_STAR_37026_37028,_STAR_print_fn_STAR_37027_37029,sb__5305__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37027_37029;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37026_37028;
}
return [cljs.core.str(sb__5305__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(data,_owner){
if(typeof examples.shared.utils.t37034 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.shared.utils.t37034 = (function (inspector_view,data,_owner,meta37035){
this.inspector_view = inspector_view;
this.data = data;
this._owner = _owner;
this.meta37035 = meta37035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.shared.utils.t37034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37036,meta37035__$1){
var self__ = this;
var _37036__$1 = this;
return (new examples.shared.utils.t37034(self__.inspector_view,self__.data,self__._owner,meta37035__$1));
});

examples.shared.utils.t37034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37036){
var self__ = this;
var _37036__$1 = this;
return self__.meta37035;
});

examples.shared.utils.t37034.prototype.om$core$IRender$ = true;

examples.shared.utils.t37034.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var attrs37037 = examples.shared.utils.inspect.call(null,self__.data);
return cljs.core.apply.call(null,React.createElement,"pre",((cljs.core.map_QMARK_.call(null,attrs37037))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inspector"], null)], null),attrs37037)):{"className": "inspector"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs37037))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37037)], null))));
});

examples.shared.utils.t37034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inspector-view","inspector-view",-235962653,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta37035","meta37035",113673384,null)], null);
});

examples.shared.utils.t37034.cljs$lang$type = true;

examples.shared.utils.t37034.cljs$lang$ctorStr = "examples.shared.utils/t37034";

examples.shared.utils.t37034.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"examples.shared.utils/t37034");
});

examples.shared.utils.__GT_t37034 = (function examples$shared$utils$inspector_view_$___GT_t37034(inspector_view__$1,data__$1,_owner__$1,meta37035){
return (new examples.shared.utils.t37034(inspector_view__$1,data__$1,_owner__$1,meta37035));
});

}

return (new examples.shared.utils.t37034(examples$shared$utils$inspector_view,data,_owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utils.js.map