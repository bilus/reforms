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
var G__24658__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24657 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24657,(0),null);
var body = cljs.core.nthnext.call(null,vec__24657,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24659__i = 0, G__24659__a = new Array(arguments.length -  0);
while (G__24659__i < G__24659__a.length) {G__24659__a[G__24659__i] = arguments[G__24659__i + 0]; ++G__24659__i;}
  args = new cljs.core.IndexedSeq(G__24659__a,0);
} 
return G__24658__delegate.call(this,args);};
G__24658.cljs$lang$maxFixedArity = 0;
G__24658.cljs$lang$applyTo = (function (arglist__24660){
var args = cljs.core.seq(arglist__24660);
return G__24658__delegate(args);
});
G__24658.cljs$core$IFn$_invoke$arity$variadic = G__24658__delegate;
return G__24658;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__24665(s__24666){
return (new cljs.core.LazySeq(null,(function (){
var s__24666__$1 = s__24666;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24666__$1);
if(temp__4425__auto__){
var s__24666__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24666__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24666__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24668 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24667 = (0);
while(true){
if((i__24667 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__24667);
cljs.core.chunk_append.call(null,b__24668,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24669 = (i__24667 + (1));
i__24667 = G__24669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24668),sablono$core$update_arglists_$_iter__24665.call(null,cljs.core.chunk_rest.call(null,s__24666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24668),null);
}
} else {
var args = cljs.core.first.call(null,s__24666__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24665.call(null,cljs.core.rest.call(null,s__24666__$2)));
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
var len__5651__auto___24675 = arguments.length;
var i__5652__auto___24676 = (0);
while(true){
if((i__5652__auto___24676 < len__5651__auto___24675)){
args__5658__auto__.push((arguments[i__5652__auto___24676]));

var G__24677 = (i__5652__auto___24676 + (1));
i__5652__auto___24676 = G__24677;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__24671(s__24672){
return (new cljs.core.LazySeq(null,(function (){
var s__24672__$1 = s__24672;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24672__$1);
if(temp__4425__auto__){
var s__24672__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24672__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24672__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24674 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24673 = (0);
while(true){
if((i__24673 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__24673);
cljs.core.chunk_append.call(null,b__24674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24678 = (i__24673 + (1));
i__24673 = G__24678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24674),sablono$core$iter__24671.call(null,cljs.core.chunk_rest.call(null,s__24672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24674),null);
}
} else {
var style = cljs.core.first.call(null,s__24672__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24671.call(null,cljs.core.rest.call(null,s__24672__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq24670){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24670));
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
sablono.core.link_to24679 = (function sablono$core$link_to24679(var_args){
var args__5658__auto__ = [];
var len__5651__auto___24682 = arguments.length;
var i__5652__auto___24683 = (0);
while(true){
if((i__5652__auto___24683 < len__5651__auto___24682)){
args__5658__auto__.push((arguments[i__5652__auto___24683]));

var G__24684 = (i__5652__auto___24683 + (1));
i__5652__auto___24683 = G__24684;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to24679.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to24679.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24679.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24679.cljs$lang$applyTo = (function (seq24680){
var G__24681 = cljs.core.first.call(null,seq24680);
var seq24680__$1 = cljs.core.next.call(null,seq24680);
return sablono.core.link_to24679.cljs$core$IFn$_invoke$arity$variadic(G__24681,seq24680__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24679);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24685 = (function sablono$core$mail_to24685(var_args){
var args__5658__auto__ = [];
var len__5651__auto___24690 = arguments.length;
var i__5652__auto___24691 = (0);
while(true){
if((i__5652__auto___24691 < len__5651__auto___24690)){
args__5658__auto__.push((arguments[i__5652__auto___24691]));

var G__24692 = (i__5652__auto___24691 + (1));
i__5652__auto___24691 = G__24692;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24685.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to24685.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24688){
var vec__24689 = p__24688;
var content = cljs.core.nth.call(null,vec__24689,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24685.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24685.cljs$lang$applyTo = (function (seq24686){
var G__24687 = cljs.core.first.call(null,seq24686);
var seq24686__$1 = cljs.core.next.call(null,seq24686);
return sablono.core.mail_to24685.cljs$core$IFn$_invoke$arity$variadic(G__24687,seq24686__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24685);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24693 = (function sablono$core$unordered_list24693(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list24693_$_iter__24698(s__24699){
return (new cljs.core.LazySeq(null,(function (){
var s__24699__$1 = s__24699;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24699__$1);
if(temp__4425__auto__){
var s__24699__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24699__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24699__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24701 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24700 = (0);
while(true){
if((i__24700 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__24700);
cljs.core.chunk_append.call(null,b__24701,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24702 = (i__24700 + (1));
i__24700 = G__24702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24701),sablono$core$unordered_list24693_$_iter__24698.call(null,cljs.core.chunk_rest.call(null,s__24699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24701),null);
}
} else {
var x = cljs.core.first.call(null,s__24699__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24693_$_iter__24698.call(null,cljs.core.rest.call(null,s__24699__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24693);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24703 = (function sablono$core$ordered_list24703(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list24703_$_iter__24708(s__24709){
return (new cljs.core.LazySeq(null,(function (){
var s__24709__$1 = s__24709;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24709__$1);
if(temp__4425__auto__){
var s__24709__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24709__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24709__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24711 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24710 = (0);
while(true){
if((i__24710 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__24710);
cljs.core.chunk_append.call(null,b__24711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24712 = (i__24710 + (1));
i__24710 = G__24712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24711),sablono$core$ordered_list24703_$_iter__24708.call(null,cljs.core.chunk_rest.call(null,s__24709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24711),null);
}
} else {
var x = cljs.core.first.call(null,s__24709__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24703_$_iter__24708.call(null,cljs.core.rest.call(null,s__24709__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24703);
/**
 * Create an image element.
 */
sablono.core.image24713 = (function sablono$core$image24713(var_args){
var args24714 = [];
var len__5651__auto___24717 = arguments.length;
var i__5652__auto___24718 = (0);
while(true){
if((i__5652__auto___24718 < len__5651__auto___24717)){
args24714.push((arguments[i__5652__auto___24718]));

var G__24719 = (i__5652__auto___24718 + (1));
i__5652__auto___24718 = G__24719;
continue;
} else {
}
break;
}

var G__24716 = args24714.length;
switch (G__24716) {
case 1:
return sablono.core.image24713.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24713.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24714.length)].join('')));

}
});

sablono.core.image24713.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24713.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24713.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24713);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24721_SHARP_,p2__24722_SHARP_){
return [cljs.core.str(p1__24721_SHARP_),cljs.core.str("["),cljs.core.str(p2__24722_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24723_SHARP_,p2__24724_SHARP_){
return [cljs.core.str(p1__24723_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24724_SHARP_)].join('');
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
sablono.core.color_field24725 = (function sablono$core$color_field24725(var_args){
var args24726 = [];
var len__5651__auto___24793 = arguments.length;
var i__5652__auto___24794 = (0);
while(true){
if((i__5652__auto___24794 < len__5651__auto___24793)){
args24726.push((arguments[i__5652__auto___24794]));

var G__24795 = (i__5652__auto___24794 + (1));
i__5652__auto___24794 = G__24795;
continue;
} else {
}
break;
}

var G__24728 = args24726.length;
switch (G__24728) {
case 1:
return sablono.core.color_field24725.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24726.length)].join('')));

}
});

sablono.core.color_field24725.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.color_field24725.call(null,name__6198__auto__,null);
});

sablono.core.color_field24725.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.color_field24725.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24725);

/**
 * Creates a date input field.
 */
sablono.core.date_field24729 = (function sablono$core$date_field24729(var_args){
var args24730 = [];
var len__5651__auto___24797 = arguments.length;
var i__5652__auto___24798 = (0);
while(true){
if((i__5652__auto___24798 < len__5651__auto___24797)){
args24730.push((arguments[i__5652__auto___24798]));

var G__24799 = (i__5652__auto___24798 + (1));
i__5652__auto___24798 = G__24799;
continue;
} else {
}
break;
}

var G__24732 = args24730.length;
switch (G__24732) {
case 1:
return sablono.core.date_field24729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24730.length)].join('')));

}
});

sablono.core.date_field24729.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.date_field24729.call(null,name__6198__auto__,null);
});

sablono.core.date_field24729.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.date_field24729.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24729);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24733 = (function sablono$core$datetime_field24733(var_args){
var args24734 = [];
var len__5651__auto___24801 = arguments.length;
var i__5652__auto___24802 = (0);
while(true){
if((i__5652__auto___24802 < len__5651__auto___24801)){
args24734.push((arguments[i__5652__auto___24802]));

var G__24803 = (i__5652__auto___24802 + (1));
i__5652__auto___24802 = G__24803;
continue;
} else {
}
break;
}

var G__24736 = args24734.length;
switch (G__24736) {
case 1:
return sablono.core.datetime_field24733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24734.length)].join('')));

}
});

sablono.core.datetime_field24733.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_field24733.call(null,name__6198__auto__,null);
});

sablono.core.datetime_field24733.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_field24733.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24733);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24737 = (function sablono$core$datetime_local_field24737(var_args){
var args24738 = [];
var len__5651__auto___24805 = arguments.length;
var i__5652__auto___24806 = (0);
while(true){
if((i__5652__auto___24806 < len__5651__auto___24805)){
args24738.push((arguments[i__5652__auto___24806]));

var G__24807 = (i__5652__auto___24806 + (1));
i__5652__auto___24806 = G__24807;
continue;
} else {
}
break;
}

var G__24740 = args24738.length;
switch (G__24740) {
case 1:
return sablono.core.datetime_local_field24737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24738.length)].join('')));

}
});

sablono.core.datetime_local_field24737.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.datetime_local_field24737.call(null,name__6198__auto__,null);
});

sablono.core.datetime_local_field24737.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.datetime_local_field24737.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24737);

/**
 * Creates a email input field.
 */
sablono.core.email_field24741 = (function sablono$core$email_field24741(var_args){
var args24742 = [];
var len__5651__auto___24809 = arguments.length;
var i__5652__auto___24810 = (0);
while(true){
if((i__5652__auto___24810 < len__5651__auto___24809)){
args24742.push((arguments[i__5652__auto___24810]));

var G__24811 = (i__5652__auto___24810 + (1));
i__5652__auto___24810 = G__24811;
continue;
} else {
}
break;
}

var G__24744 = args24742.length;
switch (G__24744) {
case 1:
return sablono.core.email_field24741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24742.length)].join('')));

}
});

sablono.core.email_field24741.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.email_field24741.call(null,name__6198__auto__,null);
});

sablono.core.email_field24741.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.email_field24741.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24741);

/**
 * Creates a file input field.
 */
sablono.core.file_field24745 = (function sablono$core$file_field24745(var_args){
var args24746 = [];
var len__5651__auto___24813 = arguments.length;
var i__5652__auto___24814 = (0);
while(true){
if((i__5652__auto___24814 < len__5651__auto___24813)){
args24746.push((arguments[i__5652__auto___24814]));

var G__24815 = (i__5652__auto___24814 + (1));
i__5652__auto___24814 = G__24815;
continue;
} else {
}
break;
}

var G__24748 = args24746.length;
switch (G__24748) {
case 1:
return sablono.core.file_field24745.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24745.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24746.length)].join('')));

}
});

sablono.core.file_field24745.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.file_field24745.call(null,name__6198__auto__,null);
});

sablono.core.file_field24745.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.file_field24745.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24745);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24749 = (function sablono$core$hidden_field24749(var_args){
var args24750 = [];
var len__5651__auto___24817 = arguments.length;
var i__5652__auto___24818 = (0);
while(true){
if((i__5652__auto___24818 < len__5651__auto___24817)){
args24750.push((arguments[i__5652__auto___24818]));

var G__24819 = (i__5652__auto___24818 + (1));
i__5652__auto___24818 = G__24819;
continue;
} else {
}
break;
}

var G__24752 = args24750.length;
switch (G__24752) {
case 1:
return sablono.core.hidden_field24749.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24749.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24750.length)].join('')));

}
});

