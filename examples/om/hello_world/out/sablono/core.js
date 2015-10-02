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
var G__19919__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__19918 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__19918,(0),null);
var body = cljs.core.nthnext.call(null,vec__19918,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__19919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19920__i = 0, G__19920__a = new Array(arguments.length -  0);
while (G__19920__i < G__19920__a.length) {G__19920__a[G__19920__i] = arguments[G__19920__i + 0]; ++G__19920__i;}
  args = new cljs.core.IndexedSeq(G__19920__a,0);
} 
return G__19919__delegate.call(this,args);};
G__19919.cljs$lang$maxFixedArity = 0;
G__19919.cljs$lang$applyTo = (function (arglist__19921){
var args = cljs.core.seq(arglist__19921);
return G__19919__delegate(args);
});
G__19919.cljs$core$IFn$_invoke$arity$variadic = G__19919__delegate;
return G__19919;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5365__auto__ = (function sablono$core$update_arglists_$_iter__19926(s__19927){
return (new cljs.core.LazySeq(null,(function (){
var s__19927__$1 = s__19927;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19927__$1);
if(temp__4425__auto__){
var s__19927__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19927__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__19927__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__19929 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__19928 = (0);
while(true){
if((i__19928 < size__5364__auto__)){
var args = cljs.core._nth.call(null,c__5363__auto__,i__19928);
cljs.core.chunk_append.call(null,b__19929,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__19930 = (i__19928 + (1));
i__19928 = G__19930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19929),sablono$core$update_arglists_$_iter__19926.call(null,cljs.core.chunk_rest.call(null,s__19927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19929),null);
}
} else {
var args = cljs.core.first.call(null,s__19927__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__19926.call(null,cljs.core.rest.call(null,s__19927__$2)));
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
var len__5651__auto___19936 = arguments.length;
var i__5652__auto___19937 = (0);
while(true){
if((i__5652__auto___19937 < len__5651__auto___19936)){
args__5658__auto__.push((arguments[i__5652__auto___19937]));

var G__19938 = (i__5652__auto___19937 + (1));
i__5652__auto___19937 = G__19938;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5365__auto__ = (function sablono$core$iter__19932(s__19933){
return (new cljs.core.LazySeq(null,(function (){
var s__19933__$1 = s__19933;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19933__$1);
if(temp__4425__auto__){
var s__19933__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19933__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__19933__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__19935 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__19934 = (0);
while(true){
if((i__19934 < size__5364__auto__)){
var style = cljs.core._nth.call(null,c__5363__auto__,i__19934);
cljs.core.chunk_append.call(null,b__19935,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__19939 = (i__19934 + (1));
i__19934 = G__19939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19935),sablono$core$iter__19932.call(null,cljs.core.chunk_rest.call(null,s__19933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19935),null);
}
} else {
var style = cljs.core.first.call(null,s__19933__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__19932.call(null,cljs.core.rest.call(null,s__19933__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19931){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19931));
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
sablono.core.link_to19940 = (function sablono$core$link_to19940(var_args){
var args__5658__auto__ = [];
var len__5651__auto___19943 = arguments.length;
var i__5652__auto___19944 = (0);
while(true){
if((i__5652__auto___19944 < len__5651__auto___19943)){
args__5658__auto__.push((arguments[i__5652__auto___19944]));

var G__19945 = (i__5652__auto___19944 + (1));
i__5652__auto___19944 = G__19945;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.link_to19940.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.link_to19940.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to19940.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19940.cljs$lang$applyTo = (function (seq19941){
var G__19942 = cljs.core.first.call(null,seq19941);
var seq19941__$1 = cljs.core.next.call(null,seq19941);
return sablono.core.link_to19940.cljs$core$IFn$_invoke$arity$variadic(G__19942,seq19941__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19940);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19946 = (function sablono$core$mail_to19946(var_args){
var args__5658__auto__ = [];
var len__5651__auto___19951 = arguments.length;
var i__5652__auto___19952 = (0);
while(true){
if((i__5652__auto___19952 < len__5651__auto___19951)){
args__5658__auto__.push((arguments[i__5652__auto___19952]));

var G__19953 = (i__5652__auto___19952 + (1));
i__5652__auto___19952 = G__19953;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19946.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.mail_to19946.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19949){
var vec__19950 = p__19949;
var content = cljs.core.nth.call(null,vec__19950,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4593__auto__ = content;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19946.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19946.cljs$lang$applyTo = (function (seq19947){
var G__19948 = cljs.core.first.call(null,seq19947);
var seq19947__$1 = cljs.core.next.call(null,seq19947);
return sablono.core.mail_to19946.cljs$core$IFn$_invoke$arity$variadic(G__19948,seq19947__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19946);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19954 = (function sablono$core$unordered_list19954(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5365__auto__ = (function sablono$core$unordered_list19954_$_iter__19959(s__19960){
return (new cljs.core.LazySeq(null,(function (){
var s__19960__$1 = s__19960;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19960__$1);
if(temp__4425__auto__){
var s__19960__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19960__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__19960__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__19962 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__19961 = (0);
while(true){
if((i__19961 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__19961);
cljs.core.chunk_append.call(null,b__19962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19963 = (i__19961 + (1));
i__19961 = G__19963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19962),sablono$core$unordered_list19954_$_iter__19959.call(null,cljs.core.chunk_rest.call(null,s__19960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19962),null);
}
} else {
var x = cljs.core.first.call(null,s__19960__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list19954_$_iter__19959.call(null,cljs.core.rest.call(null,s__19960__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19954);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19964 = (function sablono$core$ordered_list19964(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5365__auto__ = (function sablono$core$ordered_list19964_$_iter__19969(s__19970){
return (new cljs.core.LazySeq(null,(function (){
var s__19970__$1 = s__19970;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19970__$1);
if(temp__4425__auto__){
var s__19970__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19970__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__19970__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__19972 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__19971 = (0);
while(true){
if((i__19971 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__19971);
cljs.core.chunk_append.call(null,b__19972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19973 = (i__19971 + (1));
i__19971 = G__19973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19972),sablono$core$ordered_list19964_$_iter__19969.call(null,cljs.core.chunk_rest.call(null,s__19970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19972),null);
}
} else {
var x = cljs.core.first.call(null,s__19970__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list19964_$_iter__19969.call(null,cljs.core.rest.call(null,s__19970__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19964);
/**
 * Create an image element.
 */
sablono.core.image19974 = (function sablono$core$image19974(var_args){
var args19975 = [];
var len__5651__auto___19978 = arguments.length;
var i__5652__auto___19979 = (0);
while(true){
if((i__5652__auto___19979 < len__5651__auto___19978)){
args19975.push((arguments[i__5652__auto___19979]));

var G__19980 = (i__5652__auto___19979 + (1));
i__5652__auto___19979 = G__19980;
continue;
} else {
}
break;
}

var G__19977 = args19975.length;
switch (G__19977) {
case 1:
return sablono.core.image19974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19975.length)].join('')));

}
});

sablono.core.image19974.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image19974.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image19974.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19974);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__19982_SHARP_,p2__19983_SHARP_){
return [cljs.core.str(p1__19982_SHARP_),cljs.core.str("["),cljs.core.str(p2__19983_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__19984_SHARP_,p2__19985_SHARP_){
return [cljs.core.str(p1__19984_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19985_SHARP_)].join('');
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
sablono.core.color_field19986 = (function sablono$core$color_field19986(var_args){
var args19987 = [];
var len__5651__auto___20054 = arguments.length;
var i__5652__auto___20055 = (0);
while(true){
if((i__5652__auto___20055 < len__5651__auto___20054)){
args19987.push((arguments[i__5652__auto___20055]));

var G__20056 = (i__5652__auto___20055 + (1));
i__5652__auto___20055 = G__20056;
continue;
} else {
}
break;
}

var G__19989 = args19987.length;
switch (G__19989) {
case 1:
return sablono.core.color_field19986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19987.length)].join('')));

}
});

sablono.core.color_field19986.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.color_field19986.call(null,name__6325__auto__,null);
});

sablono.core.color_field19986.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.color_field19986.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19986);

/**
 * Creates a date input field.
 */
sablono.core.date_field19990 = (function sablono$core$date_field19990(var_args){
var args19991 = [];
var len__5651__auto___20058 = arguments.length;
var i__5652__auto___20059 = (0);
while(true){
if((i__5652__auto___20059 < len__5651__auto___20058)){
args19991.push((arguments[i__5652__auto___20059]));

var G__20060 = (i__5652__auto___20059 + (1));
i__5652__auto___20059 = G__20060;
continue;
} else {
}
break;
}

var G__19993 = args19991.length;
switch (G__19993) {
case 1:
return sablono.core.date_field19990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19991.length)].join('')));

}
});

sablono.core.date_field19990.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.date_field19990.call(null,name__6325__auto__,null);
});

sablono.core.date_field19990.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.date_field19990.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19990);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19994 = (function sablono$core$datetime_field19994(var_args){
var args19995 = [];
var len__5651__auto___20062 = arguments.length;
var i__5652__auto___20063 = (0);
while(true){
if((i__5652__auto___20063 < len__5651__auto___20062)){
args19995.push((arguments[i__5652__auto___20063]));

var G__20064 = (i__5652__auto___20063 + (1));
i__5652__auto___20063 = G__20064;
continue;
} else {
}
break;
}

var G__19997 = args19995.length;
switch (G__19997) {
case 1:
return sablono.core.datetime_field19994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19995.length)].join('')));

}
});

sablono.core.datetime_field19994.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_field19994.call(null,name__6325__auto__,null);
});

sablono.core.datetime_field19994.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_field19994.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19994);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19998 = (function sablono$core$datetime_local_field19998(var_args){
var args19999 = [];
var len__5651__auto___20066 = arguments.length;
var i__5652__auto___20067 = (0);
while(true){
if((i__5652__auto___20067 < len__5651__auto___20066)){
args19999.push((arguments[i__5652__auto___20067]));

var G__20068 = (i__5652__auto___20067 + (1));
i__5652__auto___20067 = G__20068;
continue;
} else {
}
break;
}

var G__20001 = args19999.length;
switch (G__20001) {
case 1:
return sablono.core.datetime_local_field19998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19999.length)].join('')));

}
});

sablono.core.datetime_local_field19998.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.datetime_local_field19998.call(null,name__6325__auto__,null);
});

sablono.core.datetime_local_field19998.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.datetime_local_field19998.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19998);

/**
 * Creates a email input field.
 */
sablono.core.email_field20002 = (function sablono$core$email_field20002(var_args){
var args20003 = [];
var len__5651__auto___20070 = arguments.length;
var i__5652__auto___20071 = (0);
while(true){
if((i__5652__auto___20071 < len__5651__auto___20070)){
args20003.push((arguments[i__5652__auto___20071]));

var G__20072 = (i__5652__auto___20071 + (1));
i__5652__auto___20071 = G__20072;
continue;
} else {
}
break;
}

var G__20005 = args20003.length;
switch (G__20005) {
case 1:
return sablono.core.email_field20002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20003.length)].join('')));

}
});

sablono.core.email_field20002.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.email_field20002.call(null,name__6325__auto__,null);
});

sablono.core.email_field20002.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.email_field20002.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20002);

/**
 * Creates a file input field.
 */
sablono.core.file_field20006 = (function sablono$core$file_field20006(var_args){
var args20007 = [];
var len__5651__auto___20074 = arguments.length;
var i__5652__auto___20075 = (0);
while(true){
if((i__5652__auto___20075 < len__5651__auto___20074)){
args20007.push((arguments[i__5652__auto___20075]));

var G__20076 = (i__5652__auto___20075 + (1));
i__5652__auto___20075 = G__20076;
continue;
} else {
}
break;
}

var G__20009 = args20007.length;
switch (G__20009) {
case 1:
return sablono.core.file_field20006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20007.length)].join('')));

}
});

sablono.core.file_field20006.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.file_field20006.call(null,name__6325__auto__,null);
});

sablono.core.file_field20006.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.file_field20006.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field20006);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20010 = (function sablono$core$hidden_field20010(var_args){
var args20011 = [];
var len__5651__auto___20078 = arguments.length;
var i__5652__auto___20079 = (0);
while(true){
if((i__5652__auto___20079 < len__5651__auto___20078)){
args20011.push((arguments[i__5652__auto___20079]));

var G__20080 = (i__5652__auto___20079 + (1));
i__5652__auto___20079 = G__20080;
continue;
} else {
}
break;
}

var G__20013 = args20011.length;
switch (G__20013) {
case 1:
return sablono.core.hidden_field20010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20011.length)].join('')));

}
});

sablono.core.hidden_field20010.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.hidden_field20010.call(null,name__6325__auto__,null);
});

sablono.core.hidden_field20010.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.hidden_field20010.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20010);

