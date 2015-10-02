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
var G__36085__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36084 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__36084,(0),null);
var body = cljs.core.nthnext.call(null,vec__36084,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36086__i = 0, G__36086__a = new Array(arguments.length -  0);
while (G__36086__i < G__36086__a.length) {G__36086__a[G__36086__i] = arguments[G__36086__i + 0]; ++G__36086__i;}
  args = new cljs.core.IndexedSeq(G__36086__a,0);
} 
return G__36085__delegate.call(this,args);};
G__36085.cljs$lang$maxFixedArity = 0;
G__36085.cljs$lang$applyTo = (function (arglist__36087){
var args = cljs.core.seq(arglist__36087);
return G__36085__delegate(args);
});
G__36085.cljs$core$IFn$_invoke$arity$variadic = G__36085__delegate;
return G__36085;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__36092(s__36093){
return (new cljs.core.LazySeq(null,(function (){
var s__36093__$1 = s__36093;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36093__$1);
if(temp__4425__auto__){
var s__36093__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36093__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__36093__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__36095 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__36094 = (0);
while(true){
if((i__36094 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__36094);
cljs.core.chunk_append.call(null,b__36095,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36096 = (i__36094 + (1));
i__36094 = G__36096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36095),sablono$core$update_arglists_$_iter__36092.call(null,cljs.core.chunk_rest.call(null,s__36093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36095),null);
}
} else {
var args = cljs.core.first.call(null,s__36093__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36092.call(null,cljs.core.rest.call(null,s__36093__$2)));
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
var len__5651__auto___36102 = arguments.length;
var i__5652__auto___36103 = (0);
while(true){
if((i__5652__auto___36103 < len__5651__auto___36102)){
args__5658__auto__.push((arguments[i__5652__auto___36103]));

var G__36104 = (i__5652__auto___36103 + (1));
i__5652__auto___36103 = G__36104;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__36098(s__36099){
return (new cljs.core.LazySeq(null,(function (){
var s__36099__$1 = s__36099;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36099__$1);
if(temp__4425__auto__){
var s__36099__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36099__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__36099__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__36101 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__36100 = (0);
while(true){
if((i__36100 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__36100);
cljs.core.chunk_append.call(null,b__36101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36105 = (i__36100 + (1));
i__36100 = G__36105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36101),sablono$core$iter__36098.call(null,cljs.core.chunk_rest.call(null,s__36099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36101),null);
}
} else {
var style = cljs.core.first.call(null,s__36099__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36098.call(null,cljs.core.rest.call(null,s__36099__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq36097){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36097));
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
sablono.core.link_to36106 = (function sablono$core$link_to36106(var_args){
var args__5658__auto__ = [];
var len__5651__auto___36109 = arguments.length;
var i__5652__auto___36110 = (0);
while(true){
if((i__5652__auto___36110 < len__5651__auto___36109)){
args__5658__auto__.push((arguments[i__5652__auto___36110]));

var G__36111 = (i__5652__auto___36110 + (1));
i__5652__auto___36110 = G__36111;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to36106.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to36106.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36106.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36106.cljs$lang$applyTo = (function (seq36107){
var G__36108 = cljs.core.first.call(null,seq36107);
var seq36107__$1 = cljs.core.next.call(null,seq36107);
return sablono.core.link_to36106.cljs$core$IFn$_invoke$arity$variadic(G__36108,seq36107__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36106);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36112 = (function sablono$core$mail_to36112(var_args){
var args__5658__auto__ = [];
var len__5651__auto___36117 = arguments.length;
var i__5652__auto___36118 = (0);
while(true){
if((i__5652__auto___36118 < len__5651__auto___36117)){
args__5658__auto__.push((arguments[i__5652__auto___36118]));

var G__36119 = (i__5652__auto___36118 + (1));
i__5652__auto___36118 = G__36119;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to36112.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to36112.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36115){
var vec__36116 = p__36115;
var content = cljs.core.nth.call(null,vec__36116,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36112.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36112.cljs$lang$applyTo = (function (seq36113){
var G__36114 = cljs.core.first.call(null,seq36113);
var seq36113__$1 = cljs.core.next.call(null,seq36113);
return sablono.core.mail_to36112.cljs$core$IFn$_invoke$arity$variadic(G__36114,seq36113__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36112);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36120 = (function sablono$core$unordered_list36120(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list36120_$_iter__36125(s__36126){
return (new cljs.core.LazySeq(null,(function (){
var s__36126__$1 = s__36126;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36126__$1);
if(temp__4425__auto__){
var s__36126__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36126__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__36126__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__36128 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__36127 = (0);
while(true){
if((i__36127 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__36127);
cljs.core.chunk_append.call(null,b__36128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36129 = (i__36127 + (1));
i__36127 = G__36129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36128),sablono$core$unordered_list36120_$_iter__36125.call(null,cljs.core.chunk_rest.call(null,s__36126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36128),null);
}
} else {
var x = cljs.core.first.call(null,s__36126__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36120_$_iter__36125.call(null,cljs.core.rest.call(null,s__36126__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36120);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36130 = (function sablono$core$ordered_list36130(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list36130_$_iter__36135(s__36136){
return (new cljs.core.LazySeq(null,(function (){
var s__36136__$1 = s__36136;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36136__$1);
if(temp__4425__auto__){
var s__36136__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36136__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__36136__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__36138 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__36137 = (0);
while(true){
if((i__36137 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__36137);
cljs.core.chunk_append.call(null,b__36138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36139 = (i__36137 + (1));
i__36137 = G__36139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36138),sablono$core$ordered_list36130_$_iter__36135.call(null,cljs.core.chunk_rest.call(null,s__36136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36138),null);
}
} else {
var x = cljs.core.first.call(null,s__36136__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36130_$_iter__36135.call(null,cljs.core.rest.call(null,s__36136__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36130);
/**
 * Create an image element.
 */
sablono.core.image36140 = (function sablono$core$image36140(var_args){
var args36141 = [];
var len__5651__auto___36144 = arguments.length;
var i__5652__auto___36145 = (0);
while(true){
if((i__5652__auto___36145 < len__5651__auto___36144)){
args36141.push((arguments[i__5652__auto___36145]));

var G__36146 = (i__5652__auto___36145 + (1));
i__5652__auto___36145 = G__36146;
continue;
} else {
}
break;
}

var G__36143 = args36141.length;
switch (G__36143) {
case 1:
return sablono.core.image36140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36141.length)].join('')));

}
});

sablono.core.image36140.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36140.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36140.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36140);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36148_SHARP_,p2__36149_SHARP_){
return [cljs.core.str(p1__36148_SHARP_),cljs.core.str("["),cljs.core.str(p2__36149_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36150_SHARP_,p2__36151_SHARP_){
return [cljs.core.str(p1__36150_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36151_SHARP_)].join('');
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
sablono.core.color_field36152 = (function sablono$core$color_field36152(var_args){
var args36153 = [];
var len__5651__auto___36220 = arguments.length;
var i__5652__auto___36221 = (0);
while(true){
if((i__5652__auto___36221 < len__5651__auto___36220)){
args36153.push((arguments[i__5652__auto___36221]));

var G__36222 = (i__5652__auto___36221 + (1));
i__5652__auto___36221 = G__36222;
continue;
} else {
}
break;
}

var G__36155 = args36153.length;
switch (G__36155) {
case 1:
return sablono.core.color_field36152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36153.length)].join('')));

}
});

sablono.core.color_field36152.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.color_field36152.call(null,name__6325__auto__,null);
});

sablono.core.color_field36152.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.color_field36152.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36152);

/**
 * Creates a date input field.
 */
sablono.core.date_field36156 = (function sablono$core$date_field36156(var_args){
var args36157 = [];
var len__5651__auto___36224 = arguments.length;
var i__5652__auto___36225 = (0);
while(true){
if((i__5652__auto___36225 < len__5651__auto___36224)){
args36157.push((arguments[i__5652__auto___36225]));

var G__36226 = (i__5652__auto___36225 + (1));
i__5652__auto___36225 = G__36226;
continue;
} else {
}
break;
}

var G__36159 = args36157.length;
switch (G__36159) {
case 1:
return sablono.core.date_field36156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36157.length)].join('')));

}
});

sablono.core.date_field36156.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.date_field36156.call(null,name__6325__auto__,null);
});

sablono.core.date_field36156.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.date_field36156.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36156);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36160 = (function sablono$core$datetime_field36160(var_args){
var args36161 = [];
var len__5651__auto___36228 = arguments.length;
var i__5652__auto___36229 = (0);
while(true){
if((i__5652__auto___36229 < len__5651__auto___36228)){
args36161.push((arguments[i__5652__auto___36229]));

var G__36230 = (i__5652__auto___36229 + (1));
i__5652__auto___36229 = G__36230;
continue;
} else {
}
break;
}

var G__36163 = args36161.length;
switch (G__36163) {
case 1:
return sablono.core.datetime_field36160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36161.length)].join('')));

}
});

sablono.core.datetime_field36160.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_field36160.call(null,name__6325__auto__,null);
});

sablono.core.datetime_field36160.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_field36160.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36160);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36164 = (function sablono$core$datetime_local_field36164(var_args){
var args36165 = [];
var len__5651__auto___36232 = arguments.length;
var i__5652__auto___36233 = (0);
while(true){
if((i__5652__auto___36233 < len__5651__auto___36232)){
args36165.push((arguments[i__5652__auto___36233]));

var G__36234 = (i__5652__auto___36233 + (1));
i__5652__auto___36233 = G__36234;
continue;
} else {
}
break;
}

var G__36167 = args36165.length;
switch (G__36167) {
case 1:
return sablono.core.datetime_local_field36164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36165.length)].join('')));

}
});

sablono.core.datetime_local_field36164.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_local_field36164.call(null,name__6325__auto__,null);
});

sablono.core.datetime_local_field36164.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_local_field36164.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36164);

/**
 * Creates a email input field.
 */
sablono.core.email_field36168 = (function sablono$core$email_field36168(var_args){
var args36169 = [];
var len__5651__auto___36236 = arguments.length;
var i__5652__auto___36237 = (0);
while(true){
if((i__5652__auto___36237 < len__5651__auto___36236)){
args36169.push((arguments[i__5652__auto___36237]));

var G__36238 = (i__5652__auto___36237 + (1));
i__5652__auto___36237 = G__36238;
continue;
} else {
}
break;
}

var G__36171 = args36169.length;
switch (G__36171) {
case 1:
return sablono.core.email_field36168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36169.length)].join('')));

}
});

sablono.core.email_field36168.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.email_field36168.call(null,name__6325__auto__,null);
});

sablono.core.email_field36168.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.email_field36168.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36168);

/**
 * Creates a file input field.
 */
sablono.core.file_field36172 = (function sablono$core$file_field36172(var_args){
var args36173 = [];
var len__5651__auto___36240 = arguments.length;
var i__5652__auto___36241 = (0);
while(true){
if((i__5652__auto___36241 < len__5651__auto___36240)){
args36173.push((arguments[i__5652__auto___36241]));

var G__36242 = (i__5652__auto___36241 + (1));
i__5652__auto___36241 = G__36242;
continue;
} else {
}
break;
}

var G__36175 = args36173.length;
switch (G__36175) {
case 1:
return sablono.core.file_field36172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36173.length)].join('')));

}
});

sablono.core.file_field36172.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.file_field36172.call(null,name__6325__auto__,null);
});

sablono.core.file_field36172.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.file_field36172.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36172);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36176 = (function sablono$core$hidden_field36176(var_args){
var args36177 = [];
var len__5651__auto___36244 = arguments.length;
var i__5652__auto___36245 = (0);
while(true){
if((i__5652__auto___36245 < len__5651__auto___36244)){
args36177.push((arguments[i__5652__auto___36245]));

var G__36246 = (i__5652__auto___36245 + (1));
i__5652__auto___36245 = G__36246;
continue;
} else {
}
break;
}

var G__36179 = args36177.length;
switch (G__36179) {
case 1:
return sablono.core.hidden_field36176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36177.length)].join('')));

}
});

