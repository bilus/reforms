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
var G__8058__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__8057 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__8057,(0),null);
var body = cljs.core.nthnext.call(null,vec__8057,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__8058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8059__i = 0, G__8059__a = new Array(arguments.length -  0);
while (G__8059__i < G__8059__a.length) {G__8059__a[G__8059__i] = arguments[G__8059__i + 0]; ++G__8059__i;}
  args = new cljs.core.IndexedSeq(G__8059__a,0);
} 
return G__8058__delegate.call(this,args);};
G__8058.cljs$lang$maxFixedArity = 0;
G__8058.cljs$lang$applyTo = (function (arglist__8060){
var args = cljs.core.seq(arglist__8060);
return G__8058__delegate(args);
});
G__8058.cljs$core$IFn$_invoke$arity$variadic = G__8058__delegate;
return G__8058;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__8065(s__8066){
return (new cljs.core.LazySeq(null,(function (){
var s__8066__$1 = s__8066;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8066__$1);
if(temp__4425__auto__){
var s__8066__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8066__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__8066__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__8068 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__8067 = (0);
while(true){
if((i__8067 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__8067);
cljs.core.chunk_append.call(null,b__8068,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__8069 = (i__8067 + (1));
i__8067 = G__8069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8068),sablono$core$update_arglists_$_iter__8065.call(null,cljs.core.chunk_rest.call(null,s__8066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8068),null);
}
} else {
var args = cljs.core.first.call(null,s__8066__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__8065.call(null,cljs.core.rest.call(null,s__8066__$2)));
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
var len__5651__auto___8075 = arguments.length;
var i__5652__auto___8076 = (0);
while(true){
if((i__5652__auto___8076 < len__5651__auto___8075)){
args__5658__auto__.push((arguments[i__5652__auto___8076]));

var G__8077 = (i__5652__auto___8076 + (1));
i__5652__auto___8076 = G__8077;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__8071(s__8072){
return (new cljs.core.LazySeq(null,(function (){
var s__8072__$1 = s__8072;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8072__$1);
if(temp__4425__auto__){
var s__8072__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8072__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__8072__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__8074 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__8073 = (0);
while(true){
if((i__8073 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__8073);
cljs.core.chunk_append.call(null,b__8074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__8078 = (i__8073 + (1));
i__8073 = G__8078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8074),sablono$core$iter__8071.call(null,cljs.core.chunk_rest.call(null,s__8072__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8074),null);
}
} else {
var style = cljs.core.first.call(null,s__8072__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__8071.call(null,cljs.core.rest.call(null,s__8072__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq8070){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8070));
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
sablono.core.link_to8079 = (function sablono$core$link_to8079(var_args){
var args__5658__auto__ = [];
var len__5651__auto___8082 = arguments.length;
var i__5652__auto___8083 = (0);
while(true){
if((i__5652__auto___8083 < len__5651__auto___8082)){
args__5658__auto__.push((arguments[i__5652__auto___8083]));

var G__8084 = (i__5652__auto___8083 + (1));
i__5652__auto___8083 = G__8084;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to8079.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to8079.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to8079.cljs$lang$maxFixedArity = (1);

sablono.core.link_to8079.cljs$lang$applyTo = (function (seq8080){
var G__8081 = cljs.core.first.call(null,seq8080);
var seq8080__$1 = cljs.core.next.call(null,seq8080);
return sablono.core.link_to8079.cljs$core$IFn$_invoke$arity$variadic(G__8081,seq8080__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8079);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to8085 = (function sablono$core$mail_to8085(var_args){
var args__5658__auto__ = [];
var len__5651__auto___8090 = arguments.length;
var i__5652__auto___8091 = (0);
while(true){
if((i__5652__auto___8091 < len__5651__auto___8090)){
args__5658__auto__.push((arguments[i__5652__auto___8091]));

var G__8092 = (i__5652__auto___8091 + (1));
i__5652__auto___8091 = G__8092;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to8085.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to8085.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__8088){
var vec__8089 = p__8088;
var content = cljs.core.nth.call(null,vec__8089,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to8085.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to8085.cljs$lang$applyTo = (function (seq8086){
var G__8087 = cljs.core.first.call(null,seq8086);
var seq8086__$1 = cljs.core.next.call(null,seq8086);
return sablono.core.mail_to8085.cljs$core$IFn$_invoke$arity$variadic(G__8087,seq8086__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8085);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list8093 = (function sablono$core$unordered_list8093(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list8093_$_iter__8098(s__8099){
return (new cljs.core.LazySeq(null,(function (){
var s__8099__$1 = s__8099;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8099__$1);
if(temp__4425__auto__){
var s__8099__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8099__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__8099__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__8101 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__8100 = (0);
while(true){
if((i__8100 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__8100);
cljs.core.chunk_append.call(null,b__8101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8102 = (i__8100 + (1));
i__8100 = G__8102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8101),sablono$core$unordered_list8093_$_iter__8098.call(null,cljs.core.chunk_rest.call(null,s__8099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8101),null);
}
} else {
var x = cljs.core.first.call(null,s__8099__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list8093_$_iter__8098.call(null,cljs.core.rest.call(null,s__8099__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8093);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list8103 = (function sablono$core$ordered_list8103(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list8103_$_iter__8108(s__8109){
return (new cljs.core.LazySeq(null,(function (){
var s__8109__$1 = s__8109;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8109__$1);
if(temp__4425__auto__){
var s__8109__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8109__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__8109__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__8111 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__8110 = (0);
while(true){
if((i__8110 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__8110);
cljs.core.chunk_append.call(null,b__8111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8112 = (i__8110 + (1));
i__8110 = G__8112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8111),sablono$core$ordered_list8103_$_iter__8108.call(null,cljs.core.chunk_rest.call(null,s__8109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8111),null);
}
} else {
var x = cljs.core.first.call(null,s__8109__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list8103_$_iter__8108.call(null,cljs.core.rest.call(null,s__8109__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8103);
/**
 * Create an image element.
 */
sablono.core.image8113 = (function sablono$core$image8113(var_args){
var args8114 = [];
var len__5651__auto___8117 = arguments.length;
var i__5652__auto___8118 = (0);
while(true){
if((i__5652__auto___8118 < len__5651__auto___8117)){
args8114.push((arguments[i__5652__auto___8118]));

var G__8119 = (i__5652__auto___8118 + (1));
i__5652__auto___8118 = G__8119;
continue;
} else {
}
break;
}

var G__8116 = args8114.length;
switch (G__8116) {
case 1:
return sablono.core.image8113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image8113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8114.length)].join('')));

}
});

sablono.core.image8113.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image8113.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image8113.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8113);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__8121_SHARP_,p2__8122_SHARP_){
return [cljs.core.str(p1__8121_SHARP_),cljs.core.str("["),cljs.core.str(p2__8122_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__8123_SHARP_,p2__8124_SHARP_){
return [cljs.core.str(p1__8123_SHARP_),cljs.core.str("-"),cljs.core.str(p2__8124_SHARP_)].join('');
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
sablono.core.color_field8125 = (function sablono$core$color_field8125(var_args){
var args8126 = [];
var len__5651__auto___8193 = arguments.length;
var i__5652__auto___8194 = (0);
while(true){
if((i__5652__auto___8194 < len__5651__auto___8193)){
args8126.push((arguments[i__5652__auto___8194]));

var G__8195 = (i__5652__auto___8194 + (1));
i__5652__auto___8194 = G__8195;
continue;
} else {
}
break;
}

var G__8128 = args8126.length;
switch (G__8128) {
case 1:
return sablono.core.color_field8125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field8125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8126.length)].join('')));

}
});

sablono.core.color_field8125.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.color_field8125.call(null,name__6198__auto__,null);
});

sablono.core.color_field8125.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.color_field8125.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8125);

/**
 * Creates a date input field.
 */
sablono.core.date_field8129 = (function sablono$core$date_field8129(var_args){
var args8130 = [];
var len__5651__auto___8197 = arguments.length;
var i__5652__auto___8198 = (0);
while(true){
if((i__5652__auto___8198 < len__5651__auto___8197)){
args8130.push((arguments[i__5652__auto___8198]));

var G__8199 = (i__5652__auto___8198 + (1));
i__5652__auto___8198 = G__8199;
continue;
} else {
}
break;
}

var G__8132 = args8130.length;
switch (G__8132) {
case 1:
return sablono.core.date_field8129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field8129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8130.length)].join('')));

}
});

sablono.core.date_field8129.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.date_field8129.call(null,name__6198__auto__,null);
});

sablono.core.date_field8129.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.date_field8129.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8129);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field8133 = (function sablono$core$datetime_field8133(var_args){
var args8134 = [];
var len__5651__auto___8201 = arguments.length;
var i__5652__auto___8202 = (0);
while(true){
if((i__5652__auto___8202 < len__5651__auto___8201)){
args8134.push((arguments[i__5652__auto___8202]));

var G__8203 = (i__5652__auto___8202 + (1));
i__5652__auto___8202 = G__8203;
continue;
} else {
}
break;
}

var G__8136 = args8134.length;
switch (G__8136) {
case 1:
return sablono.core.datetime_field8133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field8133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8134.length)].join('')));

}
});

sablono.core.datetime_field8133.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_field8133.call(null,name__6198__auto__,null);
});

sablono.core.datetime_field8133.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_field8133.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8133);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field8137 = (function sablono$core$datetime_local_field8137(var_args){
var args8138 = [];
var len__5651__auto___8205 = arguments.length;
var i__5652__auto___8206 = (0);
while(true){
if((i__5652__auto___8206 < len__5651__auto___8205)){
args8138.push((arguments[i__5652__auto___8206]));

var G__8207 = (i__5652__auto___8206 + (1));
i__5652__auto___8206 = G__8207;
continue;
} else {
}
break;
}

var G__8140 = args8138.length;
switch (G__8140) {
case 1:
return sablono.core.datetime_local_field8137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field8137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8138.length)].join('')));

}
});

sablono.core.datetime_local_field8137.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_local_field8137.call(null,name__6198__auto__,null);
});

sablono.core.datetime_local_field8137.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_local_field8137.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8137);

/**
 * Creates a email input field.
 */
sablono.core.email_field8141 = (function sablono$core$email_field8141(var_args){
var args8142 = [];
var len__5651__auto___8209 = arguments.length;
var i__5652__auto___8210 = (0);
while(true){
if((i__5652__auto___8210 < len__5651__auto___8209)){
args8142.push((arguments[i__5652__auto___8210]));

var G__8211 = (i__5652__auto___8210 + (1));
i__5652__auto___8210 = G__8211;
continue;
} else {
}
break;
}

var G__8144 = args8142.length;
switch (G__8144) {
case 1:
return sablono.core.email_field8141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field8141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8142.length)].join('')));

}
});

sablono.core.email_field8141.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.email_field8141.call(null,name__6198__auto__,null);
});

sablono.core.email_field8141.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.email_field8141.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8141);

/**
 * Creates a file input field.
 */
sablono.core.file_field8145 = (function sablono$core$file_field8145(var_args){
var args8146 = [];
var len__5651__auto___8213 = arguments.length;
var i__5652__auto___8214 = (0);
while(true){
if((i__5652__auto___8214 < len__5651__auto___8213)){
args8146.push((arguments[i__5652__auto___8214]));

var G__8215 = (i__5652__auto___8214 + (1));
i__5652__auto___8214 = G__8215;
continue;
} else {
}
break;
}

var G__8148 = args8146.length;
switch (G__8148) {
case 1:
return sablono.core.file_field8145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field8145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8146.length)].join('')));

}
});

sablono.core.file_field8145.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.file_field8145.call(null,name__6198__auto__,null);
});

sablono.core.file_field8145.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.file_field8145.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8145);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field8149 = (function sablono$core$hidden_field8149(var_args){
var args8150 = [];
var len__5651__auto___8217 = arguments.length;
var i__5652__auto___8218 = (0);
while(true){
if((i__5652__auto___8218 < len__5651__auto___8217)){
args8150.push((arguments[i__5652__auto___8218]));

var G__8219 = (i__5652__auto___8218 + (1));
i__5652__auto___8218 = G__8219;
continue;
} else {
}
break;
}

var G__8152 = args8150.length;
switch (G__8152) {
case 1:
return sablono.core.hidden_field8149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field8149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8150.length)].join('')));

}
});