/**
 * Creates a month input field.
 */
sablono.core.month_field20014 = (function sablono$core$month_field20014(var_args){
var args20015 = [];
var len__5651__auto___20082 = arguments.length;
var i__5652__auto___20083 = (0);
while(true){
if((i__5652__auto___20083 < len__5651__auto___20082)){
args20015.push((arguments[i__5652__auto___20083]));

var G__20084 = (i__5652__auto___20083 + (1));
i__5652__auto___20083 = G__20084;
continue;
} else {
}
break;
}

var G__20017 = args20015.length;
switch (G__20017) {
case 1:
return sablono.core.month_field20014.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20015.length)].join('')));

}
});

sablono.core.month_field20014.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.month_field20014.call(null,name__6325__auto__,null);
});

sablono.core.month_field20014.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.month_field20014.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field20014);

/**
 * Creates a number input field.
 */
sablono.core.number_field20018 = (function sablono$core$number_field20018(var_args){
var args20019 = [];
var len__5651__auto___20086 = arguments.length;
var i__5652__auto___20087 = (0);
while(true){
if((i__5652__auto___20087 < len__5651__auto___20086)){
args20019.push((arguments[i__5652__auto___20087]));

var G__20088 = (i__5652__auto___20087 + (1));
i__5652__auto___20087 = G__20088;
continue;
} else {
}
break;
}

var G__20021 = args20019.length;
switch (G__20021) {
case 1:
return sablono.core.number_field20018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20019.length)].join('')));

}
});