sablono.core.hidden_field36176.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.hidden_field36176.call(null,name__6325__auto__,null);
});

sablono.core.hidden_field36176.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.hidden_field36176.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36176);

/**
 * Creates a month input field.
 */
sablono.core.month_field36180 = (function sablono$core$month_field36180(var_args){
var args36181 = [];
var len__5651__auto___36248 = arguments.length;
var i__5652__auto___36249 = (0);
while(true){
if((i__5652__auto___36249 < len__5651__auto___36248)){
args36181.push((arguments[i__5652__auto___36249]));

var G__36250 = (i__5652__auto___36249 + (1));
i__5652__auto___36249 = G__36250;
continue;
} else {
}
break;
}

var G__36183 = args36181.length;
switch (G__36183) {
case 1:
return sablono.core.month_field36180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36181.length)].join('')));

}
});

sablono.core.month_field36180.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.month_field36180.call(null,name__6325__auto__,null);
});

sablono.core.month_field36180.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.month_field36180.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36180);

/**
 * Creates a number input field.
 */
sablono.core.number_field36184 = (function sablono$core$number_field36184(var_args){
var args36185 = [];
var len__5651__auto___36252 = arguments.length;
var i__5652__auto___36253 = (0);
while(true){
if((i__5652__auto___36253 < len__5651__auto___36252)){
args36185.push((arguments[i__5652__auto___36253]));

var G__36254 = (i__5652__auto___36253 + (1));
i__5652__auto___36253 = G__36254;
continue;
} else {
}
break;
}

var G__36187 = args36185.length;
switch (G__36187) {
case 1:
return sablono.core.number_field36184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36185.length)].join('')));

}
});

