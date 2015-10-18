// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__11263__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11262 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11262,(0),null);
var body = cljs.core.nthnext.call(null,vec__11262,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11264__i = 0, G__11264__a = new Array(arguments.length -  0);
while (G__11264__i < G__11264__a.length) {G__11264__a[G__11264__i] = arguments[G__11264__i + 0]; ++G__11264__i;}
  args = new cljs.core.IndexedSeq(G__11264__a,0);
} 
return G__11263__delegate.call(this,args);};
G__11263.cljs$lang$maxFixedArity = 0;
G__11263.cljs$lang$applyTo = (function (arglist__11265){
var args = cljs.core.seq(arglist__11265);
return G__11263__delegate(args);
});
G__11263.cljs$core$IFn$_invoke$arity$variadic = G__11263__delegate;
return G__11263;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__11270(s__11271){
return (new cljs.core.LazySeq(null,(function (){
var s__11271__$1 = s__11271;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11271__$1);
if(temp__4425__auto__){
var s__11271__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11271__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__11271__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__11273 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__11272 = (0);
while(true){
if((i__11272 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__11272);
cljs.core.chunk_append.call(null,b__11273,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11274 = (i__11272 + (1));
i__11272 = G__11274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11273),sablono$core$update_arglists_$_iter__11270.call(null,cljs.core.chunk_rest.call(null,s__11271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11273),null);
}
} else {
var args = cljs.core.first.call(null,s__11271__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11270.call(null,cljs.core.rest.call(null,s__11271__$2)));
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
var len__5651__auto___11280 = arguments.length;
var i__5652__auto___11281 = (0);
while(true){
if((i__5652__auto___11281 < len__5651__auto___11280)){
args__5658__auto__.push((arguments[i__5652__auto___11281]));

var G__11282 = (i__5652__auto___11281 + (1));
i__5652__auto___11281 = G__11282;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__11276(s__11277){
return (new cljs.core.LazySeq(null,(function (){
var s__11277__$1 = s__11277;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11277__$1);
if(temp__4425__auto__){
var s__11277__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11277__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__11277__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__11279 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__11278 = (0);
while(true){
if((i__11278 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__11278);
cljs.core.chunk_append.call(null,b__11279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11283 = (i__11278 + (1));
i__11278 = G__11283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11279),sablono$core$iter__11276.call(null,cljs.core.chunk_rest.call(null,s__11277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11279),null);
}
} else {
var style = cljs.core.first.call(null,s__11277__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11276.call(null,cljs.core.rest.call(null,s__11277__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq11275){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11275));
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
sablono.core.link_to11284 = (function sablono$core$link_to11284(var_args){
var args__5658__auto__ = [];
var len__5651__auto___11287 = arguments.length;
var i__5652__auto___11288 = (0);
while(true){
if((i__5652__auto___11288 < len__5651__auto___11287)){
args__5658__auto__.push((arguments[i__5652__auto___11288]));

var G__11289 = (i__5652__auto___11288 + (1));
i__5652__auto___11288 = G__11289;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to11284.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to11284.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11284.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11284.cljs$lang$applyTo = (function (seq11285){
var G__11286 = cljs.core.first.call(null,seq11285);
var seq11285__$1 = cljs.core.next.call(null,seq11285);
return sablono.core.link_to11284.cljs$core$IFn$_invoke$arity$variadic(G__11286,seq11285__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11284);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11290 = (function sablono$core$mail_to11290(var_args){
var args__5658__auto__ = [];
var len__5651__auto___11295 = arguments.length;
var i__5652__auto___11296 = (0);
while(true){
if((i__5652__auto___11296 < len__5651__auto___11295)){
args__5658__auto__.push((arguments[i__5652__auto___11296]));

var G__11297 = (i__5652__auto___11296 + (1));
i__5652__auto___11296 = G__11297;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11290.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to11290.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11293){
var vec__11294 = p__11293;
var content = cljs.core.nth.call(null,vec__11294,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11290.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11290.cljs$lang$applyTo = (function (seq11291){
var G__11292 = cljs.core.first.call(null,seq11291);
var seq11291__$1 = cljs.core.next.call(null,seq11291);
return sablono.core.mail_to11290.cljs$core$IFn$_invoke$arity$variadic(G__11292,seq11291__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11290);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11298 = (function sablono$core$unordered_list11298(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list11298_$_iter__11303(s__11304){
return (new cljs.core.LazySeq(null,(function (){
var s__11304__$1 = s__11304;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11304__$1);
if(temp__4425__auto__){
var s__11304__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11304__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__11304__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__11306 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__11305 = (0);
while(true){
if((i__11305 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__11305);
cljs.core.chunk_append.call(null,b__11306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11307 = (i__11305 + (1));
i__11305 = G__11307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11306),sablono$core$unordered_list11298_$_iter__11303.call(null,cljs.core.chunk_rest.call(null,s__11304__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11306),null);
}
} else {
var x = cljs.core.first.call(null,s__11304__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11298_$_iter__11303.call(null,cljs.core.rest.call(null,s__11304__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11298);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11308 = (function sablono$core$ordered_list11308(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list11308_$_iter__11313(s__11314){
return (new cljs.core.LazySeq(null,(function (){
var s__11314__$1 = s__11314;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11314__$1);
if(temp__4425__auto__){
var s__11314__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11314__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__11314__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__11316 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__11315 = (0);
while(true){
if((i__11315 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__11315);
cljs.core.chunk_append.call(null,b__11316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11317 = (i__11315 + (1));
i__11315 = G__11317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11316),sablono$core$ordered_list11308_$_iter__11313.call(null,cljs.core.chunk_rest.call(null,s__11314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11316),null);
}
} else {
var x = cljs.core.first.call(null,s__11314__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11308_$_iter__11313.call(null,cljs.core.rest.call(null,s__11314__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11308);
/**
 * Create an image element.
 */
sablono.core.image11318 = (function sablono$core$image11318(var_args){
var args11319 = [];
var len__5651__auto___11322 = arguments.length;
var i__5652__auto___11323 = (0);
while(true){
if((i__5652__auto___11323 < len__5651__auto___11322)){
args11319.push((arguments[i__5652__auto___11323]));

var G__11324 = (i__5652__auto___11323 + (1));
i__5652__auto___11323 = G__11324;
continue;
} else {
}
break;
}

var G__11321 = args11319.length;
switch (G__11321) {
case 1:
return sablono.core.image11318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11319.length)].join('')));

}
});

sablono.core.image11318.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11318.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11318.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11318);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11326_SHARP_,p2__11327_SHARP_){
return [cljs.core.str(p1__11326_SHARP_),cljs.core.str("["),cljs.core.str(p2__11327_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11328_SHARP_,p2__11329_SHARP_){
return [cljs.core.str(p1__11328_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11329_SHARP_)].join('');
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
sablono.core.color_field11330 = (function sablono$core$color_field11330(var_args){
var args11331 = [];
var len__5651__auto___11398 = arguments.length;
var i__5652__auto___11399 = (0);
while(true){
if((i__5652__auto___11399 < len__5651__auto___11398)){
args11331.push((arguments[i__5652__auto___11399]));

var G__11400 = (i__5652__auto___11399 + (1));
i__5652__auto___11399 = G__11400;
continue;
} else {
}
break;
}

var G__11333 = args11331.length;
switch (G__11333) {
case 1:
return sablono.core.color_field11330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11331.length)].join('')));

}
});

sablono.core.color_field11330.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.color_field11330.call(null,name__6198__auto__,null);
});

sablono.core.color_field11330.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.color_field11330.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11330);

/**
 * Creates a date input field.
 */
sablono.core.date_field11334 = (function sablono$core$date_field11334(var_args){
var args11335 = [];
var len__5651__auto___11402 = arguments.length;
var i__5652__auto___11403 = (0);
while(true){
if((i__5652__auto___11403 < len__5651__auto___11402)){
args11335.push((arguments[i__5652__auto___11403]));

var G__11404 = (i__5652__auto___11403 + (1));
i__5652__auto___11403 = G__11404;
continue;
} else {
}
break;
}

var G__11337 = args11335.length;
switch (G__11337) {
case 1:
return sablono.core.date_field11334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11335.length)].join('')));

}
});

sablono.core.date_field11334.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.date_field11334.call(null,name__6198__auto__,null);
});

sablono.core.date_field11334.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.date_field11334.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11334);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11338 = (function sablono$core$datetime_field11338(var_args){
var args11339 = [];
var len__5651__auto___11406 = arguments.length;
var i__5652__auto___11407 = (0);
while(true){
if((i__5652__auto___11407 < len__5651__auto___11406)){
args11339.push((arguments[i__5652__auto___11407]));

var G__11408 = (i__5652__auto___11407 + (1));
i__5652__auto___11407 = G__11408;
continue;
} else {
}
break;
}

var G__11341 = args11339.length;
switch (G__11341) {
case 1:
return sablono.core.datetime_field11338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11339.length)].join('')));

}
});

sablono.core.datetime_field11338.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_field11338.call(null,name__6198__auto__,null);
});

sablono.core.datetime_field11338.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_field11338.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11338);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11342 = (function sablono$core$datetime_local_field11342(var_args){
var args11343 = [];
var len__5651__auto___11410 = arguments.length;
var i__5652__auto___11411 = (0);
while(true){
if((i__5652__auto___11411 < len__5651__auto___11410)){
args11343.push((arguments[i__5652__auto___11411]));

var G__11412 = (i__5652__auto___11411 + (1));
i__5652__auto___11411 = G__11412;
continue;
} else {
}
break;
}

var G__11345 = args11343.length;
switch (G__11345) {
case 1:
return sablono.core.datetime_local_field11342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11343.length)].join('')));

}
});

sablono.core.datetime_local_field11342.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_local_field11342.call(null,name__6198__auto__,null);
});

sablono.core.datetime_local_field11342.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_local_field11342.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11342);

/**
 * Creates a email input field.
 */
sablono.core.email_field11346 = (function sablono$core$email_field11346(var_args){
var args11347 = [];
var len__5651__auto___11414 = arguments.length;
var i__5652__auto___11415 = (0);
while(true){
if((i__5652__auto___11415 < len__5651__auto___11414)){
args11347.push((arguments[i__5652__auto___11415]));

var G__11416 = (i__5652__auto___11415 + (1));
i__5652__auto___11415 = G__11416;
continue;
} else {
}
break;
}

var G__11349 = args11347.length;
switch (G__11349) {
case 1:
return sablono.core.email_field11346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11347.length)].join('')));

}
});

sablono.core.email_field11346.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.email_field11346.call(null,name__6198__auto__,null);
});

sablono.core.email_field11346.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.email_field11346.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11346);

/**
 * Creates a file input field.
 */
sablono.core.file_field11350 = (function sablono$core$file_field11350(var_args){
var args11351 = [];
var len__5651__auto___11418 = arguments.length;
var i__5652__auto___11419 = (0);
while(true){
if((i__5652__auto___11419 < len__5651__auto___11418)){
args11351.push((arguments[i__5652__auto___11419]));

var G__11420 = (i__5652__auto___11419 + (1));
i__5652__auto___11419 = G__11420;
continue;
} else {
}
break;
}

var G__11353 = args11351.length;
switch (G__11353) {
case 1:
return sablono.core.file_field11350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11351.length)].join('')));

}
});

sablono.core.file_field11350.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.file_field11350.call(null,name__6198__auto__,null);
});

sablono.core.file_field11350.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.file_field11350.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11350);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11354 = (function sablono$core$hidden_field11354(var_args){
var args11355 = [];
var len__5651__auto___11422 = arguments.length;
var i__5652__auto___11423 = (0);
while(true){
if((i__5652__auto___11423 < len__5651__auto___11422)){
args11355.push((arguments[i__5652__auto___11423]));

var G__11424 = (i__5652__auto___11423 + (1));
i__5652__auto___11423 = G__11424;
continue;
} else {
}
break;
}

var G__11357 = args11355.length;
switch (G__11357) {
case 1:
return sablono.core.hidden_field11354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11355.length)].join('')));

}
});

