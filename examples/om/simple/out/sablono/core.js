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
var G__9405__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__9404 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__9404,(0),null);
var body = cljs.core.nthnext.call(null,vec__9404,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__9405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9406__i = 0, G__9406__a = new Array(arguments.length -  0);
while (G__9406__i < G__9406__a.length) {G__9406__a[G__9406__i] = arguments[G__9406__i + 0]; ++G__9406__i;}
  args = new cljs.core.IndexedSeq(G__9406__a,0);
} 
return G__9405__delegate.call(this,args);};
G__9405.cljs$lang$maxFixedArity = 0;
G__9405.cljs$lang$applyTo = (function (arglist__9407){
var args = cljs.core.seq(arglist__9407);
return G__9405__delegate(args);
});
G__9405.cljs$core$IFn$_invoke$arity$variadic = G__9405__delegate;
return G__9405;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5093__auto__ = (function sablono$core$update_arglists_$_iter__9412(s__9413){
return (new cljs.core.LazySeq(null,(function (){
var s__9413__$1 = s__9413;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9413__$1);
if(temp__4423__auto__){
var s__9413__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9413__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__9413__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__9415 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__9414 = (0);
while(true){
if((i__9414 < size__5092__auto__)){
var args = cljs.core._nth.call(null,c__5091__auto__,i__9414);
cljs.core.chunk_append.call(null,b__9415,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__9416 = (i__9414 + (1));
i__9414 = G__9416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9415),sablono$core$update_arglists_$_iter__9412.call(null,cljs.core.chunk_rest.call(null,s__9413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9415),null);
}
} else {
var args = cljs.core.first.call(null,s__9413__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__9412.call(null,cljs.core.rest.call(null,s__9413__$2)));
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
var iter__5093__auto__ = (function sablono$core$iter__9418(s__9419){
return (new cljs.core.LazySeq(null,(function (){
var s__9419__$1 = s__9419;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9419__$1);
if(temp__4423__auto__){
var s__9419__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9419__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__9419__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__9421 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__9420 = (0);
while(true){
if((i__9420 < size__5092__auto__)){
var style = cljs.core._nth.call(null,c__5091__auto__,i__9420);
cljs.core.chunk_append.call(null,b__9421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__9422 = (i__9420 + (1));
i__9420 = G__9422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9421),sablono$core$iter__9418.call(null,cljs.core.chunk_rest.call(null,s__9419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9421),null);
}
} else {
var style = cljs.core.first.call(null,s__9419__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__9418.call(null,cljs.core.rest.call(null,s__9419__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq9417){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9417));
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
sablono.core.link_to9423 = (function sablono$core$link_to9423(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to9423.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.link_to9423.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to9423.cljs$lang$maxFixedArity = (1);

sablono.core.link_to9423.cljs$lang$applyTo = (function (seq9424){
var G__9425 = cljs.core.first.call(null,seq9424);
var seq9424__$1 = cljs.core.next.call(null,seq9424);
return sablono.core.link_to9423.cljs$core$IFn$_invoke$arity$variadic(G__9425,seq9424__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to9423);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to9426 = (function sablono$core$mail_to9426(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to9426.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.mail_to9426.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__9429){
var vec__9430 = p__9429;
var content = cljs.core.nth.call(null,vec__9430,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4339__auto__ = content;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to9426.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to9426.cljs$lang$applyTo = (function (seq9427){
var G__9428 = cljs.core.first.call(null,seq9427);
var seq9427__$1 = cljs.core.next.call(null,seq9427);
return sablono.core.mail_to9426.cljs$core$IFn$_invoke$arity$variadic(G__9428,seq9427__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to9426);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list9431 = (function sablono$core$unordered_list9431(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5093__auto__ = (function sablono$core$unordered_list9431_$_iter__9436(s__9437){
return (new cljs.core.LazySeq(null,(function (){
var s__9437__$1 = s__9437;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9437__$1);
if(temp__4423__auto__){
var s__9437__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9437__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__9437__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__9439 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__9438 = (0);
while(true){
if((i__9438 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__9438);
cljs.core.chunk_append.call(null,b__9439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__9440 = (i__9438 + (1));
i__9438 = G__9440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9439),sablono$core$unordered_list9431_$_iter__9436.call(null,cljs.core.chunk_rest.call(null,s__9437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9439),null);
}
} else {
var x = cljs.core.first.call(null,s__9437__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list9431_$_iter__9436.call(null,cljs.core.rest.call(null,s__9437__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list9431);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list9441 = (function sablono$core$ordered_list9441(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5093__auto__ = (function sablono$core$ordered_list9441_$_iter__9446(s__9447){
return (new cljs.core.LazySeq(null,(function (){
var s__9447__$1 = s__9447;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9447__$1);
if(temp__4423__auto__){
var s__9447__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9447__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__9447__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__9449 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__9448 = (0);
while(true){
if((i__9448 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__9448);
cljs.core.chunk_append.call(null,b__9449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__9450 = (i__9448 + (1));
i__9448 = G__9450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9449),sablono$core$ordered_list9441_$_iter__9446.call(null,cljs.core.chunk_rest.call(null,s__9447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9449),null);
}
} else {
var x = cljs.core.first.call(null,s__9447__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list9441_$_iter__9446.call(null,cljs.core.rest.call(null,s__9447__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list9441);
/**
 * Create an image element.
 */
sablono.core.image9451 = (function sablono$core$image9451(){
var G__9453 = arguments.length;
switch (G__9453) {
case 1:
return sablono.core.image9451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image9451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image9451.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image9451.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image9451.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image9451);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__9455_SHARP_,p2__9456_SHARP_){
return [cljs.core.str(p1__9455_SHARP_),cljs.core.str("["),cljs.core.str(p2__9456_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__9457_SHARP_,p2__9458_SHARP_){
return [cljs.core.str(p1__9457_SHARP_),cljs.core.str("-"),cljs.core.str(p2__9458_SHARP_)].join('');
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
sablono.core.color_field9459 = (function sablono$core$color_field9459(){
var G__9461 = arguments.length;
switch (G__9461) {
case 1:
return sablono.core.color_field9459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field9459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field9459.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.color_field9459.call(null,name__6034__auto__,null);
});

sablono.core.color_field9459.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.color_field9459.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field9459);

/**
 * Creates a date input field.
 */
sablono.core.date_field9462 = (function sablono$core$date_field9462(){
var G__9464 = arguments.length;
switch (G__9464) {
case 1:
return sablono.core.date_field9462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field9462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field9462.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.date_field9462.call(null,name__6034__auto__,null);
});

sablono.core.date_field9462.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.date_field9462.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field9462);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field9465 = (function sablono$core$datetime_field9465(){
var G__9467 = arguments.length;
switch (G__9467) {
case 1:
return sablono.core.datetime_field9465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field9465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field9465.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_field9465.call(null,name__6034__auto__,null);
});

sablono.core.datetime_field9465.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_field9465.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field9465);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field9468 = (function sablono$core$datetime_local_field9468(){
var G__9470 = arguments.length;
switch (G__9470) {
case 1:
return sablono.core.datetime_local_field9468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field9468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field9468.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_local_field9468.call(null,name__6034__auto__,null);
});

sablono.core.datetime_local_field9468.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_local_field9468.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field9468);

/**
 * Creates a email input field.
 */
sablono.core.email_field9471 = (function sablono$core$email_field9471(){
var G__9473 = arguments.length;
switch (G__9473) {
case 1:
return sablono.core.email_field9471.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field9471.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field9471.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.email_field9471.call(null,name__6034__auto__,null);
});

sablono.core.email_field9471.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.email_field9471.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field9471);

/**
 * Creates a file input field.
 */
sablono.core.file_field9474 = (function sablono$core$file_field9474(){
var G__9476 = arguments.length;
switch (G__9476) {
case 1:
return sablono.core.file_field9474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field9474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field9474.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.file_field9474.call(null,name__6034__auto__,null);
});

sablono.core.file_field9474.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.file_field9474.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field9474);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field9477 = (function sablono$core$hidden_field9477(){
var G__9479 = arguments.length;
switch (G__9479) {
case 1:
return sablono.core.hidden_field9477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field9477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field9477.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.hidden_field9477.call(null,name__6034__auto__,null);
});

sablono.core.hidden_field9477.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.hidden_field9477.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field9477);

/**
 * Creates a month input field.
 */
sablono.core.month_field9480 = (function sablono$core$month_field9480(){
var G__9482 = arguments.length;
switch (G__9482) {
case 1:
return sablono.core.month_field9480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field9480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field9480.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.month_field9480.call(null,name__6034__auto__,null);
});

sablono.core.month_field9480.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.month_field9480.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field9480);

/**
 * Creates a number input field.
 */
sablono.core.number_field9483 = (function sablono$core$number_field9483(){
var G__9485 = arguments.length;
switch (G__9485) {
case 1:
return sablono.core.number_field9483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field9483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field9483.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.number_field9483.call(null,name__6034__auto__,null);
});

sablono.core.number_field9483.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.number_field9483.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field9483);

/**
 * Creates a password input field.
 */
sablono.core.password_field9486 = (function sablono$core$password_field9486(){
var G__9488 = arguments.length;
switch (G__9488) {
case 1:
return sablono.core.password_field9486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field9486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field9486.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.password_field9486.call(null,name__6034__auto__,null);
});

sablono.core.password_field9486.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.password_field9486.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field9486);

/**
 * Creates a range input field.
 */
sablono.core.range_field9489 = (function sablono$core$range_field9489(){
var G__9491 = arguments.length;
switch (G__9491) {
case 1:
return sablono.core.range_field9489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field9489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field9489.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.range_field9489.call(null,name__6034__auto__,null);
});

sablono.core.range_field9489.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.range_field9489.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field9489);

/**
 * Creates a search input field.
 */
sablono.core.search_field9492 = (function sablono$core$search_field9492(){
var G__9494 = arguments.length;
switch (G__9494) {
case 1:
return sablono.core.search_field9492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field9492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field9492.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.search_field9492.call(null,name__6034__auto__,null);
});

sablono.core.search_field9492.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.search_field9492.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field9492);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field9495 = (function sablono$core$tel_field9495(){
var G__9497 = arguments.length;
switch (G__9497) {
case 1:
return sablono.core.tel_field9495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field9495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field9495.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.tel_field9495.call(null,name__6034__auto__,null);
});

sablono.core.tel_field9495.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.tel_field9495.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field9495);

/**
 * Creates a text input field.
 */
sablono.core.text_field9498 = (function sablono$core$text_field9498(){
var G__9500 = arguments.length;
switch (G__9500) {
case 1:
return sablono.core.text_field9498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field9498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field9498.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.text_field9498.call(null,name__6034__auto__,null);
});

sablono.core.text_field9498.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.text_field9498.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field9498);

/**
 * Creates a time input field.
 */
sablono.core.time_field9501 = (function sablono$core$time_field9501(){
var G__9503 = arguments.length;
switch (G__9503) {
case 1:
return sablono.core.time_field9501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field9501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field9501.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.time_field9501.call(null,name__6034__auto__,null);
});

sablono.core.time_field9501.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.time_field9501.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field9501);

/**
 * Creates a url input field.
 */
sablono.core.url_field9504 = (function sablono$core$url_field9504(){
var G__9506 = arguments.length;
switch (G__9506) {
case 1:
return sablono.core.url_field9504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field9504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field9504.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.url_field9504.call(null,name__6034__auto__,null);
});

sablono.core.url_field9504.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.url_field9504.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field9504);

/**
 * Creates a week input field.
 */
sablono.core.week_field9507 = (function sablono$core$week_field9507(){
var G__9509 = arguments.length;
switch (G__9509) {
case 1:
return sablono.core.week_field9507.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field9507.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field9507.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.week_field9507.call(null,name__6034__auto__,null);
});

sablono.core.week_field9507.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.week_field9507.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field9507);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box9527 = (function sablono$core$check_box9527(){
var G__9529 = arguments.length;
switch (G__9529) {
case 1:
return sablono.core.check_box9527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box9527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box9527.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box9527.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box9527.call(null,name,null);
});

sablono.core.check_box9527.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box9527.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box9527.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box9527.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box9527);
/**
 * Creates a radio button.
 */
sablono.core.radio_button9531 = (function sablono$core$radio_button9531(){
var G__9533 = arguments.length;
switch (G__9533) {
case 1:
return sablono.core.radio_button9531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button9531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button9531.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button9531.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button9531.call(null,group,null);
});

sablono.core.radio_button9531.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button9531.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button9531.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button9531.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button9531);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options9535 = (function sablono$core$select_options9535(){
var G__9537 = arguments.length;
switch (G__9537) {
case 1:
return sablono.core.select_options9535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options9535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options9535.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options9535.call(null,coll,null);
});

sablono.core.select_options9535.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5093__auto__ = (function sablono$core$iter__9538(s__9539){
return (new cljs.core.LazySeq(null,(function (){
var s__9539__$1 = s__9539;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__9539__$1);
if(temp__4423__auto__){
var s__9539__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9539__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__9539__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__9541 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__9540 = (0);
while(true){
if((i__9540 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__9540);
cljs.core.chunk_append.call(null,b__9541,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9544 = x;
var text = cljs.core.nth.call(null,vec__9544,(0),null);
var val = cljs.core.nth.call(null,vec__9544,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__9544,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options9535.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__9547 = (i__9540 + (1));
i__9540 = G__9547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9541),sablono$core$iter__9538.call(null,cljs.core.chunk_rest.call(null,s__9539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9541),null);
}
} else {
var x = cljs.core.first.call(null,s__9539__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__9545 = x;
var text = cljs.core.nth.call(null,vec__9545,(0),null);
var val = cljs.core.nth.call(null,vec__9545,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__9545,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options9535.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__9538.call(null,cljs.core.rest.call(null,s__9539__$2)));
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

sablono.core.select_options9535.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options9535);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down9548 = (function sablono$core$drop_down9548(){
var G__9550 = arguments.length;
switch (G__9550) {
case 2:
return sablono.core.drop_down9548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down9548.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down9548.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down9548.call(null,name,options,null);
});

sablono.core.drop_down9548.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down9548.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down9548);
/**
 * Creates a text area element.
 */
sablono.core.text_area9552 = (function sablono$core$text_area9552(){
var G__9554 = arguments.length;
switch (G__9554) {
case 1:
return sablono.core.text_area9552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area9552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area9552.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area9552.call(null,name,null);
});

sablono.core.text_area9552.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area9552.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area9552);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label9556 = (function sablono$core$label9556(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label9556);
/**
 * Creates a submit button.
 */
sablono.core.submit_button9557 = (function sablono$core$submit_button9557(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button9557);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button9558 = (function sablono$core$reset_button9558(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button9558);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to9559 = (function sablono$core$form_to9559(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to9559.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.form_to9559.cljs$core$IFn$_invoke$arity$variadic = (function (p__9562,body){
var vec__9563 = p__9562;
var method = cljs.core.nth.call(null,vec__9563,(0),null);
var action = cljs.core.nth.call(null,vec__9563,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to9559.cljs$lang$maxFixedArity = (1);

sablono.core.form_to9559.cljs$lang$applyTo = (function (seq9560){
var G__9561 = cljs.core.first.call(null,seq9560);
var seq9560__$1 = cljs.core.next.call(null,seq9560);
return sablono.core.form_to9559.cljs$core$IFn$_invoke$arity$variadic(G__9561,seq9560__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to9559);

//# sourceMappingURL=core.js.map