sablono.core.number_field20018.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.number_field20018.call(null,name__6325__auto__,null);
});

sablono.core.number_field20018.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.number_field20018.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field20018);

/**
 * Creates a password input field.
 */
sablono.core.password_field20022 = (function sablono$core$password_field20022(var_args){
var args20023 = [];
var len__5651__auto___20090 = arguments.length;
var i__5652__auto___20091 = (0);
while(true){
if((i__5652__auto___20091 < len__5651__auto___20090)){
args20023.push((arguments[i__5652__auto___20091]));

var G__20092 = (i__5652__auto___20091 + (1));
i__5652__auto___20091 = G__20092;
continue;
} else {
}
break;
}

var G__20025 = args20023.length;
switch (G__20025) {
case 1:
return sablono.core.password_field20022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20023.length)].join('')));

}
});

sablono.core.password_field20022.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.password_field20022.call(null,name__6325__auto__,null);
});

sablono.core.password_field20022.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.password_field20022.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20022);

/**
 * Creates a range input field.
 */
sablono.core.range_field20026 = (function sablono$core$range_field20026(var_args){
var args20027 = [];
var len__5651__auto___20094 = arguments.length;
var i__5652__auto___20095 = (0);
while(true){
if((i__5652__auto___20095 < len__5651__auto___20094)){
args20027.push((arguments[i__5652__auto___20095]));

var G__20096 = (i__5652__auto___20095 + (1));
i__5652__auto___20095 = G__20096;
continue;
} else {
}
break;
}

var G__20029 = args20027.length;
switch (G__20029) {
case 1:
return sablono.core.range_field20026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20027.length)].join('')));

}
});