sablono.core.hidden_field24749.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.hidden_field24749.call(null,name__6198__auto__,null);
});

sablono.core.hidden_field24749.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.hidden_field24749.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24749);

/**
 * Creates a month input field.
 */
sablono.core.month_field24753 = (function sablono$core$month_field24753(var_args){
var args24754 = [];
var len__5651__auto___24821 = arguments.length;
var i__5652__auto___24822 = (0);
while(true){
if((i__5652__auto___24822 < len__5651__auto___24821)){
args24754.push((arguments[i__5652__auto___24822]));

var G__24823 = (i__5652__auto___24822 + (1));
i__5652__auto___24822 = G__24823;
continue;
} else {
}
break;
}

var G__24756 = args24754.length;
switch (G__24756) {
case 1:
return sablono.core.month_field24753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24754.length)].join('')));

}
});

sablono.core.month_field24753.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.month_field24753.call(null,name__6198__auto__,null);
});

sablono.core.month_field24753.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.month_field24753.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24753);

/**
 * Creates a number input field.
 */
sablono.core.number_field24757 = (function sablono$core$number_field24757(var_args){
var args24758 = [];
var len__5651__auto___24825 = arguments.length;
var i__5652__auto___24826 = (0);
while(true){
if((i__5652__auto___24826 < len__5651__auto___24825)){
args24758.push((arguments[i__5652__auto___24826]));

var G__24827 = (i__5652__auto___24826 + (1));
i__5652__auto___24826 = G__24827;
continue;
} else {
}
break;
}

var G__24760 = args24758.length;
switch (G__24760) {
case 1:
return sablono.core.number_field24757.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24758.length)].join('')));

}
});

