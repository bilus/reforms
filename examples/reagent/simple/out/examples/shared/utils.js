// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5567__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_6455_6457 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_6456_6458 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_6455_6457,_STAR_print_fn_STAR_6456_6458,sb__5567__auto__){
return (function (x__5568__auto__){
return sb__5567__auto__.append(x__5568__auto__);
});})(_STAR_print_newline_STAR_6455_6457,_STAR_print_fn_STAR_6456_6458,sb__5567__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_6456_6458;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_6455_6457;
}
return [cljs.core.str(sb__5567__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(var_args){
var args__5658__auto__ = [];
var len__5651__auto___6463 = arguments.length;
var i__5652__auto___6464 = (0);
while(true){
if((i__5652__auto___6464 < len__5651__auto___6463)){
args__5658__auto__.push((arguments[i__5652__auto___6464]));

var G__6465 = (i__5652__auto___6464 + (1));
i__5652__auto___6464 = G__6465;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__6461){
var vec__6462 = p__6461;
var path = cljs.core.nth.call(null,vec__6462,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.inspector","pre.inspector",1880304562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"inspector-view"], null),examples.shared.utils.inspect.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path))], null);
});

examples.shared.utils.inspector_view.cljs$lang$maxFixedArity = (1);

examples.shared.utils.inspector_view.cljs$lang$applyTo = (function (seq6459){
var G__6460 = cljs.core.first.call(null,seq6459);
var seq6459__$1 = cljs.core.next.call(null,seq6459);
return examples.shared.utils.inspector_view.cljs$core$IFn$_invoke$arity$variadic(G__6460,seq6459__$1);
});

//# sourceMappingURL=utils.js.map