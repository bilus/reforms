// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5683__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_6571_6573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_6572_6574 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_6571_6573,_STAR_print_fn_STAR_6572_6574,sb__5683__auto__){
return (function (x__5684__auto__){
return sb__5683__auto__.append(x__5684__auto__);
});})(_STAR_print_newline_STAR_6571_6573,_STAR_print_fn_STAR_6572_6574,sb__5683__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_6572_6574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_6571_6573;
}
return [cljs.core.str(sb__5683__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(var_args){
var args__5774__auto__ = [];
var len__5767__auto___6579 = arguments.length;
var i__5768__auto___6580 = (0);
while(true){
if((i__5768__auto___6580 < len__5767__auto___6579)){
args__5774__auto__.push((arguments[i__5768__auto___6580]));

var G__6581 = (i__5768__auto___6580 + (1));
i__5768__auto___6580 = G__6581;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__6577){
var vec__6578 = p__6577;
var path = cljs.core.nth.call(null,vec__6578,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.inspector","pre.inspector",1880304562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"inspector-view"], null),examples.shared.utils.inspect.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path))], null);
});

examples.shared.utils.inspector_view.cljs$lang$maxFixedArity = (1);

examples.shared.utils.inspector_view.cljs$lang$applyTo = (function (seq6575){
var G__6576 = cljs.core.first.call(null,seq6575);
var seq6575__$1 = cljs.core.next.call(null,seq6575);
return examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic(G__6576,seq6575__$1);
});

//# sourceMappingURL=utils.js.map