sablono.core.number_field36184.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.number_field36184.call(null,name__6325__auto__,null);
});

sablono.core.number_field36184.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.number_field36184.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36184);

/**
 * Creates a password input field.
 */
sablono.core.password_field36188 = (function sablono$core$password_field36188(var_args){
var args36189 = [];
var len__5651__auto___36256 = arguments.length;
var i__5652__auto___36257 = (0);
while(true){
if((i__5652__auto___36257 < len__5651__auto___36256)){
args36189.push((arguments[i__5652__auto___36257]));

var G__36258 = (i__5652__auto___36257 + (1));
i__5652__auto___36257 = G__36258;
continue;
} else {
}
break;
}

var G__36191 = args36189.length;
switch (G__36191) {
case 1:
return sablono.core.password_field36188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36189.length)].join('')));

}
});

sablono.core.password_field36188.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.password_field36188.call(null,name__6325__auto__,null);
});

sablono.core.password_field36188.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.password_field36188.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36188);

/**
 * Creates a range input field.
 */
sablono.core.range_field36192 = (function sablono$core$range_field36192(var_args){
var args36193 = [];
var len__5651__auto___36260 = arguments.length;
var i__5652__auto___36261 = (0);
while(true){
if((i__5652__auto___36261 < len__5651__auto___36260)){
args36193.push((arguments[i__5652__auto___36261]));

var G__36262 = (i__5652__auto___36261 + (1));
i__5652__auto___36261 = G__36262;
continue;
} else {
}
break;
}

var G__36195 = args36193.length;
switch (G__36195) {
case 1:
return sablono.core.range_field36192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36193.length)].join('')));

}
});

