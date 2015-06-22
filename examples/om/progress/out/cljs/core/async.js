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
if(typeof cljs.core.async.t28638 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28638 = (function (fn_handler,f,meta28639){
this.fn_handler = fn_handler;
this.f = f;
this.meta28639 = meta28639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28640,meta28639__$1){
var self__ = this;
var _28640__$1 = this;
return (new cljs.core.async.t28638(self__.fn_handler,self__.f,meta28639__$1));
});

cljs.core.async.t28638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28640){
var self__ = this;
var _28640__$1 = this;
return self__.meta28639;
});

cljs.core.async.t28638.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28639","meta28639",-1292380538,null)], null);
});

cljs.core.async.t28638.cljs$lang$type = true;

cljs.core.async.t28638.cljs$lang$ctorStr = "cljs.core.async/t28638";

cljs.core.async.t28638.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t28638");
});

cljs.core.async.__GT_t28638 = (function cljs$core$async$fn_handler_$___GT_t28638(fn_handler__$1,f__$1,meta28639){
return (new cljs.core.async.t28638(fn_handler__$1,f__$1,meta28639));
});

}

return (new cljs.core.async.t28638(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28642 = buff;
if(G__28642){
var bit__5013__auto__ = null;
if(cljs.core.truth_((function (){var or__4339__auto__ = bit__5013__auto__;
if(cljs.core.truth_(or__4339__auto__)){
return or__4339__auto__;
} else {
return G__28642.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28642.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28642);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28642);
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
var G__28644 = arguments.length;
switch (G__28644) {
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
var G__28647 = arguments.length;
switch (G__28647) {
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
var val_28649 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28649);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28649,ret){
return (function (){
return fn1.call(null,val_28649);
});})(val_28649,ret))
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
var G__28651 = arguments.length;
switch (G__28651) {
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
var n__5224__auto___28653 = n;
var x_28654 = (0);
while(true){
if((x_28654 < n__5224__auto___28653)){
(a[x_28654] = (0));

var G__28655 = (x_28654 + (1));
x_28654 = G__28655;
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

var G__28656 = (i + (1));
i = G__28656;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28660 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28660 = (function (alt_flag,flag,meta28661){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28661 = meta28661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28662,meta28661__$1){
var self__ = this;
var _28662__$1 = this;
return (new cljs.core.async.t28660(self__.alt_flag,self__.flag,meta28661__$1));
});})(flag))
;

cljs.core.async.t28660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28662){
var self__ = this;
var _28662__$1 = this;
return self__.meta28661;
});})(flag))
;

cljs.core.async.t28660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28660.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28661","meta28661",-1759008821,null)], null);
});})(flag))
;

cljs.core.async.t28660.cljs$lang$type = true;

cljs.core.async.t28660.cljs$lang$ctorStr = "cljs.core.async/t28660";

cljs.core.async.t28660.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t28660");
});})(flag))
;

cljs.core.async.__GT_t28660 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28660(alt_flag__$1,flag__$1,meta28661){
return (new cljs.core.async.t28660(alt_flag__$1,flag__$1,meta28661));
});})(flag))
;

}

return (new cljs.core.async.t28660(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28666 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28666 = (function (alt_handler,flag,cb,meta28667){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28667 = meta28667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28668,meta28667__$1){
var self__ = this;
var _28668__$1 = this;
return (new cljs.core.async.t28666(self__.alt_handler,self__.flag,self__.cb,meta28667__$1));
});

cljs.core.async.t28666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28668){
var self__ = this;
var _28668__$1 = this;
return self__.meta28667;
});

cljs.core.async.t28666.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28667","meta28667",-415931950,null)], null);
});

cljs.core.async.t28666.cljs$lang$type = true;

cljs.core.async.t28666.cljs$lang$ctorStr = "cljs.core.async/t28666";

cljs.core.async.t28666.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t28666");
});

cljs.core.async.__GT_t28666 = (function cljs$core$async$alt_handler_$___GT_t28666(alt_handler__$1,flag__$1,cb__$1,meta28667){
return (new cljs.core.async.t28666(alt_handler__$1,flag__$1,cb__$1,meta28667));
});

}

