// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5295__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_8713_8715 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_8714_8716 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_8713_8715,_STAR_print_fn_STAR_8714_8716,sb__5295__auto__){
return (function (x__5296__auto__){
return sb__5295__auto__.append(x__5296__auto__);
});})(_STAR_print_newline_STAR_8713_8715,_STAR_print_fn_STAR_8714_8716,sb__5295__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_8714_8716;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_8713_8715;
}
return [cljs.core.str(sb__5295__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.inspector","pre.inspector",1880304562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"inspector-view"], null),examples.shared.utils.inspect.call(null,cljs.core.deref.call(null,data))], null);
});

//# sourceMappingURL=utils.js.map