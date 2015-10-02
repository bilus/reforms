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
if(typeof cljs.core.async.t_cljs$core$async22585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22585 = (function (fn_handler,f,meta22586){
this.fn_handler = fn_handler;
this.f = f;
this.meta22586 = meta22586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22587,meta22586__$1){
var self__ = this;
var _22587__$1 = this;
return (new cljs.core.async.t_cljs$core$async22585(self__.fn_handler,self__.f,meta22586__$1));
});

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22587){
var self__ = this;
var _22587__$1 = this;
return self__.meta22586;
});

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22586","meta22586",-474771218,null)], null);
});

cljs.core.async.t_cljs$core$async22585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22585";

cljs.core.async.t_cljs$core$async22585.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async22585");
});

cljs.core.async.__GT_t_cljs$core$async22585 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22585(fn_handler__$1,f__$1,meta22586){
return (new cljs.core.async.t_cljs$core$async22585(fn_handler__$1,f__$1,meta22586));
});

}

return (new cljs.core.async.t_cljs$core$async22585(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args22590 = [];
var len__5651__auto___22593 = arguments.length;
var i__5652__auto___22594 = (0);
while(true){
if((i__5652__auto___22594 < len__5651__auto___22593)){
args22590.push((arguments[i__5652__auto___22594]));

var G__22595 = (i__5652__auto___22594 + (1));
i__5652__auto___22594 = G__22595;
continue;
} else {
}
break;
}

var G__22592 = args22590.length;
switch (G__22592) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22590.length)].join('')));

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
var args22597 = [];
var len__5651__auto___22600 = arguments.length;
var i__5652__auto___22601 = (0);
while(true){
if((i__5652__auto___22601 < len__5651__auto___22600)){
args22597.push((arguments[i__5652__auto___22601]));

var G__22602 = (i__5652__auto___22601 + (1));
i__5652__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var G__22599 = args22597.length;
switch (G__22599) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22597.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22604 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22604);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22604,ret){
return (function (){
return fn1.call(null,val_22604);
});})(val_22604,ret))
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
var args22605 = [];
var len__5651__auto___22608 = arguments.length;
var i__5652__auto___22609 = (0);
while(true){
if((i__5652__auto___22609 < len__5651__auto___22608)){
args22605.push((arguments[i__5652__auto___22609]));

var G__22610 = (i__5652__auto___22609 + (1));
i__5652__auto___22609 = G__22610;
continue;
} else {
}
break;
}

var G__22607 = args22605.length;
switch (G__22607) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22605.length)].join('')));

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
var n__5496__auto___22612 = n;
var x_22613 = (0);
while(true){
if((x_22613 < n__5496__auto___22612)){
(a[x_22613] = (0));

var G__22614 = (x_22613 + (1));
x_22613 = G__22614;
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

var G__22615 = (i + (1));
i = G__22615;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22619 = (function (alt_flag,flag,meta22620){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22620 = meta22620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22621,meta22620__$1){
var self__ = this;
var _22621__$1 = this;
return (new cljs.core.async.t_cljs$core$async22619(self__.alt_flag,self__.flag,meta22620__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22621){
var self__ = this;
var _22621__$1 = this;
return self__.meta22620;
});})(flag))
;

cljs.core.async.t_cljs$core$async22619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22619.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22620","meta22620",608054673,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22619";

cljs.core.async.t_cljs$core$async22619.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async22619");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22619 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22619(alt_flag__$1,flag__$1,meta22620){
return (new cljs.core.async.t_cljs$core$async22619(alt_flag__$1,flag__$1,meta22620));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22619(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22625 = (function (alt_handler,flag,cb,meta22626){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22626 = meta22626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22627,meta22626__$1){
var self__ = this;
var _22627__$1 = this;
return (new cljs.core.async.t_cljs$core$async22625(self__.alt_handler,self__.flag,self__.cb,meta22626__$1));
});

cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22627){
var self__ = this;
var _22627__$1 = this;
return self__.meta22626;
});

cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22626","meta22626",-1807811573,null)], null);
});

cljs.core.async.t_cljs$core$async22625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22625";

cljs.core.async.t_cljs$core$async22625.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async22625");
});

cljs.core.async.__GT_t_cljs$core$async22625 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22625(alt_handler__$1,flag__$1,cb__$1,meta22626){
return (new cljs.core.async.t_cljs$core$async22625(alt_handler__$1,flag__$1,cb__$1,meta22626));
});

}