sablono.core.number_field24757.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.number_field24757.call(null,name__6198__auto__,null);
});

sablono.core.number_field24757.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.number_field24757.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24757);

/**
 * Creates a password input field.
 */
sablono.core.password_field24761 = (function sablono$core$password_field24761(var_args){
var args24762 = [];
var len__5651__auto___24829 = arguments.length;
var i__5652__auto___24830 = (0);
while(true){
if((i__5652__auto___24830 < len__5651__auto___24829)){
args24762.push((arguments[i__5652__auto___24830]));

var G__24831 = (i__5652__auto___24830 + (1));
i__5652__auto___24830 = G__24831;
continue;
} else {
}
break;
}

var G__24764 = args24762.length;
switch (G__24764) {
case 1:
return sablono.core.password_field24761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24762.length)].join('')));

}
});

sablono.core.password_field24761.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.password_field24761.call(null,name__6198__auto__,null);
});

sablono.core.password_field24761.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.password_field24761.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24761);

/**
 * Creates a range input field.
 */
sablono.core.range_field24765 = (function sablono$core$range_field24765(var_args){
var args24766 = [];
var len__5651__auto___24833 = arguments.length;
var i__5652__auto___24834 = (0);
while(true){
if((i__5652__auto___24834 < len__5651__auto___24833)){
args24766.push((arguments[i__5652__auto___24834]));

var G__24835 = (i__5652__auto___24834 + (1));
i__5652__auto___24834 = G__24835;
continue;
} else {
}
break;
}

var G__24768 = args24766.length;
switch (G__24768) {
case 1:
return sablono.core.range_field24765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24766.length)].join('')));

}
});

