// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5567__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12287_12289 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12288_12290 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12287_12289,_STAR_print_fn_STAR_12288_12290,sb__5567__auto__){
return (function (x__5568__auto__){
return sb__5567__auto__.append(x__5568__auto__);
});})(_STAR_print_newline_STAR_12287_12289,_STAR_print_fn_STAR_12288_12290,sb__5567__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12288_12290;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12287_12289;
}
return [cljs.core.str(sb__5567__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(var_args){
var args__5658__auto__ = [];
var len__5651__auto___12295 = arguments.length;
var i__5652__auto___12296 = (0);
while(true){
if((i__5652__auto___12296 < len__5651__auto___12295)){
args__5658__auto__.push((arguments[i__5652__auto___12296]));

var G__12297 = (i__5652__auto___12296 + (1));
i__5652__auto___12296 = G__12297;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__12293){
var vec__12294 = p__12293;
var path = cljs.core.nth.call(null,vec__12294,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.inspector","pre.inspector",1880304562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"inspector-view"], null),examples.shared.utils.inspect.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path))], null);
});

examples.shared.utils.inspector_view.cljs$lang$maxFixedArity = (1);

examples.shared.utils.inspector_view.cljs$lang$applyTo = (function (seq12291){
var G__12292 = cljs.core.first.call(null,seq12291);
var seq12291__$1 = cljs.core.next.call(null,seq12291);
return examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic(G__12292,seq12291__$1);
});

//# sourceMappingURL=utils.js.map