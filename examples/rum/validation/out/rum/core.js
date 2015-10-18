// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_17448 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_17448){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_17448,(cljs.core._deref.call(null,last_id_17448) + (1)));
});})(last_id_17448))
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
var len__5651__auto___17452 = arguments.length;
var i__5652__auto___17453 = (0);
while(true){
if((i__5652__auto___17453 < len__5651__auto___17452)){
args__5658__auto__.push((arguments[i__5652__auto___17453]));

var G__17454 = (i__5652__auto___17453 + (1));
i__5652__auto___17453 = G__17454;
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

rum.core.call_all.cljs$lang$applyTo = (function (seq17449){
var G__17450 = cljs.core.first.call(null,seq17449);
var seq17449__$1 = cljs.core.next.call(null,seq17449);
var G__17451 = cljs.core.first.call(null,seq17449__$1);
var seq17449__$2 = cljs.core.next.call(null,seq17449__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__17450,G__17451,seq17449__$2);
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
return (function (p1__17456_SHARP_,p2__17455_SHARP_){
return p2__17455_SHARP_.call(null,p1__17456_SHARP_);
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
return (function (p1__17458_SHARP_,p2__17457_SHARP_){
return p2__17457_SHARP_.call(null,old_state,p1__17458_SHARP_);
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
return (function (p1__17459_SHARP_){
return p1__17459_SHARP_.call(null,old_state,new_state);
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
var vec__17462 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__17462,(0),null);
var next_state = cljs.core.nth.call(null,vec__17462,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__17460_SHARP_){
return p1__17460_SHARP_.call(null,state);
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
return (function (p1__17463_SHARP_){
return setTimeout(p1__17463_SHARP_,(16));
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

var seq__17470 = cljs.core.seq.call(null,queue);
var chunk__17472 = null;
var count__17473 = (0);
var i__17474 = (0);
while(true){
if((i__17474 < count__17473)){
var comp = cljs.core._nth.call(null,chunk__17472,i__17474);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__17476 = seq__17470;
var G__17477 = chunk__17472;
var G__17478 = count__17473;
var G__17479 = (i__17474 + (1));
seq__17470 = G__17476;
chunk__17472 = G__17477;
count__17473 = G__17478;
i__17474 = G__17479;
continue;
} else {
var G__17480 = seq__17470;
var G__17481 = chunk__17472;
var G__17482 = count__17473;
var G__17483 = (i__17474 + (1));
seq__17470 = G__17480;
chunk__17472 = G__17481;
count__17473 = G__17482;
i__17474 = G__17483;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17470);
if(temp__4425__auto__){
var seq__17470__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17470__$1)){
var c__5396__auto__ = cljs.core.chunk_first.call(null,seq__17470__$1);
var G__17484 = cljs.core.chunk_rest.call(null,seq__17470__$1);
var G__17485 = c__5396__auto__;
var G__17486 = cljs.core.count.call(null,c__5396__auto__);
var G__17487 = (0);
seq__17470 = G__17484;
chunk__17472 = G__17485;
count__17473 = G__17486;
i__17474 = G__17487;
continue;
} else {
var comp = cljs.core.first.call(null,seq__17470__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__17488 = cljs.core.next.call(null,seq__17470__$1);
var G__17489 = null;
var G__17490 = (0);
var G__17491 = (0);
seq__17470 = G__17488;
chunk__17472 = G__17489;
count__17473 = G__17490;
i__17474 = G__17491;
continue;
} else {
var G__17492 = cljs.core.next.call(null,seq__17470__$1);
var G__17493 = null;
var G__17494 = (0);
var G__17495 = (0);
seq__17470 = G__17492;
chunk__17472 = G__17493;
count__17473 = G__17494;
i__17474 = G__17495;
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
var len__5651__auto___17501 = arguments.length;
var i__5652__auto___17502 = (0);
while(true){
if((i__5652__auto___17502 < len__5651__auto___17501)){
args__5658__auto__.push((arguments[i__5652__auto___17502]));

var G__17503 = (i__5652__auto___17502 + (1));
i__5652__auto___17502 = G__17503;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__17499){
var vec__17500 = p__17499;
var props = cljs.core.nth.call(null,vec__17500,(0),null);
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

rum.core.element.cljs$lang$applyTo = (function (seq17496){
var G__17497 = cljs.core.first.call(null,seq17496);
var seq17496__$1 = cljs.core.next.call(null,seq17496);
var G__17498 = cljs.core.first.call(null,seq17496__$1);
var seq17496__$2 = cljs.core.next.call(null,seq17496__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__17497,G__17498,seq17496__$2);
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
var len__5651__auto___17508 = arguments.length;
var i__5652__auto___17509 = (0);
while(true){
if((i__5652__auto___17509 < len__5651__auto___17508)){
args__5658__auto__.push((arguments[i__5652__auto___17509]));

var G__17510 = (i__5652__auto___17509 + (1));
i__5652__auto___17509 = G__17510;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__17506){
var vec__17507 = p__17506;
var key = cljs.core.nth.call(null,vec__17507,(0),null);
var key__$1 = (function (){var or__4593__auto__ = key;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__17507,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__17507,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__17507,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__17507,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__17507,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__17507,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq17504){
var G__17505 = cljs.core.first.call(null,seq17504);
var seq17504__$1 = cljs.core.next.call(null,seq17504);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__17505,seq17504__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_17511 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__17512 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__17512,(0),null);
var next_state = cljs.core.nth.call(null,vec__17512,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__17513_17525 = cljs.core.seq.call(null,old_reactions);
var chunk__17514_17526 = null;
var count__17515_17527 = (0);
var i__17516_17528 = (0);
while(true){
if((i__17516_17528 < count__17515_17527)){
var ref_17529 = cljs.core._nth.call(null,chunk__17514_17526,i__17516_17528);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_17529)){
} else {
cljs.core.remove_watch.call(null,ref_17529,key);
}

var G__17530 = seq__17513_17525;
var G__17531 = chunk__17514_17526;
var G__17532 = count__17515_17527;
var G__17533 = (i__17516_17528 + (1));
seq__17513_17525 = G__17530;
chunk__17514_17526 = G__17531;
count__17515_17527 = G__17532;
i__17516_17528 = G__17533;
continue;
} else {
var temp__4425__auto___17534 = cljs.core.seq.call(null,seq__17513_17525);
if(temp__4425__auto___17534){
var seq__17513_17535__$1 = temp__4425__auto___17534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17513_17535__$1)){
var c__5396__auto___17536 = cljs.core.chunk_first.call(null,seq__17513_17535__$1);
var G__17537 = cljs.core.chunk_rest.call(null,seq__17513_17535__$1);
var G__17538 = c__5396__auto___17536;
var G__17539 = cljs.core.count.call(null,c__5396__auto___17536);
var G__17540 = (0);
seq__17513_17525 = G__17537;
chunk__17514_17526 = G__17538;
count__17515_17527 = G__17539;
i__17516_17528 = G__17540;
continue;
} else {
var ref_17541 = cljs.core.first.call(null,seq__17513_17535__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_17541)){
} else {
cljs.core.remove_watch.call(null,ref_17541,key);
}

var G__17542 = cljs.core.next.call(null,seq__17513_17535__$1);
var G__17543 = null;
var G__17544 = (0);
var G__17545 = (0);
seq__17513_17525 = G__17542;
chunk__17514_17526 = G__17543;
count__17515_17527 = G__17544;
i__17516_17528 = G__17545;
continue;
}
} else {
}
}
break;
}

var seq__17517_17546 = cljs.core.seq.call(null,new_reactions);
var chunk__17518_17547 = null;
var count__17519_17548 = (0);
var i__17520_17549 = (0);
while(true){
if((i__17520_17549 < count__17519_17548)){
var ref_17550 = cljs.core._nth.call(null,chunk__17518_17547,i__17520_17549);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_17550)){
} else {
cljs.core.add_watch.call(null,ref_17550,key,((function (seq__17517_17546,chunk__17518_17547,count__17519_17548,i__17520_17549,ref_17550,comp,old_reactions,vec__17512,dom,next_state,new_reactions,key,_STAR_reactions_STAR_17511){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__17517_17546,chunk__17518_17547,count__17519_17548,i__17520_17549,ref_17550,comp,old_reactions,vec__17512,dom,next_state,new_reactions,key,_STAR_reactions_STAR_17511))
);
}

var G__17551 = seq__17517_17546;
var G__17552 = chunk__17518_17547;
var G__17553 = count__17519_17548;
var G__17554 = (i__17520_17549 + (1));
seq__17517_17546 = G__17551;
chunk__17518_17547 = G__17552;
count__17519_17548 = G__17553;
i__17520_17549 = G__17554;
continue;
} else {
var temp__4425__auto___17555 = cljs.core.seq.call(null,seq__17517_17546);
if(temp__4425__auto___17555){
var seq__17517_17556__$1 = temp__4425__auto___17555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17517_17556__$1)){
var c__5396__auto___17557 = cljs.core.chunk_first.call(null,seq__17517_17556__$1);
var G__17558 = cljs.core.chunk_rest.call(null,seq__17517_17556__$1);
var G__17559 = c__5396__auto___17557;
var G__17560 = cljs.core.count.call(null,c__5396__auto___17557);
var G__17561 = (0);
seq__17517_17546 = G__17558;
chunk__17518_17547 = G__17559;
count__17519_17548 = G__17560;
i__17520_17549 = G__17561;
continue;
} else {
var ref_17562 = cljs.core.first.call(null,seq__17517_17556__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_17562)){
} else {
cljs.core.add_watch.call(null,ref_17562,key,((function (seq__17517_17546,chunk__17518_17547,count__17519_17548,i__17520_17549,ref_17562,seq__17517_17556__$1,temp__4425__auto___17555,comp,old_reactions,vec__17512,dom,next_state,new_reactions,key,_STAR_reactions_STAR_17511){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__17517_17546,chunk__17518_17547,count__17519_17548,i__17520_17549,ref_17562,seq__17517_17556__$1,temp__4425__auto___17555,comp,old_reactions,vec__17512,dom,next_state,new_reactions,key,_STAR_reactions_STAR_17511))
);
}

var G__17563 = cljs.core.next.call(null,seq__17517_17556__$1);
var G__17564 = null;
var G__17565 = (0);
var G__17566 = (0);
seq__17517_17546 = G__17563;
chunk__17518_17547 = G__17564;
count__17519_17548 = G__17565;
i__17520_17549 = G__17566;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_17511;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_17567 = rum.core.reactive_key.call(null,state);
var seq__17521_17568 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__17522_17569 = null;
var count__17523_17570 = (0);
var i__17524_17571 = (0);
while(true){
if((i__17524_17571 < count__17523_17570)){
var ref_17572 = cljs.core._nth.call(null,chunk__17522_17569,i__17524_17571);
cljs.core.remove_watch.call(null,ref_17572,key_17567);

var G__17573 = seq__17521_17568;
var G__17574 = chunk__17522_17569;
var G__17575 = count__17523_17570;
var G__17576 = (i__17524_17571 + (1));
seq__17521_17568 = G__17573;
chunk__17522_17569 = G__17574;
count__17523_17570 = G__17575;
i__17524_17571 = G__17576;
continue;
} else {
var temp__4425__auto___17577 = cljs.core.seq.call(null,seq__17521_17568);
if(temp__4425__auto___17577){
var seq__17521_17578__$1 = temp__4425__auto___17577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17521_17578__$1)){
var c__5396__auto___17579 = cljs.core.chunk_first.call(null,seq__17521_17578__$1);
var G__17580 = cljs.core.chunk_rest.call(null,seq__17521_17578__$1);
var G__17581 = c__5396__auto___17579;
var G__17582 = cljs.core.count.call(null,c__5396__auto___17579);
var G__17583 = (0);
seq__17521_17568 = G__17580;
chunk__17522_17569 = G__17581;
count__17523_17570 = G__17582;
i__17524_17571 = G__17583;
continue;
} else {
var ref_17584 = cljs.core.first.call(null,seq__17521_17578__$1);
cljs.core.remove_watch.call(null,ref_17584,key_17567);

var G__17585 = cljs.core.next.call(null,seq__17521_17578__$1);
var G__17586 = null;
var G__17587 = (0);
var G__17588 = (0);
seq__17521_17568 = G__17585;
chunk__17522_17569 = G__17586;
count__17523_17570 = G__17587;
i__17524_17571 = G__17588;
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
var getter = (function (p1__17589_SHARP_){
return cljs.core.get_in.call(null,p1__17589_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__17590_SHARP_,p2__17591_SHARP_){
return cljs.core.assoc_in.call(null,p1__17590_SHARP_,path,p2__17591_SHARP_);
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
return cljs.core.mapv.call(null,(function (p1__17592_SHARP_){
if(((!((p1__17592_SHARP_ == null)))?((((p1__17592_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__17592_SHARP_.cljs$core$IDeref$))?true:(((!p1__17592_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__17592_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__17592_SHARP_))){
return cljs.core.deref.call(null,p1__17592_SHARP_);
} else {
return p1__17592_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__17595 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__17595,(0),null);
var next_state = cljs.core.nth.call(null,vec__17595,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__17596_17612 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__17598_17613 = null;
var count__17599_17614 = (0);
var i__17600_17615 = (0);
while(true){
if((i__17600_17615 < count__17599_17614)){
var arg_17616 = cljs.core._nth.call(null,chunk__17598_17613,i__17600_17615);
if(((!((arg_17616 == null)))?((((arg_17616.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_17616.cljs$core$IWatchable$))?true:(((!arg_17616.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17616):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17616))){
cljs.core.add_watch.call(null,arg_17616,rum.core.cursored_key.call(null,state),((function (seq__17596_17612,chunk__17598_17613,count__17599_17614,i__17600_17615,arg_17616){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__17596_17612,chunk__17598_17613,count__17599_17614,i__17600_17615,arg_17616))
);

var G__17617 = seq__17596_17612;
var G__17618 = chunk__17598_17613;
var G__17619 = count__17599_17614;
var G__17620 = (i__17600_17615 + (1));
seq__17596_17612 = G__17617;
chunk__17598_17613 = G__17618;
count__17599_17614 = G__17619;
i__17600_17615 = G__17620;
continue;
} else {
var G__17621 = seq__17596_17612;
var G__17622 = chunk__17598_17613;
var G__17623 = count__17599_17614;
var G__17624 = (i__17600_17615 + (1));
seq__17596_17612 = G__17621;
chunk__17598_17613 = G__17622;
count__17599_17614 = G__17623;
i__17600_17615 = G__17624;
continue;
}
} else {
var temp__4425__auto___17625 = cljs.core.seq.call(null,seq__17596_17612);
if(temp__4425__auto___17625){
var seq__17596_17626__$1 = temp__4425__auto___17625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17596_17626__$1)){
var c__5396__auto___17627 = cljs.core.chunk_first.call(null,seq__17596_17626__$1);
var G__17628 = cljs.core.chunk_rest.call(null,seq__17596_17626__$1);
var G__17629 = c__5396__auto___17627;
var G__17630 = cljs.core.count.call(null,c__5396__auto___17627);
var G__17631 = (0);
seq__17596_17612 = G__17628;
chunk__17598_17613 = G__17629;
count__17599_17614 = G__17630;
i__17600_17615 = G__17631;
continue;
} else {
var arg_17632 = cljs.core.first.call(null,seq__17596_17626__$1);
if(((!((arg_17632 == null)))?((((arg_17632.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_17632.cljs$core$IWatchable$))?true:(((!arg_17632.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17632):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17632))){
cljs.core.add_watch.call(null,arg_17632,rum.core.cursored_key.call(null,state),((function (seq__17596_17612,chunk__17598_17613,count__17599_17614,i__17600_17615,arg_17632,seq__17596_17626__$1,temp__4425__auto___17625){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__17596_17612,chunk__17598_17613,count__17599_17614,i__17600_17615,arg_17632,seq__17596_17626__$1,temp__4425__auto___17625))
);

var G__17633 = cljs.core.next.call(null,seq__17596_17626__$1);
var G__17634 = null;
var G__17635 = (0);
var G__17636 = (0);
seq__17596_17612 = G__17633;
chunk__17598_17613 = G__17634;
count__17599_17614 = G__17635;
i__17600_17615 = G__17636;
continue;
} else {
var G__17637 = cljs.core.next.call(null,seq__17596_17626__$1);
var G__17638 = null;
var G__17639 = (0);
var G__17640 = (0);
seq__17596_17612 = G__17637;
chunk__17598_17613 = G__17638;
count__17599_17614 = G__17639;
i__17600_17615 = G__17640;
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
var seq__17604_17641 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__17606_17642 = null;
var count__17607_17643 = (0);
var i__17608_17644 = (0);
while(true){
if((i__17608_17644 < count__17607_17643)){
var arg_17645 = cljs.core._nth.call(null,chunk__17606_17642,i__17608_17644);
if(((!((arg_17645 == null)))?((((arg_17645.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_17645.cljs$core$IWatchable$))?true:(((!arg_17645.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17645):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17645))){
cljs.core.remove_watch.call(null,arg_17645,rum.core.cursored_key.call(null,state));

var G__17646 = seq__17604_17641;
var G__17647 = chunk__17606_17642;
var G__17648 = count__17607_17643;
var G__17649 = (i__17608_17644 + (1));
seq__17604_17641 = G__17646;
chunk__17606_17642 = G__17647;
count__17607_17643 = G__17648;
i__17608_17644 = G__17649;
continue;
} else {
var G__17650 = seq__17604_17641;
var G__17651 = chunk__17606_17642;
var G__17652 = count__17607_17643;
var G__17653 = (i__17608_17644 + (1));
seq__17604_17641 = G__17650;
chunk__17606_17642 = G__17651;
count__17607_17643 = G__17652;
i__17608_17644 = G__17653;
continue;
}
} else {
var temp__4425__auto___17654 = cljs.core.seq.call(null,seq__17604_17641);
if(temp__4425__auto___17654){
var seq__17604_17655__$1 = temp__4425__auto___17654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17604_17655__$1)){
var c__5396__auto___17656 = cljs.core.chunk_first.call(null,seq__17604_17655__$1);
var G__17657 = cljs.core.chunk_rest.call(null,seq__17604_17655__$1);
var G__17658 = c__5396__auto___17656;
var G__17659 = cljs.core.count.call(null,c__5396__auto___17656);
var G__17660 = (0);
seq__17604_17641 = G__17657;
chunk__17606_17642 = G__17658;
count__17607_17643 = G__17659;
i__17608_17644 = G__17660;
continue;
} else {
var arg_17661 = cljs.core.first.call(null,seq__17604_17655__$1);
if(((!((arg_17661 == null)))?((((arg_17661.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_17661.cljs$core$IWatchable$))?true:(((!arg_17661.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17661):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_17661))){
cljs.core.remove_watch.call(null,arg_17661,rum.core.cursored_key.call(null,state));

var G__17662 = cljs.core.next.call(null,seq__17604_17655__$1);
var G__17663 = null;
var G__17664 = (0);
var G__17665 = (0);
seq__17604_17641 = G__17662;
chunk__17606_17642 = G__17663;
count__17607_17643 = G__17664;
i__17608_17644 = G__17665;
continue;
} else {
var G__17666 = cljs.core.next.call(null,seq__17604_17655__$1);
var G__17667 = null;
var G__17668 = (0);
var G__17669 = (0);
seq__17604_17641 = G__17666;
chunk__17606_17642 = G__17667;
count__17607_17643 = G__17668;
i__17608_17644 = G__17669;
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