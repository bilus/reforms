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
var G__39649__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__39648 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__39648,(0),null);
var body = cljs.core.nthnext.call(null,vec__39648,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__39649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39650__i = 0, G__39650__a = new Array(arguments.length -  0);
while (G__39650__i < G__39650__a.length) {G__39650__a[G__39650__i] = arguments[G__39650__i + 0]; ++G__39650__i;}
  args = new cljs.core.IndexedSeq(G__39650__a,0);
} 
return G__39649__delegate.call(this,args);};
G__39649.cljs$lang$maxFixedArity = 0;
G__39649.cljs$lang$applyTo = (function (arglist__39651){
var args = cljs.core.seq(arglist__39651);
return G__39649__delegate(args);
});
G__39649.cljs$core$IFn$_invoke$arity$variadic = G__39649__delegate;
return G__39649;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5103__auto__ = (function sablono$core$update_arglists_$_iter__39656(s__39657){
return (new cljs.core.LazySeq(null,(function (){
var s__39657__$1 = s__39657;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__39657__$1);
if(temp__4423__auto__){
var s__39657__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39657__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__39657__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__39659 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__39658 = (0);
while(true){
if((i__39658 < size__5102__auto__)){
var args = cljs.core._nth.call(null,c__5101__auto__,i__39658);
cljs.core.chunk_append.call(null,b__39659,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39660 = (i__39658 + (1));
i__39658 = G__39660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39659),sablono$core$update_arglists_$_iter__39656.call(null,cljs.core.chunk_rest.call(null,s__39657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39659),null);
}
} else {
var args = cljs.core.first.call(null,s__39657__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__39656.call(null,cljs.core.rest.call(null,s__39657__$2)));
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
var iter__5103__auto__ = (function sablono$core$iter__39662(s__39663){
return (new cljs.core.LazySeq(null,(function (){
var s__39663__$1 = s__39663;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__39663__$1);
if(temp__4423__auto__){
var s__39663__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39663__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__39663__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__39665 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__39664 = (0);
while(true){
if((i__39664 < size__5102__auto__)){
var style = cljs.core._nth.call(null,c__5101__auto__,i__39664);
cljs.core.chunk_append.call(null,b__39665,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39666 = (i__39664 + (1));
i__39664 = G__39666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39665),sablono$core$iter__39662.call(null,cljs.core.chunk_rest.call(null,s__39663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39665),null);
}
} else {
var style = cljs.core.first.call(null,s__39663__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__39662.call(null,cljs.core.rest.call(null,s__39663__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq39661){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39661));
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
sablono.core.link_to39667 = (function sablono$core$link_to39667(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to39667.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.link_to39667.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to39667.cljs$lang$maxFixedArity = (1);

sablono.core.link_to39667.cljs$lang$applyTo = (function (seq39668){
var G__39669 = cljs.core.first.call(null,seq39668);
var seq39668__$1 = cljs.core.next.call(null,seq39668);
return sablono.core.link_to39667.cljs$core$IFn$_invoke$arity$variadic(G__39669,seq39668__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to39667);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39670 = (function sablono$core$mail_to39670(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to39670.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.mail_to39670.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39673){
var vec__39674 = p__39673;
var content = cljs.core.nth.call(null,vec__39674,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4349__auto__ = content;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to39670.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to39670.cljs$lang$applyTo = (function (seq39671){
var G__39672 = cljs.core.first.call(null,seq39671);
var seq39671__$1 = cljs.core.next.call(null,seq39671);
return sablono.core.mail_to39670.cljs$core$IFn$_invoke$arity$variadic(G__39672,seq39671__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to39670);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39675 = (function sablono$core$unordered_list39675(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5103__auto__ = (function sablono$core$unordered_list39675_$_iter__39680(s__39681){
return (new cljs.core.LazySeq(null,(function (){
var s__39681__$1 = s__39681;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__39681__$1);
if(temp__4423__auto__){
var s__39681__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39681__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__39681__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__39683 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__39682 = (0);
while(true){
if((i__39682 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__39682);
cljs.core.chunk_append.call(null,b__39683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39684 = (i__39682 + (1));
i__39682 = G__39684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39683),sablono$core$unordered_list39675_$_iter__39680.call(null,cljs.core.chunk_rest.call(null,s__39681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39683),null);
}
} else {
var x = cljs.core.first.call(null,s__39681__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39675_$_iter__39680.call(null,cljs.core.rest.call(null,s__39681__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list39675);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39685 = (function sablono$core$ordered_list39685(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5103__auto__ = (function sablono$core$ordered_list39685_$_iter__39690(s__39691){
return (new cljs.core.LazySeq(null,(function (){
var s__39691__$1 = s__39691;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__39691__$1);
if(temp__4423__auto__){
var s__39691__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39691__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__39691__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__39693 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__39692 = (0);
while(true){
if((i__39692 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__39692);
cljs.core.chunk_append.call(null,b__39693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39694 = (i__39692 + (1));
i__39692 = G__39694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39693),sablono$core$ordered_list39685_$_iter__39690.call(null,cljs.core.chunk_rest.call(null,s__39691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39693),null);
}
} else {
var x = cljs.core.first.call(null,s__39691__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39685_$_iter__39690.call(null,cljs.core.rest.call(null,s__39691__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list39685);
/**
 * Create an image element.
 */
sablono.core.image39695 = (function sablono$core$image39695(){
var G__39697 = arguments.length;
switch (G__39697) {
case 1:
return sablono.core.image39695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image39695.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image39695.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image39695.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image39695);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__39699_SHARP_,p2__39700_SHARP_){
return [cljs.core.str(p1__39699_SHARP_),cljs.core.str("["),cljs.core.str(p2__39700_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__39701_SHARP_,p2__39702_SHARP_){
return [cljs.core.str(p1__39701_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39702_SHARP_)].join('');
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
sablono.core.color_field39703 = (function sablono$core$color_field39703(){
var G__39705 = arguments.length;
switch (G__39705) {
case 1:
return sablono.core.color_field39703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field39703.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.color_field39703.call(null,name__6044__auto__,null);
});

sablono.core.color_field39703.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.color_field39703.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field39703);

/**
 * Creates a date input field.
 */
sablono.core.date_field39706 = (function sablono$core$date_field39706(){
var G__39708 = arguments.length;
switch (G__39708) {
case 1:
return sablono.core.date_field39706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field39706.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.date_field39706.call(null,name__6044__auto__,null);
});

sablono.core.date_field39706.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.date_field39706.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field39706);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39709 = (function sablono$core$datetime_field39709(){
var G__39711 = arguments.length;
switch (G__39711) {
case 1:
return sablono.core.datetime_field39709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field39709.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_field39709.call(null,name__6044__auto__,null);
});

sablono.core.datetime_field39709.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_field39709.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field39709);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39712 = (function sablono$core$datetime_local_field39712(){
var G__39714 = arguments.length;
switch (G__39714) {
case 1:
return sablono.core.datetime_local_field39712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field39712.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.datetime_local_field39712.call(null,name__6044__auto__,null);
});

sablono.core.datetime_local_field39712.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.datetime_local_field39712.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field39712);

/**
 * Creates a email input field.
 */
sablono.core.email_field39715 = (function sablono$core$email_field39715(){
var G__39717 = arguments.length;
switch (G__39717) {
case 1:
return sablono.core.email_field39715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field39715.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.email_field39715.call(null,name__6044__auto__,null);
});

sablono.core.email_field39715.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.email_field39715.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field39715);

/**
 * Creates a file input field.
 */
sablono.core.file_field39718 = (function sablono$core$file_field39718(){
var G__39720 = arguments.length;
switch (G__39720) {
case 1:
return sablono.core.file_field39718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field39718.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.file_field39718.call(null,name__6044__auto__,null);
});

sablono.core.file_field39718.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.file_field39718.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39718);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39721 = (function sablono$core$hidden_field39721(){
var G__39723 = arguments.length;
switch (G__39723) {
case 1:
return sablono.core.hidden_field39721.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39721.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field39721.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.hidden_field39721.call(null,name__6044__auto__,null);
});

sablono.core.hidden_field39721.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.hidden_field39721.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39721);

/**
 * Creates a month input field.
 */
sablono.core.month_field39724 = (function sablono$core$month_field39724(){
var G__39726 = arguments.length;
switch (G__39726) {
case 1:
return sablono.core.month_field39724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field39724.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.month_field39724.call(null,name__6044__auto__,null);
});

sablono.core.month_field39724.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.month_field39724.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39724);

/**
 * Creates a number input field.
 */
sablono.core.number_field39727 = (function sablono$core$number_field39727(){
var G__39729 = arguments.length;
switch (G__39729) {
case 1:
return sablono.core.number_field39727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field39727.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.number_field39727.call(null,name__6044__auto__,null);
});

sablono.core.number_field39727.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.number_field39727.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39727);

/**
 * Creates a password input field.
 */
sablono.core.password_field39730 = (function sablono$core$password_field39730(){
var G__39732 = arguments.length;
switch (G__39732) {
case 1:
return sablono.core.password_field39730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field39730.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.password_field39730.call(null,name__6044__auto__,null);
});

sablono.core.password_field39730.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.password_field39730.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39730);

/**
 * Creates a range input field.
 */
sablono.core.range_field39733 = (function sablono$core$range_field39733(){
var G__39735 = arguments.length;
switch (G__39735) {
case 1:
return sablono.core.range_field39733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field39733.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.range_field39733.call(null,name__6044__auto__,null);
});

sablono.core.range_field39733.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.range_field39733.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39733);

/**
 * Creates a search input field.
 */
sablono.core.search_field39736 = (function sablono$core$search_field39736(){
var G__39738 = arguments.length;
switch (G__39738) {
case 1:
return sablono.core.search_field39736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field39736.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.search_field39736.call(null,name__6044__auto__,null);
});

sablono.core.search_field39736.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.search_field39736.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39736);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39739 = (function sablono$core$tel_field39739(){
var G__39741 = arguments.length;
switch (G__39741) {
case 1:
return sablono.core.tel_field39739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field39739.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.tel_field39739.call(null,name__6044__auto__,null);
});

sablono.core.tel_field39739.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.tel_field39739.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39739);

/**
 * Creates a text input field.
 */
sablono.core.text_field39742 = (function sablono$core$text_field39742(){
var G__39744 = arguments.length;
switch (G__39744) {
case 1:
return sablono.core.text_field39742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field39742.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.text_field39742.call(null,name__6044__auto__,null);
});

sablono.core.text_field39742.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.text_field39742.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39742);

/**
 * Creates a time input field.
 */
sablono.core.time_field39745 = (function sablono$core$time_field39745(){
var G__39747 = arguments.length;
switch (G__39747) {
case 1:
return sablono.core.time_field39745.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39745.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field39745.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.time_field39745.call(null,name__6044__auto__,null);
});

sablono.core.time_field39745.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.time_field39745.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39745);

/**
 * Creates a url input field.
 */
sablono.core.url_field39748 = (function sablono$core$url_field39748(){
var G__39750 = arguments.length;
switch (G__39750) {
case 1:
return sablono.core.url_field39748.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field39748.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.url_field39748.call(null,name__6044__auto__,null);
});

sablono.core.url_field39748.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.url_field39748.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39748);

/**
 * Creates a week input field.
 */
sablono.core.week_field39751 = (function sablono$core$week_field39751(){
var G__39753 = arguments.length;
switch (G__39753) {
case 1:
return sablono.core.week_field39751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field39751.cljs$core$IFn$_invoke$arity$1 = (function (name__6044__auto__){
return sablono.core.week_field39751.call(null,name__6044__auto__,null);
});

sablono.core.week_field39751.cljs$core$IFn$_invoke$arity$2 = (function (name__6044__auto__,value__6045__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6044__auto__,value__6045__auto__);
});

sablono.core.week_field39751.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39751);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39771 = (function sablono$core$check_box39771(){
var G__39773 = arguments.length;
switch (G__39773) {
case 1:
return sablono.core.check_box39771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39771.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box39771.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box39771.call(null,name,null);
});

sablono.core.check_box39771.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box39771.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box39771.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39771.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39771);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39775 = (function sablono$core$radio_button39775(){
var G__39777 = arguments.length;
switch (G__39777) {
case 1:
return sablono.core.radio_button39775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39775.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button39775.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button39775.call(null,group,null);
});

sablono.core.radio_button39775.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button39775.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button39775.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39775.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39775);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39779 = (function sablono$core$select_options39779(){
var G__39781 = arguments.length;
switch (G__39781) {
case 1:
return sablono.core.select_options39779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options39779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options39779.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options39779.call(null,coll,null);
});

sablono.core.select_options39779.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5103__auto__ = (function sablono$core$iter__39782(s__39783){
return (new cljs.core.LazySeq(null,(function (){
var s__39783__$1 = s__39783;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__39783__$1);
if(temp__4423__auto__){
var s__39783__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39783__$2)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,s__39783__$2);
var size__5102__auto__ = cljs.core.count.call(null,c__5101__auto__);
var b__39785 = cljs.core.chunk_buffer.call(null,size__5102__auto__);
if((function (){var i__39784 = (0);
while(true){
if((i__39784 < size__5102__auto__)){
var x = cljs.core._nth.call(null,c__5101__auto__,i__39784);
cljs.core.chunk_append.call(null,b__39785,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39788 = x;
var text = cljs.core.nth.call(null,vec__39788,(0),null);
var val = cljs.core.nth.call(null,vec__39788,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39788,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39779.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__39791 = (i__39784 + (1));
i__39784 = G__39791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39785),sablono$core$iter__39782.call(null,cljs.core.chunk_rest.call(null,s__39783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39785),null);
}
} else {
var x = cljs.core.first.call(null,s__39783__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39789 = x;
var text = cljs.core.nth.call(null,vec__39789,(0),null);
var val = cljs.core.nth.call(null,vec__39789,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39789,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39779.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__39782.call(null,cljs.core.rest.call(null,s__39783__$2)));
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

sablono.core.select_options39779.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39779);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39792 = (function sablono$core$drop_down39792(){
var G__39794 = arguments.length;
switch (G__39794) {
case 2:
return sablono.core.drop_down39792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39792.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down39792.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39792.call(null,name,options,null);
});

sablono.core.drop_down39792.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down39792.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39792);
/**
 * Creates a text area element.
 */
sablono.core.text_area39796 = (function sablono$core$text_area39796(){
var G__39798 = arguments.length;
switch (G__39798) {
case 1:
return sablono.core.text_area39796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area39796.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area39796.call(null,name,null);
});

sablono.core.text_area39796.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area39796.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39796);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39800 = (function sablono$core$label39800(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39800);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39801 = (function sablono$core$submit_button39801(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39801);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39802 = (function sablono$core$reset_button39802(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39802);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to39803 = (function sablono$core$form_to39803(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to39803.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

sablono.core.form_to39803.cljs$core$IFn$_invoke$arity$variadic = (function (p__39806,body){
var vec__39807 = p__39806;
var method = cljs.core.nth.call(null,vec__39807,(0),null);
var action = cljs.core.nth.call(null,vec__39807,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to39803.cljs$lang$maxFixedArity = (1);

sablono.core.form_to39803.cljs$lang$applyTo = (function (seq39804){
var G__39805 = cljs.core.first.call(null,seq39804);
var seq39804__$1 = cljs.core.next.call(null,seq39804);
return sablono.core.form_to39803.cljs$core$IFn$_invoke$arity$variadic(G__39805,seq39804__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39803);

//# sourceMappingURL=core.js.map