sablono.core.range_field36192.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.range_field36192.call(null,name__6325__auto__,null);
});

sablono.core.range_field36192.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.range_field36192.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36192);

/**
 * Creates a search input field.
 */
sablono.core.search_field36196 = (function sablono$core$search_field36196(var_args){
var args36197 = [];
var len__5651__auto___36264 = arguments.length;
var i__5652__auto___36265 = (0);
while(true){
if((i__5652__auto___36265 < len__5651__auto___36264)){
args36197.push((arguments[i__5652__auto___36265]));

var G__36266 = (i__5652__auto___36265 + (1));
i__5652__auto___36265 = G__36266;
continue;
} else {
}
break;
}

var G__36199 = args36197.length;
switch (G__36199) {
case 1:
return sablono.core.search_field36196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36197.length)].join('')));

}
});

sablono.core.search_field36196.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.search_field36196.call(null,name__6325__auto__,null);
});

sablono.core.search_field36196.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.search_field36196.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36196);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36200 = (function sablono$core$tel_field36200(var_args){
var args36201 = [];
var len__5651__auto___36268 = arguments.length;
var i__5652__auto___36269 = (0);
while(true){
if((i__5652__auto___36269 < len__5651__auto___36268)){
args36201.push((arguments[i__5652__auto___36269]));

var G__36270 = (i__5652__auto___36269 + (1));
i__5652__auto___36269 = G__36270;
continue;
} else {
}
break;
}

var G__36203 = args36201.length;
switch (G__36203) {
case 1:
return sablono.core.tel_field36200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36201.length)].join('')));

}
});

sablono.core.tel_field36200.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.tel_field36200.call(null,name__6325__auto__,null);
});

sablono.core.tel_field36200.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.tel_field36200.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36200);

/**
 * Creates a text input field.
 */
sablono.core.text_field36204 = (function sablono$core$text_field36204(var_args){
var args36205 = [];
var len__5651__auto___36272 = arguments.length;
var i__5652__auto___36273 = (0);
while(true){
if((i__5652__auto___36273 < len__5651__auto___36272)){
args36205.push((arguments[i__5652__auto___36273]));

var G__36274 = (i__5652__auto___36273 + (1));
i__5652__auto___36273 = G__36274;
continue;
} else {
}
break;
}

var G__36207 = args36205.length;
switch (G__36207) {
case 1:
return sablono.core.text_field36204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36205.length)].join('')));

}
});

