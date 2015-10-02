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
var G__24817__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24816 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24816,(0),null);
var body = cljs.core.nthnext.call(null,vec__24816,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24818__i = 0, G__24818__a = new Array(arguments.length -  0);
while (G__24818__i < G__24818__a.length) {G__24818__a[G__24818__i] = arguments[G__24818__i + 0]; ++G__24818__i;}
  args = new cljs.core.IndexedSeq(G__24818__a,0);
} 
return G__24817__delegate.call(this,args);};
G__24817.cljs$lang$maxFixedArity = 0;
G__24817.cljs$lang$applyTo = (function (arglist__24819){
var args = cljs.core.seq(arglist__24819);
return G__24817__delegate(args);
});
G__24817.cljs$core$IFn$_invoke$arity$variadic = G__24817__delegate;
return G__24817;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__24824(s__24825){
return (new cljs.core.LazySeq(null,(function (){
var s__24825__$1 = s__24825;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24825__$1);
if(temp__4425__auto__){
var s__24825__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24825__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24825__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24827 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24826 = (0);
while(true){
if((i__24826 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__24826);
cljs.core.chunk_append.call(null,b__24827,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24828 = (i__24826 + (1));
i__24826 = G__24828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24827),sablono$core$update_arglists_$_iter__24824.call(null,cljs.core.chunk_rest.call(null,s__24825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24827),null);
}
} else {
var args = cljs.core.first.call(null,s__24825__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24824.call(null,cljs.core.rest.call(null,s__24825__$2)));
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
var len__5651__auto___24834 = arguments.length;
var i__5652__auto___24835 = (0);
while(true){
if((i__5652__auto___24835 < len__5651__auto___24834)){
args__5658__auto__.push((arguments[i__5652__auto___24835]));

var G__24836 = (i__5652__auto___24835 + (1));
i__5652__auto___24835 = G__24836;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__24830(s__24831){
return (new cljs.core.LazySeq(null,(function (){
var s__24831__$1 = s__24831;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24831__$1);
if(temp__4425__auto__){
var s__24831__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24831__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24831__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24833 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24832 = (0);
while(true){
if((i__24832 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__24832);
cljs.core.chunk_append.call(null,b__24833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24837 = (i__24832 + (1));
i__24832 = G__24837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24833),sablono$core$iter__24830.call(null,cljs.core.chunk_rest.call(null,s__24831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24833),null);
}
} else {
var style = cljs.core.first.call(null,s__24831__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24830.call(null,cljs.core.rest.call(null,s__24831__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq24829){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24829));
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
sablono.core.link_to24838 = (function sablono$core$link_to24838(var_args){
var args__5658__auto__ = [];
var len__5651__auto___24841 = arguments.length;
var i__5652__auto___24842 = (0);
while(true){
if((i__5652__auto___24842 < len__5651__auto___24841)){
args__5658__auto__.push((arguments[i__5652__auto___24842]));

var G__24843 = (i__5652__auto___24842 + (1));
i__5652__auto___24842 = G__24843;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to24838.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to24838.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24838.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24838.cljs$lang$applyTo = (function (seq24839){
var G__24840 = cljs.core.first.call(null,seq24839);
var seq24839__$1 = cljs.core.next.call(null,seq24839);
return sablono.core.link_to24838.cljs$core$IFn$_invoke$arity$variadic(G__24840,seq24839__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24838);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24844 = (function sablono$core$mail_to24844(var_args){
var args__5658__auto__ = [];
var len__5651__auto___24849 = arguments.length;
var i__5652__auto___24850 = (0);
while(true){
if((i__5652__auto___24850 < len__5651__auto___24849)){
args__5658__auto__.push((arguments[i__5652__auto___24850]));

var G__24851 = (i__5652__auto___24850 + (1));
i__5652__auto___24850 = G__24851;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24844.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to24844.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24847){
var vec__24848 = p__24847;
var content = cljs.core.nth.call(null,vec__24848,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24844.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24844.cljs$lang$applyTo = (function (seq24845){
var G__24846 = cljs.core.first.call(null,seq24845);
var seq24845__$1 = cljs.core.next.call(null,seq24845);
return sablono.core.mail_to24844.cljs$core$IFn$_invoke$arity$variadic(G__24846,seq24845__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24844);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24852 = (function sablono$core$unordered_list24852(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list24852_$_iter__24857(s__24858){
return (new cljs.core.LazySeq(null,(function (){
var s__24858__$1 = s__24858;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24858__$1);
if(temp__4425__auto__){
var s__24858__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24858__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24858__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24860 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24859 = (0);
while(true){
if((i__24859 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__24859);
cljs.core.chunk_append.call(null,b__24860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24861 = (i__24859 + (1));
i__24859 = G__24861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24860),sablono$core$unordered_list24852_$_iter__24857.call(null,cljs.core.chunk_rest.call(null,s__24858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24860),null);
}
} else {
var x = cljs.core.first.call(null,s__24858__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24852_$_iter__24857.call(null,cljs.core.rest.call(null,s__24858__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24852);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24862 = (function sablono$core$ordered_list24862(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list24862_$_iter__24867(s__24868){
return (new cljs.core.LazySeq(null,(function (){
var s__24868__$1 = s__24868;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24868__$1);
if(temp__4425__auto__){
var s__24868__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24868__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24868__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24870 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24869 = (0);
while(true){
if((i__24869 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__24869);
cljs.core.chunk_append.call(null,b__24870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24871 = (i__24869 + (1));
i__24869 = G__24871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24870),sablono$core$ordered_list24862_$_iter__24867.call(null,cljs.core.chunk_rest.call(null,s__24868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24870),null);
}
} else {
var x = cljs.core.first.call(null,s__24868__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24862_$_iter__24867.call(null,cljs.core.rest.call(null,s__24868__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24862);
/**
 * Create an image element.
 */
sablono.core.image24872 = (function sablono$core$image24872(var_args){
var args24873 = [];
var len__5651__auto___24876 = arguments.length;
var i__5652__auto___24877 = (0);
while(true){
if((i__5652__auto___24877 < len__5651__auto___24876)){
args24873.push((arguments[i__5652__auto___24877]));

var G__24878 = (i__5652__auto___24877 + (1));
i__5652__auto___24877 = G__24878;
continue;
} else {
}
break;
}

var G__24875 = args24873.length;
switch (G__24875) {
case 1:
return sablono.core.image24872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24873.length)].join('')));

}
});

sablono.core.image24872.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24872.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24872.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24872);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24880_SHARP_,p2__24881_SHARP_){
return [cljs.core.str(p1__24880_SHARP_),cljs.core.str("["),cljs.core.str(p2__24881_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24882_SHARP_,p2__24883_SHARP_){
return [cljs.core.str(p1__24882_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24883_SHARP_)].join('');
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
sablono.core.color_field24884 = (function sablono$core$color_field24884(var_args){
var args24885 = [];
var len__5651__auto___24952 = arguments.length;
var i__5652__auto___24953 = (0);
while(true){
if((i__5652__auto___24953 < len__5651__auto___24952)){
args24885.push((arguments[i__5652__auto___24953]));

var G__24954 = (i__5652__auto___24953 + (1));
i__5652__auto___24953 = G__24954;
continue;
} else {
}
break;
}

var G__24887 = args24885.length;
switch (G__24887) {
case 1:
return sablono.core.color_field24884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24885.length)].join('')));

}
});

sablono.core.color_field24884.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.color_field24884.call(null,name__6325__auto__,null);
});

sablono.core.color_field24884.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.color_field24884.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24884);

/**
 * Creates a date input field.
 */
sablono.core.date_field24888 = (function sablono$core$date_field24888(var_args){
var args24889 = [];
var len__5651__auto___24956 = arguments.length;
var i__5652__auto___24957 = (0);
while(true){
if((i__5652__auto___24957 < len__5651__auto___24956)){
args24889.push((arguments[i__5652__auto___24957]));

var G__24958 = (i__5652__auto___24957 + (1));
i__5652__auto___24957 = G__24958;
continue;
} else {
}
break;
}

var G__24891 = args24889.length;
switch (G__24891) {
case 1:
return sablono.core.date_field24888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24889.length)].join('')));

}
});

sablono.core.date_field24888.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.date_field24888.call(null,name__6325__auto__,null);
});

sablono.core.date_field24888.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.date_field24888.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24888);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24892 = (function sablono$core$datetime_field24892(var_args){
var args24893 = [];
var len__5651__auto___24960 = arguments.length;
var i__5652__auto___24961 = (0);
while(true){
if((i__5652__auto___24961 < len__5651__auto___24960)){
args24893.push((arguments[i__5652__auto___24961]));

var G__24962 = (i__5652__auto___24961 + (1));
i__5652__auto___24961 = G__24962;
continue;
} else {
}
break;
}

var G__24895 = args24893.length;
switch (G__24895) {
case 1:
return sablono.core.datetime_field24892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24893.length)].join('')));

}
});

sablono.core.datetime_field24892.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_field24892.call(null,name__6325__auto__,null);
});

sablono.core.datetime_field24892.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_field24892.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24892);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24896 = (function sablono$core$datetime_local_field24896(var_args){
var args24897 = [];
var len__5651__auto___24964 = arguments.length;
var i__5652__auto___24965 = (0);
while(true){
if((i__5652__auto___24965 < len__5651__auto___24964)){
args24897.push((arguments[i__5652__auto___24965]));

var G__24966 = (i__5652__auto___24965 + (1));
i__5652__auto___24965 = G__24966;
continue;
} else {
}
break;
}

var G__24899 = args24897.length;
switch (G__24899) {
case 1:
return sablono.core.datetime_local_field24896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24897.length)].join('')));

}
});

sablono.core.datetime_local_field24896.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_local_field24896.call(null,name__6325__auto__,null);
});

sablono.core.datetime_local_field24896.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_local_field24896.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24896);

/**
 * Creates a email input field.
 */
sablono.core.email_field24900 = (function sablono$core$email_field24900(var_args){
var args24901 = [];
var len__5651__auto___24968 = arguments.length;
var i__5652__auto___24969 = (0);
while(true){
if((i__5652__auto___24969 < len__5651__auto___24968)){
args24901.push((arguments[i__5652__auto___24969]));

var G__24970 = (i__5652__auto___24969 + (1));
i__5652__auto___24969 = G__24970;
continue;
} else {
}
break;
}

var G__24903 = args24901.length;
switch (G__24903) {
case 1:
return sablono.core.email_field24900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24901.length)].join('')));

}
});

sablono.core.email_field24900.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.email_field24900.call(null,name__6325__auto__,null);
});

sablono.core.email_field24900.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.email_field24900.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24900);

/**
 * Creates a file input field.
 */
sablono.core.file_field24904 = (function sablono$core$file_field24904(var_args){
var args24905 = [];
var len__5651__auto___24972 = arguments.length;
var i__5652__auto___24973 = (0);
while(true){
if((i__5652__auto___24973 < len__5651__auto___24972)){
args24905.push((arguments[i__5652__auto___24973]));

var G__24974 = (i__5652__auto___24973 + (1));
i__5652__auto___24973 = G__24974;
continue;
} else {
}
break;
}

var G__24907 = args24905.length;
switch (G__24907) {
case 1:
return sablono.core.file_field24904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24905.length)].join('')));

}
});

sablono.core.file_field24904.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.file_field24904.call(null,name__6325__auto__,null);
});

sablono.core.file_field24904.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.file_field24904.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24904);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24908 = (function sablono$core$hidden_field24908(var_args){
var args24909 = [];
var len__5651__auto___24976 = arguments.length;
var i__5652__auto___24977 = (0);
while(true){
if((i__5652__auto___24977 < len__5651__auto___24976)){
args24909.push((arguments[i__5652__auto___24977]));

var G__24978 = (i__5652__auto___24977 + (1));
i__5652__auto___24977 = G__24978;
continue;
} else {
}
break;
}

var G__24911 = args24909.length;
switch (G__24911) {
case 1:
return sablono.core.hidden_field24908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24909.length)].join('')));

}
});

