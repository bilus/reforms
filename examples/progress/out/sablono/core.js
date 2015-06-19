// Compiled by ClojureScript 0.0-3308 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31352__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31351 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__31351,(0),null);
var body = cljs.core.nthnext.call(null,vec__31351,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31353__i = 0, G__31353__a = new Array(arguments.length -  0);
while (G__31353__i < G__31353__a.length) {G__31353__a[G__31353__i] = arguments[G__31353__i + 0]; ++G__31353__i;}
  args = new cljs.core.IndexedSeq(G__31353__a,0);
} 
return G__31352__delegate.call(this,args);};
G__31352.cljs$lang$maxFixedArity = 0;
G__31352.cljs$lang$applyTo = (function (arglist__31354){
var args = cljs.core.seq(arglist__31354);
return G__31352__delegate(args);
});
G__31352.cljs$core$IFn$_invoke$arity$variadic = G__31352__delegate;
return G__31352;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5103__auto__ = (function sablono$core$update_arglists_$_iter__31359(s__31360){
return (new cljs.core.LazySeq(null,(function (){
var s__31360__$1 = s__31360;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31360__$1);
if(temp__4423__auto__){
var s__31360__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31360__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__31360__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__31362 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__31361 = (0);
while(true){
if((i__31361 < size__5102__auto__)){
var args = cljs.core._nth.call(null,c__5101__auto__,i__31361);
cljs.core.chunk_append.call(null,b__31362,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31363 = (i__31361 + (1));
i__31361 = G__31363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31362),sablono$core$update_arglists_$_iter__31359.call(null,cljs.core.chunk_rest.call(null,s__31360__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31362),null);
}
} else {
var args = cljs.core.first.call(null,s__31360__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31359.call(null,cljs.core.rest.call(null,s__31360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5103__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var argseq__5389__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5389__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5103__auto__ = (function sablono$core$iter__31365(s__31366){
return (new cljs.core.LazySeq(null,(function (){
var s__31366__$1 = s__31366;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31366__$1);
if(temp__4423__auto__){
var s__31366__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31366__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__31366__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__31368 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__31367 = (0);
while(true){
if((i__31367 < size__5102__auto__)){
var style = cljs.core._nth.call(null,c__5101__auto__,i__31367);
cljs.core.chunk_append.call(null,b__31368,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31369 = (i__31367 + (1));
i__31367 = G__31369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31368),sablono$core$iter__31365.call(null,cljs.core.chunk_rest.call(null,s__31366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31368),null);
}
} else {
var style = cljs.core.first.call(null,s__31366__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31365.call(null,cljs.core.rest.call(null,s__31366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5103__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31364){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31364));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to31370 = (function sablono$core$link_to31370(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to31370.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.link_to31370.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31370.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31370.cljs$lang$applyTo = (function (seq31371){
var G__31372 = cljs.core.first.call(null,seq31371);
var seq31371__$1 = cljs.core.next.call(null,seq31371);
return sablono.core.link_to31370.cljs$core$IFn$_invoke$arity$variadic(G__31372,seq31371__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31370);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31373 = (function sablono$core$mail_to31373(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to31373.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.mail_to31373.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31376){
var vec__31377 = p__31376;
var content = cljs.core.nth.call(null,vec__31377,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4349__auto__ = content;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31373.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31373.cljs$lang$applyTo = (function (seq31374){
var G__31375 = cljs.core.first.call(null,seq31374);
var seq31374__$1 = cljs.core.next.call(null,seq31374);
return sablono.core.mail_to31373.cljs$core$IFn$_invoke$arity$variadic(G__31375,seq31374__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31373);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31378 = (function sablono$core$unordered_list31378(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5103__auto__ = (function sablono$core$unordered_list31378_$_iter__31383(s__31384){
return (new cljs.core.LazySeq(null,(function (){
var s__31384__$1 = s__31384;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31384__$1);
if(temp__4423__auto__){
var s__31384__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31384__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__31384__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__31386 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__31385 = (0);
while(true){
if((i__31385 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__31385);
cljs.core.chunk_append.call(null,b__31386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31387 = (i__31385 + (1));
i__31385 = G__31387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31386),sablono$core$unordered_list31378_$_iter__31383.call(null,cljs.core.chunk_rest.call(null,s__31384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31386),null);
}
} else {
var x = cljs.core.first.call(null,s__31384__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31378_$_iter__31383.call(null,cljs.core.rest.call(null,s__31384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5103__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31378);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31388 = (function sablono$core$ordered_list31388(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5103__auto__ = (function sablono$core$ordered_list31388_$_iter__31393(s__31394){
return (new cljs.core.LazySeq(null,(function (){
var s__31394__$1 = s__31394;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31394__$1);
if(temp__4423__auto__){
var s__31394__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31394__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__31394__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__31396 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__31395 = (0);
while(true){
if((i__31395 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__31395);
cljs.core.chunk_append.call(null,b__31396,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31397 = (i__31395 + (1));
i__31395 = G__31397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31396),sablono$core$ordered_list31388_$_iter__31393.call(null,cljs.core.chunk_rest.call(null,s__31394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31396),null);
}
} else {
var x = cljs.core.first.call(null,s__31394__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31388_$_iter__31393.call(null,cljs.core.rest.call(null,s__31394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5103__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31388);
/**
 * Create an image element.
 */
sablono.core.image31398 = (function sablono$core$image31398(){
var G__31400 = arguments.length;
switch (G__31400) {
case 1:
return sablono.core.image31398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image31398.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31398.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31398.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31398);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31402_SHARP_,p2__31403_SHARP_){
return [cljs.core.str(p1__31402_SHARP_),cljs.core.str("["),cljs.core.str(p2__31403_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31404_SHARP_,p2__31405_SHARP_){
return [cljs.core.str(p1__31404_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31405_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field31406 = (function sablono$core$color_field31406(){
var G__31408 = arguments.length;
switch (G__31408) {
case 1:
return sablono.core.color_field31406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field31406.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.color_field31406.call(null,name__6044__auto__,null);
});

sablono.core.color_field31406.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.color_field31406.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31406);

/**
 * Creates a date input field.
 */
sablono.core.date_field31409 = (function sablono$core$date_field31409(){
var G__31411 = arguments.length;
switch (G__31411) {
case 1:
return sablono.core.date_field31409.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31409.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field31409.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.date_field31409.call(null,name__6044__auto__,null);
});

sablono.core.date_field31409.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.date_field31409.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31409);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31412 = (function sablono$core$datetime_field31412(){
var G__31414 = arguments.length;
switch (G__31414) {
case 1:
return sablono.core.datetime_field31412.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field31412.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_field31412.call(null,name__6044__auto__,null);
});

sablono.core.datetime_field31412.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_field31412.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31412);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31415 = (function sablono$core$datetime_local_field31415(){
var G__31417 = arguments.length;
switch (G__31417) {
case 1:
return sablono.core.datetime_local_field31415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field31415.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_local_field31415.call(null,name__6044__auto__,null);
});

sablono.core.datetime_local_field31415.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_local_field31415.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31415);

/**
 * Creates a email input field.
 */
sablono.core.email_field31418 = (function sablono$core$email_field31418(){
var G__31420 = arguments.length;
switch (G__31420) {
case 1:
return sablono.core.email_field31418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field31418.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.email_field31418.call(null,name__6044__auto__,null);
});

sablono.core.email_field31418.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.email_field31418.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31418);

/**
 * Creates a file input field.
 */
sablono.core.file_field31421 = (function sablono$core$file_field31421(){
var G__31423 = arguments.length;
switch (G__31423) {
case 1:
return sablono.core.file_field31421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field31421.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.file_field31421.call(null,name__6044__auto__,null);
});

sablono.core.file_field31421.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.file_field31421.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31421);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31424 = (function sablono$core$hidden_field31424(){
var G__31426 = arguments.length;
switch (G__31426) {
case 1:
return sablono.core.hidden_field31424.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field31424.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.hidden_field31424.call(null,name__6044__auto__,null);
});

sablono.core.hidden_field31424.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.hidden_field31424.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31424);

/**
 * Creates a month input field.
 */
sablono.core.month_field31427 = (function sablono$core$month_field31427(){
var G__31429 = arguments.length;
switch (G__31429) {
case 1:
return sablono.core.month_field31427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field31427.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.month_field31427.call(null,name__6044__auto__,null);
});

sablono.core.month_field31427.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.month_field31427.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31427);

/**
 * Creates a number input field.
 */
sablono.core.number_field31430 = (function sablono$core$number_field31430(){
var G__31432 = arguments.length;
switch (G__31432) {
case 1:
return sablono.core.number_field31430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field31430.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.number_field31430.call(null,name__6044__auto__,null);
});

sablono.core.number_field31430.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.number_field31430.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31430);

/**
 * Creates a password input field.
 */
sablono.core.password_field31433 = (function sablono$core$password_field31433(){
var G__31435 = arguments.length;
switch (G__31435) {
case 1:
return sablono.core.password_field31433.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31433.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field31433.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.password_field31433.call(null,name__6044__auto__,null);
});

sablono.core.password_field31433.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.password_field31433.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31433);

/**
 * Creates a range input field.
 */
sablono.core.range_field31436 = (function sablono$core$range_field31436(){
var G__31438 = arguments.length;
switch (G__31438) {
case 1:
return sablono.core.range_field31436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field31436.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.range_field31436.call(null,name__6044__auto__,null);
});

sablono.core.range_field31436.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.range_field31436.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31436);

/**
 * Creates a search input field.
 */
sablono.core.search_field31439 = (function sablono$core$search_field31439(){
var G__31441 = arguments.length;
switch (G__31441) {
case 1:
return sablono.core.search_field31439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field31439.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.search_field31439.call(null,name__6044__auto__,null);
});

sablono.core.search_field31439.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.search_field31439.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31439);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31442 = (function sablono$core$tel_field31442(){
var G__31444 = arguments.length;
switch (G__31444) {
case 1:
return sablono.core.tel_field31442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field31442.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.tel_field31442.call(null,name__6044__auto__,null);
});

sablono.core.tel_field31442.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.tel_field31442.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31442);

/**
 * Creates a text input field.
 */
sablono.core.text_field31445 = (function sablono$core$text_field31445(){
var G__31447 = arguments.length;
switch (G__31447) {
case 1:
return sablono.core.text_field31445.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31445.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field31445.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.text_field31445.call(null,name__6044__auto__,null);
});

sablono.core.text_field31445.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.text_field31445.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31445);

/**
 * Creates a time input field.
 */
sablono.core.time_field31448 = (function sablono$core$time_field31448(){
var G__31450 = arguments.length;
switch (G__31450) {
case 1:
return sablono.core.time_field31448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field31448.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.time_field31448.call(null,name__6044__auto__,null);
});

sablono.core.time_field31448.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.time_field31448.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31448);

/**
 * Creates a url input field.
 */
sablono.core.url_field31451 = (function sablono$core$url_field31451(){
var G__31453 = arguments.length;
switch (G__31453) {
case 1:
return sablono.core.url_field31451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field31451.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.url_field31451.call(null,name__6044__auto__,null);
});

sablono.core.url_field31451.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.url_field31451.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31451);

/**
 * Creates a week input field.
 */
sablono.core.week_field31454 = (function sablono$core$week_field31454(){
var G__31456 = arguments.length;
switch (G__31456) {
case 1:
return sablono.core.week_field31454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field31454.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.week_field31454.call(null,name__6044__auto__,null);
});

sablono.core.week_field31454.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.week_field31454.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31454);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31474 = (function sablono$core$check_box31474(){
var G__31476 = arguments.length;
switch (G__31476) {
case 1:
return sablono.core.check_box31474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31474.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box31474.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31474.call(null,name,null);
});

sablono.core.check_box31474.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31474.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31474.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31474.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31474);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31478 = (function sablono$core$radio_button31478(){
var G__31480 = arguments.length;
switch (G__31480) {
case 1:
return sablono.core.radio_button31478.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31478.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button31478.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31478.call(null,group,null);
});

sablono.core.radio_button31478.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31478.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31478.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31478.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31478);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31482 = (function sablono$core$select_options31482(){
var G__31484 = arguments.length;
switch (G__31484) {
case 1:
return sablono.core.select_options31482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options31482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options31482.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options31482.call(null,coll,null);
});

sablono.core.select_options31482.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5103__auto__ = (function sablono$core$iter__31485(s__31486){
return (new cljs.core.LazySeq(null,(function (){
var s__31486__$1 = s__31486;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31486__$1);
if(temp__4423__auto__){
var s__31486__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31486__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__31486__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__31488 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__31487 = (0);
while(true){
if((i__31487 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__31487);
cljs.core.chunk_append.call(null,b__31488,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31491 = x;
var text = cljs.core.nth.call(null,vec__31491,(0),null);
var val = cljs.core.nth.call(null,vec__31491,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31491,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31482.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__31494 = (i__31487 + (1));
i__31487 = G__31494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31488),sablono$core$iter__31485.call(null,cljs.core.chunk_rest.call(null,s__31486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31488),null);
}
} else {
var x = cljs.core.first.call(null,s__31486__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31492 = x;
var text = cljs.core.nth.call(null,vec__31492,(0),null);
var val = cljs.core.nth.call(null,vec__31492,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31492,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31482.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__31485.call(null,cljs.core.rest.call(null,s__31486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5103__auto__.call(null,coll);
});

sablono.core.select_options31482.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31482);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31495 = (function sablono$core$drop_down31495(){
var G__31497 = arguments.length;
switch (G__31497) {
case 2:
return sablono.core.drop_down31495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31495.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down31495.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31495.call(null,name,options,null);
});

sablono.core.drop_down31495.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31495.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31495);
/**
 * Creates a text area element.
 */
sablono.core.text_area31499 = (function sablono$core$text_area31499(){
var G__31501 = arguments.length;
switch (G__31501) {
case 1:
return sablono.core.text_area31499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area31499.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31499.call(null,name,null);
});

sablono.core.text_area31499.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area31499.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31499);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31503 = (function sablono$core$label31503(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31503);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31504 = (function sablono$core$submit_button31504(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31504);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31505 = (function sablono$core$reset_button31505(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31505);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to31506 = (function sablono$core$form_to31506(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to31506.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.form_to31506.cljs$core$IFn$_invoke$arity$variadic = (function (p__31509,body){
var vec__31510 = p__31509;
var method = cljs.core.nth.call(null,vec__31510,(0),null);
var action = cljs.core.nth.call(null,vec__31510,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to31506.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31506.cljs$lang$applyTo = (function (seq31507){
var G__31508 = cljs.core.first.call(null,seq31507);
var seq31507__$1 = cljs.core.next.call(null,seq31507);
return sablono.core.form_to31506.cljs$core$IFn$_invoke$arity$variadic(G__31508,seq31507__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31506);

//# sourceMappingURL=core.js.map