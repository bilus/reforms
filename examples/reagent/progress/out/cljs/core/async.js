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
if(typeof cljs.core.async.t20482 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20482 = (function (fn_handler,f,meta20483){
this.fn_handler = fn_handler;
this.f = f;
this.meta20483 = meta20483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20484,meta20483__$1){
var self__ = this;
var _20484__$1 = this;
return (new cljs.core.async.t20482(self__.fn_handler,self__.f,meta20483__$1));
});

cljs.core.async.t20482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20484){
var self__ = this;
var _20484__$1 = this;
return self__.meta20483;
});

cljs.core.async.t20482.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta20483","meta20483",-1577018110,null)], null);
});

cljs.core.async.t20482.cljs$lang$type = true;

cljs.core.async.t20482.cljs$lang$ctorStr = "cljs.core.async/t20482";

cljs.core.async.t20482.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t20482");
});

cljs.core.async.__GT_t20482 = (function cljs$core$async$fn_handler_$___GT_t20482(fn_handler__$1,f__$1,meta20483){
return (new cljs.core.async.t20482(fn_handler__$1,f__$1,meta20483));
});

}

return (new cljs.core.async.t20482(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20486 = buff;
if(G__20486){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__20486.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20486.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20486);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20486);
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
var G__20488 = arguments.length;
switch (G__20488) {
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
var G__20491 = arguments.length;
switch (G__20491) {
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
var val_20493 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20493);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20493,ret){
return (function (){
return fn1.call(null,val_20493);
});})(val_20493,ret))
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
var G__20495 = arguments.length;
switch (G__20495) {
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
var n__5224__auto___20497 = n;
var x_20498 = (0);
while(true){
if((x_20498 < n__5224__auto___20497)){
(a[x_20498] = (0));

var G__20499 = (x_20498 + (1));
x_20498 = G__20499;
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

var G__20500 = (i + (1));
i = G__20500;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20504 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20504 = (function (alt_flag,flag,meta20505){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20505 = meta20505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20506,meta20505__$1){
var self__ = this;
var _20506__$1 = this;
return (new cljs.core.async.t20504(self__.alt_flag,self__.flag,meta20505__$1));
});})(flag))
;

cljs.core.async.t20504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20506){
var self__ = this;
var _20506__$1 = this;
return self__.meta20505;
});})(flag))
;

cljs.core.async.t20504.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20504.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20505","meta20505",-1288458217,null)], null);
});})(flag))
;

cljs.core.async.t20504.cljs$lang$type = true;

cljs.core.async.t20504.cljs$lang$ctorStr = "cljs.core.async/t20504";

cljs.core.async.t20504.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t20504");
});})(flag))
;

cljs.core.async.__GT_t20504 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t20504(alt_flag__$1,flag__$1,meta20505){
return (new cljs.core.async.t20504(alt_flag__$1,flag__$1,meta20505));
});})(flag))
;

}

return (new cljs.core.async.t20504(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t20510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20510 = (function (alt_handler,flag,cb,meta20511){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20511 = meta20511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t20510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20512,meta20511__$1){
var self__ = this;
var _20512__$1 = this;
return (new cljs.core.async.t20510(self__.alt_handler,self__.flag,self__.cb,meta20511__$1));
});

cljs.core.async.t20510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20512){
var self__ = this;
var _20512__$1 = this;
return self__.meta20511;
});

cljs.core.async.t20510.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20511","meta20511",-1806591237,null)], null);
});

cljs.core.async.t20510.cljs$lang$type = true;

cljs.core.async.t20510.cljs$lang$ctorStr = "cljs.core.async/t20510";

cljs.core.async.t20510.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t20510");
});

cljs.core.async.__GT_t20510 = (function cljs$core$async$alt_handler_$___GT_t20510(alt_handler__$1,flag__$1,cb__$1,meta20511){
return (new cljs.core.async.t20510(alt_handler__$1,flag__$1,cb__$1,meta20511));
});

}

