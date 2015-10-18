// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_7832 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_7832){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_7832,(cljs.core._deref.call(null,last_id_7832) + (1)));
});})(last_id_7832))
;
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.collect = (function rum$core$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.core.call_all = (function rum$core$call_all(var_args){
var args__5658__auto__ = [];
var len__5651__auto___7836 = arguments.length;
var i__5652__auto___7837 = (0);
while(true){
if((i__5652__auto___7837 < len__5651__auto___7836)){
args__5658__auto__.push((arguments[i__5652__auto___7837]));

var G__7838 = (i__5652__auto___7837 + (1));
i__5652__auto___7837 = G__7838;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.core.call_all.cljs$lang$maxFixedArity = (2);

rum.core.call_all.cljs$lang$applyTo = (function (seq7833){
var G__7834 = cljs.core.first.call(null,seq7833);
var seq7833__$1 = cljs.core.next.call(null,seq7833);
var G__7835 = cljs.core.first.call(null,seq7833__$1);
var seq7833__$2 = cljs.core.next.call(null,seq7833__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__7834,G__7835,seq7833__$2);
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"classes","classes",-616631259,null))))].join('')));
}

var init = rum.core.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.core.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.core.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__7840_SHARP_,p2__7839_SHARP_){
return p2__7839_SHARP_.call(null,p1__7840_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.core.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.core.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context_types = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),classes);
var child_context = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var context_types = rum.core.collect.call(null,new cljs.core.Keyword(null,"context-types","context-types",1252270646),classes);
return React.createClass({"componentDidUpdate": ((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "childContextTypes": ((cljs.core.empty_QMARK_.call(null,child_context_types))?null:cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,child_context_types))), "displayName": display_name, "contextTypes": ((cljs.core.empty_QMARK_.call(null,context_types))?null:cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,context_types))), "componentWillUnmount": ((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__7842_SHARP_,p2__7841_SHARP_){
return p2__7841_SHARP_.call(null,old_state,p1__7842_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_.call(null,should_update))?cljs.core.constantly.call(null,true):((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__4593__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__7843_SHARP_){
return p1__7843_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
,should_update);
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__7846 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__7846,(0),null);
var next_state = cljs.core.nth.call(null,vec__7846,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__7844_SHARP_){
return p1__7844_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillUpdate": ((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.core.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.core.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "componentDidMount": ((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillMount": ((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
)});
});
rum.core.schedule = (function (){var or__4593__auto__ = (function (){var and__4581__auto__ = typeof window !== 'undefined';
if(and__4581__auto__){
var or__4593__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
var or__4593__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4593__auto____$1)){
return or__4593__auto____$1;
} else {
var or__4593__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4593__auto____$2)){
return or__4593__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4581__auto__;
}
})();
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return ((function (or__4593__auto__){
return (function (p1__7847_SHARP_){
return setTimeout(p1__7847_SHARP_,(16));
});
;})(or__4593__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__7854 = cljs.core.seq.call(null,queue);
var chunk__7856 = null;
var count__7857 = (0);
var i__7858 = (0);
while(true){
if((i__7858 < count__7857)){
var comp = cljs.core._nth.call(null,chunk__7856,i__7858);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__7860 = seq__7854;
var G__7861 = chunk__7856;
var G__7862 = count__7857;
var G__7863 = (i__7858 + (1));
seq__7854 = G__7860;
chunk__7856 = G__7861;
count__7857 = G__7862;
i__7858 = G__7863;
continue;
} else {
var G__7864 = seq__7854;
var G__7865 = chunk__7856;
var G__7866 = count__7857;
var G__7867 = (i__7858 + (1));
seq__7854 = G__7864;
chunk__7856 = G__7865;
count__7857 = G__7866;
i__7858 = G__7867;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7854);
if(temp__4425__auto__){
var seq__7854__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7854__$1)){
var c__5396__auto__ = cljs.core.chunk_first.call(null,seq__7854__$1);
var G__7868 = cljs.core.chunk_rest.call(null,seq__7854__$1);
var G__7869 = c__5396__auto__;
var G__7870 = cljs.core.count.call(null,c__5396__auto__);
var G__7871 = (0);
seq__7854 = G__7868;
chunk__7856 = G__7869;
count__7857 = G__7870;
i__7858 = G__7871;
continue;
} else {
var comp = cljs.core.first.call(null,seq__7854__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__7872 = cljs.core.next.call(null,seq__7854__$1);
var G__7873 = null;
var G__7874 = (0);
var G__7875 = (0);
seq__7854 = G__7872;
chunk__7856 = G__7873;
count__7857 = G__7874;
i__7858 = G__7875;
continue;
} else {
var G__7876 = cljs.core.next.call(null,seq__7854__$1);
var G__7877 = null;
var G__7878 = (0);
var G__7879 = (0);
seq__7854 = G__7876;
chunk__7856 = G__7877;
count__7857 = G__7878;
i__7858 = G__7879;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return React.render(component,node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__5658__auto__ = [];
var len__5651__auto___7885 = arguments.length;
var i__5652__auto___7886 = (0);
while(true){
if((i__5652__auto___7886 < len__5651__auto___7885)){
args__5658__auto__.push((arguments[i__5652__auto___7886]));

var G__7887 = (i__5652__auto___7886 + (1));
i__5652__auto___7886 = G__7887;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__7883){
var vec__7884 = p__7883;
var props = cljs.core.nth.call(null,vec__7884,(0),null);
var props__$1 = (function (){var or__4593__auto__ = props;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq7880){
var G__7881 = cljs.core.first.call(null,seq7880);
var seq7880__$1 = cljs.core.next.call(null,seq7880);
var G__7882 = cljs.core.first.call(null,seq7880__$1);
var seq7880__$2 = cljs.core.next.call(null,seq7880__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__7881,G__7882,seq7880__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__5658__auto__ = [];
var len__5651__auto___7892 = arguments.length;
var i__5652__auto___7893 = (0);
while(true){
if((i__5652__auto___7893 < len__5651__auto___7892)){
args__5658__auto__.push((arguments[i__5652__auto___7893]));

var G__7894 = (i__5652__auto___7893 + (1));
i__5652__auto___7893 = G__7894;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__7890){
var vec__7891 = p__7890;
var key = cljs.core.nth.call(null,vec__7891,(0),null);
var key__$1 = (function (){var or__4593__auto__ = key;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__7891,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__7891,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__7891,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__7891,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__7891,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__7891,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq7888){
var G__7889 = cljs.core.first.call(null,seq7888);
var seq7888__$1 = cljs.core.next.call(null,seq7888);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__7889,seq7888__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_7895 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__7896 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__7896,(0),null);
var next_state = cljs.core.nth.call(null,vec__7896,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__7897_7909 = cljs.core.seq.call(null,old_reactions);
var chunk__7898_7910 = null;
var count__7899_7911 = (0);
var i__7900_7912 = (0);
while(true){
if((i__7900_7912 < count__7899_7911)){
var ref_7913 = cljs.core._nth.call(null,chunk__7898_7910,i__7900_7912);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_7913)){
} else {
cljs.core.remove_watch.call(null,ref_7913,key);
}

var G__7914 = seq__7897_7909;
var G__7915 = chunk__7898_7910;
var G__7916 = count__7899_7911;
var G__7917 = (i__7900_7912 + (1));
seq__7897_7909 = G__7914;
chunk__7898_7910 = G__7915;
count__7899_7911 = G__7916;
i__7900_7912 = G__7917;
continue;
} else {
var temp__4425__auto___7918 = cljs.core.seq.call(null,seq__7897_7909);
if(temp__4425__auto___7918){
var seq__7897_7919__$1 = temp__4425__auto___7918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7897_7919__$1)){
var c__5396__auto___7920 = cljs.core.chunk_first.call(null,seq__7897_7919__$1);
var G__7921 = cljs.core.chunk_rest.call(null,seq__7897_7919__$1);
var G__7922 = c__5396__auto___7920;
var G__7923 = cljs.core.count.call(null,c__5396__auto___7920);
var G__7924 = (0);
seq__7897_7909 = G__7921;
chunk__7898_7910 = G__7922;
count__7899_7911 = G__7923;
i__7900_7912 = G__7924;
continue;
} else {
var ref_7925 = cljs.core.first.call(null,seq__7897_7919__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_7925)){
} else {
cljs.core.remove_watch.call(null,ref_7925,key);
}

var G__7926 = cljs.core.next.call(null,seq__7897_7919__$1);
var G__7927 = null;
var G__7928 = (0);
var G__7929 = (0);
seq__7897_7909 = G__7926;
chunk__7898_7910 = G__7927;
count__7899_7911 = G__7928;
i__7900_7912 = G__7929;
continue;
}
} else {
}
}
break;
}

var seq__7901_7930 = cljs.core.seq.call(null,new_reactions);
var chunk__7902_7931 = null;
var count__7903_7932 = (0);
var i__7904_7933 = (0);
while(true){
if((i__7904_7933 < count__7903_7932)){
var ref_7934 = cljs.core._nth.call(null,chunk__7902_7931,i__7904_7933);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_7934)){
} else {
cljs.core.add_watch.call(null,ref_7934,key,((function (seq__7901_7930,chunk__7902_7931,count__7903_7932,i__7904_7933,ref_7934,comp,old_reactions,vec__7896,dom,next_state,new_reactions,key,_STAR_reactions_STAR_7895){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__7901_7930,chunk__7902_7931,count__7903_7932,i__7904_7933,ref_7934,comp,old_reactions,vec__7896,dom,next_state,new_reactions,key,_STAR_reactions_STAR_7895))
);
}

var G__7935 = seq__7901_7930;
var G__7936 = chunk__7902_7931;
var G__7937 = count__7903_7932;
var G__7938 = (i__7904_7933 + (1));
seq__7901_7930 = G__7935;
chunk__7902_7931 = G__7936;
count__7903_7932 = G__7937;
i__7904_7933 = G__7938;
continue;
} else {
var temp__4425__auto___7939 = cljs.core.seq.call(null,seq__7901_7930);
if(temp__4425__auto___7939){
var seq__7901_7940__$1 = temp__4425__auto___7939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7901_7940__$1)){
var c__5396__auto___7941 = cljs.core.chunk_first.call(null,seq__7901_7940__$1);
var G__7942 = cljs.core.chunk_rest.call(null,seq__7901_7940__$1);
var G__7943 = c__5396__auto___7941;
var G__7944 = cljs.core.count.call(null,c__5396__auto___7941);
var G__7945 = (0);
seq__7901_7930 = G__7942;
chunk__7902_7931 = G__7943;
count__7903_7932 = G__7944;
i__7904_7933 = G__7945;
continue;
} else {
var ref_7946 = cljs.core.first.call(null,seq__7901_7940__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_7946)){
} else {
cljs.core.add_watch.call(null,ref_7946,key,((function (seq__7901_7930,chunk__7902_7931,count__7903_7932,i__7904_7933,ref_7946,seq__7901_7940__$1,temp__4425__auto___7939,comp,old_reactions,vec__7896,dom,next_state,new_reactions,key,_STAR_reactions_STAR_7895){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__7901_7930,chunk__7902_7931,count__7903_7932,i__7904_7933,ref_7946,seq__7901_7940__$1,temp__4425__auto___7939,comp,old_reactions,vec__7896,dom,next_state,new_reactions,key,_STAR_reactions_STAR_7895))
);
}

var G__7947 = cljs.core.next.call(null,seq__7901_7940__$1);
var G__7948 = null;
var G__7949 = (0);
var G__7950 = (0);
seq__7901_7930 = G__7947;
chunk__7902_7931 = G__7948;
count__7903_7932 = G__7949;
i__7904_7933 = G__7950;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_7895;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_7951 = rum.core.reactive_key.call(null,state);
var seq__7905_7952 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__7906_7953 = null;
var count__7907_7954 = (0);
var i__7908_7955 = (0);
while(true){
if((i__7908_7955 < count__7907_7954)){
var ref_7956 = cljs.core._nth.call(null,chunk__7906_7953,i__7908_7955);
cljs.core.remove_watch.call(null,ref_7956,key_7951);

var G__7957 = seq__7905_7952;
var G__7958 = chunk__7906_7953;
var G__7959 = count__7907_7954;
var G__7960 = (i__7908_7955 + (1));
seq__7905_7952 = G__7957;
chunk__7906_7953 = G__7958;
count__7907_7954 = G__7959;
i__7908_7955 = G__7960;
continue;
} else {
var temp__4425__auto___7961 = cljs.core.seq.call(null,seq__7905_7952);
if(temp__4425__auto___7961){
var seq__7905_7962__$1 = temp__4425__auto___7961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7905_7962__$1)){
var c__5396__auto___7963 = cljs.core.chunk_first.call(null,seq__7905_7962__$1);
var G__7964 = cljs.core.chunk_rest.call(null,seq__7905_7962__$1);
var G__7965 = c__5396__auto___7963;
var G__7966 = cljs.core.count.call(null,c__5396__auto___7963);
var G__7967 = (0);
seq__7905_7952 = G__7964;
chunk__7906_7953 = G__7965;
count__7907_7954 = G__7966;
i__7908_7955 = G__7967;
continue;
} else {
var ref_7968 = cljs.core.first.call(null,seq__7905_7962__$1);
cljs.core.remove_watch.call(null,ref_7968,key_7951);

var G__7969 = cljs.core.next.call(null,seq__7905_7962__$1);
var G__7970 = null;
var G__7971 = (0);
var G__7972 = (0);
seq__7905_7952 = G__7969;
chunk__7906_7953 = G__7970;
count__7907_7954 = G__7971;
i__7908_7955 = G__7972;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__7973_SHARP_){
return cljs.core.get_in.call(null,p1__7973_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__7974_SHARP_,p2__7975_SHARP_){
return cljs.core.assoc_in.call(null,p1__7974_SHARP_,path,p2__7975_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__7976_SHARP_){
if(((!((p1__7976_SHARP_ == null)))?((((p1__7976_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__7976_SHARP_.cljs$core$IDeref$))?true:(((!p1__7976_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__7976_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__7976_SHARP_))){
return cljs.core.deref.call(null,p1__7976_SHARP_);
} else {
return p1__7976_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__7979 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__7979,(0),null);
var next_state = cljs.core.nth.call(null,vec__7979,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__7980_7996 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__7982_7997 = null;
var count__7983_7998 = (0);
var i__7984_7999 = (0);
while(true){
if((i__7984_7999 < count__7983_7998)){
var arg_8000 = cljs.core._nth.call(null,chunk__7982_7997,i__7984_7999);
if(((!((arg_8000 == null)))?((((arg_8000.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8000.cljs$core$IWatchable$))?true:(((!arg_8000.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8000):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8000))){
cljs.core.add_watch.call(null,arg_8000,rum.core.cursored_key.call(null,state),((function (seq__7980_7996,chunk__7982_7997,count__7983_7998,i__7984_7999,arg_8000){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__7980_7996,chunk__7982_7997,count__7983_7998,i__7984_7999,arg_8000))
);

var G__8001 = seq__7980_7996;
var G__8002 = chunk__7982_7997;
var G__8003 = count__7983_7998;
var G__8004 = (i__7984_7999 + (1));
seq__7980_7996 = G__8001;
chunk__7982_7997 = G__8002;
count__7983_7998 = G__8003;
i__7984_7999 = G__8004;
continue;
} else {
var G__8005 = seq__7980_7996;
var G__8006 = chunk__7982_7997;
var G__8007 = count__7983_7998;
var G__8008 = (i__7984_7999 + (1));
seq__7980_7996 = G__8005;
chunk__7982_7997 = G__8006;
count__7983_7998 = G__8007;
i__7984_7999 = G__8008;
continue;
}
} else {
var temp__4425__auto___8009 = cljs.core.seq.call(null,seq__7980_7996);
if(temp__4425__auto___8009){
var seq__7980_8010__$1 = temp__4425__auto___8009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7980_8010__$1)){
var c__5396__auto___8011 = cljs.core.chunk_first.call(null,seq__7980_8010__$1);
var G__8012 = cljs.core.chunk_rest.call(null,seq__7980_8010__$1);
var G__8013 = c__5396__auto___8011;
var G__8014 = cljs.core.count.call(null,c__5396__auto___8011);
var G__8015 = (0);
seq__7980_7996 = G__8012;
chunk__7982_7997 = G__8013;
count__7983_7998 = G__8014;
i__7984_7999 = G__8015;
continue;
} else {
var arg_8016 = cljs.core.first.call(null,seq__7980_8010__$1);
if(((!((arg_8016 == null)))?((((arg_8016.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8016.cljs$core$IWatchable$))?true:(((!arg_8016.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8016):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8016))){
cljs.core.add_watch.call(null,arg_8016,rum.core.cursored_key.call(null,state),((function (seq__7980_7996,chunk__7982_7997,count__7983_7998,i__7984_7999,arg_8016,seq__7980_8010__$1,temp__4425__auto___8009){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__7980_7996,chunk__7982_7997,count__7983_7998,i__7984_7999,arg_8016,seq__7980_8010__$1,temp__4425__auto___8009))
);

var G__8017 = cljs.core.next.call(null,seq__7980_8010__$1);
var G__8018 = null;
var G__8019 = (0);
var G__8020 = (0);
seq__7980_7996 = G__8017;
chunk__7982_7997 = G__8018;
count__7983_7998 = G__8019;
i__7984_7999 = G__8020;
continue;
} else {
var G__8021 = cljs.core.next.call(null,seq__7980_8010__$1);
var G__8022 = null;
var G__8023 = (0);
var G__8024 = (0);
seq__7980_7996 = G__8021;
chunk__7982_7997 = G__8022;
count__7983_7998 = G__8023;
i__7984_7999 = G__8024;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__7988_8025 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__7990_8026 = null;
var count__7991_8027 = (0);
var i__7992_8028 = (0);
while(true){
if((i__7992_8028 < count__7991_8027)){
var arg_8029 = cljs.core._nth.call(null,chunk__7990_8026,i__7992_8028);
if(((!((arg_8029 == null)))?((((arg_8029.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8029.cljs$core$IWatchable$))?true:(((!arg_8029.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8029):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8029))){
cljs.core.remove_watch.call(null,arg_8029,rum.core.cursored_key.call(null,state));

var G__8030 = seq__7988_8025;
var G__8031 = chunk__7990_8026;
var G__8032 = count__7991_8027;
var G__8033 = (i__7992_8028 + (1));
seq__7988_8025 = G__8030;
chunk__7990_8026 = G__8031;
count__7991_8027 = G__8032;
i__7992_8028 = G__8033;
continue;
} else {
var G__8034 = seq__7988_8025;
var G__8035 = chunk__7990_8026;
var G__8036 = count__7991_8027;
var G__8037 = (i__7992_8028 + (1));
seq__7988_8025 = G__8034;
chunk__7990_8026 = G__8035;
count__7991_8027 = G__8036;
i__7992_8028 = G__8037;
continue;
}
} else {
var temp__4425__auto___8038 = cljs.core.seq.call(null,seq__7988_8025);
if(temp__4425__auto___8038){
var seq__7988_8039__$1 = temp__4425__auto___8038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7988_8039__$1)){
var c__5396__auto___8040 = cljs.core.chunk_first.call(null,seq__7988_8039__$1);
var G__8041 = cljs.core.chunk_rest.call(null,seq__7988_8039__$1);
var G__8042 = c__5396__auto___8040;
var G__8043 = cljs.core.count.call(null,c__5396__auto___8040);
var G__8044 = (0);
seq__7988_8025 = G__8041;
chunk__7990_8026 = G__8042;
count__7991_8027 = G__8043;
i__7992_8028 = G__8044;
continue;
} else {
var arg_8045 = cljs.core.first.call(null,seq__7988_8039__$1);
if(((!((arg_8045 == null)))?((((arg_8045.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_8045.cljs$core$IWatchable$))?true:(((!arg_8045.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8045):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_8045))){
cljs.core.remove_watch.call(null,arg_8045,rum.core.cursored_key.call(null,state));

var G__8046 = cljs.core.next.call(null,seq__7988_8039__$1);
var G__8047 = null;
var G__8048 = (0);
var G__8049 = (0);
seq__7988_8025 = G__8046;
chunk__7990_8026 = G__8047;
count__7991_8027 = G__8048;
i__7992_8028 = G__8049;
continue;
} else {
var G__8050 = cljs.core.next.call(null,seq__7988_8039__$1);
var G__8051 = null;
var G__8052 = (0);
var G__8053 = (0);
seq__7988_8025 = G__8050;
chunk__7990_8026 = G__8051;
count__7991_8027 = G__8052;
i__7992_8028 = G__8053;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map