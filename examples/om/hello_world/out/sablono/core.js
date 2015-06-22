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
var G__17127__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17126 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17126,(0),null);
var body = cljs.core.nthnext.call(null,vec__17126,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17128__i = 0, G__17128__a = new Array(arguments.length -  0);
while (G__17128__i < G__17128__a.length) {G__17128__a[G__17128__i] = arguments[G__17128__i + 0]; ++G__17128__i;}
  args = new cljs.core.IndexedSeq(G__17128__a,0);
} 
return G__17127__delegate.call(this,args);};
G__17127.cljs$lang$maxFixedArity = 0;
G__17127.cljs$lang$applyTo = (function (arglist__17129){
var args = cljs.core.seq(arglist__17129);
return G__17127__delegate(args);
});
G__17127.cljs$core$IFn$_invoke$arity$variadic = G__17127__delegate;
return G__17127;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5093__auto__ = (function sablono$core$update_arglists_$_iter__17134(s__17135){
return (new cljs.core.LazySeq(null,(function (){
var s__17135__$1 = s__17135;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17135__$1);
if(temp__4423__auto__){
var s__17135__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17135__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__17135__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__17137 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__17136 = (0);
while(true){
if((i__17136 < size__5092__auto__)){
var args = cljs.core._nth.call(null,c__5091__auto__,i__17136);
cljs.core.chunk_append.call(null,b__17137,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17138 = (i__17136 + (1));
i__17136 = G__17138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17137),sablono$core$update_arglists_$_iter__17134.call(null,cljs.core.chunk_rest.call(null,s__17135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17137),null);
}
} else {
var args = cljs.core.first.call(null,s__17135__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17134.call(null,cljs.core.rest.call(null,s__17135__$2)));
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
var iter__5093__auto__ = (function sablono$core$iter__17140(s__17141){
return (new cljs.core.LazySeq(null,(function (){
var s__17141__$1 = s__17141;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17141__$1);
if(temp__4423__auto__){
var s__17141__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17141__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__17141__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__17143 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__17142 = (0);
while(true){
if((i__17142 < size__5092__auto__)){
var style = cljs.core._nth.call(null,c__5091__auto__,i__17142);
cljs.core.chunk_append.call(null,b__17143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17144 = (i__17142 + (1));
i__17142 = G__17144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17143),sablono$core$iter__17140.call(null,cljs.core.chunk_rest.call(null,s__17141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17143),null);
}
} else {
var style = cljs.core.first.call(null,s__17141__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17140.call(null,cljs.core.rest.call(null,s__17141__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17139){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17139));
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
sablono.core.link_to17145 = (function sablono$core$link_to17145(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to17145.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.link_to17145.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17145.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17145.cljs$lang$applyTo = (function (seq17146){
var G__17147 = cljs.core.first.call(null,seq17146);
var seq17146__$1 = cljs.core.next.call(null,seq17146);
return sablono.core.link_to17145.cljs$core$IFn$_invoke$arity$variadic(G__17147,seq17146__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17145);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17148 = (function sablono$core$mail_to17148(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to17148.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.mail_to17148.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17151){
var vec__17152 = p__17151;
var content = cljs.core.nth.call(null,vec__17152,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4339__auto__ = content;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17148.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17148.cljs$lang$applyTo = (function (seq17149){
var G__17150 = cljs.core.first.call(null,seq17149);
var seq17149__$1 = cljs.core.next.call(null,seq17149);
return sablono.core.mail_to17148.cljs$core$IFn$_invoke$arity$variadic(G__17150,seq17149__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17148);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17153 = (function sablono$core$unordered_list17153(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5093__auto__ = (function sablono$core$unordered_list17153_$_iter__17158(s__17159){
return (new cljs.core.LazySeq(null,(function (){
var s__17159__$1 = s__17159;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17159__$1);
if(temp__4423__auto__){
var s__17159__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17159__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__17159__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__17161 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__17160 = (0);
while(true){
if((i__17160 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__17160);
cljs.core.chunk_append.call(null,b__17161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17162 = (i__17160 + (1));
i__17160 = G__17162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),sablono$core$unordered_list17153_$_iter__17158.call(null,cljs.core.chunk_rest.call(null,s__17159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),null);
}
} else {
var x = cljs.core.first.call(null,s__17159__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17153_$_iter__17158.call(null,cljs.core.rest.call(null,s__17159__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17153);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17163 = (function sablono$core$ordered_list17163(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5093__auto__ = (function sablono$core$ordered_list17163_$_iter__17168(s__17169){
return (new cljs.core.LazySeq(null,(function (){
var s__17169__$1 = s__17169;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17169__$1);
if(temp__4423__auto__){
var s__17169__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17169__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__17169__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__17171 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__17170 = (0);
while(true){
if((i__17170 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__17170);
cljs.core.chunk_append.call(null,b__17171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17172 = (i__17170 + (1));
i__17170 = G__17172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17171),sablono$core$ordered_list17163_$_iter__17168.call(null,cljs.core.chunk_rest.call(null,s__17169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17171),null);
}
} else {
var x = cljs.core.first.call(null,s__17169__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17163_$_iter__17168.call(null,cljs.core.rest.call(null,s__17169__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17163);
/**
 * Create an image element.
 */
sablono.core.image17173 = (function sablono$core$image17173(){
var G__17175 = arguments.length;
switch (G__17175) {
case 1:
return sablono.core.image17173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image17173.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17173.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17173.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17173);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17177_SHARP_,p2__17178_SHARP_){
return [cljs.core.str(p1__17177_SHARP_),cljs.core.str("["),cljs.core.str(p2__17178_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17179_SHARP_,p2__17180_SHARP_){
return [cljs.core.str(p1__17179_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17180_SHARP_)].join('');
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
sablono.core.color_field17181 = (function sablono$core$color_field17181(){
var G__17183 = arguments.length;
switch (G__17183) {
case 1:
return sablono.core.color_field17181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field17181.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.color_field17181.call(null,name__6034__auto__,null);
});

sablono.core.color_field17181.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.color_field17181.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17181);

/**
 * Creates a date input field.
 */
sablono.core.date_field17184 = (function sablono$core$date_field17184(){
var G__17186 = arguments.length;
switch (G__17186) {
case 1:
return sablono.core.date_field17184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field17184.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.date_field17184.call(null,name__6034__auto__,null);
});

sablono.core.date_field17184.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.date_field17184.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17184);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17187 = (function sablono$core$datetime_field17187(){
var G__17189 = arguments.length;
switch (G__17189) {
case 1:
return sablono.core.datetime_field17187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field17187.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_field17187.call(null,name__6034__auto__,null);
});

sablono.core.datetime_field17187.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_field17187.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17187);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17190 = (function sablono$core$datetime_local_field17190(){
var G__17192 = arguments.length;
switch (G__17192) {
case 1:
return sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.datetime_local_field17190.call(null,name__6034__auto__,null);
});

sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.datetime_local_field17190.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17190);

/**
 * Creates a email input field.
 */
sablono.core.email_field17193 = (function sablono$core$email_field17193(){
var G__17195 = arguments.length;
switch (G__17195) {
case 1:
return sablono.core.email_field17193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field17193.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.email_field17193.call(null,name__6034__auto__,null);
});

sablono.core.email_field17193.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.email_field17193.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17193);

/**
 * Creates a file input field.
 */
sablono.core.file_field17196 = (function sablono$core$file_field17196(){
var G__17198 = arguments.length;
switch (G__17198) {
case 1:
return sablono.core.file_field17196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field17196.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.file_field17196.call(null,name__6034__auto__,null);
});

sablono.core.file_field17196.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.file_field17196.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17196);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17199 = (function sablono$core$hidden_field17199(){
var G__17201 = arguments.length;
switch (G__17201) {
case 1:
return sablono.core.hidden_field17199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field17199.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.hidden_field17199.call(null,name__6034__auto__,null);
});

sablono.core.hidden_field17199.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.hidden_field17199.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17199);

/**
 * Creates a month input field.
 */
sablono.core.month_field17202 = (function sablono$core$month_field17202(){
var G__17204 = arguments.length;
switch (G__17204) {
case 1:
return sablono.core.month_field17202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field17202.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.month_field17202.call(null,name__6034__auto__,null);
});

sablono.core.month_field17202.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.month_field17202.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17202);

/**
 * Creates a number input field.
 */
sablono.core.number_field17205 = (function sablono$core$number_field17205(){
var G__17207 = arguments.length;
switch (G__17207) {
case 1:
return sablono.core.number_field17205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field17205.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.number_field17205.call(null,name__6034__auto__,null);
});

sablono.core.number_field17205.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.number_field17205.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17205);

/**
 * Creates a password input field.
 */
sablono.core.password_field17208 = (function sablono$core$password_field17208(){
var G__17210 = arguments.length;
switch (G__17210) {
case 1:
return sablono.core.password_field17208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field17208.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.password_field17208.call(null,name__6034__auto__,null);
});

sablono.core.password_field17208.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.password_field17208.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17208);

/**
 * Creates a range input field.
 */
sablono.core.range_field17211 = (function sablono$core$range_field17211(){
var G__17213 = arguments.length;
switch (G__17213) {
case 1:
return sablono.core.range_field17211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field17211.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.range_field17211.call(null,name__6034__auto__,null);
});

sablono.core.range_field17211.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.range_field17211.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17211);

/**
 * Creates a search input field.
 */
sablono.core.search_field17214 = (function sablono$core$search_field17214(){
var G__17216 = arguments.length;
switch (G__17216) {
case 1:
return sablono.core.search_field17214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field17214.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.search_field17214.call(null,name__6034__auto__,null);
});

sablono.core.search_field17214.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.search_field17214.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17214);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17217 = (function sablono$core$tel_field17217(){
var G__17219 = arguments.length;
switch (G__17219) {
case 1:
return sablono.core.tel_field17217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field17217.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.tel_field17217.call(null,name__6034__auto__,null);
});

sablono.core.tel_field17217.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.tel_field17217.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17217);

/**
 * Creates a text input field.
 */
sablono.core.text_field17220 = (function sablono$core$text_field17220(){
var G__17222 = arguments.length;
switch (G__17222) {
case 1:
return sablono.core.text_field17220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field17220.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.text_field17220.call(null,name__6034__auto__,null);
});

sablono.core.text_field17220.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.text_field17220.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17220);

/**
 * Creates a time input field.
 */
sablono.core.time_field17223 = (function sablono$core$time_field17223(){
var G__17225 = arguments.length;
switch (G__17225) {
case 1:
return sablono.core.time_field17223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field17223.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.time_field17223.call(null,name__6034__auto__,null);
});

sablono.core.time_field17223.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.time_field17223.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17223);

/**
 * Creates a url input field.
 */
sablono.core.url_field17226 = (function sablono$core$url_field17226(){
var G__17228 = arguments.length;
switch (G__17228) {
case 1:
return sablono.core.url_field17226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field17226.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.url_field17226.call(null,name__6034__auto__,null);
});

sablono.core.url_field17226.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.url_field17226.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17226);

/**
 * Creates a week input field.
 */
sablono.core.week_field17229 = (function sablono$core$week_field17229(){
var G__17231 = arguments.length;
switch (G__17231) {
case 1:
return sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$1 = (function (name__6034__auto__){
return sablono.core.week_field17229.call(null,name__6034__auto__,null);
});

sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$2 = (function (name__6034__auto__,value__6035__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6034__auto__,value__6035__auto__);
});

sablono.core.week_field17229.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17229);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17249 = (function sablono$core$check_box17249(){
var G__17251 = arguments.length;
switch (G__17251) {
case 1:
return sablono.core.check_box17249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17249.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box17249.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17249.call(null,name,null);
});

sablono.core.check_box17249.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17249.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17249.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17249.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17249);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17253 = (function sablono$core$radio_button17253(){
var G__17255 = arguments.length;
switch (G__17255) {
case 1:
return sablono.core.radio_button17253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17253.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button17253.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17253.call(null,group,null);
});

sablono.core.radio_button17253.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17253.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17253.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17253.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17253);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17257 = (function sablono$core$select_options17257(){
var G__17259 = arguments.length;
switch (G__17259) {
case 1:
return sablono.core.select_options17257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options17257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options17257.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options17257.call(null,coll,null);
});

sablono.core.select_options17257.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5093__auto__ = (function sablono$core$iter__17260(s__17261){
return (new cljs.core.LazySeq(null,(function (){
var s__17261__$1 = s__17261;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__17261__$1);
if(temp__4423__auto__){
var s__17261__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17261__$2)){
var c__5091__auto__ = cljs.core.chunk_first.call(null,s__17261__$2);
var size__5092__auto__ = cljs.core.count.call(null,c__5091__auto__);
var b__17263 = cljs.core.chunk_buffer.call(null,size__5092__auto__);
if((function (){var i__17262 = (0);
while(true){
if((i__17262 < size__5092__auto__)){
var x = cljs.core._nth.call(null,c__5091__auto__,i__17262);
cljs.core.chunk_append.call(null,b__17263,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17266 = x;
var text = cljs.core.nth.call(null,vec__17266,(0),null);
var val = cljs.core.nth.call(null,vec__17266,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17266,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options17257.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__17269 = (i__17262 + (1));
i__17262 = G__17269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17263),sablono$core$iter__17260.call(null,cljs.core.chunk_rest.call(null,s__17261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17263),null);
}
} else {
var x = cljs.core.first.call(null,s__17261__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17267 = x;
var text = cljs.core.nth.call(null,vec__17267,(0),null);
var val = cljs.core.nth.call(null,vec__17267,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17267,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options17257.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__17260.call(null,cljs.core.rest.call(null,s__17261__$2)));
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

sablono.core.select_options17257.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17257);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17270 = (function sablono$core$drop_down17270(){
var G__17272 = arguments.length;
switch (G__17272) {
case 2:
return sablono.core.drop_down17270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17270.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down17270.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17270.call(null,name,options,null);
});

sablono.core.drop_down17270.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17270.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17270);
/**
 * Creates a text area element.
 */
sablono.core.text_area17274 = (function sablono$core$text_area17274(){
var G__17276 = arguments.length;
switch (G__17276) {
case 1:
return sablono.core.text_area17274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area17274.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17274.call(null,name,null);
});

sablono.core.text_area17274.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17274.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17274);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17278 = (function sablono$core$label17278(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17278);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17279 = (function sablono$core$submit_button17279(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17279);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17280 = (function sablono$core$reset_button17280(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17280);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to17281 = (function sablono$core$form_to17281(){
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to17281.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

sablono.core.form_to17281.cljs$core$IFn$_invoke$arity$variadic = (function (p__17284,body){
var vec__17285 = p__17284;
var method = cljs.core.nth.call(null,vec__17285,(0),null);
var action = cljs.core.nth.call(null,vec__17285,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to17281.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17281.cljs$lang$applyTo = (function (seq17282){
var G__17283 = cljs.core.first.call(null,seq17282);
var seq17282__$1 = cljs.core.next.call(null,seq17282);
return sablono.core.form_to17281.cljs$core$IFn$_invoke$arity$variadic(G__17283,seq17282__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17281);

//# sourceMappingURL=core.js.map