sablono.core.range_field20026.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.range_field20026.call(null,name__6325__auto__,null);
});

sablono.core.range_field20026.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.range_field20026.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field20026);

/**
 * Creates a search input field.
 */
sablono.core.search_field20030 = (function sablono$core$search_field20030(var_args){
var args20031 = [];
var len__5651__auto___20098 = arguments.length;
var i__5652__auto___20099 = (0);
while(true){
if((i__5652__auto___20099 < len__5651__auto___20098)){
args20031.push((arguments[i__5652__auto___20099]));

var G__20100 = (i__5652__auto___20099 + (1));
i__5652__auto___20099 = G__20100;
continue;
} else {
}
break;
}

var G__20033 = args20031.length;
switch (G__20033) {
case 1:
return sablono.core.search_field20030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20031.length)].join('')));

}
});

sablono.core.search_field20030.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.search_field20030.call(null,name__6325__auto__,null);
});

sablono.core.search_field20030.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.search_field20030.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field20030);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20034 = (function sablono$core$tel_field20034(var_args){
var args20035 = [];
var len__5651__auto___20102 = arguments.length;
var i__5652__auto___20103 = (0);
while(true){
if((i__5652__auto___20103 < len__5651__auto___20102)){
args20035.push((arguments[i__5652__auto___20103]));

var G__20104 = (i__5652__auto___20103 + (1));
i__5652__auto___20103 = G__20104;
continue;
} else {
}
break;
}

var G__20037 = args20035.length;
switch (G__20037) {
case 1:
return sablono.core.tel_field20034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20035.length)].join('')));

}
});

