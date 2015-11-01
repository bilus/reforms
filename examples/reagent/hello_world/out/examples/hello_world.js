// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.hello_world');
goog.require('cljs.core');
goog.require('reforms.reagent');
goog.require('reagent.core');
goog.require('examples.shared.utils');
examples.hello_world.simple_view = (function examples$hello_world$simple_view(data){
var horizontal_orientation = reagent.core.atom.call(null,false);
return ((function (horizontal_orientation){
return (function (){
var _STAR_options_STAR_12491 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,horizontal_orientation)], null)], null));

try{return reforms.reagent.panel.call(null,"Hello, world",reforms.reagent.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_12491,horizontal_orientation){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_12491,horizontal_orientation))
], null),reforms.reagent.text.call(null,"Your name",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here"),reforms.reagent.form_buttons.call(null,reforms.reagent.button_primary.call(null,"Submit",((function (_STAR_options_STAR_12491,horizontal_orientation){
return (function (){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
});})(_STAR_options_STAR_12491,horizontal_orientation))
),reforms.reagent.button_default.call(null,"Cancel",((function (_STAR_options_STAR_12491,horizontal_orientation){
return (function (){
return alert("Cancel!");
});})(_STAR_options_STAR_12491,horizontal_orientation))
)),reforms.reagent.checkbox.call(null,"Horizontal form",horizontal_orientation,cljs.core.PersistentVector.EMPTY)));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_12491;
}});
;})(horizontal_orientation))
});
examples.hello_world.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"John"], null));
examples.hello_world.main_view = (function examples$hello_world$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.hello_world.simple_view,examples.hello_world.app_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.shared.utils.inspector_view,examples.hello_world.app_state], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.hello_world.main_view], null),document.getElementById("app"));

//# sourceMappingURL=hello_world.js.map