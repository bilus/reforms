// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28588 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28588 = (function (fn_handler,f,meta28589){
this.fn_handler = fn_handler;
this.f = f;
this.meta28589 = meta28589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28590,meta28589__$1){
var self__ = this;
var _28590__$1 = this;
return (new cljs.core.async.t28588(self__.fn_handler,self__.f,meta28589__$1));
});

cljs.core.async.t28588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28590){
var self__ = this;
var _28590__$1 = this;
return self__.meta28589;
});

cljs.core.async.t28588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28589","meta28589",-944164925,null)], null);
});

cljs.core.async.t28588.cljs$lang$type = true;

cljs.core.async.t28588.cljs$lang$ctorStr = "cljs.core.async/t28588";

cljs.core.async.t28588.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t28588");
});

cljs.core.async.__GT_t28588 = (function cljs$core$async$fn_handler_$___GT_t28588(fn_handler__$1,f__$1,meta28589){
return (new cljs.core.async.t28588(fn_handler__$1,f__$1,meta28589));
});

}

return (new cljs.core.async.t28588(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28592 = buff;
if(G__28592){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__28592.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28592.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28592);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28592);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28594 = arguments.length;
switch (G__28594) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28597 = arguments.length;
switch (G__28597) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28599 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28599);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28599,ret){
return (function (){
return fn1.call(null,val_28599);
});})(val_28599,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28601 = arguments.length;
switch (G__28601) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
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
var n__5234__auto___28603 = n;
var x_28604 = (0);
while(true){
if((x_28604 < n__5234__auto___28603)){
(a[x_28604] = (0));

var G__28605 = (x_28604 + (1));
x_28604 = G__28605;
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

var G__28606 = (i + (1));
i = G__28606;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28610 = (function (alt_flag,flag,meta28611){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28611 = meta28611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28612,meta28611__$1){
var self__ = this;
var _28612__$1 = this;
return (new cljs.core.async.t28610(self__.alt_flag,self__.flag,meta28611__$1));
});})(flag))
;

cljs.core.async.t28610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28612){
var self__ = this;
var _28612__$1 = this;
return self__.meta28611;
});})(flag))
;

cljs.core.async.t28610.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28610.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28611","meta28611",-1220006516,null)], null);
});})(flag))
;

cljs.core.async.t28610.cljs$lang$type = true;

cljs.core.async.t28610.cljs$lang$ctorStr = "cljs.core.async/t28610";

cljs.core.async.t28610.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t28610");
});})(flag))
;

cljs.core.async.__GT_t28610 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28610(alt_flag__$1,flag__$1,meta28611){
return (new cljs.core.async.t28610(alt_flag__$1,flag__$1,meta28611));
});})(flag))
;

}

return (new cljs.core.async.t28610(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28616 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28616 = (function (alt_handler,flag,cb,meta28617){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28617 = meta28617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28618,meta28617__$1){
var self__ = this;
var _28618__$1 = this;
return (new cljs.core.async.t28616(self__.alt_handler,self__.flag,self__.cb,meta28617__$1));
});

cljs.core.async.t28616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28618){
var self__ = this;
var _28618__$1 = this;
return self__.meta28617;
});

cljs.core.async.t28616.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28617","meta28617",1016379573,null)], null);
});

cljs.core.async.t28616.cljs$lang$type = true;

cljs.core.async.t28616.cljs$lang$ctorStr = "cljs.core.async/t28616";

cljs.core.async.t28616.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t28616");
});

cljs.core.async.__GT_t28616 = (function cljs$core$async$alt_handler_$___GT_t28616(alt_handler__$1,flag__$1,cb__$1,meta28617){
return (new cljs.core.async.t28616(alt_handler__$1,flag__$1,cb__$1,meta28617));
});

}

