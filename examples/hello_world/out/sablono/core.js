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
var G__37250__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37249 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__37249,(0),null);
var body = cljs.core.nthnext.call(null,vec__37249,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37251__i = 0, G__37251__a = new Array(arguments.length -  0);
while (G__37251__i < G__37251__a.length) {G__37251__a[G__37251__i] = arguments[G__37251__i + 0]; ++G__37251__i;}
  args = new cljs.core.IndexedSeq(G__37251__a,0);
} 
return G__37250__delegate.call(this,args);};
G__37250.cljs$lang$maxFixedArity = 0;
G__37250.cljs$lang$applyTo = (function (arglist__37252){
var args = cljs.core.seq(arglist__37252);
return G__37250__delegate(args);
});
G__37250.cljs$core$IFn$_invoke$arity$variadic = G__37250__delegate;
return G__37250;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5103__auto__ = (function sablono$core$update_arglists_$_iter__37257(s__37258){
return (new cljs.core.LazySeq(null,(function (){
var s__37258__$1 = s__37258;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37258__$1);
if(temp__4423__auto__){
var s__37258__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37258__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__37258__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__37260 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__37259 = (0);
while(true){
if((i__37259 < size__5102__auto__)){
var args = cljs.core._nth.call(null,c__5101__auto__,i__37259);
cljs.core.chunk_append.call(null,b__37260,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37261 = (i__37259 + (1));
i__37259 = G__37261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37260),sablono$core$update_arglists_$_iter__37257.call(null,cljs.core.chunk_rest.call(null,s__37258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37260),null);
}
} else {
var args = cljs.core.first.call(null,s__37258__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37257.call(null,cljs.core.rest.call(null,s__37258__$2)));
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
var iter__5103__auto__ = (function sablono$core$iter__37263(s__37264){
return (new cljs.core.LazySeq(null,(function (){
var s__37264__$1 = s__37264;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37264__$1);
if(temp__4423__auto__){
var s__37264__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37264__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__37264__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__37266 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__37265 = (0);
while(true){
if((i__37265 < size__5102__auto__)){
var style = cljs.core._nth.call(null,c__5101__auto__,i__37265);
cljs.core.chunk_append.call(null,b__37266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37267 = (i__37265 + (1));
i__37265 = G__37267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37266),sablono$core$iter__37263.call(null,cljs.core.chunk_rest.call(null,s__37264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37266),null);
}
} else {
var style = cljs.core.first.call(null,s__37264__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37263.call(null,cljs.core.rest.call(null,s__37264__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq37262){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37262));
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
sablono.core.link_to37268 = (function sablono$core$link_to37268(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to37268.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.link_to37268.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37268.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37268.cljs$lang$applyTo = (function (seq37269){
var G__37270 = cljs.core.first.call(null,seq37269);
var seq37269__$1 = cljs.core.next.call(null,seq37269);
return sablono.core.link_to37268.cljs$core$IFn$_invoke$arity$variadic(G__37270,seq37269__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37268);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37271 = (function sablono$core$mail_to37271(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to37271.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.mail_to37271.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37274){
var vec__37275 = p__37274;
var content = cljs.core.nth.call(null,vec__37275,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4349__auto__ = content;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37271.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37271.cljs$lang$applyTo = (function (seq37272){
var G__37273 = cljs.core.first.call(null,seq37272);
var seq37272__$1 = cljs.core.next.call(null,seq37272);
return sablono.core.mail_to37271.cljs$core$IFn$_invoke$arity$variadic(G__37273,seq37272__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37271);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37276 = (function sablono$core$unordered_list37276(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5103__auto__ = (function sablono$core$unordered_list37276_$_iter__37281(s__37282){
return (new cljs.core.LazySeq(null,(function (){
var s__37282__$1 = s__37282;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37282__$1);
if(temp__4423__auto__){
var s__37282__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37282__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__37282__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__37284 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__37283 = (0);
while(true){
if((i__37283 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__37283);
cljs.core.chunk_append.call(null,b__37284,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37285 = (i__37283 + (1));
i__37283 = G__37285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37284),sablono$core$unordered_list37276_$_iter__37281.call(null,cljs.core.chunk_rest.call(null,s__37282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37284),null);
}
} else {
var x = cljs.core.first.call(null,s__37282__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37276_$_iter__37281.call(null,cljs.core.rest.call(null,s__37282__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37276);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37286 = (function sablono$core$ordered_list37286(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5103__auto__ = (function sablono$core$ordered_list37286_$_iter__37291(s__37292){
return (new cljs.core.LazySeq(null,(function (){
var s__37292__$1 = s__37292;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37292__$1);
if(temp__4423__auto__){
var s__37292__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37292__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__37292__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__37294 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__37293 = (0);
while(true){
if((i__37293 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__37293);
cljs.core.chunk_append.call(null,b__37294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37295 = (i__37293 + (1));
i__37293 = G__37295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37294),sablono$core$ordered_list37286_$_iter__37291.call(null,cljs.core.chunk_rest.call(null,s__37292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37294),null);
}
} else {
var x = cljs.core.first.call(null,s__37292__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37286_$_iter__37291.call(null,cljs.core.rest.call(null,s__37292__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37286);
/**
 * Create an image element.
 */
sablono.core.image37296 = (function sablono$core$image37296(){
var G__37298 = arguments.length;
switch (G__37298) {
case 1:
return sablono.core.image37296.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37296.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image37296.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37296.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37296.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37296);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37300_SHARP_,p2__37301_SHARP_){
return [cljs.core.str(p1__37300_SHARP_),cljs.core.str("["),cljs.core.str(p2__37301_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37302_SHARP_,p2__37303_SHARP_){
return [cljs.core.str(p1__37302_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37303_SHARP_)].join('');
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
sablono.core.color_field37304 = (function sablono$core$color_field37304(){
var G__37306 = arguments.length;
switch (G__37306) {
case 1:
return sablono.core.color_field37304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field37304.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.color_field37304.call(null,name__6044__auto__,null);
});

sablono.core.color_field37304.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.color_field37304.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37304);

/**
 * Creates a date input field.
 */
sablono.core.date_field37307 = (function sablono$core$date_field37307(){
var G__37309 = arguments.length;
switch (G__37309) {
case 1:
return sablono.core.date_field37307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field37307.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.date_field37307.call(null,name__6044__auto__,null);
});

sablono.core.date_field37307.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.date_field37307.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37307);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37310 = (function sablono$core$datetime_field37310(){
var G__37312 = arguments.length;
switch (G__37312) {
case 1:
return sablono.core.datetime_field37310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field37310.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_field37310.call(null,name__6044__auto__,null);
});

sablono.core.datetime_field37310.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_field37310.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37310);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37313 = (function sablono$core$datetime_local_field37313(){
var G__37315 = arguments.length;
switch (G__37315) {
case 1:
return sablono.core.datetime_local_field37313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37313.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_local_field37313.call(null,name__6044__auto__,null);
});

sablono.core.datetime_local_field37313.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_local_field37313.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37313);

/**
 * Creates a email input field.
 */
sablono.core.email_field37316 = (function sablono$core$email_field37316(){
var G__37318 = arguments.length;
switch (G__37318) {
case 1:
return sablono.core.email_field37316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field37316.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.email_field37316.call(null,name__6044__auto__,null);
});

sablono.core.email_field37316.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.email_field37316.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37316);

/**
 * Creates a file input field.
 */
sablono.core.file_field37319 = (function sablono$core$file_field37319(){
var G__37321 = arguments.length;
switch (G__37321) {
case 1:
return sablono.core.file_field37319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field37319.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.file_field37319.call(null,name__6044__auto__,null);
});

sablono.core.file_field37319.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.file_field37319.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37319);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37322 = (function sablono$core$hidden_field37322(){
var G__37324 = arguments.length;
switch (G__37324) {
case 1:
return sablono.core.hidden_field37322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field37322.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.hidden_field37322.call(null,name__6044__auto__,null);
});

sablono.core.hidden_field37322.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.hidden_field37322.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37322);

/**
 * Creates a month input field.
 */
sablono.core.month_field37325 = (function sablono$core$month_field37325(){
var G__37327 = arguments.length;
switch (G__37327) {
case 1:
return sablono.core.month_field37325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field37325.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.month_field37325.call(null,name__6044__auto__,null);
});

sablono.core.month_field37325.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.month_field37325.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37325);

/**
 * Creates a number input field.
 */
sablono.core.number_field37328 = (function sablono$core$number_field37328(){
var G__37330 = arguments.length;
switch (G__37330) {
case 1:
return sablono.core.number_field37328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field37328.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.number_field37328.call(null,name__6044__auto__,null);
});

sablono.core.number_field37328.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.number_field37328.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37328);

/**
 * Creates a password input field.
 */
sablono.core.password_field37331 = (function sablono$core$password_field37331(){
var G__37333 = arguments.length;
switch (G__37333) {
case 1:
return sablono.core.password_field37331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field37331.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.password_field37331.call(null,name__6044__auto__,null);
});

sablono.core.password_field37331.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.password_field37331.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37331);

/**
 * Creates a range input field.
 */
sablono.core.range_field37334 = (function sablono$core$range_field37334(){
var G__37336 = arguments.length;
switch (G__37336) {
case 1:
return sablono.core.range_field37334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field37334.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.range_field37334.call(null,name__6044__auto__,null);
});

sablono.core.range_field37334.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.range_field37334.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37334);

/**
 * Creates a search input field.
 */
sablono.core.search_field37337 = (function sablono$core$search_field37337(){
var G__37339 = arguments.length;
switch (G__37339) {
case 1:
return sablono.core.search_field37337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field37337.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.search_field37337.call(null,name__6044__auto__,null);
});

sablono.core.search_field37337.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.search_field37337.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37337);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37340 = (function sablono$core$tel_field37340(){
var G__37342 = arguments.length;
switch (G__37342) {
case 1:
return sablono.core.tel_field37340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field37340.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.tel_field37340.call(null,name__6044__auto__,null);
});

sablono.core.tel_field37340.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.tel_field37340.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37340);

/**
 * Creates a text input field.
 */
sablono.core.text_field37343 = (function sablono$core$text_field37343(){
var G__37345 = arguments.length;
switch (G__37345) {
case 1:
return sablono.core.text_field37343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field37343.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.text_field37343.call(null,name__6044__auto__,null);
});

sablono.core.text_field37343.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.text_field37343.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37343);

/**
 * Creates a time input field.
 */
sablono.core.time_field37346 = (function sablono$core$time_field37346(){
var G__37348 = arguments.length;
switch (G__37348) {
case 1:
return sablono.core.time_field37346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field37346.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.time_field37346.call(null,name__6044__auto__,null);
});

sablono.core.time_field37346.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.time_field37346.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37346);

/**
 * Creates a url input field.
 */
sablono.core.url_field37349 = (function sablono$core$url_field37349(){
var G__37351 = arguments.length;
switch (G__37351) {
case 1:
return sablono.core.url_field37349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field37349.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.url_field37349.call(null,name__6044__auto__,null);
});

sablono.core.url_field37349.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.url_field37349.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37349);

/**
 * Creates a week input field.
 */
sablono.core.week_field37352 = (function sablono$core$week_field37352(){
var G__37354 = arguments.length;
switch (G__37354) {
case 1:
return sablono.core.week_field37352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field37352.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.week_field37352.call(null,name__6044__auto__,null);
});

sablono.core.week_field37352.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.week_field37352.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37352);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37372 = (function sablono$core$check_box37372(){
var G__37374 = arguments.length;
switch (G__37374) {
case 1:
return sablono.core.check_box37372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37372.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box37372.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box37372.call(null,name,null);
});

sablono.core.check_box37372.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box37372.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box37372.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37372.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37372);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37376 = (function sablono$core$radio_button37376(){
var G__37378 = arguments.length;
switch (G__37378) {
case 1:
return sablono.core.radio_button37376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37376.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button37376.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button37376.call(null,group,null);
});

sablono.core.radio_button37376.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button37376.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button37376.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37376.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37376);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37380 = (function sablono$core$select_options37380(){
var G__37382 = arguments.length;
switch (G__37382) {
case 1:
return sablono.core.select_options37380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options37380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options37380.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options37380.call(null,coll,null);
});

sablono.core.select_options37380.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5103__auto__ = (function sablono$core$iter__37383(s__37384){
return (new cljs.core.LazySeq(null,(function (){
var s__37384__$1 = s__37384;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__37384__$1);
if(temp__4423__auto__){
var s__37384__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37384__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__37384__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__37386 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__37385 = (0);
while(true){
if((i__37385 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__37385);
cljs.core.chunk_append.call(null,b__37386,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37389 = x;
var text = cljs.core.nth.call(null,vec__37389,(0),null);
var val = cljs.core.nth.call(null,vec__37389,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37389,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37380.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__37392 = (i__37385 + (1));
i__37385 = G__37392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37386),sablono$core$iter__37383.call(null,cljs.core.chunk_rest.call(null,s__37384__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37386),null);
}
} else {
var x = cljs.core.first.call(null,s__37384__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37390 = x;
var text = cljs.core.nth.call(null,vec__37390,(0),null);
var val = cljs.core.nth.call(null,vec__37390,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37390,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37380.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__37383.call(null,cljs.core.rest.call(null,s__37384__$2)));
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

sablono.core.select_options37380.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37380);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37393 = (function sablono$core$drop_down37393(){
var G__37395 = arguments.length;
switch (G__37395) {
case 2:
return sablono.core.drop_down37393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37393.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down37393.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37393.call(null,name,options,null);
});

sablono.core.drop_down37393.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37393.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37393);
/**
 * Creates a text area element.
 */
sablono.core.text_area37397 = (function sablono$core$text_area37397(){
var G__37399 = arguments.length;
switch (G__37399) {
case 1:
return sablono.core.text_area37397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area37397.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37397.call(null,name,null);
});

sablono.core.text_area37397.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37397.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37397);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37401 = (function sablono$core$label37401(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37401);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37402 = (function sablono$core$submit_button37402(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37402);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37403 = (function sablono$core$reset_button37403(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37403);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to37404 = (function sablono$core$form_to37404(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to37404.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.form_to37404.cljs$core$IFn$_invoke$arity$variadic = (function (p__37407,body){
var vec__37408 = p__37407;
var method = cljs.core.nth.call(null,vec__37408,(0),null);
var action = cljs.core.nth.call(null,vec__37408,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to37404.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37404.cljs$lang$applyTo = (function (seq37405){
var G__37406 = cljs.core.first.call(null,seq37405);
var seq37405__$1 = cljs.core.next.call(null,seq37405);
return sablono.core.form_to37404.cljs$core$IFn$_invoke$arity$variadic(G__37406,seq37405__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37404);

//# sourceMappingURL=core.js.map