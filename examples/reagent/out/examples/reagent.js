// Compiled by ClojureScript 0.0-3308 {}
goog.provide('examples.reagent');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.reagent');
goog.require('reagent.core');
examples.reagent.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null));
examples.reagent.simple_view = (function examples$reagent$simple_view(data){
var _STAR_options_STAR_33824 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270).cljs$core$IFn$_invoke$arity$1(data)], null)], null));

try{return reforms.core.panel.call(null,"Hello, world",reforms.core.form.call(null,reforms.core.text.call(null,"Your name","Type your name here",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)),reforms.core.form_buttons.call(null,reforms.core.button_primary.call(null,"Submit",((function (_STAR_options_STAR_33824){
return (function (){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
});})(_STAR_options_STAR_33824))
),reforms.core.button_default.call(null,"Cancel",((function (_STAR_options_STAR_33824){
return (function (){
return alert("Cancel!");
});})(_STAR_options_STAR_33824))
))));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_33824;
}});
examples.reagent.inspector_view = (function examples$reagent$inspector_view(app_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector","div.inspector",1273711117),cljs.core.prn_str.call(null,cljs.core.deref.call(null,app_state))], null);
});
examples.reagent.main_view = (function examples$reagent$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.reagent.simple_view,examples.reagent.app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.reagent.inspector_view,examples.reagent.app_state], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.reagent.main_view], null),document.getElementById("app"));

//# sourceMappingURL=reagent.js.map