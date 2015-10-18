// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_24432 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_24432){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_24432,(cljs.core._deref.call(null,last_id_24432) + (1)));
});})(last_id_24432))
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
var len__5651__auto___24436 = arguments.length;
var i__5652__auto___24437 = (0);
while(true){
if((i__5652__auto___24437 < len__5651__auto___24436)){
args__5658__auto__.push((arguments[i__5652__auto___24437]));

var G__24438 = (i__5652__auto___24437 + (1));
i__5652__auto___24437 = G__24438;
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

rum.core.call_all.cljs$lang$applyTo = (function (seq24433){
var G__24434 = cljs.core.first.call(null,seq24433);
var seq24433__$1 = cljs.core.next.call(null,seq24433);
var G__24435 = cljs.core.first.call(null,seq24433__$1);
var seq24433__$2 = cljs.core.next.call(null,seq24433__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__24434,G__24435,seq24433__$2);
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
return (function (p1__24440_SHARP_,p2__24439_SHARP_){
return p2__24439_SHARP_.call(null,p1__24440_SHARP_);
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
return (function (p1__24442_SHARP_,p2__24441_SHARP_){
return p2__24441_SHARP_.call(null,old_state,p1__24442_SHARP_);
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
return (function (p1__24443_SHARP_){
return p1__24443_SHARP_.call(null,old_state,new_state);
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
var vec__24446 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24446,(0),null);
var next_state = cljs.core.nth.call(null,vec__24446,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__24444_SHARP_){
return p1__24444_SHARP_.call(null,state);
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
return (function (p1__24447_SHARP_){
return setTimeout(p1__24447_SHARP_,(16));
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

var seq__24454 = cljs.core.seq.call(null,queue);
var chunk__24456 = null;
var count__24457 = (0);
var i__24458 = (0);
while(true){
if((i__24458 < count__24457)){
var comp = cljs.core._nth.call(null,chunk__24456,i__24458);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24460 = seq__24454;
var G__24461 = chunk__24456;
var G__24462 = count__24457;
var G__24463 = (i__24458 + (1));
seq__24454 = G__24460;
chunk__24456 = G__24461;
count__24457 = G__24462;
i__24458 = G__24463;
continue;
} else {
var G__24464 = seq__24454;
var G__24465 = chunk__24456;
var G__24466 = count__24457;
var G__24467 = (i__24458 + (1));
seq__24454 = G__24464;
chunk__24456 = G__24465;
count__24457 = G__24466;
i__24458 = G__24467;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24454);
if(temp__4425__auto__){
var seq__24454__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24454__$1)){
var c__5396__auto__ = cljs.core.chunk_first.call(null,seq__24454__$1);
var G__24468 = cljs.core.chunk_rest.call(null,seq__24454__$1);
var G__24469 = c__5396__auto__;
var G__24470 = cljs.core.count.call(null,c__5396__auto__);
var G__24471 = (0);
seq__24454 = G__24468;
chunk__24456 = G__24469;
count__24457 = G__24470;
i__24458 = G__24471;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24454__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24472 = cljs.core.next.call(null,seq__24454__$1);
var G__24473 = null;
var G__24474 = (0);
var G__24475 = (0);
seq__24454 = G__24472;
chunk__24456 = G__24473;
count__24457 = G__24474;
i__24458 = G__24475;
continue;
} else {
var G__24476 = cljs.core.next.call(null,seq__24454__$1);
var G__24477 = null;
var G__24478 = (0);
var G__24479 = (0);
seq__24454 = G__24476;
chunk__24456 = G__24477;
count__24457 = G__24478;
i__24458 = G__24479;
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
var len__5651__auto___24485 = arguments.length;
var i__5652__auto___24486 = (0);
while(true){
if((i__5652__auto___24486 < len__5651__auto___24485)){
args__5658__auto__.push((arguments[i__5652__auto___24486]));

var G__24487 = (i__5652__auto___24486 + (1));
i__5652__auto___24486 = G__24487;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__24483){
var vec__24484 = p__24483;
var props = cljs.core.nth.call(null,vec__24484,(0),null);
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

rum.core.element.cljs$lang$applyTo = (function (seq24480){
var G__24481 = cljs.core.first.call(null,seq24480);
var seq24480__$1 = cljs.core.next.call(null,seq24480);
var G__24482 = cljs.core.first.call(null,seq24480__$1);
var seq24480__$2 = cljs.core.next.call(null,seq24480__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__24481,G__24482,seq24480__$2);
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
var len__5651__auto___24492 = arguments.length;
var i__5652__auto___24493 = (0);
while(true){
if((i__5652__auto___24493 < len__5651__auto___24492)){
args__5658__auto__.push((arguments[i__5652__auto___24493]));

var G__24494 = (i__5652__auto___24493 + (1));
i__5652__auto___24493 = G__24494;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__24490){
var vec__24491 = p__24490;
var key = cljs.core.nth.call(null,vec__24491,(0),null);
var key__$1 = (function (){var or__4593__auto__ = key;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__24491,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__24491,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__24491,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__24491,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__24491,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__24491,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq24488){
var G__24489 = cljs.core.first.call(null,seq24488);
var seq24488__$1 = cljs.core.next.call(null,seq24488);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__24489,seq24488__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24495 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24496 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24496,(0),null);
var next_state = cljs.core.nth.call(null,vec__24496,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__24497_24509 = cljs.core.seq.call(null,old_reactions);
var chunk__24498_24510 = null;
var count__24499_24511 = (0);
var i__24500_24512 = (0);
while(true){
if((i__24500_24512 < count__24499_24511)){
var ref_24513 = cljs.core._nth.call(null,chunk__24498_24510,i__24500_24512);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24513)){
} else {
cljs.core.remove_watch.call(null,ref_24513,key);
}

var G__24514 = seq__24497_24509;
var G__24515 = chunk__24498_24510;
var G__24516 = count__24499_24511;
var G__24517 = (i__24500_24512 + (1));
seq__24497_24509 = G__24514;
chunk__24498_24510 = G__24515;
count__24499_24511 = G__24516;
i__24500_24512 = G__24517;
continue;
} else {
var temp__4425__auto___24518 = cljs.core.seq.call(null,seq__24497_24509);
if(temp__4425__auto___24518){
var seq__24497_24519__$1 = temp__4425__auto___24518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24497_24519__$1)){
var c__5396__auto___24520 = cljs.core.chunk_first.call(null,seq__24497_24519__$1);
var G__24521 = cljs.core.chunk_rest.call(null,seq__24497_24519__$1);
var G__24522 = c__5396__auto___24520;
var G__24523 = cljs.core.count.call(null,c__5396__auto___24520);
var G__24524 = (0);
seq__24497_24509 = G__24521;
chunk__24498_24510 = G__24522;
count__24499_24511 = G__24523;
i__24500_24512 = G__24524;
continue;
} else {
var ref_24525 = cljs.core.first.call(null,seq__24497_24519__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24525)){
} else {
cljs.core.remove_watch.call(null,ref_24525,key);
}

var G__24526 = cljs.core.next.call(null,seq__24497_24519__$1);
var G__24527 = null;
var G__24528 = (0);
var G__24529 = (0);
seq__24497_24509 = G__24526;
chunk__24498_24510 = G__24527;
count__24499_24511 = G__24528;
i__24500_24512 = G__24529;
continue;
}
} else {
}
}
break;
}

var seq__24501_24530 = cljs.core.seq.call(null,new_reactions);
var chunk__24502_24531 = null;
var count__24503_24532 = (0);
var i__24504_24533 = (0);
while(true){
if((i__24504_24533 < count__24503_24532)){
var ref_24534 = cljs.core._nth.call(null,chunk__24502_24531,i__24504_24533);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24534)){
} else {
cljs.core.add_watch.call(null,ref_24534,key,((function (seq__24501_24530,chunk__24502_24531,count__24503_24532,i__24504_24533,ref_24534,comp,old_reactions,vec__24496,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24495){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24501_24530,chunk__24502_24531,count__24503_24532,i__24504_24533,ref_24534,comp,old_reactions,vec__24496,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24495))
);
}

var G__24535 = seq__24501_24530;
var G__24536 = chunk__24502_24531;
var G__24537 = count__24503_24532;
var G__24538 = (i__24504_24533 + (1));
seq__24501_24530 = G__24535;
chunk__24502_24531 = G__24536;
count__24503_24532 = G__24537;
i__24504_24533 = G__24538;
continue;
} else {
var temp__4425__auto___24539 = cljs.core.seq.call(null,seq__24501_24530);
if(temp__4425__auto___24539){
var seq__24501_24540__$1 = temp__4425__auto___24539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24501_24540__$1)){
var c__5396__auto___24541 = cljs.core.chunk_first.call(null,seq__24501_24540__$1);
var G__24542 = cljs.core.chunk_rest.call(null,seq__24501_24540__$1);
var G__24543 = c__5396__auto___24541;
var G__24544 = cljs.core.count.call(null,c__5396__auto___24541);
var G__24545 = (0);
seq__24501_24530 = G__24542;
chunk__24502_24531 = G__24543;
count__24503_24532 = G__24544;
i__24504_24533 = G__24545;
continue;
} else {
var ref_24546 = cljs.core.first.call(null,seq__24501_24540__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24546)){
} else {
cljs.core.add_watch.call(null,ref_24546,key,((function (seq__24501_24530,chunk__24502_24531,count__24503_24532,i__24504_24533,ref_24546,seq__24501_24540__$1,temp__4425__auto___24539,comp,old_reactions,vec__24496,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24495){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24501_24530,chunk__24502_24531,count__24503_24532,i__24504_24533,ref_24546,seq__24501_24540__$1,temp__4425__auto___24539,comp,old_reactions,vec__24496,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24495))
);
}

var G__24547 = cljs.core.next.call(null,seq__24501_24540__$1);
var G__24548 = null;
var G__24549 = (0);
var G__24550 = (0);
seq__24501_24530 = G__24547;
chunk__24502_24531 = G__24548;
count__24503_24532 = G__24549;
i__24504_24533 = G__24550;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24495;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24551 = rum.core.reactive_key.call(null,state);
var seq__24505_24552 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24506_24553 = null;
var count__24507_24554 = (0);
var i__24508_24555 = (0);
while(true){
if((i__24508_24555 < count__24507_24554)){
var ref_24556 = cljs.core._nth.call(null,chunk__24506_24553,i__24508_24555);
cljs.core.remove_watch.call(null,ref_24556,key_24551);

var G__24557 = seq__24505_24552;
var G__24558 = chunk__24506_24553;
var G__24559 = count__24507_24554;
var G__24560 = (i__24508_24555 + (1));
seq__24505_24552 = G__24557;
chunk__24506_24553 = G__24558;
count__24507_24554 = G__24559;
i__24508_24555 = G__24560;
continue;
} else {
var temp__4425__auto___24561 = cljs.core.seq.call(null,seq__24505_24552);
if(temp__4425__auto___24561){
var seq__24505_24562__$1 = temp__4425__auto___24561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24505_24562__$1)){
var c__5396__auto___24563 = cljs.core.chunk_first.call(null,seq__24505_24562__$1);
var G__24564 = cljs.core.chunk_rest.call(null,seq__24505_24562__$1);
var G__24565 = c__5396__auto___24563;
var G__24566 = cljs.core.count.call(null,c__5396__auto___24563);
var G__24567 = (0);
seq__24505_24552 = G__24564;
chunk__24506_24553 = G__24565;
count__24507_24554 = G__24566;
i__24508_24555 = G__24567;
continue;
} else {
var ref_24568 = cljs.core.first.call(null,seq__24505_24562__$1);
cljs.core.remove_watch.call(null,ref_24568,key_24551);

var G__24569 = cljs.core.next.call(null,seq__24505_24562__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24505_24552 = G__24569;
chunk__24506_24553 = G__24570;
count__24507_24554 = G__24571;
i__24508_24555 = G__24572;
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
var getter = (function (p1__24573_SHARP_){
return cljs.core.get_in.call(null,p1__24573_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__24574_SHARP_,p2__24575_SHARP_){
return cljs.core.assoc_in.call(null,p1__24574_SHARP_,path,p2__24575_SHARP_);
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
return cljs.core.mapv.call(null,(function (p1__24576_SHARP_){
if(((!((p1__24576_SHARP_ == null)))?((((p1__24576_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__24576_SHARP_.cljs$core$IDeref$))?true:(((!p1__24576_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__24576_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__24576_SHARP_))){
return cljs.core.deref.call(null,p1__24576_SHARP_);
} else {
return p1__24576_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__24579 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24579,(0),null);
var next_state = cljs.core.nth.call(null,vec__24579,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__24580_24596 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24582_24597 = null;
var count__24583_24598 = (0);
var i__24584_24599 = (0);
while(true){
if((i__24584_24599 < count__24583_24598)){
var arg_24600 = cljs.core._nth.call(null,chunk__24582_24597,i__24584_24599);
if(((!((arg_24600 == null)))?((((arg_24600.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24600.cljs$core$IWatchable$))?true:(((!arg_24600.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24600):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24600))){
cljs.core.add_watch.call(null,arg_24600,rum.core.cursored_key.call(null,state),((function (seq__24580_24596,chunk__24582_24597,count__24583_24598,i__24584_24599,arg_24600){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__24580_24596,chunk__24582_24597,count__24583_24598,i__24584_24599,arg_24600))
);

var G__24601 = seq__24580_24596;
var G__24602 = chunk__24582_24597;
var G__24603 = count__24583_24598;
var G__24604 = (i__24584_24599 + (1));
seq__24580_24596 = G__24601;
chunk__24582_24597 = G__24602;
count__24583_24598 = G__24603;
i__24584_24599 = G__24604;
continue;
} else {
var G__24605 = seq__24580_24596;
var G__24606 = chunk__24582_24597;
var G__24607 = count__24583_24598;
var G__24608 = (i__24584_24599 + (1));
seq__24580_24596 = G__24605;
chunk__24582_24597 = G__24606;
count__24583_24598 = G__24607;
i__24584_24599 = G__24608;
continue;
}
} else {
var temp__4425__auto___24609 = cljs.core.seq.call(null,seq__24580_24596);
if(temp__4425__auto___24609){
var seq__24580_24610__$1 = temp__4425__auto___24609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24580_24610__$1)){
var c__5396__auto___24611 = cljs.core.chunk_first.call(null,seq__24580_24610__$1);
var G__24612 = cljs.core.chunk_rest.call(null,seq__24580_24610__$1);
var G__24613 = c__5396__auto___24611;
var G__24614 = cljs.core.count.call(null,c__5396__auto___24611);
var G__24615 = (0);
seq__24580_24596 = G__24612;
chunk__24582_24597 = G__24613;
count__24583_24598 = G__24614;
i__24584_24599 = G__24615;
continue;
} else {
var arg_24616 = cljs.core.first.call(null,seq__24580_24610__$1);
if(((!((arg_24616 == null)))?((((arg_24616.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24616.cljs$core$IWatchable$))?true:(((!arg_24616.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24616):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24616))){
cljs.core.add_watch.call(null,arg_24616,rum.core.cursored_key.call(null,state),((function (seq__24580_24596,chunk__24582_24597,count__24583_24598,i__24584_24599,arg_24616,seq__24580_24610__$1,temp__4425__auto___24609){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__24580_24596,chunk__24582_24597,count__24583_24598,i__24584_24599,arg_24616,seq__24580_24610__$1,temp__4425__auto___24609))
);

var G__24617 = cljs.core.next.call(null,seq__24580_24610__$1);
var G__24618 = null;
var G__24619 = (0);
var G__24620 = (0);
seq__24580_24596 = G__24617;
chunk__24582_24597 = G__24618;
count__24583_24598 = G__24619;
i__24584_24599 = G__24620;
continue;
} else {
var G__24621 = cljs.core.next.call(null,seq__24580_24610__$1);
var G__24622 = null;
var G__24623 = (0);
var G__24624 = (0);
seq__24580_24596 = G__24621;
chunk__24582_24597 = G__24622;
count__24583_24598 = G__24623;
i__24584_24599 = G__24624;
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
var seq__24588_24625 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24590_24626 = null;
var count__24591_24627 = (0);
var i__24592_24628 = (0);
while(true){
if((i__24592_24628 < count__24591_24627)){
var arg_24629 = cljs.core._nth.call(null,chunk__24590_24626,i__24592_24628);
if(((!((arg_24629 == null)))?((((arg_24629.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24629.cljs$core$IWatchable$))?true:(((!arg_24629.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24629):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24629))){
cljs.core.remove_watch.call(null,arg_24629,rum.core.cursored_key.call(null,state));

var G__24630 = seq__24588_24625;
var G__24631 = chunk__24590_24626;
var G__24632 = count__24591_24627;
var G__24633 = (i__24592_24628 + (1));
seq__24588_24625 = G__24630;
chunk__24590_24626 = G__24631;
count__24591_24627 = G__24632;
i__24592_24628 = G__24633;
continue;
} else {
var G__24634 = seq__24588_24625;
var G__24635 = chunk__24590_24626;
var G__24636 = count__24591_24627;
var G__24637 = (i__24592_24628 + (1));
seq__24588_24625 = G__24634;
chunk__24590_24626 = G__24635;
count__24591_24627 = G__24636;
i__24592_24628 = G__24637;
continue;
}
} else {
var temp__4425__auto___24638 = cljs.core.seq.call(null,seq__24588_24625);
if(temp__4425__auto___24638){
var seq__24588_24639__$1 = temp__4425__auto___24638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24588_24639__$1)){
var c__5396__auto___24640 = cljs.core.chunk_first.call(null,seq__24588_24639__$1);
var G__24641 = cljs.core.chunk_rest.call(null,seq__24588_24639__$1);
var G__24642 = c__5396__auto___24640;
var G__24643 = cljs.core.count.call(null,c__5396__auto___24640);
var G__24644 = (0);
seq__24588_24625 = G__24641;
chunk__24590_24626 = G__24642;
count__24591_24627 = G__24643;
i__24592_24628 = G__24644;
continue;
} else {
var arg_24645 = cljs.core.first.call(null,seq__24588_24639__$1);
if(((!((arg_24645 == null)))?((((arg_24645.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24645.cljs$core$IWatchable$))?true:(((!arg_24645.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24645):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24645))){
cljs.core.remove_watch.call(null,arg_24645,rum.core.cursored_key.call(null,state));

var G__24646 = cljs.core.next.call(null,seq__24588_24639__$1);
var G__24647 = null;
var G__24648 = (0);
var G__24649 = (0);
seq__24588_24625 = G__24646;
chunk__24590_24626 = G__24647;
count__24591_24627 = G__24648;
i__24592_24628 = G__24649;
continue;
} else {
var G__24650 = cljs.core.next.call(null,seq__24588_24639__$1);
var G__24651 = null;
var G__24652 = (0);
var G__24653 = (0);
seq__24588_24625 = G__24650;
chunk__24590_24626 = G__24651;
count__24591_24627 = G__24652;
i__24592_24628 = G__24653;
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