sablono.core.hidden_field24908.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.hidden_field24908.call(null,name__6325__auto__,null);
});

sablono.core.hidden_field24908.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.hidden_field24908.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24908);

/**
 * Creates a month input field.
 */
sablono.core.month_field24912 = (function sablono$core$month_field24912(var_args){
var args24913 = [];
var len__5651__auto___24980 = arguments.length;
var i__5652__auto___24981 = (0);
while(true){
if((i__5652__auto___24981 < len__5651__auto___24980)){
args24913.push((arguments[i__5652__auto___24981]));

var G__24982 = (i__5652__auto___24981 + (1));
i__5652__auto___24981 = G__24982;
continue;
} else {
}
break;
}

var G__24915 = args24913.length;
switch (G__24915) {
case 1:
return sablono.core.month_field24912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24913.length)].join('')));

}
});

sablono.core.month_field24912.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.month_field24912.call(null,name__6325__auto__,null);
});

sablono.core.month_field24912.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.month_field24912.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24912);

/**
 * Creates a number input field.
 */
sablono.core.number_field24916 = (function sablono$core$number_field24916(var_args){
var args24917 = [];
var len__5651__auto___24984 = arguments.length;
var i__5652__auto___24985 = (0);
while(true){
if((i__5652__auto___24985 < len__5651__auto___24984)){
args24917.push((arguments[i__5652__auto___24985]));

var G__24986 = (i__5652__auto___24985 + (1));
i__5652__auto___24985 = G__24986;
continue;
} else {
}
break;
}

var G__24919 = args24917.length;
switch (G__24919) {
case 1:
return sablono.core.number_field24916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24917.length)].join('')));

}
});

