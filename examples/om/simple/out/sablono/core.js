// Compiled by ClojureScript 1.7.122 {}
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
var G__10324__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10323 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__10323,(0),null);
var body = cljs.core.nthnext.call(null,vec__10323,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10325__i = 0, G__10325__a = new Array(arguments.length -  0);
while (G__10325__i < G__10325__a.length) {G__10325__a[G__10325__i] = arguments[G__10325__i + 0]; ++G__10325__i;}
  args = new cljs.core.IndexedSeq(G__10325__a,0);
} 
return G__10324__delegate.call(this,args);};
G__10324.cljs$lang$maxFixedArity = 0;
G__10324.cljs$lang$applyTo = (function (arglist__10326){
var args = cljs.core.seq(arglist__10326);
return G__10324__delegate(args);
});
G__10324.cljs$core$IFn$_invoke$arity$variadic = G__10324__delegate;
return G__10324;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__10331(s__10332){
return (new cljs.core.LazySeq(null,(function (){
var s__10332__$1 = s__10332;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10332__$1);
if(temp__4425__auto__){
var s__10332__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10332__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__10332__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__10334 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__10333 = (0);
while(true){
if((i__10333 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__10333);
cljs.core.chunk_append.call(null,b__10334,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10335 = (i__10333 + (1));
i__10333 = G__10335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10334),sablono$core$update_arglists_$_iter__10331.call(null,cljs.core.chunk_rest.call(null,s__10332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10334),null);
}
} else {
var args = cljs.core.first.call(null,s__10332__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10331.call(null,cljs.core.rest.call(null,s__10332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,arglists);
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
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5658__auto__ = [];
var len__5651__auto___10341 = arguments.length;
var i__5652__auto___10342 = (0);
while(true){
if((i__5652__auto___10342 < len__5651__auto___10341)){
args__5658__auto__.push((arguments[i__5652__auto___10342]));

var G__10343 = (i__5652__auto___10342 + (1));
i__5652__auto___10342 = G__10343;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__10337(s__10338){
return (new cljs.core.LazySeq(null,(function (){
var s__10338__$1 = s__10338;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10338__$1);
if(temp__4425__auto__){
var s__10338__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10338__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__10338__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__10340 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__10339 = (0);
while(true){
if((i__10339 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__10339);
cljs.core.chunk_append.call(null,b__10340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10344 = (i__10339 + (1));
i__10339 = G__10344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10340),sablono$core$iter__10337.call(null,cljs.core.chunk_rest.call(null,s__10338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10340),null);
}
} else {
var style = cljs.core.first.call(null,s__10338__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10337.call(null,cljs.core.rest.call(null,s__10338__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq10336){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10336));
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
sablono.core.link_to10345 = (function sablono$core$link_to10345(var_args){
var args__5658__auto__ = [];
var len__5651__auto___10348 = arguments.length;
var i__5652__auto___10349 = (0);
while(true){
if((i__5652__auto___10349 < len__5651__auto___10348)){
args__5658__auto__.push((arguments[i__5652__auto___10349]));

var G__10350 = (i__5652__auto___10349 + (1));
i__5652__auto___10349 = G__10350;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to10345.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to10345.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to10345.cljs$lang$maxFixedArity = (1);

sablono.core.link_to10345.cljs$lang$applyTo = (function (seq10346){
var G__10347 = cljs.core.first.call(null,seq10346);
var seq10346__$1 = cljs.core.next.call(null,seq10346);
return sablono.core.link_to10345.cljs$core$IFn$_invoke$arity$variadic(G__10347,seq10346__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10345);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10351 = (function sablono$core$mail_to10351(var_args){
var args__5658__auto__ = [];
var len__5651__auto___10356 = arguments.length;
var i__5652__auto___10357 = (0);
while(true){
if((i__5652__auto___10357 < len__5651__auto___10356)){
args__5658__auto__.push((arguments[i__5652__auto___10357]));

var G__10358 = (i__5652__auto___10357 + (1));
i__5652__auto___10357 = G__10358;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to10351.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to10351.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10354){
var vec__10355 = p__10354;
var content = cljs.core.nth.call(null,vec__10355,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to10351.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to10351.cljs$lang$applyTo = (function (seq10352){
var G__10353 = cljs.core.first.call(null,seq10352);
var seq10352__$1 = cljs.core.next.call(null,seq10352);
return sablono.core.mail_to10351.cljs$core$IFn$_invoke$arity$variadic(G__10353,seq10352__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10351);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10359 = (function sablono$core$unordered_list10359(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list10359_$_iter__10364(s__10365){
return (new cljs.core.LazySeq(null,(function (){
var s__10365__$1 = s__10365;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10365__$1);
if(temp__4425__auto__){
var s__10365__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10365__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__10365__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__10367 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__10366 = (0);
while(true){
if((i__10366 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__10366);
cljs.core.chunk_append.call(null,b__10367,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10368 = (i__10366 + (1));
i__10366 = G__10368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10367),sablono$core$unordered_list10359_$_iter__10364.call(null,cljs.core.chunk_rest.call(null,s__10365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10367),null);
}
} else {
var x = cljs.core.first.call(null,s__10365__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10359_$_iter__10364.call(null,cljs.core.rest.call(null,s__10365__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10359);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10369 = (function sablono$core$ordered_list10369(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list10369_$_iter__10374(s__10375){
return (new cljs.core.LazySeq(null,(function (){
var s__10375__$1 = s__10375;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10375__$1);
if(temp__4425__auto__){
var s__10375__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10375__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__10375__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__10377 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__10376 = (0);
while(true){
if((i__10376 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__10376);
cljs.core.chunk_append.call(null,b__10377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10378 = (i__10376 + (1));
i__10376 = G__10378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10377),sablono$core$ordered_list10369_$_iter__10374.call(null,cljs.core.chunk_rest.call(null,s__10375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10377),null);
}
} else {
var x = cljs.core.first.call(null,s__10375__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10369_$_iter__10374.call(null,cljs.core.rest.call(null,s__10375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10369);
/**
 * Create an image element.
 */
sablono.core.image10379 = (function sablono$core$image10379(var_args){
var args10380 = [];
var len__5651__auto___10383 = arguments.length;
var i__5652__auto___10384 = (0);
while(true){
if((i__5652__auto___10384 < len__5651__auto___10383)){
args10380.push((arguments[i__5652__auto___10384]));

var G__10385 = (i__5652__auto___10384 + (1));
i__5652__auto___10384 = G__10385;
continue;
} else {
}
break;
}

var G__10382 = args10380.length;
switch (G__10382) {
case 1:
return sablono.core.image10379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10380.length)].join('')));

}
});

sablono.core.image10379.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image10379.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image10379.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10379);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10387_SHARP_,p2__10388_SHARP_){
return [cljs.core.str(p1__10387_SHARP_),cljs.core.str("["),cljs.core.str(p2__10388_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10389_SHARP_,p2__10390_SHARP_){
return [cljs.core.str(p1__10389_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10390_SHARP_)].join('');
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
sablono.core.color_field10391 = (function sablono$core$color_field10391(var_args){
var args10392 = [];
var len__5651__auto___10459 = arguments.length;
var i__5652__auto___10460 = (0);
while(true){
if((i__5652__auto___10460 < len__5651__auto___10459)){
args10392.push((arguments[i__5652__auto___10460]));

var G__10461 = (i__5652__auto___10460 + (1));
i__5652__auto___10460 = G__10461;
continue;
} else {
}
break;
}

var G__10394 = args10392.length;
switch (G__10394) {
case 1:
return sablono.core.color_field10391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10392.length)].join('')));

}
});

sablono.core.color_field10391.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.color_field10391.call(null,name__6325__auto__,null);
});

sablono.core.color_field10391.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.color_field10391.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10391);

/**
 * Creates a date input field.
 */
sablono.core.date_field10395 = (function sablono$core$date_field10395(var_args){
var args10396 = [];
var len__5651__auto___10463 = arguments.length;
var i__5652__auto___10464 = (0);
while(true){
if((i__5652__auto___10464 < len__5651__auto___10463)){
args10396.push((arguments[i__5652__auto___10464]));

var G__10465 = (i__5652__auto___10464 + (1));
i__5652__auto___10464 = G__10465;
continue;
} else {
}
break;
}

var G__10398 = args10396.length;
switch (G__10398) {
case 1:
return sablono.core.date_field10395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10396.length)].join('')));

}
});

sablono.core.date_field10395.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.date_field10395.call(null,name__6325__auto__,null);
});

sablono.core.date_field10395.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.date_field10395.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10395);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10399 = (function sablono$core$datetime_field10399(var_args){
var args10400 = [];
var len__5651__auto___10467 = arguments.length;
var i__5652__auto___10468 = (0);
while(true){
if((i__5652__auto___10468 < len__5651__auto___10467)){
args10400.push((arguments[i__5652__auto___10468]));

var G__10469 = (i__5652__auto___10468 + (1));
i__5652__auto___10468 = G__10469;
continue;
} else {
}
break;
}

var G__10402 = args10400.length;
switch (G__10402) {
case 1:
return sablono.core.datetime_field10399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10400.length)].join('')));

}
});

sablono.core.datetime_field10399.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_field10399.call(null,name__6325__auto__,null);
});

sablono.core.datetime_field10399.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_field10399.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10399);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10403 = (function sablono$core$datetime_local_field10403(var_args){
var args10404 = [];
var len__5651__auto___10471 = arguments.length;
var i__5652__auto___10472 = (0);
while(true){
if((i__5652__auto___10472 < len__5651__auto___10471)){
args10404.push((arguments[i__5652__auto___10472]));

var G__10473 = (i__5652__auto___10472 + (1));
i__5652__auto___10472 = G__10473;
continue;
} else {
}
break;
}

var G__10406 = args10404.length;
switch (G__10406) {
case 1:
return sablono.core.datetime_local_field10403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10404.length)].join('')));

}
});

sablono.core.datetime_local_field10403.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_local_field10403.call(null,name__6325__auto__,null);
});

sablono.core.datetime_local_field10403.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_local_field10403.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10403);

/**
 * Creates a email input field.
 */
sablono.core.email_field10407 = (function sablono$core$email_field10407(var_args){
var args10408 = [];
var len__5651__auto___10475 = arguments.length;
var i__5652__auto___10476 = (0);
while(true){
if((i__5652__auto___10476 < len__5651__auto___10475)){
args10408.push((arguments[i__5652__auto___10476]));

var G__10477 = (i__5652__auto___10476 + (1));
i__5652__auto___10476 = G__10477;
continue;
} else {
}
break;
}

var G__10410 = args10408.length;
switch (G__10410) {
case 1:
return sablono.core.email_field10407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10408.length)].join('')));

}
});

sablono.core.email_field10407.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.email_field10407.call(null,name__6325__auto__,null);
});

sablono.core.email_field10407.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.email_field10407.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10407);

/**
 * Creates a file input field.
 */
sablono.core.file_field10411 = (function sablono$core$file_field10411(var_args){
var args10412 = [];
var len__5651__auto___10479 = arguments.length;
var i__5652__auto___10480 = (0);
while(true){
if((i__5652__auto___10480 < len__5651__auto___10479)){
args10412.push((arguments[i__5652__auto___10480]));

var G__10481 = (i__5652__auto___10480 + (1));
i__5652__auto___10480 = G__10481;
continue;
} else {
}
break;
}

var G__10414 = args10412.length;
switch (G__10414) {
case 1:
return sablono.core.file_field10411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10412.length)].join('')));

}
});

sablono.core.file_field10411.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.file_field10411.call(null,name__6325__auto__,null);
});

sablono.core.file_field10411.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.file_field10411.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10411);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10415 = (function sablono$core$hidden_field10415(var_args){
var args10416 = [];
var len__5651__auto___10483 = arguments.length;
var i__5652__auto___10484 = (0);
while(true){
if((i__5652__auto___10484 < len__5651__auto___10483)){
args10416.push((arguments[i__5652__auto___10484]));

var G__10485 = (i__5652__auto___10484 + (1));
i__5652__auto___10484 = G__10485;
continue;
} else {
}
break;
}

var G__10418 = args10416.length;
switch (G__10418) {
case 1:
return sablono.core.hidden_field10415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10416.length)].join('')));

}
});

sablono.core.hidden_field10415.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.hidden_field10415.call(null,name__6325__auto__,null);
});

