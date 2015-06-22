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
var G__31269__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31268 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__31268,(0),null);
var body = cljs.core.nthnext.call(null,vec__31268,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31270__i = 0, G__31270__a = new Array(arguments.length -  0);
while (G__31270__i < G__31270__a.length) {G__31270__a[G__31270__i] = arguments[G__31270__i + 0]; ++G__31270__i;}
  args = new cljs.core.IndexedSeq(G__31270__a,0);
} 
return G__31269__delegate.call(this,args);};
G__31269.cljs$lang$maxFixedArity = 0;
G__31269.cljs$lang$applyTo = (function (arglist__31271){
var args = cljs.core.seq(arglist__31271);
return G__31269__delegate(args);
});
G__31269.cljs$core$IFn$_invoke$arity$variadic = G__31269__delegate;
return G__31269;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5093__auto__ = (function sablono$core$update_arglists_$_iter__31276(s__31277){
return (new cljs.core.LazySeq(null,(function (){
var s__31277__$1 = s__31277;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31277__$1);
if(temp__4423__auto__){
var s__31277__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31277__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__31277__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__31279 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__31278 = (0);
while(true){
if((i__31278 < size__5092__auto__)){
var args = cljs.core._nth.call(null,c__5091__auto__,i__31278);
cljs.core.chunk_append.call(null,b__31279,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31280 = (i__31278 + (1));
i__31278 = G__31280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31279),sablono$core$update_arglists_$_iter__31276.call(null,cljs.core.chunk_rest.call(null,s__31277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31279),null);
}
} else {
var args = cljs.core.first.call(null,s__31277__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31276.call(null,cljs.core.rest.call(null,s__31277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5093__auto__.call(null,arglists);
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
var argseq__5379__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5379__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5093__auto__ = (function sablono$core$iter__31282(s__31283){
return (new cljs.core.LazySeq(null,(function (){
var s__31283__$1 = s__31283;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31283__$1);
if(temp__4423__auto__){
var s__31283__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31283__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__31283__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__31285 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__31284 = (0);
while(true){
if((i__31284 < size__5092__auto__)){
var style = cljs.core._nth.call(null,c__5091__auto__,i__31284);
cljs.core.chunk_append.call(null,b__31285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31286 = (i__31284 + (1));
i__31284 = G__31286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31285),sablono$core$iter__31282.call(null,cljs.core.chunk_rest.call(null,s__31283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31285),null);
}
} else {
var style = cljs.core.first.call(null,s__31283__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31282.call(null,cljs.core.rest.call(null,s__31283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5093__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31281){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31281));
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
sablono.core.link_to31287 = (function sablono$core$link_to31287(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to31287.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.link_to31287.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31287.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31287.cljs$lang$applyTo = (function (seq31288){
var G__31289 = cljs.core.first.call(null,seq31288);
var seq31288__$1 = cljs.core.next.call(null,seq31288);
return sablono.core.link_to31287.cljs$core$IFn$_invoke$arity$variadic(G__31289,seq31288__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31287);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31290 = (function sablono$core$mail_to31290(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to31290.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.mail_to31290.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31293){
var vec__31294 = p__31293;
var content = cljs.core.nth.call(null,vec__31294,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4339__auto__ = content;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31290.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31290.cljs$lang$applyTo = (function (seq31291){
var G__31292 = cljs.core.first.call(null,seq31291);
var seq31291__$1 = cljs.core.next.call(null,seq31291);
return sablono.core.mail_to31290.cljs$core$IFn$_invoke$arity$variadic(G__31292,seq31291__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31290);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31295 = (function sablono$core$unordered_list31295(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5093__auto__ = (function sablono$core$unordered_list31295_$_iter__31300(s__31301){
return (new cljs.core.LazySeq(null,(function (){
var s__31301__$1 = s__31301;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31301__$1);
if(temp__4423__auto__){
var s__31301__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31301__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__31301__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__31303 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__31302 = (0);
while(true){
if((i__31302 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__31302);
cljs.core.chunk_append.call(null,b__31303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31304 = (i__31302 + (1));
i__31302 = G__31304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31303),sablono$core$unordered_list31295_$_iter__31300.call(null,cljs.core.chunk_rest.call(null,s__31301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31303),null);
}
} else {
var x = cljs.core.first.call(null,s__31301__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31295_$_iter__31300.call(null,cljs.core.rest.call(null,s__31301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5093__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31295);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31305 = (function sablono$core$ordered_list31305(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5093__auto__ = (function sablono$core$ordered_list31305_$_iter__31310(s__31311){
return (new cljs.core.LazySeq(null,(function (){
var s__31311__$1 = s__31311;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31311__$1);
if(temp__4423__auto__){
var s__31311__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31311__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__31311__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__31313 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__31312 = (0);
while(true){
if((i__31312 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__31312);
cljs.core.chunk_append.call(null,b__31313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31314 = (i__31312 + (1));
i__31312 = G__31314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31313),sablono$core$ordered_list31305_$_iter__31310.call(null,cljs.core.chunk_rest.call(null,s__31311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31313),null);
}
} else {
var x = cljs.core.first.call(null,s__31311__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31305_$_iter__31310.call(null,cljs.core.rest.call(null,s__31311__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5093__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31305);
/**
 * Create an image element.
 */
sablono.core.image31315 = (function sablono$core$image31315(){
var G__31317 = arguments.length;
switch (G__31317) {
case 1:
return sablono.core.image31315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image31315.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31315.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31315.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31315);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31319_SHARP_,p2__31320_SHARP_){
return [cljs.core.str(p1__31319_SHARP_),cljs.core.str("["),cljs.core.str(p2__31320_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31321_SHARP_,p2__31322_SHARP_){
return [cljs.core.str(p1__31321_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31322_SHARP_)].join('');
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
sablono.core.color_field31323 = (function sablono$core$color_field31323(){
var G__31325 = arguments.length;
switch (G__31325) {
case 1:
return sablono.core.color_field31323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field31323.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.color_field31323.call(null,name__6034__auto__,null);
});

sablono.core.color_field31323.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.color_field31323.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31323);

/**
 * Creates a date input field.
 */
sablono.core.date_field31326 = (function sablono$core$date_field31326(){
var G__31328 = arguments.length;
switch (G__31328) {
case 1:
return sablono.core.date_field31326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field31326.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.date_field31326.call(null,name__6034__auto__,null);
});

sablono.core.date_field31326.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.date_field31326.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31326);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31329 = (function sablono$core$datetime_field31329(){
var G__31331 = arguments.length;
switch (G__31331) {
case 1:
return sablono.core.datetime_field31329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field31329.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_field31329.call(null,name__6034__auto__,null);
});

sablono.core.datetime_field31329.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_field31329.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31329);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31332 = (function sablono$core$datetime_local_field31332(){
var G__31334 = arguments.length;
switch (G__31334) {
case 1:
return sablono.core.datetime_local_field31332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field31332.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_local_field31332.call(null,name__6034__auto__,null);
});

sablono.core.datetime_local_field31332.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_local_field31332.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31332);

/**
 * Creates a email input field.
 */
sablono.core.email_field31335 = (function sablono$core$email_field31335(){
var G__31337 = arguments.length;
switch (G__31337) {
case 1:
return sablono.core.email_field31335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field31335.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.email_field31335.call(null,name__6034__auto__,null);
});

sablono.core.email_field31335.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.email_field31335.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31335);

/**
 * Creates a file input field.
 */
sablono.core.file_field31338 = (function sablono$core$file_field31338(){
var G__31340 = arguments.length;
switch (G__31340) {
case 1:
return sablono.core.file_field31338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field31338.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.file_field31338.call(null,name__6034__auto__,null);
});

sablono.core.file_field31338.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.file_field31338.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31338);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31341 = (function sablono$core$hidden_field31341(){
var G__31343 = arguments.length;
switch (G__31343) {
case 1:
return sablono.core.hidden_field31341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field31341.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.hidden_field31341.call(null,name__6034__auto__,null);
});

sablono.core.hidden_field31341.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.hidden_field31341.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31341);

/**
 * Creates a month input field.
 */
sablono.core.month_field31344 = (function sablono$core$month_field31344(){
var G__31346 = arguments.length;
switch (G__31346) {
case 1:
return sablono.core.month_field31344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field31344.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.month_field31344.call(null,name__6034__auto__,null);
});

sablono.core.month_field31344.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.month_field31344.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31344);

/**
 * Creates a number input field.
 */
sablono.core.number_field31347 = (function sablono$core$number_field31347(){
var G__31349 = arguments.length;
switch (G__31349) {
case 1:
return sablono.core.number_field31347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field31347.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.number_field31347.call(null,name__6034__auto__,null);
});

sablono.core.number_field31347.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.number_field31347.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31347);

/**
 * Creates a password input field.
 */
sablono.core.password_field31350 = (function sablono$core$password_field31350(){
var G__31352 = arguments.length;
switch (G__31352) {
case 1:
return sablono.core.password_field31350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field31350.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.password_field31350.call(null,name__6034__auto__,null);
});

sablono.core.password_field31350.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.password_field31350.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31350);

/**
 * Creates a range input field.
 */
sablono.core.range_field31353 = (function sablono$core$range_field31353(){
var G__31355 = arguments.length;
switch (G__31355) {
case 1:
return sablono.core.range_field31353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field31353.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.range_field31353.call(null,name__6034__auto__,null);
});

sablono.core.range_field31353.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.range_field31353.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31353);

/**
 * Creates a search input field.
 */
sablono.core.search_field31356 = (function sablono$core$search_field31356(){
var G__31358 = arguments.length;
switch (G__31358) {
case 1:
return sablono.core.search_field31356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field31356.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.search_field31356.call(null,name__6034__auto__,null);
});

sablono.core.search_field31356.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.search_field31356.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31356);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31359 = (function sablono$core$tel_field31359(){
var G__31361 = arguments.length;
switch (G__31361) {
case 1:
return sablono.core.tel_field31359.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31359.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field31359.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.tel_field31359.call(null,name__6034__auto__,null);
});

sablono.core.tel_field31359.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.tel_field31359.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31359);

/**
 * Creates a text input field.
 */
sablono.core.text_field31362 = (function sablono$core$text_field31362(){
var G__31364 = arguments.length;
switch (G__31364) {
case 1:
return sablono.core.text_field31362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field31362.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.text_field31362.call(null,name__6034__auto__,null);
});

sablono.core.text_field31362.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.text_field31362.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31362);

/**
 * Creates a time input field.
 */
sablono.core.time_field31365 = (function sablono$core$time_field31365(){
var G__31367 = arguments.length;
switch (G__31367) {
case 1:
return sablono.core.time_field31365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field31365.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.time_field31365.call(null,name__6034__auto__,null);
});

sablono.core.time_field31365.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.time_field31365.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31365);

/**
 * Creates a url input field.
 */
sablono.core.url_field31368 = (function sablono$core$url_field31368(){
var G__31370 = arguments.length;
switch (G__31370) {
case 1:
return sablono.core.url_field31368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field31368.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.url_field31368.call(null,name__6034__auto__,null);
});

sablono.core.url_field31368.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.url_field31368.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31368);

/**
 * Creates a week input field.
 */
sablono.core.week_field31371 = (function sablono$core$week_field31371(){
var G__31373 = arguments.length;
switch (G__31373) {
case 1:
return sablono.core.week_field31371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field31371.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.week_field31371.call(null,name__6034__auto__,null);
});

sablono.core.week_field31371.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.week_field31371.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31371);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31391 = (function sablono$core$check_box31391(){
var G__31393 = arguments.length;
switch (G__31393) {
case 1:
return sablono.core.check_box31391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31391.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box31391.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31391.call(null,name,null);
});

sablono.core.check_box31391.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31391.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31391.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31391.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31391);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31395 = (function sablono$core$radio_button31395(){
var G__31397 = arguments.length;
switch (G__31397) {
case 1:
return sablono.core.radio_button31395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31395.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button31395.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31395.call(null,group,null);
});

sablono.core.radio_button31395.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31395.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31395.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31395.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31395);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31399 = (function sablono$core$select_options31399(){
var G__31401 = arguments.length;
switch (G__31401) {
case 1:
return sablono.core.select_options31399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options31399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options31399.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options31399.call(null,coll,null);
});

sablono.core.select_options31399.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5093__auto__ = (function sablono$core$iter__31402(s__31403){
return (new cljs.core.LazySeq(null,(function (){
var s__31403__$1 = s__31403;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__31403__$1);
if(temp__4423__auto__){
var s__31403__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31403__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__31403__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__31405 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__31404 = (0);
while(true){
if((i__31404 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__31404);
cljs.core.chunk_append.call(null,b__31405,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31408 = x;
var text = cljs.core.nth.call(null,vec__31408,(0),null);
var val = cljs.core.nth.call(null,vec__31408,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31408,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31399.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__31411 = (i__31404 + (1));
i__31404 = G__31411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31405),sablono$core$iter__31402.call(null,cljs.core.chunk_rest.call(null,s__31403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31405),null);
}
} else {
var x = cljs.core.first.call(null,s__31403__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31409 = x;
var text = cljs.core.nth.call(null,vec__31409,(0),null);
var val = cljs.core.nth.call(null,vec__31409,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31409,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31399.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__31402.call(null,cljs.core.rest.call(null,s__31403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5093__auto__.call(null,coll);
});

sablono.core.select_options31399.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31399);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31412 = (function sablono$core$drop_down31412(){
var G__31414 = arguments.length;
switch (G__31414) {
case 2:
return sablono.core.drop_down31412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31412.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down31412.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31412.call(null,name,options,null);
});

sablono.core.drop_down31412.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31412.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31412);
/**
 * Creates a text area element.
 */
sablono.core.text_area31416 = (function sablono$core$text_area31416(){
var G__31418 = arguments.length;
switch (G__31418) {
case 1:
return sablono.core.text_area31416.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31416.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area31416.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31416.call(null,name,null);
});

sablono.core.text_area31416.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area31416.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31416);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31420 = (function sablono$core$label31420(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31420);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31421 = (function sablono$core$submit_button31421(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31421);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31422 = (function sablono$core$reset_button31422(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31422);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to31423 = (function sablono$core$form_to31423(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to31423.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.form_to31423.cljs$core$IFn$_invoke$arity$variadic = (function (p__31426,body){
var vec__31427 = p__31426;
var method = cljs.core.nth.call(null,vec__31427,(0),null);
var action = cljs.core.nth.call(null,vec__31427,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to31423.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31423.cljs$lang$applyTo = (function (seq31424){
var G__31425 = cljs.core.first.call(null,seq31424);
var seq31424__$1 = cljs.core.next.call(null,seq31424);
return sablono.core.form_to31423.cljs$core$IFn$_invoke$arity$variadic(G__31425,seq31424__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31423);

//# sourceMappingURL=core.js.map