sablono.core.hidden_field8149.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.hidden_field8149.call(null,name__6198__auto__,null);
});

sablono.core.hidden_field8149.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.hidden_field8149.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8149);

/**
 * Creates a month input field.
 */
sablono.core.month_field8153 = (function sablono$core$month_field8153(var_args){
var args8154 = [];
var len__5651__auto___8221 = arguments.length;
var i__5652__auto___8222 = (0);
while(true){
if((i__5652__auto___8222 < len__5651__auto___8221)){
args8154.push((arguments[i__5652__auto___8222]));

var G__8223 = (i__5652__auto___8222 + (1));
i__5652__auto___8222 = G__8223;
continue;
} else {
}
break;
}

var G__8156 = args8154.length;
switch (G__8156) {
case 1:
return sablono.core.month_field8153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field8153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8154.length)].join('')));

}
});

sablono.core.month_field8153.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.month_field8153.call(null,name__6198__auto__,null);
});

sablono.core.month_field8153.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.month_field8153.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8153);

/**
 * Creates a number input field.
 */
sablono.core.number_field8157 = (function sablono$core$number_field8157(var_args){
var args8158 = [];
var len__5651__auto___8225 = arguments.length;
var i__5652__auto___8226 = (0);
while(true){
if((i__5652__auto___8226 < len__5651__auto___8225)){
args8158.push((arguments[i__5652__auto___8226]));

var G__8227 = (i__5652__auto___8226 + (1));
i__5652__auto___8226 = G__8227;
continue;
} else {
}
break;
}

var G__8160 = args8158.length;
switch (G__8160) {
case 1:
return sablono.core.number_field8157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field8157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8158.length)].join('')));

}
});

