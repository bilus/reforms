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
if(typeof cljs.core.async.t_cljs$core$async22801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22801 = (function (fn_handler,f,meta22802){
this.fn_handler = fn_handler;
this.f = f;
this.meta22802 = meta22802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22803,meta22802__$1){
var self__ = this;
var _22803__$1 = this;
return (new cljs.core.async.t_cljs$core$async22801(self__.fn_handler,self__.f,meta22802__$1));
});

cljs.core.async.t_cljs$core$async22801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22803){
var self__ = this;
var _22803__$1 = this;
return self__.meta22802;
});

cljs.core.async.t_cljs$core$async22801.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22802","meta22802",-1065368131,null)], null);
});

cljs.core.async.t_cljs$core$async22801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22801";

cljs.core.async.t_cljs$core$async22801.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async22801");
});

cljs.core.async.__GT_t_cljs$core$async22801 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22801(fn_handler__$1,f__$1,meta22802){
return (new cljs.core.async.t_cljs$core$async22801(fn_handler__$1,f__$1,meta22802));
});

}

return (new cljs.core.async.t_cljs$core$async22801(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args22806 = [];
var len__5651__auto___22809 = arguments.length;
var i__5652__auto___22810 = (0);
while(true){
if((i__5652__auto___22810 < len__5651__auto___22809)){
args22806.push((arguments[i__5652__auto___22810]));

var G__22811 = (i__5652__auto___22810 + (1));
i__5652__auto___22810 = G__22811;
continue;
} else {
}
break;
}

var G__22808 = args22806.length;
switch (G__22808) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22806.length)].join('')));

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
var args22813 = [];
var len__5651__auto___22816 = arguments.length;
var i__5652__auto___22817 = (0);
while(true){
if((i__5652__auto___22817 < len__5651__auto___22816)){
args22813.push((arguments[i__5652__auto___22817]));

var G__22818 = (i__5652__auto___22817 + (1));
i__5652__auto___22817 = G__22818;
continue;
} else {
}
break;
}

var G__22815 = args22813.length;
switch (G__22815) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22813.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22820 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22820);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22820,ret){
return (function (){
return fn1.call(null,val_22820);
});})(val_22820,ret))
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
var args22821 = [];
var len__5651__auto___22824 = arguments.length;
var i__5652__auto___22825 = (0);
while(true){
if((i__5652__auto___22825 < len__5651__auto___22824)){
args22821.push((arguments[i__5652__auto___22825]));

var G__22826 = (i__5652__auto___22825 + (1));
i__5652__auto___22825 = G__22826;
continue;
} else {
}
break;
}

var G__22823 = args22821.length;
switch (G__22823) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22821.length)].join('')));

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
var n__5496__auto___22828 = n;
var x_22829 = (0);
while(true){
if((x_22829 < n__5496__auto___22828)){
(a[x_22829] = (0));

var G__22830 = (x_22829 + (1));
x_22829 = G__22830;
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

var G__22831 = (i + (1));
i = G__22831;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22835 = (function (alt_flag,flag,meta22836){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22836 = meta22836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22837,meta22836__$1){
var self__ = this;
var _22837__$1 = this;
return (new cljs.core.async.t_cljs$core$async22835(self__.alt_flag,self__.flag,meta22836__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22837){
var self__ = this;
var _22837__$1 = this;
return self__.meta22836;
});})(flag))
;

cljs.core.async.t_cljs$core$async22835.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22835.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22836","meta22836",-180608116,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22835";

cljs.core.async.t_cljs$core$async22835.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async22835");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22835 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22835(alt_flag__$1,flag__$1,meta22836){
return (new cljs.core.async.t_cljs$core$async22835(alt_flag__$1,flag__$1,meta22836));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22835(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22841 = (function (alt_handler,flag,cb,meta22842){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22842 = meta22842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22843,meta22842__$1){
var self__ = this;
var _22843__$1 = this;
return (new cljs.core.async.t_cljs$core$async22841(self__.alt_handler,self__.flag,self__.cb,meta22842__$1));
});

cljs.core.async.t_cljs$core$async22841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22843){
var self__ = this;
var _22843__$1 = this;
return self__.meta22842;
});

cljs.core.async.t_cljs$core$async22841.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22842","meta22842",-503487463,null)], null);
});

cljs.core.async.t_cljs$core$async22841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22841";

cljs.core.async.t_cljs$core$async22841.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async22841");
});

cljs.core.async.__GT_t_cljs$core$async22841 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22841(alt_handler__$1,flag__$1,cb__$1,meta22842){
return (new cljs.core.async.t_cljs$core$async22841(alt_handler__$1,flag__$1,cb__$1,meta22842));
});

}

