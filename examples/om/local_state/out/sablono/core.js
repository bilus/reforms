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
var G__36785__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36784 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__36784,(0),null);
var body = cljs.core.nthnext.call(null,vec__36784,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36786__i = 0, G__36786__a = new Array(arguments.length -  0);
while (G__36786__i < G__36786__a.length) {G__36786__a[G__36786__i] = arguments[G__36786__i + 0]; ++G__36786__i;}
  args = new cljs.core.IndexedSeq(G__36786__a,0);
} 
return G__36785__delegate.call(this,args);};
G__36785.cljs$lang$maxFixedArity = 0;
G__36785.cljs$lang$applyTo = (function (arglist__36787){
var args = cljs.core.seq(arglist__36787);
return G__36785__delegate(args);
});
G__36785.cljs$core$IFn$_invoke$arity$variadic = G__36785__delegate;
return G__36785;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5481__auto__ = (function sablono$core$update_arglists_$_iter__36792(s__36793){
return (new cljs.core.LazySeq(null,(function (){
var s__36793__$1 = s__36793;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36793__$1);
if(temp__4425__auto__){
var s__36793__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36793__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__36793__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__36795 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__36794 = (0);
while(true){
if((i__36794 < size__5480__auto__)){
var args = cljs.core._nth.call(null,c__5479__auto__,i__36794);
cljs.core.chunk_append.call(null,b__36795,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36796 = (i__36794 + (1));
i__36794 = G__36796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36795),sablono$core$update_arglists_$_iter__36792.call(null,cljs.core.chunk_rest.call(null,s__36793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36795),null);
}
} else {
var args = cljs.core.first.call(null,s__36793__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36792.call(null,cljs.core.rest.call(null,s__36793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,arglists);
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
var args__5774__auto__ = [];
var len__5767__auto___36802 = arguments.length;
var i__5768__auto___36803 = (0);
while(true){
if((i__5768__auto___36803 < len__5767__auto___36802)){
args__5774__auto__.push((arguments[i__5768__auto___36803]));

var G__36804 = (i__5768__auto___36803 + (1));
i__5768__auto___36803 = G__36804;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5481__auto__ = (function sablono$core$iter__36798(s__36799){
return (new cljs.core.LazySeq(null,(function (){
var s__36799__$1 = s__36799;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36799__$1);
if(temp__4425__auto__){
var s__36799__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36799__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__36799__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__36801 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__36800 = (0);
while(true){
if((i__36800 < size__5480__auto__)){
var style = cljs.core._nth.call(null,c__5479__auto__,i__36800);
cljs.core.chunk_append.call(null,b__36801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36805 = (i__36800 + (1));
i__36800 = G__36805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36801),sablono$core$iter__36798.call(null,cljs.core.chunk_rest.call(null,s__36799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36801),null);
}
} else {
var style = cljs.core.first.call(null,s__36799__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36798.call(null,cljs.core.rest.call(null,s__36799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq36797){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36797));
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
sablono.core.link_to36806 = (function sablono$core$link_to36806(var_args){
var args__5774__auto__ = [];
var len__5767__auto___36809 = arguments.length;
var i__5768__auto___36810 = (0);
while(true){
if((i__5768__auto___36810 < len__5767__auto___36809)){
args__5774__auto__.push((arguments[i__5768__auto___36810]));

var G__36811 = (i__5768__auto___36810 + (1));
i__5768__auto___36810 = G__36811;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return sablono.core.link_to36806.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

sablono.core.link_to36806.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36806.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36806.cljs$lang$applyTo = (function (seq36807){
var G__36808 = cljs.core.first.call(null,seq36807);
var seq36807__$1 = cljs.core.next.call(null,seq36807);
return sablono.core.link_to36806.cljs$core$IFn$_invoke$arity$variadic(G__36808,seq36807__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36806);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36812 = (function sablono$core$mail_to36812(var_args){
var args__5774__auto__ = [];
var len__5767__auto___36817 = arguments.length;
var i__5768__auto___36818 = (0);
while(true){
if((i__5768__auto___36818 < len__5767__auto___36817)){
args__5774__auto__.push((arguments[i__5768__auto___36818]));

var G__36819 = (i__5768__auto___36818 + (1));
i__5768__auto___36818 = G__36819;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return sablono.core.mail_to36812.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

sablono.core.mail_to36812.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36815){
var vec__36816 = p__36815;
var content = cljs.core.nth.call(null,vec__36816,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4709__auto__ = content;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36812.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36812.cljs$lang$applyTo = (function (seq36813){
var G__36814 = cljs.core.first.call(null,seq36813);
var seq36813__$1 = cljs.core.next.call(null,seq36813);
return sablono.core.mail_to36812.cljs$core$IFn$_invoke$arity$variadic(G__36814,seq36813__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36812);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36820 = (function sablono$core$unordered_list36820(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5481__auto__ = (function sablono$core$unordered_list36820_$_iter__36825(s__36826){
return (new cljs.core.LazySeq(null,(function (){
var s__36826__$1 = s__36826;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36826__$1);
if(temp__4425__auto__){
var s__36826__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36826__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__36826__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__36828 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__36827 = (0);
while(true){
if((i__36827 < size__5480__auto__)){
var x = cljs.core._nth.call(null,c__5479__auto__,i__36827);
cljs.core.chunk_append.call(null,b__36828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36829 = (i__36827 + (1));
i__36827 = G__36829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36828),sablono$core$unordered_list36820_$_iter__36825.call(null,cljs.core.chunk_rest.call(null,s__36826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36828),null);
}
} else {
var x = cljs.core.first.call(null,s__36826__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36820_$_iter__36825.call(null,cljs.core.rest.call(null,s__36826__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36820);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36830 = (function sablono$core$ordered_list36830(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5481__auto__ = (function sablono$core$ordered_list36830_$_iter__36835(s__36836){
return (new cljs.core.LazySeq(null,(function (){
var s__36836__$1 = s__36836;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36836__$1);
if(temp__4425__auto__){
var s__36836__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36836__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__36836__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__36838 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__36837 = (0);
while(true){
if((i__36837 < size__5480__auto__)){
var x = cljs.core._nth.call(null,c__5479__auto__,i__36837);
cljs.core.chunk_append.call(null,b__36838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36839 = (i__36837 + (1));
i__36837 = G__36839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36838),sablono$core$ordered_list36830_$_iter__36835.call(null,cljs.core.chunk_rest.call(null,s__36836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36838),null);
}
} else {
var x = cljs.core.first.call(null,s__36836__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36830_$_iter__36835.call(null,cljs.core.rest.call(null,s__36836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36830);
/**
 * Create an image element.
 */
sablono.core.image36840 = (function sablono$core$image36840(var_args){
var args36841 = [];
var len__5767__auto___36844 = arguments.length;
var i__5768__auto___36845 = (0);
while(true){
if((i__5768__auto___36845 < len__5767__auto___36844)){
args36841.push((arguments[i__5768__auto___36845]));

var G__36846 = (i__5768__auto___36845 + (1));
i__5768__auto___36845 = G__36846;
continue;
} else {
}
break;
}

var G__36843 = args36841.length;
switch (G__36843) {
case 1:
return sablono.core.image36840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36841.length)].join('')));

}
});

sablono.core.image36840.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36840.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36840.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36840);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36848_SHARP_,p2__36849_SHARP_){
return [cljs.core.str(p1__36848_SHARP_),cljs.core.str("["),cljs.core.str(p2__36849_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36850_SHARP_,p2__36851_SHARP_){
return [cljs.core.str(p1__36850_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36851_SHARP_)].join('');
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
sablono.core.color_field36852 = (function sablono$core$color_field36852(var_args){
var args36853 = [];
var len__5767__auto___36920 = arguments.length;
var i__5768__auto___36921 = (0);
while(true){
if((i__5768__auto___36921 < len__5767__auto___36920)){
args36853.push((arguments[i__5768__auto___36921]));

var G__36922 = (i__5768__auto___36921 + (1));
i__5768__auto___36921 = G__36922;
continue;
} else {
}
break;
}

var G__36855 = args36853.length;
switch (G__36855) {
case 1:
return sablono.core.color_field36852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36853.length)].join('')));

}
});

sablono.core.color_field36852.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.color_field36852.call(null,name__6441__auto__,null);
});

sablono.core.color_field36852.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.color_field36852.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36852);

/**
 * Creates a date input field.
 */
sablono.core.date_field36856 = (function sablono$core$date_field36856(var_args){
var args36857 = [];
var len__5767__auto___36924 = arguments.length;
var i__5768__auto___36925 = (0);
while(true){
if((i__5768__auto___36925 < len__5767__auto___36924)){
args36857.push((arguments[i__5768__auto___36925]));

var G__36926 = (i__5768__auto___36925 + (1));
i__5768__auto___36925 = G__36926;
continue;
} else {
}
break;
}

var G__36859 = args36857.length;
switch (G__36859) {
case 1:
return sablono.core.date_field36856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36857.length)].join('')));

}
});

sablono.core.date_field36856.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.date_field36856.call(null,name__6441__auto__,null);
});

sablono.core.date_field36856.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.date_field36856.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36856);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36860 = (function sablono$core$datetime_field36860(var_args){
var args36861 = [];
var len__5767__auto___36928 = arguments.length;
var i__5768__auto___36929 = (0);
while(true){
if((i__5768__auto___36929 < len__5767__auto___36928)){
args36861.push((arguments[i__5768__auto___36929]));

var G__36930 = (i__5768__auto___36929 + (1));
i__5768__auto___36929 = G__36930;
continue;
} else {
}
break;
}

var G__36863 = args36861.length;
switch (G__36863) {
case 1:
return sablono.core.datetime_field36860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36861.length)].join('')));

}
});

sablono.core.datetime_field36860.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.datetime_field36860.call(null,name__6441__auto__,null);
});

sablono.core.datetime_field36860.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.datetime_field36860.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36860);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36864 = (function sablono$core$datetime_local_field36864(var_args){
var args36865 = [];
var len__5767__auto___36932 = arguments.length;
var i__5768__auto___36933 = (0);
while(true){
if((i__5768__auto___36933 < len__5767__auto___36932)){
args36865.push((arguments[i__5768__auto___36933]));

var G__36934 = (i__5768__auto___36933 + (1));
i__5768__auto___36933 = G__36934;
continue;
} else {
}
break;
}

var G__36867 = args36865.length;
switch (G__36867) {
case 1:
return sablono.core.datetime_local_field36864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36865.length)].join('')));

}
});

sablono.core.datetime_local_field36864.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.datetime_local_field36864.call(null,name__6441__auto__,null);
});

sablono.core.datetime_local_field36864.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.datetime_local_field36864.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36864);

/**
 * Creates a email input field.
 */
sablono.core.email_field36868 = (function sablono$core$email_field36868(var_args){
var args36869 = [];
var len__5767__auto___36936 = arguments.length;
var i__5768__auto___36937 = (0);
while(true){
if((i__5768__auto___36937 < len__5767__auto___36936)){
args36869.push((arguments[i__5768__auto___36937]));

var G__36938 = (i__5768__auto___36937 + (1));
i__5768__auto___36937 = G__36938;
continue;
} else {
}
break;
}

var G__36871 = args36869.length;
switch (G__36871) {
case 1:
return sablono.core.email_field36868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36869.length)].join('')));

}
});

sablono.core.email_field36868.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.email_field36868.call(null,name__6441__auto__,null);
});

sablono.core.email_field36868.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.email_field36868.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36868);

/**
 * Creates a file input field.
 */
sablono.core.file_field36872 = (function sablono$core$file_field36872(var_args){
var args36873 = [];
var len__5767__auto___36940 = arguments.length;
var i__5768__auto___36941 = (0);
while(true){
if((i__5768__auto___36941 < len__5767__auto___36940)){
args36873.push((arguments[i__5768__auto___36941]));

var G__36942 = (i__5768__auto___36941 + (1));
i__5768__auto___36941 = G__36942;
continue;
} else {
}
break;
}

var G__36875 = args36873.length;
switch (G__36875) {
case 1:
return sablono.core.file_field36872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36873.length)].join('')));

}
});

sablono.core.file_field36872.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.file_field36872.call(null,name__6441__auto__,null);
});

sablono.core.file_field36872.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.file_field36872.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36872);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36876 = (function sablono$core$hidden_field36876(var_args){
var args36877 = [];
var len__5767__auto___36944 = arguments.length;
var i__5768__auto___36945 = (0);
while(true){
if((i__5768__auto___36945 < len__5767__auto___36944)){
args36877.push((arguments[i__5768__auto___36945]));

var G__36946 = (i__5768__auto___36945 + (1));
i__5768__auto___36945 = G__36946;
continue;
} else {
}
break;
}

var G__36879 = args36877.length;
switch (G__36879) {
case 1:
return sablono.core.hidden_field36876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36877.length)].join('')));

}
});

sablono.core.hidden_field36876.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.hidden_field36876.call(null,name__6441__auto__,null);
});

sablono.core.hidden_field36876.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.hidden_field36876.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36876);

/**
 * Creates a month input field.
 */
sablono.core.month_field36880 = (function sablono$core$month_field36880(var_args){
var args36881 = [];
var len__5767__auto___36948 = arguments.length;
var i__5768__auto___36949 = (0);
while(true){
if((i__5768__auto___36949 < len__5767__auto___36948)){
args36881.push((arguments[i__5768__auto___36949]));

var G__36950 = (i__5768__auto___36949 + (1));
i__5768__auto___36949 = G__36950;
continue;
} else {
}
break;
}

var G__36883 = args36881.length;
switch (G__36883) {
case 1:
return sablono.core.month_field36880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36881.length)].join('')));

}
});

