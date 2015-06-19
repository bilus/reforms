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
if(typeof cljs.core.async.t28721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28721 = (function (fn_handler,f,meta28722){
this.fn_handler = fn_handler;
this.f = f;
this.meta28722 = meta28722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28723,meta28722__$1){
var self__ = this;
var _28723__$1 = this;
return (new cljs.core.async.t28721(self__.fn_handler,self__.f,meta28722__$1));
});

cljs.core.async.t28721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28723){
var self__ = this;
var _28723__$1 = this;
return self__.meta28722;
});

cljs.core.async.t28721.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28722","meta28722",-1438275926,null)], null);
});

cljs.core.async.t28721.cljs$lang$type = true;

cljs.core.async.t28721.cljs$lang$ctorStr = "cljs.core.async/t28721";

cljs.core.async.t28721.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t28721");
});

cljs.core.async.__GT_t28721 = (function cljs$core$async$fn_handler_$___GT_t28721(fn_handler__$1,f__$1,meta28722){
return (new cljs.core.async.t28721(fn_handler__$1,f__$1,meta28722));
});

}

return (new cljs.core.async.t28721(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28725 = buff;
if(G__28725){
var bit__5023__auto__ = null;
if(cljs.core.truth_((function (){var or__4349__auto__ = bit__5023__auto__;
if(cljs.core.truth_(or__4349__auto__)){
return or__4349__auto__;
} else {
return G__28725.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28725.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28725);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28725);
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
var G__28727 = arguments.length;
switch (G__28727) {
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
var G__28730 = arguments.length;
switch (G__28730) {
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
var val_28732 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28732);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28732,ret){
return (function (){
return fn1.call(null,val_28732);
});})(val_28732,ret))
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
var G__28734 = arguments.length;
switch (G__28734) {
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
var n__5234__auto___28736 = n;
var x_28737 = (0);
while(true){
if((x_28737 < n__5234__auto___28736)){
(a[x_28737] = (0));

var G__28738 = (x_28737 + (1));
x_28737 = G__28738;
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

var G__28739 = (i + (1));
i = G__28739;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28743 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28743 = (function (alt_flag,flag,meta28744){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28744 = meta28744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28745,meta28744__$1){
var self__ = this;
var _28745__$1 = this;
return (new cljs.core.async.t28743(self__.alt_flag,self__.flag,meta28744__$1));
});})(flag))
;

cljs.core.async.t28743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28745){
var self__ = this;
var _28745__$1 = this;
return self__.meta28744;
});})(flag))
;

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28743.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28744","meta28744",-1219143562,null)], null);
});})(flag))
;

cljs.core.async.t28743.cljs$lang$type = true;

cljs.core.async.t28743.cljs$lang$ctorStr = "cljs.core.async/t28743";

cljs.core.async.t28743.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t28743");
});})(flag))
;

cljs.core.async.__GT_t28743 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28743(alt_flag__$1,flag__$1,meta28744){
return (new cljs.core.async.t28743(alt_flag__$1,flag__$1,meta28744));
});})(flag))
;

}

return (new cljs.core.async.t28743(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28749 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28749 = (function (alt_handler,flag,cb,meta28750){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28750 = meta28750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28751,meta28750__$1){
var self__ = this;
var _28751__$1 = this;
return (new cljs.core.async.t28749(self__.alt_handler,self__.flag,self__.cb,meta28750__$1));
});

cljs.core.async.t28749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28751){
var self__ = this;
var _28751__$1 = this;
return self__.meta28750;
});

cljs.core.async.t28749.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28750","meta28750",8450799,null)], null);
});

cljs.core.async.t28749.cljs$lang$type = true;

cljs.core.async.t28749.cljs$lang$ctorStr = "cljs.core.async/t28749";

cljs.core.async.t28749.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t28749");
});

cljs.core.async.__GT_t28749 = (function cljs$core$async$alt_handler_$___GT_t28749(alt_handler__$1,flag__$1,cb__$1,meta28750){
return (new cljs.core.async.t28749(alt_handler__$1,flag__$1,cb__$1,meta28750));
});

}