return (new cljs.core.async.t_cljs$core$async22841(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22844_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22844_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22845_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22845_SHARP_,port], null));
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
var G__22846 = (i + (1));
i = G__22846;
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
var len__5651__auto___22852 = arguments.length;
var i__5652__auto___22853 = (0);
while(true){
if((i__5652__auto___22853 < len__5651__auto___22852)){
args__5658__auto__.push((arguments[i__5652__auto___22853]));

var G__22854 = (i__5652__auto___22853 + (1));
i__5652__auto___22853 = G__22854;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22849){
var map__22850 = p__22849;
var map__22850__$1 = ((((!((map__22850 == null)))?((((map__22850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22850):map__22850);
var opts = map__22850__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22847){
var G__22848 = cljs.core.first.call(null,seq22847);
var seq22847__$1 = cljs.core.next.call(null,seq22847);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22848,seq22847__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22855 = [];
var len__5651__auto___22905 = arguments.length;
var i__5652__auto___22906 = (0);
while(true){
if((i__5652__auto___22906 < len__5651__auto___22905)){
args22855.push((arguments[i__5652__auto___22906]));

var G__22907 = (i__5652__auto___22906 + (1));
i__5652__auto___22906 = G__22907;
continue;
} else {
}
break;
}

var G__22857 = args22855.length;
switch (G__22857) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22855.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19653__auto___22909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___22909){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___22909){
return (function (state_22881){
var state_val_22882 = (state_22881[(1)]);
if((state_val_22882 === (7))){
var inst_22877 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22883_22910 = state_22881__$1;
(statearr_22883_22910[(2)] = inst_22877);

(statearr_22883_22910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (1))){
var state_22881__$1 = state_22881;
var statearr_22884_22911 = state_22881__$1;
(statearr_22884_22911[(2)] = null);

(statearr_22884_22911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (4))){
var inst_22860 = (state_22881[(7)]);
var inst_22860__$1 = (state_22881[(2)]);
var inst_22861 = (inst_22860__$1 == null);
var state_22881__$1 = (function (){var statearr_22885 = state_22881;
(statearr_22885[(7)] = inst_22860__$1);

return statearr_22885;
})();
if(cljs.core.truth_(inst_22861)){
var statearr_22886_22912 = state_22881__$1;
(statearr_22886_22912[(1)] = (5));

} else {
var statearr_22887_22913 = state_22881__$1;
(statearr_22887_22913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (13))){
var state_22881__$1 = state_22881;
var statearr_22888_22914 = state_22881__$1;
(statearr_22888_22914[(2)] = null);

(statearr_22888_22914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (6))){
var inst_22860 = (state_22881[(7)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22881__$1,(11),to,inst_22860);
} else {
if((state_val_22882 === (3))){
var inst_22879 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22881__$1,inst_22879);
} else {
if((state_val_22882 === (12))){
var state_22881__$1 = state_22881;
var statearr_22889_22915 = state_22881__$1;
(statearr_22889_22915[(2)] = null);

(statearr_22889_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (2))){
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22881__$1,(4),from);
} else {
if((state_val_22882 === (11))){
var inst_22870 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
if(cljs.core.truth_(inst_22870)){
var statearr_22890_22916 = state_22881__$1;
(statearr_22890_22916[(1)] = (12));

} else {
var statearr_22891_22917 = state_22881__$1;
(statearr_22891_22917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (9))){
var state_22881__$1 = state_22881;
var statearr_22892_22918 = state_22881__$1;
(statearr_22892_22918[(2)] = null);

(statearr_22892_22918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (5))){
var state_22881__$1 = state_22881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22893_22919 = state_22881__$1;
(statearr_22893_22919[(1)] = (8));

} else {
var statearr_22894_22920 = state_22881__$1;
(statearr_22894_22920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (14))){
var inst_22875 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22895_22921 = state_22881__$1;
(statearr_22895_22921[(2)] = inst_22875);

(statearr_22895_22921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (10))){
var inst_22867 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22896_22922 = state_22881__$1;
(statearr_22896_22922[(2)] = inst_22867);

(statearr_22896_22922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (8))){
var inst_22864 = cljs.core.async.close_BANG_.call(null,to);
var state_22881__$1 = state_22881;
var statearr_22897_22923 = state_22881__$1;
(statearr_22897_22923[(2)] = inst_22864);

(statearr_22897_22923[(1)] = (10));


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
});})(c__19653__auto___22909))
;
return ((function (switch__19588__auto__,c__19653__auto___22909){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_22901 = [null,null,null,null,null,null,null,null];
(statearr_22901[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_22901[(1)] = (1));

return statearr_22901;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_22881){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_22881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e22902){if((e22902 instanceof Object)){
var ex__19592__auto__ = e22902;
var statearr_22903_22924 = state_22881;
(statearr_22903_22924[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22925 = state_22881;
state_22881 = G__22925;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_22881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_22881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___22909))
})();
var state__19655__auto__ = (function (){var statearr_22904 = f__19654__auto__.call(null);
(statearr_22904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___22909);

return statearr_22904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___22909))
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
return (function (p__23109){
var vec__23110 = p__23109;
var v = cljs.core.nth.call(null,vec__23110,(0),null);
var p = cljs.core.nth.call(null,vec__23110,(1),null);
var job = vec__23110;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19653__auto___23292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___23292,res,vec__23110,v,p,job,jobs,results){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___23292,res,vec__23110,v,p,job,jobs,results){
return (function (state_23115){
var state_val_23116 = (state_23115[(1)]);
if((state_val_23116 === (1))){
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23115__$1,(2),res,v);
} else {
if((state_val_23116 === (2))){
var inst_23112 = (state_23115[(2)]);
var inst_23113 = cljs.core.async.close_BANG_.call(null,res);
var state_23115__$1 = (function (){var statearr_23117 = state_23115;
(statearr_23117[(7)] = inst_23112);

return statearr_23117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23115__$1,inst_23113);
} else {
return null;
}
}
});})(c__19653__auto___23292,res,vec__23110,v,p,job,jobs,results))
;
return ((function (switch__19588__auto__,c__19653__auto___23292,res,vec__23110,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0 = (function (){
var statearr_23121 = [null,null,null,null,null,null,null,null];
(statearr_23121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__);

(statearr_23121[(1)] = (1));

return statearr_23121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1 = (function (state_23115){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23122){if((e23122 instanceof Object)){
var ex__19592__auto__ = e23122;
var statearr_23123_23293 = state_23115;
(statearr_23123_23293[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23294 = state_23115;
state_23115 = G__23294;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___23292,res,vec__23110,v,p,job,jobs,results))
})();
var state__19655__auto__ = (function (){var statearr_23124 = f__19654__auto__.call(null);
(statearr_23124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___23292);

return statearr_23124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___23292,res,vec__23110,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23125){
var vec__23126 = p__23125;
var v = cljs.core.nth.call(null,vec__23126,(0),null);
var p = cljs.core.nth.call(null,vec__23126,(1),null);
var job = vec__23126;
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
var n__5496__auto___23295 = n;
var __23296 = (0);
while(true){
if((__23296 < n__5496__auto___23295)){
var G__23127_23297 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23127_23297) {
case "compute":
var c__19653__auto___23299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23296,c__19653__auto___23299,G__23127_23297,n__5496__auto___23295,jobs,results,process,async){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (__23296,c__19653__auto___23299,G__23127_23297,n__5496__auto___23295,jobs,results,process,async){
return (function (state_23140){
var state_val_23141 = (state_23140[(1)]);
if((state_val_23141 === (1))){
var state_23140__$1 = state_23140;
var statearr_23142_23300 = state_23140__$1;
(statearr_23142_23300[(2)] = null);

(statearr_23142_23300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (2))){
var state_23140__$1 = state_23140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23140__$1,(4),jobs);
} else {
if((state_val_23141 === (3))){
var inst_23138 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23140__$1,inst_23138);
} else {
if((state_val_23141 === (4))){
var inst_23130 = (state_23140[(2)]);
var inst_23131 = process.call(null,inst_23130);
var state_23140__$1 = state_23140;
if(cljs.core.truth_(inst_23131)){
var statearr_23143_23301 = state_23140__$1;
(statearr_23143_23301[(1)] = (5));

} else {
var statearr_23144_23302 = state_23140__$1;
(statearr_23144_23302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (5))){
var state_23140__$1 = state_23140;
var statearr_23145_23303 = state_23140__$1;
(statearr_23145_23303[(2)] = null);

(statearr_23145_23303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (6))){
var state_23140__$1 = state_23140;
var statearr_23146_23304 = state_23140__$1;
(statearr_23146_23304[(2)] = null);

(statearr_23146_23304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (7))){
var inst_23136 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
var statearr_23147_23305 = state_23140__$1;
(statearr_23147_23305[(2)] = inst_23136);

(statearr_23147_23305[(1)] = (3));


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
});})(__23296,c__19653__auto___23299,G__23127_23297,n__5496__auto___23295,jobs,results,process,async))
;
return ((function (__23296,switch__19588__auto__,c__19653__auto___23299,G__23127_23297,n__5496__auto___23295,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0 = (function (){
var statearr_23151 = [null,null,null,null,null,null,null];
(statearr_23151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__);

(statearr_23151[(1)] = (1));

return statearr_23151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1 = (function (state_23140){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23152){if((e23152 instanceof Object)){
var ex__19592__auto__ = e23152;
var statearr_23153_23306 = state_23140;
(statearr_23153_23306[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23307 = state_23140;
state_23140 = G__23307;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = function(state_23140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1.call(this,state_23140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__;
})()
;})(__23296,switch__19588__auto__,c__19653__auto___23299,G__23127_23297,n__5496__auto___23295,jobs,results,process,async))
})();
var state__19655__auto__ = (function (){var statearr_23154 = f__19654__auto__.call(null);
(statearr_23154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___23299);

return statearr_23154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(__23296,c__19653__auto___23299,G__23127_23297,n__5496__auto___23295,jobs,results,process,async))
);


break;
case "async":
var c__19653__auto___23308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23296,c__19653__auto___23308,G__23127_23297,n__5496__auto___23295,jobs,results,process,async){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (__23296,c__19653__auto___23308,G__23127_23297,n__5496__auto___23295,jobs,results,process,async){
return (function (state_23167){
var state_val_23168 = (state_23167[(1)]);
if((state_val_23168 === (1))){
var state_23167__$1 = state_23167;
var statearr_23169_23309 = state_23167__$1;
(statearr_23169_23309[(2)] = null);

(statearr_23169_23309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (2))){
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23167__$1,(4),jobs);
} else {
if((state_val_23168 === (3))){
var inst_23165 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23167__$1,inst_23165);
} else {
if((state_val_23168 === (4))){
var inst_23157 = (state_23167[(2)]);
var inst_23158 = async.call(null,inst_23157);
var state_23167__$1 = state_23167;
if(cljs.core.truth_(inst_23158)){
var statearr_23170_23310 = state_23167__$1;
(statearr_23170_23310[(1)] = (5));

} else {
var statearr_23171_23311 = state_23167__$1;
(statearr_23171_23311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (5))){
var state_23167__$1 = state_23167;
var statearr_23172_23312 = state_23167__$1;
(statearr_23172_23312[(2)] = null);

(statearr_23172_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (6))){
var state_23167__$1 = state_23167;
var statearr_23173_23313 = state_23167__$1;
(statearr_23173_23313[(2)] = null);

(statearr_23173_23313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (7))){
var inst_23163 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23174_23314 = state_23167__$1;
(statearr_23174_23314[(2)] = inst_23163);

(statearr_23174_23314[(1)] = (3));


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
});})(__23296,c__19653__auto___23308,G__23127_23297,n__5496__auto___23295,jobs,results,process,async))
;
return ((function (__23296,switch__19588__auto__,c__19653__auto___23308,G__23127_23297,n__5496__auto___23295,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0 = (function (){
var statearr_23178 = [null,null,null,null,null,null,null];
(statearr_23178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__);

(statearr_23178[(1)] = (1));

return statearr_23178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1 = (function (state_23167){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23179){if((e23179 instanceof Object)){
var ex__19592__auto__ = e23179;
var statearr_23180_23315 = state_23167;
(statearr_23180_23315[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23316 = state_23167;
state_23167 = G__23316;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = function(state_23167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1.call(this,state_23167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__;
})()
;})(__23296,switch__19588__auto__,c__19653__auto___23308,G__23127_23297,n__5496__auto___23295,jobs,results,process,async))
})();
var state__19655__auto__ = (function (){var statearr_23181 = f__19654__auto__.call(null);
(statearr_23181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___23308);

return statearr_23181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(__23296,c__19653__auto___23308,G__23127_23297,n__5496__auto___23295,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23317 = (__23296 + (1));
__23296 = G__23317;
continue;
} else {
}
break;
}

var c__19653__auto___23318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___23318,jobs,results,process,async){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___23318,jobs,results,process,async){
return (function (state_23203){
var state_val_23204 = (state_23203[(1)]);
if((state_val_23204 === (1))){
var state_23203__$1 = state_23203;
var statearr_23205_23319 = state_23203__$1;
(statearr_23205_23319[(2)] = null);

(statearr_23205_23319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (2))){
var state_23203__$1 = state_23203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23203__$1,(4),from);
} else {
if((state_val_23204 === (3))){
var inst_23201 = (state_23203[(2)]);
var state_23203__$1 = state_23203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23203__$1,inst_23201);
} else {
if((state_val_23204 === (4))){
var inst_23184 = (state_23203[(7)]);
var inst_23184__$1 = (state_23203[(2)]);
var inst_23185 = (inst_23184__$1 == null);
var state_23203__$1 = (function (){var statearr_23206 = state_23203;
(statearr_23206[(7)] = inst_23184__$1);

return statearr_23206;
})();
if(cljs.core.truth_(inst_23185)){
var statearr_23207_23320 = state_23203__$1;
(statearr_23207_23320[(1)] = (5));

} else {
var statearr_23208_23321 = state_23203__$1;
(statearr_23208_23321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (5))){
var inst_23187 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23203__$1 = state_23203;
var statearr_23209_23322 = state_23203__$1;
(statearr_23209_23322[(2)] = inst_23187);

(statearr_23209_23322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (6))){
var inst_23189 = (state_23203[(8)]);
var inst_23184 = (state_23203[(7)]);
var inst_23189__$1 = cljs.core.async.chan.call(null,(1));
var inst_23190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23191 = [inst_23184,inst_23189__$1];
var inst_23192 = (new cljs.core.PersistentVector(null,2,(5),inst_23190,inst_23191,null));
var state_23203__$1 = (function (){var statearr_23210 = state_23203;
(statearr_23210[(8)] = inst_23189__$1);

return statearr_23210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23203__$1,(8),jobs,inst_23192);
} else {
if((state_val_23204 === (7))){
var inst_23199 = (state_23203[(2)]);
var state_23203__$1 = state_23203;
var statearr_23211_23323 = state_23203__$1;
(statearr_23211_23323[(2)] = inst_23199);

(statearr_23211_23323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23204 === (8))){
var inst_23189 = (state_23203[(8)]);
var inst_23194 = (state_23203[(2)]);
var state_23203__$1 = (function (){var statearr_23212 = state_23203;
(statearr_23212[(9)] = inst_23194);

return statearr_23212;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23203__$1,(9),results,inst_23189);
} else {
if((state_val_23204 === (9))){
var inst_23196 = (state_23203[(2)]);
var state_23203__$1 = (function (){var statearr_23213 = state_23203;
(statearr_23213[(10)] = inst_23196);

return statearr_23213;
})();
var statearr_23214_23324 = state_23203__$1;
(statearr_23214_23324[(2)] = null);

(statearr_23214_23324[(1)] = (2));


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
});})(c__19653__auto___23318,jobs,results,process,async))
;
return ((function (switch__19588__auto__,c__19653__auto___23318,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0 = (function (){
var statearr_23218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__);

(statearr_23218[(1)] = (1));

return statearr_23218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1 = (function (state_23203){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23219){if((e23219 instanceof Object)){
var ex__19592__auto__ = e23219;
var statearr_23220_23325 = state_23203;
(statearr_23220_23325[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23326 = state_23203;
state_23203 = G__23326;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = function(state_23203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1.call(this,state_23203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___23318,jobs,results,process,async))
})();
var state__19655__auto__ = (function (){var statearr_23221 = f__19654__auto__.call(null);
(statearr_23221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___23318);

return statearr_23221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___23318,jobs,results,process,async))
);


var c__19653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto__,jobs,results,process,async){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto__,jobs,results,process,async){
return (function (state_23259){
var state_val_23260 = (state_23259[(1)]);
if((state_val_23260 === (7))){
var inst_23255 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23261_23327 = state_23259__$1;
(statearr_23261_23327[(2)] = inst_23255);

(statearr_23261_23327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (20))){
var state_23259__$1 = state_23259;
var statearr_23262_23328 = state_23259__$1;
(statearr_23262_23328[(2)] = null);

(statearr_23262_23328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (1))){
var state_23259__$1 = state_23259;
var statearr_23263_23329 = state_23259__$1;
(statearr_23263_23329[(2)] = null);

(statearr_23263_23329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (4))){
var inst_23224 = (state_23259[(7)]);
var inst_23224__$1 = (state_23259[(2)]);
var inst_23225 = (inst_23224__$1 == null);
var state_23259__$1 = (function (){var statearr_23264 = state_23259;
(statearr_23264[(7)] = inst_23224__$1);

return statearr_23264;
})();
if(cljs.core.truth_(inst_23225)){
var statearr_23265_23330 = state_23259__$1;
(statearr_23265_23330[(1)] = (5));

} else {
var statearr_23266_23331 = state_23259__$1;
(statearr_23266_23331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (15))){
var inst_23237 = (state_23259[(8)]);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23259__$1,(18),to,inst_23237);
} else {
if((state_val_23260 === (21))){
var inst_23250 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23267_23332 = state_23259__$1;
(statearr_23267_23332[(2)] = inst_23250);

(statearr_23267_23332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (13))){
var inst_23252 = (state_23259[(2)]);
var state_23259__$1 = (function (){var statearr_23268 = state_23259;
(statearr_23268[(9)] = inst_23252);

return statearr_23268;
})();
var statearr_23269_23333 = state_23259__$1;
(statearr_23269_23333[(2)] = null);

(statearr_23269_23333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (6))){
var inst_23224 = (state_23259[(7)]);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23259__$1,(11),inst_23224);
} else {
if((state_val_23260 === (17))){
var inst_23245 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
if(cljs.core.truth_(inst_23245)){
var statearr_23270_23334 = state_23259__$1;
(statearr_23270_23334[(1)] = (19));

} else {
var statearr_23271_23335 = state_23259__$1;
(statearr_23271_23335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (3))){
var inst_23257 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23259__$1,inst_23257);
} else {
if((state_val_23260 === (12))){
var inst_23234 = (state_23259[(10)]);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23259__$1,(14),inst_23234);
} else {
if((state_val_23260 === (2))){
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23259__$1,(4),results);
} else {
if((state_val_23260 === (19))){
var state_23259__$1 = state_23259;
var statearr_23272_23336 = state_23259__$1;
(statearr_23272_23336[(2)] = null);

(statearr_23272_23336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (11))){
var inst_23234 = (state_23259[(2)]);
var state_23259__$1 = (function (){var statearr_23273 = state_23259;
(statearr_23273[(10)] = inst_23234);

return statearr_23273;
})();
var statearr_23274_23337 = state_23259__$1;
(statearr_23274_23337[(2)] = null);

(statearr_23274_23337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (9))){
var state_23259__$1 = state_23259;
var statearr_23275_23338 = state_23259__$1;
(statearr_23275_23338[(2)] = null);

(statearr_23275_23338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (5))){
var state_23259__$1 = state_23259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23276_23339 = state_23259__$1;
(statearr_23276_23339[(1)] = (8));

} else {
var statearr_23277_23340 = state_23259__$1;
(statearr_23277_23340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (14))){
var inst_23239 = (state_23259[(11)]);
var inst_23237 = (state_23259[(8)]);
var inst_23237__$1 = (state_23259[(2)]);
var inst_23238 = (inst_23237__$1 == null);
var inst_23239__$1 = cljs.core.not.call(null,inst_23238);
var state_23259__$1 = (function (){var statearr_23278 = state_23259;
(statearr_23278[(11)] = inst_23239__$1);

(statearr_23278[(8)] = inst_23237__$1);

return statearr_23278;
})();
if(inst_23239__$1){
var statearr_23279_23341 = state_23259__$1;
(statearr_23279_23341[(1)] = (15));

} else {
var statearr_23280_23342 = state_23259__$1;
(statearr_23280_23342[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (16))){
var inst_23239 = (state_23259[(11)]);
var state_23259__$1 = state_23259;
var statearr_23281_23343 = state_23259__$1;
(statearr_23281_23343[(2)] = inst_23239);

(statearr_23281_23343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (10))){
var inst_23231 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23282_23344 = state_23259__$1;
(statearr_23282_23344[(2)] = inst_23231);

(statearr_23282_23344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (18))){
var inst_23242 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23283_23345 = state_23259__$1;
(statearr_23283_23345[(2)] = inst_23242);

(statearr_23283_23345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (8))){
var inst_23228 = cljs.core.async.close_BANG_.call(null,to);
var state_23259__$1 = state_23259;
var statearr_23284_23346 = state_23259__$1;
(statearr_23284_23346[(2)] = inst_23228);

(statearr_23284_23346[(1)] = (10));


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
});})(c__19653__auto__,jobs,results,process,async))
;
return ((function (switch__19588__auto__,c__19653__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0 = (function (){
var statearr_23288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__);

(statearr_23288[(1)] = (1));

return statearr_23288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1 = (function (state_23259){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23289){if((e23289 instanceof Object)){
var ex__19592__auto__ = e23289;
var statearr_23290_23347 = state_23259;
(statearr_23290_23347[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23348 = state_23259;
state_23259 = G__23348;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__ = function(state_23259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1.call(this,state_23259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19589__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto__,jobs,results,process,async))
})();
var state__19655__auto__ = (function (){var statearr_23291 = f__19654__auto__.call(null);
(statearr_23291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto__);

return statearr_23291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto__,jobs,results,process,async))
);

return c__19653__auto__;
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
var args23349 = [];
var len__5651__auto___23352 = arguments.length;
var i__5652__auto___23353 = (0);
while(true){
if((i__5652__auto___23353 < len__5651__auto___23352)){
args23349.push((arguments[i__5652__auto___23353]));

var G__23354 = (i__5652__auto___23353 + (1));
i__5652__auto___23353 = G__23354;
continue;
} else {
}
break;
}

var G__23351 = args23349.length;
switch (G__23351) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23349.length)].join('')));

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
var args23356 = [];
var len__5651__auto___23359 = arguments.length;
var i__5652__auto___23360 = (0);
while(true){
if((i__5652__auto___23360 < len__5651__auto___23359)){
args23356.push((arguments[i__5652__auto___23360]));

var G__23361 = (i__5652__auto___23360 + (1));
i__5652__auto___23360 = G__23361;
continue;
} else {
}
break;
}

var G__23358 = args23356.length;
switch (G__23358) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23356.length)].join('')));

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
var args23363 = [];
var len__5651__auto___23416 = arguments.length;
var i__5652__auto___23417 = (0);
while(true){
if((i__5652__auto___23417 < len__5651__auto___23416)){
args23363.push((arguments[i__5652__auto___23417]));

var G__23418 = (i__5652__auto___23417 + (1));
i__5652__auto___23417 = G__23418;
continue;
} else {
}
break;
}

var G__23365 = args23363.length;
switch (G__23365) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23363.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19653__auto___23420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___23420,tc,fc){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___23420,tc,fc){
return (function (state_23391){
var state_val_23392 = (state_23391[(1)]);
if((state_val_23392 === (7))){
var inst_23387 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
var statearr_23393_23421 = state_23391__$1;
(statearr_23393_23421[(2)] = inst_23387);

(statearr_23393_23421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (1))){
var state_23391__$1 = state_23391;
var statearr_23394_23422 = state_23391__$1;
(statearr_23394_23422[(2)] = null);

(statearr_23394_23422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (4))){
var inst_23368 = (state_23391[(7)]);
var inst_23368__$1 = (state_23391[(2)]);
var inst_23369 = (inst_23368__$1 == null);
var state_23391__$1 = (function (){var statearr_23395 = state_23391;
(statearr_23395[(7)] = inst_23368__$1);

return statearr_23395;
})();
if(cljs.core.truth_(inst_23369)){
var statearr_23396_23423 = state_23391__$1;
(statearr_23396_23423[(1)] = (5));

} else {
var statearr_23397_23424 = state_23391__$1;
(statearr_23397_23424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (13))){
var state_23391__$1 = state_23391;
var statearr_23398_23425 = state_23391__$1;
(statearr_23398_23425[(2)] = null);

(statearr_23398_23425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (6))){
var inst_23368 = (state_23391[(7)]);
var inst_23374 = p.call(null,inst_23368);
var state_23391__$1 = state_23391;
if(cljs.core.truth_(inst_23374)){
var statearr_23399_23426 = state_23391__$1;
(statearr_23399_23426[(1)] = (9));

} else {
var statearr_23400_23427 = state_23391__$1;
(statearr_23400_23427[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (3))){
var inst_23389 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23391__$1,inst_23389);
} else {
if((state_val_23392 === (12))){
var state_23391__$1 = state_23391;
var statearr_23401_23428 = state_23391__$1;
(statearr_23401_23428[(2)] = null);

(statearr_23401_23428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (2))){
var state_23391__$1 = state_23391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23391__$1,(4),ch);
} else {
if((state_val_23392 === (11))){
var inst_23368 = (state_23391[(7)]);
var inst_23378 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23391__$1,(8),inst_23378,inst_23368);
} else {
if((state_val_23392 === (9))){
var state_23391__$1 = state_23391;
var statearr_23402_23429 = state_23391__$1;
(statearr_23402_23429[(2)] = tc);

(statearr_23402_23429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (5))){
var inst_23371 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23372 = cljs.core.async.close_BANG_.call(null,fc);
var state_23391__$1 = (function (){var statearr_23403 = state_23391;
(statearr_23403[(8)] = inst_23371);

return statearr_23403;
})();
var statearr_23404_23430 = state_23391__$1;
(statearr_23404_23430[(2)] = inst_23372);

(statearr_23404_23430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (14))){
var inst_23385 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
var statearr_23405_23431 = state_23391__$1;
(statearr_23405_23431[(2)] = inst_23385);

(statearr_23405_23431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (10))){
var state_23391__$1 = state_23391;
var statearr_23406_23432 = state_23391__$1;
(statearr_23406_23432[(2)] = fc);

(statearr_23406_23432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23392 === (8))){
var inst_23380 = (state_23391[(2)]);
var state_23391__$1 = state_23391;
if(cljs.core.truth_(inst_23380)){
var statearr_23407_23433 = state_23391__$1;
(statearr_23407_23433[(1)] = (12));

} else {
var statearr_23408_23434 = state_23391__$1;
(statearr_23408_23434[(1)] = (13));

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
});})(c__19653__auto___23420,tc,fc))
;
return ((function (switch__19588__auto__,c__19653__auto___23420,tc,fc){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_23412 = [null,null,null,null,null,null,null,null,null];
(statearr_23412[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_23412[(1)] = (1));

return statearr_23412;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_23391){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23413){if((e23413 instanceof Object)){
var ex__19592__auto__ = e23413;
var statearr_23414_23435 = state_23391;
(statearr_23414_23435[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23436 = state_23391;
state_23391 = G__23436;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_23391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_23391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___23420,tc,fc))
})();
var state__19655__auto__ = (function (){var statearr_23415 = f__19654__auto__.call(null);
(statearr_23415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___23420);

return statearr_23415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___23420,tc,fc))
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
var c__19653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto__){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto__){
return (function (state_23483){
var state_val_23484 = (state_23483[(1)]);
if((state_val_23484 === (1))){
var inst_23469 = init;
var state_23483__$1 = (function (){var statearr_23485 = state_23483;
(statearr_23485[(7)] = inst_23469);

return statearr_23485;
})();
var statearr_23486_23501 = state_23483__$1;
(statearr_23486_23501[(2)] = null);

(statearr_23486_23501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (2))){
var state_23483__$1 = state_23483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23483__$1,(4),ch);
} else {
if((state_val_23484 === (3))){
var inst_23481 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23483__$1,inst_23481);
} else {
if((state_val_23484 === (4))){
var inst_23472 = (state_23483[(8)]);
var inst_23472__$1 = (state_23483[(2)]);
var inst_23473 = (inst_23472__$1 == null);
var state_23483__$1 = (function (){var statearr_23487 = state_23483;
(statearr_23487[(8)] = inst_23472__$1);

return statearr_23487;
})();
if(cljs.core.truth_(inst_23473)){
var statearr_23488_23502 = state_23483__$1;
(statearr_23488_23502[(1)] = (5));

} else {
var statearr_23489_23503 = state_23483__$1;
(statearr_23489_23503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (5))){
var inst_23469 = (state_23483[(7)]);
var state_23483__$1 = state_23483;
var statearr_23490_23504 = state_23483__$1;
(statearr_23490_23504[(2)] = inst_23469);

(statearr_23490_23504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (6))){
var inst_23472 = (state_23483[(8)]);
var inst_23469 = (state_23483[(7)]);
var inst_23476 = f.call(null,inst_23469,inst_23472);
var inst_23469__$1 = inst_23476;
var state_23483__$1 = (function (){var statearr_23491 = state_23483;
(statearr_23491[(7)] = inst_23469__$1);

return statearr_23491;
})();
var statearr_23492_23505 = state_23483__$1;
(statearr_23492_23505[(2)] = null);

(statearr_23492_23505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (7))){
var inst_23479 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23493_23506 = state_23483__$1;
(statearr_23493_23506[(2)] = inst_23479);

(statearr_23493_23506[(1)] = (3));


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
});})(c__19653__auto__))
;
return ((function (switch__19588__auto__,c__19653__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19589__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19589__auto____0 = (function (){
var statearr_23497 = [null,null,null,null,null,null,null,null,null];
(statearr_23497[(0)] = cljs$core$async$reduce_$_state_machine__19589__auto__);

(statearr_23497[(1)] = (1));

return statearr_23497;
});
var cljs$core$async$reduce_$_state_machine__19589__auto____1 = (function (state_23483){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23498){if((e23498 instanceof Object)){
var ex__19592__auto__ = e23498;
var statearr_23499_23507 = state_23483;
(statearr_23499_23507[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23508 = state_23483;
state_23483 = G__23508;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19589__auto__ = function(state_23483){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19589__auto____1.call(this,state_23483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19589__auto____0;
cljs$core$async$reduce_$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19589__auto____1;
return cljs$core$async$reduce_$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto__))
})();
var state__19655__auto__ = (function (){var statearr_23500 = f__19654__auto__.call(null);
(statearr_23500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto__);

return statearr_23500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto__))
);

return c__19653__auto__;
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
var args23509 = [];
var len__5651__auto___23561 = arguments.length;
var i__5652__auto___23562 = (0);
while(true){
if((i__5652__auto___23562 < len__5651__auto___23561)){
args23509.push((arguments[i__5652__auto___23562]));

var G__23563 = (i__5652__auto___23562 + (1));
i__5652__auto___23562 = G__23563;
continue;
} else {
}
break;
}

var G__23511 = args23509.length;
switch (G__23511) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23509.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto__){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto__){
return (function (state_23536){
var state_val_23537 = (state_23536[(1)]);
if((state_val_23537 === (7))){
var inst_23518 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23538_23565 = state_23536__$1;
(statearr_23538_23565[(2)] = inst_23518);

(statearr_23538_23565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (1))){
var inst_23512 = cljs.core.seq.call(null,coll);
var inst_23513 = inst_23512;
var state_23536__$1 = (function (){var statearr_23539 = state_23536;
(statearr_23539[(7)] = inst_23513);

return statearr_23539;
})();
var statearr_23540_23566 = state_23536__$1;
(statearr_23540_23566[(2)] = null);

(statearr_23540_23566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (4))){
var inst_23513 = (state_23536[(7)]);
var inst_23516 = cljs.core.first.call(null,inst_23513);
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23536__$1,(7),ch,inst_23516);
} else {
if((state_val_23537 === (13))){
var inst_23530 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23541_23567 = state_23536__$1;
(statearr_23541_23567[(2)] = inst_23530);

(statearr_23541_23567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (6))){
var inst_23521 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
if(cljs.core.truth_(inst_23521)){
var statearr_23542_23568 = state_23536__$1;
(statearr_23542_23568[(1)] = (8));

} else {
var statearr_23543_23569 = state_23536__$1;
(statearr_23543_23569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (3))){
var inst_23534 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23536__$1,inst_23534);
} else {
if((state_val_23537 === (12))){
var state_23536__$1 = state_23536;
var statearr_23544_23570 = state_23536__$1;
(statearr_23544_23570[(2)] = null);

(statearr_23544_23570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (2))){
var inst_23513 = (state_23536[(7)]);
var state_23536__$1 = state_23536;
if(cljs.core.truth_(inst_23513)){
var statearr_23545_23571 = state_23536__$1;
(statearr_23545_23571[(1)] = (4));

} else {
var statearr_23546_23572 = state_23536__$1;
(statearr_23546_23572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (11))){
var inst_23527 = cljs.core.async.close_BANG_.call(null,ch);
var state_23536__$1 = state_23536;
var statearr_23547_23573 = state_23536__$1;
(statearr_23547_23573[(2)] = inst_23527);

(statearr_23547_23573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (9))){
var state_23536__$1 = state_23536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23548_23574 = state_23536__$1;
(statearr_23548_23574[(1)] = (11));

} else {
var statearr_23549_23575 = state_23536__$1;
(statearr_23549_23575[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (5))){
var inst_23513 = (state_23536[(7)]);
var state_23536__$1 = state_23536;
var statearr_23550_23576 = state_23536__$1;
(statearr_23550_23576[(2)] = inst_23513);

(statearr_23550_23576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (10))){
var inst_23532 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23551_23577 = state_23536__$1;
(statearr_23551_23577[(2)] = inst_23532);

(statearr_23551_23577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (8))){
var inst_23513 = (state_23536[(7)]);
var inst_23523 = cljs.core.next.call(null,inst_23513);
var inst_23513__$1 = inst_23523;
var state_23536__$1 = (function (){var statearr_23552 = state_23536;
(statearr_23552[(7)] = inst_23513__$1);

return statearr_23552;
})();
var statearr_23553_23578 = state_23536__$1;
(statearr_23553_23578[(2)] = null);

(statearr_23553_23578[(1)] = (2));


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
});})(c__19653__auto__))
;
return ((function (switch__19588__auto__,c__19653__auto__){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_23557 = [null,null,null,null,null,null,null,null];
(statearr_23557[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_23557[(1)] = (1));

return statearr_23557;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_23536){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e23558){if((e23558 instanceof Object)){
var ex__19592__auto__ = e23558;
var statearr_23559_23579 = state_23536;
(statearr_23559_23579[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23580 = state_23536;
state_23536 = G__23580;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_23536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_23536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto__))
})();
var state__19655__auto__ = (function (){var statearr_23560 = f__19654__auto__.call(null);
(statearr_23560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto__);

return statearr_23560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto__))
);

return c__19653__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23802 = (function (mult,ch,cs,meta23803){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23803 = meta23803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23804,meta23803__$1){
var self__ = this;
var _23804__$1 = this;
return (new cljs.core.async.t_cljs$core$async23802(self__.mult,self__.ch,self__.cs,meta23803__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23804){
var self__ = this;
var _23804__$1 = this;
return self__.meta23803;
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23803","meta23803",1205286529,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23802";

cljs.core.async.t_cljs$core$async23802.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async23802");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23802 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23802(mult__$1,ch__$1,cs__$1,meta23803){
return (new cljs.core.async.t_cljs$core$async23802(mult__$1,ch__$1,cs__$1,meta23803));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23802(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19653__auto___24023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24023,cs,m,dchan,dctr,done){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24023,cs,m,dchan,dctr,done){
return (function (state_23935){
var state_val_23936 = (state_23935[(1)]);
if((state_val_23936 === (7))){
var inst_23931 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23937_24024 = state_23935__$1;
(statearr_23937_24024[(2)] = inst_23931);

(statearr_23937_24024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (20))){
var inst_23836 = (state_23935[(7)]);
var inst_23846 = cljs.core.first.call(null,inst_23836);
var inst_23847 = cljs.core.nth.call(null,inst_23846,(0),null);
var inst_23848 = cljs.core.nth.call(null,inst_23846,(1),null);
var state_23935__$1 = (function (){var statearr_23938 = state_23935;
(statearr_23938[(8)] = inst_23847);

return statearr_23938;
})();
if(cljs.core.truth_(inst_23848)){
var statearr_23939_24025 = state_23935__$1;
(statearr_23939_24025[(1)] = (22));

} else {
var statearr_23940_24026 = state_23935__$1;
(statearr_23940_24026[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (27))){
var inst_23878 = (state_23935[(9)]);
var inst_23807 = (state_23935[(10)]);
var inst_23876 = (state_23935[(11)]);
var inst_23883 = (state_23935[(12)]);
var inst_23883__$1 = cljs.core._nth.call(null,inst_23876,inst_23878);
var inst_23884 = cljs.core.async.put_BANG_.call(null,inst_23883__$1,inst_23807,done);
var state_23935__$1 = (function (){var statearr_23941 = state_23935;
(statearr_23941[(12)] = inst_23883__$1);

return statearr_23941;
})();
if(cljs.core.truth_(inst_23884)){
var statearr_23942_24027 = state_23935__$1;
(statearr_23942_24027[(1)] = (30));

} else {
var statearr_23943_24028 = state_23935__$1;
(statearr_23943_24028[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (1))){
var state_23935__$1 = state_23935;
var statearr_23944_24029 = state_23935__$1;
(statearr_23944_24029[(2)] = null);

(statearr_23944_24029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (24))){
var inst_23836 = (state_23935[(7)]);
var inst_23853 = (state_23935[(2)]);
var inst_23854 = cljs.core.next.call(null,inst_23836);
var inst_23816 = inst_23854;
var inst_23817 = null;
var inst_23818 = (0);
var inst_23819 = (0);
var state_23935__$1 = (function (){var statearr_23945 = state_23935;
(statearr_23945[(13)] = inst_23819);

(statearr_23945[(14)] = inst_23818);

(statearr_23945[(15)] = inst_23817);

(statearr_23945[(16)] = inst_23853);

(statearr_23945[(17)] = inst_23816);

return statearr_23945;
})();
var statearr_23946_24030 = state_23935__$1;
(statearr_23946_24030[(2)] = null);

(statearr_23946_24030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (39))){
var state_23935__$1 = state_23935;
var statearr_23950_24031 = state_23935__$1;
(statearr_23950_24031[(2)] = null);

(statearr_23950_24031[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (4))){
var inst_23807 = (state_23935[(10)]);
var inst_23807__$1 = (state_23935[(2)]);
var inst_23808 = (inst_23807__$1 == null);
var state_23935__$1 = (function (){var statearr_23951 = state_23935;
(statearr_23951[(10)] = inst_23807__$1);

return statearr_23951;
})();
if(cljs.core.truth_(inst_23808)){
var statearr_23952_24032 = state_23935__$1;
(statearr_23952_24032[(1)] = (5));

} else {
var statearr_23953_24033 = state_23935__$1;
(statearr_23953_24033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (15))){
var inst_23819 = (state_23935[(13)]);
var inst_23818 = (state_23935[(14)]);
var inst_23817 = (state_23935[(15)]);
var inst_23816 = (state_23935[(17)]);
var inst_23832 = (state_23935[(2)]);
var inst_23833 = (inst_23819 + (1));
var tmp23947 = inst_23818;
var tmp23948 = inst_23817;
var tmp23949 = inst_23816;
var inst_23816__$1 = tmp23949;
var inst_23817__$1 = tmp23948;
var inst_23818__$1 = tmp23947;
var inst_23819__$1 = inst_23833;
var state_23935__$1 = (function (){var statearr_23954 = state_23935;
(statearr_23954[(18)] = inst_23832);

(statearr_23954[(13)] = inst_23819__$1);

(statearr_23954[(14)] = inst_23818__$1);

(statearr_23954[(15)] = inst_23817__$1);

(statearr_23954[(17)] = inst_23816__$1);

return statearr_23954;
})();
var statearr_23955_24034 = state_23935__$1;
(statearr_23955_24034[(2)] = null);

(statearr_23955_24034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (21))){
var inst_23857 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23959_24035 = state_23935__$1;
(statearr_23959_24035[(2)] = inst_23857);

(statearr_23959_24035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (31))){
var inst_23883 = (state_23935[(12)]);
var inst_23887 = done.call(null,null);
var inst_23888 = cljs.core.async.untap_STAR_.call(null,m,inst_23883);
var state_23935__$1 = (function (){var statearr_23960 = state_23935;
(statearr_23960[(19)] = inst_23887);

return statearr_23960;
})();
var statearr_23961_24036 = state_23935__$1;
(statearr_23961_24036[(2)] = inst_23888);

(statearr_23961_24036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (32))){
var inst_23877 = (state_23935[(20)]);
var inst_23878 = (state_23935[(9)]);
var inst_23875 = (state_23935[(21)]);
var inst_23876 = (state_23935[(11)]);
var inst_23890 = (state_23935[(2)]);
var inst_23891 = (inst_23878 + (1));
var tmp23956 = inst_23877;
var tmp23957 = inst_23875;
var tmp23958 = inst_23876;
var inst_23875__$1 = tmp23957;
var inst_23876__$1 = tmp23958;
var inst_23877__$1 = tmp23956;
var inst_23878__$1 = inst_23891;
var state_23935__$1 = (function (){var statearr_23962 = state_23935;
(statearr_23962[(20)] = inst_23877__$1);

(statearr_23962[(9)] = inst_23878__$1);

(statearr_23962[(22)] = inst_23890);

(statearr_23962[(21)] = inst_23875__$1);

(statearr_23962[(11)] = inst_23876__$1);

return statearr_23962;
})();
var statearr_23963_24037 = state_23935__$1;
(statearr_23963_24037[(2)] = null);

(statearr_23963_24037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (40))){
var inst_23903 = (state_23935[(23)]);
var inst_23907 = done.call(null,null);
var inst_23908 = cljs.core.async.untap_STAR_.call(null,m,inst_23903);
var state_23935__$1 = (function (){var statearr_23964 = state_23935;
(statearr_23964[(24)] = inst_23907);

return statearr_23964;
})();
var statearr_23965_24038 = state_23935__$1;
(statearr_23965_24038[(2)] = inst_23908);

(statearr_23965_24038[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (33))){
var inst_23894 = (state_23935[(25)]);
var inst_23896 = cljs.core.chunked_seq_QMARK_.call(null,inst_23894);
var state_23935__$1 = state_23935;
if(inst_23896){
var statearr_23966_24039 = state_23935__$1;
(statearr_23966_24039[(1)] = (36));

} else {
var statearr_23967_24040 = state_23935__$1;
(statearr_23967_24040[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (13))){
var inst_23826 = (state_23935[(26)]);
var inst_23829 = cljs.core.async.close_BANG_.call(null,inst_23826);
var state_23935__$1 = state_23935;
var statearr_23968_24041 = state_23935__$1;
(statearr_23968_24041[(2)] = inst_23829);

(statearr_23968_24041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (22))){
var inst_23847 = (state_23935[(8)]);
var inst_23850 = cljs.core.async.close_BANG_.call(null,inst_23847);
var state_23935__$1 = state_23935;
var statearr_23969_24042 = state_23935__$1;
(statearr_23969_24042[(2)] = inst_23850);

(statearr_23969_24042[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (36))){
var inst_23894 = (state_23935[(25)]);
var inst_23898 = cljs.core.chunk_first.call(null,inst_23894);
var inst_23899 = cljs.core.chunk_rest.call(null,inst_23894);
var inst_23900 = cljs.core.count.call(null,inst_23898);
var inst_23875 = inst_23899;
var inst_23876 = inst_23898;
var inst_23877 = inst_23900;
var inst_23878 = (0);
var state_23935__$1 = (function (){var statearr_23970 = state_23935;
(statearr_23970[(20)] = inst_23877);

(statearr_23970[(9)] = inst_23878);

(statearr_23970[(21)] = inst_23875);

(statearr_23970[(11)] = inst_23876);

return statearr_23970;
})();
var statearr_23971_24043 = state_23935__$1;
(statearr_23971_24043[(2)] = null);

(statearr_23971_24043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (41))){
var inst_23894 = (state_23935[(25)]);
var inst_23910 = (state_23935[(2)]);
var inst_23911 = cljs.core.next.call(null,inst_23894);
var inst_23875 = inst_23911;
var inst_23876 = null;
var inst_23877 = (0);
var inst_23878 = (0);
var state_23935__$1 = (function (){var statearr_23972 = state_23935;
(statearr_23972[(27)] = inst_23910);

(statearr_23972[(20)] = inst_23877);

(statearr_23972[(9)] = inst_23878);

(statearr_23972[(21)] = inst_23875);

(statearr_23972[(11)] = inst_23876);

return statearr_23972;
})();
var statearr_23973_24044 = state_23935__$1;
(statearr_23973_24044[(2)] = null);

(statearr_23973_24044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (43))){
var state_23935__$1 = state_23935;
var statearr_23974_24045 = state_23935__$1;
(statearr_23974_24045[(2)] = null);

(statearr_23974_24045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (29))){
var inst_23919 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23975_24046 = state_23935__$1;
(statearr_23975_24046[(2)] = inst_23919);

(statearr_23975_24046[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (44))){
var inst_23928 = (state_23935[(2)]);
var state_23935__$1 = (function (){var statearr_23976 = state_23935;
(statearr_23976[(28)] = inst_23928);

return statearr_23976;
})();
var statearr_23977_24047 = state_23935__$1;
(statearr_23977_24047[(2)] = null);

(statearr_23977_24047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (6))){
var inst_23867 = (state_23935[(29)]);
var inst_23866 = cljs.core.deref.call(null,cs);
var inst_23867__$1 = cljs.core.keys.call(null,inst_23866);
var inst_23868 = cljs.core.count.call(null,inst_23867__$1);
var inst_23869 = cljs.core.reset_BANG_.call(null,dctr,inst_23868);
var inst_23874 = cljs.core.seq.call(null,inst_23867__$1);
var inst_23875 = inst_23874;
var inst_23876 = null;
var inst_23877 = (0);
var inst_23878 = (0);
var state_23935__$1 = (function (){var statearr_23978 = state_23935;
(statearr_23978[(20)] = inst_23877);

(statearr_23978[(29)] = inst_23867__$1);

(statearr_23978[(30)] = inst_23869);

(statearr_23978[(9)] = inst_23878);

(statearr_23978[(21)] = inst_23875);

(statearr_23978[(11)] = inst_23876);

return statearr_23978;
})();
var statearr_23979_24048 = state_23935__$1;
(statearr_23979_24048[(2)] = null);

(statearr_23979_24048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (28))){
var inst_23894 = (state_23935[(25)]);
var inst_23875 = (state_23935[(21)]);
var inst_23894__$1 = cljs.core.seq.call(null,inst_23875);
var state_23935__$1 = (function (){var statearr_23980 = state_23935;
(statearr_23980[(25)] = inst_23894__$1);

return statearr_23980;
})();
if(inst_23894__$1){
var statearr_23981_24049 = state_23935__$1;
(statearr_23981_24049[(1)] = (33));

} else {
var statearr_23982_24050 = state_23935__$1;
(statearr_23982_24050[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (25))){
var inst_23877 = (state_23935[(20)]);
var inst_23878 = (state_23935[(9)]);
var inst_23880 = (inst_23878 < inst_23877);
var inst_23881 = inst_23880;
var state_23935__$1 = state_23935;
if(cljs.core.truth_(inst_23881)){
var statearr_23983_24051 = state_23935__$1;
(statearr_23983_24051[(1)] = (27));

} else {
var statearr_23984_24052 = state_23935__$1;
(statearr_23984_24052[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (34))){
var state_23935__$1 = state_23935;
var statearr_23985_24053 = state_23935__$1;
(statearr_23985_24053[(2)] = null);

(statearr_23985_24053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (17))){
var state_23935__$1 = state_23935;
var statearr_23986_24054 = state_23935__$1;
(statearr_23986_24054[(2)] = null);

(statearr_23986_24054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (3))){
var inst_23933 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23935__$1,inst_23933);
} else {
if((state_val_23936 === (12))){
var inst_23862 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23987_24055 = state_23935__$1;
(statearr_23987_24055[(2)] = inst_23862);

(statearr_23987_24055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (2))){
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23935__$1,(4),ch);
} else {
if((state_val_23936 === (23))){
var state_23935__$1 = state_23935;
var statearr_23988_24056 = state_23935__$1;
(statearr_23988_24056[(2)] = null);

(statearr_23988_24056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (35))){
var inst_23917 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23989_24057 = state_23935__$1;
(statearr_23989_24057[(2)] = inst_23917);

(statearr_23989_24057[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (19))){
var inst_23836 = (state_23935[(7)]);
var inst_23840 = cljs.core.chunk_first.call(null,inst_23836);
var inst_23841 = cljs.core.chunk_rest.call(null,inst_23836);
var inst_23842 = cljs.core.count.call(null,inst_23840);
var inst_23816 = inst_23841;
var inst_23817 = inst_23840;
var inst_23818 = inst_23842;
var inst_23819 = (0);
var state_23935__$1 = (function (){var statearr_23990 = state_23935;
(statearr_23990[(13)] = inst_23819);

(statearr_23990[(14)] = inst_23818);

(statearr_23990[(15)] = inst_23817);

(statearr_23990[(17)] = inst_23816);

return statearr_23990;
})();
var statearr_23991_24058 = state_23935__$1;
(statearr_23991_24058[(2)] = null);

(statearr_23991_24058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (11))){
var inst_23836 = (state_23935[(7)]);
var inst_23816 = (state_23935[(17)]);
var inst_23836__$1 = cljs.core.seq.call(null,inst_23816);
var state_23935__$1 = (function (){var statearr_23992 = state_23935;
(statearr_23992[(7)] = inst_23836__$1);

return statearr_23992;
})();
if(inst_23836__$1){
var statearr_23993_24059 = state_23935__$1;
(statearr_23993_24059[(1)] = (16));

} else {
var statearr_23994_24060 = state_23935__$1;
(statearr_23994_24060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (9))){
var inst_23864 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23995_24061 = state_23935__$1;
(statearr_23995_24061[(2)] = inst_23864);

(statearr_23995_24061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (5))){
var inst_23814 = cljs.core.deref.call(null,cs);
var inst_23815 = cljs.core.seq.call(null,inst_23814);
var inst_23816 = inst_23815;
var inst_23817 = null;
var inst_23818 = (0);
var inst_23819 = (0);
var state_23935__$1 = (function (){var statearr_23996 = state_23935;
(statearr_23996[(13)] = inst_23819);

(statearr_23996[(14)] = inst_23818);

(statearr_23996[(15)] = inst_23817);

(statearr_23996[(17)] = inst_23816);

return statearr_23996;
})();
var statearr_23997_24062 = state_23935__$1;
(statearr_23997_24062[(2)] = null);

(statearr_23997_24062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (14))){
var state_23935__$1 = state_23935;
var statearr_23998_24063 = state_23935__$1;
(statearr_23998_24063[(2)] = null);

(statearr_23998_24063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (45))){
var inst_23925 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23999_24064 = state_23935__$1;
(statearr_23999_24064[(2)] = inst_23925);

(statearr_23999_24064[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (26))){
var inst_23867 = (state_23935[(29)]);
var inst_23921 = (state_23935[(2)]);
var inst_23922 = cljs.core.seq.call(null,inst_23867);
var state_23935__$1 = (function (){var statearr_24000 = state_23935;
(statearr_24000[(31)] = inst_23921);

return statearr_24000;
})();
if(inst_23922){
var statearr_24001_24065 = state_23935__$1;
(statearr_24001_24065[(1)] = (42));

} else {
var statearr_24002_24066 = state_23935__$1;
(statearr_24002_24066[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (16))){
var inst_23836 = (state_23935[(7)]);
var inst_23838 = cljs.core.chunked_seq_QMARK_.call(null,inst_23836);
var state_23935__$1 = state_23935;
if(inst_23838){
var statearr_24003_24067 = state_23935__$1;
(statearr_24003_24067[(1)] = (19));

} else {
var statearr_24004_24068 = state_23935__$1;
(statearr_24004_24068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (38))){
var inst_23914 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_24005_24069 = state_23935__$1;
(statearr_24005_24069[(2)] = inst_23914);

(statearr_24005_24069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (30))){
var state_23935__$1 = state_23935;
var statearr_24006_24070 = state_23935__$1;
(statearr_24006_24070[(2)] = null);

(statearr_24006_24070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (10))){
var inst_23819 = (state_23935[(13)]);
var inst_23817 = (state_23935[(15)]);
var inst_23825 = cljs.core._nth.call(null,inst_23817,inst_23819);
var inst_23826 = cljs.core.nth.call(null,inst_23825,(0),null);
var inst_23827 = cljs.core.nth.call(null,inst_23825,(1),null);
var state_23935__$1 = (function (){var statearr_24007 = state_23935;
(statearr_24007[(26)] = inst_23826);

return statearr_24007;
})();
if(cljs.core.truth_(inst_23827)){
var statearr_24008_24071 = state_23935__$1;
(statearr_24008_24071[(1)] = (13));

} else {
var statearr_24009_24072 = state_23935__$1;
(statearr_24009_24072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (18))){
var inst_23860 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_24010_24073 = state_23935__$1;
(statearr_24010_24073[(2)] = inst_23860);

(statearr_24010_24073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (42))){
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23935__$1,(45),dchan);
} else {
if((state_val_23936 === (37))){
var inst_23903 = (state_23935[(23)]);
var inst_23894 = (state_23935[(25)]);
var inst_23807 = (state_23935[(10)]);
var inst_23903__$1 = cljs.core.first.call(null,inst_23894);
var inst_23904 = cljs.core.async.put_BANG_.call(null,inst_23903__$1,inst_23807,done);
var state_23935__$1 = (function (){var statearr_24011 = state_23935;
(statearr_24011[(23)] = inst_23903__$1);

return statearr_24011;
})();
if(cljs.core.truth_(inst_23904)){
var statearr_24012_24074 = state_23935__$1;
(statearr_24012_24074[(1)] = (39));

} else {
var statearr_24013_24075 = state_23935__$1;
(statearr_24013_24075[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (8))){
var inst_23819 = (state_23935[(13)]);
var inst_23818 = (state_23935[(14)]);
var inst_23821 = (inst_23819 < inst_23818);
var inst_23822 = inst_23821;
var state_23935__$1 = state_23935;
if(cljs.core.truth_(inst_23822)){
var statearr_24014_24076 = state_23935__$1;
(statearr_24014_24076[(1)] = (10));

} else {
var statearr_24015_24077 = state_23935__$1;
(statearr_24015_24077[(1)] = (11));

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
});})(c__19653__auto___24023,cs,m,dchan,dctr,done))
;
return ((function (switch__19588__auto__,c__19653__auto___24023,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19589__auto__ = null;
var cljs$core$async$mult_$_state_machine__19589__auto____0 = (function (){
var statearr_24019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24019[(0)] = cljs$core$async$mult_$_state_machine__19589__auto__);

(statearr_24019[(1)] = (1));

return statearr_24019;
});
var cljs$core$async$mult_$_state_machine__19589__auto____1 = (function (state_23935){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_23935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24020){if((e24020 instanceof Object)){
var ex__19592__auto__ = e24020;
var statearr_24021_24078 = state_23935;
(statearr_24021_24078[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24079 = state_23935;
state_23935 = G__24079;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19589__auto__ = function(state_23935){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19589__auto____1.call(this,state_23935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19589__auto____0;
cljs$core$async$mult_$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19589__auto____1;
return cljs$core$async$mult_$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24023,cs,m,dchan,dctr,done))
})();
var state__19655__auto__ = (function (){var statearr_24022 = f__19654__auto__.call(null);
(statearr_24022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24023);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24023,cs,m,dchan,dctr,done))
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
var args24080 = [];
var len__5651__auto___24083 = arguments.length;
var i__5652__auto___24084 = (0);
while(true){
if((i__5652__auto___24084 < len__5651__auto___24083)){
args24080.push((arguments[i__5652__auto___24084]));

var G__24085 = (i__5652__auto___24084 + (1));
i__5652__auto___24084 = G__24085;
continue;
} else {
}
break;
}

var G__24082 = args24080.length;
switch (G__24082) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24080.length)].join('')));

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
var len__5651__auto___24097 = arguments.length;
var i__5652__auto___24098 = (0);
while(true){
if((i__5652__auto___24098 < len__5651__auto___24097)){
args__5658__auto__.push((arguments[i__5652__auto___24098]));

var G__24099 = (i__5652__auto___24098 + (1));
i__5652__auto___24098 = G__24099;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((3) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24091){
var map__24092 = p__24091;
var map__24092__$1 = ((((!((map__24092 == null)))?((((map__24092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24092):map__24092);
var opts = map__24092__$1;
var statearr_24094_24100 = state;
(statearr_24094_24100[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24092,map__24092__$1,opts){
return (function (val){
var statearr_24095_24101 = state;
(statearr_24095_24101[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24092,map__24092__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24096_24102 = state;
(statearr_24096_24102[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24087){
var G__24088 = cljs.core.first.call(null,seq24087);
var seq24087__$1 = cljs.core.next.call(null,seq24087);
var G__24089 = cljs.core.first.call(null,seq24087__$1);
var seq24087__$2 = cljs.core.next.call(null,seq24087__$1);
var G__24090 = cljs.core.first.call(null,seq24087__$2);
var seq24087__$3 = cljs.core.next.call(null,seq24087__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24088,G__24089,G__24090,seq24087__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24266 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24267){
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
this.meta24267 = meta24267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24268,meta24267__$1){
var self__ = this;
var _24268__$1 = this;
return (new cljs.core.async.t_cljs$core$async24266(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24267__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24268){
var self__ = this;
var _24268__$1 = this;
return self__.meta24267;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24266.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24267","meta24267",2036375194,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24266";

cljs.core.async.t_cljs$core$async24266.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24266");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24266 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24266(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24267){
return (new cljs.core.async.t_cljs$core$async24266(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24267));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24266(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19653__auto___24429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24366){
var state_val_24367 = (state_24366[(1)]);
if((state_val_24367 === (7))){
var inst_24284 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24368_24430 = state_24366__$1;
(statearr_24368_24430[(2)] = inst_24284);

(statearr_24368_24430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (20))){
var inst_24296 = (state_24366[(7)]);
var state_24366__$1 = state_24366;
var statearr_24369_24431 = state_24366__$1;
(statearr_24369_24431[(2)] = inst_24296);

(statearr_24369_24431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (27))){
var state_24366__$1 = state_24366;
var statearr_24370_24432 = state_24366__$1;
(statearr_24370_24432[(2)] = null);

(statearr_24370_24432[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (1))){
var inst_24272 = (state_24366[(8)]);
var inst_24272__$1 = calc_state.call(null);
var inst_24274 = (inst_24272__$1 == null);
var inst_24275 = cljs.core.not.call(null,inst_24274);
var state_24366__$1 = (function (){var statearr_24371 = state_24366;
(statearr_24371[(8)] = inst_24272__$1);

return statearr_24371;
})();
if(inst_24275){
var statearr_24372_24433 = state_24366__$1;
(statearr_24372_24433[(1)] = (2));

} else {
var statearr_24373_24434 = state_24366__$1;
(statearr_24373_24434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (24))){
var inst_24319 = (state_24366[(9)]);
var inst_24326 = (state_24366[(10)]);
var inst_24340 = (state_24366[(11)]);
var inst_24340__$1 = inst_24319.call(null,inst_24326);
var state_24366__$1 = (function (){var statearr_24374 = state_24366;
(statearr_24374[(11)] = inst_24340__$1);

return statearr_24374;
})();
if(cljs.core.truth_(inst_24340__$1)){
var statearr_24375_24435 = state_24366__$1;
(statearr_24375_24435[(1)] = (29));

} else {
var statearr_24376_24436 = state_24366__$1;
(statearr_24376_24436[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (4))){
var inst_24287 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24287)){
var statearr_24377_24437 = state_24366__$1;
(statearr_24377_24437[(1)] = (8));

} else {
var statearr_24378_24438 = state_24366__$1;
(statearr_24378_24438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (15))){
var inst_24313 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24313)){
var statearr_24379_24439 = state_24366__$1;
(statearr_24379_24439[(1)] = (19));

} else {
var statearr_24380_24440 = state_24366__$1;
(statearr_24380_24440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (21))){
var inst_24318 = (state_24366[(12)]);
var inst_24318__$1 = (state_24366[(2)]);
var inst_24319 = cljs.core.get.call(null,inst_24318__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24320 = cljs.core.get.call(null,inst_24318__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24321 = cljs.core.get.call(null,inst_24318__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24366__$1 = (function (){var statearr_24381 = state_24366;
(statearr_24381[(13)] = inst_24320);

(statearr_24381[(12)] = inst_24318__$1);

(statearr_24381[(9)] = inst_24319);

return statearr_24381;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24366__$1,(22),inst_24321);
} else {
if((state_val_24367 === (31))){
var inst_24348 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24348)){
var statearr_24382_24441 = state_24366__$1;
(statearr_24382_24441[(1)] = (32));

} else {
var statearr_24383_24442 = state_24366__$1;
(statearr_24383_24442[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (32))){
var inst_24325 = (state_24366[(14)]);
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24366__$1,(35),out,inst_24325);
} else {
if((state_val_24367 === (33))){
var inst_24318 = (state_24366[(12)]);
var inst_24296 = inst_24318;
var state_24366__$1 = (function (){var statearr_24384 = state_24366;
(statearr_24384[(7)] = inst_24296);

return statearr_24384;
})();
var statearr_24385_24443 = state_24366__$1;
(statearr_24385_24443[(2)] = null);

(statearr_24385_24443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (13))){
var inst_24296 = (state_24366[(7)]);
var inst_24303 = inst_24296.cljs$lang$protocol_mask$partition0$;
var inst_24304 = (inst_24303 & (64));
var inst_24305 = inst_24296.cljs$core$ISeq$;
var inst_24306 = (inst_24304) || (inst_24305);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24306)){
var statearr_24386_24444 = state_24366__$1;
(statearr_24386_24444[(1)] = (16));

} else {
var statearr_24387_24445 = state_24366__$1;
(statearr_24387_24445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (22))){
var inst_24325 = (state_24366[(14)]);
var inst_24326 = (state_24366[(10)]);
var inst_24324 = (state_24366[(2)]);
var inst_24325__$1 = cljs.core.nth.call(null,inst_24324,(0),null);
var inst_24326__$1 = cljs.core.nth.call(null,inst_24324,(1),null);
var inst_24327 = (inst_24325__$1 == null);
var inst_24328 = cljs.core._EQ_.call(null,inst_24326__$1,change);
var inst_24329 = (inst_24327) || (inst_24328);
var state_24366__$1 = (function (){var statearr_24388 = state_24366;
(statearr_24388[(14)] = inst_24325__$1);

(statearr_24388[(10)] = inst_24326__$1);

return statearr_24388;
})();
if(cljs.core.truth_(inst_24329)){
var statearr_24389_24446 = state_24366__$1;
(statearr_24389_24446[(1)] = (23));

} else {
var statearr_24390_24447 = state_24366__$1;
(statearr_24390_24447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (36))){
var inst_24318 = (state_24366[(12)]);
var inst_24296 = inst_24318;
var state_24366__$1 = (function (){var statearr_24391 = state_24366;
(statearr_24391[(7)] = inst_24296);

return statearr_24391;
})();
var statearr_24392_24448 = state_24366__$1;
(statearr_24392_24448[(2)] = null);

(statearr_24392_24448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (29))){
var inst_24340 = (state_24366[(11)]);
var state_24366__$1 = state_24366;
var statearr_24393_24449 = state_24366__$1;
(statearr_24393_24449[(2)] = inst_24340);

(statearr_24393_24449[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (6))){
var state_24366__$1 = state_24366;
var statearr_24394_24450 = state_24366__$1;
(statearr_24394_24450[(2)] = false);

(statearr_24394_24450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (28))){
var inst_24336 = (state_24366[(2)]);
var inst_24337 = calc_state.call(null);
var inst_24296 = inst_24337;
var state_24366__$1 = (function (){var statearr_24395 = state_24366;
(statearr_24395[(7)] = inst_24296);

(statearr_24395[(15)] = inst_24336);

return statearr_24395;
})();
var statearr_24396_24451 = state_24366__$1;
(statearr_24396_24451[(2)] = null);

(statearr_24396_24451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (25))){
var inst_24362 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24397_24452 = state_24366__$1;
(statearr_24397_24452[(2)] = inst_24362);

(statearr_24397_24452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (34))){
var inst_24360 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24398_24453 = state_24366__$1;
(statearr_24398_24453[(2)] = inst_24360);

(statearr_24398_24453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (17))){
var state_24366__$1 = state_24366;
var statearr_24399_24454 = state_24366__$1;
(statearr_24399_24454[(2)] = false);

(statearr_24399_24454[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (3))){
var state_24366__$1 = state_24366;
var statearr_24400_24455 = state_24366__$1;
(statearr_24400_24455[(2)] = false);

(statearr_24400_24455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (12))){
var inst_24364 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24366__$1,inst_24364);
} else {
if((state_val_24367 === (2))){
var inst_24272 = (state_24366[(8)]);
var inst_24277 = inst_24272.cljs$lang$protocol_mask$partition0$;
var inst_24278 = (inst_24277 & (64));
var inst_24279 = inst_24272.cljs$core$ISeq$;
var inst_24280 = (inst_24278) || (inst_24279);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24280)){
var statearr_24401_24456 = state_24366__$1;
(statearr_24401_24456[(1)] = (5));

} else {
var statearr_24402_24457 = state_24366__$1;
(statearr_24402_24457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (23))){
var inst_24325 = (state_24366[(14)]);
var inst_24331 = (inst_24325 == null);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24331)){
var statearr_24403_24458 = state_24366__$1;
(statearr_24403_24458[(1)] = (26));

} else {
var statearr_24404_24459 = state_24366__$1;
(statearr_24404_24459[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (35))){
var inst_24351 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24351)){
var statearr_24405_24460 = state_24366__$1;
(statearr_24405_24460[(1)] = (36));

} else {
var statearr_24406_24461 = state_24366__$1;
(statearr_24406_24461[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (19))){
var inst_24296 = (state_24366[(7)]);
var inst_24315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24296);
var state_24366__$1 = state_24366;
var statearr_24407_24462 = state_24366__$1;
(statearr_24407_24462[(2)] = inst_24315);

(statearr_24407_24462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (11))){
var inst_24296 = (state_24366[(7)]);
var inst_24300 = (inst_24296 == null);
var inst_24301 = cljs.core.not.call(null,inst_24300);
var state_24366__$1 = state_24366;
if(inst_24301){
var statearr_24408_24463 = state_24366__$1;
(statearr_24408_24463[(1)] = (13));

} else {
var statearr_24409_24464 = state_24366__$1;
(statearr_24409_24464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (9))){
var inst_24272 = (state_24366[(8)]);
var state_24366__$1 = state_24366;
var statearr_24410_24465 = state_24366__$1;
(statearr_24410_24465[(2)] = inst_24272);

(statearr_24410_24465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (5))){
var state_24366__$1 = state_24366;
var statearr_24411_24466 = state_24366__$1;
(statearr_24411_24466[(2)] = true);

(statearr_24411_24466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (14))){
var state_24366__$1 = state_24366;
var statearr_24412_24467 = state_24366__$1;
(statearr_24412_24467[(2)] = false);

(statearr_24412_24467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (26))){
var inst_24326 = (state_24366[(10)]);
var inst_24333 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24326);
var state_24366__$1 = state_24366;
var statearr_24413_24468 = state_24366__$1;
(statearr_24413_24468[(2)] = inst_24333);

(statearr_24413_24468[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (16))){
var state_24366__$1 = state_24366;
var statearr_24414_24469 = state_24366__$1;
(statearr_24414_24469[(2)] = true);

(statearr_24414_24469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (38))){
var inst_24356 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24415_24470 = state_24366__$1;
(statearr_24415_24470[(2)] = inst_24356);

(statearr_24415_24470[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (30))){
var inst_24320 = (state_24366[(13)]);
var inst_24319 = (state_24366[(9)]);
var inst_24326 = (state_24366[(10)]);
var inst_24343 = cljs.core.empty_QMARK_.call(null,inst_24319);
var inst_24344 = inst_24320.call(null,inst_24326);
var inst_24345 = cljs.core.not.call(null,inst_24344);
var inst_24346 = (inst_24343) && (inst_24345);
var state_24366__$1 = state_24366;
var statearr_24416_24471 = state_24366__$1;
(statearr_24416_24471[(2)] = inst_24346);

(statearr_24416_24471[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (10))){
var inst_24272 = (state_24366[(8)]);
var inst_24292 = (state_24366[(2)]);
var inst_24293 = cljs.core.get.call(null,inst_24292,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24294 = cljs.core.get.call(null,inst_24292,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24295 = cljs.core.get.call(null,inst_24292,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24296 = inst_24272;
var state_24366__$1 = (function (){var statearr_24417 = state_24366;
(statearr_24417[(7)] = inst_24296);

(statearr_24417[(16)] = inst_24295);

(statearr_24417[(17)] = inst_24293);

(statearr_24417[(18)] = inst_24294);

return statearr_24417;
})();
var statearr_24418_24472 = state_24366__$1;
(statearr_24418_24472[(2)] = null);

(statearr_24418_24472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (18))){
var inst_24310 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24419_24473 = state_24366__$1;
(statearr_24419_24473[(2)] = inst_24310);

(statearr_24419_24473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (37))){
var state_24366__$1 = state_24366;
var statearr_24420_24474 = state_24366__$1;
(statearr_24420_24474[(2)] = null);

(statearr_24420_24474[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (8))){
var inst_24272 = (state_24366[(8)]);
var inst_24289 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24272);
var state_24366__$1 = state_24366;
var statearr_24421_24475 = state_24366__$1;
(statearr_24421_24475[(2)] = inst_24289);

(statearr_24421_24475[(1)] = (10));


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
});})(c__19653__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19588__auto__,c__19653__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19589__auto__ = null;
var cljs$core$async$mix_$_state_machine__19589__auto____0 = (function (){
var statearr_24425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24425[(0)] = cljs$core$async$mix_$_state_machine__19589__auto__);

(statearr_24425[(1)] = (1));

return statearr_24425;
});
var cljs$core$async$mix_$_state_machine__19589__auto____1 = (function (state_24366){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_24366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24426){if((e24426 instanceof Object)){
var ex__19592__auto__ = e24426;
var statearr_24427_24476 = state_24366;
(statearr_24427_24476[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24477 = state_24366;
state_24366 = G__24477;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19589__auto__ = function(state_24366){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19589__auto____1.call(this,state_24366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19589__auto____0;
cljs$core$async$mix_$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19589__auto____1;
return cljs$core$async$mix_$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19655__auto__ = (function (){var statearr_24428 = f__19654__auto__.call(null);
(statearr_24428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24429);

return statearr_24428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24478 = [];
var len__5651__auto___24481 = arguments.length;
var i__5652__auto___24482 = (0);
while(true){
if((i__5652__auto___24482 < len__5651__auto___24481)){
args24478.push((arguments[i__5652__auto___24482]));

var G__24483 = (i__5652__auto___24482 + (1));
i__5652__auto___24482 = G__24483;
continue;
} else {
}
break;
}

var G__24480 = args24478.length;
switch (G__24480) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24478.length)].join('')));

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
var args24486 = [];
var len__5651__auto___24611 = arguments.length;
var i__5652__auto___24612 = (0);
while(true){
if((i__5652__auto___24612 < len__5651__auto___24611)){
args24486.push((arguments[i__5652__auto___24612]));

var G__24613 = (i__5652__auto___24612 + (1));
i__5652__auto___24612 = G__24613;
continue;
} else {
}
break;
}

var G__24488 = args24486.length;
switch (G__24488) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24486.length)].join('')));

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
return (function (p1__24485_SHARP_){
if(cljs.core.truth_(p1__24485_SHARP_.call(null,topic))){
return p1__24485_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24485_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4593__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24489 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24490){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24490 = meta24490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24491,meta24490__$1){
var self__ = this;
var _24491__$1 = this;
return (new cljs.core.async.t_cljs$core$async24489(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24490__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24491){
var self__ = this;
var _24491__$1 = this;
return self__.meta24490;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24490","meta24490",-1918624213,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24489";

cljs.core.async.t_cljs$core$async24489.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24489");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24489 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24489(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24490){
return (new cljs.core.async.t_cljs$core$async24489(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24490));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24489(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19653__auto___24615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24615,mults,ensure_mult,p){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24615,mults,ensure_mult,p){
return (function (state_24563){
var state_val_24564 = (state_24563[(1)]);
if((state_val_24564 === (7))){
var inst_24559 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24565_24616 = state_24563__$1;
(statearr_24565_24616[(2)] = inst_24559);

(statearr_24565_24616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (20))){
var state_24563__$1 = state_24563;
var statearr_24566_24617 = state_24563__$1;
(statearr_24566_24617[(2)] = null);

(statearr_24566_24617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (1))){
var state_24563__$1 = state_24563;
var statearr_24567_24618 = state_24563__$1;
(statearr_24567_24618[(2)] = null);

(statearr_24567_24618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (24))){
var inst_24542 = (state_24563[(7)]);
var inst_24551 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24542);
var state_24563__$1 = state_24563;
var statearr_24568_24619 = state_24563__$1;
(statearr_24568_24619[(2)] = inst_24551);

(statearr_24568_24619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (4))){
var inst_24494 = (state_24563[(8)]);
var inst_24494__$1 = (state_24563[(2)]);
var inst_24495 = (inst_24494__$1 == null);
var state_24563__$1 = (function (){var statearr_24569 = state_24563;
(statearr_24569[(8)] = inst_24494__$1);

return statearr_24569;
})();
if(cljs.core.truth_(inst_24495)){
var statearr_24570_24620 = state_24563__$1;
(statearr_24570_24620[(1)] = (5));

} else {
var statearr_24571_24621 = state_24563__$1;
(statearr_24571_24621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (15))){
var inst_24536 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24572_24622 = state_24563__$1;
(statearr_24572_24622[(2)] = inst_24536);

(statearr_24572_24622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (21))){
var inst_24556 = (state_24563[(2)]);
var state_24563__$1 = (function (){var statearr_24573 = state_24563;
(statearr_24573[(9)] = inst_24556);

return statearr_24573;
})();
var statearr_24574_24623 = state_24563__$1;
(statearr_24574_24623[(2)] = null);

(statearr_24574_24623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (13))){
var inst_24518 = (state_24563[(10)]);
var inst_24520 = cljs.core.chunked_seq_QMARK_.call(null,inst_24518);
var state_24563__$1 = state_24563;
if(inst_24520){
var statearr_24575_24624 = state_24563__$1;
(statearr_24575_24624[(1)] = (16));

} else {
var statearr_24576_24625 = state_24563__$1;
(statearr_24576_24625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (22))){
var inst_24548 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
if(cljs.core.truth_(inst_24548)){
var statearr_24577_24626 = state_24563__$1;
(statearr_24577_24626[(1)] = (23));

} else {
var statearr_24578_24627 = state_24563__$1;
(statearr_24578_24627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (6))){
var inst_24494 = (state_24563[(8)]);
var inst_24544 = (state_24563[(11)]);
var inst_24542 = (state_24563[(7)]);
var inst_24542__$1 = topic_fn.call(null,inst_24494);
var inst_24543 = cljs.core.deref.call(null,mults);
var inst_24544__$1 = cljs.core.get.call(null,inst_24543,inst_24542__$1);
var state_24563__$1 = (function (){var statearr_24579 = state_24563;
(statearr_24579[(11)] = inst_24544__$1);

(statearr_24579[(7)] = inst_24542__$1);

return statearr_24579;
})();
if(cljs.core.truth_(inst_24544__$1)){
var statearr_24580_24628 = state_24563__$1;
(statearr_24580_24628[(1)] = (19));

} else {
var statearr_24581_24629 = state_24563__$1;
(statearr_24581_24629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (25))){
var inst_24553 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24582_24630 = state_24563__$1;
(statearr_24582_24630[(2)] = inst_24553);

(statearr_24582_24630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (17))){
var inst_24518 = (state_24563[(10)]);
var inst_24527 = cljs.core.first.call(null,inst_24518);
var inst_24528 = cljs.core.async.muxch_STAR_.call(null,inst_24527);
var inst_24529 = cljs.core.async.close_BANG_.call(null,inst_24528);
var inst_24530 = cljs.core.next.call(null,inst_24518);
var inst_24504 = inst_24530;
var inst_24505 = null;
var inst_24506 = (0);
var inst_24507 = (0);
var state_24563__$1 = (function (){var statearr_24583 = state_24563;
(statearr_24583[(12)] = inst_24507);

(statearr_24583[(13)] = inst_24506);

(statearr_24583[(14)] = inst_24504);

(statearr_24583[(15)] = inst_24529);

(statearr_24583[(16)] = inst_24505);

return statearr_24583;
})();
var statearr_24584_24631 = state_24563__$1;
(statearr_24584_24631[(2)] = null);

(statearr_24584_24631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (3))){
var inst_24561 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24563__$1,inst_24561);
} else {
if((state_val_24564 === (12))){
var inst_24538 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24585_24632 = state_24563__$1;
(statearr_24585_24632[(2)] = inst_24538);

(statearr_24585_24632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (2))){
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24563__$1,(4),ch);
} else {
if((state_val_24564 === (23))){
var state_24563__$1 = state_24563;
var statearr_24586_24633 = state_24563__$1;
(statearr_24586_24633[(2)] = null);

(statearr_24586_24633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (19))){
var inst_24494 = (state_24563[(8)]);
var inst_24544 = (state_24563[(11)]);
var inst_24546 = cljs.core.async.muxch_STAR_.call(null,inst_24544);
var state_24563__$1 = state_24563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24563__$1,(22),inst_24546,inst_24494);
} else {
if((state_val_24564 === (11))){
var inst_24504 = (state_24563[(14)]);
var inst_24518 = (state_24563[(10)]);
var inst_24518__$1 = cljs.core.seq.call(null,inst_24504);
var state_24563__$1 = (function (){var statearr_24587 = state_24563;
(statearr_24587[(10)] = inst_24518__$1);

return statearr_24587;
})();
if(inst_24518__$1){
var statearr_24588_24634 = state_24563__$1;
(statearr_24588_24634[(1)] = (13));

} else {
var statearr_24589_24635 = state_24563__$1;
(statearr_24589_24635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (9))){
var inst_24540 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24590_24636 = state_24563__$1;
(statearr_24590_24636[(2)] = inst_24540);

(statearr_24590_24636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (5))){
var inst_24501 = cljs.core.deref.call(null,mults);
var inst_24502 = cljs.core.vals.call(null,inst_24501);
var inst_24503 = cljs.core.seq.call(null,inst_24502);
var inst_24504 = inst_24503;
var inst_24505 = null;
var inst_24506 = (0);
var inst_24507 = (0);
var state_24563__$1 = (function (){var statearr_24591 = state_24563;
(statearr_24591[(12)] = inst_24507);

(statearr_24591[(13)] = inst_24506);

(statearr_24591[(14)] = inst_24504);

(statearr_24591[(16)] = inst_24505);

return statearr_24591;
})();
var statearr_24592_24637 = state_24563__$1;
(statearr_24592_24637[(2)] = null);

(statearr_24592_24637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (14))){
var state_24563__$1 = state_24563;
var statearr_24596_24638 = state_24563__$1;
(statearr_24596_24638[(2)] = null);

(statearr_24596_24638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (16))){
var inst_24518 = (state_24563[(10)]);
var inst_24522 = cljs.core.chunk_first.call(null,inst_24518);
var inst_24523 = cljs.core.chunk_rest.call(null,inst_24518);
var inst_24524 = cljs.core.count.call(null,inst_24522);
var inst_24504 = inst_24523;
var inst_24505 = inst_24522;
var inst_24506 = inst_24524;
var inst_24507 = (0);
var state_24563__$1 = (function (){var statearr_24597 = state_24563;
(statearr_24597[(12)] = inst_24507);

(statearr_24597[(13)] = inst_24506);

(statearr_24597[(14)] = inst_24504);

(statearr_24597[(16)] = inst_24505);

return statearr_24597;
})();
var statearr_24598_24639 = state_24563__$1;
(statearr_24598_24639[(2)] = null);

(statearr_24598_24639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (10))){
var inst_24507 = (state_24563[(12)]);
var inst_24506 = (state_24563[(13)]);
var inst_24504 = (state_24563[(14)]);
var inst_24505 = (state_24563[(16)]);
var inst_24512 = cljs.core._nth.call(null,inst_24505,inst_24507);
var inst_24513 = cljs.core.async.muxch_STAR_.call(null,inst_24512);
var inst_24514 = cljs.core.async.close_BANG_.call(null,inst_24513);
var inst_24515 = (inst_24507 + (1));
var tmp24593 = inst_24506;
var tmp24594 = inst_24504;
var tmp24595 = inst_24505;
var inst_24504__$1 = tmp24594;
var inst_24505__$1 = tmp24595;
var inst_24506__$1 = tmp24593;
var inst_24507__$1 = inst_24515;
var state_24563__$1 = (function (){var statearr_24599 = state_24563;
(statearr_24599[(12)] = inst_24507__$1);

(statearr_24599[(17)] = inst_24514);

(statearr_24599[(13)] = inst_24506__$1);

(statearr_24599[(14)] = inst_24504__$1);

(statearr_24599[(16)] = inst_24505__$1);

return statearr_24599;
})();
var statearr_24600_24640 = state_24563__$1;
(statearr_24600_24640[(2)] = null);

(statearr_24600_24640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (18))){
var inst_24533 = (state_24563[(2)]);
var state_24563__$1 = state_24563;
var statearr_24601_24641 = state_24563__$1;
(statearr_24601_24641[(2)] = inst_24533);

(statearr_24601_24641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24564 === (8))){
var inst_24507 = (state_24563[(12)]);
var inst_24506 = (state_24563[(13)]);
var inst_24509 = (inst_24507 < inst_24506);
var inst_24510 = inst_24509;
var state_24563__$1 = state_24563;
if(cljs.core.truth_(inst_24510)){
var statearr_24602_24642 = state_24563__$1;
(statearr_24602_24642[(1)] = (10));

} else {
var statearr_24603_24643 = state_24563__$1;
(statearr_24603_24643[(1)] = (11));

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
});})(c__19653__auto___24615,mults,ensure_mult,p))
;
return ((function (switch__19588__auto__,c__19653__auto___24615,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_24607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24607[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_24607[(1)] = (1));

return statearr_24607;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_24563){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_24563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24608){if((e24608 instanceof Object)){
var ex__19592__auto__ = e24608;
var statearr_24609_24644 = state_24563;
(statearr_24609_24644[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24645 = state_24563;
state_24563 = G__24645;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_24563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_24563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24615,mults,ensure_mult,p))
})();
var state__19655__auto__ = (function (){var statearr_24610 = f__19654__auto__.call(null);
(statearr_24610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24615);

return statearr_24610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24615,mults,ensure_mult,p))
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
var args24646 = [];
var len__5651__auto___24649 = arguments.length;
var i__5652__auto___24650 = (0);
while(true){
if((i__5652__auto___24650 < len__5651__auto___24649)){
args24646.push((arguments[i__5652__auto___24650]));

var G__24651 = (i__5652__auto___24650 + (1));
i__5652__auto___24650 = G__24651;
continue;
} else {
}
break;
}

var G__24648 = args24646.length;
switch (G__24648) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24646.length)].join('')));

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
var args24653 = [];
var len__5651__auto___24656 = arguments.length;
var i__5652__auto___24657 = (0);
while(true){
if((i__5652__auto___24657 < len__5651__auto___24656)){
args24653.push((arguments[i__5652__auto___24657]));

var G__24658 = (i__5652__auto___24657 + (1));
i__5652__auto___24657 = G__24658;
continue;
} else {
}
break;
}

var G__24655 = args24653.length;
switch (G__24655) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24653.length)].join('')));

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
var args24660 = [];
var len__5651__auto___24731 = arguments.length;
var i__5652__auto___24732 = (0);
while(true){
if((i__5652__auto___24732 < len__5651__auto___24731)){
args24660.push((arguments[i__5652__auto___24732]));

var G__24733 = (i__5652__auto___24732 + (1));
i__5652__auto___24732 = G__24733;
continue;
} else {
}
break;
}

var G__24662 = args24660.length;
switch (G__24662) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24660.length)].join('')));

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
var c__19653__auto___24735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24701){
var state_val_24702 = (state_24701[(1)]);
if((state_val_24702 === (7))){
var state_24701__$1 = state_24701;
var statearr_24703_24736 = state_24701__$1;
(statearr_24703_24736[(2)] = null);

(statearr_24703_24736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (1))){
var state_24701__$1 = state_24701;
var statearr_24704_24737 = state_24701__$1;
(statearr_24704_24737[(2)] = null);

(statearr_24704_24737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (4))){
var inst_24665 = (state_24701[(7)]);
var inst_24667 = (inst_24665 < cnt);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24667)){
var statearr_24705_24738 = state_24701__$1;
(statearr_24705_24738[(1)] = (6));

} else {
var statearr_24706_24739 = state_24701__$1;
(statearr_24706_24739[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (15))){
var inst_24697 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24707_24740 = state_24701__$1;
(statearr_24707_24740[(2)] = inst_24697);

(statearr_24707_24740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (13))){
var inst_24690 = cljs.core.async.close_BANG_.call(null,out);
var state_24701__$1 = state_24701;
var statearr_24708_24741 = state_24701__$1;
(statearr_24708_24741[(2)] = inst_24690);

(statearr_24708_24741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (6))){
var state_24701__$1 = state_24701;
var statearr_24709_24742 = state_24701__$1;
(statearr_24709_24742[(2)] = null);

(statearr_24709_24742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (3))){
var inst_24699 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24701__$1,inst_24699);
} else {
if((state_val_24702 === (12))){
var inst_24687 = (state_24701[(8)]);
var inst_24687__$1 = (state_24701[(2)]);
var inst_24688 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24687__$1);
var state_24701__$1 = (function (){var statearr_24710 = state_24701;
(statearr_24710[(8)] = inst_24687__$1);

return statearr_24710;
})();
if(cljs.core.truth_(inst_24688)){
var statearr_24711_24743 = state_24701__$1;
(statearr_24711_24743[(1)] = (13));

} else {
var statearr_24712_24744 = state_24701__$1;
(statearr_24712_24744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (2))){
var inst_24664 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24665 = (0);
var state_24701__$1 = (function (){var statearr_24713 = state_24701;
(statearr_24713[(9)] = inst_24664);

(statearr_24713[(7)] = inst_24665);

return statearr_24713;
})();
var statearr_24714_24745 = state_24701__$1;
(statearr_24714_24745[(2)] = null);

(statearr_24714_24745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (11))){
var inst_24665 = (state_24701[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24701,(10),Object,null,(9));
var inst_24674 = chs__$1.call(null,inst_24665);
var inst_24675 = done.call(null,inst_24665);
var inst_24676 = cljs.core.async.take_BANG_.call(null,inst_24674,inst_24675);
var state_24701__$1 = state_24701;
var statearr_24715_24746 = state_24701__$1;
(statearr_24715_24746[(2)] = inst_24676);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (9))){
var inst_24665 = (state_24701[(7)]);
var inst_24678 = (state_24701[(2)]);
var inst_24679 = (inst_24665 + (1));
var inst_24665__$1 = inst_24679;
var state_24701__$1 = (function (){var statearr_24716 = state_24701;
(statearr_24716[(10)] = inst_24678);

(statearr_24716[(7)] = inst_24665__$1);

return statearr_24716;
})();
var statearr_24717_24747 = state_24701__$1;
(statearr_24717_24747[(2)] = null);

(statearr_24717_24747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (5))){
var inst_24685 = (state_24701[(2)]);
var state_24701__$1 = (function (){var statearr_24718 = state_24701;
(statearr_24718[(11)] = inst_24685);

return statearr_24718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24701__$1,(12),dchan);
} else {
if((state_val_24702 === (14))){
var inst_24687 = (state_24701[(8)]);
var inst_24692 = cljs.core.apply.call(null,f,inst_24687);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24701__$1,(16),out,inst_24692);
} else {
if((state_val_24702 === (16))){
var inst_24694 = (state_24701[(2)]);
var state_24701__$1 = (function (){var statearr_24719 = state_24701;
(statearr_24719[(12)] = inst_24694);

return statearr_24719;
})();
var statearr_24720_24748 = state_24701__$1;
(statearr_24720_24748[(2)] = null);

(statearr_24720_24748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (10))){
var inst_24669 = (state_24701[(2)]);
var inst_24670 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24701__$1 = (function (){var statearr_24721 = state_24701;
(statearr_24721[(13)] = inst_24669);

return statearr_24721;
})();
var statearr_24722_24749 = state_24701__$1;
(statearr_24722_24749[(2)] = inst_24670);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (8))){
var inst_24683 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24723_24750 = state_24701__$1;
(statearr_24723_24750[(2)] = inst_24683);

(statearr_24723_24750[(1)] = (5));


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
});})(c__19653__auto___24735,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19588__auto__,c__19653__auto___24735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_24727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24727[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_24727[(1)] = (1));

return statearr_24727;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_24701){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_24701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24728){if((e24728 instanceof Object)){
var ex__19592__auto__ = e24728;
var statearr_24729_24751 = state_24701;
(statearr_24729_24751[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24752 = state_24701;
state_24701 = G__24752;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_24701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_24701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24735,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19655__auto__ = (function (){var statearr_24730 = f__19654__auto__.call(null);
(statearr_24730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24735);

return statearr_24730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24735,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24754 = [];
var len__5651__auto___24810 = arguments.length;
var i__5652__auto___24811 = (0);
while(true){
if((i__5652__auto___24811 < len__5651__auto___24810)){
args24754.push((arguments[i__5652__auto___24811]));

var G__24812 = (i__5652__auto___24811 + (1));
i__5652__auto___24811 = G__24812;
continue;
} else {
}
break;
}

var G__24756 = args24754.length;
switch (G__24756) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24754.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19653__auto___24814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24814,out){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24814,out){
return (function (state_24786){
var state_val_24787 = (state_24786[(1)]);
if((state_val_24787 === (7))){
var inst_24766 = (state_24786[(7)]);
var inst_24765 = (state_24786[(8)]);
var inst_24765__$1 = (state_24786[(2)]);
var inst_24766__$1 = cljs.core.nth.call(null,inst_24765__$1,(0),null);
var inst_24767 = cljs.core.nth.call(null,inst_24765__$1,(1),null);
var inst_24768 = (inst_24766__$1 == null);
var state_24786__$1 = (function (){var statearr_24788 = state_24786;
(statearr_24788[(7)] = inst_24766__$1);

(statearr_24788[(8)] = inst_24765__$1);

(statearr_24788[(9)] = inst_24767);

return statearr_24788;
})();
if(cljs.core.truth_(inst_24768)){
var statearr_24789_24815 = state_24786__$1;
(statearr_24789_24815[(1)] = (8));

} else {
var statearr_24790_24816 = state_24786__$1;
(statearr_24790_24816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (1))){
var inst_24757 = cljs.core.vec.call(null,chs);
var inst_24758 = inst_24757;
var state_24786__$1 = (function (){var statearr_24791 = state_24786;
(statearr_24791[(10)] = inst_24758);

return statearr_24791;
})();
var statearr_24792_24817 = state_24786__$1;
(statearr_24792_24817[(2)] = null);

(statearr_24792_24817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (4))){
var inst_24758 = (state_24786[(10)]);
var state_24786__$1 = state_24786;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24786__$1,(7),inst_24758);
} else {
if((state_val_24787 === (6))){
var inst_24782 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24793_24818 = state_24786__$1;
(statearr_24793_24818[(2)] = inst_24782);

(statearr_24793_24818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (3))){
var inst_24784 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24786__$1,inst_24784);
} else {
if((state_val_24787 === (2))){
var inst_24758 = (state_24786[(10)]);
var inst_24760 = cljs.core.count.call(null,inst_24758);
var inst_24761 = (inst_24760 > (0));
var state_24786__$1 = state_24786;
if(cljs.core.truth_(inst_24761)){
var statearr_24795_24819 = state_24786__$1;
(statearr_24795_24819[(1)] = (4));

} else {
var statearr_24796_24820 = state_24786__$1;
(statearr_24796_24820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (11))){
var inst_24758 = (state_24786[(10)]);
var inst_24775 = (state_24786[(2)]);
var tmp24794 = inst_24758;
var inst_24758__$1 = tmp24794;
var state_24786__$1 = (function (){var statearr_24797 = state_24786;
(statearr_24797[(10)] = inst_24758__$1);

(statearr_24797[(11)] = inst_24775);

return statearr_24797;
})();
var statearr_24798_24821 = state_24786__$1;
(statearr_24798_24821[(2)] = null);

(statearr_24798_24821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (9))){
var inst_24766 = (state_24786[(7)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24786__$1,(11),out,inst_24766);
} else {
if((state_val_24787 === (5))){
var inst_24780 = cljs.core.async.close_BANG_.call(null,out);
var state_24786__$1 = state_24786;
var statearr_24799_24822 = state_24786__$1;
(statearr_24799_24822[(2)] = inst_24780);

(statearr_24799_24822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (10))){
var inst_24778 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24800_24823 = state_24786__$1;
(statearr_24800_24823[(2)] = inst_24778);

(statearr_24800_24823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (8))){
var inst_24758 = (state_24786[(10)]);
var inst_24766 = (state_24786[(7)]);
var inst_24765 = (state_24786[(8)]);
var inst_24767 = (state_24786[(9)]);
var inst_24770 = (function (){var cs = inst_24758;
var vec__24763 = inst_24765;
var v = inst_24766;
var c = inst_24767;
return ((function (cs,vec__24763,v,c,inst_24758,inst_24766,inst_24765,inst_24767,state_val_24787,c__19653__auto___24814,out){
return (function (p1__24753_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24753_SHARP_);
});
;})(cs,vec__24763,v,c,inst_24758,inst_24766,inst_24765,inst_24767,state_val_24787,c__19653__auto___24814,out))
})();
var inst_24771 = cljs.core.filterv.call(null,inst_24770,inst_24758);
var inst_24758__$1 = inst_24771;
var state_24786__$1 = (function (){var statearr_24801 = state_24786;
(statearr_24801[(10)] = inst_24758__$1);

return statearr_24801;
})();
var statearr_24802_24824 = state_24786__$1;
(statearr_24802_24824[(2)] = null);

(statearr_24802_24824[(1)] = (2));


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
});})(c__19653__auto___24814,out))
;
return ((function (switch__19588__auto__,c__19653__auto___24814,out){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_24806 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24806[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_24806[(1)] = (1));

return statearr_24806;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_24786){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_24786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24807){if((e24807 instanceof Object)){
var ex__19592__auto__ = e24807;
var statearr_24808_24825 = state_24786;
(statearr_24808_24825[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24826 = state_24786;
state_24786 = G__24826;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_24786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_24786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24814,out))
})();
var state__19655__auto__ = (function (){var statearr_24809 = f__19654__auto__.call(null);
(statearr_24809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24814);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24814,out))
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
var args24827 = [];
var len__5651__auto___24876 = arguments.length;
var i__5652__auto___24877 = (0);
while(true){
if((i__5652__auto___24877 < len__5651__auto___24876)){
args24827.push((arguments[i__5652__auto___24877]));

var G__24878 = (i__5652__auto___24877 + (1));
i__5652__auto___24877 = G__24878;
continue;
} else {
}
break;
}

var G__24829 = args24827.length;
switch (G__24829) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24827.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19653__auto___24880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24880,out){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24880,out){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (7))){
var inst_24835 = (state_24853[(7)]);
var inst_24835__$1 = (state_24853[(2)]);
var inst_24836 = (inst_24835__$1 == null);
var inst_24837 = cljs.core.not.call(null,inst_24836);
var state_24853__$1 = (function (){var statearr_24855 = state_24853;
(statearr_24855[(7)] = inst_24835__$1);

return statearr_24855;
})();
if(inst_24837){
var statearr_24856_24881 = state_24853__$1;
(statearr_24856_24881[(1)] = (8));

} else {
var statearr_24857_24882 = state_24853__$1;
(statearr_24857_24882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (1))){
var inst_24830 = (0);
var state_24853__$1 = (function (){var statearr_24858 = state_24853;
(statearr_24858[(8)] = inst_24830);

return statearr_24858;
})();
var statearr_24859_24883 = state_24853__$1;
(statearr_24859_24883[(2)] = null);

(statearr_24859_24883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (4))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(7),ch);
} else {
if((state_val_24854 === (6))){
var inst_24848 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24860_24884 = state_24853__$1;
(statearr_24860_24884[(2)] = inst_24848);

(statearr_24860_24884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (3))){
var inst_24850 = (state_24853[(2)]);
var inst_24851 = cljs.core.async.close_BANG_.call(null,out);
var state_24853__$1 = (function (){var statearr_24861 = state_24853;
(statearr_24861[(9)] = inst_24850);

return statearr_24861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (2))){
var inst_24830 = (state_24853[(8)]);
var inst_24832 = (inst_24830 < n);
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24832)){
var statearr_24862_24885 = state_24853__$1;
(statearr_24862_24885[(1)] = (4));

} else {
var statearr_24863_24886 = state_24853__$1;
(statearr_24863_24886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (11))){
var inst_24830 = (state_24853[(8)]);
var inst_24840 = (state_24853[(2)]);
var inst_24841 = (inst_24830 + (1));
var inst_24830__$1 = inst_24841;
var state_24853__$1 = (function (){var statearr_24864 = state_24853;
(statearr_24864[(10)] = inst_24840);

(statearr_24864[(8)] = inst_24830__$1);

return statearr_24864;
})();
var statearr_24865_24887 = state_24853__$1;
(statearr_24865_24887[(2)] = null);

(statearr_24865_24887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (9))){
var state_24853__$1 = state_24853;
var statearr_24866_24888 = state_24853__$1;
(statearr_24866_24888[(2)] = null);

(statearr_24866_24888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var state_24853__$1 = state_24853;
var statearr_24867_24889 = state_24853__$1;
(statearr_24867_24889[(2)] = null);

(statearr_24867_24889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (10))){
var inst_24845 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24868_24890 = state_24853__$1;
(statearr_24868_24890[(2)] = inst_24845);

(statearr_24868_24890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (8))){
var inst_24835 = (state_24853[(7)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(11),out,inst_24835);
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
});})(c__19653__auto___24880,out))
;
return ((function (switch__19588__auto__,c__19653__auto___24880,out){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_24872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24872[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_24872[(1)] = (1));

return statearr_24872;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_24853){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24873){if((e24873 instanceof Object)){
var ex__19592__auto__ = e24873;
var statearr_24874_24891 = state_24853;
(statearr_24874_24891[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24892 = state_24853;
state_24853 = G__24892;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24880,out))
})();
var state__19655__auto__ = (function (){var statearr_24875 = f__19654__auto__.call(null);
(statearr_24875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24880);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24880,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24900 = (function (map_LT_,f,ch,meta24901){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24901 = meta24901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24902,meta24901__$1){
var self__ = this;
var _24902__$1 = this;
return (new cljs.core.async.t_cljs$core$async24900(self__.map_LT_,self__.f,self__.ch,meta24901__$1));
});

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24902){
var self__ = this;
var _24902__$1 = this;
return self__.meta24901;
});

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24903 = (function (map_LT_,f,ch,meta24901,_,fn1,meta24904){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24901 = meta24901;
this._ = _;
this.fn1 = fn1;
this.meta24904 = meta24904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24905,meta24904__$1){
var self__ = this;
var _24905__$1 = this;
return (new cljs.core.async.t_cljs$core$async24903(self__.map_LT_,self__.f,self__.ch,self__.meta24901,self__._,self__.fn1,meta24904__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24905){
var self__ = this;
var _24905__$1 = this;
return self__.meta24904;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24893_SHARP_){
return f1.call(null,(((p1__24893_SHARP_ == null))?null:self__.f.call(null,p1__24893_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24903.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24901","meta24901",215699736,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24900","cljs.core.async/t_cljs$core$async24900",-584786581,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24904","meta24904",1327938962,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24903";

cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24903");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24903 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24903(map_LT___$1,f__$1,ch__$1,meta24901__$1,___$2,fn1__$1,meta24904){
return (new cljs.core.async.t_cljs$core$async24903(map_LT___$1,f__$1,ch__$1,meta24901__$1,___$2,fn1__$1,meta24904));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24903(self__.map_LT_,self__.f,self__.ch,self__.meta24901,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24901","meta24901",215699736,null)], null);
});

cljs.core.async.t_cljs$core$async24900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24900";

cljs.core.async.t_cljs$core$async24900.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24900");
});

cljs.core.async.__GT_t_cljs$core$async24900 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24900(map_LT___$1,f__$1,ch__$1,meta24901){
return (new cljs.core.async.t_cljs$core$async24900(map_LT___$1,f__$1,ch__$1,meta24901));
});

}

return (new cljs.core.async.t_cljs$core$async24900(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24909 = (function (map_GT_,f,ch,meta24910){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24910 = meta24910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24911,meta24910__$1){
var self__ = this;
var _24911__$1 = this;
return (new cljs.core.async.t_cljs$core$async24909(self__.map_GT_,self__.f,self__.ch,meta24910__$1));
});

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24911){
var self__ = this;
var _24911__$1 = this;
return self__.meta24910;
});

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24910","meta24910",2084940736,null)], null);
});

cljs.core.async.t_cljs$core$async24909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24909";

cljs.core.async.t_cljs$core$async24909.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24909");
});

cljs.core.async.__GT_t_cljs$core$async24909 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24909(map_GT___$1,f__$1,ch__$1,meta24910){
return (new cljs.core.async.t_cljs$core$async24909(map_GT___$1,f__$1,ch__$1,meta24910));
});

}

return (new cljs.core.async.t_cljs$core$async24909(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24915 = (function (filter_GT_,p,ch,meta24916){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24916 = meta24916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24917,meta24916__$1){
var self__ = this;
var _24917__$1 = this;
return (new cljs.core.async.t_cljs$core$async24915(self__.filter_GT_,self__.p,self__.ch,meta24916__$1));
});

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24917){
var self__ = this;
var _24917__$1 = this;
return self__.meta24916;
});

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24916","meta24916",770734538,null)], null);
});

cljs.core.async.t_cljs$core$async24915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24915";

cljs.core.async.t_cljs$core$async24915.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async24915");
});

cljs.core.async.__GT_t_cljs$core$async24915 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24915(filter_GT___$1,p__$1,ch__$1,meta24916){
return (new cljs.core.async.t_cljs$core$async24915(filter_GT___$1,p__$1,ch__$1,meta24916));
});

}

return (new cljs.core.async.t_cljs$core$async24915(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24918 = [];
var len__5651__auto___24962 = arguments.length;
var i__5652__auto___24963 = (0);
while(true){
if((i__5652__auto___24963 < len__5651__auto___24962)){
args24918.push((arguments[i__5652__auto___24963]));

var G__24964 = (i__5652__auto___24963 + (1));
i__5652__auto___24963 = G__24964;
continue;
} else {
}
break;
}

var G__24920 = args24918.length;
switch (G__24920) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24918.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19653__auto___24966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___24966,out){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___24966,out){
return (function (state_24941){
var state_val_24942 = (state_24941[(1)]);
if((state_val_24942 === (7))){
var inst_24937 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24943_24967 = state_24941__$1;
(statearr_24943_24967[(2)] = inst_24937);

(statearr_24943_24967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (1))){
var state_24941__$1 = state_24941;
var statearr_24944_24968 = state_24941__$1;
(statearr_24944_24968[(2)] = null);

(statearr_24944_24968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (4))){
var inst_24923 = (state_24941[(7)]);
var inst_24923__$1 = (state_24941[(2)]);
var inst_24924 = (inst_24923__$1 == null);
var state_24941__$1 = (function (){var statearr_24945 = state_24941;
(statearr_24945[(7)] = inst_24923__$1);

return statearr_24945;
})();
if(cljs.core.truth_(inst_24924)){
var statearr_24946_24969 = state_24941__$1;
(statearr_24946_24969[(1)] = (5));

} else {
var statearr_24947_24970 = state_24941__$1;
(statearr_24947_24970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (6))){
var inst_24923 = (state_24941[(7)]);
var inst_24928 = p.call(null,inst_24923);
var state_24941__$1 = state_24941;
if(cljs.core.truth_(inst_24928)){
var statearr_24948_24971 = state_24941__$1;
(statearr_24948_24971[(1)] = (8));

} else {
var statearr_24949_24972 = state_24941__$1;
(statearr_24949_24972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (3))){
var inst_24939 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24941__$1,inst_24939);
} else {
if((state_val_24942 === (2))){
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(4),ch);
} else {
if((state_val_24942 === (11))){
var inst_24931 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24950_24973 = state_24941__$1;
(statearr_24950_24973[(2)] = inst_24931);

(statearr_24950_24973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (9))){
var state_24941__$1 = state_24941;
var statearr_24951_24974 = state_24941__$1;
(statearr_24951_24974[(2)] = null);

(statearr_24951_24974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (5))){
var inst_24926 = cljs.core.async.close_BANG_.call(null,out);
var state_24941__$1 = state_24941;
var statearr_24952_24975 = state_24941__$1;
(statearr_24952_24975[(2)] = inst_24926);

(statearr_24952_24975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (10))){
var inst_24934 = (state_24941[(2)]);
var state_24941__$1 = (function (){var statearr_24953 = state_24941;
(statearr_24953[(8)] = inst_24934);

return statearr_24953;
})();
var statearr_24954_24976 = state_24941__$1;
(statearr_24954_24976[(2)] = null);

(statearr_24954_24976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (8))){
var inst_24923 = (state_24941[(7)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(11),out,inst_24923);
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
});})(c__19653__auto___24966,out))
;
return ((function (switch__19588__auto__,c__19653__auto___24966,out){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_24958 = [null,null,null,null,null,null,null,null,null];
(statearr_24958[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_24958[(1)] = (1));

return statearr_24958;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_24941){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_24941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e24959){if((e24959 instanceof Object)){
var ex__19592__auto__ = e24959;
var statearr_24960_24977 = state_24941;
(statearr_24960_24977[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24978 = state_24941;
state_24941 = G__24978;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_24941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_24941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___24966,out))
})();
var state__19655__auto__ = (function (){var statearr_24961 = f__19654__auto__.call(null);
(statearr_24961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___24966);

return statearr_24961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___24966,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24979 = [];
var len__5651__auto___24982 = arguments.length;
var i__5652__auto___24983 = (0);
while(true){
if((i__5652__auto___24983 < len__5651__auto___24982)){
args24979.push((arguments[i__5652__auto___24983]));

var G__24984 = (i__5652__auto___24983 + (1));
i__5652__auto___24983 = G__24984;
continue;
} else {
}
break;
}

var G__24981 = args24979.length;
switch (G__24981) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24979.length)].join('')));

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
var c__19653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto__){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto__){
return (function (state_25151){
var state_val_25152 = (state_25151[(1)]);
if((state_val_25152 === (7))){
var inst_25147 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25153_25194 = state_25151__$1;
(statearr_25153_25194[(2)] = inst_25147);

(statearr_25153_25194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (20))){
var inst_25117 = (state_25151[(7)]);
var inst_25128 = (state_25151[(2)]);
var inst_25129 = cljs.core.next.call(null,inst_25117);
var inst_25103 = inst_25129;
var inst_25104 = null;
var inst_25105 = (0);
var inst_25106 = (0);
var state_25151__$1 = (function (){var statearr_25154 = state_25151;
(statearr_25154[(8)] = inst_25104);

(statearr_25154[(9)] = inst_25106);

(statearr_25154[(10)] = inst_25128);

(statearr_25154[(11)] = inst_25103);

(statearr_25154[(12)] = inst_25105);

return statearr_25154;
})();
var statearr_25155_25195 = state_25151__$1;
(statearr_25155_25195[(2)] = null);

(statearr_25155_25195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (1))){
var state_25151__$1 = state_25151;
var statearr_25156_25196 = state_25151__$1;
(statearr_25156_25196[(2)] = null);

(statearr_25156_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (4))){
var inst_25092 = (state_25151[(13)]);
var inst_25092__$1 = (state_25151[(2)]);
var inst_25093 = (inst_25092__$1 == null);
var state_25151__$1 = (function (){var statearr_25157 = state_25151;
(statearr_25157[(13)] = inst_25092__$1);

return statearr_25157;
})();
if(cljs.core.truth_(inst_25093)){
var statearr_25158_25197 = state_25151__$1;
(statearr_25158_25197[(1)] = (5));

} else {
var statearr_25159_25198 = state_25151__$1;
(statearr_25159_25198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (15))){
var state_25151__$1 = state_25151;
var statearr_25163_25199 = state_25151__$1;
(statearr_25163_25199[(2)] = null);

(statearr_25163_25199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (21))){
var state_25151__$1 = state_25151;
var statearr_25164_25200 = state_25151__$1;
(statearr_25164_25200[(2)] = null);

(statearr_25164_25200[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (13))){
var inst_25104 = (state_25151[(8)]);
var inst_25106 = (state_25151[(9)]);
var inst_25103 = (state_25151[(11)]);
var inst_25105 = (state_25151[(12)]);
var inst_25113 = (state_25151[(2)]);
var inst_25114 = (inst_25106 + (1));
var tmp25160 = inst_25104;
var tmp25161 = inst_25103;
var tmp25162 = inst_25105;
var inst_25103__$1 = tmp25161;
var inst_25104__$1 = tmp25160;
var inst_25105__$1 = tmp25162;
var inst_25106__$1 = inst_25114;
var state_25151__$1 = (function (){var statearr_25165 = state_25151;
(statearr_25165[(8)] = inst_25104__$1);

(statearr_25165[(9)] = inst_25106__$1);

(statearr_25165[(14)] = inst_25113);

(statearr_25165[(11)] = inst_25103__$1);

(statearr_25165[(12)] = inst_25105__$1);

return statearr_25165;
})();
var statearr_25166_25201 = state_25151__$1;
(statearr_25166_25201[(2)] = null);

(statearr_25166_25201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (22))){
var state_25151__$1 = state_25151;
var statearr_25167_25202 = state_25151__$1;
(statearr_25167_25202[(2)] = null);

(statearr_25167_25202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (6))){
var inst_25092 = (state_25151[(13)]);
var inst_25101 = f.call(null,inst_25092);
var inst_25102 = cljs.core.seq.call(null,inst_25101);
var inst_25103 = inst_25102;
var inst_25104 = null;
var inst_25105 = (0);
var inst_25106 = (0);
var state_25151__$1 = (function (){var statearr_25168 = state_25151;
(statearr_25168[(8)] = inst_25104);

(statearr_25168[(9)] = inst_25106);

(statearr_25168[(11)] = inst_25103);

(statearr_25168[(12)] = inst_25105);

return statearr_25168;
})();
var statearr_25169_25203 = state_25151__$1;
(statearr_25169_25203[(2)] = null);

(statearr_25169_25203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (17))){
var inst_25117 = (state_25151[(7)]);
var inst_25121 = cljs.core.chunk_first.call(null,inst_25117);
var inst_25122 = cljs.core.chunk_rest.call(null,inst_25117);
var inst_25123 = cljs.core.count.call(null,inst_25121);
var inst_25103 = inst_25122;
var inst_25104 = inst_25121;
var inst_25105 = inst_25123;
var inst_25106 = (0);
var state_25151__$1 = (function (){var statearr_25170 = state_25151;
(statearr_25170[(8)] = inst_25104);

(statearr_25170[(9)] = inst_25106);

(statearr_25170[(11)] = inst_25103);

(statearr_25170[(12)] = inst_25105);

return statearr_25170;
})();
var statearr_25171_25204 = state_25151__$1;
(statearr_25171_25204[(2)] = null);

(statearr_25171_25204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (3))){
var inst_25149 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25151__$1,inst_25149);
} else {
if((state_val_25152 === (12))){
var inst_25137 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25172_25205 = state_25151__$1;
(statearr_25172_25205[(2)] = inst_25137);

(statearr_25172_25205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (2))){
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25151__$1,(4),in$);
} else {
if((state_val_25152 === (23))){
var inst_25145 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25173_25206 = state_25151__$1;
(statearr_25173_25206[(2)] = inst_25145);

(statearr_25173_25206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (19))){
var inst_25132 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25174_25207 = state_25151__$1;
(statearr_25174_25207[(2)] = inst_25132);

(statearr_25174_25207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (11))){
var inst_25117 = (state_25151[(7)]);
var inst_25103 = (state_25151[(11)]);
var inst_25117__$1 = cljs.core.seq.call(null,inst_25103);
var state_25151__$1 = (function (){var statearr_25175 = state_25151;
(statearr_25175[(7)] = inst_25117__$1);

return statearr_25175;
})();
if(inst_25117__$1){
var statearr_25176_25208 = state_25151__$1;
(statearr_25176_25208[(1)] = (14));

} else {
var statearr_25177_25209 = state_25151__$1;
(statearr_25177_25209[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (9))){
var inst_25139 = (state_25151[(2)]);
var inst_25140 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25151__$1 = (function (){var statearr_25178 = state_25151;
(statearr_25178[(15)] = inst_25139);

return statearr_25178;
})();
if(cljs.core.truth_(inst_25140)){
var statearr_25179_25210 = state_25151__$1;
(statearr_25179_25210[(1)] = (21));

} else {
var statearr_25180_25211 = state_25151__$1;
(statearr_25180_25211[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (5))){
var inst_25095 = cljs.core.async.close_BANG_.call(null,out);
var state_25151__$1 = state_25151;
var statearr_25181_25212 = state_25151__$1;
(statearr_25181_25212[(2)] = inst_25095);

(statearr_25181_25212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (14))){
var inst_25117 = (state_25151[(7)]);
var inst_25119 = cljs.core.chunked_seq_QMARK_.call(null,inst_25117);
var state_25151__$1 = state_25151;
if(inst_25119){
var statearr_25182_25213 = state_25151__$1;
(statearr_25182_25213[(1)] = (17));

} else {
var statearr_25183_25214 = state_25151__$1;
(statearr_25183_25214[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (16))){
var inst_25135 = (state_25151[(2)]);
var state_25151__$1 = state_25151;
var statearr_25184_25215 = state_25151__$1;
(statearr_25184_25215[(2)] = inst_25135);

(statearr_25184_25215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25152 === (10))){
var inst_25104 = (state_25151[(8)]);
var inst_25106 = (state_25151[(9)]);
var inst_25111 = cljs.core._nth.call(null,inst_25104,inst_25106);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25151__$1,(13),out,inst_25111);
} else {
if((state_val_25152 === (18))){
var inst_25117 = (state_25151[(7)]);
var inst_25126 = cljs.core.first.call(null,inst_25117);
var state_25151__$1 = state_25151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25151__$1,(20),out,inst_25126);
} else {
if((state_val_25152 === (8))){
var inst_25106 = (state_25151[(9)]);
var inst_25105 = (state_25151[(12)]);
var inst_25108 = (inst_25106 < inst_25105);
var inst_25109 = inst_25108;
var state_25151__$1 = state_25151;
if(cljs.core.truth_(inst_25109)){
var statearr_25185_25216 = state_25151__$1;
(statearr_25185_25216[(1)] = (10));

} else {
var statearr_25186_25217 = state_25151__$1;
(statearr_25186_25217[(1)] = (11));

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
});})(c__19653__auto__))
;
return ((function (switch__19588__auto__,c__19653__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19589__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19589__auto____0 = (function (){
var statearr_25190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25190[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19589__auto__);

(statearr_25190[(1)] = (1));

return statearr_25190;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19589__auto____1 = (function (state_25151){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_25151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e25191){if((e25191 instanceof Object)){
var ex__19592__auto__ = e25191;
var statearr_25192_25218 = state_25151;
(statearr_25192_25218[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25219 = state_25151;
state_25151 = G__25219;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19589__auto__ = function(state_25151){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19589__auto____1.call(this,state_25151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19589__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19589__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto__))
})();
var state__19655__auto__ = (function (){var statearr_25193 = f__19654__auto__.call(null);
(statearr_25193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto__);

return statearr_25193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto__))
);

return c__19653__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25220 = [];
var len__5651__auto___25223 = arguments.length;
var i__5652__auto___25224 = (0);
while(true){
if((i__5652__auto___25224 < len__5651__auto___25223)){
args25220.push((arguments[i__5652__auto___25224]));

var G__25225 = (i__5652__auto___25224 + (1));
i__5652__auto___25224 = G__25225;
continue;
} else {
}
break;
}

var G__25222 = args25220.length;
switch (G__25222) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25220.length)].join('')));

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
var args25227 = [];
var len__5651__auto___25230 = arguments.length;
var i__5652__auto___25231 = (0);
while(true){
if((i__5652__auto___25231 < len__5651__auto___25230)){
args25227.push((arguments[i__5652__auto___25231]));

var G__25232 = (i__5652__auto___25231 + (1));
i__5652__auto___25231 = G__25232;
continue;
} else {
}
break;
}

var G__25229 = args25227.length;
switch (G__25229) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25227.length)].join('')));

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
var args25234 = [];
var len__5651__auto___25285 = arguments.length;
var i__5652__auto___25286 = (0);
while(true){
if((i__5652__auto___25286 < len__5651__auto___25285)){
args25234.push((arguments[i__5652__auto___25286]));

var G__25287 = (i__5652__auto___25286 + (1));
i__5652__auto___25286 = G__25287;
continue;
} else {
}
break;
}

var G__25236 = args25234.length;
switch (G__25236) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25234.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19653__auto___25289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___25289,out){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___25289,out){
return (function (state_25260){
var state_val_25261 = (state_25260[(1)]);
if((state_val_25261 === (7))){
var inst_25255 = (state_25260[(2)]);
var state_25260__$1 = state_25260;
var statearr_25262_25290 = state_25260__$1;
(statearr_25262_25290[(2)] = inst_25255);

(statearr_25262_25290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (1))){
var inst_25237 = null;
var state_25260__$1 = (function (){var statearr_25263 = state_25260;
(statearr_25263[(7)] = inst_25237);

return statearr_25263;
})();
var statearr_25264_25291 = state_25260__$1;
(statearr_25264_25291[(2)] = null);

(statearr_25264_25291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (4))){
var inst_25240 = (state_25260[(8)]);
var inst_25240__$1 = (state_25260[(2)]);
var inst_25241 = (inst_25240__$1 == null);
var inst_25242 = cljs.core.not.call(null,inst_25241);
var state_25260__$1 = (function (){var statearr_25265 = state_25260;
(statearr_25265[(8)] = inst_25240__$1);

return statearr_25265;
})();
if(inst_25242){
var statearr_25266_25292 = state_25260__$1;
(statearr_25266_25292[(1)] = (5));

} else {
var statearr_25267_25293 = state_25260__$1;
(statearr_25267_25293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (6))){
var state_25260__$1 = state_25260;
var statearr_25268_25294 = state_25260__$1;
(statearr_25268_25294[(2)] = null);

(statearr_25268_25294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (3))){
var inst_25257 = (state_25260[(2)]);
var inst_25258 = cljs.core.async.close_BANG_.call(null,out);
var state_25260__$1 = (function (){var statearr_25269 = state_25260;
(statearr_25269[(9)] = inst_25257);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25260__$1,inst_25258);
} else {
if((state_val_25261 === (2))){
var state_25260__$1 = state_25260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25260__$1,(4),ch);
} else {
if((state_val_25261 === (11))){
var inst_25240 = (state_25260[(8)]);
var inst_25249 = (state_25260[(2)]);
var inst_25237 = inst_25240;
var state_25260__$1 = (function (){var statearr_25270 = state_25260;
(statearr_25270[(7)] = inst_25237);

(statearr_25270[(10)] = inst_25249);

return statearr_25270;
})();
var statearr_25271_25295 = state_25260__$1;
(statearr_25271_25295[(2)] = null);

(statearr_25271_25295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (9))){
var inst_25240 = (state_25260[(8)]);
var state_25260__$1 = state_25260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25260__$1,(11),out,inst_25240);
} else {
if((state_val_25261 === (5))){
var inst_25237 = (state_25260[(7)]);
var inst_25240 = (state_25260[(8)]);
var inst_25244 = cljs.core._EQ_.call(null,inst_25240,inst_25237);
var state_25260__$1 = state_25260;
if(inst_25244){
var statearr_25273_25296 = state_25260__$1;
(statearr_25273_25296[(1)] = (8));

} else {
var statearr_25274_25297 = state_25260__$1;
(statearr_25274_25297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (10))){
var inst_25252 = (state_25260[(2)]);
var state_25260__$1 = state_25260;
var statearr_25275_25298 = state_25260__$1;
(statearr_25275_25298[(2)] = inst_25252);

(statearr_25275_25298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25261 === (8))){
var inst_25237 = (state_25260[(7)]);
var tmp25272 = inst_25237;
var inst_25237__$1 = tmp25272;
var state_25260__$1 = (function (){var statearr_25276 = state_25260;
(statearr_25276[(7)] = inst_25237__$1);

return statearr_25276;
})();
var statearr_25277_25299 = state_25260__$1;
(statearr_25277_25299[(2)] = null);

(statearr_25277_25299[(1)] = (2));


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
});})(c__19653__auto___25289,out))
;
return ((function (switch__19588__auto__,c__19653__auto___25289,out){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_25281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25281[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_25281[(1)] = (1));

return statearr_25281;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_25260){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_25260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e25282){if((e25282 instanceof Object)){
var ex__19592__auto__ = e25282;
var statearr_25283_25300 = state_25260;
(statearr_25283_25300[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25301 = state_25260;
state_25260 = G__25301;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_25260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_25260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___25289,out))
})();
var state__19655__auto__ = (function (){var statearr_25284 = f__19654__auto__.call(null);
(statearr_25284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___25289);

return statearr_25284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___25289,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25302 = [];
var len__5651__auto___25372 = arguments.length;
var i__5652__auto___25373 = (0);
while(true){
if((i__5652__auto___25373 < len__5651__auto___25372)){
args25302.push((arguments[i__5652__auto___25373]));

var G__25374 = (i__5652__auto___25373 + (1));
i__5652__auto___25373 = G__25374;
continue;
} else {
}
break;
}

var G__25304 = args25302.length;
switch (G__25304) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25302.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19653__auto___25376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___25376,out){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___25376,out){
return (function (state_25342){
var state_val_25343 = (state_25342[(1)]);
if((state_val_25343 === (7))){
var inst_25338 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25344_25377 = state_25342__$1;
(statearr_25344_25377[(2)] = inst_25338);

(statearr_25344_25377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (1))){
var inst_25305 = (new Array(n));
var inst_25306 = inst_25305;
var inst_25307 = (0);
var state_25342__$1 = (function (){var statearr_25345 = state_25342;
(statearr_25345[(7)] = inst_25307);

(statearr_25345[(8)] = inst_25306);

return statearr_25345;
})();
var statearr_25346_25378 = state_25342__$1;
(statearr_25346_25378[(2)] = null);

(statearr_25346_25378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (4))){
var inst_25310 = (state_25342[(9)]);
var inst_25310__$1 = (state_25342[(2)]);
var inst_25311 = (inst_25310__$1 == null);
var inst_25312 = cljs.core.not.call(null,inst_25311);
var state_25342__$1 = (function (){var statearr_25347 = state_25342;
(statearr_25347[(9)] = inst_25310__$1);

return statearr_25347;
})();
if(inst_25312){
var statearr_25348_25379 = state_25342__$1;
(statearr_25348_25379[(1)] = (5));

} else {
var statearr_25349_25380 = state_25342__$1;
(statearr_25349_25380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (15))){
var inst_25332 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25350_25381 = state_25342__$1;
(statearr_25350_25381[(2)] = inst_25332);

(statearr_25350_25381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (13))){
var state_25342__$1 = state_25342;
var statearr_25351_25382 = state_25342__$1;
(statearr_25351_25382[(2)] = null);

(statearr_25351_25382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (6))){
var inst_25307 = (state_25342[(7)]);
var inst_25328 = (inst_25307 > (0));
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25328)){
var statearr_25352_25383 = state_25342__$1;
(statearr_25352_25383[(1)] = (12));

} else {
var statearr_25353_25384 = state_25342__$1;
(statearr_25353_25384[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (3))){
var inst_25340 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25342__$1,inst_25340);
} else {
if((state_val_25343 === (12))){
var inst_25306 = (state_25342[(8)]);
var inst_25330 = cljs.core.vec.call(null,inst_25306);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25342__$1,(15),out,inst_25330);
} else {
if((state_val_25343 === (2))){
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25342__$1,(4),ch);
} else {
if((state_val_25343 === (11))){
var inst_25322 = (state_25342[(2)]);
var inst_25323 = (new Array(n));
var inst_25306 = inst_25323;
var inst_25307 = (0);
var state_25342__$1 = (function (){var statearr_25354 = state_25342;
(statearr_25354[(7)] = inst_25307);

(statearr_25354[(10)] = inst_25322);

(statearr_25354[(8)] = inst_25306);

return statearr_25354;
})();
var statearr_25355_25385 = state_25342__$1;
(statearr_25355_25385[(2)] = null);

(statearr_25355_25385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (9))){
var inst_25306 = (state_25342[(8)]);
var inst_25320 = cljs.core.vec.call(null,inst_25306);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25342__$1,(11),out,inst_25320);
} else {
if((state_val_25343 === (5))){
var inst_25307 = (state_25342[(7)]);
var inst_25306 = (state_25342[(8)]);
var inst_25310 = (state_25342[(9)]);
var inst_25315 = (state_25342[(11)]);
var inst_25314 = (inst_25306[inst_25307] = inst_25310);
var inst_25315__$1 = (inst_25307 + (1));
var inst_25316 = (inst_25315__$1 < n);
var state_25342__$1 = (function (){var statearr_25356 = state_25342;
(statearr_25356[(11)] = inst_25315__$1);

(statearr_25356[(12)] = inst_25314);

return statearr_25356;
})();
if(cljs.core.truth_(inst_25316)){
var statearr_25357_25386 = state_25342__$1;
(statearr_25357_25386[(1)] = (8));

} else {
var statearr_25358_25387 = state_25342__$1;
(statearr_25358_25387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (14))){
var inst_25335 = (state_25342[(2)]);
var inst_25336 = cljs.core.async.close_BANG_.call(null,out);
var state_25342__$1 = (function (){var statearr_25360 = state_25342;
(statearr_25360[(13)] = inst_25335);

return statearr_25360;
})();
var statearr_25361_25388 = state_25342__$1;
(statearr_25361_25388[(2)] = inst_25336);

(statearr_25361_25388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (10))){
var inst_25326 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25362_25389 = state_25342__$1;
(statearr_25362_25389[(2)] = inst_25326);

(statearr_25362_25389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (8))){
var inst_25306 = (state_25342[(8)]);
var inst_25315 = (state_25342[(11)]);
var tmp25359 = inst_25306;
var inst_25306__$1 = tmp25359;
var inst_25307 = inst_25315;
var state_25342__$1 = (function (){var statearr_25363 = state_25342;
(statearr_25363[(7)] = inst_25307);

(statearr_25363[(8)] = inst_25306__$1);

return statearr_25363;
})();
var statearr_25364_25390 = state_25342__$1;
(statearr_25364_25390[(2)] = null);

(statearr_25364_25390[(1)] = (2));


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
});})(c__19653__auto___25376,out))
;
return ((function (switch__19588__auto__,c__19653__auto___25376,out){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_25368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25368[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_25368[(1)] = (1));

return statearr_25368;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_25342){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_25342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e25369){if((e25369 instanceof Object)){
var ex__19592__auto__ = e25369;
var statearr_25370_25391 = state_25342;
(statearr_25370_25391[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25392 = state_25342;
state_25342 = G__25392;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_25342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_25342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___25376,out))
})();
var state__19655__auto__ = (function (){var statearr_25371 = f__19654__auto__.call(null);
(statearr_25371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___25376);

return statearr_25371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___25376,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25393 = [];
var len__5651__auto___25467 = arguments.length;
var i__5652__auto___25468 = (0);
while(true){
if((i__5652__auto___25468 < len__5651__auto___25467)){
args25393.push((arguments[i__5652__auto___25468]));

var G__25469 = (i__5652__auto___25468 + (1));
i__5652__auto___25468 = G__25469;
continue;
} else {
}
break;
}

var G__25395 = args25393.length;
switch (G__25395) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25393.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19653__auto___25471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19653__auto___25471,out){
return (function (){
var f__19654__auto__ = (function (){var switch__19588__auto__ = ((function (c__19653__auto___25471,out){
return (function (state_25437){
var state_val_25438 = (state_25437[(1)]);
if((state_val_25438 === (7))){
var inst_25433 = (state_25437[(2)]);
var state_25437__$1 = state_25437;
var statearr_25439_25472 = state_25437__$1;
(statearr_25439_25472[(2)] = inst_25433);

(statearr_25439_25472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (1))){
var inst_25396 = [];
var inst_25397 = inst_25396;
var inst_25398 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25437__$1 = (function (){var statearr_25440 = state_25437;
(statearr_25440[(7)] = inst_25397);

(statearr_25440[(8)] = inst_25398);

return statearr_25440;
})();
var statearr_25441_25473 = state_25437__$1;
(statearr_25441_25473[(2)] = null);

(statearr_25441_25473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (4))){
var inst_25401 = (state_25437[(9)]);
var inst_25401__$1 = (state_25437[(2)]);
var inst_25402 = (inst_25401__$1 == null);
var inst_25403 = cljs.core.not.call(null,inst_25402);
var state_25437__$1 = (function (){var statearr_25442 = state_25437;
(statearr_25442[(9)] = inst_25401__$1);

return statearr_25442;
})();
if(inst_25403){
var statearr_25443_25474 = state_25437__$1;
(statearr_25443_25474[(1)] = (5));

} else {
var statearr_25444_25475 = state_25437__$1;
(statearr_25444_25475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (15))){
var inst_25427 = (state_25437[(2)]);
var state_25437__$1 = state_25437;
var statearr_25445_25476 = state_25437__$1;
(statearr_25445_25476[(2)] = inst_25427);

(statearr_25445_25476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (13))){
var state_25437__$1 = state_25437;
var statearr_25446_25477 = state_25437__$1;
(statearr_25446_25477[(2)] = null);

(statearr_25446_25477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (6))){
var inst_25397 = (state_25437[(7)]);
var inst_25422 = inst_25397.length;
var inst_25423 = (inst_25422 > (0));
var state_25437__$1 = state_25437;
if(cljs.core.truth_(inst_25423)){
var statearr_25447_25478 = state_25437__$1;
(statearr_25447_25478[(1)] = (12));

} else {
var statearr_25448_25479 = state_25437__$1;
(statearr_25448_25479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (3))){
var inst_25435 = (state_25437[(2)]);
var state_25437__$1 = state_25437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25437__$1,inst_25435);
} else {
if((state_val_25438 === (12))){
var inst_25397 = (state_25437[(7)]);
var inst_25425 = cljs.core.vec.call(null,inst_25397);
var state_25437__$1 = state_25437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25437__$1,(15),out,inst_25425);
} else {
if((state_val_25438 === (2))){
var state_25437__$1 = state_25437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25437__$1,(4),ch);
} else {
if((state_val_25438 === (11))){
var inst_25405 = (state_25437[(10)]);
var inst_25401 = (state_25437[(9)]);
var inst_25415 = (state_25437[(2)]);
var inst_25416 = [];
var inst_25417 = inst_25416.push(inst_25401);
var inst_25397 = inst_25416;
var inst_25398 = inst_25405;
var state_25437__$1 = (function (){var statearr_25449 = state_25437;
(statearr_25449[(11)] = inst_25417);

(statearr_25449[(12)] = inst_25415);

(statearr_25449[(7)] = inst_25397);

(statearr_25449[(8)] = inst_25398);

return statearr_25449;
})();
var statearr_25450_25480 = state_25437__$1;
(statearr_25450_25480[(2)] = null);

(statearr_25450_25480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (9))){
var inst_25397 = (state_25437[(7)]);
var inst_25413 = cljs.core.vec.call(null,inst_25397);
var state_25437__$1 = state_25437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25437__$1,(11),out,inst_25413);
} else {
if((state_val_25438 === (5))){
var inst_25405 = (state_25437[(10)]);
var inst_25398 = (state_25437[(8)]);
var inst_25401 = (state_25437[(9)]);
var inst_25405__$1 = f.call(null,inst_25401);
var inst_25406 = cljs.core._EQ_.call(null,inst_25405__$1,inst_25398);
var inst_25407 = cljs.core.keyword_identical_QMARK_.call(null,inst_25398,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25408 = (inst_25406) || (inst_25407);
var state_25437__$1 = (function (){var statearr_25451 = state_25437;
(statearr_25451[(10)] = inst_25405__$1);

return statearr_25451;
})();
if(cljs.core.truth_(inst_25408)){
var statearr_25452_25481 = state_25437__$1;
(statearr_25452_25481[(1)] = (8));

} else {
var statearr_25453_25482 = state_25437__$1;
(statearr_25453_25482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (14))){
var inst_25430 = (state_25437[(2)]);
var inst_25431 = cljs.core.async.close_BANG_.call(null,out);
var state_25437__$1 = (function (){var statearr_25455 = state_25437;
(statearr_25455[(13)] = inst_25430);

return statearr_25455;
})();
var statearr_25456_25483 = state_25437__$1;
(statearr_25456_25483[(2)] = inst_25431);

(statearr_25456_25483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (10))){
var inst_25420 = (state_25437[(2)]);
var state_25437__$1 = state_25437;
var statearr_25457_25484 = state_25437__$1;
(statearr_25457_25484[(2)] = inst_25420);

(statearr_25457_25484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25438 === (8))){
var inst_25405 = (state_25437[(10)]);
var inst_25397 = (state_25437[(7)]);
var inst_25401 = (state_25437[(9)]);
var inst_25410 = inst_25397.push(inst_25401);
var tmp25454 = inst_25397;
var inst_25397__$1 = tmp25454;
var inst_25398 = inst_25405;
var state_25437__$1 = (function (){var statearr_25458 = state_25437;
(statearr_25458[(7)] = inst_25397__$1);

(statearr_25458[(8)] = inst_25398);

(statearr_25458[(14)] = inst_25410);

return statearr_25458;
})();
var statearr_25459_25485 = state_25437__$1;
(statearr_25459_25485[(2)] = null);

(statearr_25459_25485[(1)] = (2));


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
});})(c__19653__auto___25471,out))
;
return ((function (switch__19588__auto__,c__19653__auto___25471,out){
return (function() {
var cljs$core$async$state_machine__19589__auto__ = null;
var cljs$core$async$state_machine__19589__auto____0 = (function (){
var statearr_25463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25463[(0)] = cljs$core$async$state_machine__19589__auto__);

(statearr_25463[(1)] = (1));

return statearr_25463;
});
var cljs$core$async$state_machine__19589__auto____1 = (function (state_25437){
while(true){
var ret_value__19590__auto__ = (function (){try{while(true){
var result__19591__auto__ = switch__19588__auto__.call(null,state_25437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19591__auto__;
}
break;
}
}catch (e25464){if((e25464 instanceof Object)){
var ex__19592__auto__ = e25464;
var statearr_25465_25486 = state_25437;
(statearr_25465_25486[(5)] = ex__19592__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25487 = state_25437;
state_25437 = G__25487;
continue;
} else {
return ret_value__19590__auto__;
}
break;
}
});
cljs$core$async$state_machine__19589__auto__ = function(state_25437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19589__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19589__auto____1.call(this,state_25437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19589__auto____0;
cljs$core$async$state_machine__19589__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19589__auto____1;
return cljs$core$async$state_machine__19589__auto__;
})()
;})(switch__19588__auto__,c__19653__auto___25471,out))
})();
var state__19655__auto__ = (function (){var statearr_25466 = f__19654__auto__.call(null);
(statearr_25466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19653__auto___25471);

return statearr_25466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19655__auto__);
});})(c__19653__auto___25471,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map