sablono.core.hidden_field11354.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.hidden_field11354.call(null,name__6198__auto__,null);
});

sablono.core.hidden_field11354.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.hidden_field11354.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11354);

/**
 * Creates a month input field.
 */
sablono.core.month_field11358 = (function sablono$core$month_field11358(var_args){
var args11359 = [];
var len__5651__auto___11426 = arguments.length;
var i__5652__auto___11427 = (0);
while(true){
if((i__5652__auto___11427 < len__5651__auto___11426)){
args11359.push((arguments[i__5652__auto___11427]));

var G__11428 = (i__5652__auto___11427 + (1));
i__5652__auto___11427 = G__11428;
continue;
} else {
}
break;
}

var G__11361 = args11359.length;
switch (G__11361) {
case 1:
return sablono.core.month_field11358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11359.length)].join('')));

}
});

sablono.core.month_field11358.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.month_field11358.call(null,name__6198__auto__,null);
});

sablono.core.month_field11358.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.month_field11358.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11358);

/**
 * Creates a number input field.
 */
sablono.core.number_field11362 = (function sablono$core$number_field11362(var_args){
var args11363 = [];
var len__5651__auto___11430 = arguments.length;
var i__5652__auto___11431 = (0);
while(true){
if((i__5652__auto___11431 < len__5651__auto___11430)){
args11363.push((arguments[i__5652__auto___11431]));

var G__11432 = (i__5652__auto___11431 + (1));
i__5652__auto___11431 = G__11432;
continue;
} else {
}
break;
}

var G__11365 = args11363.length;
switch (G__11365) {
case 1:
return sablono.core.number_field11362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11363.length)].join('')));

}
});

