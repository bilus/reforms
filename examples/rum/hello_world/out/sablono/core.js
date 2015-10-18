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
var G__14460__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14459 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__14459,(0),null);
var body = cljs.core.nthnext.call(null,vec__14459,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14461__i = 0, G__14461__a = new Array(arguments.length -  0);
while (G__14461__i < G__14461__a.length) {G__14461__a[G__14461__i] = arguments[G__14461__i + 0]; ++G__14461__i;}
  args = new cljs.core.IndexedSeq(G__14461__a,0);
} 
return G__14460__delegate.call(this,args);};
G__14460.cljs$lang$maxFixedArity = 0;
G__14460.cljs$lang$applyTo = (function (arglist__14462){
var args = cljs.core.seq(arglist__14462);
return G__14460__delegate(args);
});
G__14460.cljs$core$IFn$_invoke$arity$variadic = G__14460__delegate;
return G__14460;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__14467(s__14468){
return (new cljs.core.LazySeq(null,(function (){
var s__14468__$1 = s__14468;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14468__$1);
if(temp__4425__auto__){
var s__14468__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14468__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__14468__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__14470 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__14469 = (0);
while(true){
if((i__14469 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__14469);
cljs.core.chunk_append.call(null,b__14470,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14471 = (i__14469 + (1));
i__14469 = G__14471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14470),sablono$core$update_arglists_$_iter__14467.call(null,cljs.core.chunk_rest.call(null,s__14468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14470),null);
}
} else {
var args = cljs.core.first.call(null,s__14468__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14467.call(null,cljs.core.rest.call(null,s__14468__$2)));
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
var len__5651__auto___14477 = arguments.length;
var i__5652__auto___14478 = (0);
while(true){
if((i__5652__auto___14478 < len__5651__auto___14477)){
args__5658__auto__.push((arguments[i__5652__auto___14478]));

var G__14479 = (i__5652__auto___14478 + (1));
i__5652__auto___14478 = G__14479;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__14473(s__14474){
return (new cljs.core.LazySeq(null,(function (){
var s__14474__$1 = s__14474;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14474__$1);
if(temp__4425__auto__){
var s__14474__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14474__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__14474__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__14476 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__14475 = (0);
while(true){
if((i__14475 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__14475);
cljs.core.chunk_append.call(null,b__14476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14480 = (i__14475 + (1));
i__14475 = G__14480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14476),sablono$core$iter__14473.call(null,cljs.core.chunk_rest.call(null,s__14474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14476),null);
}
} else {
var style = cljs.core.first.call(null,s__14474__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14473.call(null,cljs.core.rest.call(null,s__14474__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq14472){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14472));
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
sablono.core.link_to14481 = (function sablono$core$link_to14481(var_args){
var args__5658__auto__ = [];
var len__5651__auto___14484 = arguments.length;
var i__5652__auto___14485 = (0);
while(true){
if((i__5652__auto___14485 < len__5651__auto___14484)){
args__5658__auto__.push((arguments[i__5652__auto___14485]));

var G__14486 = (i__5652__auto___14485 + (1));
i__5652__auto___14485 = G__14486;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to14481.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to14481.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14481.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14481.cljs$lang$applyTo = (function (seq14482){
var G__14483 = cljs.core.first.call(null,seq14482);
var seq14482__$1 = cljs.core.next.call(null,seq14482);
return sablono.core.link_to14481.cljs$core$IFn$_invoke$arity$variadic(G__14483,seq14482__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14481);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14487 = (function sablono$core$mail_to14487(var_args){
var args__5658__auto__ = [];
var len__5651__auto___14492 = arguments.length;
var i__5652__auto___14493 = (0);
while(true){
if((i__5652__auto___14493 < len__5651__auto___14492)){
args__5658__auto__.push((arguments[i__5652__auto___14493]));

var G__14494 = (i__5652__auto___14493 + (1));
i__5652__auto___14493 = G__14494;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to14487.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to14487.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14490){
var vec__14491 = p__14490;
var content = cljs.core.nth.call(null,vec__14491,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14487.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14487.cljs$lang$applyTo = (function (seq14488){
var G__14489 = cljs.core.first.call(null,seq14488);
var seq14488__$1 = cljs.core.next.call(null,seq14488);
return sablono.core.mail_to14487.cljs$core$IFn$_invoke$arity$variadic(G__14489,seq14488__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14487);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14495 = (function sablono$core$unordered_list14495(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list14495_$_iter__14500(s__14501){
return (new cljs.core.LazySeq(null,(function (){
var s__14501__$1 = s__14501;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14501__$1);
if(temp__4425__auto__){
var s__14501__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14501__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__14501__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__14503 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__14502 = (0);
while(true){
if((i__14502 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__14502);
cljs.core.chunk_append.call(null,b__14503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14504 = (i__14502 + (1));
i__14502 = G__14504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14503),sablono$core$unordered_list14495_$_iter__14500.call(null,cljs.core.chunk_rest.call(null,s__14501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14503),null);
}
} else {
var x = cljs.core.first.call(null,s__14501__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14495_$_iter__14500.call(null,cljs.core.rest.call(null,s__14501__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14495);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14505 = (function sablono$core$ordered_list14505(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list14505_$_iter__14510(s__14511){
return (new cljs.core.LazySeq(null,(function (){
var s__14511__$1 = s__14511;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14511__$1);
if(temp__4425__auto__){
var s__14511__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14511__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__14511__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__14513 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__14512 = (0);
while(true){
if((i__14512 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__14512);
cljs.core.chunk_append.call(null,b__14513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14514 = (i__14512 + (1));
i__14512 = G__14514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14513),sablono$core$ordered_list14505_$_iter__14510.call(null,cljs.core.chunk_rest.call(null,s__14511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14513),null);
}
} else {
var x = cljs.core.first.call(null,s__14511__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14505_$_iter__14510.call(null,cljs.core.rest.call(null,s__14511__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14505);
/**
 * Create an image element.
 */
sablono.core.image14515 = (function sablono$core$image14515(var_args){
var args14516 = [];
var len__5651__auto___14519 = arguments.length;
var i__5652__auto___14520 = (0);
while(true){
if((i__5652__auto___14520 < len__5651__auto___14519)){
args14516.push((arguments[i__5652__auto___14520]));

var G__14521 = (i__5652__auto___14520 + (1));
i__5652__auto___14520 = G__14521;
continue;
} else {
}
break;
}

var G__14518 = args14516.length;
switch (G__14518) {
case 1:
return sablono.core.image14515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14516.length)].join('')));

}
});

sablono.core.image14515.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image14515.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image14515.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14515);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14523_SHARP_,p2__14524_SHARP_){
return [cljs.core.str(p1__14523_SHARP_),cljs.core.str("["),cljs.core.str(p2__14524_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14525_SHARP_,p2__14526_SHARP_){
return [cljs.core.str(p1__14525_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14526_SHARP_)].join('');
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
sablono.core.color_field14527 = (function sablono$core$color_field14527(var_args){
var args14528 = [];
var len__5651__auto___14595 = arguments.length;
var i__5652__auto___14596 = (0);
while(true){
if((i__5652__auto___14596 < len__5651__auto___14595)){
args14528.push((arguments[i__5652__auto___14596]));

var G__14597 = (i__5652__auto___14596 + (1));
i__5652__auto___14596 = G__14597;
continue;
} else {
}
break;
}

var G__14530 = args14528.length;
switch (G__14530) {
case 1:
return sablono.core.color_field14527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14528.length)].join('')));

}
});

sablono.core.color_field14527.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.color_field14527.call(null,name__6198__auto__,null);
});

sablono.core.color_field14527.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.color_field14527.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14527);

/**
 * Creates a date input field.
 */
sablono.core.date_field14531 = (function sablono$core$date_field14531(var_args){
var args14532 = [];
var len__5651__auto___14599 = arguments.length;
var i__5652__auto___14600 = (0);
while(true){
if((i__5652__auto___14600 < len__5651__auto___14599)){
args14532.push((arguments[i__5652__auto___14600]));

var G__14601 = (i__5652__auto___14600 + (1));
i__5652__auto___14600 = G__14601;
continue;
} else {
}
break;
}

var G__14534 = args14532.length;
switch (G__14534) {
case 1:
return sablono.core.date_field14531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14532.length)].join('')));

}
});

sablono.core.date_field14531.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.date_field14531.call(null,name__6198__auto__,null);
});

sablono.core.date_field14531.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.date_field14531.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14531);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14535 = (function sablono$core$datetime_field14535(var_args){
var args14536 = [];
var len__5651__auto___14603 = arguments.length;
var i__5652__auto___14604 = (0);
while(true){
if((i__5652__auto___14604 < len__5651__auto___14603)){
args14536.push((arguments[i__5652__auto___14604]));

var G__14605 = (i__5652__auto___14604 + (1));
i__5652__auto___14604 = G__14605;
continue;
} else {
}
break;
}

var G__14538 = args14536.length;
switch (G__14538) {
case 1:
return sablono.core.datetime_field14535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14536.length)].join('')));

}
});

sablono.core.datetime_field14535.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_field14535.call(null,name__6198__auto__,null);
});

sablono.core.datetime_field14535.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_field14535.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14535);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14539 = (function sablono$core$datetime_local_field14539(var_args){
var args14540 = [];
var len__5651__auto___14607 = arguments.length;
var i__5652__auto___14608 = (0);
while(true){
if((i__5652__auto___14608 < len__5651__auto___14607)){
args14540.push((arguments[i__5652__auto___14608]));

var G__14609 = (i__5652__auto___14608 + (1));
i__5652__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var G__14542 = args14540.length;
switch (G__14542) {
case 1:
return sablono.core.datetime_local_field14539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14540.length)].join('')));

}
});

sablono.core.datetime_local_field14539.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_local_field14539.call(null,name__6198__auto__,null);
});

sablono.core.datetime_local_field14539.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_local_field14539.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14539);

/**
 * Creates a email input field.
 */
sablono.core.email_field14543 = (function sablono$core$email_field14543(var_args){
var args14544 = [];
var len__5651__auto___14611 = arguments.length;
var i__5652__auto___14612 = (0);
while(true){
if((i__5652__auto___14612 < len__5651__auto___14611)){
args14544.push((arguments[i__5652__auto___14612]));

var G__14613 = (i__5652__auto___14612 + (1));
i__5652__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var G__14546 = args14544.length;
switch (G__14546) {
case 1:
return sablono.core.email_field14543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14544.length)].join('')));

}
});

sablono.core.email_field14543.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.email_field14543.call(null,name__6198__auto__,null);
});

sablono.core.email_field14543.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.email_field14543.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14543);

/**
 * Creates a file input field.
 */
sablono.core.file_field14547 = (function sablono$core$file_field14547(var_args){
var args14548 = [];
var len__5651__auto___14615 = arguments.length;
var i__5652__auto___14616 = (0);
while(true){
if((i__5652__auto___14616 < len__5651__auto___14615)){
args14548.push((arguments[i__5652__auto___14616]));

var G__14617 = (i__5652__auto___14616 + (1));
i__5652__auto___14616 = G__14617;
continue;
} else {
}
break;
}

var G__14550 = args14548.length;
switch (G__14550) {
case 1:
return sablono.core.file_field14547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14548.length)].join('')));

}
});

sablono.core.file_field14547.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.file_field14547.call(null,name__6198__auto__,null);
});

sablono.core.file_field14547.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.file_field14547.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14547);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14551 = (function sablono$core$hidden_field14551(var_args){
var args14552 = [];
var len__5651__auto___14619 = arguments.length;
var i__5652__auto___14620 = (0);
while(true){
if((i__5652__auto___14620 < len__5651__auto___14619)){
args14552.push((arguments[i__5652__auto___14620]));

var G__14621 = (i__5652__auto___14620 + (1));
i__5652__auto___14620 = G__14621;
continue;
} else {
}
break;
}

var G__14554 = args14552.length;
switch (G__14554) {
case 1:
return sablono.core.hidden_field14551.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14551.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14552.length)].join('')));

}
});

sablono.core.hidden_field14551.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.hidden_field14551.call(null,name__6198__auto__,null);
});

sablono.core.hidden_field14551.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.hidden_field14551.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14551);