sablono.core.range_field24765.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.range_field24765.call(null,name__6198__auto__,null);
});

sablono.core.range_field24765.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.range_field24765.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24765);

/**
 * Creates a search input field.
 */
sablono.core.search_field24769 = (function sablono$core$search_field24769(var_args){
var args24770 = [];
var len__5651__auto___24837 = arguments.length;
var i__5652__auto___24838 = (0);
while(true){
if((i__5652__auto___24838 < len__5651__auto___24837)){
args24770.push((arguments[i__5652__auto___24838]));

var G__24839 = (i__5652__auto___24838 + (1));
i__5652__auto___24838 = G__24839;
continue;
} else {
}
break;
}

var G__24772 = args24770.length;
switch (G__24772) {
case 1:
return sablono.core.search_field24769.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24769.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24770.length)].join('')));

}
});

sablono.core.search_field24769.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.search_field24769.call(null,name__6198__auto__,null);
});

sablono.core.search_field24769.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.search_field24769.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24769);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24773 = (function sablono$core$tel_field24773(var_args){
var args24774 = [];
var len__5651__auto___24841 = arguments.length;
var i__5652__auto___24842 = (0);
while(true){
if((i__5652__auto___24842 < len__5651__auto___24841)){
args24774.push((arguments[i__5652__auto___24842]));

var G__24843 = (i__5652__auto___24842 + (1));
i__5652__auto___24842 = G__24843;
continue;
} else {
}
break;
}

var G__24776 = args24774.length;
switch (G__24776) {
case 1:
return sablono.core.tel_field24773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24774.length)].join('')));

}
});

sablono.core.tel_field24773.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.tel_field24773.call(null,name__6198__auto__,null);
});

sablono.core.tel_field24773.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.tel_field24773.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24773);

/**
 * Creates a text input field.
 */
