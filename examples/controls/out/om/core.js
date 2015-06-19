// Compiled by ClojureScript 0.0-3308 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj12506 = {};
return obj12506;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.display_name[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.display_name["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj12508 = {};
return obj12508;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.init_state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.init_state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj12510 = {};
return obj12510;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.should_update[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.should_update["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj12512 = {};
return obj12512;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.will_mount[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.will_mount["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj12514 = {};
return obj12514;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.did_mount[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.did_mount["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj12516 = {};
return obj12516;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.will_unmount[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.will_unmount["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj12518 = {};
return obj12518;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.will_update[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.will_update["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj12520 = {};
return obj12520;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.did_update[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.did_update["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj12522 = {};
return obj12522;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.will_receive_props[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj12524 = {};
return obj12524;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.render[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.render["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj12526 = {};
return obj12526;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.render_props[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.render_props["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj12528 = {};
return obj12528;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core.render_state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core.render_state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj12530 = {};
return obj12530;
})();


om.core.IOmSwap = (function (){var obj12532 = {};
return obj12532;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj12534 = {};
return obj12534;
})();

om.core._get_state = (function om$core$_get_state(){
var G__12536 = arguments.length;
switch (G__12536) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj12539 = {};
return obj12539;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__12541 = arguments.length;
switch (G__12541) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_render_state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_render_state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_render_state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_render_state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj12544 = {};
return obj12544;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__12546 = arguments.length;
switch (G__12546) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj12549 = {};
return obj12549;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_queue[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_queue["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj12551 = {};
return obj12551;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4337__auto__ = x;
if(and__4337__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4337__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4985__auto__ = (((x == null))?null:x);
return (function (){var or__4349__auto__ = (om.core._value[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._value["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj12553 = {};
return obj12553;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4337__auto__ = cursor;
if(and__4337__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4337__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4985__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4349__auto__ = (om.core._path[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._path["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4337__auto__ = cursor;
if(and__4337__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4337__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4985__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4349__auto__ = (om.core._state[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._state["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj12555 = {};
return obj12555;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__12557 = arguments.length;
switch (G__12557) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__4337__auto__ = value;
if(and__4337__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4337__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4985__auto__ = (((value == null))?null:value);
return (function (){var or__4349__auto__ = (om.core._to_cursor[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._to_cursor["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__4337__auto__ = value;
if(and__4337__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4337__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4985__auto__ = (((value == null))?null:value);
return (function (){var or__4349__auto__ = (om.core._to_cursor[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._to_cursor["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj12560 = {};
return obj12560;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4337__auto__ = cursor;
if(and__4337__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4337__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4985__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4349__auto__ = (om.core._derive[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._derive["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj12562 = {};
return obj12562;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4337__auto__ = cursor;
if(and__4337__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4337__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4985__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4349__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj12564 = {};
return obj12564;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4337__auto__ = x;
if(and__4337__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4337__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4985__auto__ = (((x == null))?null:x);
return (function (){var or__4349__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4337__auto__ = x;
if(and__4337__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4985__auto__ = (((x == null))?null:x);
return (function (){var or__4349__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4337__auto__ = x;
if(and__4337__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4337__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4985__auto__ = (((x == null))?null:x);
return (function (){var or__4349__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj12566 = {};
return obj12566;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_property[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_property["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj12568 = {};
return obj12568;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4337__auto__ = cursor;
if(and__4337__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4337__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4985__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4349__auto__ = (om.core._root_key[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._root_key["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj12570 = {};
return obj12570;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._adapt[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._adapt["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj12572 = {};
return obj12572;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4337__auto__ = this$;
if(and__4337__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4337__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4985__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4349__auto__ = (om.core._get_deps[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (om.core._get_deps["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__12574 = state;
if(G__12574){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12574.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__12574.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__12574);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__12574);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__12576 = x;
if(G__12576){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12576.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__12576.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__12576);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__12576);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__12578 = arguments.length;
switch (G__12578) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__12579 = (x.props["__om_cursor"]);
var G__12579__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__12579,korks__$1):G__12579);
return G__12579__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__12582 = arguments.length;
switch (G__12582) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__12585 = arguments.length;
switch (G__12585) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4423__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4423__auto__)){
var pending_state = temp__4423__auto__;
var G__12588 = state;
(G__12588["__om_prev_state"] = (state["__om_state"]));

(G__12588["__om_state"] = pending_state);

(G__12588["__om_pending_state"] = null);

return G__12588;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__12590 = arguments.length;
switch (G__12590) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4349__auto__ = props;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return owner.props;
}
})();
var temp__4423__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4423__auto__)){
var props_state = temp__4423__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4349__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__12593 = c;
if(G__12593){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12593.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__12593.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__12593);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__12593);
}
})()){
var state_12614 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4349__auto__ = (state_12614["__om_prev_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state_12614["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__12594 = c;
if(G__12594){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12594.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__12594.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__12594);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__12594);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__12595 = cljs.core.seq.call(null,refs);
var chunk__12596 = null;
var count__12597 = (0);
var i__12598 = (0);
while(true){
if((i__12598 < count__12597)){
var ref = cljs.core._nth.call(null,chunk__12596,i__12598);
om.core.unobserve.call(null,this$,ref);

var G__12615 = seq__12595;
var G__12616 = chunk__12596;
var G__12617 = count__12597;
var G__12618 = (i__12598 + (1));
seq__12595 = G__12615;
chunk__12596 = G__12616;
count__12597 = G__12617;
i__12598 = G__12618;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__12595);
if(temp__4423__auto____$1){
var seq__12595__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12595__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__12595__$1);
var G__12619 = cljs.core.chunk_rest.call(null,seq__12595__$1);
var G__12620 = c__5134__auto__;
var G__12621 = cljs.core.count.call(null,c__5134__auto__);
var G__12622 = (0);
seq__12595 = G__12619;
chunk__12596 = G__12620;
count__12597 = G__12621;
i__12598 = G__12622;
continue;
} else {
var ref = cljs.core.first.call(null,seq__12595__$1);
om.core.unobserve.call(null,this$,ref);

var G__12623 = cljs.core.next.call(null,seq__12595__$1);
var G__12624 = null;
var G__12625 = (0);
var G__12626 = (0);
seq__12595 = G__12623;
chunk__12596 = G__12624;
count__12597 = G__12625;
i__12598 = G__12626;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__12599 = c;
if(G__12599){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12599.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__12599.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__12599);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__12599);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__12600 = c;
if(G__12600){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12600.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__12600.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__12600);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__12600);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4337__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4337__auto__)){
var and__4337__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4337__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4337__auto____$1;
}
} else {
return and__4337__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4337__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4337__auto__){
return cljs.core.some.call(null,((function (and__4337__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__12592_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__12592_SHARP_);
});})(and__4337__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4337__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_12601 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_12602 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_12603 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_12604 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_12605 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__12606 = c;
if(G__12606){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12606.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__12606.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__12606);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__12606);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__12607 = c;
if(G__12607){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12607.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__12607.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__12607);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__12607);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__12608 = c;
if(G__12608){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12608.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__12608.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__12608);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__12608);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_12605;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_12604;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_12603;

om.core._STAR_state_STAR_ = _STAR_state_STAR_12602;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_12601;
}}),(function (next_props,next_state){
var this$ = this;
var c_12627 = om.core.children.call(null,this$);
if((function (){var G__12609 = c_12627;
if(G__12609){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12609.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__12609.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__12609);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__12609);
}
})()){
var state_12628 = this$.state;
om.core.will_update.call(null,c_12627,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4349__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4349__auto__ = id;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__12610 = c;
if(G__12610){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12610.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__12610.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__12610);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__12610);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__12611 = c;
if(G__12611){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12611.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__12611.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__12611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__12611);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__12612 = c;
if(G__12612){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12612.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__12612.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__12612);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__12612);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_12629 = om.core.children.call(null,this$);
if((function (){var G__12613 = c_12629;
if(G__12613){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12613.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__12613.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__12613);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__12613);
}
})()){
om.core.will_mount.call(null,c_12629);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x12631 = obj;
x12631.om$core$ISetState$ = true;

x12631.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x12631){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4337__auto__ = !((app_state == null));
if(and__4337__auto__){
return render;
} else {
return and__4337__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x12631))
;

x12631.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x12631){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4337__auto__ = !((app_state == null));
if(and__4337__auto__){
return render;
} else {
return and__4337__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x12631))
;

x12631.om$core$IGetRenderState$ = true;

x12631.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x12631){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x12631))
;

x12631.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x12631){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x12631))
;

x12631.om$core$IGetState$ = true;

x12631.om$core$IGetState$_get_state$arity$1 = ((function (x12631){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4349__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state["__om_state"]);
}
});})(x12631))
;

x12631.om$core$IGetState$_get_state$arity$2 = ((function (x12631){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x12631))
;

return x12631;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4349__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4349__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__12632 = c;
if(G__12632){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12632.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__12632.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__12632);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__12632);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_12641 = om.core.children.call(null,this$);
if((function (){var G__12633 = c_12641;
if(G__12633){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12633.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__12633.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__12633);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__12633);
}
})()){
om.core.will_mount.call(null,c_12641);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__12634 = c;
if(G__12634){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12634.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__12634.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__12634);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__12634);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__12635 = cljs.core.seq.call(null,refs);
var chunk__12636 = null;
var count__12637 = (0);
var i__12638 = (0);
while(true){
if((i__12638 < count__12637)){
var ref = cljs.core._nth.call(null,chunk__12636,i__12638);
om.core.unobserve.call(null,this$,ref);

var G__12642 = seq__12635;
var G__12643 = chunk__12636;
var G__12644 = count__12637;
var G__12645 = (i__12638 + (1));
seq__12635 = G__12642;
chunk__12636 = G__12643;
count__12637 = G__12644;
i__12638 = G__12645;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__12635);
if(temp__4423__auto____$1){
var seq__12635__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12635__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__12635__$1);
var G__12646 = cljs.core.chunk_rest.call(null,seq__12635__$1);
var G__12647 = c__5134__auto__;
var G__12648 = cljs.core.count.call(null,c__5134__auto__);
var G__12649 = (0);
seq__12635 = G__12646;
chunk__12636 = G__12647;
count__12637 = G__12648;
i__12638 = G__12649;
continue;
} else {
var ref = cljs.core.first.call(null,seq__12635__$1);
om.core.unobserve.call(null,this$,ref);

var G__12650 = cljs.core.next.call(null,seq__12635__$1);
var G__12651 = null;
var G__12652 = (0);
var G__12653 = (0);
seq__12635 = G__12650;
chunk__12636 = G__12651;
count__12637 = G__12652;
i__12638 = G__12653;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_12654 = this$.props;
var c_12655 = om.core.children.call(null,this$);
if((function (){var G__12639 = c_12655;
if(G__12639){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12639.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__12639.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__12639);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__12639);
}
})()){
var state_12656 = this$.state;
om.core.will_update.call(null,c_12655,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__12640 = c;
if(G__12640){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12640.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__12640.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__12640);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__12640);
}
})()){
var state_12657 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4349__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x12659 = cljs.core.clj__GT_js.call(null,methods$);
x12659.om$core$ISetState$ = true;

x12659.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x12659){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4337__auto__ = !((gstate == null));
if(and__4337__auto__){
return render;
} else {
return and__4337__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x12659))
;

x12659.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x12659){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x12659))
;

x12659.om$core$IGetRenderState$ = true;

x12659.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x12659){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x12659))
;

x12659.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x12659){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x12659))
;

x12659.om$core$IGetState$ = true;

x12659.om$core$IGetState$_get_state$arity$1 = ((function (x12659){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4349__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x12659))
;

x12659.om$core$IGetState$_get_state$arity$2 = ((function (x12659){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x12659))
;

return x12659;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__12661 = x;
if(G__12661){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12661.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__12661.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__12661);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__12661);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__12663){
var vec__12664 = p__12663;
var k = cljs.core.nth.call(null,vec__12664,(0),null);
var v = cljs.core.nth.call(null,vec__12664,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__12665 = null;
var G__12665__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__12665__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__12665 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12665__2.call(this,self__,k);
case 3:
return G__12665__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12665.cljs$core$IFn$_invoke$arity$2 = G__12665__2;
G__12665.cljs$core$IFn$_invoke$arity$3 = G__12665__3;
return G__12665;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args12662){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12662)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__12667 = null;
var G__12667__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__12667__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__12667 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12667__2.call(this,self__,k);
case 3:
return G__12667__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12667.cljs$core$IFn$_invoke$arity$2 = G__12667__2;
G__12667.cljs$core$IFn$_invoke$arity$3 = G__12667__3;
return G__12667;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args12666){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12666)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x12669 = cljs.core.clone.call(null,val);
x12669.cljs$core$IDeref$ = true;

x12669.cljs$core$IDeref$_deref$arity$1 = ((function (x12669){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x12669))
;

x12669.om$core$ICursor$ = true;

x12669.om$core$ICursor$_path$arity$1 = ((function (x12669){
return (function (_){
var ___$1 = this;
return path;
});})(x12669))
;

x12669.om$core$ICursor$_state$arity$1 = ((function (x12669){
return (function (_){
var ___$1 = this;
return state;
});})(x12669))
;

x12669.om$core$ITransact$ = true;

x12669.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x12669){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x12669))
;

x12669.cljs$core$IEquiv$ = true;

x12669.cljs$core$IEquiv$_equiv$arity$2 = ((function (x12669){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x12669))
;

return x12669;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__12671 = arguments.length;
switch (G__12671) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if((function (){var G__12672 = val;
if(G__12672){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12672.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__12672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__12672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__12672);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__12673 = val;
if(G__12673){
var bit__5023__auto__ = (G__12673.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__5023__auto__) || (G__12673.cljs$core$ICloneable$)){
return true;
} else {
if((!G__12673.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__12673);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__12673);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__12676 = atom;
if(G__12676){
var bit__5023__auto__ = (G__12676.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5023__auto__) || (G__12676.cljs$core$IDeref$)){
return true;
} else {
if((!G__12676.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__12676);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__12676);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x12678 = cljs.core.clone.call(null,x);
x12678.cljs$core$ICloneable$ = true;

x12678.cljs$core$ICloneable$_clone$arity$1 = ((function (x12678){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x12678))
;

x12678.om$core$IAdapt$ = true;

x12678.om$core$IAdapt$_adapt$arity$2 = ((function (x12678){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x12678))
;

x12678.om$core$ICursorDerive$ = true;

x12678.om$core$ICursorDerive$_derive$arity$4 = ((function (x12678){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x12678))
;

x12678.om$core$ITransact$ = true;

x12678.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x12678){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x12678))
;

return x12678;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__12685 = cursor;
if(G__12685){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12685.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__12685.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__12685);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__12685);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x12686 = cljs.core.clone.call(null,cursor);
x12686.om$core$ICursorDerive$ = true;

x12686.om$core$ICursorDerive$_derive$arity$4 = ((function (x12686,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x12686,path,storage))
;

x12686.om$core$IOmRef$ = true;

x12686.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x12686,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x12686,path,storage))
;

x12686.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x12686,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x12686,path,storage))
;

x12686.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x12686,path,storage){
return (function (_){
var ___$1 = this;
var seq__12687 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__12688 = null;
var count__12689 = (0);
var i__12690 = (0);
while(true){
if((i__12690 < count__12689)){
var c = cljs.core._nth.call(null,chunk__12688,i__12690);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__12691 = seq__12687;
var G__12692 = chunk__12688;
var G__12693 = count__12689;
var G__12694 = (i__12690 + (1));
seq__12687 = G__12691;
chunk__12688 = G__12692;
count__12689 = G__12693;
i__12690 = G__12694;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12687);
if(temp__4423__auto__){
var seq__12687__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12687__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__12687__$1);
var G__12695 = cljs.core.chunk_rest.call(null,seq__12687__$1);
var G__12696 = c__5134__auto__;
var G__12697 = cljs.core.count.call(null,c__5134__auto__);
var G__12698 = (0);
seq__12687 = G__12695;
chunk__12688 = G__12696;
count__12689 = G__12697;
i__12690 = G__12698;
continue;
} else {
var c = cljs.core.first.call(null,seq__12687__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__12699 = cljs.core.next.call(null,seq__12687__$1);
var G__12700 = null;
var G__12701 = (0);
var G__12702 = (0);
seq__12687 = G__12699;
chunk__12688 = G__12700;
count__12689 = G__12701;
i__12690 = G__12702;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12686,path,storage))
;

x12686.om$core$IOmRef$_get_deps$arity$1 = ((function (x12686,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x12686,path,storage))
;

x12686.om$core$ITransact$ = true;

x12686.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x12686,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x12686,path,storage))
;

return x12686;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4349__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4349__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__12704 = arguments.length;
switch (G__12704) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__12705_12710 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__12706_12711 = null;
var count__12707_12712 = (0);
var i__12708_12713 = (0);
while(true){
if((i__12708_12713 < count__12707_12712)){
var f_12714 = cljs.core._nth.call(null,chunk__12706_12711,i__12708_12713);
f_12714.call(null);

var G__12715 = seq__12705_12710;
var G__12716 = chunk__12706_12711;
var G__12717 = count__12707_12712;
var G__12718 = (i__12708_12713 + (1));
seq__12705_12710 = G__12715;
chunk__12706_12711 = G__12716;
count__12707_12712 = G__12717;
i__12708_12713 = G__12718;
continue;
} else {
var temp__4423__auto___12719 = cljs.core.seq.call(null,seq__12705_12710);
if(temp__4423__auto___12719){
var seq__12705_12720__$1 = temp__4423__auto___12719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12705_12720__$1)){
var c__5134__auto___12721 = cljs.core.chunk_first.call(null,seq__12705_12720__$1);
var G__12722 = cljs.core.chunk_rest.call(null,seq__12705_12720__$1);
var G__12723 = c__5134__auto___12721;
var G__12724 = cljs.core.count.call(null,c__5134__auto___12721);
var G__12725 = (0);
seq__12705_12710 = G__12722;
chunk__12706_12711 = G__12723;
count__12707_12712 = G__12724;
i__12708_12713 = G__12725;
continue;
} else {
var f_12726 = cljs.core.first.call(null,seq__12705_12720__$1);
f_12726.call(null);

var G__12727 = cljs.core.next.call(null,seq__12705_12720__$1);
var G__12728 = null;
var G__12729 = (0);
var G__12730 = (0);
seq__12705_12710 = G__12727;
chunk__12706_12711 = G__12728;
count__12707_12712 = G__12729;
i__12708_12713 = G__12730;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4349__auto__ = (function (){var G__12737 = x;
if(G__12737){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12737.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__12737.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__12737);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__12737);
}
})();
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (function (){var G__12739 = x;
if(G__12739){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto____$1 = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto____$1)){
return or__4349__auto____$1;
} else {
return G__12739.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__12739.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__12739);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__12739);
}
})();
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
var G__12740 = x;
if(G__12740){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto____$2 = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto____$2)){
return or__4349__auto____$2;
} else {
return G__12740.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__12740.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__12740);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__12740);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__12742 = arguments.length;
switch (G__12742) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4349__auto__ = descriptor;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4349__auto____$1)){
return or__4349__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__12745 = arguments.length;
switch (G__12745) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__12748 = arguments.length;
switch (G__12748) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__12749 = m;
var map__12749__$1 = ((cljs.core.seq_QMARK_.call(null,map__12749))?cljs.core.apply.call(null,cljs.core.hash_map,map__12749):map__12749);
var key = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4421__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4421__auto__)){
var i = temp__4421__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4349__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__12749,map__12749__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__12749,map__12749__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__12749,map__12749__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__12749,map__12749__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4349__auto__ = rkey;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__12752 = arguments.length;
switch (G__12752) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__12755 = arguments.length;
switch (G__12755) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__12765 = state;
if(G__12765){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12765.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__12765.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__12765);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__12765);
}
})()){
} else {
var properties_12773 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_12774 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_12775 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x12766_12776 = state;
x12766_12776.om$core$IRootProperties$ = true;

x12766_12776.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_12773,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_12773,cljs.core.dissoc,id,k);
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_12773,cljs.core.dissoc,id);
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$IRootProperties$_get_property$arity$3 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_12773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$INotify$ = true;

x12766_12776.om$core$INotify$_listen_BANG_$arity$3 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_12774,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_12774,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$INotify$_notify_BANG_$arity$3 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__12767_12777 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_12774));
var chunk__12768_12778 = null;
var count__12769_12779 = (0);
var i__12770_12780 = (0);
while(true){
if((i__12770_12780 < count__12769_12779)){
var vec__12771_12781 = cljs.core._nth.call(null,chunk__12768_12778,i__12770_12780);
var __12782 = cljs.core.nth.call(null,vec__12771_12781,(0),null);
var f_12783 = cljs.core.nth.call(null,vec__12771_12781,(1),null);
f_12783.call(null,tx_data,root_cursor);

var G__12784 = seq__12767_12777;
var G__12785 = chunk__12768_12778;
var G__12786 = count__12769_12779;
var G__12787 = (i__12770_12780 + (1));
seq__12767_12777 = G__12784;
chunk__12768_12778 = G__12785;
count__12769_12779 = G__12786;
i__12770_12780 = G__12787;
continue;
} else {
var temp__4423__auto___12788 = cljs.core.seq.call(null,seq__12767_12777);
if(temp__4423__auto___12788){
var seq__12767_12789__$1 = temp__4423__auto___12788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12767_12789__$1)){
var c__5134__auto___12790 = cljs.core.chunk_first.call(null,seq__12767_12789__$1);
var G__12791 = cljs.core.chunk_rest.call(null,seq__12767_12789__$1);
var G__12792 = c__5134__auto___12790;
var G__12793 = cljs.core.count.call(null,c__5134__auto___12790);
var G__12794 = (0);
seq__12767_12777 = G__12791;
chunk__12768_12778 = G__12792;
count__12769_12779 = G__12793;
i__12770_12780 = G__12794;
continue;
} else {
var vec__12772_12795 = cljs.core.first.call(null,seq__12767_12789__$1);
var __12796 = cljs.core.nth.call(null,vec__12772_12795,(0),null);
var f_12797 = cljs.core.nth.call(null,vec__12772_12795,(1),null);
f_12797.call(null,tx_data,root_cursor);

var G__12798 = cljs.core.next.call(null,seq__12767_12789__$1);
var G__12799 = null;
var G__12800 = (0);
var G__12801 = (0);
seq__12767_12777 = G__12798;
chunk__12768_12778 = G__12799;
count__12769_12779 = G__12800;
i__12770_12780 = G__12801;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$IRenderQueue$ = true;

x12766_12776.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_12775);
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_12775),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_12775,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

x12766_12776.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x12766_12776,properties_12773,listeners_12774,render_queue_12775){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_12775,cljs.core.empty);
});})(x12766_12776,properties_12773,listeners_12774,render_queue_12775))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x12803 = cljs.core.clone.call(null,cursor);
x12803.cljs$core$ICloneable$ = true;

x12803.cljs$core$ICloneable$_clone$arity$1 = ((function (x12803){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x12803))
;

x12803.om$core$IAdapt$ = true;

x12803.om$core$IAdapt$_adapt$arity$2 = ((function (x12803){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x12803))
;

x12803.om$core$IRootKey$ = true;

x12803.om$core$IRootKey$_root_key$arity$1 = ((function (x12803){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x12803))
;

return x12803;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__12804){
var map__12867 = p__12804;
var map__12867__$1 = ((cljs.core.seq_QMARK_.call(null,map__12867))?cljs.core.apply.call(null,cljs.core.hash_map,map__12867):map__12867);
var options = map__12867__$1;
var target = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__12929 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__12929,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__12929,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__12868 = value;
if(G__12868){
var bit__5023__auto__ = (G__12868.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5023__auto__) || (G__12868.cljs$core$IAtom$)){
return true;
} else {
if((!G__12868.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__12868);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__12868);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4349__auto__ = adapt;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_12930 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_12899 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_12900 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_12901 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_12902 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_12902;

om.core._STAR_state_STAR_ = _STAR_state_STAR_12901;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_12900;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_12899;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_12930);
} else {
}
}

var queue_12931 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_12931)){
} else {
var seq__12903_12932 = cljs.core.seq.call(null,queue_12931);
var chunk__12904_12933 = null;
var count__12905_12934 = (0);
var i__12906_12935 = (0);
while(true){
if((i__12906_12935 < count__12905_12934)){
var c_12936 = cljs.core._nth.call(null,chunk__12904_12933,i__12906_12935);
if(cljs.core.truth_(c_12936.isMounted())){
var temp__4423__auto___12937 = (c_12936.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___12937)){
var next_props_12938 = temp__4423__auto___12937;
(c_12936.props["__om_cursor"] = next_props_12938);

(c_12936.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4349__auto__ = !((function (){var G__12908 = om.core.children.call(null,c_12936);
if(G__12908){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12908.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__12908.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__12908);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__12908);
}
})());
if(or__4349__auto__){
return or__4349__auto__;
} else {
return c_12936.shouldComponentUpdate(c_12936.props,c_12936.state);
}
})())){
c_12936.forceUpdate();
} else {
}
} else {
}

var G__12939 = seq__12903_12932;
var G__12940 = chunk__12904_12933;
var G__12941 = count__12905_12934;
var G__12942 = (i__12906_12935 + (1));
seq__12903_12932 = G__12939;
chunk__12904_12933 = G__12940;
count__12905_12934 = G__12941;
i__12906_12935 = G__12942;
continue;
} else {
var temp__4423__auto___12943 = cljs.core.seq.call(null,seq__12903_12932);
if(temp__4423__auto___12943){
var seq__12903_12944__$1 = temp__4423__auto___12943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12903_12944__$1)){
var c__5134__auto___12945 = cljs.core.chunk_first.call(null,seq__12903_12944__$1);
var G__12946 = cljs.core.chunk_rest.call(null,seq__12903_12944__$1);
var G__12947 = c__5134__auto___12945;
var G__12948 = cljs.core.count.call(null,c__5134__auto___12945);
var G__12949 = (0);
seq__12903_12932 = G__12946;
chunk__12904_12933 = G__12947;
count__12905_12934 = G__12948;
i__12906_12935 = G__12949;
continue;
} else {
var c_12950 = cljs.core.first.call(null,seq__12903_12944__$1);
if(cljs.core.truth_(c_12950.isMounted())){
var temp__4423__auto___12951__$1 = (c_12950.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___12951__$1)){
var next_props_12952 = temp__4423__auto___12951__$1;
(c_12950.props["__om_cursor"] = next_props_12952);

(c_12950.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4349__auto__ = !((function (){var G__12910 = om.core.children.call(null,c_12950);
if(G__12910){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__12910.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__12910.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__12910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__12910);
}
})());
if(or__4349__auto__){
return or__4349__auto__;
} else {
return c_12950.shouldComponentUpdate(c_12950.props,c_12950.state);
}
})())){
c_12950.forceUpdate();
} else {
}
} else {
}

var G__12953 = cljs.core.next.call(null,seq__12903_12944__$1);
var G__12954 = null;
var G__12955 = (0);
var G__12956 = (0);
seq__12903_12932 = G__12953;
chunk__12904_12933 = G__12954;
count__12905_12934 = G__12955;
i__12906_12935 = G__12956;
continue;
}
} else {
}
}
break;
}
}

