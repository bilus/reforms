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
var G__15343__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__15342 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__15342,(0),null);
var body = cljs.core.nthnext.call(null,vec__15342,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__15343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15344__i = 0, G__15344__a = new Array(arguments.length -  0);
while (G__15344__i < G__15344__a.length) {G__15344__a[G__15344__i] = arguments[G__15344__i + 0]; ++G__15344__i;}
  args = new cljs.core.IndexedSeq(G__15344__a,0);
} 
return G__15343__delegate.call(this,args);};
G__15343.cljs$lang$maxFixedArity = 0;
G__15343.cljs$lang$applyTo = (function (arglist__15345){
var args = cljs.core.seq(arglist__15345);
return G__15343__delegate(args);
});
G__15343.cljs$core$IFn$_invoke$arity$variadic = G__15343__delegate;
return G__15343;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__15350(s__15351){
return (new cljs.core.LazySeq(null,(function (){
var s__15351__$1 = s__15351;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15351__$1);
if(temp__4425__auto__){
var s__15351__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15351__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__15351__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__15353 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__15352 = (0);
while(true){
if((i__15352 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__15352);
cljs.core.chunk_append.call(null,b__15353,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15354 = (i__15352 + (1));
i__15352 = G__15354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15353),sablono$core$update_arglists_$_iter__15350.call(null,cljs.core.chunk_rest.call(null,s__15351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15353),null);
}
} else {
var args = cljs.core.first.call(null,s__15351__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15350.call(null,cljs.core.rest.call(null,s__15351__$2)));
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
var len__5651__auto___15360 = arguments.length;
var i__5652__auto___15361 = (0);
while(true){
if((i__5652__auto___15361 < len__5651__auto___15360)){
args__5658__auto__.push((arguments[i__5652__auto___15361]));

var G__15362 = (i__5652__auto___15361 + (1));
i__5652__auto___15361 = G__15362;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__15356(s__15357){
return (new cljs.core.LazySeq(null,(function (){
var s__15357__$1 = s__15357;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15357__$1);
if(temp__4425__auto__){
var s__15357__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15357__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__15357__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__15359 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__15358 = (0);
while(true){
if((i__15358 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__15358);
cljs.core.chunk_append.call(null,b__15359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15363 = (i__15358 + (1));
i__15358 = G__15363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15359),sablono$core$iter__15356.call(null,cljs.core.chunk_rest.call(null,s__15357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15359),null);
}
} else {
var style = cljs.core.first.call(null,s__15357__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15356.call(null,cljs.core.rest.call(null,s__15357__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq15355){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15355));
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
sablono.core.link_to15364 = (function sablono$core$link_to15364(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15367 = arguments.length;
var i__5652__auto___15368 = (0);
while(true){
if((i__5652__auto___15368 < len__5651__auto___15367)){
args__5658__auto__.push((arguments[i__5652__auto___15368]));

var G__15369 = (i__5652__auto___15368 + (1));
i__5652__auto___15368 = G__15369;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to15364.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to15364.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to15364.cljs$lang$maxFixedArity = (1);

sablono.core.link_to15364.cljs$lang$applyTo = (function (seq15365){
var G__15366 = cljs.core.first.call(null,seq15365);
var seq15365__$1 = cljs.core.next.call(null,seq15365);
return sablono.core.link_to15364.cljs$core$IFn$_invoke$arity$variadic(G__15366,seq15365__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15364);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15370 = (function sablono$core$mail_to15370(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15375 = arguments.length;
var i__5652__auto___15376 = (0);
while(true){
if((i__5652__auto___15376 < len__5651__auto___15375)){
args__5658__auto__.push((arguments[i__5652__auto___15376]));

var G__15377 = (i__5652__auto___15376 + (1));
i__5652__auto___15376 = G__15377;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to15370.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to15370.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15373){
var vec__15374 = p__15373;
var content = cljs.core.nth.call(null,vec__15374,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to15370.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to15370.cljs$lang$applyTo = (function (seq15371){
var G__15372 = cljs.core.first.call(null,seq15371);
var seq15371__$1 = cljs.core.next.call(null,seq15371);
return sablono.core.mail_to15370.cljs$core$IFn$_invoke$arity$variadic(G__15372,seq15371__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15370);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15378 = (function sablono$core$unordered_list15378(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list15378_$_iter__15383(s__15384){
return (new cljs.core.LazySeq(null,(function (){
var s__15384__$1 = s__15384;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15384__$1);
if(temp__4425__auto__){
var s__15384__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15384__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__15384__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__15386 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__15385 = (0);
while(true){
if((i__15385 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__15385);
cljs.core.chunk_append.call(null,b__15386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15387 = (i__15385 + (1));
i__15385 = G__15387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15386),sablono$core$unordered_list15378_$_iter__15383.call(null,cljs.core.chunk_rest.call(null,s__15384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15386),null);
}
} else {
var x = cljs.core.first.call(null,s__15384__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15378_$_iter__15383.call(null,cljs.core.rest.call(null,s__15384__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15378);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15388 = (function sablono$core$ordered_list15388(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list15388_$_iter__15393(s__15394){
return (new cljs.core.LazySeq(null,(function (){
var s__15394__$1 = s__15394;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15394__$1);
if(temp__4425__auto__){
var s__15394__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15394__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__15394__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__15396 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__15395 = (0);
while(true){
if((i__15395 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__15395);
cljs.core.chunk_append.call(null,b__15396,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15397 = (i__15395 + (1));
i__15395 = G__15397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15396),sablono$core$ordered_list15388_$_iter__15393.call(null,cljs.core.chunk_rest.call(null,s__15394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15396),null);
}
} else {
var x = cljs.core.first.call(null,s__15394__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15388_$_iter__15393.call(null,cljs.core.rest.call(null,s__15394__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15388);
/**
 * Create an image element.
 */
sablono.core.image15398 = (function sablono$core$image15398(var_args){
var args15399 = [];
var len__5651__auto___15402 = arguments.length;
var i__5652__auto___15403 = (0);
while(true){
if((i__5652__auto___15403 < len__5651__auto___15402)){
args15399.push((arguments[i__5652__auto___15403]));

var G__15404 = (i__5652__auto___15403 + (1));
i__5652__auto___15403 = G__15404;
continue;
} else {
}
break;
}

var G__15401 = args15399.length;
switch (G__15401) {
case 1:
return sablono.core.image15398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15399.length)].join('')));

}
});

sablono.core.image15398.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image15398.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image15398.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15398);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__15406_SHARP_,p2__15407_SHARP_){
return [cljs.core.str(p1__15406_SHARP_),cljs.core.str("["),cljs.core.str(p2__15407_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__15408_SHARP_,p2__15409_SHARP_){
return [cljs.core.str(p1__15408_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15409_SHARP_)].join('');
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
sablono.core.color_field15410 = (function sablono$core$color_field15410(var_args){
var args15411 = [];
var len__5651__auto___15478 = arguments.length;
var i__5652__auto___15479 = (0);
while(true){
if((i__5652__auto___15479 < len__5651__auto___15478)){
args15411.push((arguments[i__5652__auto___15479]));

var G__15480 = (i__5652__auto___15479 + (1));
i__5652__auto___15479 = G__15480;
continue;
} else {
}
break;
}

var G__15413 = args15411.length;
switch (G__15413) {
case 1:
return sablono.core.color_field15410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15411.length)].join('')));

}
});

sablono.core.color_field15410.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.color_field15410.call(null,name__6325__auto__,null);
});

sablono.core.color_field15410.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.color_field15410.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field15410);

/**
 * Creates a date input field.
 */
sablono.core.date_field15414 = (function sablono$core$date_field15414(var_args){
var args15415 = [];
var len__5651__auto___15482 = arguments.length;
var i__5652__auto___15483 = (0);
while(true){
if((i__5652__auto___15483 < len__5651__auto___15482)){
args15415.push((arguments[i__5652__auto___15483]));

var G__15484 = (i__5652__auto___15483 + (1));
i__5652__auto___15483 = G__15484;
continue;
} else {
}
break;
}

var G__15417 = args15415.length;
switch (G__15417) {
case 1:
return sablono.core.date_field15414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15415.length)].join('')));

}
});

sablono.core.date_field15414.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.date_field15414.call(null,name__6325__auto__,null);
});

sablono.core.date_field15414.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.date_field15414.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field15414);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15418 = (function sablono$core$datetime_field15418(var_args){
var args15419 = [];
var len__5651__auto___15486 = arguments.length;
var i__5652__auto___15487 = (0);
while(true){
if((i__5652__auto___15487 < len__5651__auto___15486)){
args15419.push((arguments[i__5652__auto___15487]));

var G__15488 = (i__5652__auto___15487 + (1));
i__5652__auto___15487 = G__15488;
continue;
} else {
}
break;
}

var G__15421 = args15419.length;
switch (G__15421) {
case 1:
return sablono.core.datetime_field15418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15419.length)].join('')));

}
});

sablono.core.datetime_field15418.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_field15418.call(null,name__6325__auto__,null);
});

sablono.core.datetime_field15418.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_field15418.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field15418);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15422 = (function sablono$core$datetime_local_field15422(var_args){
var args15423 = [];
var len__5651__auto___15490 = arguments.length;
var i__5652__auto___15491 = (0);
while(true){
if((i__5652__auto___15491 < len__5651__auto___15490)){
args15423.push((arguments[i__5652__auto___15491]));

var G__15492 = (i__5652__auto___15491 + (1));
i__5652__auto___15491 = G__15492;
continue;
} else {
}
break;
}

var G__15425 = args15423.length;
switch (G__15425) {
case 1:
return sablono.core.datetime_local_field15422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15423.length)].join('')));

}
});

sablono.core.datetime_local_field15422.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_local_field15422.call(null,name__6325__auto__,null);
});

sablono.core.datetime_local_field15422.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_local_field15422.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field15422);

/**
 * Creates a email input field.
 */
sablono.core.email_field15426 = (function sablono$core$email_field15426(var_args){
var args15427 = [];
var len__5651__auto___15494 = arguments.length;
var i__5652__auto___15495 = (0);
while(true){
if((i__5652__auto___15495 < len__5651__auto___15494)){
args15427.push((arguments[i__5652__auto___15495]));

var G__15496 = (i__5652__auto___15495 + (1));
i__5652__auto___15495 = G__15496;
continue;
} else {
}
break;
}

var G__15429 = args15427.length;
switch (G__15429) {
case 1:
return sablono.core.email_field15426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15427.length)].join('')));

}
});

sablono.core.email_field15426.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.email_field15426.call(null,name__6325__auto__,null);
});

sablono.core.email_field15426.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.email_field15426.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15426);

/**
 * Creates a file input field.
 */
sablono.core.file_field15430 = (function sablono$core$file_field15430(var_args){
var args15431 = [];
var len__5651__auto___15498 = arguments.length;
var i__5652__auto___15499 = (0);
while(true){
if((i__5652__auto___15499 < len__5651__auto___15498)){
args15431.push((arguments[i__5652__auto___15499]));

var G__15500 = (i__5652__auto___15499 + (1));
i__5652__auto___15499 = G__15500;
continue;
} else {
}
break;
}

var G__15433 = args15431.length;
switch (G__15433) {
case 1:
return sablono.core.file_field15430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15431.length)].join('')));

}
});

sablono.core.file_field15430.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.file_field15430.call(null,name__6325__auto__,null);
});

sablono.core.file_field15430.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.file_field15430.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field15430);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15434 = (function sablono$core$hidden_field15434(var_args){
var args15435 = [];
var len__5651__auto___15502 = arguments.length;
var i__5652__auto___15503 = (0);
while(true){
if((i__5652__auto___15503 < len__5651__auto___15502)){
args15435.push((arguments[i__5652__auto___15503]));

var G__15504 = (i__5652__auto___15503 + (1));
i__5652__auto___15503 = G__15504;
continue;
} else {
}
break;
}

var G__15437 = args15435.length;
switch (G__15437) {
case 1:
return sablono.core.hidden_field15434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15435.length)].join('')));

}
});

