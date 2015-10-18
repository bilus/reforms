// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_11037 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_11037){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_11037,(cljs.core._deref.call(null,last_id_11037) + (1)));
});})(last_id_11037))
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
var len__5651__auto___11041 = arguments.length;
var i__5652__auto___11042 = (0);
while(true){
if((i__5652__auto___11042 < len__5651__auto___11041)){
args__5658__auto__.push((arguments[i__5652__auto___11042]));

var G__11043 = (i__5652__auto___11042 + (1));
i__5652__auto___11042 = G__11043;
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

rum.core.call_all.cljs$lang$applyTo = (function (seq11038){
var G__11039 = cljs.core.first.call(null,seq11038);
var seq11038__$1 = cljs.core.next.call(null,seq11038);
var G__11040 = cljs.core.first.call(null,seq11038__$1);
var seq11038__$2 = cljs.core.next.call(null,seq11038__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__11039,G__11040,seq11038__$2);
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
return (function (p1__11045_SHARP_,p2__11044_SHARP_){
return p2__11044_SHARP_.call(null,p1__11045_SHARP_);
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
return (function (p1__11047_SHARP_,p2__11046_SHARP_){
return p2__11046_SHARP_.call(null,old_state,p1__11047_SHARP_);
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
return (function (p1__11048_SHARP_){
return p1__11048_SHARP_.call(null,old_state,new_state);
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
var vec__11051 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__11051,(0),null);
var next_state = cljs.core.nth.call(null,vec__11051,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__11049_SHARP_){
return p1__11049_SHARP_.call(null,state);
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
return (function (p1__11052_SHARP_){
return setTimeout(p1__11052_SHARP_,(16));
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

var seq__11059 = cljs.core.seq.call(null,queue);
var chunk__11061 = null;
var count__11062 = (0);
var i__11063 = (0);
while(true){
if((i__11063 < count__11062)){
var comp = cljs.core._nth.call(null,chunk__11061,i__11063);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11065 = seq__11059;
var G__11066 = chunk__11061;
var G__11067 = count__11062;
var G__11068 = (i__11063 + (1));
seq__11059 = G__11065;
chunk__11061 = G__11066;
count__11062 = G__11067;
i__11063 = G__11068;
continue;
} else {
var G__11069 = seq__11059;
var G__11070 = chunk__11061;
var G__11071 = count__11062;
var G__11072 = (i__11063 + (1));
seq__11059 = G__11069;
chunk__11061 = G__11070;
count__11062 = G__11071;
i__11063 = G__11072;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11059);
if(temp__4425__auto__){
var seq__11059__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11059__$1)){
var c__5396__auto__ = cljs.core.chunk_first.call(null,seq__11059__$1);
var G__11073 = cljs.core.chunk_rest.call(null,seq__11059__$1);
var G__11074 = c__5396__auto__;
var G__11075 = cljs.core.count.call(null,c__5396__auto__);
var G__11076 = (0);
seq__11059 = G__11073;
chunk__11061 = G__11074;
count__11062 = G__11075;
i__11063 = G__11076;
continue;
} else {
var comp = cljs.core.first.call(null,seq__11059__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__11077 = cljs.core.next.call(null,seq__11059__$1);
var G__11078 = null;
var G__11079 = (0);
var G__11080 = (0);
seq__11059 = G__11077;
chunk__11061 = G__11078;
count__11062 = G__11079;
i__11063 = G__11080;
continue;
} else {
var G__11081 = cljs.core.next.call(null,seq__11059__$1);
var G__11082 = null;
var G__11083 = (0);
var G__11084 = (0);
seq__11059 = G__11081;
chunk__11061 = G__11082;
count__11062 = G__11083;
i__11063 = G__11084;
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
var len__5651__auto___11090 = arguments.length;
var i__5652__auto___11091 = (0);
while(true){
if((i__5652__auto___11091 < len__5651__auto___11090)){
args__5658__auto__.push((arguments[i__5652__auto___11091]));

var G__11092 = (i__5652__auto___11091 + (1));
i__5652__auto___11091 = G__11092;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__11088){
var vec__11089 = p__11088;
var props = cljs.core.nth.call(null,vec__11089,(0),null);
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

rum.core.element.cljs$lang$applyTo = (function (seq11085){
var G__11086 = cljs.core.first.call(null,seq11085);
var seq11085__$1 = cljs.core.next.call(null,seq11085);
var G__11087 = cljs.core.first.call(null,seq11085__$1);
var seq11085__$2 = cljs.core.next.call(null,seq11085__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__11086,G__11087,seq11085__$2);
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
var len__5651__auto___11097 = arguments.length;
var i__5652__auto___11098 = (0);
while(true){
if((i__5652__auto___11098 < len__5651__auto___11097)){
args__5658__auto__.push((arguments[i__5652__auto___11098]));

var G__11099 = (i__5652__auto___11098 + (1));
i__5652__auto___11098 = G__11099;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__11095){
var vec__11096 = p__11095;
var key = cljs.core.nth.call(null,vec__11096,(0),null);
var key__$1 = (function (){var or__4593__auto__ = key;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__11096,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__11096,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__11096,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__11096,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__11096,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__11096,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq11093){
var G__11094 = cljs.core.first.call(null,seq11093);
var seq11093__$1 = cljs.core.next.call(null,seq11093);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__11094,seq11093__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_11100 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__11101 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__11101,(0),null);
var next_state = cljs.core.nth.call(null,vec__11101,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__11102_11114 = cljs.core.seq.call(null,old_reactions);
var chunk__11103_11115 = null;
var count__11104_11116 = (0);
var i__11105_11117 = (0);
while(true){
if((i__11105_11117 < count__11104_11116)){
var ref_11118 = cljs.core._nth.call(null,chunk__11103_11115,i__11105_11117);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11118)){
} else {
cljs.core.remove_watch.call(null,ref_11118,key);
}

var G__11119 = seq__11102_11114;
var G__11120 = chunk__11103_11115;
var G__11121 = count__11104_11116;
var G__11122 = (i__11105_11117 + (1));
seq__11102_11114 = G__11119;
chunk__11103_11115 = G__11120;
count__11104_11116 = G__11121;
i__11105_11117 = G__11122;
continue;
} else {
var temp__4425__auto___11123 = cljs.core.seq.call(null,seq__11102_11114);
if(temp__4425__auto___11123){
var seq__11102_11124__$1 = temp__4425__auto___11123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11102_11124__$1)){
var c__5396__auto___11125 = cljs.core.chunk_first.call(null,seq__11102_11124__$1);
var G__11126 = cljs.core.chunk_rest.call(null,seq__11102_11124__$1);
var G__11127 = c__5396__auto___11125;
var G__11128 = cljs.core.count.call(null,c__5396__auto___11125);
var G__11129 = (0);
seq__11102_11114 = G__11126;
chunk__11103_11115 = G__11127;
count__11104_11116 = G__11128;
i__11105_11117 = G__11129;
continue;
} else {
var ref_11130 = cljs.core.first.call(null,seq__11102_11124__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_11130)){
} else {
cljs.core.remove_watch.call(null,ref_11130,key);
}

var G__11131 = cljs.core.next.call(null,seq__11102_11124__$1);
var G__11132 = null;
var G__11133 = (0);
var G__11134 = (0);
seq__11102_11114 = G__11131;
chunk__11103_11115 = G__11132;
count__11104_11116 = G__11133;
i__11105_11117 = G__11134;
continue;
}
} else {
}
}
break;
}

var seq__11106_11135 = cljs.core.seq.call(null,new_reactions);
var chunk__11107_11136 = null;
var count__11108_11137 = (0);
var i__11109_11138 = (0);
while(true){
if((i__11109_11138 < count__11108_11137)){
var ref_11139 = cljs.core._nth.call(null,chunk__11107_11136,i__11109_11138);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11139)){
} else {
cljs.core.add_watch.call(null,ref_11139,key,((function (seq__11106_11135,chunk__11107_11136,count__11108_11137,i__11109_11138,ref_11139,comp,old_reactions,vec__11101,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11100){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11106_11135,chunk__11107_11136,count__11108_11137,i__11109_11138,ref_11139,comp,old_reactions,vec__11101,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11100))
);
}

var G__11140 = seq__11106_11135;
var G__11141 = chunk__11107_11136;
var G__11142 = count__11108_11137;
var G__11143 = (i__11109_11138 + (1));
seq__11106_11135 = G__11140;
chunk__11107_11136 = G__11141;
count__11108_11137 = G__11142;
i__11109_11138 = G__11143;
continue;
} else {
var temp__4425__auto___11144 = cljs.core.seq.call(null,seq__11106_11135);
if(temp__4425__auto___11144){
var seq__11106_11145__$1 = temp__4425__auto___11144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11106_11145__$1)){
var c__5396__auto___11146 = cljs.core.chunk_first.call(null,seq__11106_11145__$1);
var G__11147 = cljs.core.chunk_rest.call(null,seq__11106_11145__$1);
var G__11148 = c__5396__auto___11146;
var G__11149 = cljs.core.count.call(null,c__5396__auto___11146);
var G__11150 = (0);
seq__11106_11135 = G__11147;
chunk__11107_11136 = G__11148;
count__11108_11137 = G__11149;
i__11109_11138 = G__11150;
continue;
} else {
var ref_11151 = cljs.core.first.call(null,seq__11106_11145__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_11151)){
} else {
cljs.core.add_watch.call(null,ref_11151,key,((function (seq__11106_11135,chunk__11107_11136,count__11108_11137,i__11109_11138,ref_11151,seq__11106_11145__$1,temp__4425__auto___11144,comp,old_reactions,vec__11101,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11100){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__11106_11135,chunk__11107_11136,count__11108_11137,i__11109_11138,ref_11151,seq__11106_11145__$1,temp__4425__auto___11144,comp,old_reactions,vec__11101,dom,next_state,new_reactions,key,_STAR_reactions_STAR_11100))
);
}

var G__11152 = cljs.core.next.call(null,seq__11106_11145__$1);
var G__11153 = null;
var G__11154 = (0);
var G__11155 = (0);
seq__11106_11135 = G__11152;
chunk__11107_11136 = G__11153;
count__11108_11137 = G__11154;
i__11109_11138 = G__11155;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_11100;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_11156 = rum.core.reactive_key.call(null,state);
var seq__11110_11157 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11111_11158 = null;
var count__11112_11159 = (0);
var i__11113_11160 = (0);
while(true){
if((i__11113_11160 < count__11112_11159)){
var ref_11161 = cljs.core._nth.call(null,chunk__11111_11158,i__11113_11160);
cljs.core.remove_watch.call(null,ref_11161,key_11156);

var G__11162 = seq__11110_11157;
var G__11163 = chunk__11111_11158;
var G__11164 = count__11112_11159;
var G__11165 = (i__11113_11160 + (1));
seq__11110_11157 = G__11162;
chunk__11111_11158 = G__11163;
count__11112_11159 = G__11164;
i__11113_11160 = G__11165;
continue;
} else {
var temp__4425__auto___11166 = cljs.core.seq.call(null,seq__11110_11157);
if(temp__4425__auto___11166){
var seq__11110_11167__$1 = temp__4425__auto___11166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11110_11167__$1)){
var c__5396__auto___11168 = cljs.core.chunk_first.call(null,seq__11110_11167__$1);
var G__11169 = cljs.core.chunk_rest.call(null,seq__11110_11167__$1);
var G__11170 = c__5396__auto___11168;
var G__11171 = cljs.core.count.call(null,c__5396__auto___11168);
var G__11172 = (0);
seq__11110_11157 = G__11169;
chunk__11111_11158 = G__11170;
count__11112_11159 = G__11171;
i__11113_11160 = G__11172;
continue;
} else {
var ref_11173 = cljs.core.first.call(null,seq__11110_11167__$1);
cljs.core.remove_watch.call(null,ref_11173,key_11156);

var G__11174 = cljs.core.next.call(null,seq__11110_11167__$1);
var G__11175 = null;
var G__11176 = (0);
var G__11177 = (0);
seq__11110_11157 = G__11174;
chunk__11111_11158 = G__11175;
count__11112_11159 = G__11176;
i__11113_11160 = G__11177;
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
var getter = (function (p1__11178_SHARP_){
return cljs.core.get_in.call(null,p1__11178_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__11179_SHARP_,p2__11180_SHARP_){
return cljs.core.assoc_in.call(null,p1__11179_SHARP_,path,p2__11180_SHARP_);
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
return cljs.core.mapv.call(null,(function (p1__11181_SHARP_){
if(((!((p1__11181_SHARP_ == null)))?((((p1__11181_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__11181_SHARP_.cljs$core$IDeref$))?true:(((!p1__11181_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__11181_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__11181_SHARP_))){
return cljs.core.deref.call(null,p1__11181_SHARP_);
} else {
return p1__11181_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__11184 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__11184,(0),null);
var next_state = cljs.core.nth.call(null,vec__11184,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__11185_11201 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11187_11202 = null;
var count__11188_11203 = (0);
var i__11189_11204 = (0);
while(true){
if((i__11189_11204 < count__11188_11203)){
var arg_11205 = cljs.core._nth.call(null,chunk__11187_11202,i__11189_11204);
if(((!((arg_11205 == null)))?((((arg_11205.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_11205.cljs$core$IWatchable$))?true:(((!arg_11205.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11205):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11205))){
cljs.core.add_watch.call(null,arg_11205,rum.core.cursored_key.call(null,state),((function (seq__11185_11201,chunk__11187_11202,count__11188_11203,i__11189_11204,arg_11205){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__11185_11201,chunk__11187_11202,count__11188_11203,i__11189_11204,arg_11205))
);

var G__11206 = seq__11185_11201;
var G__11207 = chunk__11187_11202;
var G__11208 = count__11188_11203;
var G__11209 = (i__11189_11204 + (1));
seq__11185_11201 = G__11206;
chunk__11187_11202 = G__11207;
count__11188_11203 = G__11208;
i__11189_11204 = G__11209;
continue;
} else {
var G__11210 = seq__11185_11201;
var G__11211 = chunk__11187_11202;
var G__11212 = count__11188_11203;
var G__11213 = (i__11189_11204 + (1));
seq__11185_11201 = G__11210;
chunk__11187_11202 = G__11211;
count__11188_11203 = G__11212;
i__11189_11204 = G__11213;
continue;
}
} else {
var temp__4425__auto___11214 = cljs.core.seq.call(null,seq__11185_11201);
if(temp__4425__auto___11214){
var seq__11185_11215__$1 = temp__4425__auto___11214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11185_11215__$1)){
var c__5396__auto___11216 = cljs.core.chunk_first.call(null,seq__11185_11215__$1);
var G__11217 = cljs.core.chunk_rest.call(null,seq__11185_11215__$1);
var G__11218 = c__5396__auto___11216;
var G__11219 = cljs.core.count.call(null,c__5396__auto___11216);
var G__11220 = (0);
seq__11185_11201 = G__11217;
chunk__11187_11202 = G__11218;
count__11188_11203 = G__11219;
i__11189_11204 = G__11220;
continue;
} else {
var arg_11221 = cljs.core.first.call(null,seq__11185_11215__$1);
if(((!((arg_11221 == null)))?((((arg_11221.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_11221.cljs$core$IWatchable$))?true:(((!arg_11221.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11221):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11221))){
cljs.core.add_watch.call(null,arg_11221,rum.core.cursored_key.call(null,state),((function (seq__11185_11201,chunk__11187_11202,count__11188_11203,i__11189_11204,arg_11221,seq__11185_11215__$1,temp__4425__auto___11214){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__11185_11201,chunk__11187_11202,count__11188_11203,i__11189_11204,arg_11221,seq__11185_11215__$1,temp__4425__auto___11214))
);

var G__11222 = cljs.core.next.call(null,seq__11185_11215__$1);
var G__11223 = null;
var G__11224 = (0);
var G__11225 = (0);
seq__11185_11201 = G__11222;
chunk__11187_11202 = G__11223;
count__11188_11203 = G__11224;
i__11189_11204 = G__11225;
continue;
} else {
var G__11226 = cljs.core.next.call(null,seq__11185_11215__$1);
var G__11227 = null;
var G__11228 = (0);
var G__11229 = (0);
seq__11185_11201 = G__11226;
chunk__11187_11202 = G__11227;
count__11188_11203 = G__11228;
i__11189_11204 = G__11229;
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
var seq__11193_11230 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11195_11231 = null;
var count__11196_11232 = (0);
var i__11197_11233 = (0);
while(true){
if((i__11197_11233 < count__11196_11232)){
var arg_11234 = cljs.core._nth.call(null,chunk__11195_11231,i__11197_11233);
if(((!((arg_11234 == null)))?((((arg_11234.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_11234.cljs$core$IWatchable$))?true:(((!arg_11234.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11234):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11234))){
cljs.core.remove_watch.call(null,arg_11234,rum.core.cursored_key.call(null,state));

var G__11235 = seq__11193_11230;
var G__11236 = chunk__11195_11231;
var G__11237 = count__11196_11232;
var G__11238 = (i__11197_11233 + (1));
seq__11193_11230 = G__11235;
chunk__11195_11231 = G__11236;
count__11196_11232 = G__11237;
i__11197_11233 = G__11238;
continue;
} else {
var G__11239 = seq__11193_11230;
var G__11240 = chunk__11195_11231;
var G__11241 = count__11196_11232;
var G__11242 = (i__11197_11233 + (1));
seq__11193_11230 = G__11239;
chunk__11195_11231 = G__11240;
count__11196_11232 = G__11241;
i__11197_11233 = G__11242;
continue;
}
} else {
var temp__4425__auto___11243 = cljs.core.seq.call(null,seq__11193_11230);
if(temp__4425__auto___11243){
var seq__11193_11244__$1 = temp__4425__auto___11243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11193_11244__$1)){
var c__5396__auto___11245 = cljs.core.chunk_first.call(null,seq__11193_11244__$1);
var G__11246 = cljs.core.chunk_rest.call(null,seq__11193_11244__$1);
var G__11247 = c__5396__auto___11245;
var G__11248 = cljs.core.count.call(null,c__5396__auto___11245);
var G__11249 = (0);
seq__11193_11230 = G__11246;
chunk__11195_11231 = G__11247;
count__11196_11232 = G__11248;
i__11197_11233 = G__11249;
continue;
} else {
var arg_11250 = cljs.core.first.call(null,seq__11193_11244__$1);
if(((!((arg_11250 == null)))?((((arg_11250.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_11250.cljs$core$IWatchable$))?true:(((!arg_11250.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11250):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_11250))){
cljs.core.remove_watch.call(null,arg_11250,rum.core.cursored_key.call(null,state));

var G__11251 = cljs.core.next.call(null,seq__11193_11244__$1);
var G__11252 = null;
var G__11253 = (0);
var G__11254 = (0);
seq__11193_11230 = G__11251;
chunk__11195_11231 = G__11252;
count__11196_11232 = G__11253;
i__11197_11233 = G__11254;
continue;
} else {
var G__11255 = cljs.core.next.call(null,seq__11193_11244__$1);
var G__11256 = null;
var G__11257 = (0);
var G__11258 = (0);
seq__11193_11230 = G__11255;
chunk__11195_11231 = G__11256;
count__11196_11232 = G__11257;
i__11197_11233 = G__11258;
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