return (new cljs.core.async.t28749(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28752_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28753_SHARP_,port], null));
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
var G__28754 = (i + (1));
i = G__28754;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28757){
var map__28758 = p__28757;
var map__28758__$1 = ((cljs.core.seq_QMARK_.call(null,map__28758))?cljs.core.apply.call(null,cljs.core.hash_map,map__28758):map__28758);
var opts = map__28758__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28755){
var G__28756 = cljs.core.first.call(null,seq28755);
var seq28755__$1 = cljs.core.next.call(null,seq28755);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28756,seq28755__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28760 = arguments.length;
switch (G__28760) {
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
var c__25412__auto___28809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___28809){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___28809){
return (function (state_28784){
var state_val_28785 = (state_28784[(1)]);
if((state_val_28785 === (7))){
var inst_28780 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28786_28810 = state_28784__$1;
(statearr_28786_28810[(2)] = inst_28780);

(statearr_28786_28810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (1))){
var state_28784__$1 = state_28784;
var statearr_28787_28811 = state_28784__$1;
(statearr_28787_28811[(2)] = null);

(statearr_28787_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (4))){
var inst_28763 = (state_28784[(7)]);
var inst_28763__$1 = (state_28784[(2)]);
var inst_28764 = (inst_28763__$1 == null);
var state_28784__$1 = (function (){var statearr_28788 = state_28784;
(statearr_28788[(7)] = inst_28763__$1);

return statearr_28788;
})();
if(cljs.core.truth_(inst_28764)){
var statearr_28789_28812 = state_28784__$1;
(statearr_28789_28812[(1)] = (5));

} else {
var statearr_28790_28813 = state_28784__$1;
(statearr_28790_28813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (13))){
var state_28784__$1 = state_28784;
var statearr_28791_28814 = state_28784__$1;
(statearr_28791_28814[(2)] = null);

(statearr_28791_28814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (6))){
var inst_28763 = (state_28784[(7)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28784__$1,(11),to,inst_28763);
} else {
if((state_val_28785 === (3))){
var inst_28782 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28784__$1,inst_28782);
} else {
if((state_val_28785 === (12))){
var state_28784__$1 = state_28784;
var statearr_28792_28815 = state_28784__$1;
(statearr_28792_28815[(2)] = null);

(statearr_28792_28815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (2))){
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28784__$1,(4),from);
} else {
if((state_val_28785 === (11))){
var inst_28773 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
if(cljs.core.truth_(inst_28773)){
var statearr_28793_28816 = state_28784__$1;
(statearr_28793_28816[(1)] = (12));

} else {
var statearr_28794_28817 = state_28784__$1;
(statearr_28794_28817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (9))){
var state_28784__$1 = state_28784;
var statearr_28795_28818 = state_28784__$1;
(statearr_28795_28818[(2)] = null);

(statearr_28795_28818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (5))){
var state_28784__$1 = state_28784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28796_28819 = state_28784__$1;
(statearr_28796_28819[(1)] = (8));

} else {
var statearr_28797_28820 = state_28784__$1;
(statearr_28797_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (14))){
var inst_28778 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28798_28821 = state_28784__$1;
(statearr_28798_28821[(2)] = inst_28778);

(statearr_28798_28821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (10))){
var inst_28770 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28799_28822 = state_28784__$1;
(statearr_28799_28822[(2)] = inst_28770);

(statearr_28799_28822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (8))){
var inst_28767 = cljs.core.async.close_BANG_.call(null,to);
var state_28784__$1 = state_28784;
var statearr_28800_28823 = state_28784__$1;
(statearr_28800_28823[(2)] = inst_28767);

(statearr_28800_28823[(1)] = (10));


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
});})(c__25412__auto___28809))
;
return ((function (switch__25350__auto__,c__25412__auto___28809){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_28804 = [null,null,null,null,null,null,null,null];
(statearr_28804[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_28804[(1)] = (1));

return statearr_28804;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_28784){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_28784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object)){
var ex__25354__auto__ = e28805;
var statearr_28806_28824 = state_28784;
(statearr_28806_28824[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28825 = state_28784;
state_28784 = G__28825;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_28784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_28784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___28809))
})();
var state__25414__auto__ = (function (){var statearr_28807 = f__25413__auto__.call(null);
(statearr_28807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___28809);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___28809))
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
return (function (p__29009){
var vec__29010 = p__29009;
var v = cljs.core.nth.call(null,vec__29010,(0),null);
var p = cljs.core.nth.call(null,vec__29010,(1),null);
var job = vec__29010;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25412__auto___29192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___29192,res,vec__29010,v,p,job,jobs,results){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___29192,res,vec__29010,v,p,job,jobs,results){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (1))){
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29015__$1,(2),res,v);
} else {
if((state_val_29016 === (2))){
var inst_29012 = (state_29015[(2)]);
var inst_29013 = cljs.core.async.close_BANG_.call(null,res);
var state_29015__$1 = (function (){var statearr_29017 = state_29015;
(statearr_29017[(7)] = inst_29012);

return statearr_29017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else {
return null;
}
}
});})(c__25412__auto___29192,res,vec__29010,v,p,job,jobs,results))
;
return ((function (switch__25350__auto__,c__25412__auto___29192,res,vec__29010,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0 = (function (){
var statearr_29021 = [null,null,null,null,null,null,null,null];
(statearr_29021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__);

(statearr_29021[(1)] = (1));

return statearr_29021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1 = (function (state_29015){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29022){if((e29022 instanceof Object)){
var ex__25354__auto__ = e29022;
var statearr_29023_29193 = state_29015;
(statearr_29023_29193[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_29015;
state_29015 = G__29194;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___29192,res,vec__29010,v,p,job,jobs,results))
})();
var state__25414__auto__ = (function (){var statearr_29024 = f__25413__auto__.call(null);
(statearr_29024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___29192);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___29192,res,vec__29010,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29025){
var vec__29026 = p__29025;
var v = cljs.core.nth.call(null,vec__29026,(0),null);
var p = cljs.core.nth.call(null,vec__29026,(1),null);
var job = vec__29026;
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
var n__5234__auto___29195 = n;
var __29196 = (0);
while(true){
if((__29196 < n__5234__auto___29195)){
var G__29027_29197 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29027_29197) {
case "compute":
var c__25412__auto___29199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29196,c__25412__auto___29199,G__29027_29197,n__5234__auto___29195,jobs,results,process,async){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (__29196,c__25412__auto___29199,G__29027_29197,n__5234__auto___29195,jobs,results,process,async){
return (function (state_29040){
var state_val_29041 = (state_29040[(1)]);
if((state_val_29041 === (1))){
var state_29040__$1 = state_29040;
var statearr_29042_29200 = state_29040__$1;
(statearr_29042_29200[(2)] = null);

(statearr_29042_29200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (2))){
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29040__$1,(4),jobs);
} else {
if((state_val_29041 === (3))){
var inst_29038 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29040__$1,inst_29038);
} else {
if((state_val_29041 === (4))){
var inst_29030 = (state_29040[(2)]);
var inst_29031 = process.call(null,inst_29030);
var state_29040__$1 = state_29040;
if(cljs.core.truth_(inst_29031)){
var statearr_29043_29201 = state_29040__$1;
(statearr_29043_29201[(1)] = (5));

} else {
var statearr_29044_29202 = state_29040__$1;
(statearr_29044_29202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (5))){
var state_29040__$1 = state_29040;
var statearr_29045_29203 = state_29040__$1;
(statearr_29045_29203[(2)] = null);

(statearr_29045_29203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (6))){
var state_29040__$1 = state_29040;
var statearr_29046_29204 = state_29040__$1;
(statearr_29046_29204[(2)] = null);

(statearr_29046_29204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (7))){
var inst_29036 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29047_29205 = state_29040__$1;
(statearr_29047_29205[(2)] = inst_29036);

(statearr_29047_29205[(1)] = (3));


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
});})(__29196,c__25412__auto___29199,G__29027_29197,n__5234__auto___29195,jobs,results,process,async))
;
return ((function (__29196,switch__25350__auto__,c__25412__auto___29199,G__29027_29197,n__5234__auto___29195,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0 = (function (){
var statearr_29051 = [null,null,null,null,null,null,null];
(statearr_29051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__);

(statearr_29051[(1)] = (1));

return statearr_29051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1 = (function (state_29040){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29052){if((e29052 instanceof Object)){
var ex__25354__auto__ = e29052;
var statearr_29053_29206 = state_29040;
(statearr_29053_29206[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29207 = state_29040;
state_29040 = G__29207;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = function(state_29040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1.call(this,state_29040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__;
})()
;})(__29196,switch__25350__auto__,c__25412__auto___29199,G__29027_29197,n__5234__auto___29195,jobs,results,process,async))
})();
var state__25414__auto__ = (function (){var statearr_29054 = f__25413__auto__.call(null);
(statearr_29054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___29199);

return statearr_29054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(__29196,c__25412__auto___29199,G__29027_29197,n__5234__auto___29195,jobs,results,process,async))
);


break;
case "async":
var c__25412__auto___29208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29196,c__25412__auto___29208,G__29027_29197,n__5234__auto___29195,jobs,results,process,async){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (__29196,c__25412__auto___29208,G__29027_29197,n__5234__auto___29195,jobs,results,process,async){
return (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (1))){
var state_29067__$1 = state_29067;
var statearr_29069_29209 = state_29067__$1;
(statearr_29069_29209[(2)] = null);

(statearr_29069_29209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (2))){
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(4),jobs);
} else {
if((state_val_29068 === (3))){
var inst_29065 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29067__$1,inst_29065);
} else {
if((state_val_29068 === (4))){
var inst_29057 = (state_29067[(2)]);
var inst_29058 = async.call(null,inst_29057);
var state_29067__$1 = state_29067;
if(cljs.core.truth_(inst_29058)){
var statearr_29070_29210 = state_29067__$1;
(statearr_29070_29210[(1)] = (5));

} else {
var statearr_29071_29211 = state_29067__$1;
(statearr_29071_29211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (5))){
var state_29067__$1 = state_29067;
var statearr_29072_29212 = state_29067__$1;
(statearr_29072_29212[(2)] = null);

(statearr_29072_29212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (6))){
var state_29067__$1 = state_29067;
var statearr_29073_29213 = state_29067__$1;
(statearr_29073_29213[(2)] = null);

(statearr_29073_29213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (7))){
var inst_29063 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29074_29214 = state_29067__$1;
(statearr_29074_29214[(2)] = inst_29063);

(statearr_29074_29214[(1)] = (3));


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
});})(__29196,c__25412__auto___29208,G__29027_29197,n__5234__auto___29195,jobs,results,process,async))
;
return ((function (__29196,switch__25350__auto__,c__25412__auto___29208,G__29027_29197,n__5234__auto___29195,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0 = (function (){
var statearr_29078 = [null,null,null,null,null,null,null];
(statearr_29078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__);

(statearr_29078[(1)] = (1));

return statearr_29078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1 = (function (state_29067){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29079){if((e29079 instanceof Object)){
var ex__25354__auto__ = e29079;
var statearr_29080_29215 = state_29067;
(statearr_29080_29215[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29216 = state_29067;
state_29067 = G__29216;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__;
})()
;})(__29196,switch__25350__auto__,c__25412__auto___29208,G__29027_29197,n__5234__auto___29195,jobs,results,process,async))
})();
var state__25414__auto__ = (function (){var statearr_29081 = f__25413__auto__.call(null);
(statearr_29081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___29208);

return statearr_29081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(__29196,c__25412__auto___29208,G__29027_29197,n__5234__auto___29195,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29217 = (__29196 + (1));
__29196 = G__29217;
continue;
} else {
}
break;
}

var c__25412__auto___29218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___29218,jobs,results,process,async){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___29218,jobs,results,process,async){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (1))){
var state_29103__$1 = state_29103;
var statearr_29105_29219 = state_29103__$1;
(statearr_29105_29219[(2)] = null);

(statearr_29105_29219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (2))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),from);
} else {
if((state_val_29104 === (3))){
var inst_29101 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (4))){
var inst_29084 = (state_29103[(7)]);
var inst_29084__$1 = (state_29103[(2)]);
var inst_29085 = (inst_29084__$1 == null);
var state_29103__$1 = (function (){var statearr_29106 = state_29103;
(statearr_29106[(7)] = inst_29084__$1);

return statearr_29106;
})();
if(cljs.core.truth_(inst_29085)){
var statearr_29107_29220 = state_29103__$1;
(statearr_29107_29220[(1)] = (5));

} else {
var statearr_29108_29221 = state_29103__$1;
(statearr_29108_29221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (5))){
var inst_29087 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29103__$1 = state_29103;
var statearr_29109_29222 = state_29103__$1;
(statearr_29109_29222[(2)] = inst_29087);

(statearr_29109_29222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var inst_29084 = (state_29103[(7)]);
var inst_29089 = (state_29103[(8)]);
var inst_29089__$1 = cljs.core.async.chan.call(null,(1));
var inst_29090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29091 = [inst_29084,inst_29089__$1];
var inst_29092 = (new cljs.core.PersistentVector(null,2,(5),inst_29090,inst_29091,null));
var state_29103__$1 = (function (){var statearr_29110 = state_29103;
(statearr_29110[(8)] = inst_29089__$1);

return statearr_29110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(8),jobs,inst_29092);
} else {
if((state_val_29104 === (7))){
var inst_29099 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29111_29223 = state_29103__$1;
(statearr_29111_29223[(2)] = inst_29099);

(statearr_29111_29223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (8))){
var inst_29089 = (state_29103[(8)]);
var inst_29094 = (state_29103[(2)]);
var state_29103__$1 = (function (){var statearr_29112 = state_29103;
(statearr_29112[(9)] = inst_29094);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(9),results,inst_29089);
} else {
if((state_val_29104 === (9))){
var inst_29096 = (state_29103[(2)]);
var state_29103__$1 = (function (){var statearr_29113 = state_29103;
(statearr_29113[(10)] = inst_29096);

return statearr_29113;
})();
var statearr_29114_29224 = state_29103__$1;
(statearr_29114_29224[(2)] = null);

(statearr_29114_29224[(1)] = (2));


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
});})(c__25412__auto___29218,jobs,results,process,async))
;
return ((function (switch__25350__auto__,c__25412__auto___29218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0 = (function (){
var statearr_29118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__);

(statearr_29118[(1)] = (1));

return statearr_29118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1 = (function (state_29103){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29119){if((e29119 instanceof Object)){
var ex__25354__auto__ = e29119;
var statearr_29120_29225 = state_29103;
(statearr_29120_29225[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29226 = state_29103;
state_29103 = G__29226;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___29218,jobs,results,process,async))
})();
var state__25414__auto__ = (function (){var statearr_29121 = f__25413__auto__.call(null);
(statearr_29121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___29218);

return statearr_29121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___29218,jobs,results,process,async))
);


var c__25412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto__,jobs,results,process,async){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto__,jobs,results,process,async){
return (function (state_29159){
var state_val_29160 = (state_29159[(1)]);
if((state_val_29160 === (7))){
var inst_29155 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29161_29227 = state_29159__$1;
(statearr_29161_29227[(2)] = inst_29155);

(statearr_29161_29227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (20))){
var state_29159__$1 = state_29159;
var statearr_29162_29228 = state_29159__$1;
(statearr_29162_29228[(2)] = null);

(statearr_29162_29228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (1))){
var state_29159__$1 = state_29159;
var statearr_29163_29229 = state_29159__$1;
(statearr_29163_29229[(2)] = null);

(statearr_29163_29229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (4))){
var inst_29124 = (state_29159[(7)]);
var inst_29124__$1 = (state_29159[(2)]);
var inst_29125 = (inst_29124__$1 == null);
var state_29159__$1 = (function (){var statearr_29164 = state_29159;
(statearr_29164[(7)] = inst_29124__$1);

return statearr_29164;
})();
if(cljs.core.truth_(inst_29125)){
var statearr_29165_29230 = state_29159__$1;
(statearr_29165_29230[(1)] = (5));

} else {
var statearr_29166_29231 = state_29159__$1;
(statearr_29166_29231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (15))){
var inst_29137 = (state_29159[(8)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29159__$1,(18),to,inst_29137);
} else {
if((state_val_29160 === (21))){
var inst_29150 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29167_29232 = state_29159__$1;
(statearr_29167_29232[(2)] = inst_29150);

(statearr_29167_29232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (13))){
var inst_29152 = (state_29159[(2)]);
var state_29159__$1 = (function (){var statearr_29168 = state_29159;
(statearr_29168[(9)] = inst_29152);

return statearr_29168;
})();
var statearr_29169_29233 = state_29159__$1;
(statearr_29169_29233[(2)] = null);

(statearr_29169_29233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (6))){
var inst_29124 = (state_29159[(7)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29159__$1,(11),inst_29124);
} else {
if((state_val_29160 === (17))){
var inst_29145 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
if(cljs.core.truth_(inst_29145)){
var statearr_29170_29234 = state_29159__$1;
(statearr_29170_29234[(1)] = (19));

} else {
var statearr_29171_29235 = state_29159__$1;
(statearr_29171_29235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (3))){
var inst_29157 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29159__$1,inst_29157);
} else {
if((state_val_29160 === (12))){
var inst_29134 = (state_29159[(10)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29159__$1,(14),inst_29134);
} else {
if((state_val_29160 === (2))){
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29159__$1,(4),results);
} else {
if((state_val_29160 === (19))){
var state_29159__$1 = state_29159;
var statearr_29172_29236 = state_29159__$1;
(statearr_29172_29236[(2)] = null);

(statearr_29172_29236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (11))){
var inst_29134 = (state_29159[(2)]);
var state_29159__$1 = (function (){var statearr_29173 = state_29159;
(statearr_29173[(10)] = inst_29134);

return statearr_29173;
})();
var statearr_29174_29237 = state_29159__$1;
(statearr_29174_29237[(2)] = null);

(statearr_29174_29237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (9))){
var state_29159__$1 = state_29159;
var statearr_29175_29238 = state_29159__$1;
(statearr_29175_29238[(2)] = null);

(statearr_29175_29238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (5))){
var state_29159__$1 = state_29159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29176_29239 = state_29159__$1;
(statearr_29176_29239[(1)] = (8));

} else {
var statearr_29177_29240 = state_29159__$1;
(statearr_29177_29240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (14))){
var inst_29139 = (state_29159[(11)]);
var inst_29137 = (state_29159[(8)]);
var inst_29137__$1 = (state_29159[(2)]);
var inst_29138 = (inst_29137__$1 == null);
var inst_29139__$1 = cljs.core.not.call(null,inst_29138);
var state_29159__$1 = (function (){var statearr_29178 = state_29159;
(statearr_29178[(11)] = inst_29139__$1);

(statearr_29178[(8)] = inst_29137__$1);

return statearr_29178;
})();
if(inst_29139__$1){
var statearr_29179_29241 = state_29159__$1;
(statearr_29179_29241[(1)] = (15));

} else {
var statearr_29180_29242 = state_29159__$1;
(statearr_29180_29242[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (16))){
var inst_29139 = (state_29159[(11)]);
var state_29159__$1 = state_29159;
var statearr_29181_29243 = state_29159__$1;
(statearr_29181_29243[(2)] = inst_29139);

(statearr_29181_29243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (10))){
var inst_29131 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29182_29244 = state_29159__$1;
(statearr_29182_29244[(2)] = inst_29131);

(statearr_29182_29244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (18))){
var inst_29142 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29183_29245 = state_29159__$1;
(statearr_29183_29245[(2)] = inst_29142);

(statearr_29183_29245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (8))){
var inst_29128 = cljs.core.async.close_BANG_.call(null,to);
var state_29159__$1 = state_29159;
var statearr_29184_29246 = state_29159__$1;
(statearr_29184_29246[(2)] = inst_29128);

(statearr_29184_29246[(1)] = (10));


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
});})(c__25412__auto__,jobs,results,process,async))
;
return ((function (switch__25350__auto__,c__25412__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1 = (function (state_29159){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__25354__auto__ = e29189;
var statearr_29190_29247 = state_29159;
(statearr_29190_29247[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29248 = state_29159;
state_29159 = G__29248;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__ = function(state_29159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1.call(this,state_29159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25351__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto__,jobs,results,process,async))
})();
var state__25414__auto__ = (function (){var statearr_29191 = f__25413__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto__);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto__,jobs,results,process,async))
);

return c__25412__auto__;
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
var G__29250 = arguments.length;
switch (G__29250) {
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
var G__29253 = arguments.length;
switch (G__29253) {
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
var G__29256 = arguments.length;
switch (G__29256) {
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
var c__25412__auto___29308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___29308,tc,fc){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___29308,tc,fc){
return (function (state_29282){
var state_val_29283 = (state_29282[(1)]);
if((state_val_29283 === (7))){
var inst_29278 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29284_29309 = state_29282__$1;
(statearr_29284_29309[(2)] = inst_29278);

(statearr_29284_29309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (1))){
var state_29282__$1 = state_29282;
var statearr_29285_29310 = state_29282__$1;
(statearr_29285_29310[(2)] = null);

(statearr_29285_29310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (4))){
var inst_29259 = (state_29282[(7)]);
var inst_29259__$1 = (state_29282[(2)]);
var inst_29260 = (inst_29259__$1 == null);
var state_29282__$1 = (function (){var statearr_29286 = state_29282;
(statearr_29286[(7)] = inst_29259__$1);

return statearr_29286;
})();
if(cljs.core.truth_(inst_29260)){
var statearr_29287_29311 = state_29282__$1;
(statearr_29287_29311[(1)] = (5));

} else {
var statearr_29288_29312 = state_29282__$1;
(statearr_29288_29312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (13))){
var state_29282__$1 = state_29282;
var statearr_29289_29313 = state_29282__$1;
(statearr_29289_29313[(2)] = null);

(statearr_29289_29313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (6))){
var inst_29259 = (state_29282[(7)]);
var inst_29265 = p.call(null,inst_29259);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29265)){
var statearr_29290_29314 = state_29282__$1;
(statearr_29290_29314[(1)] = (9));

} else {
var statearr_29291_29315 = state_29282__$1;
(statearr_29291_29315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (3))){
var inst_29280 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29282__$1,inst_29280);
} else {
if((state_val_29283 === (12))){
var state_29282__$1 = state_29282;
var statearr_29292_29316 = state_29282__$1;
(statearr_29292_29316[(2)] = null);

(statearr_29292_29316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (2))){
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29282__$1,(4),ch);
} else {
if((state_val_29283 === (11))){
var inst_29259 = (state_29282[(7)]);
var inst_29269 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29282__$1,(8),inst_29269,inst_29259);
} else {
if((state_val_29283 === (9))){
var state_29282__$1 = state_29282;
var statearr_29293_29317 = state_29282__$1;
(statearr_29293_29317[(2)] = tc);

(statearr_29293_29317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (5))){
var inst_29262 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29263 = cljs.core.async.close_BANG_.call(null,fc);
var state_29282__$1 = (function (){var statearr_29294 = state_29282;
(statearr_29294[(8)] = inst_29262);

return statearr_29294;
})();
var statearr_29295_29318 = state_29282__$1;
(statearr_29295_29318[(2)] = inst_29263);

(statearr_29295_29318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (14))){
var inst_29276 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29296_29319 = state_29282__$1;
(statearr_29296_29319[(2)] = inst_29276);

(statearr_29296_29319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (10))){
var state_29282__$1 = state_29282;
var statearr_29297_29320 = state_29282__$1;
(statearr_29297_29320[(2)] = fc);

(statearr_29297_29320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (8))){
var inst_29271 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29271)){
var statearr_29298_29321 = state_29282__$1;
(statearr_29298_29321[(1)] = (12));

} else {
var statearr_29299_29322 = state_29282__$1;
(statearr_29299_29322[(1)] = (13));

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
});})(c__25412__auto___29308,tc,fc))
;
return ((function (switch__25350__auto__,c__25412__auto___29308,tc,fc){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_29303 = [null,null,null,null,null,null,null,null,null];
(statearr_29303[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_29303[(1)] = (1));

return statearr_29303;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_29282){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29304){if((e29304 instanceof Object)){
var ex__25354__auto__ = e29304;
var statearr_29305_29323 = state_29282;
(statearr_29305_29323[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29324 = state_29282;
state_29282 = G__29324;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_29282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_29282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___29308,tc,fc))
})();
var state__25414__auto__ = (function (){var statearr_29306 = f__25413__auto__.call(null);
(statearr_29306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___29308);

return statearr_29306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___29308,tc,fc))
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
var c__25412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto__){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto__){
return (function (state_29371){
var state_val_29372 = (state_29371[(1)]);
if((state_val_29372 === (1))){
var inst_29357 = init;
var state_29371__$1 = (function (){var statearr_29373 = state_29371;
(statearr_29373[(7)] = inst_29357);

return statearr_29373;
})();
var statearr_29374_29389 = state_29371__$1;
(statearr_29374_29389[(2)] = null);

(statearr_29374_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (2))){
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29371__$1,(4),ch);
} else {
if((state_val_29372 === (3))){
var inst_29369 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29371__$1,inst_29369);
} else {
if((state_val_29372 === (4))){
var inst_29360 = (state_29371[(8)]);
var inst_29360__$1 = (state_29371[(2)]);
var inst_29361 = (inst_29360__$1 == null);
var state_29371__$1 = (function (){var statearr_29375 = state_29371;
(statearr_29375[(8)] = inst_29360__$1);

return statearr_29375;
})();
if(cljs.core.truth_(inst_29361)){
var statearr_29376_29390 = state_29371__$1;
(statearr_29376_29390[(1)] = (5));

} else {
var statearr_29377_29391 = state_29371__$1;
(statearr_29377_29391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (5))){
var inst_29357 = (state_29371[(7)]);
var state_29371__$1 = state_29371;
var statearr_29378_29392 = state_29371__$1;
(statearr_29378_29392[(2)] = inst_29357);

(statearr_29378_29392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (6))){
var inst_29357 = (state_29371[(7)]);
var inst_29360 = (state_29371[(8)]);
var inst_29364 = f.call(null,inst_29357,inst_29360);
var inst_29357__$1 = inst_29364;
var state_29371__$1 = (function (){var statearr_29379 = state_29371;
(statearr_29379[(7)] = inst_29357__$1);

return statearr_29379;
})();
var statearr_29380_29393 = state_29371__$1;
(statearr_29380_29393[(2)] = null);

(statearr_29380_29393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (7))){
var inst_29367 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
var statearr_29381_29394 = state_29371__$1;
(statearr_29381_29394[(2)] = inst_29367);

(statearr_29381_29394[(1)] = (3));


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
});})(c__25412__auto__))
;
return ((function (switch__25350__auto__,c__25412__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25351__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25351__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = cljs$core$async$reduce_$_state_machine__25351__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var cljs$core$async$reduce_$_state_machine__25351__auto____1 = (function (state_29371){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29386){if((e29386 instanceof Object)){
var ex__25354__auto__ = e29386;
var statearr_29387_29395 = state_29371;
(statearr_29387_29395[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29396 = state_29371;
state_29371 = G__29396;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25351__auto__ = function(state_29371){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25351__auto____1.call(this,state_29371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25351__auto____0;
cljs$core$async$reduce_$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25351__auto____1;
return cljs$core$async$reduce_$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto__))
})();
var state__25414__auto__ = (function (){var statearr_29388 = f__25413__auto__.call(null);
(statearr_29388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto__);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto__))
);

return c__25412__auto__;
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
var G__29398 = arguments.length;
switch (G__29398) {
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
var c__25412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto__){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto__){
return (function (state_29423){
var state_val_29424 = (state_29423[(1)]);
if((state_val_29424 === (7))){
var inst_29405 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
var statearr_29425_29449 = state_29423__$1;
(statearr_29425_29449[(2)] = inst_29405);

(statearr_29425_29449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (1))){
var inst_29399 = cljs.core.seq.call(null,coll);
var inst_29400 = inst_29399;
var state_29423__$1 = (function (){var statearr_29426 = state_29423;
(statearr_29426[(7)] = inst_29400);

return statearr_29426;
})();
var statearr_29427_29450 = state_29423__$1;
(statearr_29427_29450[(2)] = null);

(statearr_29427_29450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (4))){
var inst_29400 = (state_29423[(7)]);
var inst_29403 = cljs.core.first.call(null,inst_29400);
var state_29423__$1 = state_29423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29423__$1,(7),ch,inst_29403);
} else {
if((state_val_29424 === (13))){
var inst_29417 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
var statearr_29428_29451 = state_29423__$1;
(statearr_29428_29451[(2)] = inst_29417);

(statearr_29428_29451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (6))){
var inst_29408 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
if(cljs.core.truth_(inst_29408)){
var statearr_29429_29452 = state_29423__$1;
(statearr_29429_29452[(1)] = (8));

} else {
var statearr_29430_29453 = state_29423__$1;
(statearr_29430_29453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (3))){
var inst_29421 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29423__$1,inst_29421);
} else {
if((state_val_29424 === (12))){
var state_29423__$1 = state_29423;
var statearr_29431_29454 = state_29423__$1;
(statearr_29431_29454[(2)] = null);

(statearr_29431_29454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (2))){
var inst_29400 = (state_29423[(7)]);
var state_29423__$1 = state_29423;
if(cljs.core.truth_(inst_29400)){
var statearr_29432_29455 = state_29423__$1;
(statearr_29432_29455[(1)] = (4));

} else {
var statearr_29433_29456 = state_29423__$1;
(statearr_29433_29456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (11))){
var inst_29414 = cljs.core.async.close_BANG_.call(null,ch);
var state_29423__$1 = state_29423;
var statearr_29434_29457 = state_29423__$1;
(statearr_29434_29457[(2)] = inst_29414);

(statearr_29434_29457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (9))){
var state_29423__$1 = state_29423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29435_29458 = state_29423__$1;
(statearr_29435_29458[(1)] = (11));

} else {
var statearr_29436_29459 = state_29423__$1;
(statearr_29436_29459[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (5))){
var inst_29400 = (state_29423[(7)]);
var state_29423__$1 = state_29423;
var statearr_29437_29460 = state_29423__$1;
(statearr_29437_29460[(2)] = inst_29400);

(statearr_29437_29460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (10))){
var inst_29419 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
var statearr_29438_29461 = state_29423__$1;
(statearr_29438_29461[(2)] = inst_29419);

(statearr_29438_29461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (8))){
var inst_29400 = (state_29423[(7)]);
var inst_29410 = cljs.core.next.call(null,inst_29400);
var inst_29400__$1 = inst_29410;
var state_29423__$1 = (function (){var statearr_29439 = state_29423;
(statearr_29439[(7)] = inst_29400__$1);

return statearr_29439;
})();
var statearr_29440_29462 = state_29423__$1;
(statearr_29440_29462[(2)] = null);

(statearr_29440_29462[(1)] = (2));


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
});})(c__25412__auto__))
;
return ((function (switch__25350__auto__,c__25412__auto__){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_29444 = [null,null,null,null,null,null,null,null];
(statearr_29444[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_29444[(1)] = (1));

return statearr_29444;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_29423){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29445){if((e29445 instanceof Object)){
var ex__25354__auto__ = e29445;
var statearr_29446_29463 = state_29423;
(statearr_29446_29463[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29464 = state_29423;
state_29423 = G__29464;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_29423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_29423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto__))
})();
var state__25414__auto__ = (function (){var statearr_29447 = f__25413__auto__.call(null);
(statearr_29447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto__);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto__))
);

return c__25412__auto__;
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

cljs.core.async.Mux = (function (){var obj29466 = {};
return obj29466;
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


cljs.core.async.Mult = (function (){var obj29468 = {};
return obj29468;
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
if(typeof cljs.core.async.t29690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29690 = (function (mult,ch,cs,meta29691){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29691 = meta29691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29692,meta29691__$1){
var self__ = this;
var _29692__$1 = this;
return (new cljs.core.async.t29690(self__.mult,self__.ch,self__.cs,meta29691__$1));
});})(cs))
;

cljs.core.async.t29690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29692){
var self__ = this;
var _29692__$1 = this;
return self__.meta29691;
});})(cs))
;

cljs.core.async.t29690.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29690.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29690.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29691","meta29691",782609240,null)], null);
});})(cs))
;

cljs.core.async.t29690.cljs$lang$type = true;

cljs.core.async.t29690.cljs$lang$ctorStr = "cljs.core.async/t29690";

cljs.core.async.t29690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t29690");
});})(cs))
;

cljs.core.async.__GT_t29690 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29690(mult__$1,ch__$1,cs__$1,meta29691){
return (new cljs.core.async.t29690(mult__$1,ch__$1,cs__$1,meta29691));
});})(cs))
;

}

return (new cljs.core.async.t29690(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25412__auto___29911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___29911,cs,m,dchan,dctr,done){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___29911,cs,m,dchan,dctr,done){
return (function (state_29823){
var state_val_29824 = (state_29823[(1)]);
if((state_val_29824 === (7))){
var inst_29819 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29825_29912 = state_29823__$1;
(statearr_29825_29912[(2)] = inst_29819);

(statearr_29825_29912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (20))){
var inst_29724 = (state_29823[(7)]);
var inst_29734 = cljs.core.first.call(null,inst_29724);
var inst_29735 = cljs.core.nth.call(null,inst_29734,(0),null);
var inst_29736 = cljs.core.nth.call(null,inst_29734,(1),null);
var state_29823__$1 = (function (){var statearr_29826 = state_29823;
(statearr_29826[(8)] = inst_29735);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29736)){
var statearr_29827_29913 = state_29823__$1;
(statearr_29827_29913[(1)] = (22));

} else {
var statearr_29828_29914 = state_29823__$1;
(statearr_29828_29914[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (27))){
var inst_29771 = (state_29823[(9)]);
var inst_29764 = (state_29823[(10)]);
var inst_29695 = (state_29823[(11)]);
var inst_29766 = (state_29823[(12)]);
var inst_29771__$1 = cljs.core._nth.call(null,inst_29764,inst_29766);
var inst_29772 = cljs.core.async.put_BANG_.call(null,inst_29771__$1,inst_29695,done);
var state_29823__$1 = (function (){var statearr_29829 = state_29823;
(statearr_29829[(9)] = inst_29771__$1);

return statearr_29829;
})();
if(cljs.core.truth_(inst_29772)){
var statearr_29830_29915 = state_29823__$1;
(statearr_29830_29915[(1)] = (30));

} else {
var statearr_29831_29916 = state_29823__$1;
(statearr_29831_29916[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (1))){
var state_29823__$1 = state_29823;
var statearr_29832_29917 = state_29823__$1;
(statearr_29832_29917[(2)] = null);

(statearr_29832_29917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (24))){
var inst_29724 = (state_29823[(7)]);
var inst_29741 = (state_29823[(2)]);
var inst_29742 = cljs.core.next.call(null,inst_29724);
var inst_29704 = inst_29742;
var inst_29705 = null;
var inst_29706 = (0);
var inst_29707 = (0);
var state_29823__$1 = (function (){var statearr_29833 = state_29823;
(statearr_29833[(13)] = inst_29706);

(statearr_29833[(14)] = inst_29741);

(statearr_29833[(15)] = inst_29704);

(statearr_29833[(16)] = inst_29705);

(statearr_29833[(17)] = inst_29707);

return statearr_29833;
})();
var statearr_29834_29918 = state_29823__$1;
(statearr_29834_29918[(2)] = null);

(statearr_29834_29918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (39))){
var state_29823__$1 = state_29823;
var statearr_29838_29919 = state_29823__$1;
(statearr_29838_29919[(2)] = null);

(statearr_29838_29919[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (4))){
var inst_29695 = (state_29823[(11)]);
var inst_29695__$1 = (state_29823[(2)]);
var inst_29696 = (inst_29695__$1 == null);
var state_29823__$1 = (function (){var statearr_29839 = state_29823;
(statearr_29839[(11)] = inst_29695__$1);

return statearr_29839;
})();
if(cljs.core.truth_(inst_29696)){
var statearr_29840_29920 = state_29823__$1;
(statearr_29840_29920[(1)] = (5));

} else {
var statearr_29841_29921 = state_29823__$1;
(statearr_29841_29921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (15))){
var inst_29706 = (state_29823[(13)]);
var inst_29704 = (state_29823[(15)]);
var inst_29705 = (state_29823[(16)]);
var inst_29707 = (state_29823[(17)]);
var inst_29720 = (state_29823[(2)]);
var inst_29721 = (inst_29707 + (1));
var tmp29835 = inst_29706;
var tmp29836 = inst_29704;
var tmp29837 = inst_29705;
var inst_29704__$1 = tmp29836;
var inst_29705__$1 = tmp29837;
var inst_29706__$1 = tmp29835;
var inst_29707__$1 = inst_29721;
var state_29823__$1 = (function (){var statearr_29842 = state_29823;
(statearr_29842[(13)] = inst_29706__$1);

(statearr_29842[(18)] = inst_29720);

(statearr_29842[(15)] = inst_29704__$1);

(statearr_29842[(16)] = inst_29705__$1);

(statearr_29842[(17)] = inst_29707__$1);

return statearr_29842;
})();
var statearr_29843_29922 = state_29823__$1;
(statearr_29843_29922[(2)] = null);

(statearr_29843_29922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (21))){
var inst_29745 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29847_29923 = state_29823__$1;
(statearr_29847_29923[(2)] = inst_29745);

(statearr_29847_29923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (31))){
var inst_29771 = (state_29823[(9)]);
var inst_29775 = done.call(null,null);
var inst_29776 = cljs.core.async.untap_STAR_.call(null,m,inst_29771);
var state_29823__$1 = (function (){var statearr_29848 = state_29823;
(statearr_29848[(19)] = inst_29775);

return statearr_29848;
})();
var statearr_29849_29924 = state_29823__$1;
(statearr_29849_29924[(2)] = inst_29776);

(statearr_29849_29924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (32))){
var inst_29763 = (state_29823[(20)]);
var inst_29764 = (state_29823[(10)]);
var inst_29765 = (state_29823[(21)]);
var inst_29766 = (state_29823[(12)]);
var inst_29778 = (state_29823[(2)]);
var inst_29779 = (inst_29766 + (1));
var tmp29844 = inst_29763;
var tmp29845 = inst_29764;
var tmp29846 = inst_29765;
var inst_29763__$1 = tmp29844;
var inst_29764__$1 = tmp29845;
var inst_29765__$1 = tmp29846;
var inst_29766__$1 = inst_29779;
var state_29823__$1 = (function (){var statearr_29850 = state_29823;
(statearr_29850[(20)] = inst_29763__$1);

(statearr_29850[(22)] = inst_29778);

(statearr_29850[(10)] = inst_29764__$1);

(statearr_29850[(21)] = inst_29765__$1);

(statearr_29850[(12)] = inst_29766__$1);

return statearr_29850;
})();
var statearr_29851_29925 = state_29823__$1;
(statearr_29851_29925[(2)] = null);

(statearr_29851_29925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (40))){
var inst_29791 = (state_29823[(23)]);
var inst_29795 = done.call(null,null);
var inst_29796 = cljs.core.async.untap_STAR_.call(null,m,inst_29791);
var state_29823__$1 = (function (){var statearr_29852 = state_29823;
(statearr_29852[(24)] = inst_29795);

return statearr_29852;
})();
var statearr_29853_29926 = state_29823__$1;
(statearr_29853_29926[(2)] = inst_29796);

(statearr_29853_29926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (33))){
var inst_29782 = (state_29823[(25)]);
var inst_29784 = cljs.core.chunked_seq_QMARK_.call(null,inst_29782);
var state_29823__$1 = state_29823;
if(inst_29784){
var statearr_29854_29927 = state_29823__$1;
(statearr_29854_29927[(1)] = (36));

} else {
var statearr_29855_29928 = state_29823__$1;
(statearr_29855_29928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (13))){
var inst_29714 = (state_29823[(26)]);
var inst_29717 = cljs.core.async.close_BANG_.call(null,inst_29714);
var state_29823__$1 = state_29823;
var statearr_29856_29929 = state_29823__$1;
(statearr_29856_29929[(2)] = inst_29717);

(statearr_29856_29929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (22))){
var inst_29735 = (state_29823[(8)]);
var inst_29738 = cljs.core.async.close_BANG_.call(null,inst_29735);
var state_29823__$1 = state_29823;
var statearr_29857_29930 = state_29823__$1;
(statearr_29857_29930[(2)] = inst_29738);

(statearr_29857_29930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (36))){
var inst_29782 = (state_29823[(25)]);
var inst_29786 = cljs.core.chunk_first.call(null,inst_29782);
var inst_29787 = cljs.core.chunk_rest.call(null,inst_29782);
var inst_29788 = cljs.core.count.call(null,inst_29786);
var inst_29763 = inst_29787;
var inst_29764 = inst_29786;
var inst_29765 = inst_29788;
var inst_29766 = (0);
var state_29823__$1 = (function (){var statearr_29858 = state_29823;
(statearr_29858[(20)] = inst_29763);

(statearr_29858[(10)] = inst_29764);

(statearr_29858[(21)] = inst_29765);

(statearr_29858[(12)] = inst_29766);

return statearr_29858;
})();
var statearr_29859_29931 = state_29823__$1;
(statearr_29859_29931[(2)] = null);

(statearr_29859_29931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (41))){
var inst_29782 = (state_29823[(25)]);
var inst_29798 = (state_29823[(2)]);
var inst_29799 = cljs.core.next.call(null,inst_29782);
var inst_29763 = inst_29799;
var inst_29764 = null;
var inst_29765 = (0);
var inst_29766 = (0);
var state_29823__$1 = (function (){var statearr_29860 = state_29823;
(statearr_29860[(20)] = inst_29763);

(statearr_29860[(10)] = inst_29764);

(statearr_29860[(27)] = inst_29798);

(statearr_29860[(21)] = inst_29765);

(statearr_29860[(12)] = inst_29766);

return statearr_29860;
})();
var statearr_29861_29932 = state_29823__$1;
(statearr_29861_29932[(2)] = null);

(statearr_29861_29932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (43))){
var state_29823__$1 = state_29823;
var statearr_29862_29933 = state_29823__$1;
(statearr_29862_29933[(2)] = null);

(statearr_29862_29933[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (29))){
var inst_29807 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29863_29934 = state_29823__$1;
(statearr_29863_29934[(2)] = inst_29807);

(statearr_29863_29934[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (44))){
var inst_29816 = (state_29823[(2)]);
var state_29823__$1 = (function (){var statearr_29864 = state_29823;
(statearr_29864[(28)] = inst_29816);

return statearr_29864;
})();
var statearr_29865_29935 = state_29823__$1;
(statearr_29865_29935[(2)] = null);

(statearr_29865_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (6))){
var inst_29755 = (state_29823[(29)]);
var inst_29754 = cljs.core.deref.call(null,cs);
var inst_29755__$1 = cljs.core.keys.call(null,inst_29754);
var inst_29756 = cljs.core.count.call(null,inst_29755__$1);
var inst_29757 = cljs.core.reset_BANG_.call(null,dctr,inst_29756);
var inst_29762 = cljs.core.seq.call(null,inst_29755__$1);
var inst_29763 = inst_29762;
var inst_29764 = null;
var inst_29765 = (0);
var inst_29766 = (0);
var state_29823__$1 = (function (){var statearr_29866 = state_29823;
(statearr_29866[(29)] = inst_29755__$1);

(statearr_29866[(20)] = inst_29763);

(statearr_29866[(10)] = inst_29764);

(statearr_29866[(30)] = inst_29757);

(statearr_29866[(21)] = inst_29765);

(statearr_29866[(12)] = inst_29766);

return statearr_29866;
})();
var statearr_29867_29936 = state_29823__$1;
(statearr_29867_29936[(2)] = null);

(statearr_29867_29936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (28))){
var inst_29782 = (state_29823[(25)]);
var inst_29763 = (state_29823[(20)]);
var inst_29782__$1 = cljs.core.seq.call(null,inst_29763);
var state_29823__$1 = (function (){var statearr_29868 = state_29823;
(statearr_29868[(25)] = inst_29782__$1);

return statearr_29868;
})();
if(inst_29782__$1){
var statearr_29869_29937 = state_29823__$1;
(statearr_29869_29937[(1)] = (33));

} else {
var statearr_29870_29938 = state_29823__$1;
(statearr_29870_29938[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (25))){
var inst_29765 = (state_29823[(21)]);
var inst_29766 = (state_29823[(12)]);
var inst_29768 = (inst_29766 < inst_29765);
var inst_29769 = inst_29768;
var state_29823__$1 = state_29823;
if(cljs.core.truth_(inst_29769)){
var statearr_29871_29939 = state_29823__$1;
(statearr_29871_29939[(1)] = (27));

} else {
var statearr_29872_29940 = state_29823__$1;
(statearr_29872_29940[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (34))){
var state_29823__$1 = state_29823;
var statearr_29873_29941 = state_29823__$1;
(statearr_29873_29941[(2)] = null);

(statearr_29873_29941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (17))){
var state_29823__$1 = state_29823;
var statearr_29874_29942 = state_29823__$1;
(statearr_29874_29942[(2)] = null);

(statearr_29874_29942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (3))){
var inst_29821 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29823__$1,inst_29821);
} else {
if((state_val_29824 === (12))){
var inst_29750 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29875_29943 = state_29823__$1;
(statearr_29875_29943[(2)] = inst_29750);

(statearr_29875_29943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (2))){
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29823__$1,(4),ch);
} else {
if((state_val_29824 === (23))){
var state_29823__$1 = state_29823;
var statearr_29876_29944 = state_29823__$1;
(statearr_29876_29944[(2)] = null);

(statearr_29876_29944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (35))){
var inst_29805 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29877_29945 = state_29823__$1;
(statearr_29877_29945[(2)] = inst_29805);

(statearr_29877_29945[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (19))){
var inst_29724 = (state_29823[(7)]);
var inst_29728 = cljs.core.chunk_first.call(null,inst_29724);
var inst_29729 = cljs.core.chunk_rest.call(null,inst_29724);
var inst_29730 = cljs.core.count.call(null,inst_29728);
var inst_29704 = inst_29729;
var inst_29705 = inst_29728;
var inst_29706 = inst_29730;
var inst_29707 = (0);
var state_29823__$1 = (function (){var statearr_29878 = state_29823;
(statearr_29878[(13)] = inst_29706);

(statearr_29878[(15)] = inst_29704);

(statearr_29878[(16)] = inst_29705);

(statearr_29878[(17)] = inst_29707);

return statearr_29878;
})();
var statearr_29879_29946 = state_29823__$1;
(statearr_29879_29946[(2)] = null);

(statearr_29879_29946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (11))){
var inst_29704 = (state_29823[(15)]);
var inst_29724 = (state_29823[(7)]);
var inst_29724__$1 = cljs.core.seq.call(null,inst_29704);
var state_29823__$1 = (function (){var statearr_29880 = state_29823;
(statearr_29880[(7)] = inst_29724__$1);

return statearr_29880;
})();
if(inst_29724__$1){
var statearr_29881_29947 = state_29823__$1;
(statearr_29881_29947[(1)] = (16));

} else {
var statearr_29882_29948 = state_29823__$1;
(statearr_29882_29948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (9))){
var inst_29752 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29883_29949 = state_29823__$1;
(statearr_29883_29949[(2)] = inst_29752);

(statearr_29883_29949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (5))){
var inst_29702 = cljs.core.deref.call(null,cs);
var inst_29703 = cljs.core.seq.call(null,inst_29702);
var inst_29704 = inst_29703;
var inst_29705 = null;
var inst_29706 = (0);
var inst_29707 = (0);
var state_29823__$1 = (function (){var statearr_29884 = state_29823;
(statearr_29884[(13)] = inst_29706);

(statearr_29884[(15)] = inst_29704);

(statearr_29884[(16)] = inst_29705);

(statearr_29884[(17)] = inst_29707);

return statearr_29884;
})();
var statearr_29885_29950 = state_29823__$1;
(statearr_29885_29950[(2)] = null);

(statearr_29885_29950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (14))){
var state_29823__$1 = state_29823;
var statearr_29886_29951 = state_29823__$1;
(statearr_29886_29951[(2)] = null);

(statearr_29886_29951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (45))){
var inst_29813 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29887_29952 = state_29823__$1;
(statearr_29887_29952[(2)] = inst_29813);

(statearr_29887_29952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (26))){
var inst_29755 = (state_29823[(29)]);
var inst_29809 = (state_29823[(2)]);
var inst_29810 = cljs.core.seq.call(null,inst_29755);
var state_29823__$1 = (function (){var statearr_29888 = state_29823;
(statearr_29888[(31)] = inst_29809);

return statearr_29888;
})();
if(inst_29810){
var statearr_29889_29953 = state_29823__$1;
(statearr_29889_29953[(1)] = (42));

} else {
var statearr_29890_29954 = state_29823__$1;
(statearr_29890_29954[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (16))){
var inst_29724 = (state_29823[(7)]);
var inst_29726 = cljs.core.chunked_seq_QMARK_.call(null,inst_29724);
var state_29823__$1 = state_29823;
if(inst_29726){
var statearr_29891_29955 = state_29823__$1;
(statearr_29891_29955[(1)] = (19));

} else {
var statearr_29892_29956 = state_29823__$1;
(statearr_29892_29956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (38))){
var inst_29802 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29893_29957 = state_29823__$1;
(statearr_29893_29957[(2)] = inst_29802);

(statearr_29893_29957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (30))){
var state_29823__$1 = state_29823;
var statearr_29894_29958 = state_29823__$1;
(statearr_29894_29958[(2)] = null);

(statearr_29894_29958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (10))){
var inst_29705 = (state_29823[(16)]);
var inst_29707 = (state_29823[(17)]);
var inst_29713 = cljs.core._nth.call(null,inst_29705,inst_29707);
var inst_29714 = cljs.core.nth.call(null,inst_29713,(0),null);
var inst_29715 = cljs.core.nth.call(null,inst_29713,(1),null);
var state_29823__$1 = (function (){var statearr_29895 = state_29823;
(statearr_29895[(26)] = inst_29714);

return statearr_29895;
})();
if(cljs.core.truth_(inst_29715)){
var statearr_29896_29959 = state_29823__$1;
(statearr_29896_29959[(1)] = (13));

} else {
var statearr_29897_29960 = state_29823__$1;
(statearr_29897_29960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (18))){
var inst_29748 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29898_29961 = state_29823__$1;
(statearr_29898_29961[(2)] = inst_29748);

(statearr_29898_29961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (42))){
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29823__$1,(45),dchan);
} else {
if((state_val_29824 === (37))){
var inst_29782 = (state_29823[(25)]);
var inst_29791 = (state_29823[(23)]);
var inst_29695 = (state_29823[(11)]);
var inst_29791__$1 = cljs.core.first.call(null,inst_29782);
var inst_29792 = cljs.core.async.put_BANG_.call(null,inst_29791__$1,inst_29695,done);
var state_29823__$1 = (function (){var statearr_29899 = state_29823;
(statearr_29899[(23)] = inst_29791__$1);

return statearr_29899;
})();
if(cljs.core.truth_(inst_29792)){
var statearr_29900_29962 = state_29823__$1;
(statearr_29900_29962[(1)] = (39));

} else {
var statearr_29901_29963 = state_29823__$1;
(statearr_29901_29963[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (8))){
var inst_29706 = (state_29823[(13)]);
var inst_29707 = (state_29823[(17)]);
var inst_29709 = (inst_29707 < inst_29706);
var inst_29710 = inst_29709;
var state_29823__$1 = state_29823;
if(cljs.core.truth_(inst_29710)){
var statearr_29902_29964 = state_29823__$1;
(statearr_29902_29964[(1)] = (10));

} else {
var statearr_29903_29965 = state_29823__$1;
(statearr_29903_29965[(1)] = (11));

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
});})(c__25412__auto___29911,cs,m,dchan,dctr,done))
;
return ((function (switch__25350__auto__,c__25412__auto___29911,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25351__auto__ = null;
var cljs$core$async$mult_$_state_machine__25351__auto____0 = (function (){
var statearr_29907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29907[(0)] = cljs$core$async$mult_$_state_machine__25351__auto__);

(statearr_29907[(1)] = (1));

return statearr_29907;
});
var cljs$core$async$mult_$_state_machine__25351__auto____1 = (function (state_29823){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_29823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e29908){if((e29908 instanceof Object)){
var ex__25354__auto__ = e29908;
var statearr_29909_29966 = state_29823;
(statearr_29909_29966[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29967 = state_29823;
state_29823 = G__29967;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25351__auto__ = function(state_29823){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25351__auto____1.call(this,state_29823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25351__auto____0;
cljs$core$async$mult_$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25351__auto____1;
return cljs$core$async$mult_$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___29911,cs,m,dchan,dctr,done))
})();
var state__25414__auto__ = (function (){var statearr_29910 = f__25413__auto__.call(null);
(statearr_29910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___29911);

return statearr_29910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___29911,cs,m,dchan,dctr,done))
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
var G__29969 = arguments.length;
switch (G__29969) {
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

cljs.core.async.Mix = (function (){var obj29972 = {};
return obj29972;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29977){
var map__29978 = p__29977;
var map__29978__$1 = ((cljs.core.seq_QMARK_.call(null,map__29978))?cljs.core.apply.call(null,cljs.core.hash_map,map__29978):map__29978);
var opts = map__29978__$1;
var statearr_29979_29982 = state;
(statearr_29979_29982[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__29978,map__29978__$1,opts){
return (function (val){
var statearr_29980_29983 = state;
(statearr_29980_29983[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29978,map__29978__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_29981_29984 = state;
(statearr_29981_29984[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29973){
var G__29974 = cljs.core.first.call(null,seq29973);
var seq29973__$1 = cljs.core.next.call(null,seq29973);
var G__29975 = cljs.core.first.call(null,seq29973__$1);
var seq29973__$2 = cljs.core.next.call(null,seq29973__$1);
var G__29976 = cljs.core.first.call(null,seq29973__$2);
var seq29973__$3 = cljs.core.next.call(null,seq29973__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29974,G__29975,G__29976,seq29973__$3);
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
if(typeof cljs.core.async.t30104 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30104 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30105){
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
this.meta30105 = meta30105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30106,meta30105__$1){
var self__ = this;
var _30106__$1 = this;
return (new cljs.core.async.t30104(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30105__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30106){
var self__ = this;
var _30106__$1 = this;
return self__.meta30105;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30104.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t30104.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30105","meta30105",-726718578,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30104.cljs$lang$type = true;

cljs.core.async.t30104.cljs$lang$ctorStr = "cljs.core.async/t30104";

cljs.core.async.t30104.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30104");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30104 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30104(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30105){
return (new cljs.core.async.t30104(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30105));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30104(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25412__auto___30223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___30223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___30223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30176){
var state_val_30177 = (state_30176[(1)]);
if((state_val_30177 === (7))){
var inst_30120 = (state_30176[(7)]);
var inst_30125 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30120);
var state_30176__$1 = state_30176;
var statearr_30178_30224 = state_30176__$1;
(statearr_30178_30224[(2)] = inst_30125);

(statearr_30178_30224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (20))){
var inst_30135 = (state_30176[(8)]);
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30176__$1,(23),out,inst_30135);
} else {
if((state_val_30177 === (1))){
var inst_30110 = (state_30176[(9)]);
var inst_30110__$1 = calc_state.call(null);
var inst_30111 = cljs.core.seq_QMARK_.call(null,inst_30110__$1);
var state_30176__$1 = (function (){var statearr_30179 = state_30176;
(statearr_30179[(9)] = inst_30110__$1);

return statearr_30179;
})();
if(inst_30111){
var statearr_30180_30225 = state_30176__$1;
(statearr_30180_30225[(1)] = (2));

} else {
var statearr_30181_30226 = state_30176__$1;
(statearr_30181_30226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (24))){
var inst_30128 = (state_30176[(10)]);
var inst_30120 = inst_30128;
var state_30176__$1 = (function (){var statearr_30182 = state_30176;
(statearr_30182[(7)] = inst_30120);

return statearr_30182;
})();
var statearr_30183_30227 = state_30176__$1;
(statearr_30183_30227[(2)] = null);

(statearr_30183_30227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (4))){
var inst_30110 = (state_30176[(9)]);
var inst_30116 = (state_30176[(2)]);
var inst_30117 = cljs.core.get.call(null,inst_30116,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30118 = cljs.core.get.call(null,inst_30116,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30119 = cljs.core.get.call(null,inst_30116,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30120 = inst_30110;
var state_30176__$1 = (function (){var statearr_30184 = state_30176;
(statearr_30184[(11)] = inst_30117);

(statearr_30184[(12)] = inst_30119);

(statearr_30184[(7)] = inst_30120);

(statearr_30184[(13)] = inst_30118);

return statearr_30184;
})();
var statearr_30185_30228 = state_30176__$1;
(statearr_30185_30228[(2)] = null);

(statearr_30185_30228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (15))){
var state_30176__$1 = state_30176;
var statearr_30186_30229 = state_30176__$1;
(statearr_30186_30229[(2)] = null);

(statearr_30186_30229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (21))){
var inst_30128 = (state_30176[(10)]);
var inst_30120 = inst_30128;
var state_30176__$1 = (function (){var statearr_30187 = state_30176;
(statearr_30187[(7)] = inst_30120);

return statearr_30187;
})();
var statearr_30188_30230 = state_30176__$1;
(statearr_30188_30230[(2)] = null);

(statearr_30188_30230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (13))){
var inst_30172 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30189_30231 = state_30176__$1;
(statearr_30189_30231[(2)] = inst_30172);

(statearr_30189_30231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (22))){
var inst_30170 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30190_30232 = state_30176__$1;
(statearr_30190_30232[(2)] = inst_30170);

(statearr_30190_30232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (6))){
var inst_30174 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30176__$1,inst_30174);
} else {
if((state_val_30177 === (25))){
var state_30176__$1 = state_30176;
var statearr_30191_30233 = state_30176__$1;
(statearr_30191_30233[(2)] = null);

(statearr_30191_30233[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (17))){
var inst_30150 = (state_30176[(14)]);
var state_30176__$1 = state_30176;
var statearr_30192_30234 = state_30176__$1;
(statearr_30192_30234[(2)] = inst_30150);

(statearr_30192_30234[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (3))){
var inst_30110 = (state_30176[(9)]);
var state_30176__$1 = state_30176;
var statearr_30193_30235 = state_30176__$1;
(statearr_30193_30235[(2)] = inst_30110);

(statearr_30193_30235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (12))){
var inst_30136 = (state_30176[(15)]);
var inst_30150 = (state_30176[(14)]);
var inst_30129 = (state_30176[(16)]);
var inst_30150__$1 = inst_30129.call(null,inst_30136);
var state_30176__$1 = (function (){var statearr_30194 = state_30176;
(statearr_30194[(14)] = inst_30150__$1);

return statearr_30194;
})();
if(cljs.core.truth_(inst_30150__$1)){
var statearr_30195_30236 = state_30176__$1;
(statearr_30195_30236[(1)] = (17));

} else {
var statearr_30196_30237 = state_30176__$1;
(statearr_30196_30237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (2))){
var inst_30110 = (state_30176[(9)]);
var inst_30113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30110);
var state_30176__$1 = state_30176;
var statearr_30197_30238 = state_30176__$1;
(statearr_30197_30238[(2)] = inst_30113);

(statearr_30197_30238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (23))){
var inst_30161 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
if(cljs.core.truth_(inst_30161)){
var statearr_30198_30239 = state_30176__$1;
(statearr_30198_30239[(1)] = (24));

} else {
var statearr_30199_30240 = state_30176__$1;
(statearr_30199_30240[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (19))){
var inst_30158 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
if(cljs.core.truth_(inst_30158)){
var statearr_30200_30241 = state_30176__$1;
(statearr_30200_30241[(1)] = (20));

} else {
var statearr_30201_30242 = state_30176__$1;
(statearr_30201_30242[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (11))){
var inst_30135 = (state_30176[(8)]);
var inst_30141 = (inst_30135 == null);
var state_30176__$1 = state_30176;
if(cljs.core.truth_(inst_30141)){
var statearr_30202_30243 = state_30176__$1;
(statearr_30202_30243[(1)] = (14));

} else {
var statearr_30203_30244 = state_30176__$1;
(statearr_30203_30244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (9))){
var inst_30128 = (state_30176[(10)]);
var inst_30128__$1 = (state_30176[(2)]);
var inst_30129 = cljs.core.get.call(null,inst_30128__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30130 = cljs.core.get.call(null,inst_30128__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30131 = cljs.core.get.call(null,inst_30128__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30176__$1 = (function (){var statearr_30204 = state_30176;
(statearr_30204[(17)] = inst_30130);

(statearr_30204[(16)] = inst_30129);

(statearr_30204[(10)] = inst_30128__$1);

return statearr_30204;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30176__$1,(10),inst_30131);
} else {
if((state_val_30177 === (5))){
var inst_30120 = (state_30176[(7)]);
var inst_30123 = cljs.core.seq_QMARK_.call(null,inst_30120);
var state_30176__$1 = state_30176;
if(inst_30123){
var statearr_30205_30245 = state_30176__$1;
(statearr_30205_30245[(1)] = (7));

} else {
var statearr_30206_30246 = state_30176__$1;
(statearr_30206_30246[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (14))){
var inst_30136 = (state_30176[(15)]);
var inst_30143 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30136);
var state_30176__$1 = state_30176;
var statearr_30207_30247 = state_30176__$1;
(statearr_30207_30247[(2)] = inst_30143);

(statearr_30207_30247[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (26))){
var inst_30166 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30208_30248 = state_30176__$1;
(statearr_30208_30248[(2)] = inst_30166);

(statearr_30208_30248[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (16))){
var inst_30146 = (state_30176[(2)]);
var inst_30147 = calc_state.call(null);
var inst_30120 = inst_30147;
var state_30176__$1 = (function (){var statearr_30209 = state_30176;
(statearr_30209[(18)] = inst_30146);

(statearr_30209[(7)] = inst_30120);

return statearr_30209;
})();
var statearr_30210_30249 = state_30176__$1;
(statearr_30210_30249[(2)] = null);

(statearr_30210_30249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (10))){
var inst_30136 = (state_30176[(15)]);
var inst_30135 = (state_30176[(8)]);
var inst_30134 = (state_30176[(2)]);
var inst_30135__$1 = cljs.core.nth.call(null,inst_30134,(0),null);
var inst_30136__$1 = cljs.core.nth.call(null,inst_30134,(1),null);
var inst_30137 = (inst_30135__$1 == null);
var inst_30138 = cljs.core._EQ_.call(null,inst_30136__$1,change);
var inst_30139 = (inst_30137) || (inst_30138);
var state_30176__$1 = (function (){var statearr_30211 = state_30176;
(statearr_30211[(15)] = inst_30136__$1);

(statearr_30211[(8)] = inst_30135__$1);

return statearr_30211;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30212_30250 = state_30176__$1;
(statearr_30212_30250[(1)] = (11));

} else {
var statearr_30213_30251 = state_30176__$1;
(statearr_30213_30251[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (18))){
var inst_30136 = (state_30176[(15)]);
var inst_30130 = (state_30176[(17)]);
var inst_30129 = (state_30176[(16)]);
var inst_30153 = cljs.core.empty_QMARK_.call(null,inst_30129);
var inst_30154 = inst_30130.call(null,inst_30136);
var inst_30155 = cljs.core.not.call(null,inst_30154);
var inst_30156 = (inst_30153) && (inst_30155);
var state_30176__$1 = state_30176;
var statearr_30214_30252 = state_30176__$1;
(statearr_30214_30252[(2)] = inst_30156);

(statearr_30214_30252[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (8))){
var inst_30120 = (state_30176[(7)]);
var state_30176__$1 = state_30176;
var statearr_30215_30253 = state_30176__$1;
(statearr_30215_30253[(2)] = inst_30120);

(statearr_30215_30253[(1)] = (9));


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
});})(c__25412__auto___30223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25350__auto__,c__25412__auto___30223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25351__auto__ = null;
var cljs$core$async$mix_$_state_machine__25351__auto____0 = (function (){
var statearr_30219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30219[(0)] = cljs$core$async$mix_$_state_machine__25351__auto__);

(statearr_30219[(1)] = (1));

return statearr_30219;
});
var cljs$core$async$mix_$_state_machine__25351__auto____1 = (function (state_30176){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30220){if((e30220 instanceof Object)){
var ex__25354__auto__ = e30220;
var statearr_30221_30254 = state_30176;
(statearr_30221_30254[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30255 = state_30176;
state_30176 = G__30255;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25351__auto__ = function(state_30176){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25351__auto____1.call(this,state_30176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25351__auto____0;
cljs$core$async$mix_$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25351__auto____1;
return cljs$core$async$mix_$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___30223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25414__auto__ = (function (){var statearr_30222 = f__25413__auto__.call(null);
(statearr_30222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___30223);

return statearr_30222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___30223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30257 = {};
return obj30257;
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
var G__30259 = arguments.length;
switch (G__30259) {
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
var G__30263 = arguments.length;
switch (G__30263) {
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
return (function (p1__30261_SHARP_){
if(cljs.core.truth_(p1__30261_SHARP_.call(null,topic))){
return p1__30261_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30261_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4349__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30264 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30264 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30265){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30265 = meta30265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30266,meta30265__$1){
var self__ = this;
var _30266__$1 = this;
return (new cljs.core.async.t30264(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30265__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30266){
var self__ = this;
var _30266__$1 = this;
return self__.meta30265;
});})(mults,ensure_mult))
;

cljs.core.async.t30264.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30264.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30264.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30264.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30264.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30265","meta30265",854146810,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t30264.cljs$lang$type = true;

cljs.core.async.t30264.cljs$lang$ctorStr = "cljs.core.async/t30264";

cljs.core.async.t30264.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30264");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30264 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30265){
return (new cljs.core.async.t30264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30265));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30264(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25412__auto___30387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___30387,mults,ensure_mult,p){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___30387,mults,ensure_mult,p){
return (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (7))){
var inst_30334 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30340_30388 = state_30338__$1;
(statearr_30340_30388[(2)] = inst_30334);

(statearr_30340_30388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (20))){
var state_30338__$1 = state_30338;
var statearr_30341_30389 = state_30338__$1;
(statearr_30341_30389[(2)] = null);

(statearr_30341_30389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (1))){
var state_30338__$1 = state_30338;
var statearr_30342_30390 = state_30338__$1;
(statearr_30342_30390[(2)] = null);

(statearr_30342_30390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (24))){
var inst_30317 = (state_30338[(7)]);
var inst_30326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30317);
var state_30338__$1 = state_30338;
var statearr_30343_30391 = state_30338__$1;
(statearr_30343_30391[(2)] = inst_30326);

(statearr_30343_30391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (4))){
var inst_30269 = (state_30338[(8)]);
var inst_30269__$1 = (state_30338[(2)]);
var inst_30270 = (inst_30269__$1 == null);
var state_30338__$1 = (function (){var statearr_30344 = state_30338;
(statearr_30344[(8)] = inst_30269__$1);

return statearr_30344;
})();
if(cljs.core.truth_(inst_30270)){
var statearr_30345_30392 = state_30338__$1;
(statearr_30345_30392[(1)] = (5));

} else {
var statearr_30346_30393 = state_30338__$1;
(statearr_30346_30393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (15))){
var inst_30311 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30347_30394 = state_30338__$1;
(statearr_30347_30394[(2)] = inst_30311);

(statearr_30347_30394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (21))){
var inst_30331 = (state_30338[(2)]);
var state_30338__$1 = (function (){var statearr_30348 = state_30338;
(statearr_30348[(9)] = inst_30331);

return statearr_30348;
})();
var statearr_30349_30395 = state_30338__$1;
(statearr_30349_30395[(2)] = null);

(statearr_30349_30395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (13))){
var inst_30293 = (state_30338[(10)]);
var inst_30295 = cljs.core.chunked_seq_QMARK_.call(null,inst_30293);
var state_30338__$1 = state_30338;
if(inst_30295){
var statearr_30350_30396 = state_30338__$1;
(statearr_30350_30396[(1)] = (16));

} else {
var statearr_30351_30397 = state_30338__$1;
(statearr_30351_30397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (22))){
var inst_30323 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
if(cljs.core.truth_(inst_30323)){
var statearr_30352_30398 = state_30338__$1;
(statearr_30352_30398[(1)] = (23));

} else {
var statearr_30353_30399 = state_30338__$1;
(statearr_30353_30399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (6))){
var inst_30269 = (state_30338[(8)]);
var inst_30317 = (state_30338[(7)]);
var inst_30319 = (state_30338[(11)]);
var inst_30317__$1 = topic_fn.call(null,inst_30269);
var inst_30318 = cljs.core.deref.call(null,mults);
var inst_30319__$1 = cljs.core.get.call(null,inst_30318,inst_30317__$1);
var state_30338__$1 = (function (){var statearr_30354 = state_30338;
(statearr_30354[(7)] = inst_30317__$1);

(statearr_30354[(11)] = inst_30319__$1);

return statearr_30354;
})();
if(cljs.core.truth_(inst_30319__$1)){
var statearr_30355_30400 = state_30338__$1;
(statearr_30355_30400[(1)] = (19));

} else {
var statearr_30356_30401 = state_30338__$1;
(statearr_30356_30401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (25))){
var inst_30328 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30357_30402 = state_30338__$1;
(statearr_30357_30402[(2)] = inst_30328);

(statearr_30357_30402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (17))){
var inst_30293 = (state_30338[(10)]);
var inst_30302 = cljs.core.first.call(null,inst_30293);
var inst_30303 = cljs.core.async.muxch_STAR_.call(null,inst_30302);
var inst_30304 = cljs.core.async.close_BANG_.call(null,inst_30303);
var inst_30305 = cljs.core.next.call(null,inst_30293);
var inst_30279 = inst_30305;
var inst_30280 = null;
var inst_30281 = (0);
var inst_30282 = (0);
var state_30338__$1 = (function (){var statearr_30358 = state_30338;
(statearr_30358[(12)] = inst_30281);

(statearr_30358[(13)] = inst_30279);

(statearr_30358[(14)] = inst_30304);

(statearr_30358[(15)] = inst_30282);

(statearr_30358[(16)] = inst_30280);

return statearr_30358;
})();
var statearr_30359_30403 = state_30338__$1;
(statearr_30359_30403[(2)] = null);

(statearr_30359_30403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (3))){
var inst_30336 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else {
if((state_val_30339 === (12))){
var inst_30313 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30360_30404 = state_30338__$1;
(statearr_30360_30404[(2)] = inst_30313);

(statearr_30360_30404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (2))){
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,(4),ch);
} else {
if((state_val_30339 === (23))){
var state_30338__$1 = state_30338;
var statearr_30361_30405 = state_30338__$1;
(statearr_30361_30405[(2)] = null);

(statearr_30361_30405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (19))){
var inst_30269 = (state_30338[(8)]);
var inst_30319 = (state_30338[(11)]);
var inst_30321 = cljs.core.async.muxch_STAR_.call(null,inst_30319);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30338__$1,(22),inst_30321,inst_30269);
} else {
if((state_val_30339 === (11))){
var inst_30293 = (state_30338[(10)]);
var inst_30279 = (state_30338[(13)]);
var inst_30293__$1 = cljs.core.seq.call(null,inst_30279);
var state_30338__$1 = (function (){var statearr_30362 = state_30338;
(statearr_30362[(10)] = inst_30293__$1);

return statearr_30362;
})();
if(inst_30293__$1){
var statearr_30363_30406 = state_30338__$1;
(statearr_30363_30406[(1)] = (13));

} else {
var statearr_30364_30407 = state_30338__$1;
(statearr_30364_30407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (9))){
var inst_30315 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30365_30408 = state_30338__$1;
(statearr_30365_30408[(2)] = inst_30315);

(statearr_30365_30408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (5))){
var inst_30276 = cljs.core.deref.call(null,mults);
var inst_30277 = cljs.core.vals.call(null,inst_30276);
var inst_30278 = cljs.core.seq.call(null,inst_30277);
var inst_30279 = inst_30278;
var inst_30280 = null;
var inst_30281 = (0);
var inst_30282 = (0);
var state_30338__$1 = (function (){var statearr_30366 = state_30338;
(statearr_30366[(12)] = inst_30281);

(statearr_30366[(13)] = inst_30279);

(statearr_30366[(15)] = inst_30282);

(statearr_30366[(16)] = inst_30280);

return statearr_30366;
})();
var statearr_30367_30409 = state_30338__$1;
(statearr_30367_30409[(2)] = null);

(statearr_30367_30409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (14))){
var state_30338__$1 = state_30338;
var statearr_30371_30410 = state_30338__$1;
(statearr_30371_30410[(2)] = null);

(statearr_30371_30410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (16))){
var inst_30293 = (state_30338[(10)]);
var inst_30297 = cljs.core.chunk_first.call(null,inst_30293);
var inst_30298 = cljs.core.chunk_rest.call(null,inst_30293);
var inst_30299 = cljs.core.count.call(null,inst_30297);
var inst_30279 = inst_30298;
var inst_30280 = inst_30297;
var inst_30281 = inst_30299;
var inst_30282 = (0);
var state_30338__$1 = (function (){var statearr_30372 = state_30338;
(statearr_30372[(12)] = inst_30281);

(statearr_30372[(13)] = inst_30279);

(statearr_30372[(15)] = inst_30282);

(statearr_30372[(16)] = inst_30280);

return statearr_30372;
})();
var statearr_30373_30411 = state_30338__$1;
(statearr_30373_30411[(2)] = null);

(statearr_30373_30411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (10))){
var inst_30281 = (state_30338[(12)]);
var inst_30279 = (state_30338[(13)]);
var inst_30282 = (state_30338[(15)]);
var inst_30280 = (state_30338[(16)]);
var inst_30287 = cljs.core._nth.call(null,inst_30280,inst_30282);
var inst_30288 = cljs.core.async.muxch_STAR_.call(null,inst_30287);
var inst_30289 = cljs.core.async.close_BANG_.call(null,inst_30288);
var inst_30290 = (inst_30282 + (1));
var tmp30368 = inst_30281;
var tmp30369 = inst_30279;
var tmp30370 = inst_30280;
var inst_30279__$1 = tmp30369;
var inst_30280__$1 = tmp30370;
var inst_30281__$1 = tmp30368;
var inst_30282__$1 = inst_30290;
var state_30338__$1 = (function (){var statearr_30374 = state_30338;
(statearr_30374[(12)] = inst_30281__$1);

(statearr_30374[(13)] = inst_30279__$1);

(statearr_30374[(17)] = inst_30289);

(statearr_30374[(15)] = inst_30282__$1);

(statearr_30374[(16)] = inst_30280__$1);

return statearr_30374;
})();
var statearr_30375_30412 = state_30338__$1;
(statearr_30375_30412[(2)] = null);

(statearr_30375_30412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (18))){
var inst_30308 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30376_30413 = state_30338__$1;
(statearr_30376_30413[(2)] = inst_30308);

(statearr_30376_30413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (8))){
var inst_30281 = (state_30338[(12)]);
var inst_30282 = (state_30338[(15)]);
var inst_30284 = (inst_30282 < inst_30281);
var inst_30285 = inst_30284;
var state_30338__$1 = state_30338;
if(cljs.core.truth_(inst_30285)){
var statearr_30377_30414 = state_30338__$1;
(statearr_30377_30414[(1)] = (10));

} else {
var statearr_30378_30415 = state_30338__$1;
(statearr_30378_30415[(1)] = (11));

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
});})(c__25412__auto___30387,mults,ensure_mult,p))
;
return ((function (switch__25350__auto__,c__25412__auto___30387,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_30382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30382[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_30382[(1)] = (1));

return statearr_30382;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_30338){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30383){if((e30383 instanceof Object)){
var ex__25354__auto__ = e30383;
var statearr_30384_30416 = state_30338;
(statearr_30384_30416[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30417 = state_30338;
state_30338 = G__30417;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___30387,mults,ensure_mult,p))
})();
var state__25414__auto__ = (function (){var statearr_30385 = f__25413__auto__.call(null);
(statearr_30385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___30387);

return statearr_30385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___30387,mults,ensure_mult,p))
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
var G__30419 = arguments.length;
switch (G__30419) {
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
var G__30422 = arguments.length;
switch (G__30422) {
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
var G__30425 = arguments.length;
switch (G__30425) {
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
var c__25412__auto___30495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___30495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___30495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30464){
var state_val_30465 = (state_30464[(1)]);
if((state_val_30465 === (7))){
var state_30464__$1 = state_30464;
var statearr_30466_30496 = state_30464__$1;
(statearr_30466_30496[(2)] = null);

(statearr_30466_30496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (1))){
var state_30464__$1 = state_30464;
var statearr_30467_30497 = state_30464__$1;
(statearr_30467_30497[(2)] = null);

(statearr_30467_30497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (4))){
var inst_30428 = (state_30464[(7)]);
var inst_30430 = (inst_30428 < cnt);
var state_30464__$1 = state_30464;
if(cljs.core.truth_(inst_30430)){
var statearr_30468_30498 = state_30464__$1;
(statearr_30468_30498[(1)] = (6));

} else {
var statearr_30469_30499 = state_30464__$1;
(statearr_30469_30499[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (15))){
var inst_30460 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30470_30500 = state_30464__$1;
(statearr_30470_30500[(2)] = inst_30460);

(statearr_30470_30500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (13))){
var inst_30453 = cljs.core.async.close_BANG_.call(null,out);
var state_30464__$1 = state_30464;
var statearr_30471_30501 = state_30464__$1;
(statearr_30471_30501[(2)] = inst_30453);

(statearr_30471_30501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (6))){
var state_30464__$1 = state_30464;
var statearr_30472_30502 = state_30464__$1;
(statearr_30472_30502[(2)] = null);

(statearr_30472_30502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (3))){
var inst_30462 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30464__$1,inst_30462);
} else {
if((state_val_30465 === (12))){
var inst_30450 = (state_30464[(8)]);
var inst_30450__$1 = (state_30464[(2)]);
var inst_30451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30450__$1);
var state_30464__$1 = (function (){var statearr_30473 = state_30464;
(statearr_30473[(8)] = inst_30450__$1);

return statearr_30473;
})();
if(cljs.core.truth_(inst_30451)){
var statearr_30474_30503 = state_30464__$1;
(statearr_30474_30503[(1)] = (13));

} else {
var statearr_30475_30504 = state_30464__$1;
(statearr_30475_30504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (2))){
var inst_30427 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30428 = (0);
var state_30464__$1 = (function (){var statearr_30476 = state_30464;
(statearr_30476[(7)] = inst_30428);

(statearr_30476[(9)] = inst_30427);

return statearr_30476;
})();
var statearr_30477_30505 = state_30464__$1;
(statearr_30477_30505[(2)] = null);

(statearr_30477_30505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (11))){
var inst_30428 = (state_30464[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30464,(10),Object,null,(9));
var inst_30437 = chs__$1.call(null,inst_30428);
var inst_30438 = done.call(null,inst_30428);
var inst_30439 = cljs.core.async.take_BANG_.call(null,inst_30437,inst_30438);
var state_30464__$1 = state_30464;
var statearr_30478_30506 = state_30464__$1;
(statearr_30478_30506[(2)] = inst_30439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (9))){
var inst_30428 = (state_30464[(7)]);
var inst_30441 = (state_30464[(2)]);
var inst_30442 = (inst_30428 + (1));
var inst_30428__$1 = inst_30442;
var state_30464__$1 = (function (){var statearr_30479 = state_30464;
(statearr_30479[(7)] = inst_30428__$1);

(statearr_30479[(10)] = inst_30441);

return statearr_30479;
})();
var statearr_30480_30507 = state_30464__$1;
(statearr_30480_30507[(2)] = null);

(statearr_30480_30507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (5))){
var inst_30448 = (state_30464[(2)]);
var state_30464__$1 = (function (){var statearr_30481 = state_30464;
(statearr_30481[(11)] = inst_30448);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30464__$1,(12),dchan);
} else {
if((state_val_30465 === (14))){
var inst_30450 = (state_30464[(8)]);
var inst_30455 = cljs.core.apply.call(null,f,inst_30450);
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30464__$1,(16),out,inst_30455);
} else {
if((state_val_30465 === (16))){
var inst_30457 = (state_30464[(2)]);
var state_30464__$1 = (function (){var statearr_30482 = state_30464;
(statearr_30482[(12)] = inst_30457);

return statearr_30482;
})();
var statearr_30483_30508 = state_30464__$1;
(statearr_30483_30508[(2)] = null);

(statearr_30483_30508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (10))){
var inst_30432 = (state_30464[(2)]);
var inst_30433 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30464__$1 = (function (){var statearr_30484 = state_30464;
(statearr_30484[(13)] = inst_30432);

return statearr_30484;
})();
var statearr_30485_30509 = state_30464__$1;
(statearr_30485_30509[(2)] = inst_30433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (8))){
var inst_30446 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30486_30510 = state_30464__$1;
(statearr_30486_30510[(2)] = inst_30446);

(statearr_30486_30510[(1)] = (5));


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
});})(c__25412__auto___30495,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25350__auto__,c__25412__auto___30495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_30490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30490[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_30490[(1)] = (1));

return statearr_30490;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_30464){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30491){if((e30491 instanceof Object)){
var ex__25354__auto__ = e30491;
var statearr_30492_30511 = state_30464;
(statearr_30492_30511[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30512 = state_30464;
state_30464 = G__30512;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_30464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_30464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___30495,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25414__auto__ = (function (){var statearr_30493 = f__25413__auto__.call(null);
(statearr_30493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___30495);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___30495,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30515 = arguments.length;
switch (G__30515) {
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
var c__25412__auto___30570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___30570,out){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___30570,out){
return (function (state_30545){
var state_val_30546 = (state_30545[(1)]);
if((state_val_30546 === (7))){
var inst_30524 = (state_30545[(7)]);
var inst_30525 = (state_30545[(8)]);
var inst_30524__$1 = (state_30545[(2)]);
var inst_30525__$1 = cljs.core.nth.call(null,inst_30524__$1,(0),null);
var inst_30526 = cljs.core.nth.call(null,inst_30524__$1,(1),null);
var inst_30527 = (inst_30525__$1 == null);
var state_30545__$1 = (function (){var statearr_30547 = state_30545;
(statearr_30547[(9)] = inst_30526);

(statearr_30547[(7)] = inst_30524__$1);

(statearr_30547[(8)] = inst_30525__$1);

return statearr_30547;
})();
if(cljs.core.truth_(inst_30527)){
var statearr_30548_30571 = state_30545__$1;
(statearr_30548_30571[(1)] = (8));

} else {
var statearr_30549_30572 = state_30545__$1;
(statearr_30549_30572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (1))){
var inst_30516 = cljs.core.vec.call(null,chs);
var inst_30517 = inst_30516;
var state_30545__$1 = (function (){var statearr_30550 = state_30545;
(statearr_30550[(10)] = inst_30517);

return statearr_30550;
})();
var statearr_30551_30573 = state_30545__$1;
(statearr_30551_30573[(2)] = null);

(statearr_30551_30573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (4))){
var inst_30517 = (state_30545[(10)]);
var state_30545__$1 = state_30545;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30545__$1,(7),inst_30517);
} else {
if((state_val_30546 === (6))){
var inst_30541 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30552_30574 = state_30545__$1;
(statearr_30552_30574[(2)] = inst_30541);

(statearr_30552_30574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (3))){
var inst_30543 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30545__$1,inst_30543);
} else {
if((state_val_30546 === (2))){
var inst_30517 = (state_30545[(10)]);
var inst_30519 = cljs.core.count.call(null,inst_30517);
var inst_30520 = (inst_30519 > (0));
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30520)){
var statearr_30554_30575 = state_30545__$1;
(statearr_30554_30575[(1)] = (4));

} else {
var statearr_30555_30576 = state_30545__$1;
(statearr_30555_30576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (11))){
var inst_30517 = (state_30545[(10)]);
var inst_30534 = (state_30545[(2)]);
var tmp30553 = inst_30517;
var inst_30517__$1 = tmp30553;
var state_30545__$1 = (function (){var statearr_30556 = state_30545;
(statearr_30556[(10)] = inst_30517__$1);

(statearr_30556[(11)] = inst_30534);

return statearr_30556;
})();
var statearr_30557_30577 = state_30545__$1;
(statearr_30557_30577[(2)] = null);

(statearr_30557_30577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (9))){
var inst_30525 = (state_30545[(8)]);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30545__$1,(11),out,inst_30525);
} else {
if((state_val_30546 === (5))){
var inst_30539 = cljs.core.async.close_BANG_.call(null,out);
var state_30545__$1 = state_30545;
var statearr_30558_30578 = state_30545__$1;
(statearr_30558_30578[(2)] = inst_30539);

(statearr_30558_30578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (10))){
var inst_30537 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30559_30579 = state_30545__$1;
(statearr_30559_30579[(2)] = inst_30537);

(statearr_30559_30579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (8))){
var inst_30517 = (state_30545[(10)]);
var inst_30526 = (state_30545[(9)]);
var inst_30524 = (state_30545[(7)]);
var inst_30525 = (state_30545[(8)]);
var inst_30529 = (function (){var cs = inst_30517;
var vec__30522 = inst_30524;
var v = inst_30525;
var c = inst_30526;
return ((function (cs,vec__30522,v,c,inst_30517,inst_30526,inst_30524,inst_30525,state_val_30546,c__25412__auto___30570,out){
return (function (p1__30513_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30513_SHARP_);
});
;})(cs,vec__30522,v,c,inst_30517,inst_30526,inst_30524,inst_30525,state_val_30546,c__25412__auto___30570,out))
})();
var inst_30530 = cljs.core.filterv.call(null,inst_30529,inst_30517);
var inst_30517__$1 = inst_30530;
var state_30545__$1 = (function (){var statearr_30560 = state_30545;
(statearr_30560[(10)] = inst_30517__$1);

return statearr_30560;
})();
var statearr_30561_30580 = state_30545__$1;
(statearr_30561_30580[(2)] = null);

(statearr_30561_30580[(1)] = (2));


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
});})(c__25412__auto___30570,out))
;
return ((function (switch__25350__auto__,c__25412__auto___30570,out){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_30565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30565[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_30565[(1)] = (1));

return statearr_30565;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_30545){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30566){if((e30566 instanceof Object)){
var ex__25354__auto__ = e30566;
var statearr_30567_30581 = state_30545;
(statearr_30567_30581[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30582 = state_30545;
state_30545 = G__30582;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_30545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_30545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___30570,out))
})();
var state__25414__auto__ = (function (){var statearr_30568 = f__25413__auto__.call(null);
(statearr_30568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___30570);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___30570,out))
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
var G__30584 = arguments.length;
switch (G__30584) {
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
var c__25412__auto___30632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___30632,out){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___30632,out){
return (function (state_30608){
var state_val_30609 = (state_30608[(1)]);
if((state_val_30609 === (7))){
var inst_30590 = (state_30608[(7)]);
var inst_30590__$1 = (state_30608[(2)]);
var inst_30591 = (inst_30590__$1 == null);
var inst_30592 = cljs.core.not.call(null,inst_30591);
var state_30608__$1 = (function (){var statearr_30610 = state_30608;
(statearr_30610[(7)] = inst_30590__$1);

return statearr_30610;
})();
if(inst_30592){
var statearr_30611_30633 = state_30608__$1;
(statearr_30611_30633[(1)] = (8));

} else {
var statearr_30612_30634 = state_30608__$1;
(statearr_30612_30634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (1))){
var inst_30585 = (0);
var state_30608__$1 = (function (){var statearr_30613 = state_30608;
(statearr_30613[(8)] = inst_30585);

return statearr_30613;
})();
var statearr_30614_30635 = state_30608__$1;
(statearr_30614_30635[(2)] = null);

(statearr_30614_30635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (4))){
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30608__$1,(7),ch);
} else {
if((state_val_30609 === (6))){
var inst_30603 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30615_30636 = state_30608__$1;
(statearr_30615_30636[(2)] = inst_30603);

(statearr_30615_30636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (3))){
var inst_30605 = (state_30608[(2)]);
var inst_30606 = cljs.core.async.close_BANG_.call(null,out);
var state_30608__$1 = (function (){var statearr_30616 = state_30608;
(statearr_30616[(9)] = inst_30605);

return statearr_30616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30608__$1,inst_30606);
} else {
if((state_val_30609 === (2))){
var inst_30585 = (state_30608[(8)]);
var inst_30587 = (inst_30585 < n);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30587)){
var statearr_30617_30637 = state_30608__$1;
(statearr_30617_30637[(1)] = (4));

} else {
var statearr_30618_30638 = state_30608__$1;
(statearr_30618_30638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (11))){
var inst_30585 = (state_30608[(8)]);
var inst_30595 = (state_30608[(2)]);
var inst_30596 = (inst_30585 + (1));
var inst_30585__$1 = inst_30596;
var state_30608__$1 = (function (){var statearr_30619 = state_30608;
(statearr_30619[(8)] = inst_30585__$1);

(statearr_30619[(10)] = inst_30595);

return statearr_30619;
})();
var statearr_30620_30639 = state_30608__$1;
(statearr_30620_30639[(2)] = null);

(statearr_30620_30639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (9))){
var state_30608__$1 = state_30608;
var statearr_30621_30640 = state_30608__$1;
(statearr_30621_30640[(2)] = null);

(statearr_30621_30640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (5))){
var state_30608__$1 = state_30608;
var statearr_30622_30641 = state_30608__$1;
(statearr_30622_30641[(2)] = null);

(statearr_30622_30641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (10))){
var inst_30600 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30623_30642 = state_30608__$1;
(statearr_30623_30642[(2)] = inst_30600);

(statearr_30623_30642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (8))){
var inst_30590 = (state_30608[(7)]);
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30608__$1,(11),out,inst_30590);
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
});})(c__25412__auto___30632,out))
;
return ((function (switch__25350__auto__,c__25412__auto___30632,out){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_30627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30627[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_30627[(1)] = (1));

return statearr_30627;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_30608){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30628){if((e30628 instanceof Object)){
var ex__25354__auto__ = e30628;
var statearr_30629_30643 = state_30608;
(statearr_30629_30643[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30644 = state_30608;
state_30608 = G__30644;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_30608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_30608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___30632,out))
})();
var state__25414__auto__ = (function (){var statearr_30630 = f__25413__auto__.call(null);
(statearr_30630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___30632);

return statearr_30630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___30632,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30652 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30652 = (function (map_LT_,f,ch,meta30653){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30653 = meta30653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30654,meta30653__$1){
var self__ = this;
var _30654__$1 = this;
return (new cljs.core.async.t30652(self__.map_LT_,self__.f,self__.ch,meta30653__$1));
});

cljs.core.async.t30652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30654){
var self__ = this;
var _30654__$1 = this;
return self__.meta30653;
});

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30655 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30655 = (function (map_LT_,f,ch,meta30653,_,fn1,meta30656){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30653 = meta30653;
this._ = _;
this.fn1 = fn1;
this.meta30656 = meta30656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30657,meta30656__$1){
var self__ = this;
var _30657__$1 = this;
return (new cljs.core.async.t30655(self__.map_LT_,self__.f,self__.ch,self__.meta30653,self__._,self__.fn1,meta30656__$1));
});})(___$1))
;

cljs.core.async.t30655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30657){
var self__ = this;
var _30657__$1 = this;
return self__.meta30656;
});})(___$1))
;

cljs.core.async.t30655.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30645_SHARP_){
return f1.call(null,(((p1__30645_SHARP_ == null))?null:self__.f.call(null,p1__30645_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30655.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30653","meta30653",1316082372,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30656","meta30656",467215044,null)], null);
});})(___$1))
;

cljs.core.async.t30655.cljs$lang$type = true;

cljs.core.async.t30655.cljs$lang$ctorStr = "cljs.core.async/t30655";

cljs.core.async.t30655.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30655");
});})(___$1))
;

cljs.core.async.__GT_t30655 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30655(map_LT___$1,f__$1,ch__$1,meta30653__$1,___$2,fn1__$1,meta30656){
return (new cljs.core.async.t30655(map_LT___$1,f__$1,ch__$1,meta30653__$1,___$2,fn1__$1,meta30656));
});})(___$1))
;

}

return (new cljs.core.async.t30655(self__.map_LT_,self__.f,self__.ch,self__.meta30653,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30653","meta30653",1316082372,null)], null);
});

cljs.core.async.t30652.cljs$lang$type = true;

cljs.core.async.t30652.cljs$lang$ctorStr = "cljs.core.async/t30652";

cljs.core.async.t30652.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30652");
});

cljs.core.async.__GT_t30652 = (function cljs$core$async$map_LT__$___GT_t30652(map_LT___$1,f__$1,ch__$1,meta30653){
return (new cljs.core.async.t30652(map_LT___$1,f__$1,ch__$1,meta30653));
});

}

return (new cljs.core.async.t30652(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30661 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30661 = (function (map_GT_,f,ch,meta30662){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30662 = meta30662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30663,meta30662__$1){
var self__ = this;
var _30663__$1 = this;
return (new cljs.core.async.t30661(self__.map_GT_,self__.f,self__.ch,meta30662__$1));
});

cljs.core.async.t30661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30663){
var self__ = this;
var _30663__$1 = this;
return self__.meta30662;
});

cljs.core.async.t30661.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30661.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30661.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30662","meta30662",818610689,null)], null);
});

cljs.core.async.t30661.cljs$lang$type = true;

cljs.core.async.t30661.cljs$lang$ctorStr = "cljs.core.async/t30661";

cljs.core.async.t30661.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30661");
});

cljs.core.async.__GT_t30661 = (function cljs$core$async$map_GT__$___GT_t30661(map_GT___$1,f__$1,ch__$1,meta30662){
return (new cljs.core.async.t30661(map_GT___$1,f__$1,ch__$1,meta30662));
});

}

return (new cljs.core.async.t30661(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30667 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30667 = (function (filter_GT_,p,ch,meta30668){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30668 = meta30668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30669,meta30668__$1){
var self__ = this;
var _30669__$1 = this;
return (new cljs.core.async.t30667(self__.filter_GT_,self__.p,self__.ch,meta30668__$1));
});

cljs.core.async.t30667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30669){
var self__ = this;
var _30669__$1 = this;
return self__.meta30668;
});

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30668","meta30668",-1761662611,null)], null);
});

cljs.core.async.t30667.cljs$lang$type = true;

cljs.core.async.t30667.cljs$lang$ctorStr = "cljs.core.async/t30667";

cljs.core.async.t30667.cljs$lang$ctorPrWriter = (function (this__4928__auto__,writer__4929__auto__,opt__4930__auto__){
return cljs.core._write.call(null,writer__4929__auto__,"cljs.core.async/t30667");
});

cljs.core.async.__GT_t30667 = (function cljs$core$async$filter_GT__$___GT_t30667(filter_GT___$1,p__$1,ch__$1,meta30668){
return (new cljs.core.async.t30667(filter_GT___$1,p__$1,ch__$1,meta30668));
});

}

return (new cljs.core.async.t30667(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30671 = arguments.length;
switch (G__30671) {
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
var c__25412__auto___30714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___30714,out){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___30714,out){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30694_30715 = state_30692__$1;
(statearr_30694_30715[(2)] = inst_30688);

(statearr_30694_30715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30695_30716 = state_30692__$1;
(statearr_30695_30716[(2)] = null);

(statearr_30695_30716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30674 = (state_30692[(7)]);
var inst_30674__$1 = (state_30692[(2)]);
var inst_30675 = (inst_30674__$1 == null);
var state_30692__$1 = (function (){var statearr_30696 = state_30692;
(statearr_30696[(7)] = inst_30674__$1);

return statearr_30696;
})();
if(cljs.core.truth_(inst_30675)){
var statearr_30697_30717 = state_30692__$1;
(statearr_30697_30717[(1)] = (5));

} else {
var statearr_30698_30718 = state_30692__$1;
(statearr_30698_30718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30674 = (state_30692[(7)]);
var inst_30679 = p.call(null,inst_30674);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30679)){
var statearr_30699_30719 = state_30692__$1;
(statearr_30699_30719[(1)] = (8));

} else {
var statearr_30700_30720 = state_30692__$1;
(statearr_30700_30720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(4),ch);
} else {
if((state_val_30693 === (11))){
var inst_30682 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30701_30721 = state_30692__$1;
(statearr_30701_30721[(2)] = inst_30682);

(statearr_30701_30721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var state_30692__$1 = state_30692;
var statearr_30702_30722 = state_30692__$1;
(statearr_30702_30722[(2)] = null);

(statearr_30702_30722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var inst_30677 = cljs.core.async.close_BANG_.call(null,out);
var state_30692__$1 = state_30692;
var statearr_30703_30723 = state_30692__$1;
(statearr_30703_30723[(2)] = inst_30677);

(statearr_30703_30723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (10))){
var inst_30685 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30704 = state_30692;
(statearr_30704[(8)] = inst_30685);

return statearr_30704;
})();
var statearr_30705_30724 = state_30692__$1;
(statearr_30705_30724[(2)] = null);

(statearr_30705_30724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30674 = (state_30692[(7)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30692__$1,(11),out,inst_30674);
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
});})(c__25412__auto___30714,out))
;
return ((function (switch__25350__auto__,c__25412__auto___30714,out){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_30709 = [null,null,null,null,null,null,null,null,null];
(statearr_30709[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_30709[(1)] = (1));

return statearr_30709;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_30692){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30710){if((e30710 instanceof Object)){
var ex__25354__auto__ = e30710;
var statearr_30711_30725 = state_30692;
(statearr_30711_30725[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30726 = state_30692;
state_30692 = G__30726;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___30714,out))
})();
var state__25414__auto__ = (function (){var statearr_30712 = f__25413__auto__.call(null);
(statearr_30712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___30714);

return statearr_30712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___30714,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30728 = arguments.length;
switch (G__30728) {
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
var c__25412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto__){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto__){
return (function (state_30895){
var state_val_30896 = (state_30895[(1)]);
if((state_val_30896 === (7))){
var inst_30891 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30897_30938 = state_30895__$1;
(statearr_30897_30938[(2)] = inst_30891);

(statearr_30897_30938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (20))){
var inst_30861 = (state_30895[(7)]);
var inst_30872 = (state_30895[(2)]);
var inst_30873 = cljs.core.next.call(null,inst_30861);
var inst_30847 = inst_30873;
var inst_30848 = null;
var inst_30849 = (0);
var inst_30850 = (0);
var state_30895__$1 = (function (){var statearr_30898 = state_30895;
(statearr_30898[(8)] = inst_30850);

(statearr_30898[(9)] = inst_30849);

(statearr_30898[(10)] = inst_30872);

(statearr_30898[(11)] = inst_30848);

(statearr_30898[(12)] = inst_30847);

return statearr_30898;
})();
var statearr_30899_30939 = state_30895__$1;
(statearr_30899_30939[(2)] = null);

(statearr_30899_30939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (1))){
var state_30895__$1 = state_30895;
var statearr_30900_30940 = state_30895__$1;
(statearr_30900_30940[(2)] = null);

(statearr_30900_30940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (4))){
var inst_30836 = (state_30895[(13)]);
var inst_30836__$1 = (state_30895[(2)]);
var inst_30837 = (inst_30836__$1 == null);
var state_30895__$1 = (function (){var statearr_30901 = state_30895;
(statearr_30901[(13)] = inst_30836__$1);

return statearr_30901;
})();
if(cljs.core.truth_(inst_30837)){
var statearr_30902_30941 = state_30895__$1;
(statearr_30902_30941[(1)] = (5));

} else {
var statearr_30903_30942 = state_30895__$1;
(statearr_30903_30942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (15))){
var state_30895__$1 = state_30895;
var statearr_30907_30943 = state_30895__$1;
(statearr_30907_30943[(2)] = null);

(statearr_30907_30943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (21))){
var state_30895__$1 = state_30895;
var statearr_30908_30944 = state_30895__$1;
(statearr_30908_30944[(2)] = null);

(statearr_30908_30944[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (13))){
var inst_30850 = (state_30895[(8)]);
var inst_30849 = (state_30895[(9)]);
var inst_30848 = (state_30895[(11)]);
var inst_30847 = (state_30895[(12)]);
var inst_30857 = (state_30895[(2)]);
var inst_30858 = (inst_30850 + (1));
var tmp30904 = inst_30849;
var tmp30905 = inst_30848;
var tmp30906 = inst_30847;
var inst_30847__$1 = tmp30906;
var inst_30848__$1 = tmp30905;
var inst_30849__$1 = tmp30904;
var inst_30850__$1 = inst_30858;
var state_30895__$1 = (function (){var statearr_30909 = state_30895;
(statearr_30909[(8)] = inst_30850__$1);

(statearr_30909[(9)] = inst_30849__$1);

(statearr_30909[(14)] = inst_30857);

(statearr_30909[(11)] = inst_30848__$1);

(statearr_30909[(12)] = inst_30847__$1);

return statearr_30909;
})();
var statearr_30910_30945 = state_30895__$1;
(statearr_30910_30945[(2)] = null);

(statearr_30910_30945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (22))){
var state_30895__$1 = state_30895;
var statearr_30911_30946 = state_30895__$1;
(statearr_30911_30946[(2)] = null);

(statearr_30911_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (6))){
var inst_30836 = (state_30895[(13)]);
var inst_30845 = f.call(null,inst_30836);
var inst_30846 = cljs.core.seq.call(null,inst_30845);
var inst_30847 = inst_30846;
var inst_30848 = null;
var inst_30849 = (0);
var inst_30850 = (0);
var state_30895__$1 = (function (){var statearr_30912 = state_30895;
(statearr_30912[(8)] = inst_30850);

(statearr_30912[(9)] = inst_30849);

(statearr_30912[(11)] = inst_30848);

(statearr_30912[(12)] = inst_30847);

return statearr_30912;
})();
var statearr_30913_30947 = state_30895__$1;
(statearr_30913_30947[(2)] = null);

(statearr_30913_30947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (17))){
var inst_30861 = (state_30895[(7)]);
var inst_30865 = cljs.core.chunk_first.call(null,inst_30861);
var inst_30866 = cljs.core.chunk_rest.call(null,inst_30861);
var inst_30867 = cljs.core.count.call(null,inst_30865);
var inst_30847 = inst_30866;
var inst_30848 = inst_30865;
var inst_30849 = inst_30867;
var inst_30850 = (0);
var state_30895__$1 = (function (){var statearr_30914 = state_30895;
(statearr_30914[(8)] = inst_30850);

(statearr_30914[(9)] = inst_30849);

(statearr_30914[(11)] = inst_30848);

(statearr_30914[(12)] = inst_30847);

return statearr_30914;
})();
var statearr_30915_30948 = state_30895__$1;
(statearr_30915_30948[(2)] = null);

(statearr_30915_30948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (3))){
var inst_30893 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30895__$1,inst_30893);
} else {
if((state_val_30896 === (12))){
var inst_30881 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30916_30949 = state_30895__$1;
(statearr_30916_30949[(2)] = inst_30881);

(statearr_30916_30949[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (2))){
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30895__$1,(4),in$);
} else {
if((state_val_30896 === (23))){
var inst_30889 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30917_30950 = state_30895__$1;
(statearr_30917_30950[(2)] = inst_30889);

(statearr_30917_30950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (19))){
var inst_30876 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30918_30951 = state_30895__$1;
(statearr_30918_30951[(2)] = inst_30876);

(statearr_30918_30951[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (11))){
var inst_30847 = (state_30895[(12)]);
var inst_30861 = (state_30895[(7)]);
var inst_30861__$1 = cljs.core.seq.call(null,inst_30847);
var state_30895__$1 = (function (){var statearr_30919 = state_30895;
(statearr_30919[(7)] = inst_30861__$1);

return statearr_30919;
})();
if(inst_30861__$1){
var statearr_30920_30952 = state_30895__$1;
(statearr_30920_30952[(1)] = (14));

} else {
var statearr_30921_30953 = state_30895__$1;
(statearr_30921_30953[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (9))){
var inst_30883 = (state_30895[(2)]);
var inst_30884 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30895__$1 = (function (){var statearr_30922 = state_30895;
(statearr_30922[(15)] = inst_30883);

return statearr_30922;
})();
if(cljs.core.truth_(inst_30884)){
var statearr_30923_30954 = state_30895__$1;
(statearr_30923_30954[(1)] = (21));

} else {
var statearr_30924_30955 = state_30895__$1;
(statearr_30924_30955[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (5))){
var inst_30839 = cljs.core.async.close_BANG_.call(null,out);
var state_30895__$1 = state_30895;
var statearr_30925_30956 = state_30895__$1;
(statearr_30925_30956[(2)] = inst_30839);

(statearr_30925_30956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (14))){
var inst_30861 = (state_30895[(7)]);
var inst_30863 = cljs.core.chunked_seq_QMARK_.call(null,inst_30861);
var state_30895__$1 = state_30895;
if(inst_30863){
var statearr_30926_30957 = state_30895__$1;
(statearr_30926_30957[(1)] = (17));

} else {
var statearr_30927_30958 = state_30895__$1;
(statearr_30927_30958[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (16))){
var inst_30879 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30928_30959 = state_30895__$1;
(statearr_30928_30959[(2)] = inst_30879);

(statearr_30928_30959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (10))){
var inst_30850 = (state_30895[(8)]);
var inst_30848 = (state_30895[(11)]);
var inst_30855 = cljs.core._nth.call(null,inst_30848,inst_30850);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30895__$1,(13),out,inst_30855);
} else {
if((state_val_30896 === (18))){
var inst_30861 = (state_30895[(7)]);
var inst_30870 = cljs.core.first.call(null,inst_30861);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30895__$1,(20),out,inst_30870);
} else {
if((state_val_30896 === (8))){
var inst_30850 = (state_30895[(8)]);
var inst_30849 = (state_30895[(9)]);
var inst_30852 = (inst_30850 < inst_30849);
var inst_30853 = inst_30852;
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30853)){
var statearr_30929_30960 = state_30895__$1;
(statearr_30929_30960[(1)] = (10));

} else {
var statearr_30930_30961 = state_30895__$1;
(statearr_30930_30961[(1)] = (11));

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
});})(c__25412__auto__))
;
return ((function (switch__25350__auto__,c__25412__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25351__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25351__auto____0 = (function (){
var statearr_30934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30934[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25351__auto__);

(statearr_30934[(1)] = (1));

return statearr_30934;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25351__auto____1 = (function (state_30895){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e30935){if((e30935 instanceof Object)){
var ex__25354__auto__ = e30935;
var statearr_30936_30962 = state_30895;
(statearr_30936_30962[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30963 = state_30895;
state_30895 = G__30963;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25351__auto__ = function(state_30895){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25351__auto____1.call(this,state_30895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25351__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25351__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto__))
})();
var state__25414__auto__ = (function (){var statearr_30937 = f__25413__auto__.call(null);
(statearr_30937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto__);

return statearr_30937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto__))
);

return c__25412__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30965 = arguments.length;
switch (G__30965) {
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
var G__30968 = arguments.length;
switch (G__30968) {
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
var G__30971 = arguments.length;
switch (G__30971) {
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
var c__25412__auto___31021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___31021,out){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___31021,out){
return (function (state_30995){
var state_val_30996 = (state_30995[(1)]);
if((state_val_30996 === (7))){
var inst_30990 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_30997_31022 = state_30995__$1;
(statearr_30997_31022[(2)] = inst_30990);

(statearr_30997_31022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (1))){
var inst_30972 = null;
var state_30995__$1 = (function (){var statearr_30998 = state_30995;
(statearr_30998[(7)] = inst_30972);

return statearr_30998;
})();
var statearr_30999_31023 = state_30995__$1;
(statearr_30999_31023[(2)] = null);

(statearr_30999_31023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (4))){
var inst_30975 = (state_30995[(8)]);
var inst_30975__$1 = (state_30995[(2)]);
var inst_30976 = (inst_30975__$1 == null);
var inst_30977 = cljs.core.not.call(null,inst_30976);
var state_30995__$1 = (function (){var statearr_31000 = state_30995;
(statearr_31000[(8)] = inst_30975__$1);

return statearr_31000;
})();
if(inst_30977){
var statearr_31001_31024 = state_30995__$1;
(statearr_31001_31024[(1)] = (5));

} else {
var statearr_31002_31025 = state_30995__$1;
(statearr_31002_31025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (6))){
var state_30995__$1 = state_30995;
var statearr_31003_31026 = state_30995__$1;
(statearr_31003_31026[(2)] = null);

(statearr_31003_31026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (3))){
var inst_30992 = (state_30995[(2)]);
var inst_30993 = cljs.core.async.close_BANG_.call(null,out);
var state_30995__$1 = (function (){var statearr_31004 = state_30995;
(statearr_31004[(9)] = inst_30992);

return statearr_31004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30995__$1,inst_30993);
} else {
if((state_val_30996 === (2))){
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30995__$1,(4),ch);
} else {
if((state_val_30996 === (11))){
var inst_30975 = (state_30995[(8)]);
var inst_30984 = (state_30995[(2)]);
var inst_30972 = inst_30975;
var state_30995__$1 = (function (){var statearr_31005 = state_30995;
(statearr_31005[(7)] = inst_30972);

(statearr_31005[(10)] = inst_30984);

return statearr_31005;
})();
var statearr_31006_31027 = state_30995__$1;
(statearr_31006_31027[(2)] = null);

(statearr_31006_31027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (9))){
var inst_30975 = (state_30995[(8)]);
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30995__$1,(11),out,inst_30975);
} else {
if((state_val_30996 === (5))){
var inst_30972 = (state_30995[(7)]);
var inst_30975 = (state_30995[(8)]);
var inst_30979 = cljs.core._EQ_.call(null,inst_30975,inst_30972);
var state_30995__$1 = state_30995;
if(inst_30979){
var statearr_31008_31028 = state_30995__$1;
(statearr_31008_31028[(1)] = (8));

} else {
var statearr_31009_31029 = state_30995__$1;
(statearr_31009_31029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (10))){
var inst_30987 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31010_31030 = state_30995__$1;
(statearr_31010_31030[(2)] = inst_30987);

(statearr_31010_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (8))){
var inst_30972 = (state_30995[(7)]);
var tmp31007 = inst_30972;
var inst_30972__$1 = tmp31007;
var state_30995__$1 = (function (){var statearr_31011 = state_30995;
(statearr_31011[(7)] = inst_30972__$1);

return statearr_31011;
})();
var statearr_31012_31031 = state_30995__$1;
(statearr_31012_31031[(2)] = null);

(statearr_31012_31031[(1)] = (2));


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
});})(c__25412__auto___31021,out))
;
return ((function (switch__25350__auto__,c__25412__auto___31021,out){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_31016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31016[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_31016[(1)] = (1));

return statearr_31016;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_30995){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_30995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e31017){if((e31017 instanceof Object)){
var ex__25354__auto__ = e31017;
var statearr_31018_31032 = state_30995;
(statearr_31018_31032[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31033 = state_30995;
state_30995 = G__31033;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_30995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_30995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___31021,out))
})();
var state__25414__auto__ = (function (){var statearr_31019 = f__25413__auto__.call(null);
(statearr_31019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___31021);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___31021,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__31035 = arguments.length;
switch (G__31035) {
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
var c__25412__auto___31104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___31104,out){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___31104,out){
return (function (state_31073){
var state_val_31074 = (state_31073[(1)]);
if((state_val_31074 === (7))){
var inst_31069 = (state_31073[(2)]);
var state_31073__$1 = state_31073;
var statearr_31075_31105 = state_31073__$1;
(statearr_31075_31105[(2)] = inst_31069);

(statearr_31075_31105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (1))){
var inst_31036 = (new Array(n));
var inst_31037 = inst_31036;
var inst_31038 = (0);
var state_31073__$1 = (function (){var statearr_31076 = state_31073;
(statearr_31076[(7)] = inst_31038);

(statearr_31076[(8)] = inst_31037);

return statearr_31076;
})();
var statearr_31077_31106 = state_31073__$1;
(statearr_31077_31106[(2)] = null);

(statearr_31077_31106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (4))){
var inst_31041 = (state_31073[(9)]);
var inst_31041__$1 = (state_31073[(2)]);
var inst_31042 = (inst_31041__$1 == null);
var inst_31043 = cljs.core.not.call(null,inst_31042);
var state_31073__$1 = (function (){var statearr_31078 = state_31073;
(statearr_31078[(9)] = inst_31041__$1);

return statearr_31078;
})();
if(inst_31043){
var statearr_31079_31107 = state_31073__$1;
(statearr_31079_31107[(1)] = (5));

} else {
var statearr_31080_31108 = state_31073__$1;
(statearr_31080_31108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (15))){
var inst_31063 = (state_31073[(2)]);
var state_31073__$1 = state_31073;
var statearr_31081_31109 = state_31073__$1;
(statearr_31081_31109[(2)] = inst_31063);

(statearr_31081_31109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (13))){
var state_31073__$1 = state_31073;
var statearr_31082_31110 = state_31073__$1;
(statearr_31082_31110[(2)] = null);

(statearr_31082_31110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (6))){
var inst_31038 = (state_31073[(7)]);
var inst_31059 = (inst_31038 > (0));
var state_31073__$1 = state_31073;
if(cljs.core.truth_(inst_31059)){
var statearr_31083_31111 = state_31073__$1;
(statearr_31083_31111[(1)] = (12));

} else {
var statearr_31084_31112 = state_31073__$1;
(statearr_31084_31112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (3))){
var inst_31071 = (state_31073[(2)]);
var state_31073__$1 = state_31073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31073__$1,inst_31071);
} else {
if((state_val_31074 === (12))){
var inst_31037 = (state_31073[(8)]);
var inst_31061 = cljs.core.vec.call(null,inst_31037);
var state_31073__$1 = state_31073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31073__$1,(15),out,inst_31061);
} else {
if((state_val_31074 === (2))){
var state_31073__$1 = state_31073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31073__$1,(4),ch);
} else {
if((state_val_31074 === (11))){
var inst_31053 = (state_31073[(2)]);
var inst_31054 = (new Array(n));
var inst_31037 = inst_31054;
var inst_31038 = (0);
var state_31073__$1 = (function (){var statearr_31085 = state_31073;
(statearr_31085[(10)] = inst_31053);

(statearr_31085[(7)] = inst_31038);

(statearr_31085[(8)] = inst_31037);

return statearr_31085;
})();
var statearr_31086_31113 = state_31073__$1;
(statearr_31086_31113[(2)] = null);

(statearr_31086_31113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (9))){
var inst_31037 = (state_31073[(8)]);
var inst_31051 = cljs.core.vec.call(null,inst_31037);
var state_31073__$1 = state_31073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31073__$1,(11),out,inst_31051);
} else {
if((state_val_31074 === (5))){
var inst_31046 = (state_31073[(11)]);
var inst_31038 = (state_31073[(7)]);
var inst_31041 = (state_31073[(9)]);
var inst_31037 = (state_31073[(8)]);
var inst_31045 = (inst_31037[inst_31038] = inst_31041);
var inst_31046__$1 = (inst_31038 + (1));
var inst_31047 = (inst_31046__$1 < n);
var state_31073__$1 = (function (){var statearr_31087 = state_31073;
(statearr_31087[(11)] = inst_31046__$1);

(statearr_31087[(12)] = inst_31045);

return statearr_31087;
})();
if(cljs.core.truth_(inst_31047)){
var statearr_31088_31114 = state_31073__$1;
(statearr_31088_31114[(1)] = (8));

} else {
var statearr_31089_31115 = state_31073__$1;
(statearr_31089_31115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (14))){
var inst_31066 = (state_31073[(2)]);
var inst_31067 = cljs.core.async.close_BANG_.call(null,out);
var state_31073__$1 = (function (){var statearr_31091 = state_31073;
(statearr_31091[(13)] = inst_31066);

return statearr_31091;
})();
var statearr_31092_31116 = state_31073__$1;
(statearr_31092_31116[(2)] = inst_31067);

(statearr_31092_31116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (10))){
var inst_31057 = (state_31073[(2)]);
var state_31073__$1 = state_31073;
var statearr_31093_31117 = state_31073__$1;
(statearr_31093_31117[(2)] = inst_31057);

(statearr_31093_31117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31074 === (8))){
var inst_31046 = (state_31073[(11)]);
var inst_31037 = (state_31073[(8)]);
var tmp31090 = inst_31037;
var inst_31037__$1 = tmp31090;
var inst_31038 = inst_31046;
var state_31073__$1 = (function (){var statearr_31094 = state_31073;
(statearr_31094[(7)] = inst_31038);

(statearr_31094[(8)] = inst_31037__$1);

return statearr_31094;
})();
var statearr_31095_31118 = state_31073__$1;
(statearr_31095_31118[(2)] = null);

(statearr_31095_31118[(1)] = (2));


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
});})(c__25412__auto___31104,out))
;
return ((function (switch__25350__auto__,c__25412__auto___31104,out){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_31073){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_31073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__25354__auto__ = e31100;
var statearr_31101_31119 = state_31073;
(statearr_31101_31119[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31120 = state_31073;
state_31073 = G__31120;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_31073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_31073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___31104,out))
})();
var state__25414__auto__ = (function (){var statearr_31102 = f__25413__auto__.call(null);
(statearr_31102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___31104);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___31104,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31122 = arguments.length;
switch (G__31122) {
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
var c__25412__auto___31195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25412__auto___31195,out){
return (function (){
var f__25413__auto__ = (function (){var switch__25350__auto__ = ((function (c__25412__auto___31195,out){
return (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (7))){
var inst_31160 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31166_31196 = state_31164__$1;
(statearr_31166_31196[(2)] = inst_31160);

(statearr_31166_31196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (1))){
var inst_31123 = [];
var inst_31124 = inst_31123;
var inst_31125 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31164__$1 = (function (){var statearr_31167 = state_31164;
(statearr_31167[(7)] = inst_31124);

(statearr_31167[(8)] = inst_31125);

return statearr_31167;
})();
var statearr_31168_31197 = state_31164__$1;
(statearr_31168_31197[(2)] = null);

(statearr_31168_31197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (4))){
var inst_31128 = (state_31164[(9)]);
var inst_31128__$1 = (state_31164[(2)]);
var inst_31129 = (inst_31128__$1 == null);
var inst_31130 = cljs.core.not.call(null,inst_31129);
var state_31164__$1 = (function (){var statearr_31169 = state_31164;
(statearr_31169[(9)] = inst_31128__$1);

return statearr_31169;
})();
if(inst_31130){
var statearr_31170_31198 = state_31164__$1;
(statearr_31170_31198[(1)] = (5));

} else {
var statearr_31171_31199 = state_31164__$1;
(statearr_31171_31199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (15))){
var inst_31154 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31172_31200 = state_31164__$1;
(statearr_31172_31200[(2)] = inst_31154);

(statearr_31172_31200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (13))){
var state_31164__$1 = state_31164;
var statearr_31173_31201 = state_31164__$1;
(statearr_31173_31201[(2)] = null);

(statearr_31173_31201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var inst_31124 = (state_31164[(7)]);
var inst_31149 = inst_31124.length;
var inst_31150 = (inst_31149 > (0));
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31150)){
var statearr_31174_31202 = state_31164__$1;
(statearr_31174_31202[(1)] = (12));

} else {
var statearr_31175_31203 = state_31164__$1;
(statearr_31175_31203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (3))){
var inst_31162 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (12))){
var inst_31124 = (state_31164[(7)]);
var inst_31152 = cljs.core.vec.call(null,inst_31124);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31164__$1,(15),out,inst_31152);
} else {
if((state_val_31165 === (2))){
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31164__$1,(4),ch);
} else {
if((state_val_31165 === (11))){
var inst_31128 = (state_31164[(9)]);
var inst_31132 = (state_31164[(10)]);
var inst_31142 = (state_31164[(2)]);
var inst_31143 = [];
var inst_31144 = inst_31143.push(inst_31128);
var inst_31124 = inst_31143;
var inst_31125 = inst_31132;
var state_31164__$1 = (function (){var statearr_31176 = state_31164;
(statearr_31176[(7)] = inst_31124);

(statearr_31176[(8)] = inst_31125);

(statearr_31176[(11)] = inst_31144);

(statearr_31176[(12)] = inst_31142);

return statearr_31176;
})();
var statearr_31177_31204 = state_31164__$1;
(statearr_31177_31204[(2)] = null);

(statearr_31177_31204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (9))){
var inst_31124 = (state_31164[(7)]);
var inst_31140 = cljs.core.vec.call(null,inst_31124);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31164__$1,(11),out,inst_31140);
} else {
if((state_val_31165 === (5))){
var inst_31128 = (state_31164[(9)]);
var inst_31132 = (state_31164[(10)]);
var inst_31125 = (state_31164[(8)]);
var inst_31132__$1 = f.call(null,inst_31128);
var inst_31133 = cljs.core._EQ_.call(null,inst_31132__$1,inst_31125);
var inst_31134 = cljs.core.keyword_identical_QMARK_.call(null,inst_31125,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31135 = (inst_31133) || (inst_31134);
var state_31164__$1 = (function (){var statearr_31178 = state_31164;
(statearr_31178[(10)] = inst_31132__$1);

return statearr_31178;
})();
if(cljs.core.truth_(inst_31135)){
var statearr_31179_31205 = state_31164__$1;
(statearr_31179_31205[(1)] = (8));

} else {
var statearr_31180_31206 = state_31164__$1;
(statearr_31180_31206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (14))){
var inst_31157 = (state_31164[(2)]);
var inst_31158 = cljs.core.async.close_BANG_.call(null,out);
var state_31164__$1 = (function (){var statearr_31182 = state_31164;
(statearr_31182[(13)] = inst_31157);

return statearr_31182;
})();
var statearr_31183_31207 = state_31164__$1;
(statearr_31183_31207[(2)] = inst_31158);

(statearr_31183_31207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (10))){
var inst_31147 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31184_31208 = state_31164__$1;
(statearr_31184_31208[(2)] = inst_31147);

(statearr_31184_31208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (8))){
var inst_31124 = (state_31164[(7)]);
var inst_31128 = (state_31164[(9)]);
var inst_31132 = (state_31164[(10)]);
var inst_31137 = inst_31124.push(inst_31128);
var tmp31181 = inst_31124;
var inst_31124__$1 = tmp31181;
var inst_31125 = inst_31132;
var state_31164__$1 = (function (){var statearr_31185 = state_31164;
(statearr_31185[(7)] = inst_31124__$1);

(statearr_31185[(14)] = inst_31137);

(statearr_31185[(8)] = inst_31125);

return statearr_31185;
})();
var statearr_31186_31209 = state_31164__$1;
(statearr_31186_31209[(2)] = null);

(statearr_31186_31209[(1)] = (2));


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
});})(c__25412__auto___31195,out))
;
return ((function (switch__25350__auto__,c__25412__auto___31195,out){
return (function() {
var cljs$core$async$state_machine__25351__auto__ = null;
var cljs$core$async$state_machine__25351__auto____0 = (function (){
var statearr_31190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31190[(0)] = cljs$core$async$state_machine__25351__auto__);

(statearr_31190[(1)] = (1));

return statearr_31190;
});
var cljs$core$async$state_machine__25351__auto____1 = (function (state_31164){
while(true){
var ret_value__25352__auto__ = (function (){try{while(true){
var result__25353__auto__ = switch__25350__auto__.call(null,state_31164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25353__auto__;
}
break;
}
}catch (e31191){if((e31191 instanceof Object)){
var ex__25354__auto__ = e31191;
var statearr_31192_31210 = state_31164;
(statearr_31192_31210[(5)] = ex__25354__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31211 = state_31164;
state_31164 = G__31211;
continue;
} else {
return ret_value__25352__auto__;
}
break;
}
});
cljs$core$async$state_machine__25351__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25351__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25351__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25351__auto____0;
cljs$core$async$state_machine__25351__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25351__auto____1;
return cljs$core$async$state_machine__25351__auto__;
})()
;})(switch__25350__auto__,c__25412__auto___31195,out))
})();
var state__25414__auto__ = (function (){var statearr_31193 = f__25413__auto__.call(null);
(statearr_31193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25412__auto___31195);

return statearr_31193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25414__auto__);
});})(c__25412__auto___31195,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map