sablono.core.hidden_field10415.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.hidden_field10415.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10415);

/**
 * Creates a month input field.
 */
sablono.core.month_field10419 = (function sablono$core$month_field10419(var_args){
var args10420 = [];
var len__5651__auto___10487 = arguments.length;
var i__5652__auto___10488 = (0);
while(true){
if((i__5652__auto___10488 < len__5651__auto___10487)){
args10420.push((arguments[i__5652__auto___10488]));

var G__10489 = (i__5652__auto___10488 + (1));
i__5652__auto___10488 = G__10489;
continue;
} else {
}
break;
}

var G__10422 = args10420.length;
switch (G__10422) {
case 1:
return sablono.core.month_field10419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10420.length)].join('')));

}
});

sablono.core.month_field10419.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.month_field10419.call(null,name__6325__auto__,null);
});

sablono.core.month_field10419.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.month_field10419.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10419);

/**
 * Creates a number input field.
 */
sablono.core.number_field10423 = (function sablono$core$number_field10423(var_args){
var args10424 = [];
var len__5651__auto___10491 = arguments.length;
var i__5652__auto___10492 = (0);
while(true){
if((i__5652__auto___10492 < len__5651__auto___10491)){
args10424.push((arguments[i__5652__auto___10492]));

var G__10493 = (i__5652__auto___10492 + (1));
i__5652__auto___10492 = G__10493;
continue;
} else {
}
break;
}

var G__10426 = args10424.length;
switch (G__10426) {
case 1:
return sablono.core.number_field10423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10424.length)].join('')));

}
});

