// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reforms.binding.protocol');
goog.require('cljs.core');

reforms.binding.protocol.IBinding = (function (){var obj24132 = {};
return obj24132;
})();

reforms.binding.protocol._valid_QMARK_ = (function reforms$binding$protocol$_valid_QMARK_(x){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1(x);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (reforms.binding.protocol._valid_QMARK_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (reforms.binding.protocol._valid_QMARK_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-valid?",x);
}
}
})().call(null,x);
}
});

reforms.binding.protocol._deref = (function reforms$binding$protocol$_deref(x){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.reforms$binding$protocol$IBinding$_deref$arity$1;
} else {
return and__4327__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_deref$arity$1(x);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (reforms.binding.protocol._deref[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (reforms.binding.protocol._deref["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-deref",x);
}
}
})().call(null,x);
}
});

reforms.binding.protocol._reset_BANG_ = (function reforms$binding$protocol$_reset_BANG_(){
var G__24134 = arguments.length;
switch (G__24134) {
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
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2(x,v);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (reforms.binding.protocol._reset_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-reset!",x);
}
}
})().call(null,x,v);
}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,v){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3(x,ks,v);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (reforms.binding.protocol._reset_BANG_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-reset!",x);
}
}
})().call(null,x,ks,v);
}
});

reforms.binding.protocol._reset_BANG_.cljs$lang$maxFixedArity = 3;

reforms.binding.protocol._get_in = (function reforms$binding$protocol$_get_in(x,ks){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.reforms$binding$protocol$IBinding$_get_in$arity$2;
} else {
return and__4327__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_get_in$arity$2(x,ks);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (reforms.binding.protocol._get_in[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (reforms.binding.protocol._get_in["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-get-in",x);
}
}
})().call(null,x,ks);
}
});

reforms.binding.protocol._path = (function reforms$binding$protocol$_path(x){
if((function (){var and__4327__auto__ = x;
if(and__4327__auto__){
return x.reforms$binding$protocol$IBinding$_path$arity$1;
} else {
return and__4327__auto__;
}
})()){
return x.reforms$binding$protocol$IBinding$_path$arity$1(x);
} else {
var x__4975__auto__ = (((x == null))?null:x);
return (function (){var or__4339__auto__ = (reforms.binding.protocol._path[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (reforms.binding.protocol._path["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-path",x);
}
}
})().call(null,x);
}
});


//# sourceMappingURL=protocol.js.map