sablono.core.number_field8157.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.number_field8157.call(null,name__6198__auto__,null);
});

sablono.core.number_field8157.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.number_field8157.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8157);

/**
 * Creates a password input field.
 */
sablono.core.password_field8161 = (function sablono$core$password_field8161(var_args){
var args8162 = [];
var len__5651__auto___8229 = arguments.length;
var i__5652__auto___8230 = (0);
while(true){
if((i__5652__auto___8230 < len__5651__auto___8229)){
args8162.push((arguments[i__5652__auto___8230]));

var G__8231 = (i__5652__auto___8230 + (1));
i__5652__auto___8230 = G__8231;
continue;
} else {
}
break;
}

var G__8164 = args8162.length;
switch (G__8164) {
case 1:
return sablono.core.password_field8161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field8161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8162.length)].join('')));

}
});

sablono.core.password_field8161.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.password_field8161.call(null,name__6198__auto__,null);
});

sablono.core.password_field8161.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.password_field8161.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8161);

/**
 * Creates a range input field.
 */
sablono.core.range_field8165 = (function sablono$core$range_field8165(var_args){
var args8166 = [];
var len__5651__auto___8233 = arguments.length;
var i__5652__auto___8234 = (0);
while(true){
if((i__5652__auto___8234 < len__5651__auto___8233)){
args8166.push((arguments[i__5652__auto___8234]));

var G__8235 = (i__5652__auto___8234 + (1));
i__5652__auto___8234 = G__8235;
continue;
} else {
}
break;
}

var G__8168 = args8166.length;
switch (G__8168) {
case 1:
return sablono.core.range_field8165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field8165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8166.length)].join('')));

}
});