sablono.core.text_field36204.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.text_field36204.call(null,name__6325__auto__,null);
});

sablono.core.text_field36204.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.text_field36204.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36204);

/**
 * Creates a time input field.
 */
sablono.core.time_field36208 = (function sablono$core$time_field36208(var_args){
var args36209 = [];
var len__5651__auto___36276 = arguments.length;
var i__5652__auto___36277 = (0);
while(true){
if((i__5652__auto___36277 < len__5651__auto___36276)){
args36209.push((arguments[i__5652__auto___36277]));

var G__36278 = (i__5652__auto___36277 + (1));
i__5652__auto___36277 = G__36278;
continue;
} else {
}
break;
}

var G__36211 = args36209.length;
switch (G__36211) {
case 1:
return sablono.core.time_field36208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36209.length)].join('')));

}
});

sablono.core.time_field36208.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.time_field36208.call(null,name__6325__auto__,null);
});

sablono.core.time_field36208.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.time_field36208.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36208);

/**
 * Creates a url input field.
 */
sablono.core.url_field36212 = (function sablono$core$url_field36212(var_args){
var args36213 = [];
var len__5651__auto___36280 = arguments.length;
var i__5652__auto___36281 = (0);
while(true){
if((i__5652__auto___36281 < len__5651__auto___36280)){
args36213.push((arguments[i__5652__auto___36281]));

var G__36282 = (i__5652__auto___36281 + (1));
i__5652__auto___36281 = G__36282;
continue;
} else {
}
break;
}

var G__36215 = args36213.length;
switch (G__36215) {
case 1:
return sablono.core.url_field36212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36213.length)].join('')));

}
});

sablono.core.url_field36212.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.url_field36212.call(null,name__6325__auto__,null);
});

sablono.core.url_field36212.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.url_field36212.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36212);

/**
 * Creates a week input field.
 */
sablono.core.week_field36216 = (function sablono$core$week_field36216(var_args){
var args36217 = [];
var len__5651__auto___36284 = arguments.length;
var i__5652__auto___36285 = (0);
while(true){
if((i__5652__auto___36285 < len__5651__auto___36284)){
args36217.push((arguments[i__5652__auto___36285]));

var G__36286 = (i__5652__auto___36285 + (1));
i__5652__auto___36285 = G__36286;
continue;
} else {
}
break;
}

var G__36219 = args36217.length;
switch (G__36219) {
case 1:
return sablono.core.week_field36216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36217.length)].join('')));

}
});

sablono.core.week_field36216.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.week_field36216.call(null,name__6325__auto__,null);
});

sablono.core.week_field36216.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.week_field36216.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36216);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36288 = (function sablono$core$check_box36288(var_args){
var args36289 = [];
var len__5651__auto___36292 = arguments.length;
var i__5652__auto___36293 = (0);
while(true){
if((i__5652__auto___36293 < len__5651__auto___36292)){
args36289.push((arguments[i__5652__auto___36293]));

var G__36294 = (i__5652__auto___36293 + (1));
i__5652__auto___36293 = G__36294;
continue;
} else {
}
break;
}

var G__36291 = args36289.length;
switch (G__36291) {
case 1:
return sablono.core.check_box36288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36288.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36289.length)].join('')));

}
});

sablono.core.check_box36288.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36288.call(null,name,null);
});

sablono.core.check_box36288.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36288.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36288.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36288.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36288);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36296 = (function sablono$core$radio_button36296(var_args){
var args36297 = [];
var len__5651__auto___36300 = arguments.length;
var i__5652__auto___36301 = (0);
while(true){
if((i__5652__auto___36301 < len__5651__auto___36300)){
args36297.push((arguments[i__5652__auto___36301]));

var G__36302 = (i__5652__auto___36301 + (1));
i__5652__auto___36301 = G__36302;
continue;
} else {
}
break;
}

var G__36299 = args36297.length;
switch (G__36299) {
case 1:
return sablono.core.radio_button36296.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36296.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36296.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36297.length)].join('')));

}
});

sablono.core.radio_button36296.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36296.call(null,group,null);
});