/**
 * Creates a month input field.
 */
sablono.core.month_field14555 = (function sablono$core$month_field14555(var_args){
var args14556 = [];
var len__5651__auto___14623 = arguments.length;
var i__5652__auto___14624 = (0);
while(true){
if((i__5652__auto___14624 < len__5651__auto___14623)){
args14556.push((arguments[i__5652__auto___14624]));

var G__14625 = (i__5652__auto___14624 + (1));
i__5652__auto___14624 = G__14625;
continue;
} else {
}
break;
}

var G__14558 = args14556.length;
switch (G__14558) {
case 1:
return sablono.core.month_field14555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14556.length)].join('')));

}
});

sablono.core.month_field14555.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.month_field14555.call(null,name__6198__auto__,null);
});

sablono.core.month_field14555.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.month_field14555.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14555);

/**
 * Creates a number input field.
 */
sablono.core.number_field14559 = (function sablono$core$number_field14559(var_args){
var args14560 = [];
var len__5651__auto___14627 = arguments.length;
var i__5652__auto___14628 = (0);
while(true){
if((i__5652__auto___14628 < len__5651__auto___14627)){
args14560.push((arguments[i__5652__auto___14628]));

var G__14629 = (i__5652__auto___14628 + (1));
i__5652__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var G__14562 = args14560.length;
switch (G__14562) {
case 1:
return sablono.core.number_field14559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14560.length)].join('')));

}
});