sablono.core.month_field36880.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.month_field36880.call(null,name__6441__auto__,null);
});

sablono.core.month_field36880.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.month_field36880.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36880);

/**
 * Creates a number input field.
 */
sablono.core.number_field36884 = (function sablono$core$number_field36884(var_args){
var args36885 = [];
var len__5767__auto___36952 = arguments.length;
var i__5768__auto___36953 = (0);
while(true){
if((i__5768__auto___36953 < len__5767__auto___36952)){
args36885.push((arguments[i__5768__auto___36953]));

var G__36954 = (i__5768__auto___36953 + (1));
i__5768__auto___36953 = G__36954;
continue;
} else {
}
break;
}

var G__36887 = args36885.length;
switch (G__36887) {
case 1:
return sablono.core.number_field36884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36885.length)].join('')));

}
});

sablono.core.number_field36884.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.number_field36884.call(null,name__6441__auto__,null);
});

sablono.core.number_field36884.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.number_field36884.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36884);

/**
 * Creates a password input field.
 */
sablono.core.password_field36888 = (function sablono$core$password_field36888(var_args){
var args36889 = [];
var len__5767__auto___36956 = arguments.length;
var i__5768__auto___36957 = (0);
while(true){
if((i__5768__auto___36957 < len__5767__auto___36956)){
args36889.push((arguments[i__5768__auto___36957]));

var G__36958 = (i__5768__auto___36957 + (1));
i__5768__auto___36957 = G__36958;
continue;
} else {
}
break;
}

var G__36891 = args36889.length;
switch (G__36891) {
case 1:
return sablono.core.password_field36888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36889.length)].join('')));

}
});