sablono.core.radio_button36296.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36296.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36296.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36296.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36296);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36304 = (function sablono$core$select_options36304(var_args){
var args36305 = [];
var len__5651__auto___36316 = arguments.length;
var i__5652__auto___36317 = (0);
while(true){
if((i__5652__auto___36317 < len__5651__auto___36316)){
args36305.push((arguments[i__5652__auto___36317]));

var G__36318 = (i__5652__auto___36317 + (1));
i__5652__auto___36317 = G__36318;
continue;
} else {
}
break;
}

var G__36307 = args36305.length;
switch (G__36307) {
case 1:
return sablono.core.select_options36304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options36304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36305.length)].join('')));

}
});

sablono.core.select_options36304.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options36304.call(null,coll,null);
});

sablono.core.select_options36304.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5365__auto__ = (function sablono$core$iter__36308(s__36309){
return (new cljs.core.LazySeq(null,(function (){
var s__36309__$1 = s__36309;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36309__$1);
if(temp__4425__auto__){
var s__36309__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36309__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__36309__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__36311 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__36310 = (0);
while(true){
if((i__36310 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__36310);
cljs.core.chunk_append.call(null,b__36311,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36314 = x;
var text = cljs.core.nth.call(null,vec__36314,(0),null);
var val = cljs.core.nth.call(null,vec__36314,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36314,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36304.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__36320 = (i__36310 + (1));
i__36310 = G__36320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36311),sablono$core$iter__36308.call(null,cljs.core.chunk_rest.call(null,s__36309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36311),null);
}
} else {
var x = cljs.core.first.call(null,s__36309__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36315 = x;
var text = cljs.core.nth.call(null,vec__36315,(0),null);
var val = cljs.core.nth.call(null,vec__36315,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36315,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36304.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__36308.call(null,cljs.core.rest.call(null,s__36309__$2)));
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

sablono.core.select_options36304.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36304);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36321 = (function sablono$core$drop_down36321(var_args){
var args36322 = [];
var len__5651__auto___36325 = arguments.length;
var i__5652__auto___36326 = (0);
while(true){
if((i__5652__auto___36326 < len__5651__auto___36325)){
args36322.push((arguments[i__5652__auto___36326]));

var G__36327 = (i__5652__auto___36326 + (1));
i__5652__auto___36326 = G__36327;
continue;
} else {
}
break;
}

var G__36324 = args36322.length;
switch (G__36324) {
case 2:
return sablono.core.drop_down36321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36321.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36322.length)].join('')));

}
});

sablono.core.drop_down36321.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36321.call(null,name,options,null);
});

sablono.core.drop_down36321.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36321.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36321);
/**
 * Creates a text area element.
 */
sablono.core.text_area36329 = (function sablono$core$text_area36329(var_args){
var args36330 = [];
var len__5651__auto___36333 = arguments.length;
var i__5652__auto___36334 = (0);
while(true){
if((i__5652__auto___36334 < len__5651__auto___36333)){
args36330.push((arguments[i__5652__auto___36334]));

var G__36335 = (i__5652__auto___36334 + (1));
i__5652__auto___36334 = G__36335;
continue;
} else {
}
break;
}

var G__36332 = args36330.length;
switch (G__36332) {
case 1:
return sablono.core.text_area36329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36330.length)].join('')));

}
});

sablono.core.text_area36329.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36329.call(null,name,null);
});

sablono.core.text_area36329.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area36329.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36329);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36337 = (function sablono$core$label36337(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36337);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36338 = (function sablono$core$submit_button36338(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36338);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36339 = (function sablono$core$reset_button36339(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36339);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36340 = (function sablono$core$form_to36340(var_args){
var args__5658__auto__ = [];
var len__5651__auto___36345 = arguments.length;
var i__5652__auto___36346 = (0);
while(true){
if((i__5652__auto___36346 < len__5651__auto___36345)){
args__5658__auto__.push((arguments[i__5652__auto___36346]));

var G__36347 = (i__5652__auto___36346 + (1));
i__5652__auto___36346 = G__36347;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to36340.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to36340.cljs$core$IFn$_invoke$arity$variadic = (function (p__36343,body){
var vec__36344 = p__36343;
var method = cljs.core.nth.call(null,vec__36344,(0),null);
var action = cljs.core.nth.call(null,vec__36344,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to36340.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36340.cljs$lang$applyTo = (function (seq36341){
var G__36342 = cljs.core.first.call(null,seq36341);
var seq36341__$1 = cljs.core.next.call(null,seq36341);
return sablono.core.form_to36340.cljs$core$IFn$_invoke$arity$variadic(G__36342,seq36341__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36340);

//# sourceMappingURL=core.js.map