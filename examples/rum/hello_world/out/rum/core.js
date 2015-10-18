// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_14234 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_14234){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_14234,(cljs.core._deref.call(null,last_id_14234) + (1)));
});})(last_id_14234))
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
var len__5651__auto___14238 = arguments.length;
var i__5652__auto___14239 = (0);
while(true){
if((i__5652__auto___14239 < len__5651__auto___14238)){
args__5658__auto__.push((arguments[i__5652__auto___14239]));

var G__14240 = (i__5652__auto___14239 + (1));
i__5652__auto___14239 = G__14240;
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

rum.core.call_all.cljs$lang$applyTo = (function (seq14235){
var G__14236 = cljs.core.first.call(null,seq14235);
var seq14235__$1 = cljs.core.next.call(null,seq14235);
var G__14237 = cljs.core.first.call(null,seq14235__$1);
var seq14235__$2 = cljs.core.next.call(null,seq14235__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__14236,G__14237,seq14235__$2);
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
return (function (p1__14242_SHARP_,p2__14241_SHARP_){
return p2__14241_SHARP_.call(null,p1__14242_SHARP_);
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
return (function (p1__14244_SHARP_,p2__14243_SHARP_){
return p2__14243_SHARP_.call(null,old_state,p1__14244_SHARP_);
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
return (function (p1__14245_SHARP_){
return p1__14245_SHARP_.call(null,old_state,new_state);
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
var vec__14248 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__14248,(0),null);
var next_state = cljs.core.nth.call(null,vec__14248,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__14246_SHARP_){
return p1__14246_SHARP_.call(null,state);
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
return (function (p1__14249_SHARP_){
return setTimeout(p1__14249_SHARP_,(16));
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

var seq__14256 = cljs.core.seq.call(null,queue);
var chunk__14258 = null;
var count__14259 = (0);
var i__14260 = (0);
while(true){
if((i__14260 < count__14259)){
var comp = cljs.core._nth.call(null,chunk__14258,i__14260);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14262 = seq__14256;
var G__14263 = chunk__14258;
var G__14264 = count__14259;
var G__14265 = (i__14260 + (1));
seq__14256 = G__14262;
chunk__14258 = G__14263;
count__14259 = G__14264;
i__14260 = G__14265;
continue;
} else {
var G__14266 = seq__14256;
var G__14267 = chunk__14258;
var G__14268 = count__14259;
var G__14269 = (i__14260 + (1));
seq__14256 = G__14266;
chunk__14258 = G__14267;
count__14259 = G__14268;
i__14260 = G__14269;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14256);
if(temp__4425__auto__){
var seq__14256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14256__$1)){
var c__5396__auto__ = cljs.core.chunk_first.call(null,seq__14256__$1);
var G__14270 = cljs.core.chunk_rest.call(null,seq__14256__$1);
var G__14271 = c__5396__auto__;
var G__14272 = cljs.core.count.call(null,c__5396__auto__);
var G__14273 = (0);
seq__14256 = G__14270;
chunk__14258 = G__14271;
count__14259 = G__14272;
i__14260 = G__14273;
continue;
} else {
var comp = cljs.core.first.call(null,seq__14256__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14274 = cljs.core.next.call(null,seq__14256__$1);
var G__14275 = null;
var G__14276 = (0);
var G__14277 = (0);
seq__14256 = G__14274;
chunk__14258 = G__14275;
count__14259 = G__14276;
i__14260 = G__14277;
continue;
} else {
var G__14278 = cljs.core.next.call(null,seq__14256__$1);
var G__14279 = null;
var G__14280 = (0);
var G__14281 = (0);
seq__14256 = G__14278;
chunk__14258 = G__14279;
count__14259 = G__14280;
i__14260 = G__14281;
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
var len__5651__auto___14287 = arguments.length;
var i__5652__auto___14288 = (0);
while(true){
if((i__5652__auto___14288 < len__5651__auto___14287)){
args__5658__auto__.push((arguments[i__5652__auto___14288]));

var G__14289 = (i__5652__auto___14288 + (1));
i__5652__auto___14288 = G__14289;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__14285){
var vec__14286 = p__14285;
var props = cljs.core.nth.call(null,vec__14286,(0),null);
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

rum.core.element.cljs$lang$applyTo = (function (seq14282){
var G__14283 = cljs.core.first.call(null,seq14282);
var seq14282__$1 = cljs.core.next.call(null,seq14282);
var G__14284 = cljs.core.first.call(null,seq14282__$1);
var seq14282__$2 = cljs.core.next.call(null,seq14282__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__14283,G__14284,seq14282__$2);
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
var len__5651__auto___14294 = arguments.length;
var i__5652__auto___14295 = (0);
while(true){
if((i__5652__auto___14295 < len__5651__auto___14294)){
args__5658__auto__.push((arguments[i__5652__auto___14295]));

var G__14296 = (i__5652__auto___14295 + (1));
i__5652__auto___14295 = G__14296;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__14292){
var vec__14293 = p__14292;
var key = cljs.core.nth.call(null,vec__14293,(0),null);
var key__$1 = (function (){var or__4593__auto__ = key;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__14293,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__14293,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__14293,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__14293,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__14293,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__14293,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq14290){
var G__14291 = cljs.core.first.call(null,seq14290);
var seq14290__$1 = cljs.core.next.call(null,seq14290);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__14291,seq14290__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_14297 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14298 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__14298,(0),null);
var next_state = cljs.core.nth.call(null,vec__14298,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__14299_14311 = cljs.core.seq.call(null,old_reactions);
var chunk__14300_14312 = null;
var count__14301_14313 = (0);
var i__14302_14314 = (0);
while(true){
if((i__14302_14314 < count__14301_14313)){
var ref_14315 = cljs.core._nth.call(null,chunk__14300_14312,i__14302_14314);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_14315)){
} else {
cljs.core.remove_watch.call(null,ref_14315,key);
}

var G__14316 = seq__14299_14311;
var G__14317 = chunk__14300_14312;
var G__14318 = count__14301_14313;
var G__14319 = (i__14302_14314 + (1));
seq__14299_14311 = G__14316;
chunk__14300_14312 = G__14317;
count__14301_14313 = G__14318;
i__14302_14314 = G__14319;
continue;
} else {
var temp__4425__auto___14320 = cljs.core.seq.call(null,seq__14299_14311);
if(temp__4425__auto___14320){
var seq__14299_14321__$1 = temp__4425__auto___14320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14299_14321__$1)){
var c__5396__auto___14322 = cljs.core.chunk_first.call(null,seq__14299_14321__$1);
var G__14323 = cljs.core.chunk_rest.call(null,seq__14299_14321__$1);
var G__14324 = c__5396__auto___14322;
var G__14325 = cljs.core.count.call(null,c__5396__auto___14322);
var G__14326 = (0);
seq__14299_14311 = G__14323;
chunk__14300_14312 = G__14324;
count__14301_14313 = G__14325;
i__14302_14314 = G__14326;
continue;
} else {
var ref_14327 = cljs.core.first.call(null,seq__14299_14321__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_14327)){
} else {
cljs.core.remove_watch.call(null,ref_14327,key);
}

var G__14328 = cljs.core.next.call(null,seq__14299_14321__$1);
var G__14329 = null;
var G__14330 = (0);
var G__14331 = (0);
seq__14299_14311 = G__14328;
chunk__14300_14312 = G__14329;
count__14301_14313 = G__14330;
i__14302_14314 = G__14331;
continue;
}
} else {
}
}
break;
}

var seq__14303_14332 = cljs.core.seq.call(null,new_reactions);
var chunk__14304_14333 = null;
var count__14305_14334 = (0);
var i__14306_14335 = (0);
while(true){
if((i__14306_14335 < count__14305_14334)){
var ref_14336 = cljs.core._nth.call(null,chunk__14304_14333,i__14306_14335);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_14336)){
} else {
cljs.core.add_watch.call(null,ref_14336,key,((function (seq__14303_14332,chunk__14304_14333,count__14305_14334,i__14306_14335,ref_14336,comp,old_reactions,vec__14298,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14297){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__14303_14332,chunk__14304_14333,count__14305_14334,i__14306_14335,ref_14336,comp,old_reactions,vec__14298,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14297))
);
}

var G__14337 = seq__14303_14332;
var G__14338 = chunk__14304_14333;
var G__14339 = count__14305_14334;
var G__14340 = (i__14306_14335 + (1));
seq__14303_14332 = G__14337;
chunk__14304_14333 = G__14338;
count__14305_14334 = G__14339;
i__14306_14335 = G__14340;
continue;
} else {
var temp__4425__auto___14341 = cljs.core.seq.call(null,seq__14303_14332);
if(temp__4425__auto___14341){
var seq__14303_14342__$1 = temp__4425__auto___14341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14303_14342__$1)){
var c__5396__auto___14343 = cljs.core.chunk_first.call(null,seq__14303_14342__$1);
var G__14344 = cljs.core.chunk_rest.call(null,seq__14303_14342__$1);
var G__14345 = c__5396__auto___14343;
var G__14346 = cljs.core.count.call(null,c__5396__auto___14343);
var G__14347 = (0);
seq__14303_14332 = G__14344;
chunk__14304_14333 = G__14345;
count__14305_14334 = G__14346;
i__14306_14335 = G__14347;
continue;
} else {
var ref_14348 = cljs.core.first.call(null,seq__14303_14342__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_14348)){
} else {
cljs.core.add_watch.call(null,ref_14348,key,((function (seq__14303_14332,chunk__14304_14333,count__14305_14334,i__14306_14335,ref_14348,seq__14303_14342__$1,temp__4425__auto___14341,comp,old_reactions,vec__14298,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14297){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__14303_14332,chunk__14304_14333,count__14305_14334,i__14306_14335,ref_14348,seq__14303_14342__$1,temp__4425__auto___14341,comp,old_reactions,vec__14298,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14297))
);
}

var G__14349 = cljs.core.next.call(null,seq__14303_14342__$1);
var G__14350 = null;
var G__14351 = (0);
var G__14352 = (0);
seq__14303_14332 = G__14349;
chunk__14304_14333 = G__14350;
count__14305_14334 = G__14351;
i__14306_14335 = G__14352;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14297;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_14353 = rum.core.reactive_key.call(null,state);
var seq__14307_14354 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__14308_14355 = null;
var count__14309_14356 = (0);
var i__14310_14357 = (0);
while(true){
if((i__14310_14357 < count__14309_14356)){
var ref_14358 = cljs.core._nth.call(null,chunk__14308_14355,i__14310_14357);
cljs.core.remove_watch.call(null,ref_14358,key_14353);

var G__14359 = seq__14307_14354;
var G__14360 = chunk__14308_14355;
var G__14361 = count__14309_14356;
var G__14362 = (i__14310_14357 + (1));
seq__14307_14354 = G__14359;
chunk__14308_14355 = G__14360;
count__14309_14356 = G__14361;
i__14310_14357 = G__14362;
continue;
} else {
var temp__4425__auto___14363 = cljs.core.seq.call(null,seq__14307_14354);
if(temp__4425__auto___14363){
var seq__14307_14364__$1 = temp__4425__auto___14363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14307_14364__$1)){
var c__5396__auto___14365 = cljs.core.chunk_first.call(null,seq__14307_14364__$1);
var G__14366 = cljs.core.chunk_rest.call(null,seq__14307_14364__$1);
var G__14367 = c__5396__auto___14365;
var G__14368 = cljs.core.count.call(null,c__5396__auto___14365);
var G__14369 = (0);
seq__14307_14354 = G__14366;
chunk__14308_14355 = G__14367;
count__14309_14356 = G__14368;
i__14310_14357 = G__14369;
continue;
} else {
var ref_14370 = cljs.core.first.call(null,seq__14307_14364__$1);
cljs.core.remove_watch.call(null,ref_14370,key_14353);

var G__14371 = cljs.core.next.call(null,seq__14307_14364__$1);
var G__14372 = null;
var G__14373 = (0);
var G__14374 = (0);
seq__14307_14354 = G__14371;
chunk__14308_14355 = G__14372;
count__14309_14356 = G__14373;
i__14310_14357 = G__14374;
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
var getter = (function (p1__14375_SHARP_){
return cljs.core.get_in.call(null,p1__14375_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__14376_SHARP_,p2__14377_SHARP_){
return cljs.core.assoc_in.call(null,p1__14376_SHARP_,path,p2__14377_SHARP_);
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
return cljs.core.mapv.call(null,(function (p1__14378_SHARP_){
if(((!((p1__14378_SHARP_ == null)))?((((p1__14378_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__14378_SHARP_.cljs$core$IDeref$))?true:(((!p1__14378_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__14378_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__14378_SHARP_))){
return cljs.core.deref.call(null,p1__14378_SHARP_);
} else {
return p1__14378_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__14381 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__14381,(0),null);
var next_state = cljs.core.nth.call(null,vec__14381,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__14382_14398 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__14384_14399 = null;
var count__14385_14400 = (0);
var i__14386_14401 = (0);
while(true){
if((i__14386_14401 < count__14385_14400)){
var arg_14402 = cljs.core._nth.call(null,chunk__14384_14399,i__14386_14401);
if(((!((arg_14402 == null)))?((((arg_14402.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14402.cljs$core$IWatchable$))?true:(((!arg_14402.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14402):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14402))){
cljs.core.add_watch.call(null,arg_14402,rum.core.cursored_key.call(null,state),((function (seq__14382_14398,chunk__14384_14399,count__14385_14400,i__14386_14401,arg_14402){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__14382_14398,chunk__14384_14399,count__14385_14400,i__14386_14401,arg_14402))
);

var G__14403 = seq__14382_14398;
var G__14404 = chunk__14384_14399;
var G__14405 = count__14385_14400;
var G__14406 = (i__14386_14401 + (1));
seq__14382_14398 = G__14403;
chunk__14384_14399 = G__14404;
count__14385_14400 = G__14405;
i__14386_14401 = G__14406;
continue;
} else {
var G__14407 = seq__14382_14398;
var G__14408 = chunk__14384_14399;
var G__14409 = count__14385_14400;
var G__14410 = (i__14386_14401 + (1));
seq__14382_14398 = G__14407;
chunk__14384_14399 = G__14408;
count__14385_14400 = G__14409;
i__14386_14401 = G__14410;
continue;
}
} else {
var temp__4425__auto___14411 = cljs.core.seq.call(null,seq__14382_14398);
if(temp__4425__auto___14411){
var seq__14382_14412__$1 = temp__4425__auto___14411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14382_14412__$1)){
var c__5396__auto___14413 = cljs.core.chunk_first.call(null,seq__14382_14412__$1);
var G__14414 = cljs.core.chunk_rest.call(null,seq__14382_14412__$1);
var G__14415 = c__5396__auto___14413;
var G__14416 = cljs.core.count.call(null,c__5396__auto___14413);
var G__14417 = (0);
seq__14382_14398 = G__14414;
chunk__14384_14399 = G__14415;
count__14385_14400 = G__14416;
i__14386_14401 = G__14417;
continue;
} else {
var arg_14418 = cljs.core.first.call(null,seq__14382_14412__$1);
if(((!((arg_14418 == null)))?((((arg_14418.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14418.cljs$core$IWatchable$))?true:(((!arg_14418.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14418):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14418))){
cljs.core.add_watch.call(null,arg_14418,rum.core.cursored_key.call(null,state),((function (seq__14382_14398,chunk__14384_14399,count__14385_14400,i__14386_14401,arg_14418,seq__14382_14412__$1,temp__4425__auto___14411){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__14382_14398,chunk__14384_14399,count__14385_14400,i__14386_14401,arg_14418,seq__14382_14412__$1,temp__4425__auto___14411))
);

var G__14419 = cljs.core.next.call(null,seq__14382_14412__$1);
var G__14420 = null;
var G__14421 = (0);
var G__14422 = (0);
seq__14382_14398 = G__14419;
chunk__14384_14399 = G__14420;
count__14385_14400 = G__14421;
i__14386_14401 = G__14422;
continue;
} else {
var G__14423 = cljs.core.next.call(null,seq__14382_14412__$1);
var G__14424 = null;
var G__14425 = (0);
var G__14426 = (0);
seq__14382_14398 = G__14423;
chunk__14384_14399 = G__14424;
count__14385_14400 = G__14425;
i__14386_14401 = G__14426;
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
var seq__14390_14427 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__14392_14428 = null;
var count__14393_14429 = (0);
var i__14394_14430 = (0);
while(true){
if((i__14394_14430 < count__14393_14429)){
var arg_14431 = cljs.core._nth.call(null,chunk__14392_14428,i__14394_14430);
if(((!((arg_14431 == null)))?((((arg_14431.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14431.cljs$core$IWatchable$))?true:(((!arg_14431.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14431):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14431))){
cljs.core.remove_watch.call(null,arg_14431,rum.core.cursored_key.call(null,state));

var G__14432 = seq__14390_14427;
var G__14433 = chunk__14392_14428;
var G__14434 = count__14393_14429;
var G__14435 = (i__14394_14430 + (1));
seq__14390_14427 = G__14432;
chunk__14392_14428 = G__14433;
count__14393_14429 = G__14434;
i__14394_14430 = G__14435;
continue;
} else {
var G__14436 = seq__14390_14427;
var G__14437 = chunk__14392_14428;
var G__14438 = count__14393_14429;
var G__14439 = (i__14394_14430 + (1));
seq__14390_14427 = G__14436;
chunk__14392_14428 = G__14437;
count__14393_14429 = G__14438;
i__14394_14430 = G__14439;
continue;
}
} else {
var temp__4425__auto___14440 = cljs.core.seq.call(null,seq__14390_14427);
if(temp__4425__auto___14440){
var seq__14390_14441__$1 = temp__4425__auto___14440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14390_14441__$1)){
var c__5396__auto___14442 = cljs.core.chunk_first.call(null,seq__14390_14441__$1);
var G__14443 = cljs.core.chunk_rest.call(null,seq__14390_14441__$1);
var G__14444 = c__5396__auto___14442;
var G__14445 = cljs.core.count.call(null,c__5396__auto___14442);
var G__14446 = (0);
seq__14390_14427 = G__14443;
chunk__14392_14428 = G__14444;
count__14393_14429 = G__14445;
i__14394_14430 = G__14446;
continue;
} else {
var arg_14447 = cljs.core.first.call(null,seq__14390_14441__$1);
if(((!((arg_14447 == null)))?((((arg_14447.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14447.cljs$core$IWatchable$))?true:(((!arg_14447.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14447):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_14447))){
cljs.core.remove_watch.call(null,arg_14447,rum.core.cursored_key.call(null,state));

var G__14448 = cljs.core.next.call(null,seq__14390_14441__$1);
var G__14449 = null;
var G__14450 = (0);
var G__14451 = (0);
seq__14390_14427 = G__14448;
chunk__14392_14428 = G__14449;
count__14393_14429 = G__14450;
i__14394_14430 = G__14451;
continue;
} else {
var G__14452 = cljs.core.next.call(null,seq__14390_14441__$1);
var G__14453 = null;
var G__14454 = (0);
var G__14455 = (0);
seq__14390_14427 = G__14452;
chunk__14392_14428 = G__14453;
count__14393_14429 = G__14454;
i__14394_14430 = G__14455;
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