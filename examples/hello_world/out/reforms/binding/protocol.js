// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reforms.binding.protocol');
goog.require('cljs.core');

reforms.binding.protocol.IBinding = (function (){var obj15636 = {};
return obj15636;
})();

reforms.binding.protocol._valid_QMARK_ = (function reforms$binding$protocol$_valid_QMARK_(x){
if((function (){var and__4297__auto__ = x;
if(and__4297__auto__){
return x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1(x);
} else {
var x__4945__auto__ = (((x == null))?null:x);
return (function (){var or__4309__auto__ = (reforms.binding.protocol._valid_QMARK_[(function (){var G__15640 = x__4945__auto__;
return goog.typeOf(G__15640);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (reforms.binding.protocol._valid_QMARK_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IBinding.-valid?",x);
}
}
})().call(null,x);
}
});

reforms.binding.protocol._deref = (function reforms$binding$protocol$_deref(x){
if((function (){var and__4297__auto__ = x;
if(and__4297__auto__){
return x.reforms$binding$protocol$IBinding$_deref$arity$1;
} else {
return and__4297__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_deref$arity$1(x);
} else {
var x__4945__auto__ = (((x == null))?null:x);
return (function (){var or__4309__auto__ = (reforms.binding.protocol._deref[(function (){var G__15644 = x__4945__auto__;
return goog.typeOf(G__15644);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (reforms.binding.protocol._deref["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IBinding.-deref",x);
}
}
})().call(null,x);
}
});

reforms.binding.protocol._reset_BANG_ = (function reforms$binding$protocol$_reset_BANG_(){
var G__15646 = arguments.length;
switch (G__15646) {
case 2:
return reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,v){
if((function (){var and__4297__auto__ = x;
if(and__4297__auto__){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2(x,v);
} else {
var x__4945__auto__ = (((x == null))?null:x);
return (function (){var or__4309__auto__ = (reforms.binding.protocol._reset_BANG_[(function (){var G__15648 = x__4945__auto__;
return goog.typeOf(G__15648);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IBinding.-reset!",x);
}
}
})().call(null,x,v);
}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,v){
if((function (){var and__4297__auto__ = x;
if(and__4297__auto__){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3(x,ks,v);
} else {
var x__4945__auto__ = (((x == null))?null:x);
return (function (){var or__4309__auto__ = (reforms.binding.protocol._reset_BANG_[(function (){var G__15650 = x__4945__auto__;
return goog.typeOf(G__15650);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IBinding.-reset!",x);
}
}
})().call(null,x,ks,v);
}
});

reforms.binding.protocol._reset_BANG_.cljs$lang$maxFixedArity = 3;

reforms.binding.protocol._get_in = (function reforms$binding$protocol$_get_in(x,ks){
if((function (){var and__4297__auto__ = x;
if(and__4297__auto__){
return x.reforms$binding$protocol$IBinding$_get_in$arity$2;
} else {
return and__4297__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_get_in$arity$2(x,ks);
} else {
var x__4945__auto__ = (((x == null))?null:x);
return (function (){var or__4309__auto__ = (reforms.binding.protocol._get_in[(function (){var G__15654 = x__4945__auto__;
return goog.typeOf(G__15654);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (reforms.binding.protocol._get_in["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IBinding.-get-in",x);
}
}
})().call(null,x,ks);
}
});

reforms.binding.protocol._path = (function reforms$binding$protocol$_path(x){
if((function (){var and__4297__auto__ = x;
if(and__4297__auto__){
return x.reforms$binding$protocol$IBinding$_path$arity$1;
} else {
return and__4297__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_path$arity$1(x);
} else {
var x__4945__auto__ = (((x == null))?null:x);
return (function (){var or__4309__auto__ = (reforms.binding.protocol._path[(function (){var G__15658 = x__4945__auto__;
return goog.typeOf(G__15658);
})()]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (reforms.binding.protocol._path["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol("IBinding.-path",x);
}
}
})().call(null,x);
}
});