return (new cljs.core.async.t_cljs$core$async22625(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22628_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22628_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22629_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22629_SHARP_,port], null));
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
var G__22630 = (i + (1));
i = G__22630;
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
var len__5651__auto___22636 = arguments.length;
var i__5652__auto___22637 = (0);
while(true){
if((i__5652__auto___22637 < len__5651__auto___22636)){
args__5658__auto__.push((arguments[i__5652__auto___22637]));

var G__22638 = (i__5652__auto___22637 + (1));
i__5652__auto___22637 = G__22638;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22633){
var map__22634 = p__22633;
var map__22634__$1 = ((((!((map__22634 == null)))?((((map__22634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22634):map__22634);
var opts = map__22634__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22631){
var G__22632 = cljs.core.first.call(null,seq22631);
var seq22631__$1 = cljs.core.next.call(null,seq22631);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22632,seq22631__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22639 = [];
var len__5651__auto___22689 = arguments.length;
var i__5652__auto___22690 = (0);
while(true){
if((i__5652__auto___22690 < len__5651__auto___22689)){
args22639.push((arguments[i__5652__auto___22690]));

var G__22691 = (i__5652__auto___22690 + (1));
i__5652__auto___22690 = G__22691;
continue;
} else {
}
break;
}

var G__22641 = args22639.length;
switch (G__22641) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22639.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19461__auto___22693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___22693){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___22693){
return (function (state_22665){
var state_val_22666 = (state_22665[(1)]);
if((state_val_22666 === (7))){
var inst_22661 = (state_22665[(2)]);
var state_22665__$1 = state_22665;
var statearr_22667_22694 = state_22665__$1;
(statearr_22667_22694[(2)] = inst_22661);

(statearr_22667_22694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (1))){
var state_22665__$1 = state_22665;
var statearr_22668_22695 = state_22665__$1;
(statearr_22668_22695[(2)] = null);

(statearr_22668_22695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (4))){
var inst_22644 = (state_22665[(7)]);
var inst_22644__$1 = (state_22665[(2)]);
var inst_22645 = (inst_22644__$1 == null);
var state_22665__$1 = (function (){var statearr_22669 = state_22665;
(statearr_22669[(7)] = inst_22644__$1);

return statearr_22669;
})();
if(cljs.core.truth_(inst_22645)){
var statearr_22670_22696 = state_22665__$1;
(statearr_22670_22696[(1)] = (5));

} else {
var statearr_22671_22697 = state_22665__$1;
(statearr_22671_22697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (13))){
var state_22665__$1 = state_22665;
var statearr_22672_22698 = state_22665__$1;
(statearr_22672_22698[(2)] = null);

(statearr_22672_22698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (6))){
var inst_22644 = (state_22665[(7)]);
var state_22665__$1 = state_22665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22665__$1,(11),to,inst_22644);
} else {
if((state_val_22666 === (3))){
var inst_22663 = (state_22665[(2)]);
var state_22665__$1 = state_22665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22665__$1,inst_22663);
} else {
if((state_val_22666 === (12))){
var state_22665__$1 = state_22665;
var statearr_22673_22699 = state_22665__$1;
(statearr_22673_22699[(2)] = null);

(statearr_22673_22699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (2))){
var state_22665__$1 = state_22665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22665__$1,(4),from);
} else {
if((state_val_22666 === (11))){
var inst_22654 = (state_22665[(2)]);
var state_22665__$1 = state_22665;
if(cljs.core.truth_(inst_22654)){
var statearr_22674_22700 = state_22665__$1;
(statearr_22674_22700[(1)] = (12));

} else {
var statearr_22675_22701 = state_22665__$1;
(statearr_22675_22701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (9))){
var state_22665__$1 = state_22665;
var statearr_22676_22702 = state_22665__$1;
(statearr_22676_22702[(2)] = null);

(statearr_22676_22702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (5))){
var state_22665__$1 = state_22665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22677_22703 = state_22665__$1;
(statearr_22677_22703[(1)] = (8));

} else {
var statearr_22678_22704 = state_22665__$1;
(statearr_22678_22704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (14))){
var inst_22659 = (state_22665[(2)]);
var state_22665__$1 = state_22665;
var statearr_22679_22705 = state_22665__$1;
(statearr_22679_22705[(2)] = inst_22659);

(statearr_22679_22705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (10))){
var inst_22651 = (state_22665[(2)]);
var state_22665__$1 = state_22665;
var statearr_22680_22706 = state_22665__$1;
(statearr_22680_22706[(2)] = inst_22651);

(statearr_22680_22706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22666 === (8))){
var inst_22648 = cljs.core.async.close_BANG_.call(null,to);
var state_22665__$1 = state_22665;
var statearr_22681_22707 = state_22665__$1;
(statearr_22681_22707[(2)] = inst_22648);

(statearr_22681_22707[(1)] = (10));


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
});})(c__19461__auto___22693))
;
return ((function (switch__19396__auto__,c__19461__auto___22693){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_22685 = [null,null,null,null,null,null,null,null];
(statearr_22685[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_22685[(1)] = (1));

return statearr_22685;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_22665){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_22665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e22686){if((e22686 instanceof Object)){
var ex__19400__auto__ = e22686;
var statearr_22687_22708 = state_22665;
(statearr_22687_22708[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22709 = state_22665;
state_22665 = G__22709;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_22665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_22665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___22693))
})();
var state__19463__auto__ = (function (){var statearr_22688 = f__19462__auto__.call(null);
(statearr_22688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___22693);

return statearr_22688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___22693))
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
return (function (p__22893){
var vec__22894 = p__22893;
var v = cljs.core.nth.call(null,vec__22894,(0),null);
var p = cljs.core.nth.call(null,vec__22894,(1),null);
var job = vec__22894;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19461__auto___23076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___23076,res,vec__22894,v,p,job,jobs,results){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___23076,res,vec__22894,v,p,job,jobs,results){
return (function (state_22899){
var state_val_22900 = (state_22899[(1)]);
if((state_val_22900 === (1))){
var state_22899__$1 = state_22899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22899__$1,(2),res,v);
} else {
if((state_val_22900 === (2))){
var inst_22896 = (state_22899[(2)]);
var inst_22897 = cljs.core.async.close_BANG_.call(null,res);
var state_22899__$1 = (function (){var statearr_22901 = state_22899;
(statearr_22901[(7)] = inst_22896);

return statearr_22901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22899__$1,inst_22897);
} else {
return null;
}
}
});})(c__19461__auto___23076,res,vec__22894,v,p,job,jobs,results))
;
return ((function (switch__19396__auto__,c__19461__auto___23076,res,vec__22894,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0 = (function (){
var statearr_22905 = [null,null,null,null,null,null,null,null];
(statearr_22905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__);

(statearr_22905[(1)] = (1));

return statearr_22905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1 = (function (state_22899){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_22899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e22906){if((e22906 instanceof Object)){
var ex__19400__auto__ = e22906;
var statearr_22907_23077 = state_22899;
(statearr_22907_23077[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23078 = state_22899;
state_22899 = G__23078;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = function(state_22899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1.call(this,state_22899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___23076,res,vec__22894,v,p,job,jobs,results))
})();
var state__19463__auto__ = (function (){var statearr_22908 = f__19462__auto__.call(null);
(statearr_22908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___23076);

return statearr_22908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___23076,res,vec__22894,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22909){
var vec__22910 = p__22909;
var v = cljs.core.nth.call(null,vec__22910,(0),null);
var p = cljs.core.nth.call(null,vec__22910,(1),null);
var job = vec__22910;
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
var n__5496__auto___23079 = n;
var __23080 = (0);
while(true){
if((__23080 < n__5496__auto___23079)){
var G__22911_23081 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22911_23081) {
case "compute":
var c__19461__auto___23083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23080,c__19461__auto___23083,G__22911_23081,n__5496__auto___23079,jobs,results,process,async){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (__23080,c__19461__auto___23083,G__22911_23081,n__5496__auto___23079,jobs,results,process,async){
return (function (state_22924){
var state_val_22925 = (state_22924[(1)]);
if((state_val_22925 === (1))){
var state_22924__$1 = state_22924;
var statearr_22926_23084 = state_22924__$1;
(statearr_22926_23084[(2)] = null);

(statearr_22926_23084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (2))){
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(4),jobs);
} else {
if((state_val_22925 === (3))){
var inst_22922 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else {
if((state_val_22925 === (4))){
var inst_22914 = (state_22924[(2)]);
var inst_22915 = process.call(null,inst_22914);
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22915)){
var statearr_22927_23085 = state_22924__$1;
(statearr_22927_23085[(1)] = (5));

} else {
var statearr_22928_23086 = state_22924__$1;
(statearr_22928_23086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (5))){
var state_22924__$1 = state_22924;
var statearr_22929_23087 = state_22924__$1;
(statearr_22929_23087[(2)] = null);

(statearr_22929_23087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (6))){
var state_22924__$1 = state_22924;
var statearr_22930_23088 = state_22924__$1;
(statearr_22930_23088[(2)] = null);

(statearr_22930_23088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (7))){
var inst_22920 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22931_23089 = state_22924__$1;
(statearr_22931_23089[(2)] = inst_22920);

(statearr_22931_23089[(1)] = (3));


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
});})(__23080,c__19461__auto___23083,G__22911_23081,n__5496__auto___23079,jobs,results,process,async))
;
return ((function (__23080,switch__19396__auto__,c__19461__auto___23083,G__22911_23081,n__5496__auto___23079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0 = (function (){
var statearr_22935 = [null,null,null,null,null,null,null];
(statearr_22935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__);

(statearr_22935[(1)] = (1));

return statearr_22935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1 = (function (state_22924){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_22924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e22936){if((e22936 instanceof Object)){
var ex__19400__auto__ = e22936;
var statearr_22937_23090 = state_22924;
(statearr_22937_23090[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23091 = state_22924;
state_22924 = G__23091;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__;
})()
;})(__23080,switch__19396__auto__,c__19461__auto___23083,G__22911_23081,n__5496__auto___23079,jobs,results,process,async))
})();
var state__19463__auto__ = (function (){var statearr_22938 = f__19462__auto__.call(null);
(statearr_22938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___23083);

return statearr_22938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(__23080,c__19461__auto___23083,G__22911_23081,n__5496__auto___23079,jobs,results,process,async))
);


break;
case "async":
var c__19461__auto___23092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23080,c__19461__auto___23092,G__22911_23081,n__5496__auto___23079,jobs,results,process,async){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (__23080,c__19461__auto___23092,G__22911_23081,n__5496__auto___23079,jobs,results,process,async){
return (function (state_22951){
var state_val_22952 = (state_22951[(1)]);
if((state_val_22952 === (1))){
var state_22951__$1 = state_22951;
var statearr_22953_23093 = state_22951__$1;
(statearr_22953_23093[(2)] = null);

(statearr_22953_23093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (2))){
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22951__$1,(4),jobs);
} else {
if((state_val_22952 === (3))){
var inst_22949 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22951__$1,inst_22949);
} else {
if((state_val_22952 === (4))){
var inst_22941 = (state_22951[(2)]);
var inst_22942 = async.call(null,inst_22941);
var state_22951__$1 = state_22951;
if(cljs.core.truth_(inst_22942)){
var statearr_22954_23094 = state_22951__$1;
(statearr_22954_23094[(1)] = (5));

} else {
var statearr_22955_23095 = state_22951__$1;
(statearr_22955_23095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (5))){
var state_22951__$1 = state_22951;
var statearr_22956_23096 = state_22951__$1;
(statearr_22956_23096[(2)] = null);

(statearr_22956_23096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (6))){
var state_22951__$1 = state_22951;
var statearr_22957_23097 = state_22951__$1;
(statearr_22957_23097[(2)] = null);

(statearr_22957_23097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (7))){
var inst_22947 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
var statearr_22958_23098 = state_22951__$1;
(statearr_22958_23098[(2)] = inst_22947);

(statearr_22958_23098[(1)] = (3));


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
});})(__23080,c__19461__auto___23092,G__22911_23081,n__5496__auto___23079,jobs,results,process,async))
;
return ((function (__23080,switch__19396__auto__,c__19461__auto___23092,G__22911_23081,n__5496__auto___23079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0 = (function (){
var statearr_22962 = [null,null,null,null,null,null,null];
(statearr_22962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__);

(statearr_22962[(1)] = (1));

return statearr_22962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1 = (function (state_22951){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_22951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e22963){if((e22963 instanceof Object)){
var ex__19400__auto__ = e22963;
var statearr_22964_23099 = state_22951;
(statearr_22964_23099[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_22951;
state_22951 = G__23100;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = function(state_22951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1.call(this,state_22951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__;
})()
;})(__23080,switch__19396__auto__,c__19461__auto___23092,G__22911_23081,n__5496__auto___23079,jobs,results,process,async))
})();
var state__19463__auto__ = (function (){var statearr_22965 = f__19462__auto__.call(null);
(statearr_22965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___23092);

return statearr_22965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(__23080,c__19461__auto___23092,G__22911_23081,n__5496__auto___23079,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23101 = (__23080 + (1));
__23080 = G__23101;
continue;
} else {
}
break;
}

var c__19461__auto___23102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___23102,jobs,results,process,async){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___23102,jobs,results,process,async){
return (function (state_22987){
var state_val_22988 = (state_22987[(1)]);
if((state_val_22988 === (1))){
var state_22987__$1 = state_22987;
var statearr_22989_23103 = state_22987__$1;
(statearr_22989_23103[(2)] = null);

(statearr_22989_23103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (2))){
var state_22987__$1 = state_22987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22987__$1,(4),from);
} else {
if((state_val_22988 === (3))){
var inst_22985 = (state_22987[(2)]);
var state_22987__$1 = state_22987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22987__$1,inst_22985);
} else {
if((state_val_22988 === (4))){
var inst_22968 = (state_22987[(7)]);
var inst_22968__$1 = (state_22987[(2)]);
var inst_22969 = (inst_22968__$1 == null);
var state_22987__$1 = (function (){var statearr_22990 = state_22987;
(statearr_22990[(7)] = inst_22968__$1);

return statearr_22990;
})();
if(cljs.core.truth_(inst_22969)){
var statearr_22991_23104 = state_22987__$1;
(statearr_22991_23104[(1)] = (5));

} else {
var statearr_22992_23105 = state_22987__$1;
(statearr_22992_23105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (5))){
var inst_22971 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22987__$1 = state_22987;
var statearr_22993_23106 = state_22987__$1;
(statearr_22993_23106[(2)] = inst_22971);

(statearr_22993_23106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (6))){
var inst_22973 = (state_22987[(8)]);
var inst_22968 = (state_22987[(7)]);
var inst_22973__$1 = cljs.core.async.chan.call(null,(1));
var inst_22974 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22975 = [inst_22968,inst_22973__$1];
var inst_22976 = (new cljs.core.PersistentVector(null,2,(5),inst_22974,inst_22975,null));
var state_22987__$1 = (function (){var statearr_22994 = state_22987;
(statearr_22994[(8)] = inst_22973__$1);

return statearr_22994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22987__$1,(8),jobs,inst_22976);
} else {
if((state_val_22988 === (7))){
var inst_22983 = (state_22987[(2)]);
var state_22987__$1 = state_22987;
var statearr_22995_23107 = state_22987__$1;
(statearr_22995_23107[(2)] = inst_22983);

(statearr_22995_23107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (8))){
var inst_22973 = (state_22987[(8)]);
var inst_22978 = (state_22987[(2)]);
var state_22987__$1 = (function (){var statearr_22996 = state_22987;
(statearr_22996[(9)] = inst_22978);

return statearr_22996;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22987__$1,(9),results,inst_22973);
} else {
if((state_val_22988 === (9))){
var inst_22980 = (state_22987[(2)]);
var state_22987__$1 = (function (){var statearr_22997 = state_22987;
(statearr_22997[(10)] = inst_22980);

return statearr_22997;
})();
var statearr_22998_23108 = state_22987__$1;
(statearr_22998_23108[(2)] = null);

(statearr_22998_23108[(1)] = (2));


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
});})(c__19461__auto___23102,jobs,results,process,async))
;
return ((function (switch__19396__auto__,c__19461__auto___23102,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0 = (function (){
var statearr_23002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__);

(statearr_23002[(1)] = (1));

return statearr_23002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1 = (function (state_22987){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_22987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e23003){if((e23003 instanceof Object)){
var ex__19400__auto__ = e23003;
var statearr_23004_23109 = state_22987;
(statearr_23004_23109[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23110 = state_22987;
state_22987 = G__23110;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = function(state_22987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1.call(this,state_22987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___23102,jobs,results,process,async))
})();
var state__19463__auto__ = (function (){var statearr_23005 = f__19462__auto__.call(null);
(statearr_23005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___23102);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___23102,jobs,results,process,async))
);


var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__,jobs,results,process,async){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto__,jobs,results,process,async){
return (function (state_23043){
var state_val_23044 = (state_23043[(1)]);
if((state_val_23044 === (7))){
var inst_23039 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23045_23111 = state_23043__$1;
(statearr_23045_23111[(2)] = inst_23039);

(statearr_23045_23111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (20))){
var state_23043__$1 = state_23043;
var statearr_23046_23112 = state_23043__$1;
(statearr_23046_23112[(2)] = null);

(statearr_23046_23112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (1))){
var state_23043__$1 = state_23043;
var statearr_23047_23113 = state_23043__$1;
(statearr_23047_23113[(2)] = null);

(statearr_23047_23113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (4))){
var inst_23008 = (state_23043[(7)]);
var inst_23008__$1 = (state_23043[(2)]);
var inst_23009 = (inst_23008__$1 == null);
var state_23043__$1 = (function (){var statearr_23048 = state_23043;
(statearr_23048[(7)] = inst_23008__$1);

return statearr_23048;
})();
if(cljs.core.truth_(inst_23009)){
var statearr_23049_23114 = state_23043__$1;
(statearr_23049_23114[(1)] = (5));

} else {
var statearr_23050_23115 = state_23043__$1;
(statearr_23050_23115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (15))){
var inst_23021 = (state_23043[(8)]);
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23043__$1,(18),to,inst_23021);
} else {
if((state_val_23044 === (21))){
var inst_23034 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23051_23116 = state_23043__$1;
(statearr_23051_23116[(2)] = inst_23034);

(statearr_23051_23116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (13))){
var inst_23036 = (state_23043[(2)]);
var state_23043__$1 = (function (){var statearr_23052 = state_23043;
(statearr_23052[(9)] = inst_23036);

return statearr_23052;
})();
var statearr_23053_23117 = state_23043__$1;
(statearr_23053_23117[(2)] = null);

(statearr_23053_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (6))){
var inst_23008 = (state_23043[(7)]);
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23043__$1,(11),inst_23008);
} else {
if((state_val_23044 === (17))){
var inst_23029 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
if(cljs.core.truth_(inst_23029)){
var statearr_23054_23118 = state_23043__$1;
(statearr_23054_23118[(1)] = (19));

} else {
var statearr_23055_23119 = state_23043__$1;
(statearr_23055_23119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (3))){
var inst_23041 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23043__$1,inst_23041);
} else {
if((state_val_23044 === (12))){
var inst_23018 = (state_23043[(10)]);
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23043__$1,(14),inst_23018);
} else {
if((state_val_23044 === (2))){
var state_23043__$1 = state_23043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23043__$1,(4),results);
} else {
if((state_val_23044 === (19))){
var state_23043__$1 = state_23043;
var statearr_23056_23120 = state_23043__$1;
(statearr_23056_23120[(2)] = null);

(statearr_23056_23120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (11))){
var inst_23018 = (state_23043[(2)]);
var state_23043__$1 = (function (){var statearr_23057 = state_23043;
(statearr_23057[(10)] = inst_23018);

return statearr_23057;
})();
var statearr_23058_23121 = state_23043__$1;
(statearr_23058_23121[(2)] = null);

(statearr_23058_23121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (9))){
var state_23043__$1 = state_23043;
var statearr_23059_23122 = state_23043__$1;
(statearr_23059_23122[(2)] = null);

(statearr_23059_23122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (5))){
var state_23043__$1 = state_23043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23060_23123 = state_23043__$1;
(statearr_23060_23123[(1)] = (8));

} else {
var statearr_23061_23124 = state_23043__$1;
(statearr_23061_23124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (14))){
var inst_23023 = (state_23043[(11)]);
var inst_23021 = (state_23043[(8)]);
var inst_23021__$1 = (state_23043[(2)]);
var inst_23022 = (inst_23021__$1 == null);
var inst_23023__$1 = cljs.core.not.call(null,inst_23022);
var state_23043__$1 = (function (){var statearr_23062 = state_23043;
(statearr_23062[(11)] = inst_23023__$1);

(statearr_23062[(8)] = inst_23021__$1);

return statearr_23062;
})();
if(inst_23023__$1){
var statearr_23063_23125 = state_23043__$1;
(statearr_23063_23125[(1)] = (15));

} else {
var statearr_23064_23126 = state_23043__$1;
(statearr_23064_23126[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (16))){
var inst_23023 = (state_23043[(11)]);
var state_23043__$1 = state_23043;
var statearr_23065_23127 = state_23043__$1;
(statearr_23065_23127[(2)] = inst_23023);

(statearr_23065_23127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (10))){
var inst_23015 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23066_23128 = state_23043__$1;
(statearr_23066_23128[(2)] = inst_23015);

(statearr_23066_23128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (18))){
var inst_23026 = (state_23043[(2)]);
var state_23043__$1 = state_23043;
var statearr_23067_23129 = state_23043__$1;
(statearr_23067_23129[(2)] = inst_23026);

(statearr_23067_23129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23044 === (8))){
var inst_23012 = cljs.core.async.close_BANG_.call(null,to);
var state_23043__$1 = state_23043;
var statearr_23068_23130 = state_23043__$1;
(statearr_23068_23130[(2)] = inst_23012);

(statearr_23068_23130[(1)] = (10));


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
});})(c__19461__auto__,jobs,results,process,async))
;
return ((function (switch__19396__auto__,c__19461__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0 = (function (){
var statearr_23072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__);

(statearr_23072[(1)] = (1));

return statearr_23072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1 = (function (state_23043){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_23043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e23073){if((e23073 instanceof Object)){
var ex__19400__auto__ = e23073;
var statearr_23074_23131 = state_23043;
(statearr_23074_23131[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23132 = state_23043;
state_23043 = G__23132;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__ = function(state_23043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1.call(this,state_23043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19397__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto__,jobs,results,process,async))
})();
var state__19463__auto__ = (function (){var statearr_23075 = f__19462__auto__.call(null);
(statearr_23075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__,jobs,results,process,async))
);

return c__19461__auto__;
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
var args23133 = [];
var len__5651__auto___23136 = arguments.length;
var i__5652__auto___23137 = (0);
while(true){
if((i__5652__auto___23137 < len__5651__auto___23136)){
args23133.push((arguments[i__5652__auto___23137]));

var G__23138 = (i__5652__auto___23137 + (1));
i__5652__auto___23137 = G__23138;
continue;
} else {
}
break;
}

var G__23135 = args23133.length;
switch (G__23135) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23133.length)].join('')));

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
var args23140 = [];
var len__5651__auto___23143 = arguments.length;
var i__5652__auto___23144 = (0);
while(true){
if((i__5652__auto___23144 < len__5651__auto___23143)){
args23140.push((arguments[i__5652__auto___23144]));

var G__23145 = (i__5652__auto___23144 + (1));
i__5652__auto___23144 = G__23145;
continue;
} else {
}
break;
}

var G__23142 = args23140.length;
switch (G__23142) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23140.length)].join('')));

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
var args23147 = [];
var len__5651__auto___23200 = arguments.length;
var i__5652__auto___23201 = (0);
while(true){
if((i__5652__auto___23201 < len__5651__auto___23200)){
args23147.push((arguments[i__5652__auto___23201]));

var G__23202 = (i__5652__auto___23201 + (1));
i__5652__auto___23201 = G__23202;
continue;
} else {
}
break;
}

var G__23149 = args23147.length;
switch (G__23149) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23147.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19461__auto___23204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___23204,tc,fc){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___23204,tc,fc){
return (function (state_23175){
var state_val_23176 = (state_23175[(1)]);
if((state_val_23176 === (7))){
var inst_23171 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23177_23205 = state_23175__$1;
(statearr_23177_23205[(2)] = inst_23171);

(statearr_23177_23205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (1))){
var state_23175__$1 = state_23175;
var statearr_23178_23206 = state_23175__$1;
(statearr_23178_23206[(2)] = null);

(statearr_23178_23206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (4))){
var inst_23152 = (state_23175[(7)]);
var inst_23152__$1 = (state_23175[(2)]);
var inst_23153 = (inst_23152__$1 == null);
var state_23175__$1 = (function (){var statearr_23179 = state_23175;
(statearr_23179[(7)] = inst_23152__$1);

return statearr_23179;
})();
if(cljs.core.truth_(inst_23153)){
var statearr_23180_23207 = state_23175__$1;
(statearr_23180_23207[(1)] = (5));

} else {
var statearr_23181_23208 = state_23175__$1;
(statearr_23181_23208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (13))){
var state_23175__$1 = state_23175;
var statearr_23182_23209 = state_23175__$1;
(statearr_23182_23209[(2)] = null);

(statearr_23182_23209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (6))){
var inst_23152 = (state_23175[(7)]);
var inst_23158 = p.call(null,inst_23152);
var state_23175__$1 = state_23175;
if(cljs.core.truth_(inst_23158)){
var statearr_23183_23210 = state_23175__$1;
(statearr_23183_23210[(1)] = (9));

} else {
var statearr_23184_23211 = state_23175__$1;
(statearr_23184_23211[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (3))){
var inst_23173 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23175__$1,inst_23173);
} else {
if((state_val_23176 === (12))){
var state_23175__$1 = state_23175;
var statearr_23185_23212 = state_23175__$1;
(statearr_23185_23212[(2)] = null);

(statearr_23185_23212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (2))){
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23175__$1,(4),ch);
} else {
if((state_val_23176 === (11))){
var inst_23152 = (state_23175[(7)]);
var inst_23162 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23175__$1,(8),inst_23162,inst_23152);
} else {
if((state_val_23176 === (9))){
var state_23175__$1 = state_23175;
var statearr_23186_23213 = state_23175__$1;
(statearr_23186_23213[(2)] = tc);

(statearr_23186_23213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (5))){
var inst_23155 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23156 = cljs.core.async.close_BANG_.call(null,fc);
var state_23175__$1 = (function (){var statearr_23187 = state_23175;
(statearr_23187[(8)] = inst_23155);

return statearr_23187;
})();
var statearr_23188_23214 = state_23175__$1;
(statearr_23188_23214[(2)] = inst_23156);

(statearr_23188_23214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (14))){
var inst_23169 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23189_23215 = state_23175__$1;
(statearr_23189_23215[(2)] = inst_23169);

(statearr_23189_23215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (10))){
var state_23175__$1 = state_23175;
var statearr_23190_23216 = state_23175__$1;
(statearr_23190_23216[(2)] = fc);

(statearr_23190_23216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (8))){
var inst_23164 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
if(cljs.core.truth_(inst_23164)){
var statearr_23191_23217 = state_23175__$1;
(statearr_23191_23217[(1)] = (12));

} else {
var statearr_23192_23218 = state_23175__$1;
(statearr_23192_23218[(1)] = (13));

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
});})(c__19461__auto___23204,tc,fc))
;
return ((function (switch__19396__auto__,c__19461__auto___23204,tc,fc){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_23196 = [null,null,null,null,null,null,null,null,null];
(statearr_23196[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_23196[(1)] = (1));

return statearr_23196;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_23175){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_23175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e23197){if((e23197 instanceof Object)){
var ex__19400__auto__ = e23197;
var statearr_23198_23219 = state_23175;
(statearr_23198_23219[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23220 = state_23175;
state_23175 = G__23220;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_23175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_23175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___23204,tc,fc))
})();
var state__19463__auto__ = (function (){var statearr_23199 = f__19462__auto__.call(null);
(statearr_23199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___23204);

return statearr_23199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___23204,tc,fc))
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
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto__){
return (function (state_23267){
var state_val_23268 = (state_23267[(1)]);
if((state_val_23268 === (1))){
var inst_23253 = init;
var state_23267__$1 = (function (){var statearr_23269 = state_23267;
(statearr_23269[(7)] = inst_23253);

return statearr_23269;
})();
var statearr_23270_23285 = state_23267__$1;
(statearr_23270_23285[(2)] = null);

(statearr_23270_23285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (2))){
var state_23267__$1 = state_23267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23267__$1,(4),ch);
} else {
if((state_val_23268 === (3))){
var inst_23265 = (state_23267[(2)]);
var state_23267__$1 = state_23267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23267__$1,inst_23265);
} else {
if((state_val_23268 === (4))){
var inst_23256 = (state_23267[(8)]);
var inst_23256__$1 = (state_23267[(2)]);
var inst_23257 = (inst_23256__$1 == null);
var state_23267__$1 = (function (){var statearr_23271 = state_23267;
(statearr_23271[(8)] = inst_23256__$1);

return statearr_23271;
})();
if(cljs.core.truth_(inst_23257)){
var statearr_23272_23286 = state_23267__$1;
(statearr_23272_23286[(1)] = (5));

} else {
var statearr_23273_23287 = state_23267__$1;
(statearr_23273_23287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (5))){
var inst_23253 = (state_23267[(7)]);
var state_23267__$1 = state_23267;
var statearr_23274_23288 = state_23267__$1;
(statearr_23274_23288[(2)] = inst_23253);

(statearr_23274_23288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (6))){
var inst_23256 = (state_23267[(8)]);
var inst_23253 = (state_23267[(7)]);
var inst_23260 = f.call(null,inst_23253,inst_23256);
var inst_23253__$1 = inst_23260;
var state_23267__$1 = (function (){var statearr_23275 = state_23267;
(statearr_23275[(7)] = inst_23253__$1);

return statearr_23275;
})();
var statearr_23276_23289 = state_23267__$1;
(statearr_23276_23289[(2)] = null);

(statearr_23276_23289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23268 === (7))){
var inst_23263 = (state_23267[(2)]);
var state_23267__$1 = state_23267;
var statearr_23277_23290 = state_23267__$1;
(statearr_23277_23290[(2)] = inst_23263);

(statearr_23277_23290[(1)] = (3));


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
});})(c__19461__auto__))
;
return ((function (switch__19396__auto__,c__19461__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19397__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19397__auto____0 = (function (){
var statearr_23281 = [null,null,null,null,null,null,null,null,null];
(statearr_23281[(0)] = cljs$core$async$reduce_$_state_machine__19397__auto__);

(statearr_23281[(1)] = (1));

return statearr_23281;
});
var cljs$core$async$reduce_$_state_machine__19397__auto____1 = (function (state_23267){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_23267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e23282){if((e23282 instanceof Object)){
var ex__19400__auto__ = e23282;
var statearr_23283_23291 = state_23267;
(statearr_23283_23291[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23292 = state_23267;
state_23267 = G__23292;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19397__auto__ = function(state_23267){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19397__auto____1.call(this,state_23267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19397__auto____0;
cljs$core$async$reduce_$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19397__auto____1;
return cljs$core$async$reduce_$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_23284 = f__19462__auto__.call(null);
(statearr_23284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
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
var args23293 = [];
var len__5651__auto___23345 = arguments.length;
var i__5652__auto___23346 = (0);
while(true){
if((i__5652__auto___23346 < len__5651__auto___23345)){
args23293.push((arguments[i__5652__auto___23346]));

var G__23347 = (i__5652__auto___23346 + (1));
i__5652__auto___23346 = G__23347;
continue;
} else {
}
break;
}

var G__23295 = args23293.length;
switch (G__23295) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23293.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto__){
return (function (state_23320){
var state_val_23321 = (state_23320[(1)]);
if((state_val_23321 === (7))){
var inst_23302 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23322_23349 = state_23320__$1;
(statearr_23322_23349[(2)] = inst_23302);

(statearr_23322_23349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (1))){
var inst_23296 = cljs.core.seq.call(null,coll);
var inst_23297 = inst_23296;
var state_23320__$1 = (function (){var statearr_23323 = state_23320;
(statearr_23323[(7)] = inst_23297);

return statearr_23323;
})();
var statearr_23324_23350 = state_23320__$1;
(statearr_23324_23350[(2)] = null);

(statearr_23324_23350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (4))){
var inst_23297 = (state_23320[(7)]);
var inst_23300 = cljs.core.first.call(null,inst_23297);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23320__$1,(7),ch,inst_23300);
} else {
if((state_val_23321 === (13))){
var inst_23314 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23325_23351 = state_23320__$1;
(statearr_23325_23351[(2)] = inst_23314);

(statearr_23325_23351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (6))){
var inst_23305 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23305)){
var statearr_23326_23352 = state_23320__$1;
(statearr_23326_23352[(1)] = (8));

} else {
var statearr_23327_23353 = state_23320__$1;
(statearr_23327_23353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (3))){
var inst_23318 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23320__$1,inst_23318);
} else {
if((state_val_23321 === (12))){
var state_23320__$1 = state_23320;
var statearr_23328_23354 = state_23320__$1;
(statearr_23328_23354[(2)] = null);

(statearr_23328_23354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (2))){
var inst_23297 = (state_23320[(7)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23297)){
var statearr_23329_23355 = state_23320__$1;
(statearr_23329_23355[(1)] = (4));

} else {
var statearr_23330_23356 = state_23320__$1;
(statearr_23330_23356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (11))){
var inst_23311 = cljs.core.async.close_BANG_.call(null,ch);
var state_23320__$1 = state_23320;
var statearr_23331_23357 = state_23320__$1;
(statearr_23331_23357[(2)] = inst_23311);

(statearr_23331_23357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (9))){
var state_23320__$1 = state_23320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23332_23358 = state_23320__$1;
(statearr_23332_23358[(1)] = (11));

} else {
var statearr_23333_23359 = state_23320__$1;
(statearr_23333_23359[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (5))){
var inst_23297 = (state_23320[(7)]);
var state_23320__$1 = state_23320;
var statearr_23334_23360 = state_23320__$1;
(statearr_23334_23360[(2)] = inst_23297);

(statearr_23334_23360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (10))){
var inst_23316 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23335_23361 = state_23320__$1;
(statearr_23335_23361[(2)] = inst_23316);

(statearr_23335_23361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (8))){
var inst_23297 = (state_23320[(7)]);
var inst_23307 = cljs.core.next.call(null,inst_23297);
var inst_23297__$1 = inst_23307;
var state_23320__$1 = (function (){var statearr_23336 = state_23320;
(statearr_23336[(7)] = inst_23297__$1);

return statearr_23336;
})();
var statearr_23337_23362 = state_23320__$1;
(statearr_23337_23362[(2)] = null);

(statearr_23337_23362[(1)] = (2));


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
});})(c__19461__auto__))
;
return ((function (switch__19396__auto__,c__19461__auto__){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_23341 = [null,null,null,null,null,null,null,null];
(statearr_23341[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_23341[(1)] = (1));

return statearr_23341;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_23320){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_23320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e23342){if((e23342 instanceof Object)){
var ex__19400__auto__ = e23342;
var statearr_23343_23363 = state_23320;
(statearr_23343_23363[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23364 = state_23320;
state_23320 = G__23364;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_23320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_23320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_23344 = f__19462__auto__.call(null);
(statearr_23344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_23344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23586 = (function (mult,ch,cs,meta23587){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23587 = meta23587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23588,meta23587__$1){
var self__ = this;
var _23588__$1 = this;
return (new cljs.core.async.t_cljs$core$async23586(self__.mult,self__.ch,self__.cs,meta23587__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23588){
var self__ = this;
var _23588__$1 = this;
return self__.meta23587;
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23587","meta23587",1171220798,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23586";

cljs.core.async.t_cljs$core$async23586.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async23586");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23586 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23586(mult__$1,ch__$1,cs__$1,meta23587){
return (new cljs.core.async.t_cljs$core$async23586(mult__$1,ch__$1,cs__$1,meta23587));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23586(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19461__auto___23807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___23807,cs,m,dchan,dctr,done){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___23807,cs,m,dchan,dctr,done){
return (function (state_23719){
var state_val_23720 = (state_23719[(1)]);
if((state_val_23720 === (7))){
var inst_23715 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23721_23808 = state_23719__$1;
(statearr_23721_23808[(2)] = inst_23715);

(statearr_23721_23808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (20))){
var inst_23620 = (state_23719[(7)]);
var inst_23630 = cljs.core.first.call(null,inst_23620);
var inst_23631 = cljs.core.nth.call(null,inst_23630,(0),null);
var inst_23632 = cljs.core.nth.call(null,inst_23630,(1),null);
var state_23719__$1 = (function (){var statearr_23722 = state_23719;
(statearr_23722[(8)] = inst_23631);

return statearr_23722;
})();
if(cljs.core.truth_(inst_23632)){
var statearr_23723_23809 = state_23719__$1;
(statearr_23723_23809[(1)] = (22));

} else {
var statearr_23724_23810 = state_23719__$1;
(statearr_23724_23810[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (27))){
var inst_23662 = (state_23719[(9)]);
var inst_23591 = (state_23719[(10)]);
var inst_23667 = (state_23719[(11)]);
var inst_23660 = (state_23719[(12)]);
var inst_23667__$1 = cljs.core._nth.call(null,inst_23660,inst_23662);
var inst_23668 = cljs.core.async.put_BANG_.call(null,inst_23667__$1,inst_23591,done);
var state_23719__$1 = (function (){var statearr_23725 = state_23719;
(statearr_23725[(11)] = inst_23667__$1);

return statearr_23725;
})();
if(cljs.core.truth_(inst_23668)){
var statearr_23726_23811 = state_23719__$1;
(statearr_23726_23811[(1)] = (30));

} else {
var statearr_23727_23812 = state_23719__$1;
(statearr_23727_23812[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (1))){
var state_23719__$1 = state_23719;
var statearr_23728_23813 = state_23719__$1;
(statearr_23728_23813[(2)] = null);

(statearr_23728_23813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (24))){
var inst_23620 = (state_23719[(7)]);
var inst_23637 = (state_23719[(2)]);
var inst_23638 = cljs.core.next.call(null,inst_23620);
var inst_23600 = inst_23638;
var inst_23601 = null;
var inst_23602 = (0);
var inst_23603 = (0);
var state_23719__$1 = (function (){var statearr_23729 = state_23719;
(statearr_23729[(13)] = inst_23637);

(statearr_23729[(14)] = inst_23601);

(statearr_23729[(15)] = inst_23602);

(statearr_23729[(16)] = inst_23600);

(statearr_23729[(17)] = inst_23603);

return statearr_23729;
})();
var statearr_23730_23814 = state_23719__$1;
(statearr_23730_23814[(2)] = null);

(statearr_23730_23814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (39))){
var state_23719__$1 = state_23719;
var statearr_23734_23815 = state_23719__$1;
(statearr_23734_23815[(2)] = null);

(statearr_23734_23815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (4))){
var inst_23591 = (state_23719[(10)]);
var inst_23591__$1 = (state_23719[(2)]);
var inst_23592 = (inst_23591__$1 == null);
var state_23719__$1 = (function (){var statearr_23735 = state_23719;
(statearr_23735[(10)] = inst_23591__$1);

return statearr_23735;
})();
if(cljs.core.truth_(inst_23592)){
var statearr_23736_23816 = state_23719__$1;
(statearr_23736_23816[(1)] = (5));

} else {
var statearr_23737_23817 = state_23719__$1;
(statearr_23737_23817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (15))){
var inst_23601 = (state_23719[(14)]);
var inst_23602 = (state_23719[(15)]);
var inst_23600 = (state_23719[(16)]);
var inst_23603 = (state_23719[(17)]);
var inst_23616 = (state_23719[(2)]);
var inst_23617 = (inst_23603 + (1));
var tmp23731 = inst_23601;
var tmp23732 = inst_23602;
var tmp23733 = inst_23600;
var inst_23600__$1 = tmp23733;
var inst_23601__$1 = tmp23731;
var inst_23602__$1 = tmp23732;
var inst_23603__$1 = inst_23617;
var state_23719__$1 = (function (){var statearr_23738 = state_23719;
(statearr_23738[(14)] = inst_23601__$1);

(statearr_23738[(15)] = inst_23602__$1);

(statearr_23738[(16)] = inst_23600__$1);

(statearr_23738[(18)] = inst_23616);

(statearr_23738[(17)] = inst_23603__$1);

return statearr_23738;
})();
var statearr_23739_23818 = state_23719__$1;
(statearr_23739_23818[(2)] = null);

(statearr_23739_23818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (21))){
var inst_23641 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23743_23819 = state_23719__$1;
(statearr_23743_23819[(2)] = inst_23641);

(statearr_23743_23819[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (31))){
var inst_23667 = (state_23719[(11)]);
var inst_23671 = done.call(null,null);
var inst_23672 = cljs.core.async.untap_STAR_.call(null,m,inst_23667);
var state_23719__$1 = (function (){var statearr_23744 = state_23719;
(statearr_23744[(19)] = inst_23671);

return statearr_23744;
})();
var statearr_23745_23820 = state_23719__$1;
(statearr_23745_23820[(2)] = inst_23672);

(statearr_23745_23820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (32))){
var inst_23662 = (state_23719[(9)]);
var inst_23661 = (state_23719[(20)]);
var inst_23659 = (state_23719[(21)]);
var inst_23660 = (state_23719[(12)]);
var inst_23674 = (state_23719[(2)]);
var inst_23675 = (inst_23662 + (1));
var tmp23740 = inst_23661;
var tmp23741 = inst_23659;
var tmp23742 = inst_23660;
var inst_23659__$1 = tmp23741;
var inst_23660__$1 = tmp23742;
var inst_23661__$1 = tmp23740;
var inst_23662__$1 = inst_23675;
var state_23719__$1 = (function (){var statearr_23746 = state_23719;
(statearr_23746[(9)] = inst_23662__$1);

(statearr_23746[(20)] = inst_23661__$1);

(statearr_23746[(21)] = inst_23659__$1);

(statearr_23746[(22)] = inst_23674);

(statearr_23746[(12)] = inst_23660__$1);

return statearr_23746;
})();
var statearr_23747_23821 = state_23719__$1;
(statearr_23747_23821[(2)] = null);

(statearr_23747_23821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (40))){
var inst_23687 = (state_23719[(23)]);
var inst_23691 = done.call(null,null);
var inst_23692 = cljs.core.async.untap_STAR_.call(null,m,inst_23687);
var state_23719__$1 = (function (){var statearr_23748 = state_23719;
(statearr_23748[(24)] = inst_23691);

return statearr_23748;
})();
var statearr_23749_23822 = state_23719__$1;
(statearr_23749_23822[(2)] = inst_23692);

(statearr_23749_23822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (33))){
var inst_23678 = (state_23719[(25)]);
var inst_23680 = cljs.core.chunked_seq_QMARK_.call(null,inst_23678);
var state_23719__$1 = state_23719;
if(inst_23680){
var statearr_23750_23823 = state_23719__$1;
(statearr_23750_23823[(1)] = (36));

} else {
var statearr_23751_23824 = state_23719__$1;
(statearr_23751_23824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (13))){
var inst_23610 = (state_23719[(26)]);
var inst_23613 = cljs.core.async.close_BANG_.call(null,inst_23610);
var state_23719__$1 = state_23719;
var statearr_23752_23825 = state_23719__$1;
(statearr_23752_23825[(2)] = inst_23613);

(statearr_23752_23825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (22))){
var inst_23631 = (state_23719[(8)]);
var inst_23634 = cljs.core.async.close_BANG_.call(null,inst_23631);
var state_23719__$1 = state_23719;
var statearr_23753_23826 = state_23719__$1;
(statearr_23753_23826[(2)] = inst_23634);

(statearr_23753_23826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (36))){
var inst_23678 = (state_23719[(25)]);
var inst_23682 = cljs.core.chunk_first.call(null,inst_23678);
var inst_23683 = cljs.core.chunk_rest.call(null,inst_23678);
var inst_23684 = cljs.core.count.call(null,inst_23682);
var inst_23659 = inst_23683;
var inst_23660 = inst_23682;
var inst_23661 = inst_23684;
var inst_23662 = (0);
var state_23719__$1 = (function (){var statearr_23754 = state_23719;
(statearr_23754[(9)] = inst_23662);

(statearr_23754[(20)] = inst_23661);

(statearr_23754[(21)] = inst_23659);

(statearr_23754[(12)] = inst_23660);

return statearr_23754;
})();
var statearr_23755_23827 = state_23719__$1;
(statearr_23755_23827[(2)] = null);

(statearr_23755_23827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (41))){
var inst_23678 = (state_23719[(25)]);
var inst_23694 = (state_23719[(2)]);
var inst_23695 = cljs.core.next.call(null,inst_23678);
var inst_23659 = inst_23695;
var inst_23660 = null;
var inst_23661 = (0);
var inst_23662 = (0);
var state_23719__$1 = (function (){var statearr_23756 = state_23719;
(statearr_23756[(9)] = inst_23662);

(statearr_23756[(20)] = inst_23661);

(statearr_23756[(21)] = inst_23659);

(statearr_23756[(27)] = inst_23694);

(statearr_23756[(12)] = inst_23660);

return statearr_23756;
})();
var statearr_23757_23828 = state_23719__$1;
(statearr_23757_23828[(2)] = null);

(statearr_23757_23828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (43))){
var state_23719__$1 = state_23719;
var statearr_23758_23829 = state_23719__$1;
(statearr_23758_23829[(2)] = null);

(statearr_23758_23829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (29))){
var inst_23703 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23759_23830 = state_23719__$1;
(statearr_23759_23830[(2)] = inst_23703);

(statearr_23759_23830[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (44))){
var inst_23712 = (state_23719[(2)]);
var state_23719__$1 = (function (){var statearr_23760 = state_23719;
(statearr_23760[(28)] = inst_23712);

return statearr_23760;
})();
var statearr_23761_23831 = state_23719__$1;
(statearr_23761_23831[(2)] = null);

(statearr_23761_23831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (6))){
var inst_23651 = (state_23719[(29)]);
var inst_23650 = cljs.core.deref.call(null,cs);
var inst_23651__$1 = cljs.core.keys.call(null,inst_23650);
var inst_23652 = cljs.core.count.call(null,inst_23651__$1);
var inst_23653 = cljs.core.reset_BANG_.call(null,dctr,inst_23652);
var inst_23658 = cljs.core.seq.call(null,inst_23651__$1);
var inst_23659 = inst_23658;
var inst_23660 = null;
var inst_23661 = (0);
var inst_23662 = (0);
var state_23719__$1 = (function (){var statearr_23762 = state_23719;
(statearr_23762[(9)] = inst_23662);

(statearr_23762[(29)] = inst_23651__$1);

(statearr_23762[(20)] = inst_23661);

(statearr_23762[(21)] = inst_23659);

(statearr_23762[(30)] = inst_23653);

(statearr_23762[(12)] = inst_23660);

return statearr_23762;
})();
var statearr_23763_23832 = state_23719__$1;
(statearr_23763_23832[(2)] = null);

(statearr_23763_23832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (28))){
var inst_23659 = (state_23719[(21)]);
var inst_23678 = (state_23719[(25)]);
var inst_23678__$1 = cljs.core.seq.call(null,inst_23659);
var state_23719__$1 = (function (){var statearr_23764 = state_23719;
(statearr_23764[(25)] = inst_23678__$1);

return statearr_23764;
})();
if(inst_23678__$1){
var statearr_23765_23833 = state_23719__$1;
(statearr_23765_23833[(1)] = (33));

} else {
var statearr_23766_23834 = state_23719__$1;
(statearr_23766_23834[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (25))){
var inst_23662 = (state_23719[(9)]);
var inst_23661 = (state_23719[(20)]);
var inst_23664 = (inst_23662 < inst_23661);
var inst_23665 = inst_23664;
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23665)){
var statearr_23767_23835 = state_23719__$1;
(statearr_23767_23835[(1)] = (27));

} else {
var statearr_23768_23836 = state_23719__$1;
(statearr_23768_23836[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (34))){
var state_23719__$1 = state_23719;
var statearr_23769_23837 = state_23719__$1;
(statearr_23769_23837[(2)] = null);

(statearr_23769_23837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (17))){
var state_23719__$1 = state_23719;
var statearr_23770_23838 = state_23719__$1;
(statearr_23770_23838[(2)] = null);

(statearr_23770_23838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (3))){
var inst_23717 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23719__$1,inst_23717);
} else {
if((state_val_23720 === (12))){
var inst_23646 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23771_23839 = state_23719__$1;
(statearr_23771_23839[(2)] = inst_23646);

(statearr_23771_23839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (2))){
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23719__$1,(4),ch);
} else {
if((state_val_23720 === (23))){
var state_23719__$1 = state_23719;
var statearr_23772_23840 = state_23719__$1;
(statearr_23772_23840[(2)] = null);

(statearr_23772_23840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (35))){
var inst_23701 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23773_23841 = state_23719__$1;
(statearr_23773_23841[(2)] = inst_23701);

(statearr_23773_23841[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (19))){
var inst_23620 = (state_23719[(7)]);
var inst_23624 = cljs.core.chunk_first.call(null,inst_23620);
var inst_23625 = cljs.core.chunk_rest.call(null,inst_23620);
var inst_23626 = cljs.core.count.call(null,inst_23624);
var inst_23600 = inst_23625;
var inst_23601 = inst_23624;
var inst_23602 = inst_23626;
var inst_23603 = (0);
var state_23719__$1 = (function (){var statearr_23774 = state_23719;
(statearr_23774[(14)] = inst_23601);

(statearr_23774[(15)] = inst_23602);

(statearr_23774[(16)] = inst_23600);

(statearr_23774[(17)] = inst_23603);

return statearr_23774;
})();
var statearr_23775_23842 = state_23719__$1;
(statearr_23775_23842[(2)] = null);

(statearr_23775_23842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (11))){
var inst_23600 = (state_23719[(16)]);
var inst_23620 = (state_23719[(7)]);
var inst_23620__$1 = cljs.core.seq.call(null,inst_23600);
var state_23719__$1 = (function (){var statearr_23776 = state_23719;
(statearr_23776[(7)] = inst_23620__$1);

return statearr_23776;
})();
if(inst_23620__$1){
var statearr_23777_23843 = state_23719__$1;
(statearr_23777_23843[(1)] = (16));

} else {
var statearr_23778_23844 = state_23719__$1;
(statearr_23778_23844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (9))){
var inst_23648 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23779_23845 = state_23719__$1;
(statearr_23779_23845[(2)] = inst_23648);

(statearr_23779_23845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (5))){
var inst_23598 = cljs.core.deref.call(null,cs);
var inst_23599 = cljs.core.seq.call(null,inst_23598);
var inst_23600 = inst_23599;
var inst_23601 = null;
var inst_23602 = (0);
var inst_23603 = (0);
var state_23719__$1 = (function (){var statearr_23780 = state_23719;
(statearr_23780[(14)] = inst_23601);

(statearr_23780[(15)] = inst_23602);

(statearr_23780[(16)] = inst_23600);

(statearr_23780[(17)] = inst_23603);

return statearr_23780;
})();
var statearr_23781_23846 = state_23719__$1;
(statearr_23781_23846[(2)] = null);

(statearr_23781_23846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (14))){
var state_23719__$1 = state_23719;
var statearr_23782_23847 = state_23719__$1;
(statearr_23782_23847[(2)] = null);

(statearr_23782_23847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (45))){
var inst_23709 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23783_23848 = state_23719__$1;
(statearr_23783_23848[(2)] = inst_23709);

(statearr_23783_23848[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (26))){
var inst_23651 = (state_23719[(29)]);
var inst_23705 = (state_23719[(2)]);
var inst_23706 = cljs.core.seq.call(null,inst_23651);
var state_23719__$1 = (function (){var statearr_23784 = state_23719;
(statearr_23784[(31)] = inst_23705);

return statearr_23784;
})();
if(inst_23706){
var statearr_23785_23849 = state_23719__$1;
(statearr_23785_23849[(1)] = (42));

} else {
var statearr_23786_23850 = state_23719__$1;
(statearr_23786_23850[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (16))){
var inst_23620 = (state_23719[(7)]);
var inst_23622 = cljs.core.chunked_seq_QMARK_.call(null,inst_23620);
var state_23719__$1 = state_23719;
if(inst_23622){
var statearr_23787_23851 = state_23719__$1;
(statearr_23787_23851[(1)] = (19));

} else {
var statearr_23788_23852 = state_23719__$1;
(statearr_23788_23852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (38))){
var inst_23698 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23789_23853 = state_23719__$1;
(statearr_23789_23853[(2)] = inst_23698);

(statearr_23789_23853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (30))){
var state_23719__$1 = state_23719;
var statearr_23790_23854 = state_23719__$1;
(statearr_23790_23854[(2)] = null);

(statearr_23790_23854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (10))){
var inst_23601 = (state_23719[(14)]);
var inst_23603 = (state_23719[(17)]);
var inst_23609 = cljs.core._nth.call(null,inst_23601,inst_23603);
var inst_23610 = cljs.core.nth.call(null,inst_23609,(0),null);
var inst_23611 = cljs.core.nth.call(null,inst_23609,(1),null);
var state_23719__$1 = (function (){var statearr_23791 = state_23719;
(statearr_23791[(26)] = inst_23610);

return statearr_23791;
})();
if(cljs.core.truth_(inst_23611)){
var statearr_23792_23855 = state_23719__$1;
(statearr_23792_23855[(1)] = (13));

} else {
var statearr_23793_23856 = state_23719__$1;
(statearr_23793_23856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (18))){
var inst_23644 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23794_23857 = state_23719__$1;
(statearr_23794_23857[(2)] = inst_23644);

(statearr_23794_23857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (42))){
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23719__$1,(45),dchan);
} else {
if((state_val_23720 === (37))){
var inst_23687 = (state_23719[(23)]);
var inst_23678 = (state_23719[(25)]);
var inst_23591 = (state_23719[(10)]);
var inst_23687__$1 = cljs.core.first.call(null,inst_23678);
var inst_23688 = cljs.core.async.put_BANG_.call(null,inst_23687__$1,inst_23591,done);
var state_23719__$1 = (function (){var statearr_23795 = state_23719;
(statearr_23795[(23)] = inst_23687__$1);

return statearr_23795;
})();
if(cljs.core.truth_(inst_23688)){
var statearr_23796_23858 = state_23719__$1;
(statearr_23796_23858[(1)] = (39));

} else {
var statearr_23797_23859 = state_23719__$1;
(statearr_23797_23859[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (8))){
var inst_23602 = (state_23719[(15)]);
var inst_23603 = (state_23719[(17)]);
var inst_23605 = (inst_23603 < inst_23602);
var inst_23606 = inst_23605;
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23606)){
var statearr_23798_23860 = state_23719__$1;
(statearr_23798_23860[(1)] = (10));

} else {
var statearr_23799_23861 = state_23719__$1;
(statearr_23799_23861[(1)] = (11));

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
});})(c__19461__auto___23807,cs,m,dchan,dctr,done))
;
return ((function (switch__19396__auto__,c__19461__auto___23807,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19397__auto__ = null;
var cljs$core$async$mult_$_state_machine__19397__auto____0 = (function (){
var statearr_23803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23803[(0)] = cljs$core$async$mult_$_state_machine__19397__auto__);

(statearr_23803[(1)] = (1));

return statearr_23803;
});
var cljs$core$async$mult_$_state_machine__19397__auto____1 = (function (state_23719){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_23719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e23804){if((e23804 instanceof Object)){
var ex__19400__auto__ = e23804;
var statearr_23805_23862 = state_23719;
(statearr_23805_23862[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23863 = state_23719;
state_23719 = G__23863;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19397__auto__ = function(state_23719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19397__auto____1.call(this,state_23719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19397__auto____0;
cljs$core$async$mult_$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19397__auto____1;
return cljs$core$async$mult_$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___23807,cs,m,dchan,dctr,done))
})();
var state__19463__auto__ = (function (){var statearr_23806 = f__19462__auto__.call(null);
(statearr_23806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___23807);

return statearr_23806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___23807,cs,m,dchan,dctr,done))
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
var args23864 = [];
var len__5651__auto___23867 = arguments.length;
var i__5652__auto___23868 = (0);
while(true){
if((i__5652__auto___23868 < len__5651__auto___23867)){
args23864.push((arguments[i__5652__auto___23868]));

var G__23869 = (i__5652__auto___23868 + (1));
i__5652__auto___23868 = G__23869;
continue;
} else {
}
break;
}

var G__23866 = args23864.length;
switch (G__23866) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23864.length)].join('')));

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
var len__5651__auto___23881 = arguments.length;
var i__5652__auto___23882 = (0);
while(true){
if((i__5652__auto___23882 < len__5651__auto___23881)){
args__5658__auto__.push((arguments[i__5652__auto___23882]));

var G__23883 = (i__5652__auto___23882 + (1));
i__5652__auto___23882 = G__23883;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((3) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23875){
var map__23876 = p__23875;
var map__23876__$1 = ((((!((map__23876 == null)))?((((map__23876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23876):map__23876);
var opts = map__23876__$1;
var statearr_23878_23884 = state;
(statearr_23878_23884[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23876,map__23876__$1,opts){
return (function (val){
var statearr_23879_23885 = state;
(statearr_23879_23885[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23876,map__23876__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23880_23886 = state;
(statearr_23880_23886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23871){
var G__23872 = cljs.core.first.call(null,seq23871);
var seq23871__$1 = cljs.core.next.call(null,seq23871);
var G__23873 = cljs.core.first.call(null,seq23871__$1);
var seq23871__$2 = cljs.core.next.call(null,seq23871__$1);
var G__23874 = cljs.core.first.call(null,seq23871__$2);
var seq23871__$3 = cljs.core.next.call(null,seq23871__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23872,G__23873,G__23874,seq23871__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24050 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24051){
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
this.meta24051 = meta24051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24052,meta24051__$1){
var self__ = this;
var _24052__$1 = this;
return (new cljs.core.async.t_cljs$core$async24050(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24051__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24052){
var self__ = this;
var _24052__$1 = this;
return self__.meta24051;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24050.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24051","meta24051",413535252,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24050";

cljs.core.async.t_cljs$core$async24050.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24050");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24050 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24050(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24051){
return (new cljs.core.async.t_cljs$core$async24050(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24051));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24050(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19461__auto___24213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___24213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___24213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24150){
var state_val_24151 = (state_24150[(1)]);
if((state_val_24151 === (7))){
var inst_24068 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24152_24214 = state_24150__$1;
(statearr_24152_24214[(2)] = inst_24068);

(statearr_24152_24214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (20))){
var inst_24080 = (state_24150[(7)]);
var state_24150__$1 = state_24150;
var statearr_24153_24215 = state_24150__$1;
(statearr_24153_24215[(2)] = inst_24080);

(statearr_24153_24215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (27))){
var state_24150__$1 = state_24150;
var statearr_24154_24216 = state_24150__$1;
(statearr_24154_24216[(2)] = null);

(statearr_24154_24216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (1))){
var inst_24056 = (state_24150[(8)]);
var inst_24056__$1 = calc_state.call(null);
var inst_24058 = (inst_24056__$1 == null);
var inst_24059 = cljs.core.not.call(null,inst_24058);
var state_24150__$1 = (function (){var statearr_24155 = state_24150;
(statearr_24155[(8)] = inst_24056__$1);

return statearr_24155;
})();
if(inst_24059){
var statearr_24156_24217 = state_24150__$1;
(statearr_24156_24217[(1)] = (2));

} else {
var statearr_24157_24218 = state_24150__$1;
(statearr_24157_24218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (24))){
var inst_24110 = (state_24150[(9)]);
var inst_24103 = (state_24150[(10)]);
var inst_24124 = (state_24150[(11)]);
var inst_24124__$1 = inst_24103.call(null,inst_24110);
var state_24150__$1 = (function (){var statearr_24158 = state_24150;
(statearr_24158[(11)] = inst_24124__$1);

return statearr_24158;
})();
if(cljs.core.truth_(inst_24124__$1)){
var statearr_24159_24219 = state_24150__$1;
(statearr_24159_24219[(1)] = (29));

} else {
var statearr_24160_24220 = state_24150__$1;
(statearr_24160_24220[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (4))){
var inst_24071 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24071)){
var statearr_24161_24221 = state_24150__$1;
(statearr_24161_24221[(1)] = (8));

} else {
var statearr_24162_24222 = state_24150__$1;
(statearr_24162_24222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (15))){
var inst_24097 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24097)){
var statearr_24163_24223 = state_24150__$1;
(statearr_24163_24223[(1)] = (19));

} else {
var statearr_24164_24224 = state_24150__$1;
(statearr_24164_24224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (21))){
var inst_24102 = (state_24150[(12)]);
var inst_24102__$1 = (state_24150[(2)]);
var inst_24103 = cljs.core.get.call(null,inst_24102__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24104 = cljs.core.get.call(null,inst_24102__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24105 = cljs.core.get.call(null,inst_24102__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24150__$1 = (function (){var statearr_24165 = state_24150;
(statearr_24165[(10)] = inst_24103);

(statearr_24165[(12)] = inst_24102__$1);

(statearr_24165[(13)] = inst_24104);

return statearr_24165;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24150__$1,(22),inst_24105);
} else {
if((state_val_24151 === (31))){
var inst_24132 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24132)){
var statearr_24166_24225 = state_24150__$1;
(statearr_24166_24225[(1)] = (32));

} else {
var statearr_24167_24226 = state_24150__$1;
(statearr_24167_24226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (32))){
var inst_24109 = (state_24150[(14)]);
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24150__$1,(35),out,inst_24109);
} else {
if((state_val_24151 === (33))){
var inst_24102 = (state_24150[(12)]);
var inst_24080 = inst_24102;
var state_24150__$1 = (function (){var statearr_24168 = state_24150;
(statearr_24168[(7)] = inst_24080);

return statearr_24168;
})();
var statearr_24169_24227 = state_24150__$1;
(statearr_24169_24227[(2)] = null);

(statearr_24169_24227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (13))){
var inst_24080 = (state_24150[(7)]);
var inst_24087 = inst_24080.cljs$lang$protocol_mask$partition0$;
var inst_24088 = (inst_24087 & (64));
var inst_24089 = inst_24080.cljs$core$ISeq$;
var inst_24090 = (inst_24088) || (inst_24089);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24090)){
var statearr_24170_24228 = state_24150__$1;
(statearr_24170_24228[(1)] = (16));

} else {
var statearr_24171_24229 = state_24150__$1;
(statearr_24171_24229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (22))){
var inst_24110 = (state_24150[(9)]);
var inst_24109 = (state_24150[(14)]);
var inst_24108 = (state_24150[(2)]);
var inst_24109__$1 = cljs.core.nth.call(null,inst_24108,(0),null);
var inst_24110__$1 = cljs.core.nth.call(null,inst_24108,(1),null);
var inst_24111 = (inst_24109__$1 == null);
var inst_24112 = cljs.core._EQ_.call(null,inst_24110__$1,change);
var inst_24113 = (inst_24111) || (inst_24112);
var state_24150__$1 = (function (){var statearr_24172 = state_24150;
(statearr_24172[(9)] = inst_24110__$1);

(statearr_24172[(14)] = inst_24109__$1);

return statearr_24172;
})();
if(cljs.core.truth_(inst_24113)){
var statearr_24173_24230 = state_24150__$1;
(statearr_24173_24230[(1)] = (23));

} else {
var statearr_24174_24231 = state_24150__$1;
(statearr_24174_24231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (36))){
var inst_24102 = (state_24150[(12)]);
var inst_24080 = inst_24102;
var state_24150__$1 = (function (){var statearr_24175 = state_24150;
(statearr_24175[(7)] = inst_24080);

return statearr_24175;
})();
var statearr_24176_24232 = state_24150__$1;
(statearr_24176_24232[(2)] = null);

(statearr_24176_24232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (29))){
var inst_24124 = (state_24150[(11)]);
var state_24150__$1 = state_24150;
var statearr_24177_24233 = state_24150__$1;
(statearr_24177_24233[(2)] = inst_24124);

(statearr_24177_24233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (6))){
var state_24150__$1 = state_24150;
var statearr_24178_24234 = state_24150__$1;
(statearr_24178_24234[(2)] = false);

(statearr_24178_24234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (28))){
var inst_24120 = (state_24150[(2)]);
var inst_24121 = calc_state.call(null);
var inst_24080 = inst_24121;
var state_24150__$1 = (function (){var statearr_24179 = state_24150;
(statearr_24179[(7)] = inst_24080);

(statearr_24179[(15)] = inst_24120);

return statearr_24179;
})();
var statearr_24180_24235 = state_24150__$1;
(statearr_24180_24235[(2)] = null);

(statearr_24180_24235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (25))){
var inst_24146 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24181_24236 = state_24150__$1;
(statearr_24181_24236[(2)] = inst_24146);

(statearr_24181_24236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (34))){
var inst_24144 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24182_24237 = state_24150__$1;
(statearr_24182_24237[(2)] = inst_24144);

(statearr_24182_24237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (17))){
var state_24150__$1 = state_24150;
var statearr_24183_24238 = state_24150__$1;
(statearr_24183_24238[(2)] = false);

(statearr_24183_24238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (3))){
var state_24150__$1 = state_24150;
var statearr_24184_24239 = state_24150__$1;
(statearr_24184_24239[(2)] = false);

(statearr_24184_24239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (12))){
var inst_24148 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24150__$1,inst_24148);
} else {
if((state_val_24151 === (2))){
var inst_24056 = (state_24150[(8)]);
var inst_24061 = inst_24056.cljs$lang$protocol_mask$partition0$;
var inst_24062 = (inst_24061 & (64));
var inst_24063 = inst_24056.cljs$core$ISeq$;
var inst_24064 = (inst_24062) || (inst_24063);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24064)){
var statearr_24185_24240 = state_24150__$1;
(statearr_24185_24240[(1)] = (5));

} else {
var statearr_24186_24241 = state_24150__$1;
(statearr_24186_24241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (23))){
var inst_24109 = (state_24150[(14)]);
var inst_24115 = (inst_24109 == null);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24115)){
var statearr_24187_24242 = state_24150__$1;
(statearr_24187_24242[(1)] = (26));

} else {
var statearr_24188_24243 = state_24150__$1;
(statearr_24188_24243[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (35))){
var inst_24135 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24135)){
var statearr_24189_24244 = state_24150__$1;
(statearr_24189_24244[(1)] = (36));

} else {
var statearr_24190_24245 = state_24150__$1;
(statearr_24190_24245[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (19))){
var inst_24080 = (state_24150[(7)]);
var inst_24099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24080);
var state_24150__$1 = state_24150;
var statearr_24191_24246 = state_24150__$1;
(statearr_24191_24246[(2)] = inst_24099);

(statearr_24191_24246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (11))){
var inst_24080 = (state_24150[(7)]);
var inst_24084 = (inst_24080 == null);
var inst_24085 = cljs.core.not.call(null,inst_24084);
var state_24150__$1 = state_24150;
if(inst_24085){
var statearr_24192_24247 = state_24150__$1;
(statearr_24192_24247[(1)] = (13));

} else {
var statearr_24193_24248 = state_24150__$1;
(statearr_24193_24248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (9))){
var inst_24056 = (state_24150[(8)]);
var state_24150__$1 = state_24150;
var statearr_24194_24249 = state_24150__$1;
(statearr_24194_24249[(2)] = inst_24056);

(statearr_24194_24249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (5))){
var state_24150__$1 = state_24150;
var statearr_24195_24250 = state_24150__$1;
(statearr_24195_24250[(2)] = true);

(statearr_24195_24250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (14))){
var state_24150__$1 = state_24150;
var statearr_24196_24251 = state_24150__$1;
(statearr_24196_24251[(2)] = false);

(statearr_24196_24251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (26))){
var inst_24110 = (state_24150[(9)]);
var inst_24117 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24110);
var state_24150__$1 = state_24150;
var statearr_24197_24252 = state_24150__$1;
(statearr_24197_24252[(2)] = inst_24117);

(statearr_24197_24252[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (16))){
var state_24150__$1 = state_24150;
var statearr_24198_24253 = state_24150__$1;
(statearr_24198_24253[(2)] = true);

(statearr_24198_24253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (38))){
var inst_24140 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24199_24254 = state_24150__$1;
(statearr_24199_24254[(2)] = inst_24140);

(statearr_24199_24254[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (30))){
var inst_24110 = (state_24150[(9)]);
var inst_24103 = (state_24150[(10)]);
var inst_24104 = (state_24150[(13)]);
var inst_24127 = cljs.core.empty_QMARK_.call(null,inst_24103);
var inst_24128 = inst_24104.call(null,inst_24110);
var inst_24129 = cljs.core.not.call(null,inst_24128);
var inst_24130 = (inst_24127) && (inst_24129);
var state_24150__$1 = state_24150;
var statearr_24200_24255 = state_24150__$1;
(statearr_24200_24255[(2)] = inst_24130);

(statearr_24200_24255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (10))){
var inst_24056 = (state_24150[(8)]);
var inst_24076 = (state_24150[(2)]);
var inst_24077 = cljs.core.get.call(null,inst_24076,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24078 = cljs.core.get.call(null,inst_24076,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24079 = cljs.core.get.call(null,inst_24076,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24080 = inst_24056;
var state_24150__$1 = (function (){var statearr_24201 = state_24150;
(statearr_24201[(16)] = inst_24079);

(statearr_24201[(17)] = inst_24078);

(statearr_24201[(18)] = inst_24077);

(statearr_24201[(7)] = inst_24080);

return statearr_24201;
})();
var statearr_24202_24256 = state_24150__$1;
(statearr_24202_24256[(2)] = null);

(statearr_24202_24256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (18))){
var inst_24094 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24203_24257 = state_24150__$1;
(statearr_24203_24257[(2)] = inst_24094);

(statearr_24203_24257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (37))){
var state_24150__$1 = state_24150;
var statearr_24204_24258 = state_24150__$1;
(statearr_24204_24258[(2)] = null);

(statearr_24204_24258[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (8))){
var inst_24056 = (state_24150[(8)]);
var inst_24073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24056);
var state_24150__$1 = state_24150;
var statearr_24205_24259 = state_24150__$1;
(statearr_24205_24259[(2)] = inst_24073);

(statearr_24205_24259[(1)] = (10));


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
});})(c__19461__auto___24213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19396__auto__,c__19461__auto___24213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19397__auto__ = null;
var cljs$core$async$mix_$_state_machine__19397__auto____0 = (function (){
var statearr_24209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24209[(0)] = cljs$core$async$mix_$_state_machine__19397__auto__);

(statearr_24209[(1)] = (1));

return statearr_24209;
});
var cljs$core$async$mix_$_state_machine__19397__auto____1 = (function (state_24150){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24210){if((e24210 instanceof Object)){
var ex__19400__auto__ = e24210;
var statearr_24211_24260 = state_24150;
(statearr_24211_24260[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24261 = state_24150;
state_24150 = G__24261;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19397__auto__ = function(state_24150){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19397__auto____1.call(this,state_24150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19397__auto____0;
cljs$core$async$mix_$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19397__auto____1;
return cljs$core$async$mix_$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___24213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19463__auto__ = (function (){var statearr_24212 = f__19462__auto__.call(null);
(statearr_24212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___24213);

return statearr_24212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___24213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24262 = [];
var len__5651__auto___24265 = arguments.length;
var i__5652__auto___24266 = (0);
while(true){
if((i__5652__auto___24266 < len__5651__auto___24265)){
args24262.push((arguments[i__5652__auto___24266]));

var G__24267 = (i__5652__auto___24266 + (1));
i__5652__auto___24266 = G__24267;
continue;
} else {
}
break;
}

var G__24264 = args24262.length;
switch (G__24264) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24262.length)].join('')));

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
var args24270 = [];
var len__5651__auto___24395 = arguments.length;
var i__5652__auto___24396 = (0);
while(true){
if((i__5652__auto___24396 < len__5651__auto___24395)){
args24270.push((arguments[i__5652__auto___24396]));

var G__24397 = (i__5652__auto___24396 + (1));
i__5652__auto___24396 = G__24397;
continue;
} else {
}
break;
}

var G__24272 = args24270.length;
switch (G__24272) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24270.length)].join('')));

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
return (function (p1__24269_SHARP_){
if(cljs.core.truth_(p1__24269_SHARP_.call(null,topic))){
return p1__24269_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24269_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4593__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24274 = meta24274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24275,meta24274__$1){
var self__ = this;
var _24275__$1 = this;
return (new cljs.core.async.t_cljs$core$async24273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24274__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24275){
var self__ = this;
var _24275__$1 = this;
return self__.meta24274;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24274","meta24274",-1776669529,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24273";

cljs.core.async.t_cljs$core$async24273.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24273");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24273 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24274){
return (new cljs.core.async.t_cljs$core$async24273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24274));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19461__auto___24399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___24399,mults,ensure_mult,p){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___24399,mults,ensure_mult,p){
return (function (state_24347){
var state_val_24348 = (state_24347[(1)]);
if((state_val_24348 === (7))){
var inst_24343 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24349_24400 = state_24347__$1;
(statearr_24349_24400[(2)] = inst_24343);

(statearr_24349_24400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (20))){
var state_24347__$1 = state_24347;
var statearr_24350_24401 = state_24347__$1;
(statearr_24350_24401[(2)] = null);

(statearr_24350_24401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (1))){
var state_24347__$1 = state_24347;
var statearr_24351_24402 = state_24347__$1;
(statearr_24351_24402[(2)] = null);

(statearr_24351_24402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (24))){
var inst_24326 = (state_24347[(7)]);
var inst_24335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24326);
var state_24347__$1 = state_24347;
var statearr_24352_24403 = state_24347__$1;
(statearr_24352_24403[(2)] = inst_24335);

(statearr_24352_24403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (4))){
var inst_24278 = (state_24347[(8)]);
var inst_24278__$1 = (state_24347[(2)]);
var inst_24279 = (inst_24278__$1 == null);
var state_24347__$1 = (function (){var statearr_24353 = state_24347;
(statearr_24353[(8)] = inst_24278__$1);

return statearr_24353;
})();
if(cljs.core.truth_(inst_24279)){
var statearr_24354_24404 = state_24347__$1;
(statearr_24354_24404[(1)] = (5));

} else {
var statearr_24355_24405 = state_24347__$1;
(statearr_24355_24405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (15))){
var inst_24320 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24356_24406 = state_24347__$1;
(statearr_24356_24406[(2)] = inst_24320);

(statearr_24356_24406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (21))){
var inst_24340 = (state_24347[(2)]);
var state_24347__$1 = (function (){var statearr_24357 = state_24347;
(statearr_24357[(9)] = inst_24340);

return statearr_24357;
})();
var statearr_24358_24407 = state_24347__$1;
(statearr_24358_24407[(2)] = null);

(statearr_24358_24407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (13))){
var inst_24302 = (state_24347[(10)]);
var inst_24304 = cljs.core.chunked_seq_QMARK_.call(null,inst_24302);
var state_24347__$1 = state_24347;
if(inst_24304){
var statearr_24359_24408 = state_24347__$1;
(statearr_24359_24408[(1)] = (16));

} else {
var statearr_24360_24409 = state_24347__$1;
(statearr_24360_24409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (22))){
var inst_24332 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
if(cljs.core.truth_(inst_24332)){
var statearr_24361_24410 = state_24347__$1;
(statearr_24361_24410[(1)] = (23));

} else {
var statearr_24362_24411 = state_24347__$1;
(statearr_24362_24411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (6))){
var inst_24328 = (state_24347[(11)]);
var inst_24278 = (state_24347[(8)]);
var inst_24326 = (state_24347[(7)]);
var inst_24326__$1 = topic_fn.call(null,inst_24278);
var inst_24327 = cljs.core.deref.call(null,mults);
var inst_24328__$1 = cljs.core.get.call(null,inst_24327,inst_24326__$1);
var state_24347__$1 = (function (){var statearr_24363 = state_24347;
(statearr_24363[(11)] = inst_24328__$1);

(statearr_24363[(7)] = inst_24326__$1);

return statearr_24363;
})();
if(cljs.core.truth_(inst_24328__$1)){
var statearr_24364_24412 = state_24347__$1;
(statearr_24364_24412[(1)] = (19));

} else {
var statearr_24365_24413 = state_24347__$1;
(statearr_24365_24413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (25))){
var inst_24337 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24366_24414 = state_24347__$1;
(statearr_24366_24414[(2)] = inst_24337);

(statearr_24366_24414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (17))){
var inst_24302 = (state_24347[(10)]);
var inst_24311 = cljs.core.first.call(null,inst_24302);
var inst_24312 = cljs.core.async.muxch_STAR_.call(null,inst_24311);
var inst_24313 = cljs.core.async.close_BANG_.call(null,inst_24312);
var inst_24314 = cljs.core.next.call(null,inst_24302);
var inst_24288 = inst_24314;
var inst_24289 = null;
var inst_24290 = (0);
var inst_24291 = (0);
var state_24347__$1 = (function (){var statearr_24367 = state_24347;
(statearr_24367[(12)] = inst_24289);

(statearr_24367[(13)] = inst_24290);

(statearr_24367[(14)] = inst_24313);

(statearr_24367[(15)] = inst_24288);

(statearr_24367[(16)] = inst_24291);

return statearr_24367;
})();
var statearr_24368_24415 = state_24347__$1;
(statearr_24368_24415[(2)] = null);

(statearr_24368_24415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (3))){
var inst_24345 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24347__$1,inst_24345);
} else {
if((state_val_24348 === (12))){
var inst_24322 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24369_24416 = state_24347__$1;
(statearr_24369_24416[(2)] = inst_24322);

(statearr_24369_24416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (2))){
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24347__$1,(4),ch);
} else {
if((state_val_24348 === (23))){
var state_24347__$1 = state_24347;
var statearr_24370_24417 = state_24347__$1;
(statearr_24370_24417[(2)] = null);

(statearr_24370_24417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (19))){
var inst_24328 = (state_24347[(11)]);
var inst_24278 = (state_24347[(8)]);
var inst_24330 = cljs.core.async.muxch_STAR_.call(null,inst_24328);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24347__$1,(22),inst_24330,inst_24278);
} else {
if((state_val_24348 === (11))){
var inst_24288 = (state_24347[(15)]);
var inst_24302 = (state_24347[(10)]);
var inst_24302__$1 = cljs.core.seq.call(null,inst_24288);
var state_24347__$1 = (function (){var statearr_24371 = state_24347;
(statearr_24371[(10)] = inst_24302__$1);

return statearr_24371;
})();
if(inst_24302__$1){
var statearr_24372_24418 = state_24347__$1;
(statearr_24372_24418[(1)] = (13));

} else {
var statearr_24373_24419 = state_24347__$1;
(statearr_24373_24419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (9))){
var inst_24324 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24374_24420 = state_24347__$1;
(statearr_24374_24420[(2)] = inst_24324);

(statearr_24374_24420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (5))){
var inst_24285 = cljs.core.deref.call(null,mults);
var inst_24286 = cljs.core.vals.call(null,inst_24285);
var inst_24287 = cljs.core.seq.call(null,inst_24286);
var inst_24288 = inst_24287;
var inst_24289 = null;
var inst_24290 = (0);
var inst_24291 = (0);
var state_24347__$1 = (function (){var statearr_24375 = state_24347;
(statearr_24375[(12)] = inst_24289);

(statearr_24375[(13)] = inst_24290);

(statearr_24375[(15)] = inst_24288);

(statearr_24375[(16)] = inst_24291);

return statearr_24375;
})();
var statearr_24376_24421 = state_24347__$1;
(statearr_24376_24421[(2)] = null);

(statearr_24376_24421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (14))){
var state_24347__$1 = state_24347;
var statearr_24380_24422 = state_24347__$1;
(statearr_24380_24422[(2)] = null);

(statearr_24380_24422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (16))){
var inst_24302 = (state_24347[(10)]);
var inst_24306 = cljs.core.chunk_first.call(null,inst_24302);
var inst_24307 = cljs.core.chunk_rest.call(null,inst_24302);
var inst_24308 = cljs.core.count.call(null,inst_24306);
var inst_24288 = inst_24307;
var inst_24289 = inst_24306;
var inst_24290 = inst_24308;
var inst_24291 = (0);
var state_24347__$1 = (function (){var statearr_24381 = state_24347;
(statearr_24381[(12)] = inst_24289);

(statearr_24381[(13)] = inst_24290);

(statearr_24381[(15)] = inst_24288);

(statearr_24381[(16)] = inst_24291);

return statearr_24381;
})();
var statearr_24382_24423 = state_24347__$1;
(statearr_24382_24423[(2)] = null);

(statearr_24382_24423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (10))){
var inst_24289 = (state_24347[(12)]);
var inst_24290 = (state_24347[(13)]);
var inst_24288 = (state_24347[(15)]);
var inst_24291 = (state_24347[(16)]);
var inst_24296 = cljs.core._nth.call(null,inst_24289,inst_24291);
var inst_24297 = cljs.core.async.muxch_STAR_.call(null,inst_24296);
var inst_24298 = cljs.core.async.close_BANG_.call(null,inst_24297);
var inst_24299 = (inst_24291 + (1));
var tmp24377 = inst_24289;
var tmp24378 = inst_24290;
var tmp24379 = inst_24288;
var inst_24288__$1 = tmp24379;
var inst_24289__$1 = tmp24377;
var inst_24290__$1 = tmp24378;
var inst_24291__$1 = inst_24299;
var state_24347__$1 = (function (){var statearr_24383 = state_24347;
(statearr_24383[(12)] = inst_24289__$1);

(statearr_24383[(13)] = inst_24290__$1);

(statearr_24383[(15)] = inst_24288__$1);

(statearr_24383[(17)] = inst_24298);

(statearr_24383[(16)] = inst_24291__$1);

return statearr_24383;
})();
var statearr_24384_24424 = state_24347__$1;
(statearr_24384_24424[(2)] = null);

(statearr_24384_24424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (18))){
var inst_24317 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24385_24425 = state_24347__$1;
(statearr_24385_24425[(2)] = inst_24317);

(statearr_24385_24425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (8))){
var inst_24290 = (state_24347[(13)]);
var inst_24291 = (state_24347[(16)]);
var inst_24293 = (inst_24291 < inst_24290);
var inst_24294 = inst_24293;
var state_24347__$1 = state_24347;
if(cljs.core.truth_(inst_24294)){
var statearr_24386_24426 = state_24347__$1;
(statearr_24386_24426[(1)] = (10));

} else {
var statearr_24387_24427 = state_24347__$1;
(statearr_24387_24427[(1)] = (11));

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
});})(c__19461__auto___24399,mults,ensure_mult,p))
;
return ((function (switch__19396__auto__,c__19461__auto___24399,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_24391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24391[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_24391[(1)] = (1));

return statearr_24391;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_24347){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24392){if((e24392 instanceof Object)){
var ex__19400__auto__ = e24392;
var statearr_24393_24428 = state_24347;
(statearr_24393_24428[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24429 = state_24347;
state_24347 = G__24429;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_24347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_24347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___24399,mults,ensure_mult,p))
})();
var state__19463__auto__ = (function (){var statearr_24394 = f__19462__auto__.call(null);
(statearr_24394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___24399);

return statearr_24394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___24399,mults,ensure_mult,p))
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
var args24430 = [];
var len__5651__auto___24433 = arguments.length;
var i__5652__auto___24434 = (0);
while(true){
if((i__5652__auto___24434 < len__5651__auto___24433)){
args24430.push((arguments[i__5652__auto___24434]));

var G__24435 = (i__5652__auto___24434 + (1));
i__5652__auto___24434 = G__24435;
continue;
} else {
}
break;
}

var G__24432 = args24430.length;
switch (G__24432) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24430.length)].join('')));

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
var args24437 = [];
var len__5651__auto___24440 = arguments.length;
var i__5652__auto___24441 = (0);
while(true){
if((i__5652__auto___24441 < len__5651__auto___24440)){
args24437.push((arguments[i__5652__auto___24441]));

var G__24442 = (i__5652__auto___24441 + (1));
i__5652__auto___24441 = G__24442;
continue;
} else {
}
break;
}

var G__24439 = args24437.length;
switch (G__24439) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24437.length)].join('')));

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
var args24444 = [];
var len__5651__auto___24515 = arguments.length;
var i__5652__auto___24516 = (0);
while(true){
if((i__5652__auto___24516 < len__5651__auto___24515)){
args24444.push((arguments[i__5652__auto___24516]));

var G__24517 = (i__5652__auto___24516 + (1));
i__5652__auto___24516 = G__24517;
continue;
} else {
}
break;
}

var G__24446 = args24444.length;
switch (G__24446) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24444.length)].join('')));

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
var c__19461__auto___24519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___24519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___24519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24485){
var state_val_24486 = (state_24485[(1)]);
if((state_val_24486 === (7))){
var state_24485__$1 = state_24485;
var statearr_24487_24520 = state_24485__$1;
(statearr_24487_24520[(2)] = null);

(statearr_24487_24520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (1))){
var state_24485__$1 = state_24485;
var statearr_24488_24521 = state_24485__$1;
(statearr_24488_24521[(2)] = null);

(statearr_24488_24521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (4))){
var inst_24449 = (state_24485[(7)]);
var inst_24451 = (inst_24449 < cnt);
var state_24485__$1 = state_24485;
if(cljs.core.truth_(inst_24451)){
var statearr_24489_24522 = state_24485__$1;
(statearr_24489_24522[(1)] = (6));

} else {
var statearr_24490_24523 = state_24485__$1;
(statearr_24490_24523[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (15))){
var inst_24481 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24491_24524 = state_24485__$1;
(statearr_24491_24524[(2)] = inst_24481);

(statearr_24491_24524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (13))){
var inst_24474 = cljs.core.async.close_BANG_.call(null,out);
var state_24485__$1 = state_24485;
var statearr_24492_24525 = state_24485__$1;
(statearr_24492_24525[(2)] = inst_24474);

(statearr_24492_24525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (6))){
var state_24485__$1 = state_24485;
var statearr_24493_24526 = state_24485__$1;
(statearr_24493_24526[(2)] = null);

(statearr_24493_24526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (3))){
var inst_24483 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24485__$1,inst_24483);
} else {
if((state_val_24486 === (12))){
var inst_24471 = (state_24485[(8)]);
var inst_24471__$1 = (state_24485[(2)]);
var inst_24472 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24471__$1);
var state_24485__$1 = (function (){var statearr_24494 = state_24485;
(statearr_24494[(8)] = inst_24471__$1);

return statearr_24494;
})();
if(cljs.core.truth_(inst_24472)){
var statearr_24495_24527 = state_24485__$1;
(statearr_24495_24527[(1)] = (13));

} else {
var statearr_24496_24528 = state_24485__$1;
(statearr_24496_24528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (2))){
var inst_24448 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24449 = (0);
var state_24485__$1 = (function (){var statearr_24497 = state_24485;
(statearr_24497[(7)] = inst_24449);

(statearr_24497[(9)] = inst_24448);

return statearr_24497;
})();
var statearr_24498_24529 = state_24485__$1;
(statearr_24498_24529[(2)] = null);

(statearr_24498_24529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (11))){
var inst_24449 = (state_24485[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24485,(10),Object,null,(9));
var inst_24458 = chs__$1.call(null,inst_24449);
var inst_24459 = done.call(null,inst_24449);
var inst_24460 = cljs.core.async.take_BANG_.call(null,inst_24458,inst_24459);
var state_24485__$1 = state_24485;
var statearr_24499_24530 = state_24485__$1;
(statearr_24499_24530[(2)] = inst_24460);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (9))){
var inst_24449 = (state_24485[(7)]);
var inst_24462 = (state_24485[(2)]);
var inst_24463 = (inst_24449 + (1));
var inst_24449__$1 = inst_24463;
var state_24485__$1 = (function (){var statearr_24500 = state_24485;
(statearr_24500[(7)] = inst_24449__$1);

(statearr_24500[(10)] = inst_24462);

return statearr_24500;
})();
var statearr_24501_24531 = state_24485__$1;
(statearr_24501_24531[(2)] = null);

(statearr_24501_24531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (5))){
var inst_24469 = (state_24485[(2)]);
var state_24485__$1 = (function (){var statearr_24502 = state_24485;
(statearr_24502[(11)] = inst_24469);

return statearr_24502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24485__$1,(12),dchan);
} else {
if((state_val_24486 === (14))){
var inst_24471 = (state_24485[(8)]);
var inst_24476 = cljs.core.apply.call(null,f,inst_24471);
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24485__$1,(16),out,inst_24476);
} else {
if((state_val_24486 === (16))){
var inst_24478 = (state_24485[(2)]);
var state_24485__$1 = (function (){var statearr_24503 = state_24485;
(statearr_24503[(12)] = inst_24478);

return statearr_24503;
})();
var statearr_24504_24532 = state_24485__$1;
(statearr_24504_24532[(2)] = null);

(statearr_24504_24532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (10))){
var inst_24453 = (state_24485[(2)]);
var inst_24454 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24485__$1 = (function (){var statearr_24505 = state_24485;
(statearr_24505[(13)] = inst_24453);

return statearr_24505;
})();
var statearr_24506_24533 = state_24485__$1;
(statearr_24506_24533[(2)] = inst_24454);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (8))){
var inst_24467 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24507_24534 = state_24485__$1;
(statearr_24507_24534[(2)] = inst_24467);

(statearr_24507_24534[(1)] = (5));


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
});})(c__19461__auto___24519,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19396__auto__,c__19461__auto___24519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_24511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24511[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_24511[(1)] = (1));

return statearr_24511;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_24485){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24512){if((e24512 instanceof Object)){
var ex__19400__auto__ = e24512;
var statearr_24513_24535 = state_24485;
(statearr_24513_24535[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24536 = state_24485;
state_24485 = G__24536;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_24485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_24485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___24519,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19463__auto__ = (function (){var statearr_24514 = f__19462__auto__.call(null);
(statearr_24514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___24519);

return statearr_24514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___24519,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24538 = [];
var len__5651__auto___24594 = arguments.length;
var i__5652__auto___24595 = (0);
while(true){
if((i__5652__auto___24595 < len__5651__auto___24594)){
args24538.push((arguments[i__5652__auto___24595]));

var G__24596 = (i__5652__auto___24595 + (1));
i__5652__auto___24595 = G__24596;
continue;
} else {
}
break;
}

var G__24540 = args24538.length;
switch (G__24540) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24538.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19461__auto___24598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___24598,out){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___24598,out){
return (function (state_24570){
var state_val_24571 = (state_24570[(1)]);
if((state_val_24571 === (7))){
var inst_24549 = (state_24570[(7)]);
var inst_24550 = (state_24570[(8)]);
var inst_24549__$1 = (state_24570[(2)]);
var inst_24550__$1 = cljs.core.nth.call(null,inst_24549__$1,(0),null);
var inst_24551 = cljs.core.nth.call(null,inst_24549__$1,(1),null);
var inst_24552 = (inst_24550__$1 == null);
var state_24570__$1 = (function (){var statearr_24572 = state_24570;
(statearr_24572[(9)] = inst_24551);

(statearr_24572[(7)] = inst_24549__$1);

(statearr_24572[(8)] = inst_24550__$1);

return statearr_24572;
})();
if(cljs.core.truth_(inst_24552)){
var statearr_24573_24599 = state_24570__$1;
(statearr_24573_24599[(1)] = (8));

} else {
var statearr_24574_24600 = state_24570__$1;
(statearr_24574_24600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (1))){
var inst_24541 = cljs.core.vec.call(null,chs);
var inst_24542 = inst_24541;
var state_24570__$1 = (function (){var statearr_24575 = state_24570;
(statearr_24575[(10)] = inst_24542);

return statearr_24575;
})();
var statearr_24576_24601 = state_24570__$1;
(statearr_24576_24601[(2)] = null);

(statearr_24576_24601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (4))){
var inst_24542 = (state_24570[(10)]);
var state_24570__$1 = state_24570;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24570__$1,(7),inst_24542);
} else {
if((state_val_24571 === (6))){
var inst_24566 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24577_24602 = state_24570__$1;
(statearr_24577_24602[(2)] = inst_24566);

(statearr_24577_24602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (3))){
var inst_24568 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24570__$1,inst_24568);
} else {
if((state_val_24571 === (2))){
var inst_24542 = (state_24570[(10)]);
var inst_24544 = cljs.core.count.call(null,inst_24542);
var inst_24545 = (inst_24544 > (0));
var state_24570__$1 = state_24570;
if(cljs.core.truth_(inst_24545)){
var statearr_24579_24603 = state_24570__$1;
(statearr_24579_24603[(1)] = (4));

} else {
var statearr_24580_24604 = state_24570__$1;
(statearr_24580_24604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (11))){
var inst_24542 = (state_24570[(10)]);
var inst_24559 = (state_24570[(2)]);
var tmp24578 = inst_24542;
var inst_24542__$1 = tmp24578;
var state_24570__$1 = (function (){var statearr_24581 = state_24570;
(statearr_24581[(11)] = inst_24559);

(statearr_24581[(10)] = inst_24542__$1);

return statearr_24581;
})();
var statearr_24582_24605 = state_24570__$1;
(statearr_24582_24605[(2)] = null);

(statearr_24582_24605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (9))){
var inst_24550 = (state_24570[(8)]);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24570__$1,(11),out,inst_24550);
} else {
if((state_val_24571 === (5))){
var inst_24564 = cljs.core.async.close_BANG_.call(null,out);
var state_24570__$1 = state_24570;
var statearr_24583_24606 = state_24570__$1;
(statearr_24583_24606[(2)] = inst_24564);

(statearr_24583_24606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (10))){
var inst_24562 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24584_24607 = state_24570__$1;
(statearr_24584_24607[(2)] = inst_24562);

(statearr_24584_24607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (8))){
var inst_24551 = (state_24570[(9)]);
var inst_24549 = (state_24570[(7)]);
var inst_24550 = (state_24570[(8)]);
var inst_24542 = (state_24570[(10)]);
var inst_24554 = (function (){var cs = inst_24542;
var vec__24547 = inst_24549;
var v = inst_24550;
var c = inst_24551;
return ((function (cs,vec__24547,v,c,inst_24551,inst_24549,inst_24550,inst_24542,state_val_24571,c__19461__auto___24598,out){
return (function (p1__24537_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24537_SHARP_);
});
;})(cs,vec__24547,v,c,inst_24551,inst_24549,inst_24550,inst_24542,state_val_24571,c__19461__auto___24598,out))
})();
var inst_24555 = cljs.core.filterv.call(null,inst_24554,inst_24542);
var inst_24542__$1 = inst_24555;
var state_24570__$1 = (function (){var statearr_24585 = state_24570;
(statearr_24585[(10)] = inst_24542__$1);

return statearr_24585;
})();
var statearr_24586_24608 = state_24570__$1;
(statearr_24586_24608[(2)] = null);

(statearr_24586_24608[(1)] = (2));


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
});})(c__19461__auto___24598,out))
;
return ((function (switch__19396__auto__,c__19461__auto___24598,out){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_24590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24590[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_24590[(1)] = (1));

return statearr_24590;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_24570){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object)){
var ex__19400__auto__ = e24591;
var statearr_24592_24609 = state_24570;
(statearr_24592_24609[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24610 = state_24570;
state_24570 = G__24610;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___24598,out))
})();
var state__19463__auto__ = (function (){var statearr_24593 = f__19462__auto__.call(null);
(statearr_24593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___24598);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___24598,out))
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
var args24611 = [];
var len__5651__auto___24660 = arguments.length;
var i__5652__auto___24661 = (0);
while(true){
if((i__5652__auto___24661 < len__5651__auto___24660)){
args24611.push((arguments[i__5652__auto___24661]));

var G__24662 = (i__5652__auto___24661 + (1));
i__5652__auto___24661 = G__24662;
continue;
} else {
}
break;
}

var G__24613 = args24611.length;
switch (G__24613) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24611.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19461__auto___24664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___24664,out){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___24664,out){
return (function (state_24637){
var state_val_24638 = (state_24637[(1)]);
if((state_val_24638 === (7))){
var inst_24619 = (state_24637[(7)]);
var inst_24619__$1 = (state_24637[(2)]);
var inst_24620 = (inst_24619__$1 == null);
var inst_24621 = cljs.core.not.call(null,inst_24620);
var state_24637__$1 = (function (){var statearr_24639 = state_24637;
(statearr_24639[(7)] = inst_24619__$1);

return statearr_24639;
})();
if(inst_24621){
var statearr_24640_24665 = state_24637__$1;
(statearr_24640_24665[(1)] = (8));

} else {
var statearr_24641_24666 = state_24637__$1;
(statearr_24641_24666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (1))){
var inst_24614 = (0);
var state_24637__$1 = (function (){var statearr_24642 = state_24637;
(statearr_24642[(8)] = inst_24614);

return statearr_24642;
})();
var statearr_24643_24667 = state_24637__$1;
(statearr_24643_24667[(2)] = null);

(statearr_24643_24667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (4))){
var state_24637__$1 = state_24637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24637__$1,(7),ch);
} else {
if((state_val_24638 === (6))){
var inst_24632 = (state_24637[(2)]);
var state_24637__$1 = state_24637;
var statearr_24644_24668 = state_24637__$1;
(statearr_24644_24668[(2)] = inst_24632);

(statearr_24644_24668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (3))){
var inst_24634 = (state_24637[(2)]);
var inst_24635 = cljs.core.async.close_BANG_.call(null,out);
var state_24637__$1 = (function (){var statearr_24645 = state_24637;
(statearr_24645[(9)] = inst_24634);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24637__$1,inst_24635);
} else {
if((state_val_24638 === (2))){
var inst_24614 = (state_24637[(8)]);
var inst_24616 = (inst_24614 < n);
var state_24637__$1 = state_24637;
if(cljs.core.truth_(inst_24616)){
var statearr_24646_24669 = state_24637__$1;
(statearr_24646_24669[(1)] = (4));

} else {
var statearr_24647_24670 = state_24637__$1;
(statearr_24647_24670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (11))){
var inst_24614 = (state_24637[(8)]);
var inst_24624 = (state_24637[(2)]);
var inst_24625 = (inst_24614 + (1));
var inst_24614__$1 = inst_24625;
var state_24637__$1 = (function (){var statearr_24648 = state_24637;
(statearr_24648[(8)] = inst_24614__$1);

(statearr_24648[(10)] = inst_24624);

return statearr_24648;
})();
var statearr_24649_24671 = state_24637__$1;
(statearr_24649_24671[(2)] = null);

(statearr_24649_24671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (9))){
var state_24637__$1 = state_24637;
var statearr_24650_24672 = state_24637__$1;
(statearr_24650_24672[(2)] = null);

(statearr_24650_24672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (5))){
var state_24637__$1 = state_24637;
var statearr_24651_24673 = state_24637__$1;
(statearr_24651_24673[(2)] = null);

(statearr_24651_24673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (10))){
var inst_24629 = (state_24637[(2)]);
var state_24637__$1 = state_24637;
var statearr_24652_24674 = state_24637__$1;
(statearr_24652_24674[(2)] = inst_24629);

(statearr_24652_24674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24638 === (8))){
var inst_24619 = (state_24637[(7)]);
var state_24637__$1 = state_24637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24637__$1,(11),out,inst_24619);
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
});})(c__19461__auto___24664,out))
;
return ((function (switch__19396__auto__,c__19461__auto___24664,out){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_24656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24656[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_24656[(1)] = (1));

return statearr_24656;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_24637){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24657){if((e24657 instanceof Object)){
var ex__19400__auto__ = e24657;
var statearr_24658_24675 = state_24637;
(statearr_24658_24675[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24676 = state_24637;
state_24637 = G__24676;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_24637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_24637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___24664,out))
})();
var state__19463__auto__ = (function (){var statearr_24659 = f__19462__auto__.call(null);
(statearr_24659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___24664);

return statearr_24659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___24664,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24684 = (function (map_LT_,f,ch,meta24685){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24685 = meta24685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24686,meta24685__$1){
var self__ = this;
var _24686__$1 = this;
return (new cljs.core.async.t_cljs$core$async24684(self__.map_LT_,self__.f,self__.ch,meta24685__$1));
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24686){
var self__ = this;
var _24686__$1 = this;
return self__.meta24685;
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24687 = (function (map_LT_,f,ch,meta24685,_,fn1,meta24688){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24685 = meta24685;
this._ = _;
this.fn1 = fn1;
this.meta24688 = meta24688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24689,meta24688__$1){
var self__ = this;
var _24689__$1 = this;
return (new cljs.core.async.t_cljs$core$async24687(self__.map_LT_,self__.f,self__.ch,self__.meta24685,self__._,self__.fn1,meta24688__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24689){
var self__ = this;
var _24689__$1 = this;
return self__.meta24688;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24677_SHARP_){
return f1.call(null,(((p1__24677_SHARP_ == null))?null:self__.f.call(null,p1__24677_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24687.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24685","meta24685",-1209493178,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24684","cljs.core.async/t_cljs$core$async24684",622013773,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24688","meta24688",-648701088,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24687";

cljs.core.async.t_cljs$core$async24687.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24687");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24687 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24687(map_LT___$1,f__$1,ch__$1,meta24685__$1,___$2,fn1__$1,meta24688){
return (new cljs.core.async.t_cljs$core$async24687(map_LT___$1,f__$1,ch__$1,meta24685__$1,___$2,fn1__$1,meta24688));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24687(self__.map_LT_,self__.f,self__.ch,self__.meta24685,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24685","meta24685",-1209493178,null)], null);
});

cljs.core.async.t_cljs$core$async24684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24684";

cljs.core.async.t_cljs$core$async24684.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24684");
});

cljs.core.async.__GT_t_cljs$core$async24684 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24684(map_LT___$1,f__$1,ch__$1,meta24685){
return (new cljs.core.async.t_cljs$core$async24684(map_LT___$1,f__$1,ch__$1,meta24685));
});

}

return (new cljs.core.async.t_cljs$core$async24684(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24693 = (function (map_GT_,f,ch,meta24694){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24694 = meta24694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24695,meta24694__$1){
var self__ = this;
var _24695__$1 = this;
return (new cljs.core.async.t_cljs$core$async24693(self__.map_GT_,self__.f,self__.ch,meta24694__$1));
});

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24695){
var self__ = this;
var _24695__$1 = this;
return self__.meta24694;
});

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24694","meta24694",-2038803286,null)], null);
});

cljs.core.async.t_cljs$core$async24693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24693";

cljs.core.async.t_cljs$core$async24693.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24693");
});

cljs.core.async.__GT_t_cljs$core$async24693 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24693(map_GT___$1,f__$1,ch__$1,meta24694){
return (new cljs.core.async.t_cljs$core$async24693(map_GT___$1,f__$1,ch__$1,meta24694));
});

}

return (new cljs.core.async.t_cljs$core$async24693(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24699 = (function (filter_GT_,p,ch,meta24700){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24700 = meta24700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24701,meta24700__$1){
var self__ = this;
var _24701__$1 = this;
return (new cljs.core.async.t_cljs$core$async24699(self__.filter_GT_,self__.p,self__.ch,meta24700__$1));
});

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24701){
var self__ = this;
var _24701__$1 = this;
return self__.meta24700;
});

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24700","meta24700",-235496408,null)], null);
});

cljs.core.async.t_cljs$core$async24699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24699";

cljs.core.async.t_cljs$core$async24699.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24699");
});

cljs.core.async.__GT_t_cljs$core$async24699 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24699(filter_GT___$1,p__$1,ch__$1,meta24700){
return (new cljs.core.async.t_cljs$core$async24699(filter_GT___$1,p__$1,ch__$1,meta24700));
});

}

return (new cljs.core.async.t_cljs$core$async24699(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24702 = [];
var len__5651__auto___24746 = arguments.length;
var i__5652__auto___24747 = (0);
while(true){
if((i__5652__auto___24747 < len__5651__auto___24746)){
args24702.push((arguments[i__5652__auto___24747]));

var G__24748 = (i__5652__auto___24747 + (1));
i__5652__auto___24747 = G__24748;
continue;
} else {
}
break;
}

var G__24704 = args24702.length;
switch (G__24704) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24702.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19461__auto___24750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___24750,out){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___24750,out){
return (function (state_24725){
var state_val_24726 = (state_24725[(1)]);
if((state_val_24726 === (7))){
var inst_24721 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
var statearr_24727_24751 = state_24725__$1;
(statearr_24727_24751[(2)] = inst_24721);

(statearr_24727_24751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (1))){
var state_24725__$1 = state_24725;
var statearr_24728_24752 = state_24725__$1;
(statearr_24728_24752[(2)] = null);

(statearr_24728_24752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (4))){
var inst_24707 = (state_24725[(7)]);
var inst_24707__$1 = (state_24725[(2)]);
var inst_24708 = (inst_24707__$1 == null);
var state_24725__$1 = (function (){var statearr_24729 = state_24725;
(statearr_24729[(7)] = inst_24707__$1);

return statearr_24729;
})();
if(cljs.core.truth_(inst_24708)){
var statearr_24730_24753 = state_24725__$1;
(statearr_24730_24753[(1)] = (5));

} else {
var statearr_24731_24754 = state_24725__$1;
(statearr_24731_24754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (6))){
var inst_24707 = (state_24725[(7)]);
var inst_24712 = p.call(null,inst_24707);
var state_24725__$1 = state_24725;
if(cljs.core.truth_(inst_24712)){
var statearr_24732_24755 = state_24725__$1;
(statearr_24732_24755[(1)] = (8));

} else {
var statearr_24733_24756 = state_24725__$1;
(statearr_24733_24756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (3))){
var inst_24723 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24725__$1,inst_24723);
} else {
if((state_val_24726 === (2))){
var state_24725__$1 = state_24725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24725__$1,(4),ch);
} else {
if((state_val_24726 === (11))){
var inst_24715 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
var statearr_24734_24757 = state_24725__$1;
(statearr_24734_24757[(2)] = inst_24715);

(statearr_24734_24757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (9))){
var state_24725__$1 = state_24725;
var statearr_24735_24758 = state_24725__$1;
(statearr_24735_24758[(2)] = null);

(statearr_24735_24758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (5))){
var inst_24710 = cljs.core.async.close_BANG_.call(null,out);
var state_24725__$1 = state_24725;
var statearr_24736_24759 = state_24725__$1;
(statearr_24736_24759[(2)] = inst_24710);

(statearr_24736_24759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (10))){
var inst_24718 = (state_24725[(2)]);
var state_24725__$1 = (function (){var statearr_24737 = state_24725;
(statearr_24737[(8)] = inst_24718);

return statearr_24737;
})();
var statearr_24738_24760 = state_24725__$1;
(statearr_24738_24760[(2)] = null);

(statearr_24738_24760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (8))){
var inst_24707 = (state_24725[(7)]);
var state_24725__$1 = state_24725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24725__$1,(11),out,inst_24707);
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
});})(c__19461__auto___24750,out))
;
return ((function (switch__19396__auto__,c__19461__auto___24750,out){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_24742 = [null,null,null,null,null,null,null,null,null];
(statearr_24742[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_24742[(1)] = (1));

return statearr_24742;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_24725){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24743){if((e24743 instanceof Object)){
var ex__19400__auto__ = e24743;
var statearr_24744_24761 = state_24725;
(statearr_24744_24761[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24762 = state_24725;
state_24725 = G__24762;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_24725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_24725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___24750,out))
})();
var state__19463__auto__ = (function (){var statearr_24745 = f__19462__auto__.call(null);
(statearr_24745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___24750);

return statearr_24745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___24750,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24763 = [];
var len__5651__auto___24766 = arguments.length;
var i__5652__auto___24767 = (0);
while(true){
if((i__5652__auto___24767 < len__5651__auto___24766)){
args24763.push((arguments[i__5652__auto___24767]));

var G__24768 = (i__5652__auto___24767 + (1));
i__5652__auto___24767 = G__24768;
continue;
} else {
}
break;
}

var G__24765 = args24763.length;
switch (G__24765) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24763.length)].join('')));

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
var c__19461__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto__){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto__){
return (function (state_24935){
var state_val_24936 = (state_24935[(1)]);
if((state_val_24936 === (7))){
var inst_24931 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24937_24978 = state_24935__$1;
(statearr_24937_24978[(2)] = inst_24931);

(statearr_24937_24978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (20))){
var inst_24901 = (state_24935[(7)]);
var inst_24912 = (state_24935[(2)]);
var inst_24913 = cljs.core.next.call(null,inst_24901);
var inst_24887 = inst_24913;
var inst_24888 = null;
var inst_24889 = (0);
var inst_24890 = (0);
var state_24935__$1 = (function (){var statearr_24938 = state_24935;
(statearr_24938[(8)] = inst_24888);

(statearr_24938[(9)] = inst_24887);

(statearr_24938[(10)] = inst_24912);

(statearr_24938[(11)] = inst_24889);

(statearr_24938[(12)] = inst_24890);

return statearr_24938;
})();
var statearr_24939_24979 = state_24935__$1;
(statearr_24939_24979[(2)] = null);

(statearr_24939_24979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (1))){
var state_24935__$1 = state_24935;
var statearr_24940_24980 = state_24935__$1;
(statearr_24940_24980[(2)] = null);

(statearr_24940_24980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (4))){
var inst_24876 = (state_24935[(13)]);
var inst_24876__$1 = (state_24935[(2)]);
var inst_24877 = (inst_24876__$1 == null);
var state_24935__$1 = (function (){var statearr_24941 = state_24935;
(statearr_24941[(13)] = inst_24876__$1);

return statearr_24941;
})();
if(cljs.core.truth_(inst_24877)){
var statearr_24942_24981 = state_24935__$1;
(statearr_24942_24981[(1)] = (5));

} else {
var statearr_24943_24982 = state_24935__$1;
(statearr_24943_24982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (15))){
var state_24935__$1 = state_24935;
var statearr_24947_24983 = state_24935__$1;
(statearr_24947_24983[(2)] = null);

(statearr_24947_24983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (21))){
var state_24935__$1 = state_24935;
var statearr_24948_24984 = state_24935__$1;
(statearr_24948_24984[(2)] = null);

(statearr_24948_24984[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (13))){
var inst_24888 = (state_24935[(8)]);
var inst_24887 = (state_24935[(9)]);
var inst_24889 = (state_24935[(11)]);
var inst_24890 = (state_24935[(12)]);
var inst_24897 = (state_24935[(2)]);
var inst_24898 = (inst_24890 + (1));
var tmp24944 = inst_24888;
var tmp24945 = inst_24887;
var tmp24946 = inst_24889;
var inst_24887__$1 = tmp24945;
var inst_24888__$1 = tmp24944;
var inst_24889__$1 = tmp24946;
var inst_24890__$1 = inst_24898;
var state_24935__$1 = (function (){var statearr_24949 = state_24935;
(statearr_24949[(8)] = inst_24888__$1);

(statearr_24949[(9)] = inst_24887__$1);

(statearr_24949[(11)] = inst_24889__$1);

(statearr_24949[(12)] = inst_24890__$1);

(statearr_24949[(14)] = inst_24897);

return statearr_24949;
})();
var statearr_24950_24985 = state_24935__$1;
(statearr_24950_24985[(2)] = null);

(statearr_24950_24985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (22))){
var state_24935__$1 = state_24935;
var statearr_24951_24986 = state_24935__$1;
(statearr_24951_24986[(2)] = null);

(statearr_24951_24986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (6))){
var inst_24876 = (state_24935[(13)]);
var inst_24885 = f.call(null,inst_24876);
var inst_24886 = cljs.core.seq.call(null,inst_24885);
var inst_24887 = inst_24886;
var inst_24888 = null;
var inst_24889 = (0);
var inst_24890 = (0);
var state_24935__$1 = (function (){var statearr_24952 = state_24935;
(statearr_24952[(8)] = inst_24888);

(statearr_24952[(9)] = inst_24887);

(statearr_24952[(11)] = inst_24889);

(statearr_24952[(12)] = inst_24890);

return statearr_24952;
})();
var statearr_24953_24987 = state_24935__$1;
(statearr_24953_24987[(2)] = null);

(statearr_24953_24987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (17))){
var inst_24901 = (state_24935[(7)]);
var inst_24905 = cljs.core.chunk_first.call(null,inst_24901);
var inst_24906 = cljs.core.chunk_rest.call(null,inst_24901);
var inst_24907 = cljs.core.count.call(null,inst_24905);
var inst_24887 = inst_24906;
var inst_24888 = inst_24905;
var inst_24889 = inst_24907;
var inst_24890 = (0);
var state_24935__$1 = (function (){var statearr_24954 = state_24935;
(statearr_24954[(8)] = inst_24888);

(statearr_24954[(9)] = inst_24887);

(statearr_24954[(11)] = inst_24889);

(statearr_24954[(12)] = inst_24890);

return statearr_24954;
})();
var statearr_24955_24988 = state_24935__$1;
(statearr_24955_24988[(2)] = null);

(statearr_24955_24988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (3))){
var inst_24933 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24935__$1,inst_24933);
} else {
if((state_val_24936 === (12))){
var inst_24921 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24956_24989 = state_24935__$1;
(statearr_24956_24989[(2)] = inst_24921);

(statearr_24956_24989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (2))){
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24935__$1,(4),in$);
} else {
if((state_val_24936 === (23))){
var inst_24929 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24957_24990 = state_24935__$1;
(statearr_24957_24990[(2)] = inst_24929);

(statearr_24957_24990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (19))){
var inst_24916 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24958_24991 = state_24935__$1;
(statearr_24958_24991[(2)] = inst_24916);

(statearr_24958_24991[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (11))){
var inst_24887 = (state_24935[(9)]);
var inst_24901 = (state_24935[(7)]);
var inst_24901__$1 = cljs.core.seq.call(null,inst_24887);
var state_24935__$1 = (function (){var statearr_24959 = state_24935;
(statearr_24959[(7)] = inst_24901__$1);

return statearr_24959;
})();
if(inst_24901__$1){
var statearr_24960_24992 = state_24935__$1;
(statearr_24960_24992[(1)] = (14));

} else {
var statearr_24961_24993 = state_24935__$1;
(statearr_24961_24993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (9))){
var inst_24923 = (state_24935[(2)]);
var inst_24924 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24935__$1 = (function (){var statearr_24962 = state_24935;
(statearr_24962[(15)] = inst_24923);

return statearr_24962;
})();
if(cljs.core.truth_(inst_24924)){
var statearr_24963_24994 = state_24935__$1;
(statearr_24963_24994[(1)] = (21));

} else {
var statearr_24964_24995 = state_24935__$1;
(statearr_24964_24995[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (5))){
var inst_24879 = cljs.core.async.close_BANG_.call(null,out);
var state_24935__$1 = state_24935;
var statearr_24965_24996 = state_24935__$1;
(statearr_24965_24996[(2)] = inst_24879);

(statearr_24965_24996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (14))){
var inst_24901 = (state_24935[(7)]);
var inst_24903 = cljs.core.chunked_seq_QMARK_.call(null,inst_24901);
var state_24935__$1 = state_24935;
if(inst_24903){
var statearr_24966_24997 = state_24935__$1;
(statearr_24966_24997[(1)] = (17));

} else {
var statearr_24967_24998 = state_24935__$1;
(statearr_24967_24998[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (16))){
var inst_24919 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24968_24999 = state_24935__$1;
(statearr_24968_24999[(2)] = inst_24919);

(statearr_24968_24999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (10))){
var inst_24888 = (state_24935[(8)]);
var inst_24890 = (state_24935[(12)]);
var inst_24895 = cljs.core._nth.call(null,inst_24888,inst_24890);
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24935__$1,(13),out,inst_24895);
} else {
if((state_val_24936 === (18))){
var inst_24901 = (state_24935[(7)]);
var inst_24910 = cljs.core.first.call(null,inst_24901);
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24935__$1,(20),out,inst_24910);
} else {
if((state_val_24936 === (8))){
var inst_24889 = (state_24935[(11)]);
var inst_24890 = (state_24935[(12)]);
var inst_24892 = (inst_24890 < inst_24889);
var inst_24893 = inst_24892;
var state_24935__$1 = state_24935;
if(cljs.core.truth_(inst_24893)){
var statearr_24969_25000 = state_24935__$1;
(statearr_24969_25000[(1)] = (10));

} else {
var statearr_24970_25001 = state_24935__$1;
(statearr_24970_25001[(1)] = (11));

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
});})(c__19461__auto__))
;
return ((function (switch__19396__auto__,c__19461__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19397__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19397__auto____0 = (function (){
var statearr_24974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24974[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19397__auto__);

(statearr_24974[(1)] = (1));

return statearr_24974;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19397__auto____1 = (function (state_24935){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_24935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object)){
var ex__19400__auto__ = e24975;
var statearr_24976_25002 = state_24935;
(statearr_24976_25002[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25003 = state_24935;
state_24935 = G__25003;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19397__auto__ = function(state_24935){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19397__auto____1.call(this,state_24935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19397__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19397__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto__))
})();
var state__19463__auto__ = (function (){var statearr_24977 = f__19462__auto__.call(null);
(statearr_24977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto__);

return statearr_24977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto__))
);

return c__19461__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25004 = [];
var len__5651__auto___25007 = arguments.length;
var i__5652__auto___25008 = (0);
while(true){
if((i__5652__auto___25008 < len__5651__auto___25007)){
args25004.push((arguments[i__5652__auto___25008]));

var G__25009 = (i__5652__auto___25008 + (1));
i__5652__auto___25008 = G__25009;
continue;
} else {
}
break;
}

var G__25006 = args25004.length;
switch (G__25006) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25004.length)].join('')));

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
var args25011 = [];
var len__5651__auto___25014 = arguments.length;
var i__5652__auto___25015 = (0);
while(true){
if((i__5652__auto___25015 < len__5651__auto___25014)){
args25011.push((arguments[i__5652__auto___25015]));

var G__25016 = (i__5652__auto___25015 + (1));
i__5652__auto___25015 = G__25016;
continue;
} else {
}
break;
}

var G__25013 = args25011.length;
switch (G__25013) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25011.length)].join('')));

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
var args25018 = [];
var len__5651__auto___25069 = arguments.length;
var i__5652__auto___25070 = (0);
while(true){
if((i__5652__auto___25070 < len__5651__auto___25069)){
args25018.push((arguments[i__5652__auto___25070]));

var G__25071 = (i__5652__auto___25070 + (1));
i__5652__auto___25070 = G__25071;
continue;
} else {
}
break;
}

var G__25020 = args25018.length;
switch (G__25020) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25018.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19461__auto___25073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___25073,out){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___25073,out){
return (function (state_25044){
var state_val_25045 = (state_25044[(1)]);
if((state_val_25045 === (7))){
var inst_25039 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25046_25074 = state_25044__$1;
(statearr_25046_25074[(2)] = inst_25039);

(statearr_25046_25074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (1))){
var inst_25021 = null;
var state_25044__$1 = (function (){var statearr_25047 = state_25044;
(statearr_25047[(7)] = inst_25021);

return statearr_25047;
})();
var statearr_25048_25075 = state_25044__$1;
(statearr_25048_25075[(2)] = null);

(statearr_25048_25075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (4))){
var inst_25024 = (state_25044[(8)]);
var inst_25024__$1 = (state_25044[(2)]);
var inst_25025 = (inst_25024__$1 == null);
var inst_25026 = cljs.core.not.call(null,inst_25025);
var state_25044__$1 = (function (){var statearr_25049 = state_25044;
(statearr_25049[(8)] = inst_25024__$1);

return statearr_25049;
})();
if(inst_25026){
var statearr_25050_25076 = state_25044__$1;
(statearr_25050_25076[(1)] = (5));

} else {
var statearr_25051_25077 = state_25044__$1;
(statearr_25051_25077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (6))){
var state_25044__$1 = state_25044;
var statearr_25052_25078 = state_25044__$1;
(statearr_25052_25078[(2)] = null);

(statearr_25052_25078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (3))){
var inst_25041 = (state_25044[(2)]);
var inst_25042 = cljs.core.async.close_BANG_.call(null,out);
var state_25044__$1 = (function (){var statearr_25053 = state_25044;
(statearr_25053[(9)] = inst_25041);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25044__$1,inst_25042);
} else {
if((state_val_25045 === (2))){
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25044__$1,(4),ch);
} else {
if((state_val_25045 === (11))){
var inst_25024 = (state_25044[(8)]);
var inst_25033 = (state_25044[(2)]);
var inst_25021 = inst_25024;
var state_25044__$1 = (function (){var statearr_25054 = state_25044;
(statearr_25054[(7)] = inst_25021);

(statearr_25054[(10)] = inst_25033);

return statearr_25054;
})();
var statearr_25055_25079 = state_25044__$1;
(statearr_25055_25079[(2)] = null);

(statearr_25055_25079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (9))){
var inst_25024 = (state_25044[(8)]);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25044__$1,(11),out,inst_25024);
} else {
if((state_val_25045 === (5))){
var inst_25024 = (state_25044[(8)]);
var inst_25021 = (state_25044[(7)]);
var inst_25028 = cljs.core._EQ_.call(null,inst_25024,inst_25021);
var state_25044__$1 = state_25044;
if(inst_25028){
var statearr_25057_25080 = state_25044__$1;
(statearr_25057_25080[(1)] = (8));

} else {
var statearr_25058_25081 = state_25044__$1;
(statearr_25058_25081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (10))){
var inst_25036 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25059_25082 = state_25044__$1;
(statearr_25059_25082[(2)] = inst_25036);

(statearr_25059_25082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (8))){
var inst_25021 = (state_25044[(7)]);
var tmp25056 = inst_25021;
var inst_25021__$1 = tmp25056;
var state_25044__$1 = (function (){var statearr_25060 = state_25044;
(statearr_25060[(7)] = inst_25021__$1);

return statearr_25060;
})();
var statearr_25061_25083 = state_25044__$1;
(statearr_25061_25083[(2)] = null);

(statearr_25061_25083[(1)] = (2));


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
});})(c__19461__auto___25073,out))
;
return ((function (switch__19396__auto__,c__19461__auto___25073,out){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_25065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25065[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_25065[(1)] = (1));

return statearr_25065;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_25044){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_25044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e25066){if((e25066 instanceof Object)){
var ex__19400__auto__ = e25066;
var statearr_25067_25084 = state_25044;
(statearr_25067_25084[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25085 = state_25044;
state_25044 = G__25085;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_25044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_25044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___25073,out))
})();
var state__19463__auto__ = (function (){var statearr_25068 = f__19462__auto__.call(null);
(statearr_25068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___25073);

return statearr_25068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___25073,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25086 = [];
var len__5651__auto___25156 = arguments.length;
var i__5652__auto___25157 = (0);
while(true){
if((i__5652__auto___25157 < len__5651__auto___25156)){
args25086.push((arguments[i__5652__auto___25157]));

var G__25158 = (i__5652__auto___25157 + (1));
i__5652__auto___25157 = G__25158;
continue;
} else {
}
break;
}

var G__25088 = args25086.length;
switch (G__25088) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25086.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19461__auto___25160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___25160,out){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___25160,out){
return (function (state_25126){
var state_val_25127 = (state_25126[(1)]);
if((state_val_25127 === (7))){
var inst_25122 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
var statearr_25128_25161 = state_25126__$1;
(statearr_25128_25161[(2)] = inst_25122);

(statearr_25128_25161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (1))){
var inst_25089 = (new Array(n));
var inst_25090 = inst_25089;
var inst_25091 = (0);
var state_25126__$1 = (function (){var statearr_25129 = state_25126;
(statearr_25129[(7)] = inst_25091);

(statearr_25129[(8)] = inst_25090);

return statearr_25129;
})();
var statearr_25130_25162 = state_25126__$1;
(statearr_25130_25162[(2)] = null);

(statearr_25130_25162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (4))){
var inst_25094 = (state_25126[(9)]);
var inst_25094__$1 = (state_25126[(2)]);
var inst_25095 = (inst_25094__$1 == null);
var inst_25096 = cljs.core.not.call(null,inst_25095);
var state_25126__$1 = (function (){var statearr_25131 = state_25126;
(statearr_25131[(9)] = inst_25094__$1);

return statearr_25131;
})();
if(inst_25096){
var statearr_25132_25163 = state_25126__$1;
(statearr_25132_25163[(1)] = (5));

} else {
var statearr_25133_25164 = state_25126__$1;
(statearr_25133_25164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (15))){
var inst_25116 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
var statearr_25134_25165 = state_25126__$1;
(statearr_25134_25165[(2)] = inst_25116);

(statearr_25134_25165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (13))){
var state_25126__$1 = state_25126;
var statearr_25135_25166 = state_25126__$1;
(statearr_25135_25166[(2)] = null);

(statearr_25135_25166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (6))){
var inst_25091 = (state_25126[(7)]);
var inst_25112 = (inst_25091 > (0));
var state_25126__$1 = state_25126;
if(cljs.core.truth_(inst_25112)){
var statearr_25136_25167 = state_25126__$1;
(statearr_25136_25167[(1)] = (12));

} else {
var statearr_25137_25168 = state_25126__$1;
(statearr_25137_25168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (3))){
var inst_25124 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25126__$1,inst_25124);
} else {
if((state_val_25127 === (12))){
var inst_25090 = (state_25126[(8)]);
var inst_25114 = cljs.core.vec.call(null,inst_25090);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25126__$1,(15),out,inst_25114);
} else {
if((state_val_25127 === (2))){
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25126__$1,(4),ch);
} else {
if((state_val_25127 === (11))){
var inst_25106 = (state_25126[(2)]);
var inst_25107 = (new Array(n));
var inst_25090 = inst_25107;
var inst_25091 = (0);
var state_25126__$1 = (function (){var statearr_25138 = state_25126;
(statearr_25138[(7)] = inst_25091);

(statearr_25138[(8)] = inst_25090);

(statearr_25138[(10)] = inst_25106);

return statearr_25138;
})();
var statearr_25139_25169 = state_25126__$1;
(statearr_25139_25169[(2)] = null);

(statearr_25139_25169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (9))){
var inst_25090 = (state_25126[(8)]);
var inst_25104 = cljs.core.vec.call(null,inst_25090);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25126__$1,(11),out,inst_25104);
} else {
if((state_val_25127 === (5))){
var inst_25091 = (state_25126[(7)]);
var inst_25090 = (state_25126[(8)]);
var inst_25094 = (state_25126[(9)]);
var inst_25099 = (state_25126[(11)]);
var inst_25098 = (inst_25090[inst_25091] = inst_25094);
var inst_25099__$1 = (inst_25091 + (1));
var inst_25100 = (inst_25099__$1 < n);
var state_25126__$1 = (function (){var statearr_25140 = state_25126;
(statearr_25140[(12)] = inst_25098);

(statearr_25140[(11)] = inst_25099__$1);

return statearr_25140;
})();
if(cljs.core.truth_(inst_25100)){
var statearr_25141_25170 = state_25126__$1;
(statearr_25141_25170[(1)] = (8));

} else {
var statearr_25142_25171 = state_25126__$1;
(statearr_25142_25171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (14))){
var inst_25119 = (state_25126[(2)]);
var inst_25120 = cljs.core.async.close_BANG_.call(null,out);
var state_25126__$1 = (function (){var statearr_25144 = state_25126;
(statearr_25144[(13)] = inst_25119);

return statearr_25144;
})();
var statearr_25145_25172 = state_25126__$1;
(statearr_25145_25172[(2)] = inst_25120);

(statearr_25145_25172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (10))){
var inst_25110 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
var statearr_25146_25173 = state_25126__$1;
(statearr_25146_25173[(2)] = inst_25110);

(statearr_25146_25173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (8))){
var inst_25090 = (state_25126[(8)]);
var inst_25099 = (state_25126[(11)]);
var tmp25143 = inst_25090;
var inst_25090__$1 = tmp25143;
var inst_25091 = inst_25099;
var state_25126__$1 = (function (){var statearr_25147 = state_25126;
(statearr_25147[(7)] = inst_25091);

(statearr_25147[(8)] = inst_25090__$1);

return statearr_25147;
})();
var statearr_25148_25174 = state_25126__$1;
(statearr_25148_25174[(2)] = null);

(statearr_25148_25174[(1)] = (2));


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
});})(c__19461__auto___25160,out))
;
return ((function (switch__19396__auto__,c__19461__auto___25160,out){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_25152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25152[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_25152[(1)] = (1));

return statearr_25152;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_25126){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_25126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e25153){if((e25153 instanceof Object)){
var ex__19400__auto__ = e25153;
var statearr_25154_25175 = state_25126;
(statearr_25154_25175[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25176 = state_25126;
state_25126 = G__25176;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_25126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_25126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___25160,out))
})();
var state__19463__auto__ = (function (){var statearr_25155 = f__19462__auto__.call(null);
(statearr_25155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___25160);

return statearr_25155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___25160,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25177 = [];
var len__5651__auto___25251 = arguments.length;
var i__5652__auto___25252 = (0);
while(true){
if((i__5652__auto___25252 < len__5651__auto___25251)){
args25177.push((arguments[i__5652__auto___25252]));

var G__25253 = (i__5652__auto___25252 + (1));
i__5652__auto___25252 = G__25253;
continue;
} else {
}
break;
}

var G__25179 = args25177.length;
switch (G__25179) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25177.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19461__auto___25255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19461__auto___25255,out){
return (function (){
var f__19462__auto__ = (function (){var switch__19396__auto__ = ((function (c__19461__auto___25255,out){
return (function (state_25221){
var state_val_25222 = (state_25221[(1)]);
if((state_val_25222 === (7))){
var inst_25217 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25223_25256 = state_25221__$1;
(statearr_25223_25256[(2)] = inst_25217);

(statearr_25223_25256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (1))){
var inst_25180 = [];
var inst_25181 = inst_25180;
var inst_25182 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25221__$1 = (function (){var statearr_25224 = state_25221;
(statearr_25224[(7)] = inst_25181);

(statearr_25224[(8)] = inst_25182);

return statearr_25224;
})();
var statearr_25225_25257 = state_25221__$1;
(statearr_25225_25257[(2)] = null);

(statearr_25225_25257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (4))){
var inst_25185 = (state_25221[(9)]);
var inst_25185__$1 = (state_25221[(2)]);
var inst_25186 = (inst_25185__$1 == null);
var inst_25187 = cljs.core.not.call(null,inst_25186);
var state_25221__$1 = (function (){var statearr_25226 = state_25221;
(statearr_25226[(9)] = inst_25185__$1);

return statearr_25226;
})();
if(inst_25187){
var statearr_25227_25258 = state_25221__$1;
(statearr_25227_25258[(1)] = (5));

} else {
var statearr_25228_25259 = state_25221__$1;
(statearr_25228_25259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (15))){
var inst_25211 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25229_25260 = state_25221__$1;
(statearr_25229_25260[(2)] = inst_25211);

(statearr_25229_25260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (13))){
var state_25221__$1 = state_25221;
var statearr_25230_25261 = state_25221__$1;
(statearr_25230_25261[(2)] = null);

(statearr_25230_25261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (6))){
var inst_25181 = (state_25221[(7)]);
var inst_25206 = inst_25181.length;
var inst_25207 = (inst_25206 > (0));
var state_25221__$1 = state_25221;
if(cljs.core.truth_(inst_25207)){
var statearr_25231_25262 = state_25221__$1;
(statearr_25231_25262[(1)] = (12));

} else {
var statearr_25232_25263 = state_25221__$1;
(statearr_25232_25263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (3))){
var inst_25219 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25221__$1,inst_25219);
} else {
if((state_val_25222 === (12))){
var inst_25181 = (state_25221[(7)]);
var inst_25209 = cljs.core.vec.call(null,inst_25181);
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25221__$1,(15),out,inst_25209);
} else {
if((state_val_25222 === (2))){
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25221__$1,(4),ch);
} else {
if((state_val_25222 === (11))){
var inst_25189 = (state_25221[(10)]);
var inst_25185 = (state_25221[(9)]);
var inst_25199 = (state_25221[(2)]);
var inst_25200 = [];
var inst_25201 = inst_25200.push(inst_25185);
var inst_25181 = inst_25200;
var inst_25182 = inst_25189;
var state_25221__$1 = (function (){var statearr_25233 = state_25221;
(statearr_25233[(7)] = inst_25181);

(statearr_25233[(11)] = inst_25199);

(statearr_25233[(12)] = inst_25201);

(statearr_25233[(8)] = inst_25182);

return statearr_25233;
})();
var statearr_25234_25264 = state_25221__$1;
(statearr_25234_25264[(2)] = null);

(statearr_25234_25264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (9))){
var inst_25181 = (state_25221[(7)]);
var inst_25197 = cljs.core.vec.call(null,inst_25181);
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25221__$1,(11),out,inst_25197);
} else {
if((state_val_25222 === (5))){
var inst_25182 = (state_25221[(8)]);
var inst_25189 = (state_25221[(10)]);
var inst_25185 = (state_25221[(9)]);
var inst_25189__$1 = f.call(null,inst_25185);
var inst_25190 = cljs.core._EQ_.call(null,inst_25189__$1,inst_25182);
var inst_25191 = cljs.core.keyword_identical_QMARK_.call(null,inst_25182,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25192 = (inst_25190) || (inst_25191);
var state_25221__$1 = (function (){var statearr_25235 = state_25221;
(statearr_25235[(10)] = inst_25189__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25192)){
var statearr_25236_25265 = state_25221__$1;
(statearr_25236_25265[(1)] = (8));

} else {
var statearr_25237_25266 = state_25221__$1;
(statearr_25237_25266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (14))){
var inst_25214 = (state_25221[(2)]);
var inst_25215 = cljs.core.async.close_BANG_.call(null,out);
var state_25221__$1 = (function (){var statearr_25239 = state_25221;
(statearr_25239[(13)] = inst_25214);

return statearr_25239;
})();
var statearr_25240_25267 = state_25221__$1;
(statearr_25240_25267[(2)] = inst_25215);

(statearr_25240_25267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (10))){
var inst_25204 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25241_25268 = state_25221__$1;
(statearr_25241_25268[(2)] = inst_25204);

(statearr_25241_25268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (8))){
var inst_25181 = (state_25221[(7)]);
var inst_25189 = (state_25221[(10)]);
var inst_25185 = (state_25221[(9)]);
var inst_25194 = inst_25181.push(inst_25185);
var tmp25238 = inst_25181;
var inst_25181__$1 = tmp25238;
var inst_25182 = inst_25189;
var state_25221__$1 = (function (){var statearr_25242 = state_25221;
(statearr_25242[(7)] = inst_25181__$1);

(statearr_25242[(8)] = inst_25182);

(statearr_25242[(14)] = inst_25194);

return statearr_25242;
})();
var statearr_25243_25269 = state_25221__$1;
(statearr_25243_25269[(2)] = null);

(statearr_25243_25269[(1)] = (2));


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
});})(c__19461__auto___25255,out))
;
return ((function (switch__19396__auto__,c__19461__auto___25255,out){
return (function() {
var cljs$core$async$state_machine__19397__auto__ = null;
var cljs$core$async$state_machine__19397__auto____0 = (function (){
var statearr_25247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25247[(0)] = cljs$core$async$state_machine__19397__auto__);

(statearr_25247[(1)] = (1));

return statearr_25247;
});
var cljs$core$async$state_machine__19397__auto____1 = (function (state_25221){
while(true){
var ret_value__19398__auto__ = (function (){try{while(true){
var result__19399__auto__ = switch__19396__auto__.call(null,state_25221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19399__auto__;
}
break;
}
}catch (e25248){if((e25248 instanceof Object)){
var ex__19400__auto__ = e25248;
var statearr_25249_25270 = state_25221;
(statearr_25249_25270[(5)] = ex__19400__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25271 = state_25221;
state_25221 = G__25271;
continue;
} else {
return ret_value__19398__auto__;
}
break;
}
});
cljs$core$async$state_machine__19397__auto__ = function(state_25221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19397__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19397__auto____1.call(this,state_25221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19397__auto____0;
cljs$core$async$state_machine__19397__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19397__auto____1;
return cljs$core$async$state_machine__19397__auto__;
})()
;})(switch__19396__auto__,c__19461__auto___25255,out))
})();
var state__19463__auto__ = (function (){var statearr_25250 = f__19462__auto__.call(null);
(statearr_25250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19461__auto___25255);

return statearr_25250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19463__auto__);
});})(c__19461__auto___25255,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map