sablono.core.hidden_field15434.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.hidden_field15434.call(null,name__6325__auto__,null);
});

sablono.core.hidden_field15434.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.hidden_field15434.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15434);

/**
 * Creates a month input field.
 */
sablono.core.month_field15438 = (function sablono$core$month_field15438(var_args){
var args15439 = [];
var len__5651__auto___15506 = arguments.length;
var i__5652__auto___15507 = (0);
while(true){
if((i__5652__auto___15507 < len__5651__auto___15506)){
args15439.push((arguments[i__5652__auto___15507]));

var G__15508 = (i__5652__auto___15507 + (1));
i__5652__auto___15507 = G__15508;
continue;
} else {
}
break;
}

var G__15441 = args15439.length;
switch (G__15441) {
case 1:
return sablono.core.month_field15438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15439.length)].join('')));

}
});

sablono.core.month_field15438.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.month_field15438.call(null,name__6325__auto__,null);
});

sablono.core.month_field15438.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.month_field15438.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field15438);

/**
 * Creates a number input field.
 */
sablono.core.number_field15442 = (function sablono$core$number_field15442(var_args){
var args15443 = [];
var len__5651__auto___15510 = arguments.length;
var i__5652__auto___15511 = (0);
while(true){
if((i__5652__auto___15511 < len__5651__auto___15510)){
args15443.push((arguments[i__5652__auto___15511]));

var G__15512 = (i__5652__auto___15511 + (1));
i__5652__auto___15511 = G__15512;
continue;
} else {
}
break;
}

var G__15445 = args15443.length;
switch (G__15445) {
case 1:
return sablono.core.number_field15442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15443.length)].join('')));

}
});