sablono.core.number_field10423.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.number_field10423.call(null,name__6325__auto__,null);
});

sablono.core.number_field10423.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.number_field10423.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10423);

/**
 * Creates a password input field.
 */
sablono.core.password_field10427 = (function sablono$core$password_field10427(var_args){
var args10428 = [];
var len__5651__auto___10495 = arguments.length;
var i__5652__auto___10496 = (0);
while(true){
if((i__5652__auto___10496 < len__5651__auto___10495)){
args10428.push((arguments[i__5652__auto___10496]));

var G__10497 = (i__5652__auto___10496 + (1));
i__5652__auto___10496 = G__10497;
continue;
} else {
}
break;
}

var G__10430 = args10428.length;
switch (G__10430) {
case 1:
return sablono.core.password_field10427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10428.length)].join('')));

}
});

sablono.core.password_field10427.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.password_field10427.call(null,name__6325__auto__,null);
});

sablono.core.password_field10427.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.password_field10427.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10427);

/**
 * Creates a range input field.
 */
sablono.core.range_field10431 = (function sablono$core$range_field10431(var_args){
var args10432 = [];
var len__5651__auto___10499 = arguments.length;
var i__5652__auto___10500 = (0);
while(true){
if((i__5652__auto___10500 < len__5651__auto___10499)){
args10432.push((arguments[i__5652__auto___10500]));

var G__10501 = (i__5652__auto___10500 + (1));
i__5652__auto___10500 = G__10501;
continue;
} else {
}
break;
}

var G__10434 = args10432.length;
switch (G__10434) {
case 1:
return sablono.core.range_field10431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10432.length)].join('')));

}
});