sablono.core.range_field8165.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.range_field8165.call(null,name__6198__auto__,null);
});

sablono.core.range_field8165.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.range_field8165.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8165);

/**
 * Creates a search input field.
 */
sablono.core.search_field8169 = (function sablono$core$search_field8169(var_args){
var args8170 = [];
var len__5651__auto___8237 = arguments.length;
var i__5652__auto___8238 = (0);
while(true){
if((i__5652__auto___8238 < len__5651__auto___8237)){
args8170.push((arguments[i__5652__auto___8238]));

var G__8239 = (i__5652__auto___8238 + (1));
i__5652__auto___8238 = G__8239;
continue;
} else {
}
break;
}

var G__8172 = args8170.length;
switch (G__8172) {
case 1:
return sablono.core.search_field8169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field8169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8170.length)].join('')));

}
});

sablono.core.search_field8169.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.search_field8169.call(null,name__6198__auto__,null);
});

sablono.core.search_field8169.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.search_field8169.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8169);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field8173 = (function sablono$core$tel_field8173(var_args){
var args8174 = [];
var len__5651__auto___8241 = arguments.length;
var i__5652__auto___8242 = (0);
while(true){
if((i__5652__auto___8242 < len__5651__auto___8241)){
args8174.push((arguments[i__5652__auto___8242]));

var G__8243 = (i__5652__auto___8242 + (1));
i__5652__auto___8242 = G__8243;
continue;
} else {
}
break;
}

var G__8176 = args8174.length;
switch (G__8176) {
case 1:
return sablono.core.tel_field8173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field8173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8174.length)].join('')));

}
});

sablono.core.tel_field8173.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.tel_field8173.call(null,name__6198__auto__,null);
});

sablono.core.tel_field8173.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.tel_field8173.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8173);

/**
 * Creates a text input field.
 */