sablono.core.password_field36888.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.password_field36888.call(null,name__6441__auto__,null);
});

sablono.core.password_field36888.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.password_field36888.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36888);

/**
 * Creates a range input field.
 */
sablono.core.range_field36892 = (function sablono$core$range_field36892(var_args){
var args36893 = [];
var len__5767__auto___36960 = arguments.length;
var i__5768__auto___36961 = (0);
while(true){
if((i__5768__auto___36961 < len__5767__auto___36960)){
args36893.push((arguments[i__5768__auto___36961]));

var G__36962 = (i__5768__auto___36961 + (1));
i__5768__auto___36961 = G__36962;
continue;
} else {
}
break;
}

var G__36895 = args36893.length;
switch (G__36895) {
case 1:
return sablono.core.range_field36892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36893.length)].join('')));

}
});

sablono.core.range_field36892.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.range_field36892.call(null,name__6441__auto__,null);
});

sablono.core.range_field36892.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.range_field36892.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36892);

/**
 * Creates a search input field.
 */
sablono.core.search_field36896 = (function sablono$core$search_field36896(var_args){
var args36897 = [];
var len__5767__auto___36964 = arguments.length;
var i__5768__auto___36965 = (0);
while(true){
if((i__5768__auto___36965 < len__5767__auto___36964)){
args36897.push((arguments[i__5768__auto___36965]));

var G__36966 = (i__5768__auto___36965 + (1));
i__5768__auto___36965 = G__36966;
continue;
} else {
}
break;
}

var G__36899 = args36897.length;
switch (G__36899) {
case 1:
return sablono.core.search_field36896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36897.length)].join('')));

}
});