sablono.core.tel_field20034.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.tel_field20034.call(null,name__6325__auto__,null);
});

sablono.core.tel_field20034.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.tel_field20034.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field20034);

/**
 * Creates a text input field.
 */
sablono.core.text_field20038 = (function sablono$core$text_field20038(var_args){
var args20039 = [];
var len__5651__auto___20106 = arguments.length;
var i__5652__auto___20107 = (0);
while(true){
if((i__5652__auto___20107 < len__5651__auto___20106)){
args20039.push((arguments[i__5652__auto___20107]));

var G__20108 = (i__5652__auto___20107 + (1));
i__5652__auto___20107 = G__20108;
continue;
} else {
}
break;
}

var G__20041 = args20039.length;
switch (G__20041) {
case 1:
return sablono.core.text_field20038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20039.length)].join('')));

}
});

sablono.core.text_field20038.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.text_field20038.call(null,name__6325__auto__,null);
});

sablono.core.text_field20038.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.text_field20038.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20038);

/**
 * Creates a time input field.
 */
sablono.core.time_field20042 = (function sablono$core$time_field20042(var_args){
var args20043 = [];
var len__5651__auto___20110 = arguments.length;
var i__5652__auto___20111 = (0);
while(true){
if((i__5652__auto___20111 < len__5651__auto___20110)){
args20043.push((arguments[i__5652__auto___20111]));

var G__20112 = (i__5652__auto___20111 + (1));
i__5652__auto___20111 = G__20112;
continue;
} else {
}
break;
}

var G__20045 = args20043.length;
switch (G__20045) {
case 1:
return sablono.core.time_field20042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20043.length)].join('')));

}
});

sablono.core.time_field20042.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.time_field20042.call(null,name__6325__auto__,null);
});

sablono.core.time_field20042.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.time_field20042.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field20042);

/**
 * Creates a url input field.
 */
