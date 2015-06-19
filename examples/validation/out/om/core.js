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

om.core.IDisplayName = (function (){var obj38816 = {};
return obj38816;
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


om.core.IInitState = (function (){var obj38818 = {};
return obj38818;
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


om.core.IShouldUpdate = (function (){var obj38820 = {};
return obj38820;
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


om.core.IWillMount = (function (){var obj38822 = {};
return obj38822;
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


om.core.IDidMount = (function (){var obj38824 = {};
return obj38824;
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


om.core.IWillUnmount = (function (){var obj38826 = {};
return obj38826;
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


om.core.IWillUpdate = (function (){var obj38828 = {};
return obj38828;
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


om.core.IDidUpdate = (function (){var obj38830 = {};
return obj38830;
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


om.core.IWillReceiveProps = (function (){var obj38832 = {};
return obj38832;
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


om.core.IRender = (function (){var obj38834 = {};
return obj38834;
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


om.core.IRenderProps = (function (){var obj38836 = {};
return obj38836;
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


om.core.IRenderState = (function (){var obj38838 = {};
return obj38838;
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


om.core.ICheckState = (function (){var obj38840 = {};
return obj38840;
})();


om.core.IOmSwap = (function (){var obj38842 = {};
return obj38842;
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


om.core.IGetState = (function (){var obj38844 = {};
return obj38844;
})();

om.core._get_state = (function om$core$_get_state(){
var G__38846 = arguments.length;
switch (G__38846) {
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


om.core.IGetRenderState = (function (){var obj38849 = {};
return obj38849;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__38851 = arguments.length;
switch (G__38851) {
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


om.core.ISetState = (function (){var obj38854 = {};
return obj38854;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__38856 = arguments.length;
switch (G__38856) {
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


om.core.IRenderQueue = (function (){var obj38859 = {};
return obj38859;
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


om.core.IValue = (function (){var obj38861 = {};
return obj38861;
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

om.core.ICursor = (function (){var obj38863 = {};
return obj38863;
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


om.core.IToCursor = (function (){var obj38865 = {};
return obj38865;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__38867 = arguments.length;
switch (G__38867) {
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


om.core.ICursorDerive = (function (){var obj38870 = {};
return obj38870;
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

om.core.ITransact = (function (){var obj38872 = {};
return obj38872;
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


om.core.INotify = (function (){var obj38874 = {};
return obj38874;
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


om.core.IRootProperties = (function (){var obj38876 = {};
return obj38876;
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


om.core.IRootKey = (function (){var obj38878 = {};
return obj38878;
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


om.core.IAdapt = (function (){var obj38880 = {};
return obj38880;
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

om.core.IOmRef = (function (){var obj38882 = {};
return obj38882;
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
var ret = (((function (){var G__38884 = state;
if(G__38884){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38884.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__38884.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__38884);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__38884);
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
var G__38886 = x;
if(G__38886){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38886.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__38886.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__38886);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__38886);
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
var G__38888 = arguments.length;
switch (G__38888) {
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
var G__38889 = (x.props["__om_cursor"]);
var G__38889__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__38889,korks__$1):G__38889);
return G__38889__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__38892 = arguments.length;
switch (G__38892) {
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
var G__38895 = arguments.length;
switch (G__38895) {
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
var G__38898 = state;
(G__38898["__om_prev_state"] = (state["__om_state"]));

(G__38898["__om_state"] = pending_state);

(G__38898["__om_pending_state"] = null);

return G__38898;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__38900 = arguments.length;
switch (G__38900) {
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
if((function (){var G__38903 = c;
if(G__38903){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38903.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__38903.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__38903);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__38903);
}
})()){
var state_38924 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4349__auto__ = (state_38924["__om_prev_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state_38924["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__38904 = c;
if(G__38904){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38904.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__38904.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__38904);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__38904);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__38905 = cljs.core.seq.call(null,refs);
var chunk__38906 = null;
var count__38907 = (0);
var i__38908 = (0);
while(true){
if((i__38908 < count__38907)){
var ref = cljs.core._nth.call(null,chunk__38906,i__38908);
om.core.unobserve.call(null,this$,ref);

var G__38925 = seq__38905;
var G__38926 = chunk__38906;
var G__38927 = count__38907;
var G__38928 = (i__38908 + (1));
seq__38905 = G__38925;
chunk__38906 = G__38926;
count__38907 = G__38927;
i__38908 = G__38928;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__38905);
if(temp__4423__auto____$1){
var seq__38905__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38905__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__38905__$1);
var G__38929 = cljs.core.chunk_rest.call(null,seq__38905__$1);
var G__38930 = c__5134__auto__;
var G__38931 = cljs.core.count.call(null,c__5134__auto__);
var G__38932 = (0);
seq__38905 = G__38929;
chunk__38906 = G__38930;
count__38907 = G__38931;
i__38908 = G__38932;
continue;
} else {
var ref = cljs.core.first.call(null,seq__38905__$1);
om.core.unobserve.call(null,this$,ref);

var G__38933 = cljs.core.next.call(null,seq__38905__$1);
var G__38934 = null;
var G__38935 = (0);
var G__38936 = (0);
seq__38905 = G__38933;
chunk__38906 = G__38934;
count__38907 = G__38935;
i__38908 = G__38936;
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
if((function (){var G__38909 = c;
if(G__38909){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38909.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__38909.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__38909);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__38909);
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

if((function (){var G__38910 = c;
if(G__38910){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38910.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__38910.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__38910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__38910);
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
return (function (p1__38902_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__38902_SHARP_);
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
var _STAR_parent_STAR_38911 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_38912 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_38913 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_38914 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_38915 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__38916 = c;
if(G__38916){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38916.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__38916.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__38916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__38916);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__38917 = c;
if(G__38917){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38917.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__38917.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__38917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__38917);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__38918 = c;
if(G__38918){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38918.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__38918.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__38918);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__38918);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_38915;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_38914;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_38913;

om.core._STAR_state_STAR_ = _STAR_state_STAR_38912;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_38911;
}}),(function (next_props,next_state){
var this$ = this;
var c_38937 = om.core.children.call(null,this$);
if((function (){var G__38919 = c_38937;
if(G__38919){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38919.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__38919.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__38919);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__38919);
}
})()){
var state_38938 = this$.state;
om.core.will_update.call(null,c_38937,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__38920 = c;
if(G__38920){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38920.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__38920.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__38920);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__38920);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__38921 = c;
if(G__38921){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38921.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__38921.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__38921);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__38921);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__38922 = c;
if(G__38922){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38922.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__38922.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__38922);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__38922);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_38939 = om.core.children.call(null,this$);
if((function (){var G__38923 = c_38939;
if(G__38923){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38923.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__38923.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__38923);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__38923);
}
})()){
om.core.will_mount.call(null,c_38939);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x38941 = obj;
x38941.om$core$ISetState$ = true;

x38941.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x38941){
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
});})(x38941))
;

x38941.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x38941){
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
});})(x38941))
;

x38941.om$core$IGetRenderState$ = true;

x38941.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x38941){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x38941))
;

x38941.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x38941){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x38941))
;

x38941.om$core$IGetState$ = true;

x38941.om$core$IGetState$_get_state$arity$1 = ((function (x38941){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4349__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return (state["__om_state"]);
}
});})(x38941))
;

x38941.om$core$IGetState$_get_state$arity$2 = ((function (x38941){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x38941))
;

return x38941;
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
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__38942 = c;
if(G__38942){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38942.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__38942.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__38942);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__38942);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_38951 = om.core.children.call(null,this$);
if((function (){var G__38943 = c_38951;
if(G__38943){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38943.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__38943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__38943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__38943);
}
})()){
om.core.will_mount.call(null,c_38951);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__38944 = c;
if(G__38944){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38944.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__38944.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__38944);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__38944);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4423__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4423__auto__){
var refs = temp__4423__auto__;
var seq__38945 = cljs.core.seq.call(null,refs);
var chunk__38946 = null;
var count__38947 = (0);
var i__38948 = (0);
while(true){
if((i__38948 < count__38947)){
var ref = cljs.core._nth.call(null,chunk__38946,i__38948);
om.core.unobserve.call(null,this$,ref);

var G__38952 = seq__38945;
var G__38953 = chunk__38946;
var G__38954 = count__38947;
var G__38955 = (i__38948 + (1));
seq__38945 = G__38952;
chunk__38946 = G__38953;
count__38947 = G__38954;
i__38948 = G__38955;
continue;
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,seq__38945);
if(temp__4423__auto____$1){
var seq__38945__$1 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38945__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__38945__$1);
var G__38956 = cljs.core.chunk_rest.call(null,seq__38945__$1);
var G__38957 = c__5134__auto__;
var G__38958 = cljs.core.count.call(null,c__5134__auto__);
var G__38959 = (0);
seq__38945 = G__38956;
chunk__38946 = G__38957;
count__38947 = G__38958;
i__38948 = G__38959;
continue;
} else {
var ref = cljs.core.first.call(null,seq__38945__$1);
om.core.unobserve.call(null,this$,ref);

var G__38960 = cljs.core.next.call(null,seq__38945__$1);
var G__38961 = null;
var G__38962 = (0);
var G__38963 = (0);
seq__38945 = G__38960;
chunk__38946 = G__38961;
count__38947 = G__38962;
i__38948 = G__38963;
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
var props_38964 = this$.props;
var c_38965 = om.core.children.call(null,this$);
if((function (){var G__38949 = c_38965;
if(G__38949){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38949.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__38949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__38949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__38949);
}
})()){
var state_38966 = this$.state;
om.core.will_update.call(null,c_38965,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
if((function (){var G__38950 = c;
if(G__38950){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38950.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__38950.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__38950);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__38950);
}
})()){
var state_38967 = this$.state;
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
var x38969 = cljs.core.clj__GT_js.call(null,methods$);
x38969.om$core$ISetState$ = true;

x38969.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x38969){
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
});})(x38969))
;

x38969.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x38969){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x38969))
;

x38969.om$core$IGetRenderState$ = true;

x38969.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x38969){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x38969))
;

x38969.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x38969){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x38969))
;

x38969.om$core$IGetState$ = true;

x38969.om$core$IGetState$_get_state$arity$1 = ((function (x38969){
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
});})(x38969))
;

x38969.om$core$IGetState$_get_state$arity$2 = ((function (x38969){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x38969))
;

return x38969;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__38971 = x;
if(G__38971){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38971.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__38971.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__38971);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__38971);
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
return (function (p__38973){
var vec__38974 = p__38973;
var k = cljs.core.nth.call(null,vec__38974,(0),null);
var v = cljs.core.nth.call(null,vec__38974,(1),null);
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
var G__38975 = null;
var G__38975__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__38975__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__38975 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__38975__2.call(this,self__,k);
case 3:
return G__38975__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38975.cljs$core$IFn$_invoke$arity$2 = G__38975__2;
G__38975.cljs$core$IFn$_invoke$arity$3 = G__38975__3;
return G__38975;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args38972){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38972)));
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
var G__38977 = null;
var G__38977__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__38977__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__38977 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__38977__2.call(this,self__,k);
case 3:
return G__38977__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38977.cljs$core$IFn$_invoke$arity$2 = G__38977__2;
G__38977.cljs$core$IFn$_invoke$arity$3 = G__38977__3;
return G__38977;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args38976){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38976)));
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
var x38979 = cljs.core.clone.call(null,val);
x38979.cljs$core$IDeref$ = true;

x38979.cljs$core$IDeref$_deref$arity$1 = ((function (x38979){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x38979))
;

x38979.om$core$ICursor$ = true;

x38979.om$core$ICursor$_path$arity$1 = ((function (x38979){
return (function (_){
var ___$1 = this;
return path;
});})(x38979))
;

x38979.om$core$ICursor$_state$arity$1 = ((function (x38979){
return (function (_){
var ___$1 = this;
return state;
});})(x38979))
;

x38979.om$core$ITransact$ = true;

x38979.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x38979){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x38979))
;

x38979.cljs$core$IEquiv$ = true;

x38979.cljs$core$IEquiv$_equiv$arity$2 = ((function (x38979){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x38979))
;

return x38979;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__38981 = arguments.length;
switch (G__38981) {
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
if((function (){var G__38982 = val;
if(G__38982){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38982.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__38982.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__38982);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__38982);
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
if((function (){var G__38983 = val;
if(G__38983){
var bit__5023__auto__ = (G__38983.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__5023__auto__) || (G__38983.cljs$core$ICloneable$)){
return true;
} else {
if((!G__38983.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__38983);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__38983);
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
if((function (){var G__38986 = atom;
if(G__38986){
var bit__5023__auto__ = (G__38986.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5023__auto__) || (G__38986.cljs$core$IDeref$)){
return true;
} else {
if((!G__38986.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__38986);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__38986);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x38988 = cljs.core.clone.call(null,x);
x38988.cljs$core$ICloneable$ = true;

x38988.cljs$core$ICloneable$_clone$arity$1 = ((function (x38988){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x38988))
;

x38988.om$core$IAdapt$ = true;

x38988.om$core$IAdapt$_adapt$arity$2 = ((function (x38988){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x38988))
;

x38988.om$core$ICursorDerive$ = true;

x38988.om$core$ICursorDerive$_derive$arity$4 = ((function (x38988){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x38988))
;

x38988.om$core$ITransact$ = true;

x38988.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x38988){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x38988))
;

return x38988;
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

if((function (){var G__38995 = cursor;
if(G__38995){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__38995.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__38995.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__38995);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__38995);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x38996 = cljs.core.clone.call(null,cursor);
x38996.om$core$ICursorDerive$ = true;

x38996.om$core$ICursorDerive$_derive$arity$4 = ((function (x38996,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x38996,path,storage))
;

x38996.om$core$IOmRef$ = true;

x38996.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x38996,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x38996,path,storage))
;

x38996.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x38996,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x38996,path,storage))
;

x38996.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x38996,path,storage){
return (function (_){
var ___$1 = this;
var seq__38997 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__38998 = null;
var count__38999 = (0);
var i__39000 = (0);
while(true){
if((i__39000 < count__38999)){
var c = cljs.core._nth.call(null,chunk__38998,i__39000);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__39001 = seq__38997;
var G__39002 = chunk__38998;
var G__39003 = count__38999;
var G__39004 = (i__39000 + (1));
seq__38997 = G__39001;
chunk__38998 = G__39002;
count__38999 = G__39003;
i__39000 = G__39004;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__38997);
if(temp__4423__auto__){
var seq__38997__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38997__$1)){
var c__5134__auto__ = cljs.core.chunk_first.call(null,seq__38997__$1);
var G__39005 = cljs.core.chunk_rest.call(null,seq__38997__$1);
var G__39006 = c__5134__auto__;
var G__39007 = cljs.core.count.call(null,c__5134__auto__);
var G__39008 = (0);
seq__38997 = G__39005;
chunk__38998 = G__39006;
count__38999 = G__39007;
i__39000 = G__39008;
continue;
} else {
var c = cljs.core.first.call(null,seq__38997__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__39009 = cljs.core.next.call(null,seq__38997__$1);
var G__39010 = null;
var G__39011 = (0);
var G__39012 = (0);
seq__38997 = G__39009;
chunk__38998 = G__39010;
count__38999 = G__39011;
i__39000 = G__39012;
continue;
}
} else {
return null;
}
}
break;
}
});})(x38996,path,storage))
;

x38996.om$core$IOmRef$_get_deps$arity$1 = ((function (x38996,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x38996,path,storage))
;

x38996.om$core$ITransact$ = true;

x38996.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x38996,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x38996,path,storage))
;

return x38996;
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
var G__39014 = arguments.length;
switch (G__39014) {
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

var seq__39015_39020 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__39016_39021 = null;
var count__39017_39022 = (0);
var i__39018_39023 = (0);
while(true){
if((i__39018_39023 < count__39017_39022)){
var f_39024 = cljs.core._nth.call(null,chunk__39016_39021,i__39018_39023);
f_39024.call(null);

var G__39025 = seq__39015_39020;
var G__39026 = chunk__39016_39021;
var G__39027 = count__39017_39022;
var G__39028 = (i__39018_39023 + (1));
seq__39015_39020 = G__39025;
chunk__39016_39021 = G__39026;
count__39017_39022 = G__39027;
i__39018_39023 = G__39028;
continue;
} else {
var temp__4423__auto___39029 = cljs.core.seq.call(null,seq__39015_39020);
if(temp__4423__auto___39029){
var seq__39015_39030__$1 = temp__4423__auto___39029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39015_39030__$1)){
var c__5134__auto___39031 = cljs.core.chunk_first.call(null,seq__39015_39030__$1);
var G__39032 = cljs.core.chunk_rest.call(null,seq__39015_39030__$1);
var G__39033 = c__5134__auto___39031;
var G__39034 = cljs.core.count.call(null,c__5134__auto___39031);
var G__39035 = (0);
seq__39015_39020 = G__39032;
chunk__39016_39021 = G__39033;
count__39017_39022 = G__39034;
i__39018_39023 = G__39035;
continue;
} else {
var f_39036 = cljs.core.first.call(null,seq__39015_39030__$1);
f_39036.call(null);

var G__39037 = cljs.core.next.call(null,seq__39015_39030__$1);
var G__39038 = null;
var G__39039 = (0);
var G__39040 = (0);
seq__39015_39020 = G__39037;
chunk__39016_39021 = G__39038;
count__39017_39022 = G__39039;
i__39018_39023 = G__39040;
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
if((function (){var or__4349__auto__ = (function (){var G__39047 = x;
if(G__39047){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__39047.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__39047.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__39047);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__39047);
}
})();
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (function (){var G__39049 = x;
if(G__39049){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto____$1 = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto____$1)){
return or__4349__auto____$1;
} else {
return G__39049.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__39049.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__39049);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__39049);
}
})();
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
var G__39050 = x;
if(G__39050){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto____$2 = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto____$2)){
return or__4349__auto____$2;
} else {
return G__39050.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__39050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__39050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__39050);
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
var G__39052 = arguments.length;
switch (G__39052) {
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
var G__39055 = arguments.length;
switch (G__39055) {
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
var G__39058 = arguments.length;
switch (G__39058) {
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
var map__39059 = m;
var map__39059__$1 = ((cljs.core.seq_QMARK_.call(null,map__39059))?cljs.core.apply.call(null,cljs.core.hash_map,map__39059):map__39059);
var key = cljs.core.get.call(null,map__39059__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__39059__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__39059__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__39059__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__39059__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
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
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__39059,map__39059__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__39059,map__39059__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__39059,map__39059__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__39059,map__39059__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
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
var G__39062 = arguments.length;
switch (G__39062) {
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
var G__39065 = arguments.length;
switch (G__39065) {
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
if((function (){var G__39075 = state;
if(G__39075){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__39075.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__39075.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__39075);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__39075);
}
})()){
} else {
var properties_39083 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_39084 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_39085 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x39076_39086 = state;
x39076_39086.om$core$IRootProperties$ = true;

x39076_39086.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_39083,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_39083,cljs.core.dissoc,id,k);
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_39083,cljs.core.dissoc,id);
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$IRootProperties$_get_property$arity$3 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_39083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$INotify$ = true;

x39076_39086.om$core$INotify$_listen_BANG_$arity$3 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_39084,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_39084,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$INotify$_notify_BANG_$arity$3 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__39077_39087 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_39084));
var chunk__39078_39088 = null;
var count__39079_39089 = (0);
var i__39080_39090 = (0);
while(true){
if((i__39080_39090 < count__39079_39089)){
var vec__39081_39091 = cljs.core._nth.call(null,chunk__39078_39088,i__39080_39090);
var __39092 = cljs.core.nth.call(null,vec__39081_39091,(0),null);
var f_39093 = cljs.core.nth.call(null,vec__39081_39091,(1),null);
f_39093.call(null,tx_data,root_cursor);

var G__39094 = seq__39077_39087;
var G__39095 = chunk__39078_39088;
var G__39096 = count__39079_39089;
var G__39097 = (i__39080_39090 + (1));
seq__39077_39087 = G__39094;
chunk__39078_39088 = G__39095;
count__39079_39089 = G__39096;
i__39080_39090 = G__39097;
continue;
} else {
var temp__4423__auto___39098 = cljs.core.seq.call(null,seq__39077_39087);
if(temp__4423__auto___39098){
var seq__39077_39099__$1 = temp__4423__auto___39098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39077_39099__$1)){
var c__5134__auto___39100 = cljs.core.chunk_first.call(null,seq__39077_39099__$1);
var G__39101 = cljs.core.chunk_rest.call(null,seq__39077_39099__$1);
var G__39102 = c__5134__auto___39100;
var G__39103 = cljs.core.count.call(null,c__5134__auto___39100);
var G__39104 = (0);
seq__39077_39087 = G__39101;
chunk__39078_39088 = G__39102;
count__39079_39089 = G__39103;
i__39080_39090 = G__39104;
continue;
} else {
var vec__39082_39105 = cljs.core.first.call(null,seq__39077_39099__$1);
var __39106 = cljs.core.nth.call(null,vec__39082_39105,(0),null);
var f_39107 = cljs.core.nth.call(null,vec__39082_39105,(1),null);
f_39107.call(null,tx_data,root_cursor);

var G__39108 = cljs.core.next.call(null,seq__39077_39099__$1);
var G__39109 = null;
var G__39110 = (0);
var G__39111 = (0);
seq__39077_39087 = G__39108;
chunk__39078_39088 = G__39109;
count__39079_39089 = G__39110;
i__39080_39090 = G__39111;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$IRenderQueue$ = true;

x39076_39086.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_39085);
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_39085),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_39085,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

x39076_39086.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x39076_39086,properties_39083,listeners_39084,render_queue_39085){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_39085,cljs.core.empty);
});})(x39076_39086,properties_39083,listeners_39084,render_queue_39085))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x39113 = cljs.core.clone.call(null,cursor);
x39113.cljs$core$ICloneable$ = true;

x39113.cljs$core$ICloneable$_clone$arity$1 = ((function (x39113){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x39113))
;

x39113.om$core$IAdapt$ = true;

x39113.om$core$IAdapt$_adapt$arity$2 = ((function (x39113){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x39113))
;

x39113.om$core$IRootKey$ = true;

x39113.om$core$IRootKey$_root_key$arity$1 = ((function (x39113){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x39113))
;

return x39113;
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
om.core.root = (function om$core$root(f,value,p__39114){
var map__39177 = p__39114;
var map__39177__$1 = ((cljs.core.seq_QMARK_.call(null,map__39177))?cljs.core.apply.call(null,cljs.core.hash_map,map__39177):map__39177);
var options = map__39177__$1;
var target = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__39177__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__39239 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__39239,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__39239,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__39178 = value;
if(G__39178){
var bit__5023__auto__ = (G__39178.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__5023__auto__) || (G__39178.cljs$core$IAtom$)){
return true;
} else {
if((!G__39178.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__39178);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__39178);
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
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_39240 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_39209 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_39210 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_39211 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_39212 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_39212;

om.core._STAR_state_STAR_ = _STAR_state_STAR_39211;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_39210;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_39209;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_39240);
} else {
}
}

var queue_39241 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_39241)){
} else {
var seq__39213_39242 = cljs.core.seq.call(null,queue_39241);
var chunk__39214_39243 = null;
var count__39215_39244 = (0);
var i__39216_39245 = (0);
while(true){
if((i__39216_39245 < count__39215_39244)){
var c_39246 = cljs.core._nth.call(null,chunk__39214_39243,i__39216_39245);
if(cljs.core.truth_(c_39246.isMounted())){
var temp__4423__auto___39247 = (c_39246.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___39247)){
var next_props_39248 = temp__4423__auto___39247;
(c_39246.props["__om_cursor"] = next_props_39248);

(c_39246.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4349__auto__ = !((function (){var G__39218 = om.core.children.call(null,c_39246);
if(G__39218){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__39218.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__39218.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__39218);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__39218);
}
})());
if(or__4349__auto__){
return or__4349__auto__;
} else {
return c_39246.shouldComponentUpdate(c_39246.props,c_39246.state);
}
})())){
c_39246.forceUpdate();
} else {
}
} else {
}

var G__39249 = seq__39213_39242;
var G__39250 = chunk__39214_39243;
var G__39251 = count__39215_39244;
var G__39252 = (i__39216_39245 + (1));
seq__39213_39242 = G__39249;
chunk__39214_39243 = G__39250;
count__39215_39244 = G__39251;
i__39216_39245 = G__39252;
continue;
} else {
var temp__4423__auto___39253 = cljs.core.seq.call(null,seq__39213_39242);
if(temp__4423__auto___39253){
var seq__39213_39254__$1 = temp__4423__auto___39253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39213_39254__$1)){
var c__5134__auto___39255 = cljs.core.chunk_first.call(null,seq__39213_39254__$1);
var G__39256 = cljs.core.chunk_rest.call(null,seq__39213_39254__$1);
var G__39257 = c__5134__auto___39255;
var G__39258 = cljs.core.count.call(null,c__5134__auto___39255);
var G__39259 = (0);
seq__39213_39242 = G__39256;
chunk__39214_39243 = G__39257;
count__39215_39244 = G__39258;
i__39216_39245 = G__39259;
continue;
} else {
var c_39260 = cljs.core.first.call(null,seq__39213_39254__$1);
if(cljs.core.truth_(c_39260.isMounted())){
var temp__4423__auto___39261__$1 = (c_39260.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4423__auto___39261__$1)){
var next_props_39262 = temp__4423__auto___39261__$1;
(c_39260.props["__om_cursor"] = next_props_39262);

(c_39260.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4349__auto__ = !((function (){var G__39220 = om.core.children.call(null,c_39260);
if(G__39220){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__39220.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__39220.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__39220);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__39220);
}
})());
if(or__4349__auto__){
return or__4349__auto__;
} else {
return c_39260.shouldComponentUpdate(c_39260.props,c_39260.state);
}
})())){
c_39260.forceUpdate();
} else {
}
} else {
}

var G__39263 = cljs.core.next.call(null,seq__39213_39254__$1);
var G__39264 = null;
var G__39265 = (0);
var G__39266 = (0);
seq__39213_39242 = G__39263;
chunk__39214_39243 = G__39264;
count__39215_39244 = G__39265;
i__39216_39245 = G__39266;
continue;
}
} else {
}
}
break;
}
}

var _refs_39267 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_39267)){
} else {
var seq__39221_39268 = cljs.core.seq.call(null,_refs_39267);
var chunk__39222_39269 = null;
var count__39223_39270 = (0);
var i__39224_39271 = (0);
while(true){
if((i__39224_39271 < count__39223_39270)){
var vec__39225_39272 = cljs.core._nth.call(null,chunk__39222_39269,i__39224_39271);
var path_39273__$1 = cljs.core.nth.call(null,vec__39225_39272,(0),null);
var cs_39274 = cljs.core.nth.call(null,vec__39225_39272,(1),null);
var cs_39275__$1 = cljs.core.deref.call(null,cs_39274);
var seq__39226_39276 = cljs.core.seq.call(null,cs_39275__$1);
var chunk__39227_39277 = null;
var count__39228_39278 = (0);
var i__39229_39279 = (0);
while(true){
if((i__39229_39279 < count__39228_39278)){
var vec__39230_39280 = cljs.core._nth.call(null,chunk__39227_39277,i__39229_39279);
var id_39281 = cljs.core.nth.call(null,vec__39230_39280,(0),null);
var c_39282 = cljs.core.nth.call(null,vec__39230_39280,(1),null);
if(cljs.core.truth_(c_39282.shouldComponentUpdate(c_39282.props,c_39282.state))){
c_39282.forceUpdate();
} else {
}

var G__39283 = seq__39226_39276;
var G__39284 = chunk__39227_39277;
var G__39285 = count__39228_39278;
var G__39286 = (i__39229_39279 + (1));
seq__39226_39276 = G__39283;
chunk__39227_39277 = G__39284;
count__39228_39278 = G__39285;
i__39229_39279 = G__39286;
continue;
} else {
var temp__4423__auto___39287 = cljs.core.seq.call(null,seq__39226_39276);
if(temp__4423__auto___39287){
var seq__39226_39288__$1 = temp__4423__auto___39287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39226_39288__$1)){
var c__5134__auto___39289 = cljs.core.chunk_first.call(null,seq__39226_39288__$1);
var G__39290 = cljs.core.chunk_rest.call(null,seq__39226_39288__$1);
var G__39291 = c__5134__auto___39289;
var G__39292 = cljs.core.count.call(null,c__5134__auto___39289);
var G__39293 = (0);
seq__39226_39276 = G__39290;
chunk__39227_39277 = G__39291;
count__39228_39278 = G__39292;
i__39229_39279 = G__39293;
continue;
} else {
var vec__39231_39294 = cljs.core.first.call(null,seq__39226_39288__$1);
var id_39295 = cljs.core.nth.call(null,vec__39231_39294,(0),null);
var c_39296 = cljs.core.nth.call(null,vec__39231_39294,(1),null);
if(cljs.core.truth_(c_39296.shouldComponentUpdate(c_39296.props,c_39296.state))){
c_39296.forceUpdate();
} else {
}

var G__39297 = cljs.core.next.call(null,seq__39226_39288__$1);
var G__39298 = null;
var G__39299 = (0);
var G__39300 = (0);
seq__39226_39276 = G__39297;
chunk__39227_39277 = G__39298;
count__39228_39278 = G__39299;
i__39229_39279 = G__39300;
continue;
}
} else {
}
}
break;
}

var G__39301 = seq__39221_39268;
var G__39302 = chunk__39222_39269;
var G__39303 = count__39223_39270;
var G__39304 = (i__39224_39271 + (1));
seq__39221_39268 = G__39301;
chunk__39222_39269 = G__39302;
count__39223_39270 = G__39303;
i__39224_39271 = G__39304;
continue;
} else {
var temp__4423__auto___39305 = cljs.core.seq.call(null,seq__39221_39268);
if(temp__4423__auto___39305){
var seq__39221_39306__$1 = temp__4423__auto___39305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39221_39306__$1)){
var c__5134__auto___39307 = cljs.core.chunk_first.call(null,seq__39221_39306__$1);
var G__39308 = cljs.core.chunk_rest.call(null,seq__39221_39306__$1);
var G__39309 = c__5134__auto___39307;
var G__39310 = cljs.core.count.call(null,c__5134__auto___39307);
var G__39311 = (0);
seq__39221_39268 = G__39308;
chunk__39222_39269 = G__39309;
count__39223_39270 = G__39310;
i__39224_39271 = G__39311;
continue;
} else {
var vec__39232_39312 = cljs.core.first.call(null,seq__39221_39306__$1);
var path_39313__$1 = cljs.core.nth.call(null,vec__39232_39312,(0),null);
var cs_39314 = cljs.core.nth.call(null,vec__39232_39312,(1),null);
var cs_39315__$1 = cljs.core.deref.call(null,cs_39314);
var seq__39233_39316 = cljs.core.seq.call(null,cs_39315__$1);
var chunk__39234_39317 = null;
var count__39235_39318 = (0);
var i__39236_39319 = (0);
while(true){
if((i__39236_39319 < count__39235_39318)){
var vec__39237_39320 = cljs.core._nth.call(null,chunk__39234_39317,i__39236_39319);
var id_39321 = cljs.core.nth.call(null,vec__39237_39320,(0),null);
var c_39322 = cljs.core.nth.call(null,vec__39237_39320,(1),null);
if(cljs.core.truth_(c_39322.shouldComponentUpdate(c_39322.props,c_39322.state))){
c_39322.forceUpdate();
} else {
}

var G__39323 = seq__39233_39316;
var G__39324 = chunk__39234_39317;
var G__39325 = count__39235_39318;
var G__39326 = (i__39236_39319 + (1));
seq__39233_39316 = G__39323;
chunk__39234_39317 = G__39324;
count__39235_39318 = G__39325;
i__39236_39319 = G__39326;
continue;
} else {
var temp__4423__auto___39327__$1 = cljs.core.seq.call(null,seq__39233_39316);
if(temp__4423__auto___39327__$1){
var seq__39233_39328__$1 = temp__4423__auto___39327__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39233_39328__$1)){
var c__5134__auto___39329 = cljs.core.chunk_first.call(null,seq__39233_39328__$1);
var G__39330 = cljs.core.chunk_rest.call(null,seq__39233_39328__$1);
var G__39331 = c__5134__auto___39329;
var G__39332 = cljs.core.count.call(null,c__5134__auto___39329);
var G__39333 = (0);
seq__39233_39316 = G__39330;
chunk__39234_39317 = G__39331;
count__39235_39318 = G__39332;
i__39236_39319 = G__39333;
continue;
} else {
var vec__39238_39334 = cljs.core.first.call(null,seq__39233_39328__$1);
var id_39335 = cljs.core.nth.call(null,vec__39238_39334,(0),null);
var c_39336 = cljs.core.nth.call(null,vec__39238_39334,(1),null);
if(cljs.core.truth_(c_39336.shouldComponentUpdate(c_39336.props,c_39336.state))){
c_39336.forceUpdate();
} else {
}

var G__39337 = cljs.core.next.call(null,seq__39233_39328__$1);
var G__39338 = null;
var G__39339 = (0);
var G__39340 = (0);
seq__39233_39316 = G__39337;
chunk__39234_39317 = G__39338;
count__39235_39318 = G__39339;
i__39236_39319 = G__39340;
continue;
}
} else {
}
}
break;
}

var G__39341 = cljs.core.next.call(null,seq__39221_39306__$1);
var G__39342 = null;
var G__39343 = (0);
var G__39344 = (0);
seq__39221_39268 = G__39341;
chunk__39222_39269 = G__39342;
count__39223_39270 = G__39343;
i__39224_39271 = G__39344;
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
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
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
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__39177,map__39177__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
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
var G__39346 = x;
if(G__39346){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__39346.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__39346.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__39346);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__39346);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__39348 = arguments.length;
switch (G__39348) {
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
var G__39351 = arguments.length;
switch (G__39351) {
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

var key = (((function (){var G__39354 = cursor;
if(G__39354){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__39354.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__39354.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__39354);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__39354);
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
var G__39356 = arguments.length;
switch (G__39356) {
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
var G__39359 = arguments.length;
switch (G__39359) {
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
var G__39362 = arguments.length;
switch (G__39362) {
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
var G__39365 = arguments.length;
switch (G__39365) {
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
var G__39368 = arguments.length;
switch (G__39368) {
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
var G__39371 = arguments.length;
switch (G__39371) {
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