sablono.core.search_field36896.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.search_field36896.call(null,name__6441__auto__,null);
});

sablono.core.search_field36896.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.search_field36896.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36896);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36900 = (function sablono$core$tel_field36900(var_args){
var args36901 = [];
var len__5767__auto___36968 = arguments.length;
var i__5768__auto___36969 = (0);
while(true){
if((i__5768__auto___36969 < len__5767__auto___36968)){
args36901.push((arguments[i__5768__auto___36969]));

var G__36970 = (i__5768__auto___36969 + (1));
i__5768__auto___36969 = G__36970;
continue;
} else {
}
break;
}

var G__36903 = args36901.length;
switch (G__36903) {
case 1:
return sablono.core.tel_field36900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36901.length)].join('')));

}
});

sablono.core.tel_field36900.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.tel_field36900.call(null,name__6441__auto__,null);
});

sablono.core.tel_field36900.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.tel_field36900.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36900);

/**
 * Creates a text input field.
 */
sablono.core.text_field36904 = (function sablono$core$text_field36904(var_args){
var args36905 = [];
var len__5767__auto___36972 = arguments.length;
var i__5768__auto___36973 = (0);
while(true){
if((i__5768__auto___36973 < len__5767__auto___36972)){
args36905.push((arguments[i__5768__auto___36973]));

var G__36974 = (i__5768__auto___36973 + (1));
i__5768__auto___36973 = G__36974;
continue;
} else {
}
break;
}

var G__36907 = args36905.length;
switch (G__36907) {
case 1:
return sablono.core.text_field36904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36905.length)].join('')));

}
});

