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
var G__13339__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__13338 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__13338,(0),null);
var body = cljs.core.nthnext.call(null,vec__13338,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__13339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13340__i = 0, G__13340__a = new Array(arguments.length -  0);
while (G__13340__i < G__13340__a.length) {G__13340__a[G__13340__i] = arguments[G__13340__i + 0]; ++G__13340__i;}
  args = new cljs.core.IndexedSeq(G__13340__a,0);
} 
return G__13339__delegate.call(this,args);};
G__13339.cljs$lang$maxFixedArity = 0;
G__13339.cljs$lang$applyTo = (function (arglist__13341){
var args = cljs.core.seq(arglist__13341);
return G__13339__delegate(args);
});
G__13339.cljs$core$IFn$_invoke$arity$variadic = G__13339__delegate;
return G__13339;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5103__auto__ = (function sablono$core$update_arglists_$_iter__13346(s__13347){
return (new cljs.core.LazySeq(null,(function (){
var s__13347__$1 = s__13347;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__13347__$1);
if(temp__4423__auto__){
var s__13347__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13347__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__13347__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__13349 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__13348 = (0);
while(true){
if((i__13348 < size__5102__auto__)){
var args = cljs.core._nth.call(null,c__5101__auto__,i__13348);
cljs.core.chunk_append.call(null,b__13349,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__13350 = (i__13348 + (1));
i__13348 = G__13350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13349),sablono$core$update_arglists_$_iter__13346.call(null,cljs.core.chunk_rest.call(null,s__13347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13349),null);
}
} else {
var args = cljs.core.first.call(null,s__13347__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__13346.call(null,cljs.core.rest.call(null,s__13347__$2)));
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
var iter__5103__auto__ = (function sablono$core$iter__13352(s__13353){
return (new cljs.core.LazySeq(null,(function (){
var s__13353__$1 = s__13353;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__13353__$1);
if(temp__4423__auto__){
var s__13353__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13353__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__13353__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__13355 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__13354 = (0);
while(true){
if((i__13354 < size__5102__auto__)){
var style = cljs.core._nth.call(null,c__5101__auto__,i__13354);
cljs.core.chunk_append.call(null,b__13355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__13356 = (i__13354 + (1));
i__13354 = G__13356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13355),sablono$core$iter__13352.call(null,cljs.core.chunk_rest.call(null,s__13353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13355),null);
}
} else {
var style = cljs.core.first.call(null,s__13353__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__13352.call(null,cljs.core.rest.call(null,s__13353__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq13351){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13351));
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
sablono.core.link_to13357 = (function sablono$core$link_to13357(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to13357.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.link_to13357.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to13357.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13357.cljs$lang$applyTo = (function (seq13358){
var G__13359 = cljs.core.first.call(null,seq13358);
var seq13358__$1 = cljs.core.next.call(null,seq13358);
return sablono.core.link_to13357.cljs$core$IFn$_invoke$arity$variadic(G__13359,seq13358__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13357);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13360 = (function sablono$core$mail_to13360(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to13360.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.mail_to13360.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13363){
var vec__13364 = p__13363;
var content = cljs.core.nth.call(null,vec__13364,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4349__auto__ = content;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13360.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13360.cljs$lang$applyTo = (function (seq13361){
var G__13362 = cljs.core.first.call(null,seq13361);
var seq13361__$1 = cljs.core.next.call(null,seq13361);
return sablono.core.mail_to13360.cljs$core$IFn$_invoke$arity$variadic(G__13362,seq13361__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13360);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13365 = (function sablono$core$unordered_list13365(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5103__auto__ = (function sablono$core$unordered_list13365_$_iter__13370(s__13371){
return (new cljs.core.LazySeq(null,(function (){
var s__13371__$1 = s__13371;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__13371__$1);
if(temp__4423__auto__){
var s__13371__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13371__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__13371__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__13373 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__13372 = (0);
while(true){
if((i__13372 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__13372);
cljs.core.chunk_append.call(null,b__13373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13374 = (i__13372 + (1));
i__13372 = G__13374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13373),sablono$core$unordered_list13365_$_iter__13370.call(null,cljs.core.chunk_rest.call(null,s__13371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13373),null);
}
} else {
var x = cljs.core.first.call(null,s__13371__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list13365_$_iter__13370.call(null,cljs.core.rest.call(null,s__13371__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13365);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13375 = (function sablono$core$ordered_list13375(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5103__auto__ = (function sablono$core$ordered_list13375_$_iter__13380(s__13381){
return (new cljs.core.LazySeq(null,(function (){
var s__13381__$1 = s__13381;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__13381__$1);
if(temp__4423__auto__){
var s__13381__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13381__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__13381__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__13383 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__13382 = (0);
while(true){
if((i__13382 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__13382);
cljs.core.chunk_append.call(null,b__13383,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13384 = (i__13382 + (1));
i__13382 = G__13384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13383),sablono$core$ordered_list13375_$_iter__13380.call(null,cljs.core.chunk_rest.call(null,s__13381__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13383),null);
}
} else {
var x = cljs.core.first.call(null,s__13381__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list13375_$_iter__13380.call(null,cljs.core.rest.call(null,s__13381__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13375);
/**
 * Create an image element.
 */
sablono.core.image13385 = (function sablono$core$image13385(){
var G__13387 = arguments.length;
switch (G__13387) {
case 1:
return sablono.core.image13385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image13385.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image13385.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image13385.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13385);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__13389_SHARP_,p2__13390_SHARP_){
return [cljs.core.str(p1__13389_SHARP_),cljs.core.str("["),cljs.core.str(p2__13390_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__13391_SHARP_,p2__13392_SHARP_){
return [cljs.core.str(p1__13391_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13392_SHARP_)].join('');
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
sablono.core.color_field13393 = (function sablono$core$color_field13393(){
var G__13395 = arguments.length;
switch (G__13395) {
case 1:
return sablono.core.color_field13393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field13393.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.color_field13393.call(null,name__6044__auto__,null);
});

sablono.core.color_field13393.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.color_field13393.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13393);

/**
 * Creates a date input field.
 */
sablono.core.date_field13396 = (function sablono$core$date_field13396(){
var G__13398 = arguments.length;
switch (G__13398) {
case 1:
return sablono.core.date_field13396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field13396.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.date_field13396.call(null,name__6044__auto__,null);
});

sablono.core.date_field13396.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.date_field13396.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13396);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13399 = (function sablono$core$datetime_field13399(){
var G__13401 = arguments.length;
switch (G__13401) {
case 1:
return sablono.core.datetime_field13399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field13399.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_field13399.call(null,name__6044__auto__,null);
});

sablono.core.datetime_field13399.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_field13399.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13399);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13402 = (function sablono$core$datetime_local_field13402(){
var G__13404 = arguments.length;
switch (G__13404) {
case 1:
return sablono.core.datetime_local_field13402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field13402.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_local_field13402.call(null,name__6044__auto__,null);
});

sablono.core.datetime_local_field13402.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_local_field13402.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13402);

/**
 * Creates a email input field.
 */
sablono.core.email_field13405 = (function sablono$core$email_field13405(){
var G__13407 = arguments.length;
switch (G__13407) {
case 1:
return sablono.core.email_field13405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field13405.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.email_field13405.call(null,name__6044__auto__,null);
});

sablono.core.email_field13405.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.email_field13405.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13405);

/**
 * Creates a file input field.
 */
sablono.core.file_field13408 = (function sablono$core$file_field13408(){
var G__13410 = arguments.length;
switch (G__13410) {
case 1:
return sablono.core.file_field13408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field13408.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.file_field13408.call(null,name__6044__auto__,null);
});

sablono.core.file_field13408.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.file_field13408.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13408);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13411 = (function sablono$core$hidden_field13411(){
var G__13413 = arguments.length;
switch (G__13413) {
case 1:
return sablono.core.hidden_field13411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field13411.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.hidden_field13411.call(null,name__6044__auto__,null);
});

sablono.core.hidden_field13411.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.hidden_field13411.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13411);

/**
 * Creates a month input field.
 */
sablono.core.month_field13414 = (function sablono$core$month_field13414(){
var G__13416 = arguments.length;
switch (G__13416) {
case 1:
return sablono.core.month_field13414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field13414.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.month_field13414.call(null,name__6044__auto__,null);
});

sablono.core.month_field13414.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.month_field13414.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13414);

/**
 * Creates a number input field.
 */
sablono.core.number_field13417 = (function sablono$core$number_field13417(){
var G__13419 = arguments.length;
switch (G__13419) {
case 1:
return sablono.core.number_field13417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field13417.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.number_field13417.call(null,name__6044__auto__,null);
});

sablono.core.number_field13417.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.number_field13417.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13417);

/**
 * Creates a password input field.
 */
sablono.core.password_field13420 = (function sablono$core$password_field13420(){
var G__13422 = arguments.length;
switch (G__13422) {
case 1:
return sablono.core.password_field13420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field13420.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.password_field13420.call(null,name__6044__auto__,null);
});

sablono.core.password_field13420.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.password_field13420.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13420);

/**
 * Creates a range input field.
 */
sablono.core.range_field13423 = (function sablono$core$range_field13423(){
var G__13425 = arguments.length;
switch (G__13425) {
case 1:
return sablono.core.range_field13423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field13423.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.range_field13423.call(null,name__6044__auto__,null);
});

sablono.core.range_field13423.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.range_field13423.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13423);

/**
 * Creates a search input field.
 */
sablono.core.search_field13426 = (function sablono$core$search_field13426(){
var G__13428 = arguments.length;
switch (G__13428) {
case 1:
return sablono.core.search_field13426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field13426.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.search_field13426.call(null,name__6044__auto__,null);
});

sablono.core.search_field13426.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.search_field13426.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13426);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13429 = (function sablono$core$tel_field13429(){
var G__13431 = arguments.length;
switch (G__13431) {
case 1:
return sablono.core.tel_field13429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field13429.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.tel_field13429.call(null,name__6044__auto__,null);
});

sablono.core.tel_field13429.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.tel_field13429.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13429);

/**
 * Creates a text input field.
 */
sablono.core.text_field13432 = (function sablono$core$text_field13432(){
var G__13434 = arguments.length;
switch (G__13434) {
case 1:
return sablono.core.text_field13432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field13432.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.text_field13432.call(null,name__6044__auto__,null);
});

sablono.core.text_field13432.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.text_field13432.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13432);

/**
 * Creates a time input field.
 */
sablono.core.time_field13435 = (function sablono$core$time_field13435(){
var G__13437 = arguments.length;
switch (G__13437) {
case 1:
return sablono.core.time_field13435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field13435.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.time_field13435.call(null,name__6044__auto__,null);
});

sablono.core.time_field13435.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.time_field13435.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13435);

/**
 * Creates a url input field.
 */
sablono.core.url_field13438 = (function sablono$core$url_field13438(){
var G__13440 = arguments.length;
switch (G__13440) {
case 1:
return sablono.core.url_field13438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field13438.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.url_field13438.call(null,name__6044__auto__,null);
});

sablono.core.url_field13438.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.url_field13438.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13438);

/**
 * Creates a week input field.
 */
sablono.core.week_field13441 = (function sablono$core$week_field13441(){
var G__13443 = arguments.length;
switch (G__13443) {
case 1:
return sablono.core.week_field13441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field13441.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.week_field13441.call(null,name__6044__auto__,null);
});

sablono.core.week_field13441.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.week_field13441.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13441);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13461 = (function sablono$core$check_box13461(){
var G__13463 = arguments.length;
switch (G__13463) {
case 1:
return sablono.core.check_box13461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13461.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box13461.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13461.call(null,name,null);
});

sablono.core.check_box13461.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13461.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box13461.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box13461.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13461);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13465 = (function sablono$core$radio_button13465(){
var G__13467 = arguments.length;
switch (G__13467) {
case 1:
return sablono.core.radio_button13465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13465.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button13465.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13465.call(null,group,null);
});

sablono.core.radio_button13465.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13465.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button13465.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button13465.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13465);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13469 = (function sablono$core$select_options13469(){
var G__13471 = arguments.length;
switch (G__13471) {
case 1:
return sablono.core.select_options13469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options13469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options13469.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options13469.call(null,coll,null);
});

sablono.core.select_options13469.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5103__auto__ = (function sablono$core$iter__13472(s__13473){
return (new cljs.core.LazySeq(null,(function (){
var s__13473__$1 = s__13473;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__13473__$1);
if(temp__4423__auto__){
var s__13473__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13473__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__13473__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__13475 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__13474 = (0);
while(true){
if((i__13474 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__13474);
cljs.core.chunk_append.call(null,b__13475,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13478 = x;
var text = cljs.core.nth.call(null,vec__13478,(0),null);
var val = cljs.core.nth.call(null,vec__13478,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13478,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options13469.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__13481 = (i__13474 + (1));
i__13474 = G__13481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13475),sablono$core$iter__13472.call(null,cljs.core.chunk_rest.call(null,s__13473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13475),null);
}
} else {
var x = cljs.core.first.call(null,s__13473__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13479 = x;
var text = cljs.core.nth.call(null,vec__13479,(0),null);
var val = cljs.core.nth.call(null,vec__13479,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13479,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options13469.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__13472.call(null,cljs.core.rest.call(null,s__13473__$2)));
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

sablono.core.select_options13469.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13469);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13482 = (function sablono$core$drop_down13482(){
var G__13484 = arguments.length;
switch (G__13484) {
case 2:
return sablono.core.drop_down13482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13482.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down13482.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13482.call(null,name,options,null);
});

sablono.core.drop_down13482.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down13482.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13482);
/**
 * Creates a text area element.
 */
sablono.core.text_area13486 = (function sablono$core$text_area13486(){
var G__13488 = arguments.length;
switch (G__13488) {
case 1:
return sablono.core.text_area13486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area13486.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13486.call(null,name,null);
});

sablono.core.text_area13486.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area13486.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13486);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13490 = (function sablono$core$label13490(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13490);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13491 = (function sablono$core$submit_button13491(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13491);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13492 = (function sablono$core$reset_button13492(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13492);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to13493 = (function sablono$core$form_to13493(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to13493.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.form_to13493.cljs$core$IFn$_invoke$arity$variadic = (function (p__13496,body){
var vec__13497 = p__13496;
var method = cljs.core.nth.call(null,vec__13497,(0),null);
var action = cljs.core.nth.call(null,vec__13497,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to13493.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13493.cljs$lang$applyTo = (function (seq13494){
var G__13495 = cljs.core.first.call(null,seq13494);
var seq13494__$1 = cljs.core.next.call(null,seq13494);
return sablono.core.form_to13493.cljs$core$IFn$_invoke$arity$variadic(G__13495,seq13494__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13493);

//# sourceMappingURL=core.js.map