sablono.core.url_field20046 = (function sablono$core$url_field20046(var_args){
var args20047 = [];
var len__5651__auto___20114 = arguments.length;
var i__5652__auto___20115 = (0);
while(true){
if((i__5652__auto___20115 < len__5651__auto___20114)){
args20047.push((arguments[i__5652__auto___20115]));

var G__20116 = (i__5652__auto___20115 + (1));
i__5652__auto___20115 = G__20116;
continue;
} else {
}
break;
}

var G__20049 = args20047.length;
switch (G__20049) {
case 1:
return sablono.core.url_field20046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20047.length)].join('')));

}
});

sablono.core.url_field20046.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.url_field20046.call(null,name__6325__auto__,null);
});

sablono.core.url_field20046.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.url_field20046.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field20046);

/**
 * Creates a week input field.
 */
sablono.core.week_field20050 = (function sablono$core$week_field20050(var_args){
var args20051 = [];
var len__5651__auto___20118 = arguments.length;
var i__5652__auto___20119 = (0);
while(true){
if((i__5652__auto___20119 < len__5651__auto___20118)){
args20051.push((arguments[i__5652__auto___20119]));

var G__20120 = (i__5652__auto___20119 + (1));
i__5652__auto___20119 = G__20120;
continue;
} else {
}
break;
}

var G__20053 = args20051.length;
switch (G__20053) {
case 1:
return sablono.core.week_field20050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20051.length)].join('')));

}
});

sablono.core.week_field20050.cljs$core$IFn$_invoke$arity$1 = (function (name__6325__auto__){
return sablono.core.week_field20050.call(null,name__6325__auto__,null);
});

sablono.core.week_field20050.cljs$core$IFn$_invoke$arity$2 = (function (name__6325__auto__,value__6326__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6325__auto__,value__6326__auto__);
});

sablono.core.week_field20050.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field20050);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20122 = (function sablono$core$check_box20122(var_args){
var args20123 = [];
var len__5651__auto___20126 = arguments.length;
var i__5652__auto___20127 = (0);
while(true){
if((i__5652__auto___20127 < len__5651__auto___20126)){
args20123.push((arguments[i__5652__auto___20127]));

var G__20128 = (i__5652__auto___20127 + (1));
i__5652__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var G__20125 = args20123.length;
switch (G__20125) {
case 1:
return sablono.core.check_box20122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20122.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20123.length)].join('')));

}
});

sablono.core.check_box20122.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20122.call(null,name,null);
});

sablono.core.check_box20122.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20122.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box20122.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box20122.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20122);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20130 = (function sablono$core$radio_button20130(var_args){
var args20131 = [];
var len__5651__auto___20134 = arguments.length;
var i__5652__auto___20135 = (0);
while(true){
if((i__5652__auto___20135 < len__5651__auto___20134)){
args20131.push((arguments[i__5652__auto___20135]));

var G__20136 = (i__5652__auto___20135 + (1));
i__5652__auto___20135 = G__20136;
continue;
} else {
}
break;
}

var G__20133 = args20131.length;
switch (G__20133) {
case 1:
return sablono.core.radio_button20130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20130.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20131.length)].join('')));

}
});

sablono.core.radio_button20130.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20130.call(null,group,null);
});

sablono.core.radio_button20130.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20130.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button20130.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button20130.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20130);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20138 = (function sablono$core$select_options20138(var_args){
var args20139 = [];
var len__5651__auto___20150 = arguments.length;
var i__5652__auto___20151 = (0);
while(true){
if((i__5652__auto___20151 < len__5651__auto___20150)){
args20139.push((arguments[i__5652__auto___20151]));

var G__20152 = (i__5652__auto___20151 + (1));
i__5652__auto___20151 = G__20152;
continue;
} else {
}
break;
}

var G__20141 = args20139.length;
switch (G__20141) {
case 1:
return sablono.core.select_options20138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options20138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20139.length)].join('')));

}
});

sablono.core.select_options20138.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options20138.call(null,coll,null);
});

