// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.hello_world');
goog.require('cljs.core');
goog.require('reforms.rum');
goog.require('rum.core');
goog.require('examples.shared.utils');
examples.hello_world.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null));
examples.hello_world.simple_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (data,horizontal_orientation){
return sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_13874 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,horizontal_orientation)], null)], null));

try{return reforms.rum.panel.call(null,"Hello, world",reforms.rum.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_13874){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_13874))
], null),reforms.rum.text.call(null,"Your name",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here"),reforms.rum.form_buttons.call(null,reforms.rum.button_primary.call(null,"Submit",((function (_STAR_options_STAR_13874){
return (function (){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
});})(_STAR_options_STAR_13874))
),reforms.rum.button_default.call(null,"Cancel",((function (_STAR_options_STAR_13874){
return (function (){
return alert("Cancel!");
});})(_STAR_options_STAR_13874))
)),reforms.rum.checkbox.call(null,"Horizontal form",horizontal_orientation,cljs.core.PersistentVector.EMPTY)));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_13874;
}})());
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"simple-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__13875__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__13875 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__13876__i = 0, G__13876__a = new Array(arguments.length -  0);
while (G__13876__i < G__13876__a.length) {G__13876__a[G__13876__i] = arguments[G__13876__i + 0]; ++G__13876__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__13876__a,0);
} 
return G__13875__delegate.call(this,args__6384__auto__);};
G__13875.cljs$lang$maxFixedArity = 0;
G__13875.cljs$lang$applyTo = (function (arglist__13877){
var args__6384__auto__ = cljs.core.seq(arglist__13877);
return G__13875__delegate(args__6384__auto__);
});
G__13875.cljs$core$IFn$_invoke$arity$variadic = G__13875__delegate;
return G__13875;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
examples.hello_world.main_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs13878 = examples.hello_world.simple_view.call(null,examples.hello_world.app_state,cljs.core.atom.call(null,false));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs13878))?sablono.interpreter.attributes.call(null,attrs13878):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13878))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.hello_world.app_state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13878),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.hello_world.app_state))], null))));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),null),"main-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__13879__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__13879 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__13880__i = 0, G__13880__a = new Array(arguments.length -  0);
while (G__13880__i < G__13880__a.length) {G__13880__a[G__13880__i] = arguments[G__13880__i + 0]; ++G__13880__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__13880__a,0);
} 
return G__13879__delegate.call(this,args__6384__auto__);};
G__13879.cljs$lang$maxFixedArity = 0;
G__13879.cljs$lang$applyTo = (function (arglist__13881){
var args__6384__auto__ = cljs.core.seq(arglist__13881);
return G__13879__delegate(args__6384__auto__);
});
G__13879.cljs$core$IFn$_invoke$arity$variadic = G__13879__delegate;
return G__13879;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
rum.core.mount.call(null,examples.hello_world.main_view.call(null),document.getElementById("app"));

//# sourceMappingURL=hello_world.js.map