sablono.core.text_field8177 = (function sablono$core$text_field8177(var_args){
var args8178 = [];
var len__5651__auto___8245 = arguments.length;
var i__5652__auto___8246 = (0);
while(true){
if((i__5652__auto___8246 < len__5651__auto___8245)){
args8178.push((arguments[i__5652__auto___8246]));

var G__8247 = (i__5652__auto___8246 + (1));
i__5652__auto___8246 = G__8247;
continue;
} else {
}
break;
}

var G__8180 = args8178.length;
switch (G__8180) {
case 1:
return sablono.core.text_field8177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field8177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8178.length)].join('')));

}
});

sablono.core.text_field8177.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.text_field8177.call(null,name__6198__auto__,null);
});

sablono.core.text_field8177.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.text_field8177.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8177);

/**
 * Creates a time input field.
 */
sablono.core.time_field8181 = (function sablono$core$time_field8181(var_args){
var args8182 = [];
var len__5651__auto___8249 = arguments.length;
var i__5652__auto___8250 = (0);
while(true){
if((i__5652__auto___8250 < len__5651__auto___8249)){
args8182.push((arguments[i__5652__auto___8250]));

var G__8251 = (i__5652__auto___8250 + (1));
i__5652__auto___8250 = G__8251;
continue;
} else {
}
break;
}

var G__8184 = args8182.length;
switch (G__8184) {
case 1:
return sablono.core.time_field8181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field8181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8182.length)].join('')));

}
});

sablono.core.time_field8181.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.time_field8181.call(null,name__6198__auto__,null);
});

sablono.core.time_field8181.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.time_field8181.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8181);

/**
 * Creates a url input field.
 */
sablono.core.url_field8185 = (function sablono$core$url_field8185(var_args){
var args8186 = [];
var len__5651__auto___8253 = arguments.length;
var i__5652__auto___8254 = (0);
while(true){
if((i__5652__auto___8254 < len__5651__auto___8253)){
args8186.push((arguments[i__5652__auto___8254]));

var G__8255 = (i__5652__auto___8254 + (1));
i__5652__auto___8254 = G__8255;
continue;
} else {
}
break;
}

var G__8188 = args8186.length;
switch (G__8188) {
case 1:
return sablono.core.url_field8185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field8185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8186.length)].join('')));

}
});

sablono.core.url_field8185.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.url_field8185.call(null,name__6198__auto__,null);
});

sablono.core.url_field8185.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.url_field8185.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8185);

/**
 * Creates a week input field.
 */
sablono.core.week_field8189 = (function sablono$core$week_field8189(var_args){
var args8190 = [];
var len__5651__auto___8257 = arguments.length;
var i__5652__auto___8258 = (0);
while(true){
if((i__5652__auto___8258 < len__5651__auto___8257)){
args8190.push((arguments[i__5652__auto___8258]));

var G__8259 = (i__5652__auto___8258 + (1));
i__5652__auto___8258 = G__8259;
continue;
} else {
}
break;
}

var G__8192 = args8190.length;
switch (G__8192) {
case 1:
return sablono.core.week_field8189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field8189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8190.length)].join('')));

}
});

sablono.core.week_field8189.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.week_field8189.call(null,name__6198__auto__,null);
});

sablono.core.week_field8189.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.week_field8189.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8189);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box8261 = (function sablono$core$check_box8261(var_args){
var args8262 = [];
var len__5651__auto___8265 = arguments.length;
var i__5652__auto___8266 = (0);
while(true){
if((i__5652__auto___8266 < len__5651__auto___8265)){
args8262.push((arguments[i__5652__auto___8266]));

var G__8267 = (i__5652__auto___8266 + (1));
i__5652__auto___8266 = G__8267;
continue;
} else {
}
break;
}

var G__8264 = args8262.length;
switch (G__8264) {
case 1:
return sablono.core.check_box8261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box8261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box8261.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8262.length)].join('')));

}
});

sablono.core.check_box8261.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box8261.call(null,name,null);
});

sablono.core.check_box8261.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box8261.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box8261.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box8261.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8261);
/**
 * Creates a radio button.
 */
sablono.core.radio_button8269 = (function sablono$core$radio_button8269(var_args){
var args8270 = [];
var len__5651__auto___8273 = arguments.length;
var i__5652__auto___8274 = (0);
while(true){
if((i__5652__auto___8274 < len__5651__auto___8273)){
args8270.push((arguments[i__5652__auto___8274]));

var G__8275 = (i__5652__auto___8274 + (1));
i__5652__auto___8274 = G__8275;
continue;
} else {
}
break;
}

var G__8272 = args8270.length;
switch (G__8272) {
case 1:
return sablono.core.radio_button8269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button8269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button8269.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8270.length)].join('')));

}
});

