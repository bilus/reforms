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
var G__17674__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17673 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17673,(0),null);
var body = cljs.core.nthnext.call(null,vec__17673,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17675__i = 0, G__17675__a = new Array(arguments.length -  0);
while (G__17675__i < G__17675__a.length) {G__17675__a[G__17675__i] = arguments[G__17675__i + 0]; ++G__17675__i;}
  args = new cljs.core.IndexedSeq(G__17675__a,0);
} 
return G__17674__delegate.call(this,args);};
G__17674.cljs$lang$maxFixedArity = 0;
G__17674.cljs$lang$applyTo = (function (arglist__17676){
var args = cljs.core.seq(arglist__17676);
return G__17674__delegate(args);
});
G__17674.cljs$core$IFn$_invoke$arity$variadic = G__17674__delegate;
return G__17674;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__17681(s__17682){
return (new cljs.core.LazySeq(null,(function (){
var s__17682__$1 = s__17682;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17682__$1);
if(temp__4425__auto__){
var s__17682__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17682__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__17682__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__17684 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__17683 = (0);
while(true){
if((i__17683 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__17683);
cljs.core.chunk_append.call(null,b__17684,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17685 = (i__17683 + (1));
i__17683 = G__17685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17684),sablono$core$update_arglists_$_iter__17681.call(null,cljs.core.chunk_rest.call(null,s__17682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17684),null);
}
} else {
var args = cljs.core.first.call(null,s__17682__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17681.call(null,cljs.core.rest.call(null,s__17682__$2)));
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
var len__5651__auto___17691 = arguments.length;
var i__5652__auto___17692 = (0);
while(true){
if((i__5652__auto___17692 < len__5651__auto___17691)){
args__5658__auto__.push((arguments[i__5652__auto___17692]));

var G__17693 = (i__5652__auto___17692 + (1));
i__5652__auto___17692 = G__17693;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__17687(s__17688){
return (new cljs.core.LazySeq(null,(function (){
var s__17688__$1 = s__17688;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17688__$1);
if(temp__4425__auto__){
var s__17688__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17688__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__17688__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__17690 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__17689 = (0);
while(true){
if((i__17689 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__17689);
cljs.core.chunk_append.call(null,b__17690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17694 = (i__17689 + (1));
i__17689 = G__17694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17690),sablono$core$iter__17687.call(null,cljs.core.chunk_rest.call(null,s__17688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17690),null);
}
} else {
var style = cljs.core.first.call(null,s__17688__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17687.call(null,cljs.core.rest.call(null,s__17688__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17686){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17686));
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
sablono.core.link_to17695 = (function sablono$core$link_to17695(var_args){
var args__5658__auto__ = [];
var len__5651__auto___17698 = arguments.length;
var i__5652__auto___17699 = (0);
while(true){
if((i__5652__auto___17699 < len__5651__auto___17698)){
args__5658__auto__.push((arguments[i__5652__auto___17699]));

var G__17700 = (i__5652__auto___17699 + (1));
i__5652__auto___17699 = G__17700;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to17695.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to17695.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17695.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17695.cljs$lang$applyTo = (function (seq17696){
var G__17697 = cljs.core.first.call(null,seq17696);
var seq17696__$1 = cljs.core.next.call(null,seq17696);
return sablono.core.link_to17695.cljs$core$IFn$_invoke$arity$variadic(G__17697,seq17696__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17695);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17701 = (function sablono$core$mail_to17701(var_args){
var args__5658__auto__ = [];
var len__5651__auto___17706 = arguments.length;
var i__5652__auto___17707 = (0);
while(true){
if((i__5652__auto___17707 < len__5651__auto___17706)){
args__5658__auto__.push((arguments[i__5652__auto___17707]));

var G__17708 = (i__5652__auto___17707 + (1));
i__5652__auto___17707 = G__17708;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17701.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to17701.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17704){
var vec__17705 = p__17704;
var content = cljs.core.nth.call(null,vec__17705,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17701.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17701.cljs$lang$applyTo = (function (seq17702){
var G__17703 = cljs.core.first.call(null,seq17702);
var seq17702__$1 = cljs.core.next.call(null,seq17702);
return sablono.core.mail_to17701.cljs$core$IFn$_invoke$arity$variadic(G__17703,seq17702__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17701);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17709 = (function sablono$core$unordered_list17709(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list17709_$_iter__17714(s__17715){
return (new cljs.core.LazySeq(null,(function (){
var s__17715__$1 = s__17715;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17715__$1);
if(temp__4425__auto__){
var s__17715__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17715__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__17715__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__17717 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__17716 = (0);
while(true){
if((i__17716 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__17716);
cljs.core.chunk_append.call(null,b__17717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17718 = (i__17716 + (1));
i__17716 = G__17718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17717),sablono$core$unordered_list17709_$_iter__17714.call(null,cljs.core.chunk_rest.call(null,s__17715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17717),null);
}
} else {
var x = cljs.core.first.call(null,s__17715__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17709_$_iter__17714.call(null,cljs.core.rest.call(null,s__17715__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17709);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17719 = (function sablono$core$ordered_list17719(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list17719_$_iter__17724(s__17725){
return (new cljs.core.LazySeq(null,(function (){
var s__17725__$1 = s__17725;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17725__$1);
if(temp__4425__auto__){
var s__17725__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17725__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__17725__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__17727 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__17726 = (0);
while(true){
if((i__17726 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__17726);
cljs.core.chunk_append.call(null,b__17727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17728 = (i__17726 + (1));
i__17726 = G__17728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17727),sablono$core$ordered_list17719_$_iter__17724.call(null,cljs.core.chunk_rest.call(null,s__17725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17727),null);
}
} else {
var x = cljs.core.first.call(null,s__17725__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17719_$_iter__17724.call(null,cljs.core.rest.call(null,s__17725__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17719);
/**
 * Create an image element.
 */
sablono.core.image17729 = (function sablono$core$image17729(var_args){
var args17730 = [];
var len__5651__auto___17733 = arguments.length;
var i__5652__auto___17734 = (0);
while(true){
if((i__5652__auto___17734 < len__5651__auto___17733)){
args17730.push((arguments[i__5652__auto___17734]));

var G__17735 = (i__5652__auto___17734 + (1));
i__5652__auto___17734 = G__17735;
continue;
} else {
}
break;
}

var G__17732 = args17730.length;
switch (G__17732) {
case 1:
return sablono.core.image17729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17730.length)].join('')));

}
});

sablono.core.image17729.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17729.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17729.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17729);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17737_SHARP_,p2__17738_SHARP_){
return [cljs.core.str(p1__17737_SHARP_),cljs.core.str("["),cljs.core.str(p2__17738_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17739_SHARP_,p2__17740_SHARP_){
return [cljs.core.str(p1__17739_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17740_SHARP_)].join('');
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
sablono.core.color_field17741 = (function sablono$core$color_field17741(var_args){
var args17742 = [];
var len__5651__auto___17809 = arguments.length;
var i__5652__auto___17810 = (0);
while(true){
if((i__5652__auto___17810 < len__5651__auto___17809)){
args17742.push((arguments[i__5652__auto___17810]));

var G__17811 = (i__5652__auto___17810 + (1));
i__5652__auto___17810 = G__17811;
continue;
} else {
}
break;
}

var G__17744 = args17742.length;
switch (G__17744) {
case 1:
return sablono.core.color_field17741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17742.length)].join('')));

}
});

sablono.core.color_field17741.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.color_field17741.call(null,name__6198__auto__,null);
});

sablono.core.color_field17741.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.color_field17741.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17741);

/**
 * Creates a date input field.
 */
sablono.core.date_field17745 = (function sablono$core$date_field17745(var_args){
var args17746 = [];
var len__5651__auto___17813 = arguments.length;
var i__5652__auto___17814 = (0);
while(true){
if((i__5652__auto___17814 < len__5651__auto___17813)){
args17746.push((arguments[i__5652__auto___17814]));

var G__17815 = (i__5652__auto___17814 + (1));
i__5652__auto___17814 = G__17815;
continue;
} else {
}
break;
}

var G__17748 = args17746.length;
switch (G__17748) {
case 1:
return sablono.core.date_field17745.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17745.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17746.length)].join('')));

}
});

sablono.core.date_field17745.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.date_field17745.call(null,name__6198__auto__,null);
});

sablono.core.date_field17745.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.date_field17745.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17745);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17749 = (function sablono$core$datetime_field17749(var_args){
var args17750 = [];
var len__5651__auto___17817 = arguments.length;
var i__5652__auto___17818 = (0);
while(true){
if((i__5652__auto___17818 < len__5651__auto___17817)){
args17750.push((arguments[i__5652__auto___17818]));

var G__17819 = (i__5652__auto___17818 + (1));
i__5652__auto___17818 = G__17819;
continue;
} else {
}
break;
}

var G__17752 = args17750.length;
switch (G__17752) {
case 1:
return sablono.core.datetime_field17749.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17750.length)].join('')));

}
});

sablono.core.datetime_field17749.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_field17749.call(null,name__6198__auto__,null);
});

sablono.core.datetime_field17749.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_field17749.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17749);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17753 = (function sablono$core$datetime_local_field17753(var_args){
var args17754 = [];
var len__5651__auto___17821 = arguments.length;
var i__5652__auto___17822 = (0);
while(true){
if((i__5652__auto___17822 < len__5651__auto___17821)){
args17754.push((arguments[i__5652__auto___17822]));

var G__17823 = (i__5652__auto___17822 + (1));
i__5652__auto___17822 = G__17823;
continue;
} else {
}
break;
}

var G__17756 = args17754.length;
switch (G__17756) {
case 1:
return sablono.core.datetime_local_field17753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17754.length)].join('')));

}
});

sablono.core.datetime_local_field17753.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_local_field17753.call(null,name__6198__auto__,null);
});

sablono.core.datetime_local_field17753.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_local_field17753.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17753);

/**
 * Creates a email input field.
 */
sablono.core.email_field17757 = (function sablono$core$email_field17757(var_args){
var args17758 = [];
var len__5651__auto___17825 = arguments.length;
var i__5652__auto___17826 = (0);
while(true){
if((i__5652__auto___17826 < len__5651__auto___17825)){
args17758.push((arguments[i__5652__auto___17826]));

var G__17827 = (i__5652__auto___17826 + (1));
i__5652__auto___17826 = G__17827;
continue;
} else {
}
break;
}

var G__17760 = args17758.length;
switch (G__17760) {
case 1:
return sablono.core.email_field17757.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17758.length)].join('')));

}
});

sablono.core.email_field17757.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.email_field17757.call(null,name__6198__auto__,null);
});

sablono.core.email_field17757.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.email_field17757.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17757);

/**
 * Creates a file input field.
 */
sablono.core.file_field17761 = (function sablono$core$file_field17761(var_args){
var args17762 = [];
var len__5651__auto___17829 = arguments.length;
var i__5652__auto___17830 = (0);
while(true){
if((i__5652__auto___17830 < len__5651__auto___17829)){
args17762.push((arguments[i__5652__auto___17830]));

var G__17831 = (i__5652__auto___17830 + (1));
i__5652__auto___17830 = G__17831;
continue;
} else {
}
break;
}

var G__17764 = args17762.length;
switch (G__17764) {
case 1:
return sablono.core.file_field17761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17762.length)].join('')));

}
});

sablono.core.file_field17761.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.file_field17761.call(null,name__6198__auto__,null);
});

sablono.core.file_field17761.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.file_field17761.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17761);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17765 = (function sablono$core$hidden_field17765(var_args){
var args17766 = [];
var len__5651__auto___17833 = arguments.length;
var i__5652__auto___17834 = (0);
while(true){
if((i__5652__auto___17834 < len__5651__auto___17833)){
args17766.push((arguments[i__5652__auto___17834]));

var G__17835 = (i__5652__auto___17834 + (1));
i__5652__auto___17834 = G__17835;
continue;
} else {
}
break;
}

var G__17768 = args17766.length;
switch (G__17768) {
case 1:
return sablono.core.hidden_field17765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17766.length)].join('')));

}
});