sablono.core.number_field14559.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.number_field14559.call(null,name__6198__auto__,null);
});

sablono.core.number_field14559.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.number_field14559.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14559);

/**
 * Creates a password input field.
 */
sablono.core.password_field14563 = (function sablono$core$password_field14563(var_args){
var args14564 = [];
var len__5651__auto___14631 = arguments.length;
var i__5652__auto___14632 = (0);
while(true){
if((i__5652__auto___14632 < len__5651__auto___14631)){
args14564.push((arguments[i__5652__auto___14632]));

var G__14633 = (i__5652__auto___14632 + (1));
i__5652__auto___14632 = G__14633;
continue;
} else {
}
break;
}

var G__14566 = args14564.length;
switch (G__14566) {
case 1:
return sablono.core.password_field14563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14564.length)].join('')));

}
});

sablono.core.password_field14563.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.password_field14563.call(null,name__6198__auto__,null);
});

sablono.core.password_field14563.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.password_field14563.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14563);

/**
 * Creates a range input field.
 */
sablono.core.range_field14567 = (function sablono$core$range_field14567(var_args){
var args14568 = [];
var len__5651__auto___14635 = arguments.length;
var i__5652__auto___14636 = (0);
while(true){
if((i__5652__auto___14636 < len__5651__auto___14635)){
args14568.push((arguments[i__5652__auto___14636]));

var G__14637 = (i__5652__auto___14636 + (1));
i__5652__auto___14636 = G__14637;
continue;
} else {
}
break;
}

var G__14570 = args14568.length;
switch (G__14570) {
case 1:
return sablono.core.range_field14567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14568.length)].join('')));

}
});