return (new cljs.core.async.t20510(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20513_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20513_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20514_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20514_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4339__auto__ = wport;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20515 = (i + (1));
i = G__20515;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4339__auto__ = ret;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4327__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4327__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4327__auto__;
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
var argseq__5379__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5379__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20518){
var map__20519 = p__20518;
var map__20519__$1 = ((cljs.core.seq_QMARK_.call(null,map__20519))?cljs.core.apply.call(null,cljs.core.hash_map,map__20519):map__20519);
var opts = map__20519__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20516){
var G__20517 = cljs.core.first.call(null,seq20516);
var seq20516__$1 = cljs.core.next.call(null,seq20516);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20517,seq20516__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__20521 = arguments.length;
switch (G__20521) {
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
var c__17745__auto___20570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___20570){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___20570){
return (function (state_20545){
var state_val_20546 = (state_20545[(1)]);
if((state_val_20546 === (7))){
var inst_20541 = (state_20545[(2)]);
var state_20545__$1 = state_20545;
var statearr_20547_20571 = state_20545__$1;
(statearr_20547_20571[(2)] = inst_20541);

(statearr_20547_20571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (1))){
var state_20545__$1 = state_20545;
var statearr_20548_20572 = state_20545__$1;
(statearr_20548_20572[(2)] = null);

(statearr_20548_20572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (4))){
var inst_20524 = (state_20545[(7)]);
var inst_20524__$1 = (state_20545[(2)]);
var inst_20525 = (inst_20524__$1 == null);
var state_20545__$1 = (function (){var statearr_20549 = state_20545;
(statearr_20549[(7)] = inst_20524__$1);

return statearr_20549;
})();
if(cljs.core.truth_(inst_20525)){
var statearr_20550_20573 = state_20545__$1;
(statearr_20550_20573[(1)] = (5));

} else {
var statearr_20551_20574 = state_20545__$1;
(statearr_20551_20574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (13))){
var state_20545__$1 = state_20545;
var statearr_20552_20575 = state_20545__$1;
(statearr_20552_20575[(2)] = null);

(statearr_20552_20575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (6))){
var inst_20524 = (state_20545[(7)]);
var state_20545__$1 = state_20545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20545__$1,(11),to,inst_20524);
} else {
if((state_val_20546 === (3))){
var inst_20543 = (state_20545[(2)]);
var state_20545__$1 = state_20545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20545__$1,inst_20543);
} else {
if((state_val_20546 === (12))){
var state_20545__$1 = state_20545;
var statearr_20553_20576 = state_20545__$1;
(statearr_20553_20576[(2)] = null);

(statearr_20553_20576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (2))){
var state_20545__$1 = state_20545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20545__$1,(4),from);
} else {
if((state_val_20546 === (11))){
var inst_20534 = (state_20545[(2)]);
var state_20545__$1 = state_20545;
if(cljs.core.truth_(inst_20534)){
var statearr_20554_20577 = state_20545__$1;
(statearr_20554_20577[(1)] = (12));

} else {
var statearr_20555_20578 = state_20545__$1;
(statearr_20555_20578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (9))){
var state_20545__$1 = state_20545;
var statearr_20556_20579 = state_20545__$1;
(statearr_20556_20579[(2)] = null);

(statearr_20556_20579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (5))){
var state_20545__$1 = state_20545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20557_20580 = state_20545__$1;
(statearr_20557_20580[(1)] = (8));

} else {
var statearr_20558_20581 = state_20545__$1;
(statearr_20558_20581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (14))){
var inst_20539 = (state_20545[(2)]);
var state_20545__$1 = state_20545;
var statearr_20559_20582 = state_20545__$1;
(statearr_20559_20582[(2)] = inst_20539);

(statearr_20559_20582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (10))){
var inst_20531 = (state_20545[(2)]);
var state_20545__$1 = state_20545;
var statearr_20560_20583 = state_20545__$1;
(statearr_20560_20583[(2)] = inst_20531);

(statearr_20560_20583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20546 === (8))){
var inst_20528 = cljs.core.async.close_BANG_.call(null,to);
var state_20545__$1 = state_20545;
var statearr_20561_20584 = state_20545__$1;
(statearr_20561_20584[(2)] = inst_20528);

(statearr_20561_20584[(1)] = (10));


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
});})(c__17745__auto___20570))
;
return ((function (switch__17683__auto__,c__17745__auto___20570){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_20565 = [null,null,null,null,null,null,null,null];
(statearr_20565[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_20565[(1)] = (1));

return statearr_20565;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_20545){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_20545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e20566){if((e20566 instanceof Object)){
var ex__17687__auto__ = e20566;
var statearr_20567_20585 = state_20545;
(statearr_20567_20585[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20586 = state_20545;
state_20545 = G__20586;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_20545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_20545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___20570))
})();
var state__17747__auto__ = (function (){var statearr_20568 = f__17746__auto__.call(null);
(statearr_20568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___20570);

return statearr_20568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___20570))
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
return (function (p__20770){
var vec__20771 = p__20770;
var v = cljs.core.nth.call(null,vec__20771,(0),null);
var p = cljs.core.nth.call(null,vec__20771,(1),null);
var job = vec__20771;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17745__auto___20953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___20953,res,vec__20771,v,p,job,jobs,results){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___20953,res,vec__20771,v,p,job,jobs,results){
return (function (state_20776){
var state_val_20777 = (state_20776[(1)]);
if((state_val_20777 === (1))){
var state_20776__$1 = state_20776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20776__$1,(2),res,v);
} else {
if((state_val_20777 === (2))){
var inst_20773 = (state_20776[(2)]);
var inst_20774 = cljs.core.async.close_BANG_.call(null,res);
var state_20776__$1 = (function (){var statearr_20778 = state_20776;
(statearr_20778[(7)] = inst_20773);

return statearr_20778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20776__$1,inst_20774);
} else {
return null;
}
}
});})(c__17745__auto___20953,res,vec__20771,v,p,job,jobs,results))
;
return ((function (switch__17683__auto__,c__17745__auto___20953,res,vec__20771,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0 = (function (){
var statearr_20782 = [null,null,null,null,null,null,null,null];
(statearr_20782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__);

(statearr_20782[(1)] = (1));

return statearr_20782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1 = (function (state_20776){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_20776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e20783){if((e20783 instanceof Object)){
var ex__17687__auto__ = e20783;
var statearr_20784_20954 = state_20776;
(statearr_20784_20954[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20955 = state_20776;
state_20776 = G__20955;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = function(state_20776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1.call(this,state_20776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___20953,res,vec__20771,v,p,job,jobs,results))
})();
var state__17747__auto__ = (function (){var statearr_20785 = f__17746__auto__.call(null);
(statearr_20785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___20953);

return statearr_20785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___20953,res,vec__20771,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20786){
var vec__20787 = p__20786;
var v = cljs.core.nth.call(null,vec__20787,(0),null);
var p = cljs.core.nth.call(null,vec__20787,(1),null);
var job = vec__20787;
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
var n__5224__auto___20956 = n;
var __20957 = (0);
while(true){
if((__20957 < n__5224__auto___20956)){
var G__20788_20958 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20788_20958) {
case "compute":
var c__17745__auto___20960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20957,c__17745__auto___20960,G__20788_20958,n__5224__auto___20956,jobs,results,process,async){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (__20957,c__17745__auto___20960,G__20788_20958,n__5224__auto___20956,jobs,results,process,async){
return (function (state_20801){
var state_val_20802 = (state_20801[(1)]);
if((state_val_20802 === (1))){
var state_20801__$1 = state_20801;
var statearr_20803_20961 = state_20801__$1;
(statearr_20803_20961[(2)] = null);

(statearr_20803_20961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (2))){
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20801__$1,(4),jobs);
} else {
if((state_val_20802 === (3))){
var inst_20799 = (state_20801[(2)]);
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20801__$1,inst_20799);
} else {
if((state_val_20802 === (4))){
var inst_20791 = (state_20801[(2)]);
var inst_20792 = process.call(null,inst_20791);
var state_20801__$1 = state_20801;
if(cljs.core.truth_(inst_20792)){
var statearr_20804_20962 = state_20801__$1;
(statearr_20804_20962[(1)] = (5));

} else {
var statearr_20805_20963 = state_20801__$1;
(statearr_20805_20963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (5))){
var state_20801__$1 = state_20801;
var statearr_20806_20964 = state_20801__$1;
(statearr_20806_20964[(2)] = null);

(statearr_20806_20964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (6))){
var state_20801__$1 = state_20801;
var statearr_20807_20965 = state_20801__$1;
(statearr_20807_20965[(2)] = null);

(statearr_20807_20965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20802 === (7))){
var inst_20797 = (state_20801[(2)]);
var state_20801__$1 = state_20801;
var statearr_20808_20966 = state_20801__$1;
(statearr_20808_20966[(2)] = inst_20797);

(statearr_20808_20966[(1)] = (3));


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
});})(__20957,c__17745__auto___20960,G__20788_20958,n__5224__auto___20956,jobs,results,process,async))
;
return ((function (__20957,switch__17683__auto__,c__17745__auto___20960,G__20788_20958,n__5224__auto___20956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0 = (function (){
var statearr_20812 = [null,null,null,null,null,null,null];
(statearr_20812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__);

(statearr_20812[(1)] = (1));

return statearr_20812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1 = (function (state_20801){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_20801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e20813){if((e20813 instanceof Object)){
var ex__17687__auto__ = e20813;
var statearr_20814_20967 = state_20801;
(statearr_20814_20967[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20968 = state_20801;
state_20801 = G__20968;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = function(state_20801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1.call(this,state_20801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__;
})()
;})(__20957,switch__17683__auto__,c__17745__auto___20960,G__20788_20958,n__5224__auto___20956,jobs,results,process,async))
})();
var state__17747__auto__ = (function (){var statearr_20815 = f__17746__auto__.call(null);
(statearr_20815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___20960);

return statearr_20815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(__20957,c__17745__auto___20960,G__20788_20958,n__5224__auto___20956,jobs,results,process,async))
);


break;
case "async":
var c__17745__auto___20969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20957,c__17745__auto___20969,G__20788_20958,n__5224__auto___20956,jobs,results,process,async){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (__20957,c__17745__auto___20969,G__20788_20958,n__5224__auto___20956,jobs,results,process,async){
return (function (state_20828){
var state_val_20829 = (state_20828[(1)]);
if((state_val_20829 === (1))){
var state_20828__$1 = state_20828;
var statearr_20830_20970 = state_20828__$1;
(statearr_20830_20970[(2)] = null);

(statearr_20830_20970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (2))){
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20828__$1,(4),jobs);
} else {
if((state_val_20829 === (3))){
var inst_20826 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20828__$1,inst_20826);
} else {
if((state_val_20829 === (4))){
var inst_20818 = (state_20828[(2)]);
var inst_20819 = async.call(null,inst_20818);
var state_20828__$1 = state_20828;
if(cljs.core.truth_(inst_20819)){
var statearr_20831_20971 = state_20828__$1;
(statearr_20831_20971[(1)] = (5));

} else {
var statearr_20832_20972 = state_20828__$1;
(statearr_20832_20972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (5))){
var state_20828__$1 = state_20828;
var statearr_20833_20973 = state_20828__$1;
(statearr_20833_20973[(2)] = null);

(statearr_20833_20973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (6))){
var state_20828__$1 = state_20828;
var statearr_20834_20974 = state_20828__$1;
(statearr_20834_20974[(2)] = null);

(statearr_20834_20974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (7))){
var inst_20824 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
var statearr_20835_20975 = state_20828__$1;
(statearr_20835_20975[(2)] = inst_20824);

(statearr_20835_20975[(1)] = (3));


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
});})(__20957,c__17745__auto___20969,G__20788_20958,n__5224__auto___20956,jobs,results,process,async))
;
return ((function (__20957,switch__17683__auto__,c__17745__auto___20969,G__20788_20958,n__5224__auto___20956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0 = (function (){
var statearr_20839 = [null,null,null,null,null,null,null];
(statearr_20839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__);

(statearr_20839[(1)] = (1));

return statearr_20839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1 = (function (state_20828){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_20828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e20840){if((e20840 instanceof Object)){
var ex__17687__auto__ = e20840;
var statearr_20841_20976 = state_20828;
(statearr_20841_20976[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20977 = state_20828;
state_20828 = G__20977;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = function(state_20828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1.call(this,state_20828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__;
})()
;})(__20957,switch__17683__auto__,c__17745__auto___20969,G__20788_20958,n__5224__auto___20956,jobs,results,process,async))
})();
var state__17747__auto__ = (function (){var statearr_20842 = f__17746__auto__.call(null);
(statearr_20842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___20969);

return statearr_20842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(__20957,c__17745__auto___20969,G__20788_20958,n__5224__auto___20956,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20978 = (__20957 + (1));
__20957 = G__20978;
continue;
} else {
}
break;
}

var c__17745__auto___20979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___20979,jobs,results,process,async){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___20979,jobs,results,process,async){
return (function (state_20864){
var state_val_20865 = (state_20864[(1)]);
if((state_val_20865 === (1))){
var state_20864__$1 = state_20864;
var statearr_20866_20980 = state_20864__$1;
(statearr_20866_20980[(2)] = null);

(statearr_20866_20980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (2))){
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20864__$1,(4),from);
} else {
if((state_val_20865 === (3))){
var inst_20862 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20864__$1,inst_20862);
} else {
if((state_val_20865 === (4))){
var inst_20845 = (state_20864[(7)]);
var inst_20845__$1 = (state_20864[(2)]);
var inst_20846 = (inst_20845__$1 == null);
var state_20864__$1 = (function (){var statearr_20867 = state_20864;
(statearr_20867[(7)] = inst_20845__$1);

return statearr_20867;
})();
if(cljs.core.truth_(inst_20846)){
var statearr_20868_20981 = state_20864__$1;
(statearr_20868_20981[(1)] = (5));

} else {
var statearr_20869_20982 = state_20864__$1;
(statearr_20869_20982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (5))){
var inst_20848 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20864__$1 = state_20864;
var statearr_20870_20983 = state_20864__$1;
(statearr_20870_20983[(2)] = inst_20848);

(statearr_20870_20983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (6))){
var inst_20845 = (state_20864[(7)]);
var inst_20850 = (state_20864[(8)]);
var inst_20850__$1 = cljs.core.async.chan.call(null,(1));
var inst_20851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20852 = [inst_20845,inst_20850__$1];
var inst_20853 = (new cljs.core.PersistentVector(null,2,(5),inst_20851,inst_20852,null));
var state_20864__$1 = (function (){var statearr_20871 = state_20864;
(statearr_20871[(8)] = inst_20850__$1);

return statearr_20871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20864__$1,(8),jobs,inst_20853);
} else {
if((state_val_20865 === (7))){
var inst_20860 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20872_20984 = state_20864__$1;
(statearr_20872_20984[(2)] = inst_20860);

(statearr_20872_20984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (8))){
var inst_20850 = (state_20864[(8)]);
var inst_20855 = (state_20864[(2)]);
var state_20864__$1 = (function (){var statearr_20873 = state_20864;
(statearr_20873[(9)] = inst_20855);

return statearr_20873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20864__$1,(9),results,inst_20850);
} else {
if((state_val_20865 === (9))){
var inst_20857 = (state_20864[(2)]);
var state_20864__$1 = (function (){var statearr_20874 = state_20864;
(statearr_20874[(10)] = inst_20857);

return statearr_20874;
})();
var statearr_20875_20985 = state_20864__$1;
(statearr_20875_20985[(2)] = null);

(statearr_20875_20985[(1)] = (2));


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
});})(c__17745__auto___20979,jobs,results,process,async))
;
return ((function (switch__17683__auto__,c__17745__auto___20979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0 = (function (){
var statearr_20879 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__);

(statearr_20879[(1)] = (1));

return statearr_20879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1 = (function (state_20864){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_20864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e20880){if((e20880 instanceof Object)){
var ex__17687__auto__ = e20880;
var statearr_20881_20986 = state_20864;
(statearr_20881_20986[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20987 = state_20864;
state_20864 = G__20987;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = function(state_20864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1.call(this,state_20864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___20979,jobs,results,process,async))
})();
var state__17747__auto__ = (function (){var statearr_20882 = f__17746__auto__.call(null);
(statearr_20882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___20979);

return statearr_20882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___20979,jobs,results,process,async))
);


var c__17745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto__,jobs,results,process,async){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto__,jobs,results,process,async){
return (function (state_20920){
var state_val_20921 = (state_20920[(1)]);
if((state_val_20921 === (7))){
var inst_20916 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20922_20988 = state_20920__$1;
(statearr_20922_20988[(2)] = inst_20916);

(statearr_20922_20988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (20))){
var state_20920__$1 = state_20920;
var statearr_20923_20989 = state_20920__$1;
(statearr_20923_20989[(2)] = null);

(statearr_20923_20989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (1))){
var state_20920__$1 = state_20920;
var statearr_20924_20990 = state_20920__$1;
(statearr_20924_20990[(2)] = null);

(statearr_20924_20990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (4))){
var inst_20885 = (state_20920[(7)]);
var inst_20885__$1 = (state_20920[(2)]);
var inst_20886 = (inst_20885__$1 == null);
var state_20920__$1 = (function (){var statearr_20925 = state_20920;
(statearr_20925[(7)] = inst_20885__$1);

return statearr_20925;
})();
if(cljs.core.truth_(inst_20886)){
var statearr_20926_20991 = state_20920__$1;
(statearr_20926_20991[(1)] = (5));

} else {
var statearr_20927_20992 = state_20920__$1;
(statearr_20927_20992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (15))){
var inst_20898 = (state_20920[(8)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20920__$1,(18),to,inst_20898);
} else {
if((state_val_20921 === (21))){
var inst_20911 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20928_20993 = state_20920__$1;
(statearr_20928_20993[(2)] = inst_20911);

(statearr_20928_20993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (13))){
var inst_20913 = (state_20920[(2)]);
var state_20920__$1 = (function (){var statearr_20929 = state_20920;
(statearr_20929[(9)] = inst_20913);

return statearr_20929;
})();
var statearr_20930_20994 = state_20920__$1;
(statearr_20930_20994[(2)] = null);

(statearr_20930_20994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (6))){
var inst_20885 = (state_20920[(7)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20920__$1,(11),inst_20885);
} else {
if((state_val_20921 === (17))){
var inst_20906 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
if(cljs.core.truth_(inst_20906)){
var statearr_20931_20995 = state_20920__$1;
(statearr_20931_20995[(1)] = (19));

} else {
var statearr_20932_20996 = state_20920__$1;
(statearr_20932_20996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (3))){
var inst_20918 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20920__$1,inst_20918);
} else {
if((state_val_20921 === (12))){
var inst_20895 = (state_20920[(10)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20920__$1,(14),inst_20895);
} else {
if((state_val_20921 === (2))){
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20920__$1,(4),results);
} else {
if((state_val_20921 === (19))){
var state_20920__$1 = state_20920;
var statearr_20933_20997 = state_20920__$1;
(statearr_20933_20997[(2)] = null);

(statearr_20933_20997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (11))){
var inst_20895 = (state_20920[(2)]);
var state_20920__$1 = (function (){var statearr_20934 = state_20920;
(statearr_20934[(10)] = inst_20895);

return statearr_20934;
})();
var statearr_20935_20998 = state_20920__$1;
(statearr_20935_20998[(2)] = null);

(statearr_20935_20998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (9))){
var state_20920__$1 = state_20920;
var statearr_20936_20999 = state_20920__$1;
(statearr_20936_20999[(2)] = null);

(statearr_20936_20999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (5))){
var state_20920__$1 = state_20920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20937_21000 = state_20920__$1;
(statearr_20937_21000[(1)] = (8));

} else {
var statearr_20938_21001 = state_20920__$1;
(statearr_20938_21001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (14))){
var inst_20900 = (state_20920[(11)]);
var inst_20898 = (state_20920[(8)]);
var inst_20898__$1 = (state_20920[(2)]);
var inst_20899 = (inst_20898__$1 == null);
var inst_20900__$1 = cljs.core.not.call(null,inst_20899);
var state_20920__$1 = (function (){var statearr_20939 = state_20920;
(statearr_20939[(11)] = inst_20900__$1);

(statearr_20939[(8)] = inst_20898__$1);

return statearr_20939;
})();
if(inst_20900__$1){
var statearr_20940_21002 = state_20920__$1;
(statearr_20940_21002[(1)] = (15));

} else {
var statearr_20941_21003 = state_20920__$1;
(statearr_20941_21003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (16))){
var inst_20900 = (state_20920[(11)]);
var state_20920__$1 = state_20920;
var statearr_20942_21004 = state_20920__$1;
(statearr_20942_21004[(2)] = inst_20900);

(statearr_20942_21004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (10))){
var inst_20892 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20943_21005 = state_20920__$1;
(statearr_20943_21005[(2)] = inst_20892);

(statearr_20943_21005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (18))){
var inst_20903 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20944_21006 = state_20920__$1;
(statearr_20944_21006[(2)] = inst_20903);

(statearr_20944_21006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (8))){
var inst_20889 = cljs.core.async.close_BANG_.call(null,to);
var state_20920__$1 = state_20920;
var statearr_20945_21007 = state_20920__$1;
(statearr_20945_21007[(2)] = inst_20889);

(statearr_20945_21007[(1)] = (10));


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
});})(c__17745__auto__,jobs,results,process,async))
;
return ((function (switch__17683__auto__,c__17745__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0 = (function (){
var statearr_20949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__);

(statearr_20949[(1)] = (1));

return statearr_20949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1 = (function (state_20920){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_20920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e20950){if((e20950 instanceof Object)){
var ex__17687__auto__ = e20950;
var statearr_20951_21008 = state_20920;
(statearr_20951_21008[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21009 = state_20920;
state_20920 = G__21009;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__ = function(state_20920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1.call(this,state_20920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto__,jobs,results,process,async))
})();
var state__17747__auto__ = (function (){var statearr_20952 = f__17746__auto__.call(null);
(statearr_20952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto__);

return statearr_20952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto__,jobs,results,process,async))
);

return c__17745__auto__;
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
var G__21011 = arguments.length;
switch (G__21011) {
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
var G__21014 = arguments.length;
switch (G__21014) {
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
var G__21017 = arguments.length;
switch (G__21017) {
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
var c__17745__auto___21069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___21069,tc,fc){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___21069,tc,fc){
return (function (state_21043){
var state_val_21044 = (state_21043[(1)]);
if((state_val_21044 === (7))){
var inst_21039 = (state_21043[(2)]);
var state_21043__$1 = state_21043;
var statearr_21045_21070 = state_21043__$1;
(statearr_21045_21070[(2)] = inst_21039);

(statearr_21045_21070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (1))){
var state_21043__$1 = state_21043;
var statearr_21046_21071 = state_21043__$1;
(statearr_21046_21071[(2)] = null);

(statearr_21046_21071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (4))){
var inst_21020 = (state_21043[(7)]);
var inst_21020__$1 = (state_21043[(2)]);
var inst_21021 = (inst_21020__$1 == null);
var state_21043__$1 = (function (){var statearr_21047 = state_21043;
(statearr_21047[(7)] = inst_21020__$1);

return statearr_21047;
})();
if(cljs.core.truth_(inst_21021)){
var statearr_21048_21072 = state_21043__$1;
(statearr_21048_21072[(1)] = (5));

} else {
var statearr_21049_21073 = state_21043__$1;
(statearr_21049_21073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (13))){
var state_21043__$1 = state_21043;
var statearr_21050_21074 = state_21043__$1;
(statearr_21050_21074[(2)] = null);

(statearr_21050_21074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (6))){
var inst_21020 = (state_21043[(7)]);
var inst_21026 = p.call(null,inst_21020);
var state_21043__$1 = state_21043;
if(cljs.core.truth_(inst_21026)){
var statearr_21051_21075 = state_21043__$1;
(statearr_21051_21075[(1)] = (9));

} else {
var statearr_21052_21076 = state_21043__$1;
(statearr_21052_21076[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (3))){
var inst_21041 = (state_21043[(2)]);
var state_21043__$1 = state_21043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21043__$1,inst_21041);
} else {
if((state_val_21044 === (12))){
var state_21043__$1 = state_21043;
var statearr_21053_21077 = state_21043__$1;
(statearr_21053_21077[(2)] = null);

(statearr_21053_21077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (2))){
var state_21043__$1 = state_21043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21043__$1,(4),ch);
} else {
if((state_val_21044 === (11))){
var inst_21020 = (state_21043[(7)]);
var inst_21030 = (state_21043[(2)]);
var state_21043__$1 = state_21043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21043__$1,(8),inst_21030,inst_21020);
} else {
if((state_val_21044 === (9))){
var state_21043__$1 = state_21043;
var statearr_21054_21078 = state_21043__$1;
(statearr_21054_21078[(2)] = tc);

(statearr_21054_21078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (5))){
var inst_21023 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21024 = cljs.core.async.close_BANG_.call(null,fc);
var state_21043__$1 = (function (){var statearr_21055 = state_21043;
(statearr_21055[(8)] = inst_21023);

return statearr_21055;
})();
var statearr_21056_21079 = state_21043__$1;
(statearr_21056_21079[(2)] = inst_21024);

(statearr_21056_21079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (14))){
var inst_21037 = (state_21043[(2)]);
var state_21043__$1 = state_21043;
var statearr_21057_21080 = state_21043__$1;
(statearr_21057_21080[(2)] = inst_21037);

(statearr_21057_21080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (10))){
var state_21043__$1 = state_21043;
var statearr_21058_21081 = state_21043__$1;
(statearr_21058_21081[(2)] = fc);

(statearr_21058_21081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21044 === (8))){
var inst_21032 = (state_21043[(2)]);
var state_21043__$1 = state_21043;
if(cljs.core.truth_(inst_21032)){
var statearr_21059_21082 = state_21043__$1;
(statearr_21059_21082[(1)] = (12));

} else {
var statearr_21060_21083 = state_21043__$1;
(statearr_21060_21083[(1)] = (13));

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
});})(c__17745__auto___21069,tc,fc))
;
return ((function (switch__17683__auto__,c__17745__auto___21069,tc,fc){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_21064 = [null,null,null,null,null,null,null,null,null];
(statearr_21064[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_21064[(1)] = (1));

return statearr_21064;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_21043){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_21043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e21065){if((e21065 instanceof Object)){
var ex__17687__auto__ = e21065;
var statearr_21066_21084 = state_21043;
(statearr_21066_21084[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21085 = state_21043;
state_21043 = G__21085;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_21043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_21043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___21069,tc,fc))
})();
var state__17747__auto__ = (function (){var statearr_21067 = f__17746__auto__.call(null);
(statearr_21067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___21069);

return statearr_21067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___21069,tc,fc))
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
var c__17745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto__){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto__){
return (function (state_21132){
var state_val_21133 = (state_21132[(1)]);
if((state_val_21133 === (1))){
var inst_21118 = init;
var state_21132__$1 = (function (){var statearr_21134 = state_21132;
(statearr_21134[(7)] = inst_21118);

return statearr_21134;
})();
var statearr_21135_21150 = state_21132__$1;
(statearr_21135_21150[(2)] = null);

(statearr_21135_21150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (2))){
var state_21132__$1 = state_21132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21132__$1,(4),ch);
} else {
if((state_val_21133 === (3))){
var inst_21130 = (state_21132[(2)]);
var state_21132__$1 = state_21132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21132__$1,inst_21130);
} else {
if((state_val_21133 === (4))){
var inst_21121 = (state_21132[(8)]);
var inst_21121__$1 = (state_21132[(2)]);
var inst_21122 = (inst_21121__$1 == null);
var state_21132__$1 = (function (){var statearr_21136 = state_21132;
(statearr_21136[(8)] = inst_21121__$1);

return statearr_21136;
})();
if(cljs.core.truth_(inst_21122)){
var statearr_21137_21151 = state_21132__$1;
(statearr_21137_21151[(1)] = (5));

} else {
var statearr_21138_21152 = state_21132__$1;
(statearr_21138_21152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (5))){
var inst_21118 = (state_21132[(7)]);
var state_21132__$1 = state_21132;
var statearr_21139_21153 = state_21132__$1;
(statearr_21139_21153[(2)] = inst_21118);

(statearr_21139_21153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (6))){
var inst_21118 = (state_21132[(7)]);
var inst_21121 = (state_21132[(8)]);
var inst_21125 = f.call(null,inst_21118,inst_21121);
var inst_21118__$1 = inst_21125;
var state_21132__$1 = (function (){var statearr_21140 = state_21132;
(statearr_21140[(7)] = inst_21118__$1);

return statearr_21140;
})();
var statearr_21141_21154 = state_21132__$1;
(statearr_21141_21154[(2)] = null);

(statearr_21141_21154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (7))){
var inst_21128 = (state_21132[(2)]);
var state_21132__$1 = state_21132;
var statearr_21142_21155 = state_21132__$1;
(statearr_21142_21155[(2)] = inst_21128);

(statearr_21142_21155[(1)] = (3));


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
});})(c__17745__auto__))
;
return ((function (switch__17683__auto__,c__17745__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17684__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17684__auto____0 = (function (){
var statearr_21146 = [null,null,null,null,null,null,null,null,null];
(statearr_21146[(0)] = cljs$core$async$reduce_$_state_machine__17684__auto__);

(statearr_21146[(1)] = (1));

return statearr_21146;
});
var cljs$core$async$reduce_$_state_machine__17684__auto____1 = (function (state_21132){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_21132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e21147){if((e21147 instanceof Object)){
var ex__17687__auto__ = e21147;
var statearr_21148_21156 = state_21132;
(statearr_21148_21156[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21157 = state_21132;
state_21132 = G__21157;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17684__auto__ = function(state_21132){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17684__auto____1.call(this,state_21132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17684__auto____0;
cljs$core$async$reduce_$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17684__auto____1;
return cljs$core$async$reduce_$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto__))
})();
var state__17747__auto__ = (function (){var statearr_21149 = f__17746__auto__.call(null);
(statearr_21149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto__);

return statearr_21149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto__))
);

return c__17745__auto__;
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
var G__21159 = arguments.length;
switch (G__21159) {
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
var c__17745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto__){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto__){
return (function (state_21184){
var state_val_21185 = (state_21184[(1)]);
if((state_val_21185 === (7))){
var inst_21166 = (state_21184[(2)]);
var state_21184__$1 = state_21184;
var statearr_21186_21210 = state_21184__$1;
(statearr_21186_21210[(2)] = inst_21166);

(statearr_21186_21210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (1))){
var inst_21160 = cljs.core.seq.call(null,coll);
var inst_21161 = inst_21160;
var state_21184__$1 = (function (){var statearr_21187 = state_21184;
(statearr_21187[(7)] = inst_21161);

return statearr_21187;
})();
var statearr_21188_21211 = state_21184__$1;
(statearr_21188_21211[(2)] = null);

(statearr_21188_21211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (4))){
var inst_21161 = (state_21184[(7)]);
var inst_21164 = cljs.core.first.call(null,inst_21161);
var state_21184__$1 = state_21184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21184__$1,(7),ch,inst_21164);
} else {
if((state_val_21185 === (13))){
var inst_21178 = (state_21184[(2)]);
var state_21184__$1 = state_21184;
var statearr_21189_21212 = state_21184__$1;
(statearr_21189_21212[(2)] = inst_21178);

(statearr_21189_21212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (6))){
var inst_21169 = (state_21184[(2)]);
var state_21184__$1 = state_21184;
if(cljs.core.truth_(inst_21169)){
var statearr_21190_21213 = state_21184__$1;
(statearr_21190_21213[(1)] = (8));

} else {
var statearr_21191_21214 = state_21184__$1;
(statearr_21191_21214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (3))){
var inst_21182 = (state_21184[(2)]);
var state_21184__$1 = state_21184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21184__$1,inst_21182);
} else {
if((state_val_21185 === (12))){
var state_21184__$1 = state_21184;
var statearr_21192_21215 = state_21184__$1;
(statearr_21192_21215[(2)] = null);

(statearr_21192_21215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (2))){
var inst_21161 = (state_21184[(7)]);
var state_21184__$1 = state_21184;
if(cljs.core.truth_(inst_21161)){
var statearr_21193_21216 = state_21184__$1;
(statearr_21193_21216[(1)] = (4));

} else {
var statearr_21194_21217 = state_21184__$1;
(statearr_21194_21217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (11))){
var inst_21175 = cljs.core.async.close_BANG_.call(null,ch);
var state_21184__$1 = state_21184;
var statearr_21195_21218 = state_21184__$1;
(statearr_21195_21218[(2)] = inst_21175);

(statearr_21195_21218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (9))){
var state_21184__$1 = state_21184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21196_21219 = state_21184__$1;
(statearr_21196_21219[(1)] = (11));

} else {
var statearr_21197_21220 = state_21184__$1;
(statearr_21197_21220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (5))){
var inst_21161 = (state_21184[(7)]);
var state_21184__$1 = state_21184;
var statearr_21198_21221 = state_21184__$1;
(statearr_21198_21221[(2)] = inst_21161);

(statearr_21198_21221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (10))){
var inst_21180 = (state_21184[(2)]);
var state_21184__$1 = state_21184;
var statearr_21199_21222 = state_21184__$1;
(statearr_21199_21222[(2)] = inst_21180);

(statearr_21199_21222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21185 === (8))){
var inst_21161 = (state_21184[(7)]);
var inst_21171 = cljs.core.next.call(null,inst_21161);
var inst_21161__$1 = inst_21171;
var state_21184__$1 = (function (){var statearr_21200 = state_21184;
(statearr_21200[(7)] = inst_21161__$1);

return statearr_21200;
})();
var statearr_21201_21223 = state_21184__$1;
(statearr_21201_21223[(2)] = null);

(statearr_21201_21223[(1)] = (2));


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
});})(c__17745__auto__))
;
return ((function (switch__17683__auto__,c__17745__auto__){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_21205 = [null,null,null,null,null,null,null,null];
(statearr_21205[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_21205[(1)] = (1));

return statearr_21205;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_21184){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_21184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e21206){if((e21206 instanceof Object)){
var ex__17687__auto__ = e21206;
var statearr_21207_21224 = state_21184;
(statearr_21207_21224[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21225 = state_21184;
state_21184 = G__21225;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_21184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_21184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto__))
})();
var state__17747__auto__ = (function (){var statearr_21208 = f__17746__auto__.call(null);
(statearr_21208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto__);

return statearr_21208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto__))
);

return c__17745__auto__;
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

cljs.core.async.Mux = (function (){var obj21227 = {};
return obj21227;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4327__auto__ = _;
if(and__4327__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4975__auto__ = (((_ == null))?null:_);
return (function (){var or__4339__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj21229 = {};
return obj21229;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
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
if(typeof cljs.core.async.t21451 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21451 = (function (mult,ch,cs,meta21452){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21452 = meta21452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21453,meta21452__$1){
var self__ = this;
var _21453__$1 = this;
return (new cljs.core.async.t21451(self__.mult,self__.ch,self__.cs,meta21452__$1));
});})(cs))
;

cljs.core.async.t21451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21453){
var self__ = this;
var _21453__$1 = this;
return self__.meta21452;
});})(cs))
;

cljs.core.async.t21451.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21451.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21451.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21451.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21451.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21451.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21452","meta21452",-1567012690,null)], null);
});})(cs))
;

cljs.core.async.t21451.cljs$lang$type = true;

cljs.core.async.t21451.cljs$lang$ctorStr = "cljs.core.async/t21451";

cljs.core.async.t21451.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t21451");
});})(cs))
;

cljs.core.async.__GT_t21451 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t21451(mult__$1,ch__$1,cs__$1,meta21452){
return (new cljs.core.async.t21451(mult__$1,ch__$1,cs__$1,meta21452));
});})(cs))
;

}

return (new cljs.core.async.t21451(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17745__auto___21672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___21672,cs,m,dchan,dctr,done){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___21672,cs,m,dchan,dctr,done){
return (function (state_21584){
var state_val_21585 = (state_21584[(1)]);
if((state_val_21585 === (7))){
var inst_21580 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21586_21673 = state_21584__$1;
(statearr_21586_21673[(2)] = inst_21580);

(statearr_21586_21673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (20))){
var inst_21485 = (state_21584[(7)]);
var inst_21495 = cljs.core.first.call(null,inst_21485);
var inst_21496 = cljs.core.nth.call(null,inst_21495,(0),null);
var inst_21497 = cljs.core.nth.call(null,inst_21495,(1),null);
var state_21584__$1 = (function (){var statearr_21587 = state_21584;
(statearr_21587[(8)] = inst_21496);

return statearr_21587;
})();
if(cljs.core.truth_(inst_21497)){
var statearr_21588_21674 = state_21584__$1;
(statearr_21588_21674[(1)] = (22));

} else {
var statearr_21589_21675 = state_21584__$1;
(statearr_21589_21675[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (27))){
var inst_21532 = (state_21584[(9)]);
var inst_21527 = (state_21584[(10)]);
var inst_21456 = (state_21584[(11)]);
var inst_21525 = (state_21584[(12)]);
var inst_21532__$1 = cljs.core._nth.call(null,inst_21525,inst_21527);
var inst_21533 = cljs.core.async.put_BANG_.call(null,inst_21532__$1,inst_21456,done);
var state_21584__$1 = (function (){var statearr_21590 = state_21584;
(statearr_21590[(9)] = inst_21532__$1);

return statearr_21590;
})();
if(cljs.core.truth_(inst_21533)){
var statearr_21591_21676 = state_21584__$1;
(statearr_21591_21676[(1)] = (30));

} else {
var statearr_21592_21677 = state_21584__$1;
(statearr_21592_21677[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (1))){
var state_21584__$1 = state_21584;
var statearr_21593_21678 = state_21584__$1;
(statearr_21593_21678[(2)] = null);

(statearr_21593_21678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (24))){
var inst_21485 = (state_21584[(7)]);
var inst_21502 = (state_21584[(2)]);
var inst_21503 = cljs.core.next.call(null,inst_21485);
var inst_21465 = inst_21503;
var inst_21466 = null;
var inst_21467 = (0);
var inst_21468 = (0);
var state_21584__$1 = (function (){var statearr_21594 = state_21584;
(statearr_21594[(13)] = inst_21465);

(statearr_21594[(14)] = inst_21468);

(statearr_21594[(15)] = inst_21467);

(statearr_21594[(16)] = inst_21502);

(statearr_21594[(17)] = inst_21466);

return statearr_21594;
})();
var statearr_21595_21679 = state_21584__$1;
(statearr_21595_21679[(2)] = null);

(statearr_21595_21679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (39))){
var state_21584__$1 = state_21584;
var statearr_21599_21680 = state_21584__$1;
(statearr_21599_21680[(2)] = null);

(statearr_21599_21680[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (4))){
var inst_21456 = (state_21584[(11)]);
var inst_21456__$1 = (state_21584[(2)]);
var inst_21457 = (inst_21456__$1 == null);
var state_21584__$1 = (function (){var statearr_21600 = state_21584;
(statearr_21600[(11)] = inst_21456__$1);

return statearr_21600;
})();
if(cljs.core.truth_(inst_21457)){
var statearr_21601_21681 = state_21584__$1;
(statearr_21601_21681[(1)] = (5));

} else {
var statearr_21602_21682 = state_21584__$1;
(statearr_21602_21682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (15))){
var inst_21465 = (state_21584[(13)]);
var inst_21468 = (state_21584[(14)]);
var inst_21467 = (state_21584[(15)]);
var inst_21466 = (state_21584[(17)]);
var inst_21481 = (state_21584[(2)]);
var inst_21482 = (inst_21468 + (1));
var tmp21596 = inst_21465;
var tmp21597 = inst_21467;
var tmp21598 = inst_21466;
var inst_21465__$1 = tmp21596;
var inst_21466__$1 = tmp21598;
var inst_21467__$1 = tmp21597;
var inst_21468__$1 = inst_21482;
var state_21584__$1 = (function (){var statearr_21603 = state_21584;
(statearr_21603[(13)] = inst_21465__$1);

(statearr_21603[(18)] = inst_21481);

(statearr_21603[(14)] = inst_21468__$1);

(statearr_21603[(15)] = inst_21467__$1);

(statearr_21603[(17)] = inst_21466__$1);

return statearr_21603;
})();
var statearr_21604_21683 = state_21584__$1;
(statearr_21604_21683[(2)] = null);

(statearr_21604_21683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (21))){
var inst_21506 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21608_21684 = state_21584__$1;
(statearr_21608_21684[(2)] = inst_21506);

(statearr_21608_21684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (31))){
var inst_21532 = (state_21584[(9)]);
var inst_21536 = done.call(null,null);
var inst_21537 = cljs.core.async.untap_STAR_.call(null,m,inst_21532);
var state_21584__$1 = (function (){var statearr_21609 = state_21584;
(statearr_21609[(19)] = inst_21536);

return statearr_21609;
})();
var statearr_21610_21685 = state_21584__$1;
(statearr_21610_21685[(2)] = inst_21537);

(statearr_21610_21685[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (32))){
var inst_21524 = (state_21584[(20)]);
var inst_21527 = (state_21584[(10)]);
var inst_21525 = (state_21584[(12)]);
var inst_21526 = (state_21584[(21)]);
var inst_21539 = (state_21584[(2)]);
var inst_21540 = (inst_21527 + (1));
var tmp21605 = inst_21524;
var tmp21606 = inst_21525;
var tmp21607 = inst_21526;
var inst_21524__$1 = tmp21605;
var inst_21525__$1 = tmp21606;
var inst_21526__$1 = tmp21607;
var inst_21527__$1 = inst_21540;
var state_21584__$1 = (function (){var statearr_21611 = state_21584;
(statearr_21611[(20)] = inst_21524__$1);

(statearr_21611[(10)] = inst_21527__$1);

(statearr_21611[(12)] = inst_21525__$1);

(statearr_21611[(22)] = inst_21539);

(statearr_21611[(21)] = inst_21526__$1);

return statearr_21611;
})();
var statearr_21612_21686 = state_21584__$1;
(statearr_21612_21686[(2)] = null);

(statearr_21612_21686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (40))){
var inst_21552 = (state_21584[(23)]);
var inst_21556 = done.call(null,null);
var inst_21557 = cljs.core.async.untap_STAR_.call(null,m,inst_21552);
var state_21584__$1 = (function (){var statearr_21613 = state_21584;
(statearr_21613[(24)] = inst_21556);

return statearr_21613;
})();
var statearr_21614_21687 = state_21584__$1;
(statearr_21614_21687[(2)] = inst_21557);

(statearr_21614_21687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (33))){
var inst_21543 = (state_21584[(25)]);
var inst_21545 = cljs.core.chunked_seq_QMARK_.call(null,inst_21543);
var state_21584__$1 = state_21584;
if(inst_21545){
var statearr_21615_21688 = state_21584__$1;
(statearr_21615_21688[(1)] = (36));

} else {
var statearr_21616_21689 = state_21584__$1;
(statearr_21616_21689[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (13))){
var inst_21475 = (state_21584[(26)]);
var inst_21478 = cljs.core.async.close_BANG_.call(null,inst_21475);
var state_21584__$1 = state_21584;
var statearr_21617_21690 = state_21584__$1;
(statearr_21617_21690[(2)] = inst_21478);

(statearr_21617_21690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (22))){
var inst_21496 = (state_21584[(8)]);
var inst_21499 = cljs.core.async.close_BANG_.call(null,inst_21496);
var state_21584__$1 = state_21584;
var statearr_21618_21691 = state_21584__$1;
(statearr_21618_21691[(2)] = inst_21499);

(statearr_21618_21691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (36))){
var inst_21543 = (state_21584[(25)]);
var inst_21547 = cljs.core.chunk_first.call(null,inst_21543);
var inst_21548 = cljs.core.chunk_rest.call(null,inst_21543);
var inst_21549 = cljs.core.count.call(null,inst_21547);
var inst_21524 = inst_21548;
var inst_21525 = inst_21547;
var inst_21526 = inst_21549;
var inst_21527 = (0);
var state_21584__$1 = (function (){var statearr_21619 = state_21584;
(statearr_21619[(20)] = inst_21524);

(statearr_21619[(10)] = inst_21527);

(statearr_21619[(12)] = inst_21525);

(statearr_21619[(21)] = inst_21526);

return statearr_21619;
})();
var statearr_21620_21692 = state_21584__$1;
(statearr_21620_21692[(2)] = null);

(statearr_21620_21692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (41))){
var inst_21543 = (state_21584[(25)]);
var inst_21559 = (state_21584[(2)]);
var inst_21560 = cljs.core.next.call(null,inst_21543);
var inst_21524 = inst_21560;
var inst_21525 = null;
var inst_21526 = (0);
var inst_21527 = (0);
var state_21584__$1 = (function (){var statearr_21621 = state_21584;
(statearr_21621[(27)] = inst_21559);

(statearr_21621[(20)] = inst_21524);

(statearr_21621[(10)] = inst_21527);

(statearr_21621[(12)] = inst_21525);

(statearr_21621[(21)] = inst_21526);

return statearr_21621;
})();
var statearr_21622_21693 = state_21584__$1;
(statearr_21622_21693[(2)] = null);

(statearr_21622_21693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (43))){
var state_21584__$1 = state_21584;
var statearr_21623_21694 = state_21584__$1;
(statearr_21623_21694[(2)] = null);

(statearr_21623_21694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (29))){
var inst_21568 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21624_21695 = state_21584__$1;
(statearr_21624_21695[(2)] = inst_21568);

(statearr_21624_21695[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (44))){
var inst_21577 = (state_21584[(2)]);
var state_21584__$1 = (function (){var statearr_21625 = state_21584;
(statearr_21625[(28)] = inst_21577);

return statearr_21625;
})();
var statearr_21626_21696 = state_21584__$1;
(statearr_21626_21696[(2)] = null);

(statearr_21626_21696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (6))){
var inst_21516 = (state_21584[(29)]);
var inst_21515 = cljs.core.deref.call(null,cs);
var inst_21516__$1 = cljs.core.keys.call(null,inst_21515);
var inst_21517 = cljs.core.count.call(null,inst_21516__$1);
var inst_21518 = cljs.core.reset_BANG_.call(null,dctr,inst_21517);
var inst_21523 = cljs.core.seq.call(null,inst_21516__$1);
var inst_21524 = inst_21523;
var inst_21525 = null;
var inst_21526 = (0);
var inst_21527 = (0);
var state_21584__$1 = (function (){var statearr_21627 = state_21584;
(statearr_21627[(20)] = inst_21524);

(statearr_21627[(10)] = inst_21527);

(statearr_21627[(29)] = inst_21516__$1);

(statearr_21627[(12)] = inst_21525);

(statearr_21627[(30)] = inst_21518);

(statearr_21627[(21)] = inst_21526);

return statearr_21627;
})();
var statearr_21628_21697 = state_21584__$1;
(statearr_21628_21697[(2)] = null);

(statearr_21628_21697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (28))){
var inst_21524 = (state_21584[(20)]);
var inst_21543 = (state_21584[(25)]);
var inst_21543__$1 = cljs.core.seq.call(null,inst_21524);
var state_21584__$1 = (function (){var statearr_21629 = state_21584;
(statearr_21629[(25)] = inst_21543__$1);

return statearr_21629;
})();
if(inst_21543__$1){
var statearr_21630_21698 = state_21584__$1;
(statearr_21630_21698[(1)] = (33));

} else {
var statearr_21631_21699 = state_21584__$1;
(statearr_21631_21699[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (25))){
var inst_21527 = (state_21584[(10)]);
var inst_21526 = (state_21584[(21)]);
var inst_21529 = (inst_21527 < inst_21526);
var inst_21530 = inst_21529;
var state_21584__$1 = state_21584;
if(cljs.core.truth_(inst_21530)){
var statearr_21632_21700 = state_21584__$1;
(statearr_21632_21700[(1)] = (27));

} else {
var statearr_21633_21701 = state_21584__$1;
(statearr_21633_21701[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (34))){
var state_21584__$1 = state_21584;
var statearr_21634_21702 = state_21584__$1;
(statearr_21634_21702[(2)] = null);

(statearr_21634_21702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (17))){
var state_21584__$1 = state_21584;
var statearr_21635_21703 = state_21584__$1;
(statearr_21635_21703[(2)] = null);

(statearr_21635_21703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (3))){
var inst_21582 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21584__$1,inst_21582);
} else {
if((state_val_21585 === (12))){
var inst_21511 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21636_21704 = state_21584__$1;
(statearr_21636_21704[(2)] = inst_21511);

(statearr_21636_21704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (2))){
var state_21584__$1 = state_21584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21584__$1,(4),ch);
} else {
if((state_val_21585 === (23))){
var state_21584__$1 = state_21584;
var statearr_21637_21705 = state_21584__$1;
(statearr_21637_21705[(2)] = null);

(statearr_21637_21705[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (35))){
var inst_21566 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21638_21706 = state_21584__$1;
(statearr_21638_21706[(2)] = inst_21566);

(statearr_21638_21706[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (19))){
var inst_21485 = (state_21584[(7)]);
var inst_21489 = cljs.core.chunk_first.call(null,inst_21485);
var inst_21490 = cljs.core.chunk_rest.call(null,inst_21485);
var inst_21491 = cljs.core.count.call(null,inst_21489);
var inst_21465 = inst_21490;
var inst_21466 = inst_21489;
var inst_21467 = inst_21491;
var inst_21468 = (0);
var state_21584__$1 = (function (){var statearr_21639 = state_21584;
(statearr_21639[(13)] = inst_21465);

(statearr_21639[(14)] = inst_21468);

(statearr_21639[(15)] = inst_21467);

(statearr_21639[(17)] = inst_21466);

return statearr_21639;
})();
var statearr_21640_21707 = state_21584__$1;
(statearr_21640_21707[(2)] = null);

(statearr_21640_21707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (11))){
var inst_21465 = (state_21584[(13)]);
var inst_21485 = (state_21584[(7)]);
var inst_21485__$1 = cljs.core.seq.call(null,inst_21465);
var state_21584__$1 = (function (){var statearr_21641 = state_21584;
(statearr_21641[(7)] = inst_21485__$1);

return statearr_21641;
})();
if(inst_21485__$1){
var statearr_21642_21708 = state_21584__$1;
(statearr_21642_21708[(1)] = (16));

} else {
var statearr_21643_21709 = state_21584__$1;
(statearr_21643_21709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (9))){
var inst_21513 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21644_21710 = state_21584__$1;
(statearr_21644_21710[(2)] = inst_21513);

(statearr_21644_21710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (5))){
var inst_21463 = cljs.core.deref.call(null,cs);
var inst_21464 = cljs.core.seq.call(null,inst_21463);
var inst_21465 = inst_21464;
var inst_21466 = null;
var inst_21467 = (0);
var inst_21468 = (0);
var state_21584__$1 = (function (){var statearr_21645 = state_21584;
(statearr_21645[(13)] = inst_21465);

(statearr_21645[(14)] = inst_21468);

(statearr_21645[(15)] = inst_21467);

(statearr_21645[(17)] = inst_21466);

return statearr_21645;
})();
var statearr_21646_21711 = state_21584__$1;
(statearr_21646_21711[(2)] = null);

(statearr_21646_21711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (14))){
var state_21584__$1 = state_21584;
var statearr_21647_21712 = state_21584__$1;
(statearr_21647_21712[(2)] = null);

(statearr_21647_21712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (45))){
var inst_21574 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21648_21713 = state_21584__$1;
(statearr_21648_21713[(2)] = inst_21574);

(statearr_21648_21713[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (26))){
var inst_21516 = (state_21584[(29)]);
var inst_21570 = (state_21584[(2)]);
var inst_21571 = cljs.core.seq.call(null,inst_21516);
var state_21584__$1 = (function (){var statearr_21649 = state_21584;
(statearr_21649[(31)] = inst_21570);

return statearr_21649;
})();
if(inst_21571){
var statearr_21650_21714 = state_21584__$1;
(statearr_21650_21714[(1)] = (42));

} else {
var statearr_21651_21715 = state_21584__$1;
(statearr_21651_21715[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (16))){
var inst_21485 = (state_21584[(7)]);
var inst_21487 = cljs.core.chunked_seq_QMARK_.call(null,inst_21485);
var state_21584__$1 = state_21584;
if(inst_21487){
var statearr_21652_21716 = state_21584__$1;
(statearr_21652_21716[(1)] = (19));

} else {
var statearr_21653_21717 = state_21584__$1;
(statearr_21653_21717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (38))){
var inst_21563 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21654_21718 = state_21584__$1;
(statearr_21654_21718[(2)] = inst_21563);

(statearr_21654_21718[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (30))){
var state_21584__$1 = state_21584;
var statearr_21655_21719 = state_21584__$1;
(statearr_21655_21719[(2)] = null);

(statearr_21655_21719[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (10))){
var inst_21468 = (state_21584[(14)]);
var inst_21466 = (state_21584[(17)]);
var inst_21474 = cljs.core._nth.call(null,inst_21466,inst_21468);
var inst_21475 = cljs.core.nth.call(null,inst_21474,(0),null);
var inst_21476 = cljs.core.nth.call(null,inst_21474,(1),null);
var state_21584__$1 = (function (){var statearr_21656 = state_21584;
(statearr_21656[(26)] = inst_21475);

return statearr_21656;
})();
if(cljs.core.truth_(inst_21476)){
var statearr_21657_21720 = state_21584__$1;
(statearr_21657_21720[(1)] = (13));

} else {
var statearr_21658_21721 = state_21584__$1;
(statearr_21658_21721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (18))){
var inst_21509 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21659_21722 = state_21584__$1;
(statearr_21659_21722[(2)] = inst_21509);

(statearr_21659_21722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (42))){
var state_21584__$1 = state_21584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21584__$1,(45),dchan);
} else {
if((state_val_21585 === (37))){
var inst_21543 = (state_21584[(25)]);
var inst_21456 = (state_21584[(11)]);
var inst_21552 = (state_21584[(23)]);
var inst_21552__$1 = cljs.core.first.call(null,inst_21543);
var inst_21553 = cljs.core.async.put_BANG_.call(null,inst_21552__$1,inst_21456,done);
var state_21584__$1 = (function (){var statearr_21660 = state_21584;
(statearr_21660[(23)] = inst_21552__$1);

return statearr_21660;
})();
if(cljs.core.truth_(inst_21553)){
var statearr_21661_21723 = state_21584__$1;
(statearr_21661_21723[(1)] = (39));

} else {
var statearr_21662_21724 = state_21584__$1;
(statearr_21662_21724[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (8))){
var inst_21468 = (state_21584[(14)]);
var inst_21467 = (state_21584[(15)]);
var inst_21470 = (inst_21468 < inst_21467);
var inst_21471 = inst_21470;
var state_21584__$1 = state_21584;
if(cljs.core.truth_(inst_21471)){
var statearr_21663_21725 = state_21584__$1;
(statearr_21663_21725[(1)] = (10));

} else {
var statearr_21664_21726 = state_21584__$1;
(statearr_21664_21726[(1)] = (11));

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
});})(c__17745__auto___21672,cs,m,dchan,dctr,done))
;
return ((function (switch__17683__auto__,c__17745__auto___21672,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17684__auto__ = null;
var cljs$core$async$mult_$_state_machine__17684__auto____0 = (function (){
var statearr_21668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21668[(0)] = cljs$core$async$mult_$_state_machine__17684__auto__);

(statearr_21668[(1)] = (1));

return statearr_21668;
});
var cljs$core$async$mult_$_state_machine__17684__auto____1 = (function (state_21584){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_21584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e21669){if((e21669 instanceof Object)){
var ex__17687__auto__ = e21669;
var statearr_21670_21727 = state_21584;
(statearr_21670_21727[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21728 = state_21584;
state_21584 = G__21728;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17684__auto__ = function(state_21584){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17684__auto____1.call(this,state_21584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17684__auto____0;
cljs$core$async$mult_$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17684__auto____1;
return cljs$core$async$mult_$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___21672,cs,m,dchan,dctr,done))
})();
var state__17747__auto__ = (function (){var statearr_21671 = f__17746__auto__.call(null);
(statearr_21671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___21672);

return statearr_21671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___21672,cs,m,dchan,dctr,done))
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
var G__21730 = arguments.length;
switch (G__21730) {
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

cljs.core.async.Mix = (function (){var obj21733 = {};
return obj21733;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4327__auto__ = m;
if(and__4327__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4975__auto__ = (((m == null))?null:m);
return (function (){var or__4339__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5379__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5379__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21738){
var map__21739 = p__21738;
var map__21739__$1 = ((cljs.core.seq_QMARK_.call(null,map__21739))?cljs.core.apply.call(null,cljs.core.hash_map,map__21739):map__21739);
var opts = map__21739__$1;
var statearr_21740_21743 = state;
(statearr_21740_21743[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__21739,map__21739__$1,opts){
return (function (val){
var statearr_21741_21744 = state;
(statearr_21741_21744[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21739,map__21739__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_21742_21745 = state;
(statearr_21742_21745[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21734){
var G__21735 = cljs.core.first.call(null,seq21734);
var seq21734__$1 = cljs.core.next.call(null,seq21734);
var G__21736 = cljs.core.first.call(null,seq21734__$1);
var seq21734__$2 = cljs.core.next.call(null,seq21734__$1);
var G__21737 = cljs.core.first.call(null,seq21734__$2);
var seq21734__$3 = cljs.core.next.call(null,seq21734__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21735,G__21736,G__21737,seq21734__$3);
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
if(typeof cljs.core.async.t21865 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21865 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21866){
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
this.meta21866 = meta21866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t21865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21867,meta21866__$1){
var self__ = this;
var _21867__$1 = this;
return (new cljs.core.async.t21865(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21866__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21867){
var self__ = this;
var _21867__$1 = this;
return self__.meta21866;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21865.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21865.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21866","meta21866",-629282165,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21865.cljs$lang$type = true;

cljs.core.async.t21865.cljs$lang$ctorStr = "cljs.core.async/t21865";

cljs.core.async.t21865.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t21865");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21865 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t21865(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21866){
return (new cljs.core.async.t21865(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21866));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21865(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17745__auto___21984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___21984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___21984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21937){
var state_val_21938 = (state_21937[(1)]);
if((state_val_21938 === (7))){
var inst_21881 = (state_21937[(7)]);
var inst_21886 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21881);
var state_21937__$1 = state_21937;
var statearr_21939_21985 = state_21937__$1;
(statearr_21939_21985[(2)] = inst_21886);

(statearr_21939_21985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (20))){
var inst_21896 = (state_21937[(8)]);
var state_21937__$1 = state_21937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21937__$1,(23),out,inst_21896);
} else {
if((state_val_21938 === (1))){
var inst_21871 = (state_21937[(9)]);
var inst_21871__$1 = calc_state.call(null);
var inst_21872 = cljs.core.seq_QMARK_.call(null,inst_21871__$1);
var state_21937__$1 = (function (){var statearr_21940 = state_21937;
(statearr_21940[(9)] = inst_21871__$1);

return statearr_21940;
})();
if(inst_21872){
var statearr_21941_21986 = state_21937__$1;
(statearr_21941_21986[(1)] = (2));

} else {
var statearr_21942_21987 = state_21937__$1;
(statearr_21942_21987[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (24))){
var inst_21889 = (state_21937[(10)]);
var inst_21881 = inst_21889;
var state_21937__$1 = (function (){var statearr_21943 = state_21937;
(statearr_21943[(7)] = inst_21881);

return statearr_21943;
})();
var statearr_21944_21988 = state_21937__$1;
(statearr_21944_21988[(2)] = null);

(statearr_21944_21988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (4))){
var inst_21871 = (state_21937[(9)]);
var inst_21877 = (state_21937[(2)]);
var inst_21878 = cljs.core.get.call(null,inst_21877,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21879 = cljs.core.get.call(null,inst_21877,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21880 = cljs.core.get.call(null,inst_21877,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21881 = inst_21871;
var state_21937__$1 = (function (){var statearr_21945 = state_21937;
(statearr_21945[(11)] = inst_21880);

(statearr_21945[(12)] = inst_21879);

(statearr_21945[(13)] = inst_21878);

(statearr_21945[(7)] = inst_21881);

return statearr_21945;
})();
var statearr_21946_21989 = state_21937__$1;
(statearr_21946_21989[(2)] = null);

(statearr_21946_21989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (15))){
var state_21937__$1 = state_21937;
var statearr_21947_21990 = state_21937__$1;
(statearr_21947_21990[(2)] = null);

(statearr_21947_21990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (21))){
var inst_21889 = (state_21937[(10)]);
var inst_21881 = inst_21889;
var state_21937__$1 = (function (){var statearr_21948 = state_21937;
(statearr_21948[(7)] = inst_21881);

return statearr_21948;
})();
var statearr_21949_21991 = state_21937__$1;
(statearr_21949_21991[(2)] = null);

(statearr_21949_21991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (13))){
var inst_21933 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21950_21992 = state_21937__$1;
(statearr_21950_21992[(2)] = inst_21933);

(statearr_21950_21992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (22))){
var inst_21931 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21951_21993 = state_21937__$1;
(statearr_21951_21993[(2)] = inst_21931);

(statearr_21951_21993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (6))){
var inst_21935 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21937__$1,inst_21935);
} else {
if((state_val_21938 === (25))){
var state_21937__$1 = state_21937;
var statearr_21952_21994 = state_21937__$1;
(statearr_21952_21994[(2)] = null);

(statearr_21952_21994[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (17))){
var inst_21911 = (state_21937[(14)]);
var state_21937__$1 = state_21937;
var statearr_21953_21995 = state_21937__$1;
(statearr_21953_21995[(2)] = inst_21911);

(statearr_21953_21995[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (3))){
var inst_21871 = (state_21937[(9)]);
var state_21937__$1 = state_21937;
var statearr_21954_21996 = state_21937__$1;
(statearr_21954_21996[(2)] = inst_21871);

(statearr_21954_21996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (12))){
var inst_21911 = (state_21937[(14)]);
var inst_21897 = (state_21937[(15)]);
var inst_21890 = (state_21937[(16)]);
var inst_21911__$1 = inst_21890.call(null,inst_21897);
var state_21937__$1 = (function (){var statearr_21955 = state_21937;
(statearr_21955[(14)] = inst_21911__$1);

return statearr_21955;
})();
if(cljs.core.truth_(inst_21911__$1)){
var statearr_21956_21997 = state_21937__$1;
(statearr_21956_21997[(1)] = (17));

} else {
var statearr_21957_21998 = state_21937__$1;
(statearr_21957_21998[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (2))){
var inst_21871 = (state_21937[(9)]);
var inst_21874 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21871);
var state_21937__$1 = state_21937;
var statearr_21958_21999 = state_21937__$1;
(statearr_21958_21999[(2)] = inst_21874);

(statearr_21958_21999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (23))){
var inst_21922 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
if(cljs.core.truth_(inst_21922)){
var statearr_21959_22000 = state_21937__$1;
(statearr_21959_22000[(1)] = (24));

} else {
var statearr_21960_22001 = state_21937__$1;
(statearr_21960_22001[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (19))){
var inst_21919 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
if(cljs.core.truth_(inst_21919)){
var statearr_21961_22002 = state_21937__$1;
(statearr_21961_22002[(1)] = (20));

} else {
var statearr_21962_22003 = state_21937__$1;
(statearr_21962_22003[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (11))){
var inst_21896 = (state_21937[(8)]);
var inst_21902 = (inst_21896 == null);
var state_21937__$1 = state_21937;
if(cljs.core.truth_(inst_21902)){
var statearr_21963_22004 = state_21937__$1;
(statearr_21963_22004[(1)] = (14));

} else {
var statearr_21964_22005 = state_21937__$1;
(statearr_21964_22005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (9))){
var inst_21889 = (state_21937[(10)]);
var inst_21889__$1 = (state_21937[(2)]);
var inst_21890 = cljs.core.get.call(null,inst_21889__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21891 = cljs.core.get.call(null,inst_21889__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21892 = cljs.core.get.call(null,inst_21889__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21937__$1 = (function (){var statearr_21965 = state_21937;
(statearr_21965[(17)] = inst_21891);

(statearr_21965[(10)] = inst_21889__$1);

(statearr_21965[(16)] = inst_21890);

return statearr_21965;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21937__$1,(10),inst_21892);
} else {
if((state_val_21938 === (5))){
var inst_21881 = (state_21937[(7)]);
var inst_21884 = cljs.core.seq_QMARK_.call(null,inst_21881);
var state_21937__$1 = state_21937;
if(inst_21884){
var statearr_21966_22006 = state_21937__$1;
(statearr_21966_22006[(1)] = (7));

} else {
var statearr_21967_22007 = state_21937__$1;
(statearr_21967_22007[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (14))){
var inst_21897 = (state_21937[(15)]);
var inst_21904 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21897);
var state_21937__$1 = state_21937;
var statearr_21968_22008 = state_21937__$1;
(statearr_21968_22008[(2)] = inst_21904);

(statearr_21968_22008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (26))){
var inst_21927 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21969_22009 = state_21937__$1;
(statearr_21969_22009[(2)] = inst_21927);

(statearr_21969_22009[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (16))){
var inst_21907 = (state_21937[(2)]);
var inst_21908 = calc_state.call(null);
var inst_21881 = inst_21908;
var state_21937__$1 = (function (){var statearr_21970 = state_21937;
(statearr_21970[(18)] = inst_21907);

(statearr_21970[(7)] = inst_21881);

return statearr_21970;
})();
var statearr_21971_22010 = state_21937__$1;
(statearr_21971_22010[(2)] = null);

(statearr_21971_22010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (10))){
var inst_21896 = (state_21937[(8)]);
var inst_21897 = (state_21937[(15)]);
var inst_21895 = (state_21937[(2)]);
var inst_21896__$1 = cljs.core.nth.call(null,inst_21895,(0),null);
var inst_21897__$1 = cljs.core.nth.call(null,inst_21895,(1),null);
var inst_21898 = (inst_21896__$1 == null);
var inst_21899 = cljs.core._EQ_.call(null,inst_21897__$1,change);
var inst_21900 = (inst_21898) || (inst_21899);
var state_21937__$1 = (function (){var statearr_21972 = state_21937;
(statearr_21972[(8)] = inst_21896__$1);

(statearr_21972[(15)] = inst_21897__$1);

return statearr_21972;
})();
if(cljs.core.truth_(inst_21900)){
var statearr_21973_22011 = state_21937__$1;
(statearr_21973_22011[(1)] = (11));

} else {
var statearr_21974_22012 = state_21937__$1;
(statearr_21974_22012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (18))){
var inst_21897 = (state_21937[(15)]);
var inst_21891 = (state_21937[(17)]);
var inst_21890 = (state_21937[(16)]);
var inst_21914 = cljs.core.empty_QMARK_.call(null,inst_21890);
var inst_21915 = inst_21891.call(null,inst_21897);
var inst_21916 = cljs.core.not.call(null,inst_21915);
var inst_21917 = (inst_21914) && (inst_21916);
var state_21937__$1 = state_21937;
var statearr_21975_22013 = state_21937__$1;
(statearr_21975_22013[(2)] = inst_21917);

(statearr_21975_22013[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (8))){
var inst_21881 = (state_21937[(7)]);
var state_21937__$1 = state_21937;
var statearr_21976_22014 = state_21937__$1;
(statearr_21976_22014[(2)] = inst_21881);

(statearr_21976_22014[(1)] = (9));


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
});})(c__17745__auto___21984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17683__auto__,c__17745__auto___21984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17684__auto__ = null;
var cljs$core$async$mix_$_state_machine__17684__auto____0 = (function (){
var statearr_21980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21980[(0)] = cljs$core$async$mix_$_state_machine__17684__auto__);

(statearr_21980[(1)] = (1));

return statearr_21980;
});
var cljs$core$async$mix_$_state_machine__17684__auto____1 = (function (state_21937){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_21937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e21981){if((e21981 instanceof Object)){
var ex__17687__auto__ = e21981;
var statearr_21982_22015 = state_21937;
(statearr_21982_22015[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22016 = state_21937;
state_21937 = G__22016;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17684__auto__ = function(state_21937){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17684__auto____1.call(this,state_21937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17684__auto____0;
cljs$core$async$mix_$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17684__auto____1;
return cljs$core$async$mix_$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___21984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17747__auto__ = (function (){var statearr_21983 = f__17746__auto__.call(null);
(statearr_21983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___21984);

return statearr_21983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___21984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22018 = {};
return obj22018;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4327__auto__ = p;
if(and__4327__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4327__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4975__auto__ = (((p == null))?null:p);
return (function (){var or__4339__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4327__auto__ = p;
if(and__4327__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4327__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4975__auto__ = (((p == null))?null:p);
return (function (){var or__4339__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__22020 = arguments.length;
switch (G__22020) {
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
if((function (){var and__4327__auto__ = p;
if(and__4327__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4327__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4975__auto__ = (((p == null))?null:p);
return (function (){var or__4339__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4327__auto__ = p;
if(and__4327__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4327__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4975__auto__ = (((p == null))?null:p);
return (function (){var or__4339__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4975__auto__)]);
if(or__4339__auto__){
return or__4339__auto__;
} else {
var or__4339__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4339__auto____$1){
return or__4339__auto____$1;
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
var G__22024 = arguments.length;
switch (G__22024) {
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
var or__4339__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4339__auto__,mults){
return (function (p1__22022_SHARP_){
if(cljs.core.truth_(p1__22022_SHARP_.call(null,topic))){
return p1__22022_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22022_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4339__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22025 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22025 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22026){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22026 = meta22026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22027,meta22026__$1){
var self__ = this;
var _22027__$1 = this;
return (new cljs.core.async.t22025(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22026__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22027){
var self__ = this;
var _22027__$1 = this;
return self__.meta22026;
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22026","meta22026",-1833228490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.cljs$lang$type = true;

cljs.core.async.t22025.cljs$lang$ctorStr = "cljs.core.async/t22025";

cljs.core.async.t22025.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t22025");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22025 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t22025(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22026){
return (new cljs.core.async.t22025(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22026));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22025(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17745__auto___22148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22148,mults,ensure_mult,p){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22148,mults,ensure_mult,p){
return (function (state_22099){
var state_val_22100 = (state_22099[(1)]);
if((state_val_22100 === (7))){
var inst_22095 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22101_22149 = state_22099__$1;
(statearr_22101_22149[(2)] = inst_22095);

(statearr_22101_22149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (20))){
var state_22099__$1 = state_22099;
var statearr_22102_22150 = state_22099__$1;
(statearr_22102_22150[(2)] = null);

(statearr_22102_22150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (1))){
var state_22099__$1 = state_22099;
var statearr_22103_22151 = state_22099__$1;
(statearr_22103_22151[(2)] = null);

(statearr_22103_22151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (24))){
var inst_22078 = (state_22099[(7)]);
var inst_22087 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22078);
var state_22099__$1 = state_22099;
var statearr_22104_22152 = state_22099__$1;
(statearr_22104_22152[(2)] = inst_22087);

(statearr_22104_22152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (4))){
var inst_22030 = (state_22099[(8)]);
var inst_22030__$1 = (state_22099[(2)]);
var inst_22031 = (inst_22030__$1 == null);
var state_22099__$1 = (function (){var statearr_22105 = state_22099;
(statearr_22105[(8)] = inst_22030__$1);

return statearr_22105;
})();
if(cljs.core.truth_(inst_22031)){
var statearr_22106_22153 = state_22099__$1;
(statearr_22106_22153[(1)] = (5));

} else {
var statearr_22107_22154 = state_22099__$1;
(statearr_22107_22154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (15))){
var inst_22072 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22108_22155 = state_22099__$1;
(statearr_22108_22155[(2)] = inst_22072);

(statearr_22108_22155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (21))){
var inst_22092 = (state_22099[(2)]);
var state_22099__$1 = (function (){var statearr_22109 = state_22099;
(statearr_22109[(9)] = inst_22092);

return statearr_22109;
})();
var statearr_22110_22156 = state_22099__$1;
(statearr_22110_22156[(2)] = null);

(statearr_22110_22156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (13))){
var inst_22054 = (state_22099[(10)]);
var inst_22056 = cljs.core.chunked_seq_QMARK_.call(null,inst_22054);
var state_22099__$1 = state_22099;
if(inst_22056){
var statearr_22111_22157 = state_22099__$1;
(statearr_22111_22157[(1)] = (16));

} else {
var statearr_22112_22158 = state_22099__$1;
(statearr_22112_22158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (22))){
var inst_22084 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22084)){
var statearr_22113_22159 = state_22099__$1;
(statearr_22113_22159[(1)] = (23));

} else {
var statearr_22114_22160 = state_22099__$1;
(statearr_22114_22160[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (6))){
var inst_22080 = (state_22099[(11)]);
var inst_22078 = (state_22099[(7)]);
var inst_22030 = (state_22099[(8)]);
var inst_22078__$1 = topic_fn.call(null,inst_22030);
var inst_22079 = cljs.core.deref.call(null,mults);
var inst_22080__$1 = cljs.core.get.call(null,inst_22079,inst_22078__$1);
var state_22099__$1 = (function (){var statearr_22115 = state_22099;
(statearr_22115[(11)] = inst_22080__$1);

(statearr_22115[(7)] = inst_22078__$1);

return statearr_22115;
})();
if(cljs.core.truth_(inst_22080__$1)){
var statearr_22116_22161 = state_22099__$1;
(statearr_22116_22161[(1)] = (19));

} else {
var statearr_22117_22162 = state_22099__$1;
(statearr_22117_22162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (25))){
var inst_22089 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22118_22163 = state_22099__$1;
(statearr_22118_22163[(2)] = inst_22089);

(statearr_22118_22163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (17))){
var inst_22054 = (state_22099[(10)]);
var inst_22063 = cljs.core.first.call(null,inst_22054);
var inst_22064 = cljs.core.async.muxch_STAR_.call(null,inst_22063);
var inst_22065 = cljs.core.async.close_BANG_.call(null,inst_22064);
var inst_22066 = cljs.core.next.call(null,inst_22054);
var inst_22040 = inst_22066;
var inst_22041 = null;
var inst_22042 = (0);
var inst_22043 = (0);
var state_22099__$1 = (function (){var statearr_22119 = state_22099;
(statearr_22119[(12)] = inst_22041);

(statearr_22119[(13)] = inst_22065);

(statearr_22119[(14)] = inst_22040);

(statearr_22119[(15)] = inst_22042);

(statearr_22119[(16)] = inst_22043);

return statearr_22119;
})();
var statearr_22120_22164 = state_22099__$1;
(statearr_22120_22164[(2)] = null);

(statearr_22120_22164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (3))){
var inst_22097 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22099__$1,inst_22097);
} else {
if((state_val_22100 === (12))){
var inst_22074 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22121_22165 = state_22099__$1;
(statearr_22121_22165[(2)] = inst_22074);

(statearr_22121_22165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (2))){
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22099__$1,(4),ch);
} else {
if((state_val_22100 === (23))){
var state_22099__$1 = state_22099;
var statearr_22122_22166 = state_22099__$1;
(statearr_22122_22166[(2)] = null);

(statearr_22122_22166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (19))){
var inst_22080 = (state_22099[(11)]);
var inst_22030 = (state_22099[(8)]);
var inst_22082 = cljs.core.async.muxch_STAR_.call(null,inst_22080);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22099__$1,(22),inst_22082,inst_22030);
} else {
if((state_val_22100 === (11))){
var inst_22040 = (state_22099[(14)]);
var inst_22054 = (state_22099[(10)]);
var inst_22054__$1 = cljs.core.seq.call(null,inst_22040);
var state_22099__$1 = (function (){var statearr_22123 = state_22099;
(statearr_22123[(10)] = inst_22054__$1);

return statearr_22123;
})();
if(inst_22054__$1){
var statearr_22124_22167 = state_22099__$1;
(statearr_22124_22167[(1)] = (13));

} else {
var statearr_22125_22168 = state_22099__$1;
(statearr_22125_22168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (9))){
var inst_22076 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22126_22169 = state_22099__$1;
(statearr_22126_22169[(2)] = inst_22076);

(statearr_22126_22169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (5))){
var inst_22037 = cljs.core.deref.call(null,mults);
var inst_22038 = cljs.core.vals.call(null,inst_22037);
var inst_22039 = cljs.core.seq.call(null,inst_22038);
var inst_22040 = inst_22039;
var inst_22041 = null;
var inst_22042 = (0);
var inst_22043 = (0);
var state_22099__$1 = (function (){var statearr_22127 = state_22099;
(statearr_22127[(12)] = inst_22041);

(statearr_22127[(14)] = inst_22040);

(statearr_22127[(15)] = inst_22042);

(statearr_22127[(16)] = inst_22043);

return statearr_22127;
})();
var statearr_22128_22170 = state_22099__$1;
(statearr_22128_22170[(2)] = null);

(statearr_22128_22170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (14))){
var state_22099__$1 = state_22099;
var statearr_22132_22171 = state_22099__$1;
(statearr_22132_22171[(2)] = null);

(statearr_22132_22171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (16))){
var inst_22054 = (state_22099[(10)]);
var inst_22058 = cljs.core.chunk_first.call(null,inst_22054);
var inst_22059 = cljs.core.chunk_rest.call(null,inst_22054);
var inst_22060 = cljs.core.count.call(null,inst_22058);
var inst_22040 = inst_22059;
var inst_22041 = inst_22058;
var inst_22042 = inst_22060;
var inst_22043 = (0);
var state_22099__$1 = (function (){var statearr_22133 = state_22099;
(statearr_22133[(12)] = inst_22041);

(statearr_22133[(14)] = inst_22040);

(statearr_22133[(15)] = inst_22042);

(statearr_22133[(16)] = inst_22043);

return statearr_22133;
})();
var statearr_22134_22172 = state_22099__$1;
(statearr_22134_22172[(2)] = null);

(statearr_22134_22172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (10))){
var inst_22041 = (state_22099[(12)]);
var inst_22040 = (state_22099[(14)]);
var inst_22042 = (state_22099[(15)]);
var inst_22043 = (state_22099[(16)]);
var inst_22048 = cljs.core._nth.call(null,inst_22041,inst_22043);
var inst_22049 = cljs.core.async.muxch_STAR_.call(null,inst_22048);
var inst_22050 = cljs.core.async.close_BANG_.call(null,inst_22049);
var inst_22051 = (inst_22043 + (1));
var tmp22129 = inst_22041;
var tmp22130 = inst_22040;
var tmp22131 = inst_22042;
var inst_22040__$1 = tmp22130;
var inst_22041__$1 = tmp22129;
var inst_22042__$1 = tmp22131;
var inst_22043__$1 = inst_22051;
var state_22099__$1 = (function (){var statearr_22135 = state_22099;
(statearr_22135[(12)] = inst_22041__$1);

(statearr_22135[(14)] = inst_22040__$1);

(statearr_22135[(17)] = inst_22050);

(statearr_22135[(15)] = inst_22042__$1);

(statearr_22135[(16)] = inst_22043__$1);

return statearr_22135;
})();
var statearr_22136_22173 = state_22099__$1;
(statearr_22136_22173[(2)] = null);

(statearr_22136_22173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (18))){
var inst_22069 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22137_22174 = state_22099__$1;
(statearr_22137_22174[(2)] = inst_22069);

(statearr_22137_22174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (8))){
var inst_22042 = (state_22099[(15)]);
var inst_22043 = (state_22099[(16)]);
var inst_22045 = (inst_22043 < inst_22042);
var inst_22046 = inst_22045;
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22046)){
var statearr_22138_22175 = state_22099__$1;
(statearr_22138_22175[(1)] = (10));

} else {
var statearr_22139_22176 = state_22099__$1;
(statearr_22139_22176[(1)] = (11));

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
});})(c__17745__auto___22148,mults,ensure_mult,p))
;
return ((function (switch__17683__auto__,c__17745__auto___22148,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22143[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22143[(1)] = (1));

return statearr_22143;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22099){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object)){
var ex__17687__auto__ = e22144;
var statearr_22145_22177 = state_22099;
(statearr_22145_22177[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22178 = state_22099;
state_22099 = G__22178;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22148,mults,ensure_mult,p))
})();
var state__17747__auto__ = (function (){var statearr_22146 = f__17746__auto__.call(null);
(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22148);

return statearr_22146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22148,mults,ensure_mult,p))
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
var G__22180 = arguments.length;
switch (G__22180) {
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
var G__22183 = arguments.length;
switch (G__22183) {
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
var G__22186 = arguments.length;
switch (G__22186) {
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
var c__17745__auto___22256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22225){
var state_val_22226 = (state_22225[(1)]);
if((state_val_22226 === (7))){
var state_22225__$1 = state_22225;
var statearr_22227_22257 = state_22225__$1;
(statearr_22227_22257[(2)] = null);

(statearr_22227_22257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (1))){
var state_22225__$1 = state_22225;
var statearr_22228_22258 = state_22225__$1;
(statearr_22228_22258[(2)] = null);

(statearr_22228_22258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (4))){
var inst_22189 = (state_22225[(7)]);
var inst_22191 = (inst_22189 < cnt);
var state_22225__$1 = state_22225;
if(cljs.core.truth_(inst_22191)){
var statearr_22229_22259 = state_22225__$1;
(statearr_22229_22259[(1)] = (6));

} else {
var statearr_22230_22260 = state_22225__$1;
(statearr_22230_22260[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (15))){
var inst_22221 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
var statearr_22231_22261 = state_22225__$1;
(statearr_22231_22261[(2)] = inst_22221);

(statearr_22231_22261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (13))){
var inst_22214 = cljs.core.async.close_BANG_.call(null,out);
var state_22225__$1 = state_22225;
var statearr_22232_22262 = state_22225__$1;
(statearr_22232_22262[(2)] = inst_22214);

(statearr_22232_22262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (6))){
var state_22225__$1 = state_22225;
var statearr_22233_22263 = state_22225__$1;
(statearr_22233_22263[(2)] = null);

(statearr_22233_22263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (3))){
var inst_22223 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22225__$1,inst_22223);
} else {
if((state_val_22226 === (12))){
var inst_22211 = (state_22225[(8)]);
var inst_22211__$1 = (state_22225[(2)]);
var inst_22212 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22211__$1);
var state_22225__$1 = (function (){var statearr_22234 = state_22225;
(statearr_22234[(8)] = inst_22211__$1);

return statearr_22234;
})();
if(cljs.core.truth_(inst_22212)){
var statearr_22235_22264 = state_22225__$1;
(statearr_22235_22264[(1)] = (13));

} else {
var statearr_22236_22265 = state_22225__$1;
(statearr_22236_22265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (2))){
var inst_22188 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22189 = (0);
var state_22225__$1 = (function (){var statearr_22237 = state_22225;
(statearr_22237[(7)] = inst_22189);

(statearr_22237[(9)] = inst_22188);

return statearr_22237;
})();
var statearr_22238_22266 = state_22225__$1;
(statearr_22238_22266[(2)] = null);

(statearr_22238_22266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (11))){
var inst_22189 = (state_22225[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22225,(10),Object,null,(9));
var inst_22198 = chs__$1.call(null,inst_22189);
var inst_22199 = done.call(null,inst_22189);
var inst_22200 = cljs.core.async.take_BANG_.call(null,inst_22198,inst_22199);
var state_22225__$1 = state_22225;
var statearr_22239_22267 = state_22225__$1;
(statearr_22239_22267[(2)] = inst_22200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22225__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (9))){
var inst_22189 = (state_22225[(7)]);
var inst_22202 = (state_22225[(2)]);
var inst_22203 = (inst_22189 + (1));
var inst_22189__$1 = inst_22203;
var state_22225__$1 = (function (){var statearr_22240 = state_22225;
(statearr_22240[(7)] = inst_22189__$1);

(statearr_22240[(10)] = inst_22202);

return statearr_22240;
})();
var statearr_22241_22268 = state_22225__$1;
(statearr_22241_22268[(2)] = null);

(statearr_22241_22268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (5))){
var inst_22209 = (state_22225[(2)]);
var state_22225__$1 = (function (){var statearr_22242 = state_22225;
(statearr_22242[(11)] = inst_22209);

return statearr_22242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22225__$1,(12),dchan);
} else {
if((state_val_22226 === (14))){
var inst_22211 = (state_22225[(8)]);
var inst_22216 = cljs.core.apply.call(null,f,inst_22211);
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22225__$1,(16),out,inst_22216);
} else {
if((state_val_22226 === (16))){
var inst_22218 = (state_22225[(2)]);
var state_22225__$1 = (function (){var statearr_22243 = state_22225;
(statearr_22243[(12)] = inst_22218);

return statearr_22243;
})();
var statearr_22244_22269 = state_22225__$1;
(statearr_22244_22269[(2)] = null);

(statearr_22244_22269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (10))){
var inst_22193 = (state_22225[(2)]);
var inst_22194 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22225__$1 = (function (){var statearr_22245 = state_22225;
(statearr_22245[(13)] = inst_22193);

return statearr_22245;
})();
var statearr_22246_22270 = state_22225__$1;
(statearr_22246_22270[(2)] = inst_22194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22225__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (8))){
var inst_22207 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
var statearr_22247_22271 = state_22225__$1;
(statearr_22247_22271[(2)] = inst_22207);

(statearr_22247_22271[(1)] = (5));


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
});})(c__17745__auto___22256,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17683__auto__,c__17745__auto___22256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22251[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22251[(1)] = (1));

return statearr_22251;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22225){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22252){if((e22252 instanceof Object)){
var ex__17687__auto__ = e22252;
var statearr_22253_22272 = state_22225;
(statearr_22253_22272[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22273 = state_22225;
state_22225 = G__22273;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22256,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17747__auto__ = (function (){var statearr_22254 = f__17746__auto__.call(null);
(statearr_22254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22256);

return statearr_22254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22256,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22276 = arguments.length;
switch (G__22276) {
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
var c__17745__auto___22331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22331,out){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22331,out){
return (function (state_22306){
var state_val_22307 = (state_22306[(1)]);
if((state_val_22307 === (7))){
var inst_22286 = (state_22306[(7)]);
var inst_22285 = (state_22306[(8)]);
var inst_22285__$1 = (state_22306[(2)]);
var inst_22286__$1 = cljs.core.nth.call(null,inst_22285__$1,(0),null);
var inst_22287 = cljs.core.nth.call(null,inst_22285__$1,(1),null);
var inst_22288 = (inst_22286__$1 == null);
var state_22306__$1 = (function (){var statearr_22308 = state_22306;
(statearr_22308[(7)] = inst_22286__$1);

(statearr_22308[(8)] = inst_22285__$1);

(statearr_22308[(9)] = inst_22287);

return statearr_22308;
})();
if(cljs.core.truth_(inst_22288)){
var statearr_22309_22332 = state_22306__$1;
(statearr_22309_22332[(1)] = (8));

} else {
var statearr_22310_22333 = state_22306__$1;
(statearr_22310_22333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (1))){
var inst_22277 = cljs.core.vec.call(null,chs);
var inst_22278 = inst_22277;
var state_22306__$1 = (function (){var statearr_22311 = state_22306;
(statearr_22311[(10)] = inst_22278);

return statearr_22311;
})();
var statearr_22312_22334 = state_22306__$1;
(statearr_22312_22334[(2)] = null);

(statearr_22312_22334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (4))){
var inst_22278 = (state_22306[(10)]);
var state_22306__$1 = state_22306;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22306__$1,(7),inst_22278);
} else {
if((state_val_22307 === (6))){
var inst_22302 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
var statearr_22313_22335 = state_22306__$1;
(statearr_22313_22335[(2)] = inst_22302);

(statearr_22313_22335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (3))){
var inst_22304 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22306__$1,inst_22304);
} else {
if((state_val_22307 === (2))){
var inst_22278 = (state_22306[(10)]);
var inst_22280 = cljs.core.count.call(null,inst_22278);
var inst_22281 = (inst_22280 > (0));
var state_22306__$1 = state_22306;
if(cljs.core.truth_(inst_22281)){
var statearr_22315_22336 = state_22306__$1;
(statearr_22315_22336[(1)] = (4));

} else {
var statearr_22316_22337 = state_22306__$1;
(statearr_22316_22337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (11))){
var inst_22278 = (state_22306[(10)]);
var inst_22295 = (state_22306[(2)]);
var tmp22314 = inst_22278;
var inst_22278__$1 = tmp22314;
var state_22306__$1 = (function (){var statearr_22317 = state_22306;
(statearr_22317[(10)] = inst_22278__$1);

(statearr_22317[(11)] = inst_22295);

return statearr_22317;
})();
var statearr_22318_22338 = state_22306__$1;
(statearr_22318_22338[(2)] = null);

(statearr_22318_22338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (9))){
var inst_22286 = (state_22306[(7)]);
var state_22306__$1 = state_22306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22306__$1,(11),out,inst_22286);
} else {
if((state_val_22307 === (5))){
var inst_22300 = cljs.core.async.close_BANG_.call(null,out);
var state_22306__$1 = state_22306;
var statearr_22319_22339 = state_22306__$1;
(statearr_22319_22339[(2)] = inst_22300);

(statearr_22319_22339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (10))){
var inst_22298 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
var statearr_22320_22340 = state_22306__$1;
(statearr_22320_22340[(2)] = inst_22298);

(statearr_22320_22340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (8))){
var inst_22286 = (state_22306[(7)]);
var inst_22285 = (state_22306[(8)]);
var inst_22287 = (state_22306[(9)]);
var inst_22278 = (state_22306[(10)]);
var inst_22290 = (function (){var cs = inst_22278;
var vec__22283 = inst_22285;
var v = inst_22286;
var c = inst_22287;
return ((function (cs,vec__22283,v,c,inst_22286,inst_22285,inst_22287,inst_22278,state_val_22307,c__17745__auto___22331,out){
return (function (p1__22274_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22274_SHARP_);
});
;})(cs,vec__22283,v,c,inst_22286,inst_22285,inst_22287,inst_22278,state_val_22307,c__17745__auto___22331,out))
})();
var inst_22291 = cljs.core.filterv.call(null,inst_22290,inst_22278);
var inst_22278__$1 = inst_22291;
var state_22306__$1 = (function (){var statearr_22321 = state_22306;
(statearr_22321[(10)] = inst_22278__$1);

return statearr_22321;
})();
var statearr_22322_22341 = state_22306__$1;
(statearr_22322_22341[(2)] = null);

(statearr_22322_22341[(1)] = (2));


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
});})(c__17745__auto___22331,out))
;
return ((function (switch__17683__auto__,c__17745__auto___22331,out){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22326[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22326[(1)] = (1));

return statearr_22326;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22306){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22327){if((e22327 instanceof Object)){
var ex__17687__auto__ = e22327;
var statearr_22328_22342 = state_22306;
(statearr_22328_22342[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22343 = state_22306;
state_22306 = G__22343;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22331,out))
})();
var state__17747__auto__ = (function (){var statearr_22329 = f__17746__auto__.call(null);
(statearr_22329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22331);

return statearr_22329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22331,out))
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
var G__22345 = arguments.length;
switch (G__22345) {
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
var c__17745__auto___22393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22393,out){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22393,out){
return (function (state_22369){
var state_val_22370 = (state_22369[(1)]);
if((state_val_22370 === (7))){
var inst_22351 = (state_22369[(7)]);
var inst_22351__$1 = (state_22369[(2)]);
var inst_22352 = (inst_22351__$1 == null);
var inst_22353 = cljs.core.not.call(null,inst_22352);
var state_22369__$1 = (function (){var statearr_22371 = state_22369;
(statearr_22371[(7)] = inst_22351__$1);

return statearr_22371;
})();
if(inst_22353){
var statearr_22372_22394 = state_22369__$1;
(statearr_22372_22394[(1)] = (8));

} else {
var statearr_22373_22395 = state_22369__$1;
(statearr_22373_22395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (1))){
var inst_22346 = (0);
var state_22369__$1 = (function (){var statearr_22374 = state_22369;
(statearr_22374[(8)] = inst_22346);

return statearr_22374;
})();
var statearr_22375_22396 = state_22369__$1;
(statearr_22375_22396[(2)] = null);

(statearr_22375_22396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (4))){
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22369__$1,(7),ch);
} else {
if((state_val_22370 === (6))){
var inst_22364 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22376_22397 = state_22369__$1;
(statearr_22376_22397[(2)] = inst_22364);

(statearr_22376_22397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (3))){
var inst_22366 = (state_22369[(2)]);
var inst_22367 = cljs.core.async.close_BANG_.call(null,out);
var state_22369__$1 = (function (){var statearr_22377 = state_22369;
(statearr_22377[(9)] = inst_22366);

return statearr_22377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22369__$1,inst_22367);
} else {
if((state_val_22370 === (2))){
var inst_22346 = (state_22369[(8)]);
var inst_22348 = (inst_22346 < n);
var state_22369__$1 = state_22369;
if(cljs.core.truth_(inst_22348)){
var statearr_22378_22398 = state_22369__$1;
(statearr_22378_22398[(1)] = (4));

} else {
var statearr_22379_22399 = state_22369__$1;
(statearr_22379_22399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (11))){
var inst_22346 = (state_22369[(8)]);
var inst_22356 = (state_22369[(2)]);
var inst_22357 = (inst_22346 + (1));
var inst_22346__$1 = inst_22357;
var state_22369__$1 = (function (){var statearr_22380 = state_22369;
(statearr_22380[(10)] = inst_22356);

(statearr_22380[(8)] = inst_22346__$1);

return statearr_22380;
})();
var statearr_22381_22400 = state_22369__$1;
(statearr_22381_22400[(2)] = null);

(statearr_22381_22400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (9))){
var state_22369__$1 = state_22369;
var statearr_22382_22401 = state_22369__$1;
(statearr_22382_22401[(2)] = null);

(statearr_22382_22401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (5))){
var state_22369__$1 = state_22369;
var statearr_22383_22402 = state_22369__$1;
(statearr_22383_22402[(2)] = null);

(statearr_22383_22402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (10))){
var inst_22361 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22384_22403 = state_22369__$1;
(statearr_22384_22403[(2)] = inst_22361);

(statearr_22384_22403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (8))){
var inst_22351 = (state_22369[(7)]);
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22369__$1,(11),out,inst_22351);
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
});})(c__17745__auto___22393,out))
;
return ((function (switch__17683__auto__,c__17745__auto___22393,out){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22388[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22388[(1)] = (1));

return statearr_22388;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22369){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22389){if((e22389 instanceof Object)){
var ex__17687__auto__ = e22389;
var statearr_22390_22404 = state_22369;
(statearr_22390_22404[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22405 = state_22369;
state_22369 = G__22405;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22393,out))
})();
var state__17747__auto__ = (function (){var statearr_22391 = f__17746__auto__.call(null);
(statearr_22391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22393);

return statearr_22391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22393,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t22413 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22413 = (function (map_LT_,f,ch,meta22414){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22414 = meta22414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22415,meta22414__$1){
var self__ = this;
var _22415__$1 = this;
return (new cljs.core.async.t22413(self__.map_LT_,self__.f,self__.ch,meta22414__$1));
});

cljs.core.async.t22413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22415){
var self__ = this;
var _22415__$1 = this;
return self__.meta22414;
});

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22416 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22416 = (function (map_LT_,f,ch,meta22414,_,fn1,meta22417){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22414 = meta22414;
this._ = _;
this.fn1 = fn1;
this.meta22417 = meta22417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22418,meta22417__$1){
var self__ = this;
var _22418__$1 = this;
return (new cljs.core.async.t22416(self__.map_LT_,self__.f,self__.ch,self__.meta22414,self__._,self__.fn1,meta22417__$1));
});})(___$1))
;

cljs.core.async.t22416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22418){
var self__ = this;
var _22418__$1 = this;
return self__.meta22417;
});})(___$1))
;

cljs.core.async.t22416.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22406_SHARP_){
return f1.call(null,(((p1__22406_SHARP_ == null))?null:self__.f.call(null,p1__22406_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22416.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22414","meta22414",1789336719,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22417","meta22417",701573077,null)], null);
});})(___$1))
;

cljs.core.async.t22416.cljs$lang$type = true;

cljs.core.async.t22416.cljs$lang$ctorStr = "cljs.core.async/t22416";

cljs.core.async.t22416.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t22416");
});})(___$1))
;

cljs.core.async.__GT_t22416 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t22416(map_LT___$1,f__$1,ch__$1,meta22414__$1,___$2,fn1__$1,meta22417){
return (new cljs.core.async.t22416(map_LT___$1,f__$1,ch__$1,meta22414__$1,___$2,fn1__$1,meta22417));
});})(___$1))
;

}

return (new cljs.core.async.t22416(self__.map_LT_,self__.f,self__.ch,self__.meta22414,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4327__auto__ = ret;
if(cljs.core.truth_(and__4327__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4327__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22414","meta22414",1789336719,null)], null);
});

cljs.core.async.t22413.cljs$lang$type = true;

cljs.core.async.t22413.cljs$lang$ctorStr = "cljs.core.async/t22413";

cljs.core.async.t22413.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t22413");
});

cljs.core.async.__GT_t22413 = (function cljs$core$async$map_LT__$___GT_t22413(map_LT___$1,f__$1,ch__$1,meta22414){
return (new cljs.core.async.t22413(map_LT___$1,f__$1,ch__$1,meta22414));
});

}

return (new cljs.core.async.t22413(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t22422 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22422 = (function (map_GT_,f,ch,meta22423){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22423 = meta22423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22424,meta22423__$1){
var self__ = this;
var _22424__$1 = this;
return (new cljs.core.async.t22422(self__.map_GT_,self__.f,self__.ch,meta22423__$1));
});

cljs.core.async.t22422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22424){
var self__ = this;
var _22424__$1 = this;
return self__.meta22423;
});

cljs.core.async.t22422.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22423","meta22423",817779840,null)], null);
});

cljs.core.async.t22422.cljs$lang$type = true;

cljs.core.async.t22422.cljs$lang$ctorStr = "cljs.core.async/t22422";

cljs.core.async.t22422.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t22422");
});

cljs.core.async.__GT_t22422 = (function cljs$core$async$map_GT__$___GT_t22422(map_GT___$1,f__$1,ch__$1,meta22423){
return (new cljs.core.async.t22422(map_GT___$1,f__$1,ch__$1,meta22423));
});

}

return (new cljs.core.async.t22422(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t22428 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22428 = (function (filter_GT_,p,ch,meta22429){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22429 = meta22429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22430,meta22429__$1){
var self__ = this;
var _22430__$1 = this;
return (new cljs.core.async.t22428(self__.filter_GT_,self__.p,self__.ch,meta22429__$1));
});

cljs.core.async.t22428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22430){
var self__ = this;
var _22430__$1 = this;
return self__.meta22429;
});

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22429","meta22429",-807439006,null)], null);
});

cljs.core.async.t22428.cljs$lang$type = true;

cljs.core.async.t22428.cljs$lang$ctorStr = "cljs.core.async/t22428";

cljs.core.async.t22428.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t22428");
});

cljs.core.async.__GT_t22428 = (function cljs$core$async$filter_GT__$___GT_t22428(filter_GT___$1,p__$1,ch__$1,meta22429){
return (new cljs.core.async.t22428(filter_GT___$1,p__$1,ch__$1,meta22429));
});

}

return (new cljs.core.async.t22428(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22432 = arguments.length;
switch (G__22432) {
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
var c__17745__auto___22475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22475,out){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22475,out){
return (function (state_22453){
var state_val_22454 = (state_22453[(1)]);
if((state_val_22454 === (7))){
var inst_22449 = (state_22453[(2)]);
var state_22453__$1 = state_22453;
var statearr_22455_22476 = state_22453__$1;
(statearr_22455_22476[(2)] = inst_22449);

(statearr_22455_22476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (1))){
var state_22453__$1 = state_22453;
var statearr_22456_22477 = state_22453__$1;
(statearr_22456_22477[(2)] = null);

(statearr_22456_22477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (4))){
var inst_22435 = (state_22453[(7)]);
var inst_22435__$1 = (state_22453[(2)]);
var inst_22436 = (inst_22435__$1 == null);
var state_22453__$1 = (function (){var statearr_22457 = state_22453;
(statearr_22457[(7)] = inst_22435__$1);

return statearr_22457;
})();
if(cljs.core.truth_(inst_22436)){
var statearr_22458_22478 = state_22453__$1;
(statearr_22458_22478[(1)] = (5));

} else {
var statearr_22459_22479 = state_22453__$1;
(statearr_22459_22479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (6))){
var inst_22435 = (state_22453[(7)]);
var inst_22440 = p.call(null,inst_22435);
var state_22453__$1 = state_22453;
if(cljs.core.truth_(inst_22440)){
var statearr_22460_22480 = state_22453__$1;
(statearr_22460_22480[(1)] = (8));

} else {
var statearr_22461_22481 = state_22453__$1;
(statearr_22461_22481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (3))){
var inst_22451 = (state_22453[(2)]);
var state_22453__$1 = state_22453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22453__$1,inst_22451);
} else {
if((state_val_22454 === (2))){
var state_22453__$1 = state_22453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22453__$1,(4),ch);
} else {
if((state_val_22454 === (11))){
var inst_22443 = (state_22453[(2)]);
var state_22453__$1 = state_22453;
var statearr_22462_22482 = state_22453__$1;
(statearr_22462_22482[(2)] = inst_22443);

(statearr_22462_22482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (9))){
var state_22453__$1 = state_22453;
var statearr_22463_22483 = state_22453__$1;
(statearr_22463_22483[(2)] = null);

(statearr_22463_22483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (5))){
var inst_22438 = cljs.core.async.close_BANG_.call(null,out);
var state_22453__$1 = state_22453;
var statearr_22464_22484 = state_22453__$1;
(statearr_22464_22484[(2)] = inst_22438);

(statearr_22464_22484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (10))){
var inst_22446 = (state_22453[(2)]);
var state_22453__$1 = (function (){var statearr_22465 = state_22453;
(statearr_22465[(8)] = inst_22446);

return statearr_22465;
})();
var statearr_22466_22485 = state_22453__$1;
(statearr_22466_22485[(2)] = null);

(statearr_22466_22485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22454 === (8))){
var inst_22435 = (state_22453[(7)]);
var state_22453__$1 = state_22453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22453__$1,(11),out,inst_22435);
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
});})(c__17745__auto___22475,out))
;
return ((function (switch__17683__auto__,c__17745__auto___22475,out){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22470 = [null,null,null,null,null,null,null,null,null];
(statearr_22470[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22470[(1)] = (1));

return statearr_22470;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22453){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22471){if((e22471 instanceof Object)){
var ex__17687__auto__ = e22471;
var statearr_22472_22486 = state_22453;
(statearr_22472_22486[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22487 = state_22453;
state_22453 = G__22487;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22475,out))
})();
var state__17747__auto__ = (function (){var statearr_22473 = f__17746__auto__.call(null);
(statearr_22473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22475);

return statearr_22473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22475,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__22489 = arguments.length;
switch (G__22489) {
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
var c__17745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto__){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto__){
return (function (state_22656){
var state_val_22657 = (state_22656[(1)]);
if((state_val_22657 === (7))){
var inst_22652 = (state_22656[(2)]);
var state_22656__$1 = state_22656;
var statearr_22658_22699 = state_22656__$1;
(statearr_22658_22699[(2)] = inst_22652);

(statearr_22658_22699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (20))){
var inst_22622 = (state_22656[(7)]);
var inst_22633 = (state_22656[(2)]);
var inst_22634 = cljs.core.next.call(null,inst_22622);
var inst_22608 = inst_22634;
var inst_22609 = null;
var inst_22610 = (0);
var inst_22611 = (0);
var state_22656__$1 = (function (){var statearr_22659 = state_22656;
(statearr_22659[(8)] = inst_22611);

(statearr_22659[(9)] = inst_22608);

(statearr_22659[(10)] = inst_22610);

(statearr_22659[(11)] = inst_22609);

(statearr_22659[(12)] = inst_22633);

return statearr_22659;
})();
var statearr_22660_22700 = state_22656__$1;
(statearr_22660_22700[(2)] = null);

(statearr_22660_22700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (1))){
var state_22656__$1 = state_22656;
var statearr_22661_22701 = state_22656__$1;
(statearr_22661_22701[(2)] = null);

(statearr_22661_22701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (4))){
var inst_22597 = (state_22656[(13)]);
var inst_22597__$1 = (state_22656[(2)]);
var inst_22598 = (inst_22597__$1 == null);
var state_22656__$1 = (function (){var statearr_22662 = state_22656;
(statearr_22662[(13)] = inst_22597__$1);

return statearr_22662;
})();
if(cljs.core.truth_(inst_22598)){
var statearr_22663_22702 = state_22656__$1;
(statearr_22663_22702[(1)] = (5));

} else {
var statearr_22664_22703 = state_22656__$1;
(statearr_22664_22703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (15))){
var state_22656__$1 = state_22656;
var statearr_22668_22704 = state_22656__$1;
(statearr_22668_22704[(2)] = null);

(statearr_22668_22704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (21))){
var state_22656__$1 = state_22656;
var statearr_22669_22705 = state_22656__$1;
(statearr_22669_22705[(2)] = null);

(statearr_22669_22705[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (13))){
var inst_22611 = (state_22656[(8)]);
var inst_22608 = (state_22656[(9)]);
var inst_22610 = (state_22656[(10)]);
var inst_22609 = (state_22656[(11)]);
var inst_22618 = (state_22656[(2)]);
var inst_22619 = (inst_22611 + (1));
var tmp22665 = inst_22608;
var tmp22666 = inst_22610;
var tmp22667 = inst_22609;
var inst_22608__$1 = tmp22665;
var inst_22609__$1 = tmp22667;
var inst_22610__$1 = tmp22666;
var inst_22611__$1 = inst_22619;
var state_22656__$1 = (function (){var statearr_22670 = state_22656;
(statearr_22670[(8)] = inst_22611__$1);

(statearr_22670[(9)] = inst_22608__$1);

(statearr_22670[(10)] = inst_22610__$1);

(statearr_22670[(14)] = inst_22618);

(statearr_22670[(11)] = inst_22609__$1);

return statearr_22670;
})();
var statearr_22671_22706 = state_22656__$1;
(statearr_22671_22706[(2)] = null);

(statearr_22671_22706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (22))){
var state_22656__$1 = state_22656;
var statearr_22672_22707 = state_22656__$1;
(statearr_22672_22707[(2)] = null);

(statearr_22672_22707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (6))){
var inst_22597 = (state_22656[(13)]);
var inst_22606 = f.call(null,inst_22597);
var inst_22607 = cljs.core.seq.call(null,inst_22606);
var inst_22608 = inst_22607;
var inst_22609 = null;
var inst_22610 = (0);
var inst_22611 = (0);
var state_22656__$1 = (function (){var statearr_22673 = state_22656;
(statearr_22673[(8)] = inst_22611);

(statearr_22673[(9)] = inst_22608);

(statearr_22673[(10)] = inst_22610);

(statearr_22673[(11)] = inst_22609);

return statearr_22673;
})();
var statearr_22674_22708 = state_22656__$1;
(statearr_22674_22708[(2)] = null);

(statearr_22674_22708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (17))){
var inst_22622 = (state_22656[(7)]);
var inst_22626 = cljs.core.chunk_first.call(null,inst_22622);
var inst_22627 = cljs.core.chunk_rest.call(null,inst_22622);
var inst_22628 = cljs.core.count.call(null,inst_22626);
var inst_22608 = inst_22627;
var inst_22609 = inst_22626;
var inst_22610 = inst_22628;
var inst_22611 = (0);
var state_22656__$1 = (function (){var statearr_22675 = state_22656;
(statearr_22675[(8)] = inst_22611);

(statearr_22675[(9)] = inst_22608);

(statearr_22675[(10)] = inst_22610);

(statearr_22675[(11)] = inst_22609);

return statearr_22675;
})();
var statearr_22676_22709 = state_22656__$1;
(statearr_22676_22709[(2)] = null);

(statearr_22676_22709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (3))){
var inst_22654 = (state_22656[(2)]);
var state_22656__$1 = state_22656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22656__$1,inst_22654);
} else {
if((state_val_22657 === (12))){
var inst_22642 = (state_22656[(2)]);
var state_22656__$1 = state_22656;
var statearr_22677_22710 = state_22656__$1;
(statearr_22677_22710[(2)] = inst_22642);

(statearr_22677_22710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (2))){
var state_22656__$1 = state_22656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22656__$1,(4),in$);
} else {
if((state_val_22657 === (23))){
var inst_22650 = (state_22656[(2)]);
var state_22656__$1 = state_22656;
var statearr_22678_22711 = state_22656__$1;
(statearr_22678_22711[(2)] = inst_22650);

(statearr_22678_22711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (19))){
var inst_22637 = (state_22656[(2)]);
var state_22656__$1 = state_22656;
var statearr_22679_22712 = state_22656__$1;
(statearr_22679_22712[(2)] = inst_22637);

(statearr_22679_22712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (11))){
var inst_22608 = (state_22656[(9)]);
var inst_22622 = (state_22656[(7)]);
var inst_22622__$1 = cljs.core.seq.call(null,inst_22608);
var state_22656__$1 = (function (){var statearr_22680 = state_22656;
(statearr_22680[(7)] = inst_22622__$1);

return statearr_22680;
})();
if(inst_22622__$1){
var statearr_22681_22713 = state_22656__$1;
(statearr_22681_22713[(1)] = (14));

} else {
var statearr_22682_22714 = state_22656__$1;
(statearr_22682_22714[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (9))){
var inst_22644 = (state_22656[(2)]);
var inst_22645 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22656__$1 = (function (){var statearr_22683 = state_22656;
(statearr_22683[(15)] = inst_22644);

return statearr_22683;
})();
if(cljs.core.truth_(inst_22645)){
var statearr_22684_22715 = state_22656__$1;
(statearr_22684_22715[(1)] = (21));

} else {
var statearr_22685_22716 = state_22656__$1;
(statearr_22685_22716[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (5))){
var inst_22600 = cljs.core.async.close_BANG_.call(null,out);
var state_22656__$1 = state_22656;
var statearr_22686_22717 = state_22656__$1;
(statearr_22686_22717[(2)] = inst_22600);

(statearr_22686_22717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (14))){
var inst_22622 = (state_22656[(7)]);
var inst_22624 = cljs.core.chunked_seq_QMARK_.call(null,inst_22622);
var state_22656__$1 = state_22656;
if(inst_22624){
var statearr_22687_22718 = state_22656__$1;
(statearr_22687_22718[(1)] = (17));

} else {
var statearr_22688_22719 = state_22656__$1;
(statearr_22688_22719[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (16))){
var inst_22640 = (state_22656[(2)]);
var state_22656__$1 = state_22656;
var statearr_22689_22720 = state_22656__$1;
(statearr_22689_22720[(2)] = inst_22640);

(statearr_22689_22720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22657 === (10))){
var inst_22611 = (state_22656[(8)]);
var inst_22609 = (state_22656[(11)]);
var inst_22616 = cljs.core._nth.call(null,inst_22609,inst_22611);
var state_22656__$1 = state_22656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22656__$1,(13),out,inst_22616);
} else {
if((state_val_22657 === (18))){
var inst_22622 = (state_22656[(7)]);
var inst_22631 = cljs.core.first.call(null,inst_22622);
var state_22656__$1 = state_22656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22656__$1,(20),out,inst_22631);
} else {
if((state_val_22657 === (8))){
var inst_22611 = (state_22656[(8)]);
var inst_22610 = (state_22656[(10)]);
var inst_22613 = (inst_22611 < inst_22610);
var inst_22614 = inst_22613;
var state_22656__$1 = state_22656;
if(cljs.core.truth_(inst_22614)){
var statearr_22690_22721 = state_22656__$1;
(statearr_22690_22721[(1)] = (10));

} else {
var statearr_22691_22722 = state_22656__$1;
(statearr_22691_22722[(1)] = (11));

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
});})(c__17745__auto__))
;
return ((function (switch__17683__auto__,c__17745__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17684__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17684__auto____0 = (function (){
var statearr_22695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22695[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17684__auto__);

(statearr_22695[(1)] = (1));

return statearr_22695;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17684__auto____1 = (function (state_22656){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22696){if((e22696 instanceof Object)){
var ex__17687__auto__ = e22696;
var statearr_22697_22723 = state_22656;
(statearr_22697_22723[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22724 = state_22656;
state_22656 = G__22724;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17684__auto__ = function(state_22656){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17684__auto____1.call(this,state_22656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17684__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17684__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto__))
})();
var state__17747__auto__ = (function (){var statearr_22698 = f__17746__auto__.call(null);
(statearr_22698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto__);

return statearr_22698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto__))
);

return c__17745__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__22726 = arguments.length;
switch (G__22726) {
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
var G__22729 = arguments.length;
switch (G__22729) {
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
var G__22732 = arguments.length;
switch (G__22732) {
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
var c__17745__auto___22782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22782,out){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22782,out){
return (function (state_22756){
var state_val_22757 = (state_22756[(1)]);
if((state_val_22757 === (7))){
var inst_22751 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22758_22783 = state_22756__$1;
(statearr_22758_22783[(2)] = inst_22751);

(statearr_22758_22783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (1))){
var inst_22733 = null;
var state_22756__$1 = (function (){var statearr_22759 = state_22756;
(statearr_22759[(7)] = inst_22733);

return statearr_22759;
})();
var statearr_22760_22784 = state_22756__$1;
(statearr_22760_22784[(2)] = null);

(statearr_22760_22784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (4))){
var inst_22736 = (state_22756[(8)]);
var inst_22736__$1 = (state_22756[(2)]);
var inst_22737 = (inst_22736__$1 == null);
var inst_22738 = cljs.core.not.call(null,inst_22737);
var state_22756__$1 = (function (){var statearr_22761 = state_22756;
(statearr_22761[(8)] = inst_22736__$1);

return statearr_22761;
})();
if(inst_22738){
var statearr_22762_22785 = state_22756__$1;
(statearr_22762_22785[(1)] = (5));

} else {
var statearr_22763_22786 = state_22756__$1;
(statearr_22763_22786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (6))){
var state_22756__$1 = state_22756;
var statearr_22764_22787 = state_22756__$1;
(statearr_22764_22787[(2)] = null);

(statearr_22764_22787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (3))){
var inst_22753 = (state_22756[(2)]);
var inst_22754 = cljs.core.async.close_BANG_.call(null,out);
var state_22756__$1 = (function (){var statearr_22765 = state_22756;
(statearr_22765[(9)] = inst_22753);

return statearr_22765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22756__$1,inst_22754);
} else {
if((state_val_22757 === (2))){
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22756__$1,(4),ch);
} else {
if((state_val_22757 === (11))){
var inst_22736 = (state_22756[(8)]);
var inst_22745 = (state_22756[(2)]);
var inst_22733 = inst_22736;
var state_22756__$1 = (function (){var statearr_22766 = state_22756;
(statearr_22766[(10)] = inst_22745);

(statearr_22766[(7)] = inst_22733);

return statearr_22766;
})();
var statearr_22767_22788 = state_22756__$1;
(statearr_22767_22788[(2)] = null);

(statearr_22767_22788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (9))){
var inst_22736 = (state_22756[(8)]);
var state_22756__$1 = state_22756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22756__$1,(11),out,inst_22736);
} else {
if((state_val_22757 === (5))){
var inst_22736 = (state_22756[(8)]);
var inst_22733 = (state_22756[(7)]);
var inst_22740 = cljs.core._EQ_.call(null,inst_22736,inst_22733);
var state_22756__$1 = state_22756;
if(inst_22740){
var statearr_22769_22789 = state_22756__$1;
(statearr_22769_22789[(1)] = (8));

} else {
var statearr_22770_22790 = state_22756__$1;
(statearr_22770_22790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (10))){
var inst_22748 = (state_22756[(2)]);
var state_22756__$1 = state_22756;
var statearr_22771_22791 = state_22756__$1;
(statearr_22771_22791[(2)] = inst_22748);

(statearr_22771_22791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22757 === (8))){
var inst_22733 = (state_22756[(7)]);
var tmp22768 = inst_22733;
var inst_22733__$1 = tmp22768;
var state_22756__$1 = (function (){var statearr_22772 = state_22756;
(statearr_22772[(7)] = inst_22733__$1);

return statearr_22772;
})();
var statearr_22773_22792 = state_22756__$1;
(statearr_22773_22792[(2)] = null);

(statearr_22773_22792[(1)] = (2));


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
});})(c__17745__auto___22782,out))
;
return ((function (switch__17683__auto__,c__17745__auto___22782,out){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22777[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22777[(1)] = (1));

return statearr_22777;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22756){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22778){if((e22778 instanceof Object)){
var ex__17687__auto__ = e22778;
var statearr_22779_22793 = state_22756;
(statearr_22779_22793[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22794 = state_22756;
state_22756 = G__22794;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22782,out))
})();
var state__17747__auto__ = (function (){var statearr_22780 = f__17746__auto__.call(null);
(statearr_22780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22782);

return statearr_22780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22782,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__22796 = arguments.length;
switch (G__22796) {
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
var c__17745__auto___22865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22865,out){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22865,out){
return (function (state_22834){
var state_val_22835 = (state_22834[(1)]);
if((state_val_22835 === (7))){
var inst_22830 = (state_22834[(2)]);
var state_22834__$1 = state_22834;
var statearr_22836_22866 = state_22834__$1;
(statearr_22836_22866[(2)] = inst_22830);

(statearr_22836_22866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (1))){
var inst_22797 = (new Array(n));
var inst_22798 = inst_22797;
var inst_22799 = (0);
var state_22834__$1 = (function (){var statearr_22837 = state_22834;
(statearr_22837[(7)] = inst_22799);

(statearr_22837[(8)] = inst_22798);

return statearr_22837;
})();
var statearr_22838_22867 = state_22834__$1;
(statearr_22838_22867[(2)] = null);

(statearr_22838_22867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (4))){
var inst_22802 = (state_22834[(9)]);
var inst_22802__$1 = (state_22834[(2)]);
var inst_22803 = (inst_22802__$1 == null);
var inst_22804 = cljs.core.not.call(null,inst_22803);
var state_22834__$1 = (function (){var statearr_22839 = state_22834;
(statearr_22839[(9)] = inst_22802__$1);

return statearr_22839;
})();
if(inst_22804){
var statearr_22840_22868 = state_22834__$1;
(statearr_22840_22868[(1)] = (5));

} else {
var statearr_22841_22869 = state_22834__$1;
(statearr_22841_22869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (15))){
var inst_22824 = (state_22834[(2)]);
var state_22834__$1 = state_22834;
var statearr_22842_22870 = state_22834__$1;
(statearr_22842_22870[(2)] = inst_22824);

(statearr_22842_22870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (13))){
var state_22834__$1 = state_22834;
var statearr_22843_22871 = state_22834__$1;
(statearr_22843_22871[(2)] = null);

(statearr_22843_22871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (6))){
var inst_22799 = (state_22834[(7)]);
var inst_22820 = (inst_22799 > (0));
var state_22834__$1 = state_22834;
if(cljs.core.truth_(inst_22820)){
var statearr_22844_22872 = state_22834__$1;
(statearr_22844_22872[(1)] = (12));

} else {
var statearr_22845_22873 = state_22834__$1;
(statearr_22845_22873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (3))){
var inst_22832 = (state_22834[(2)]);
var state_22834__$1 = state_22834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22834__$1,inst_22832);
} else {
if((state_val_22835 === (12))){
var inst_22798 = (state_22834[(8)]);
var inst_22822 = cljs.core.vec.call(null,inst_22798);
var state_22834__$1 = state_22834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22834__$1,(15),out,inst_22822);
} else {
if((state_val_22835 === (2))){
var state_22834__$1 = state_22834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22834__$1,(4),ch);
} else {
if((state_val_22835 === (11))){
var inst_22814 = (state_22834[(2)]);
var inst_22815 = (new Array(n));
var inst_22798 = inst_22815;
var inst_22799 = (0);
var state_22834__$1 = (function (){var statearr_22846 = state_22834;
(statearr_22846[(7)] = inst_22799);

(statearr_22846[(8)] = inst_22798);

(statearr_22846[(10)] = inst_22814);

return statearr_22846;
})();
var statearr_22847_22874 = state_22834__$1;
(statearr_22847_22874[(2)] = null);

(statearr_22847_22874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (9))){
var inst_22798 = (state_22834[(8)]);
var inst_22812 = cljs.core.vec.call(null,inst_22798);
var state_22834__$1 = state_22834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22834__$1,(11),out,inst_22812);
} else {
if((state_val_22835 === (5))){
var inst_22799 = (state_22834[(7)]);
var inst_22802 = (state_22834[(9)]);
var inst_22798 = (state_22834[(8)]);
var inst_22807 = (state_22834[(11)]);
var inst_22806 = (inst_22798[inst_22799] = inst_22802);
var inst_22807__$1 = (inst_22799 + (1));
var inst_22808 = (inst_22807__$1 < n);
var state_22834__$1 = (function (){var statearr_22848 = state_22834;
(statearr_22848[(12)] = inst_22806);

(statearr_22848[(11)] = inst_22807__$1);

return statearr_22848;
})();
if(cljs.core.truth_(inst_22808)){
var statearr_22849_22875 = state_22834__$1;
(statearr_22849_22875[(1)] = (8));

} else {
var statearr_22850_22876 = state_22834__$1;
(statearr_22850_22876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (14))){
var inst_22827 = (state_22834[(2)]);
var inst_22828 = cljs.core.async.close_BANG_.call(null,out);
var state_22834__$1 = (function (){var statearr_22852 = state_22834;
(statearr_22852[(13)] = inst_22827);

return statearr_22852;
})();
var statearr_22853_22877 = state_22834__$1;
(statearr_22853_22877[(2)] = inst_22828);

(statearr_22853_22877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (10))){
var inst_22818 = (state_22834[(2)]);
var state_22834__$1 = state_22834;
var statearr_22854_22878 = state_22834__$1;
(statearr_22854_22878[(2)] = inst_22818);

(statearr_22854_22878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22835 === (8))){
var inst_22798 = (state_22834[(8)]);
var inst_22807 = (state_22834[(11)]);
var tmp22851 = inst_22798;
var inst_22798__$1 = tmp22851;
var inst_22799 = inst_22807;
var state_22834__$1 = (function (){var statearr_22855 = state_22834;
(statearr_22855[(7)] = inst_22799);

(statearr_22855[(8)] = inst_22798__$1);

return statearr_22855;
})();
var statearr_22856_22879 = state_22834__$1;
(statearr_22856_22879[(2)] = null);

(statearr_22856_22879[(1)] = (2));


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
});})(c__17745__auto___22865,out))
;
return ((function (switch__17683__auto__,c__17745__auto___22865,out){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22860[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22860[(1)] = (1));

return statearr_22860;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22834){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22861){if((e22861 instanceof Object)){
var ex__17687__auto__ = e22861;
var statearr_22862_22880 = state_22834;
(statearr_22862_22880[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22881 = state_22834;
state_22834 = G__22881;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22865,out))
})();
var state__17747__auto__ = (function (){var statearr_22863 = f__17746__auto__.call(null);
(statearr_22863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22865);

return statearr_22863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22865,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__22883 = arguments.length;
switch (G__22883) {
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
var c__17745__auto___22956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17745__auto___22956,out){
return (function (){
var f__17746__auto__ = (function (){var switch__17683__auto__ = ((function (c__17745__auto___22956,out){
return (function (state_22925){
var state_val_22926 = (state_22925[(1)]);
if((state_val_22926 === (7))){
var inst_22921 = (state_22925[(2)]);
var state_22925__$1 = state_22925;
var statearr_22927_22957 = state_22925__$1;
(statearr_22927_22957[(2)] = inst_22921);

(statearr_22927_22957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (1))){
var inst_22884 = [];
var inst_22885 = inst_22884;
var inst_22886 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22925__$1 = (function (){var statearr_22928 = state_22925;
(statearr_22928[(7)] = inst_22885);

(statearr_22928[(8)] = inst_22886);

return statearr_22928;
})();
var statearr_22929_22958 = state_22925__$1;
(statearr_22929_22958[(2)] = null);

(statearr_22929_22958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (4))){
var inst_22889 = (state_22925[(9)]);
var inst_22889__$1 = (state_22925[(2)]);
var inst_22890 = (inst_22889__$1 == null);
var inst_22891 = cljs.core.not.call(null,inst_22890);
var state_22925__$1 = (function (){var statearr_22930 = state_22925;
(statearr_22930[(9)] = inst_22889__$1);

return statearr_22930;
})();
if(inst_22891){
var statearr_22931_22959 = state_22925__$1;
(statearr_22931_22959[(1)] = (5));

} else {
var statearr_22932_22960 = state_22925__$1;
(statearr_22932_22960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (15))){
var inst_22915 = (state_22925[(2)]);
var state_22925__$1 = state_22925;
var statearr_22933_22961 = state_22925__$1;
(statearr_22933_22961[(2)] = inst_22915);

(statearr_22933_22961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (13))){
var state_22925__$1 = state_22925;
var statearr_22934_22962 = state_22925__$1;
(statearr_22934_22962[(2)] = null);

(statearr_22934_22962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (6))){
var inst_22885 = (state_22925[(7)]);
var inst_22910 = inst_22885.length;
var inst_22911 = (inst_22910 > (0));
var state_22925__$1 = state_22925;
if(cljs.core.truth_(inst_22911)){
var statearr_22935_22963 = state_22925__$1;
(statearr_22935_22963[(1)] = (12));

} else {
var statearr_22936_22964 = state_22925__$1;
(statearr_22936_22964[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (3))){
var inst_22923 = (state_22925[(2)]);
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22925__$1,inst_22923);
} else {
if((state_val_22926 === (12))){
var inst_22885 = (state_22925[(7)]);
var inst_22913 = cljs.core.vec.call(null,inst_22885);
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22925__$1,(15),out,inst_22913);
} else {
if((state_val_22926 === (2))){
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22925__$1,(4),ch);
} else {
if((state_val_22926 === (11))){
var inst_22889 = (state_22925[(9)]);
var inst_22893 = (state_22925[(10)]);
var inst_22903 = (state_22925[(2)]);
var inst_22904 = [];
var inst_22905 = inst_22904.push(inst_22889);
var inst_22885 = inst_22904;
var inst_22886 = inst_22893;
var state_22925__$1 = (function (){var statearr_22937 = state_22925;
(statearr_22937[(11)] = inst_22903);

(statearr_22937[(12)] = inst_22905);

(statearr_22937[(7)] = inst_22885);

(statearr_22937[(8)] = inst_22886);

return statearr_22937;
})();
var statearr_22938_22965 = state_22925__$1;
(statearr_22938_22965[(2)] = null);

(statearr_22938_22965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (9))){
var inst_22885 = (state_22925[(7)]);
var inst_22901 = cljs.core.vec.call(null,inst_22885);
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22925__$1,(11),out,inst_22901);
} else {
if((state_val_22926 === (5))){
var inst_22889 = (state_22925[(9)]);
var inst_22893 = (state_22925[(10)]);
var inst_22886 = (state_22925[(8)]);
var inst_22893__$1 = f.call(null,inst_22889);
var inst_22894 = cljs.core._EQ_.call(null,inst_22893__$1,inst_22886);
var inst_22895 = cljs.core.keyword_identical_QMARK_.call(null,inst_22886,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22896 = (inst_22894) || (inst_22895);
var state_22925__$1 = (function (){var statearr_22939 = state_22925;
(statearr_22939[(10)] = inst_22893__$1);

return statearr_22939;
})();
if(cljs.core.truth_(inst_22896)){
var statearr_22940_22966 = state_22925__$1;
(statearr_22940_22966[(1)] = (8));

} else {
var statearr_22941_22967 = state_22925__$1;
(statearr_22941_22967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (14))){
var inst_22918 = (state_22925[(2)]);
var inst_22919 = cljs.core.async.close_BANG_.call(null,out);
var state_22925__$1 = (function (){var statearr_22943 = state_22925;
(statearr_22943[(13)] = inst_22918);

return statearr_22943;
})();
var statearr_22944_22968 = state_22925__$1;
(statearr_22944_22968[(2)] = inst_22919);

(statearr_22944_22968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (10))){
var inst_22908 = (state_22925[(2)]);
var state_22925__$1 = state_22925;
var statearr_22945_22969 = state_22925__$1;
(statearr_22945_22969[(2)] = inst_22908);

(statearr_22945_22969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (8))){
var inst_22885 = (state_22925[(7)]);
var inst_22889 = (state_22925[(9)]);
var inst_22893 = (state_22925[(10)]);
var inst_22898 = inst_22885.push(inst_22889);
var tmp22942 = inst_22885;
var inst_22885__$1 = tmp22942;
var inst_22886 = inst_22893;
var state_22925__$1 = (function (){var statearr_22946 = state_22925;
(statearr_22946[(7)] = inst_22885__$1);

(statearr_22946[(14)] = inst_22898);

(statearr_22946[(8)] = inst_22886);

return statearr_22946;
})();
var statearr_22947_22970 = state_22925__$1;
(statearr_22947_22970[(2)] = null);

(statearr_22947_22970[(1)] = (2));


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
});})(c__17745__auto___22956,out))
;
return ((function (switch__17683__auto__,c__17745__auto___22956,out){
return (function() {
var cljs$core$async$state_machine__17684__auto__ = null;
var cljs$core$async$state_machine__17684__auto____0 = (function (){
var statearr_22951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22951[(0)] = cljs$core$async$state_machine__17684__auto__);

(statearr_22951[(1)] = (1));

return statearr_22951;
});
var cljs$core$async$state_machine__17684__auto____1 = (function (state_22925){
while(true){
var ret_value__17685__auto__ = (function (){try{while(true){
var result__17686__auto__ = switch__17683__auto__.call(null,state_22925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17686__auto__;
}
break;
}
}catch (e22952){if((e22952 instanceof Object)){
var ex__17687__auto__ = e22952;
var statearr_22953_22971 = state_22925;
(statearr_22953_22971[(5)] = ex__17687__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22972 = state_22925;
state_22925 = G__22972;
continue;
} else {
return ret_value__17685__auto__;
}
break;
}
});
cljs$core$async$state_machine__17684__auto__ = function(state_22925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17684__auto____1.call(this,state_22925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17684__auto____0;
cljs$core$async$state_machine__17684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17684__auto____1;
return cljs$core$async$state_machine__17684__auto__;
})()
;})(switch__17683__auto__,c__17745__auto___22956,out))
})();
var state__17747__auto__ = (function (){var statearr_22954 = f__17746__auto__.call(null);
(statearr_22954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17745__auto___22956);

return statearr_22954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17747__auto__);
});})(c__17745__auto___22956,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map