sablono.core.text_field24777 = (function sablono$core$text_field24777(var_args){
var args24778 = [];
var len__5651__auto___24845 = arguments.length;
var i__5652__auto___24846 = (0);
while(true){
if((i__5652__auto___24846 < len__5651__auto___24845)){
args24778.push((arguments[i__5652__auto___24846]));

var G__24847 = (i__5652__auto___24846 + (1));
i__5652__auto___24846 = G__24847;
continue;
} else {
}
break;
}

var G__24780 = args24778.length;
switch (G__24780) {
case 1:
return sablono.core.text_field24777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24778.length)].join('')));

}
});

sablono.core.text_field24777.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.text_field24777.call(null,name__6198__auto__,null);
});

sablono.core.text_field24777.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.text_field24777.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24777);

/**
 * Creates a time input field.
 */
sablono.core.time_field24781 = (function sablono$core$time_field24781(var_args){
var args24782 = [];
var len__5651__auto___24849 = arguments.length;
var i__5652__auto___24850 = (0);
while(true){
if((i__5652__auto___24850 < len__5651__auto___24849)){
args24782.push((arguments[i__5652__auto___24850]));

var G__24851 = (i__5652__auto___24850 + (1));
i__5652__auto___24850 = G__24851;
continue;
} else {
}
break;
}

var G__24784 = args24782.length;
switch (G__24784) {
case 1:
return sablono.core.time_field24781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24782.length)].join('')));

}
});

sablono.core.time_field24781.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.time_field24781.call(null,name__6198__auto__,null);
});

sablono.core.time_field24781.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.time_field24781.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24781);

/**
 * Creates a url input field.
 */
sablono.core.url_field24785 = (function sablono$core$url_field24785(var_args){
var args24786 = [];
var len__5651__auto___24853 = arguments.length;
var i__5652__auto___24854 = (0);
while(true){
if((i__5652__auto___24854 < len__5651__auto___24853)){
args24786.push((arguments[i__5652__auto___24854]));

var G__24855 = (i__5652__auto___24854 + (1));
i__5652__auto___24854 = G__24855;
continue;
} else {
}
break;
}

var G__24788 = args24786.length;
switch (G__24788) {
case 1:
return sablono.core.url_field24785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24786.length)].join('')));

}
});

sablono.core.url_field24785.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.url_field24785.call(null,name__6198__auto__,null);
});

sablono.core.url_field24785.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.url_field24785.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24785);

/**
 * Creates a week input field.
 */
sablono.core.week_field24789 = (function sablono$core$week_field24789(var_args){
var args24790 = [];
var len__5651__auto___24857 = arguments.length;
var i__5652__auto___24858 = (0);
while(true){
if((i__5652__auto___24858 < len__5651__auto___24857)){
args24790.push((arguments[i__5652__auto___24858]));

var G__24859 = (i__5652__auto___24858 + (1));
i__5652__auto___24858 = G__24859;
continue;
} else {
}
break;
}

var G__24792 = args24790.length;
switch (G__24792) {
case 1:
return sablono.core.week_field24789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24790.length)].join('')));

}
});

sablono.core.week_field24789.cljs$core$IFn$_invoke$arity$1 = (function (name__6198__auto__){
return sablono.core.week_field24789.call(null,name__6198__auto__,null);
});

sablono.core.week_field24789.cljs$core$IFn$_invoke$arity$2 = (function (name__6198__auto__,value__6199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6198__auto__,value__6199__auto__);
});

sablono.core.week_field24789.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24789);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24861 = (function sablono$core$check_box24861(var_args){
var args24862 = [];
var len__5651__auto___24865 = arguments.length;
var i__5652__auto___24866 = (0);
while(true){
if((i__5652__auto___24866 < len__5651__auto___24865)){
args24862.push((arguments[i__5652__auto___24866]));

var G__24867 = (i__5652__auto___24866 + (1));
i__5652__auto___24866 = G__24867;
continue;
} else {
}
break;
}

var G__24864 = args24862.length;
switch (G__24864) {
case 1:
return sablono.core.check_box24861.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24861.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24861.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24862.length)].join('')));

}
});

sablono.core.check_box24861.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24861.call(null,name,null);
});

sablono.core.check_box24861.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24861.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24861.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24861.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24861);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24869 = (function sablono$core$radio_button24869(var_args){
var args24870 = [];
var len__5651__auto___24873 = arguments.length;
var i__5652__auto___24874 = (0);
while(true){
if((i__5652__auto___24874 < len__5651__auto___24873)){
args24870.push((arguments[i__5652__auto___24874]));

var G__24875 = (i__5652__auto___24874 + (1));
i__5652__auto___24874 = G__24875;
continue;
} else {
}
break;
}

var G__24872 = args24870.length;
switch (G__24872) {
case 1:
return sablono.core.radio_button24869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24869.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24870.length)].join('')));

}
});

