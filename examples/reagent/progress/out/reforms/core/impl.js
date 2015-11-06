// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.core.impl');
goog.require('cljs.core');
goog.require('reforms.binding.core');
goog.require('reforms.core.options');
goog.require('reforms.core.react_keys');
goog.require('clojure.string');
goog.require('goog.ui.IdGenerator');
reforms.core.impl.spinner;

reforms.core.impl.feedback_icon;
reforms.core.impl.extend_attrs = (function reforms$core$impl$extend_attrs(attrs,extensions){
return cljs.core.merge_with.call(null,(function() { 
var G__22216__delegate = function (vals){
var result = (function (){var vals_SINGLEQUOTE_ = cljs.core.remove.call(null,cljs.core.nil_QMARK_,vals);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vals_SINGLEQUOTE_){
return (function (p1__22213_SHARP_){
if(!((p1__22213_SHARP_ == null))){
if((false) || (p1__22213_SHARP_.cljs$core$Fn$)){
return true;
} else {
if((!p1__22213_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,p1__22213_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,p1__22213_SHARP_);
}
});})(vals_SINGLEQUOTE_))
,vals_SINGLEQUOTE_))){
return ((function (vals_SINGLEQUOTE_){
return (function() { 
var G__22217__delegate = function (args){
return cljs.core.last.call(null,cljs.core.map.call(null,((function (vals_SINGLEQUOTE_){
return (function (f){
return cljs.core.apply.call(null,f,args);
});})(vals_SINGLEQUOTE_))
,vals_SINGLEQUOTE_));
};
var G__22217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22218__i = 0, G__22218__a = new Array(arguments.length -  0);
while (G__22218__i < G__22218__a.length) {G__22218__a[G__22218__i] = arguments[G__22218__i + 0]; ++G__22218__i;}
  args = new cljs.core.IndexedSeq(G__22218__a,0);
} 
return G__22217__delegate.call(this,args);};
G__22217.cljs$lang$maxFixedArity = 0;
G__22217.cljs$lang$applyTo = (function (arglist__22219){
var args = cljs.core.seq(arglist__22219);
return G__22217__delegate(args);
});
G__22217.cljs$core$IFn$_invoke$arity$variadic = G__22217__delegate;
return G__22217;
})()
;
;})(vals_SINGLEQUOTE_))
} else {
return clojure.string.join.call(null," ",vals_SINGLEQUOTE_);
}
})();
return result;
};
var G__22216 = function (var_args){
var vals = null;
if (arguments.length > 0) {
var G__22220__i = 0, G__22220__a = new Array(arguments.length -  0);
while (G__22220__i < G__22220__a.length) {G__22220__a[G__22220__i] = arguments[G__22220__i + 0]; ++G__22220__i;}
  vals = new cljs.core.IndexedSeq(G__22220__a,0);
} 
return G__22216__delegate.call(this,vals);};
G__22216.cljs$lang$maxFixedArity = 0;
G__22216.cljs$lang$applyTo = (function (arglist__22221){
var vals = cljs.core.seq(arglist__22221);
return G__22216__delegate(vals);
});
G__22216.cljs$core$IFn$_invoke$arity$variadic = G__22216__delegate;
return G__22216;
})()
,attrs,extensions);
});
reforms.core.impl.override_attrs = (function reforms$core$impl$override_attrs(old,new$){
return cljs.core.merge_with.call(null,(function (old__$1,new$__$1){
if(cljs.core.map_QMARK_.call(null,old__$1)){
return reforms$core$impl$override_attrs.call(null,old__$1,new$__$1);
} else {
return new$__$1;

}
}),old,new$);
});
reforms.core.impl.merge_attrs = (function reforms$core$impl$merge_attrs(defaults,overrides,extensions){
var $ = overrides;
var $__$1 = reforms.core.impl.override_attrs.call(null,defaults,$);
var $__$2 = reforms.core.impl.extend_attrs.call(null,$__$1,extensions);
return $__$2;
});
reforms.core.impl.parse_args = (function reforms$core$impl$parse_args(var_args){
var args22222 = [];
var len__5651__auto___22226 = arguments.length;
var i__5652__auto___22227 = (0);
while(true){
if((i__5652__auto___22227 < len__5651__auto___22226)){
args22222.push((arguments[i__5652__auto___22227]));

var G__22228 = (i__5652__auto___22227 + (1));
i__5652__auto___22227 = G__22228;
continue;
} else {
}
break;
}

var G__22224 = args22222.length;
switch (G__22224) {
case 3:
return reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22222.length)].join('')));

}
});

reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$3 = (function (args,opt_args,result){
while(true){
var vec__22225 = cljs.core.first.call(null,opt_args);
var opt_pred = cljs.core.nth.call(null,vec__22225,(0),null);
var def = cljs.core.nth.call(null,vec__22225,(1),null);
var arg = cljs.core.first.call(null,args);
if((arg == null)){
return result;
} else {
if((opt_pred == null)){
var G__22230 = cljs.core.rest.call(null,args);
var G__22231 = opt_args;
var G__22232 = cljs.core.conj.call(null,result,arg);
args = G__22230;
opt_args = G__22231;
result = G__22232;
continue;
} else {
if(cljs.core.truth_(opt_pred.call(null,arg))){
var G__22233 = cljs.core.rest.call(null,args);
var G__22234 = cljs.core.rest.call(null,opt_args);
var G__22235 = cljs.core.conj.call(null,result,arg);
args = G__22233;
opt_args = G__22234;
result = G__22235;
continue;
} else {
var G__22236 = args;
var G__22237 = cljs.core.rest.call(null,opt_args);
var G__22238 = cljs.core.conj.call(null,result,def);
args = G__22236;
opt_args = G__22237;
result = G__22238;
continue;

}
}
}
break;
}
});

reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$2 = (function (args,opt_args){
return reforms.core.impl.parse_args.call(null,args,opt_args,cljs.core.PersistentVector.EMPTY);
});

reforms.core.impl.parse_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
return reforms.core.impl.parse_args.call(null,args,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});

reforms.core.impl.parse_args.cljs$lang$maxFixedArity = 3;
reforms.core.impl.resolve_args = (function reforms$core$impl$resolve_args(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22247 = arguments.length;
var i__5652__auto___22248 = (0);
while(true){
if((i__5652__auto___22248 < len__5651__auto___22247)){
args__5658__auto__.push((arguments[i__5652__auto___22248]));

var G__22249 = (i__5652__auto___22248 + (1));
i__5652__auto___22248 = G__22249;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((3) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((3)),(0))):null);
return reforms.core.impl.resolve_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5659__auto__);
});

reforms.core.impl.resolve_args.cljs$core$IFn$_invoke$arity$variadic = (function (ks,ext_attrs,args,p__22244){
var vec__22245 = p__22244;
var opt_args = cljs.core.nth.call(null,vec__22245,(0),null);
var vec__22246 = reforms.core.impl.parse_args.call(null,args,(function (){var or__4593__auto__ = opt_args;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null)], null);
}
})());
var attrs = cljs.core.nth.call(null,vec__22246,(0),null);
var rest_args = cljs.core.nthnext.call(null,vec__22246,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.merge_attrs.call(null,cljs.core.reduce.call(null,((function (vec__22246,attrs,rest_args,vec__22245,opt_args){
return (function (attrs__$1,crn_attrs){
return reforms.core.impl.merge_attrs.call(null,attrs__$1,crn_attrs,cljs.core.PersistentArrayMap.EMPTY);
});})(vec__22246,attrs,rest_args,vec__22245,opt_args))
,cljs.core.map.call(null,((function (vec__22246,attrs,rest_args,vec__22245,opt_args){
return (function (p1__22239_SHARP_){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22239_SHARP_,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null));
});})(vec__22246,attrs,rest_args,vec__22245,opt_args))
,ks)),attrs,ext_attrs),rest_args], null);
});

reforms.core.impl.resolve_args.cljs$lang$maxFixedArity = (3);