sablono.core.number_field15442.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.number_field15442.call(null,name__6325__auto__,null);
});

sablono.core.number_field15442.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.number_field15442.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field15442);

/**
 * Creates a password input field.
 */
sablono.core.password_field15446 = (function sablono$core$password_field15446(var_args){
var args15447 = [];
var len__5651__auto___15514 = arguments.length;
var i__5652__auto___15515 = (0);
while(true){
if((i__5652__auto___15515 < len__5651__auto___15514)){
args15447.push((arguments[i__5652__auto___15515]));

var G__15516 = (i__5652__auto___15515 + (1));
i__5652__auto___15515 = G__15516;
continue;
} else {
}
break;
}

var G__15449 = args15447.length;
switch (G__15449) {
case 1:
return sablono.core.password_field15446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15447.length)].join('')));

}
});

sablono.core.password_field15446.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.password_field15446.call(null,name__6325__auto__,null);
});

sablono.core.password_field15446.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.password_field15446.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15446);

/**
 * Creates a range input field.
 */
sablono.core.range_field15450 = (function sablono$core$range_field15450(var_args){
var args15451 = [];
var len__5651__auto___15518 = arguments.length;
var i__5652__auto___15519 = (0);
while(true){
if((i__5652__auto___15519 < len__5651__auto___15518)){
args15451.push((arguments[i__5652__auto___15519]));

var G__15520 = (i__5652__auto___15519 + (1));
i__5652__auto___15519 = G__15520;
continue;
} else {
}
break;
}

var G__15453 = args15451.length;
switch (G__15453) {
case 1:
return sablono.core.range_field15450.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15450.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15451.length)].join('')));

}
});

