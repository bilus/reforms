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

om.core.IDisplayName = (function (){var obj8600 = {};
return obj8600;
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


om.core.IInitState = (function (){var obj8602 = {};
return obj8602;
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


om.core.IShouldUpdate = (function (){var obj8604 = {};
return obj8604;
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


om.core.IWillMount = (function (){var obj8606 = {};
return obj8606;
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


om.core.IDidMount = (function (){var obj8608 = {};
return obj8608;
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


om.core.IWillUnmount = (function (){var obj8610 = {};
return obj8610;
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


om.core.IWillUpdate = (function (){var obj8612 = {};
return obj8612;
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


om.core.IDidUpdate = (function (){var obj8614 = {};
return obj8614;
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


om.core.IWillReceiveProps = (function (){var obj8616 = {};
return obj8616;
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


om.core.IRender = (function (){var obj8618 = {};
return obj8618;
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


om.core.IRenderProps = (function (){var obj8620 = {};
return obj8620;
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


om.core.IRenderState = (function (){var obj8622 = {};
return obj8622;
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


om.core.ICheckState = (function (){var obj8624 = {};
return obj8624;
})();


om.core.IOmSwap = (function (){var obj8626 = {};
return obj8626;
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


om.core.IGetState = (function (){var obj8628 = {};
return obj8628;
})();

om.core._get_state = (function om$core$_get_state(){
var G__8630 = arguments.length;
switch (G__8630) {
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


om.core.IGetRenderState = (function (){var obj8633 = {};
return obj8633;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__8635 = arguments.length;
switch (G__8635) {
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


om.core.ISetState = (function (){var obj8638 = {};
return obj8638;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__8640 = arguments.length;
switch (G__8640) {
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


om.core.IRenderQueue = (function (){var obj8643 = {};
return obj8643;
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


om.core.IValue = (function (){var obj8645 = {};
return obj8645;
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

om.core.ICursor = (function (){var obj8647 = {};
return obj8647;
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


om.core.IToCursor = (function (){var obj8649 = {};
return obj8649;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__8651 = arguments.length;
switch (G__8651) {
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


om.core.ICursorDerive = (function (){var obj8654 = {};
return obj8654;
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

om.core.ITransact = (function (){var obj8656 = {};
return obj8656;
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


om.core.INotify = (function (){var obj8658 = {};
return obj8658;
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


om.core.IRootProperties = (function (){var obj8660 = {};
return obj8660;
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


om.core.IRootKey = (function (){var obj8662 = {};
return obj8662;
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


om.core.IAdapt = (function (){var obj8664 = {};
return obj8664;
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

om.core.IOmRef = (function (){var obj8666 = {};
return obj8666;
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
var ret = (((function (){var G__8668 = state;
if(G__8668){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8668.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__8668.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__8668);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__8668);
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
var G__8670 = x;
if(G__8670){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8670.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__8670.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__8670);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__8670);
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
var G__8672 = arguments.length;
switch (G__8672) {
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
var G__8673 = (x.props["__om_cursor"]);
var G__8673__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__8673,korks__$1):G__8673);
return G__8673__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__8676 = arguments.length;
switch (G__8676) {
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
var G__8679 = arguments.length;
switch (G__8679) {
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
var G__8682 = state;
(G__8682["__om_prev_state"] = (state["__om_state"]));

(G__8682["__om_state"] = pending_state);

(G__8682["__om_pending_state"] = null);

return G__8682;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__8684 = arguments.length;
switch (G__8684) {
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
if((function (){var G__8687 = c;
if(G__8687){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8687.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__8687.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__8687);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__8687);
}
})()){
var state_8708 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4349__auto__ = (state_8708["__om_prev_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state_8708["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__8688 = c;
if(G__8688){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8688.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__8688.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__8688);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__8688);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__8689 = cljs.core.seq.call(null,refs);
var chunk__8690 = null;
var count__8691 = (0);
var i__8692 = (0);
while(true){
if((i__8692 < count__8691)){
var ref = cljs.core._nth.call(null,chunk__8690,i__8692);
om.core.unobserve.call(null,this$,ref);

var G__8709 = seq__8689;
var G__8710 = chunk__8690;
var G__8711 = count__8691;
var G__8712 = (i__8692 + (1));
seq__8689 = G__8709;
chunk__8690 = G__8710;
count__8691 = G__8711;
i__8692 = G__8712;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__8689);
if(temp__4423__auto____$1){
var seq__8689__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8689__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__8689__$1);
var G__8713 = cljs.core.chunk_rest.call(null,seq__8689__$1);
var G__8714 = c__5134__auto__;
var G__8715 = cljs.core.count.call(null,c__5134__auto__);
var G__8716 = (0);
seq__8689 = G__8713;
chunk__8690 = G__8714;
count__8691 = G__8715;
i__8692 = G__8716;
continue;
} else {
var ref = cljs.core.first.call(null,seq__8689__$1);
om.core.unobserve.call(null,this$,ref);

var G__8717 = cljs.core.next.call(null,seq__8689__$1);
var G__8718 = null;
var G__8719 = (0);
var G__8720 = (0);
seq__8689 = G__8717;
chunk__8690 = G__8718;
count__8691 = G__8719;
i__8692 = G__8720;
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
if((function (){var G__8693 = c;
if(G__8693){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8693.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__8693.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__8693);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__8693);
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

if((function (){var G__8694 = c;
if(G__8694){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8694.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__8694.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__8694);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__8694);
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
return (function (p1__8686_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__8686_SHARP_);
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
var _STAR_parent_STAR_8695 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_8696 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_8697 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_8698 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_8699 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__8700 = c;
if(G__8700){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8700.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__8700.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__8700);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__8700);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__8701 = c;
if(G__8701){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8701.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__8701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__8701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__8701);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__8702 = c;
if(G__8702){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8702.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__8702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__8702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__8702);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_8699;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_8698;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_8697;

om.core._STAR_state_STAR_ = _STAR_state_STAR_8696;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_8695;
}}),(function (next_props,next_state){
var this$ = this;
var c_8721 = om.core.children.call(null,this$);
if((function (){var G__8703 = c_8721;
if(G__8703){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8703.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__8703.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__8703);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__8703);
}
})()){
var state_8722 = this$.state;
om.core.will_update.call(null,c_8721,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__8704 = c;
if(G__8704){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8704.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__8704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__8704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__8704);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__8705 = c;
if(G__8705){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8705.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__8705.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__8705);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__8705);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__8706 = c;
if(G__8706){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8706.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__8706.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__8706);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__8706);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_8723 = om.core.children.call(null,this$);
if((function (){var G__8707 = c_8723;
if(G__8707){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8707.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__8707.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__8707);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__8707);
}
})()){
om.core.will_mount.call(null,c_8723);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x8725 = obj;
x8725.om$core$ISetState$ = true;

x8725.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x8725){
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
});})(x8725))
;

x8725.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x8725){
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
});})(x8725))
;

x8725.om$core$IGetRenderState$ = true;

x8725.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x8725){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x8725))
;

x8725.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x8725){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x8725))
;

x8725.om$core$IGetState$ = true;

x8725.om$core$IGetState$_get_state$arity$1 = ((function (x8725){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4349__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state["__om_state"]);
}
});})(x8725))
;

x8725.om$core$IGetState$_get_state$arity$2 = ((function (x8725){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x8725))
;

return x8725;
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
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__8726 = c;
if(G__8726){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8726.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__8726.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__8726);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__8726);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_8735 = om.core.children.call(null,this$);
if((function (){var G__8727 = c_8735;
if(G__8727){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8727.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__8727.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__8727);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__8727);
}
})()){
om.core.will_mount.call(null,c_8735);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__8728 = c;
if(G__8728){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8728.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__8728.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__8728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__8728);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__8729 = cljs.core.seq.call(null,refs);
var chunk__8730 = null;
var count__8731 = (0);
var i__8732 = (0);
while(true){
if((i__8732 < count__8731)){
var ref = cljs.core._nth.call(null,chunk__8730,i__8732);
om.core.unobserve.call(null,this$,ref);

var G__8736 = seq__8729;
var G__8737 = chunk__8730;
var G__8738 = count__8731;
var G__8739 = (i__8732 + (1));
seq__8729 = G__8736;
chunk__8730 = G__8737;
count__8731 = G__8738;
i__8732 = G__8739;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__8729);
if(temp__4423__auto____$1){
var seq__8729__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8729__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__8729__$1);
var G__8740 = cljs.core.chunk_rest.call(null,seq__8729__$1);
var G__8741 = c__5134__auto__;
var G__8742 = cljs.core.count.call(null,c__5134__auto__);
var G__8743 = (0);
seq__8729 = G__8740;
chunk__8730 = G__8741;
count__8731 = G__8742;
i__8732 = G__8743;
continue;
} else {
var ref = cljs.core.first.call(null,seq__8729__$1);
om.core.unobserve.call(null,this$,ref);

var G__8744 = cljs.core.next.call(null,seq__8729__$1);
var G__8745 = null;
var G__8746 = (0);
var G__8747 = (0);
seq__8729 = G__8744;
chunk__8730 = G__8745;
count__8731 = G__8746;
i__8732 = G__8747;
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
var props_8748 = this$.props;
var c_8749 = om.core.children.call(null,this$);
if((function (){var G__8733 = c_8749;
if(G__8733){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8733.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__8733.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__8733);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__8733);
}
})()){
var state_8750 = this$.state;
om.core.will_update.call(null,c_8749,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
if((function (){var G__8734 = c;
if(G__8734){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8734.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__8734.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__8734);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__8734);
}
})()){
var state_8751 = this$.state;
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
var x8753 = cljs.core.clj__GT_js.call(null,methods$);
x8753.om$core$ISetState$ = true;

x8753.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x8753){
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
});})(x8753))
;

x8753.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x8753){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x8753))
;

x8753.om$core$IGetRenderState$ = true;

x8753.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x8753){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x8753))
;

x8753.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x8753){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x8753))
;

x8753.om$core$IGetState$ = true;

x8753.om$core$IGetState$_get_state$arity$1 = ((function (x8753){
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
});})(x8753))
;

x8753.om$core$IGetState$_get_state$arity$2 = ((function (x8753){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x8753))
;

return x8753;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__8755 = x;
if(G__8755){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8755.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__8755.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__8755);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__8755);
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
return (function (p__8757){
var vec__8758 = p__8757;
var k = cljs.core.nth.call(null,vec__8758,(0),null);
var v = cljs.core.nth.call(null,vec__8758,(1),null);
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
var G__8759 = null;
var G__8759__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__8759__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__8759 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8759__2.call(this,self__,k);
case 3:
return G__8759__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8759.cljs$core$IFn$_invoke$arity$2 = G__8759__2;
G__8759.cljs$core$IFn$_invoke$arity$3 = G__8759__3;
return G__8759;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args8756){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8756)));
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
var G__8761 = null;
var G__8761__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__8761__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__8761 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8761__2.call(this,self__,k);
case 3:
return G__8761__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8761.cljs$core$IFn$_invoke$arity$2 = G__8761__2;
G__8761.cljs$core$IFn$_invoke$arity$3 = G__8761__3;
return G__8761;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args8760){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8760)));
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
var x8763 = cljs.core.clone.call(null,val);
x8763.cljs$core$IDeref$ = true;

x8763.cljs$core$IDeref$_deref$arity$1 = ((function (x8763){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x8763))
;

x8763.om$core$ICursor$ = true;

x8763.om$core$ICursor$_path$arity$1 = ((function (x8763){
return (function (_){
var ___$1 = this;
return path;
});})(x8763))
;

x8763.om$core$ICursor$_state$arity$1 = ((function (x8763){
return (function (_){
var ___$1 = this;
return state;
});})(x8763))
;

x8763.om$core$ITransact$ = true;

x8763.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x8763){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x8763))
;

x8763.cljs$core$IEquiv$ = true;

x8763.cljs$core$IEquiv$_equiv$arity$2 = ((function (x8763){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x8763))
;

return x8763;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__8765 = arguments.length;
switch (G__8765) {
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
if((function (){var G__8766 = val;
if(G__8766){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8766.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__8766.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__8766);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__8766);
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
if((function (){var G__8767 = val;
if(G__8767){
var bit__5023__auto__ = (G__8767.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__5023__auto__) || (G__8767.cljs$core$ICloneable$)){
return true;
} else {
if((!G__8767.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__8767);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__8767);
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
if((function (){var G__8770 = atom;
if(G__8770){
var bit__5023__auto__ = (G__8770.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5023__auto__) || (G__8770.cljs$core$IDeref$)){
return true;
} else {
if((!G__8770.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8770);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8770);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x8772 = cljs.core.clone.call(null,x);
x8772.cljs$core$ICloneable$ = true;

x8772.cljs$core$ICloneable$_clone$arity$1 = ((function (x8772){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x8772))
;

x8772.om$core$IAdapt$ = true;

x8772.om$core$IAdapt$_adapt$arity$2 = ((function (x8772){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x8772))
;

x8772.om$core$ICursorDerive$ = true;

x8772.om$core$ICursorDerive$_derive$arity$4 = ((function (x8772){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x8772))
;

x8772.om$core$ITransact$ = true;

x8772.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x8772){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x8772))
;

return x8772;
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

if((function (){var G__8779 = cursor;
if(G__8779){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8779.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__8779.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__8779);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__8779);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x8780 = cljs.core.clone.call(null,cursor);
x8780.om$core$ICursorDerive$ = true;

x8780.om$core$ICursorDerive$_derive$arity$4 = ((function (x8780,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x8780,path,storage))
;

x8780.om$core$IOmRef$ = true;

x8780.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x8780,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x8780,path,storage))
;

x8780.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x8780,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x8780,path,storage))
;

x8780.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x8780,path,storage){
return (function (_){
var ___$1 = this;
var seq__8781 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__8782 = null;
var count__8783 = (0);
var i__8784 = (0);
while(true){
if((i__8784 < count__8783)){
var c = cljs.core._nth.call(null,chunk__8782,i__8784);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__8785 = seq__8781;
var G__8786 = chunk__8782;
var G__8787 = count__8783;
var G__8788 = (i__8784 + (1));
seq__8781 = G__8785;
chunk__8782 = G__8786;
count__8783 = G__8787;
i__8784 = G__8788;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__8781);
if(temp__4423__auto__){
var seq__8781__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8781__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__8781__$1);
var G__8789 = cljs.core.chunk_rest.call(null,seq__8781__$1);
var G__8790 = c__5134__auto__;
var G__8791 = cljs.core.count.call(null,c__5134__auto__);
var G__8792 = (0);
seq__8781 = G__8789;
chunk__8782 = G__8790;
count__8783 = G__8791;
i__8784 = G__8792;
continue;
} else {
var c = cljs.core.first.call(null,seq__8781__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__8793 = cljs.core.next.call(null,seq__8781__$1);
var G__8794 = null;
var G__8795 = (0);
var G__8796 = (0);
seq__8781 = G__8793;
chunk__8782 = G__8794;
count__8783 = G__8795;
i__8784 = G__8796;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8780,path,storage))
;

x8780.om$core$IOmRef$_get_deps$arity$1 = ((function (x8780,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x8780,path,storage))
;

x8780.om$core$ITransact$ = true;

x8780.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x8780,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x8780,path,storage))
;

return x8780;
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
var G__8798 = arguments.length;
switch (G__8798) {
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

var seq__8799_8804 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__8800_8805 = null;
var count__8801_8806 = (0);
var i__8802_8807 = (0);
while(true){
if((i__8802_8807 < count__8801_8806)){
var f_8808 = cljs.core._nth.call(null,chunk__8800_8805,i__8802_8807);
f_8808.call(null);

var G__8809 = seq__8799_8804;
var G__8810 = chunk__8800_8805;
var G__8811 = count__8801_8806;
var G__8812 = (i__8802_8807 + (1));
seq__8799_8804 = G__8809;
chunk__8800_8805 = G__8810;
count__8801_8806 = G__8811;
i__8802_8807 = G__8812;
continue;
} else {
var temp__4423__auto___8813 = cljs.core.seq.call(null,seq__8799_8804);
if(temp__4423__auto___8813){
var seq__8799_8814__$1 = temp__4423__auto___8813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8799_8814__$1)){
var c__5134__auto___8815 = cljs.core.chunk_first.call(null,seq__8799_8814__$1);
var G__8816 = cljs.core.chunk_rest.call(null,seq__8799_8814__$1);
var G__8817 = c__5134__auto___8815;
var G__8818 = cljs.core.count.call(null,c__5134__auto___8815);
var G__8819 = (0);
seq__8799_8804 = G__8816;
chunk__8800_8805 = G__8817;
count__8801_8806 = G__8818;
i__8802_8807 = G__8819;
continue;
} else {
var f_8820 = cljs.core.first.call(null,seq__8799_8814__$1);
f_8820.call(null);

var G__8821 = cljs.core.next.call(null,seq__8799_8814__$1);
var G__8822 = null;
var G__8823 = (0);
var G__8824 = (0);
seq__8799_8804 = G__8821;
chunk__8800_8805 = G__8822;
count__8801_8806 = G__8823;
i__8802_8807 = G__8824;
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
if((function (){var or__4349__auto__ = (function (){var G__8831 = x;
if(G__8831){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8831.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__8831.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__8831);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__8831);
}
})();
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (function (){var G__8833 = x;
if(G__8833){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto____$1 = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto____$1)){
return or__4349__auto____$1;
} else {
return G__8833.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__8833.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__8833);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__8833);
}
})();
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
var G__8834 = x;
if(G__8834){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto____$2 = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto____$2)){
return or__4349__auto____$2;
} else {
return G__8834.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__8834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__8834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__8834);
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
var G__8836 = arguments.length;
switch (G__8836) {
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
var G__8839 = arguments.length;
switch (G__8839) {
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
var G__8842 = arguments.length;
switch (G__8842) {
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
var map__8843 = m;
var map__8843__$1 = ((cljs.core.seq_QMARK_.call(null,map__8843))?cljs.core.apply.call(null,cljs.core.hash_map,map__8843):map__8843);
var key = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__8843__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
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
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__8843,map__8843__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__8843,map__8843__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__8843,map__8843__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__8843,map__8843__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
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
var G__8846 = arguments.length;
switch (G__8846) {
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
var G__8849 = arguments.length;
switch (G__8849) {
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
if((function (){var G__8859 = state;
if(G__8859){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__8859.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__8859.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__8859);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__8859);
}
})()){
} else {
var properties_8867 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_8868 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_8869 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x8860_8870 = state;
x8860_8870.om$core$IRootProperties$ = true;

x8860_8870.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_8867,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_8867,cljs.core.dissoc,id,k);
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_8867,cljs.core.dissoc,id);
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$IRootProperties$_get_property$arity$3 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_8867),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$INotify$ = true;

x8860_8870.om$core$INotify$_listen_BANG_$arity$3 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_8868,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_8868,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$INotify$_notify_BANG_$arity$3 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__8861_8871 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_8868));
var chunk__8862_8872 = null;
var count__8863_8873 = (0);
var i__8864_8874 = (0);
while(true){
if((i__8864_8874 < count__8863_8873)){
var vec__8865_8875 = cljs.core._nth.call(null,chunk__8862_8872,i__8864_8874);
var __8876 = cljs.core.nth.call(null,vec__8865_8875,(0),null);
var f_8877 = cljs.core.nth.call(null,vec__8865_8875,(1),null);
f_8877.call(null,tx_data,root_cursor);

var G__8878 = seq__8861_8871;
var G__8879 = chunk__8862_8872;
var G__8880 = count__8863_8873;
var G__8881 = (i__8864_8874 + (1));
seq__8861_8871 = G__8878;
chunk__8862_8872 = G__8879;
count__8863_8873 = G__8880;
i__8864_8874 = G__8881;
continue;
} else {
var temp__4423__auto___8882 = cljs.core.seq.call(null,seq__8861_8871);
if(temp__4423__auto___8882){
var seq__8861_8883__$1 = temp__4423__auto___8882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8861_8883__$1)){
var c__5134__auto___8884 = cljs.core.chunk_first.call(null,seq__8861_8883__$1);
var G__8885 = cljs.core.chunk_rest.call(null,seq__8861_8883__$1);
var G__8886 = c__5134__auto___8884;
var G__8887 = cljs.core.count.call(null,c__5134__auto___8884);
var G__8888 = (0);
seq__8861_8871 = G__8885;
chunk__8862_8872 = G__8886;
count__8863_8873 = G__8887;
i__8864_8874 = G__8888;
continue;
} else {
var vec__8866_8889 = cljs.core.first.call(null,seq__8861_8883__$1);
var __8890 = cljs.core.nth.call(null,vec__8866_8889,(0),null);
var f_8891 = cljs.core.nth.call(null,vec__8866_8889,(1),null);
f_8891.call(null,tx_data,root_cursor);

var G__8892 = cljs.core.next.call(null,seq__8861_8883__$1);
var G__8893 = null;
var G__8894 = (0);
var G__8895 = (0);
seq__8861_8871 = G__8892;
chunk__8862_8872 = G__8893;
count__8863_8873 = G__8894;
i__8864_8874 = G__8895;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$IRenderQueue$ = true;

x8860_8870.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_8869);
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_8869),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_8869,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

x8860_8870.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x8860_8870,properties_8867,listeners_8868,render_queue_8869){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_8869,cljs.core.empty);
});})(x8860_8870,properties_8867,listeners_8868,render_queue_8869))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x8897 = cljs.core.clone.call(null,cursor);
x8897.cljs$core$ICloneable$ = true;

x8897.cljs$core$ICloneable$_clone$arity$1 = ((function (x8897){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x8897))
;

x8897.om$core$IAdapt$ = true;

x8897.om$core$IAdapt$_adapt$arity$2 = ((function (x8897){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x8897))
;

x8897.om$core$IRootKey$ = true;

x8897.om$core$IRootKey$_root_key$arity$1 = ((function (x8897){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x8897))
;

return x8897;
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
om.core.root = (function om$core$root(f,value,p__8898){
var map__8961 = p__8898;
var map__8961__$1 = ((cljs.core.seq_QMARK_.call(null,map__8961))?cljs.core.apply.call(null,cljs.core.hash_map,map__8961):map__8961);
var options = map__8961__$1;
var target = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__9023 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__9023,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__9023,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__8962 = value;
if(G__8962){
var bit__5023__auto__ = (G__8962.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5023__auto__) || (G__8962.cljs$core$IAtom$)){
return true;
} else {
if((!G__8962.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__8962);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__8962);
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
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_9024 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_8993 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_8994 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_8995 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_8996 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_8996;

om.core._STAR_state_STAR_ = _STAR_state_STAR_8995;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_8994;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_8993;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_9024);
} else {
}
}

var queue_9025 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_9025)){
} else {
var seq__8997_9026 = cljs.core.seq.call(null,queue_9025);
var chunk__8998_9027 = null;
var count__8999_9028 = (0);
var i__9000_9029 = (0);
while(true){
if((i__9000_9029 < count__8999_9028)){
var c_9030 = cljs.core._nth.call(null,chunk__8998_9027,i__9000_9029);
if(cljs.core.truth_(c_9030.isMounted())){
var temp__4423__auto___9031 = (c_9030.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___9031)){
var next_props_9032 = temp__4423__auto___9031;
(c_9030.props["__om_cursor"] = next_props_9032);

(c_9030.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4349__auto__ = !((function (){var G__9002 = om.core.children.call(null,c_9030);
if(G__9002){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__9002.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__9002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__9002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__9002);
}
})());
if(or__4349__auto__){
return or__4349__auto__;
} else {
return c_9030.shouldComponentUpdate(c_9030.props,c_9030.state);
}
})())){
c_9030.forceUpdate();
} else {
}
} else {
}

var G__9033 = seq__8997_9026;
var G__9034 = chunk__8998_9027;
var G__9035 = count__8999_9028;
var G__9036 = (i__9000_9029 + (1));
seq__8997_9026 = G__9033;
chunk__8998_9027 = G__9034;
count__8999_9028 = G__9035;
i__9000_9029 = G__9036;
continue;
} else {
var temp__4423__auto___9037 = cljs.core.seq.call(null,seq__8997_9026);
if(temp__4423__auto___9037){
var seq__8997_9038__$1 = temp__4423__auto___9037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8997_9038__$1)){
var c__5134__auto___9039 = cljs.core.chunk_first.call(null,seq__8997_9038__$1);
var G__9040 = cljs.core.chunk_rest.call(null,seq__8997_9038__$1);
var G__9041 = c__5134__auto___9039;
var G__9042 = cljs.core.count.call(null,c__5134__auto___9039);
var G__9043 = (0);
seq__8997_9026 = G__9040;
chunk__8998_9027 = G__9041;
count__8999_9028 = G__9042;
i__9000_9029 = G__9043;
continue;
} else {
var c_9044 = cljs.core.first.call(null,seq__8997_9038__$1);
if(cljs.core.truth_(c_9044.isMounted())){
var temp__4423__auto___9045__$1 = (c_9044.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___9045__$1)){
var next_props_9046 = temp__4423__auto___9045__$1;
(c_9044.props["__om_cursor"] = next_props_9046);

(c_9044.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4349__auto__ = !((function (){var G__9004 = om.core.children.call(null,c_9044);
if(G__9004){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__9004.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__9004.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__9004);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__9004);
}
})());
if(or__4349__auto__){
return or__4349__auto__;
} else {
return c_9044.shouldComponentUpdate(c_9044.props,c_9044.state);
}
})())){
c_9044.forceUpdate();
} else {
}
} else {
}

var G__9047 = cljs.core.next.call(null,seq__8997_9038__$1);
var G__9048 = null;
var G__9049 = (0);
var G__9050 = (0);
seq__8997_9026 = G__9047;
chunk__8998_9027 = G__9048;
count__8999_9028 = G__9049;
i__9000_9029 = G__9050;
continue;
}
} else {
}
}
break;
}
}

var _refs_9051 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_9051)){
} else {
var seq__9005_9052 = cljs.core.seq.call(null,_refs_9051);
var chunk__9006_9053 = null;
var count__9007_9054 = (0);
var i__9008_9055 = (0);
while(true){
if((i__9008_9055 < count__9007_9054)){
var vec__9009_9056 = cljs.core._nth.call(null,chunk__9006_9053,i__9008_9055);
var path_9057__$1 = cljs.core.nth.call(null,vec__9009_9056,(0),null);
var cs_9058 = cljs.core.nth.call(null,vec__9009_9056,(1),null);
var cs_9059__$1 = cljs.core.deref.call(null,cs_9058);
var seq__9010_9060 = cljs.core.seq.call(null,cs_9059__$1);
var chunk__9011_9061 = null;
var count__9012_9062 = (0);
var i__9013_9063 = (0);
while(true){
if((i__9013_9063 < count__9012_9062)){
var vec__9014_9064 = cljs.core._nth.call(null,chunk__9011_9061,i__9013_9063);
var id_9065 = cljs.core.nth.call(null,vec__9014_9064,(0),null);
var c_9066 = cljs.core.nth.call(null,vec__9014_9064,(1),null);
if(cljs.core.truth_(c_9066.shouldComponentUpdate(c_9066.props,c_9066.state))){
c_9066.forceUpdate();
} else {
}

var G__9067 = seq__9010_9060;
var G__9068 = chunk__9011_9061;
var G__9069 = count__9012_9062;
var G__9070 = (i__9013_9063 + (1));
seq__9010_9060 = G__9067;
chunk__9011_9061 = G__9068;
count__9012_9062 = G__9069;
i__9013_9063 = G__9070;
continue;
} else {
var temp__4423__auto___9071 = cljs.core.seq.call(null,seq__9010_9060);
if(temp__4423__auto___9071){
var seq__9010_9072__$1 = temp__4423__auto___9071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9010_9072__$1)){
var c__5134__auto___9073 = cljs.core.chunk_first.call(null,seq__9010_9072__$1);
var G__9074 = cljs.core.chunk_rest.call(null,seq__9010_9072__$1);
var G__9075 = c__5134__auto___9073;
var G__9076 = cljs.core.count.call(null,c__5134__auto___9073);
var G__9077 = (0);
seq__9010_9060 = G__9074;
chunk__9011_9061 = G__9075;
count__9012_9062 = G__9076;
i__9013_9063 = G__9077;
continue;
} else {
var vec__9015_9078 = cljs.core.first.call(null,seq__9010_9072__$1);
var id_9079 = cljs.core.nth.call(null,vec__9015_9078,(0),null);
var c_9080 = cljs.core.nth.call(null,vec__9015_9078,(1),null);
if(cljs.core.truth_(c_9080.shouldComponentUpdate(c_9080.props,c_9080.state))){
c_9080.forceUpdate();
} else {
}

var G__9081 = cljs.core.next.call(null,seq__9010_9072__$1);
var G__9082 = null;
var G__9083 = (0);
var G__9084 = (0);
seq__9010_9060 = G__9081;
chunk__9011_9061 = G__9082;
count__9012_9062 = G__9083;
i__9013_9063 = G__9084;
continue;
}
} else {
}
}
break;
}

var G__9085 = seq__9005_9052;
var G__9086 = chunk__9006_9053;
var G__9087 = count__9007_9054;
var G__9088 = (i__9008_9055 + (1));
seq__9005_9052 = G__9085;
chunk__9006_9053 = G__9086;
count__9007_9054 = G__9087;
i__9008_9055 = G__9088;
continue;
} else {
var temp__4423__auto___9089 = cljs.core.seq.call(null,seq__9005_9052);
if(temp__4423__auto___9089){
var seq__9005_9090__$1 = temp__4423__auto___9089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9005_9090__$1)){
var c__5134__auto___9091 = cljs.core.chunk_first.call(null,seq__9005_9090__$1);
var G__9092 = cljs.core.chunk_rest.call(null,seq__9005_9090__$1);
var G__9093 = c__5134__auto___9091;
var G__9094 = cljs.core.count.call(null,c__5134__auto___9091);
var G__9095 = (0);
seq__9005_9052 = G__9092;
chunk__9006_9053 = G__9093;
count__9007_9054 = G__9094;
i__9008_9055 = G__9095;
continue;
} else {
var vec__9016_9096 = cljs.core.first.call(null,seq__9005_9090__$1);
var path_9097__$1 = cljs.core.nth.call(null,vec__9016_9096,(0),null);
var cs_9098 = cljs.core.nth.call(null,vec__9016_9096,(1),null);
var cs_9099__$1 = cljs.core.deref.call(null,cs_9098);
var seq__9017_9100 = cljs.core.seq.call(null,cs_9099__$1);
var chunk__9018_9101 = null;
var count__9019_9102 = (0);
var i__9020_9103 = (0);
while(true){
if((i__9020_9103 < count__9019_9102)){
var vec__9021_9104 = cljs.core._nth.call(null,chunk__9018_9101,i__9020_9103);
var id_9105 = cljs.core.nth.call(null,vec__9021_9104,(0),null);
var c_9106 = cljs.core.nth.call(null,vec__9021_9104,(1),null);
if(cljs.core.truth_(c_9106.shouldComponentUpdate(c_9106.props,c_9106.state))){
c_9106.forceUpdate();
} else {
}

var G__9107 = seq__9017_9100;
var G__9108 = chunk__9018_9101;
var G__9109 = count__9019_9102;
var G__9110 = (i__9020_9103 + (1));
seq__9017_9100 = G__9107;
chunk__9018_9101 = G__9108;
count__9019_9102 = G__9109;
i__9020_9103 = G__9110;
continue;
} else {
var temp__4423__auto___9111__$1 = cljs.core.seq.call(null,seq__9017_9100);
if(temp__4423__auto___9111__$1){
var seq__9017_9112__$1 = temp__4423__auto___9111__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9017_9112__$1)){
var c__5134__auto___9113 = cljs.core.chunk_first.call(null,seq__9017_9112__$1);
var G__9114 = cljs.core.chunk_rest.call(null,seq__9017_9112__$1);
var G__9115 = c__5134__auto___9113;
var G__9116 = cljs.core.count.call(null,c__5134__auto___9113);
var G__9117 = (0);
seq__9017_9100 = G__9114;
chunk__9018_9101 = G__9115;
count__9019_9102 = G__9116;
i__9020_9103 = G__9117;
continue;
} else {
var vec__9022_9118 = cljs.core.first.call(null,seq__9017_9112__$1);
var id_9119 = cljs.core.nth.call(null,vec__9022_9118,(0),null);
var c_9120 = cljs.core.nth.call(null,vec__9022_9118,(1),null);
if(cljs.core.truth_(c_9120.shouldComponentUpdate(c_9120.props,c_9120.state))){
c_9120.forceUpdate();
} else {
}

var G__9121 = cljs.core.next.call(null,seq__9017_9112__$1);
var G__9122 = null;
var G__9123 = (0);
var G__9124 = (0);
seq__9017_9100 = G__9121;
chunk__9018_9101 = G__9122;
count__9019_9102 = G__9123;
i__9020_9103 = G__9124;
continue;
}
} else {
}
}
break;
}

var G__9125 = cljs.core.next.call(null,seq__9005_9090__$1);
var G__9126 = null;
var G__9127 = (0);
var G__9128 = (0);
seq__9005_9052 = G__9125;
chunk__9006_9053 = G__9126;
count__9007_9054 = G__9127;
i__9008_9055 = G__9128;
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
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
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
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__8961,map__8961__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
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
var G__9130 = x;
if(G__9130){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__9130.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__9130.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__9130);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__9130);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__9132 = arguments.length;
switch (G__9132) {
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
var G__9135 = arguments.length;
switch (G__9135) {
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

var key = (((function (){var G__9138 = cursor;
if(G__9138){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__9138.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__9138.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__9138);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__9138);
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
var G__9140 = arguments.length;
switch (G__9140) {
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
var G__9143 = arguments.length;
switch (G__9143) {
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
var G__9146 = arguments.length;
switch (G__9146) {
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
var G__9149 = arguments.length;
switch (G__9149) {
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
var G__9152 = arguments.length;
switch (G__9152) {
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
var G__9155 = arguments.length;
switch (G__9155) {
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