sablono.core.radio_button8269.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button8269.call(null,group,null);
});

sablono.core.radio_button8269.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button8269.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button8269.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button8269.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8269);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options8277 = (function sablono$core$select_options8277(coll){
var iter__5365__auto__ = (function sablono$core$select_options8277_$_iter__8286(s__8287){
return (new cljs.core.LazySeq(null,(function (){
var s__8287__$1 = s__8287;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8287__$1);
if(temp__4425__auto__){
var s__8287__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8287__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__8287__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__8289 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__8288 = (0);
while(true){
if((i__8288 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__8288);
cljs.core.chunk_append.call(null,b__8289,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8292 = x;
var text = cljs.core.nth.call(null,vec__8292,(0),null);
var val = cljs.core.nth.call(null,vec__8292,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8292,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options8277.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__8294 = (i__8288 + (1));
i__8288 = G__8294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8289),sablono$core$select_options8277_$_iter__8286.call(null,cljs.core.chunk_rest.call(null,s__8287__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8289),null);
}
} else {
var x = cljs.core.first.call(null,s__8287__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8293 = x;
var text = cljs.core.nth.call(null,vec__8293,(0),null);
var val = cljs.core.nth.call(null,vec__8293,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8293,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options8277.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options8277_$_iter__8286.call(null,cljs.core.rest.call(null,s__8287__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8277);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down8295 = (function sablono$core$drop_down8295(var_args){
var args8296 = [];
var len__5651__auto___8299 = arguments.length;
var i__5652__auto___8300 = (0);
while(true){
if((i__5652__auto___8300 < len__5651__auto___8299)){
args8296.push((arguments[i__5652__auto___8300]));

var G__8301 = (i__5652__auto___8300 + (1));
i__5652__auto___8300 = G__8301;
continue;
} else {
}
break;
}

var G__8298 = args8296.length;
switch (G__8298) {
case 2:
return sablono.core.drop_down8295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down8295.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8296.length)].join('')));

}
});

sablono.core.drop_down8295.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down8295.call(null,name,options,null);
});

sablono.core.drop_down8295.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down8295.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8295);
/**
 * Creates a text area element.
 */
sablono.core.text_area8303 = (function sablono$core$text_area8303(var_args){
var args8304 = [];
var len__5651__auto___8307 = arguments.length;
var i__5652__auto___8308 = (0);
while(true){
if((i__5652__auto___8308 < len__5651__auto___8307)){
args8304.push((arguments[i__5652__auto___8308]));

var G__8309 = (i__5652__auto___8308 + (1));
i__5652__auto___8308 = G__8309;
continue;
} else {
}
break;
}

var G__8306 = args8304.length;
switch (G__8306) {
case 1:
return sablono.core.text_area8303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area8303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8304.length)].join('')));

}
});

sablono.core.text_area8303.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area8303.call(null,name,null);
});

sablono.core.text_area8303.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area8303.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8303);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label8311 = (function sablono$core$label8311(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8311);
/**
 * Creates a submit button.
 */
sablono.core.submit_button8312 = (function sablono$core$submit_button8312(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8312);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button8313 = (function sablono$core$reset_button8313(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8313);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to8314 = (function sablono$core$form_to8314(var_args){
var args__5658__auto__ = [];
var len__5651__auto___8319 = arguments.length;
var i__5652__auto___8320 = (0);
while(true){
if((i__5652__auto___8320 < len__5651__auto___8319)){
args__5658__auto__.push((arguments[i__5652__auto___8320]));

var G__8321 = (i__5652__auto___8320 + (1));
i__5652__auto___8320 = G__8321;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to8314.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to8314.cljs$core$IFn$_invoke$arity$variadic = (function (p__8317,body){
var vec__8318 = p__8317;
var method = cljs.core.nth.call(null,vec__8318,(0),null);
var action = cljs.core.nth.call(null,vec__8318,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to8314.cljs$lang$maxFixedArity = (1);

sablono.core.form_to8314.cljs$lang$applyTo = (function (seq8315){
var G__8316 = cljs.core.first.call(null,seq8315);
var seq8315__$1 = cljs.core.next.call(null,seq8315);
return sablono.core.form_to8314.cljs$core$IFn$_invoke$arity$variadic(G__8316,seq8315__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8314);

//# sourceMappingURL=core.js.map