sablono.core.range_field15450.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.range_field15450.call(null,name__6325__auto__,null);
});

sablono.core.range_field15450.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.range_field15450.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field15450);

/**
 * Creates a search input field.
 */
sablono.core.search_field15454 = (function sablono$core$search_field15454(var_args){
var args15455 = [];
var len__5651__auto___15522 = arguments.length;
var i__5652__auto___15523 = (0);
while(true){
if((i__5652__auto___15523 < len__5651__auto___15522)){
args15455.push((arguments[i__5652__auto___15523]));

var G__15524 = (i__5652__auto___15523 + (1));
i__5652__auto___15523 = G__15524;
continue;
} else {
}
break;
}

var G__15457 = args15455.length;
switch (G__15457) {
case 1:
return sablono.core.search_field15454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15455.length)].join('')));

}
});

sablono.core.search_field15454.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.search_field15454.call(null,name__6325__auto__,null);
});

sablono.core.search_field15454.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.search_field15454.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field15454);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15458 = (function sablono$core$tel_field15458(var_args){
var args15459 = [];
var len__5651__auto___15526 = arguments.length;
var i__5652__auto___15527 = (0);
while(true){
if((i__5652__auto___15527 < len__5651__auto___15526)){
args15459.push((arguments[i__5652__auto___15527]));

var G__15528 = (i__5652__auto___15527 + (1));
i__5652__auto___15527 = G__15528;
continue;
} else {
}
break;
}

var G__15461 = args15459.length;
switch (G__15461) {
case 1:
return sablono.core.tel_field15458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15459.length)].join('')));

}
});

sablono.core.tel_field15458.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.tel_field15458.call(null,name__6325__auto__,null);
});

sablono.core.tel_field15458.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.tel_field15458.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field15458);

/**
 * Creates a text input field.
 */
sablono.core.text_field15462 = (function sablono$core$text_field15462(var_args){
var args15463 = [];
var len__5651__auto___15530 = arguments.length;
var i__5652__auto___15531 = (0);
while(true){
if((i__5652__auto___15531 < len__5651__auto___15530)){
args15463.push((arguments[i__5652__auto___15531]));

var G__15532 = (i__5652__auto___15531 + (1));
i__5652__auto___15531 = G__15532;
continue;
} else {
}
break;
}

var G__15465 = args15463.length;
switch (G__15465) {
case 1:
return sablono.core.text_field15462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15463.length)].join('')));

}
});