sablono.core.text_field36904.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.text_field36904.call(null,name__6441__auto__,null);
});

sablono.core.text_field36904.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.text_field36904.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36904);

/**
 * Creates a time input field.
 */
sablono.core.time_field36908 = (function sablono$core$time_field36908(var_args){
var args36909 = [];
var len__5767__auto___36976 = arguments.length;
var i__5768__auto___36977 = (0);
while(true){
if((i__5768__auto___36977 < len__5767__auto___36976)){
args36909.push((arguments[i__5768__auto___36977]));

var G__36978 = (i__5768__auto___36977 + (1));
i__5768__auto___36977 = G__36978;
continue;
} else {
}
break;
}

var G__36911 = args36909.length;
switch (G__36911) {
case 1:
return sablono.core.time_field36908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36909.length)].join('')));

}
});

sablono.core.time_field36908.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.time_field36908.call(null,name__6441__auto__,null);
});

sablono.core.time_field36908.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.time_field36908.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36908);

/**
 * Creates a url input field.
 */
sablono.core.url_field36912 = (function sablono$core$url_field36912(var_args){
var args36913 = [];
var len__5767__auto___36980 = arguments.length;
var i__5768__auto___36981 = (0);
while(true){
if((i__5768__auto___36981 < len__5767__auto___36980)){
args36913.push((arguments[i__5768__auto___36981]));

var G__36982 = (i__5768__auto___36981 + (1));
i__5768__auto___36981 = G__36982;
continue;
} else {
}
break;
}

var G__36915 = args36913.length;
switch (G__36915) {
case 1:
return sablono.core.url_field36912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36913.length)].join('')));

}
});

