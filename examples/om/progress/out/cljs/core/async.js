// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async33252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33252 = (function (fn_handler,f,meta33253){
this.fn_handler = fn_handler;
this.f = f;
this.meta33253 = meta33253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33254,meta33253__$1){
var self__ = this;
var _33254__$1 = this;
return (new cljs.core.async.t_cljs$core$async33252(self__.fn_handler,self__.f,meta33253__$1));
});

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33254){
var self__ = this;
var _33254__$1 = this;
return self__.meta33253;
});

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta33253","meta33253",-527353191,null)], null);
});

cljs.core.async.t_cljs$core$async33252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33252";

cljs.core.async.t_cljs$core$async33252.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async33252");
});

cljs.core.async.__GT_t_cljs$core$async33252 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async33252(fn_handler__$1,f__$1,meta33253){
return (new cljs.core.async.t_cljs$core$async33252(fn_handler__$1,f__$1,meta33253));
});

}

return (new cljs.core.async.t_cljs$core$async33252(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33257 = [];
var len__5651__auto___33260 = arguments.length;
var i__5652__auto___33261 = (0);
while(true){
if((i__5652__auto___33261 < len__5651__auto___33260)){
args33257.push((arguments[i__5652__auto___33261]));

var G__33262 = (i__5652__auto___33261 + (1));
i__5652__auto___33261 = G__33262;
continue;
} else {
}
break;
}

var G__33259 = args33257.length;
switch (G__33259) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33257.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33264 = [];
var len__5651__auto___33267 = arguments.length;
var i__5652__auto___33268 = (0);
while(true){
if((i__5652__auto___33268 < len__5651__auto___33267)){
args33264.push((arguments[i__5652__auto___33268]));

var G__33269 = (i__5652__auto___33268 + (1));
i__5652__auto___33268 = G__33269;
continue;
} else {
}
break;
}

var G__33266 = args33264.length;
switch (G__33266) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33264.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33271 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33271);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33271,ret){
return (function (){
return fn1.call(null,val_33271);
});})(val_33271,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33272 = [];
var len__5651__auto___33275 = arguments.length;
var i__5652__auto___33276 = (0);
while(true){
if((i__5652__auto___33276 < len__5651__auto___33275)){
args33272.push((arguments[i__5652__auto___33276]));

var G__33277 = (i__5652__auto___33276 + (1));
i__5652__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var G__33274 = args33272.length;
switch (G__33274) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33272.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5496__auto___33279 = n;
var x_33280 = (0);
while(true){
if((x_33280 < n__5496__auto___33279)){
(a[x_33280] = (0));

var G__33281 = (x_33280 + (1));
x_33280 = G__33281;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33282 = (i + (1));
i = G__33282;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33286 = (function (alt_flag,flag,meta33287){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33287 = meta33287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33288,meta33287__$1){
var self__ = this;
var _33288__$1 = this;
return (new cljs.core.async.t_cljs$core$async33286(self__.alt_flag,self__.flag,meta33287__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33288){
var self__ = this;
var _33288__$1 = this;
return self__.meta33287;
});})(flag))
;

cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33286.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33287","meta33287",-1336284368,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33286";

cljs.core.async.t_cljs$core$async33286.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async33286");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33286 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33286(alt_flag__$1,flag__$1,meta33287){
return (new cljs.core.async.t_cljs$core$async33286(alt_flag__$1,flag__$1,meta33287));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33286(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33292 = (function (alt_handler,flag,cb,meta33293){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33293 = meta33293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33294,meta33293__$1){
var self__ = this;
var _33294__$1 = this;
return (new cljs.core.async.t_cljs$core$async33292(self__.alt_handler,self__.flag,self__.cb,meta33293__$1));
});

cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33294){
var self__ = this;
var _33294__$1 = this;
return self__.meta33293;
});

cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33293","meta33293",-2115481665,null)], null);
});

cljs.core.async.t_cljs$core$async33292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33292";

cljs.core.async.t_cljs$core$async33292.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async33292");
});

cljs.core.async.__GT_t_cljs$core$async33292 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33292(alt_handler__$1,flag__$1,cb__$1,meta33293){
return (new cljs.core.async.t_cljs$core$async33292(alt_handler__$1,flag__$1,cb__$1,meta33293));
});

}