sablono.core.hidden_field17765.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.hidden_field17765.call(null,name__6198__auto__,null);
});

sablono.core.hidden_field17765.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.hidden_field17765.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17765);

/**
 * Creates a month input field.
 */
sablono.core.month_field17769 = (function sablono$core$month_field17769(var_args){
var args17770 = [];
var len__5651__auto___17837 = arguments.length;
var i__5652__auto___17838 = (0);
while(true){
if((i__5652__auto___17838 < len__5651__auto___17837)){
args17770.push((arguments[i__5652__auto___17838]));

var G__17839 = (i__5652__auto___17838 + (1));
i__5652__auto___17838 = G__17839;
continue;
} else {
}
break;
}

var G__17772 = args17770.length;
switch (G__17772) {
case 1:
return sablono.core.month_field17769.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17769.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17770.length)].join('')));

}
});

sablono.core.month_field17769.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.month_field17769.call(null,name__6198__auto__,null);
});

sablono.core.month_field17769.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.month_field17769.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17769);

/**
 * Creates a number input field.
 */
sablono.core.number_field17773 = (function sablono$core$number_field17773(var_args){
var args17774 = [];
var len__5651__auto___17841 = arguments.length;
var i__5652__auto___17842 = (0);
while(true){
if((i__5652__auto___17842 < len__5651__auto___17841)){
args17774.push((arguments[i__5652__auto___17842]));

var G__17843 = (i__5652__auto___17842 + (1));
i__5652__auto___17842 = G__17843;
continue;
} else {
}
break;
}

var G__17776 = args17774.length;
switch (G__17776) {
case 1:
return sablono.core.number_field17773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17774.length)].join('')));

}
});