sablono.core.range_field14567.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.range_field14567.call(null,name__6198__auto__,null);
});

sablono.core.range_field14567.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.range_field14567.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14567);

/**
 * Creates a search input field.
 */
sablono.core.search_field14571 = (function sablono$core$search_field14571(var_args){
var args14572 = [];
var len__5651__auto___14639 = arguments.length;
var i__5652__auto___14640 = (0);
while(true){
if((i__5652__auto___14640 < len__5651__auto___14639)){
args14572.push((arguments[i__5652__auto___14640]));

var G__14641 = (i__5652__auto___14640 + (1));
i__5652__auto___14640 = G__14641;
continue;
} else {
}
break;
}

var G__14574 = args14572.length;
switch (G__14574) {
case 1:
return sablono.core.search_field14571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14572.length)].join('')));

}
});

sablono.core.search_field14571.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.search_field14571.call(null,name__6198__auto__,null);
});

sablono.core.search_field14571.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.search_field14571.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14571);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14575 = (function sablono$core$tel_field14575(var_args){
var args14576 = [];
var len__5651__auto___14643 = arguments.length;
var i__5652__auto___14644 = (0);
while(true){
if((i__5652__auto___14644 < len__5651__auto___14643)){
args14576.push((arguments[i__5652__auto___14644]));

var G__14645 = (i__5652__auto___14644 + (1));
i__5652__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var G__14578 = args14576.length;
switch (G__14578) {
case 1:
return sablono.core.tel_field14575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14576.length)].join('')));

}
});

sablono.core.tel_field14575.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.tel_field14575.call(null,name__6198__auto__,null);
});

sablono.core.tel_field14575.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.tel_field14575.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14575);

/**
 * Creates a text input field.
 */