sablono.core.number_field11362.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.number_field11362.call(null,name__6198__auto__,null);
});

sablono.core.number_field11362.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.number_field11362.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11362);

/**
 * Creates a password input field.
 */
sablono.core.password_field11366 = (function sablono$core$password_field11366(var_args){
var args11367 = [];
var len__5651__auto___11434 = arguments.length;
var i__5652__auto___11435 = (0);
while(true){
if((i__5652__auto___11435 < len__5651__auto___11434)){
args11367.push((arguments[i__5652__auto___11435]));

var G__11436 = (i__5652__auto___11435 + (1));
i__5652__auto___11435 = G__11436;
continue;
} else {
}
break;
}

var G__11369 = args11367.length;
switch (G__11369) {
case 1:
return sablono.core.password_field11366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11367.length)].join('')));

}
});

sablono.core.password_field11366.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.password_field11366.call(null,name__6198__auto__,null);
});

sablono.core.password_field11366.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.password_field11366.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11366);

/**
 * Creates a range input field.
 */
sablono.core.range_field11370 = (function sablono$core$range_field11370(var_args){
var args11371 = [];
var len__5651__auto___11438 = arguments.length;
var i__5652__auto___11439 = (0);
while(true){
if((i__5652__auto___11439 < len__5651__auto___11438)){
args11371.push((arguments[i__5652__auto___11439]));

var G__11440 = (i__5652__auto___11439 + (1));
i__5652__auto___11439 = G__11440;
continue;
} else {
}
break;
}

var G__11373 = args11371.length;
switch (G__11373) {
case 1:
return sablono.core.range_field11370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11371.length)].join('')));

}
});