sablono.core.number_field17773.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.number_field17773.call(null,name__6198__auto__,null);
});

sablono.core.number_field17773.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.number_field17773.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17773);

/**
 * Creates a password input field.
 */
sablono.core.password_field17777 = (function sablono$core$password_field17777(var_args){
var args17778 = [];
var len__5651__auto___17845 = arguments.length;
var i__5652__auto___17846 = (0);
while(true){
if((i__5652__auto___17846 < len__5651__auto___17845)){
args17778.push((arguments[i__5652__auto___17846]));

var G__17847 = (i__5652__auto___17846 + (1));
i__5652__auto___17846 = G__17847;
continue;
} else {
}
break;
}

var G__17780 = args17778.length;
switch (G__17780) {
case 1:
return sablono.core.password_field17777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17778.length)].join('')));

}
});

sablono.core.password_field17777.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.password_field17777.call(null,name__6198__auto__,null);
});

sablono.core.password_field17777.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.password_field17777.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17777);

/**
 * Creates a range input field.
 */
sablono.core.range_field17781 = (function sablono$core$range_field17781(var_args){
var args17782 = [];
var len__5651__auto___17849 = arguments.length;
var i__5652__auto___17850 = (0);
while(true){
if((i__5652__auto___17850 < len__5651__auto___17849)){
args17782.push((arguments[i__5652__auto___17850]));

var G__17851 = (i__5652__auto___17850 + (1));
i__5652__auto___17850 = G__17851;
continue;
} else {
}
break;
}

var G__17784 = args17782.length;
switch (G__17784) {
case 1:
return sablono.core.range_field17781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17782.length)].join('')));

}
});