sablono.core.text_field15462.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.text_field15462.call(null,name__6325__auto__,null);
});

sablono.core.text_field15462.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.text_field15462.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15462);

/**
 * Creates a time input field.
 */
sablono.core.time_field15466 = (function sablono$core$time_field15466(var_args){
var args15467 = [];
var len__5651__auto___15534 = arguments.length;
var i__5652__auto___15535 = (0);
while(true){
if((i__5652__auto___15535 < len__5651__auto___15534)){
args15467.push((arguments[i__5652__auto___15535]));

var G__15536 = (i__5652__auto___15535 + (1));
i__5652__auto___15535 = G__15536;
continue;
} else {
}
break;
}

var G__15469 = args15467.length;
switch (G__15469) {
case 1:
return sablono.core.time_field15466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15467.length)].join('')));

}
});

sablono.core.time_field15466.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.time_field15466.call(null,name__6325__auto__,null);
});

sablono.core.time_field15466.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.time_field15466.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field15466);

/**
 * Creates a url input field.
 */
sablono.core.url_field15470 = (function sablono$core$url_field15470(var_args){
var args15471 = [];
var len__5651__auto___15538 = arguments.length;
var i__5652__auto___15539 = (0);
while(true){
if((i__5652__auto___15539 < len__5651__auto___15538)){
args15471.push((arguments[i__5652__auto___15539]));

var G__15540 = (i__5652__auto___15539 + (1));
i__5652__auto___15539 = G__15540;
continue;
} else {
}
break;
}

var G__15473 = args15471.length;
switch (G__15473) {
case 1:
return sablono.core.url_field15470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15471.length)].join('')));

}
});

sablono.core.url_field15470.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.url_field15470.call(null,name__6325__auto__,null);
});

sablono.core.url_field15470.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.url_field15470.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field15470);

/**
 * Creates a week input field.
 */
sablono.core.week_field15474 = (function sablono$core$week_field15474(var_args){
var args15475 = [];
var len__5651__auto___15542 = arguments.length;
var i__5652__auto___15543 = (0);
while(true){
if((i__5652__auto___15543 < len__5651__auto___15542)){
args15475.push((arguments[i__5652__auto___15543]));

var G__15544 = (i__5652__auto___15543 + (1));
i__5652__auto___15543 = G__15544;
continue;
} else {
}
break;
}

var G__15477 = args15475.length;
switch (G__15477) {
case 1:
return sablono.core.week_field15474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15475.length)].join('')));

}
});

sablono.core.week_field15474.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.week_field15474.call(null,name__6325__auto__,null);
});

sablono.core.week_field15474.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.week_field15474.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field15474);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15546 = (function sablono$core$check_box15546(var_args){
var args15547 = [];
var len__5651__auto___15550 = arguments.length;
var i__5652__auto___15551 = (0);
while(true){
if((i__5652__auto___15551 < len__5651__auto___15550)){
args15547.push((arguments[i__5652__auto___15551]));

var G__15552 = (i__5652__auto___15551 + (1));
i__5652__auto___15551 = G__15552;
continue;
} else {
}
break;
}

var G__15549 = args15547.length;
switch (G__15549) {
case 1:
return sablono.core.check_box15546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15546.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15547.length)].join('')));

}
});

sablono.core.check_box15546.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15546.call(null,name,null);
});

sablono.core.check_box15546.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15546.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box15546.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box15546.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15546);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15554 = (function sablono$core$radio_button15554(var_args){
var args15555 = [];
var len__5651__auto___15558 = arguments.length;
var i__5652__auto___15559 = (0);
while(true){
if((i__5652__auto___15559 < len__5651__auto___15558)){
args15555.push((arguments[i__5652__auto___15559]));

var G__15560 = (i__5652__auto___15559 + (1));
i__5652__auto___15559 = G__15560;
continue;
} else {
}
break;
}

var G__15557 = args15555.length;
switch (G__15557) {
case 1:
return sablono.core.radio_button15554.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15554.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15555.length)].join('')));

}
});

sablono.core.radio_button15554.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15554.call(null,group,null);
});