sablono.core.url_field36912.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.url_field36912.call(null,name__6441__auto__,null);
});

sablono.core.url_field36912.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.url_field36912.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36912);

/**
 * Creates a week input field.
 */
sablono.core.week_field36916 = (function sablono$core$week_field36916(var_args){
var args36917 = [];
var len__5767__auto___36984 = arguments.length;
var i__5768__auto___36985 = (0);
while(true){
if((i__5768__auto___36985 < len__5767__auto___36984)){
args36917.push((arguments[i__5768__auto___36985]));

var G__36986 = (i__5768__auto___36985 + (1));
i__5768__auto___36985 = G__36986;
continue;
} else {
}
break;
}

var G__36919 = args36917.length;
switch (G__36919) {
case 1:
return sablono.core.week_field36916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36917.length)].join('')));

}
});

sablono.core.week_field36916.cljs$core$IFn$_invoke$arity$1 = (function (name__6441__auto__){
return sablono.core.week_field36916.call(null,name__6441__auto__,null);
});

sablono.core.week_field36916.cljs$core$IFn$_invoke$arity$2 = (function (name__6441__auto__,value__6442__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6441__auto__,value__6442__auto__);
});

sablono.core.week_field36916.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36916);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36988 = (function sablono$core$check_box36988(var_args){
var args36989 = [];
var len__5767__auto___36992 = arguments.length;
var i__5768__auto___36993 = (0);
while(true){
if((i__5768__auto___36993 < len__5767__auto___36992)){
args36989.push((arguments[i__5768__auto___36993]));

var G__36994 = (i__5768__auto___36993 + (1));
i__5768__auto___36993 = G__36994;
continue;
} else {
}
break;
}

var G__36991 = args36989.length;
switch (G__36991) {
case 1:
return sablono.core.check_box36988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36988.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36989.length)].join('')));

}
});

sablono.core.check_box36988.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36988.call(null,name,null);
});

sablono.core.check_box36988.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36988.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36988.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36988.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36988);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36996 = (function sablono$core$radio_button36996(var_args){
var args36997 = [];
var len__5767__auto___37000 = arguments.length;
var i__5768__auto___37001 = (0);
while(true){
if((i__5768__auto___37001 < len__5767__auto___37000)){
args36997.push((arguments[i__5768__auto___37001]));

var G__37002 = (i__5768__auto___37001 + (1));
i__5768__auto___37001 = G__37002;
continue;
} else {
}
break;
}

var G__36999 = args36997.length;
switch (G__36999) {
case 1:
return sablono.core.radio_button36996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36996.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36997.length)].join('')));

}
});

sablono.core.radio_button36996.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36996.call(null,group,null);
});

sablono.core.radio_button36996.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36996.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36996.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36996.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36996);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37004 = (function sablono$core$select_options37004(var_args){
var args37005 = [];
var len__5767__auto___37016 = arguments.length;
var i__5768__auto___37017 = (0);
while(true){
if((i__5768__auto___37017 < len__5767__auto___37016)){
args37005.push((arguments[i__5768__auto___37017]));

var G__37018 = (i__5768__auto___37017 + (1));
i__5768__auto___37017 = G__37018;
continue;
} else {
}
break;
}

var G__37007 = args37005.length;
switch (G__37007) {
case 1:
return sablono.core.select_options37004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options37004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37005.length)].join('')));

}
});

sablono.core.select_options37004.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options37004.call(null,coll,null);
});

