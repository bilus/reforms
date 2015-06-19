// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reforms.core.impl');
goog.require('cljs.core');
goog.require('om.core');
goog.require('reforms.core.options');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.ui.IdGenerator');

reforms.core.impl.form_horizontal_QMARK_ = (function reforms$core$impl$form_horizontal_QMARK_(){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null));
});
reforms.core.impl.gen_dom_id = (function reforms$core$impl$gen_dom_id(){
var G__43015 = arguments.length;
switch (G__43015) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$1 = (function (path){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,cljs.core.name,path));
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$2 = (function (cursor,korks){
return reforms.core.impl.gen_dom_id.call(null,cljs.core.concat.call(null,om.core.path.call(null,cursor),korks));
});

reforms.core.impl.gen_dom_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});

reforms.core.impl.gen_dom_id.cljs$lang$maxFixedArity = 2;
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
reforms.core.impl.input_column = (function reforms$core$impl$input_column(){
var argseq__5389__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic(argseq__5389__auto__);
});

reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
if(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.impl.input_column_class.call(null)], null),elems], null);
} else {
return elems;
}
});

reforms.core.impl.input_column.cljs$lang$maxFixedArity = (0);

reforms.core.impl.input_column.cljs$lang$applyTo = (function (seq43017){
return reforms.core.impl.input_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43017));
});
/**
 * Converts an option converted to string to be used in <select> tag back to its
 * representation as in options (it's often a keyword).
 * 
 * Example:
 * 
 * (unstr-option ":foo"
 * [:foo "foobar" :foo2 "zoobar"]) ;; => :foo
 */
reforms.core.impl.unstr_option = (function reforms$core$impl$unstr_option(s,options){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function reforms$core$impl$unstr_option_$_str__GT_orig(p__43021){
var vec__43023 = p__43021;
var k = cljs.core.nth.call(null,vec__43023,(0),null);
var _v = cljs.core.nth.call(null,vec__43023,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(k)].join(''),k], null);
}),options));
var or__4349__auto__ = m.call(null,s);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return s;
}
});
reforms.core.impl.feedback_icon = (function reforms$core$impl$feedback_icon(class$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null);
});
reforms.core.impl.simple_checkbox = (function reforms$core$impl$simple_checkbox(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reforms.core.impl.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

reforms.core.impl.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (checked,p__43027){
var map__43028 = p__43027;
var map__43028__$1 = ((cljs.core.seq_QMARK_.call(null,map__43028))?cljs.core.apply.call(null,cljs.core.hash_map,map__43028):map__43028);
var on_click = cljs.core.get.call(null,map__43028__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__43028,map__43028__$1,on_click){
return (function (p1__43024_SHARP_){
return on_click.call(null,p1__43024_SHARP_.target.checked);
});})(map__43028,map__43028__$1,on_click))
,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null);
});

reforms.core.impl.simple_checkbox.cljs$lang$maxFixedArity = (1);

reforms.core.impl.simple_checkbox.cljs$lang$applyTo = (function (seq43025){
var G__43026 = cljs.core.first.call(null,seq43025);
var seq43025__$1 = cljs.core.next.call(null,seq43025);
return reforms.core.impl.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic(G__43026,seq43025__$1);
});
reforms.core.impl.all_selected_QMARK_ = (function reforms$core$impl$all_selected_QMARK_(selected_values,all_values){
return clojure.set.subset_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),selected_values);
});
reforms.core.impl.error_label = (function reforms$core$impl$error_label(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null),error], null);
});
reforms.core.impl.warning_label = (function reforms$core$impl$warning_label(warning){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"warning"], null),warning], null);
});
reforms.core.impl.unlabeled_control = (function reforms$core$impl$unlabeled_control(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic = (function (inline,xs){
if(cljs.core.truth_(inline)){
return xs;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.core.impl.input_column.call(null,xs)),(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.impl.label_column_class.call(null)], null)], null):null))], null);
}
});