sablono.core.number_field24916.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.number_field24916.call(null,name__6325__auto__,null);
});

sablono.core.number_field24916.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.number_field24916.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24916);

/**
 * Creates a password input field.
 */
sablono.core.password_field24920 = (function sablono$core$password_field24920(var_args){
var args24921 = [];
var len__5651__auto___24988 = arguments.length;
var i__5652__auto___24989 = (0);
while(true){
if((i__5652__auto___24989 < len__5651__auto___24988)){
args24921.push((arguments[i__5652__auto___24989]));

var G__24990 = (i__5652__auto___24989 + (1));
i__5652__auto___24989 = G__24990;
continue;
} else {
}
break;
}

var G__24923 = args24921.length;
switch (G__24923) {
case 1:
return sablono.core.password_field24920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24921.length)].join('')));

}
});

sablono.core.password_field24920.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.password_field24920.call(null,name__6325__auto__,null);
});

sablono.core.password_field24920.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.password_field24920.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24920);

/**
 * Creates a range input field.
 */
sablono.core.range_field24924 = (function sablono$core$range_field24924(var_args){
var args24925 = [];
var len__5651__auto___24992 = arguments.length;
var i__5652__auto___24993 = (0);
while(true){
if((i__5652__auto___24993 < len__5651__auto___24992)){
args24925.push((arguments[i__5652__auto___24993]));

var G__24994 = (i__5652__auto___24993 + (1));
i__5652__auto___24993 = G__24994;
continue;
} else {
}
break;
}

var G__24927 = args24925.length;
switch (G__24927) {
case 1:
return sablono.core.range_field24924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24925.length)].join('')));

}
});

