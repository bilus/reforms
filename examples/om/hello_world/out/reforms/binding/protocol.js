// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.protocol');
goog.require('cljs.core');

/**
 * @interface
 */
reforms.binding.protocol.IBinding = function(){};

reforms.binding.protocol._valid_QMARK_ = (function reforms$binding$protocol$_valid_QMARK_(x){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1 == null)))){
return x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1(x);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._valid_QMARK_[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._valid_QMARK_["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-valid?",x);
}
}
}
});

reforms.binding.protocol._deref = (function reforms$binding$protocol$_deref(x){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_deref$arity$1 == null)))){
return x.reforms$binding$protocol$IBinding$_deref$arity$1(x);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._deref[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._deref["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-deref",x);
}
}
}
});

reforms.binding.protocol._reset_BANG_ = (function reforms$binding$protocol$_reset_BANG_(var_args){
var args165288 = [];
var len__5767__auto___165294 = arguments.length;
var i__5768__auto___165295 = (0);
while(true){
if((i__5768__auto___165295 < len__5767__auto___165294)){
args165288.push((arguments[i__5768__auto___165295]));

var G__165296 = (i__5768__auto___165295 + (1));
i__5768__auto___165295 = G__165296;
continue;
} else {
}
break;
}

var G__165290 = args165288.length;
switch (G__165290) {
case 2:
return reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args165288.length)].join('')));

}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,v){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2 == null)))){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2(x,v);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._reset_BANG_[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x,v);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x,v);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-reset!",x);
}
}
}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,v){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3 == null)))){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3(x,ks,v);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._reset_BANG_[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x,ks,v);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x,ks,v);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-reset!",x);
}
}
}
});

reforms.binding.protocol._reset_BANG_.cljs$lang$maxFixedArity = 3;

reforms.binding.protocol._swap_BANG_ = (function reforms$binding$protocol$_swap_BANG_(var_args){
var args165291 = [];
var len__5767__auto___165298 = arguments.length;
var i__5768__auto___165299 = (0);
while(true){
if((i__5768__auto___165299 < len__5767__auto___165298)){
args165291.push((arguments[i__5768__auto___165299]));

var G__165300 = (i__5768__auto___165299 + (1));
i__5768__auto___165299 = G__165300;
continue;
} else {
}
break;
}

var G__165293 = args165291.length;
switch (G__165293) {
case 2:
return reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args165291.length)].join('')));

}
});

reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$2 == null)))){
return x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$2(x,f);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._swap_BANG_[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x,f);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._swap_BANG_["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x,f);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-swap!",x);
}
}
}
});

reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,f){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$3 == null)))){
return x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$3(x,ks,f);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._swap_BANG_[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x,ks,f);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._swap_BANG_["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x,ks,f);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-swap!",x);
}
}
}
});

reforms.binding.protocol._swap_BANG_.cljs$lang$maxFixedArity = 3;

reforms.binding.protocol._get_in = (function reforms$binding$protocol$_get_in(x,ks){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_get_in$arity$2 == null)))){
return x.reforms$binding$protocol$IBinding$_get_in$arity$2(x,ks);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._get_in[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x,ks);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._get_in["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-get-in",x);
}
}
}
});

reforms.binding.protocol._path = (function reforms$binding$protocol$_path(x){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_path$arity$1 == null)))){
return x.reforms$binding$protocol$IBinding$_path$arity$1(x);
} else {
var x__5364__auto__ = (((x == null))?null:x);
var m__5365__auto__ = (reforms.binding.protocol._path[goog.typeOf(x__5364__auto__)]);
if(!((m__5365__auto__ == null))){
return m__5365__auto__.call(null,x);
} else {
var m__5365__auto____$1 = (reforms.binding.protocol._path["_"]);
if(!((m__5365__auto____$1 == null))){
return m__5365__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-path",x);
}
}
}
});


//# sourceMappingURL=protocol.js.map