sablono.core.range_field17781.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.range_field17781.call(null,name__6198__auto__,null);
});

sablono.core.range_field17781.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.range_field17781.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17781);

/**
 * Creates a search input field.
 */
sablono.core.search_field17785 = (function sablono$core$search_field17785(var_args){
var args17786 = [];
var len__5651__auto___17853 = arguments.length;
var i__5652__auto___17854 = (0);
while(true){
if((i__5652__auto___17854 < len__5651__auto___17853)){
args17786.push((arguments[i__5652__auto___17854]));

var G__17855 = (i__5652__auto___17854 + (1));
i__5652__auto___17854 = G__17855;
continue;
} else {
}
break;
}

var G__17788 = args17786.length;
switch (G__17788) {
case 1:
return sablono.core.search_field17785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17786.length)].join('')));

}
});

sablono.core.search_field17785.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.search_field17785.call(null,name__6198__auto__,null);
});

sablono.core.search_field17785.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.search_field17785.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17785);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17789 = (function sablono$core$tel_field17789(var_args){
var args17790 = [];
var len__5651__auto___17857 = arguments.length;
var i__5652__auto___17858 = (0);
while(true){
if((i__5652__auto___17858 < len__5651__auto___17857)){
args17790.push((arguments[i__5652__auto___17858]));

var G__17859 = (i__5652__auto___17858 + (1));
i__5652__auto___17858 = G__17859;
continue;
} else {
}
break;
}

var G__17792 = args17790.length;
switch (G__17792) {
case 1:
return sablono.core.tel_field17789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17790.length)].join('')));

}
});

sablono.core.tel_field17789.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.tel_field17789.call(null,name__6198__auto__,null);
});

sablono.core.tel_field17789.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.tel_field17789.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17789);

/**
 * Creates a text input field.
 */