sablono.core.range_field10431.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.range_field10431.call(null,name__6325__auto__,null);
});

sablono.core.range_field10431.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.range_field10431.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10431);

/**
 * Creates a search input field.
 */
sablono.core.search_field10435 = (function sablono$core$search_field10435(var_args){
var args10436 = [];
var len__5651__auto___10503 = arguments.length;
var i__5652__auto___10504 = (0);
while(true){
if((i__5652__auto___10504 < len__5651__auto___10503)){
args10436.push((arguments[i__5652__auto___10504]));

var G__10505 = (i__5652__auto___10504 + (1));
i__5652__auto___10504 = G__10505;
continue;
} else {
}
break;
}

var G__10438 = args10436.length;
switch (G__10438) {
case 1:
return sablono.core.search_field10435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10436.length)].join('')));

}
});

sablono.core.search_field10435.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.search_field10435.call(null,name__6325__auto__,null);
});

sablono.core.search_field10435.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.search_field10435.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10435);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10439 = (function sablono$core$tel_field10439(var_args){
var args10440 = [];
var len__5651__auto___10507 = arguments.length;
var i__5652__auto___10508 = (0);
while(true){
if((i__5652__auto___10508 < len__5651__auto___10507)){
args10440.push((arguments[i__5652__auto___10508]));

var G__10509 = (i__5652__auto___10508 + (1));
i__5652__auto___10508 = G__10509;
continue;
} else {
}
break;
}

var G__10442 = args10440.length;
switch (G__10442) {
case 1:
return sablono.core.tel_field10439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10440.length)].join('')));

}
});