var _refs_12957 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_12957)){
} else {
var seq__12911_12958 = cljs.core.seq.call(null,_refs_12957);
var chunk__12912_12959 = null;
var count__12913_12960 = (0);
var i__12914_12961 = (0);
while(true){
if((i__12914_12961 < count__12913_12960)){
var vec__12915_12962 = cljs.core._nth.call(null,chunk__12912_12959,i__12914_12961);
var path_12963__$1 = cljs.core.nth.call(null,vec__12915_12962,(0),null);
var cs_12964 = cljs.core.nth.call(null,vec__12915_12962,(1),null);
var cs_12965__$1 = cljs.core.deref.call(null,cs_12964);
var seq__12916_12966 = cljs.core.seq.call(null,cs_12965__$1);
var chunk__12917_12967 = null;
var count__12918_12968 = (0);
var i__12919_12969 = (0);
while(true){
if((i__12919_12969 < count__12918_12968)){
var vec__12920_12970 = cljs.core._nth.call(null,chunk__12917_12967,i__12919_12969);
var id_12971 = cljs.core.nth.call(null,vec__12920_12970,(0),null);
var c_12972 = cljs.core.nth.call(null,vec__12920_12970,(1),null);
if(cljs.core.truth_(c_12972.shouldComponentUpdate(c_12972.props,c_12972.state))){
c_12972.forceUpdate();
} else {
}

var G__12973 = seq__12916_12966;
var G__12974 = chunk__12917_12967;
var G__12975 = count__12918_12968;
var G__12976 = (i__12919_12969 + (1));
seq__12916_12966 = G__12973;
chunk__12917_12967 = G__12974;
count__12918_12968 = G__12975;
i__12919_12969 = G__12976;
continue;
} else {
var temp__4423__auto___12977 = cljs.core.seq.call(null,seq__12916_12966);
if(temp__4423__auto___12977){
var seq__12916_12978__$1 = temp__4423__auto___12977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12916_12978__$1)){
var c__5134__auto___12979 = cljs.core.chunk_first.call(null,seq__12916_12978__$1);
var G__12980 = cljs.core.chunk_rest.call(null,seq__12916_12978__$1);
var G__12981 = c__5134__auto___12979;
var G__12982 = cljs.core.count.call(null,c__5134__auto___12979);
var G__12983 = (0);
seq__12916_12966 = G__12980;
chunk__12917_12967 = G__12981;
count__12918_12968 = G__12982;
i__12919_12969 = G__12983;
continue;
} else {
var vec__12921_12984 = cljs.core.first.call(null,seq__12916_12978__$1);
var id_12985 = cljs.core.nth.call(null,vec__12921_12984,(0),null);
var c_12986 = cljs.core.nth.call(null,vec__12921_12984,(1),null);
if(cljs.core.truth_(c_12986.shouldComponentUpdate(c_12986.props,c_12986.state))){
c_12986.forceUpdate();
} else {
}

var G__12987 = cljs.core.next.call(null,seq__12916_12978__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12916_12966 = G__12987;
chunk__12917_12967 = G__12988;
count__12918_12968 = G__12989;
i__12919_12969 = G__12990;
continue;
}
} else {
}
}
break;
}

var G__12991 = seq__12911_12958;
var G__12992 = chunk__12912_12959;
var G__12993 = count__12913_12960;
var G__12994 = (i__12914_12961 + (1));
seq__12911_12958 = G__12991;
chunk__12912_12959 = G__12992;
count__12913_12960 = G__12993;
i__12914_12961 = G__12994;
continue;
} else {
var temp__4423__auto___12995 = cljs.core.seq.call(null,seq__12911_12958);
if(temp__4423__auto___12995){
var seq__12911_12996__$1 = temp__4423__auto___12995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12911_12996__$1)){
var c__5134__auto___12997 = cljs.core.chunk_first.call(null,seq__12911_12996__$1);
var G__12998 = cljs.core.chunk_rest.call(null,seq__12911_12996__$1);
var G__12999 = c__5134__auto___12997;
var G__13000 = cljs.core.count.call(null,c__5134__auto___12997);
var G__13001 = (0);
seq__12911_12958 = G__12998;
chunk__12912_12959 = G__12999;
count__12913_12960 = G__13000;
i__12914_12961 = G__13001;
continue;
} else {
var vec__12922_13002 = cljs.core.first.call(null,seq__12911_12996__$1);
var path_13003__$1 = cljs.core.nth.call(null,vec__12922_13002,(0),null);
var cs_13004 = cljs.core.nth.call(null,vec__12922_13002,(1),null);
var cs_13005__$1 = cljs.core.deref.call(null,cs_13004);
var seq__12923_13006 = cljs.core.seq.call(null,cs_13005__$1);
var chunk__12924_13007 = null;
var count__12925_13008 = (0);
var i__12926_13009 = (0);
while(true){
if((i__12926_13009 < count__12925_13008)){
var vec__12927_13010 = cljs.core._nth.call(null,chunk__12924_13007,i__12926_13009);
var id_13011 = cljs.core.nth.call(null,vec__12927_13010,(0),null);
var c_13012 = cljs.core.nth.call(null,vec__12927_13010,(1),null);
if(cljs.core.truth_(c_13012.shouldComponentUpdate(c_13012.props,c_13012.state))){
c_13012.forceUpdate();
} else {
}

var G__13013 = seq__12923_13006;
var G__13014 = chunk__12924_13007;
var G__13015 = count__12925_13008;
var G__13016 = (i__12926_13009 + (1));
seq__12923_13006 = G__13013;
chunk__12924_13007 = G__13014;
count__12925_13008 = G__13015;
i__12926_13009 = G__13016;
continue;
} else {
var temp__4423__auto___13017__$1 = cljs.core.seq.call(null,seq__12923_13006);
if(temp__4423__auto___13017__$1){
var seq__12923_13018__$1 = temp__4423__auto___13017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12923_13018__$1)){
var c__5134__auto___13019 = cljs.core.chunk_first.call(null,seq__12923_13018__$1);
var G__13020 = cljs.core.chunk_rest.call(null,seq__12923_13018__$1);
var G__13021 = c__5134__auto___13019;
var G__13022 = cljs.core.count.call(null,c__5134__auto___13019);
var G__13023 = (0);
seq__12923_13006 = G__13020;
chunk__12924_13007 = G__13021;
count__12925_13008 = G__13022;
i__12926_13009 = G__13023;
continue;
} else {
var vec__12928_13024 = cljs.core.first.call(null,seq__12923_13018__$1);
var id_13025 = cljs.core.nth.call(null,vec__12928_13024,(0),null);
var c_13026 = cljs.core.nth.call(null,vec__12928_13024,(1),null);
if(cljs.core.truth_(c_13026.shouldComponentUpdate(c_13026.props,c_13026.state))){
c_13026.forceUpdate();
} else {
}

var G__13027 = cljs.core.next.call(null,seq__12923_13018__$1);
var G__13028 = null;
var G__13029 = (0);
var G__13030 = (0);
seq__12923_13006 = G__13027;
chunk__12924_13007 = G__13028;
count__12925_13008 = G__13029;
i__12926_13009 = G__13030;
continue;
}
} else {
}
}
break;
}

var G__13031 = cljs.core.next.call(null,seq__12911_12996__$1);
var G__13032 = null;
var G__13033 = (0);
var G__13034 = (0);
seq__12911_12958 = G__13031;
chunk__12912_12959 = G__13032;
count__12913_12960 = G__13033;
i__12914_12961 = G__13034;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__12867,map__12867__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__13036 = x;
if(G__13036){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__13036.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__13036.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__13036);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__13036);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__13038 = arguments.length;
switch (G__13038) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__13041 = arguments.length;
switch (G__13041) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__13044 = cursor;
if(G__13044){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__13044.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__13044.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__13044);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__13044);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__13046 = arguments.length;
switch (G__13046) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4423__auto__ = owner.refs;
if(cljs.core.truth_(temp__4423__auto__)){
var refs = temp__4423__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__13049 = arguments.length;
switch (G__13049) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__13052 = arguments.length;
switch (G__13052) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__13055 = arguments.length;
switch (G__13055) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__13058 = arguments.length;
switch (G__13058) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__13061 = arguments.length;
switch (G__13061) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map