reforms.core.impl.resolve_args.cljs$lang$applyTo = (function (seq22240){
var G__22241 = cljs.core.first.call(null,seq22240);
var seq22240__$1 = cljs.core.next.call(null,seq22240);
var G__22242 = cljs.core.first.call(null,seq22240__$1);
var seq22240__$2 = cljs.core.next.call(null,seq22240__$1);
var G__22243 = cljs.core.first.call(null,seq22240__$2);
var seq22240__$3 = cljs.core.next.call(null,seq22240__$2);
return reforms.core.impl.resolve_args.cljs$core$IFn$_invoke$arity$variadic(G__22241,G__22242,G__22243,seq22240__$3);
});
reforms.core.impl.parse_options = (function reforms$core$impl$parse_options(args){
var vec__22251 = cljs.core.split_with.call(null,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.partition_all.call(null,(2),args));
var options = cljs.core.nth.call(null,vec__22251,(0),null);
var rest_args = cljs.core.nth.call(null,vec__22251,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,cljs.core.identity,options)),cljs.core.mapcat.call(null,cljs.core.identity,(function (){var or__4593__auto__ = rest_args;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);
});
reforms.core.impl.attrs_QMARK_ = (function reforms$core$impl$attrs_QMARK_(arg){
return (cljs.core.not.call(null,reforms.binding.core.valid_QMARK_.call(null,arg))) && (cljs.core.map_QMARK_.call(null,arg));
});
/**
 * Converts an option converted to string to be used in <select> tag back to its
 * representation as in options (it's often a keyword).
 * 
 * Example:
 * 
 * (unstr-option ":foo"
 *              [:foo "foobar" :foo2 "zoobar"]) ;; => :foo
 */
reforms.core.impl.unstr_option = (function reforms$core$impl$unstr_option(s,options){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function reforms$core$impl$unstr_option_$_str__GT_orig(p__22255){
var vec__22257 = p__22255;
var k = cljs.core.nth.call(null,vec__22257,(0),null);
var _v = cljs.core.nth.call(null,vec__22257,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(k)].join(''),k], null);
}),options));
var or__4593__auto__ = m.call(null,s);
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return s;
}
});
reforms.core.impl.deprecated = (function reforms$core$impl$deprecated(msg){
if(cljs.core.truth_(console)){
return console.warn("[reforms] Warning:",msg);
} else {
return null;
}
});
reforms.core.impl._p = (function reforms$core$impl$_p(xs){
return xs;
});
reforms.core.impl.gen_dom_id = (function reforms$core$impl$gen_dom_id(var_args){
var args22258 = [];
var len__5651__auto___22262 = arguments.length;
var i__5652__auto___22263 = (0);
while(true){
if((i__5652__auto___22263 < len__5651__auto___22262)){
args22258.push((arguments[i__5652__auto___22263]));

var G__22264 = (i__5652__auto___22263 + (1));
i__5652__auto___22263 = G__22264;
continue;
} else {
}
break;
}

var G__22260 = args22258.length;
switch (G__22260) {
case 1:
return reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22258.length)].join('')));

}
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$1 = (function (path){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,(function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$))?true:false):false)){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
}),path));
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$2 = (function (cursor,korks){
return reforms.core.impl.gen_dom_id.call(null,cljs.core.concat.call(null,reforms.binding.core.path.call(null,cursor),korks));
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});

reforms.core.impl.gen_dom_id.cljs$lang$maxFixedArity = 2;
reforms.core.impl.form_horizontal_QMARK_ = (function reforms$core$impl$form_horizontal_QMARK_(){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null));
});
reforms.core.impl.label_column_class = (function reforms$core$impl$label_column_class(){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589)], null));
} else {
return null;
}
});
reforms.core.impl.input_column_class = (function reforms$core$impl$input_column_class(){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433)], null));
} else {
return null;
}
});
reforms.core.impl.input_column = (function reforms$core$impl$input_column(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22268 = arguments.length;
var i__5652__auto___22269 = (0);
while(true){
if((i__5652__auto___22269 < len__5651__auto___22268)){
args__5658__auto__.push((arguments[i__5652__auto___22269]));

var G__22270 = (i__5652__auto___22269 + (1));
i__5652__auto___22269 = G__22270;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic = (function (key,elems){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.impl.input_column_class.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key], null)], null),elems));
} else {
return elems;
}
});

reforms.core.impl.input_column.cljs$lang$maxFixedArity = (1);