sablono.core.tel_field10439.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.tel_field10439.call(null,name__6325__auto__,null);
});

sablono.core.tel_field10439.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.tel_field10439.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10439);

/**
 * Creates a text input field.
 */
sablono.core.text_field10443 = (function sablono$core$text_field10443(var_args){
var args10444 = [];
var len__5651__auto___10511 = arguments.length;
var i__5652__auto___10512 = (0);
while(true){
if((i__5652__auto___10512 < len__5651__auto___10511)){
args10444.push((arguments[i__5652__auto___10512]));

var G__10513 = (i__5652__auto___10512 + (1));
i__5652__auto___10512 = G__10513;
continue;
} else {
}
break;
}

var G__10446 = args10444.length;
switch (G__10446) {
case 1:
return sablono.core.text_field10443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10444.length)].join('')));

}
});

sablono.core.text_field10443.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.text_field10443.call(null,name__6325__auto__,null);
});

sablono.core.text_field10443.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.text_field10443.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10443);

/**
 * Creates a time input field.
 */
sablono.core.time_field10447 = (function sablono$core$time_field10447(var_args){
var args10448 = [];
var len__5651__auto___10515 = arguments.length;
var i__5652__auto___10516 = (0);
while(true){
if((i__5652__auto___10516 < len__5651__auto___10515)){
args10448.push((arguments[i__5652__auto___10516]));

var G__10517 = (i__5652__auto___10516 + (1));
i__5652__auto___10516 = G__10517;
continue;
} else {
}
break;
}

var G__10450 = args10448.length;
switch (G__10450) {
case 1:
return sablono.core.time_field10447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10448.length)].join('')));

}
});

sablono.core.time_field10447.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.time_field10447.call(null,name__6325__auto__,null);
});

sablono.core.time_field10447.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.time_field10447.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10447);

/**
 * Creates a url input field.
 */
