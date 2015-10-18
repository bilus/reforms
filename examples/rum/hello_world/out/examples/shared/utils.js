// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('rum.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5567__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13707_13709 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13708_13710 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13707_13709,_STAR_print_fn_STAR_13708_13710,sb__5567__auto__){
return (function (x__5568__auto__){
return sb__5567__auto__.append(x__5568__auto__);
});})(_STAR_print_newline_STAR_13707_13709,_STAR_print_fn_STAR_13708_13710,sb__5567__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13708_13710;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13707_13709;
}
return [cljs.core.str(sb__5567__auto__)].join('');
});
examples.shared.utils.inspector_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__13713__delegate = function (data,p__13711){
var vec__13712 = p__13711;
var path = cljs.core.nth.call(null,vec__13712,(0),null);
return React.createElement("pre",{"key": "inspector-view", "className": "inspector"},sablono.interpreter.interpret.call(null,examples.shared.utils.inspect.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path))));
};
var G__13713 = function (data,var_args){
var p__13711 = null;
if (arguments.length > 1) {
var G__13714__i = 0, G__13714__a = new Array(arguments.length -  1);
while (G__13714__i < G__13714__a.length) {G__13714__a[G__13714__i] = arguments[G__13714__i + 1]; ++G__13714__i;}
  p__13711 = new cljs.core.IndexedSeq(G__13714__a,0);
} 
return G__13713__delegate.call(this,data,p__13711);};
G__13713.cljs$lang$maxFixedArity = 1;
G__13713.cljs$lang$applyTo = (function (arglist__13715){
var data = cljs.core.first(arglist__13715);
var p__13711 = cljs.core.rest(arglist__13715);
return G__13713__delegate(data,p__13711);
});
G__13713.cljs$core$IFn$_invoke$arity$variadic = G__13713__delegate;
return G__13713;
})()
);
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"inspector-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__13716__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__13716 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__13717__i = 0, G__13717__a = new Array(arguments.length -  0);
while (G__13717__i < G__13717__a.length) {G__13717__a[G__13717__i] = arguments[G__13717__i + 0]; ++G__13717__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__13717__a,0);
} 
return G__13716__delegate.call(this,args__6384__auto__);};
G__13716.cljs$lang$maxFixedArity = 0;
G__13716.cljs$lang$applyTo = (function (arglist__13718){
var args__6384__auto__ = cljs.core.seq(arglist__13718);
return G__13716__delegate(args__6384__auto__);
});
G__13716.cljs$core$IFn$_invoke$arity$variadic = G__13716__delegate;
return G__13716;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();

//# sourceMappingURL=utils.js.map