sablono.core.range_field11370.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.range_field11370.call(null,name__6198__auto__,null);
});

sablono.core.range_field11370.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.range_field11370.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11370);

/**
 * Creates a search input field.
 */
sablono.core.search_field11374 = (function sablono$core$search_field11374(var_args){
var args11375 = [];
var len__5651__auto___11442 = arguments.length;
var i__5652__auto___11443 = (0);
while(true){
if((i__5652__auto___11443 < len__5651__auto___11442)){
args11375.push((arguments[i__5652__auto___11443]));

var G__11444 = (i__5652__auto___11443 + (1));
i__5652__auto___11443 = G__11444;
continue;
} else {
}
break;
}

var G__11377 = args11375.length;
switch (G__11377) {
case 1:
return sablono.core.search_field11374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11375.length)].join('')));

}
});

sablono.core.search_field11374.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.search_field11374.call(null,name__6198__auto__,null);
});

sablono.core.search_field11374.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.search_field11374.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11374);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11378 = (function sablono$core$tel_field11378(var_args){
var args11379 = [];
var len__5651__auto___11446 = arguments.length;
var i__5652__auto___11447 = (0);
while(true){
if((i__5652__auto___11447 < len__5651__auto___11446)){
args11379.push((arguments[i__5652__auto___11447]));

var G__11448 = (i__5652__auto___11447 + (1));
i__5652__auto___11447 = G__11448;
continue;
} else {
}
break;
}

var G__11381 = args11379.length;
switch (G__11381) {
case 1:
return sablono.core.tel_field11378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11379.length)].join('')));

}
});

sablono.core.tel_field11378.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.tel_field11378.call(null,name__6198__auto__,null);
});

sablono.core.tel_field11378.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.tel_field11378.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11378);

/**
 * Creates a text input field.
 */