sablono.core.url_field10451 = (function sablono$core$url_field10451(var_args){
var args10452 = [];
var len__5651__auto___10519 = arguments.length;
var i__5652__auto___10520 = (0);
while(true){
if((i__5652__auto___10520 < len__5651__auto___10519)){
args10452.push((arguments[i__5652__auto___10520]));

var G__10521 = (i__5652__auto___10520 + (1));
i__5652__auto___10520 = G__10521;
continue;
} else {
}
break;
}

var G__10454 = args10452.length;
switch (G__10454) {
case 1:
return sablono.core.url_field10451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10452.length)].join('')));

}
});

sablono.core.url_field10451.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.url_field10451.call(null,name__6325__auto__,null);
});

sablono.core.url_field10451.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.url_field10451.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10451);

/**
 * Creates a week input field.
 */
sablono.core.week_field10455 = (function sablono$core$week_field10455(var_args){
var args10456 = [];
var len__5651__auto___10523 = arguments.length;
var i__5652__auto___10524 = (0);
while(true){
if((i__5652__auto___10524 < len__5651__auto___10523)){
args10456.push((arguments[i__5652__auto___10524]));

var G__10525 = (i__5652__auto___10524 + (1));
i__5652__auto___10524 = G__10525;
continue;
} else {
}
break;
}

var G__10458 = args10456.length;
switch (G__10458) {
case 1:
return sablono.core.week_field10455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10456.length)].join('')));

}
});

sablono.core.week_field10455.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.week_field10455.call(null,name__6325__auto__,null);
});

sablono.core.week_field10455.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.week_field10455.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10455);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10527 = (function sablono$core$check_box10527(var_args){
var args10528 = [];
var len__5651__auto___10531 = arguments.length;
var i__5652__auto___10532 = (0);
while(true){
if((i__5652__auto___10532 < len__5651__auto___10531)){
args10528.push((arguments[i__5652__auto___10532]));

var G__10533 = (i__5652__auto___10532 + (1));
i__5652__auto___10532 = G__10533;
continue;
} else {
}
break;
}

var G__10530 = args10528.length;
switch (G__10530) {
case 1:
return sablono.core.check_box10527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10527.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10528.length)].join('')));

}
});

sablono.core.check_box10527.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box10527.call(null,name,null);
});

sablono.core.check_box10527.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box10527.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box10527.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10527.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10527);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10535 = (function sablono$core$radio_button10535(var_args){
var args10536 = [];
var len__5651__auto___10539 = arguments.length;
var i__5652__auto___10540 = (0);
while(true){
if((i__5652__auto___10540 < len__5651__auto___10539)){
args10536.push((arguments[i__5652__auto___10540]));

var G__10541 = (i__5652__auto___10540 + (1));
i__5652__auto___10540 = G__10541;
continue;
} else {
}
break;
}

var G__10538 = args10536.length;
switch (G__10538) {
case 1:
return sablono.core.radio_button10535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10535.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10536.length)].join('')));

}
});

sablono.core.radio_button10535.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button10535.call(null,group,null);
});

sablono.core.radio_button10535.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button10535.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button10535.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10535.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10535);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10543 = (function sablono$core$select_options10543(var_args){
var args10544 = [];
var len__5651__auto___10555 = arguments.length;
var i__5652__auto___10556 = (0);
while(true){
if((i__5652__auto___10556 < len__5651__auto___10555)){
args10544.push((arguments[i__5652__auto___10556]));

var G__10557 = (i__5652__auto___10556 + (1));
i__5652__auto___10556 = G__10557;
continue;
} else {
}
break;
}

var G__10546 = args10544.length;
switch (G__10546) {
case 1:
return sablono.core.select_options10543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options10543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10544.length)].join('')));

}
});

sablono.core.select_options10543.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options10543.call(null,coll,null);
});