sablono.core.select_options37004.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5481__auto__ = (function sablono$core$iter__37008(s__37009){
return (new cljs.core.LazySeq(null,(function (){
var s__37009__$1 = s__37009;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__37009__$1);
if(temp__4425__auto__){
var s__37009__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37009__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__37009__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__37011 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__37010 = (0);
while(true){
if((i__37010 < size__5480__auto__)){
var x = cljs.core._nth.call(null,c__5479__auto__,i__37010);
cljs.core.chunk_append.call(null,b__37011,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37014 = x;
var text = cljs.core.nth.call(null,vec__37014,(0),null);
var val = cljs.core.nth.call(null,vec__37014,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37014,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37004.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__37020 = (i__37010 + (1));
i__37010 = G__37020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37011),sablono$core$iter__37008.call(null,cljs.core.chunk_rest.call(null,s__37009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37011),null);
}
} else {
var x = cljs.core.first.call(null,s__37009__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37015 = x;
var text = cljs.core.nth.call(null,vec__37015,(0),null);
var val = cljs.core.nth.call(null,vec__37015,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37015,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37004.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__37008.call(null,cljs.core.rest.call(null,s__37009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,coll);
});

sablono.core.select_options37004.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37004);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37021 = (function sablono$core$drop_down37021(var_args){
var args37022 = [];
var len__5767__auto___37025 = arguments.length;
var i__5768__auto___37026 = (0);
while(true){
if((i__5768__auto___37026 < len__5767__auto___37025)){
args37022.push((arguments[i__5768__auto___37026]));

var G__37027 = (i__5768__auto___37026 + (1));
i__5768__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var G__37024 = args37022.length;
switch (G__37024) {
case 2:
return sablono.core.drop_down37021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37021.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37022.length)].join('')));

}
});

sablono.core.drop_down37021.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37021.call(null,name,options,null);
});

sablono.core.drop_down37021.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37021.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37021);
/**
 * Creates a text area element.
 */
sablono.core.text_area37029 = (function sablono$core$text_area37029(var_args){
var args37030 = [];
var len__5767__auto___37033 = arguments.length;
var i__5768__auto___37034 = (0);
while(true){
if((i__5768__auto___37034 < len__5767__auto___37033)){
args37030.push((arguments[i__5768__auto___37034]));

var G__37035 = (i__5768__auto___37034 + (1));
i__5768__auto___37034 = G__37035;
continue;
} else {
}
break;
}

var G__37032 = args37030.length;
switch (G__37032) {
case 1:
return sablono.core.text_area37029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37030.length)].join('')));

}
});

sablono.core.text_area37029.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37029.call(null,name,null);
});

sablono.core.text_area37029.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37029.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37029);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37037 = (function sablono$core$label37037(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37037);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37038 = (function sablono$core$submit_button37038(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37038);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37039 = (function sablono$core$reset_button37039(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37039);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37040 = (function sablono$core$form_to37040(var_args){
var args__5774__auto__ = [];
var len__5767__auto___37045 = arguments.length;
var i__5768__auto___37046 = (0);
while(true){
if((i__5768__auto___37046 < len__5767__auto___37045)){
args__5774__auto__.push((arguments[i__5768__auto___37046]));

var G__37047 = (i__5768__auto___37046 + (1));
i__5768__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return sablono.core.form_to37040.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

sablono.core.form_to37040.cljs$core$IFn$_invoke$arity$variadic = (function (p__37043,body){
var vec__37044 = p__37043;
var method = cljs.core.nth.call(null,vec__37044,(0),null);
var action = cljs.core.nth.call(null,vec__37044,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to37040.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37040.cljs$lang$applyTo = (function (seq37041){
var G__37042 = cljs.core.first.call(null,seq37041);
var seq37041__$1 = cljs.core.next.call(null,seq37041);
return sablono.core.form_to37040.cljs$core$IFn$_invoke$arity$variadic(G__37042,seq37041__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37040);

//# sourceMappingURL=core.js.map