sablono.core.text_field11382 = (function sablono$core$text_field11382(var_args){
var args11383 = [];
var len__5651__auto___11450 = arguments.length;
var i__5652__auto___11451 = (0);
while(true){
if((i__5652__auto___11451 < len__5651__auto___11450)){
args11383.push((arguments[i__5652__auto___11451]));

var G__11452 = (i__5652__auto___11451 + (1));
i__5652__auto___11451 = G__11452;
continue;
} else {
}
break;
}

var G__11385 = args11383.length;
switch (G__11385) {
case 1:
return sablono.core.text_field11382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11383.length)].join('')));

}
});

sablono.core.text_field11382.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.text_field11382.call(null,name__6198__auto__,null);
});

sablono.core.text_field11382.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.text_field11382.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11382);

/**
 * Creates a time input field.
 */
sablono.core.time_field11386 = (function sablono$core$time_field11386(var_args){
var args11387 = [];
var len__5651__auto___11454 = arguments.length;
var i__5652__auto___11455 = (0);
while(true){
if((i__5652__auto___11455 < len__5651__auto___11454)){
args11387.push((arguments[i__5652__auto___11455]));

var G__11456 = (i__5652__auto___11455 + (1));
i__5652__auto___11455 = G__11456;
continue;
} else {
}
break;
}

var G__11389 = args11387.length;
switch (G__11389) {
case 1:
return sablono.core.time_field11386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11387.length)].join('')));

}
});

sablono.core.time_field11386.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.time_field11386.call(null,name__6198__auto__,null);
});

sablono.core.time_field11386.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.time_field11386.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11386);

/**
 * Creates a url input field.
 */
sablono.core.url_field11390 = (function sablono$core$url_field11390(var_args){
var args11391 = [];
var len__5651__auto___11458 = arguments.length;
var i__5652__auto___11459 = (0);
while(true){
if((i__5652__auto___11459 < len__5651__auto___11458)){
args11391.push((arguments[i__5652__auto___11459]));

var G__11460 = (i__5652__auto___11459 + (1));
i__5652__auto___11459 = G__11460;
continue;
} else {
}
break;
}

var G__11393 = args11391.length;
switch (G__11393) {
case 1:
return sablono.core.url_field11390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11391.length)].join('')));

}
});

sablono.core.url_field11390.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.url_field11390.call(null,name__6198__auto__,null);
});

sablono.core.url_field11390.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.url_field11390.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11390);

/**
 * Creates a week input field.
 */
sablono.core.week_field11394 = (function sablono$core$week_field11394(var_args){
var args11395 = [];
var len__5651__auto___11462 = arguments.length;
var i__5652__auto___11463 = (0);
while(true){
if((i__5652__auto___11463 < len__5651__auto___11462)){
args11395.push((arguments[i__5652__auto___11463]));

var G__11464 = (i__5652__auto___11463 + (1));
i__5652__auto___11463 = G__11464;
continue;
} else {
}
break;
}

var G__11397 = args11395.length;
switch (G__11397) {
case 1:
return sablono.core.week_field11394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11395.length)].join('')));

}
});

sablono.core.week_field11394.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.week_field11394.call(null,name__6198__auto__,null);
});

sablono.core.week_field11394.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.week_field11394.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11394);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11466 = (function sablono$core$check_box11466(var_args){
var args11467 = [];
var len__5651__auto___11470 = arguments.length;
var i__5652__auto___11471 = (0);
while(true){
if((i__5652__auto___11471 < len__5651__auto___11470)){
args11467.push((arguments[i__5652__auto___11471]));

var G__11472 = (i__5652__auto___11471 + (1));
i__5652__auto___11471 = G__11472;
continue;
} else {
}
break;
}

var G__11469 = args11467.length;
switch (G__11469) {
case 1:
return sablono.core.check_box11466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11466.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11467.length)].join('')));

}
});

sablono.core.check_box11466.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11466.call(null,name,null);
});

sablono.core.check_box11466.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11466.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11466.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11466.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11466);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11474 = (function sablono$core$radio_button11474(var_args){
var args11475 = [];
var len__5651__auto___11478 = arguments.length;
var i__5652__auto___11479 = (0);
while(true){
if((i__5652__auto___11479 < len__5651__auto___11478)){
args11475.push((arguments[i__5652__auto___11479]));

var G__11480 = (i__5652__auto___11479 + (1));
i__5652__auto___11479 = G__11480;
continue;
} else {
}
break;
}

var G__11477 = args11475.length;
switch (G__11477) {
case 1:
return sablono.core.radio_button11474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11474.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11475.length)].join('')));

}
});