sablono.core.select_options10543.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5365__auto__ = (function sablono$core$iter__10547(s__10548){
return (new cljs.core.LazySeq(null,(function (){
var s__10548__$1 = s__10548;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10548__$1);
if(temp__4425__auto__){
var s__10548__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10548__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__10548__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__10550 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__10549 = (0);
while(true){
if((i__10549 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__10549);
cljs.core.chunk_append.call(null,b__10550,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10553 = x;
var text = cljs.core.nth.call(null,vec__10553,(0),null);
var val = cljs.core.nth.call(null,vec__10553,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10553,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10543.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__10559 = (i__10549 + (1));
i__10549 = G__10559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10550),sablono$core$iter__10547.call(null,cljs.core.chunk_rest.call(null,s__10548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10550),null);
}
} else {
var x = cljs.core.first.call(null,s__10548__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10554 = x;
var text = cljs.core.nth.call(null,vec__10554,(0),null);
var val = cljs.core.nth.call(null,vec__10554,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10554,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10543.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__10547.call(null,cljs.core.rest.call(null,s__10548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,coll);
});

sablono.core.select_options10543.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10543);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10560 = (function sablono$core$drop_down10560(var_args){
var args10561 = [];
var len__5651__auto___10564 = arguments.length;
var i__5652__auto___10565 = (0);
while(true){
if((i__5652__auto___10565 < len__5651__auto___10564)){
args10561.push((arguments[i__5652__auto___10565]));

var G__10566 = (i__5652__auto___10565 + (1));
i__5652__auto___10565 = G__10566;
continue;
} else {
}
break;
}

var G__10563 = args10561.length;
switch (G__10563) {
case 2:
return sablono.core.drop_down10560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10560.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10561.length)].join('')));

}
});

sablono.core.drop_down10560.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10560.call(null,name,options,null);
});

sablono.core.drop_down10560.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down10560.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10560);
/**
 * Creates a text area element.
 */
sablono.core.text_area10568 = (function sablono$core$text_area10568(var_args){
var args10569 = [];
var len__5651__auto___10572 = arguments.length;
var i__5652__auto___10573 = (0);
while(true){
if((i__5652__auto___10573 < len__5651__auto___10572)){
args10569.push((arguments[i__5652__auto___10573]));

var G__10574 = (i__5652__auto___10573 + (1));
i__5652__auto___10573 = G__10574;
continue;
} else {
}
break;
}

var G__10571 = args10569.length;
switch (G__10571) {
case 1:
return sablono.core.text_area10568.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10568.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10569.length)].join('')));

}
});

sablono.core.text_area10568.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area10568.call(null,name,null);
});

sablono.core.text_area10568.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area10568.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10568);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10576 = (function sablono$core$label10576(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10576);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10577 = (function sablono$core$submit_button10577(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10577);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10578 = (function sablono$core$reset_button10578(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10578);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10579 = (function sablono$core$form_to10579(var_args){
var args__5658__auto__ = [];
var len__5651__auto___10584 = arguments.length;
var i__5652__auto___10585 = (0);
while(true){
if((i__5652__auto___10585 < len__5651__auto___10584)){
args__5658__auto__.push((arguments[i__5652__auto___10585]));

var G__10586 = (i__5652__auto___10585 + (1));
i__5652__auto___10585 = G__10586;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to10579.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to10579.cljs$core$IFn$_invoke$arity$variadic = (function (p__10582,body){
var vec__10583 = p__10582;
var method = cljs.core.nth.call(null,vec__10583,(0),null);
var action = cljs.core.nth.call(null,vec__10583,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to10579.cljs$lang$maxFixedArity = (1);

sablono.core.form_to10579.cljs$lang$applyTo = (function (seq10580){
var G__10581 = cljs.core.first.call(null,seq10580);
var seq10580__$1 = cljs.core.next.call(null,seq10580);
return sablono.core.form_to10579.cljs$core$IFn$_invoke$arity$variadic(G__10581,seq10580__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10579);

//# sourceMappingURL=core.js.map