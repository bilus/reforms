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
var G__9433__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__9432 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__9432,(0),null);
var body = cljs.core.nthnext.call(null,vec__9432,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__9433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9434__i = 0, G__9434__a = new Array(arguments.length -  0);
while (G__9434__i < G__9434__a.length) {G__9434__a[G__9434__i] = arguments[G__9434__i + 0]; ++G__9434__i;}
  args = new cljs.core.IndexedSeq(G__9434__a,0);
} 
return G__9433__delegate.call(this,args);};
G__9433.cljs$lang$maxFixedArity = 0;
G__9433.cljs$lang$applyTo = (function (arglist__9435){
var args = cljs.core.seq(arglist__9435);
return G__9433__delegate(args);
});
G__9433.cljs$core$IFn$_invoke$arity$variadic = G__9433__delegate;
return G__9433;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5103__auto__ = (function sablono$core$update_arglists_$_iter__9440(s__9441){
return (new cljs.core.LazySeq(null,(function (){
var s__9441__$1 = s__9441;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9441__$1);
if(temp__4423__auto__){
var s__9441__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9441__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__9441__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__9443 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__9442 = (0);
while(true){
if((i__9442 < size__5102__auto__)){
var args = cljs.core._nth.call(null,c__5101__auto__,i__9442);
cljs.core.chunk_append.call(null,b__9443,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__9444 = (i__9442 + (1));
i__9442 = G__9444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9443),sablono$core$update_arglists_$_iter__9440.call(null,cljs.core.chunk_rest.call(null,s__9441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9443),null);
}
} else {
var args = cljs.core.first.call(null,s__9441__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__9440.call(null,cljs.core.rest.call(null,s__9441__$2)));
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
var iter__5103__auto__ = (function sablono$core$iter__9446(s__9447){
return (new cljs.core.LazySeq(null,(function (){
var s__9447__$1 = s__9447;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9447__$1);
if(temp__4423__auto__){
var s__9447__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9447__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__9447__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__9449 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__9448 = (0);
while(true){
if((i__9448 < size__5102__auto__)){
var style = cljs.core._nth.call(null,c__5101__auto__,i__9448);
cljs.core.chunk_append.call(null,b__9449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__9450 = (i__9448 + (1));
i__9448 = G__9450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9449),sablono$core$iter__9446.call(null,cljs.core.chunk_rest.call(null,s__9447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9449),null);
}
} else {
var style = cljs.core.first.call(null,s__9447__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__9446.call(null,cljs.core.rest.call(null,s__9447__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq9445){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9445));
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
sablono.core.link_to9451 = (function sablono$core$link_to9451(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to9451.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.link_to9451.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to9451.cljs$lang$maxFixedArity = (1);

sablono.core.link_to9451.cljs$lang$applyTo = (function (seq9452){
var G__9453 = cljs.core.first.call(null,seq9452);
var seq9452__$1 = cljs.core.next.call(null,seq9452);
return sablono.core.link_to9451.cljs$core$IFn$_invoke$arity$variadic(G__9453,seq9452__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to9451);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to9454 = (function sablono$core$mail_to9454(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to9454.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.mail_to9454.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__9457){
var vec__9458 = p__9457;
var content = cljs.core.nth.call(null,vec__9458,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4349__auto__ = content;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to9454.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to9454.cljs$lang$applyTo = (function (seq9455){
var G__9456 = cljs.core.first.call(null,seq9455);
var seq9455__$1 = cljs.core.next.call(null,seq9455);
return sablono.core.mail_to9454.cljs$core$IFn$_invoke$arity$variadic(G__9456,seq9455__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to9454);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list9459 = (function sablono$core$unordered_list9459(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5103__auto__ = (function sablono$core$unordered_list9459_$_iter__9464(s__9465){
return (new cljs.core.LazySeq(null,(function (){
var s__9465__$1 = s__9465;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9465__$1);
if(temp__4423__auto__){
var s__9465__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9465__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__9465__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__9467 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__9466 = (0);
while(true){
if((i__9466 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__9466);
cljs.core.chunk_append.call(null,b__9467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__9468 = (i__9466 + (1));
i__9466 = G__9468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9467),sablono$core$unordered_list9459_$_iter__9464.call(null,cljs.core.chunk_rest.call(null,s__9465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9467),null);
}
} else {
var x = cljs.core.first.call(null,s__9465__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list9459_$_iter__9464.call(null,cljs.core.rest.call(null,s__9465__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list9459);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list9469 = (function sablono$core$ordered_list9469(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5103__auto__ = (function sablono$core$ordered_list9469_$_iter__9474(s__9475){
return (new cljs.core.LazySeq(null,(function (){
var s__9475__$1 = s__9475;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9475__$1);
if(temp__4423__auto__){
var s__9475__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9475__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__9475__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__9477 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__9476 = (0);
while(true){
if((i__9476 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__9476);
cljs.core.chunk_append.call(null,b__9477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__9478 = (i__9476 + (1));
i__9476 = G__9478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9477),sablono$core$ordered_list9469_$_iter__9474.call(null,cljs.core.chunk_rest.call(null,s__9475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9477),null);
}
} else {
var x = cljs.core.first.call(null,s__9475__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list9469_$_iter__9474.call(null,cljs.core.rest.call(null,s__9475__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list9469);
/**
 * Create an image element.
 */
sablono.core.image9479 = (function sablono$core$image9479(){
var G__9481 = arguments.length;
switch (G__9481) {
case 1:
return sablono.core.image9479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image9479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image9479.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image9479.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image9479.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image9479);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__9483_SHARP_,p2__9484_SHARP_){
return [cljs.core.str(p1__9483_SHARP_),cljs.core.str("["),cljs.core.str(p2__9484_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__9485_SHARP_,p2__9486_SHARP_){
return [cljs.core.str(p1__9485_SHARP_),cljs.core.str("-"),cljs.core.str(p2__9486_SHARP_)].join('');
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
sablono.core.color_field9487 = (function sablono$core$color_field9487(){
var G__9489 = arguments.length;
switch (G__9489) {
case 1:
return sablono.core.color_field9487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field9487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field9487.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.color_field9487.call(null,name__6044__auto__,null);
});

sablono.core.color_field9487.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.color_field9487.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field9487);

/**
 * Creates a date input field.
 */
sablono.core.date_field9490 = (function sablono$core$date_field9490(){
var G__9492 = arguments.length;
switch (G__9492) {
case 1:
return sablono.core.date_field9490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field9490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field9490.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.date_field9490.call(null,name__6044__auto__,null);
});

sablono.core.date_field9490.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.date_field9490.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field9490);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field9493 = (function sablono$core$datetime_field9493(){
var G__9495 = arguments.length;
switch (G__9495) {
case 1:
return sablono.core.datetime_field9493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field9493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field9493.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_field9493.call(null,name__6044__auto__,null);
});

sablono.core.datetime_field9493.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_field9493.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field9493);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field9496 = (function sablono$core$datetime_local_field9496(){
var G__9498 = arguments.length;
switch (G__9498) {
case 1:
return sablono.core.datetime_local_field9496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field9496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field9496.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_local_field9496.call(null,name__6044__auto__,null);
});

sablono.core.datetime_local_field9496.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_local_field9496.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field9496);

/**
 * Creates a email input field.
 */
sablono.core.email_field9499 = (function sablono$core$email_field9499(){
var G__9501 = arguments.length;
switch (G__9501) {
case 1:
return sablono.core.email_field9499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field9499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field9499.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.email_field9499.call(null,name__6044__auto__,null);
});

sablono.core.email_field9499.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.email_field9499.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field9499);

/**
 * Creates a file input field.
 */
sablono.core.file_field9502 = (function sablono$core$file_field9502(){
var G__9504 = arguments.length;
switch (G__9504) {
case 1:
return sablono.core.file_field9502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field9502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field9502.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.file_field9502.call(null,name__6044__auto__,null);
});

sablono.core.file_field9502.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.file_field9502.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field9502);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field9505 = (function sablono$core$hidden_field9505(){
var G__9507 = arguments.length;
switch (G__9507) {
case 1:
return sablono.core.hidden_field9505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field9505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field9505.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.hidden_field9505.call(null,name__6044__auto__,null);
});

sablono.core.hidden_field9505.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.hidden_field9505.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field9505);

/**
 * Creates a month input field.
 */
sablono.core.month_field9508 = (function sablono$core$month_field9508(){
var G__9510 = arguments.length;
switch (G__9510) {
case 1:
return sablono.core.month_field9508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field9508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field9508.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.month_field9508.call(null,name__6044__auto__,null);
});

sablono.core.month_field9508.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.month_field9508.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field9508);

/**
 * Creates a number input field.
 */
sablono.core.number_field9511 = (function sablono$core$number_field9511(){
var G__9513 = arguments.length;
switch (G__9513) {
case 1:
return sablono.core.number_field9511.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field9511.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field9511.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.number_field9511.call(null,name__6044__auto__,null);
});

sablono.core.number_field9511.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.number_field9511.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field9511);

/**
 * Creates a password input field.
 */
sablono.core.password_field9514 = (function sablono$core$password_field9514(){
var G__9516 = arguments.length;
switch (G__9516) {
case 1:
return sablono.core.password_field9514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field9514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field9514.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.password_field9514.call(null,name__6044__auto__,null);
});

sablono.core.password_field9514.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.password_field9514.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field9514);

/**
 * Creates a range input field.
 */
sablono.core.range_field9517 = (function sablono$core$range_field9517(){
var G__9519 = arguments.length;
switch (G__9519) {
case 1:
return sablono.core.range_field9517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field9517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field9517.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.range_field9517.call(null,name__6044__auto__,null);
});

sablono.core.range_field9517.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.range_field9517.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field9517);

/**
 * Creates a search input field.
 */
sablono.core.search_field9520 = (function sablono$core$search_field9520(){
var G__9522 = arguments.length;
switch (G__9522) {
case 1:
return sablono.core.search_field9520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field9520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field9520.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.search_field9520.call(null,name__6044__auto__,null);
});

sablono.core.search_field9520.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.search_field9520.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field9520);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field9523 = (function sablono$core$tel_field9523(){
var G__9525 = arguments.length;
switch (G__9525) {
case 1:
return sablono.core.tel_field9523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field9523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field9523.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.tel_field9523.call(null,name__6044__auto__,null);
});

sablono.core.tel_field9523.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.tel_field9523.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field9523);

/**
 * Creates a text input field.
 */
sablono.core.text_field9526 = (function sablono$core$text_field9526(){
var G__9528 = arguments.length;
switch (G__9528) {
case 1:
return sablono.core.text_field9526.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field9526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field9526.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.text_field9526.call(null,name__6044__auto__,null);
});

sablono.core.text_field9526.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.text_field9526.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field9526);

/**
 * Creates a time input field.
 */
sablono.core.time_field9529 = (function sablono$core$time_field9529(){
var G__9531 = arguments.length;
switch (G__9531) {
case 1:
return sablono.core.time_field9529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field9529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field9529.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.time_field9529.call(null,name__6044__auto__,null);
});

sablono.core.time_field9529.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.time_field9529.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field9529);

/**
 * Creates a url input field.
 */
sablono.core.url_field9532 = (function sablono$core$url_field9532(){
var G__9534 = arguments.length;
switch (G__9534) {
case 1:
return sablono.core.url_field9532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field9532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field9532.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.url_field9532.call(null,name__6044__auto__,null);
});

sablono.core.url_field9532.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.url_field9532.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field9532);

/**
 * Creates a week input field.
 */
sablono.core.week_field9535 = (function sablono$core$week_field9535(){
var G__9537 = arguments.length;
switch (G__9537) {
case 1:
return sablono.core.week_field9535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field9535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field9535.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.week_field9535.call(null,name__6044__auto__,null);
});

sablono.core.week_field9535.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.week_field9535.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field9535);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box9555 = (function sablono$core$check_box9555(){
var G__9557 = arguments.length;
switch (G__9557) {
case 1:
return sablono.core.check_box9555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box9555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box9555.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box9555.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box9555.call(null,name,null);
});

sablono.core.check_box9555.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box9555.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box9555.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box9555.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box9555);
/**
 * Creates a radio button.
 */
sablono.core.radio_button9559 = (function sablono$core$radio_button9559(){
var G__9561 = arguments.length;
switch (G__9561) {
case 1:
return sablono.core.radio_button9559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button9559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button9559.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button9559.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button9559.call(null,group,null);
});

sablono.core.radio_button9559.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button9559.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button9559.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button9559.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button9559);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options9563 = (function sablono$core$select_options9563(){
var G__9565 = arguments.length;
switch (G__9565) {
case 1:
return sablono.core.select_options9563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options9563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options9563.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options9563.call(null,coll,null);
});

sablono.core.select_options9563.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5103__auto__ = (function sablono$core$iter__9566(s__9567){
return (new cljs.core.LazySeq(null,(function (){
var s__9567__$1 = s__9567;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9567__$1);
if(temp__4423__auto__){
var s__9567__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9567__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__9567__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__9569 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__9568 = (0);
while(true){
if((i__9568 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__9568);
cljs.core.chunk_append.call(null,b__9569,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9572 = x;
var text = cljs.core.nth.call(null,vec__9572,(0),null);
var val = cljs.core.nth.call(null,vec__9572,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__9572,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options9563.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__9575 = (i__9568 + (1));
i__9568 = G__9575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9569),sablono$core$iter__9566.call(null,cljs.core.chunk_rest.call(null,s__9567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9569),null);
}
} else {
var x = cljs.core.first.call(null,s__9567__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9573 = x;
var text = cljs.core.nth.call(null,vec__9573,(0),null);
var val = cljs.core.nth.call(null,vec__9573,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__9573,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options9563.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__9566.call(null,cljs.core.rest.call(null,s__9567__$2)));
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

sablono.core.select_options9563.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options9563);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down9576 = (function sablono$core$drop_down9576(){
var G__9578 = arguments.length;
switch (G__9578) {
case 2:
return sablono.core.drop_down9576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down9576.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down9576.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down9576.call(null,name,options,null);
});

sablono.core.drop_down9576.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down9576.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down9576);
/**
 * Creates a text area element.
 */
sablono.core.text_area9580 = (function sablono$core$text_area9580(){
var G__9582 = arguments.length;
switch (G__9582) {
case 1:
return sablono.core.text_area9580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area9580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area9580.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area9580.call(null,name,null);
});

sablono.core.text_area9580.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area9580.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area9580);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label9584 = (function sablono$core$label9584(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label9584);
/**
 * Creates a submit button.
 */
sablono.core.submit_button9585 = (function sablono$core$submit_button9585(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button9585);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button9586 = (function sablono$core$reset_button9586(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button9586);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to9587 = (function sablono$core$form_to9587(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to9587.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.form_to9587.cljs$core$IFn$_invoke$arity$variadic = (function (p__9590,body){
var vec__9591 = p__9590;
var method = cljs.core.nth.call(null,vec__9591,(0),null);
var action = cljs.core.nth.call(null,vec__9591,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to9587.cljs$lang$maxFixedArity = (1);

sablono.core.form_to9587.cljs$lang$applyTo = (function (seq9588){
var G__9589 = cljs.core.first.call(null,seq9588);
var seq9588__$1 = cljs.core.next.call(null,seq9588);
return sablono.core.form_to9587.cljs$core$IFn$_invoke$arity$variadic(G__9589,seq9588__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to9587);

//# sourceMappingURL=core.js.map