return (new cljs.core.async.t28616(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28619_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28619_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28620_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28620_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4349__auto__ = wport;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28621 = (i + (1));
i = G__28621;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4349__auto__ = ret;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4337__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4337__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4337__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5389__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28624){
var map__28625 = p__28624;
var map__28625__$1 = ((cljs.core.seq_QMARK_.call(null,map__28625))?cljs.core.apply.call(null,cljs.core.hash_map,map__28625):map__28625);
var opts = map__28625__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28622){
var G__28623 = cljs.core.first.call(null,seq28622);
var seq28622__$1 = cljs.core.next.call(null,seq28622);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28623,seq28622__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28627 = arguments.length;
switch (G__28627) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25247__auto___28676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___28676){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___28676){
return (function (state_28651){
var state_val_28652 = (state_28651[(1)]);
if((state_val_28652 === (7))){
var inst_28647 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28653_28677 = state_28651__$1;
(statearr_28653_28677[(2)] = inst_28647);

(statearr_28653_28677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (1))){
var state_28651__$1 = state_28651;
var statearr_28654_28678 = state_28651__$1;
(statearr_28654_28678[(2)] = null);

(statearr_28654_28678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (4))){
var inst_28630 = (state_28651[(7)]);
var inst_28630__$1 = (state_28651[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28651__$1 = (function (){var statearr_28655 = state_28651;
(statearr_28655[(7)] = inst_28630__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28656_28679 = state_28651__$1;
(statearr_28656_28679[(1)] = (5));

} else {
var statearr_28657_28680 = state_28651__$1;
(statearr_28657_28680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (13))){
var state_28651__$1 = state_28651;
var statearr_28658_28681 = state_28651__$1;
(statearr_28658_28681[(2)] = null);

(statearr_28658_28681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (6))){
var inst_28630 = (state_28651[(7)]);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28651__$1,(11),to,inst_28630);
} else {
if((state_val_28652 === (3))){
var inst_28649 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28651__$1,inst_28649);
} else {
if((state_val_28652 === (12))){
var state_28651__$1 = state_28651;
var statearr_28659_28682 = state_28651__$1;
(statearr_28659_28682[(2)] = null);

(statearr_28659_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (2))){
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28651__$1,(4),from);
} else {
if((state_val_28652 === (11))){
var inst_28640 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
if(cljs.core.truth_(inst_28640)){
var statearr_28660_28683 = state_28651__$1;
(statearr_28660_28683[(1)] = (12));

} else {
var statearr_28661_28684 = state_28651__$1;
(statearr_28661_28684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (9))){
var state_28651__$1 = state_28651;
var statearr_28662_28685 = state_28651__$1;
(statearr_28662_28685[(2)] = null);

(statearr_28662_28685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (5))){
var state_28651__$1 = state_28651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28663_28686 = state_28651__$1;
(statearr_28663_28686[(1)] = (8));

} else {
var statearr_28664_28687 = state_28651__$1;
(statearr_28664_28687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (14))){
var inst_28645 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28665_28688 = state_28651__$1;
(statearr_28665_28688[(2)] = inst_28645);

(statearr_28665_28688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (10))){
var inst_28637 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28666_28689 = state_28651__$1;
(statearr_28666_28689[(2)] = inst_28637);

(statearr_28666_28689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (8))){
var inst_28634 = cljs.core.async.close_BANG_.call(null,to);
var state_28651__$1 = state_28651;
var statearr_28667_28690 = state_28651__$1;
(statearr_28667_28690[(2)] = inst_28634);

(statearr_28667_28690[(1)] = (10));


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
});})(c__25247__auto___28676))
;
return ((function (switch__25185__auto__,c__25247__auto___28676){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_28671 = [null,null,null,null,null,null,null,null];
(statearr_28671[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_28671[(1)] = (1));

return statearr_28671;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_28651){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_28651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e28672){if((e28672 instanceof Object)){
var ex__25189__auto__ = e28672;
var statearr_28673_28691 = state_28651;
(statearr_28673_28691[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28692 = state_28651;
state_28651 = G__28692;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_28651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_28651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___28676))
})();
var state__25249__auto__ = (function (){var statearr_28674 = f__25248__auto__.call(null);
(statearr_28674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___28676);

return statearr_28674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___28676))
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
return (function (p__28876){
var vec__28877 = p__28876;
var v = cljs.core.nth.call(null,vec__28877,(0),null);
var p = cljs.core.nth.call(null,vec__28877,(1),null);
var job = vec__28877;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25247__auto___29059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___29059,res,vec__28877,v,p,job,jobs,results){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___29059,res,vec__28877,v,p,job,jobs,results){
return (function (state_28882){
var state_val_28883 = (state_28882[(1)]);
if((state_val_28883 === (1))){
var state_28882__$1 = state_28882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28882__$1,(2),res,v);
} else {
if((state_val_28883 === (2))){
var inst_28879 = (state_28882[(2)]);
var inst_28880 = cljs.core.async.close_BANG_.call(null,res);
var state_28882__$1 = (function (){var statearr_28884 = state_28882;
(statearr_28884[(7)] = inst_28879);

return statearr_28884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28882__$1,inst_28880);
} else {
return null;
}
}
});})(c__25247__auto___29059,res,vec__28877,v,p,job,jobs,results))
;
return ((function (switch__25185__auto__,c__25247__auto___29059,res,vec__28877,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0 = (function (){
var statearr_28888 = [null,null,null,null,null,null,null,null];
(statearr_28888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__);

(statearr_28888[(1)] = (1));

return statearr_28888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1 = (function (state_28882){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_28882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e28889){if((e28889 instanceof Object)){
var ex__25189__auto__ = e28889;
var statearr_28890_29060 = state_28882;
(statearr_28890_29060[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29061 = state_28882;
state_28882 = G__29061;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = function(state_28882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1.call(this,state_28882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___29059,res,vec__28877,v,p,job,jobs,results))
})();
var state__25249__auto__ = (function (){var statearr_28891 = f__25248__auto__.call(null);
(statearr_28891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___29059);

return statearr_28891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___29059,res,vec__28877,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28892){
var vec__28893 = p__28892;
var v = cljs.core.nth.call(null,vec__28893,(0),null);
var p = cljs.core.nth.call(null,vec__28893,(1),null);
var job = vec__28893;
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
var n__5234__auto___29062 = n;
var __29063 = (0);
while(true){
if((__29063 < n__5234__auto___29062)){
var G__28894_29064 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28894_29064) {
case "compute":
var c__25247__auto___29066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29063,c__25247__auto___29066,G__28894_29064,n__5234__auto___29062,jobs,results,process,async){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (__29063,c__25247__auto___29066,G__28894_29064,n__5234__auto___29062,jobs,results,process,async){
return (function (state_28907){
var state_val_28908 = (state_28907[(1)]);
if((state_val_28908 === (1))){
var state_28907__$1 = state_28907;
var statearr_28909_29067 = state_28907__$1;
(statearr_28909_29067[(2)] = null);

(statearr_28909_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (2))){
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(4),jobs);
} else {
if((state_val_28908 === (3))){
var inst_28905 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28907__$1,inst_28905);
} else {
if((state_val_28908 === (4))){
var inst_28897 = (state_28907[(2)]);
var inst_28898 = process.call(null,inst_28897);
var state_28907__$1 = state_28907;
if(cljs.core.truth_(inst_28898)){
var statearr_28910_29068 = state_28907__$1;
(statearr_28910_29068[(1)] = (5));

} else {
var statearr_28911_29069 = state_28907__$1;
(statearr_28911_29069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (5))){
var state_28907__$1 = state_28907;
var statearr_28912_29070 = state_28907__$1;
(statearr_28912_29070[(2)] = null);

(statearr_28912_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (6))){
var state_28907__$1 = state_28907;
var statearr_28913_29071 = state_28907__$1;
(statearr_28913_29071[(2)] = null);

(statearr_28913_29071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28908 === (7))){
var inst_28903 = (state_28907[(2)]);
var state_28907__$1 = state_28907;
var statearr_28914_29072 = state_28907__$1;
(statearr_28914_29072[(2)] = inst_28903);

(statearr_28914_29072[(1)] = (3));


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
});})(__29063,c__25247__auto___29066,G__28894_29064,n__5234__auto___29062,jobs,results,process,async))
;
return ((function (__29063,switch__25185__auto__,c__25247__auto___29066,G__28894_29064,n__5234__auto___29062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0 = (function (){
var statearr_28918 = [null,null,null,null,null,null,null];
(statearr_28918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__);

(statearr_28918[(1)] = (1));

return statearr_28918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1 = (function (state_28907){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_28907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e28919){if((e28919 instanceof Object)){
var ex__25189__auto__ = e28919;
var statearr_28920_29073 = state_28907;
(statearr_28920_29073[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29074 = state_28907;
state_28907 = G__29074;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = function(state_28907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1.call(this,state_28907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__;
})()
;})(__29063,switch__25185__auto__,c__25247__auto___29066,G__28894_29064,n__5234__auto___29062,jobs,results,process,async))
})();
var state__25249__auto__ = (function (){var statearr_28921 = f__25248__auto__.call(null);
(statearr_28921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___29066);

return statearr_28921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(__29063,c__25247__auto___29066,G__28894_29064,n__5234__auto___29062,jobs,results,process,async))
);


break;
case "async":
var c__25247__auto___29075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29063,c__25247__auto___29075,G__28894_29064,n__5234__auto___29062,jobs,results,process,async){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (__29063,c__25247__auto___29075,G__28894_29064,n__5234__auto___29062,jobs,results,process,async){
return (function (state_28934){
var state_val_28935 = (state_28934[(1)]);
if((state_val_28935 === (1))){
var state_28934__$1 = state_28934;
var statearr_28936_29076 = state_28934__$1;
(statearr_28936_29076[(2)] = null);

(statearr_28936_29076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (2))){
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(4),jobs);
} else {
if((state_val_28935 === (3))){
var inst_28932 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28934__$1,inst_28932);
} else {
if((state_val_28935 === (4))){
var inst_28924 = (state_28934[(2)]);
var inst_28925 = async.call(null,inst_28924);
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28925)){
var statearr_28937_29077 = state_28934__$1;
(statearr_28937_29077[(1)] = (5));

} else {
var statearr_28938_29078 = state_28934__$1;
(statearr_28938_29078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (5))){
var state_28934__$1 = state_28934;
var statearr_28939_29079 = state_28934__$1;
(statearr_28939_29079[(2)] = null);

(statearr_28939_29079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (6))){
var state_28934__$1 = state_28934;
var statearr_28940_29080 = state_28934__$1;
(statearr_28940_29080[(2)] = null);

(statearr_28940_29080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (7))){
var inst_28930 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28941_29081 = state_28934__$1;
(statearr_28941_29081[(2)] = inst_28930);

(statearr_28941_29081[(1)] = (3));


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
});})(__29063,c__25247__auto___29075,G__28894_29064,n__5234__auto___29062,jobs,results,process,async))
;
return ((function (__29063,switch__25185__auto__,c__25247__auto___29075,G__28894_29064,n__5234__auto___29062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0 = (function (){
var statearr_28945 = [null,null,null,null,null,null,null];
(statearr_28945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__);

(statearr_28945[(1)] = (1));

return statearr_28945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1 = (function (state_28934){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_28934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e28946){if((e28946 instanceof Object)){
var ex__25189__auto__ = e28946;
var statearr_28947_29082 = state_28934;
(statearr_28947_29082[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29083 = state_28934;
state_28934 = G__29083;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = function(state_28934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1.call(this,state_28934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__;
})()
;})(__29063,switch__25185__auto__,c__25247__auto___29075,G__28894_29064,n__5234__auto___29062,jobs,results,process,async))
})();
var state__25249__auto__ = (function (){var statearr_28948 = f__25248__auto__.call(null);
(statearr_28948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___29075);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(__29063,c__25247__auto___29075,G__28894_29064,n__5234__auto___29062,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29084 = (__29063 + (1));
__29063 = G__29084;
continue;
} else {
}
break;
}

var c__25247__auto___29085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___29085,jobs,results,process,async){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___29085,jobs,results,process,async){
return (function (state_28970){
var state_val_28971 = (state_28970[(1)]);
if((state_val_28971 === (1))){
var state_28970__$1 = state_28970;
var statearr_28972_29086 = state_28970__$1;
(statearr_28972_29086[(2)] = null);

(statearr_28972_29086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (2))){
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28970__$1,(4),from);
} else {
if((state_val_28971 === (3))){
var inst_28968 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28970__$1,inst_28968);
} else {
if((state_val_28971 === (4))){
var inst_28951 = (state_28970[(7)]);
var inst_28951__$1 = (state_28970[(2)]);
var inst_28952 = (inst_28951__$1 == null);
var state_28970__$1 = (function (){var statearr_28973 = state_28970;
(statearr_28973[(7)] = inst_28951__$1);

return statearr_28973;
})();
if(cljs.core.truth_(inst_28952)){
var statearr_28974_29087 = state_28970__$1;
(statearr_28974_29087[(1)] = (5));

} else {
var statearr_28975_29088 = state_28970__$1;
(statearr_28975_29088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (5))){
var inst_28954 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28970__$1 = state_28970;
var statearr_28976_29089 = state_28970__$1;
(statearr_28976_29089[(2)] = inst_28954);

(statearr_28976_29089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (6))){
var inst_28951 = (state_28970[(7)]);
var inst_28956 = (state_28970[(8)]);
var inst_28956__$1 = cljs.core.async.chan.call(null,(1));
var inst_28957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28958 = [inst_28951,inst_28956__$1];
var inst_28959 = (new cljs.core.PersistentVector(null,2,(5),inst_28957,inst_28958,null));
var state_28970__$1 = (function (){var statearr_28977 = state_28970;
(statearr_28977[(8)] = inst_28956__$1);

return statearr_28977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28970__$1,(8),jobs,inst_28959);
} else {
if((state_val_28971 === (7))){
var inst_28966 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_28978_29090 = state_28970__$1;
(statearr_28978_29090[(2)] = inst_28966);

(statearr_28978_29090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (8))){
var inst_28956 = (state_28970[(8)]);
var inst_28961 = (state_28970[(2)]);
var state_28970__$1 = (function (){var statearr_28979 = state_28970;
(statearr_28979[(9)] = inst_28961);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28970__$1,(9),results,inst_28956);
} else {
if((state_val_28971 === (9))){
var inst_28963 = (state_28970[(2)]);
var state_28970__$1 = (function (){var statearr_28980 = state_28970;
(statearr_28980[(10)] = inst_28963);

return statearr_28980;
})();
var statearr_28981_29091 = state_28970__$1;
(statearr_28981_29091[(2)] = null);

(statearr_28981_29091[(1)] = (2));


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
});})(c__25247__auto___29085,jobs,results,process,async))
;
return ((function (switch__25185__auto__,c__25247__auto___29085,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1 = (function (state_28970){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_28970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e28986){if((e28986 instanceof Object)){
var ex__25189__auto__ = e28986;
var statearr_28987_29092 = state_28970;
(statearr_28987_29092[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29093 = state_28970;
state_28970 = G__29093;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = function(state_28970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1.call(this,state_28970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___29085,jobs,results,process,async))
})();
var state__25249__auto__ = (function (){var statearr_28988 = f__25248__auto__.call(null);
(statearr_28988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___29085);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___29085,jobs,results,process,async))
);


var c__25247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto__,jobs,results,process,async){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto__,jobs,results,process,async){
return (function (state_29026){
var state_val_29027 = (state_29026[(1)]);
if((state_val_29027 === (7))){
var inst_29022 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29028_29094 = state_29026__$1;
(statearr_29028_29094[(2)] = inst_29022);

(statearr_29028_29094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (20))){
var state_29026__$1 = state_29026;
var statearr_29029_29095 = state_29026__$1;
(statearr_29029_29095[(2)] = null);

(statearr_29029_29095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (1))){
var state_29026__$1 = state_29026;
var statearr_29030_29096 = state_29026__$1;
(statearr_29030_29096[(2)] = null);

(statearr_29030_29096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (4))){
var inst_28991 = (state_29026[(7)]);
var inst_28991__$1 = (state_29026[(2)]);
var inst_28992 = (inst_28991__$1 == null);
var state_29026__$1 = (function (){var statearr_29031 = state_29026;
(statearr_29031[(7)] = inst_28991__$1);

return statearr_29031;
})();
if(cljs.core.truth_(inst_28992)){
var statearr_29032_29097 = state_29026__$1;
(statearr_29032_29097[(1)] = (5));

} else {
var statearr_29033_29098 = state_29026__$1;
(statearr_29033_29098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (15))){
var inst_29004 = (state_29026[(8)]);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29026__$1,(18),to,inst_29004);
} else {
if((state_val_29027 === (21))){
var inst_29017 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29034_29099 = state_29026__$1;
(statearr_29034_29099[(2)] = inst_29017);

(statearr_29034_29099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (13))){
var inst_29019 = (state_29026[(2)]);
var state_29026__$1 = (function (){var statearr_29035 = state_29026;
(statearr_29035[(9)] = inst_29019);

return statearr_29035;
})();
var statearr_29036_29100 = state_29026__$1;
(statearr_29036_29100[(2)] = null);

(statearr_29036_29100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (6))){
var inst_28991 = (state_29026[(7)]);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29026__$1,(11),inst_28991);
} else {
if((state_val_29027 === (17))){
var inst_29012 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
if(cljs.core.truth_(inst_29012)){
var statearr_29037_29101 = state_29026__$1;
(statearr_29037_29101[(1)] = (19));

} else {
var statearr_29038_29102 = state_29026__$1;
(statearr_29038_29102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (3))){
var inst_29024 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29026__$1,inst_29024);
} else {
if((state_val_29027 === (12))){
var inst_29001 = (state_29026[(10)]);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29026__$1,(14),inst_29001);
} else {
if((state_val_29027 === (2))){
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29026__$1,(4),results);
} else {
if((state_val_29027 === (19))){
var state_29026__$1 = state_29026;
var statearr_29039_29103 = state_29026__$1;
(statearr_29039_29103[(2)] = null);

(statearr_29039_29103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (11))){
var inst_29001 = (state_29026[(2)]);
var state_29026__$1 = (function (){var statearr_29040 = state_29026;
(statearr_29040[(10)] = inst_29001);

return statearr_29040;
})();
var statearr_29041_29104 = state_29026__$1;
(statearr_29041_29104[(2)] = null);

(statearr_29041_29104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (9))){
var state_29026__$1 = state_29026;
var statearr_29042_29105 = state_29026__$1;
(statearr_29042_29105[(2)] = null);

(statearr_29042_29105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (5))){
var state_29026__$1 = state_29026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29043_29106 = state_29026__$1;
(statearr_29043_29106[(1)] = (8));

} else {
var statearr_29044_29107 = state_29026__$1;
(statearr_29044_29107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (14))){
var inst_29004 = (state_29026[(8)]);
var inst_29006 = (state_29026[(11)]);
var inst_29004__$1 = (state_29026[(2)]);
var inst_29005 = (inst_29004__$1 == null);
var inst_29006__$1 = cljs.core.not.call(null,inst_29005);
var state_29026__$1 = (function (){var statearr_29045 = state_29026;
(statearr_29045[(8)] = inst_29004__$1);

(statearr_29045[(11)] = inst_29006__$1);

return statearr_29045;
})();
if(inst_29006__$1){
var statearr_29046_29108 = state_29026__$1;
(statearr_29046_29108[(1)] = (15));

} else {
var statearr_29047_29109 = state_29026__$1;
(statearr_29047_29109[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (16))){
var inst_29006 = (state_29026[(11)]);
var state_29026__$1 = state_29026;
var statearr_29048_29110 = state_29026__$1;
(statearr_29048_29110[(2)] = inst_29006);

(statearr_29048_29110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (10))){
var inst_28998 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29049_29111 = state_29026__$1;
(statearr_29049_29111[(2)] = inst_28998);

(statearr_29049_29111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (18))){
var inst_29009 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29050_29112 = state_29026__$1;
(statearr_29050_29112[(2)] = inst_29009);

(statearr_29050_29112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (8))){
var inst_28995 = cljs.core.async.close_BANG_.call(null,to);
var state_29026__$1 = state_29026;
var statearr_29051_29113 = state_29026__$1;
(statearr_29051_29113[(2)] = inst_28995);

(statearr_29051_29113[(1)] = (10));


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
});})(c__25247__auto__,jobs,results,process,async))
;
return ((function (switch__25185__auto__,c__25247__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1 = (function (state_29026){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_29026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e29056){if((e29056 instanceof Object)){
var ex__25189__auto__ = e29056;
var statearr_29057_29114 = state_29026;
(statearr_29057_29114[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29115 = state_29026;
state_29026 = G__29115;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__ = function(state_29026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1.call(this,state_29026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25186__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto__,jobs,results,process,async))
})();
var state__25249__auto__ = (function (){var statearr_29058 = f__25248__auto__.call(null);
(statearr_29058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto__);

return statearr_29058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto__,jobs,results,process,async))
);

return c__25247__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__29117 = arguments.length;
switch (G__29117) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__29120 = arguments.length;
switch (G__29120) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__29123 = arguments.length;
switch (G__29123) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25247__auto___29175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___29175,tc,fc){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___29175,tc,fc){
return (function (state_29149){
var state_val_29150 = (state_29149[(1)]);
if((state_val_29150 === (7))){
var inst_29145 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
var statearr_29151_29176 = state_29149__$1;
(statearr_29151_29176[(2)] = inst_29145);

(statearr_29151_29176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (1))){
var state_29149__$1 = state_29149;
var statearr_29152_29177 = state_29149__$1;
(statearr_29152_29177[(2)] = null);

(statearr_29152_29177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (4))){
var inst_29126 = (state_29149[(7)]);
var inst_29126__$1 = (state_29149[(2)]);
var inst_29127 = (inst_29126__$1 == null);
var state_29149__$1 = (function (){var statearr_29153 = state_29149;
(statearr_29153[(7)] = inst_29126__$1);

return statearr_29153;
})();
if(cljs.core.truth_(inst_29127)){
var statearr_29154_29178 = state_29149__$1;
(statearr_29154_29178[(1)] = (5));

} else {
var statearr_29155_29179 = state_29149__$1;
(statearr_29155_29179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (13))){
var state_29149__$1 = state_29149;
var statearr_29156_29180 = state_29149__$1;
(statearr_29156_29180[(2)] = null);

(statearr_29156_29180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (6))){
var inst_29126 = (state_29149[(7)]);
var inst_29132 = p.call(null,inst_29126);
var state_29149__$1 = state_29149;
if(cljs.core.truth_(inst_29132)){
var statearr_29157_29181 = state_29149__$1;
(statearr_29157_29181[(1)] = (9));

} else {
var statearr_29158_29182 = state_29149__$1;
(statearr_29158_29182[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (3))){
var inst_29147 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29149__$1,inst_29147);
} else {
if((state_val_29150 === (12))){
var state_29149__$1 = state_29149;
var statearr_29159_29183 = state_29149__$1;
(statearr_29159_29183[(2)] = null);

(statearr_29159_29183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (2))){
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29149__$1,(4),ch);
} else {
if((state_val_29150 === (11))){
var inst_29126 = (state_29149[(7)]);
var inst_29136 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29149__$1,(8),inst_29136,inst_29126);
} else {
if((state_val_29150 === (9))){
var state_29149__$1 = state_29149;
var statearr_29160_29184 = state_29149__$1;
(statearr_29160_29184[(2)] = tc);

(statearr_29160_29184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (5))){
var inst_29129 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29130 = cljs.core.async.close_BANG_.call(null,fc);
var state_29149__$1 = (function (){var statearr_29161 = state_29149;
(statearr_29161[(8)] = inst_29129);

return statearr_29161;
})();
var statearr_29162_29185 = state_29149__$1;
(statearr_29162_29185[(2)] = inst_29130);

(statearr_29162_29185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (14))){
var inst_29143 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
var statearr_29163_29186 = state_29149__$1;
(statearr_29163_29186[(2)] = inst_29143);

(statearr_29163_29186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (10))){
var state_29149__$1 = state_29149;
var statearr_29164_29187 = state_29149__$1;
(statearr_29164_29187[(2)] = fc);

(statearr_29164_29187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29150 === (8))){
var inst_29138 = (state_29149[(2)]);
var state_29149__$1 = state_29149;
if(cljs.core.truth_(inst_29138)){
var statearr_29165_29188 = state_29149__$1;
(statearr_29165_29188[(1)] = (12));

} else {
var statearr_29166_29189 = state_29149__$1;
(statearr_29166_29189[(1)] = (13));

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
});})(c__25247__auto___29175,tc,fc))
;
return ((function (switch__25185__auto__,c__25247__auto___29175,tc,fc){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_29170 = [null,null,null,null,null,null,null,null,null];
(statearr_29170[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_29170[(1)] = (1));

return statearr_29170;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_29149){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_29149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e29171){if((e29171 instanceof Object)){
var ex__25189__auto__ = e29171;
var statearr_29172_29190 = state_29149;
(statearr_29172_29190[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29191 = state_29149;
state_29149 = G__29191;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_29149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_29149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___29175,tc,fc))
})();
var state__25249__auto__ = (function (){var statearr_29173 = f__25248__auto__.call(null);
(statearr_29173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___29175);

return statearr_29173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___29175,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto__){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto__){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (1))){
var inst_29224 = init;
var state_29238__$1 = (function (){var statearr_29240 = state_29238;
(statearr_29240[(7)] = inst_29224);

return statearr_29240;
})();
var statearr_29241_29256 = state_29238__$1;
(statearr_29241_29256[(2)] = null);

(statearr_29241_29256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (2))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(4),ch);
} else {
if((state_val_29239 === (3))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (4))){
var inst_29227 = (state_29238[(8)]);
var inst_29227__$1 = (state_29238[(2)]);
var inst_29228 = (inst_29227__$1 == null);
var state_29238__$1 = (function (){var statearr_29242 = state_29238;
(statearr_29242[(8)] = inst_29227__$1);

return statearr_29242;
})();
if(cljs.core.truth_(inst_29228)){
var statearr_29243_29257 = state_29238__$1;
(statearr_29243_29257[(1)] = (5));

} else {
var statearr_29244_29258 = state_29238__$1;
(statearr_29244_29258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var inst_29224 = (state_29238[(7)]);
var state_29238__$1 = state_29238;
var statearr_29245_29259 = state_29238__$1;
(statearr_29245_29259[(2)] = inst_29224);

(statearr_29245_29259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var inst_29227 = (state_29238[(8)]);
var inst_29224 = (state_29238[(7)]);
var inst_29231 = f.call(null,inst_29224,inst_29227);
var inst_29224__$1 = inst_29231;
var state_29238__$1 = (function (){var statearr_29246 = state_29238;
(statearr_29246[(7)] = inst_29224__$1);

return statearr_29246;
})();
var statearr_29247_29260 = state_29238__$1;
(statearr_29247_29260[(2)] = null);

(statearr_29247_29260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (7))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29248_29261 = state_29238__$1;
(statearr_29248_29261[(2)] = inst_29234);

(statearr_29248_29261[(1)] = (3));


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
});})(c__25247__auto__))
;
return ((function (switch__25185__auto__,c__25247__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25186__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25186__auto____0 = (function (){
var statearr_29252 = [null,null,null,null,null,null,null,null,null];
(statearr_29252[(0)] = cljs$core$async$reduce_$_state_machine__25186__auto__);

(statearr_29252[(1)] = (1));

return statearr_29252;
});
var cljs$core$async$reduce_$_state_machine__25186__auto____1 = (function (state_29238){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e29253){if((e29253 instanceof Object)){
var ex__25189__auto__ = e29253;
var statearr_29254_29262 = state_29238;
(statearr_29254_29262[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29263 = state_29238;
state_29238 = G__29263;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25186__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25186__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25186__auto____0;
cljs$core$async$reduce_$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25186__auto____1;
return cljs$core$async$reduce_$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto__))
})();
var state__25249__auto__ = (function (){var statearr_29255 = f__25248__auto__.call(null);
(statearr_29255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto__);

return statearr_29255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto__))
);

return c__25247__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__29265 = arguments.length;
switch (G__29265) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto__){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto__){
return (function (state_29290){
var state_val_29291 = (state_29290[(1)]);
if((state_val_29291 === (7))){
var inst_29272 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
var statearr_29292_29316 = state_29290__$1;
(statearr_29292_29316[(2)] = inst_29272);

(statearr_29292_29316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (1))){
var inst_29266 = cljs.core.seq.call(null,coll);
var inst_29267 = inst_29266;
var state_29290__$1 = (function (){var statearr_29293 = state_29290;
(statearr_29293[(7)] = inst_29267);

return statearr_29293;
})();
var statearr_29294_29317 = state_29290__$1;
(statearr_29294_29317[(2)] = null);

(statearr_29294_29317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (4))){
var inst_29267 = (state_29290[(7)]);
var inst_29270 = cljs.core.first.call(null,inst_29267);
var state_29290__$1 = state_29290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29290__$1,(7),ch,inst_29270);
} else {
if((state_val_29291 === (13))){
var inst_29284 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
var statearr_29295_29318 = state_29290__$1;
(statearr_29295_29318[(2)] = inst_29284);

(statearr_29295_29318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (6))){
var inst_29275 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
if(cljs.core.truth_(inst_29275)){
var statearr_29296_29319 = state_29290__$1;
(statearr_29296_29319[(1)] = (8));

} else {
var statearr_29297_29320 = state_29290__$1;
(statearr_29297_29320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (3))){
var inst_29288 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29290__$1,inst_29288);
} else {
if((state_val_29291 === (12))){
var state_29290__$1 = state_29290;
var statearr_29298_29321 = state_29290__$1;
(statearr_29298_29321[(2)] = null);

(statearr_29298_29321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (2))){
var inst_29267 = (state_29290[(7)]);
var state_29290__$1 = state_29290;
if(cljs.core.truth_(inst_29267)){
var statearr_29299_29322 = state_29290__$1;
(statearr_29299_29322[(1)] = (4));

} else {
var statearr_29300_29323 = state_29290__$1;
(statearr_29300_29323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (11))){
var inst_29281 = cljs.core.async.close_BANG_.call(null,ch);
var state_29290__$1 = state_29290;
var statearr_29301_29324 = state_29290__$1;
(statearr_29301_29324[(2)] = inst_29281);

(statearr_29301_29324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (9))){
var state_29290__$1 = state_29290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29302_29325 = state_29290__$1;
(statearr_29302_29325[(1)] = (11));

} else {
var statearr_29303_29326 = state_29290__$1;
(statearr_29303_29326[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (5))){
var inst_29267 = (state_29290[(7)]);
var state_29290__$1 = state_29290;
var statearr_29304_29327 = state_29290__$1;
(statearr_29304_29327[(2)] = inst_29267);

(statearr_29304_29327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (10))){
var inst_29286 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
var statearr_29305_29328 = state_29290__$1;
(statearr_29305_29328[(2)] = inst_29286);

(statearr_29305_29328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (8))){
var inst_29267 = (state_29290[(7)]);
var inst_29277 = cljs.core.next.call(null,inst_29267);
var inst_29267__$1 = inst_29277;
var state_29290__$1 = (function (){var statearr_29306 = state_29290;
(statearr_29306[(7)] = inst_29267__$1);

return statearr_29306;
})();
var statearr_29307_29329 = state_29290__$1;
(statearr_29307_29329[(2)] = null);

(statearr_29307_29329[(1)] = (2));


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
});})(c__25247__auto__))
;
return ((function (switch__25185__auto__,c__25247__auto__){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_29311 = [null,null,null,null,null,null,null,null];
(statearr_29311[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_29311[(1)] = (1));

return statearr_29311;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_29290){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_29290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e29312){if((e29312 instanceof Object)){
var ex__25189__auto__ = e29312;
var statearr_29313_29330 = state_29290;
(statearr_29313_29330[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29331 = state_29290;
state_29290 = G__29331;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_29290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_29290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto__))
})();
var state__25249__auto__ = (function (){var statearr_29314 = f__25248__auto__.call(null);
(statearr_29314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto__);

return statearr_29314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto__))
);

return c__25247__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29333 = {};
return obj29333;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4337__auto__ = _;
if(and__4337__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4337__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4985__auto__ = (((_ == null))?null:_);
return (function (){var or__4349__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29335 = {};
return obj29335;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29557 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29557 = (function (mult,ch,cs,meta29558){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29558 = meta29558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29559,meta29558__$1){
var self__ = this;
var _29559__$1 = this;
return (new cljs.core.async.t29557(self__.mult,self__.ch,self__.cs,meta29558__$1));
});})(cs))
;

cljs.core.async.t29557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29559){
var self__ = this;
var _29559__$1 = this;
return self__.meta29558;
});})(cs))
;

cljs.core.async.t29557.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29557.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29557.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29557.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29557.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29557.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29558","meta29558",-700481691,null)], null);
});})(cs))
;

cljs.core.async.t29557.cljs$lang$type = true;

cljs.core.async.t29557.cljs$lang$ctorStr = "cljs.core.async/t29557";

cljs.core.async.t29557.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t29557");
});})(cs))
;

cljs.core.async.__GT_t29557 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29557(mult__$1,ch__$1,cs__$1,meta29558){
return (new cljs.core.async.t29557(mult__$1,ch__$1,cs__$1,meta29558));
});})(cs))
;

}

return (new cljs.core.async.t29557(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25247__auto___29778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___29778,cs,m,dchan,dctr,done){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___29778,cs,m,dchan,dctr,done){
return (function (state_29690){
var state_val_29691 = (state_29690[(1)]);
if((state_val_29691 === (7))){
var inst_29686 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29692_29779 = state_29690__$1;
(statearr_29692_29779[(2)] = inst_29686);

(statearr_29692_29779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (20))){
var inst_29591 = (state_29690[(7)]);
var inst_29601 = cljs.core.first.call(null,inst_29591);
var inst_29602 = cljs.core.nth.call(null,inst_29601,(0),null);
var inst_29603 = cljs.core.nth.call(null,inst_29601,(1),null);
var state_29690__$1 = (function (){var statearr_29693 = state_29690;
(statearr_29693[(8)] = inst_29602);

return statearr_29693;
})();
if(cljs.core.truth_(inst_29603)){
var statearr_29694_29780 = state_29690__$1;
(statearr_29694_29780[(1)] = (22));

} else {
var statearr_29695_29781 = state_29690__$1;
(statearr_29695_29781[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (27))){
var inst_29638 = (state_29690[(9)]);
var inst_29562 = (state_29690[(10)]);
var inst_29633 = (state_29690[(11)]);
var inst_29631 = (state_29690[(12)]);
var inst_29638__$1 = cljs.core._nth.call(null,inst_29631,inst_29633);
var inst_29639 = cljs.core.async.put_BANG_.call(null,inst_29638__$1,inst_29562,done);
var state_29690__$1 = (function (){var statearr_29696 = state_29690;
(statearr_29696[(9)] = inst_29638__$1);

return statearr_29696;
})();
if(cljs.core.truth_(inst_29639)){
var statearr_29697_29782 = state_29690__$1;
(statearr_29697_29782[(1)] = (30));

} else {
var statearr_29698_29783 = state_29690__$1;
(statearr_29698_29783[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (1))){
var state_29690__$1 = state_29690;
var statearr_29699_29784 = state_29690__$1;
(statearr_29699_29784[(2)] = null);

(statearr_29699_29784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (24))){
var inst_29591 = (state_29690[(7)]);
var inst_29608 = (state_29690[(2)]);
var inst_29609 = cljs.core.next.call(null,inst_29591);
var inst_29571 = inst_29609;
var inst_29572 = null;
var inst_29573 = (0);
var inst_29574 = (0);
var state_29690__$1 = (function (){var statearr_29700 = state_29690;
(statearr_29700[(13)] = inst_29572);

(statearr_29700[(14)] = inst_29608);

(statearr_29700[(15)] = inst_29573);

(statearr_29700[(16)] = inst_29574);

(statearr_29700[(17)] = inst_29571);

return statearr_29700;
})();
var statearr_29701_29785 = state_29690__$1;
(statearr_29701_29785[(2)] = null);

(statearr_29701_29785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (39))){
var state_29690__$1 = state_29690;
var statearr_29705_29786 = state_29690__$1;
(statearr_29705_29786[(2)] = null);

(statearr_29705_29786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (4))){
var inst_29562 = (state_29690[(10)]);
var inst_29562__$1 = (state_29690[(2)]);
var inst_29563 = (inst_29562__$1 == null);
var state_29690__$1 = (function (){var statearr_29706 = state_29690;
(statearr_29706[(10)] = inst_29562__$1);

return statearr_29706;
})();
if(cljs.core.truth_(inst_29563)){
var statearr_29707_29787 = state_29690__$1;
(statearr_29707_29787[(1)] = (5));

} else {
var statearr_29708_29788 = state_29690__$1;
(statearr_29708_29788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (15))){
var inst_29572 = (state_29690[(13)]);
var inst_29573 = (state_29690[(15)]);
var inst_29574 = (state_29690[(16)]);
var inst_29571 = (state_29690[(17)]);
var inst_29587 = (state_29690[(2)]);
var inst_29588 = (inst_29574 + (1));
var tmp29702 = inst_29572;
var tmp29703 = inst_29573;
var tmp29704 = inst_29571;
var inst_29571__$1 = tmp29704;
var inst_29572__$1 = tmp29702;
var inst_29573__$1 = tmp29703;
var inst_29574__$1 = inst_29588;
var state_29690__$1 = (function (){var statearr_29709 = state_29690;
(statearr_29709[(13)] = inst_29572__$1);

(statearr_29709[(18)] = inst_29587);

(statearr_29709[(15)] = inst_29573__$1);

(statearr_29709[(16)] = inst_29574__$1);

(statearr_29709[(17)] = inst_29571__$1);

return statearr_29709;
})();
var statearr_29710_29789 = state_29690__$1;
(statearr_29710_29789[(2)] = null);

(statearr_29710_29789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (21))){
var inst_29612 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29714_29790 = state_29690__$1;
(statearr_29714_29790[(2)] = inst_29612);

(statearr_29714_29790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (31))){
var inst_29638 = (state_29690[(9)]);
var inst_29642 = done.call(null,null);
var inst_29643 = cljs.core.async.untap_STAR_.call(null,m,inst_29638);
var state_29690__$1 = (function (){var statearr_29715 = state_29690;
(statearr_29715[(19)] = inst_29642);

return statearr_29715;
})();
var statearr_29716_29791 = state_29690__$1;
(statearr_29716_29791[(2)] = inst_29643);

(statearr_29716_29791[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (32))){
var inst_29632 = (state_29690[(20)]);
var inst_29630 = (state_29690[(21)]);
var inst_29633 = (state_29690[(11)]);
var inst_29631 = (state_29690[(12)]);
var inst_29645 = (state_29690[(2)]);
var inst_29646 = (inst_29633 + (1));
var tmp29711 = inst_29632;
var tmp29712 = inst_29630;
var tmp29713 = inst_29631;
var inst_29630__$1 = tmp29712;
var inst_29631__$1 = tmp29713;
var inst_29632__$1 = tmp29711;
var inst_29633__$1 = inst_29646;
var state_29690__$1 = (function (){var statearr_29717 = state_29690;
(statearr_29717[(20)] = inst_29632__$1);

(statearr_29717[(21)] = inst_29630__$1);

(statearr_29717[(11)] = inst_29633__$1);

(statearr_29717[(12)] = inst_29631__$1);

(statearr_29717[(22)] = inst_29645);

return statearr_29717;
})();
var statearr_29718_29792 = state_29690__$1;
(statearr_29718_29792[(2)] = null);

(statearr_29718_29792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (40))){
var inst_29658 = (state_29690[(23)]);
var inst_29662 = done.call(null,null);
var inst_29663 = cljs.core.async.untap_STAR_.call(null,m,inst_29658);
var state_29690__$1 = (function (){var statearr_29719 = state_29690;
(statearr_29719[(24)] = inst_29662);

return statearr_29719;
})();
var statearr_29720_29793 = state_29690__$1;
(statearr_29720_29793[(2)] = inst_29663);

(statearr_29720_29793[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (33))){
var inst_29649 = (state_29690[(25)]);
var inst_29651 = cljs.core.chunked_seq_QMARK_.call(null,inst_29649);
var state_29690__$1 = state_29690;
if(inst_29651){
var statearr_29721_29794 = state_29690__$1;
(statearr_29721_29794[(1)] = (36));

} else {
var statearr_29722_29795 = state_29690__$1;
(statearr_29722_29795[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (13))){
var inst_29581 = (state_29690[(26)]);
var inst_29584 = cljs.core.async.close_BANG_.call(null,inst_29581);
var state_29690__$1 = state_29690;
var statearr_29723_29796 = state_29690__$1;
(statearr_29723_29796[(2)] = inst_29584);

(statearr_29723_29796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (22))){
var inst_29602 = (state_29690[(8)]);
var inst_29605 = cljs.core.async.close_BANG_.call(null,inst_29602);
var state_29690__$1 = state_29690;
var statearr_29724_29797 = state_29690__$1;
(statearr_29724_29797[(2)] = inst_29605);

(statearr_29724_29797[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (36))){
var inst_29649 = (state_29690[(25)]);
var inst_29653 = cljs.core.chunk_first.call(null,inst_29649);
var inst_29654 = cljs.core.chunk_rest.call(null,inst_29649);
var inst_29655 = cljs.core.count.call(null,inst_29653);
var inst_29630 = inst_29654;
var inst_29631 = inst_29653;
var inst_29632 = inst_29655;
var inst_29633 = (0);
var state_29690__$1 = (function (){var statearr_29725 = state_29690;
(statearr_29725[(20)] = inst_29632);

(statearr_29725[(21)] = inst_29630);

(statearr_29725[(11)] = inst_29633);

(statearr_29725[(12)] = inst_29631);

return statearr_29725;
})();
var statearr_29726_29798 = state_29690__$1;
(statearr_29726_29798[(2)] = null);

(statearr_29726_29798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (41))){
var inst_29649 = (state_29690[(25)]);
var inst_29665 = (state_29690[(2)]);
var inst_29666 = cljs.core.next.call(null,inst_29649);
var inst_29630 = inst_29666;
var inst_29631 = null;
var inst_29632 = (0);
var inst_29633 = (0);
var state_29690__$1 = (function (){var statearr_29727 = state_29690;
(statearr_29727[(20)] = inst_29632);

(statearr_29727[(21)] = inst_29630);

(statearr_29727[(11)] = inst_29633);

(statearr_29727[(12)] = inst_29631);

(statearr_29727[(27)] = inst_29665);

return statearr_29727;
})();
var statearr_29728_29799 = state_29690__$1;
(statearr_29728_29799[(2)] = null);

(statearr_29728_29799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (43))){
var state_29690__$1 = state_29690;
var statearr_29729_29800 = state_29690__$1;
(statearr_29729_29800[(2)] = null);

(statearr_29729_29800[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (29))){
var inst_29674 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29730_29801 = state_29690__$1;
(statearr_29730_29801[(2)] = inst_29674);

(statearr_29730_29801[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (44))){
var inst_29683 = (state_29690[(2)]);
var state_29690__$1 = (function (){var statearr_29731 = state_29690;
(statearr_29731[(28)] = inst_29683);

return statearr_29731;
})();
var statearr_29732_29802 = state_29690__$1;
(statearr_29732_29802[(2)] = null);

(statearr_29732_29802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (6))){
var inst_29622 = (state_29690[(29)]);
var inst_29621 = cljs.core.deref.call(null,cs);
var inst_29622__$1 = cljs.core.keys.call(null,inst_29621);
var inst_29623 = cljs.core.count.call(null,inst_29622__$1);
var inst_29624 = cljs.core.reset_BANG_.call(null,dctr,inst_29623);
var inst_29629 = cljs.core.seq.call(null,inst_29622__$1);
var inst_29630 = inst_29629;
var inst_29631 = null;
var inst_29632 = (0);
var inst_29633 = (0);
var state_29690__$1 = (function (){var statearr_29733 = state_29690;
(statearr_29733[(20)] = inst_29632);

(statearr_29733[(21)] = inst_29630);

(statearr_29733[(11)] = inst_29633);

(statearr_29733[(30)] = inst_29624);

(statearr_29733[(12)] = inst_29631);

(statearr_29733[(29)] = inst_29622__$1);

return statearr_29733;
})();
var statearr_29734_29803 = state_29690__$1;
(statearr_29734_29803[(2)] = null);

(statearr_29734_29803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (28))){
var inst_29649 = (state_29690[(25)]);
var inst_29630 = (state_29690[(21)]);
var inst_29649__$1 = cljs.core.seq.call(null,inst_29630);
var state_29690__$1 = (function (){var statearr_29735 = state_29690;
(statearr_29735[(25)] = inst_29649__$1);

return statearr_29735;
})();
if(inst_29649__$1){
var statearr_29736_29804 = state_29690__$1;
(statearr_29736_29804[(1)] = (33));

} else {
var statearr_29737_29805 = state_29690__$1;
(statearr_29737_29805[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (25))){
var inst_29632 = (state_29690[(20)]);
var inst_29633 = (state_29690[(11)]);
var inst_29635 = (inst_29633 < inst_29632);
var inst_29636 = inst_29635;
var state_29690__$1 = state_29690;
if(cljs.core.truth_(inst_29636)){
var statearr_29738_29806 = state_29690__$1;
(statearr_29738_29806[(1)] = (27));

} else {
var statearr_29739_29807 = state_29690__$1;
(statearr_29739_29807[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (34))){
var state_29690__$1 = state_29690;
var statearr_29740_29808 = state_29690__$1;
(statearr_29740_29808[(2)] = null);

(statearr_29740_29808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (17))){
var state_29690__$1 = state_29690;
var statearr_29741_29809 = state_29690__$1;
(statearr_29741_29809[(2)] = null);

(statearr_29741_29809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (3))){
var inst_29688 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29690__$1,inst_29688);
} else {
if((state_val_29691 === (12))){
var inst_29617 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29742_29810 = state_29690__$1;
(statearr_29742_29810[(2)] = inst_29617);

(statearr_29742_29810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (2))){
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29690__$1,(4),ch);
} else {
if((state_val_29691 === (23))){
var state_29690__$1 = state_29690;
var statearr_29743_29811 = state_29690__$1;
(statearr_29743_29811[(2)] = null);

(statearr_29743_29811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (35))){
var inst_29672 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29744_29812 = state_29690__$1;
(statearr_29744_29812[(2)] = inst_29672);

(statearr_29744_29812[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (19))){
var inst_29591 = (state_29690[(7)]);
var inst_29595 = cljs.core.chunk_first.call(null,inst_29591);
var inst_29596 = cljs.core.chunk_rest.call(null,inst_29591);
var inst_29597 = cljs.core.count.call(null,inst_29595);
var inst_29571 = inst_29596;
var inst_29572 = inst_29595;
var inst_29573 = inst_29597;
var inst_29574 = (0);
var state_29690__$1 = (function (){var statearr_29745 = state_29690;
(statearr_29745[(13)] = inst_29572);

(statearr_29745[(15)] = inst_29573);

(statearr_29745[(16)] = inst_29574);

(statearr_29745[(17)] = inst_29571);

return statearr_29745;
})();
var statearr_29746_29813 = state_29690__$1;
(statearr_29746_29813[(2)] = null);

(statearr_29746_29813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (11))){
var inst_29591 = (state_29690[(7)]);
var inst_29571 = (state_29690[(17)]);
var inst_29591__$1 = cljs.core.seq.call(null,inst_29571);
var state_29690__$1 = (function (){var statearr_29747 = state_29690;
(statearr_29747[(7)] = inst_29591__$1);

return statearr_29747;
})();
if(inst_29591__$1){
var statearr_29748_29814 = state_29690__$1;
(statearr_29748_29814[(1)] = (16));

} else {
var statearr_29749_29815 = state_29690__$1;
(statearr_29749_29815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (9))){
var inst_29619 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29750_29816 = state_29690__$1;
(statearr_29750_29816[(2)] = inst_29619);

(statearr_29750_29816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (5))){
var inst_29569 = cljs.core.deref.call(null,cs);
var inst_29570 = cljs.core.seq.call(null,inst_29569);
var inst_29571 = inst_29570;
var inst_29572 = null;
var inst_29573 = (0);
var inst_29574 = (0);
var state_29690__$1 = (function (){var statearr_29751 = state_29690;
(statearr_29751[(13)] = inst_29572);

(statearr_29751[(15)] = inst_29573);

(statearr_29751[(16)] = inst_29574);

(statearr_29751[(17)] = inst_29571);

return statearr_29751;
})();
var statearr_29752_29817 = state_29690__$1;
(statearr_29752_29817[(2)] = null);

(statearr_29752_29817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (14))){
var state_29690__$1 = state_29690;
var statearr_29753_29818 = state_29690__$1;
(statearr_29753_29818[(2)] = null);

(statearr_29753_29818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (45))){
var inst_29680 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29754_29819 = state_29690__$1;
(statearr_29754_29819[(2)] = inst_29680);

(statearr_29754_29819[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (26))){
var inst_29622 = (state_29690[(29)]);
var inst_29676 = (state_29690[(2)]);
var inst_29677 = cljs.core.seq.call(null,inst_29622);
var state_29690__$1 = (function (){var statearr_29755 = state_29690;
(statearr_29755[(31)] = inst_29676);

return statearr_29755;
})();
if(inst_29677){
var statearr_29756_29820 = state_29690__$1;
(statearr_29756_29820[(1)] = (42));

} else {
var statearr_29757_29821 = state_29690__$1;
(statearr_29757_29821[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (16))){
var inst_29591 = (state_29690[(7)]);
var inst_29593 = cljs.core.chunked_seq_QMARK_.call(null,inst_29591);
var state_29690__$1 = state_29690;
if(inst_29593){
var statearr_29758_29822 = state_29690__$1;
(statearr_29758_29822[(1)] = (19));

} else {
var statearr_29759_29823 = state_29690__$1;
(statearr_29759_29823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (38))){
var inst_29669 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29760_29824 = state_29690__$1;
(statearr_29760_29824[(2)] = inst_29669);

(statearr_29760_29824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (30))){
var state_29690__$1 = state_29690;
var statearr_29761_29825 = state_29690__$1;
(statearr_29761_29825[(2)] = null);

(statearr_29761_29825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (10))){
var inst_29572 = (state_29690[(13)]);
var inst_29574 = (state_29690[(16)]);
var inst_29580 = cljs.core._nth.call(null,inst_29572,inst_29574);
var inst_29581 = cljs.core.nth.call(null,inst_29580,(0),null);
var inst_29582 = cljs.core.nth.call(null,inst_29580,(1),null);
var state_29690__$1 = (function (){var statearr_29762 = state_29690;
(statearr_29762[(26)] = inst_29581);

return statearr_29762;
})();
if(cljs.core.truth_(inst_29582)){
var statearr_29763_29826 = state_29690__$1;
(statearr_29763_29826[(1)] = (13));

} else {
var statearr_29764_29827 = state_29690__$1;
(statearr_29764_29827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (18))){
var inst_29615 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29765_29828 = state_29690__$1;
(statearr_29765_29828[(2)] = inst_29615);

(statearr_29765_29828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (42))){
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29690__$1,(45),dchan);
} else {
if((state_val_29691 === (37))){
var inst_29649 = (state_29690[(25)]);
var inst_29562 = (state_29690[(10)]);
var inst_29658 = (state_29690[(23)]);
var inst_29658__$1 = cljs.core.first.call(null,inst_29649);
var inst_29659 = cljs.core.async.put_BANG_.call(null,inst_29658__$1,inst_29562,done);
var state_29690__$1 = (function (){var statearr_29766 = state_29690;
(statearr_29766[(23)] = inst_29658__$1);

return statearr_29766;
})();
if(cljs.core.truth_(inst_29659)){
var statearr_29767_29829 = state_29690__$1;
(statearr_29767_29829[(1)] = (39));

} else {
var statearr_29768_29830 = state_29690__$1;
(statearr_29768_29830[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (8))){
var inst_29573 = (state_29690[(15)]);
var inst_29574 = (state_29690[(16)]);
var inst_29576 = (inst_29574 < inst_29573);
var inst_29577 = inst_29576;
var state_29690__$1 = state_29690;
if(cljs.core.truth_(inst_29577)){
var statearr_29769_29831 = state_29690__$1;
(statearr_29769_29831[(1)] = (10));

} else {
var statearr_29770_29832 = state_29690__$1;
(statearr_29770_29832[(1)] = (11));

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
});})(c__25247__auto___29778,cs,m,dchan,dctr,done))
;
return ((function (switch__25185__auto__,c__25247__auto___29778,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25186__auto__ = null;
var cljs$core$async$mult_$_state_machine__25186__auto____0 = (function (){
var statearr_29774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29774[(0)] = cljs$core$async$mult_$_state_machine__25186__auto__);

(statearr_29774[(1)] = (1));

return statearr_29774;
});
var cljs$core$async$mult_$_state_machine__25186__auto____1 = (function (state_29690){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_29690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e29775){if((e29775 instanceof Object)){
var ex__25189__auto__ = e29775;
var statearr_29776_29833 = state_29690;
(statearr_29776_29833[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29834 = state_29690;
state_29690 = G__29834;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25186__auto__ = function(state_29690){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25186__auto____1.call(this,state_29690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25186__auto____0;
cljs$core$async$mult_$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25186__auto____1;
return cljs$core$async$mult_$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___29778,cs,m,dchan,dctr,done))
})();
var state__25249__auto__ = (function (){var statearr_29777 = f__25248__auto__.call(null);
(statearr_29777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___29778);

return statearr_29777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___29778,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__29836 = arguments.length;
switch (G__29836) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj29839 = {};
return obj29839;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4337__auto__ = m;
if(and__4337__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4985__auto__ = (((m == null))?null:m);
return (function (){var or__4349__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5389__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5389__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29844){
var map__29845 = p__29844;
var map__29845__$1 = ((cljs.core.seq_QMARK_.call(null,map__29845))?cljs.core.apply.call(null,cljs.core.hash_map,map__29845):map__29845);
var opts = map__29845__$1;
var statearr_29846_29849 = state;
(statearr_29846_29849[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__29845,map__29845__$1,opts){
return (function (val){
var statearr_29847_29850 = state;
(statearr_29847_29850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29845,map__29845__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_29848_29851 = state;
(statearr_29848_29851[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29840){
var G__29841 = cljs.core.first.call(null,seq29840);
var seq29840__$1 = cljs.core.next.call(null,seq29840);
var G__29842 = cljs.core.first.call(null,seq29840__$1);
var seq29840__$2 = cljs.core.next.call(null,seq29840__$1);
var G__29843 = cljs.core.first.call(null,seq29840__$2);
var seq29840__$3 = cljs.core.next.call(null,seq29840__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29841,G__29842,G__29843,seq29840__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t29971 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29971 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29972){
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
this.meta29972 = meta29972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29973,meta29972__$1){
var self__ = this;
var _29973__$1 = this;
return (new cljs.core.async.t29971(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29973){
var self__ = this;
var _29973__$1 = this;
return self__.meta29972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t29971.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29972","meta29972",-1182463300,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29971.cljs$lang$type = true;

cljs.core.async.t29971.cljs$lang$ctorStr = "cljs.core.async/t29971";

cljs.core.async.t29971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t29971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29971(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29972){
return (new cljs.core.async.t29971(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29971(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25247__auto___30090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (7))){
var inst_29987 = (state_30043[(7)]);
var inst_29992 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29987);
var state_30043__$1 = state_30043;
var statearr_30045_30091 = state_30043__$1;
(statearr_30045_30091[(2)] = inst_29992);

(statearr_30045_30091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (20))){
var inst_30002 = (state_30043[(8)]);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30043__$1,(23),out,inst_30002);
} else {
if((state_val_30044 === (1))){
var inst_29977 = (state_30043[(9)]);
var inst_29977__$1 = calc_state.call(null);
var inst_29978 = cljs.core.seq_QMARK_.call(null,inst_29977__$1);
var state_30043__$1 = (function (){var statearr_30046 = state_30043;
(statearr_30046[(9)] = inst_29977__$1);

return statearr_30046;
})();
if(inst_29978){
var statearr_30047_30092 = state_30043__$1;
(statearr_30047_30092[(1)] = (2));

} else {
var statearr_30048_30093 = state_30043__$1;
(statearr_30048_30093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (24))){
var inst_29995 = (state_30043[(10)]);
var inst_29987 = inst_29995;
var state_30043__$1 = (function (){var statearr_30049 = state_30043;
(statearr_30049[(7)] = inst_29987);

return statearr_30049;
})();
var statearr_30050_30094 = state_30043__$1;
(statearr_30050_30094[(2)] = null);

(statearr_30050_30094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (4))){
var inst_29977 = (state_30043[(9)]);
var inst_29983 = (state_30043[(2)]);
var inst_29984 = cljs.core.get.call(null,inst_29983,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29985 = cljs.core.get.call(null,inst_29983,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29986 = cljs.core.get.call(null,inst_29983,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29987 = inst_29977;
var state_30043__$1 = (function (){var statearr_30051 = state_30043;
(statearr_30051[(11)] = inst_29986);

(statearr_30051[(7)] = inst_29987);

(statearr_30051[(12)] = inst_29985);

(statearr_30051[(13)] = inst_29984);

return statearr_30051;
})();
var statearr_30052_30095 = state_30043__$1;
(statearr_30052_30095[(2)] = null);

(statearr_30052_30095[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (15))){
var state_30043__$1 = state_30043;
var statearr_30053_30096 = state_30043__$1;
(statearr_30053_30096[(2)] = null);

(statearr_30053_30096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (21))){
var inst_29995 = (state_30043[(10)]);
var inst_29987 = inst_29995;
var state_30043__$1 = (function (){var statearr_30054 = state_30043;
(statearr_30054[(7)] = inst_29987);

return statearr_30054;
})();
var statearr_30055_30097 = state_30043__$1;
(statearr_30055_30097[(2)] = null);

(statearr_30055_30097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (13))){
var inst_30039 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30056_30098 = state_30043__$1;
(statearr_30056_30098[(2)] = inst_30039);

(statearr_30056_30098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (22))){
var inst_30037 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30057_30099 = state_30043__$1;
(statearr_30057_30099[(2)] = inst_30037);

(statearr_30057_30099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (6))){
var inst_30041 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30043__$1,inst_30041);
} else {
if((state_val_30044 === (25))){
var state_30043__$1 = state_30043;
var statearr_30058_30100 = state_30043__$1;
(statearr_30058_30100[(2)] = null);

(statearr_30058_30100[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (17))){
var inst_30017 = (state_30043[(14)]);
var state_30043__$1 = state_30043;
var statearr_30059_30101 = state_30043__$1;
(statearr_30059_30101[(2)] = inst_30017);

(statearr_30059_30101[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (3))){
var inst_29977 = (state_30043[(9)]);
var state_30043__$1 = state_30043;
var statearr_30060_30102 = state_30043__$1;
(statearr_30060_30102[(2)] = inst_29977);

(statearr_30060_30102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (12))){
var inst_29996 = (state_30043[(15)]);
var inst_30017 = (state_30043[(14)]);
var inst_30003 = (state_30043[(16)]);
var inst_30017__$1 = inst_29996.call(null,inst_30003);
var state_30043__$1 = (function (){var statearr_30061 = state_30043;
(statearr_30061[(14)] = inst_30017__$1);

return statearr_30061;
})();
if(cljs.core.truth_(inst_30017__$1)){
var statearr_30062_30103 = state_30043__$1;
(statearr_30062_30103[(1)] = (17));

} else {
var statearr_30063_30104 = state_30043__$1;
(statearr_30063_30104[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (2))){
var inst_29977 = (state_30043[(9)]);
var inst_29980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29977);
var state_30043__$1 = state_30043;
var statearr_30064_30105 = state_30043__$1;
(statearr_30064_30105[(2)] = inst_29980);

(statearr_30064_30105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (23))){
var inst_30028 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30028)){
var statearr_30065_30106 = state_30043__$1;
(statearr_30065_30106[(1)] = (24));

} else {
var statearr_30066_30107 = state_30043__$1;
(statearr_30066_30107[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (19))){
var inst_30025 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30025)){
var statearr_30067_30108 = state_30043__$1;
(statearr_30067_30108[(1)] = (20));

} else {
var statearr_30068_30109 = state_30043__$1;
(statearr_30068_30109[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (11))){
var inst_30002 = (state_30043[(8)]);
var inst_30008 = (inst_30002 == null);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30008)){
var statearr_30069_30110 = state_30043__$1;
(statearr_30069_30110[(1)] = (14));

} else {
var statearr_30070_30111 = state_30043__$1;
(statearr_30070_30111[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (9))){
var inst_29995 = (state_30043[(10)]);
var inst_29995__$1 = (state_30043[(2)]);
var inst_29996 = cljs.core.get.call(null,inst_29995__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29997 = cljs.core.get.call(null,inst_29995__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29998 = cljs.core.get.call(null,inst_29995__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30043__$1 = (function (){var statearr_30071 = state_30043;
(statearr_30071[(15)] = inst_29996);

(statearr_30071[(10)] = inst_29995__$1);

(statearr_30071[(17)] = inst_29997);

return statearr_30071;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30043__$1,(10),inst_29998);
} else {
if((state_val_30044 === (5))){
var inst_29987 = (state_30043[(7)]);
var inst_29990 = cljs.core.seq_QMARK_.call(null,inst_29987);
var state_30043__$1 = state_30043;
if(inst_29990){
var statearr_30072_30112 = state_30043__$1;
(statearr_30072_30112[(1)] = (7));

} else {
var statearr_30073_30113 = state_30043__$1;
(statearr_30073_30113[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (14))){
var inst_30003 = (state_30043[(16)]);
var inst_30010 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30003);
var state_30043__$1 = state_30043;
var statearr_30074_30114 = state_30043__$1;
(statearr_30074_30114[(2)] = inst_30010);

(statearr_30074_30114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (26))){
var inst_30033 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30075_30115 = state_30043__$1;
(statearr_30075_30115[(2)] = inst_30033);

(statearr_30075_30115[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (16))){
var inst_30013 = (state_30043[(2)]);
var inst_30014 = calc_state.call(null);
var inst_29987 = inst_30014;
var state_30043__$1 = (function (){var statearr_30076 = state_30043;
(statearr_30076[(7)] = inst_29987);

(statearr_30076[(18)] = inst_30013);

return statearr_30076;
})();
var statearr_30077_30116 = state_30043__$1;
(statearr_30077_30116[(2)] = null);

(statearr_30077_30116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (10))){
var inst_30002 = (state_30043[(8)]);
var inst_30003 = (state_30043[(16)]);
var inst_30001 = (state_30043[(2)]);
var inst_30002__$1 = cljs.core.nth.call(null,inst_30001,(0),null);
var inst_30003__$1 = cljs.core.nth.call(null,inst_30001,(1),null);
var inst_30004 = (inst_30002__$1 == null);
var inst_30005 = cljs.core._EQ_.call(null,inst_30003__$1,change);
var inst_30006 = (inst_30004) || (inst_30005);
var state_30043__$1 = (function (){var statearr_30078 = state_30043;
(statearr_30078[(8)] = inst_30002__$1);

(statearr_30078[(16)] = inst_30003__$1);

return statearr_30078;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30079_30117 = state_30043__$1;
(statearr_30079_30117[(1)] = (11));

} else {
var statearr_30080_30118 = state_30043__$1;
(statearr_30080_30118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (18))){
var inst_29996 = (state_30043[(15)]);
var inst_30003 = (state_30043[(16)]);
var inst_29997 = (state_30043[(17)]);
var inst_30020 = cljs.core.empty_QMARK_.call(null,inst_29996);
var inst_30021 = inst_29997.call(null,inst_30003);
var inst_30022 = cljs.core.not.call(null,inst_30021);
var inst_30023 = (inst_30020) && (inst_30022);
var state_30043__$1 = state_30043;
var statearr_30081_30119 = state_30043__$1;
(statearr_30081_30119[(2)] = inst_30023);

(statearr_30081_30119[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (8))){
var inst_29987 = (state_30043[(7)]);
var state_30043__$1 = state_30043;
var statearr_30082_30120 = state_30043__$1;
(statearr_30082_30120[(2)] = inst_29987);

(statearr_30082_30120[(1)] = (9));


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
});})(c__25247__auto___30090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25185__auto__,c__25247__auto___30090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25186__auto__ = null;
var cljs$core$async$mix_$_state_machine__25186__auto____0 = (function (){
var statearr_30086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30086[(0)] = cljs$core$async$mix_$_state_machine__25186__auto__);

(statearr_30086[(1)] = (1));

return statearr_30086;
});
var cljs$core$async$mix_$_state_machine__25186__auto____1 = (function (state_30043){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30087){if((e30087 instanceof Object)){
var ex__25189__auto__ = e30087;
var statearr_30088_30121 = state_30043;
(statearr_30088_30121[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30122 = state_30043;
state_30043 = G__30122;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25186__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25186__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25186__auto____0;
cljs$core$async$mix_$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25186__auto____1;
return cljs$core$async$mix_$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25249__auto__ = (function (){var statearr_30089 = f__25248__auto__.call(null);
(statearr_30089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30090);

return statearr_30089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj30124 = {};
return obj30124;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4337__auto__ = p;
if(and__4337__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4337__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4985__auto__ = (((p == null))?null:p);
return (function (){var or__4349__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4337__auto__ = p;
if(and__4337__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4337__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4985__auto__ = (((p == null))?null:p);
return (function (){var or__4349__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30126 = arguments.length;
switch (G__30126) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4337__auto__ = p;
if(and__4337__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4337__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4985__auto__ = (((p == null))?null:p);
return (function (){var or__4349__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4337__auto__ = p;
if(and__4337__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4337__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4985__auto__ = (((p == null))?null:p);
return (function (){var or__4349__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4985__auto__)]);
if(or__4349__auto__){
return or__4349__auto__;
} else {
var or__4349__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4349__auto____$1){
return or__4349__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__30130 = arguments.length;
switch (G__30130) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4349__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4349__auto__,mults){
return (function (p1__30128_SHARP_){
if(cljs.core.truth_(p1__30128_SHARP_.call(null,topic))){
return p1__30128_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30128_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4349__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30131 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30131 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30132){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30132 = meta30132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30133,meta30132__$1){
var self__ = this;
var _30133__$1 = this;
return (new cljs.core.async.t30131(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30132__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30133){
var self__ = this;
var _30133__$1 = this;
return self__.meta30132;
});})(mults,ensure_mult))
;

cljs.core.async.t30131.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30131.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30131.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30131.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30131.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30132","meta30132",787898465,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t30131.cljs$lang$type = true;

cljs.core.async.t30131.cljs$lang$ctorStr = "cljs.core.async/t30131";

cljs.core.async.t30131.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30131");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30131 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30132){
return (new cljs.core.async.t30131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30132));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30131(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25247__auto___30254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30254,mults,ensure_mult,p){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30254,mults,ensure_mult,p){
return (function (state_30205){
var state_val_30206 = (state_30205[(1)]);
if((state_val_30206 === (7))){
var inst_30201 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30207_30255 = state_30205__$1;
(statearr_30207_30255[(2)] = inst_30201);

(statearr_30207_30255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (20))){
var state_30205__$1 = state_30205;
var statearr_30208_30256 = state_30205__$1;
(statearr_30208_30256[(2)] = null);

(statearr_30208_30256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (1))){
var state_30205__$1 = state_30205;
var statearr_30209_30257 = state_30205__$1;
(statearr_30209_30257[(2)] = null);

(statearr_30209_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (24))){
var inst_30184 = (state_30205[(7)]);
var inst_30193 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30184);
var state_30205__$1 = state_30205;
var statearr_30210_30258 = state_30205__$1;
(statearr_30210_30258[(2)] = inst_30193);

(statearr_30210_30258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (4))){
var inst_30136 = (state_30205[(8)]);
var inst_30136__$1 = (state_30205[(2)]);
var inst_30137 = (inst_30136__$1 == null);
var state_30205__$1 = (function (){var statearr_30211 = state_30205;
(statearr_30211[(8)] = inst_30136__$1);

return statearr_30211;
})();
if(cljs.core.truth_(inst_30137)){
var statearr_30212_30259 = state_30205__$1;
(statearr_30212_30259[(1)] = (5));

} else {
var statearr_30213_30260 = state_30205__$1;
(statearr_30213_30260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (15))){
var inst_30178 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30214_30261 = state_30205__$1;
(statearr_30214_30261[(2)] = inst_30178);

(statearr_30214_30261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (21))){
var inst_30198 = (state_30205[(2)]);
var state_30205__$1 = (function (){var statearr_30215 = state_30205;
(statearr_30215[(9)] = inst_30198);

return statearr_30215;
})();
var statearr_30216_30262 = state_30205__$1;
(statearr_30216_30262[(2)] = null);

(statearr_30216_30262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (13))){
var inst_30160 = (state_30205[(10)]);
var inst_30162 = cljs.core.chunked_seq_QMARK_.call(null,inst_30160);
var state_30205__$1 = state_30205;
if(inst_30162){
var statearr_30217_30263 = state_30205__$1;
(statearr_30217_30263[(1)] = (16));

} else {
var statearr_30218_30264 = state_30205__$1;
(statearr_30218_30264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (22))){
var inst_30190 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30190)){
var statearr_30219_30265 = state_30205__$1;
(statearr_30219_30265[(1)] = (23));

} else {
var statearr_30220_30266 = state_30205__$1;
(statearr_30220_30266[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (6))){
var inst_30136 = (state_30205[(8)]);
var inst_30186 = (state_30205[(11)]);
var inst_30184 = (state_30205[(7)]);
var inst_30184__$1 = topic_fn.call(null,inst_30136);
var inst_30185 = cljs.core.deref.call(null,mults);
var inst_30186__$1 = cljs.core.get.call(null,inst_30185,inst_30184__$1);
var state_30205__$1 = (function (){var statearr_30221 = state_30205;
(statearr_30221[(11)] = inst_30186__$1);

(statearr_30221[(7)] = inst_30184__$1);

return statearr_30221;
})();
if(cljs.core.truth_(inst_30186__$1)){
var statearr_30222_30267 = state_30205__$1;
(statearr_30222_30267[(1)] = (19));

} else {
var statearr_30223_30268 = state_30205__$1;
(statearr_30223_30268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (25))){
var inst_30195 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30224_30269 = state_30205__$1;
(statearr_30224_30269[(2)] = inst_30195);

(statearr_30224_30269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (17))){
var inst_30160 = (state_30205[(10)]);
var inst_30169 = cljs.core.first.call(null,inst_30160);
var inst_30170 = cljs.core.async.muxch_STAR_.call(null,inst_30169);
var inst_30171 = cljs.core.async.close_BANG_.call(null,inst_30170);
var inst_30172 = cljs.core.next.call(null,inst_30160);
var inst_30146 = inst_30172;
var inst_30147 = null;
var inst_30148 = (0);
var inst_30149 = (0);
var state_30205__$1 = (function (){var statearr_30225 = state_30205;
(statearr_30225[(12)] = inst_30146);

(statearr_30225[(13)] = inst_30149);

(statearr_30225[(14)] = inst_30147);

(statearr_30225[(15)] = inst_30171);

(statearr_30225[(16)] = inst_30148);

return statearr_30225;
})();
var statearr_30226_30270 = state_30205__$1;
(statearr_30226_30270[(2)] = null);

(statearr_30226_30270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (3))){
var inst_30203 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30205__$1,inst_30203);
} else {
if((state_val_30206 === (12))){
var inst_30180 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30227_30271 = state_30205__$1;
(statearr_30227_30271[(2)] = inst_30180);

(statearr_30227_30271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (2))){
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30205__$1,(4),ch);
} else {
if((state_val_30206 === (23))){
var state_30205__$1 = state_30205;
var statearr_30228_30272 = state_30205__$1;
(statearr_30228_30272[(2)] = null);

(statearr_30228_30272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (19))){
var inst_30136 = (state_30205[(8)]);
var inst_30186 = (state_30205[(11)]);
var inst_30188 = cljs.core.async.muxch_STAR_.call(null,inst_30186);
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30205__$1,(22),inst_30188,inst_30136);
} else {
if((state_val_30206 === (11))){
var inst_30146 = (state_30205[(12)]);
var inst_30160 = (state_30205[(10)]);
var inst_30160__$1 = cljs.core.seq.call(null,inst_30146);
var state_30205__$1 = (function (){var statearr_30229 = state_30205;
(statearr_30229[(10)] = inst_30160__$1);

return statearr_30229;
})();
if(inst_30160__$1){
var statearr_30230_30273 = state_30205__$1;
(statearr_30230_30273[(1)] = (13));

} else {
var statearr_30231_30274 = state_30205__$1;
(statearr_30231_30274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (9))){
var inst_30182 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30232_30275 = state_30205__$1;
(statearr_30232_30275[(2)] = inst_30182);

(statearr_30232_30275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (5))){
var inst_30143 = cljs.core.deref.call(null,mults);
var inst_30144 = cljs.core.vals.call(null,inst_30143);
var inst_30145 = cljs.core.seq.call(null,inst_30144);
var inst_30146 = inst_30145;
var inst_30147 = null;
var inst_30148 = (0);
var inst_30149 = (0);
var state_30205__$1 = (function (){var statearr_30233 = state_30205;
(statearr_30233[(12)] = inst_30146);

(statearr_30233[(13)] = inst_30149);

(statearr_30233[(14)] = inst_30147);

(statearr_30233[(16)] = inst_30148);

return statearr_30233;
})();
var statearr_30234_30276 = state_30205__$1;
(statearr_30234_30276[(2)] = null);

(statearr_30234_30276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (14))){
var state_30205__$1 = state_30205;
var statearr_30238_30277 = state_30205__$1;
(statearr_30238_30277[(2)] = null);

(statearr_30238_30277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (16))){
var inst_30160 = (state_30205[(10)]);
var inst_30164 = cljs.core.chunk_first.call(null,inst_30160);
var inst_30165 = cljs.core.chunk_rest.call(null,inst_30160);
var inst_30166 = cljs.core.count.call(null,inst_30164);
var inst_30146 = inst_30165;
var inst_30147 = inst_30164;
var inst_30148 = inst_30166;
var inst_30149 = (0);
var state_30205__$1 = (function (){var statearr_30239 = state_30205;
(statearr_30239[(12)] = inst_30146);

(statearr_30239[(13)] = inst_30149);

(statearr_30239[(14)] = inst_30147);

(statearr_30239[(16)] = inst_30148);

return statearr_30239;
})();
var statearr_30240_30278 = state_30205__$1;
(statearr_30240_30278[(2)] = null);

(statearr_30240_30278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (10))){
var inst_30146 = (state_30205[(12)]);
var inst_30149 = (state_30205[(13)]);
var inst_30147 = (state_30205[(14)]);
var inst_30148 = (state_30205[(16)]);
var inst_30154 = cljs.core._nth.call(null,inst_30147,inst_30149);
var inst_30155 = cljs.core.async.muxch_STAR_.call(null,inst_30154);
var inst_30156 = cljs.core.async.close_BANG_.call(null,inst_30155);
var inst_30157 = (inst_30149 + (1));
var tmp30235 = inst_30146;
var tmp30236 = inst_30147;
var tmp30237 = inst_30148;
var inst_30146__$1 = tmp30235;
var inst_30147__$1 = tmp30236;
var inst_30148__$1 = tmp30237;
var inst_30149__$1 = inst_30157;
var state_30205__$1 = (function (){var statearr_30241 = state_30205;
(statearr_30241[(17)] = inst_30156);

(statearr_30241[(12)] = inst_30146__$1);

(statearr_30241[(13)] = inst_30149__$1);

(statearr_30241[(14)] = inst_30147__$1);

(statearr_30241[(16)] = inst_30148__$1);

return statearr_30241;
})();
var statearr_30242_30279 = state_30205__$1;
(statearr_30242_30279[(2)] = null);

(statearr_30242_30279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (18))){
var inst_30175 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30243_30280 = state_30205__$1;
(statearr_30243_30280[(2)] = inst_30175);

(statearr_30243_30280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (8))){
var inst_30149 = (state_30205[(13)]);
var inst_30148 = (state_30205[(16)]);
var inst_30151 = (inst_30149 < inst_30148);
var inst_30152 = inst_30151;
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30152)){
var statearr_30244_30281 = state_30205__$1;
(statearr_30244_30281[(1)] = (10));

} else {
var statearr_30245_30282 = state_30205__$1;
(statearr_30245_30282[(1)] = (11));

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
});})(c__25247__auto___30254,mults,ensure_mult,p))
;
return ((function (switch__25185__auto__,c__25247__auto___30254,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30249[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30249[(1)] = (1));

return statearr_30249;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30205){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30250){if((e30250 instanceof Object)){
var ex__25189__auto__ = e30250;
var statearr_30251_30283 = state_30205;
(statearr_30251_30283[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30284 = state_30205;
state_30205 = G__30284;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30254,mults,ensure_mult,p))
})();
var state__25249__auto__ = (function (){var statearr_30252 = f__25248__auto__.call(null);
(statearr_30252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30254);

return statearr_30252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30254,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__30286 = arguments.length;
switch (G__30286) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__30289 = arguments.length;
switch (G__30289) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__30292 = arguments.length;
switch (G__30292) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__25247__auto___30362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30331){
var state_val_30332 = (state_30331[(1)]);
if((state_val_30332 === (7))){
var state_30331__$1 = state_30331;
var statearr_30333_30363 = state_30331__$1;
(statearr_30333_30363[(2)] = null);

(statearr_30333_30363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (1))){
var state_30331__$1 = state_30331;
var statearr_30334_30364 = state_30331__$1;
(statearr_30334_30364[(2)] = null);

(statearr_30334_30364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (4))){
var inst_30295 = (state_30331[(7)]);
var inst_30297 = (inst_30295 < cnt);
var state_30331__$1 = state_30331;
if(cljs.core.truth_(inst_30297)){
var statearr_30335_30365 = state_30331__$1;
(statearr_30335_30365[(1)] = (6));

} else {
var statearr_30336_30366 = state_30331__$1;
(statearr_30336_30366[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (15))){
var inst_30327 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30337_30367 = state_30331__$1;
(statearr_30337_30367[(2)] = inst_30327);

(statearr_30337_30367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (13))){
var inst_30320 = cljs.core.async.close_BANG_.call(null,out);
var state_30331__$1 = state_30331;
var statearr_30338_30368 = state_30331__$1;
(statearr_30338_30368[(2)] = inst_30320);

(statearr_30338_30368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (6))){
var state_30331__$1 = state_30331;
var statearr_30339_30369 = state_30331__$1;
(statearr_30339_30369[(2)] = null);

(statearr_30339_30369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (3))){
var inst_30329 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30331__$1,inst_30329);
} else {
if((state_val_30332 === (12))){
var inst_30317 = (state_30331[(8)]);
var inst_30317__$1 = (state_30331[(2)]);
var inst_30318 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30317__$1);
var state_30331__$1 = (function (){var statearr_30340 = state_30331;
(statearr_30340[(8)] = inst_30317__$1);

return statearr_30340;
})();
if(cljs.core.truth_(inst_30318)){
var statearr_30341_30370 = state_30331__$1;
(statearr_30341_30370[(1)] = (13));

} else {
var statearr_30342_30371 = state_30331__$1;
(statearr_30342_30371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (2))){
var inst_30294 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30295 = (0);
var state_30331__$1 = (function (){var statearr_30343 = state_30331;
(statearr_30343[(9)] = inst_30294);

(statearr_30343[(7)] = inst_30295);

return statearr_30343;
})();
var statearr_30344_30372 = state_30331__$1;
(statearr_30344_30372[(2)] = null);

(statearr_30344_30372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (11))){
var inst_30295 = (state_30331[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30331,(10),Object,null,(9));
var inst_30304 = chs__$1.call(null,inst_30295);
var inst_30305 = done.call(null,inst_30295);
var inst_30306 = cljs.core.async.take_BANG_.call(null,inst_30304,inst_30305);
var state_30331__$1 = state_30331;
var statearr_30345_30373 = state_30331__$1;
(statearr_30345_30373[(2)] = inst_30306);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30331__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (9))){
var inst_30295 = (state_30331[(7)]);
var inst_30308 = (state_30331[(2)]);
var inst_30309 = (inst_30295 + (1));
var inst_30295__$1 = inst_30309;
var state_30331__$1 = (function (){var statearr_30346 = state_30331;
(statearr_30346[(10)] = inst_30308);

(statearr_30346[(7)] = inst_30295__$1);

return statearr_30346;
})();
var statearr_30347_30374 = state_30331__$1;
(statearr_30347_30374[(2)] = null);

(statearr_30347_30374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (5))){
var inst_30315 = (state_30331[(2)]);
var state_30331__$1 = (function (){var statearr_30348 = state_30331;
(statearr_30348[(11)] = inst_30315);

return statearr_30348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30331__$1,(12),dchan);
} else {
if((state_val_30332 === (14))){
var inst_30317 = (state_30331[(8)]);
var inst_30322 = cljs.core.apply.call(null,f,inst_30317);
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30331__$1,(16),out,inst_30322);
} else {
if((state_val_30332 === (16))){
var inst_30324 = (state_30331[(2)]);
var state_30331__$1 = (function (){var statearr_30349 = state_30331;
(statearr_30349[(12)] = inst_30324);

return statearr_30349;
})();
var statearr_30350_30375 = state_30331__$1;
(statearr_30350_30375[(2)] = null);

(statearr_30350_30375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (10))){
var inst_30299 = (state_30331[(2)]);
var inst_30300 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30331__$1 = (function (){var statearr_30351 = state_30331;
(statearr_30351[(13)] = inst_30299);

return statearr_30351;
})();
var statearr_30352_30376 = state_30331__$1;
(statearr_30352_30376[(2)] = inst_30300);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30331__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (8))){
var inst_30313 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30353_30377 = state_30331__$1;
(statearr_30353_30377[(2)] = inst_30313);

(statearr_30353_30377[(1)] = (5));


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
});})(c__25247__auto___30362,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25185__auto__,c__25247__auto___30362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30357[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30357[(1)] = (1));

return statearr_30357;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30331){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30358){if((e30358 instanceof Object)){
var ex__25189__auto__ = e30358;
var statearr_30359_30378 = state_30331;
(statearr_30359_30378[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30379 = state_30331;
state_30331 = G__30379;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30362,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25249__auto__ = (function (){var statearr_30360 = f__25248__auto__.call(null);
(statearr_30360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30362);

return statearr_30360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30362,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__30382 = arguments.length;
switch (G__30382) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25247__auto___30437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30437,out){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30437,out){
return (function (state_30412){
var state_val_30413 = (state_30412[(1)]);
if((state_val_30413 === (7))){
var inst_30392 = (state_30412[(7)]);
var inst_30391 = (state_30412[(8)]);
var inst_30391__$1 = (state_30412[(2)]);
var inst_30392__$1 = cljs.core.nth.call(null,inst_30391__$1,(0),null);
var inst_30393 = cljs.core.nth.call(null,inst_30391__$1,(1),null);
var inst_30394 = (inst_30392__$1 == null);
var state_30412__$1 = (function (){var statearr_30414 = state_30412;
(statearr_30414[(7)] = inst_30392__$1);

(statearr_30414[(9)] = inst_30393);

(statearr_30414[(8)] = inst_30391__$1);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30394)){
var statearr_30415_30438 = state_30412__$1;
(statearr_30415_30438[(1)] = (8));

} else {
var statearr_30416_30439 = state_30412__$1;
(statearr_30416_30439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (1))){
var inst_30383 = cljs.core.vec.call(null,chs);
var inst_30384 = inst_30383;
var state_30412__$1 = (function (){var statearr_30417 = state_30412;
(statearr_30417[(10)] = inst_30384);

return statearr_30417;
})();
var statearr_30418_30440 = state_30412__$1;
(statearr_30418_30440[(2)] = null);

(statearr_30418_30440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (4))){
var inst_30384 = (state_30412[(10)]);
var state_30412__$1 = state_30412;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30412__$1,(7),inst_30384);
} else {
if((state_val_30413 === (6))){
var inst_30408 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30419_30441 = state_30412__$1;
(statearr_30419_30441[(2)] = inst_30408);

(statearr_30419_30441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (3))){
var inst_30410 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30412__$1,inst_30410);
} else {
if((state_val_30413 === (2))){
var inst_30384 = (state_30412[(10)]);
var inst_30386 = cljs.core.count.call(null,inst_30384);
var inst_30387 = (inst_30386 > (0));
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30387)){
var statearr_30421_30442 = state_30412__$1;
(statearr_30421_30442[(1)] = (4));

} else {
var statearr_30422_30443 = state_30412__$1;
(statearr_30422_30443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (11))){
var inst_30384 = (state_30412[(10)]);
var inst_30401 = (state_30412[(2)]);
var tmp30420 = inst_30384;
var inst_30384__$1 = tmp30420;
var state_30412__$1 = (function (){var statearr_30423 = state_30412;
(statearr_30423[(10)] = inst_30384__$1);

(statearr_30423[(11)] = inst_30401);

return statearr_30423;
})();
var statearr_30424_30444 = state_30412__$1;
(statearr_30424_30444[(2)] = null);

(statearr_30424_30444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (9))){
var inst_30392 = (state_30412[(7)]);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30412__$1,(11),out,inst_30392);
} else {
if((state_val_30413 === (5))){
var inst_30406 = cljs.core.async.close_BANG_.call(null,out);
var state_30412__$1 = state_30412;
var statearr_30425_30445 = state_30412__$1;
(statearr_30425_30445[(2)] = inst_30406);

(statearr_30425_30445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (10))){
var inst_30404 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30426_30446 = state_30412__$1;
(statearr_30426_30446[(2)] = inst_30404);

(statearr_30426_30446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (8))){
var inst_30392 = (state_30412[(7)]);
var inst_30393 = (state_30412[(9)]);
var inst_30384 = (state_30412[(10)]);
var inst_30391 = (state_30412[(8)]);
var inst_30396 = (function (){var cs = inst_30384;
var vec__30389 = inst_30391;
var v = inst_30392;
var c = inst_30393;
return ((function (cs,vec__30389,v,c,inst_30392,inst_30393,inst_30384,inst_30391,state_val_30413,c__25247__auto___30437,out){
return (function (p1__30380_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30380_SHARP_);
});
;})(cs,vec__30389,v,c,inst_30392,inst_30393,inst_30384,inst_30391,state_val_30413,c__25247__auto___30437,out))
})();
var inst_30397 = cljs.core.filterv.call(null,inst_30396,inst_30384);
var inst_30384__$1 = inst_30397;
var state_30412__$1 = (function (){var statearr_30427 = state_30412;
(statearr_30427[(10)] = inst_30384__$1);

return statearr_30427;
})();
var statearr_30428_30447 = state_30412__$1;
(statearr_30428_30447[(2)] = null);

(statearr_30428_30447[(1)] = (2));


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
});})(c__25247__auto___30437,out))
;
return ((function (switch__25185__auto__,c__25247__auto___30437,out){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30432[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30432[(1)] = (1));

return statearr_30432;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30412){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30433){if((e30433 instanceof Object)){
var ex__25189__auto__ = e30433;
var statearr_30434_30448 = state_30412;
(statearr_30434_30448[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30412;
state_30412 = G__30449;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30437,out))
})();
var state__25249__auto__ = (function (){var statearr_30435 = f__25248__auto__.call(null);
(statearr_30435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30437);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30437,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__30451 = arguments.length;
switch (G__30451) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25247__auto___30499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30499,out){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30499,out){
return (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (7))){
var inst_30457 = (state_30475[(7)]);
var inst_30457__$1 = (state_30475[(2)]);
var inst_30458 = (inst_30457__$1 == null);
var inst_30459 = cljs.core.not.call(null,inst_30458);
var state_30475__$1 = (function (){var statearr_30477 = state_30475;
(statearr_30477[(7)] = inst_30457__$1);

return statearr_30477;
})();
if(inst_30459){
var statearr_30478_30500 = state_30475__$1;
(statearr_30478_30500[(1)] = (8));

} else {
var statearr_30479_30501 = state_30475__$1;
(statearr_30479_30501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (1))){
var inst_30452 = (0);
var state_30475__$1 = (function (){var statearr_30480 = state_30475;
(statearr_30480[(8)] = inst_30452);

return statearr_30480;
})();
var statearr_30481_30502 = state_30475__$1;
(statearr_30481_30502[(2)] = null);

(statearr_30481_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (4))){
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30475__$1,(7),ch);
} else {
if((state_val_30476 === (6))){
var inst_30470 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30482_30503 = state_30475__$1;
(statearr_30482_30503[(2)] = inst_30470);

(statearr_30482_30503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (3))){
var inst_30472 = (state_30475[(2)]);
var inst_30473 = cljs.core.async.close_BANG_.call(null,out);
var state_30475__$1 = (function (){var statearr_30483 = state_30475;
(statearr_30483[(9)] = inst_30472);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30475__$1,inst_30473);
} else {
if((state_val_30476 === (2))){
var inst_30452 = (state_30475[(8)]);
var inst_30454 = (inst_30452 < n);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30454)){
var statearr_30484_30504 = state_30475__$1;
(statearr_30484_30504[(1)] = (4));

} else {
var statearr_30485_30505 = state_30475__$1;
(statearr_30485_30505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (11))){
var inst_30452 = (state_30475[(8)]);
var inst_30462 = (state_30475[(2)]);
var inst_30463 = (inst_30452 + (1));
var inst_30452__$1 = inst_30463;
var state_30475__$1 = (function (){var statearr_30486 = state_30475;
(statearr_30486[(8)] = inst_30452__$1);

(statearr_30486[(10)] = inst_30462);

return statearr_30486;
})();
var statearr_30487_30506 = state_30475__$1;
(statearr_30487_30506[(2)] = null);

(statearr_30487_30506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (9))){
var state_30475__$1 = state_30475;
var statearr_30488_30507 = state_30475__$1;
(statearr_30488_30507[(2)] = null);

(statearr_30488_30507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (5))){
var state_30475__$1 = state_30475;
var statearr_30489_30508 = state_30475__$1;
(statearr_30489_30508[(2)] = null);

(statearr_30489_30508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (10))){
var inst_30467 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30490_30509 = state_30475__$1;
(statearr_30490_30509[(2)] = inst_30467);

(statearr_30490_30509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (8))){
var inst_30457 = (state_30475[(7)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30475__$1,(11),out,inst_30457);
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
});})(c__25247__auto___30499,out))
;
return ((function (switch__25185__auto__,c__25247__auto___30499,out){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30475){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30495){if((e30495 instanceof Object)){
var ex__25189__auto__ = e30495;
var statearr_30496_30510 = state_30475;
(statearr_30496_30510[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30511 = state_30475;
state_30475 = G__30511;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30499,out))
})();
var state__25249__auto__ = (function (){var statearr_30497 = f__25248__auto__.call(null);
(statearr_30497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30499);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30499,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30519 = (function (map_LT_,f,ch,meta30520){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30520 = meta30520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30521,meta30520__$1){
var self__ = this;
var _30521__$1 = this;
return (new cljs.core.async.t30519(self__.map_LT_,self__.f,self__.ch,meta30520__$1));
});

cljs.core.async.t30519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30521){
var self__ = this;
var _30521__$1 = this;
return self__.meta30520;
});

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30522 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30522 = (function (map_LT_,f,ch,meta30520,_,fn1,meta30523){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30520 = meta30520;
this._ = _;
this.fn1 = fn1;
this.meta30523 = meta30523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30524,meta30523__$1){
var self__ = this;
var _30524__$1 = this;
return (new cljs.core.async.t30522(self__.map_LT_,self__.f,self__.ch,self__.meta30520,self__._,self__.fn1,meta30523__$1));
});})(___$1))
;

cljs.core.async.t30522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30524){
var self__ = this;
var _30524__$1 = this;
return self__.meta30523;
});})(___$1))
;

cljs.core.async.t30522.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30512_SHARP_){
return f1.call(null,(((p1__30512_SHARP_ == null))?null:self__.f.call(null,p1__30512_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30522.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30520","meta30520",-1402435610,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30523","meta30523",-477682369,null)], null);
});})(___$1))
;

cljs.core.async.t30522.cljs$lang$type = true;

cljs.core.async.t30522.cljs$lang$ctorStr = "cljs.core.async/t30522";

cljs.core.async.t30522.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30522");
});})(___$1))
;

cljs.core.async.__GT_t30522 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30522(map_LT___$1,f__$1,ch__$1,meta30520__$1,___$2,fn1__$1,meta30523){
return (new cljs.core.async.t30522(map_LT___$1,f__$1,ch__$1,meta30520__$1,___$2,fn1__$1,meta30523));
});})(___$1))
;

}

return (new cljs.core.async.t30522(self__.map_LT_,self__.f,self__.ch,self__.meta30520,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4337__auto__ = ret;
if(cljs.core.truth_(and__4337__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4337__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30520","meta30520",-1402435610,null)], null);
});

cljs.core.async.t30519.cljs$lang$type = true;

cljs.core.async.t30519.cljs$lang$ctorStr = "cljs.core.async/t30519";

cljs.core.async.t30519.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30519");
});

cljs.core.async.__GT_t30519 = (function cljs$core$async$map_LT__$___GT_t30519(map_LT___$1,f__$1,ch__$1,meta30520){
return (new cljs.core.async.t30519(map_LT___$1,f__$1,ch__$1,meta30520));
});

}

return (new cljs.core.async.t30519(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30528 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30528 = (function (map_GT_,f,ch,meta30529){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30529 = meta30529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30530,meta30529__$1){
var self__ = this;
var _30530__$1 = this;
return (new cljs.core.async.t30528(self__.map_GT_,self__.f,self__.ch,meta30529__$1));
});

cljs.core.async.t30528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30530){
var self__ = this;
var _30530__$1 = this;
return self__.meta30529;
});

cljs.core.async.t30528.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30529","meta30529",162746633,null)], null);
});

cljs.core.async.t30528.cljs$lang$type = true;

cljs.core.async.t30528.cljs$lang$ctorStr = "cljs.core.async/t30528";

cljs.core.async.t30528.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30528");
});

cljs.core.async.__GT_t30528 = (function cljs$core$async$map_GT__$___GT_t30528(map_GT___$1,f__$1,ch__$1,meta30529){
return (new cljs.core.async.t30528(map_GT___$1,f__$1,ch__$1,meta30529));
});

}

return (new cljs.core.async.t30528(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30534 = (function (filter_GT_,p,ch,meta30535){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30535 = meta30535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30536,meta30535__$1){
var self__ = this;
var _30536__$1 = this;
return (new cljs.core.async.t30534(self__.filter_GT_,self__.p,self__.ch,meta30535__$1));
});

cljs.core.async.t30534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30536){
var self__ = this;
var _30536__$1 = this;
return self__.meta30535;
});

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30535","meta30535",688770429,null)], null);
});

cljs.core.async.t30534.cljs$lang$type = true;

cljs.core.async.t30534.cljs$lang$ctorStr = "cljs.core.async/t30534";

cljs.core.async.t30534.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30534");
});

cljs.core.async.__GT_t30534 = (function cljs$core$async$filter_GT__$___GT_t30534(filter_GT___$1,p__$1,ch__$1,meta30535){
return (new cljs.core.async.t30534(filter_GT___$1,p__$1,ch__$1,meta30535));
});

}

return (new cljs.core.async.t30534(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__30538 = arguments.length;
switch (G__30538) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25247__auto___30581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30581,out){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30581,out){
return (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (7))){
var inst_30555 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30561_30582 = state_30559__$1;
(statearr_30561_30582[(2)] = inst_30555);

(statearr_30561_30582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (1))){
var state_30559__$1 = state_30559;
var statearr_30562_30583 = state_30559__$1;
(statearr_30562_30583[(2)] = null);

(statearr_30562_30583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (4))){
var inst_30541 = (state_30559[(7)]);
var inst_30541__$1 = (state_30559[(2)]);
var inst_30542 = (inst_30541__$1 == null);
var state_30559__$1 = (function (){var statearr_30563 = state_30559;
(statearr_30563[(7)] = inst_30541__$1);

return statearr_30563;
})();
if(cljs.core.truth_(inst_30542)){
var statearr_30564_30584 = state_30559__$1;
(statearr_30564_30584[(1)] = (5));

} else {
var statearr_30565_30585 = state_30559__$1;
(statearr_30565_30585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (6))){
var inst_30541 = (state_30559[(7)]);
var inst_30546 = p.call(null,inst_30541);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30546)){
var statearr_30566_30586 = state_30559__$1;
(statearr_30566_30586[(1)] = (8));

} else {
var statearr_30567_30587 = state_30559__$1;
(statearr_30567_30587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (3))){
var inst_30557 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30559__$1,inst_30557);
} else {
if((state_val_30560 === (2))){
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30559__$1,(4),ch);
} else {
if((state_val_30560 === (11))){
var inst_30549 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30568_30588 = state_30559__$1;
(statearr_30568_30588[(2)] = inst_30549);

(statearr_30568_30588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (9))){
var state_30559__$1 = state_30559;
var statearr_30569_30589 = state_30559__$1;
(statearr_30569_30589[(2)] = null);

(statearr_30569_30589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (5))){
var inst_30544 = cljs.core.async.close_BANG_.call(null,out);
var state_30559__$1 = state_30559;
var statearr_30570_30590 = state_30559__$1;
(statearr_30570_30590[(2)] = inst_30544);

(statearr_30570_30590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (10))){
var inst_30552 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30571 = state_30559;
(statearr_30571[(8)] = inst_30552);

return statearr_30571;
})();
var statearr_30572_30591 = state_30559__$1;
(statearr_30572_30591[(2)] = null);

(statearr_30572_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (8))){
var inst_30541 = (state_30559[(7)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30559__$1,(11),out,inst_30541);
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
});})(c__25247__auto___30581,out))
;
return ((function (switch__25185__auto__,c__25247__auto___30581,out){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30559){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__25189__auto__ = e30577;
var statearr_30578_30592 = state_30559;
(statearr_30578_30592[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30593 = state_30559;
state_30559 = G__30593;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30581,out))
})();
var state__25249__auto__ = (function (){var statearr_30579 = f__25248__auto__.call(null);
(statearr_30579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30581);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30581,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30595 = arguments.length;
switch (G__30595) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__25247__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto__){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto__){
return (function (state_30762){
var state_val_30763 = (state_30762[(1)]);
if((state_val_30763 === (7))){
var inst_30758 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30764_30805 = state_30762__$1;
(statearr_30764_30805[(2)] = inst_30758);

(statearr_30764_30805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (20))){
var inst_30728 = (state_30762[(7)]);
var inst_30739 = (state_30762[(2)]);
var inst_30740 = cljs.core.next.call(null,inst_30728);
var inst_30714 = inst_30740;
var inst_30715 = null;
var inst_30716 = (0);
var inst_30717 = (0);
var state_30762__$1 = (function (){var statearr_30765 = state_30762;
(statearr_30765[(8)] = inst_30715);

(statearr_30765[(9)] = inst_30714);

(statearr_30765[(10)] = inst_30717);

(statearr_30765[(11)] = inst_30739);

(statearr_30765[(12)] = inst_30716);

return statearr_30765;
})();
var statearr_30766_30806 = state_30762__$1;
(statearr_30766_30806[(2)] = null);

(statearr_30766_30806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (1))){
var state_30762__$1 = state_30762;
var statearr_30767_30807 = state_30762__$1;
(statearr_30767_30807[(2)] = null);

(statearr_30767_30807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (4))){
var inst_30703 = (state_30762[(13)]);
var inst_30703__$1 = (state_30762[(2)]);
var inst_30704 = (inst_30703__$1 == null);
var state_30762__$1 = (function (){var statearr_30768 = state_30762;
(statearr_30768[(13)] = inst_30703__$1);

return statearr_30768;
})();
if(cljs.core.truth_(inst_30704)){
var statearr_30769_30808 = state_30762__$1;
(statearr_30769_30808[(1)] = (5));

} else {
var statearr_30770_30809 = state_30762__$1;
(statearr_30770_30809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (15))){
var state_30762__$1 = state_30762;
var statearr_30774_30810 = state_30762__$1;
(statearr_30774_30810[(2)] = null);

(statearr_30774_30810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (21))){
var state_30762__$1 = state_30762;
var statearr_30775_30811 = state_30762__$1;
(statearr_30775_30811[(2)] = null);

(statearr_30775_30811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (13))){
var inst_30715 = (state_30762[(8)]);
var inst_30714 = (state_30762[(9)]);
var inst_30717 = (state_30762[(10)]);
var inst_30716 = (state_30762[(12)]);
var inst_30724 = (state_30762[(2)]);
var inst_30725 = (inst_30717 + (1));
var tmp30771 = inst_30715;
var tmp30772 = inst_30714;
var tmp30773 = inst_30716;
var inst_30714__$1 = tmp30772;
var inst_30715__$1 = tmp30771;
var inst_30716__$1 = tmp30773;
var inst_30717__$1 = inst_30725;
var state_30762__$1 = (function (){var statearr_30776 = state_30762;
(statearr_30776[(8)] = inst_30715__$1);

(statearr_30776[(9)] = inst_30714__$1);

(statearr_30776[(10)] = inst_30717__$1);

(statearr_30776[(14)] = inst_30724);

(statearr_30776[(12)] = inst_30716__$1);

return statearr_30776;
})();
var statearr_30777_30812 = state_30762__$1;
(statearr_30777_30812[(2)] = null);

(statearr_30777_30812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (22))){
var state_30762__$1 = state_30762;
var statearr_30778_30813 = state_30762__$1;
(statearr_30778_30813[(2)] = null);

(statearr_30778_30813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (6))){
var inst_30703 = (state_30762[(13)]);
var inst_30712 = f.call(null,inst_30703);
var inst_30713 = cljs.core.seq.call(null,inst_30712);
var inst_30714 = inst_30713;
var inst_30715 = null;
var inst_30716 = (0);
var inst_30717 = (0);
var state_30762__$1 = (function (){var statearr_30779 = state_30762;
(statearr_30779[(8)] = inst_30715);

(statearr_30779[(9)] = inst_30714);

(statearr_30779[(10)] = inst_30717);

(statearr_30779[(12)] = inst_30716);

return statearr_30779;
})();
var statearr_30780_30814 = state_30762__$1;
(statearr_30780_30814[(2)] = null);

(statearr_30780_30814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (17))){
var inst_30728 = (state_30762[(7)]);
var inst_30732 = cljs.core.chunk_first.call(null,inst_30728);
var inst_30733 = cljs.core.chunk_rest.call(null,inst_30728);
var inst_30734 = cljs.core.count.call(null,inst_30732);
var inst_30714 = inst_30733;
var inst_30715 = inst_30732;
var inst_30716 = inst_30734;
var inst_30717 = (0);
var state_30762__$1 = (function (){var statearr_30781 = state_30762;
(statearr_30781[(8)] = inst_30715);

(statearr_30781[(9)] = inst_30714);

(statearr_30781[(10)] = inst_30717);

(statearr_30781[(12)] = inst_30716);

return statearr_30781;
})();
var statearr_30782_30815 = state_30762__$1;
(statearr_30782_30815[(2)] = null);

(statearr_30782_30815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (3))){
var inst_30760 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30762__$1,inst_30760);
} else {
if((state_val_30763 === (12))){
var inst_30748 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30783_30816 = state_30762__$1;
(statearr_30783_30816[(2)] = inst_30748);

(statearr_30783_30816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (2))){
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30762__$1,(4),in$);
} else {
if((state_val_30763 === (23))){
var inst_30756 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30784_30817 = state_30762__$1;
(statearr_30784_30817[(2)] = inst_30756);

(statearr_30784_30817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (19))){
var inst_30743 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30785_30818 = state_30762__$1;
(statearr_30785_30818[(2)] = inst_30743);

(statearr_30785_30818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (11))){
var inst_30728 = (state_30762[(7)]);
var inst_30714 = (state_30762[(9)]);
var inst_30728__$1 = cljs.core.seq.call(null,inst_30714);
var state_30762__$1 = (function (){var statearr_30786 = state_30762;
(statearr_30786[(7)] = inst_30728__$1);

return statearr_30786;
})();
if(inst_30728__$1){
var statearr_30787_30819 = state_30762__$1;
(statearr_30787_30819[(1)] = (14));

} else {
var statearr_30788_30820 = state_30762__$1;
(statearr_30788_30820[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (9))){
var inst_30750 = (state_30762[(2)]);
var inst_30751 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30762__$1 = (function (){var statearr_30789 = state_30762;
(statearr_30789[(15)] = inst_30750);

return statearr_30789;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_30790_30821 = state_30762__$1;
(statearr_30790_30821[(1)] = (21));

} else {
var statearr_30791_30822 = state_30762__$1;
(statearr_30791_30822[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (5))){
var inst_30706 = cljs.core.async.close_BANG_.call(null,out);
var state_30762__$1 = state_30762;
var statearr_30792_30823 = state_30762__$1;
(statearr_30792_30823[(2)] = inst_30706);

(statearr_30792_30823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (14))){
var inst_30728 = (state_30762[(7)]);
var inst_30730 = cljs.core.chunked_seq_QMARK_.call(null,inst_30728);
var state_30762__$1 = state_30762;
if(inst_30730){
var statearr_30793_30824 = state_30762__$1;
(statearr_30793_30824[(1)] = (17));

} else {
var statearr_30794_30825 = state_30762__$1;
(statearr_30794_30825[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (16))){
var inst_30746 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
var statearr_30795_30826 = state_30762__$1;
(statearr_30795_30826[(2)] = inst_30746);

(statearr_30795_30826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30763 === (10))){
var inst_30715 = (state_30762[(8)]);
var inst_30717 = (state_30762[(10)]);
var inst_30722 = cljs.core._nth.call(null,inst_30715,inst_30717);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30762__$1,(13),out,inst_30722);
} else {
if((state_val_30763 === (18))){
var inst_30728 = (state_30762[(7)]);
var inst_30737 = cljs.core.first.call(null,inst_30728);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30762__$1,(20),out,inst_30737);
} else {
if((state_val_30763 === (8))){
var inst_30717 = (state_30762[(10)]);
var inst_30716 = (state_30762[(12)]);
var inst_30719 = (inst_30717 < inst_30716);
var inst_30720 = inst_30719;
var state_30762__$1 = state_30762;
if(cljs.core.truth_(inst_30720)){
var statearr_30796_30827 = state_30762__$1;
(statearr_30796_30827[(1)] = (10));

} else {
var statearr_30797_30828 = state_30762__$1;
(statearr_30797_30828[(1)] = (11));

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
});})(c__25247__auto__))
;
return ((function (switch__25185__auto__,c__25247__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25186__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25186__auto____0 = (function (){
var statearr_30801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30801[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25186__auto__);

(statearr_30801[(1)] = (1));

return statearr_30801;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25186__auto____1 = (function (state_30762){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30802){if((e30802 instanceof Object)){
var ex__25189__auto__ = e30802;
var statearr_30803_30829 = state_30762;
(statearr_30803_30829[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30830 = state_30762;
state_30762 = G__30830;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25186__auto__ = function(state_30762){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25186__auto____1.call(this,state_30762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25186__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25186__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto__))
})();
var state__25249__auto__ = (function (){var statearr_30804 = f__25248__auto__.call(null);
(statearr_30804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto__);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto__))
);

return c__25247__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30832 = arguments.length;
switch (G__30832) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__30835 = arguments.length;
switch (G__30835) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__30838 = arguments.length;
switch (G__30838) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25247__auto___30888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30888,out){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30888,out){
return (function (state_30862){
var state_val_30863 = (state_30862[(1)]);
if((state_val_30863 === (7))){
var inst_30857 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30864_30889 = state_30862__$1;
(statearr_30864_30889[(2)] = inst_30857);

(statearr_30864_30889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (1))){
var inst_30839 = null;
var state_30862__$1 = (function (){var statearr_30865 = state_30862;
(statearr_30865[(7)] = inst_30839);

return statearr_30865;
})();
var statearr_30866_30890 = state_30862__$1;
(statearr_30866_30890[(2)] = null);

(statearr_30866_30890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (4))){
var inst_30842 = (state_30862[(8)]);
var inst_30842__$1 = (state_30862[(2)]);
var inst_30843 = (inst_30842__$1 == null);
var inst_30844 = cljs.core.not.call(null,inst_30843);
var state_30862__$1 = (function (){var statearr_30867 = state_30862;
(statearr_30867[(8)] = inst_30842__$1);

return statearr_30867;
})();
if(inst_30844){
var statearr_30868_30891 = state_30862__$1;
(statearr_30868_30891[(1)] = (5));

} else {
var statearr_30869_30892 = state_30862__$1;
(statearr_30869_30892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (6))){
var state_30862__$1 = state_30862;
var statearr_30870_30893 = state_30862__$1;
(statearr_30870_30893[(2)] = null);

(statearr_30870_30893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (3))){
var inst_30859 = (state_30862[(2)]);
var inst_30860 = cljs.core.async.close_BANG_.call(null,out);
var state_30862__$1 = (function (){var statearr_30871 = state_30862;
(statearr_30871[(9)] = inst_30859);

return statearr_30871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30862__$1,inst_30860);
} else {
if((state_val_30863 === (2))){
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30862__$1,(4),ch);
} else {
if((state_val_30863 === (11))){
var inst_30842 = (state_30862[(8)]);
var inst_30851 = (state_30862[(2)]);
var inst_30839 = inst_30842;
var state_30862__$1 = (function (){var statearr_30872 = state_30862;
(statearr_30872[(10)] = inst_30851);

(statearr_30872[(7)] = inst_30839);

return statearr_30872;
})();
var statearr_30873_30894 = state_30862__$1;
(statearr_30873_30894[(2)] = null);

(statearr_30873_30894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (9))){
var inst_30842 = (state_30862[(8)]);
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30862__$1,(11),out,inst_30842);
} else {
if((state_val_30863 === (5))){
var inst_30842 = (state_30862[(8)]);
var inst_30839 = (state_30862[(7)]);
var inst_30846 = cljs.core._EQ_.call(null,inst_30842,inst_30839);
var state_30862__$1 = state_30862;
if(inst_30846){
var statearr_30875_30895 = state_30862__$1;
(statearr_30875_30895[(1)] = (8));

} else {
var statearr_30876_30896 = state_30862__$1;
(statearr_30876_30896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (10))){
var inst_30854 = (state_30862[(2)]);
var state_30862__$1 = state_30862;
var statearr_30877_30897 = state_30862__$1;
(statearr_30877_30897[(2)] = inst_30854);

(statearr_30877_30897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30863 === (8))){
var inst_30839 = (state_30862[(7)]);
var tmp30874 = inst_30839;
var inst_30839__$1 = tmp30874;
var state_30862__$1 = (function (){var statearr_30878 = state_30862;
(statearr_30878[(7)] = inst_30839__$1);

return statearr_30878;
})();
var statearr_30879_30898 = state_30862__$1;
(statearr_30879_30898[(2)] = null);

(statearr_30879_30898[(1)] = (2));


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
});})(c__25247__auto___30888,out))
;
return ((function (switch__25185__auto__,c__25247__auto___30888,out){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30883[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30883[(1)] = (1));

return statearr_30883;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30862){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30884){if((e30884 instanceof Object)){
var ex__25189__auto__ = e30884;
var statearr_30885_30899 = state_30862;
(statearr_30885_30899[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30900 = state_30862;
state_30862 = G__30900;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30888,out))
})();
var state__25249__auto__ = (function (){var statearr_30886 = f__25248__auto__.call(null);
(statearr_30886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30888);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30888,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30902 = arguments.length;
switch (G__30902) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25247__auto___30971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___30971,out){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___30971,out){
return (function (state_30940){
var state_val_30941 = (state_30940[(1)]);
if((state_val_30941 === (7))){
var inst_30936 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30942_30972 = state_30940__$1;
(statearr_30942_30972[(2)] = inst_30936);

(statearr_30942_30972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (1))){
var inst_30903 = (new Array(n));
var inst_30904 = inst_30903;
var inst_30905 = (0);
var state_30940__$1 = (function (){var statearr_30943 = state_30940;
(statearr_30943[(7)] = inst_30905);

(statearr_30943[(8)] = inst_30904);

return statearr_30943;
})();
var statearr_30944_30973 = state_30940__$1;
(statearr_30944_30973[(2)] = null);

(statearr_30944_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (4))){
var inst_30908 = (state_30940[(9)]);
var inst_30908__$1 = (state_30940[(2)]);
var inst_30909 = (inst_30908__$1 == null);
var inst_30910 = cljs.core.not.call(null,inst_30909);
var state_30940__$1 = (function (){var statearr_30945 = state_30940;
(statearr_30945[(9)] = inst_30908__$1);

return statearr_30945;
})();
if(inst_30910){
var statearr_30946_30974 = state_30940__$1;
(statearr_30946_30974[(1)] = (5));

} else {
var statearr_30947_30975 = state_30940__$1;
(statearr_30947_30975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (15))){
var inst_30930 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30948_30976 = state_30940__$1;
(statearr_30948_30976[(2)] = inst_30930);

(statearr_30948_30976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (13))){
var state_30940__$1 = state_30940;
var statearr_30949_30977 = state_30940__$1;
(statearr_30949_30977[(2)] = null);

(statearr_30949_30977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (6))){
var inst_30905 = (state_30940[(7)]);
var inst_30926 = (inst_30905 > (0));
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30926)){
var statearr_30950_30978 = state_30940__$1;
(statearr_30950_30978[(1)] = (12));

} else {
var statearr_30951_30979 = state_30940__$1;
(statearr_30951_30979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (3))){
var inst_30938 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30940__$1,inst_30938);
} else {
if((state_val_30941 === (12))){
var inst_30904 = (state_30940[(8)]);
var inst_30928 = cljs.core.vec.call(null,inst_30904);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30940__$1,(15),out,inst_30928);
} else {
if((state_val_30941 === (2))){
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(4),ch);
} else {
if((state_val_30941 === (11))){
var inst_30920 = (state_30940[(2)]);
var inst_30921 = (new Array(n));
var inst_30904 = inst_30921;
var inst_30905 = (0);
var state_30940__$1 = (function (){var statearr_30952 = state_30940;
(statearr_30952[(10)] = inst_30920);

(statearr_30952[(7)] = inst_30905);

(statearr_30952[(8)] = inst_30904);

return statearr_30952;
})();
var statearr_30953_30980 = state_30940__$1;
(statearr_30953_30980[(2)] = null);

(statearr_30953_30980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (9))){
var inst_30904 = (state_30940[(8)]);
var inst_30918 = cljs.core.vec.call(null,inst_30904);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30940__$1,(11),out,inst_30918);
} else {
if((state_val_30941 === (5))){
var inst_30908 = (state_30940[(9)]);
var inst_30905 = (state_30940[(7)]);
var inst_30904 = (state_30940[(8)]);
var inst_30913 = (state_30940[(11)]);
var inst_30912 = (inst_30904[inst_30905] = inst_30908);
var inst_30913__$1 = (inst_30905 + (1));
var inst_30914 = (inst_30913__$1 < n);
var state_30940__$1 = (function (){var statearr_30954 = state_30940;
(statearr_30954[(12)] = inst_30912);

(statearr_30954[(11)] = inst_30913__$1);

return statearr_30954;
})();
if(cljs.core.truth_(inst_30914)){
var statearr_30955_30981 = state_30940__$1;
(statearr_30955_30981[(1)] = (8));

} else {
var statearr_30956_30982 = state_30940__$1;
(statearr_30956_30982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (14))){
var inst_30933 = (state_30940[(2)]);
var inst_30934 = cljs.core.async.close_BANG_.call(null,out);
var state_30940__$1 = (function (){var statearr_30958 = state_30940;
(statearr_30958[(13)] = inst_30933);

return statearr_30958;
})();
var statearr_30959_30983 = state_30940__$1;
(statearr_30959_30983[(2)] = inst_30934);

(statearr_30959_30983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (10))){
var inst_30924 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30960_30984 = state_30940__$1;
(statearr_30960_30984[(2)] = inst_30924);

(statearr_30960_30984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (8))){
var inst_30904 = (state_30940[(8)]);
var inst_30913 = (state_30940[(11)]);
var tmp30957 = inst_30904;
var inst_30904__$1 = tmp30957;
var inst_30905 = inst_30913;
var state_30940__$1 = (function (){var statearr_30961 = state_30940;
(statearr_30961[(7)] = inst_30905);

(statearr_30961[(8)] = inst_30904__$1);

return statearr_30961;
})();
var statearr_30962_30985 = state_30940__$1;
(statearr_30962_30985[(2)] = null);

(statearr_30962_30985[(1)] = (2));


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
});})(c__25247__auto___30971,out))
;
return ((function (switch__25185__auto__,c__25247__auto___30971,out){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_30966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30966[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_30966[(1)] = (1));

return statearr_30966;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_30940){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_30940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e30967){if((e30967 instanceof Object)){
var ex__25189__auto__ = e30967;
var statearr_30968_30986 = state_30940;
(statearr_30968_30986[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30987 = state_30940;
state_30940 = G__30987;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_30940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_30940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___30971,out))
})();
var state__25249__auto__ = (function (){var statearr_30969 = f__25248__auto__.call(null);
(statearr_30969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___30971);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___30971,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30989 = arguments.length;
switch (G__30989) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25247__auto___31062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25247__auto___31062,out){
return (function (){
var f__25248__auto__ = (function (){var switch__25185__auto__ = ((function (c__25247__auto___31062,out){
return (function (state_31031){
var state_val_31032 = (state_31031[(1)]);
if((state_val_31032 === (7))){
var inst_31027 = (state_31031[(2)]);
var state_31031__$1 = state_31031;
var statearr_31033_31063 = state_31031__$1;
(statearr_31033_31063[(2)] = inst_31027);

(statearr_31033_31063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (1))){
var inst_30990 = [];
var inst_30991 = inst_30990;
var inst_30992 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31031__$1 = (function (){var statearr_31034 = state_31031;
(statearr_31034[(7)] = inst_30992);

(statearr_31034[(8)] = inst_30991);

return statearr_31034;
})();
var statearr_31035_31064 = state_31031__$1;
(statearr_31035_31064[(2)] = null);

(statearr_31035_31064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (4))){
var inst_30995 = (state_31031[(9)]);
var inst_30995__$1 = (state_31031[(2)]);
var inst_30996 = (inst_30995__$1 == null);
var inst_30997 = cljs.core.not.call(null,inst_30996);
var state_31031__$1 = (function (){var statearr_31036 = state_31031;
(statearr_31036[(9)] = inst_30995__$1);

return statearr_31036;
})();
if(inst_30997){
var statearr_31037_31065 = state_31031__$1;
(statearr_31037_31065[(1)] = (5));

} else {
var statearr_31038_31066 = state_31031__$1;
(statearr_31038_31066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (15))){
var inst_31021 = (state_31031[(2)]);
var state_31031__$1 = state_31031;
var statearr_31039_31067 = state_31031__$1;
(statearr_31039_31067[(2)] = inst_31021);

(statearr_31039_31067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (13))){
var state_31031__$1 = state_31031;
var statearr_31040_31068 = state_31031__$1;
(statearr_31040_31068[(2)] = null);

(statearr_31040_31068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (6))){
var inst_30991 = (state_31031[(8)]);
var inst_31016 = inst_30991.length;
var inst_31017 = (inst_31016 > (0));
var state_31031__$1 = state_31031;
if(cljs.core.truth_(inst_31017)){
var statearr_31041_31069 = state_31031__$1;
(statearr_31041_31069[(1)] = (12));

} else {
var statearr_31042_31070 = state_31031__$1;
(statearr_31042_31070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (3))){
var inst_31029 = (state_31031[(2)]);
var state_31031__$1 = state_31031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31031__$1,inst_31029);
} else {
if((state_val_31032 === (12))){
var inst_30991 = (state_31031[(8)]);
var inst_31019 = cljs.core.vec.call(null,inst_30991);
var state_31031__$1 = state_31031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31031__$1,(15),out,inst_31019);
} else {
if((state_val_31032 === (2))){
var state_31031__$1 = state_31031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31031__$1,(4),ch);
} else {
if((state_val_31032 === (11))){
var inst_30995 = (state_31031[(9)]);
var inst_30999 = (state_31031[(10)]);
var inst_31009 = (state_31031[(2)]);
var inst_31010 = [];
var inst_31011 = inst_31010.push(inst_30995);
var inst_30991 = inst_31010;
var inst_30992 = inst_30999;
var state_31031__$1 = (function (){var statearr_31043 = state_31031;
(statearr_31043[(7)] = inst_30992);

(statearr_31043[(8)] = inst_30991);

(statearr_31043[(11)] = inst_31011);

(statearr_31043[(12)] = inst_31009);

return statearr_31043;
})();
var statearr_31044_31071 = state_31031__$1;
(statearr_31044_31071[(2)] = null);

(statearr_31044_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (9))){
var inst_30991 = (state_31031[(8)]);
var inst_31007 = cljs.core.vec.call(null,inst_30991);
var state_31031__$1 = state_31031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31031__$1,(11),out,inst_31007);
} else {
if((state_val_31032 === (5))){
var inst_30992 = (state_31031[(7)]);
var inst_30995 = (state_31031[(9)]);
var inst_30999 = (state_31031[(10)]);
var inst_30999__$1 = f.call(null,inst_30995);
var inst_31000 = cljs.core._EQ_.call(null,inst_30999__$1,inst_30992);
var inst_31001 = cljs.core.keyword_identical_QMARK_.call(null,inst_30992,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31002 = (inst_31000) || (inst_31001);
var state_31031__$1 = (function (){var statearr_31045 = state_31031;
(statearr_31045[(10)] = inst_30999__$1);

return statearr_31045;
})();
if(cljs.core.truth_(inst_31002)){
var statearr_31046_31072 = state_31031__$1;
(statearr_31046_31072[(1)] = (8));

} else {
var statearr_31047_31073 = state_31031__$1;
(statearr_31047_31073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (14))){
var inst_31024 = (state_31031[(2)]);
var inst_31025 = cljs.core.async.close_BANG_.call(null,out);
var state_31031__$1 = (function (){var statearr_31049 = state_31031;
(statearr_31049[(13)] = inst_31024);

return statearr_31049;
})();
var statearr_31050_31074 = state_31031__$1;
(statearr_31050_31074[(2)] = inst_31025);

(statearr_31050_31074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (10))){
var inst_31014 = (state_31031[(2)]);
var state_31031__$1 = state_31031;
var statearr_31051_31075 = state_31031__$1;
(statearr_31051_31075[(2)] = inst_31014);

(statearr_31051_31075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (8))){
var inst_30991 = (state_31031[(8)]);
var inst_30995 = (state_31031[(9)]);
var inst_30999 = (state_31031[(10)]);
var inst_31004 = inst_30991.push(inst_30995);
var tmp31048 = inst_30991;
var inst_30991__$1 = tmp31048;
var inst_30992 = inst_30999;
var state_31031__$1 = (function (){var statearr_31052 = state_31031;
(statearr_31052[(7)] = inst_30992);

(statearr_31052[(14)] = inst_31004);

(statearr_31052[(8)] = inst_30991__$1);

return statearr_31052;
})();
var statearr_31053_31076 = state_31031__$1;
(statearr_31053_31076[(2)] = null);

(statearr_31053_31076[(1)] = (2));


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
});})(c__25247__auto___31062,out))
;
return ((function (switch__25185__auto__,c__25247__auto___31062,out){
return (function() {
var cljs$core$async$state_machine__25186__auto__ = null;
var cljs$core$async$state_machine__25186__auto____0 = (function (){
var statearr_31057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31057[(0)] = cljs$core$async$state_machine__25186__auto__);

(statearr_31057[(1)] = (1));

return statearr_31057;
});
var cljs$core$async$state_machine__25186__auto____1 = (function (state_31031){
while(true){
var ret_value__25187__auto__ = (function (){try{while(true){
var result__25188__auto__ = switch__25185__auto__.call(null,state_31031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25188__auto__;
}
break;
}
}catch (e31058){if((e31058 instanceof Object)){
var ex__25189__auto__ = e31058;
var statearr_31059_31077 = state_31031;
(statearr_31059_31077[(5)] = ex__25189__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31078 = state_31031;
state_31031 = G__31078;
continue;
} else {
return ret_value__25187__auto__;
}
break;
}
});
cljs$core$async$state_machine__25186__auto__ = function(state_31031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25186__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25186__auto____1.call(this,state_31031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25186__auto____0;
cljs$core$async$state_machine__25186__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25186__auto____1;
return cljs$core$async$state_machine__25186__auto__;
})()
;})(switch__25185__auto__,c__25247__auto___31062,out))
})();
var state__25249__auto__ = (function (){var statearr_31060 = f__25248__auto__.call(null);
(statearr_31060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25247__auto___31062);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25249__auto__);
});})(c__25247__auto___31062,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map