reforms.core.impl.input_column.cljs$lang$applyTo = (function (seq22266){
var G__22267 = cljs.core.first.call(null,seq22266);
var seq22266__$1 = cljs.core.next.call(null,seq22266);
return reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic(G__22267,seq22266__$1);
});
reforms.core.impl.feedback_icon = (function reforms$core$impl$feedback_icon(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22273 = arguments.length;
var i__5652__auto___22274 = (0);
while(true){
if((i__5652__auto___22274 < len__5651__auto___22273)){
args__5658__auto__.push((arguments[i__5652__auto___22274]));

var G__22275 = (i__5652__auto___22274 + (1));
i__5652__auto___22274 = G__22275;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.impl.feedback_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.impl.feedback_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__22272 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback-icon","feedback-icon",1288816964)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__22272,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),attrs], null);
});

reforms.core.impl.feedback_icon.cljs$lang$maxFixedArity = (0);

reforms.core.impl.feedback_icon.cljs$lang$applyTo = (function (seq22271){
return reforms.core.impl.feedback_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22271));
});
reforms.core.impl.error_label = (function reforms$core$impl$error_label(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22279 = arguments.length;
var i__5652__auto___22280 = (0);
while(true){
if((i__5652__auto___22280 < len__5651__auto___22279)){
args__5658__auto__.push((arguments[i__5652__auto___22280]));

var G__22281 = (i__5652__auto___22280 + (1));
i__5652__auto___22280 = G__22281;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.impl.error_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.impl.error_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__22277 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-label","error-label",1393895243)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__22277,(0),null);
var vec__22278 = cljs.core.nth.call(null,vec__22277,(1),null);
var error = cljs.core.nth.call(null,vec__22278,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),attrs,error], null);
});

reforms.core.impl.error_label.cljs$lang$maxFixedArity = (0);

reforms.core.impl.error_label.cljs$lang$applyTo = (function (seq22276){
return reforms.core.impl.error_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22276));
});
reforms.core.impl.warning_label = (function reforms$core$impl$warning_label(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22285 = arguments.length;
var i__5652__auto___22286 = (0);
while(true){
if((i__5652__auto___22286 < len__5651__auto___22285)){
args__5658__auto__.push((arguments[i__5652__auto___22286]));

var G__22287 = (i__5652__auto___22286 + (1));
i__5652__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.impl.warning_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.impl.warning_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__22283 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warning-label","warning-label",-252042644)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__22283,(0),null);
var vec__22284 = cljs.core.nth.call(null,vec__22283,(1),null);
var warning = cljs.core.nth.call(null,vec__22284,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),attrs,warning], null);
});

reforms.core.impl.warning_label.cljs$lang$maxFixedArity = (0);

reforms.core.impl.warning_label.cljs$lang$applyTo = (function (seq22282){
return reforms.core.impl.warning_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22282));
});
reforms.core.impl.maybe_flatten = (function reforms$core$impl$maybe_flatten(xs){
if((cljs.core.seq.call(null,xs)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs)))){
return cljs.core.first.call(null,xs);
} else {
return xs;
}
});
reforms.core.impl.unlabeled_control = (function reforms$core$impl$unlabeled_control(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22291 = arguments.length;
var i__5652__auto___22292 = (0);
while(true){
if((i__5652__auto___22292 < len__5651__auto___22291)){
args__5658__auto__.push((arguments[i__5652__auto___22292]));

var G__22293 = (i__5652__auto___22292 + (1));
i__5652__auto___22292 = G__22293;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic = (function (key,inline,xs){
return reforms.core.impl.maybe_flatten.call(null,(cljs.core.truth_(inline)?xs:cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"form-group","form-group",-267875328),key)], null)], null),cljs.core.concat.call(null,(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.impl.label_column_class.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"label-column","label-column",350570745),key)], null)], null)], null):null),cljs.core.apply.call(null,reforms.core.impl.input_column,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input-column","input-column",-1380392064),key),xs))))));
});

reforms.core.impl.unlabeled_control.cljs$lang$maxFixedArity = (2);

reforms.core.impl.unlabeled_control.cljs$lang$applyTo = (function (seq22288){
var G__22289 = cljs.core.first.call(null,seq22288);
var seq22288__$1 = cljs.core.next.call(null,seq22288);
var G__22290 = cljs.core.first.call(null,seq22288__$1);
var seq22288__$2 = cljs.core.next.call(null,seq22288__$1);
return reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic(G__22289,G__22290,seq22288__$2);
});
reforms.core.impl.labeled_control = (function reforms$core$impl$labeled_control(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22300 = arguments.length;
var i__5652__auto___22301 = (0);
while(true){
if((i__5652__auto___22301 < len__5651__auto___22300)){
args__5658__auto__.push((arguments[i__5652__auto___22301]));

var G__22302 = (i__5652__auto___22301 + (1));
i__5652__auto___22301 = G__22302;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((5) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((5)),(0))):null);
return reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5659__auto__);
});

reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic = (function (key,inline,form_group_class,label,dom_id,xs){
return reforms.core.impl.maybe_flatten.call(null,(cljs.core.truth_(inline)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,xs),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for","for",-1323786319),dom_id,new cljs.core.Keyword(null,"class","class",-2030961996),"control-label",new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"control-label","control-label",1226436372),key)], null),label], null)):cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),form_group_class,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"form-group","form-group",-267875328),key)], null)], null),cljs.core.concat.call(null,(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for","for",-1323786319),dom_id,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("control-label "),cljs.core.str(reforms.core.impl.label_column_class.call(null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"control-label","control-label",1226436372))], null),label], null)], null):(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("control-label "),cljs.core.str(reforms.core.impl.label_column_class.call(null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"control-label","control-label",1226436372))], null)], null)], null):null
)),cljs.core.apply.call(null,reforms.core.impl.input_column,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input-column","input-column",-1380392064)),xs))))));
});

reforms.core.impl.labeled_control.cljs$lang$maxFixedArity = (5);

reforms.core.impl.labeled_control.cljs$lang$applyTo = (function (seq22294){
var G__22295 = cljs.core.first.call(null,seq22294);
var seq22294__$1 = cljs.core.next.call(null,seq22294);
var G__22296 = cljs.core.first.call(null,seq22294__$1);
var seq22294__$2 = cljs.core.next.call(null,seq22294__$1);
var G__22297 = cljs.core.first.call(null,seq22294__$2);
var seq22294__$3 = cljs.core.next.call(null,seq22294__$2);
var G__22298 = cljs.core.first.call(null,seq22294__$3);
var seq22294__$4 = cljs.core.next.call(null,seq22294__$3);
var G__22299 = cljs.core.first.call(null,seq22294__$4);
var seq22294__$5 = cljs.core.next.call(null,seq22294__$4);
return reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic(G__22295,G__22296,G__22297,G__22298,G__22299,seq22294__$5);
});
reforms.core.impl.input_STAR_ = (function reforms$core$impl$input_STAR_(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22313 = arguments.length;
var i__5652__auto___22314 = (0);
while(true){
if((i__5652__auto___22314 < len__5651__auto___22313)){
args__5658__auto__.push((arguments[i__5652__auto___22314]));

var G__22315 = (i__5652__auto___22314 + (1));
i__5652__auto___22314 = G__22315;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((6) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((6)),(0))):null);
return reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5659__auto__);
});

reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,label,cursor,korks,p__22310,inner){
var map__22311 = p__22310;
var map__22311__$1 = ((((!((map__22311 == null)))?((((map__22311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22311):map__22311);
var placeholder = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var valid_QMARK_ = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var in_progress = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var warn_fn = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594));
var help = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var inline = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var large = cljs.core.get.call(null,map__22311__$1,new cljs.core.Keyword(null,"large","large",-196820544));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4593__auto__ = (valid_QMARK_ == null);
if(or__4593__auto__){
return or__4593__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
var warning = (function (){var and__4581__auto__ = warn_fn;
if(cljs.core.truth_(and__4581__auto__)){
return warn_fn.call(null,reforms.binding.core.get_in.call(null,cursor,korks));
} else {
return and__4581__auto__;
}
})();
var base_key = reforms.core.react_keys.gen_key.call(null,cursor,korks);
return cljs.core.apply.call(null,reforms.core.impl.labeled_control,base_key,inline,clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4593__auto__ = warning;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return in_progress;
}
})())?"has-feedback":null),(cljs.core.truth_(valid)?null:"has-error"),(cljs.core.truth_(large)?"form-group-lg":null)], null)),label,dom_id,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),base_key)], null),attrs,(cljs.core.truth_(placeholder)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null):null))], null),inner)], null),(cljs.core.truth_(in_progress)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.spinner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control-feedback",new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"spinner","spinner",-646071217),base_key)], null))], null):(cljs.core.truth_(warning)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.feedback_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon-warning","icon-warning",650510185)], null))),cljs.core.str(" form-control-feedback")].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"feedback-icon","feedback-icon",1288816964),base_key)], null))], null):null
)),(cljs.core.truth_(warning)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.warning_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"warning-label","warning-label",-252042644),base_key)], null),warning)], null):null),(function (){var temp__4425__auto__ = (function (){var and__4581__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4581__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4581__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var validation_error = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.error_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"erorr-label","erorr-label",-2006743391),base_key)], null),validation_error)], null);
} else {
return null;
}
})(),(cljs.core.truth_(help)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-block","p.help-block",-933389757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"help-block","help-block",1988985632),base_key)], null),help], null)], null):null)));
});