sablono.core.text_field17793 = (function sablono$core$text_field17793(var_args){
var args17794 = [];
var len__5651__auto___17861 = arguments.length;
var i__5652__auto___17862 = (0);
while(true){
if((i__5652__auto___17862 < len__5651__auto___17861)){
args17794.push((arguments[i__5652__auto___17862]));

var G__17863 = (i__5652__auto___17862 + (1));
i__5652__auto___17862 = G__17863;
continue;
} else {
}
break;
}

var G__17796 = args17794.length;
switch (G__17796) {
case 1:
return sablono.core.text_field17793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17794.length)].join('')));

}
});

sablono.core.text_field17793.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.text_field17793.call(null,name__6198__auto__,null);
});

sablono.core.text_field17793.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.text_field17793.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17793);

/**
 * Creates a time input field.
 */
sablono.core.time_field17797 = (function sablono$core$time_field17797(var_args){
var args17798 = [];
var len__5651__auto___17865 = arguments.length;
var i__5652__auto___17866 = (0);
while(true){
if((i__5652__auto___17866 < len__5651__auto___17865)){
args17798.push((arguments[i__5652__auto___17866]));

var G__17867 = (i__5652__auto___17866 + (1));
i__5652__auto___17866 = G__17867;
continue;
} else {
}
break;
}

var G__17800 = args17798.length;
switch (G__17800) {
case 1:
return sablono.core.time_field17797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17798.length)].join('')));

}
});

sablono.core.time_field17797.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.time_field17797.call(null,name__6198__auto__,null);
});

sablono.core.time_field17797.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.time_field17797.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17797);

/**
 * Creates a url input field.
 */
sablono.core.url_field17801 = (function sablono$core$url_field17801(var_args){
var args17802 = [];
var len__5651__auto___17869 = arguments.length;
var i__5652__auto___17870 = (0);
while(true){
if((i__5652__auto___17870 < len__5651__auto___17869)){
args17802.push((arguments[i__5652__auto___17870]));

var G__17871 = (i__5652__auto___17870 + (1));
i__5652__auto___17870 = G__17871;
continue;
} else {
}
break;
}

var G__17804 = args17802.length;
switch (G__17804) {
case 1:
return sablono.core.url_field17801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17802.length)].join('')));

}
});

sablono.core.url_field17801.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.url_field17801.call(null,name__6198__auto__,null);
});

sablono.core.url_field17801.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.url_field17801.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17801);

/**
 * Creates a week input field.
 */
sablono.core.week_field17805 = (function sablono$core$week_field17805(var_args){
var args17806 = [];
var len__5651__auto___17873 = arguments.length;
var i__5652__auto___17874 = (0);
while(true){
if((i__5652__auto___17874 < len__5651__auto___17873)){
args17806.push((arguments[i__5652__auto___17874]));

var G__17875 = (i__5652__auto___17874 + (1));
i__5652__auto___17874 = G__17875;
continue;
} else {
}
break;
}

var G__17808 = args17806.length;
switch (G__17808) {
case 1:
return sablono.core.week_field17805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17806.length)].join('')));

}
});

sablono.core.week_field17805.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.week_field17805.call(null,name__6198__auto__,null);
});

sablono.core.week_field17805.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.week_field17805.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17805);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17877 = (function sablono$core$check_box17877(var_args){
var args17878 = [];
var len__5651__auto___17881 = arguments.length;
var i__5652__auto___17882 = (0);
while(true){
if((i__5652__auto___17882 < len__5651__auto___17881)){
args17878.push((arguments[i__5652__auto___17882]));

var G__17883 = (i__5652__auto___17882 + (1));
i__5652__auto___17882 = G__17883;
continue;
} else {
}
break;
}

var G__17880 = args17878.length;
switch (G__17880) {
case 1:
return sablono.core.check_box17877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17877.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17878.length)].join('')));

}
});

sablono.core.check_box17877.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17877.call(null,name,null);
});

sablono.core.check_box17877.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17877.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17877.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17877.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17877);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17885 = (function sablono$core$radio_button17885(var_args){
var args17886 = [];
var len__5651__auto___17889 = arguments.length;
var i__5652__auto___17890 = (0);
while(true){
if((i__5652__auto___17890 < len__5651__auto___17889)){
args17886.push((arguments[i__5652__auto___17890]));

var G__17891 = (i__5652__auto___17890 + (1));
i__5652__auto___17890 = G__17891;
continue;
} else {
}
break;
}

var G__17888 = args17886.length;
switch (G__17888) {
case 1:
return sablono.core.radio_button17885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17885.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17886.length)].join('')));

}
});