reforms.core.impl.unlabeled_control.cljs$lang$maxFixedArity = (1);

reforms.core.impl.unlabeled_control.cljs$lang$applyTo = (function (seq43029){
var G__43030 = cljs.core.first.call(null,seq43029);
var seq43029__$1 = cljs.core.next.call(null,seq43029);
return reforms.core.impl.unlabeled_control.cljs$core$IFn$_invoke$arity$variadic(G__43030,seq43029__$1);
});
reforms.core.impl.labeled_control = (function reforms$core$impl$labeled_control(){
var argseq__5389__auto__ = ((((4) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(4)),(0))):null);
return reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5389__auto__);
});

reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic = (function (inline,form_group_class,label,dom_id,xs){
if(cljs.core.truth_(inline)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,xs),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),dom_id,new cljs.core.Keyword(null,"class","class",-2030961996),"control-label"], null),label], null));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),form_group_class,new cljs.core.Keyword(null,"key","key",-1516042587),dom_id], null),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.core.impl.input_column.call(null,xs)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),dom_id,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("control-label "),cljs.core.str(reforms.core.impl.label_column_class.call(null))].join('')], null),label], null))], null);
}
});

reforms.core.impl.labeled_control.cljs$lang$maxFixedArity = (4);

reforms.core.impl.labeled_control.cljs$lang$applyTo = (function (seq43031){
var G__43032 = cljs.core.first.call(null,seq43031);
var seq43031__$1 = cljs.core.next.call(null,seq43031);
var G__43033 = cljs.core.first.call(null,seq43031__$1);
var seq43031__$2 = cljs.core.next.call(null,seq43031__$1);
var G__43034 = cljs.core.first.call(null,seq43031__$2);
var seq43031__$3 = cljs.core.next.call(null,seq43031__$2);
var G__43035 = cljs.core.first.call(null,seq43031__$3);
var seq43031__$4 = cljs.core.next.call(null,seq43031__$3);
return reforms.core.impl.labeled_control.cljs$core$IFn$_invoke$arity$variadic(G__43032,G__43033,G__43034,G__43035,seq43031__$4);
});
reforms.core.impl.extend_attrs = (function reforms$core$impl$extend_attrs(attrs,extensions){
return cljs.core.merge_with.call(null,(function() { 
var G__43039__delegate = function (vals){
var result = (function (){var vals_SINGLEQUOTE_ = cljs.core.remove.call(null,cljs.core.nil_QMARK_,vals);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vals_SINGLEQUOTE_){
return (function (p1__43036_SHARP_){
var G__43038 = p1__43036_SHARP_;
if(G__43038){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__43038.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__43038.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__43038);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__43038);
}
});})(vals_SINGLEQUOTE_))
,vals_SINGLEQUOTE_))){
return ((function (vals_SINGLEQUOTE_){
return (function() { 
var G__43040__delegate = function (args){
return cljs.core.last.call(null,cljs.core.map.call(null,((function (vals_SINGLEQUOTE_){
return (function (f){
return cljs.core.apply.call(null,f,args);
});})(vals_SINGLEQUOTE_))
,vals_SINGLEQUOTE_));
};
var G__43040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43041__i = 0, G__43041__a = new Array(arguments.length -  0);
while (G__43041__i < G__43041__a.length) {G__43041__a[G__43041__i] = arguments[G__43041__i + 0]; ++G__43041__i;}
  args = new cljs.core.IndexedSeq(G__43041__a,0);
} 
return G__43040__delegate.call(this,args);};
G__43040.cljs$lang$maxFixedArity = 0;
G__43040.cljs$lang$applyTo = (function (arglist__43042){
var args = cljs.core.seq(arglist__43042);
return G__43040__delegate(args);
});
G__43040.cljs$core$IFn$_invoke$arity$variadic = G__43040__delegate;
return G__43040;
})()
;
;})(vals_SINGLEQUOTE_))
} else {
return clojure.string.join.call(null," ",vals_SINGLEQUOTE_);
}
})();
return result;
};
var G__43039 = function (var_args){
var vals = null;
if (arguments.length > 0) {
var G__43043__i = 0, G__43043__a = new Array(arguments.length -  0);
while (G__43043__i < G__43043__a.length) {G__43043__a[G__43043__i] = arguments[G__43043__i + 0]; ++G__43043__i;}
  vals = new cljs.core.IndexedSeq(G__43043__a,0);
} 
return G__43039__delegate.call(this,vals);};
G__43039.cljs$lang$maxFixedArity = 0;
G__43039.cljs$lang$applyTo = (function (arglist__43044){
var vals = cljs.core.seq(arglist__43044);
return G__43039__delegate(vals);
});
G__43039.cljs$core$IFn$_invoke$arity$variadic = G__43039__delegate;
return G__43039;
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
reforms.core.impl.parse_args = (function reforms$core$impl$parse_args(args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
}
});
reforms.core.impl.resolve_args = (function reforms$core$impl$resolve_args(ks,ext_attrs,args){
var vec__43047 = reforms.core.impl.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__43047,(0),null);
var rest_args = cljs.core.nth.call(null,vec__43047,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.merge_attrs.call(null,cljs.core.reduce.call(null,((function (vec__43047,attrs,rest_args){
return (function (attrs__$1,crn_attrs){
return reforms.core.impl.merge_attrs.call(null,attrs__$1,crn_attrs,cljs.core.PersistentArrayMap.EMPTY);
});})(vec__43047,attrs,rest_args))
,cljs.core.map.call(null,((function (vec__43047,attrs,rest_args){
return (function (p1__43045_SHARP_){
return reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43045_SHARP_,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null));
});})(vec__43047,attrs,rest_args))
,ks)),attrs,ext_attrs),rest_args], null);
});
reforms.core.impl.parse_options = (function reforms$core$impl$parse_options(args){
var vec__43049 = cljs.core.split_with.call(null,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.partition_all.call(null,(2),args));
var options = cljs.core.nth.call(null,vec__43049,(0),null);
var rest_args = cljs.core.nth.call(null,vec__43049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,cljs.core.identity,options)),cljs.core.mapcat.call(null,cljs.core.identity,(function (){var or__4349__auto__ = rest_args;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);
});
reforms.core.impl.input_STAR_ = (function reforms$core$impl$input_STAR_(){
var argseq__5389__auto__ = ((((6) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(6)),(0))):null);
return reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5389__auto__);
});

reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,label,cursor,korks,p__43057,inner){
var map__43058 = p__43057;
var map__43058__$1 = ((cljs.core.seq_QMARK_.call(null,map__43058))?cljs.core.apply.call(null,cljs.core.hash_map,map__43058):map__43058);
var valid_QMARK_ = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var in_progress = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var warn_fn = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594));
var help = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var inline = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var large = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"large","large",-196820544));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4349__auto__ = (valid_QMARK_ == null);
if(or__4349__auto__){
return or__4349__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
var warning = (function (){var and__4337__auto__ = warn_fn;
if(cljs.core.truth_(and__4337__auto__)){
return warn_fn.call(null,cljs.core.get_in.call(null,cursor,korks));
} else {
return and__4337__auto__;
}
})();
return reforms.core.impl.labeled_control.call(null,inline,clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4349__auto__ = warning;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return in_progress;
}
})())?"has-feedback":null),(cljs.core.truth_(valid)?null:"has-error"),(cljs.core.truth_(large)?"form-group-lg":null)], null)),label,dom_id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs,inner], null),(cljs.core.truth_(in_progress)?reforms.core.impl.spinner.call(null,"form-control-feedback"):(cljs.core.truth_(warning)?reforms.core.impl.feedback_icon.call(null,[cljs.core.str(reforms.core.options.get_options.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon-warning","icon-warning",650510185)], null))),cljs.core.str(" form-control-feedback")].join('')):null
)),(cljs.core.truth_(warning)?reforms.core.impl.warning_label.call(null,warning):null),(function (){var temp__4423__auto__ = (function (){var and__4337__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4337__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4337__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var validation_error = temp__4423__auto__;
return reforms.core.impl.error_label.call(null,validation_error);
} else {
return null;
}
})(),(cljs.core.truth_(help)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help-block","p.help-block",-933389757),help], null):null));
});

reforms.core.impl.input_STAR_.cljs$lang$maxFixedArity = (6);

reforms.core.impl.input_STAR_.cljs$lang$applyTo = (function (seq43050){
var G__43051 = cljs.core.first.call(null,seq43050);
var seq43050__$1 = cljs.core.next.call(null,seq43050);
var G__43052 = cljs.core.first.call(null,seq43050__$1);
var seq43050__$2 = cljs.core.next.call(null,seq43050__$1);
var G__43053 = cljs.core.first.call(null,seq43050__$2);
var seq43050__$3 = cljs.core.next.call(null,seq43050__$2);
var G__43054 = cljs.core.first.call(null,seq43050__$3);
var seq43050__$4 = cljs.core.next.call(null,seq43050__$3);
var G__43055 = cljs.core.first.call(null,seq43050__$4);
var seq43050__$5 = cljs.core.next.call(null,seq43050__$4);
var G__43056 = cljs.core.first.call(null,seq43050__$5);
var seq43050__$6 = cljs.core.next.call(null,seq43050__$5);
return reforms.core.impl.input_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43051,G__43052,G__43053,G__43054,G__43055,G__43056,seq43050__$6);
});
reforms.core.impl.html5_input_STAR_ = (function reforms$core$impl$html5_input_STAR_(){
var argseq__5389__auto__ = ((((6) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(6)),(0))):null);
return reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5389__auto__);
});

reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,label,placeholder,cursor,korks,type,opts){
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (dom_id){
return (function (p1__43059_SHARP_){
return om.core.update_BANG_.call(null,cursor,korks,p1__43059_SHARP_.target.value);
});})(dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cursor,korks)], null));
return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"input","input",556931961),input_attrs,label,cursor,korks,opts);
});

reforms.core.impl.html5_input_STAR_.cljs$lang$maxFixedArity = (6);

reforms.core.impl.html5_input_STAR_.cljs$lang$applyTo = (function (seq43060){
var G__43061 = cljs.core.first.call(null,seq43060);
var seq43060__$1 = cljs.core.next.call(null,seq43060);
var G__43062 = cljs.core.first.call(null,seq43060__$1);
var seq43060__$2 = cljs.core.next.call(null,seq43060__$1);
var G__43063 = cljs.core.first.call(null,seq43060__$2);
var seq43060__$3 = cljs.core.next.call(null,seq43060__$2);
var G__43064 = cljs.core.first.call(null,seq43060__$3);
var seq43060__$4 = cljs.core.next.call(null,seq43060__$3);
var G__43065 = cljs.core.first.call(null,seq43060__$4);
var seq43060__$5 = cljs.core.next.call(null,seq43060__$4);
var G__43066 = cljs.core.first.call(null,seq43060__$5);
var seq43060__$6 = cljs.core.next.call(null,seq43060__$5);
return reforms.core.impl.html5_input_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43061,G__43062,G__43063,G__43064,G__43065,G__43066,seq43060__$6);
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
reforms.core.impl.spinner = (function reforms$core$impl$spinner(){
var argseq__5389__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__5389__auto__);
});

reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__43068 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spinner","spinner",-646071217)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__43068,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),attrs], null);
});

reforms.core.impl.spinner.cljs$lang$maxFixedArity = (0);

reforms.core.impl.spinner.cljs$lang$applyTo = (function (seq43067){
return reforms.core.impl.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43067));
});

//# sourceMappingURL=impl.js.map