reforms.core.impl.input_STAR_.cljs$lang$maxFixedArity = (6);

reforms.core.impl.input_STAR_.cljs$lang$applyTo = (function (seq22303){
var G__22304 = cljs.core.first.call(null,seq22303);
var seq22303__$1 = cljs.core.next.call(null,seq22303);
var G__22305 = cljs.core.first.call(null,seq22303__$1);
var seq22303__$2 = cljs.core.next.call(null,seq22303__$1);
var G__22306 = cljs.core.first.call(null,seq22303__$2);
var seq22303__$3 = cljs.core.next.call(null,seq22303__$2);
var G__22307 = cljs.core.first.call(null,seq22303__$3);
var seq22303__$4 = cljs.core.next.call(null,seq22303__$3);
var G__22308 = cljs.core.first.call(null,seq22303__$4);
var seq22303__$5 = cljs.core.next.call(null,seq22303__$4);
var G__22309 = cljs.core.first.call(null,seq22303__$5);
var seq22303__$6 = cljs.core.next.call(null,seq22303__$5);
return reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22304,G__22305,G__22306,G__22307,G__22308,G__22309,seq22303__$6);
});
reforms.core.impl.html5_input_STAR_ = (function reforms$core$impl$html5_input_STAR_(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22324 = arguments.length;
var i__5652__auto___22325 = (0);
while(true){
if((i__5652__auto___22325 < len__5651__auto___22324)){
args__5658__auto__.push((arguments[i__5652__auto___22325]));

var G__22326 = (i__5652__auto___22325 + (1));
i__5652__auto___22325 = G__22326;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((6) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((6)),(0))):null);
return reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5659__auto__);
});

reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,label,placeholder,cursor,korks,type,opts){
if(cljs.core.truth_(placeholder)){
reforms.core.impl.deprecated.call(null,"Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead.");
} else {
}

var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (dom_id){
return (function (p1__22316_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__22316_SHARP_.target.value);
});})(dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),reforms.binding.core.get_in.call(null,cursor,korks)], null));
return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"input","input",556931961),input_attrs,label,cursor,korks,opts);
});

reforms.core.impl.html5_input_STAR_.cljs$lang$maxFixedArity = (6);

reforms.core.impl.html5_input_STAR_.cljs$lang$applyTo = (function (seq22317){
var G__22318 = cljs.core.first.call(null,seq22317);
var seq22317__$1 = cljs.core.next.call(null,seq22317);
var G__22319 = cljs.core.first.call(null,seq22317__$1);
var seq22317__$2 = cljs.core.next.call(null,seq22317__$1);
var G__22320 = cljs.core.first.call(null,seq22317__$2);
var seq22317__$3 = cljs.core.next.call(null,seq22317__$2);
var G__22321 = cljs.core.first.call(null,seq22317__$3);
var seq22317__$4 = cljs.core.next.call(null,seq22317__$3);
var G__22322 = cljs.core.first.call(null,seq22317__$4);
var seq22317__$5 = cljs.core.next.call(null,seq22317__$4);
var G__22323 = cljs.core.first.call(null,seq22317__$5);
var seq22317__$6 = cljs.core.next.call(null,seq22317__$5);
return reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22318,G__22319,G__22320,G__22321,G__22322,G__22323,seq22317__$6);
});
/**
 * A spinner.
 * 
 * Arguments:
 * 
 * [attrs]
 * 
 * attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 */
reforms.core.impl.spinner = (function reforms$core$impl$spinner(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22329 = arguments.length;
var i__5652__auto___22330 = (0);
while(true){
if((i__5652__auto___22330 < len__5651__auto___22329)){
args__5658__auto__.push((arguments[i__5652__auto___22330]));

var G__22331 = (i__5652__auto___22330 + (1));
i__5652__auto___22330 = G__22331;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__22328 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spinner","spinner",-646071217)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__22328,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),attrs], null);
});

reforms.core.impl.spinner.cljs$lang$maxFixedArity = (0);

reforms.core.impl.spinner.cljs$lang$applyTo = (function (seq22327){
return reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22327));
});

//# sourceMappingURL=impl.js.map