sablono.core.radio_button11474.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11474.call(null,group,null);
});

sablono.core.radio_button11474.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11474.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11474.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11474.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11474);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11482 = (function sablono$core$select_options11482(coll){
var iter__5365__auto__ = (function sablono$core$select_options11482_$_iter__11491(s__11492){
return (new cljs.core.LazySeq(null,(function (){
var s__11492__$1 = s__11492;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11492__$1);
if(temp__4425__auto__){
var s__11492__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11492__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__11492__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__11494 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__11493 = (0);
while(true){
if((i__11493 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__11493);
cljs.core.chunk_append.call(null,b__11494,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11497 = x;
var text = cljs.core.nth.call(null,vec__11497,(0),null);
var val = cljs.core.nth.call(null,vec__11497,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11497,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11482.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__11499 = (i__11493 + (1));
i__11493 = G__11499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11494),sablono$core$select_options11482_$_iter__11491.call(null,cljs.core.chunk_rest.call(null,s__11492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11494),null);
}
} else {
var x = cljs.core.first.call(null,s__11492__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11498 = x;
var text = cljs.core.nth.call(null,vec__11498,(0),null);
var val = cljs.core.nth.call(null,vec__11498,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11498,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11482.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options11482_$_iter__11491.call(null,cljs.core.rest.call(null,s__11492__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11482);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11500 = (function sablono$core$drop_down11500(var_args){
var args11501 = [];
var len__5651__auto___11504 = arguments.length;
var i__5652__auto___11505 = (0);
while(true){
if((i__5652__auto___11505 < len__5651__auto___11504)){
args11501.push((arguments[i__5652__auto___11505]));

var G__11506 = (i__5652__auto___11505 + (1));
i__5652__auto___11505 = G__11506;
continue;
} else {
}
break;
}

var G__11503 = args11501.length;
switch (G__11503) {
case 2:
return sablono.core.drop_down11500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11500.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11501.length)].join('')));

}
});

sablono.core.drop_down11500.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11500.call(null,name,options,null);
});

sablono.core.drop_down11500.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11500.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11500);
/**
 * Creates a text area element.
 */
sablono.core.text_area11508 = (function sablono$core$text_area11508(var_args){
var args11509 = [];
var len__5651__auto___11512 = arguments.length;
var i__5652__auto___11513 = (0);
while(true){
if((i__5652__auto___11513 < len__5651__auto___11512)){
args11509.push((arguments[i__5652__auto___11513]));

var G__11514 = (i__5652__auto___11513 + (1));
i__5652__auto___11513 = G__11514;
continue;
} else {
}
break;
}

var G__11511 = args11509.length;
switch (G__11511) {
case 1:
return sablono.core.text_area11508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11509.length)].join('')));

}
});

sablono.core.text_area11508.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11508.call(null,name,null);
});

sablono.core.text_area11508.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area11508.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11508);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11516 = (function sablono$core$label11516(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11516);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11517 = (function sablono$core$submit_button11517(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11517);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11518 = (function sablono$core$reset_button11518(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11518);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11519 = (function sablono$core$form_to11519(var_args){
var args__5658__auto__ = [];
var len__5651__auto___11524 = arguments.length;
var i__5652__auto___11525 = (0);
while(true){
if((i__5652__auto___11525 < len__5651__auto___11524)){
args__5658__auto__.push((arguments[i__5652__auto___11525]));

var G__11526 = (i__5652__auto___11525 + (1));
i__5652__auto___11525 = G__11526;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to11519.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to11519.cljs$core$IFn$_invoke$arity$variadic = (function (p__11522,body){
var vec__11523 = p__11522;
var method = cljs.core.nth.call(null,vec__11523,(0),null);
var action = cljs.core.nth.call(null,vec__11523,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to11519.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11519.cljs$lang$applyTo = (function (seq11520){
var G__11521 = cljs.core.first.call(null,seq11520);
var seq11520__$1 = cljs.core.next.call(null,seq11520);
return sablono.core.form_to11519.cljs$core$IFn$_invoke$arity$variadic(G__11521,seq11520__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11519);

//# sourceMappingURL=core.js.map