sablono.core.range_field24924.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.range_field24924.call(null,name__6325__auto__,null);
});

sablono.core.range_field24924.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.range_field24924.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24924);

/**
 * Creates a search input field.
 */
sablono.core.search_field24928 = (function sablono$core$search_field24928(var_args){
var args24929 = [];
var len__5651__auto___24996 = arguments.length;
var i__5652__auto___24997 = (0);
while(true){
if((i__5652__auto___24997 < len__5651__auto___24996)){
args24929.push((arguments[i__5652__auto___24997]));

var G__24998 = (i__5652__auto___24997 + (1));
i__5652__auto___24997 = G__24998;
continue;
} else {
}
break;
}

var G__24931 = args24929.length;
switch (G__24931) {
case 1:
return sablono.core.search_field24928.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24928.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24929.length)].join('')));

}
});

sablono.core.search_field24928.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.search_field24928.call(null,name__6325__auto__,null);
});

sablono.core.search_field24928.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.search_field24928.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24928);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24932 = (function sablono$core$tel_field24932(var_args){
var args24933 = [];
var len__5651__auto___25000 = arguments.length;
var i__5652__auto___25001 = (0);
while(true){
if((i__5652__auto___25001 < len__5651__auto___25000)){
args24933.push((arguments[i__5652__auto___25001]));

var G__25002 = (i__5652__auto___25001 + (1));
i__5652__auto___25001 = G__25002;
continue;
} else {
}
break;
}

var G__24935 = args24933.length;
switch (G__24935) {
case 1:
return sablono.core.tel_field24932.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24932.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24933.length)].join('')));

}
});

sablono.core.tel_field24932.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.tel_field24932.call(null,name__6325__auto__,null);
});

sablono.core.tel_field24932.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.tel_field24932.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24932);

/**
 * Creates a text input field.
 */
sablono.core.text_field24936 = (function sablono$core$text_field24936(var_args){
var args24937 = [];
var len__5651__auto___25004 = arguments.length;
var i__5652__auto___25005 = (0);
while(true){
if((i__5652__auto___25005 < len__5651__auto___25004)){
args24937.push((arguments[i__5652__auto___25005]));

var G__25006 = (i__5652__auto___25005 + (1));
i__5652__auto___25005 = G__25006;
continue;
} else {
}
break;
}

var G__24939 = args24937.length;
switch (G__24939) {
case 1:
return sablono.core.text_field24936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24937.length)].join('')));

}
});

