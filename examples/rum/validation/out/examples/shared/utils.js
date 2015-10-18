// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('rum.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5567__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16855_16857 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16856_16858 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16855_16857,_STAR_print_fn_STAR_16856_16858,sb__5567__auto__){
return (function (x__5568__auto__){
return sb__5567__auto__.append(x__5568__auto__);
});})(_STAR_print_newline_STAR_16855_16857,_STAR_print_fn_STAR_16856_16858,sb__5567__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16856_16858;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16855_16857;
}
return [cljs.core.str(sb__5567__auto__)].join('');
});
examples.shared.utils.inspector_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__16861__delegate = function (data,p__16859){
var vec__16860 = p__16859;
var path = cljs.core.nth.call(null,vec__16860,(0),null);
return React.createElement("pre",{"key": "inspector-view", "className": "inspector"},sablono.interpreter.interpret.call(null,examples.shared.utils.inspect.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path))));
};
var G__16861 = function (data,var_args){
var p__16859 = null;
if (arguments.length > 1) {
var G__16862__i = 0, G__16862__a = new Array(arguments.length -  1);
while (G__16862__i < G__16862__a.length) {G__16862__a[G__16862__i] = arguments[G__16862__i + 1]; ++G__16862__i;}
  p__16859 = new cljs.core.IndexedSeq(G__16862__a,0);
} 
return G__16861__delegate.call(this,data,p__16859);};
G__16861.cljs$lang$maxFixedArity = 1;
G__16861.cljs$lang$applyTo = (function (arglist__16863){
var data = cljs.core.first(arglist__16863);
var p__16859 = cljs.core.rest(arglist__16863);
return G__16861__delegate(data,p__16859);
});
G__16861.cljs$core$IFn$_invoke$arity$variadic = G__16861__delegate;
return G__16861;
})()
);
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"inspector-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__16864__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__16864 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__16865__i = 0, G__16865__a = new Array(arguments.length -  0);
while (G__16865__i < G__16865__a.length) {G__16865__a[G__16865__i] = arguments[G__16865__i + 0]; ++G__16865__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__16865__a,0);
} 
return G__16864__delegate.call(this,args__6384__auto__);};
G__16864.cljs$lang$maxFixedArity = 0;
G__16864.cljs$lang$applyTo = (function (arglist__16866){
var args__6384__auto__ = cljs.core.seq(arglist__16866);
return G__16864__delegate(args__6384__auto__);
});
G__16864.cljs$core$IFn$_invoke$arity$variadic = G__16864__delegate;
return G__16864;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();

//# sourceMappingURL=utils.js.map