return (new cljs.core.async.t28666(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28669_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28669_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28670_SHARP_,port], null));
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
var G__28671 = (i + (1));
i = G__28671;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28674){
var map__28675 = p__28674;
var map__28675__$1 = ((cljs.core.seq_QMARK_.call(null,map__28675))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var opts = map__28675__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28672){
var G__28673 = cljs.core.first.call(null,seq28672);
var seq28672__$1 = cljs.core.next.call(null,seq28672);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28673,seq28672__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28677 = arguments.length;
switch (G__28677) {
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
var c__25357__auto___28726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___28726){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___28726){
return (function (state_28701){
var state_val_28702 = (state_28701[(1)]);
if((state_val_28702 === (7))){
var inst_28697 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
var statearr_28703_28727 = state_28701__$1;
(statearr_28703_28727[(2)] = inst_28697);

(statearr_28703_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (1))){
var state_28701__$1 = state_28701;
var statearr_28704_28728 = state_28701__$1;
(statearr_28704_28728[(2)] = null);

(statearr_28704_28728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (4))){
var inst_28680 = (state_28701[(7)]);
var inst_28680__$1 = (state_28701[(2)]);
var inst_28681 = (inst_28680__$1 == null);
var state_28701__$1 = (function (){var statearr_28705 = state_28701;
(statearr_28705[(7)] = inst_28680__$1);

return statearr_28705;
})();
if(cljs.core.truth_(inst_28681)){
var statearr_28706_28729 = state_28701__$1;
(statearr_28706_28729[(1)] = (5));

} else {
var statearr_28707_28730 = state_28701__$1;
(statearr_28707_28730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (13))){
var state_28701__$1 = state_28701;
var statearr_28708_28731 = state_28701__$1;
(statearr_28708_28731[(2)] = null);

(statearr_28708_28731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (6))){
var inst_28680 = (state_28701[(7)]);
var state_28701__$1 = state_28701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28701__$1,(11),to,inst_28680);
} else {
if((state_val_28702 === (3))){
var inst_28699 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28701__$1,inst_28699);
} else {
if((state_val_28702 === (12))){
var state_28701__$1 = state_28701;
var statearr_28709_28732 = state_28701__$1;
(statearr_28709_28732[(2)] = null);

(statearr_28709_28732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (2))){
var state_28701__$1 = state_28701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28701__$1,(4),from);
} else {
if((state_val_28702 === (11))){
var inst_28690 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
if(cljs.core.truth_(inst_28690)){
var statearr_28710_28733 = state_28701__$1;
(statearr_28710_28733[(1)] = (12));

} else {
var statearr_28711_28734 = state_28701__$1;
(statearr_28711_28734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (9))){
var state_28701__$1 = state_28701;
var statearr_28712_28735 = state_28701__$1;
(statearr_28712_28735[(2)] = null);

(statearr_28712_28735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (5))){
var state_28701__$1 = state_28701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28713_28736 = state_28701__$1;
(statearr_28713_28736[(1)] = (8));

} else {
var statearr_28714_28737 = state_28701__$1;
(statearr_28714_28737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (14))){
var inst_28695 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
var statearr_28715_28738 = state_28701__$1;
(statearr_28715_28738[(2)] = inst_28695);

(statearr_28715_28738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (10))){
var inst_28687 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
var statearr_28716_28739 = state_28701__$1;
(statearr_28716_28739[(2)] = inst_28687);

(statearr_28716_28739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (8))){
var inst_28684 = cljs.core.async.close_BANG_.call(null,to);
var state_28701__$1 = state_28701;
var statearr_28717_28740 = state_28701__$1;
(statearr_28717_28740[(2)] = inst_28684);

(statearr_28717_28740[(1)] = (10));


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
});})(c__25357__auto___28726))
;
return ((function (switch__25295__auto__,c__25357__auto___28726){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_28721 = [null,null,null,null,null,null,null,null];
(statearr_28721[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_28721[(1)] = (1));

return statearr_28721;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_28701){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_28701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e28722){if((e28722 instanceof Object)){
var ex__25299__auto__ = e28722;
var statearr_28723_28741 = state_28701;
(statearr_28723_28741[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28742 = state_28701;
state_28701 = G__28742;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_28701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_28701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___28726))
})();
var state__25359__auto__ = (function (){var statearr_28724 = f__25358__auto__.call(null);
(statearr_28724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___28726);

return statearr_28724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___28726))
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
return (function (p__28926){
var vec__28927 = p__28926;
var v = cljs.core.nth.call(null,vec__28927,(0),null);
var p = cljs.core.nth.call(null,vec__28927,(1),null);
var job = vec__28927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25357__auto___29109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___29109,res,vec__28927,v,p,job,jobs,results){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___29109,res,vec__28927,v,p,job,jobs,results){
return (function (state_28932){
var state_val_28933 = (state_28932[(1)]);
if((state_val_28933 === (1))){
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28932__$1,(2),res,v);
} else {
if((state_val_28933 === (2))){
var inst_28929 = (state_28932[(2)]);
var inst_28930 = cljs.core.async.close_BANG_.call(null,res);
var state_28932__$1 = (function (){var statearr_28934 = state_28932;
(statearr_28934[(7)] = inst_28929);

return statearr_28934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28932__$1,inst_28930);
} else {
return null;
}
}
});})(c__25357__auto___29109,res,vec__28927,v,p,job,jobs,results))
;
return ((function (switch__25295__auto__,c__25357__auto___29109,res,vec__28927,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0 = (function (){
var statearr_28938 = [null,null,null,null,null,null,null,null];
(statearr_28938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__);

(statearr_28938[(1)] = (1));

return statearr_28938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1 = (function (state_28932){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_28932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e28939){if((e28939 instanceof Object)){
var ex__25299__auto__ = e28939;
var statearr_28940_29110 = state_28932;
(statearr_28940_29110[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_28932;
state_28932 = G__29111;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = function(state_28932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1.call(this,state_28932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___29109,res,vec__28927,v,p,job,jobs,results))
})();
var state__25359__auto__ = (function (){var statearr_28941 = f__25358__auto__.call(null);
(statearr_28941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___29109);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___29109,res,vec__28927,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28942){
var vec__28943 = p__28942;
var v = cljs.core.nth.call(null,vec__28943,(0),null);
var p = cljs.core.nth.call(null,vec__28943,(1),null);
var job = vec__28943;
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
var n__5224__auto___29112 = n;
var __29113 = (0);
while(true){
if((__29113 < n__5224__auto___29112)){
var G__28944_29114 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28944_29114) {
case "compute":
var c__25357__auto___29116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29113,c__25357__auto___29116,G__28944_29114,n__5224__auto___29112,jobs,results,process,async){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (__29113,c__25357__auto___29116,G__28944_29114,n__5224__auto___29112,jobs,results,process,async){
return (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
var statearr_28959_29117 = state_28957__$1;
(statearr_28959_29117[(2)] = null);

(statearr_28959_29117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (2))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(4),jobs);
} else {
if((state_val_28958 === (3))){
var inst_28955 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28957__$1,inst_28955);
} else {
if((state_val_28958 === (4))){
var inst_28947 = (state_28957[(2)]);
var inst_28948 = process.call(null,inst_28947);
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28948)){
var statearr_28960_29118 = state_28957__$1;
(statearr_28960_29118[(1)] = (5));

} else {
var statearr_28961_29119 = state_28957__$1;
(statearr_28961_29119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (5))){
var state_28957__$1 = state_28957;
var statearr_28962_29120 = state_28957__$1;
(statearr_28962_29120[(2)] = null);

(statearr_28962_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (6))){
var state_28957__$1 = state_28957;
var statearr_28963_29121 = state_28957__$1;
(statearr_28963_29121[(2)] = null);

(statearr_28963_29121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (7))){
var inst_28953 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28964_29122 = state_28957__$1;
(statearr_28964_29122[(2)] = inst_28953);

(statearr_28964_29122[(1)] = (3));


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
});})(__29113,c__25357__auto___29116,G__28944_29114,n__5224__auto___29112,jobs,results,process,async))
;
return ((function (__29113,switch__25295__auto__,c__25357__auto___29116,G__28944_29114,n__5224__auto___29112,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0 = (function (){
var statearr_28968 = [null,null,null,null,null,null,null];
(statearr_28968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__);

(statearr_28968[(1)] = (1));

return statearr_28968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1 = (function (state_28957){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_28957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e28969){if((e28969 instanceof Object)){
var ex__25299__auto__ = e28969;
var statearr_28970_29123 = state_28957;
(statearr_28970_29123[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29124 = state_28957;
state_28957 = G__29124;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__;
})()
;})(__29113,switch__25295__auto__,c__25357__auto___29116,G__28944_29114,n__5224__auto___29112,jobs,results,process,async))
})();
var state__25359__auto__ = (function (){var statearr_28971 = f__25358__auto__.call(null);
(statearr_28971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___29116);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(__29113,c__25357__auto___29116,G__28944_29114,n__5224__auto___29112,jobs,results,process,async))
);


break;
case "async":
var c__25357__auto___29125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29113,c__25357__auto___29125,G__28944_29114,n__5224__auto___29112,jobs,results,process,async){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (__29113,c__25357__auto___29125,G__28944_29114,n__5224__auto___29112,jobs,results,process,async){
return (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (1))){
var state_28984__$1 = state_28984;
var statearr_28986_29126 = state_28984__$1;
(statearr_28986_29126[(2)] = null);

(statearr_28986_29126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (2))){
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(4),jobs);
} else {
if((state_val_28985 === (3))){
var inst_28982 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28984__$1,inst_28982);
} else {
if((state_val_28985 === (4))){
var inst_28974 = (state_28984[(2)]);
var inst_28975 = async.call(null,inst_28974);
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28975)){
var statearr_28987_29127 = state_28984__$1;
(statearr_28987_29127[(1)] = (5));

} else {
var statearr_28988_29128 = state_28984__$1;
(statearr_28988_29128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (5))){
var state_28984__$1 = state_28984;
var statearr_28989_29129 = state_28984__$1;
(statearr_28989_29129[(2)] = null);

(statearr_28989_29129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (6))){
var state_28984__$1 = state_28984;
var statearr_28990_29130 = state_28984__$1;
(statearr_28990_29130[(2)] = null);

(statearr_28990_29130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (7))){
var inst_28980 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28991_29131 = state_28984__$1;
(statearr_28991_29131[(2)] = inst_28980);

(statearr_28991_29131[(1)] = (3));


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
});})(__29113,c__25357__auto___29125,G__28944_29114,n__5224__auto___29112,jobs,results,process,async))
;
return ((function (__29113,switch__25295__auto__,c__25357__auto___29125,G__28944_29114,n__5224__auto___29112,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0 = (function (){
var statearr_28995 = [null,null,null,null,null,null,null];
(statearr_28995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__);

(statearr_28995[(1)] = (1));

return statearr_28995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1 = (function (state_28984){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_28984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e28996){if((e28996 instanceof Object)){
var ex__25299__auto__ = e28996;
var statearr_28997_29132 = state_28984;
(statearr_28997_29132[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29133 = state_28984;
state_28984 = G__29133;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__;
})()
;})(__29113,switch__25295__auto__,c__25357__auto___29125,G__28944_29114,n__5224__auto___29112,jobs,results,process,async))
})();
var state__25359__auto__ = (function (){var statearr_28998 = f__25358__auto__.call(null);
(statearr_28998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___29125);

return statearr_28998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(__29113,c__25357__auto___29125,G__28944_29114,n__5224__auto___29112,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29134 = (__29113 + (1));
__29113 = G__29134;
continue;
} else {
}
break;
}

var c__25357__auto___29135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___29135,jobs,results,process,async){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___29135,jobs,results,process,async){
return (function (state_29020){
var state_val_29021 = (state_29020[(1)]);
if((state_val_29021 === (1))){
var state_29020__$1 = state_29020;
var statearr_29022_29136 = state_29020__$1;
(statearr_29022_29136[(2)] = null);

(statearr_29022_29136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (2))){
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29020__$1,(4),from);
} else {
if((state_val_29021 === (3))){
var inst_29018 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29020__$1,inst_29018);
} else {
if((state_val_29021 === (4))){
var inst_29001 = (state_29020[(7)]);
var inst_29001__$1 = (state_29020[(2)]);
var inst_29002 = (inst_29001__$1 == null);
var state_29020__$1 = (function (){var statearr_29023 = state_29020;
(statearr_29023[(7)] = inst_29001__$1);

return statearr_29023;
})();
if(cljs.core.truth_(inst_29002)){
var statearr_29024_29137 = state_29020__$1;
(statearr_29024_29137[(1)] = (5));

} else {
var statearr_29025_29138 = state_29020__$1;
(statearr_29025_29138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (5))){
var inst_29004 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29020__$1 = state_29020;
var statearr_29026_29139 = state_29020__$1;
(statearr_29026_29139[(2)] = inst_29004);

(statearr_29026_29139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (6))){
var inst_29001 = (state_29020[(7)]);
var inst_29006 = (state_29020[(8)]);
var inst_29006__$1 = cljs.core.async.chan.call(null,(1));
var inst_29007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29008 = [inst_29001,inst_29006__$1];
var inst_29009 = (new cljs.core.PersistentVector(null,2,(5),inst_29007,inst_29008,null));
var state_29020__$1 = (function (){var statearr_29027 = state_29020;
(statearr_29027[(8)] = inst_29006__$1);

return statearr_29027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29020__$1,(8),jobs,inst_29009);
} else {
if((state_val_29021 === (7))){
var inst_29016 = (state_29020[(2)]);
var state_29020__$1 = state_29020;
var statearr_29028_29140 = state_29020__$1;
(statearr_29028_29140[(2)] = inst_29016);

(statearr_29028_29140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29021 === (8))){
var inst_29006 = (state_29020[(8)]);
var inst_29011 = (state_29020[(2)]);
var state_29020__$1 = (function (){var statearr_29029 = state_29020;
(statearr_29029[(9)] = inst_29011);

return statearr_29029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29020__$1,(9),results,inst_29006);
} else {
if((state_val_29021 === (9))){
var inst_29013 = (state_29020[(2)]);
var state_29020__$1 = (function (){var statearr_29030 = state_29020;
(statearr_29030[(10)] = inst_29013);

return statearr_29030;
})();
var statearr_29031_29141 = state_29020__$1;
(statearr_29031_29141[(2)] = null);

(statearr_29031_29141[(1)] = (2));


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
});})(c__25357__auto___29135,jobs,results,process,async))
;
return ((function (switch__25295__auto__,c__25357__auto___29135,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0 = (function (){
var statearr_29035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__);

(statearr_29035[(1)] = (1));

return statearr_29035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1 = (function (state_29020){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_29020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e29036){if((e29036 instanceof Object)){
var ex__25299__auto__ = e29036;
var statearr_29037_29142 = state_29020;
(statearr_29037_29142[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29143 = state_29020;
state_29020 = G__29143;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = function(state_29020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1.call(this,state_29020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___29135,jobs,results,process,async))
})();
var state__25359__auto__ = (function (){var statearr_29038 = f__25358__auto__.call(null);
(statearr_29038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___29135);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___29135,jobs,results,process,async))
);


var c__25357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto__,jobs,results,process,async){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto__,jobs,results,process,async){
return (function (state_29076){
var state_val_29077 = (state_29076[(1)]);
if((state_val_29077 === (7))){
var inst_29072 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29078_29144 = state_29076__$1;
(statearr_29078_29144[(2)] = inst_29072);

(statearr_29078_29144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (20))){
var state_29076__$1 = state_29076;
var statearr_29079_29145 = state_29076__$1;
(statearr_29079_29145[(2)] = null);

(statearr_29079_29145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (1))){
var state_29076__$1 = state_29076;
var statearr_29080_29146 = state_29076__$1;
(statearr_29080_29146[(2)] = null);

(statearr_29080_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (4))){
var inst_29041 = (state_29076[(7)]);
var inst_29041__$1 = (state_29076[(2)]);
var inst_29042 = (inst_29041__$1 == null);
var state_29076__$1 = (function (){var statearr_29081 = state_29076;
(statearr_29081[(7)] = inst_29041__$1);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29042)){
var statearr_29082_29147 = state_29076__$1;
(statearr_29082_29147[(1)] = (5));

} else {
var statearr_29083_29148 = state_29076__$1;
(statearr_29083_29148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (15))){
var inst_29054 = (state_29076[(8)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29076__$1,(18),to,inst_29054);
} else {
if((state_val_29077 === (21))){
var inst_29067 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29084_29149 = state_29076__$1;
(statearr_29084_29149[(2)] = inst_29067);

(statearr_29084_29149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (13))){
var inst_29069 = (state_29076[(2)]);
var state_29076__$1 = (function (){var statearr_29085 = state_29076;
(statearr_29085[(9)] = inst_29069);

return statearr_29085;
})();
var statearr_29086_29150 = state_29076__$1;
(statearr_29086_29150[(2)] = null);

(statearr_29086_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (6))){
var inst_29041 = (state_29076[(7)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29076__$1,(11),inst_29041);
} else {
if((state_val_29077 === (17))){
var inst_29062 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
if(cljs.core.truth_(inst_29062)){
var statearr_29087_29151 = state_29076__$1;
(statearr_29087_29151[(1)] = (19));

} else {
var statearr_29088_29152 = state_29076__$1;
(statearr_29088_29152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (3))){
var inst_29074 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29076__$1,inst_29074);
} else {
if((state_val_29077 === (12))){
var inst_29051 = (state_29076[(10)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29076__$1,(14),inst_29051);
} else {
if((state_val_29077 === (2))){
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29076__$1,(4),results);
} else {
if((state_val_29077 === (19))){
var state_29076__$1 = state_29076;
var statearr_29089_29153 = state_29076__$1;
(statearr_29089_29153[(2)] = null);

(statearr_29089_29153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (11))){
var inst_29051 = (state_29076[(2)]);
var state_29076__$1 = (function (){var statearr_29090 = state_29076;
(statearr_29090[(10)] = inst_29051);

return statearr_29090;
})();
var statearr_29091_29154 = state_29076__$1;
(statearr_29091_29154[(2)] = null);

(statearr_29091_29154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (9))){
var state_29076__$1 = state_29076;
var statearr_29092_29155 = state_29076__$1;
(statearr_29092_29155[(2)] = null);

(statearr_29092_29155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (5))){
var state_29076__$1 = state_29076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29093_29156 = state_29076__$1;
(statearr_29093_29156[(1)] = (8));

} else {
var statearr_29094_29157 = state_29076__$1;
(statearr_29094_29157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (14))){
var inst_29056 = (state_29076[(11)]);
var inst_29054 = (state_29076[(8)]);
var inst_29054__$1 = (state_29076[(2)]);
var inst_29055 = (inst_29054__$1 == null);
var inst_29056__$1 = cljs.core.not.call(null,inst_29055);
var state_29076__$1 = (function (){var statearr_29095 = state_29076;
(statearr_29095[(11)] = inst_29056__$1);

(statearr_29095[(8)] = inst_29054__$1);

return statearr_29095;
})();
if(inst_29056__$1){
var statearr_29096_29158 = state_29076__$1;
(statearr_29096_29158[(1)] = (15));

} else {
var statearr_29097_29159 = state_29076__$1;
(statearr_29097_29159[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (16))){
var inst_29056 = (state_29076[(11)]);
var state_29076__$1 = state_29076;
var statearr_29098_29160 = state_29076__$1;
(statearr_29098_29160[(2)] = inst_29056);

(statearr_29098_29160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (10))){
var inst_29048 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29099_29161 = state_29076__$1;
(statearr_29099_29161[(2)] = inst_29048);

(statearr_29099_29161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (18))){
var inst_29059 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29100_29162 = state_29076__$1;
(statearr_29100_29162[(2)] = inst_29059);

(statearr_29100_29162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (8))){
var inst_29045 = cljs.core.async.close_BANG_.call(null,to);
var state_29076__$1 = state_29076;
var statearr_29101_29163 = state_29076__$1;
(statearr_29101_29163[(2)] = inst_29045);

(statearr_29101_29163[(1)] = (10));


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
});})(c__25357__auto__,jobs,results,process,async))
;
return ((function (switch__25295__auto__,c__25357__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0 = (function (){
var statearr_29105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__);

(statearr_29105[(1)] = (1));

return statearr_29105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1 = (function (state_29076){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_29076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e29106){if((e29106 instanceof Object)){
var ex__25299__auto__ = e29106;
var statearr_29107_29164 = state_29076;
(statearr_29107_29164[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29165 = state_29076;
state_29076 = G__29165;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__ = function(state_29076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1.call(this,state_29076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto__,jobs,results,process,async))
})();
var state__25359__auto__ = (function (){var statearr_29108 = f__25358__auto__.call(null);
(statearr_29108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto__);

return statearr_29108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto__,jobs,results,process,async))
);

return c__25357__auto__;
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
var G__29167 = arguments.length;
switch (G__29167) {
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
var G__29170 = arguments.length;
switch (G__29170) {
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
var G__29173 = arguments.length;
switch (G__29173) {
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
var c__25357__auto___29225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___29225,tc,fc){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___29225,tc,fc){
return (function (state_29199){
var state_val_29200 = (state_29199[(1)]);
if((state_val_29200 === (7))){
var inst_29195 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29201_29226 = state_29199__$1;
(statearr_29201_29226[(2)] = inst_29195);

(statearr_29201_29226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (1))){
var state_29199__$1 = state_29199;
var statearr_29202_29227 = state_29199__$1;
(statearr_29202_29227[(2)] = null);

(statearr_29202_29227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (4))){
var inst_29176 = (state_29199[(7)]);
var inst_29176__$1 = (state_29199[(2)]);
var inst_29177 = (inst_29176__$1 == null);
var state_29199__$1 = (function (){var statearr_29203 = state_29199;
(statearr_29203[(7)] = inst_29176__$1);

return statearr_29203;
})();
if(cljs.core.truth_(inst_29177)){
var statearr_29204_29228 = state_29199__$1;
(statearr_29204_29228[(1)] = (5));

} else {
var statearr_29205_29229 = state_29199__$1;
(statearr_29205_29229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (13))){
var state_29199__$1 = state_29199;
var statearr_29206_29230 = state_29199__$1;
(statearr_29206_29230[(2)] = null);

(statearr_29206_29230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (6))){
var inst_29176 = (state_29199[(7)]);
var inst_29182 = p.call(null,inst_29176);
var state_29199__$1 = state_29199;
if(cljs.core.truth_(inst_29182)){
var statearr_29207_29231 = state_29199__$1;
(statearr_29207_29231[(1)] = (9));

} else {
var statearr_29208_29232 = state_29199__$1;
(statearr_29208_29232[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (3))){
var inst_29197 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29199__$1,inst_29197);
} else {
if((state_val_29200 === (12))){
var state_29199__$1 = state_29199;
var statearr_29209_29233 = state_29199__$1;
(statearr_29209_29233[(2)] = null);

(statearr_29209_29233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (2))){
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29199__$1,(4),ch);
} else {
if((state_val_29200 === (11))){
var inst_29176 = (state_29199[(7)]);
var inst_29186 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29199__$1,(8),inst_29186,inst_29176);
} else {
if((state_val_29200 === (9))){
var state_29199__$1 = state_29199;
var statearr_29210_29234 = state_29199__$1;
(statearr_29210_29234[(2)] = tc);

(statearr_29210_29234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (5))){
var inst_29179 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29180 = cljs.core.async.close_BANG_.call(null,fc);
var state_29199__$1 = (function (){var statearr_29211 = state_29199;
(statearr_29211[(8)] = inst_29179);

return statearr_29211;
})();
var statearr_29212_29235 = state_29199__$1;
(statearr_29212_29235[(2)] = inst_29180);

(statearr_29212_29235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (14))){
var inst_29193 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
var statearr_29213_29236 = state_29199__$1;
(statearr_29213_29236[(2)] = inst_29193);

(statearr_29213_29236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (10))){
var state_29199__$1 = state_29199;
var statearr_29214_29237 = state_29199__$1;
(statearr_29214_29237[(2)] = fc);

(statearr_29214_29237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29200 === (8))){
var inst_29188 = (state_29199[(2)]);
var state_29199__$1 = state_29199;
if(cljs.core.truth_(inst_29188)){
var statearr_29215_29238 = state_29199__$1;
(statearr_29215_29238[(1)] = (12));

} else {
var statearr_29216_29239 = state_29199__$1;
(statearr_29216_29239[(1)] = (13));

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
});})(c__25357__auto___29225,tc,fc))
;
return ((function (switch__25295__auto__,c__25357__auto___29225,tc,fc){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_29220 = [null,null,null,null,null,null,null,null,null];
(statearr_29220[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_29220[(1)] = (1));

return statearr_29220;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_29199){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_29199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e29221){if((e29221 instanceof Object)){
var ex__25299__auto__ = e29221;
var statearr_29222_29240 = state_29199;
(statearr_29222_29240[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29241 = state_29199;
state_29199 = G__29241;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_29199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_29199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___29225,tc,fc))
})();
var state__25359__auto__ = (function (){var statearr_29223 = f__25358__auto__.call(null);
(statearr_29223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___29225);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___29225,tc,fc))
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
var c__25357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto__){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto__){
return (function (state_29288){
var state_val_29289 = (state_29288[(1)]);
if((state_val_29289 === (1))){
var inst_29274 = init;
var state_29288__$1 = (function (){var statearr_29290 = state_29288;
(statearr_29290[(7)] = inst_29274);

return statearr_29290;
})();
var statearr_29291_29306 = state_29288__$1;
(statearr_29291_29306[(2)] = null);

(statearr_29291_29306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (2))){
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29288__$1,(4),ch);
} else {
if((state_val_29289 === (3))){
var inst_29286 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29288__$1,inst_29286);
} else {
if((state_val_29289 === (4))){
var inst_29277 = (state_29288[(8)]);
var inst_29277__$1 = (state_29288[(2)]);
var inst_29278 = (inst_29277__$1 == null);
var state_29288__$1 = (function (){var statearr_29292 = state_29288;
(statearr_29292[(8)] = inst_29277__$1);

return statearr_29292;
})();
if(cljs.core.truth_(inst_29278)){
var statearr_29293_29307 = state_29288__$1;
(statearr_29293_29307[(1)] = (5));

} else {
var statearr_29294_29308 = state_29288__$1;
(statearr_29294_29308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (5))){
var inst_29274 = (state_29288[(7)]);
var state_29288__$1 = state_29288;
var statearr_29295_29309 = state_29288__$1;
(statearr_29295_29309[(2)] = inst_29274);

(statearr_29295_29309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (6))){
var inst_29274 = (state_29288[(7)]);
var inst_29277 = (state_29288[(8)]);
var inst_29281 = f.call(null,inst_29274,inst_29277);
var inst_29274__$1 = inst_29281;
var state_29288__$1 = (function (){var statearr_29296 = state_29288;
(statearr_29296[(7)] = inst_29274__$1);

return statearr_29296;
})();
var statearr_29297_29310 = state_29288__$1;
(statearr_29297_29310[(2)] = null);

(statearr_29297_29310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (7))){
var inst_29284 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29298_29311 = state_29288__$1;
(statearr_29298_29311[(2)] = inst_29284);

(statearr_29298_29311[(1)] = (3));


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
});})(c__25357__auto__))
;
return ((function (switch__25295__auto__,c__25357__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25296__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25296__auto____0 = (function (){
var statearr_29302 = [null,null,null,null,null,null,null,null,null];
(statearr_29302[(0)] = cljs$core$async$reduce_$_state_machine__25296__auto__);

(statearr_29302[(1)] = (1));

return statearr_29302;
});
var cljs$core$async$reduce_$_state_machine__25296__auto____1 = (function (state_29288){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_29288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e29303){if((e29303 instanceof Object)){
var ex__25299__auto__ = e29303;
var statearr_29304_29312 = state_29288;
(statearr_29304_29312[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29313 = state_29288;
state_29288 = G__29313;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25296__auto__ = function(state_29288){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25296__auto____1.call(this,state_29288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25296__auto____0;
cljs$core$async$reduce_$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25296__auto____1;
return cljs$core$async$reduce_$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto__))
})();
var state__25359__auto__ = (function (){var statearr_29305 = f__25358__auto__.call(null);
(statearr_29305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto__);

return statearr_29305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto__))
);

return c__25357__auto__;
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
var G__29315 = arguments.length;
switch (G__29315) {
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
var c__25357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto__){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto__){
return (function (state_29340){
var state_val_29341 = (state_29340[(1)]);
if((state_val_29341 === (7))){
var inst_29322 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29342_29366 = state_29340__$1;
(statearr_29342_29366[(2)] = inst_29322);

(statearr_29342_29366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (1))){
var inst_29316 = cljs.core.seq.call(null,coll);
var inst_29317 = inst_29316;
var state_29340__$1 = (function (){var statearr_29343 = state_29340;
(statearr_29343[(7)] = inst_29317);

return statearr_29343;
})();
var statearr_29344_29367 = state_29340__$1;
(statearr_29344_29367[(2)] = null);

(statearr_29344_29367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (4))){
var inst_29317 = (state_29340[(7)]);
var inst_29320 = cljs.core.first.call(null,inst_29317);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29340__$1,(7),ch,inst_29320);
} else {
if((state_val_29341 === (13))){
var inst_29334 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29345_29368 = state_29340__$1;
(statearr_29345_29368[(2)] = inst_29334);

(statearr_29345_29368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (6))){
var inst_29325 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29325)){
var statearr_29346_29369 = state_29340__$1;
(statearr_29346_29369[(1)] = (8));

} else {
var statearr_29347_29370 = state_29340__$1;
(statearr_29347_29370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (3))){
var inst_29338 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29340__$1,inst_29338);
} else {
if((state_val_29341 === (12))){
var state_29340__$1 = state_29340;
var statearr_29348_29371 = state_29340__$1;
(statearr_29348_29371[(2)] = null);

(statearr_29348_29371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (2))){
var inst_29317 = (state_29340[(7)]);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29317)){
var statearr_29349_29372 = state_29340__$1;
(statearr_29349_29372[(1)] = (4));

} else {
var statearr_29350_29373 = state_29340__$1;
(statearr_29350_29373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (11))){
var inst_29331 = cljs.core.async.close_BANG_.call(null,ch);
var state_29340__$1 = state_29340;
var statearr_29351_29374 = state_29340__$1;
(statearr_29351_29374[(2)] = inst_29331);

(statearr_29351_29374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (9))){
var state_29340__$1 = state_29340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29352_29375 = state_29340__$1;
(statearr_29352_29375[(1)] = (11));

} else {
var statearr_29353_29376 = state_29340__$1;
(statearr_29353_29376[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (5))){
var inst_29317 = (state_29340[(7)]);
var state_29340__$1 = state_29340;
var statearr_29354_29377 = state_29340__$1;
(statearr_29354_29377[(2)] = inst_29317);

(statearr_29354_29377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (10))){
var inst_29336 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29355_29378 = state_29340__$1;
(statearr_29355_29378[(2)] = inst_29336);

(statearr_29355_29378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (8))){
var inst_29317 = (state_29340[(7)]);
var inst_29327 = cljs.core.next.call(null,inst_29317);
var inst_29317__$1 = inst_29327;
var state_29340__$1 = (function (){var statearr_29356 = state_29340;
(statearr_29356[(7)] = inst_29317__$1);

return statearr_29356;
})();
var statearr_29357_29379 = state_29340__$1;
(statearr_29357_29379[(2)] = null);

(statearr_29357_29379[(1)] = (2));


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
});})(c__25357__auto__))
;
return ((function (switch__25295__auto__,c__25357__auto__){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_29361 = [null,null,null,null,null,null,null,null];
(statearr_29361[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_29361[(1)] = (1));

return statearr_29361;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_29340){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_29340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e29362){if((e29362 instanceof Object)){
var ex__25299__auto__ = e29362;
var statearr_29363_29380 = state_29340;
(statearr_29363_29380[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29381 = state_29340;
state_29340 = G__29381;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_29340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_29340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto__))
})();
var state__25359__auto__ = (function (){var statearr_29364 = f__25358__auto__.call(null);
(statearr_29364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto__);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto__))
);

return c__25357__auto__;
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

cljs.core.async.Mux = (function (){var obj29383 = {};
return obj29383;
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


cljs.core.async.Mult = (function (){var obj29385 = {};
return obj29385;
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
if(typeof cljs.core.async.t29607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29607 = (function (mult,ch,cs,meta29608){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29608 = meta29608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29609,meta29608__$1){
var self__ = this;
var _29609__$1 = this;
return (new cljs.core.async.t29607(self__.mult,self__.ch,self__.cs,meta29608__$1));
});})(cs))
;

cljs.core.async.t29607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29609){
var self__ = this;
var _29609__$1 = this;
return self__.meta29608;
});})(cs))
;

cljs.core.async.t29607.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29607.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29607.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29607.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29607.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29607.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29608","meta29608",-2054665485,null)], null);
});})(cs))
;

cljs.core.async.t29607.cljs$lang$type = true;

cljs.core.async.t29607.cljs$lang$ctorStr = "cljs.core.async/t29607";

cljs.core.async.t29607.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t29607");
});})(cs))
;

cljs.core.async.__GT_t29607 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29607(mult__$1,ch__$1,cs__$1,meta29608){
return (new cljs.core.async.t29607(mult__$1,ch__$1,cs__$1,meta29608));
});})(cs))
;

}

return (new cljs.core.async.t29607(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25357__auto___29828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___29828,cs,m,dchan,dctr,done){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___29828,cs,m,dchan,dctr,done){
return (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (7))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29742_29829 = state_29740__$1;
(statearr_29742_29829[(2)] = inst_29736);

(statearr_29742_29829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (20))){
var inst_29641 = (state_29740[(7)]);
var inst_29651 = cljs.core.first.call(null,inst_29641);
var inst_29652 = cljs.core.nth.call(null,inst_29651,(0),null);
var inst_29653 = cljs.core.nth.call(null,inst_29651,(1),null);
var state_29740__$1 = (function (){var statearr_29743 = state_29740;
(statearr_29743[(8)] = inst_29652);

return statearr_29743;
})();
if(cljs.core.truth_(inst_29653)){
var statearr_29744_29830 = state_29740__$1;
(statearr_29744_29830[(1)] = (22));

} else {
var statearr_29745_29831 = state_29740__$1;
(statearr_29745_29831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (27))){
var inst_29612 = (state_29740[(9)]);
var inst_29683 = (state_29740[(10)]);
var inst_29681 = (state_29740[(11)]);
var inst_29688 = (state_29740[(12)]);
var inst_29688__$1 = cljs.core._nth.call(null,inst_29681,inst_29683);
var inst_29689 = cljs.core.async.put_BANG_.call(null,inst_29688__$1,inst_29612,done);
var state_29740__$1 = (function (){var statearr_29746 = state_29740;
(statearr_29746[(12)] = inst_29688__$1);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29689)){
var statearr_29747_29832 = state_29740__$1;
(statearr_29747_29832[(1)] = (30));

} else {
var statearr_29748_29833 = state_29740__$1;
(statearr_29748_29833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (1))){
var state_29740__$1 = state_29740;
var statearr_29749_29834 = state_29740__$1;
(statearr_29749_29834[(2)] = null);

(statearr_29749_29834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (24))){
var inst_29641 = (state_29740[(7)]);
var inst_29658 = (state_29740[(2)]);
var inst_29659 = cljs.core.next.call(null,inst_29641);
var inst_29621 = inst_29659;
var inst_29622 = null;
var inst_29623 = (0);
var inst_29624 = (0);
var state_29740__$1 = (function (){var statearr_29750 = state_29740;
(statearr_29750[(13)] = inst_29658);

(statearr_29750[(14)] = inst_29623);

(statearr_29750[(15)] = inst_29624);

(statearr_29750[(16)] = inst_29622);

(statearr_29750[(17)] = inst_29621);

return statearr_29750;
})();
var statearr_29751_29835 = state_29740__$1;
(statearr_29751_29835[(2)] = null);

(statearr_29751_29835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (39))){
var state_29740__$1 = state_29740;
var statearr_29755_29836 = state_29740__$1;
(statearr_29755_29836[(2)] = null);

(statearr_29755_29836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (4))){
var inst_29612 = (state_29740[(9)]);
var inst_29612__$1 = (state_29740[(2)]);
var inst_29613 = (inst_29612__$1 == null);
var state_29740__$1 = (function (){var statearr_29756 = state_29740;
(statearr_29756[(9)] = inst_29612__$1);

return statearr_29756;
})();
if(cljs.core.truth_(inst_29613)){
var statearr_29757_29837 = state_29740__$1;
(statearr_29757_29837[(1)] = (5));

} else {
var statearr_29758_29838 = state_29740__$1;
(statearr_29758_29838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (15))){
var inst_29623 = (state_29740[(14)]);
var inst_29624 = (state_29740[(15)]);
var inst_29622 = (state_29740[(16)]);
var inst_29621 = (state_29740[(17)]);
var inst_29637 = (state_29740[(2)]);
var inst_29638 = (inst_29624 + (1));
var tmp29752 = inst_29623;
var tmp29753 = inst_29622;
var tmp29754 = inst_29621;
var inst_29621__$1 = tmp29754;
var inst_29622__$1 = tmp29753;
var inst_29623__$1 = tmp29752;
var inst_29624__$1 = inst_29638;
var state_29740__$1 = (function (){var statearr_29759 = state_29740;
(statearr_29759[(18)] = inst_29637);

(statearr_29759[(14)] = inst_29623__$1);

(statearr_29759[(15)] = inst_29624__$1);

(statearr_29759[(16)] = inst_29622__$1);

(statearr_29759[(17)] = inst_29621__$1);

return statearr_29759;
})();
var statearr_29760_29839 = state_29740__$1;
(statearr_29760_29839[(2)] = null);

(statearr_29760_29839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (21))){
var inst_29662 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29764_29840 = state_29740__$1;
(statearr_29764_29840[(2)] = inst_29662);

(statearr_29764_29840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (31))){
var inst_29688 = (state_29740[(12)]);
var inst_29692 = done.call(null,null);
var inst_29693 = cljs.core.async.untap_STAR_.call(null,m,inst_29688);
var state_29740__$1 = (function (){var statearr_29765 = state_29740;
(statearr_29765[(19)] = inst_29692);

return statearr_29765;
})();
var statearr_29766_29841 = state_29740__$1;
(statearr_29766_29841[(2)] = inst_29693);

(statearr_29766_29841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (32))){
var inst_29680 = (state_29740[(20)]);
var inst_29683 = (state_29740[(10)]);
var inst_29682 = (state_29740[(21)]);
var inst_29681 = (state_29740[(11)]);
var inst_29695 = (state_29740[(2)]);
var inst_29696 = (inst_29683 + (1));
var tmp29761 = inst_29680;
var tmp29762 = inst_29682;
var tmp29763 = inst_29681;
var inst_29680__$1 = tmp29761;
var inst_29681__$1 = tmp29763;
var inst_29682__$1 = tmp29762;
var inst_29683__$1 = inst_29696;
var state_29740__$1 = (function (){var statearr_29767 = state_29740;
(statearr_29767[(20)] = inst_29680__$1);

(statearr_29767[(10)] = inst_29683__$1);

(statearr_29767[(21)] = inst_29682__$1);

(statearr_29767[(22)] = inst_29695);

(statearr_29767[(11)] = inst_29681__$1);

return statearr_29767;
})();
var statearr_29768_29842 = state_29740__$1;
(statearr_29768_29842[(2)] = null);

(statearr_29768_29842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (40))){
var inst_29708 = (state_29740[(23)]);
var inst_29712 = done.call(null,null);
var inst_29713 = cljs.core.async.untap_STAR_.call(null,m,inst_29708);
var state_29740__$1 = (function (){var statearr_29769 = state_29740;
(statearr_29769[(24)] = inst_29712);

return statearr_29769;
})();
var statearr_29770_29843 = state_29740__$1;
(statearr_29770_29843[(2)] = inst_29713);

(statearr_29770_29843[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (33))){
var inst_29699 = (state_29740[(25)]);
var inst_29701 = cljs.core.chunked_seq_QMARK_.call(null,inst_29699);
var state_29740__$1 = state_29740;
if(inst_29701){
var statearr_29771_29844 = state_29740__$1;
(statearr_29771_29844[(1)] = (36));

} else {
var statearr_29772_29845 = state_29740__$1;
(statearr_29772_29845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (13))){
var inst_29631 = (state_29740[(26)]);
var inst_29634 = cljs.core.async.close_BANG_.call(null,inst_29631);
var state_29740__$1 = state_29740;
var statearr_29773_29846 = state_29740__$1;
(statearr_29773_29846[(2)] = inst_29634);

(statearr_29773_29846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (22))){
var inst_29652 = (state_29740[(8)]);
var inst_29655 = cljs.core.async.close_BANG_.call(null,inst_29652);
var state_29740__$1 = state_29740;
var statearr_29774_29847 = state_29740__$1;
(statearr_29774_29847[(2)] = inst_29655);

(statearr_29774_29847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (36))){
var inst_29699 = (state_29740[(25)]);
var inst_29703 = cljs.core.chunk_first.call(null,inst_29699);
var inst_29704 = cljs.core.chunk_rest.call(null,inst_29699);
var inst_29705 = cljs.core.count.call(null,inst_29703);
var inst_29680 = inst_29704;
var inst_29681 = inst_29703;
var inst_29682 = inst_29705;
var inst_29683 = (0);
var state_29740__$1 = (function (){var statearr_29775 = state_29740;
(statearr_29775[(20)] = inst_29680);

(statearr_29775[(10)] = inst_29683);

(statearr_29775[(21)] = inst_29682);

(statearr_29775[(11)] = inst_29681);

return statearr_29775;
})();
var statearr_29776_29848 = state_29740__$1;
(statearr_29776_29848[(2)] = null);

(statearr_29776_29848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (41))){
var inst_29699 = (state_29740[(25)]);
var inst_29715 = (state_29740[(2)]);
var inst_29716 = cljs.core.next.call(null,inst_29699);
var inst_29680 = inst_29716;
var inst_29681 = null;
var inst_29682 = (0);
var inst_29683 = (0);
var state_29740__$1 = (function (){var statearr_29777 = state_29740;
(statearr_29777[(20)] = inst_29680);

(statearr_29777[(27)] = inst_29715);

(statearr_29777[(10)] = inst_29683);

(statearr_29777[(21)] = inst_29682);

(statearr_29777[(11)] = inst_29681);

return statearr_29777;
})();
var statearr_29778_29849 = state_29740__$1;
(statearr_29778_29849[(2)] = null);

(statearr_29778_29849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (43))){
var state_29740__$1 = state_29740;
var statearr_29779_29850 = state_29740__$1;
(statearr_29779_29850[(2)] = null);

(statearr_29779_29850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (29))){
var inst_29724 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29780_29851 = state_29740__$1;
(statearr_29780_29851[(2)] = inst_29724);

(statearr_29780_29851[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (44))){
var inst_29733 = (state_29740[(2)]);
var state_29740__$1 = (function (){var statearr_29781 = state_29740;
(statearr_29781[(28)] = inst_29733);

return statearr_29781;
})();
var statearr_29782_29852 = state_29740__$1;
(statearr_29782_29852[(2)] = null);

(statearr_29782_29852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29672 = (state_29740[(29)]);
var inst_29671 = cljs.core.deref.call(null,cs);
var inst_29672__$1 = cljs.core.keys.call(null,inst_29671);
var inst_29673 = cljs.core.count.call(null,inst_29672__$1);
var inst_29674 = cljs.core.reset_BANG_.call(null,dctr,inst_29673);
var inst_29679 = cljs.core.seq.call(null,inst_29672__$1);
var inst_29680 = inst_29679;
var inst_29681 = null;
var inst_29682 = (0);
var inst_29683 = (0);
var state_29740__$1 = (function (){var statearr_29783 = state_29740;
(statearr_29783[(20)] = inst_29680);

(statearr_29783[(10)] = inst_29683);

(statearr_29783[(30)] = inst_29674);

(statearr_29783[(21)] = inst_29682);

(statearr_29783[(11)] = inst_29681);

(statearr_29783[(29)] = inst_29672__$1);

return statearr_29783;
})();
var statearr_29784_29853 = state_29740__$1;
(statearr_29784_29853[(2)] = null);

(statearr_29784_29853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (28))){
var inst_29680 = (state_29740[(20)]);
var inst_29699 = (state_29740[(25)]);
var inst_29699__$1 = cljs.core.seq.call(null,inst_29680);
var state_29740__$1 = (function (){var statearr_29785 = state_29740;
(statearr_29785[(25)] = inst_29699__$1);

return statearr_29785;
})();
if(inst_29699__$1){
var statearr_29786_29854 = state_29740__$1;
(statearr_29786_29854[(1)] = (33));

} else {
var statearr_29787_29855 = state_29740__$1;
(statearr_29787_29855[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (25))){
var inst_29683 = (state_29740[(10)]);
var inst_29682 = (state_29740[(21)]);
var inst_29685 = (inst_29683 < inst_29682);
var inst_29686 = inst_29685;
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29686)){
var statearr_29788_29856 = state_29740__$1;
(statearr_29788_29856[(1)] = (27));

} else {
var statearr_29789_29857 = state_29740__$1;
(statearr_29789_29857[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (34))){
var state_29740__$1 = state_29740;
var statearr_29790_29858 = state_29740__$1;
(statearr_29790_29858[(2)] = null);

(statearr_29790_29858[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (17))){
var state_29740__$1 = state_29740;
var statearr_29791_29859 = state_29740__$1;
(statearr_29791_29859[(2)] = null);

(statearr_29791_29859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (12))){
var inst_29667 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29792_29860 = state_29740__$1;
(statearr_29792_29860[(2)] = inst_29667);

(statearr_29792_29860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (2))){
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(4),ch);
} else {
if((state_val_29741 === (23))){
var state_29740__$1 = state_29740;
var statearr_29793_29861 = state_29740__$1;
(statearr_29793_29861[(2)] = null);

(statearr_29793_29861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (35))){
var inst_29722 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29794_29862 = state_29740__$1;
(statearr_29794_29862[(2)] = inst_29722);

(statearr_29794_29862[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (19))){
var inst_29641 = (state_29740[(7)]);
var inst_29645 = cljs.core.chunk_first.call(null,inst_29641);
var inst_29646 = cljs.core.chunk_rest.call(null,inst_29641);
var inst_29647 = cljs.core.count.call(null,inst_29645);
var inst_29621 = inst_29646;
var inst_29622 = inst_29645;
var inst_29623 = inst_29647;
var inst_29624 = (0);
var state_29740__$1 = (function (){var statearr_29795 = state_29740;
(statearr_29795[(14)] = inst_29623);

(statearr_29795[(15)] = inst_29624);

(statearr_29795[(16)] = inst_29622);

(statearr_29795[(17)] = inst_29621);

return statearr_29795;
})();
var statearr_29796_29863 = state_29740__$1;
(statearr_29796_29863[(2)] = null);

(statearr_29796_29863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (11))){
var inst_29641 = (state_29740[(7)]);
var inst_29621 = (state_29740[(17)]);
var inst_29641__$1 = cljs.core.seq.call(null,inst_29621);
var state_29740__$1 = (function (){var statearr_29797 = state_29740;
(statearr_29797[(7)] = inst_29641__$1);

return statearr_29797;
})();
if(inst_29641__$1){
var statearr_29798_29864 = state_29740__$1;
(statearr_29798_29864[(1)] = (16));

} else {
var statearr_29799_29865 = state_29740__$1;
(statearr_29799_29865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (9))){
var inst_29669 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29800_29866 = state_29740__$1;
(statearr_29800_29866[(2)] = inst_29669);

(statearr_29800_29866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (5))){
var inst_29619 = cljs.core.deref.call(null,cs);
var inst_29620 = cljs.core.seq.call(null,inst_29619);
var inst_29621 = inst_29620;
var inst_29622 = null;
var inst_29623 = (0);
var inst_29624 = (0);
var state_29740__$1 = (function (){var statearr_29801 = state_29740;
(statearr_29801[(14)] = inst_29623);

(statearr_29801[(15)] = inst_29624);

(statearr_29801[(16)] = inst_29622);

(statearr_29801[(17)] = inst_29621);

return statearr_29801;
})();
var statearr_29802_29867 = state_29740__$1;
(statearr_29802_29867[(2)] = null);

(statearr_29802_29867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (14))){
var state_29740__$1 = state_29740;
var statearr_29803_29868 = state_29740__$1;
(statearr_29803_29868[(2)] = null);

(statearr_29803_29868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (45))){
var inst_29730 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29804_29869 = state_29740__$1;
(statearr_29804_29869[(2)] = inst_29730);

(statearr_29804_29869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (26))){
var inst_29672 = (state_29740[(29)]);
var inst_29726 = (state_29740[(2)]);
var inst_29727 = cljs.core.seq.call(null,inst_29672);
var state_29740__$1 = (function (){var statearr_29805 = state_29740;
(statearr_29805[(31)] = inst_29726);

return statearr_29805;
})();
if(inst_29727){
var statearr_29806_29870 = state_29740__$1;
(statearr_29806_29870[(1)] = (42));

} else {
var statearr_29807_29871 = state_29740__$1;
(statearr_29807_29871[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (16))){
var inst_29641 = (state_29740[(7)]);
var inst_29643 = cljs.core.chunked_seq_QMARK_.call(null,inst_29641);
var state_29740__$1 = state_29740;
if(inst_29643){
var statearr_29808_29872 = state_29740__$1;
(statearr_29808_29872[(1)] = (19));

} else {
var statearr_29809_29873 = state_29740__$1;
(statearr_29809_29873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (38))){
var inst_29719 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29810_29874 = state_29740__$1;
(statearr_29810_29874[(2)] = inst_29719);

(statearr_29810_29874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (30))){
var state_29740__$1 = state_29740;
var statearr_29811_29875 = state_29740__$1;
(statearr_29811_29875[(2)] = null);

(statearr_29811_29875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (10))){
var inst_29624 = (state_29740[(15)]);
var inst_29622 = (state_29740[(16)]);
var inst_29630 = cljs.core._nth.call(null,inst_29622,inst_29624);
var inst_29631 = cljs.core.nth.call(null,inst_29630,(0),null);
var inst_29632 = cljs.core.nth.call(null,inst_29630,(1),null);
var state_29740__$1 = (function (){var statearr_29812 = state_29740;
(statearr_29812[(26)] = inst_29631);

return statearr_29812;
})();
if(cljs.core.truth_(inst_29632)){
var statearr_29813_29876 = state_29740__$1;
(statearr_29813_29876[(1)] = (13));

} else {
var statearr_29814_29877 = state_29740__$1;
(statearr_29814_29877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (18))){
var inst_29665 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29815_29878 = state_29740__$1;
(statearr_29815_29878[(2)] = inst_29665);

(statearr_29815_29878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (42))){
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(45),dchan);
} else {
if((state_val_29741 === (37))){
var inst_29708 = (state_29740[(23)]);
var inst_29612 = (state_29740[(9)]);
var inst_29699 = (state_29740[(25)]);
var inst_29708__$1 = cljs.core.first.call(null,inst_29699);
var inst_29709 = cljs.core.async.put_BANG_.call(null,inst_29708__$1,inst_29612,done);
var state_29740__$1 = (function (){var statearr_29816 = state_29740;
(statearr_29816[(23)] = inst_29708__$1);

return statearr_29816;
})();
if(cljs.core.truth_(inst_29709)){
var statearr_29817_29879 = state_29740__$1;
(statearr_29817_29879[(1)] = (39));

} else {
var statearr_29818_29880 = state_29740__$1;
(statearr_29818_29880[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (8))){
var inst_29623 = (state_29740[(14)]);
var inst_29624 = (state_29740[(15)]);
var inst_29626 = (inst_29624 < inst_29623);
var inst_29627 = inst_29626;
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29627)){
var statearr_29819_29881 = state_29740__$1;
(statearr_29819_29881[(1)] = (10));

} else {
var statearr_29820_29882 = state_29740__$1;
(statearr_29820_29882[(1)] = (11));

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
});})(c__25357__auto___29828,cs,m,dchan,dctr,done))
;
return ((function (switch__25295__auto__,c__25357__auto___29828,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25296__auto__ = null;
var cljs$core$async$mult_$_state_machine__25296__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = cljs$core$async$mult_$_state_machine__25296__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var cljs$core$async$mult_$_state_machine__25296__auto____1 = (function (state_29740){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_29740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e29825){if((e29825 instanceof Object)){
var ex__25299__auto__ = e29825;
var statearr_29826_29883 = state_29740;
(statearr_29826_29883[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29884 = state_29740;
state_29740 = G__29884;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25296__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25296__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25296__auto____0;
cljs$core$async$mult_$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25296__auto____1;
return cljs$core$async$mult_$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___29828,cs,m,dchan,dctr,done))
})();
var state__25359__auto__ = (function (){var statearr_29827 = f__25358__auto__.call(null);
(statearr_29827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___29828);

return statearr_29827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___29828,cs,m,dchan,dctr,done))
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
var G__29886 = arguments.length;
switch (G__29886) {
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

cljs.core.async.Mix = (function (){var obj29889 = {};
return obj29889;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29894){
var map__29895 = p__29894;
var map__29895__$1 = ((cljs.core.seq_QMARK_.call(null,map__29895))?cljs.core.apply.call(null,cljs.core.hash_map,map__29895):map__29895);
var opts = map__29895__$1;
var statearr_29896_29899 = state;
(statearr_29896_29899[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__29895,map__29895__$1,opts){
return (function (val){
var statearr_29897_29900 = state;
(statearr_29897_29900[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29895,map__29895__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_29898_29901 = state;
(statearr_29898_29901[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29890){
var G__29891 = cljs.core.first.call(null,seq29890);
var seq29890__$1 = cljs.core.next.call(null,seq29890);
var G__29892 = cljs.core.first.call(null,seq29890__$1);
var seq29890__$2 = cljs.core.next.call(null,seq29890__$1);
var G__29893 = cljs.core.first.call(null,seq29890__$2);
var seq29890__$3 = cljs.core.next.call(null,seq29890__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29891,G__29892,G__29893,seq29890__$3);
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
if(typeof cljs.core.async.t30021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30021 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30022){
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
this.meta30022 = meta30022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30023,meta30022__$1){
var self__ = this;
var _30023__$1 = this;
return (new cljs.core.async.t30021(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30022__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30023){
var self__ = this;
var _30023__$1 = this;
return self__.meta30022;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30021.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t30021.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30022","meta30022",-1320907617,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30021.cljs$lang$type = true;

cljs.core.async.t30021.cljs$lang$ctorStr = "cljs.core.async/t30021";

cljs.core.async.t30021.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t30021");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30021 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30021(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30022){
return (new cljs.core.async.t30021(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30022));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30021(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25357__auto___30140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30093){
var state_val_30094 = (state_30093[(1)]);
if((state_val_30094 === (7))){
var inst_30037 = (state_30093[(7)]);
var inst_30042 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30037);
var state_30093__$1 = state_30093;
var statearr_30095_30141 = state_30093__$1;
(statearr_30095_30141[(2)] = inst_30042);

(statearr_30095_30141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (20))){
var inst_30052 = (state_30093[(8)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30093__$1,(23),out,inst_30052);
} else {
if((state_val_30094 === (1))){
var inst_30027 = (state_30093[(9)]);
var inst_30027__$1 = calc_state.call(null);
var inst_30028 = cljs.core.seq_QMARK_.call(null,inst_30027__$1);
var state_30093__$1 = (function (){var statearr_30096 = state_30093;
(statearr_30096[(9)] = inst_30027__$1);

return statearr_30096;
})();
if(inst_30028){
var statearr_30097_30142 = state_30093__$1;
(statearr_30097_30142[(1)] = (2));

} else {
var statearr_30098_30143 = state_30093__$1;
(statearr_30098_30143[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (24))){
var inst_30045 = (state_30093[(10)]);
var inst_30037 = inst_30045;
var state_30093__$1 = (function (){var statearr_30099 = state_30093;
(statearr_30099[(7)] = inst_30037);

return statearr_30099;
})();
var statearr_30100_30144 = state_30093__$1;
(statearr_30100_30144[(2)] = null);

(statearr_30100_30144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (4))){
var inst_30027 = (state_30093[(9)]);
var inst_30033 = (state_30093[(2)]);
var inst_30034 = cljs.core.get.call(null,inst_30033,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30035 = cljs.core.get.call(null,inst_30033,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30036 = cljs.core.get.call(null,inst_30033,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30037 = inst_30027;
var state_30093__$1 = (function (){var statearr_30101 = state_30093;
(statearr_30101[(11)] = inst_30036);

(statearr_30101[(12)] = inst_30035);

(statearr_30101[(7)] = inst_30037);

(statearr_30101[(13)] = inst_30034);

return statearr_30101;
})();
var statearr_30102_30145 = state_30093__$1;
(statearr_30102_30145[(2)] = null);

(statearr_30102_30145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (15))){
var state_30093__$1 = state_30093;
var statearr_30103_30146 = state_30093__$1;
(statearr_30103_30146[(2)] = null);

(statearr_30103_30146[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (21))){
var inst_30045 = (state_30093[(10)]);
var inst_30037 = inst_30045;
var state_30093__$1 = (function (){var statearr_30104 = state_30093;
(statearr_30104[(7)] = inst_30037);

return statearr_30104;
})();
var statearr_30105_30147 = state_30093__$1;
(statearr_30105_30147[(2)] = null);

(statearr_30105_30147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (13))){
var inst_30089 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30106_30148 = state_30093__$1;
(statearr_30106_30148[(2)] = inst_30089);

(statearr_30106_30148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (22))){
var inst_30087 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30107_30149 = state_30093__$1;
(statearr_30107_30149[(2)] = inst_30087);

(statearr_30107_30149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (6))){
var inst_30091 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30093__$1,inst_30091);
} else {
if((state_val_30094 === (25))){
var state_30093__$1 = state_30093;
var statearr_30108_30150 = state_30093__$1;
(statearr_30108_30150[(2)] = null);

(statearr_30108_30150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (17))){
var inst_30067 = (state_30093[(14)]);
var state_30093__$1 = state_30093;
var statearr_30109_30151 = state_30093__$1;
(statearr_30109_30151[(2)] = inst_30067);

(statearr_30109_30151[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (3))){
var inst_30027 = (state_30093[(9)]);
var state_30093__$1 = state_30093;
var statearr_30110_30152 = state_30093__$1;
(statearr_30110_30152[(2)] = inst_30027);

(statearr_30110_30152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (12))){
var inst_30053 = (state_30093[(15)]);
var inst_30046 = (state_30093[(16)]);
var inst_30067 = (state_30093[(14)]);
var inst_30067__$1 = inst_30046.call(null,inst_30053);
var state_30093__$1 = (function (){var statearr_30111 = state_30093;
(statearr_30111[(14)] = inst_30067__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30067__$1)){
var statearr_30112_30153 = state_30093__$1;
(statearr_30112_30153[(1)] = (17));

} else {
var statearr_30113_30154 = state_30093__$1;
(statearr_30113_30154[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (2))){
var inst_30027 = (state_30093[(9)]);
var inst_30030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30027);
var state_30093__$1 = state_30093;
var statearr_30114_30155 = state_30093__$1;
(statearr_30114_30155[(2)] = inst_30030);

(statearr_30114_30155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (23))){
var inst_30078 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30078)){
var statearr_30115_30156 = state_30093__$1;
(statearr_30115_30156[(1)] = (24));

} else {
var statearr_30116_30157 = state_30093__$1;
(statearr_30116_30157[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (19))){
var inst_30075 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30075)){
var statearr_30117_30158 = state_30093__$1;
(statearr_30117_30158[(1)] = (20));

} else {
var statearr_30118_30159 = state_30093__$1;
(statearr_30118_30159[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (11))){
var inst_30052 = (state_30093[(8)]);
var inst_30058 = (inst_30052 == null);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30058)){
var statearr_30119_30160 = state_30093__$1;
(statearr_30119_30160[(1)] = (14));

} else {
var statearr_30120_30161 = state_30093__$1;
(statearr_30120_30161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (9))){
var inst_30045 = (state_30093[(10)]);
var inst_30045__$1 = (state_30093[(2)]);
var inst_30046 = cljs.core.get.call(null,inst_30045__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30047 = cljs.core.get.call(null,inst_30045__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30048 = cljs.core.get.call(null,inst_30045__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30093__$1 = (function (){var statearr_30121 = state_30093;
(statearr_30121[(10)] = inst_30045__$1);

(statearr_30121[(17)] = inst_30047);

(statearr_30121[(16)] = inst_30046);

return statearr_30121;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30093__$1,(10),inst_30048);
} else {
if((state_val_30094 === (5))){
var inst_30037 = (state_30093[(7)]);
var inst_30040 = cljs.core.seq_QMARK_.call(null,inst_30037);
var state_30093__$1 = state_30093;
if(inst_30040){
var statearr_30122_30162 = state_30093__$1;
(statearr_30122_30162[(1)] = (7));

} else {
var statearr_30123_30163 = state_30093__$1;
(statearr_30123_30163[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (14))){
var inst_30053 = (state_30093[(15)]);
var inst_30060 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30053);
var state_30093__$1 = state_30093;
var statearr_30124_30164 = state_30093__$1;
(statearr_30124_30164[(2)] = inst_30060);

(statearr_30124_30164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (26))){
var inst_30083 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30125_30165 = state_30093__$1;
(statearr_30125_30165[(2)] = inst_30083);

(statearr_30125_30165[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (16))){
var inst_30063 = (state_30093[(2)]);
var inst_30064 = calc_state.call(null);
var inst_30037 = inst_30064;
var state_30093__$1 = (function (){var statearr_30126 = state_30093;
(statearr_30126[(18)] = inst_30063);

(statearr_30126[(7)] = inst_30037);

return statearr_30126;
})();
var statearr_30127_30166 = state_30093__$1;
(statearr_30127_30166[(2)] = null);

(statearr_30127_30166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (10))){
var inst_30053 = (state_30093[(15)]);
var inst_30052 = (state_30093[(8)]);
var inst_30051 = (state_30093[(2)]);
var inst_30052__$1 = cljs.core.nth.call(null,inst_30051,(0),null);
var inst_30053__$1 = cljs.core.nth.call(null,inst_30051,(1),null);
var inst_30054 = (inst_30052__$1 == null);
var inst_30055 = cljs.core._EQ_.call(null,inst_30053__$1,change);
var inst_30056 = (inst_30054) || (inst_30055);
var state_30093__$1 = (function (){var statearr_30128 = state_30093;
(statearr_30128[(15)] = inst_30053__$1);

(statearr_30128[(8)] = inst_30052__$1);

return statearr_30128;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30129_30167 = state_30093__$1;
(statearr_30129_30167[(1)] = (11));

} else {
var statearr_30130_30168 = state_30093__$1;
(statearr_30130_30168[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (18))){
var inst_30047 = (state_30093[(17)]);
var inst_30053 = (state_30093[(15)]);
var inst_30046 = (state_30093[(16)]);
var inst_30070 = cljs.core.empty_QMARK_.call(null,inst_30046);
var inst_30071 = inst_30047.call(null,inst_30053);
var inst_30072 = cljs.core.not.call(null,inst_30071);
var inst_30073 = (inst_30070) && (inst_30072);
var state_30093__$1 = state_30093;
var statearr_30131_30169 = state_30093__$1;
(statearr_30131_30169[(2)] = inst_30073);

(statearr_30131_30169[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (8))){
var inst_30037 = (state_30093[(7)]);
var state_30093__$1 = state_30093;
var statearr_30132_30170 = state_30093__$1;
(statearr_30132_30170[(2)] = inst_30037);

(statearr_30132_30170[(1)] = (9));


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
});})(c__25357__auto___30140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25295__auto__,c__25357__auto___30140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25296__auto__ = null;
var cljs$core$async$mix_$_state_machine__25296__auto____0 = (function (){
var statearr_30136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30136[(0)] = cljs$core$async$mix_$_state_machine__25296__auto__);

(statearr_30136[(1)] = (1));

return statearr_30136;
});
var cljs$core$async$mix_$_state_machine__25296__auto____1 = (function (state_30093){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30137){if((e30137 instanceof Object)){
var ex__25299__auto__ = e30137;
var statearr_30138_30171 = state_30093;
(statearr_30138_30171[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30172 = state_30093;
state_30093 = G__30172;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25296__auto__ = function(state_30093){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25296__auto____1.call(this,state_30093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25296__auto____0;
cljs$core$async$mix_$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25296__auto____1;
return cljs$core$async$mix_$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25359__auto__ = (function (){var statearr_30139 = f__25358__auto__.call(null);
(statearr_30139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30140);

return statearr_30139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30174 = {};
return obj30174;
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
var G__30176 = arguments.length;
switch (G__30176) {
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
var G__30180 = arguments.length;
switch (G__30180) {
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
return (function (p1__30178_SHARP_){
if(cljs.core.truth_(p1__30178_SHARP_.call(null,topic))){
return p1__30178_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30178_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4339__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30181 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30181 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30182){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30182 = meta30182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30183,meta30182__$1){
var self__ = this;
var _30183__$1 = this;
return (new cljs.core.async.t30181(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30182__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30183){
var self__ = this;
var _30183__$1 = this;
return self__.meta30182;
});})(mults,ensure_mult))
;

cljs.core.async.t30181.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30181.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30181.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30181.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30181.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30181.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30181.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30181.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30182","meta30182",-478951298,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t30181.cljs$lang$type = true;

cljs.core.async.t30181.cljs$lang$ctorStr = "cljs.core.async/t30181";

cljs.core.async.t30181.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t30181");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30181 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30181(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30182){
return (new cljs.core.async.t30181(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30182));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30181(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25357__auto___30304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30304,mults,ensure_mult,p){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30304,mults,ensure_mult,p){
return (function (state_30255){
var state_val_30256 = (state_30255[(1)]);
if((state_val_30256 === (7))){
var inst_30251 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30257_30305 = state_30255__$1;
(statearr_30257_30305[(2)] = inst_30251);

(statearr_30257_30305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (20))){
var state_30255__$1 = state_30255;
var statearr_30258_30306 = state_30255__$1;
(statearr_30258_30306[(2)] = null);

(statearr_30258_30306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (1))){
var state_30255__$1 = state_30255;
var statearr_30259_30307 = state_30255__$1;
(statearr_30259_30307[(2)] = null);

(statearr_30259_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (24))){
var inst_30234 = (state_30255[(7)]);
var inst_30243 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30234);
var state_30255__$1 = state_30255;
var statearr_30260_30308 = state_30255__$1;
(statearr_30260_30308[(2)] = inst_30243);

(statearr_30260_30308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (4))){
var inst_30186 = (state_30255[(8)]);
var inst_30186__$1 = (state_30255[(2)]);
var inst_30187 = (inst_30186__$1 == null);
var state_30255__$1 = (function (){var statearr_30261 = state_30255;
(statearr_30261[(8)] = inst_30186__$1);

return statearr_30261;
})();
if(cljs.core.truth_(inst_30187)){
var statearr_30262_30309 = state_30255__$1;
(statearr_30262_30309[(1)] = (5));

} else {
var statearr_30263_30310 = state_30255__$1;
(statearr_30263_30310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (15))){
var inst_30228 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30264_30311 = state_30255__$1;
(statearr_30264_30311[(2)] = inst_30228);

(statearr_30264_30311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (21))){
var inst_30248 = (state_30255[(2)]);
var state_30255__$1 = (function (){var statearr_30265 = state_30255;
(statearr_30265[(9)] = inst_30248);

return statearr_30265;
})();
var statearr_30266_30312 = state_30255__$1;
(statearr_30266_30312[(2)] = null);

(statearr_30266_30312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (13))){
var inst_30210 = (state_30255[(10)]);
var inst_30212 = cljs.core.chunked_seq_QMARK_.call(null,inst_30210);
var state_30255__$1 = state_30255;
if(inst_30212){
var statearr_30267_30313 = state_30255__$1;
(statearr_30267_30313[(1)] = (16));

} else {
var statearr_30268_30314 = state_30255__$1;
(statearr_30268_30314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (22))){
var inst_30240 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
if(cljs.core.truth_(inst_30240)){
var statearr_30269_30315 = state_30255__$1;
(statearr_30269_30315[(1)] = (23));

} else {
var statearr_30270_30316 = state_30255__$1;
(statearr_30270_30316[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (6))){
var inst_30186 = (state_30255[(8)]);
var inst_30236 = (state_30255[(11)]);
var inst_30234 = (state_30255[(7)]);
var inst_30234__$1 = topic_fn.call(null,inst_30186);
var inst_30235 = cljs.core.deref.call(null,mults);
var inst_30236__$1 = cljs.core.get.call(null,inst_30235,inst_30234__$1);
var state_30255__$1 = (function (){var statearr_30271 = state_30255;
(statearr_30271[(11)] = inst_30236__$1);

(statearr_30271[(7)] = inst_30234__$1);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30236__$1)){
var statearr_30272_30317 = state_30255__$1;
(statearr_30272_30317[(1)] = (19));

} else {
var statearr_30273_30318 = state_30255__$1;
(statearr_30273_30318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (25))){
var inst_30245 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30274_30319 = state_30255__$1;
(statearr_30274_30319[(2)] = inst_30245);

(statearr_30274_30319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (17))){
var inst_30210 = (state_30255[(10)]);
var inst_30219 = cljs.core.first.call(null,inst_30210);
var inst_30220 = cljs.core.async.muxch_STAR_.call(null,inst_30219);
var inst_30221 = cljs.core.async.close_BANG_.call(null,inst_30220);
var inst_30222 = cljs.core.next.call(null,inst_30210);
var inst_30196 = inst_30222;
var inst_30197 = null;
var inst_30198 = (0);
var inst_30199 = (0);
var state_30255__$1 = (function (){var statearr_30275 = state_30255;
(statearr_30275[(12)] = inst_30197);

(statearr_30275[(13)] = inst_30221);

(statearr_30275[(14)] = inst_30198);

(statearr_30275[(15)] = inst_30199);

(statearr_30275[(16)] = inst_30196);

return statearr_30275;
})();
var statearr_30276_30320 = state_30255__$1;
(statearr_30276_30320[(2)] = null);

(statearr_30276_30320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (3))){
var inst_30253 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30255__$1,inst_30253);
} else {
if((state_val_30256 === (12))){
var inst_30230 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30277_30321 = state_30255__$1;
(statearr_30277_30321[(2)] = inst_30230);

(statearr_30277_30321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (2))){
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30255__$1,(4),ch);
} else {
if((state_val_30256 === (23))){
var state_30255__$1 = state_30255;
var statearr_30278_30322 = state_30255__$1;
(statearr_30278_30322[(2)] = null);

(statearr_30278_30322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (19))){
var inst_30186 = (state_30255[(8)]);
var inst_30236 = (state_30255[(11)]);
var inst_30238 = cljs.core.async.muxch_STAR_.call(null,inst_30236);
var state_30255__$1 = state_30255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30255__$1,(22),inst_30238,inst_30186);
} else {
if((state_val_30256 === (11))){
var inst_30210 = (state_30255[(10)]);
var inst_30196 = (state_30255[(16)]);
var inst_30210__$1 = cljs.core.seq.call(null,inst_30196);
var state_30255__$1 = (function (){var statearr_30279 = state_30255;
(statearr_30279[(10)] = inst_30210__$1);

return statearr_30279;
})();
if(inst_30210__$1){
var statearr_30280_30323 = state_30255__$1;
(statearr_30280_30323[(1)] = (13));

} else {
var statearr_30281_30324 = state_30255__$1;
(statearr_30281_30324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (9))){
var inst_30232 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30282_30325 = state_30255__$1;
(statearr_30282_30325[(2)] = inst_30232);

(statearr_30282_30325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (5))){
var inst_30193 = cljs.core.deref.call(null,mults);
var inst_30194 = cljs.core.vals.call(null,inst_30193);
var inst_30195 = cljs.core.seq.call(null,inst_30194);
var inst_30196 = inst_30195;
var inst_30197 = null;
var inst_30198 = (0);
var inst_30199 = (0);
var state_30255__$1 = (function (){var statearr_30283 = state_30255;
(statearr_30283[(12)] = inst_30197);

(statearr_30283[(14)] = inst_30198);

(statearr_30283[(15)] = inst_30199);

(statearr_30283[(16)] = inst_30196);

return statearr_30283;
})();
var statearr_30284_30326 = state_30255__$1;
(statearr_30284_30326[(2)] = null);

(statearr_30284_30326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (14))){
var state_30255__$1 = state_30255;
var statearr_30288_30327 = state_30255__$1;
(statearr_30288_30327[(2)] = null);

(statearr_30288_30327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (16))){
var inst_30210 = (state_30255[(10)]);
var inst_30214 = cljs.core.chunk_first.call(null,inst_30210);
var inst_30215 = cljs.core.chunk_rest.call(null,inst_30210);
var inst_30216 = cljs.core.count.call(null,inst_30214);
var inst_30196 = inst_30215;
var inst_30197 = inst_30214;
var inst_30198 = inst_30216;
var inst_30199 = (0);
var state_30255__$1 = (function (){var statearr_30289 = state_30255;
(statearr_30289[(12)] = inst_30197);

(statearr_30289[(14)] = inst_30198);

(statearr_30289[(15)] = inst_30199);

(statearr_30289[(16)] = inst_30196);

return statearr_30289;
})();
var statearr_30290_30328 = state_30255__$1;
(statearr_30290_30328[(2)] = null);

(statearr_30290_30328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (10))){
var inst_30197 = (state_30255[(12)]);
var inst_30198 = (state_30255[(14)]);
var inst_30199 = (state_30255[(15)]);
var inst_30196 = (state_30255[(16)]);
var inst_30204 = cljs.core._nth.call(null,inst_30197,inst_30199);
var inst_30205 = cljs.core.async.muxch_STAR_.call(null,inst_30204);
var inst_30206 = cljs.core.async.close_BANG_.call(null,inst_30205);
var inst_30207 = (inst_30199 + (1));
var tmp30285 = inst_30197;
var tmp30286 = inst_30198;
var tmp30287 = inst_30196;
var inst_30196__$1 = tmp30287;
var inst_30197__$1 = tmp30285;
var inst_30198__$1 = tmp30286;
var inst_30199__$1 = inst_30207;
var state_30255__$1 = (function (){var statearr_30291 = state_30255;
(statearr_30291[(12)] = inst_30197__$1);

(statearr_30291[(17)] = inst_30206);

(statearr_30291[(14)] = inst_30198__$1);

(statearr_30291[(15)] = inst_30199__$1);

(statearr_30291[(16)] = inst_30196__$1);

return statearr_30291;
})();
var statearr_30292_30329 = state_30255__$1;
(statearr_30292_30329[(2)] = null);

(statearr_30292_30329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (18))){
var inst_30225 = (state_30255[(2)]);
var state_30255__$1 = state_30255;
var statearr_30293_30330 = state_30255__$1;
(statearr_30293_30330[(2)] = inst_30225);

(statearr_30293_30330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30256 === (8))){
var inst_30198 = (state_30255[(14)]);
var inst_30199 = (state_30255[(15)]);
var inst_30201 = (inst_30199 < inst_30198);
var inst_30202 = inst_30201;
var state_30255__$1 = state_30255;
if(cljs.core.truth_(inst_30202)){
var statearr_30294_30331 = state_30255__$1;
(statearr_30294_30331[(1)] = (10));

} else {
var statearr_30295_30332 = state_30255__$1;
(statearr_30295_30332[(1)] = (11));

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
});})(c__25357__auto___30304,mults,ensure_mult,p))
;
return ((function (switch__25295__auto__,c__25357__auto___30304,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_30299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30299[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_30299[(1)] = (1));

return statearr_30299;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30255){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30300){if((e30300 instanceof Object)){
var ex__25299__auto__ = e30300;
var statearr_30301_30333 = state_30255;
(statearr_30301_30333[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30334 = state_30255;
state_30255 = G__30334;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30304,mults,ensure_mult,p))
})();
var state__25359__auto__ = (function (){var statearr_30302 = f__25358__auto__.call(null);
(statearr_30302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30304);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30304,mults,ensure_mult,p))
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
var G__30336 = arguments.length;
switch (G__30336) {
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
var G__30339 = arguments.length;
switch (G__30339) {
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
var G__30342 = arguments.length;
switch (G__30342) {
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
var c__25357__auto___30412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30412,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30412,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var state_30381__$1 = state_30381;
var statearr_30383_30413 = state_30381__$1;
(statearr_30383_30413[(2)] = null);

(statearr_30383_30413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (1))){
var state_30381__$1 = state_30381;
var statearr_30384_30414 = state_30381__$1;
(statearr_30384_30414[(2)] = null);

(statearr_30384_30414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (4))){
var inst_30345 = (state_30381[(7)]);
var inst_30347 = (inst_30345 < cnt);
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30347)){
var statearr_30385_30415 = state_30381__$1;
(statearr_30385_30415[(1)] = (6));

} else {
var statearr_30386_30416 = state_30381__$1;
(statearr_30386_30416[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (15))){
var inst_30377 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30387_30417 = state_30381__$1;
(statearr_30387_30417[(2)] = inst_30377);

(statearr_30387_30417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (13))){
var inst_30370 = cljs.core.async.close_BANG_.call(null,out);
var state_30381__$1 = state_30381;
var statearr_30388_30418 = state_30381__$1;
(statearr_30388_30418[(2)] = inst_30370);

(statearr_30388_30418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (6))){
var state_30381__$1 = state_30381;
var statearr_30389_30419 = state_30381__$1;
(statearr_30389_30419[(2)] = null);

(statearr_30389_30419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (3))){
var inst_30379 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (12))){
var inst_30367 = (state_30381[(8)]);
var inst_30367__$1 = (state_30381[(2)]);
var inst_30368 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30367__$1);
var state_30381__$1 = (function (){var statearr_30390 = state_30381;
(statearr_30390[(8)] = inst_30367__$1);

return statearr_30390;
})();
if(cljs.core.truth_(inst_30368)){
var statearr_30391_30420 = state_30381__$1;
(statearr_30391_30420[(1)] = (13));

} else {
var statearr_30392_30421 = state_30381__$1;
(statearr_30392_30421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (2))){
var inst_30344 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30345 = (0);
var state_30381__$1 = (function (){var statearr_30393 = state_30381;
(statearr_30393[(9)] = inst_30344);

(statearr_30393[(7)] = inst_30345);

return statearr_30393;
})();
var statearr_30394_30422 = state_30381__$1;
(statearr_30394_30422[(2)] = null);

(statearr_30394_30422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (11))){
var inst_30345 = (state_30381[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30381,(10),Object,null,(9));
var inst_30354 = chs__$1.call(null,inst_30345);
var inst_30355 = done.call(null,inst_30345);
var inst_30356 = cljs.core.async.take_BANG_.call(null,inst_30354,inst_30355);
var state_30381__$1 = state_30381;
var statearr_30395_30423 = state_30381__$1;
(statearr_30395_30423[(2)] = inst_30356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30381__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (9))){
var inst_30345 = (state_30381[(7)]);
var inst_30358 = (state_30381[(2)]);
var inst_30359 = (inst_30345 + (1));
var inst_30345__$1 = inst_30359;
var state_30381__$1 = (function (){var statearr_30396 = state_30381;
(statearr_30396[(7)] = inst_30345__$1);

(statearr_30396[(10)] = inst_30358);

return statearr_30396;
})();
var statearr_30397_30424 = state_30381__$1;
(statearr_30397_30424[(2)] = null);

(statearr_30397_30424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (5))){
var inst_30365 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30398 = state_30381;
(statearr_30398[(11)] = inst_30365);

return statearr_30398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30381__$1,(12),dchan);
} else {
if((state_val_30382 === (14))){
var inst_30367 = (state_30381[(8)]);
var inst_30372 = cljs.core.apply.call(null,f,inst_30367);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30381__$1,(16),out,inst_30372);
} else {
if((state_val_30382 === (16))){
var inst_30374 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30399 = state_30381;
(statearr_30399[(12)] = inst_30374);

return statearr_30399;
})();
var statearr_30400_30425 = state_30381__$1;
(statearr_30400_30425[(2)] = null);

(statearr_30400_30425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (10))){
var inst_30349 = (state_30381[(2)]);
var inst_30350 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30381__$1 = (function (){var statearr_30401 = state_30381;
(statearr_30401[(13)] = inst_30349);

return statearr_30401;
})();
var statearr_30402_30426 = state_30381__$1;
(statearr_30402_30426[(2)] = inst_30350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30381__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (8))){
var inst_30363 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30403_30427 = state_30381__$1;
(statearr_30403_30427[(2)] = inst_30363);

(statearr_30403_30427[(1)] = (5));


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
});})(c__25357__auto___30412,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25295__auto__,c__25357__auto___30412,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30381){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__25299__auto__ = e30408;
var statearr_30409_30428 = state_30381;
(statearr_30409_30428[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30429 = state_30381;
state_30381 = G__30429;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30412,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25359__auto__ = (function (){var statearr_30410 = f__25358__auto__.call(null);
(statearr_30410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30412);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30412,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30432 = arguments.length;
switch (G__30432) {
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
var c__25357__auto___30487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30487,out){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30487,out){
return (function (state_30462){
var state_val_30463 = (state_30462[(1)]);
if((state_val_30463 === (7))){
var inst_30441 = (state_30462[(7)]);
var inst_30442 = (state_30462[(8)]);
var inst_30441__$1 = (state_30462[(2)]);
var inst_30442__$1 = cljs.core.nth.call(null,inst_30441__$1,(0),null);
var inst_30443 = cljs.core.nth.call(null,inst_30441__$1,(1),null);
var inst_30444 = (inst_30442__$1 == null);
var state_30462__$1 = (function (){var statearr_30464 = state_30462;
(statearr_30464[(7)] = inst_30441__$1);

(statearr_30464[(9)] = inst_30443);

(statearr_30464[(8)] = inst_30442__$1);

return statearr_30464;
})();
if(cljs.core.truth_(inst_30444)){
var statearr_30465_30488 = state_30462__$1;
(statearr_30465_30488[(1)] = (8));

} else {
var statearr_30466_30489 = state_30462__$1;
(statearr_30466_30489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (1))){
var inst_30433 = cljs.core.vec.call(null,chs);
var inst_30434 = inst_30433;
var state_30462__$1 = (function (){var statearr_30467 = state_30462;
(statearr_30467[(10)] = inst_30434);

return statearr_30467;
})();
var statearr_30468_30490 = state_30462__$1;
(statearr_30468_30490[(2)] = null);

(statearr_30468_30490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (4))){
var inst_30434 = (state_30462[(10)]);
var state_30462__$1 = state_30462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30462__$1,(7),inst_30434);
} else {
if((state_val_30463 === (6))){
var inst_30458 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30469_30491 = state_30462__$1;
(statearr_30469_30491[(2)] = inst_30458);

(statearr_30469_30491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (3))){
var inst_30460 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30462__$1,inst_30460);
} else {
if((state_val_30463 === (2))){
var inst_30434 = (state_30462[(10)]);
var inst_30436 = cljs.core.count.call(null,inst_30434);
var inst_30437 = (inst_30436 > (0));
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30437)){
var statearr_30471_30492 = state_30462__$1;
(statearr_30471_30492[(1)] = (4));

} else {
var statearr_30472_30493 = state_30462__$1;
(statearr_30472_30493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (11))){
var inst_30434 = (state_30462[(10)]);
var inst_30451 = (state_30462[(2)]);
var tmp30470 = inst_30434;
var inst_30434__$1 = tmp30470;
var state_30462__$1 = (function (){var statearr_30473 = state_30462;
(statearr_30473[(11)] = inst_30451);

(statearr_30473[(10)] = inst_30434__$1);

return statearr_30473;
})();
var statearr_30474_30494 = state_30462__$1;
(statearr_30474_30494[(2)] = null);

(statearr_30474_30494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (9))){
var inst_30442 = (state_30462[(8)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30462__$1,(11),out,inst_30442);
} else {
if((state_val_30463 === (5))){
var inst_30456 = cljs.core.async.close_BANG_.call(null,out);
var state_30462__$1 = state_30462;
var statearr_30475_30495 = state_30462__$1;
(statearr_30475_30495[(2)] = inst_30456);

(statearr_30475_30495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (10))){
var inst_30454 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30476_30496 = state_30462__$1;
(statearr_30476_30496[(2)] = inst_30454);

(statearr_30476_30496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (8))){
var inst_30441 = (state_30462[(7)]);
var inst_30434 = (state_30462[(10)]);
var inst_30443 = (state_30462[(9)]);
var inst_30442 = (state_30462[(8)]);
var inst_30446 = (function (){var cs = inst_30434;
var vec__30439 = inst_30441;
var v = inst_30442;
var c = inst_30443;
return ((function (cs,vec__30439,v,c,inst_30441,inst_30434,inst_30443,inst_30442,state_val_30463,c__25357__auto___30487,out){
return (function (p1__30430_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30430_SHARP_);
});
;})(cs,vec__30439,v,c,inst_30441,inst_30434,inst_30443,inst_30442,state_val_30463,c__25357__auto___30487,out))
})();
var inst_30447 = cljs.core.filterv.call(null,inst_30446,inst_30434);
var inst_30434__$1 = inst_30447;
var state_30462__$1 = (function (){var statearr_30477 = state_30462;
(statearr_30477[(10)] = inst_30434__$1);

return statearr_30477;
})();
var statearr_30478_30497 = state_30462__$1;
(statearr_30478_30497[(2)] = null);

(statearr_30478_30497[(1)] = (2));


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
});})(c__25357__auto___30487,out))
;
return ((function (switch__25295__auto__,c__25357__auto___30487,out){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_30482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30482[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_30482[(1)] = (1));

return statearr_30482;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30462){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30483){if((e30483 instanceof Object)){
var ex__25299__auto__ = e30483;
var statearr_30484_30498 = state_30462;
(statearr_30484_30498[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30499 = state_30462;
state_30462 = G__30499;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30487,out))
})();
var state__25359__auto__ = (function (){var statearr_30485 = f__25358__auto__.call(null);
(statearr_30485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30487);

return statearr_30485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30487,out))
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
var G__30501 = arguments.length;
switch (G__30501) {
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
var c__25357__auto___30549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30549,out){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30549,out){
return (function (state_30525){
var state_val_30526 = (state_30525[(1)]);
if((state_val_30526 === (7))){
var inst_30507 = (state_30525[(7)]);
var inst_30507__$1 = (state_30525[(2)]);
var inst_30508 = (inst_30507__$1 == null);
var inst_30509 = cljs.core.not.call(null,inst_30508);
var state_30525__$1 = (function (){var statearr_30527 = state_30525;
(statearr_30527[(7)] = inst_30507__$1);

return statearr_30527;
})();
if(inst_30509){
var statearr_30528_30550 = state_30525__$1;
(statearr_30528_30550[(1)] = (8));

} else {
var statearr_30529_30551 = state_30525__$1;
(statearr_30529_30551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (1))){
var inst_30502 = (0);
var state_30525__$1 = (function (){var statearr_30530 = state_30525;
(statearr_30530[(8)] = inst_30502);

return statearr_30530;
})();
var statearr_30531_30552 = state_30525__$1;
(statearr_30531_30552[(2)] = null);

(statearr_30531_30552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (4))){
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30525__$1,(7),ch);
} else {
if((state_val_30526 === (6))){
var inst_30520 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30532_30553 = state_30525__$1;
(statearr_30532_30553[(2)] = inst_30520);

(statearr_30532_30553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (3))){
var inst_30522 = (state_30525[(2)]);
var inst_30523 = cljs.core.async.close_BANG_.call(null,out);
var state_30525__$1 = (function (){var statearr_30533 = state_30525;
(statearr_30533[(9)] = inst_30522);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30525__$1,inst_30523);
} else {
if((state_val_30526 === (2))){
var inst_30502 = (state_30525[(8)]);
var inst_30504 = (inst_30502 < n);
var state_30525__$1 = state_30525;
if(cljs.core.truth_(inst_30504)){
var statearr_30534_30554 = state_30525__$1;
(statearr_30534_30554[(1)] = (4));

} else {
var statearr_30535_30555 = state_30525__$1;
(statearr_30535_30555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (11))){
var inst_30502 = (state_30525[(8)]);
var inst_30512 = (state_30525[(2)]);
var inst_30513 = (inst_30502 + (1));
var inst_30502__$1 = inst_30513;
var state_30525__$1 = (function (){var statearr_30536 = state_30525;
(statearr_30536[(10)] = inst_30512);

(statearr_30536[(8)] = inst_30502__$1);

return statearr_30536;
})();
var statearr_30537_30556 = state_30525__$1;
(statearr_30537_30556[(2)] = null);

(statearr_30537_30556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (9))){
var state_30525__$1 = state_30525;
var statearr_30538_30557 = state_30525__$1;
(statearr_30538_30557[(2)] = null);

(statearr_30538_30557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (5))){
var state_30525__$1 = state_30525;
var statearr_30539_30558 = state_30525__$1;
(statearr_30539_30558[(2)] = null);

(statearr_30539_30558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (10))){
var inst_30517 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30540_30559 = state_30525__$1;
(statearr_30540_30559[(2)] = inst_30517);

(statearr_30540_30559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (8))){
var inst_30507 = (state_30525[(7)]);
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30525__$1,(11),out,inst_30507);
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
});})(c__25357__auto___30549,out))
;
return ((function (switch__25295__auto__,c__25357__auto___30549,out){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_30544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30544[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_30544[(1)] = (1));

return statearr_30544;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30525){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30545){if((e30545 instanceof Object)){
var ex__25299__auto__ = e30545;
var statearr_30546_30560 = state_30525;
(statearr_30546_30560[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30561 = state_30525;
state_30525 = G__30561;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30549,out))
})();
var state__25359__auto__ = (function (){var statearr_30547 = f__25358__auto__.call(null);
(statearr_30547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30549);

return statearr_30547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30549,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30569 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30569 = (function (map_LT_,f,ch,meta30570){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30570 = meta30570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30571,meta30570__$1){
var self__ = this;
var _30571__$1 = this;
return (new cljs.core.async.t30569(self__.map_LT_,self__.f,self__.ch,meta30570__$1));
});

cljs.core.async.t30569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30571){
var self__ = this;
var _30571__$1 = this;
return self__.meta30570;
});

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30572 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30572 = (function (map_LT_,f,ch,meta30570,_,fn1,meta30573){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30570 = meta30570;
this._ = _;
this.fn1 = fn1;
this.meta30573 = meta30573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30574,meta30573__$1){
var self__ = this;
var _30574__$1 = this;
return (new cljs.core.async.t30572(self__.map_LT_,self__.f,self__.ch,self__.meta30570,self__._,self__.fn1,meta30573__$1));
});})(___$1))
;

cljs.core.async.t30572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30574){
var self__ = this;
var _30574__$1 = this;
return self__.meta30573;
});})(___$1))
;

cljs.core.async.t30572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30562_SHARP_){
return f1.call(null,(((p1__30562_SHARP_ == null))?null:self__.f.call(null,p1__30562_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30572.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30570","meta30570",382815136,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30573","meta30573",-846694345,null)], null);
});})(___$1))
;

cljs.core.async.t30572.cljs$lang$type = true;

cljs.core.async.t30572.cljs$lang$ctorStr = "cljs.core.async/t30572";

cljs.core.async.t30572.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t30572");
});})(___$1))
;

cljs.core.async.__GT_t30572 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30572(map_LT___$1,f__$1,ch__$1,meta30570__$1,___$2,fn1__$1,meta30573){
return (new cljs.core.async.t30572(map_LT___$1,f__$1,ch__$1,meta30570__$1,___$2,fn1__$1,meta30573));
});})(___$1))
;

}

return (new cljs.core.async.t30572(self__.map_LT_,self__.f,self__.ch,self__.meta30570,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30570","meta30570",382815136,null)], null);
});

cljs.core.async.t30569.cljs$lang$type = true;

cljs.core.async.t30569.cljs$lang$ctorStr = "cljs.core.async/t30569";

cljs.core.async.t30569.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t30569");
});

cljs.core.async.__GT_t30569 = (function cljs$core$async$map_LT__$___GT_t30569(map_LT___$1,f__$1,ch__$1,meta30570){
return (new cljs.core.async.t30569(map_LT___$1,f__$1,ch__$1,meta30570));
});

}

return (new cljs.core.async.t30569(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30578 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30578 = (function (map_GT_,f,ch,meta30579){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30579 = meta30579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30580,meta30579__$1){
var self__ = this;
var _30580__$1 = this;
return (new cljs.core.async.t30578(self__.map_GT_,self__.f,self__.ch,meta30579__$1));
});

cljs.core.async.t30578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30580){
var self__ = this;
var _30580__$1 = this;
return self__.meta30579;
});

cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30579","meta30579",897521832,null)], null);
});

cljs.core.async.t30578.cljs$lang$type = true;

cljs.core.async.t30578.cljs$lang$ctorStr = "cljs.core.async/t30578";

cljs.core.async.t30578.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t30578");
});

cljs.core.async.__GT_t30578 = (function cljs$core$async$map_GT__$___GT_t30578(map_GT___$1,f__$1,ch__$1,meta30579){
return (new cljs.core.async.t30578(map_GT___$1,f__$1,ch__$1,meta30579));
});

}

return (new cljs.core.async.t30578(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30584 = (function (filter_GT_,p,ch,meta30585){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30585 = meta30585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30586,meta30585__$1){
var self__ = this;
var _30586__$1 = this;
return (new cljs.core.async.t30584(self__.filter_GT_,self__.p,self__.ch,meta30585__$1));
});

cljs.core.async.t30584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30586){
var self__ = this;
var _30586__$1 = this;
return self__.meta30585;
});

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30585","meta30585",-1754864241,null)], null);
});

cljs.core.async.t30584.cljs$lang$type = true;

cljs.core.async.t30584.cljs$lang$ctorStr = "cljs.core.async/t30584";

cljs.core.async.t30584.cljs$lang$ctorPrWriter = (function (this__4918__auto__,writer__4919__auto__,opt__4920__auto__){
return cljs.core._write.call(null,writer__4919__auto__,"cljs.core.async/t30584");
});

cljs.core.async.__GT_t30584 = (function cljs$core$async$filter_GT__$___GT_t30584(filter_GT___$1,p__$1,ch__$1,meta30585){
return (new cljs.core.async.t30584(filter_GT___$1,p__$1,ch__$1,meta30585));
});

}

return (new cljs.core.async.t30584(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30588 = arguments.length;
switch (G__30588) {
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
var c__25357__auto___30631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30631,out){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30631,out){
return (function (state_30609){
var state_val_30610 = (state_30609[(1)]);
if((state_val_30610 === (7))){
var inst_30605 = (state_30609[(2)]);
var state_30609__$1 = state_30609;
var statearr_30611_30632 = state_30609__$1;
(statearr_30611_30632[(2)] = inst_30605);

(statearr_30611_30632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (1))){
var state_30609__$1 = state_30609;
var statearr_30612_30633 = state_30609__$1;
(statearr_30612_30633[(2)] = null);

(statearr_30612_30633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (4))){
var inst_30591 = (state_30609[(7)]);
var inst_30591__$1 = (state_30609[(2)]);
var inst_30592 = (inst_30591__$1 == null);
var state_30609__$1 = (function (){var statearr_30613 = state_30609;
(statearr_30613[(7)] = inst_30591__$1);

return statearr_30613;
})();
if(cljs.core.truth_(inst_30592)){
var statearr_30614_30634 = state_30609__$1;
(statearr_30614_30634[(1)] = (5));

} else {
var statearr_30615_30635 = state_30609__$1;
(statearr_30615_30635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (6))){
var inst_30591 = (state_30609[(7)]);
var inst_30596 = p.call(null,inst_30591);
var state_30609__$1 = state_30609;
if(cljs.core.truth_(inst_30596)){
var statearr_30616_30636 = state_30609__$1;
(statearr_30616_30636[(1)] = (8));

} else {
var statearr_30617_30637 = state_30609__$1;
(statearr_30617_30637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (3))){
var inst_30607 = (state_30609[(2)]);
var state_30609__$1 = state_30609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30609__$1,inst_30607);
} else {
if((state_val_30610 === (2))){
var state_30609__$1 = state_30609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30609__$1,(4),ch);
} else {
if((state_val_30610 === (11))){
var inst_30599 = (state_30609[(2)]);
var state_30609__$1 = state_30609;
var statearr_30618_30638 = state_30609__$1;
(statearr_30618_30638[(2)] = inst_30599);

(statearr_30618_30638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (9))){
var state_30609__$1 = state_30609;
var statearr_30619_30639 = state_30609__$1;
(statearr_30619_30639[(2)] = null);

(statearr_30619_30639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (5))){
var inst_30594 = cljs.core.async.close_BANG_.call(null,out);
var state_30609__$1 = state_30609;
var statearr_30620_30640 = state_30609__$1;
(statearr_30620_30640[(2)] = inst_30594);

(statearr_30620_30640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (10))){
var inst_30602 = (state_30609[(2)]);
var state_30609__$1 = (function (){var statearr_30621 = state_30609;
(statearr_30621[(8)] = inst_30602);

return statearr_30621;
})();
var statearr_30622_30641 = state_30609__$1;
(statearr_30622_30641[(2)] = null);

(statearr_30622_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (8))){
var inst_30591 = (state_30609[(7)]);
var state_30609__$1 = state_30609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30609__$1,(11),out,inst_30591);
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
});})(c__25357__auto___30631,out))
;
return ((function (switch__25295__auto__,c__25357__auto___30631,out){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_30626 = [null,null,null,null,null,null,null,null,null];
(statearr_30626[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_30626[(1)] = (1));

return statearr_30626;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30609){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30627){if((e30627 instanceof Object)){
var ex__25299__auto__ = e30627;
var statearr_30628_30642 = state_30609;
(statearr_30628_30642[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30643 = state_30609;
state_30609 = G__30643;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30631,out))
})();
var state__25359__auto__ = (function (){var statearr_30629 = f__25358__auto__.call(null);
(statearr_30629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30631);

return statearr_30629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30631,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30645 = arguments.length;
switch (G__30645) {
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
var c__25357__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto__){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto__){
return (function (state_30812){
var state_val_30813 = (state_30812[(1)]);
if((state_val_30813 === (7))){
var inst_30808 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30814_30855 = state_30812__$1;
(statearr_30814_30855[(2)] = inst_30808);

(statearr_30814_30855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (20))){
var inst_30778 = (state_30812[(7)]);
var inst_30789 = (state_30812[(2)]);
var inst_30790 = cljs.core.next.call(null,inst_30778);
var inst_30764 = inst_30790;
var inst_30765 = null;
var inst_30766 = (0);
var inst_30767 = (0);
var state_30812__$1 = (function (){var statearr_30815 = state_30812;
(statearr_30815[(8)] = inst_30789);

(statearr_30815[(9)] = inst_30766);

(statearr_30815[(10)] = inst_30764);

(statearr_30815[(11)] = inst_30767);

(statearr_30815[(12)] = inst_30765);

return statearr_30815;
})();
var statearr_30816_30856 = state_30812__$1;
(statearr_30816_30856[(2)] = null);

(statearr_30816_30856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (1))){
var state_30812__$1 = state_30812;
var statearr_30817_30857 = state_30812__$1;
(statearr_30817_30857[(2)] = null);

(statearr_30817_30857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (4))){
var inst_30753 = (state_30812[(13)]);
var inst_30753__$1 = (state_30812[(2)]);
var inst_30754 = (inst_30753__$1 == null);
var state_30812__$1 = (function (){var statearr_30818 = state_30812;
(statearr_30818[(13)] = inst_30753__$1);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30754)){
var statearr_30819_30858 = state_30812__$1;
(statearr_30819_30858[(1)] = (5));

} else {
var statearr_30820_30859 = state_30812__$1;
(statearr_30820_30859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (15))){
var state_30812__$1 = state_30812;
var statearr_30824_30860 = state_30812__$1;
(statearr_30824_30860[(2)] = null);

(statearr_30824_30860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (21))){
var state_30812__$1 = state_30812;
var statearr_30825_30861 = state_30812__$1;
(statearr_30825_30861[(2)] = null);

(statearr_30825_30861[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (13))){
var inst_30766 = (state_30812[(9)]);
var inst_30764 = (state_30812[(10)]);
var inst_30767 = (state_30812[(11)]);
var inst_30765 = (state_30812[(12)]);
var inst_30774 = (state_30812[(2)]);
var inst_30775 = (inst_30767 + (1));
var tmp30821 = inst_30766;
var tmp30822 = inst_30764;
var tmp30823 = inst_30765;
var inst_30764__$1 = tmp30822;
var inst_30765__$1 = tmp30823;
var inst_30766__$1 = tmp30821;
var inst_30767__$1 = inst_30775;
var state_30812__$1 = (function (){var statearr_30826 = state_30812;
(statearr_30826[(14)] = inst_30774);

(statearr_30826[(9)] = inst_30766__$1);

(statearr_30826[(10)] = inst_30764__$1);

(statearr_30826[(11)] = inst_30767__$1);

(statearr_30826[(12)] = inst_30765__$1);

return statearr_30826;
})();
var statearr_30827_30862 = state_30812__$1;
(statearr_30827_30862[(2)] = null);

(statearr_30827_30862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (22))){
var state_30812__$1 = state_30812;
var statearr_30828_30863 = state_30812__$1;
(statearr_30828_30863[(2)] = null);

(statearr_30828_30863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (6))){
var inst_30753 = (state_30812[(13)]);
var inst_30762 = f.call(null,inst_30753);
var inst_30763 = cljs.core.seq.call(null,inst_30762);
var inst_30764 = inst_30763;
var inst_30765 = null;
var inst_30766 = (0);
var inst_30767 = (0);
var state_30812__$1 = (function (){var statearr_30829 = state_30812;
(statearr_30829[(9)] = inst_30766);

(statearr_30829[(10)] = inst_30764);

(statearr_30829[(11)] = inst_30767);

(statearr_30829[(12)] = inst_30765);

return statearr_30829;
})();
var statearr_30830_30864 = state_30812__$1;
(statearr_30830_30864[(2)] = null);

(statearr_30830_30864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (17))){
var inst_30778 = (state_30812[(7)]);
var inst_30782 = cljs.core.chunk_first.call(null,inst_30778);
var inst_30783 = cljs.core.chunk_rest.call(null,inst_30778);
var inst_30784 = cljs.core.count.call(null,inst_30782);
var inst_30764 = inst_30783;
var inst_30765 = inst_30782;
var inst_30766 = inst_30784;
var inst_30767 = (0);
var state_30812__$1 = (function (){var statearr_30831 = state_30812;
(statearr_30831[(9)] = inst_30766);

(statearr_30831[(10)] = inst_30764);

(statearr_30831[(11)] = inst_30767);

(statearr_30831[(12)] = inst_30765);

return statearr_30831;
})();
var statearr_30832_30865 = state_30812__$1;
(statearr_30832_30865[(2)] = null);

(statearr_30832_30865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (3))){
var inst_30810 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30812__$1,inst_30810);
} else {
if((state_val_30813 === (12))){
var inst_30798 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30833_30866 = state_30812__$1;
(statearr_30833_30866[(2)] = inst_30798);

(statearr_30833_30866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (2))){
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30812__$1,(4),in$);
} else {
if((state_val_30813 === (23))){
var inst_30806 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30834_30867 = state_30812__$1;
(statearr_30834_30867[(2)] = inst_30806);

(statearr_30834_30867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (19))){
var inst_30793 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30835_30868 = state_30812__$1;
(statearr_30835_30868[(2)] = inst_30793);

(statearr_30835_30868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (11))){
var inst_30778 = (state_30812[(7)]);
var inst_30764 = (state_30812[(10)]);
var inst_30778__$1 = cljs.core.seq.call(null,inst_30764);
var state_30812__$1 = (function (){var statearr_30836 = state_30812;
(statearr_30836[(7)] = inst_30778__$1);

return statearr_30836;
})();
if(inst_30778__$1){
var statearr_30837_30869 = state_30812__$1;
(statearr_30837_30869[(1)] = (14));

} else {
var statearr_30838_30870 = state_30812__$1;
(statearr_30838_30870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (9))){
var inst_30800 = (state_30812[(2)]);
var inst_30801 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30812__$1 = (function (){var statearr_30839 = state_30812;
(statearr_30839[(15)] = inst_30800);

return statearr_30839;
})();
if(cljs.core.truth_(inst_30801)){
var statearr_30840_30871 = state_30812__$1;
(statearr_30840_30871[(1)] = (21));

} else {
var statearr_30841_30872 = state_30812__$1;
(statearr_30841_30872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (5))){
var inst_30756 = cljs.core.async.close_BANG_.call(null,out);
var state_30812__$1 = state_30812;
var statearr_30842_30873 = state_30812__$1;
(statearr_30842_30873[(2)] = inst_30756);

(statearr_30842_30873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (14))){
var inst_30778 = (state_30812[(7)]);
var inst_30780 = cljs.core.chunked_seq_QMARK_.call(null,inst_30778);
var state_30812__$1 = state_30812;
if(inst_30780){
var statearr_30843_30874 = state_30812__$1;
(statearr_30843_30874[(1)] = (17));

} else {
var statearr_30844_30875 = state_30812__$1;
(statearr_30844_30875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (16))){
var inst_30796 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30845_30876 = state_30812__$1;
(statearr_30845_30876[(2)] = inst_30796);

(statearr_30845_30876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (10))){
var inst_30767 = (state_30812[(11)]);
var inst_30765 = (state_30812[(12)]);
var inst_30772 = cljs.core._nth.call(null,inst_30765,inst_30767);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30812__$1,(13),out,inst_30772);
} else {
if((state_val_30813 === (18))){
var inst_30778 = (state_30812[(7)]);
var inst_30787 = cljs.core.first.call(null,inst_30778);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30812__$1,(20),out,inst_30787);
} else {
if((state_val_30813 === (8))){
var inst_30766 = (state_30812[(9)]);
var inst_30767 = (state_30812[(11)]);
var inst_30769 = (inst_30767 < inst_30766);
var inst_30770 = inst_30769;
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30770)){
var statearr_30846_30877 = state_30812__$1;
(statearr_30846_30877[(1)] = (10));

} else {
var statearr_30847_30878 = state_30812__$1;
(statearr_30847_30878[(1)] = (11));

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
});})(c__25357__auto__))
;
return ((function (switch__25295__auto__,c__25357__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25296__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25296__auto____0 = (function (){
var statearr_30851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30851[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25296__auto__);

(statearr_30851[(1)] = (1));

return statearr_30851;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25296__auto____1 = (function (state_30812){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30852){if((e30852 instanceof Object)){
var ex__25299__auto__ = e30852;
var statearr_30853_30879 = state_30812;
(statearr_30853_30879[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30880 = state_30812;
state_30812 = G__30880;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25296__auto__ = function(state_30812){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25296__auto____1.call(this,state_30812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25296__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25296__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto__))
})();
var state__25359__auto__ = (function (){var statearr_30854 = f__25358__auto__.call(null);
(statearr_30854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto__);

return statearr_30854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto__))
);

return c__25357__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30882 = arguments.length;
switch (G__30882) {
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
var G__30885 = arguments.length;
switch (G__30885) {
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
var G__30888 = arguments.length;
switch (G__30888) {
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
var c__25357__auto___30938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___30938,out){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___30938,out){
return (function (state_30912){
var state_val_30913 = (state_30912[(1)]);
if((state_val_30913 === (7))){
var inst_30907 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30914_30939 = state_30912__$1;
(statearr_30914_30939[(2)] = inst_30907);

(statearr_30914_30939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (1))){
var inst_30889 = null;
var state_30912__$1 = (function (){var statearr_30915 = state_30912;
(statearr_30915[(7)] = inst_30889);

return statearr_30915;
})();
var statearr_30916_30940 = state_30912__$1;
(statearr_30916_30940[(2)] = null);

(statearr_30916_30940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (4))){
var inst_30892 = (state_30912[(8)]);
var inst_30892__$1 = (state_30912[(2)]);
var inst_30893 = (inst_30892__$1 == null);
var inst_30894 = cljs.core.not.call(null,inst_30893);
var state_30912__$1 = (function (){var statearr_30917 = state_30912;
(statearr_30917[(8)] = inst_30892__$1);

return statearr_30917;
})();
if(inst_30894){
var statearr_30918_30941 = state_30912__$1;
(statearr_30918_30941[(1)] = (5));

} else {
var statearr_30919_30942 = state_30912__$1;
(statearr_30919_30942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (6))){
var state_30912__$1 = state_30912;
var statearr_30920_30943 = state_30912__$1;
(statearr_30920_30943[(2)] = null);

(statearr_30920_30943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (3))){
var inst_30909 = (state_30912[(2)]);
var inst_30910 = cljs.core.async.close_BANG_.call(null,out);
var state_30912__$1 = (function (){var statearr_30921 = state_30912;
(statearr_30921[(9)] = inst_30909);

return statearr_30921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30912__$1,inst_30910);
} else {
if((state_val_30913 === (2))){
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30912__$1,(4),ch);
} else {
if((state_val_30913 === (11))){
var inst_30892 = (state_30912[(8)]);
var inst_30901 = (state_30912[(2)]);
var inst_30889 = inst_30892;
var state_30912__$1 = (function (){var statearr_30922 = state_30912;
(statearr_30922[(7)] = inst_30889);

(statearr_30922[(10)] = inst_30901);

return statearr_30922;
})();
var statearr_30923_30944 = state_30912__$1;
(statearr_30923_30944[(2)] = null);

(statearr_30923_30944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (9))){
var inst_30892 = (state_30912[(8)]);
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30912__$1,(11),out,inst_30892);
} else {
if((state_val_30913 === (5))){
var inst_30889 = (state_30912[(7)]);
var inst_30892 = (state_30912[(8)]);
var inst_30896 = cljs.core._EQ_.call(null,inst_30892,inst_30889);
var state_30912__$1 = state_30912;
if(inst_30896){
var statearr_30925_30945 = state_30912__$1;
(statearr_30925_30945[(1)] = (8));

} else {
var statearr_30926_30946 = state_30912__$1;
(statearr_30926_30946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (10))){
var inst_30904 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30927_30947 = state_30912__$1;
(statearr_30927_30947[(2)] = inst_30904);

(statearr_30927_30947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (8))){
var inst_30889 = (state_30912[(7)]);
var tmp30924 = inst_30889;
var inst_30889__$1 = tmp30924;
var state_30912__$1 = (function (){var statearr_30928 = state_30912;
(statearr_30928[(7)] = inst_30889__$1);

return statearr_30928;
})();
var statearr_30929_30948 = state_30912__$1;
(statearr_30929_30948[(2)] = null);

(statearr_30929_30948[(1)] = (2));


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
});})(c__25357__auto___30938,out))
;
return ((function (switch__25295__auto__,c__25357__auto___30938,out){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_30933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30933[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_30933[(1)] = (1));

return statearr_30933;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30912){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e30934){if((e30934 instanceof Object)){
var ex__25299__auto__ = e30934;
var statearr_30935_30949 = state_30912;
(statearr_30935_30949[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30950 = state_30912;
state_30912 = G__30950;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___30938,out))
})();
var state__25359__auto__ = (function (){var statearr_30936 = f__25358__auto__.call(null);
(statearr_30936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___30938);

return statearr_30936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___30938,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30952 = arguments.length;
switch (G__30952) {
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
var c__25357__auto___31021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___31021,out){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___31021,out){
return (function (state_30990){
var state_val_30991 = (state_30990[(1)]);
if((state_val_30991 === (7))){
var inst_30986 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
var statearr_30992_31022 = state_30990__$1;
(statearr_30992_31022[(2)] = inst_30986);

(statearr_30992_31022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (1))){
var inst_30953 = (new Array(n));
var inst_30954 = inst_30953;
var inst_30955 = (0);
var state_30990__$1 = (function (){var statearr_30993 = state_30990;
(statearr_30993[(7)] = inst_30954);

(statearr_30993[(8)] = inst_30955);

return statearr_30993;
})();
var statearr_30994_31023 = state_30990__$1;
(statearr_30994_31023[(2)] = null);

(statearr_30994_31023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (4))){
var inst_30958 = (state_30990[(9)]);
var inst_30958__$1 = (state_30990[(2)]);
var inst_30959 = (inst_30958__$1 == null);
var inst_30960 = cljs.core.not.call(null,inst_30959);
var state_30990__$1 = (function (){var statearr_30995 = state_30990;
(statearr_30995[(9)] = inst_30958__$1);

return statearr_30995;
})();
if(inst_30960){
var statearr_30996_31024 = state_30990__$1;
(statearr_30996_31024[(1)] = (5));

} else {
var statearr_30997_31025 = state_30990__$1;
(statearr_30997_31025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (15))){
var inst_30980 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
var statearr_30998_31026 = state_30990__$1;
(statearr_30998_31026[(2)] = inst_30980);

(statearr_30998_31026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (13))){
var state_30990__$1 = state_30990;
var statearr_30999_31027 = state_30990__$1;
(statearr_30999_31027[(2)] = null);

(statearr_30999_31027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (6))){
var inst_30955 = (state_30990[(8)]);
var inst_30976 = (inst_30955 > (0));
var state_30990__$1 = state_30990;
if(cljs.core.truth_(inst_30976)){
var statearr_31000_31028 = state_30990__$1;
(statearr_31000_31028[(1)] = (12));

} else {
var statearr_31001_31029 = state_30990__$1;
(statearr_31001_31029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (3))){
var inst_30988 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30990__$1,inst_30988);
} else {
if((state_val_30991 === (12))){
var inst_30954 = (state_30990[(7)]);
var inst_30978 = cljs.core.vec.call(null,inst_30954);
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30990__$1,(15),out,inst_30978);
} else {
if((state_val_30991 === (2))){
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30990__$1,(4),ch);
} else {
if((state_val_30991 === (11))){
var inst_30970 = (state_30990[(2)]);
var inst_30971 = (new Array(n));
var inst_30954 = inst_30971;
var inst_30955 = (0);
var state_30990__$1 = (function (){var statearr_31002 = state_30990;
(statearr_31002[(7)] = inst_30954);

(statearr_31002[(8)] = inst_30955);

(statearr_31002[(10)] = inst_30970);

return statearr_31002;
})();
var statearr_31003_31030 = state_30990__$1;
(statearr_31003_31030[(2)] = null);

(statearr_31003_31030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (9))){
var inst_30954 = (state_30990[(7)]);
var inst_30968 = cljs.core.vec.call(null,inst_30954);
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30990__$1,(11),out,inst_30968);
} else {
if((state_val_30991 === (5))){
var inst_30963 = (state_30990[(11)]);
var inst_30954 = (state_30990[(7)]);
var inst_30955 = (state_30990[(8)]);
var inst_30958 = (state_30990[(9)]);
var inst_30962 = (inst_30954[inst_30955] = inst_30958);
var inst_30963__$1 = (inst_30955 + (1));
var inst_30964 = (inst_30963__$1 < n);
var state_30990__$1 = (function (){var statearr_31004 = state_30990;
(statearr_31004[(12)] = inst_30962);

(statearr_31004[(11)] = inst_30963__$1);

return statearr_31004;
})();
if(cljs.core.truth_(inst_30964)){
var statearr_31005_31031 = state_30990__$1;
(statearr_31005_31031[(1)] = (8));

} else {
var statearr_31006_31032 = state_30990__$1;
(statearr_31006_31032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (14))){
var inst_30983 = (state_30990[(2)]);
var inst_30984 = cljs.core.async.close_BANG_.call(null,out);
var state_30990__$1 = (function (){var statearr_31008 = state_30990;
(statearr_31008[(13)] = inst_30983);

return statearr_31008;
})();
var statearr_31009_31033 = state_30990__$1;
(statearr_31009_31033[(2)] = inst_30984);

(statearr_31009_31033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (10))){
var inst_30974 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
var statearr_31010_31034 = state_30990__$1;
(statearr_31010_31034[(2)] = inst_30974);

(statearr_31010_31034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (8))){
var inst_30963 = (state_30990[(11)]);
var inst_30954 = (state_30990[(7)]);
var tmp31007 = inst_30954;
var inst_30954__$1 = tmp31007;
var inst_30955 = inst_30963;
var state_30990__$1 = (function (){var statearr_31011 = state_30990;
(statearr_31011[(7)] = inst_30954__$1);

(statearr_31011[(8)] = inst_30955);

return statearr_31011;
})();
var statearr_31012_31035 = state_30990__$1;
(statearr_31012_31035[(2)] = null);

(statearr_31012_31035[(1)] = (2));


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
});})(c__25357__auto___31021,out))
;
return ((function (switch__25295__auto__,c__25357__auto___31021,out){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_31016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31016[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_31016[(1)] = (1));

return statearr_31016;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_30990){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_30990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e31017){if((e31017 instanceof Object)){
var ex__25299__auto__ = e31017;
var statearr_31018_31036 = state_30990;
(statearr_31018_31036[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_30990;
state_30990 = G__31037;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_30990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_30990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___31021,out))
})();
var state__25359__auto__ = (function (){var statearr_31019 = f__25358__auto__.call(null);
(statearr_31019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___31021);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___31021,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31039 = arguments.length;
switch (G__31039) {
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
var c__25357__auto___31112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25357__auto___31112,out){
return (function (){
var f__25358__auto__ = (function (){var switch__25295__auto__ = ((function (c__25357__auto___31112,out){
return (function (state_31081){
var state_val_31082 = (state_31081[(1)]);
if((state_val_31082 === (7))){
var inst_31077 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31083_31113 = state_31081__$1;
(statearr_31083_31113[(2)] = inst_31077);

(statearr_31083_31113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (1))){
var inst_31040 = [];
var inst_31041 = inst_31040;
var inst_31042 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31081__$1 = (function (){var statearr_31084 = state_31081;
(statearr_31084[(7)] = inst_31041);

(statearr_31084[(8)] = inst_31042);

return statearr_31084;
})();
var statearr_31085_31114 = state_31081__$1;
(statearr_31085_31114[(2)] = null);

(statearr_31085_31114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (4))){
var inst_31045 = (state_31081[(9)]);
var inst_31045__$1 = (state_31081[(2)]);
var inst_31046 = (inst_31045__$1 == null);
var inst_31047 = cljs.core.not.call(null,inst_31046);
var state_31081__$1 = (function (){var statearr_31086 = state_31081;
(statearr_31086[(9)] = inst_31045__$1);

return statearr_31086;
})();
if(inst_31047){
var statearr_31087_31115 = state_31081__$1;
(statearr_31087_31115[(1)] = (5));

} else {
var statearr_31088_31116 = state_31081__$1;
(statearr_31088_31116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (15))){
var inst_31071 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31089_31117 = state_31081__$1;
(statearr_31089_31117[(2)] = inst_31071);

(statearr_31089_31117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (13))){
var state_31081__$1 = state_31081;
var statearr_31090_31118 = state_31081__$1;
(statearr_31090_31118[(2)] = null);

(statearr_31090_31118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (6))){
var inst_31041 = (state_31081[(7)]);
var inst_31066 = inst_31041.length;
var inst_31067 = (inst_31066 > (0));
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31067)){
var statearr_31091_31119 = state_31081__$1;
(statearr_31091_31119[(1)] = (12));

} else {
var statearr_31092_31120 = state_31081__$1;
(statearr_31092_31120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (3))){
var inst_31079 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31081__$1,inst_31079);
} else {
if((state_val_31082 === (12))){
var inst_31041 = (state_31081[(7)]);
var inst_31069 = cljs.core.vec.call(null,inst_31041);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31081__$1,(15),out,inst_31069);
} else {
if((state_val_31082 === (2))){
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(4),ch);
} else {
if((state_val_31082 === (11))){
var inst_31045 = (state_31081[(9)]);
var inst_31049 = (state_31081[(10)]);
var inst_31059 = (state_31081[(2)]);
var inst_31060 = [];
var inst_31061 = inst_31060.push(inst_31045);
var inst_31041 = inst_31060;
var inst_31042 = inst_31049;
var state_31081__$1 = (function (){var statearr_31093 = state_31081;
(statearr_31093[(11)] = inst_31061);

(statearr_31093[(12)] = inst_31059);

(statearr_31093[(7)] = inst_31041);

(statearr_31093[(8)] = inst_31042);

return statearr_31093;
})();
var statearr_31094_31121 = state_31081__$1;
(statearr_31094_31121[(2)] = null);

(statearr_31094_31121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (9))){
var inst_31041 = (state_31081[(7)]);
var inst_31057 = cljs.core.vec.call(null,inst_31041);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31081__$1,(11),out,inst_31057);
} else {
if((state_val_31082 === (5))){
var inst_31045 = (state_31081[(9)]);
var inst_31049 = (state_31081[(10)]);
var inst_31042 = (state_31081[(8)]);
var inst_31049__$1 = f.call(null,inst_31045);
var inst_31050 = cljs.core._EQ_.call(null,inst_31049__$1,inst_31042);
var inst_31051 = cljs.core.keyword_identical_QMARK_.call(null,inst_31042,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31052 = (inst_31050) || (inst_31051);
var state_31081__$1 = (function (){var statearr_31095 = state_31081;
(statearr_31095[(10)] = inst_31049__$1);

return statearr_31095;
})();
if(cljs.core.truth_(inst_31052)){
var statearr_31096_31122 = state_31081__$1;
(statearr_31096_31122[(1)] = (8));

} else {
var statearr_31097_31123 = state_31081__$1;
(statearr_31097_31123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (14))){
var inst_31074 = (state_31081[(2)]);
var inst_31075 = cljs.core.async.close_BANG_.call(null,out);
var state_31081__$1 = (function (){var statearr_31099 = state_31081;
(statearr_31099[(13)] = inst_31074);

return statearr_31099;
})();
var statearr_31100_31124 = state_31081__$1;
(statearr_31100_31124[(2)] = inst_31075);

(statearr_31100_31124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (10))){
var inst_31064 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31101_31125 = state_31081__$1;
(statearr_31101_31125[(2)] = inst_31064);

(statearr_31101_31125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (8))){
var inst_31045 = (state_31081[(9)]);
var inst_31041 = (state_31081[(7)]);
var inst_31049 = (state_31081[(10)]);
var inst_31054 = inst_31041.push(inst_31045);
var tmp31098 = inst_31041;
var inst_31041__$1 = tmp31098;
var inst_31042 = inst_31049;
var state_31081__$1 = (function (){var statearr_31102 = state_31081;
(statearr_31102[(7)] = inst_31041__$1);

(statearr_31102[(14)] = inst_31054);

(statearr_31102[(8)] = inst_31042);

return statearr_31102;
})();
var statearr_31103_31126 = state_31081__$1;
(statearr_31103_31126[(2)] = null);

(statearr_31103_31126[(1)] = (2));


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
});})(c__25357__auto___31112,out))
;
return ((function (switch__25295__auto__,c__25357__auto___31112,out){
return (function() {
var cljs$core$async$state_machine__25296__auto__ = null;
var cljs$core$async$state_machine__25296__auto____0 = (function (){
var statearr_31107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31107[(0)] = cljs$core$async$state_machine__25296__auto__);

(statearr_31107[(1)] = (1));

return statearr_31107;
});
var cljs$core$async$state_machine__25296__auto____1 = (function (state_31081){
while(true){
var ret_value__25297__auto__ = (function (){try{while(true){
var result__25298__auto__ = switch__25295__auto__.call(null,state_31081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25298__auto__;
}
break;
}
}catch (e31108){if((e31108 instanceof Object)){
var ex__25299__auto__ = e31108;
var statearr_31109_31127 = state_31081;
(statearr_31109_31127[(5)] = ex__25299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31128 = state_31081;
state_31081 = G__31128;
continue;
} else {
return ret_value__25297__auto__;
}
break;
}
});
cljs$core$async$state_machine__25296__auto__ = function(state_31081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25296__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25296__auto____1.call(this,state_31081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25296__auto____0;
cljs$core$async$state_machine__25296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25296__auto____1;
return cljs$core$async$state_machine__25296__auto__;
})()
;})(switch__25295__auto__,c__25357__auto___31112,out))
})();
var state__25359__auto__ = (function (){var statearr_31110 = f__25358__auto__.call(null);
(statearr_31110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25357__auto___31112);

return statearr_31110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25359__auto__);
});})(c__25357__auto___31112,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map