sablono.core.radio_button17885.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17885.call(null,group,null);
});

sablono.core.radio_button17885.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17885.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17885.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17885.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17885);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17893 = (function sablono$core$select_options17893(coll){
var iter__5365__auto__ = (function sablono$core$select_options17893_$_iter__17902(s__17903){
return (new cljs.core.LazySeq(null,(function (){
var s__17903__$1 = s__17903;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17903__$1);
if(temp__4425__auto__){
var s__17903__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17903__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__17903__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__17905 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__17904 = (0);
while(true){
if((i__17904 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__17904);
cljs.core.chunk_append.call(null,b__17905,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17908 = x;
var text = cljs.core.nth.call(null,vec__17908,(0),null);
var val = cljs.core.nth.call(null,vec__17908,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17908,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17893.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17910 = (i__17904 + (1));
i__17904 = G__17910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17905),sablono$core$select_options17893_$_iter__17902.call(null,cljs.core.chunk_rest.call(null,s__17903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17905),null);
}
} else {
var x = cljs.core.first.call(null,s__17903__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17909 = x;
var text = cljs.core.nth.call(null,vec__17909,(0),null);
var val = cljs.core.nth.call(null,vec__17909,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17909,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17893.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17893_$_iter__17902.call(null,cljs.core.rest.call(null,s__17903__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17893);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17911 = (function sablono$core$drop_down17911(var_args){
var args17912 = [];
var len__5651__auto___17915 = arguments.length;
var i__5652__auto___17916 = (0);
while(true){
if((i__5652__auto___17916 < len__5651__auto___17915)){
args17912.push((arguments[i__5652__auto___17916]));

var G__17917 = (i__5652__auto___17916 + (1));
i__5652__auto___17916 = G__17917;
continue;
} else {
}
break;
}

var G__17914 = args17912.length;
switch (G__17914) {
case 2:
return sablono.core.drop_down17911.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17911.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17912.length)].join('')));

}
});

sablono.core.drop_down17911.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17911.call(null,name,options,null);
});

sablono.core.drop_down17911.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17911.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17911);
/**
 * Creates a text area element.
 */
sablono.core.text_area17919 = (function sablono$core$text_area17919(var_args){
var args17920 = [];
var len__5651__auto___17923 = arguments.length;
var i__5652__auto___17924 = (0);
while(true){
if((i__5652__auto___17924 < len__5651__auto___17923)){
args17920.push((arguments[i__5652__auto___17924]));

var G__17925 = (i__5652__auto___17924 + (1));
i__5652__auto___17924 = G__17925;
continue;
} else {
}
break;
}

var G__17922 = args17920.length;
switch (G__17922) {
case 1:
return sablono.core.text_area17919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17920.length)].join('')));

}
});

sablono.core.text_area17919.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17919.call(null,name,null);
});

sablono.core.text_area17919.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17919.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17919);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17927 = (function sablono$core$label17927(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17927);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17928 = (function sablono$core$submit_button17928(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17928);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17929 = (function sablono$core$reset_button17929(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17929);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17930 = (function sablono$core$form_to17930(var_args){
var args__5658__auto__ = [];
var len__5651__auto___17935 = arguments.length;
var i__5652__auto___17936 = (0);
while(true){
if((i__5652__auto___17936 < len__5651__auto___17935)){
args__5658__auto__.push((arguments[i__5652__auto___17936]));

var G__17937 = (i__5652__auto___17936 + (1));
i__5652__auto___17936 = G__17937;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to17930.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to17930.cljs$core$IFn$_invoke$arity$variadic = (function (p__17933,body){
var vec__17934 = p__17933;
var method = cljs.core.nth.call(null,vec__17934,(0),null);
var action = cljs.core.nth.call(null,vec__17934,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17930.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17930.cljs$lang$applyTo = (function (seq17931){
var G__17932 = cljs.core.first.call(null,seq17931);
var seq17931__$1 = cljs.core.next.call(null,seq17931);
return sablono.core.form_to17930.cljs$core$IFn$_invoke$arity$variadic(G__17932,seq17931__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17930);

//# sourceMappingURL=core.js.map