sablono.core.text_field14579 = (function sablono$core$text_field14579(var_args){
var args14580 = [];
var len__5651__auto___14647 = arguments.length;
var i__5652__auto___14648 = (0);
while(true){
if((i__5652__auto___14648 < len__5651__auto___14647)){
args14580.push((arguments[i__5652__auto___14648]));

var G__14649 = (i__5652__auto___14648 + (1));
i__5652__auto___14648 = G__14649;
continue;
} else {
}
break;
}

var G__14582 = args14580.length;
switch (G__14582) {
case 1:
return sablono.core.text_field14579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14580.length)].join('')));

}
});

sablono.core.text_field14579.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.text_field14579.call(null,name__6198__auto__,null);
});

sablono.core.text_field14579.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.text_field14579.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14579);

/**
 * Creates a time input field.
 */
sablono.core.time_field14583 = (function sablono$core$time_field14583(var_args){
var args14584 = [];
var len__5651__auto___14651 = arguments.length;
var i__5652__auto___14652 = (0);
while(true){
if((i__5652__auto___14652 < len__5651__auto___14651)){
args14584.push((arguments[i__5652__auto___14652]));

var G__14653 = (i__5652__auto___14652 + (1));
i__5652__auto___14652 = G__14653;
continue;
} else {
}
break;
}

var G__14586 = args14584.length;
switch (G__14586) {
case 1:
return sablono.core.time_field14583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14584.length)].join('')));

}
});

sablono.core.time_field14583.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.time_field14583.call(null,name__6198__auto__,null);
});

sablono.core.time_field14583.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.time_field14583.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14583);

/**
 * Creates a url input field.
 */
sablono.core.url_field14587 = (function sablono$core$url_field14587(var_args){
var args14588 = [];
var len__5651__auto___14655 = arguments.length;
var i__5652__auto___14656 = (0);
while(true){
if((i__5652__auto___14656 < len__5651__auto___14655)){
args14588.push((arguments[i__5652__auto___14656]));

var G__14657 = (i__5652__auto___14656 + (1));
i__5652__auto___14656 = G__14657;
continue;
} else {
}
break;
}

var G__14590 = args14588.length;
switch (G__14590) {
case 1:
return sablono.core.url_field14587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14588.length)].join('')));

}
});

sablono.core.url_field14587.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.url_field14587.call(null,name__6198__auto__,null);
});

sablono.core.url_field14587.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.url_field14587.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14587);

/**
 * Creates a week input field.
 */
sablono.core.week_field14591 = (function sablono$core$week_field14591(var_args){
var args14592 = [];
var len__5651__auto___14659 = arguments.length;
var i__5652__auto___14660 = (0);
while(true){
if((i__5652__auto___14660 < len__5651__auto___14659)){
args14592.push((arguments[i__5652__auto___14660]));

var G__14661 = (i__5652__auto___14660 + (1));
i__5652__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var G__14594 = args14592.length;
switch (G__14594) {
case 1:
return sablono.core.week_field14591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14592.length)].join('')));

}
});

sablono.core.week_field14591.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.week_field14591.call(null,name__6198__auto__,null);
});

sablono.core.week_field14591.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.week_field14591.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14591);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14663 = (function sablono$core$check_box14663(var_args){
var args14664 = [];
var len__5651__auto___14667 = arguments.length;
var i__5652__auto___14668 = (0);
while(true){
if((i__5652__auto___14668 < len__5651__auto___14667)){
args14664.push((arguments[i__5652__auto___14668]));

var G__14669 = (i__5652__auto___14668 + (1));
i__5652__auto___14668 = G__14669;
continue;
} else {
}
break;
}

var G__14666 = args14664.length;
switch (G__14666) {
case 1:
return sablono.core.check_box14663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14663.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14664.length)].join('')));

}
});

sablono.core.check_box14663.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14663.call(null,name,null);
});

sablono.core.check_box14663.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14663.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box14663.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14663.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14663);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14671 = (function sablono$core$radio_button14671(var_args){
var args14672 = [];
var len__5651__auto___14675 = arguments.length;
var i__5652__auto___14676 = (0);
while(true){
if((i__5652__auto___14676 < len__5651__auto___14675)){
args14672.push((arguments[i__5652__auto___14676]));

var G__14677 = (i__5652__auto___14676 + (1));
i__5652__auto___14676 = G__14677;
continue;
} else {
}
break;
}

var G__14674 = args14672.length;
switch (G__14674) {
case 1:
return sablono.core.radio_button14671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14671.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14672.length)].join('')));

}
});

