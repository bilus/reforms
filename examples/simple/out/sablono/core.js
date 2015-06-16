// Compiled by ClojureScript 0.0-3211 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__8289__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__8288 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__8288,(0),null);
var body = cljs.core.nthnext.call(null,vec__8288,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__8289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8290__i = 0, G__8290__a = new Array(arguments.length -  0);
while (G__8290__i < G__8290__a.length) {G__8290__a[G__8290__i] = arguments[G__8290__i + 0]; ++G__8290__i;}
  args = new cljs.core.IndexedSeq(G__8290__a,0);
} 
return G__8289__delegate.call(this,args);};
G__8289.cljs$lang$maxFixedArity = 0;
G__8289.cljs$lang$applyTo = (function (arglist__8291){
var args = cljs.core.seq(arglist__8291);
return G__8289__delegate(args);
});
G__8289.cljs$core$IFn$_invoke$arity$variadic = G__8289__delegate;
return G__8289;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5089__auto__ = (function sablono$core$update_arglists_$_iter__8296(s__8297){
return (new cljs.core.LazySeq(null,(function (){
var s__8297__$1 = s__8297;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8297__$1);
if(temp__4126__auto__){
var s__8297__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8297__$2)){
var c__5087__auto__ = cljs.core.chunk_first.call(null,s__8297__$2);
var size__5088__auto__ = cljs.core.count.call(null,c__5087__auto__);
var b__8299 = cljs.core.chunk_buffer.call(null,size__5088__auto__);
if((function (){var i__8298 = (0);
while(true){
if((i__8298 < size__5088__auto__)){
var args = cljs.core._nth.call(null,c__5087__auto__,i__8298);
cljs.core.chunk_append.call(null,b__8299,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__8300 = (i__8298 + (1));
i__8298 = G__8300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8299),sablono$core$update_arglists_$_iter__8296.call(null,cljs.core.chunk_rest.call(null,s__8297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8299),null);
}
} else {
var args = cljs.core.first.call(null,s__8297__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__8296.call(null,cljs.core.rest.call(null,s__8297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5089__auto__.call(null,arglists);
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
var argseq__5375__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5375__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5089__auto__ = (function sablono$core$iter__8302(s__8303){
return (new cljs.core.LazySeq(null,(function (){
var s__8303__$1 = s__8303;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8303__$1);
if(temp__4126__auto__){
var s__8303__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8303__$2)){
var c__5087__auto__ = cljs.core.chunk_first.call(null,s__8303__$2);
var size__5088__auto__ = cljs.core.count.call(null,c__5087__auto__);
var b__8305 = cljs.core.chunk_buffer.call(null,size__5088__auto__);
if((function (){var i__8304 = (0);
while(true){
if((i__8304 < size__5088__auto__)){
var style = cljs.core._nth.call(null,c__5087__auto__,i__8304);
cljs.core.chunk_append.call(null,b__8305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__8306 = (i__8304 + (1));
i__8304 = G__8306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8305),sablono$core$iter__8302.call(null,cljs.core.chunk_rest.call(null,s__8303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8305),null);
}
} else {
var style = cljs.core.first.call(null,s__8303__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__8302.call(null,cljs.core.rest.call(null,s__8303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5089__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq8301){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8301));
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
sablono.core.link_to8307 = (function sablono$core$link_to8307(){
var argseq__5375__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to8307.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5375__auto__);
});

sablono.core.link_to8307.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to8307.cljs$lang$maxFixedArity = (1);

sablono.core.link_to8307.cljs$lang$applyTo = (function (seq8308){
var G__8309 = cljs.core.first.call(null,seq8308);
var seq8308__$1 = cljs.core.next.call(null,seq8308);
return sablono.core.link_to8307.cljs$core$IFn$_invoke$arity$variadic(G__8309,seq8308__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8307);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to8310 = (function sablono$core$mail_to8310(){
var argseq__5375__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to8310.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5375__auto__);
});

sablono.core.mail_to8310.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__8313){
var vec__8314 = p__8313;
var content = cljs.core.nth.call(null,vec__8314,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4335__auto__ = content;
if(cljs.core.truth_(or__4335__auto__)){
return or__4335__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to8310.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to8310.cljs$lang$applyTo = (function (seq8311){
var G__8312 = cljs.core.first.call(null,seq8311);
var seq8311__$1 = cljs.core.next.call(null,seq8311);
return sablono.core.mail_to8310.cljs$core$IFn$_invoke$arity$variadic(G__8312,seq8311__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8310);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list8315 = (function sablono$core$unordered_list8315(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5089__auto__ = (function sablono$core$unordered_list8315_$_iter__8320(s__8321){
return (new cljs.core.LazySeq(null,(function (){
var s__8321__$1 = s__8321;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8321__$1);
if(temp__4126__auto__){
var s__8321__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8321__$2)){
var c__5087__auto__ = cljs.core.chunk_first.call(null,s__8321__$2);
var size__5088__auto__ = cljs.core.count.call(null,c__5087__auto__);
var b__8323 = cljs.core.chunk_buffer.call(null,size__5088__auto__);
if((function (){var i__8322 = (0);
while(true){
if((i__8322 < size__5088__auto__)){
var x = cljs.core._nth.call(null,c__5087__auto__,i__8322);
cljs.core.chunk_append.call(null,b__8323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8324 = (i__8322 + (1));
i__8322 = G__8324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8323),sablono$core$unordered_list8315_$_iter__8320.call(null,cljs.core.chunk_rest.call(null,s__8321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8323),null);
}
} else {
var x = cljs.core.first.call(null,s__8321__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list8315_$_iter__8320.call(null,cljs.core.rest.call(null,s__8321__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5089__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8315);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list8325 = (function sablono$core$ordered_list8325(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5089__auto__ = (function sablono$core$ordered_list8325_$_iter__8330(s__8331){
return (new cljs.core.LazySeq(null,(function (){
var s__8331__$1 = s__8331;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8331__$1);
if(temp__4126__auto__){
var s__8331__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8331__$2)){
var c__5087__auto__ = cljs.core.chunk_first.call(null,s__8331__$2);
var size__5088__auto__ = cljs.core.count.call(null,c__5087__auto__);
var b__8333 = cljs.core.chunk_buffer.call(null,size__5088__auto__);
if((function (){var i__8332 = (0);
while(true){
if((i__8332 < size__5088__auto__)){
var x = cljs.core._nth.call(null,c__5087__auto__,i__8332);
cljs.core.chunk_append.call(null,b__8333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8334 = (i__8332 + (1));
i__8332 = G__8334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),sablono$core$ordered_list8325_$_iter__8330.call(null,cljs.core.chunk_rest.call(null,s__8331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),null);
}
} else {
var x = cljs.core.first.call(null,s__8331__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list8325_$_iter__8330.call(null,cljs.core.rest.call(null,s__8331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5089__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8325);
/**
 * Create an image element.
 */
sablono.core.image8335 = (function sablono$core$image8335(){
var G__8337 = arguments.length;
switch (G__8337) {
case 1:
return sablono.core.image8335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image8335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image8335.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image8335.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image8335.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8335);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__8339_SHARP_,p2__8340_SHARP_){
return [cljs.core.str(p1__8339_SHARP_),cljs.core.str("["),cljs.core.str(p2__8340_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__8341_SHARP_,p2__8342_SHARP_){
return [cljs.core.str(p1__8341_SHARP_),cljs.core.str("-"),cljs.core.str(p2__8342_SHARP_)].join('');
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
sablono.core.color_field8343 = (function sablono$core$color_field8343(){
var G__8345 = arguments.length;
switch (G__8345) {
case 1:
return sablono.core.color_field8343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field8343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field8343.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.color_field8343.call(null,name__6029__auto__,null);
});

sablono.core.color_field8343.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.color_field8343.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8343);

/**
 * Creates a date input field.
 */
sablono.core.date_field8346 = (function sablono$core$date_field8346(){
var G__8348 = arguments.length;
switch (G__8348) {
case 1:
return sablono.core.date_field8346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field8346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field8346.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.date_field8346.call(null,name__6029__auto__,null);
});

sablono.core.date_field8346.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.date_field8346.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8346);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field8349 = (function sablono$core$datetime_field8349(){
var G__8351 = arguments.length;
switch (G__8351) {
case 1:
return sablono.core.datetime_field8349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field8349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field8349.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.datetime_field8349.call(null,name__6029__auto__,null);
});

sablono.core.datetime_field8349.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.datetime_field8349.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8349);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field8352 = (function sablono$core$datetime_local_field8352(){
var G__8354 = arguments.length;
switch (G__8354) {
case 1:
return sablono.core.datetime_local_field8352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field8352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field8352.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.datetime_local_field8352.call(null,name__6029__auto__,null);
});

sablono.core.datetime_local_field8352.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.datetime_local_field8352.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8352);

/**
 * Creates a email input field.
 */
sablono.core.email_field8355 = (function sablono$core$email_field8355(){
var G__8357 = arguments.length;
switch (G__8357) {
case 1:
return sablono.core.email_field8355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field8355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field8355.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.email_field8355.call(null,name__6029__auto__,null);
});

sablono.core.email_field8355.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.email_field8355.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8355);

/**
 * Creates a file input field.
 */
sablono.core.file_field8358 = (function sablono$core$file_field8358(){
var G__8360 = arguments.length;
switch (G__8360) {
case 1:
return sablono.core.file_field8358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field8358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field8358.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.file_field8358.call(null,name__6029__auto__,null);
});

sablono.core.file_field8358.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.file_field8358.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8358);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field8361 = (function sablono$core$hidden_field8361(){
var G__8363 = arguments.length;
switch (G__8363) {
case 1:
return sablono.core.hidden_field8361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field8361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field8361.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.hidden_field8361.call(null,name__6029__auto__,null);
});

sablono.core.hidden_field8361.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.hidden_field8361.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8361);

/**
 * Creates a month input field.
 */
sablono.core.month_field8364 = (function sablono$core$month_field8364(){
var G__8366 = arguments.length;
switch (G__8366) {
case 1:
return sablono.core.month_field8364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field8364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field8364.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.month_field8364.call(null,name__6029__auto__,null);
});

sablono.core.month_field8364.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.month_field8364.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8364);

/**
 * Creates a number input field.
 */
sablono.core.number_field8367 = (function sablono$core$number_field8367(){
var G__8369 = arguments.length;
switch (G__8369) {
case 1:
return sablono.core.number_field8367.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field8367.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field8367.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.number_field8367.call(null,name__6029__auto__,null);
});

sablono.core.number_field8367.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.number_field8367.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8367);

/**
 * Creates a password input field.
 */
sablono.core.password_field8370 = (function sablono$core$password_field8370(){
var G__8372 = arguments.length;
switch (G__8372) {
case 1:
return sablono.core.password_field8370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field8370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field8370.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.password_field8370.call(null,name__6029__auto__,null);
});

sablono.core.password_field8370.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.password_field8370.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8370);

/**
 * Creates a range input field.
 */
sablono.core.range_field8373 = (function sablono$core$range_field8373(){
var G__8375 = arguments.length;
switch (G__8375) {
case 1:
return sablono.core.range_field8373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field8373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field8373.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.range_field8373.call(null,name__6029__auto__,null);
});

sablono.core.range_field8373.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.range_field8373.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8373);

/**
 * Creates a search input field.
 */
sablono.core.search_field8376 = (function sablono$core$search_field8376(){
var G__8378 = arguments.length;
switch (G__8378) {
case 1:
return sablono.core.search_field8376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field8376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field8376.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.search_field8376.call(null,name__6029__auto__,null);
});

sablono.core.search_field8376.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.search_field8376.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8376);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field8379 = (function sablono$core$tel_field8379(){
var G__8381 = arguments.length;
switch (G__8381) {
case 1:
return sablono.core.tel_field8379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field8379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field8379.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.tel_field8379.call(null,name__6029__auto__,null);
});

sablono.core.tel_field8379.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.tel_field8379.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8379);

/**
 * Creates a text input field.
 */
sablono.core.text_field8382 = (function sablono$core$text_field8382(){
var G__8384 = arguments.length;
switch (G__8384) {
case 1:
return sablono.core.text_field8382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field8382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field8382.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.text_field8382.call(null,name__6029__auto__,null);
});

sablono.core.text_field8382.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.text_field8382.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8382);

/**
 * Creates a time input field.
 */
sablono.core.time_field8385 = (function sablono$core$time_field8385(){
var G__8387 = arguments.length;
switch (G__8387) {
case 1:
return sablono.core.time_field8385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field8385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field8385.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.time_field8385.call(null,name__6029__auto__,null);
});

sablono.core.time_field8385.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.time_field8385.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8385);

/**
 * Creates a url input field.
 */
sablono.core.url_field8388 = (function sablono$core$url_field8388(){
var G__8390 = arguments.length;
switch (G__8390) {
case 1:
return sablono.core.url_field8388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field8388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field8388.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.url_field8388.call(null,name__6029__auto__,null);
});

sablono.core.url_field8388.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.url_field8388.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8388);

/**
 * Creates a week input field.
 */
sablono.core.week_field8391 = (function sablono$core$week_field8391(){
var G__8393 = arguments.length;
switch (G__8393) {
case 1:
return sablono.core.week_field8391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field8391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field8391.cljs$core$IFn$_invoke$arity$1 = (function (name__6029__auto__){
return sablono.core.week_field8391.call(null,name__6029__auto__,null);
});

sablono.core.week_field8391.cljs$core$IFn$_invoke$arity$2 = (function (name__6029__auto__,value__6030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6029__auto__,value__6030__auto__);
});

sablono.core.week_field8391.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8391);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box8411 = (function sablono$core$check_box8411(){
var G__8413 = arguments.length;
switch (G__8413) {
case 1:
return sablono.core.check_box8411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box8411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box8411.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box8411.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box8411.call(null,name,null);
});

sablono.core.check_box8411.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box8411.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box8411.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box8411.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8411);
/**
 * Creates a radio button.
 */
sablono.core.radio_button8415 = (function sablono$core$radio_button8415(){
var G__8417 = arguments.length;
switch (G__8417) {
case 1:
return sablono.core.radio_button8415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button8415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button8415.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button8415.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button8415.call(null,group,null);
});

sablono.core.radio_button8415.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button8415.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button8415.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button8415.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8415);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options8419 = (function sablono$core$select_options8419(){
var G__8421 = arguments.length;
switch (G__8421) {
case 1:
return sablono.core.select_options8419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options8419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options8419.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options8419.call(null,coll,null);
});

sablono.core.select_options8419.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5089__auto__ = (function sablono$core$iter__8422(s__8423){
return (new cljs.core.LazySeq(null,(function (){
var s__8423__$1 = s__8423;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8423__$1);
if(temp__4126__auto__){
var s__8423__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8423__$2)){
var c__5087__auto__ = cljs.core.chunk_first.call(null,s__8423__$2);
var size__5088__auto__ = cljs.core.count.call(null,c__5087__auto__);
var b__8425 = cljs.core.chunk_buffer.call(null,size__5088__auto__);
if((function (){var i__8424 = (0);
while(true){
if((i__8424 < size__5088__auto__)){
var x = cljs.core._nth.call(null,c__5087__auto__,i__8424);
cljs.core.chunk_append.call(null,b__8425,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8428 = x;
var text = cljs.core.nth.call(null,vec__8428,(0),null);
var val = cljs.core.nth.call(null,vec__8428,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8428,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options8419.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__8431 = (i__8424 + (1));
i__8424 = G__8431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8425),sablono$core$iter__8422.call(null,cljs.core.chunk_rest.call(null,s__8423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8425),null);
}
} else {
var x = cljs.core.first.call(null,s__8423__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8429 = x;
var text = cljs.core.nth.call(null,vec__8429,(0),null);
var val = cljs.core.nth.call(null,vec__8429,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8429,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options8419.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__8422.call(null,cljs.core.rest.call(null,s__8423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5089__auto__.call(null,coll);
});

sablono.core.select_options8419.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8419);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down8432 = (function sablono$core$drop_down8432(){
var G__8434 = arguments.length;
switch (G__8434) {
case 2:
return sablono.core.drop_down8432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down8432.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down8432.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down8432.call(null,name,options,null);
});

sablono.core.drop_down8432.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down8432.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8432);
/**
 * Creates a text area element.
 */
sablono.core.text_area8436 = (function sablono$core$text_area8436(){
var G__8438 = arguments.length;
switch (G__8438) {
case 1:
return sablono.core.text_area8436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area8436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area8436.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area8436.call(null,name,null);
});

sablono.core.text_area8436.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area8436.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8436);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label8440 = (function sablono$core$label8440(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8440);
/**
 * Creates a submit button.
 */
sablono.core.submit_button8441 = (function sablono$core$submit_button8441(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8441);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button8442 = (function sablono$core$reset_button8442(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8442);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to8443 = (function sablono$core$form_to8443(){
var argseq__5375__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to8443.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5375__auto__);
});

sablono.core.form_to8443.cljs$core$IFn$_invoke$arity$variadic = (function (p__8446,body){
var vec__8447 = p__8446;
var method = cljs.core.nth.call(null,vec__8447,(0),null);
var action = cljs.core.nth.call(null,vec__8447,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to8443.cljs$lang$maxFixedArity = (1);

sablono.core.form_to8443.cljs$lang$applyTo = (function (seq8444){
var G__8445 = cljs.core.first.call(null,seq8444);
var seq8444__$1 = cljs.core.next.call(null,seq8444);
return sablono.core.form_to8443.cljs$core$IFn$_invoke$arity$variadic(G__8445,seq8444__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8443);

//# sourceMappingURL=core.js.map