return (new cljs.core.async.t_cljs$core$async33292(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33295_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33295_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33296_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33296_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4593__auto__ = wport;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33297 = (i + (1));
i = G__33297;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4593__auto__ = ret;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4581__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4581__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4581__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5658__auto__ = [];
var len__5651__auto___33303 = arguments.length;
var i__5652__auto___33304 = (0);
while(true){
if((i__5652__auto___33304 < len__5651__auto___33303)){
args__5658__auto__.push((arguments[i__5652__auto___33304]));

var G__33305 = (i__5652__auto___33304 + (1));
i__5652__auto___33304 = G__33305;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33300){
var map__33301 = p__33300;
var map__33301__$1 = ((((!((map__33301 == null)))?((((map__33301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33301):map__33301);
var opts = map__33301__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33298){
var G__33299 = cljs.core.first.call(null,seq33298);
var seq33298__$1 = cljs.core.next.call(null,seq33298);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33299,seq33298__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33306 = [];
var len__5651__auto___33356 = arguments.length;
var i__5652__auto___33357 = (0);
while(true){
if((i__5652__auto___33357 < len__5651__auto___33356)){
args33306.push((arguments[i__5652__auto___33357]));

var G__33358 = (i__5652__auto___33357 + (1));
i__5652__auto___33357 = G__33358;
continue;
} else {
}
break;
}

var G__33308 = args33306.length;
switch (G__33308) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33306.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29194__auto___33360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___33360){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___33360){
return (function (state_33332){
var state_val_33333 = (state_33332[(1)]);
if((state_val_33333 === (7))){
var inst_33328 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33334_33361 = state_33332__$1;
(statearr_33334_33361[(2)] = inst_33328);

(statearr_33334_33361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (1))){
var state_33332__$1 = state_33332;
var statearr_33335_33362 = state_33332__$1;
(statearr_33335_33362[(2)] = null);

(statearr_33335_33362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (4))){
var inst_33311 = (state_33332[(7)]);
var inst_33311__$1 = (state_33332[(2)]);
var inst_33312 = (inst_33311__$1 == null);
var state_33332__$1 = (function (){var statearr_33336 = state_33332;
(statearr_33336[(7)] = inst_33311__$1);

return statearr_33336;
})();
if(cljs.core.truth_(inst_33312)){
var statearr_33337_33363 = state_33332__$1;
(statearr_33337_33363[(1)] = (5));

} else {
var statearr_33338_33364 = state_33332__$1;
(statearr_33338_33364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (13))){
var state_33332__$1 = state_33332;
var statearr_33339_33365 = state_33332__$1;
(statearr_33339_33365[(2)] = null);

(statearr_33339_33365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (6))){
var inst_33311 = (state_33332[(7)]);
var state_33332__$1 = state_33332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33332__$1,(11),to,inst_33311);
} else {
if((state_val_33333 === (3))){
var inst_33330 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33332__$1,inst_33330);
} else {
if((state_val_33333 === (12))){
var state_33332__$1 = state_33332;
var statearr_33340_33366 = state_33332__$1;
(statearr_33340_33366[(2)] = null);

(statearr_33340_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (2))){
var state_33332__$1 = state_33332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33332__$1,(4),from);
} else {
if((state_val_33333 === (11))){
var inst_33321 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
if(cljs.core.truth_(inst_33321)){
var statearr_33341_33367 = state_33332__$1;
(statearr_33341_33367[(1)] = (12));

} else {
var statearr_33342_33368 = state_33332__$1;
(statearr_33342_33368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (9))){
var state_33332__$1 = state_33332;
var statearr_33343_33369 = state_33332__$1;
(statearr_33343_33369[(2)] = null);

(statearr_33343_33369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (5))){
var state_33332__$1 = state_33332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33344_33370 = state_33332__$1;
(statearr_33344_33370[(1)] = (8));

} else {
var statearr_33345_33371 = state_33332__$1;
(statearr_33345_33371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (14))){
var inst_33326 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33346_33372 = state_33332__$1;
(statearr_33346_33372[(2)] = inst_33326);

(statearr_33346_33372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (10))){
var inst_33318 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33347_33373 = state_33332__$1;
(statearr_33347_33373[(2)] = inst_33318);

(statearr_33347_33373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (8))){
var inst_33315 = cljs.core.async.close_BANG_.call(null,to);
var state_33332__$1 = state_33332;
var statearr_33348_33374 = state_33332__$1;
(statearr_33348_33374[(2)] = inst_33315);

(statearr_33348_33374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___33360))
;
return ((function (switch__29129__auto__,c__29194__auto___33360){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_33352 = [null,null,null,null,null,null,null,null];
(statearr_33352[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_33352[(1)] = (1));

return statearr_33352;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_33332){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33353){if((e33353 instanceof Object)){
var ex__29133__auto__ = e33353;
var statearr_33354_33375 = state_33332;
(statearr_33354_33375[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33376 = state_33332;
state_33332 = G__33376;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_33332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_33332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___33360))
})();
var state__29196__auto__ = (function (){var statearr_33355 = f__29195__auto__.call(null);
(statearr_33355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___33360);

return statearr_33355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___33360))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33560){
var vec__33561 = p__33560;
var v = cljs.core.nth.call(null,vec__33561,(0),null);
var p = cljs.core.nth.call(null,vec__33561,(1),null);
var job = vec__33561;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29194__auto___33743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___33743,res,vec__33561,v,p,job,jobs,results){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___33743,res,vec__33561,v,p,job,jobs,results){
return (function (state_33566){
var state_val_33567 = (state_33566[(1)]);
if((state_val_33567 === (1))){
var state_33566__$1 = state_33566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33566__$1,(2),res,v);
} else {
if((state_val_33567 === (2))){
var inst_33563 = (state_33566[(2)]);
var inst_33564 = cljs.core.async.close_BANG_.call(null,res);
var state_33566__$1 = (function (){var statearr_33568 = state_33566;
(statearr_33568[(7)] = inst_33563);

return statearr_33568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33566__$1,inst_33564);
} else {
return null;
}
}
});})(c__29194__auto___33743,res,vec__33561,v,p,job,jobs,results))
;
return ((function (switch__29129__auto__,c__29194__auto___33743,res,vec__33561,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0 = (function (){
var statearr_33572 = [null,null,null,null,null,null,null,null];
(statearr_33572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__);

(statearr_33572[(1)] = (1));

return statearr_33572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1 = (function (state_33566){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33573){if((e33573 instanceof Object)){
var ex__29133__auto__ = e33573;
var statearr_33574_33744 = state_33566;
(statearr_33574_33744[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33745 = state_33566;
state_33566 = G__33745;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = function(state_33566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1.call(this,state_33566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___33743,res,vec__33561,v,p,job,jobs,results))
})();
var state__29196__auto__ = (function (){var statearr_33575 = f__29195__auto__.call(null);
(statearr_33575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___33743);

return statearr_33575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___33743,res,vec__33561,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33576){
var vec__33577 = p__33576;
var v = cljs.core.nth.call(null,vec__33577,(0),null);
var p = cljs.core.nth.call(null,vec__33577,(1),null);
var job = vec__33577;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5496__auto___33746 = n;
var __33747 = (0);
while(true){
if((__33747 < n__5496__auto___33746)){
var G__33578_33748 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33578_33748) {
case "compute":
var c__29194__auto___33750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33747,c__29194__auto___33750,G__33578_33748,n__5496__auto___33746,jobs,results,process,async){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (__33747,c__29194__auto___33750,G__33578_33748,n__5496__auto___33746,jobs,results,process,async){
return (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (1))){
var state_33591__$1 = state_33591;
var statearr_33593_33751 = state_33591__$1;
(statearr_33593_33751[(2)] = null);

(statearr_33593_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (2))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33591__$1,(4),jobs);
} else {
if((state_val_33592 === (3))){
var inst_33589 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33591__$1,inst_33589);
} else {
if((state_val_33592 === (4))){
var inst_33581 = (state_33591[(2)]);
var inst_33582 = process.call(null,inst_33581);
var state_33591__$1 = state_33591;
if(cljs.core.truth_(inst_33582)){
var statearr_33594_33752 = state_33591__$1;
(statearr_33594_33752[(1)] = (5));

} else {
var statearr_33595_33753 = state_33591__$1;
(statearr_33595_33753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (5))){
var state_33591__$1 = state_33591;
var statearr_33596_33754 = state_33591__$1;
(statearr_33596_33754[(2)] = null);

(statearr_33596_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (6))){
var state_33591__$1 = state_33591;
var statearr_33597_33755 = state_33591__$1;
(statearr_33597_33755[(2)] = null);

(statearr_33597_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (7))){
var inst_33587 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33598_33756 = state_33591__$1;
(statearr_33598_33756[(2)] = inst_33587);

(statearr_33598_33756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33747,c__29194__auto___33750,G__33578_33748,n__5496__auto___33746,jobs,results,process,async))
;
return ((function (__33747,switch__29129__auto__,c__29194__auto___33750,G__33578_33748,n__5496__auto___33746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0 = (function (){
var statearr_33602 = [null,null,null,null,null,null,null];
(statearr_33602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__);

(statearr_33602[(1)] = (1));

return statearr_33602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1 = (function (state_33591){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33603){if((e33603 instanceof Object)){
var ex__29133__auto__ = e33603;
var statearr_33604_33757 = state_33591;
(statearr_33604_33757[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_33591;
state_33591 = G__33758;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__;
})()
;})(__33747,switch__29129__auto__,c__29194__auto___33750,G__33578_33748,n__5496__auto___33746,jobs,results,process,async))
})();
var state__29196__auto__ = (function (){var statearr_33605 = f__29195__auto__.call(null);
(statearr_33605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___33750);

return statearr_33605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(__33747,c__29194__auto___33750,G__33578_33748,n__5496__auto___33746,jobs,results,process,async))
);


break;
case "async":
var c__29194__auto___33759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33747,c__29194__auto___33759,G__33578_33748,n__5496__auto___33746,jobs,results,process,async){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (__33747,c__29194__auto___33759,G__33578_33748,n__5496__auto___33746,jobs,results,process,async){
return (function (state_33618){
var state_val_33619 = (state_33618[(1)]);
if((state_val_33619 === (1))){
var state_33618__$1 = state_33618;
var statearr_33620_33760 = state_33618__$1;
(statearr_33620_33760[(2)] = null);

(statearr_33620_33760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (2))){
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33618__$1,(4),jobs);
} else {
if((state_val_33619 === (3))){
var inst_33616 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33618__$1,inst_33616);
} else {
if((state_val_33619 === (4))){
var inst_33608 = (state_33618[(2)]);
var inst_33609 = async.call(null,inst_33608);
var state_33618__$1 = state_33618;
if(cljs.core.truth_(inst_33609)){
var statearr_33621_33761 = state_33618__$1;
(statearr_33621_33761[(1)] = (5));

} else {
var statearr_33622_33762 = state_33618__$1;
(statearr_33622_33762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (5))){
var state_33618__$1 = state_33618;
var statearr_33623_33763 = state_33618__$1;
(statearr_33623_33763[(2)] = null);

(statearr_33623_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (6))){
var state_33618__$1 = state_33618;
var statearr_33624_33764 = state_33618__$1;
(statearr_33624_33764[(2)] = null);

(statearr_33624_33764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (7))){
var inst_33614 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33625_33765 = state_33618__$1;
(statearr_33625_33765[(2)] = inst_33614);

(statearr_33625_33765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33747,c__29194__auto___33759,G__33578_33748,n__5496__auto___33746,jobs,results,process,async))
;
return ((function (__33747,switch__29129__auto__,c__29194__auto___33759,G__33578_33748,n__5496__auto___33746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0 = (function (){
var statearr_33629 = [null,null,null,null,null,null,null];
(statearr_33629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__);

(statearr_33629[(1)] = (1));

return statearr_33629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1 = (function (state_33618){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33630){if((e33630 instanceof Object)){
var ex__29133__auto__ = e33630;
var statearr_33631_33766 = state_33618;
(statearr_33631_33766[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33767 = state_33618;
state_33618 = G__33767;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = function(state_33618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1.call(this,state_33618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__;
})()
;})(__33747,switch__29129__auto__,c__29194__auto___33759,G__33578_33748,n__5496__auto___33746,jobs,results,process,async))
})();
var state__29196__auto__ = (function (){var statearr_33632 = f__29195__auto__.call(null);
(statearr_33632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___33759);

return statearr_33632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(__33747,c__29194__auto___33759,G__33578_33748,n__5496__auto___33746,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33768 = (__33747 + (1));
__33747 = G__33768;
continue;
} else {
}
break;
}

var c__29194__auto___33769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___33769,jobs,results,process,async){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___33769,jobs,results,process,async){
return (function (state_33654){
var state_val_33655 = (state_33654[(1)]);
if((state_val_33655 === (1))){
var state_33654__$1 = state_33654;
var statearr_33656_33770 = state_33654__$1;
(statearr_33656_33770[(2)] = null);

(statearr_33656_33770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (2))){
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33654__$1,(4),from);
} else {
if((state_val_33655 === (3))){
var inst_33652 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33654__$1,inst_33652);
} else {
if((state_val_33655 === (4))){
var inst_33635 = (state_33654[(7)]);
var inst_33635__$1 = (state_33654[(2)]);
var inst_33636 = (inst_33635__$1 == null);
var state_33654__$1 = (function (){var statearr_33657 = state_33654;
(statearr_33657[(7)] = inst_33635__$1);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33636)){
var statearr_33658_33771 = state_33654__$1;
(statearr_33658_33771[(1)] = (5));

} else {
var statearr_33659_33772 = state_33654__$1;
(statearr_33659_33772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (5))){
var inst_33638 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33654__$1 = state_33654;
var statearr_33660_33773 = state_33654__$1;
(statearr_33660_33773[(2)] = inst_33638);

(statearr_33660_33773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (6))){
var inst_33635 = (state_33654[(7)]);
var inst_33640 = (state_33654[(8)]);
var inst_33640__$1 = cljs.core.async.chan.call(null,(1));
var inst_33641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33642 = [inst_33635,inst_33640__$1];
var inst_33643 = (new cljs.core.PersistentVector(null,2,(5),inst_33641,inst_33642,null));
var state_33654__$1 = (function (){var statearr_33661 = state_33654;
(statearr_33661[(8)] = inst_33640__$1);

return statearr_33661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33654__$1,(8),jobs,inst_33643);
} else {
if((state_val_33655 === (7))){
var inst_33650 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33662_33774 = state_33654__$1;
(statearr_33662_33774[(2)] = inst_33650);

(statearr_33662_33774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (8))){
var inst_33640 = (state_33654[(8)]);
var inst_33645 = (state_33654[(2)]);
var state_33654__$1 = (function (){var statearr_33663 = state_33654;
(statearr_33663[(9)] = inst_33645);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33654__$1,(9),results,inst_33640);
} else {
if((state_val_33655 === (9))){
var inst_33647 = (state_33654[(2)]);
var state_33654__$1 = (function (){var statearr_33664 = state_33654;
(statearr_33664[(10)] = inst_33647);

return statearr_33664;
})();
var statearr_33665_33775 = state_33654__$1;
(statearr_33665_33775[(2)] = null);

(statearr_33665_33775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___33769,jobs,results,process,async))
;
return ((function (switch__29129__auto__,c__29194__auto___33769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0 = (function (){
var statearr_33669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__);

(statearr_33669[(1)] = (1));

return statearr_33669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1 = (function (state_33654){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33670){if((e33670 instanceof Object)){
var ex__29133__auto__ = e33670;
var statearr_33671_33776 = state_33654;
(statearr_33671_33776[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33777 = state_33654;
state_33654 = G__33777;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = function(state_33654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1.call(this,state_33654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___33769,jobs,results,process,async))
})();
var state__29196__auto__ = (function (){var statearr_33672 = f__29195__auto__.call(null);
(statearr_33672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___33769);

return statearr_33672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___33769,jobs,results,process,async))
);


var c__29194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto__,jobs,results,process,async){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto__,jobs,results,process,async){
return (function (state_33710){
var state_val_33711 = (state_33710[(1)]);
if((state_val_33711 === (7))){
var inst_33706 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33712_33778 = state_33710__$1;
(statearr_33712_33778[(2)] = inst_33706);

(statearr_33712_33778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (20))){
var state_33710__$1 = state_33710;
var statearr_33713_33779 = state_33710__$1;
(statearr_33713_33779[(2)] = null);

(statearr_33713_33779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (1))){
var state_33710__$1 = state_33710;
var statearr_33714_33780 = state_33710__$1;
(statearr_33714_33780[(2)] = null);

(statearr_33714_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (4))){
var inst_33675 = (state_33710[(7)]);
var inst_33675__$1 = (state_33710[(2)]);
var inst_33676 = (inst_33675__$1 == null);
var state_33710__$1 = (function (){var statearr_33715 = state_33710;
(statearr_33715[(7)] = inst_33675__$1);

return statearr_33715;
})();
if(cljs.core.truth_(inst_33676)){
var statearr_33716_33781 = state_33710__$1;
(statearr_33716_33781[(1)] = (5));

} else {
var statearr_33717_33782 = state_33710__$1;
(statearr_33717_33782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (15))){
var inst_33688 = (state_33710[(8)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33710__$1,(18),to,inst_33688);
} else {
if((state_val_33711 === (21))){
var inst_33701 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33718_33783 = state_33710__$1;
(statearr_33718_33783[(2)] = inst_33701);

(statearr_33718_33783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (13))){
var inst_33703 = (state_33710[(2)]);
var state_33710__$1 = (function (){var statearr_33719 = state_33710;
(statearr_33719[(9)] = inst_33703);

return statearr_33719;
})();
var statearr_33720_33784 = state_33710__$1;
(statearr_33720_33784[(2)] = null);

(statearr_33720_33784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (6))){
var inst_33675 = (state_33710[(7)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(11),inst_33675);
} else {
if((state_val_33711 === (17))){
var inst_33696 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
if(cljs.core.truth_(inst_33696)){
var statearr_33721_33785 = state_33710__$1;
(statearr_33721_33785[(1)] = (19));

} else {
var statearr_33722_33786 = state_33710__$1;
(statearr_33722_33786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (3))){
var inst_33708 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33710__$1,inst_33708);
} else {
if((state_val_33711 === (12))){
var inst_33685 = (state_33710[(10)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(14),inst_33685);
} else {
if((state_val_33711 === (2))){
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(4),results);
} else {
if((state_val_33711 === (19))){
var state_33710__$1 = state_33710;
var statearr_33723_33787 = state_33710__$1;
(statearr_33723_33787[(2)] = null);

(statearr_33723_33787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (11))){
var inst_33685 = (state_33710[(2)]);
var state_33710__$1 = (function (){var statearr_33724 = state_33710;
(statearr_33724[(10)] = inst_33685);

return statearr_33724;
})();
var statearr_33725_33788 = state_33710__$1;
(statearr_33725_33788[(2)] = null);

(statearr_33725_33788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (9))){
var state_33710__$1 = state_33710;
var statearr_33726_33789 = state_33710__$1;
(statearr_33726_33789[(2)] = null);

(statearr_33726_33789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (5))){
var state_33710__$1 = state_33710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33727_33790 = state_33710__$1;
(statearr_33727_33790[(1)] = (8));

} else {
var statearr_33728_33791 = state_33710__$1;
(statearr_33728_33791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (14))){
var inst_33688 = (state_33710[(8)]);
var inst_33690 = (state_33710[(11)]);
var inst_33688__$1 = (state_33710[(2)]);
var inst_33689 = (inst_33688__$1 == null);
var inst_33690__$1 = cljs.core.not.call(null,inst_33689);
var state_33710__$1 = (function (){var statearr_33729 = state_33710;
(statearr_33729[(8)] = inst_33688__$1);

(statearr_33729[(11)] = inst_33690__$1);

return statearr_33729;
})();
if(inst_33690__$1){
var statearr_33730_33792 = state_33710__$1;
(statearr_33730_33792[(1)] = (15));

} else {
var statearr_33731_33793 = state_33710__$1;
(statearr_33731_33793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (16))){
var inst_33690 = (state_33710[(11)]);
var state_33710__$1 = state_33710;
var statearr_33732_33794 = state_33710__$1;
(statearr_33732_33794[(2)] = inst_33690);

(statearr_33732_33794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (10))){
var inst_33682 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33733_33795 = state_33710__$1;
(statearr_33733_33795[(2)] = inst_33682);

(statearr_33733_33795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (18))){
var inst_33693 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33734_33796 = state_33710__$1;
(statearr_33734_33796[(2)] = inst_33693);

(statearr_33734_33796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (8))){
var inst_33679 = cljs.core.async.close_BANG_.call(null,to);
var state_33710__$1 = state_33710;
var statearr_33735_33797 = state_33710__$1;
(statearr_33735_33797[(2)] = inst_33679);

(statearr_33735_33797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto__,jobs,results,process,async))
;
return ((function (switch__29129__auto__,c__29194__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0 = (function (){
var statearr_33739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__);

(statearr_33739[(1)] = (1));

return statearr_33739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1 = (function (state_33710){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object)){
var ex__29133__auto__ = e33740;
var statearr_33741_33798 = state_33710;
(statearr_33741_33798[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_33710;
state_33710 = G__33799;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__ = function(state_33710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1.call(this,state_33710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto__,jobs,results,process,async))
})();
var state__29196__auto__ = (function (){var statearr_33742 = f__29195__auto__.call(null);
(statearr_33742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto__);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto__,jobs,results,process,async))
);

return c__29194__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args33800 = [];
var len__5651__auto___33803 = arguments.length;
var i__5652__auto___33804 = (0);
while(true){
if((i__5652__auto___33804 < len__5651__auto___33803)){
args33800.push((arguments[i__5652__auto___33804]));

var G__33805 = (i__5652__auto___33804 + (1));
i__5652__auto___33804 = G__33805;
continue;
} else {
}
break;
}

var G__33802 = args33800.length;
switch (G__33802) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33800.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args33807 = [];
var len__5651__auto___33810 = arguments.length;
var i__5652__auto___33811 = (0);
while(true){
if((i__5652__auto___33811 < len__5651__auto___33810)){
args33807.push((arguments[i__5652__auto___33811]));

var G__33812 = (i__5652__auto___33811 + (1));
i__5652__auto___33811 = G__33812;
continue;
} else {
}
break;
}

var G__33809 = args33807.length;
switch (G__33809) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33807.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args33814 = [];
var len__5651__auto___33867 = arguments.length;
var i__5652__auto___33868 = (0);
while(true){
if((i__5652__auto___33868 < len__5651__auto___33867)){
args33814.push((arguments[i__5652__auto___33868]));

var G__33869 = (i__5652__auto___33868 + (1));
i__5652__auto___33868 = G__33869;
continue;
} else {
}
break;
}

var G__33816 = args33814.length;
switch (G__33816) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33814.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29194__auto___33871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___33871,tc,fc){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___33871,tc,fc){
return (function (state_33842){
var state_val_33843 = (state_33842[(1)]);
if((state_val_33843 === (7))){
var inst_33838 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
var statearr_33844_33872 = state_33842__$1;
(statearr_33844_33872[(2)] = inst_33838);

(statearr_33844_33872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (1))){
var state_33842__$1 = state_33842;
var statearr_33845_33873 = state_33842__$1;
(statearr_33845_33873[(2)] = null);

(statearr_33845_33873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (4))){
var inst_33819 = (state_33842[(7)]);
var inst_33819__$1 = (state_33842[(2)]);
var inst_33820 = (inst_33819__$1 == null);
var state_33842__$1 = (function (){var statearr_33846 = state_33842;
(statearr_33846[(7)] = inst_33819__$1);

return statearr_33846;
})();
if(cljs.core.truth_(inst_33820)){
var statearr_33847_33874 = state_33842__$1;
(statearr_33847_33874[(1)] = (5));

} else {
var statearr_33848_33875 = state_33842__$1;
(statearr_33848_33875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (13))){
var state_33842__$1 = state_33842;
var statearr_33849_33876 = state_33842__$1;
(statearr_33849_33876[(2)] = null);

(statearr_33849_33876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (6))){
var inst_33819 = (state_33842[(7)]);
var inst_33825 = p.call(null,inst_33819);
var state_33842__$1 = state_33842;
if(cljs.core.truth_(inst_33825)){
var statearr_33850_33877 = state_33842__$1;
(statearr_33850_33877[(1)] = (9));

} else {
var statearr_33851_33878 = state_33842__$1;
(statearr_33851_33878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (3))){
var inst_33840 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33842__$1,inst_33840);
} else {
if((state_val_33843 === (12))){
var state_33842__$1 = state_33842;
var statearr_33852_33879 = state_33842__$1;
(statearr_33852_33879[(2)] = null);

(statearr_33852_33879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (2))){
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33842__$1,(4),ch);
} else {
if((state_val_33843 === (11))){
var inst_33819 = (state_33842[(7)]);
var inst_33829 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33842__$1,(8),inst_33829,inst_33819);
} else {
if((state_val_33843 === (9))){
var state_33842__$1 = state_33842;
var statearr_33853_33880 = state_33842__$1;
(statearr_33853_33880[(2)] = tc);

(statearr_33853_33880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (5))){
var inst_33822 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33823 = cljs.core.async.close_BANG_.call(null,fc);
var state_33842__$1 = (function (){var statearr_33854 = state_33842;
(statearr_33854[(8)] = inst_33822);

return statearr_33854;
})();
var statearr_33855_33881 = state_33842__$1;
(statearr_33855_33881[(2)] = inst_33823);

(statearr_33855_33881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (14))){
var inst_33836 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
var statearr_33856_33882 = state_33842__$1;
(statearr_33856_33882[(2)] = inst_33836);

(statearr_33856_33882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (10))){
var state_33842__$1 = state_33842;
var statearr_33857_33883 = state_33842__$1;
(statearr_33857_33883[(2)] = fc);

(statearr_33857_33883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (8))){
var inst_33831 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
if(cljs.core.truth_(inst_33831)){
var statearr_33858_33884 = state_33842__$1;
(statearr_33858_33884[(1)] = (12));

} else {
var statearr_33859_33885 = state_33842__$1;
(statearr_33859_33885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___33871,tc,fc))
;
return ((function (switch__29129__auto__,c__29194__auto___33871,tc,fc){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_33842){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33864){if((e33864 instanceof Object)){
var ex__29133__auto__ = e33864;
var statearr_33865_33886 = state_33842;
(statearr_33865_33886[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33887 = state_33842;
state_33842 = G__33887;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_33842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_33842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___33871,tc,fc))
})();
var state__29196__auto__ = (function (){var statearr_33866 = f__29195__auto__.call(null);
(statearr_33866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___33871);

return statearr_33866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___33871,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto__){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto__){
return (function (state_33934){
var state_val_33935 = (state_33934[(1)]);
if((state_val_33935 === (1))){
var inst_33920 = init;
var state_33934__$1 = (function (){var statearr_33936 = state_33934;
(statearr_33936[(7)] = inst_33920);

return statearr_33936;
})();
var statearr_33937_33952 = state_33934__$1;
(statearr_33937_33952[(2)] = null);

(statearr_33937_33952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (2))){
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33934__$1,(4),ch);
} else {
if((state_val_33935 === (3))){
var inst_33932 = (state_33934[(2)]);
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33934__$1,inst_33932);
} else {
if((state_val_33935 === (4))){
var inst_33923 = (state_33934[(8)]);
var inst_33923__$1 = (state_33934[(2)]);
var inst_33924 = (inst_33923__$1 == null);
var state_33934__$1 = (function (){var statearr_33938 = state_33934;
(statearr_33938[(8)] = inst_33923__$1);

return statearr_33938;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_33939_33953 = state_33934__$1;
(statearr_33939_33953[(1)] = (5));

} else {
var statearr_33940_33954 = state_33934__$1;
(statearr_33940_33954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (5))){
var inst_33920 = (state_33934[(7)]);
var state_33934__$1 = state_33934;
var statearr_33941_33955 = state_33934__$1;
(statearr_33941_33955[(2)] = inst_33920);

(statearr_33941_33955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (6))){
var inst_33920 = (state_33934[(7)]);
var inst_33923 = (state_33934[(8)]);
var inst_33927 = f.call(null,inst_33920,inst_33923);
var inst_33920__$1 = inst_33927;
var state_33934__$1 = (function (){var statearr_33942 = state_33934;
(statearr_33942[(7)] = inst_33920__$1);

return statearr_33942;
})();
var statearr_33943_33956 = state_33934__$1;
(statearr_33943_33956[(2)] = null);

(statearr_33943_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (7))){
var inst_33930 = (state_33934[(2)]);
var state_33934__$1 = state_33934;
var statearr_33944_33957 = state_33934__$1;
(statearr_33944_33957[(2)] = inst_33930);

(statearr_33944_33957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29194__auto__))
;
return ((function (switch__29129__auto__,c__29194__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29130__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29130__auto____0 = (function (){
var statearr_33948 = [null,null,null,null,null,null,null,null,null];
(statearr_33948[(0)] = cljs$core$async$reduce_$_state_machine__29130__auto__);

(statearr_33948[(1)] = (1));

return statearr_33948;
});
var cljs$core$async$reduce_$_state_machine__29130__auto____1 = (function (state_33934){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e33949){if((e33949 instanceof Object)){
var ex__29133__auto__ = e33949;
var statearr_33950_33958 = state_33934;
(statearr_33950_33958[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33959 = state_33934;
state_33934 = G__33959;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29130__auto__ = function(state_33934){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29130__auto____1.call(this,state_33934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29130__auto____0;
cljs$core$async$reduce_$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29130__auto____1;
return cljs$core$async$reduce_$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto__))
})();
var state__29196__auto__ = (function (){var statearr_33951 = f__29195__auto__.call(null);
(statearr_33951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto__);

return statearr_33951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto__))
);

return c__29194__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33960 = [];
var len__5651__auto___34012 = arguments.length;
var i__5652__auto___34013 = (0);
while(true){
if((i__5652__auto___34013 < len__5651__auto___34012)){
args33960.push((arguments[i__5652__auto___34013]));

var G__34014 = (i__5652__auto___34013 + (1));
i__5652__auto___34013 = G__34014;
continue;
} else {
}
break;
}

var G__33962 = args33960.length;
switch (G__33962) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33960.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto__){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto__){
return (function (state_33987){
var state_val_33988 = (state_33987[(1)]);
if((state_val_33988 === (7))){
var inst_33969 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
var statearr_33989_34016 = state_33987__$1;
(statearr_33989_34016[(2)] = inst_33969);

(statearr_33989_34016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (1))){
var inst_33963 = cljs.core.seq.call(null,coll);
var inst_33964 = inst_33963;
var state_33987__$1 = (function (){var statearr_33990 = state_33987;
(statearr_33990[(7)] = inst_33964);

return statearr_33990;
})();
var statearr_33991_34017 = state_33987__$1;
(statearr_33991_34017[(2)] = null);

(statearr_33991_34017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (4))){
var inst_33964 = (state_33987[(7)]);
var inst_33967 = cljs.core.first.call(null,inst_33964);
var state_33987__$1 = state_33987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33987__$1,(7),ch,inst_33967);
} else {
if((state_val_33988 === (13))){
var inst_33981 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
var statearr_33992_34018 = state_33987__$1;
(statearr_33992_34018[(2)] = inst_33981);

(statearr_33992_34018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (6))){
var inst_33972 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
if(cljs.core.truth_(inst_33972)){
var statearr_33993_34019 = state_33987__$1;
(statearr_33993_34019[(1)] = (8));

} else {
var statearr_33994_34020 = state_33987__$1;
(statearr_33994_34020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (3))){
var inst_33985 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33987__$1,inst_33985);
} else {
if((state_val_33988 === (12))){
var state_33987__$1 = state_33987;
var statearr_33995_34021 = state_33987__$1;
(statearr_33995_34021[(2)] = null);

(statearr_33995_34021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (2))){
var inst_33964 = (state_33987[(7)]);
var state_33987__$1 = state_33987;
if(cljs.core.truth_(inst_33964)){
var statearr_33996_34022 = state_33987__$1;
(statearr_33996_34022[(1)] = (4));

} else {
var statearr_33997_34023 = state_33987__$1;
(statearr_33997_34023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (11))){
var inst_33978 = cljs.core.async.close_BANG_.call(null,ch);
var state_33987__$1 = state_33987;
var statearr_33998_34024 = state_33987__$1;
(statearr_33998_34024[(2)] = inst_33978);

(statearr_33998_34024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (9))){
var state_33987__$1 = state_33987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33999_34025 = state_33987__$1;
(statearr_33999_34025[(1)] = (11));

} else {
var statearr_34000_34026 = state_33987__$1;
(statearr_34000_34026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (5))){
var inst_33964 = (state_33987[(7)]);
var state_33987__$1 = state_33987;
var statearr_34001_34027 = state_33987__$1;
(statearr_34001_34027[(2)] = inst_33964);

(statearr_34001_34027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (10))){
var inst_33983 = (state_33987[(2)]);
var state_33987__$1 = state_33987;
var statearr_34002_34028 = state_33987__$1;
(statearr_34002_34028[(2)] = inst_33983);

(statearr_34002_34028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33988 === (8))){
var inst_33964 = (state_33987[(7)]);
var inst_33974 = cljs.core.next.call(null,inst_33964);
var inst_33964__$1 = inst_33974;
var state_33987__$1 = (function (){var statearr_34003 = state_33987;
(statearr_34003[(7)] = inst_33964__$1);

return statearr_34003;
})();
var statearr_34004_34029 = state_33987__$1;
(statearr_34004_34029[(2)] = null);

(statearr_34004_34029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto__))
;
return ((function (switch__29129__auto__,c__29194__auto__){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_34008 = [null,null,null,null,null,null,null,null];
(statearr_34008[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_34008[(1)] = (1));

return statearr_34008;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_33987){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_33987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e34009){if((e34009 instanceof Object)){
var ex__29133__auto__ = e34009;
var statearr_34010_34030 = state_33987;
(statearr_34010_34030[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34031 = state_33987;
state_33987 = G__34031;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_33987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_33987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto__))
})();
var state__29196__auto__ = (function (){var statearr_34011 = f__29195__auto__.call(null);
(statearr_34011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto__);

return statearr_34011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto__))
);

return c__29194__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5248__auto__ = (((_ == null))?null:_);
var m__5249__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,_);
} else {
var m__5249__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5249__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m,ch);
} else {
var m__5249__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m);
} else {
var m__5249__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34253 = (function (mult,ch,cs,meta34254){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34254 = meta34254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34255,meta34254__$1){
var self__ = this;
var _34255__$1 = this;
return (new cljs.core.async.t_cljs$core$async34253(self__.mult,self__.ch,self__.cs,meta34254__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34255){
var self__ = this;
var _34255__$1 = this;
return self__.meta34254;
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34254","meta34254",-1770146121,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34253";

cljs.core.async.t_cljs$core$async34253.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async34253");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34253 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34253(mult__$1,ch__$1,cs__$1,meta34254){
return (new cljs.core.async.t_cljs$core$async34253(mult__$1,ch__$1,cs__$1,meta34254));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34253(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29194__auto___34474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___34474,cs,m,dchan,dctr,done){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___34474,cs,m,dchan,dctr,done){
return (function (state_34386){
var state_val_34387 = (state_34386[(1)]);
if((state_val_34387 === (7))){
var inst_34382 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34388_34475 = state_34386__$1;
(statearr_34388_34475[(2)] = inst_34382);

(statearr_34388_34475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (20))){
var inst_34287 = (state_34386[(7)]);
var inst_34297 = cljs.core.first.call(null,inst_34287);
var inst_34298 = cljs.core.nth.call(null,inst_34297,(0),null);
var inst_34299 = cljs.core.nth.call(null,inst_34297,(1),null);
var state_34386__$1 = (function (){var statearr_34389 = state_34386;
(statearr_34389[(8)] = inst_34298);

return statearr_34389;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34390_34476 = state_34386__$1;
(statearr_34390_34476[(1)] = (22));

} else {
var statearr_34391_34477 = state_34386__$1;
(statearr_34391_34477[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (27))){
var inst_34334 = (state_34386[(9)]);
var inst_34327 = (state_34386[(10)]);
var inst_34258 = (state_34386[(11)]);
var inst_34329 = (state_34386[(12)]);
var inst_34334__$1 = cljs.core._nth.call(null,inst_34327,inst_34329);
var inst_34335 = cljs.core.async.put_BANG_.call(null,inst_34334__$1,inst_34258,done);
var state_34386__$1 = (function (){var statearr_34392 = state_34386;
(statearr_34392[(9)] = inst_34334__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34335)){
var statearr_34393_34478 = state_34386__$1;
(statearr_34393_34478[(1)] = (30));

} else {
var statearr_34394_34479 = state_34386__$1;
(statearr_34394_34479[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (1))){
var state_34386__$1 = state_34386;
var statearr_34395_34480 = state_34386__$1;
(statearr_34395_34480[(2)] = null);

(statearr_34395_34480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (24))){
var inst_34287 = (state_34386[(7)]);
var inst_34304 = (state_34386[(2)]);
var inst_34305 = cljs.core.next.call(null,inst_34287);
var inst_34267 = inst_34305;
var inst_34268 = null;
var inst_34269 = (0);
var inst_34270 = (0);
var state_34386__$1 = (function (){var statearr_34396 = state_34386;
(statearr_34396[(13)] = inst_34269);

(statearr_34396[(14)] = inst_34268);

(statearr_34396[(15)] = inst_34270);

(statearr_34396[(16)] = inst_34267);

(statearr_34396[(17)] = inst_34304);

return statearr_34396;
})();
var statearr_34397_34481 = state_34386__$1;
(statearr_34397_34481[(2)] = null);

(statearr_34397_34481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (39))){
var state_34386__$1 = state_34386;
var statearr_34401_34482 = state_34386__$1;
(statearr_34401_34482[(2)] = null);

(statearr_34401_34482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (4))){
var inst_34258 = (state_34386[(11)]);
var inst_34258__$1 = (state_34386[(2)]);
var inst_34259 = (inst_34258__$1 == null);
var state_34386__$1 = (function (){var statearr_34402 = state_34386;
(statearr_34402[(11)] = inst_34258__$1);

return statearr_34402;
})();
if(cljs.core.truth_(inst_34259)){
var statearr_34403_34483 = state_34386__$1;
(statearr_34403_34483[(1)] = (5));

} else {
var statearr_34404_34484 = state_34386__$1;
(statearr_34404_34484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (15))){
var inst_34269 = (state_34386[(13)]);
var inst_34268 = (state_34386[(14)]);
var inst_34270 = (state_34386[(15)]);
var inst_34267 = (state_34386[(16)]);
var inst_34283 = (state_34386[(2)]);
var inst_34284 = (inst_34270 + (1));
var tmp34398 = inst_34269;
var tmp34399 = inst_34268;
var tmp34400 = inst_34267;
var inst_34267__$1 = tmp34400;
var inst_34268__$1 = tmp34399;
var inst_34269__$1 = tmp34398;
var inst_34270__$1 = inst_34284;
var state_34386__$1 = (function (){var statearr_34405 = state_34386;
(statearr_34405[(13)] = inst_34269__$1);

(statearr_34405[(14)] = inst_34268__$1);

(statearr_34405[(15)] = inst_34270__$1);

(statearr_34405[(18)] = inst_34283);

(statearr_34405[(16)] = inst_34267__$1);

return statearr_34405;
})();
var statearr_34406_34485 = state_34386__$1;
(statearr_34406_34485[(2)] = null);

(statearr_34406_34485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (21))){
var inst_34308 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34410_34486 = state_34386__$1;
(statearr_34410_34486[(2)] = inst_34308);

(statearr_34410_34486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (31))){
var inst_34334 = (state_34386[(9)]);
var inst_34338 = done.call(null,null);
var inst_34339 = cljs.core.async.untap_STAR_.call(null,m,inst_34334);
var state_34386__$1 = (function (){var statearr_34411 = state_34386;
(statearr_34411[(19)] = inst_34338);

return statearr_34411;
})();
var statearr_34412_34487 = state_34386__$1;
(statearr_34412_34487[(2)] = inst_34339);

(statearr_34412_34487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (32))){
var inst_34328 = (state_34386[(20)]);
var inst_34327 = (state_34386[(10)]);
var inst_34326 = (state_34386[(21)]);
var inst_34329 = (state_34386[(12)]);
var inst_34341 = (state_34386[(2)]);
var inst_34342 = (inst_34329 + (1));
var tmp34407 = inst_34328;
var tmp34408 = inst_34327;
var tmp34409 = inst_34326;
var inst_34326__$1 = tmp34409;
var inst_34327__$1 = tmp34408;
var inst_34328__$1 = tmp34407;
var inst_34329__$1 = inst_34342;
var state_34386__$1 = (function (){var statearr_34413 = state_34386;
(statearr_34413[(22)] = inst_34341);

(statearr_34413[(20)] = inst_34328__$1);

(statearr_34413[(10)] = inst_34327__$1);

(statearr_34413[(21)] = inst_34326__$1);

(statearr_34413[(12)] = inst_34329__$1);

return statearr_34413;
})();
var statearr_34414_34488 = state_34386__$1;
(statearr_34414_34488[(2)] = null);

(statearr_34414_34488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (40))){
var inst_34354 = (state_34386[(23)]);
var inst_34358 = done.call(null,null);
var inst_34359 = cljs.core.async.untap_STAR_.call(null,m,inst_34354);
var state_34386__$1 = (function (){var statearr_34415 = state_34386;
(statearr_34415[(24)] = inst_34358);

return statearr_34415;
})();
var statearr_34416_34489 = state_34386__$1;
(statearr_34416_34489[(2)] = inst_34359);

(statearr_34416_34489[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (33))){
var inst_34345 = (state_34386[(25)]);
var inst_34347 = cljs.core.chunked_seq_QMARK_.call(null,inst_34345);
var state_34386__$1 = state_34386;
if(inst_34347){
var statearr_34417_34490 = state_34386__$1;
(statearr_34417_34490[(1)] = (36));

} else {
var statearr_34418_34491 = state_34386__$1;
(statearr_34418_34491[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (13))){
var inst_34277 = (state_34386[(26)]);
var inst_34280 = cljs.core.async.close_BANG_.call(null,inst_34277);
var state_34386__$1 = state_34386;
var statearr_34419_34492 = state_34386__$1;
(statearr_34419_34492[(2)] = inst_34280);

(statearr_34419_34492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (22))){
var inst_34298 = (state_34386[(8)]);
var inst_34301 = cljs.core.async.close_BANG_.call(null,inst_34298);
var state_34386__$1 = state_34386;
var statearr_34420_34493 = state_34386__$1;
(statearr_34420_34493[(2)] = inst_34301);

(statearr_34420_34493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (36))){
var inst_34345 = (state_34386[(25)]);
var inst_34349 = cljs.core.chunk_first.call(null,inst_34345);
var inst_34350 = cljs.core.chunk_rest.call(null,inst_34345);
var inst_34351 = cljs.core.count.call(null,inst_34349);
var inst_34326 = inst_34350;
var inst_34327 = inst_34349;
var inst_34328 = inst_34351;
var inst_34329 = (0);
var state_34386__$1 = (function (){var statearr_34421 = state_34386;
(statearr_34421[(20)] = inst_34328);

(statearr_34421[(10)] = inst_34327);

(statearr_34421[(21)] = inst_34326);

(statearr_34421[(12)] = inst_34329);

return statearr_34421;
})();
var statearr_34422_34494 = state_34386__$1;
(statearr_34422_34494[(2)] = null);

(statearr_34422_34494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (41))){
var inst_34345 = (state_34386[(25)]);
var inst_34361 = (state_34386[(2)]);
var inst_34362 = cljs.core.next.call(null,inst_34345);
var inst_34326 = inst_34362;
var inst_34327 = null;
var inst_34328 = (0);
var inst_34329 = (0);
var state_34386__$1 = (function (){var statearr_34423 = state_34386;
(statearr_34423[(27)] = inst_34361);

(statearr_34423[(20)] = inst_34328);

(statearr_34423[(10)] = inst_34327);

(statearr_34423[(21)] = inst_34326);

(statearr_34423[(12)] = inst_34329);

return statearr_34423;
})();
var statearr_34424_34495 = state_34386__$1;
(statearr_34424_34495[(2)] = null);

(statearr_34424_34495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (43))){
var state_34386__$1 = state_34386;
var statearr_34425_34496 = state_34386__$1;
(statearr_34425_34496[(2)] = null);

(statearr_34425_34496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (29))){
var inst_34370 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34426_34497 = state_34386__$1;
(statearr_34426_34497[(2)] = inst_34370);

(statearr_34426_34497[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (44))){
var inst_34379 = (state_34386[(2)]);
var state_34386__$1 = (function (){var statearr_34427 = state_34386;
(statearr_34427[(28)] = inst_34379);

return statearr_34427;
})();
var statearr_34428_34498 = state_34386__$1;
(statearr_34428_34498[(2)] = null);

(statearr_34428_34498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (6))){
var inst_34318 = (state_34386[(29)]);
var inst_34317 = cljs.core.deref.call(null,cs);
var inst_34318__$1 = cljs.core.keys.call(null,inst_34317);
var inst_34319 = cljs.core.count.call(null,inst_34318__$1);
var inst_34320 = cljs.core.reset_BANG_.call(null,dctr,inst_34319);
var inst_34325 = cljs.core.seq.call(null,inst_34318__$1);
var inst_34326 = inst_34325;
var inst_34327 = null;
var inst_34328 = (0);
var inst_34329 = (0);
var state_34386__$1 = (function (){var statearr_34429 = state_34386;
(statearr_34429[(29)] = inst_34318__$1);

(statearr_34429[(30)] = inst_34320);

(statearr_34429[(20)] = inst_34328);

(statearr_34429[(10)] = inst_34327);

(statearr_34429[(21)] = inst_34326);

(statearr_34429[(12)] = inst_34329);

return statearr_34429;
})();
var statearr_34430_34499 = state_34386__$1;
(statearr_34430_34499[(2)] = null);

(statearr_34430_34499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (28))){
var inst_34345 = (state_34386[(25)]);
var inst_34326 = (state_34386[(21)]);
var inst_34345__$1 = cljs.core.seq.call(null,inst_34326);
var state_34386__$1 = (function (){var statearr_34431 = state_34386;
(statearr_34431[(25)] = inst_34345__$1);

return statearr_34431;
})();
if(inst_34345__$1){
var statearr_34432_34500 = state_34386__$1;
(statearr_34432_34500[(1)] = (33));

} else {
var statearr_34433_34501 = state_34386__$1;
(statearr_34433_34501[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (25))){
var inst_34328 = (state_34386[(20)]);
var inst_34329 = (state_34386[(12)]);
var inst_34331 = (inst_34329 < inst_34328);
var inst_34332 = inst_34331;
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34332)){
var statearr_34434_34502 = state_34386__$1;
(statearr_34434_34502[(1)] = (27));

} else {
var statearr_34435_34503 = state_34386__$1;
(statearr_34435_34503[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (34))){
var state_34386__$1 = state_34386;
var statearr_34436_34504 = state_34386__$1;
(statearr_34436_34504[(2)] = null);

(statearr_34436_34504[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (17))){
var state_34386__$1 = state_34386;
var statearr_34437_34505 = state_34386__$1;
(statearr_34437_34505[(2)] = null);

(statearr_34437_34505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (3))){
var inst_34384 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34386__$1,inst_34384);
} else {
if((state_val_34387 === (12))){
var inst_34313 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34438_34506 = state_34386__$1;
(statearr_34438_34506[(2)] = inst_34313);

(statearr_34438_34506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (2))){
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34386__$1,(4),ch);
} else {
if((state_val_34387 === (23))){
var state_34386__$1 = state_34386;
var statearr_34439_34507 = state_34386__$1;
(statearr_34439_34507[(2)] = null);

(statearr_34439_34507[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (35))){
var inst_34368 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34440_34508 = state_34386__$1;
(statearr_34440_34508[(2)] = inst_34368);

(statearr_34440_34508[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (19))){
var inst_34287 = (state_34386[(7)]);
var inst_34291 = cljs.core.chunk_first.call(null,inst_34287);
var inst_34292 = cljs.core.chunk_rest.call(null,inst_34287);
var inst_34293 = cljs.core.count.call(null,inst_34291);
var inst_34267 = inst_34292;
var inst_34268 = inst_34291;
var inst_34269 = inst_34293;
var inst_34270 = (0);
var state_34386__$1 = (function (){var statearr_34441 = state_34386;
(statearr_34441[(13)] = inst_34269);

(statearr_34441[(14)] = inst_34268);

(statearr_34441[(15)] = inst_34270);

(statearr_34441[(16)] = inst_34267);

return statearr_34441;
})();
var statearr_34442_34509 = state_34386__$1;
(statearr_34442_34509[(2)] = null);

(statearr_34442_34509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (11))){
var inst_34287 = (state_34386[(7)]);
var inst_34267 = (state_34386[(16)]);
var inst_34287__$1 = cljs.core.seq.call(null,inst_34267);
var state_34386__$1 = (function (){var statearr_34443 = state_34386;
(statearr_34443[(7)] = inst_34287__$1);

return statearr_34443;
})();
if(inst_34287__$1){
var statearr_34444_34510 = state_34386__$1;
(statearr_34444_34510[(1)] = (16));

} else {
var statearr_34445_34511 = state_34386__$1;
(statearr_34445_34511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (9))){
var inst_34315 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34446_34512 = state_34386__$1;
(statearr_34446_34512[(2)] = inst_34315);

(statearr_34446_34512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (5))){
var inst_34265 = cljs.core.deref.call(null,cs);
var inst_34266 = cljs.core.seq.call(null,inst_34265);
var inst_34267 = inst_34266;
var inst_34268 = null;
var inst_34269 = (0);
var inst_34270 = (0);
var state_34386__$1 = (function (){var statearr_34447 = state_34386;
(statearr_34447[(13)] = inst_34269);

(statearr_34447[(14)] = inst_34268);

(statearr_34447[(15)] = inst_34270);

(statearr_34447[(16)] = inst_34267);

return statearr_34447;
})();
var statearr_34448_34513 = state_34386__$1;
(statearr_34448_34513[(2)] = null);

(statearr_34448_34513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (14))){
var state_34386__$1 = state_34386;
var statearr_34449_34514 = state_34386__$1;
(statearr_34449_34514[(2)] = null);

(statearr_34449_34514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (45))){
var inst_34376 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34450_34515 = state_34386__$1;
(statearr_34450_34515[(2)] = inst_34376);

(statearr_34450_34515[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (26))){
var inst_34318 = (state_34386[(29)]);
var inst_34372 = (state_34386[(2)]);
var inst_34373 = cljs.core.seq.call(null,inst_34318);
var state_34386__$1 = (function (){var statearr_34451 = state_34386;
(statearr_34451[(31)] = inst_34372);

return statearr_34451;
})();
if(inst_34373){
var statearr_34452_34516 = state_34386__$1;
(statearr_34452_34516[(1)] = (42));

} else {
var statearr_34453_34517 = state_34386__$1;
(statearr_34453_34517[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (16))){
var inst_34287 = (state_34386[(7)]);
var inst_34289 = cljs.core.chunked_seq_QMARK_.call(null,inst_34287);
var state_34386__$1 = state_34386;
if(inst_34289){
var statearr_34454_34518 = state_34386__$1;
(statearr_34454_34518[(1)] = (19));

} else {
var statearr_34455_34519 = state_34386__$1;
(statearr_34455_34519[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (38))){
var inst_34365 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34456_34520 = state_34386__$1;
(statearr_34456_34520[(2)] = inst_34365);

(statearr_34456_34520[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (30))){
var state_34386__$1 = state_34386;
var statearr_34457_34521 = state_34386__$1;
(statearr_34457_34521[(2)] = null);

(statearr_34457_34521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (10))){
var inst_34268 = (state_34386[(14)]);
var inst_34270 = (state_34386[(15)]);
var inst_34276 = cljs.core._nth.call(null,inst_34268,inst_34270);
var inst_34277 = cljs.core.nth.call(null,inst_34276,(0),null);
var inst_34278 = cljs.core.nth.call(null,inst_34276,(1),null);
var state_34386__$1 = (function (){var statearr_34458 = state_34386;
(statearr_34458[(26)] = inst_34277);

return statearr_34458;
})();
if(cljs.core.truth_(inst_34278)){
var statearr_34459_34522 = state_34386__$1;
(statearr_34459_34522[(1)] = (13));

} else {
var statearr_34460_34523 = state_34386__$1;
(statearr_34460_34523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (18))){
var inst_34311 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34461_34524 = state_34386__$1;
(statearr_34461_34524[(2)] = inst_34311);

(statearr_34461_34524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (42))){
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34386__$1,(45),dchan);
} else {
if((state_val_34387 === (37))){
var inst_34345 = (state_34386[(25)]);
var inst_34354 = (state_34386[(23)]);
var inst_34258 = (state_34386[(11)]);
var inst_34354__$1 = cljs.core.first.call(null,inst_34345);
var inst_34355 = cljs.core.async.put_BANG_.call(null,inst_34354__$1,inst_34258,done);
var state_34386__$1 = (function (){var statearr_34462 = state_34386;
(statearr_34462[(23)] = inst_34354__$1);

return statearr_34462;
})();
if(cljs.core.truth_(inst_34355)){
var statearr_34463_34525 = state_34386__$1;
(statearr_34463_34525[(1)] = (39));

} else {
var statearr_34464_34526 = state_34386__$1;
(statearr_34464_34526[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (8))){
var inst_34269 = (state_34386[(13)]);
var inst_34270 = (state_34386[(15)]);
var inst_34272 = (inst_34270 < inst_34269);
var inst_34273 = inst_34272;
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34273)){
var statearr_34465_34527 = state_34386__$1;
(statearr_34465_34527[(1)] = (10));

} else {
var statearr_34466_34528 = state_34386__$1;
(statearr_34466_34528[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___34474,cs,m,dchan,dctr,done))
;
return ((function (switch__29129__auto__,c__29194__auto___34474,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29130__auto__ = null;
var cljs$core$async$mult_$_state_machine__29130__auto____0 = (function (){
var statearr_34470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34470[(0)] = cljs$core$async$mult_$_state_machine__29130__auto__);

(statearr_34470[(1)] = (1));

return statearr_34470;
});
var cljs$core$async$mult_$_state_machine__29130__auto____1 = (function (state_34386){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_34386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e34471){if((e34471 instanceof Object)){
var ex__29133__auto__ = e34471;
var statearr_34472_34529 = state_34386;
(statearr_34472_34529[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_34386;
state_34386 = G__34530;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29130__auto__ = function(state_34386){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29130__auto____1.call(this,state_34386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29130__auto____0;
cljs$core$async$mult_$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29130__auto____1;
return cljs$core$async$mult_$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___34474,cs,m,dchan,dctr,done))
})();
var state__29196__auto__ = (function (){var statearr_34473 = f__29195__auto__.call(null);
(statearr_34473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___34474);

return statearr_34473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___34474,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34531 = [];
var len__5651__auto___34534 = arguments.length;
var i__5652__auto___34535 = (0);
while(true){
if((i__5652__auto___34535 < len__5651__auto___34534)){
args34531.push((arguments[i__5652__auto___34535]));

var G__34536 = (i__5652__auto___34535 + (1));
i__5652__auto___34535 = G__34536;
continue;
} else {
}
break;
}

var G__34533 = args34531.length;
switch (G__34533) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34531.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m,ch);
} else {
var m__5249__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m,ch);
} else {
var m__5249__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m);
} else {
var m__5249__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m,state_map);
} else {
var m__5249__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5248__auto__ = (((m == null))?null:m);
var m__5249__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,m,mode);
} else {
var m__5249__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5658__auto__ = [];
var len__5651__auto___34548 = arguments.length;
var i__5652__auto___34549 = (0);
while(true){
if((i__5652__auto___34549 < len__5651__auto___34548)){
args__5658__auto__.push((arguments[i__5652__auto___34549]));

var G__34550 = (i__5652__auto___34549 + (1));
i__5652__auto___34549 = G__34550;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((3) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34542){
var map__34543 = p__34542;
var map__34543__$1 = ((((!((map__34543 == null)))?((((map__34543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34543):map__34543);
var opts = map__34543__$1;
var statearr_34545_34551 = state;
(statearr_34545_34551[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__34543,map__34543__$1,opts){
return (function (val){
var statearr_34546_34552 = state;
(statearr_34546_34552[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34543,map__34543__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_34547_34553 = state;
(statearr_34547_34553[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34538){
var G__34539 = cljs.core.first.call(null,seq34538);
var seq34538__$1 = cljs.core.next.call(null,seq34538);
var G__34540 = cljs.core.first.call(null,seq34538__$1);
var seq34538__$2 = cljs.core.next.call(null,seq34538__$1);
var G__34541 = cljs.core.first.call(null,seq34538__$2);
var seq34538__$3 = cljs.core.next.call(null,seq34538__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34539,G__34540,G__34541,seq34538__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34717 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34718){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34718 = meta34718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34719,meta34718__$1){
var self__ = this;
var _34719__$1 = this;
return (new cljs.core.async.t_cljs$core$async34717(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34718__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34719){
var self__ = this;
var _34719__$1 = this;
return self__.meta34718;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34718","meta34718",519245169,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34717";

cljs.core.async.t_cljs$core$async34717.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async34717");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34717 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34717(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34718){
return (new cljs.core.async.t_cljs$core$async34717(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34718));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34717(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29194__auto___34880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___34880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___34880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34817){
var state_val_34818 = (state_34817[(1)]);
if((state_val_34818 === (7))){
var inst_34735 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34819_34881 = state_34817__$1;
(statearr_34819_34881[(2)] = inst_34735);

(statearr_34819_34881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (20))){
var inst_34747 = (state_34817[(7)]);
var state_34817__$1 = state_34817;
var statearr_34820_34882 = state_34817__$1;
(statearr_34820_34882[(2)] = inst_34747);

(statearr_34820_34882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (27))){
var state_34817__$1 = state_34817;
var statearr_34821_34883 = state_34817__$1;
(statearr_34821_34883[(2)] = null);

(statearr_34821_34883[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (1))){
var inst_34723 = (state_34817[(8)]);
var inst_34723__$1 = calc_state.call(null);
var inst_34725 = (inst_34723__$1 == null);
var inst_34726 = cljs.core.not.call(null,inst_34725);
var state_34817__$1 = (function (){var statearr_34822 = state_34817;
(statearr_34822[(8)] = inst_34723__$1);

return statearr_34822;
})();
if(inst_34726){
var statearr_34823_34884 = state_34817__$1;
(statearr_34823_34884[(1)] = (2));

} else {
var statearr_34824_34885 = state_34817__$1;
(statearr_34824_34885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (24))){
var inst_34770 = (state_34817[(9)]);
var inst_34791 = (state_34817[(10)]);
var inst_34777 = (state_34817[(11)]);
var inst_34791__$1 = inst_34770.call(null,inst_34777);
var state_34817__$1 = (function (){var statearr_34825 = state_34817;
(statearr_34825[(10)] = inst_34791__$1);

return statearr_34825;
})();
if(cljs.core.truth_(inst_34791__$1)){
var statearr_34826_34886 = state_34817__$1;
(statearr_34826_34886[(1)] = (29));

} else {
var statearr_34827_34887 = state_34817__$1;
(statearr_34827_34887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (4))){
var inst_34738 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34738)){
var statearr_34828_34888 = state_34817__$1;
(statearr_34828_34888[(1)] = (8));

} else {
var statearr_34829_34889 = state_34817__$1;
(statearr_34829_34889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (15))){
var inst_34764 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34764)){
var statearr_34830_34890 = state_34817__$1;
(statearr_34830_34890[(1)] = (19));

} else {
var statearr_34831_34891 = state_34817__$1;
(statearr_34831_34891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (21))){
var inst_34769 = (state_34817[(12)]);
var inst_34769__$1 = (state_34817[(2)]);
var inst_34770 = cljs.core.get.call(null,inst_34769__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34771 = cljs.core.get.call(null,inst_34769__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34772 = cljs.core.get.call(null,inst_34769__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34817__$1 = (function (){var statearr_34832 = state_34817;
(statearr_34832[(13)] = inst_34771);

(statearr_34832[(12)] = inst_34769__$1);

(statearr_34832[(9)] = inst_34770);

return statearr_34832;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34817__$1,(22),inst_34772);
} else {
if((state_val_34818 === (31))){
var inst_34799 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34799)){
var statearr_34833_34892 = state_34817__$1;
(statearr_34833_34892[(1)] = (32));

} else {
var statearr_34834_34893 = state_34817__$1;
(statearr_34834_34893[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (32))){
var inst_34776 = (state_34817[(14)]);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34817__$1,(35),out,inst_34776);
} else {
if((state_val_34818 === (33))){
var inst_34769 = (state_34817[(12)]);
var inst_34747 = inst_34769;
var state_34817__$1 = (function (){var statearr_34835 = state_34817;
(statearr_34835[(7)] = inst_34747);

return statearr_34835;
})();
var statearr_34836_34894 = state_34817__$1;
(statearr_34836_34894[(2)] = null);

(statearr_34836_34894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (13))){
var inst_34747 = (state_34817[(7)]);
var inst_34754 = inst_34747.cljs$lang$protocol_mask$partition0$;
var inst_34755 = (inst_34754 & (64));
var inst_34756 = inst_34747.cljs$core$ISeq$;
var inst_34757 = (inst_34755) || (inst_34756);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34757)){
var statearr_34837_34895 = state_34817__$1;
(statearr_34837_34895[(1)] = (16));

} else {
var statearr_34838_34896 = state_34817__$1;
(statearr_34838_34896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (22))){
var inst_34776 = (state_34817[(14)]);
var inst_34777 = (state_34817[(11)]);
var inst_34775 = (state_34817[(2)]);
var inst_34776__$1 = cljs.core.nth.call(null,inst_34775,(0),null);
var inst_34777__$1 = cljs.core.nth.call(null,inst_34775,(1),null);
var inst_34778 = (inst_34776__$1 == null);
var inst_34779 = cljs.core._EQ_.call(null,inst_34777__$1,change);
var inst_34780 = (inst_34778) || (inst_34779);
var state_34817__$1 = (function (){var statearr_34839 = state_34817;
(statearr_34839[(14)] = inst_34776__$1);

(statearr_34839[(11)] = inst_34777__$1);

return statearr_34839;
})();
if(cljs.core.truth_(inst_34780)){
var statearr_34840_34897 = state_34817__$1;
(statearr_34840_34897[(1)] = (23));

} else {
var statearr_34841_34898 = state_34817__$1;
(statearr_34841_34898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (36))){
var inst_34769 = (state_34817[(12)]);
var inst_34747 = inst_34769;
var state_34817__$1 = (function (){var statearr_34842 = state_34817;
(statearr_34842[(7)] = inst_34747);

return statearr_34842;
})();
var statearr_34843_34899 = state_34817__$1;
(statearr_34843_34899[(2)] = null);

(statearr_34843_34899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (29))){
var inst_34791 = (state_34817[(10)]);
var state_34817__$1 = state_34817;
var statearr_34844_34900 = state_34817__$1;
(statearr_34844_34900[(2)] = inst_34791);

(statearr_34844_34900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (6))){
var state_34817__$1 = state_34817;
var statearr_34845_34901 = state_34817__$1;
(statearr_34845_34901[(2)] = false);

(statearr_34845_34901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (28))){
var inst_34787 = (state_34817[(2)]);
var inst_34788 = calc_state.call(null);
var inst_34747 = inst_34788;
var state_34817__$1 = (function (){var statearr_34846 = state_34817;
(statearr_34846[(15)] = inst_34787);

(statearr_34846[(7)] = inst_34747);

return statearr_34846;
})();
var statearr_34847_34902 = state_34817__$1;
(statearr_34847_34902[(2)] = null);

(statearr_34847_34902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (25))){
var inst_34813 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34848_34903 = state_34817__$1;
(statearr_34848_34903[(2)] = inst_34813);

(statearr_34848_34903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (34))){
var inst_34811 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34849_34904 = state_34817__$1;
(statearr_34849_34904[(2)] = inst_34811);

(statearr_34849_34904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (17))){
var state_34817__$1 = state_34817;
var statearr_34850_34905 = state_34817__$1;
(statearr_34850_34905[(2)] = false);

(statearr_34850_34905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (3))){
var state_34817__$1 = state_34817;
var statearr_34851_34906 = state_34817__$1;
(statearr_34851_34906[(2)] = false);

(statearr_34851_34906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (12))){
var inst_34815 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34817__$1,inst_34815);
} else {
if((state_val_34818 === (2))){
var inst_34723 = (state_34817[(8)]);
var inst_34728 = inst_34723.cljs$lang$protocol_mask$partition0$;
var inst_34729 = (inst_34728 & (64));
var inst_34730 = inst_34723.cljs$core$ISeq$;
var inst_34731 = (inst_34729) || (inst_34730);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34731)){
var statearr_34852_34907 = state_34817__$1;
(statearr_34852_34907[(1)] = (5));

} else {
var statearr_34853_34908 = state_34817__$1;
(statearr_34853_34908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (23))){
var inst_34776 = (state_34817[(14)]);
var inst_34782 = (inst_34776 == null);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34782)){
var statearr_34854_34909 = state_34817__$1;
(statearr_34854_34909[(1)] = (26));

} else {
var statearr_34855_34910 = state_34817__$1;
(statearr_34855_34910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (35))){
var inst_34802 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34802)){
var statearr_34856_34911 = state_34817__$1;
(statearr_34856_34911[(1)] = (36));

} else {
var statearr_34857_34912 = state_34817__$1;
(statearr_34857_34912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (19))){
var inst_34747 = (state_34817[(7)]);
var inst_34766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34747);
var state_34817__$1 = state_34817;
var statearr_34858_34913 = state_34817__$1;
(statearr_34858_34913[(2)] = inst_34766);

(statearr_34858_34913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (11))){
var inst_34747 = (state_34817[(7)]);
var inst_34751 = (inst_34747 == null);
var inst_34752 = cljs.core.not.call(null,inst_34751);
var state_34817__$1 = state_34817;
if(inst_34752){
var statearr_34859_34914 = state_34817__$1;
(statearr_34859_34914[(1)] = (13));

} else {
var statearr_34860_34915 = state_34817__$1;
(statearr_34860_34915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (9))){
var inst_34723 = (state_34817[(8)]);
var state_34817__$1 = state_34817;
var statearr_34861_34916 = state_34817__$1;
(statearr_34861_34916[(2)] = inst_34723);

(statearr_34861_34916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (5))){
var state_34817__$1 = state_34817;
var statearr_34862_34917 = state_34817__$1;
(statearr_34862_34917[(2)] = true);

(statearr_34862_34917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (14))){
var state_34817__$1 = state_34817;
var statearr_34863_34918 = state_34817__$1;
(statearr_34863_34918[(2)] = false);

(statearr_34863_34918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (26))){
var inst_34777 = (state_34817[(11)]);
var inst_34784 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34777);
var state_34817__$1 = state_34817;
var statearr_34864_34919 = state_34817__$1;
(statearr_34864_34919[(2)] = inst_34784);

(statearr_34864_34919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (16))){
var state_34817__$1 = state_34817;
var statearr_34865_34920 = state_34817__$1;
(statearr_34865_34920[(2)] = true);

(statearr_34865_34920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (38))){
var inst_34807 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34866_34921 = state_34817__$1;
(statearr_34866_34921[(2)] = inst_34807);

(statearr_34866_34921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (30))){
var inst_34771 = (state_34817[(13)]);
var inst_34770 = (state_34817[(9)]);
var inst_34777 = (state_34817[(11)]);
var inst_34794 = cljs.core.empty_QMARK_.call(null,inst_34770);
var inst_34795 = inst_34771.call(null,inst_34777);
var inst_34796 = cljs.core.not.call(null,inst_34795);
var inst_34797 = (inst_34794) && (inst_34796);
var state_34817__$1 = state_34817;
var statearr_34867_34922 = state_34817__$1;
(statearr_34867_34922[(2)] = inst_34797);

(statearr_34867_34922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (10))){
var inst_34723 = (state_34817[(8)]);
var inst_34743 = (state_34817[(2)]);
var inst_34744 = cljs.core.get.call(null,inst_34743,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34745 = cljs.core.get.call(null,inst_34743,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34746 = cljs.core.get.call(null,inst_34743,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34747 = inst_34723;
var state_34817__$1 = (function (){var statearr_34868 = state_34817;
(statearr_34868[(16)] = inst_34746);

(statearr_34868[(17)] = inst_34745);

(statearr_34868[(7)] = inst_34747);

(statearr_34868[(18)] = inst_34744);

return statearr_34868;
})();
var statearr_34869_34923 = state_34817__$1;
(statearr_34869_34923[(2)] = null);

(statearr_34869_34923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (18))){
var inst_34761 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34870_34924 = state_34817__$1;
(statearr_34870_34924[(2)] = inst_34761);

(statearr_34870_34924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (37))){
var state_34817__$1 = state_34817;
var statearr_34871_34925 = state_34817__$1;
(statearr_34871_34925[(2)] = null);

(statearr_34871_34925[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (8))){
var inst_34723 = (state_34817[(8)]);
var inst_34740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34723);
var state_34817__$1 = state_34817;
var statearr_34872_34926 = state_34817__$1;
(statearr_34872_34926[(2)] = inst_34740);

(statearr_34872_34926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___34880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29129__auto__,c__29194__auto___34880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29130__auto__ = null;
var cljs$core$async$mix_$_state_machine__29130__auto____0 = (function (){
var statearr_34876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34876[(0)] = cljs$core$async$mix_$_state_machine__29130__auto__);

(statearr_34876[(1)] = (1));

return statearr_34876;
});
var cljs$core$async$mix_$_state_machine__29130__auto____1 = (function (state_34817){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_34817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e34877){if((e34877 instanceof Object)){
var ex__29133__auto__ = e34877;
var statearr_34878_34927 = state_34817;
(statearr_34878_34927[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34928 = state_34817;
state_34817 = G__34928;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29130__auto__ = function(state_34817){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29130__auto____1.call(this,state_34817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29130__auto____0;
cljs$core$async$mix_$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29130__auto____1;
return cljs$core$async$mix_$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___34880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29196__auto__ = (function (){var statearr_34879 = f__29195__auto__.call(null);
(statearr_34879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___34880);

return statearr_34879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___34880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5248__auto__ = (((p == null))?null:p);
var m__5249__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5249__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5248__auto__ = (((p == null))?null:p);
var m__5249__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,p,v,ch);
} else {
var m__5249__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34929 = [];
var len__5651__auto___34932 = arguments.length;
var i__5652__auto___34933 = (0);
while(true){
if((i__5652__auto___34933 < len__5651__auto___34932)){
args34929.push((arguments[i__5652__auto___34933]));

var G__34934 = (i__5652__auto___34933 + (1));
i__5652__auto___34933 = G__34934;
continue;
} else {
}
break;
}

var G__34931 = args34929.length;
switch (G__34931) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34929.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5248__auto__ = (((p == null))?null:p);
var m__5249__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,p);
} else {
var m__5249__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5248__auto__ = (((p == null))?null:p);
var m__5249__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,p,v);
} else {
var m__5249__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34937 = [];
var len__5651__auto___35062 = arguments.length;
var i__5652__auto___35063 = (0);
while(true){
if((i__5652__auto___35063 < len__5651__auto___35062)){
args34937.push((arguments[i__5652__auto___35063]));

var G__35064 = (i__5652__auto___35063 + (1));
i__5652__auto___35063 = G__35064;
continue;
} else {
}
break;
}

var G__34939 = args34937.length;
switch (G__34939) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34937.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4593__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4593__auto__,mults){
return (function (p1__34936_SHARP_){
if(cljs.core.truth_(p1__34936_SHARP_.call(null,topic))){
return p1__34936_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34936_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4593__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34940 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34941){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34941 = meta34941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34942,meta34941__$1){
var self__ = this;
var _34942__$1 = this;
return (new cljs.core.async.t_cljs$core$async34940(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34941__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34942){
var self__ = this;
var _34942__$1 = this;
return self__.meta34941;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34941","meta34941",1025241196,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34940";

cljs.core.async.t_cljs$core$async34940.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async34940");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34940 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34940(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34941){
return (new cljs.core.async.t_cljs$core$async34940(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34941));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34940(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29194__auto___35066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35066,mults,ensure_mult,p){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35066,mults,ensure_mult,p){
return (function (state_35014){
var state_val_35015 = (state_35014[(1)]);
if((state_val_35015 === (7))){
var inst_35010 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35016_35067 = state_35014__$1;
(statearr_35016_35067[(2)] = inst_35010);

(statearr_35016_35067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (20))){
var state_35014__$1 = state_35014;
var statearr_35017_35068 = state_35014__$1;
(statearr_35017_35068[(2)] = null);

(statearr_35017_35068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (1))){
var state_35014__$1 = state_35014;
var statearr_35018_35069 = state_35014__$1;
(statearr_35018_35069[(2)] = null);

(statearr_35018_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (24))){
var inst_34993 = (state_35014[(7)]);
var inst_35002 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34993);
var state_35014__$1 = state_35014;
var statearr_35019_35070 = state_35014__$1;
(statearr_35019_35070[(2)] = inst_35002);

(statearr_35019_35070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (4))){
var inst_34945 = (state_35014[(8)]);
var inst_34945__$1 = (state_35014[(2)]);
var inst_34946 = (inst_34945__$1 == null);
var state_35014__$1 = (function (){var statearr_35020 = state_35014;
(statearr_35020[(8)] = inst_34945__$1);

return statearr_35020;
})();
if(cljs.core.truth_(inst_34946)){
var statearr_35021_35071 = state_35014__$1;
(statearr_35021_35071[(1)] = (5));

} else {
var statearr_35022_35072 = state_35014__$1;
(statearr_35022_35072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (15))){
var inst_34987 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35023_35073 = state_35014__$1;
(statearr_35023_35073[(2)] = inst_34987);

(statearr_35023_35073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (21))){
var inst_35007 = (state_35014[(2)]);
var state_35014__$1 = (function (){var statearr_35024 = state_35014;
(statearr_35024[(9)] = inst_35007);

return statearr_35024;
})();
var statearr_35025_35074 = state_35014__$1;
(statearr_35025_35074[(2)] = null);

(statearr_35025_35074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (13))){
var inst_34969 = (state_35014[(10)]);
var inst_34971 = cljs.core.chunked_seq_QMARK_.call(null,inst_34969);
var state_35014__$1 = state_35014;
if(inst_34971){
var statearr_35026_35075 = state_35014__$1;
(statearr_35026_35075[(1)] = (16));

} else {
var statearr_35027_35076 = state_35014__$1;
(statearr_35027_35076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (22))){
var inst_34999 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
if(cljs.core.truth_(inst_34999)){
var statearr_35028_35077 = state_35014__$1;
(statearr_35028_35077[(1)] = (23));

} else {
var statearr_35029_35078 = state_35014__$1;
(statearr_35029_35078[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (6))){
var inst_34995 = (state_35014[(11)]);
var inst_34993 = (state_35014[(7)]);
var inst_34945 = (state_35014[(8)]);
var inst_34993__$1 = topic_fn.call(null,inst_34945);
var inst_34994 = cljs.core.deref.call(null,mults);
var inst_34995__$1 = cljs.core.get.call(null,inst_34994,inst_34993__$1);
var state_35014__$1 = (function (){var statearr_35030 = state_35014;
(statearr_35030[(11)] = inst_34995__$1);

(statearr_35030[(7)] = inst_34993__$1);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34995__$1)){
var statearr_35031_35079 = state_35014__$1;
(statearr_35031_35079[(1)] = (19));

} else {
var statearr_35032_35080 = state_35014__$1;
(statearr_35032_35080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (25))){
var inst_35004 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35033_35081 = state_35014__$1;
(statearr_35033_35081[(2)] = inst_35004);

(statearr_35033_35081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (17))){
var inst_34969 = (state_35014[(10)]);
var inst_34978 = cljs.core.first.call(null,inst_34969);
var inst_34979 = cljs.core.async.muxch_STAR_.call(null,inst_34978);
var inst_34980 = cljs.core.async.close_BANG_.call(null,inst_34979);
var inst_34981 = cljs.core.next.call(null,inst_34969);
var inst_34955 = inst_34981;
var inst_34956 = null;
var inst_34957 = (0);
var inst_34958 = (0);
var state_35014__$1 = (function (){var statearr_35034 = state_35014;
(statearr_35034[(12)] = inst_34958);

(statearr_35034[(13)] = inst_34980);

(statearr_35034[(14)] = inst_34956);

(statearr_35034[(15)] = inst_34957);

(statearr_35034[(16)] = inst_34955);

return statearr_35034;
})();
var statearr_35035_35082 = state_35014__$1;
(statearr_35035_35082[(2)] = null);

(statearr_35035_35082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (3))){
var inst_35012 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35014__$1,inst_35012);
} else {
if((state_val_35015 === (12))){
var inst_34989 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35036_35083 = state_35014__$1;
(statearr_35036_35083[(2)] = inst_34989);

(statearr_35036_35083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (2))){
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35014__$1,(4),ch);
} else {
if((state_val_35015 === (23))){
var state_35014__$1 = state_35014;
var statearr_35037_35084 = state_35014__$1;
(statearr_35037_35084[(2)] = null);

(statearr_35037_35084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (19))){
var inst_34995 = (state_35014[(11)]);
var inst_34945 = (state_35014[(8)]);
var inst_34997 = cljs.core.async.muxch_STAR_.call(null,inst_34995);
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35014__$1,(22),inst_34997,inst_34945);
} else {
if((state_val_35015 === (11))){
var inst_34969 = (state_35014[(10)]);
var inst_34955 = (state_35014[(16)]);
var inst_34969__$1 = cljs.core.seq.call(null,inst_34955);
var state_35014__$1 = (function (){var statearr_35038 = state_35014;
(statearr_35038[(10)] = inst_34969__$1);

return statearr_35038;
})();
if(inst_34969__$1){
var statearr_35039_35085 = state_35014__$1;
(statearr_35039_35085[(1)] = (13));

} else {
var statearr_35040_35086 = state_35014__$1;
(statearr_35040_35086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (9))){
var inst_34991 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35041_35087 = state_35014__$1;
(statearr_35041_35087[(2)] = inst_34991);

(statearr_35041_35087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (5))){
var inst_34952 = cljs.core.deref.call(null,mults);
var inst_34953 = cljs.core.vals.call(null,inst_34952);
var inst_34954 = cljs.core.seq.call(null,inst_34953);
var inst_34955 = inst_34954;
var inst_34956 = null;
var inst_34957 = (0);
var inst_34958 = (0);
var state_35014__$1 = (function (){var statearr_35042 = state_35014;
(statearr_35042[(12)] = inst_34958);

(statearr_35042[(14)] = inst_34956);

(statearr_35042[(15)] = inst_34957);

(statearr_35042[(16)] = inst_34955);

return statearr_35042;
})();
var statearr_35043_35088 = state_35014__$1;
(statearr_35043_35088[(2)] = null);

(statearr_35043_35088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (14))){
var state_35014__$1 = state_35014;
var statearr_35047_35089 = state_35014__$1;
(statearr_35047_35089[(2)] = null);

(statearr_35047_35089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (16))){
var inst_34969 = (state_35014[(10)]);
var inst_34973 = cljs.core.chunk_first.call(null,inst_34969);
var inst_34974 = cljs.core.chunk_rest.call(null,inst_34969);
var inst_34975 = cljs.core.count.call(null,inst_34973);
var inst_34955 = inst_34974;
var inst_34956 = inst_34973;
var inst_34957 = inst_34975;
var inst_34958 = (0);
var state_35014__$1 = (function (){var statearr_35048 = state_35014;
(statearr_35048[(12)] = inst_34958);

(statearr_35048[(14)] = inst_34956);

(statearr_35048[(15)] = inst_34957);

(statearr_35048[(16)] = inst_34955);

return statearr_35048;
})();
var statearr_35049_35090 = state_35014__$1;
(statearr_35049_35090[(2)] = null);

(statearr_35049_35090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (10))){
var inst_34958 = (state_35014[(12)]);
var inst_34956 = (state_35014[(14)]);
var inst_34957 = (state_35014[(15)]);
var inst_34955 = (state_35014[(16)]);
var inst_34963 = cljs.core._nth.call(null,inst_34956,inst_34958);
var inst_34964 = cljs.core.async.muxch_STAR_.call(null,inst_34963);
var inst_34965 = cljs.core.async.close_BANG_.call(null,inst_34964);
var inst_34966 = (inst_34958 + (1));
var tmp35044 = inst_34956;
var tmp35045 = inst_34957;
var tmp35046 = inst_34955;
var inst_34955__$1 = tmp35046;
var inst_34956__$1 = tmp35044;
var inst_34957__$1 = tmp35045;
var inst_34958__$1 = inst_34966;
var state_35014__$1 = (function (){var statearr_35050 = state_35014;
(statearr_35050[(12)] = inst_34958__$1);

(statearr_35050[(14)] = inst_34956__$1);

(statearr_35050[(15)] = inst_34957__$1);

(statearr_35050[(16)] = inst_34955__$1);

(statearr_35050[(17)] = inst_34965);

return statearr_35050;
})();
var statearr_35051_35091 = state_35014__$1;
(statearr_35051_35091[(2)] = null);

(statearr_35051_35091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (18))){
var inst_34984 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35052_35092 = state_35014__$1;
(statearr_35052_35092[(2)] = inst_34984);

(statearr_35052_35092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (8))){
var inst_34958 = (state_35014[(12)]);
var inst_34957 = (state_35014[(15)]);
var inst_34960 = (inst_34958 < inst_34957);
var inst_34961 = inst_34960;
var state_35014__$1 = state_35014;
if(cljs.core.truth_(inst_34961)){
var statearr_35053_35093 = state_35014__$1;
(statearr_35053_35093[(1)] = (10));

} else {
var statearr_35054_35094 = state_35014__$1;
(statearr_35054_35094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35066,mults,ensure_mult,p))
;
return ((function (switch__29129__auto__,c__29194__auto___35066,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35058[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35058[(1)] = (1));

return statearr_35058;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35014){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35059){if((e35059 instanceof Object)){
var ex__29133__auto__ = e35059;
var statearr_35060_35095 = state_35014;
(statearr_35060_35095[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35096 = state_35014;
state_35014 = G__35096;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35066,mults,ensure_mult,p))
})();
var state__29196__auto__ = (function (){var statearr_35061 = f__29195__auto__.call(null);
(statearr_35061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35066);

return statearr_35061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35066,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35097 = [];
var len__5651__auto___35100 = arguments.length;
var i__5652__auto___35101 = (0);
while(true){
if((i__5652__auto___35101 < len__5651__auto___35100)){
args35097.push((arguments[i__5652__auto___35101]));

var G__35102 = (i__5652__auto___35101 + (1));
i__5652__auto___35101 = G__35102;
continue;
} else {
}
break;
}

var G__35099 = args35097.length;
switch (G__35099) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35097.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35104 = [];
var len__5651__auto___35107 = arguments.length;
var i__5652__auto___35108 = (0);
while(true){
if((i__5652__auto___35108 < len__5651__auto___35107)){
args35104.push((arguments[i__5652__auto___35108]));

var G__35109 = (i__5652__auto___35108 + (1));
i__5652__auto___35108 = G__35109;
continue;
} else {
}
break;
}

var G__35106 = args35104.length;
switch (G__35106) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35104.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35111 = [];
var len__5651__auto___35182 = arguments.length;
var i__5652__auto___35183 = (0);
while(true){
if((i__5652__auto___35183 < len__5651__auto___35182)){
args35111.push((arguments[i__5652__auto___35183]));

var G__35184 = (i__5652__auto___35183 + (1));
i__5652__auto___35183 = G__35184;
continue;
} else {
}
break;
}

var G__35113 = args35111.length;
switch (G__35113) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35111.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29194__auto___35186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35152){
var state_val_35153 = (state_35152[(1)]);
if((state_val_35153 === (7))){
var state_35152__$1 = state_35152;
var statearr_35154_35187 = state_35152__$1;
(statearr_35154_35187[(2)] = null);

(statearr_35154_35187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (1))){
var state_35152__$1 = state_35152;
var statearr_35155_35188 = state_35152__$1;
(statearr_35155_35188[(2)] = null);

(statearr_35155_35188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (4))){
var inst_35116 = (state_35152[(7)]);
var inst_35118 = (inst_35116 < cnt);
var state_35152__$1 = state_35152;
if(cljs.core.truth_(inst_35118)){
var statearr_35156_35189 = state_35152__$1;
(statearr_35156_35189[(1)] = (6));

} else {
var statearr_35157_35190 = state_35152__$1;
(statearr_35157_35190[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (15))){
var inst_35148 = (state_35152[(2)]);
var state_35152__$1 = state_35152;
var statearr_35158_35191 = state_35152__$1;
(statearr_35158_35191[(2)] = inst_35148);

(statearr_35158_35191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (13))){
var inst_35141 = cljs.core.async.close_BANG_.call(null,out);
var state_35152__$1 = state_35152;
var statearr_35159_35192 = state_35152__$1;
(statearr_35159_35192[(2)] = inst_35141);

(statearr_35159_35192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (6))){
var state_35152__$1 = state_35152;
var statearr_35160_35193 = state_35152__$1;
(statearr_35160_35193[(2)] = null);

(statearr_35160_35193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (3))){
var inst_35150 = (state_35152[(2)]);
var state_35152__$1 = state_35152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35152__$1,inst_35150);
} else {
if((state_val_35153 === (12))){
var inst_35138 = (state_35152[(8)]);
var inst_35138__$1 = (state_35152[(2)]);
var inst_35139 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35138__$1);
var state_35152__$1 = (function (){var statearr_35161 = state_35152;
(statearr_35161[(8)] = inst_35138__$1);

return statearr_35161;
})();
if(cljs.core.truth_(inst_35139)){
var statearr_35162_35194 = state_35152__$1;
(statearr_35162_35194[(1)] = (13));

} else {
var statearr_35163_35195 = state_35152__$1;
(statearr_35163_35195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (2))){
var inst_35115 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35116 = (0);
var state_35152__$1 = (function (){var statearr_35164 = state_35152;
(statearr_35164[(7)] = inst_35116);

(statearr_35164[(9)] = inst_35115);

return statearr_35164;
})();
var statearr_35165_35196 = state_35152__$1;
(statearr_35165_35196[(2)] = null);

(statearr_35165_35196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (11))){
var inst_35116 = (state_35152[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35152,(10),Object,null,(9));
var inst_35125 = chs__$1.call(null,inst_35116);
var inst_35126 = done.call(null,inst_35116);
var inst_35127 = cljs.core.async.take_BANG_.call(null,inst_35125,inst_35126);
var state_35152__$1 = state_35152;
var statearr_35166_35197 = state_35152__$1;
(statearr_35166_35197[(2)] = inst_35127);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (9))){
var inst_35116 = (state_35152[(7)]);
var inst_35129 = (state_35152[(2)]);
var inst_35130 = (inst_35116 + (1));
var inst_35116__$1 = inst_35130;
var state_35152__$1 = (function (){var statearr_35167 = state_35152;
(statearr_35167[(7)] = inst_35116__$1);

(statearr_35167[(10)] = inst_35129);

return statearr_35167;
})();
var statearr_35168_35198 = state_35152__$1;
(statearr_35168_35198[(2)] = null);

(statearr_35168_35198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (5))){
var inst_35136 = (state_35152[(2)]);
var state_35152__$1 = (function (){var statearr_35169 = state_35152;
(statearr_35169[(11)] = inst_35136);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35152__$1,(12),dchan);
} else {
if((state_val_35153 === (14))){
var inst_35138 = (state_35152[(8)]);
var inst_35143 = cljs.core.apply.call(null,f,inst_35138);
var state_35152__$1 = state_35152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35152__$1,(16),out,inst_35143);
} else {
if((state_val_35153 === (16))){
var inst_35145 = (state_35152[(2)]);
var state_35152__$1 = (function (){var statearr_35170 = state_35152;
(statearr_35170[(12)] = inst_35145);

return statearr_35170;
})();
var statearr_35171_35199 = state_35152__$1;
(statearr_35171_35199[(2)] = null);

(statearr_35171_35199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (10))){
var inst_35120 = (state_35152[(2)]);
var inst_35121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35152__$1 = (function (){var statearr_35172 = state_35152;
(statearr_35172[(13)] = inst_35120);

return statearr_35172;
})();
var statearr_35173_35200 = state_35152__$1;
(statearr_35173_35200[(2)] = inst_35121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (8))){
var inst_35134 = (state_35152[(2)]);
var state_35152__$1 = state_35152;
var statearr_35174_35201 = state_35152__$1;
(statearr_35174_35201[(2)] = inst_35134);

(statearr_35174_35201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35186,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29129__auto__,c__29194__auto___35186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35178[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35178[(1)] = (1));

return statearr_35178;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35152){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35179){if((e35179 instanceof Object)){
var ex__29133__auto__ = e35179;
var statearr_35180_35202 = state_35152;
(statearr_35180_35202[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35203 = state_35152;
state_35152 = G__35203;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35186,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29196__auto__ = (function (){var statearr_35181 = f__29195__auto__.call(null);
(statearr_35181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35186);

return statearr_35181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35186,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35205 = [];
var len__5651__auto___35261 = arguments.length;
var i__5652__auto___35262 = (0);
while(true){
if((i__5652__auto___35262 < len__5651__auto___35261)){
args35205.push((arguments[i__5652__auto___35262]));

var G__35263 = (i__5652__auto___35262 + (1));
i__5652__auto___35262 = G__35263;
continue;
} else {
}
break;
}

var G__35207 = args35205.length;
switch (G__35207) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35205.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29194__auto___35265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35265,out){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35265,out){
return (function (state_35237){
var state_val_35238 = (state_35237[(1)]);
if((state_val_35238 === (7))){
var inst_35217 = (state_35237[(7)]);
var inst_35216 = (state_35237[(8)]);
var inst_35216__$1 = (state_35237[(2)]);
var inst_35217__$1 = cljs.core.nth.call(null,inst_35216__$1,(0),null);
var inst_35218 = cljs.core.nth.call(null,inst_35216__$1,(1),null);
var inst_35219 = (inst_35217__$1 == null);
var state_35237__$1 = (function (){var statearr_35239 = state_35237;
(statearr_35239[(7)] = inst_35217__$1);

(statearr_35239[(9)] = inst_35218);

(statearr_35239[(8)] = inst_35216__$1);

return statearr_35239;
})();
if(cljs.core.truth_(inst_35219)){
var statearr_35240_35266 = state_35237__$1;
(statearr_35240_35266[(1)] = (8));

} else {
var statearr_35241_35267 = state_35237__$1;
(statearr_35241_35267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (1))){
var inst_35208 = cljs.core.vec.call(null,chs);
var inst_35209 = inst_35208;
var state_35237__$1 = (function (){var statearr_35242 = state_35237;
(statearr_35242[(10)] = inst_35209);

return statearr_35242;
})();
var statearr_35243_35268 = state_35237__$1;
(statearr_35243_35268[(2)] = null);

(statearr_35243_35268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (4))){
var inst_35209 = (state_35237[(10)]);
var state_35237__$1 = state_35237;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35237__$1,(7),inst_35209);
} else {
if((state_val_35238 === (6))){
var inst_35233 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35244_35269 = state_35237__$1;
(statearr_35244_35269[(2)] = inst_35233);

(statearr_35244_35269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (3))){
var inst_35235 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35237__$1,inst_35235);
} else {
if((state_val_35238 === (2))){
var inst_35209 = (state_35237[(10)]);
var inst_35211 = cljs.core.count.call(null,inst_35209);
var inst_35212 = (inst_35211 > (0));
var state_35237__$1 = state_35237;
if(cljs.core.truth_(inst_35212)){
var statearr_35246_35270 = state_35237__$1;
(statearr_35246_35270[(1)] = (4));

} else {
var statearr_35247_35271 = state_35237__$1;
(statearr_35247_35271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (11))){
var inst_35209 = (state_35237[(10)]);
var inst_35226 = (state_35237[(2)]);
var tmp35245 = inst_35209;
var inst_35209__$1 = tmp35245;
var state_35237__$1 = (function (){var statearr_35248 = state_35237;
(statearr_35248[(10)] = inst_35209__$1);

(statearr_35248[(11)] = inst_35226);

return statearr_35248;
})();
var statearr_35249_35272 = state_35237__$1;
(statearr_35249_35272[(2)] = null);

(statearr_35249_35272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (9))){
var inst_35217 = (state_35237[(7)]);
var state_35237__$1 = state_35237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35237__$1,(11),out,inst_35217);
} else {
if((state_val_35238 === (5))){
var inst_35231 = cljs.core.async.close_BANG_.call(null,out);
var state_35237__$1 = state_35237;
var statearr_35250_35273 = state_35237__$1;
(statearr_35250_35273[(2)] = inst_35231);

(statearr_35250_35273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (10))){
var inst_35229 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35251_35274 = state_35237__$1;
(statearr_35251_35274[(2)] = inst_35229);

(statearr_35251_35274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (8))){
var inst_35217 = (state_35237[(7)]);
var inst_35218 = (state_35237[(9)]);
var inst_35209 = (state_35237[(10)]);
var inst_35216 = (state_35237[(8)]);
var inst_35221 = (function (){var cs = inst_35209;
var vec__35214 = inst_35216;
var v = inst_35217;
var c = inst_35218;
return ((function (cs,vec__35214,v,c,inst_35217,inst_35218,inst_35209,inst_35216,state_val_35238,c__29194__auto___35265,out){
return (function (p1__35204_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35204_SHARP_);
});
;})(cs,vec__35214,v,c,inst_35217,inst_35218,inst_35209,inst_35216,state_val_35238,c__29194__auto___35265,out))
})();
var inst_35222 = cljs.core.filterv.call(null,inst_35221,inst_35209);
var inst_35209__$1 = inst_35222;
var state_35237__$1 = (function (){var statearr_35252 = state_35237;
(statearr_35252[(10)] = inst_35209__$1);

return statearr_35252;
})();
var statearr_35253_35275 = state_35237__$1;
(statearr_35253_35275[(2)] = null);

(statearr_35253_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35265,out))
;
return ((function (switch__29129__auto__,c__29194__auto___35265,out){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35257 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35257[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35257[(1)] = (1));

return statearr_35257;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35237){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35258){if((e35258 instanceof Object)){
var ex__29133__auto__ = e35258;
var statearr_35259_35276 = state_35237;
(statearr_35259_35276[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35277 = state_35237;
state_35237 = G__35277;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35265,out))
})();
var state__29196__auto__ = (function (){var statearr_35260 = f__29195__auto__.call(null);
(statearr_35260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35265);

return statearr_35260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35265,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35278 = [];
var len__5651__auto___35327 = arguments.length;
var i__5652__auto___35328 = (0);
while(true){
if((i__5652__auto___35328 < len__5651__auto___35327)){
args35278.push((arguments[i__5652__auto___35328]));

var G__35329 = (i__5652__auto___35328 + (1));
i__5652__auto___35328 = G__35329;
continue;
} else {
}
break;
}

var G__35280 = args35278.length;
switch (G__35280) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35278.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29194__auto___35331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35331,out){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35331,out){
return (function (state_35304){
var state_val_35305 = (state_35304[(1)]);
if((state_val_35305 === (7))){
var inst_35286 = (state_35304[(7)]);
var inst_35286__$1 = (state_35304[(2)]);
var inst_35287 = (inst_35286__$1 == null);
var inst_35288 = cljs.core.not.call(null,inst_35287);
var state_35304__$1 = (function (){var statearr_35306 = state_35304;
(statearr_35306[(7)] = inst_35286__$1);

return statearr_35306;
})();
if(inst_35288){
var statearr_35307_35332 = state_35304__$1;
(statearr_35307_35332[(1)] = (8));

} else {
var statearr_35308_35333 = state_35304__$1;
(statearr_35308_35333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (1))){
var inst_35281 = (0);
var state_35304__$1 = (function (){var statearr_35309 = state_35304;
(statearr_35309[(8)] = inst_35281);

return statearr_35309;
})();
var statearr_35310_35334 = state_35304__$1;
(statearr_35310_35334[(2)] = null);

(statearr_35310_35334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (4))){
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35304__$1,(7),ch);
} else {
if((state_val_35305 === (6))){
var inst_35299 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35311_35335 = state_35304__$1;
(statearr_35311_35335[(2)] = inst_35299);

(statearr_35311_35335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (3))){
var inst_35301 = (state_35304[(2)]);
var inst_35302 = cljs.core.async.close_BANG_.call(null,out);
var state_35304__$1 = (function (){var statearr_35312 = state_35304;
(statearr_35312[(9)] = inst_35301);

return statearr_35312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35304__$1,inst_35302);
} else {
if((state_val_35305 === (2))){
var inst_35281 = (state_35304[(8)]);
var inst_35283 = (inst_35281 < n);
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35283)){
var statearr_35313_35336 = state_35304__$1;
(statearr_35313_35336[(1)] = (4));

} else {
var statearr_35314_35337 = state_35304__$1;
(statearr_35314_35337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (11))){
var inst_35281 = (state_35304[(8)]);
var inst_35291 = (state_35304[(2)]);
var inst_35292 = (inst_35281 + (1));
var inst_35281__$1 = inst_35292;
var state_35304__$1 = (function (){var statearr_35315 = state_35304;
(statearr_35315[(8)] = inst_35281__$1);

(statearr_35315[(10)] = inst_35291);

return statearr_35315;
})();
var statearr_35316_35338 = state_35304__$1;
(statearr_35316_35338[(2)] = null);

(statearr_35316_35338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (9))){
var state_35304__$1 = state_35304;
var statearr_35317_35339 = state_35304__$1;
(statearr_35317_35339[(2)] = null);

(statearr_35317_35339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (5))){
var state_35304__$1 = state_35304;
var statearr_35318_35340 = state_35304__$1;
(statearr_35318_35340[(2)] = null);

(statearr_35318_35340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (10))){
var inst_35296 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35319_35341 = state_35304__$1;
(statearr_35319_35341[(2)] = inst_35296);

(statearr_35319_35341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (8))){
var inst_35286 = (state_35304[(7)]);
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35304__$1,(11),out,inst_35286);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35331,out))
;
return ((function (switch__29129__auto__,c__29194__auto___35331,out){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35323[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35323[(1)] = (1));

return statearr_35323;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35304){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35324){if((e35324 instanceof Object)){
var ex__29133__auto__ = e35324;
var statearr_35325_35342 = state_35304;
(statearr_35325_35342[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35343 = state_35304;
state_35304 = G__35343;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35331,out))
})();
var state__29196__auto__ = (function (){var statearr_35326 = f__29195__auto__.call(null);
(statearr_35326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35331);

return statearr_35326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35331,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35351 = (function (map_LT_,f,ch,meta35352){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35352 = meta35352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35353,meta35352__$1){
var self__ = this;
var _35353__$1 = this;
return (new cljs.core.async.t_cljs$core$async35351(self__.map_LT_,self__.f,self__.ch,meta35352__$1));
});

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35353){
var self__ = this;
var _35353__$1 = this;
return self__.meta35352;
});

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35354 = (function (map_LT_,f,ch,meta35352,_,fn1,meta35355){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35352 = meta35352;
this._ = _;
this.fn1 = fn1;
this.meta35355 = meta35355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35356,meta35355__$1){
var self__ = this;
var _35356__$1 = this;
return (new cljs.core.async.t_cljs$core$async35354(self__.map_LT_,self__.f,self__.ch,self__.meta35352,self__._,self__.fn1,meta35355__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35356){
var self__ = this;
var _35356__$1 = this;
return self__.meta35355;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35354.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35344_SHARP_){
return f1.call(null,(((p1__35344_SHARP_ == null))?null:self__.f.call(null,p1__35344_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35354.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35352","meta35352",1040576146,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35351","cljs.core.async/t_cljs$core$async35351",713668147,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35355","meta35355",956734270,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35354";

cljs.core.async.t_cljs$core$async35354.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async35354");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35354 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35354(map_LT___$1,f__$1,ch__$1,meta35352__$1,___$2,fn1__$1,meta35355){
return (new cljs.core.async.t_cljs$core$async35354(map_LT___$1,f__$1,ch__$1,meta35352__$1,___$2,fn1__$1,meta35355));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35354(self__.map_LT_,self__.f,self__.ch,self__.meta35352,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4581__auto__ = ret;
if(cljs.core.truth_(and__4581__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4581__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35352","meta35352",1040576146,null)], null);
});

cljs.core.async.t_cljs$core$async35351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35351";

cljs.core.async.t_cljs$core$async35351.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async35351");
});

cljs.core.async.__GT_t_cljs$core$async35351 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35351(map_LT___$1,f__$1,ch__$1,meta35352){
return (new cljs.core.async.t_cljs$core$async35351(map_LT___$1,f__$1,ch__$1,meta35352));
});

}

return (new cljs.core.async.t_cljs$core$async35351(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35360 = (function (map_GT_,f,ch,meta35361){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35361 = meta35361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35362,meta35361__$1){
var self__ = this;
var _35362__$1 = this;
return (new cljs.core.async.t_cljs$core$async35360(self__.map_GT_,self__.f,self__.ch,meta35361__$1));
});

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35362){
var self__ = this;
var _35362__$1 = this;
return self__.meta35361;
});

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35361","meta35361",-2113700927,null)], null);
});

cljs.core.async.t_cljs$core$async35360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35360";

cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async35360");
});

cljs.core.async.__GT_t_cljs$core$async35360 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35360(map_GT___$1,f__$1,ch__$1,meta35361){
return (new cljs.core.async.t_cljs$core$async35360(map_GT___$1,f__$1,ch__$1,meta35361));
});

}

return (new cljs.core.async.t_cljs$core$async35360(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35366 = (function (filter_GT_,p,ch,meta35367){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35367 = meta35367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35368,meta35367__$1){
var self__ = this;
var _35368__$1 = this;
return (new cljs.core.async.t_cljs$core$async35366(self__.filter_GT_,self__.p,self__.ch,meta35367__$1));
});

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35368){
var self__ = this;
var _35368__$1 = this;
return self__.meta35367;
});

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35367","meta35367",2030541573,null)], null);
});

cljs.core.async.t_cljs$core$async35366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35366";

cljs.core.async.t_cljs$core$async35366.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async35366");
});

cljs.core.async.__GT_t_cljs$core$async35366 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35366(filter_GT___$1,p__$1,ch__$1,meta35367){
return (new cljs.core.async.t_cljs$core$async35366(filter_GT___$1,p__$1,ch__$1,meta35367));
});

}

return (new cljs.core.async.t_cljs$core$async35366(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35369 = [];
var len__5651__auto___35413 = arguments.length;
var i__5652__auto___35414 = (0);
while(true){
if((i__5652__auto___35414 < len__5651__auto___35413)){
args35369.push((arguments[i__5652__auto___35414]));

var G__35415 = (i__5652__auto___35414 + (1));
i__5652__auto___35414 = G__35415;
continue;
} else {
}
break;
}

var G__35371 = args35369.length;
switch (G__35371) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35369.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29194__auto___35417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35417,out){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35417,out){
return (function (state_35392){
var state_val_35393 = (state_35392[(1)]);
if((state_val_35393 === (7))){
var inst_35388 = (state_35392[(2)]);
var state_35392__$1 = state_35392;
var statearr_35394_35418 = state_35392__$1;
(statearr_35394_35418[(2)] = inst_35388);

(statearr_35394_35418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (1))){
var state_35392__$1 = state_35392;
var statearr_35395_35419 = state_35392__$1;
(statearr_35395_35419[(2)] = null);

(statearr_35395_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (4))){
var inst_35374 = (state_35392[(7)]);
var inst_35374__$1 = (state_35392[(2)]);
var inst_35375 = (inst_35374__$1 == null);
var state_35392__$1 = (function (){var statearr_35396 = state_35392;
(statearr_35396[(7)] = inst_35374__$1);

return statearr_35396;
})();
if(cljs.core.truth_(inst_35375)){
var statearr_35397_35420 = state_35392__$1;
(statearr_35397_35420[(1)] = (5));

} else {
var statearr_35398_35421 = state_35392__$1;
(statearr_35398_35421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (6))){
var inst_35374 = (state_35392[(7)]);
var inst_35379 = p.call(null,inst_35374);
var state_35392__$1 = state_35392;
if(cljs.core.truth_(inst_35379)){
var statearr_35399_35422 = state_35392__$1;
(statearr_35399_35422[(1)] = (8));

} else {
var statearr_35400_35423 = state_35392__$1;
(statearr_35400_35423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (3))){
var inst_35390 = (state_35392[(2)]);
var state_35392__$1 = state_35392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35392__$1,inst_35390);
} else {
if((state_val_35393 === (2))){
var state_35392__$1 = state_35392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35392__$1,(4),ch);
} else {
if((state_val_35393 === (11))){
var inst_35382 = (state_35392[(2)]);
var state_35392__$1 = state_35392;
var statearr_35401_35424 = state_35392__$1;
(statearr_35401_35424[(2)] = inst_35382);

(statearr_35401_35424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (9))){
var state_35392__$1 = state_35392;
var statearr_35402_35425 = state_35392__$1;
(statearr_35402_35425[(2)] = null);

(statearr_35402_35425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (5))){
var inst_35377 = cljs.core.async.close_BANG_.call(null,out);
var state_35392__$1 = state_35392;
var statearr_35403_35426 = state_35392__$1;
(statearr_35403_35426[(2)] = inst_35377);

(statearr_35403_35426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (10))){
var inst_35385 = (state_35392[(2)]);
var state_35392__$1 = (function (){var statearr_35404 = state_35392;
(statearr_35404[(8)] = inst_35385);

return statearr_35404;
})();
var statearr_35405_35427 = state_35392__$1;
(statearr_35405_35427[(2)] = null);

(statearr_35405_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (8))){
var inst_35374 = (state_35392[(7)]);
var state_35392__$1 = state_35392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35392__$1,(11),out,inst_35374);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35417,out))
;
return ((function (switch__29129__auto__,c__29194__auto___35417,out){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35409 = [null,null,null,null,null,null,null,null,null];
(statearr_35409[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35409[(1)] = (1));

return statearr_35409;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35392){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35410){if((e35410 instanceof Object)){
var ex__29133__auto__ = e35410;
var statearr_35411_35428 = state_35392;
(statearr_35411_35428[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35429 = state_35392;
state_35392 = G__35429;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35417,out))
})();
var state__29196__auto__ = (function (){var statearr_35412 = f__29195__auto__.call(null);
(statearr_35412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35417);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35417,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35430 = [];
var len__5651__auto___35433 = arguments.length;
var i__5652__auto___35434 = (0);
while(true){
if((i__5652__auto___35434 < len__5651__auto___35433)){
args35430.push((arguments[i__5652__auto___35434]));

var G__35435 = (i__5652__auto___35434 + (1));
i__5652__auto___35434 = G__35435;
continue;
} else {
}
break;
}

var G__35432 = args35430.length;
switch (G__35432) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35430.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto__){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto__){
return (function (state_35602){
var state_val_35603 = (state_35602[(1)]);
if((state_val_35603 === (7))){
var inst_35598 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
var statearr_35604_35645 = state_35602__$1;
(statearr_35604_35645[(2)] = inst_35598);

(statearr_35604_35645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (20))){
var inst_35568 = (state_35602[(7)]);
var inst_35579 = (state_35602[(2)]);
var inst_35580 = cljs.core.next.call(null,inst_35568);
var inst_35554 = inst_35580;
var inst_35555 = null;
var inst_35556 = (0);
var inst_35557 = (0);
var state_35602__$1 = (function (){var statearr_35605 = state_35602;
(statearr_35605[(8)] = inst_35557);

(statearr_35605[(9)] = inst_35555);

(statearr_35605[(10)] = inst_35579);

(statearr_35605[(11)] = inst_35554);

(statearr_35605[(12)] = inst_35556);

return statearr_35605;
})();
var statearr_35606_35646 = state_35602__$1;
(statearr_35606_35646[(2)] = null);

(statearr_35606_35646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (1))){
var state_35602__$1 = state_35602;
var statearr_35607_35647 = state_35602__$1;
(statearr_35607_35647[(2)] = null);

(statearr_35607_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (4))){
var inst_35543 = (state_35602[(13)]);
var inst_35543__$1 = (state_35602[(2)]);
var inst_35544 = (inst_35543__$1 == null);
var state_35602__$1 = (function (){var statearr_35608 = state_35602;
(statearr_35608[(13)] = inst_35543__$1);

return statearr_35608;
})();
if(cljs.core.truth_(inst_35544)){
var statearr_35609_35648 = state_35602__$1;
(statearr_35609_35648[(1)] = (5));

} else {
var statearr_35610_35649 = state_35602__$1;
(statearr_35610_35649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (15))){
var state_35602__$1 = state_35602;
var statearr_35614_35650 = state_35602__$1;
(statearr_35614_35650[(2)] = null);

(statearr_35614_35650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (21))){
var state_35602__$1 = state_35602;
var statearr_35615_35651 = state_35602__$1;
(statearr_35615_35651[(2)] = null);

(statearr_35615_35651[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (13))){
var inst_35557 = (state_35602[(8)]);
var inst_35555 = (state_35602[(9)]);
var inst_35554 = (state_35602[(11)]);
var inst_35556 = (state_35602[(12)]);
var inst_35564 = (state_35602[(2)]);
var inst_35565 = (inst_35557 + (1));
var tmp35611 = inst_35555;
var tmp35612 = inst_35554;
var tmp35613 = inst_35556;
var inst_35554__$1 = tmp35612;
var inst_35555__$1 = tmp35611;
var inst_35556__$1 = tmp35613;
var inst_35557__$1 = inst_35565;
var state_35602__$1 = (function (){var statearr_35616 = state_35602;
(statearr_35616[(8)] = inst_35557__$1);

(statearr_35616[(14)] = inst_35564);

(statearr_35616[(9)] = inst_35555__$1);

(statearr_35616[(11)] = inst_35554__$1);

(statearr_35616[(12)] = inst_35556__$1);

return statearr_35616;
})();
var statearr_35617_35652 = state_35602__$1;
(statearr_35617_35652[(2)] = null);

(statearr_35617_35652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (22))){
var state_35602__$1 = state_35602;
var statearr_35618_35653 = state_35602__$1;
(statearr_35618_35653[(2)] = null);

(statearr_35618_35653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (6))){
var inst_35543 = (state_35602[(13)]);
var inst_35552 = f.call(null,inst_35543);
var inst_35553 = cljs.core.seq.call(null,inst_35552);
var inst_35554 = inst_35553;
var inst_35555 = null;
var inst_35556 = (0);
var inst_35557 = (0);
var state_35602__$1 = (function (){var statearr_35619 = state_35602;
(statearr_35619[(8)] = inst_35557);

(statearr_35619[(9)] = inst_35555);

(statearr_35619[(11)] = inst_35554);

(statearr_35619[(12)] = inst_35556);

return statearr_35619;
})();
var statearr_35620_35654 = state_35602__$1;
(statearr_35620_35654[(2)] = null);

(statearr_35620_35654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (17))){
var inst_35568 = (state_35602[(7)]);
var inst_35572 = cljs.core.chunk_first.call(null,inst_35568);
var inst_35573 = cljs.core.chunk_rest.call(null,inst_35568);
var inst_35574 = cljs.core.count.call(null,inst_35572);
var inst_35554 = inst_35573;
var inst_35555 = inst_35572;
var inst_35556 = inst_35574;
var inst_35557 = (0);
var state_35602__$1 = (function (){var statearr_35621 = state_35602;
(statearr_35621[(8)] = inst_35557);

(statearr_35621[(9)] = inst_35555);

(statearr_35621[(11)] = inst_35554);

(statearr_35621[(12)] = inst_35556);

return statearr_35621;
})();
var statearr_35622_35655 = state_35602__$1;
(statearr_35622_35655[(2)] = null);

(statearr_35622_35655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (3))){
var inst_35600 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35602__$1,inst_35600);
} else {
if((state_val_35603 === (12))){
var inst_35588 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
var statearr_35623_35656 = state_35602__$1;
(statearr_35623_35656[(2)] = inst_35588);

(statearr_35623_35656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (2))){
var state_35602__$1 = state_35602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35602__$1,(4),in$);
} else {
if((state_val_35603 === (23))){
var inst_35596 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
var statearr_35624_35657 = state_35602__$1;
(statearr_35624_35657[(2)] = inst_35596);

(statearr_35624_35657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (19))){
var inst_35583 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
var statearr_35625_35658 = state_35602__$1;
(statearr_35625_35658[(2)] = inst_35583);

(statearr_35625_35658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (11))){
var inst_35568 = (state_35602[(7)]);
var inst_35554 = (state_35602[(11)]);
var inst_35568__$1 = cljs.core.seq.call(null,inst_35554);
var state_35602__$1 = (function (){var statearr_35626 = state_35602;
(statearr_35626[(7)] = inst_35568__$1);

return statearr_35626;
})();
if(inst_35568__$1){
var statearr_35627_35659 = state_35602__$1;
(statearr_35627_35659[(1)] = (14));

} else {
var statearr_35628_35660 = state_35602__$1;
(statearr_35628_35660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (9))){
var inst_35590 = (state_35602[(2)]);
var inst_35591 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35602__$1 = (function (){var statearr_35629 = state_35602;
(statearr_35629[(15)] = inst_35590);

return statearr_35629;
})();
if(cljs.core.truth_(inst_35591)){
var statearr_35630_35661 = state_35602__$1;
(statearr_35630_35661[(1)] = (21));

} else {
var statearr_35631_35662 = state_35602__$1;
(statearr_35631_35662[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (5))){
var inst_35546 = cljs.core.async.close_BANG_.call(null,out);
var state_35602__$1 = state_35602;
var statearr_35632_35663 = state_35602__$1;
(statearr_35632_35663[(2)] = inst_35546);

(statearr_35632_35663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (14))){
var inst_35568 = (state_35602[(7)]);
var inst_35570 = cljs.core.chunked_seq_QMARK_.call(null,inst_35568);
var state_35602__$1 = state_35602;
if(inst_35570){
var statearr_35633_35664 = state_35602__$1;
(statearr_35633_35664[(1)] = (17));

} else {
var statearr_35634_35665 = state_35602__$1;
(statearr_35634_35665[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (16))){
var inst_35586 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
var statearr_35635_35666 = state_35602__$1;
(statearr_35635_35666[(2)] = inst_35586);

(statearr_35635_35666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (10))){
var inst_35557 = (state_35602[(8)]);
var inst_35555 = (state_35602[(9)]);
var inst_35562 = cljs.core._nth.call(null,inst_35555,inst_35557);
var state_35602__$1 = state_35602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35602__$1,(13),out,inst_35562);
} else {
if((state_val_35603 === (18))){
var inst_35568 = (state_35602[(7)]);
var inst_35577 = cljs.core.first.call(null,inst_35568);
var state_35602__$1 = state_35602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35602__$1,(20),out,inst_35577);
} else {
if((state_val_35603 === (8))){
var inst_35557 = (state_35602[(8)]);
var inst_35556 = (state_35602[(12)]);
var inst_35559 = (inst_35557 < inst_35556);
var inst_35560 = inst_35559;
var state_35602__$1 = state_35602;
if(cljs.core.truth_(inst_35560)){
var statearr_35636_35667 = state_35602__$1;
(statearr_35636_35667[(1)] = (10));

} else {
var statearr_35637_35668 = state_35602__$1;
(statearr_35637_35668[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto__))
;
return ((function (switch__29129__auto__,c__29194__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29130__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29130__auto____0 = (function (){
var statearr_35641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35641[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29130__auto__);

(statearr_35641[(1)] = (1));

return statearr_35641;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29130__auto____1 = (function (state_35602){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35642){if((e35642 instanceof Object)){
var ex__29133__auto__ = e35642;
var statearr_35643_35669 = state_35602;
(statearr_35643_35669[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35670 = state_35602;
state_35602 = G__35670;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29130__auto__ = function(state_35602){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29130__auto____1.call(this,state_35602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29130__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29130__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto__))
})();
var state__29196__auto__ = (function (){var statearr_35644 = f__29195__auto__.call(null);
(statearr_35644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto__);

return statearr_35644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto__))
);

return c__29194__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35671 = [];
var len__5651__auto___35674 = arguments.length;
var i__5652__auto___35675 = (0);
while(true){
if((i__5652__auto___35675 < len__5651__auto___35674)){
args35671.push((arguments[i__5652__auto___35675]));

var G__35676 = (i__5652__auto___35675 + (1));
i__5652__auto___35675 = G__35676;
continue;
} else {
}
break;
}

var G__35673 = args35671.length;
switch (G__35673) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35671.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35678 = [];
var len__5651__auto___35681 = arguments.length;
var i__5652__auto___35682 = (0);
while(true){
if((i__5652__auto___35682 < len__5651__auto___35681)){
args35678.push((arguments[i__5652__auto___35682]));

var G__35683 = (i__5652__auto___35682 + (1));
i__5652__auto___35682 = G__35683;
continue;
} else {
}
break;
}

var G__35680 = args35678.length;
switch (G__35680) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35678.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35685 = [];
var len__5651__auto___35736 = arguments.length;
var i__5652__auto___35737 = (0);
while(true){
if((i__5652__auto___35737 < len__5651__auto___35736)){
args35685.push((arguments[i__5652__auto___35737]));

var G__35738 = (i__5652__auto___35737 + (1));
i__5652__auto___35737 = G__35738;
continue;
} else {
}
break;
}

var G__35687 = args35685.length;
switch (G__35687) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35685.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29194__auto___35740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35740,out){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35740,out){
return (function (state_35711){
var state_val_35712 = (state_35711[(1)]);
if((state_val_35712 === (7))){
var inst_35706 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
var statearr_35713_35741 = state_35711__$1;
(statearr_35713_35741[(2)] = inst_35706);

(statearr_35713_35741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (1))){
var inst_35688 = null;
var state_35711__$1 = (function (){var statearr_35714 = state_35711;
(statearr_35714[(7)] = inst_35688);

return statearr_35714;
})();
var statearr_35715_35742 = state_35711__$1;
(statearr_35715_35742[(2)] = null);

(statearr_35715_35742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (4))){
var inst_35691 = (state_35711[(8)]);
var inst_35691__$1 = (state_35711[(2)]);
var inst_35692 = (inst_35691__$1 == null);
var inst_35693 = cljs.core.not.call(null,inst_35692);
var state_35711__$1 = (function (){var statearr_35716 = state_35711;
(statearr_35716[(8)] = inst_35691__$1);

return statearr_35716;
})();
if(inst_35693){
var statearr_35717_35743 = state_35711__$1;
(statearr_35717_35743[(1)] = (5));

} else {
var statearr_35718_35744 = state_35711__$1;
(statearr_35718_35744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (6))){
var state_35711__$1 = state_35711;
var statearr_35719_35745 = state_35711__$1;
(statearr_35719_35745[(2)] = null);

(statearr_35719_35745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (3))){
var inst_35708 = (state_35711[(2)]);
var inst_35709 = cljs.core.async.close_BANG_.call(null,out);
var state_35711__$1 = (function (){var statearr_35720 = state_35711;
(statearr_35720[(9)] = inst_35708);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35711__$1,inst_35709);
} else {
if((state_val_35712 === (2))){
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35711__$1,(4),ch);
} else {
if((state_val_35712 === (11))){
var inst_35691 = (state_35711[(8)]);
var inst_35700 = (state_35711[(2)]);
var inst_35688 = inst_35691;
var state_35711__$1 = (function (){var statearr_35721 = state_35711;
(statearr_35721[(10)] = inst_35700);

(statearr_35721[(7)] = inst_35688);

return statearr_35721;
})();
var statearr_35722_35746 = state_35711__$1;
(statearr_35722_35746[(2)] = null);

(statearr_35722_35746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (9))){
var inst_35691 = (state_35711[(8)]);
var state_35711__$1 = state_35711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35711__$1,(11),out,inst_35691);
} else {
if((state_val_35712 === (5))){
var inst_35688 = (state_35711[(7)]);
var inst_35691 = (state_35711[(8)]);
var inst_35695 = cljs.core._EQ_.call(null,inst_35691,inst_35688);
var state_35711__$1 = state_35711;
if(inst_35695){
var statearr_35724_35747 = state_35711__$1;
(statearr_35724_35747[(1)] = (8));

} else {
var statearr_35725_35748 = state_35711__$1;
(statearr_35725_35748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (10))){
var inst_35703 = (state_35711[(2)]);
var state_35711__$1 = state_35711;
var statearr_35726_35749 = state_35711__$1;
(statearr_35726_35749[(2)] = inst_35703);

(statearr_35726_35749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35712 === (8))){
var inst_35688 = (state_35711[(7)]);
var tmp35723 = inst_35688;
var inst_35688__$1 = tmp35723;
var state_35711__$1 = (function (){var statearr_35727 = state_35711;
(statearr_35727[(7)] = inst_35688__$1);

return statearr_35727;
})();
var statearr_35728_35750 = state_35711__$1;
(statearr_35728_35750[(2)] = null);

(statearr_35728_35750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35740,out))
;
return ((function (switch__29129__auto__,c__29194__auto___35740,out){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35732[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35732[(1)] = (1));

return statearr_35732;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35711){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35733){if((e35733 instanceof Object)){
var ex__29133__auto__ = e35733;
var statearr_35734_35751 = state_35711;
(statearr_35734_35751[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35752 = state_35711;
state_35711 = G__35752;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35740,out))
})();
var state__29196__auto__ = (function (){var statearr_35735 = f__29195__auto__.call(null);
(statearr_35735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35740);

return statearr_35735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35740,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35753 = [];
var len__5651__auto___35823 = arguments.length;
var i__5652__auto___35824 = (0);
while(true){
if((i__5652__auto___35824 < len__5651__auto___35823)){
args35753.push((arguments[i__5652__auto___35824]));

var G__35825 = (i__5652__auto___35824 + (1));
i__5652__auto___35824 = G__35825;
continue;
} else {
}
break;
}

var G__35755 = args35753.length;
switch (G__35755) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35753.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29194__auto___35827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35827,out){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35827,out){
return (function (state_35793){
var state_val_35794 = (state_35793[(1)]);
if((state_val_35794 === (7))){
var inst_35789 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35795_35828 = state_35793__$1;
(statearr_35795_35828[(2)] = inst_35789);

(statearr_35795_35828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (1))){
var inst_35756 = (new Array(n));
var inst_35757 = inst_35756;
var inst_35758 = (0);
var state_35793__$1 = (function (){var statearr_35796 = state_35793;
(statearr_35796[(7)] = inst_35757);

(statearr_35796[(8)] = inst_35758);

return statearr_35796;
})();
var statearr_35797_35829 = state_35793__$1;
(statearr_35797_35829[(2)] = null);

(statearr_35797_35829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (4))){
var inst_35761 = (state_35793[(9)]);
var inst_35761__$1 = (state_35793[(2)]);
var inst_35762 = (inst_35761__$1 == null);
var inst_35763 = cljs.core.not.call(null,inst_35762);
var state_35793__$1 = (function (){var statearr_35798 = state_35793;
(statearr_35798[(9)] = inst_35761__$1);

return statearr_35798;
})();
if(inst_35763){
var statearr_35799_35830 = state_35793__$1;
(statearr_35799_35830[(1)] = (5));

} else {
var statearr_35800_35831 = state_35793__$1;
(statearr_35800_35831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (15))){
var inst_35783 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35801_35832 = state_35793__$1;
(statearr_35801_35832[(2)] = inst_35783);

(statearr_35801_35832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (13))){
var state_35793__$1 = state_35793;
var statearr_35802_35833 = state_35793__$1;
(statearr_35802_35833[(2)] = null);

(statearr_35802_35833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (6))){
var inst_35758 = (state_35793[(8)]);
var inst_35779 = (inst_35758 > (0));
var state_35793__$1 = state_35793;
if(cljs.core.truth_(inst_35779)){
var statearr_35803_35834 = state_35793__$1;
(statearr_35803_35834[(1)] = (12));

} else {
var statearr_35804_35835 = state_35793__$1;
(statearr_35804_35835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (3))){
var inst_35791 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35793__$1,inst_35791);
} else {
if((state_val_35794 === (12))){
var inst_35757 = (state_35793[(7)]);
var inst_35781 = cljs.core.vec.call(null,inst_35757);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35793__$1,(15),out,inst_35781);
} else {
if((state_val_35794 === (2))){
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35793__$1,(4),ch);
} else {
if((state_val_35794 === (11))){
var inst_35773 = (state_35793[(2)]);
var inst_35774 = (new Array(n));
var inst_35757 = inst_35774;
var inst_35758 = (0);
var state_35793__$1 = (function (){var statearr_35805 = state_35793;
(statearr_35805[(10)] = inst_35773);

(statearr_35805[(7)] = inst_35757);

(statearr_35805[(8)] = inst_35758);

return statearr_35805;
})();
var statearr_35806_35836 = state_35793__$1;
(statearr_35806_35836[(2)] = null);

(statearr_35806_35836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (9))){
var inst_35757 = (state_35793[(7)]);
var inst_35771 = cljs.core.vec.call(null,inst_35757);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35793__$1,(11),out,inst_35771);
} else {
if((state_val_35794 === (5))){
var inst_35761 = (state_35793[(9)]);
var inst_35757 = (state_35793[(7)]);
var inst_35766 = (state_35793[(11)]);
var inst_35758 = (state_35793[(8)]);
var inst_35765 = (inst_35757[inst_35758] = inst_35761);
var inst_35766__$1 = (inst_35758 + (1));
var inst_35767 = (inst_35766__$1 < n);
var state_35793__$1 = (function (){var statearr_35807 = state_35793;
(statearr_35807[(12)] = inst_35765);

(statearr_35807[(11)] = inst_35766__$1);

return statearr_35807;
})();
if(cljs.core.truth_(inst_35767)){
var statearr_35808_35837 = state_35793__$1;
(statearr_35808_35837[(1)] = (8));

} else {
var statearr_35809_35838 = state_35793__$1;
(statearr_35809_35838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (14))){
var inst_35786 = (state_35793[(2)]);
var inst_35787 = cljs.core.async.close_BANG_.call(null,out);
var state_35793__$1 = (function (){var statearr_35811 = state_35793;
(statearr_35811[(13)] = inst_35786);

return statearr_35811;
})();
var statearr_35812_35839 = state_35793__$1;
(statearr_35812_35839[(2)] = inst_35787);

(statearr_35812_35839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (10))){
var inst_35777 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35813_35840 = state_35793__$1;
(statearr_35813_35840[(2)] = inst_35777);

(statearr_35813_35840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (8))){
var inst_35757 = (state_35793[(7)]);
var inst_35766 = (state_35793[(11)]);
var tmp35810 = inst_35757;
var inst_35757__$1 = tmp35810;
var inst_35758 = inst_35766;
var state_35793__$1 = (function (){var statearr_35814 = state_35793;
(statearr_35814[(7)] = inst_35757__$1);

(statearr_35814[(8)] = inst_35758);

return statearr_35814;
})();
var statearr_35815_35841 = state_35793__$1;
(statearr_35815_35841[(2)] = null);

(statearr_35815_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35827,out))
;
return ((function (switch__29129__auto__,c__29194__auto___35827,out){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35819[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35819[(1)] = (1));

return statearr_35819;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35793){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35820){if((e35820 instanceof Object)){
var ex__29133__auto__ = e35820;
var statearr_35821_35842 = state_35793;
(statearr_35821_35842[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35843 = state_35793;
state_35793 = G__35843;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35827,out))
})();
var state__29196__auto__ = (function (){var statearr_35822 = f__29195__auto__.call(null);
(statearr_35822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35827);

return statearr_35822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35827,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35844 = [];
var len__5651__auto___35918 = arguments.length;
var i__5652__auto___35919 = (0);
while(true){
if((i__5652__auto___35919 < len__5651__auto___35918)){
args35844.push((arguments[i__5652__auto___35919]));

var G__35920 = (i__5652__auto___35919 + (1));
i__5652__auto___35919 = G__35920;
continue;
} else {
}
break;
}

var G__35846 = args35844.length;
switch (G__35846) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35844.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29194__auto___35922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29194__auto___35922,out){
return (function (){
var f__29195__auto__ = (function (){var switch__29129__auto__ = ((function (c__29194__auto___35922,out){
return (function (state_35888){
var state_val_35889 = (state_35888[(1)]);
if((state_val_35889 === (7))){
var inst_35884 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35890_35923 = state_35888__$1;
(statearr_35890_35923[(2)] = inst_35884);

(statearr_35890_35923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (1))){
var inst_35847 = [];
var inst_35848 = inst_35847;
var inst_35849 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35888__$1 = (function (){var statearr_35891 = state_35888;
(statearr_35891[(7)] = inst_35849);

(statearr_35891[(8)] = inst_35848);

return statearr_35891;
})();
var statearr_35892_35924 = state_35888__$1;
(statearr_35892_35924[(2)] = null);

(statearr_35892_35924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (4))){
var inst_35852 = (state_35888[(9)]);
var inst_35852__$1 = (state_35888[(2)]);
var inst_35853 = (inst_35852__$1 == null);
var inst_35854 = cljs.core.not.call(null,inst_35853);
var state_35888__$1 = (function (){var statearr_35893 = state_35888;
(statearr_35893[(9)] = inst_35852__$1);

return statearr_35893;
})();
if(inst_35854){
var statearr_35894_35925 = state_35888__$1;
(statearr_35894_35925[(1)] = (5));

} else {
var statearr_35895_35926 = state_35888__$1;
(statearr_35895_35926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (15))){
var inst_35878 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35896_35927 = state_35888__$1;
(statearr_35896_35927[(2)] = inst_35878);

(statearr_35896_35927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (13))){
var state_35888__$1 = state_35888;
var statearr_35897_35928 = state_35888__$1;
(statearr_35897_35928[(2)] = null);

(statearr_35897_35928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (6))){
var inst_35848 = (state_35888[(8)]);
var inst_35873 = inst_35848.length;
var inst_35874 = (inst_35873 > (0));
var state_35888__$1 = state_35888;
if(cljs.core.truth_(inst_35874)){
var statearr_35898_35929 = state_35888__$1;
(statearr_35898_35929[(1)] = (12));

} else {
var statearr_35899_35930 = state_35888__$1;
(statearr_35899_35930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (3))){
var inst_35886 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35888__$1,inst_35886);
} else {
if((state_val_35889 === (12))){
var inst_35848 = (state_35888[(8)]);
var inst_35876 = cljs.core.vec.call(null,inst_35848);
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35888__$1,(15),out,inst_35876);
} else {
if((state_val_35889 === (2))){
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35888__$1,(4),ch);
} else {
if((state_val_35889 === (11))){
var inst_35856 = (state_35888[(10)]);
var inst_35852 = (state_35888[(9)]);
var inst_35866 = (state_35888[(2)]);
var inst_35867 = [];
var inst_35868 = inst_35867.push(inst_35852);
var inst_35848 = inst_35867;
var inst_35849 = inst_35856;
var state_35888__$1 = (function (){var statearr_35900 = state_35888;
(statearr_35900[(11)] = inst_35868);

(statearr_35900[(12)] = inst_35866);

(statearr_35900[(7)] = inst_35849);

(statearr_35900[(8)] = inst_35848);

return statearr_35900;
})();
var statearr_35901_35931 = state_35888__$1;
(statearr_35901_35931[(2)] = null);

(statearr_35901_35931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (9))){
var inst_35848 = (state_35888[(8)]);
var inst_35864 = cljs.core.vec.call(null,inst_35848);
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35888__$1,(11),out,inst_35864);
} else {
if((state_val_35889 === (5))){
var inst_35856 = (state_35888[(10)]);
var inst_35852 = (state_35888[(9)]);
var inst_35849 = (state_35888[(7)]);
var inst_35856__$1 = f.call(null,inst_35852);
var inst_35857 = cljs.core._EQ_.call(null,inst_35856__$1,inst_35849);
var inst_35858 = cljs.core.keyword_identical_QMARK_.call(null,inst_35849,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35859 = (inst_35857) || (inst_35858);
var state_35888__$1 = (function (){var statearr_35902 = state_35888;
(statearr_35902[(10)] = inst_35856__$1);

return statearr_35902;
})();
if(cljs.core.truth_(inst_35859)){
var statearr_35903_35932 = state_35888__$1;
(statearr_35903_35932[(1)] = (8));

} else {
var statearr_35904_35933 = state_35888__$1;
(statearr_35904_35933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (14))){
var inst_35881 = (state_35888[(2)]);
var inst_35882 = cljs.core.async.close_BANG_.call(null,out);
var state_35888__$1 = (function (){var statearr_35906 = state_35888;
(statearr_35906[(13)] = inst_35881);

return statearr_35906;
})();
var statearr_35907_35934 = state_35888__$1;
(statearr_35907_35934[(2)] = inst_35882);

(statearr_35907_35934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (10))){
var inst_35871 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35908_35935 = state_35888__$1;
(statearr_35908_35935[(2)] = inst_35871);

(statearr_35908_35935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (8))){
var inst_35856 = (state_35888[(10)]);
var inst_35852 = (state_35888[(9)]);
var inst_35848 = (state_35888[(8)]);
var inst_35861 = inst_35848.push(inst_35852);
var tmp35905 = inst_35848;
var inst_35848__$1 = tmp35905;
var inst_35849 = inst_35856;
var state_35888__$1 = (function (){var statearr_35909 = state_35888;
(statearr_35909[(14)] = inst_35861);

(statearr_35909[(7)] = inst_35849);

(statearr_35909[(8)] = inst_35848__$1);

return statearr_35909;
})();
var statearr_35910_35936 = state_35888__$1;
(statearr_35910_35936[(2)] = null);

(statearr_35910_35936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29194__auto___35922,out))
;
return ((function (switch__29129__auto__,c__29194__auto___35922,out){
return (function() {
var cljs$core$async$state_machine__29130__auto__ = null;
var cljs$core$async$state_machine__29130__auto____0 = (function (){
var statearr_35914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35914[(0)] = cljs$core$async$state_machine__29130__auto__);

(statearr_35914[(1)] = (1));

return statearr_35914;
});
var cljs$core$async$state_machine__29130__auto____1 = (function (state_35888){
while(true){
var ret_value__29131__auto__ = (function (){try{while(true){
var result__29132__auto__ = switch__29129__auto__.call(null,state_35888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29132__auto__;
}
break;
}
}catch (e35915){if((e35915 instanceof Object)){
var ex__29133__auto__ = e35915;
var statearr_35916_35937 = state_35888;
(statearr_35916_35937[(5)] = ex__29133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35938 = state_35888;
state_35888 = G__35938;
continue;
} else {
return ret_value__29131__auto__;
}
break;
}
});
cljs$core$async$state_machine__29130__auto__ = function(state_35888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29130__auto____1.call(this,state_35888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29130__auto____0;
cljs$core$async$state_machine__29130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29130__auto____1;
return cljs$core$async$state_machine__29130__auto__;
})()
;})(switch__29129__auto__,c__29194__auto___35922,out))
})();
var state__29196__auto__ = (function (){var statearr_35917 = f__29195__auto__.call(null);
(statearr_35917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29194__auto___35922);

return statearr_35917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29196__auto__);
});})(c__29194__auto___35922,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map