sablono.core.text_field24936.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.text_field24936.call(null,name__6325__auto__,null);
});

sablono.core.text_field24936.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.text_field24936.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24936);

/**
 * Creates a time input field.
 */
sablono.core.time_field24940 = (function sablono$core$time_field24940(var_args){
var args24941 = [];
var len__5651__auto___25008 = arguments.length;
var i__5652__auto___25009 = (0);
while(true){
if((i__5652__auto___25009 < len__5651__auto___25008)){
args24941.push((arguments[i__5652__auto___25009]));

var G__25010 = (i__5652__auto___25009 + (1));
i__5652__auto___25009 = G__25010;
continue;
} else {
}
break;
}

var G__24943 = args24941.length;
switch (G__24943) {
case 1:
return sablono.core.time_field24940.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24941.length)].join('')));

}
});

sablono.core.time_field24940.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.time_field24940.call(null,name__6325__auto__,null);
});

sablono.core.time_field24940.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.time_field24940.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24940);

/**
 * Creates a url input field.
 */
sablono.core.url_field24944 = (function sablono$core$url_field24944(var_args){
var args24945 = [];
var len__5651__auto___25012 = arguments.length;
var i__5652__auto___25013 = (0);
while(true){
if((i__5652__auto___25013 < len__5651__auto___25012)){
args24945.push((arguments[i__5652__auto___25013]));

var G__25014 = (i__5652__auto___25013 + (1));
i__5652__auto___25013 = G__25014;
continue;
} else {
}
break;
}

var G__24947 = args24945.length;
switch (G__24947) {
case 1:
return sablono.core.url_field24944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24945.length)].join('')));

}
});

sablono.core.url_field24944.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.url_field24944.call(null,name__6325__auto__,null);
});

sablono.core.url_field24944.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.url_field24944.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24944);

/**
 * Creates a week input field.
 */
sablono.core.week_field24948 = (function sablono$core$week_field24948(var_args){
var args24949 = [];
var len__5651__auto___25016 = arguments.length;
var i__5652__auto___25017 = (0);
while(true){
if((i__5652__auto___25017 < len__5651__auto___25016)){
args24949.push((arguments[i__5652__auto___25017]));

var G__25018 = (i__5652__auto___25017 + (1));
i__5652__auto___25017 = G__25018;
continue;
} else {
}
break;
}

var G__24951 = args24949.length;
switch (G__24951) {
case 1:
return sablono.core.week_field24948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24949.length)].join('')));

}
});

sablono.core.week_field24948.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.week_field24948.call(null,name__6325__auto__,null);
});

sablono.core.week_field24948.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.week_field24948.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24948);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25020 = (function sablono$core$check_box25020(var_args){
var args25021 = [];
var len__5651__auto___25024 = arguments.length;
var i__5652__auto___25025 = (0);
while(true){
if((i__5652__auto___25025 < len__5651__auto___25024)){
args25021.push((arguments[i__5652__auto___25025]));

var G__25026 = (i__5652__auto___25025 + (1));
i__5652__auto___25025 = G__25026;
continue;
} else {
}
break;
}

var G__25023 = args25021.length;
switch (G__25023) {
case 1:
return sablono.core.check_box25020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25020.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25021.length)].join('')));

}
});

sablono.core.check_box25020.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25020.call(null,name,null);
});

sablono.core.check_box25020.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25020.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25020.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25020.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25020);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25028 = (function sablono$core$radio_button25028(var_args){
var args25029 = [];
var len__5651__auto___25032 = arguments.length;
var i__5652__auto___25033 = (0);
while(true){
if((i__5652__auto___25033 < len__5651__auto___25032)){
args25029.push((arguments[i__5652__auto___25033]));

var G__25034 = (i__5652__auto___25033 + (1));
i__5652__auto___25033 = G__25034;
continue;
} else {
}
break;
}

var G__25031 = args25029.length;
switch (G__25031) {
case 1:
return sablono.core.radio_button25028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25028.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25029.length)].join('')));

}
});

sablono.core.radio_button25028.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25028.call(null,group,null);
});