sablono.core.radio_button14671.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14671.call(null,group,null);
});

sablono.core.radio_button14671.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14671.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button14671.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14671.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14671);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14679 = (function sablono$core$select_options14679(coll){
var iter__5365__auto__ = (function sablono$core$select_options14679_$_iter__14688(s__14689){
return (new cljs.core.LazySeq(null,(function (){
var s__14689__$1 = s__14689;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14689__$1);
if(temp__4425__auto__){
var s__14689__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14689__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__14689__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__14691 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__14690 = (0);
while(true){
if((i__14690 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__14690);
cljs.core.chunk_append.call(null,b__14691,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14694 = x;
var text = cljs.core.nth.call(null,vec__14694,(0),null);
var val = cljs.core.nth.call(null,vec__14694,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14694,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14679.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__14696 = (i__14690 + (1));
i__14690 = G__14696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14691),sablono$core$select_options14679_$_iter__14688.call(null,cljs.core.chunk_rest.call(null,s__14689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14691),null);
}
} else {
var x = cljs.core.first.call(null,s__14689__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14695 = x;
var text = cljs.core.nth.call(null,vec__14695,(0),null);
var val = cljs.core.nth.call(null,vec__14695,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14695,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14679.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options14679_$_iter__14688.call(null,cljs.core.rest.call(null,s__14689__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14679);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14697 = (function sablono$core$drop_down14697(var_args){
var args14698 = [];
var len__5651__auto___14701 = arguments.length;
var i__5652__auto___14702 = (0);
while(true){
if((i__5652__auto___14702 < len__5651__auto___14701)){
args14698.push((arguments[i__5652__auto___14702]));

var G__14703 = (i__5652__auto___14702 + (1));
i__5652__auto___14702 = G__14703;
continue;
} else {
}
break;
}

var G__14700 = args14698.length;
switch (G__14700) {
case 2:
return sablono.core.drop_down14697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14697.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14698.length)].join('')));

}
});

sablono.core.drop_down14697.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14697.call(null,name,options,null);
});

sablono.core.drop_down14697.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14697.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14697);
/**
 * Creates a text area element.
 */
sablono.core.text_area14705 = (function sablono$core$text_area14705(var_args){
var args14706 = [];
var len__5651__auto___14709 = arguments.length;
var i__5652__auto___14710 = (0);
while(true){
if((i__5652__auto___14710 < len__5651__auto___14709)){
args14706.push((arguments[i__5652__auto___14710]));

var G__14711 = (i__5652__auto___14710 + (1));
i__5652__auto___14710 = G__14711;
continue;
} else {
}
break;
}

var G__14708 = args14706.length;
switch (G__14708) {
case 1:
return sablono.core.text_area14705.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14706.length)].join('')));

}
});

sablono.core.text_area14705.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14705.call(null,name,null);
});

sablono.core.text_area14705.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area14705.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14705);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14713 = (function sablono$core$label14713(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14713);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14714 = (function sablono$core$submit_button14714(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14714);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14715 = (function sablono$core$reset_button14715(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14715);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14716 = (function sablono$core$form_to14716(var_args){
var args__5658__auto__ = [];
var len__5651__auto___14721 = arguments.length;
var i__5652__auto___14722 = (0);
while(true){
if((i__5652__auto___14722 < len__5651__auto___14721)){
args__5658__auto__.push((arguments[i__5652__auto___14722]));

var G__14723 = (i__5652__auto___14722 + (1));
i__5652__auto___14722 = G__14723;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to14716.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to14716.cljs$core$IFn$_invoke$arity$variadic = (function (p__14719,body){
var vec__14720 = p__14719;
var method = cljs.core.nth.call(null,vec__14720,(0),null);
var action = cljs.core.nth.call(null,vec__14720,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to14716.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14716.cljs$lang$applyTo = (function (seq14717){
var G__14718 = cljs.core.first.call(null,seq14717);
var seq14717__$1 = cljs.core.next.call(null,seq14717);
return sablono.core.form_to14716.cljs$core$IFn$_invoke$arity$variadic(G__14718,seq14717__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14716);

//# sourceMappingURL=core.js.map