sablono.core.select_options20138.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5365__auto__ = (function sablono$core$iter__20142(s__20143){
return (new cljs.core.LazySeq(null,(function (){
var s__20143__$1 = s__20143;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20143__$1);
if(temp__4425__auto__){
var s__20143__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20143__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__20143__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__20145 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__20144 = (0);
while(true){
if((i__20144 < size__5364__auto__)){
var x = cljs.core._nth.call(null,c__5363__auto__,i__20144);
cljs.core.chunk_append.call(null,b__20145,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20148 = x;
var text = cljs.core.nth.call(null,vec__20148,(0),null);
var val = cljs.core.nth.call(null,vec__20148,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20148,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20138.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__20154 = (i__20144 + (1));
i__20144 = G__20154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20145),sablono$core$iter__20142.call(null,cljs.core.chunk_rest.call(null,s__20143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20145),null);
}
} else {
var x = cljs.core.first.call(null,s__20143__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20149 = x;
var text = cljs.core.nth.call(null,vec__20149,(0),null);
var val = cljs.core.nth.call(null,vec__20149,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__20149,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options20138.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__20142.call(null,cljs.core.rest.call(null,s__20143__$2)));
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

sablono.core.select_options20138.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20138);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20155 = (function sablono$core$drop_down20155(var_args){
var args20156 = [];
var len__5651__auto___20159 = arguments.length;
var i__5652__auto___20160 = (0);
while(true){
if((i__5652__auto___20160 < len__5651__auto___20159)){
args20156.push((arguments[i__5652__auto___20160]));

var G__20161 = (i__5652__auto___20160 + (1));
i__5652__auto___20160 = G__20161;
continue;
} else {
}
break;
}

var G__20158 = args20156.length;
switch (G__20158) {
case 2:
return sablono.core.drop_down20155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20155.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20156.length)].join('')));

}
});

sablono.core.drop_down20155.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20155.call(null,name,options,null);
});

sablono.core.drop_down20155.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down20155.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20155);
/**
 * Creates a text area element.
 */
sablono.core.text_area20163 = (function sablono$core$text_area20163(var_args){
var args20164 = [];
var len__5651__auto___20167 = arguments.length;
var i__5652__auto___20168 = (0);
while(true){
if((i__5652__auto___20168 < len__5651__auto___20167)){
args20164.push((arguments[i__5652__auto___20168]));

var G__20169 = (i__5652__auto___20168 + (1));
i__5652__auto___20168 = G__20169;
continue;
} else {
}
break;
}

var G__20166 = args20164.length;
switch (G__20166) {
case 1:
return sablono.core.text_area20163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20164.length)].join('')));

}
});

sablono.core.text_area20163.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20163.call(null,name,null);
});

sablono.core.text_area20163.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area20163.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20163);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20171 = (function sablono$core$label20171(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20171);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20172 = (function sablono$core$submit_button20172(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20172);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20173 = (function sablono$core$reset_button20173(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20173);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20174 = (function sablono$core$form_to20174(var_args){
var args__5658__auto__ = [];
var len__5651__auto___20179 = arguments.length;
var i__5652__auto___20180 = (0);
while(true){
if((i__5652__auto___20180 < len__5651__auto___20179)){
args__5658__auto__.push((arguments[i__5652__auto___20180]));

var G__20181 = (i__5652__auto___20180 + (1));
i__5652__auto___20180 = G__20181;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return sablono.core.form_to20174.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

sablono.core.form_to20174.cljs$core$IFn$_invoke$arity$variadic = (function (p__20177,body){
var vec__20178 = p__20177;
var method = cljs.core.nth.call(null,vec__20178,(0),null);
var action = cljs.core.nth.call(null,vec__20178,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to20174.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20174.cljs$lang$applyTo = (function (seq20175){
var G__20176 = cljs.core.first.call(null,seq20175);
var seq20175__$1 = cljs.core.next.call(null,seq20175);
return sablono.core.form_to20174.cljs$core$IFn$_invoke$arity$variadic(G__20176,seq20175__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20174);

//# sourceMappingURL=core.js.map