sablono.core.radio_button25028.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25028.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25028.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25028.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25028);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25036 = (function sablono$core$select_options25036(var_args){
var args25037 = [];
var len__5651__auto___25048 = arguments.length;
var i__5652__auto___25049 = (0);
while(true){
if((i__5652__auto___25049 < len__5651__auto___25048)){
args25037.push((arguments[i__5652__auto___25049]));

var G__25050 = (i__5652__auto___25049 + (1));
i__5652__auto___25049 = G__25050;
continue;
} else {
}
break;
}

var G__25039 = args25037.length;
switch (G__25039) {
case 1:
return sablono.core.select_options25036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options25036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25037.length)].join('')));

}
});

sablono.core.select_options25036.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options25036.call(null,coll,null);
});

sablono.core.select_options25036.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5365__auto__ = (function sablono$core$iter__25040(s__25041){
return (new cljs.core.LazySeq(null,(function (){
var s__25041__$1 = s__25041;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25041__$1);
if(temp__4425__auto__){
var s__25041__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25041__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__25041__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__25043 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__25042 = (0);
while(true){
if((i__25042 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__25042);
cljs.core.chunk_append.call(null,b__25043,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25046 = x;
var text = cljs.core.nth.call(null,vec__25046,(0),null);
var val = cljs.core.nth.call(null,vec__25046,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25046,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25036.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__25052 = (i__25042 + (1));
i__25042 = G__25052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25043),sablono$core$iter__25040.call(null,cljs.core.chunk_rest.call(null,s__25041__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25043),null);
}
} else {
var x = cljs.core.first.call(null,s__25041__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25047 = x;
var text = cljs.core.nth.call(null,vec__25047,(0),null);
var val = cljs.core.nth.call(null,vec__25047,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25047,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25036.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__25040.call(null,cljs.core.rest.call(null,s__25041__$2)));
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

sablono.core.select_options25036.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25036);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25053 = (function sablono$core$drop_down25053(var_args){
var args25054 = [];
var len__5651__auto___25057 = arguments.length;
var i__5652__auto___25058 = (0);
while(true){
if((i__5652__auto___25058 < len__5651__auto___25057)){
args25054.push((arguments[i__5652__auto___25058]));

var G__25059 = (i__5652__auto___25058 + (1));
i__5652__auto___25058 = G__25059;
continue;
} else {
}
break;
}

var G__25056 = args25054.length;
switch (G__25056) {
case 2:
return sablono.core.drop_down25053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25053.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25054.length)].join('')));

}
});

sablono.core.drop_down25053.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25053.call(null,name,options,null);
});

sablono.core.drop_down25053.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25053.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25053);
/**
 * Creates a text area element.
 */
sablono.core.text_area25061 = (function sablono$core$text_area25061(var_args){
var args25062 = [];
var len__5651__auto___25065 = arguments.length;
var i__5652__auto___25066 = (0);
while(true){
if((i__5652__auto___25066 < len__5651__auto___25065)){
args25062.push((arguments[i__5652__auto___25066]));

var G__25067 = (i__5652__auto___25066 + (1));
i__5652__auto___25066 = G__25067;
continue;
} else {
}
break;
}

var G__25064 = args25062.length;
switch (G__25064) {
case 1:
return sablono.core.text_area25061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25062.length)].join('')));

}
});

sablono.core.text_area25061.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25061.call(null,name,null);
});

sablono.core.text_area25061.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area25061.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25061);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25069 = (function sablono$core$label25069(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25069);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25070 = (function sablono$core$submit_button25070(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25070);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25071 = (function sablono$core$reset_button25071(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25071);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25072 = (function sablono$core$form_to25072(var_args){
var args__5658__auto__ = [];
var len__5651__auto___25077 = arguments.length;
var i__5652__auto___25078 = (0);
while(true){
if((i__5652__auto___25078 < len__5651__auto___25077)){
args__5658__auto__.push((arguments[i__5652__auto___25078]));

var G__25079 = (i__5652__auto___25078 + (1));
i__5652__auto___25078 = G__25079;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to25072.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to25072.cljs$core$IFn$_invoke$arity$variadic = (function (p__25075,body){
var vec__25076 = p__25075;
var method = cljs.core.nth.call(null,vec__25076,(0),null);
var action = cljs.core.nth.call(null,vec__25076,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to25072.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25072.cljs$lang$applyTo = (function (seq25073){
var G__25074 = cljs.core.first.call(null,seq25073);
var seq25073__$1 = cljs.core.next.call(null,seq25073);
return sablono.core.form_to25072.cljs$core$IFn$_invoke$arity$variadic(G__25074,seq25073__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25072);

//# sourceMappingURL=core.js.map