sablono.core.radio_button15554.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15554.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button15554.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button15554.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15554);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15562 = (function sablono$core$select_options15562(var_args){
var args15563 = [];
var len__5651__auto___15574 = arguments.length;
var i__5652__auto___15575 = (0);
while(true){
if((i__5652__auto___15575 < len__5651__auto___15574)){
args15563.push((arguments[i__5652__auto___15575]));

var G__15576 = (i__5652__auto___15575 + (1));
i__5652__auto___15575 = G__15576;
continue;
} else {
}
break;
}

var G__15565 = args15563.length;
switch (G__15565) {
case 1:
return sablono.core.select_options15562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options15562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15563.length)].join('')));

}
});

sablono.core.select_options15562.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options15562.call(null,coll,null);
});

sablono.core.select_options15562.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5365__auto__ = (function sablono$core$iter__15566(s__15567){
return (new cljs.core.LazySeq(null,(function (){
var s__15567__$1 = s__15567;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15567__$1);
if(temp__4425__auto__){
var s__15567__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15567__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__15567__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__15569 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__15568 = (0);
while(true){
if((i__15568 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__15568);
cljs.core.chunk_append.call(null,b__15569,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15572 = x;
var text = cljs.core.nth.call(null,vec__15572,(0),null);
var val = cljs.core.nth.call(null,vec__15572,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15572,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options15562.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__15578 = (i__15568 + (1));
i__15568 = G__15578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15569),sablono$core$iter__15566.call(null,cljs.core.chunk_rest.call(null,s__15567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15569),null);
}
} else {
var x = cljs.core.first.call(null,s__15567__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15573 = x;
var text = cljs.core.nth.call(null,vec__15573,(0),null);
var val = cljs.core.nth.call(null,vec__15573,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15573,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options15562.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__15566.call(null,cljs.core.rest.call(null,s__15567__$2)));
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

sablono.core.select_options15562.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15562);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15579 = (function sablono$core$drop_down15579(var_args){
var args15580 = [];
var len__5651__auto___15583 = arguments.length;
var i__5652__auto___15584 = (0);
while(true){
if((i__5652__auto___15584 < len__5651__auto___15583)){
args15580.push((arguments[i__5652__auto___15584]));

var G__15585 = (i__5652__auto___15584 + (1));
i__5652__auto___15584 = G__15585;
continue;
} else {
}
break;
}

var G__15582 = args15580.length;
switch (G__15582) {
case 2:
return sablono.core.drop_down15579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15579.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15580.length)].join('')));

}
});

sablono.core.drop_down15579.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15579.call(null,name,options,null);
});

sablono.core.drop_down15579.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down15579.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15579);
/**
 * Creates a text area element.
 */
sablono.core.text_area15587 = (function sablono$core$text_area15587(var_args){
var args15588 = [];
var len__5651__auto___15591 = arguments.length;
var i__5652__auto___15592 = (0);
while(true){
if((i__5652__auto___15592 < len__5651__auto___15591)){
args15588.push((arguments[i__5652__auto___15592]));

var G__15593 = (i__5652__auto___15592 + (1));
i__5652__auto___15592 = G__15593;
continue;
} else {
}
break;
}

var G__15590 = args15588.length;
switch (G__15590) {
case 1:
return sablono.core.text_area15587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15588.length)].join('')));

}
});

sablono.core.text_area15587.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15587.call(null,name,null);
});

sablono.core.text_area15587.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area15587.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15587);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15595 = (function sablono$core$label15595(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15595);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15596 = (function sablono$core$submit_button15596(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15596);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15597 = (function sablono$core$reset_button15597(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15597);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15598 = (function sablono$core$form_to15598(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15603 = arguments.length;
var i__5652__auto___15604 = (0);
while(true){
if((i__5652__auto___15604 < len__5651__auto___15603)){
args__5658__auto__.push((arguments[i__5652__auto___15604]));

var G__15605 = (i__5652__auto___15604 + (1));
i__5652__auto___15604 = G__15605;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to15598.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to15598.cljs$core$IFn$_invoke$arity$variadic = (function (p__15601,body){
var vec__15602 = p__15601;
var method = cljs.core.nth.call(null,vec__15602,(0),null);
var action = cljs.core.nth.call(null,vec__15602,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to15598.cljs$lang$maxFixedArity = (1);

sablono.core.form_to15598.cljs$lang$applyTo = (function (seq15599){
var G__15600 = cljs.core.first.call(null,seq15599);
var seq15599__$1 = cljs.core.next.call(null,seq15599);
return sablono.core.form_to15598.cljs$core$IFn$_invoke$arity$variadic(G__15600,seq15599__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15598);

//# sourceMappingURL=core.js.map