sablono.core.radio_button24869.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24869.call(null,group,null);
});

sablono.core.radio_button24869.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24869.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24869.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24869.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24869);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24877 = (function sablono$core$select_options24877(coll){
var iter__5365__auto__ = (function sablono$core$select_options24877_$_iter__24886(s__24887){
return (new cljs.core.LazySeq(null,(function (){
var s__24887__$1 = s__24887;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24887__$1);
if(temp__4425__auto__){
var s__24887__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24887__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__24887__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__24889 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__24888 = (0);
while(true){
if((i__24888 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__24888);
cljs.core.chunk_append.call(null,b__24889,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24892 = x;
var text = cljs.core.nth.call(null,vec__24892,(0),null);
var val = cljs.core.nth.call(null,vec__24892,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24892,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24877.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24894 = (i__24888 + (1));
i__24888 = G__24894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24889),sablono$core$select_options24877_$_iter__24886.call(null,cljs.core.chunk_rest.call(null,s__24887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24889),null);
}
} else {
var x = cljs.core.first.call(null,s__24887__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24893 = x;
var text = cljs.core.nth.call(null,vec__24893,(0),null);
var val = cljs.core.nth.call(null,vec__24893,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24893,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24877.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24877_$_iter__24886.call(null,cljs.core.rest.call(null,s__24887__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24877);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24895 = (function sablono$core$drop_down24895(var_args){
var args24896 = [];
var len__5651__auto___24899 = arguments.length;
var i__5652__auto___24900 = (0);
while(true){
if((i__5652__auto___24900 < len__5651__auto___24899)){
args24896.push((arguments[i__5652__auto___24900]));

var G__24901 = (i__5652__auto___24900 + (1));
i__5652__auto___24900 = G__24901;
continue;
} else {
}
break;
}

var G__24898 = args24896.length;
switch (G__24898) {
case 2:
return sablono.core.drop_down24895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24895.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24896.length)].join('')));

}
});

sablono.core.drop_down24895.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24895.call(null,name,options,null);
});

sablono.core.drop_down24895.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24895.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24895);
/**
 * Creates a text area element.
 */
sablono.core.text_area24903 = (function sablono$core$text_area24903(var_args){
var args24904 = [];
var len__5651__auto___24907 = arguments.length;
var i__5652__auto___24908 = (0);
while(true){
if((i__5652__auto___24908 < len__5651__auto___24907)){
args24904.push((arguments[i__5652__auto___24908]));

var G__24909 = (i__5652__auto___24908 + (1));
i__5652__auto___24908 = G__24909;
continue;
} else {
}
break;
}

var G__24906 = args24904.length;
switch (G__24906) {
case 1:
return sablono.core.text_area24903.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24904.length)].join('')));

}
});

sablono.core.text_area24903.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24903.call(null,name,null);
});

sablono.core.text_area24903.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24903.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24903);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24911 = (function sablono$core$label24911(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24911);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24912 = (function sablono$core$submit_button24912(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24912);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24913 = (function sablono$core$reset_button24913(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24913);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24914 = (function sablono$core$form_to24914(var_args){
var args__5658__auto__ = [];
var len__5651__auto___24919 = arguments.length;
var i__5652__auto___24920 = (0);
while(true){
if((i__5652__auto___24920 < len__5651__auto___24919)){
args__5658__auto__.push((arguments[i__5652__auto___24920]));

var G__24921 = (i__5652__auto___24920 + (1));
i__5652__auto___24920 = G__24921;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to24914.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to24914.cljs$core$IFn$_invoke$arity$variadic = (function (p__24917,body){
var vec__24918 = p__24917;
var method = cljs.core.nth.call(null,vec__24918,(0),null);
var action = cljs.core.nth.call(null,vec__24918,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24914.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24914.cljs$lang$applyTo = (function (seq24915){
var G__24916 = cljs.core.first.call(null,seq24915);
var seq24915__$1 = cljs.core.next.call(null,seq24915);
return sablono.core.form_to24914.cljs$core$IFn$_invoke$arity$variadic(G__24916,seq24915__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24914);

//# sourceMappingURL=core.js.map