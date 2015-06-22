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
var G__21158__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__21157 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__21157,(0),null);
var body = cljs.core.nthnext.call(null,vec__21157,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__21158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21159__i = 0, G__21159__a = new Array(arguments.length -  0);
while (G__21159__i < G__21159__a.length) {G__21159__a[G__21159__i] = arguments[G__21159__i + 0]; ++G__21159__i;}
  args = new cljs.core.IndexedSeq(G__21159__a,0);
} 
return G__21158__delegate.call(this,args);};
G__21158.cljs$lang$maxFixedArity = 0;
G__21158.cljs$lang$applyTo = (function (arglist__21160){
var args = cljs.core.seq(arglist__21160);
return G__21158__delegate(args);
});
G__21158.cljs$core$IFn$_invoke$arity$variadic = G__21158__delegate;
return G__21158;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5093__auto__ = (function sablono$core$update_arglists_$_iter__21165(s__21166){
return (new cljs.core.LazySeq(null,(function (){
var s__21166__$1 = s__21166;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__21166__$1);
if(temp__4423__auto__){
var s__21166__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21166__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__21166__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__21168 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__21167 = (0);
while(true){
if((i__21167 < size__5092__auto__)){
var args = cljs.core._nth.call(null,c__5091__auto__,i__21167);
cljs.core.chunk_append.call(null,b__21168,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21169 = (i__21167 + (1));
i__21167 = G__21169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21168),sablono$core$update_arglists_$_iter__21165.call(null,cljs.core.chunk_rest.call(null,s__21166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21168),null);
}
} else {
var args = cljs.core.first.call(null,s__21166__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__21165.call(null,cljs.core.rest.call(null,s__21166__$2)));
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
var iter__5093__auto__ = (function sablono$core$iter__21171(s__21172){
return (new cljs.core.LazySeq(null,(function (){
var s__21172__$1 = s__21172;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__21172__$1);
if(temp__4423__auto__){
var s__21172__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21172__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__21172__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__21174 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__21173 = (0);
while(true){
if((i__21173 < size__5092__auto__)){
var style = cljs.core._nth.call(null,c__5091__auto__,i__21173);
cljs.core.chunk_append.call(null,b__21174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21175 = (i__21173 + (1));
i__21173 = G__21175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21174),sablono$core$iter__21171.call(null,cljs.core.chunk_rest.call(null,s__21172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21174),null);
}
} else {
var style = cljs.core.first.call(null,s__21172__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21171.call(null,cljs.core.rest.call(null,s__21172__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq21170){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21170));
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
sablono.core.link_to21176 = (function sablono$core$link_to21176(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to21176.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.link_to21176.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to21176.cljs$lang$maxFixedArity = (1);

sablono.core.link_to21176.cljs$lang$applyTo = (function (seq21177){
var G__21178 = cljs.core.first.call(null,seq21177);
var seq21177__$1 = cljs.core.next.call(null,seq21177);
return sablono.core.link_to21176.cljs$core$IFn$_invoke$arity$variadic(G__21178,seq21177__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21176);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21179 = (function sablono$core$mail_to21179(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to21179.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.mail_to21179.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21182){
var vec__21183 = p__21182;
var content = cljs.core.nth.call(null,vec__21183,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4339__auto__ = content;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to21179.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to21179.cljs$lang$applyTo = (function (seq21180){
var G__21181 = cljs.core.first.call(null,seq21180);
var seq21180__$1 = cljs.core.next.call(null,seq21180);
return sablono.core.mail_to21179.cljs$core$IFn$_invoke$arity$variadic(G__21181,seq21180__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21179);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21184 = (function sablono$core$unordered_list21184(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5093__auto__ = (function sablono$core$unordered_list21184_$_iter__21189(s__21190){
return (new cljs.core.LazySeq(null,(function (){
var s__21190__$1 = s__21190;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__21190__$1);
if(temp__4423__auto__){
var s__21190__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21190__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__21190__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__21192 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__21191 = (0);
while(true){
if((i__21191 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__21191);
cljs.core.chunk_append.call(null,b__21192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21193 = (i__21191 + (1));
i__21191 = G__21193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21192),sablono$core$unordered_list21184_$_iter__21189.call(null,cljs.core.chunk_rest.call(null,s__21190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21192),null);
}
} else {
var x = cljs.core.first.call(null,s__21190__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21184_$_iter__21189.call(null,cljs.core.rest.call(null,s__21190__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21184);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21194 = (function sablono$core$ordered_list21194(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5093__auto__ = (function sablono$core$ordered_list21194_$_iter__21199(s__21200){
return (new cljs.core.LazySeq(null,(function (){
var s__21200__$1 = s__21200;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__21200__$1);
if(temp__4423__auto__){
var s__21200__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21200__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__21200__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__21202 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__21201 = (0);
while(true){
if((i__21201 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__21201);
cljs.core.chunk_append.call(null,b__21202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21203 = (i__21201 + (1));
i__21201 = G__21203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21202),sablono$core$ordered_list21194_$_iter__21199.call(null,cljs.core.chunk_rest.call(null,s__21200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21202),null);
}
} else {
var x = cljs.core.first.call(null,s__21200__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21194_$_iter__21199.call(null,cljs.core.rest.call(null,s__21200__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21194);
/**
 * Create an image element.
 */
sablono.core.image21204 = (function sablono$core$image21204(){
var G__21206 = arguments.length;
switch (G__21206) {
case 1:
return sablono.core.image21204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image21204.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image21204.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image21204.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21204);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__21208_SHARP_,p2__21209_SHARP_){
return [cljs.core.str(p1__21208_SHARP_),cljs.core.str("["),cljs.core.str(p2__21209_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__21210_SHARP_,p2__21211_SHARP_){
return [cljs.core.str(p1__21210_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21211_SHARP_)].join('');
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
sablono.core.color_field21212 = (function sablono$core$color_field21212(){
var G__21214 = arguments.length;
switch (G__21214) {
case 1:
return sablono.core.color_field21212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field21212.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.color_field21212.call(null,name__6034__auto__,null);
});

sablono.core.color_field21212.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.color_field21212.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21212);

/**
 * Creates a date input field.
 */
sablono.core.date_field21215 = (function sablono$core$date_field21215(){
var G__21217 = arguments.length;
switch (G__21217) {
case 1:
return sablono.core.date_field21215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field21215.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.date_field21215.call(null,name__6034__auto__,null);
});

sablono.core.date_field21215.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.date_field21215.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21215);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21218 = (function sablono$core$datetime_field21218(){
var G__21220 = arguments.length;
switch (G__21220) {
case 1:
return sablono.core.datetime_field21218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field21218.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_field21218.call(null,name__6034__auto__,null);
});

sablono.core.datetime_field21218.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_field21218.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21218);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21221 = (function sablono$core$datetime_local_field21221(){
var G__21223 = arguments.length;
switch (G__21223) {
case 1:
return sablono.core.datetime_local_field21221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field21221.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_local_field21221.call(null,name__6034__auto__,null);
});

sablono.core.datetime_local_field21221.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_local_field21221.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21221);

/**
 * Creates a email input field.
 */
sablono.core.email_field21224 = (function sablono$core$email_field21224(){
var G__21226 = arguments.length;
switch (G__21226) {
case 1:
return sablono.core.email_field21224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field21224.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.email_field21224.call(null,name__6034__auto__,null);
});

sablono.core.email_field21224.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.email_field21224.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21224);

/**
 * Creates a file input field.
 */
sablono.core.file_field21227 = (function sablono$core$file_field21227(){
var G__21229 = arguments.length;
switch (G__21229) {
case 1:
return sablono.core.file_field21227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field21227.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.file_field21227.call(null,name__6034__auto__,null);
});

sablono.core.file_field21227.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.file_field21227.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21227);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21230 = (function sablono$core$hidden_field21230(){
var G__21232 = arguments.length;
switch (G__21232) {
case 1:
return sablono.core.hidden_field21230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field21230.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.hidden_field21230.call(null,name__6034__auto__,null);
});

sablono.core.hidden_field21230.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.hidden_field21230.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21230);

/**
 * Creates a month input field.
 */
sablono.core.month_field21233 = (function sablono$core$month_field21233(){
var G__21235 = arguments.length;
switch (G__21235) {
case 1:
return sablono.core.month_field21233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field21233.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.month_field21233.call(null,name__6034__auto__,null);
});

sablono.core.month_field21233.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.month_field21233.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21233);

/**
 * Creates a number input field.
 */
sablono.core.number_field21236 = (function sablono$core$number_field21236(){
var G__21238 = arguments.length;
switch (G__21238) {
case 1:
return sablono.core.number_field21236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field21236.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.number_field21236.call(null,name__6034__auto__,null);
});

sablono.core.number_field21236.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.number_field21236.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21236);

/**
 * Creates a password input field.
 */
sablono.core.password_field21239 = (function sablono$core$password_field21239(){
var G__21241 = arguments.length;
switch (G__21241) {
case 1:
return sablono.core.password_field21239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field21239.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.password_field21239.call(null,name__6034__auto__,null);
});

sablono.core.password_field21239.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.password_field21239.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21239);

/**
 * Creates a range input field.
 */
sablono.core.range_field21242 = (function sablono$core$range_field21242(){
var G__21244 = arguments.length;
switch (G__21244) {
case 1:
return sablono.core.range_field21242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field21242.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.range_field21242.call(null,name__6034__auto__,null);
});

sablono.core.range_field21242.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.range_field21242.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21242);

/**
 * Creates a search input field.
 */
sablono.core.search_field21245 = (function sablono$core$search_field21245(){
var G__21247 = arguments.length;
switch (G__21247) {
case 1:
return sablono.core.search_field21245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field21245.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.search_field21245.call(null,name__6034__auto__,null);
});

sablono.core.search_field21245.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.search_field21245.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21245);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21248 = (function sablono$core$tel_field21248(){
var G__21250 = arguments.length;
switch (G__21250) {
case 1:
return sablono.core.tel_field21248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field21248.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.tel_field21248.call(null,name__6034__auto__,null);
});

sablono.core.tel_field21248.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.tel_field21248.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21248);

/**
 * Creates a text input field.
 */
sablono.core.text_field21251 = (function sablono$core$text_field21251(){
var G__21253 = arguments.length;
switch (G__21253) {
case 1:
return sablono.core.text_field21251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field21251.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.text_field21251.call(null,name__6034__auto__,null);
});

sablono.core.text_field21251.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.text_field21251.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21251);

/**
 * Creates a time input field.
 */
sablono.core.time_field21254 = (function sablono$core$time_field21254(){
var G__21256 = arguments.length;
switch (G__21256) {
case 1:
return sablono.core.time_field21254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field21254.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.time_field21254.call(null,name__6034__auto__,null);
});

sablono.core.time_field21254.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.time_field21254.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21254);

/**
 * Creates a url input field.
 */
sablono.core.url_field21257 = (function sablono$core$url_field21257(){
var G__21259 = arguments.length;
switch (G__21259) {
case 1:
return sablono.core.url_field21257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field21257.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.url_field21257.call(null,name__6034__auto__,null);
});

sablono.core.url_field21257.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.url_field21257.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21257);

/**
 * Creates a week input field.
 */
sablono.core.week_field21260 = (function sablono$core$week_field21260(){
var G__21262 = arguments.length;
switch (G__21262) {
case 1:
return sablono.core.week_field21260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field21260.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.week_field21260.call(null,name__6034__auto__,null);
});

sablono.core.week_field21260.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.week_field21260.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21260);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21280 = (function sablono$core$check_box21280(){
var G__21282 = arguments.length;
switch (G__21282) {
case 1:
return sablono.core.check_box21280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21280.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box21280.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21280.call(null,name,null);
});

sablono.core.check_box21280.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21280.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box21280.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21280.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21280);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21284 = (function sablono$core$radio_button21284(){
var G__21286 = arguments.length;
switch (G__21286) {
case 1:
return sablono.core.radio_button21284.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21284.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button21284.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21284.call(null,group,null);
});

sablono.core.radio_button21284.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21284.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button21284.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21284.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21284);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21288 = (function sablono$core$select_options21288(){
var G__21290 = arguments.length;
switch (G__21290) {
case 1:
return sablono.core.select_options21288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options21288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options21288.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options21288.call(null,coll,null);
});

sablono.core.select_options21288.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5093__auto__ = (function sablono$core$iter__21291(s__21292){
return (new cljs.core.LazySeq(null,(function (){
var s__21292__$1 = s__21292;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__21292__$1);
if(temp__4423__auto__){
var s__21292__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21292__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__21292__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__21294 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__21293 = (0);
while(true){
if((i__21293 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__21293);
cljs.core.chunk_append.call(null,b__21294,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21297 = x;
var text = cljs.core.nth.call(null,vec__21297,(0),null);
var val = cljs.core.nth.call(null,vec__21297,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21297,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options21288.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__21300 = (i__21293 + (1));
i__21293 = G__21300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21294),sablono$core$iter__21291.call(null,cljs.core.chunk_rest.call(null,s__21292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21294),null);
}
} else {
var x = cljs.core.first.call(null,s__21292__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21298 = x;
var text = cljs.core.nth.call(null,vec__21298,(0),null);
var val = cljs.core.nth.call(null,vec__21298,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21298,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options21288.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__21291.call(null,cljs.core.rest.call(null,s__21292__$2)));
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

sablono.core.select_options21288.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21288);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21301 = (function sablono$core$drop_down21301(){
var G__21303 = arguments.length;
switch (G__21303) {
case 2:
return sablono.core.drop_down21301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21301.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down21301.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21301.call(null,name,options,null);
});

sablono.core.drop_down21301.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down21301.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21301);
/**
 * Creates a text area element.
 */
sablono.core.text_area21305 = (function sablono$core$text_area21305(){
var G__21307 = arguments.length;
switch (G__21307) {
case 1:
return sablono.core.text_area21305.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21305.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area21305.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21305.call(null,name,null);
});

sablono.core.text_area21305.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area21305.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21305);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21309 = (function sablono$core$label21309(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21309);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21310 = (function sablono$core$submit_button21310(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21310);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21311 = (function sablono$core$reset_button21311(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21311);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to21312 = (function sablono$core$form_to21312(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to21312.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.form_to21312.cljs$core$IFn$_invoke$arity$variadic = (function (p__21315,body){
var vec__21316 = p__21315;
var method = cljs.core.nth.call(null,vec__21316,(0),null);
var action = cljs.core.nth.call(null,vec__21316,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to21312.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21312.cljs$lang$applyTo = (function (seq21313){
var G__21314 = cljs.core.first.call(null,seq21313);
var seq21313__$1 = cljs.core.next.call(null,seq21313);
return sablono.core.form_to21312.cljs$core$IFn$_invoke$arity$variadic(G__21314,seq21313__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21312);

//# sourceMappingURL=core.js.map