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
if(typeof cljs.core.async.t_cljs$core$async25163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25163 = (function (fn_handler,f,meta25164){
this.fn_handler = fn_handler;
this.f = f;
this.meta25164 = meta25164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25165,meta25164__$1){
var self__ = this;
var _25165__$1 = this;
return (new cljs.core.async.t_cljs$core$async25163(self__.fn_handler,self__.f,meta25164__$1));
});

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25165){
var self__ = this;
var _25165__$1 = this;
return self__.meta25164;
});

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25164","meta25164",1504669997,null)], null);
});

cljs.core.async.t_cljs$core$async25163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25163";

cljs.core.async.t_cljs$core$async25163.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async25163");
});

cljs.core.async.__GT_t_cljs$core$async25163 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25163(fn_handler__$1,f__$1,meta25164){
return (new cljs.core.async.t_cljs$core$async25163(fn_handler__$1,f__$1,meta25164));
});

}

return (new cljs.core.async.t_cljs$core$async25163(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25168 = [];
var len__5651__auto___25171 = arguments.length;
var i__5652__auto___25172 = (0);
while(true){
if((i__5652__auto___25172 < len__5651__auto___25171)){
args25168.push((arguments[i__5652__auto___25172]));

var G__25173 = (i__5652__auto___25172 + (1));
i__5652__auto___25172 = G__25173;
continue;
} else {
}
break;
}

var G__25170 = args25168.length;
switch (G__25170) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25168.length)].join('')));

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
var args25175 = [];
var len__5651__auto___25178 = arguments.length;
var i__5652__auto___25179 = (0);
while(true){
if((i__5652__auto___25179 < len__5651__auto___25178)){
args25175.push((arguments[i__5652__auto___25179]));

var G__25180 = (i__5652__auto___25179 + (1));
i__5652__auto___25179 = G__25180;
continue;
} else {
}
break;
}

var G__25177 = args25175.length;
switch (G__25177) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25175.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25182 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25182);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25182,ret){
return (function (){
return fn1.call(null,val_25182);
});})(val_25182,ret))
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
var args25183 = [];
var len__5651__auto___25186 = arguments.length;
var i__5652__auto___25187 = (0);
while(true){
if((i__5652__auto___25187 < len__5651__auto___25186)){
args25183.push((arguments[i__5652__auto___25187]));

var G__25188 = (i__5652__auto___25187 + (1));
i__5652__auto___25187 = G__25188;
continue;
} else {
}
break;
}

var G__25185 = args25183.length;
switch (G__25185) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25183.length)].join('')));

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
var n__5496__auto___25190 = n;
var x_25191 = (0);
while(true){
if((x_25191 < n__5496__auto___25190)){
(a[x_25191] = (0));

var G__25192 = (x_25191 + (1));
x_25191 = G__25192;
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

var G__25193 = (i + (1));
i = G__25193;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25197 = (function (alt_flag,flag,meta25198){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25198 = meta25198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25199,meta25198__$1){
var self__ = this;
var _25199__$1 = this;
return (new cljs.core.async.t_cljs$core$async25197(self__.alt_flag,self__.flag,meta25198__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25199){
var self__ = this;
var _25199__$1 = this;
return self__.meta25198;
});})(flag))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25197.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25198","meta25198",-265831635,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25197";

cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async25197");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25197 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25197(alt_flag__$1,flag__$1,meta25198){
return (new cljs.core.async.t_cljs$core$async25197(alt_flag__$1,flag__$1,meta25198));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25197(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25203 = (function (alt_handler,flag,cb,meta25204){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25204 = meta25204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25205,meta25204__$1){
var self__ = this;
var _25205__$1 = this;
return (new cljs.core.async.t_cljs$core$async25203(self__.alt_handler,self__.flag,self__.cb,meta25204__$1));
});

cljs.core.async.t_cljs$core$async25203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25205){
var self__ = this;
var _25205__$1 = this;
return self__.meta25204;
});

cljs.core.async.t_cljs$core$async25203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25204","meta25204",-50446427,null)], null);
});

cljs.core.async.t_cljs$core$async25203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25203";

cljs.core.async.t_cljs$core$async25203.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async25203");
});

cljs.core.async.__GT_t_cljs$core$async25203 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25203(alt_handler__$1,flag__$1,cb__$1,meta25204){
return (new cljs.core.async.t_cljs$core$async25203(alt_handler__$1,flag__$1,cb__$1,meta25204));
});

}

return (new cljs.core.async.t_cljs$core$async25203(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25206_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25206_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25207_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25207_SHARP_,port], null));
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
var G__25208 = (i + (1));
i = G__25208;
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
var len__5651__auto___25214 = arguments.length;
var i__5652__auto___25215 = (0);
while(true){
if((i__5652__auto___25215 < len__5651__auto___25214)){
args__5658__auto__.push((arguments[i__5652__auto___25215]));

var G__25216 = (i__5652__auto___25215 + (1));
i__5652__auto___25215 = G__25216;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25211){
var map__25212 = p__25211;
var map__25212__$1 = ((((!((map__25212 == null)))?((((map__25212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25212):map__25212);
var opts = map__25212__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25209){
var G__25210 = cljs.core.first.call(null,seq25209);
var seq25209__$1 = cljs.core.next.call(null,seq25209);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25210,seq25209__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25217 = [];
var len__5651__auto___25267 = arguments.length;
var i__5652__auto___25268 = (0);
while(true){
if((i__5652__auto___25268 < len__5651__auto___25267)){
args25217.push((arguments[i__5652__auto___25268]));

var G__25269 = (i__5652__auto___25268 + (1));
i__5652__auto___25268 = G__25269;
continue;
} else {
}
break;
}

var G__25219 = args25217.length;
switch (G__25219) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25217.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21741__auto___25271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___25271){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___25271){
return (function (state_25243){
var state_val_25244 = (state_25243[(1)]);
if((state_val_25244 === (7))){
var inst_25239 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25245_25272 = state_25243__$1;
(statearr_25245_25272[(2)] = inst_25239);

(statearr_25245_25272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (1))){
var state_25243__$1 = state_25243;
var statearr_25246_25273 = state_25243__$1;
(statearr_25246_25273[(2)] = null);

(statearr_25246_25273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (4))){
var inst_25222 = (state_25243[(7)]);
var inst_25222__$1 = (state_25243[(2)]);
var inst_25223 = (inst_25222__$1 == null);
var state_25243__$1 = (function (){var statearr_25247 = state_25243;
(statearr_25247[(7)] = inst_25222__$1);

return statearr_25247;
})();
if(cljs.core.truth_(inst_25223)){
var statearr_25248_25274 = state_25243__$1;
(statearr_25248_25274[(1)] = (5));

} else {
var statearr_25249_25275 = state_25243__$1;
(statearr_25249_25275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (13))){
var state_25243__$1 = state_25243;
var statearr_25250_25276 = state_25243__$1;
(statearr_25250_25276[(2)] = null);

(statearr_25250_25276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (6))){
var inst_25222 = (state_25243[(7)]);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25243__$1,(11),to,inst_25222);
} else {
if((state_val_25244 === (3))){
var inst_25241 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25243__$1,inst_25241);
} else {
if((state_val_25244 === (12))){
var state_25243__$1 = state_25243;
var statearr_25251_25277 = state_25243__$1;
(statearr_25251_25277[(2)] = null);

(statearr_25251_25277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (2))){
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25243__$1,(4),from);
} else {
if((state_val_25244 === (11))){
var inst_25232 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
if(cljs.core.truth_(inst_25232)){
var statearr_25252_25278 = state_25243__$1;
(statearr_25252_25278[(1)] = (12));

} else {
var statearr_25253_25279 = state_25243__$1;
(statearr_25253_25279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (9))){
var state_25243__$1 = state_25243;
var statearr_25254_25280 = state_25243__$1;
(statearr_25254_25280[(2)] = null);

(statearr_25254_25280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (5))){
var state_25243__$1 = state_25243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25255_25281 = state_25243__$1;
(statearr_25255_25281[(1)] = (8));

} else {
var statearr_25256_25282 = state_25243__$1;
(statearr_25256_25282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (14))){
var inst_25237 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25257_25283 = state_25243__$1;
(statearr_25257_25283[(2)] = inst_25237);

(statearr_25257_25283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (10))){
var inst_25229 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25258_25284 = state_25243__$1;
(statearr_25258_25284[(2)] = inst_25229);

(statearr_25258_25284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (8))){
var inst_25226 = cljs.core.async.close_BANG_.call(null,to);
var state_25243__$1 = state_25243;
var statearr_25259_25285 = state_25243__$1;
(statearr_25259_25285[(2)] = inst_25226);

(statearr_25259_25285[(1)] = (10));


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
});})(c__21741__auto___25271))
;
return ((function (switch__21676__auto__,c__21741__auto___25271){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_25263 = [null,null,null,null,null,null,null,null];
(statearr_25263[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_25263[(1)] = (1));

return statearr_25263;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_25243){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25264){if((e25264 instanceof Object)){
var ex__21680__auto__ = e25264;
var statearr_25265_25286 = state_25243;
(statearr_25265_25286[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25287 = state_25243;
state_25243 = G__25287;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_25243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_25243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___25271))
})();
var state__21743__auto__ = (function (){var statearr_25266 = f__21742__auto__.call(null);
(statearr_25266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___25271);

return statearr_25266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___25271))
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
return (function (p__25471){
var vec__25472 = p__25471;
var v = cljs.core.nth.call(null,vec__25472,(0),null);
var p = cljs.core.nth.call(null,vec__25472,(1),null);
var job = vec__25472;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21741__auto___25654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___25654,res,vec__25472,v,p,job,jobs,results){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___25654,res,vec__25472,v,p,job,jobs,results){
return (function (state_25477){
var state_val_25478 = (state_25477[(1)]);
if((state_val_25478 === (1))){
var state_25477__$1 = state_25477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25477__$1,(2),res,v);
} else {
if((state_val_25478 === (2))){
var inst_25474 = (state_25477[(2)]);
var inst_25475 = cljs.core.async.close_BANG_.call(null,res);
var state_25477__$1 = (function (){var statearr_25479 = state_25477;
(statearr_25479[(7)] = inst_25474);

return statearr_25479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25477__$1,inst_25475);
} else {
return null;
}
}
});})(c__21741__auto___25654,res,vec__25472,v,p,job,jobs,results))
;
return ((function (switch__21676__auto__,c__21741__auto___25654,res,vec__25472,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0 = (function (){
var statearr_25483 = [null,null,null,null,null,null,null,null];
(statearr_25483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__);

(statearr_25483[(1)] = (1));

return statearr_25483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1 = (function (state_25477){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25484){if((e25484 instanceof Object)){
var ex__21680__auto__ = e25484;
var statearr_25485_25655 = state_25477;
(statearr_25485_25655[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25656 = state_25477;
state_25477 = G__25656;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = function(state_25477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1.call(this,state_25477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___25654,res,vec__25472,v,p,job,jobs,results))
})();
var state__21743__auto__ = (function (){var statearr_25486 = f__21742__auto__.call(null);
(statearr_25486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___25654);

return statearr_25486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___25654,res,vec__25472,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25487){
var vec__25488 = p__25487;
var v = cljs.core.nth.call(null,vec__25488,(0),null);
var p = cljs.core.nth.call(null,vec__25488,(1),null);
var job = vec__25488;
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
var n__5496__auto___25657 = n;
var __25658 = (0);
while(true){
if((__25658 < n__5496__auto___25657)){
var G__25489_25659 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25489_25659) {
case "compute":
var c__21741__auto___25661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25658,c__21741__auto___25661,G__25489_25659,n__5496__auto___25657,jobs,results,process,async){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (__25658,c__21741__auto___25661,G__25489_25659,n__5496__auto___25657,jobs,results,process,async){
return (function (state_25502){
var state_val_25503 = (state_25502[(1)]);
if((state_val_25503 === (1))){
var state_25502__$1 = state_25502;
var statearr_25504_25662 = state_25502__$1;
(statearr_25504_25662[(2)] = null);

(statearr_25504_25662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (2))){
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25502__$1,(4),jobs);
} else {
if((state_val_25503 === (3))){
var inst_25500 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25502__$1,inst_25500);
} else {
if((state_val_25503 === (4))){
var inst_25492 = (state_25502[(2)]);
var inst_25493 = process.call(null,inst_25492);
var state_25502__$1 = state_25502;
if(cljs.core.truth_(inst_25493)){
var statearr_25505_25663 = state_25502__$1;
(statearr_25505_25663[(1)] = (5));

} else {
var statearr_25506_25664 = state_25502__$1;
(statearr_25506_25664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (5))){
var state_25502__$1 = state_25502;
var statearr_25507_25665 = state_25502__$1;
(statearr_25507_25665[(2)] = null);

(statearr_25507_25665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (6))){
var state_25502__$1 = state_25502;
var statearr_25508_25666 = state_25502__$1;
(statearr_25508_25666[(2)] = null);

(statearr_25508_25666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (7))){
var inst_25498 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25509_25667 = state_25502__$1;
(statearr_25509_25667[(2)] = inst_25498);

(statearr_25509_25667[(1)] = (3));


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
});})(__25658,c__21741__auto___25661,G__25489_25659,n__5496__auto___25657,jobs,results,process,async))
;
return ((function (__25658,switch__21676__auto__,c__21741__auto___25661,G__25489_25659,n__5496__auto___25657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0 = (function (){
var statearr_25513 = [null,null,null,null,null,null,null];
(statearr_25513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__);

(statearr_25513[(1)] = (1));

return statearr_25513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1 = (function (state_25502){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25514){if((e25514 instanceof Object)){
var ex__21680__auto__ = e25514;
var statearr_25515_25668 = state_25502;
(statearr_25515_25668[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25669 = state_25502;
state_25502 = G__25669;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = function(state_25502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1.call(this,state_25502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__;
})()
;})(__25658,switch__21676__auto__,c__21741__auto___25661,G__25489_25659,n__5496__auto___25657,jobs,results,process,async))
})();
var state__21743__auto__ = (function (){var statearr_25516 = f__21742__auto__.call(null);
(statearr_25516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___25661);

return statearr_25516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(__25658,c__21741__auto___25661,G__25489_25659,n__5496__auto___25657,jobs,results,process,async))
);


break;
case "async":
var c__21741__auto___25670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25658,c__21741__auto___25670,G__25489_25659,n__5496__auto___25657,jobs,results,process,async){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (__25658,c__21741__auto___25670,G__25489_25659,n__5496__auto___25657,jobs,results,process,async){
return (function (state_25529){
var state_val_25530 = (state_25529[(1)]);
if((state_val_25530 === (1))){
var state_25529__$1 = state_25529;
var statearr_25531_25671 = state_25529__$1;
(statearr_25531_25671[(2)] = null);

(statearr_25531_25671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (2))){
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25529__$1,(4),jobs);
} else {
if((state_val_25530 === (3))){
var inst_25527 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25529__$1,inst_25527);
} else {
if((state_val_25530 === (4))){
var inst_25519 = (state_25529[(2)]);
var inst_25520 = async.call(null,inst_25519);
var state_25529__$1 = state_25529;
if(cljs.core.truth_(inst_25520)){
var statearr_25532_25672 = state_25529__$1;
(statearr_25532_25672[(1)] = (5));

} else {
var statearr_25533_25673 = state_25529__$1;
(statearr_25533_25673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (5))){
var state_25529__$1 = state_25529;
var statearr_25534_25674 = state_25529__$1;
(statearr_25534_25674[(2)] = null);

(statearr_25534_25674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (6))){
var state_25529__$1 = state_25529;
var statearr_25535_25675 = state_25529__$1;
(statearr_25535_25675[(2)] = null);

(statearr_25535_25675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25530 === (7))){
var inst_25525 = (state_25529[(2)]);
var state_25529__$1 = state_25529;
var statearr_25536_25676 = state_25529__$1;
(statearr_25536_25676[(2)] = inst_25525);

(statearr_25536_25676[(1)] = (3));


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
});})(__25658,c__21741__auto___25670,G__25489_25659,n__5496__auto___25657,jobs,results,process,async))
;
return ((function (__25658,switch__21676__auto__,c__21741__auto___25670,G__25489_25659,n__5496__auto___25657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0 = (function (){
var statearr_25540 = [null,null,null,null,null,null,null];
(statearr_25540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__);

(statearr_25540[(1)] = (1));

return statearr_25540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1 = (function (state_25529){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25541){if((e25541 instanceof Object)){
var ex__21680__auto__ = e25541;
var statearr_25542_25677 = state_25529;
(statearr_25542_25677[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25678 = state_25529;
state_25529 = G__25678;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = function(state_25529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1.call(this,state_25529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__;
})()
;})(__25658,switch__21676__auto__,c__21741__auto___25670,G__25489_25659,n__5496__auto___25657,jobs,results,process,async))
})();
var state__21743__auto__ = (function (){var statearr_25543 = f__21742__auto__.call(null);
(statearr_25543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___25670);

return statearr_25543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(__25658,c__21741__auto___25670,G__25489_25659,n__5496__auto___25657,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25679 = (__25658 + (1));
__25658 = G__25679;
continue;
} else {
}
break;
}

var c__21741__auto___25680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___25680,jobs,results,process,async){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___25680,jobs,results,process,async){
return (function (state_25565){
var state_val_25566 = (state_25565[(1)]);
if((state_val_25566 === (1))){
var state_25565__$1 = state_25565;
var statearr_25567_25681 = state_25565__$1;
(statearr_25567_25681[(2)] = null);

(statearr_25567_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (2))){
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(4),from);
} else {
if((state_val_25566 === (3))){
var inst_25563 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25565__$1,inst_25563);
} else {
if((state_val_25566 === (4))){
var inst_25546 = (state_25565[(7)]);
var inst_25546__$1 = (state_25565[(2)]);
var inst_25547 = (inst_25546__$1 == null);
var state_25565__$1 = (function (){var statearr_25568 = state_25565;
(statearr_25568[(7)] = inst_25546__$1);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25547)){
var statearr_25569_25682 = state_25565__$1;
(statearr_25569_25682[(1)] = (5));

} else {
var statearr_25570_25683 = state_25565__$1;
(statearr_25570_25683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (5))){
var inst_25549 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25565__$1 = state_25565;
var statearr_25571_25684 = state_25565__$1;
(statearr_25571_25684[(2)] = inst_25549);

(statearr_25571_25684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (6))){
var inst_25546 = (state_25565[(7)]);
var inst_25551 = (state_25565[(8)]);
var inst_25551__$1 = cljs.core.async.chan.call(null,(1));
var inst_25552 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25553 = [inst_25546,inst_25551__$1];
var inst_25554 = (new cljs.core.PersistentVector(null,2,(5),inst_25552,inst_25553,null));
var state_25565__$1 = (function (){var statearr_25572 = state_25565;
(statearr_25572[(8)] = inst_25551__$1);

return statearr_25572;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25565__$1,(8),jobs,inst_25554);
} else {
if((state_val_25566 === (7))){
var inst_25561 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
var statearr_25573_25685 = state_25565__$1;
(statearr_25573_25685[(2)] = inst_25561);

(statearr_25573_25685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (8))){
var inst_25551 = (state_25565[(8)]);
var inst_25556 = (state_25565[(2)]);
var state_25565__$1 = (function (){var statearr_25574 = state_25565;
(statearr_25574[(9)] = inst_25556);

return statearr_25574;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25565__$1,(9),results,inst_25551);
} else {
if((state_val_25566 === (9))){
var inst_25558 = (state_25565[(2)]);
var state_25565__$1 = (function (){var statearr_25575 = state_25565;
(statearr_25575[(10)] = inst_25558);

return statearr_25575;
})();
var statearr_25576_25686 = state_25565__$1;
(statearr_25576_25686[(2)] = null);

(statearr_25576_25686[(1)] = (2));


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
});})(c__21741__auto___25680,jobs,results,process,async))
;
return ((function (switch__21676__auto__,c__21741__auto___25680,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0 = (function (){
var statearr_25580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__);

(statearr_25580[(1)] = (1));

return statearr_25580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1 = (function (state_25565){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25581){if((e25581 instanceof Object)){
var ex__21680__auto__ = e25581;
var statearr_25582_25687 = state_25565;
(statearr_25582_25687[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25688 = state_25565;
state_25565 = G__25688;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = function(state_25565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1.call(this,state_25565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___25680,jobs,results,process,async))
})();
var state__21743__auto__ = (function (){var statearr_25583 = f__21742__auto__.call(null);
(statearr_25583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___25680);

return statearr_25583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___25680,jobs,results,process,async))
);


var c__21741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto__,jobs,results,process,async){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto__,jobs,results,process,async){
return (function (state_25621){
var state_val_25622 = (state_25621[(1)]);
if((state_val_25622 === (7))){
var inst_25617 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
var statearr_25623_25689 = state_25621__$1;
(statearr_25623_25689[(2)] = inst_25617);

(statearr_25623_25689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (20))){
var state_25621__$1 = state_25621;
var statearr_25624_25690 = state_25621__$1;
(statearr_25624_25690[(2)] = null);

(statearr_25624_25690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (1))){
var state_25621__$1 = state_25621;
var statearr_25625_25691 = state_25621__$1;
(statearr_25625_25691[(2)] = null);

(statearr_25625_25691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (4))){
var inst_25586 = (state_25621[(7)]);
var inst_25586__$1 = (state_25621[(2)]);
var inst_25587 = (inst_25586__$1 == null);
var state_25621__$1 = (function (){var statearr_25626 = state_25621;
(statearr_25626[(7)] = inst_25586__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25587)){
var statearr_25627_25692 = state_25621__$1;
(statearr_25627_25692[(1)] = (5));

} else {
var statearr_25628_25693 = state_25621__$1;
(statearr_25628_25693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (15))){
var inst_25599 = (state_25621[(8)]);
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25621__$1,(18),to,inst_25599);
} else {
if((state_val_25622 === (21))){
var inst_25612 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
var statearr_25629_25694 = state_25621__$1;
(statearr_25629_25694[(2)] = inst_25612);

(statearr_25629_25694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (13))){
var inst_25614 = (state_25621[(2)]);
var state_25621__$1 = (function (){var statearr_25630 = state_25621;
(statearr_25630[(9)] = inst_25614);

return statearr_25630;
})();
var statearr_25631_25695 = state_25621__$1;
(statearr_25631_25695[(2)] = null);

(statearr_25631_25695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (6))){
var inst_25586 = (state_25621[(7)]);
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25621__$1,(11),inst_25586);
} else {
if((state_val_25622 === (17))){
var inst_25607 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
if(cljs.core.truth_(inst_25607)){
var statearr_25632_25696 = state_25621__$1;
(statearr_25632_25696[(1)] = (19));

} else {
var statearr_25633_25697 = state_25621__$1;
(statearr_25633_25697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (3))){
var inst_25619 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25621__$1,inst_25619);
} else {
if((state_val_25622 === (12))){
var inst_25596 = (state_25621[(10)]);
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25621__$1,(14),inst_25596);
} else {
if((state_val_25622 === (2))){
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25621__$1,(4),results);
} else {
if((state_val_25622 === (19))){
var state_25621__$1 = state_25621;
var statearr_25634_25698 = state_25621__$1;
(statearr_25634_25698[(2)] = null);

(statearr_25634_25698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (11))){
var inst_25596 = (state_25621[(2)]);
var state_25621__$1 = (function (){var statearr_25635 = state_25621;
(statearr_25635[(10)] = inst_25596);

return statearr_25635;
})();
var statearr_25636_25699 = state_25621__$1;
(statearr_25636_25699[(2)] = null);

(statearr_25636_25699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (9))){
var state_25621__$1 = state_25621;
var statearr_25637_25700 = state_25621__$1;
(statearr_25637_25700[(2)] = null);

(statearr_25637_25700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (5))){
var state_25621__$1 = state_25621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25638_25701 = state_25621__$1;
(statearr_25638_25701[(1)] = (8));

} else {
var statearr_25639_25702 = state_25621__$1;
(statearr_25639_25702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (14))){
var inst_25601 = (state_25621[(11)]);
var inst_25599 = (state_25621[(8)]);
var inst_25599__$1 = (state_25621[(2)]);
var inst_25600 = (inst_25599__$1 == null);
var inst_25601__$1 = cljs.core.not.call(null,inst_25600);
var state_25621__$1 = (function (){var statearr_25640 = state_25621;
(statearr_25640[(11)] = inst_25601__$1);

(statearr_25640[(8)] = inst_25599__$1);

return statearr_25640;
})();
if(inst_25601__$1){
var statearr_25641_25703 = state_25621__$1;
(statearr_25641_25703[(1)] = (15));

} else {
var statearr_25642_25704 = state_25621__$1;
(statearr_25642_25704[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (16))){
var inst_25601 = (state_25621[(11)]);
var state_25621__$1 = state_25621;
var statearr_25643_25705 = state_25621__$1;
(statearr_25643_25705[(2)] = inst_25601);

(statearr_25643_25705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (10))){
var inst_25593 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
var statearr_25644_25706 = state_25621__$1;
(statearr_25644_25706[(2)] = inst_25593);

(statearr_25644_25706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (18))){
var inst_25604 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
var statearr_25645_25707 = state_25621__$1;
(statearr_25645_25707[(2)] = inst_25604);

(statearr_25645_25707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25622 === (8))){
var inst_25590 = cljs.core.async.close_BANG_.call(null,to);
var state_25621__$1 = state_25621;
var statearr_25646_25708 = state_25621__$1;
(statearr_25646_25708[(2)] = inst_25590);

(statearr_25646_25708[(1)] = (10));


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
});})(c__21741__auto__,jobs,results,process,async))
;
return ((function (switch__21676__auto__,c__21741__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0 = (function (){
var statearr_25650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__);

(statearr_25650[(1)] = (1));

return statearr_25650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1 = (function (state_25621){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25651){if((e25651 instanceof Object)){
var ex__21680__auto__ = e25651;
var statearr_25652_25709 = state_25621;
(statearr_25652_25709[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25710 = state_25621;
state_25621 = G__25710;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__ = function(state_25621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1.call(this,state_25621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto__,jobs,results,process,async))
})();
var state__21743__auto__ = (function (){var statearr_25653 = f__21742__auto__.call(null);
(statearr_25653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto__);

return statearr_25653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto__,jobs,results,process,async))
);

return c__21741__auto__;
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
var args25711 = [];
var len__5651__auto___25714 = arguments.length;
var i__5652__auto___25715 = (0);
while(true){
if((i__5652__auto___25715 < len__5651__auto___25714)){
args25711.push((arguments[i__5652__auto___25715]));

var G__25716 = (i__5652__auto___25715 + (1));
i__5652__auto___25715 = G__25716;
continue;
} else {
}
break;
}

var G__25713 = args25711.length;
switch (G__25713) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25711.length)].join('')));

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
var args25718 = [];
var len__5651__auto___25721 = arguments.length;
var i__5652__auto___25722 = (0);
while(true){
if((i__5652__auto___25722 < len__5651__auto___25721)){
args25718.push((arguments[i__5652__auto___25722]));

var G__25723 = (i__5652__auto___25722 + (1));
i__5652__auto___25722 = G__25723;
continue;
} else {
}
break;
}

var G__25720 = args25718.length;
switch (G__25720) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25718.length)].join('')));

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
var args25725 = [];
var len__5651__auto___25778 = arguments.length;
var i__5652__auto___25779 = (0);
while(true){
if((i__5652__auto___25779 < len__5651__auto___25778)){
args25725.push((arguments[i__5652__auto___25779]));

var G__25780 = (i__5652__auto___25779 + (1));
i__5652__auto___25779 = G__25780;
continue;
} else {
}
break;
}

var G__25727 = args25725.length;
switch (G__25727) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25725.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21741__auto___25782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___25782,tc,fc){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___25782,tc,fc){
return (function (state_25753){
var state_val_25754 = (state_25753[(1)]);
if((state_val_25754 === (7))){
var inst_25749 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25755_25783 = state_25753__$1;
(statearr_25755_25783[(2)] = inst_25749);

(statearr_25755_25783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (1))){
var state_25753__$1 = state_25753;
var statearr_25756_25784 = state_25753__$1;
(statearr_25756_25784[(2)] = null);

(statearr_25756_25784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (4))){
var inst_25730 = (state_25753[(7)]);
var inst_25730__$1 = (state_25753[(2)]);
var inst_25731 = (inst_25730__$1 == null);
var state_25753__$1 = (function (){var statearr_25757 = state_25753;
(statearr_25757[(7)] = inst_25730__$1);

return statearr_25757;
})();
if(cljs.core.truth_(inst_25731)){
var statearr_25758_25785 = state_25753__$1;
(statearr_25758_25785[(1)] = (5));

} else {
var statearr_25759_25786 = state_25753__$1;
(statearr_25759_25786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (13))){
var state_25753__$1 = state_25753;
var statearr_25760_25787 = state_25753__$1;
(statearr_25760_25787[(2)] = null);

(statearr_25760_25787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (6))){
var inst_25730 = (state_25753[(7)]);
var inst_25736 = p.call(null,inst_25730);
var state_25753__$1 = state_25753;
if(cljs.core.truth_(inst_25736)){
var statearr_25761_25788 = state_25753__$1;
(statearr_25761_25788[(1)] = (9));

} else {
var statearr_25762_25789 = state_25753__$1;
(statearr_25762_25789[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (3))){
var inst_25751 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25753__$1,inst_25751);
} else {
if((state_val_25754 === (12))){
var state_25753__$1 = state_25753;
var statearr_25763_25790 = state_25753__$1;
(statearr_25763_25790[(2)] = null);

(statearr_25763_25790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (2))){
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(4),ch);
} else {
if((state_val_25754 === (11))){
var inst_25730 = (state_25753[(7)]);
var inst_25740 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25753__$1,(8),inst_25740,inst_25730);
} else {
if((state_val_25754 === (9))){
var state_25753__$1 = state_25753;
var statearr_25764_25791 = state_25753__$1;
(statearr_25764_25791[(2)] = tc);

(statearr_25764_25791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (5))){
var inst_25733 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25734 = cljs.core.async.close_BANG_.call(null,fc);
var state_25753__$1 = (function (){var statearr_25765 = state_25753;
(statearr_25765[(8)] = inst_25733);

return statearr_25765;
})();
var statearr_25766_25792 = state_25753__$1;
(statearr_25766_25792[(2)] = inst_25734);

(statearr_25766_25792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (14))){
var inst_25747 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25767_25793 = state_25753__$1;
(statearr_25767_25793[(2)] = inst_25747);

(statearr_25767_25793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (10))){
var state_25753__$1 = state_25753;
var statearr_25768_25794 = state_25753__$1;
(statearr_25768_25794[(2)] = fc);

(statearr_25768_25794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (8))){
var inst_25742 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
if(cljs.core.truth_(inst_25742)){
var statearr_25769_25795 = state_25753__$1;
(statearr_25769_25795[(1)] = (12));

} else {
var statearr_25770_25796 = state_25753__$1;
(statearr_25770_25796[(1)] = (13));

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
});})(c__21741__auto___25782,tc,fc))
;
return ((function (switch__21676__auto__,c__21741__auto___25782,tc,fc){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_25774 = [null,null,null,null,null,null,null,null,null];
(statearr_25774[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_25774[(1)] = (1));

return statearr_25774;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_25753){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25775){if((e25775 instanceof Object)){
var ex__21680__auto__ = e25775;
var statearr_25776_25797 = state_25753;
(statearr_25776_25797[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25798 = state_25753;
state_25753 = G__25798;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_25753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_25753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___25782,tc,fc))
})();
var state__21743__auto__ = (function (){var statearr_25777 = f__21742__auto__.call(null);
(statearr_25777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___25782);

return statearr_25777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___25782,tc,fc))
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
var c__21741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto__){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto__){
return (function (state_25845){
var state_val_25846 = (state_25845[(1)]);
if((state_val_25846 === (1))){
var inst_25831 = init;
var state_25845__$1 = (function (){var statearr_25847 = state_25845;
(statearr_25847[(7)] = inst_25831);

return statearr_25847;
})();
var statearr_25848_25863 = state_25845__$1;
(statearr_25848_25863[(2)] = null);

(statearr_25848_25863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (2))){
var state_25845__$1 = state_25845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25845__$1,(4),ch);
} else {
if((state_val_25846 === (3))){
var inst_25843 = (state_25845[(2)]);
var state_25845__$1 = state_25845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25845__$1,inst_25843);
} else {
if((state_val_25846 === (4))){
var inst_25834 = (state_25845[(8)]);
var inst_25834__$1 = (state_25845[(2)]);
var inst_25835 = (inst_25834__$1 == null);
var state_25845__$1 = (function (){var statearr_25849 = state_25845;
(statearr_25849[(8)] = inst_25834__$1);

return statearr_25849;
})();
if(cljs.core.truth_(inst_25835)){
var statearr_25850_25864 = state_25845__$1;
(statearr_25850_25864[(1)] = (5));

} else {
var statearr_25851_25865 = state_25845__$1;
(statearr_25851_25865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (5))){
var inst_25831 = (state_25845[(7)]);
var state_25845__$1 = state_25845;
var statearr_25852_25866 = state_25845__$1;
(statearr_25852_25866[(2)] = inst_25831);

(statearr_25852_25866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (6))){
var inst_25831 = (state_25845[(7)]);
var inst_25834 = (state_25845[(8)]);
var inst_25838 = f.call(null,inst_25831,inst_25834);
var inst_25831__$1 = inst_25838;
var state_25845__$1 = (function (){var statearr_25853 = state_25845;
(statearr_25853[(7)] = inst_25831__$1);

return statearr_25853;
})();
var statearr_25854_25867 = state_25845__$1;
(statearr_25854_25867[(2)] = null);

(statearr_25854_25867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (7))){
var inst_25841 = (state_25845[(2)]);
var state_25845__$1 = state_25845;
var statearr_25855_25868 = state_25845__$1;
(statearr_25855_25868[(2)] = inst_25841);

(statearr_25855_25868[(1)] = (3));


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
});})(c__21741__auto__))
;
return ((function (switch__21676__auto__,c__21741__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21677__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21677__auto____0 = (function (){
var statearr_25859 = [null,null,null,null,null,null,null,null,null];
(statearr_25859[(0)] = cljs$core$async$reduce_$_state_machine__21677__auto__);

(statearr_25859[(1)] = (1));

return statearr_25859;
});
var cljs$core$async$reduce_$_state_machine__21677__auto____1 = (function (state_25845){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25860){if((e25860 instanceof Object)){
var ex__21680__auto__ = e25860;
var statearr_25861_25869 = state_25845;
(statearr_25861_25869[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25845;
state_25845 = G__25870;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21677__auto__ = function(state_25845){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21677__auto____1.call(this,state_25845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21677__auto____0;
cljs$core$async$reduce_$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21677__auto____1;
return cljs$core$async$reduce_$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto__))
})();
var state__21743__auto__ = (function (){var statearr_25862 = f__21742__auto__.call(null);
(statearr_25862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto__);

return statearr_25862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto__))
);

return c__21741__auto__;
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
var args25871 = [];
var len__5651__auto___25923 = arguments.length;
var i__5652__auto___25924 = (0);
while(true){
if((i__5652__auto___25924 < len__5651__auto___25923)){
args25871.push((arguments[i__5652__auto___25924]));

var G__25925 = (i__5652__auto___25924 + (1));
i__5652__auto___25924 = G__25925;
continue;
} else {
}
break;
}

var G__25873 = args25871.length;
switch (G__25873) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25871.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto__){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto__){
return (function (state_25898){
var state_val_25899 = (state_25898[(1)]);
if((state_val_25899 === (7))){
var inst_25880 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
var statearr_25900_25927 = state_25898__$1;
(statearr_25900_25927[(2)] = inst_25880);

(statearr_25900_25927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (1))){
var inst_25874 = cljs.core.seq.call(null,coll);
var inst_25875 = inst_25874;
var state_25898__$1 = (function (){var statearr_25901 = state_25898;
(statearr_25901[(7)] = inst_25875);

return statearr_25901;
})();
var statearr_25902_25928 = state_25898__$1;
(statearr_25902_25928[(2)] = null);

(statearr_25902_25928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (4))){
var inst_25875 = (state_25898[(7)]);
var inst_25878 = cljs.core.first.call(null,inst_25875);
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25898__$1,(7),ch,inst_25878);
} else {
if((state_val_25899 === (13))){
var inst_25892 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
var statearr_25903_25929 = state_25898__$1;
(statearr_25903_25929[(2)] = inst_25892);

(statearr_25903_25929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (6))){
var inst_25883 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
if(cljs.core.truth_(inst_25883)){
var statearr_25904_25930 = state_25898__$1;
(statearr_25904_25930[(1)] = (8));

} else {
var statearr_25905_25931 = state_25898__$1;
(statearr_25905_25931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (3))){
var inst_25896 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25898__$1,inst_25896);
} else {
if((state_val_25899 === (12))){
var state_25898__$1 = state_25898;
var statearr_25906_25932 = state_25898__$1;
(statearr_25906_25932[(2)] = null);

(statearr_25906_25932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (2))){
var inst_25875 = (state_25898[(7)]);
var state_25898__$1 = state_25898;
if(cljs.core.truth_(inst_25875)){
var statearr_25907_25933 = state_25898__$1;
(statearr_25907_25933[(1)] = (4));

} else {
var statearr_25908_25934 = state_25898__$1;
(statearr_25908_25934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (11))){
var inst_25889 = cljs.core.async.close_BANG_.call(null,ch);
var state_25898__$1 = state_25898;
var statearr_25909_25935 = state_25898__$1;
(statearr_25909_25935[(2)] = inst_25889);

(statearr_25909_25935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (9))){
var state_25898__$1 = state_25898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25910_25936 = state_25898__$1;
(statearr_25910_25936[(1)] = (11));

} else {
var statearr_25911_25937 = state_25898__$1;
(statearr_25911_25937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (5))){
var inst_25875 = (state_25898[(7)]);
var state_25898__$1 = state_25898;
var statearr_25912_25938 = state_25898__$1;
(statearr_25912_25938[(2)] = inst_25875);

(statearr_25912_25938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (10))){
var inst_25894 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
var statearr_25913_25939 = state_25898__$1;
(statearr_25913_25939[(2)] = inst_25894);

(statearr_25913_25939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25899 === (8))){
var inst_25875 = (state_25898[(7)]);
var inst_25885 = cljs.core.next.call(null,inst_25875);
var inst_25875__$1 = inst_25885;
var state_25898__$1 = (function (){var statearr_25914 = state_25898;
(statearr_25914[(7)] = inst_25875__$1);

return statearr_25914;
})();
var statearr_25915_25940 = state_25898__$1;
(statearr_25915_25940[(2)] = null);

(statearr_25915_25940[(1)] = (2));


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
});})(c__21741__auto__))
;
return ((function (switch__21676__auto__,c__21741__auto__){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_25919 = [null,null,null,null,null,null,null,null];
(statearr_25919[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_25919[(1)] = (1));

return statearr_25919;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_25898){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_25898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e25920){if((e25920 instanceof Object)){
var ex__21680__auto__ = e25920;
var statearr_25921_25941 = state_25898;
(statearr_25921_25941[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25942 = state_25898;
state_25898 = G__25942;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_25898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_25898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto__))
})();
var state__21743__auto__ = (function (){var statearr_25922 = f__21742__auto__.call(null);
(statearr_25922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto__);

return statearr_25922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto__))
);

return c__21741__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async26164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26164 = (function (mult,ch,cs,meta26165){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26165 = meta26165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26166,meta26165__$1){
var self__ = this;
var _26166__$1 = this;
return (new cljs.core.async.t_cljs$core$async26164(self__.mult,self__.ch,self__.cs,meta26165__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26166){
var self__ = this;
var _26166__$1 = this;
return self__.meta26165;
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26165","meta26165",31157453,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26164";

cljs.core.async.t_cljs$core$async26164.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async26164");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26164 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26164(mult__$1,ch__$1,cs__$1,meta26165){
return (new cljs.core.async.t_cljs$core$async26164(mult__$1,ch__$1,cs__$1,meta26165));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26164(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21741__auto___26385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___26385,cs,m,dchan,dctr,done){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___26385,cs,m,dchan,dctr,done){
return (function (state_26297){
var state_val_26298 = (state_26297[(1)]);
if((state_val_26298 === (7))){
var inst_26293 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26299_26386 = state_26297__$1;
(statearr_26299_26386[(2)] = inst_26293);

(statearr_26299_26386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (20))){
var inst_26198 = (state_26297[(7)]);
var inst_26208 = cljs.core.first.call(null,inst_26198);
var inst_26209 = cljs.core.nth.call(null,inst_26208,(0),null);
var inst_26210 = cljs.core.nth.call(null,inst_26208,(1),null);
var state_26297__$1 = (function (){var statearr_26300 = state_26297;
(statearr_26300[(8)] = inst_26209);

return statearr_26300;
})();
if(cljs.core.truth_(inst_26210)){
var statearr_26301_26387 = state_26297__$1;
(statearr_26301_26387[(1)] = (22));

} else {
var statearr_26302_26388 = state_26297__$1;
(statearr_26302_26388[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (27))){
var inst_26238 = (state_26297[(9)]);
var inst_26240 = (state_26297[(10)]);
var inst_26245 = (state_26297[(11)]);
var inst_26169 = (state_26297[(12)]);
var inst_26245__$1 = cljs.core._nth.call(null,inst_26238,inst_26240);
var inst_26246 = cljs.core.async.put_BANG_.call(null,inst_26245__$1,inst_26169,done);
var state_26297__$1 = (function (){var statearr_26303 = state_26297;
(statearr_26303[(11)] = inst_26245__$1);

return statearr_26303;
})();
if(cljs.core.truth_(inst_26246)){
var statearr_26304_26389 = state_26297__$1;
(statearr_26304_26389[(1)] = (30));

} else {
var statearr_26305_26390 = state_26297__$1;
(statearr_26305_26390[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (1))){
var state_26297__$1 = state_26297;
var statearr_26306_26391 = state_26297__$1;
(statearr_26306_26391[(2)] = null);

(statearr_26306_26391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (24))){
var inst_26198 = (state_26297[(7)]);
var inst_26215 = (state_26297[(2)]);
var inst_26216 = cljs.core.next.call(null,inst_26198);
var inst_26178 = inst_26216;
var inst_26179 = null;
var inst_26180 = (0);
var inst_26181 = (0);
var state_26297__$1 = (function (){var statearr_26307 = state_26297;
(statearr_26307[(13)] = inst_26180);

(statearr_26307[(14)] = inst_26215);

(statearr_26307[(15)] = inst_26179);

(statearr_26307[(16)] = inst_26178);

(statearr_26307[(17)] = inst_26181);

return statearr_26307;
})();
var statearr_26308_26392 = state_26297__$1;
(statearr_26308_26392[(2)] = null);

(statearr_26308_26392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (39))){
var state_26297__$1 = state_26297;
var statearr_26312_26393 = state_26297__$1;
(statearr_26312_26393[(2)] = null);

(statearr_26312_26393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (4))){
var inst_26169 = (state_26297[(12)]);
var inst_26169__$1 = (state_26297[(2)]);
var inst_26170 = (inst_26169__$1 == null);
var state_26297__$1 = (function (){var statearr_26313 = state_26297;
(statearr_26313[(12)] = inst_26169__$1);

return statearr_26313;
})();
if(cljs.core.truth_(inst_26170)){
var statearr_26314_26394 = state_26297__$1;
(statearr_26314_26394[(1)] = (5));

} else {
var statearr_26315_26395 = state_26297__$1;
(statearr_26315_26395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (15))){
var inst_26180 = (state_26297[(13)]);
var inst_26179 = (state_26297[(15)]);
var inst_26178 = (state_26297[(16)]);
var inst_26181 = (state_26297[(17)]);
var inst_26194 = (state_26297[(2)]);
var inst_26195 = (inst_26181 + (1));
var tmp26309 = inst_26180;
var tmp26310 = inst_26179;
var tmp26311 = inst_26178;
var inst_26178__$1 = tmp26311;
var inst_26179__$1 = tmp26310;
var inst_26180__$1 = tmp26309;
var inst_26181__$1 = inst_26195;
var state_26297__$1 = (function (){var statearr_26316 = state_26297;
(statearr_26316[(13)] = inst_26180__$1);

(statearr_26316[(15)] = inst_26179__$1);

(statearr_26316[(16)] = inst_26178__$1);

(statearr_26316[(18)] = inst_26194);

(statearr_26316[(17)] = inst_26181__$1);

return statearr_26316;
})();
var statearr_26317_26396 = state_26297__$1;
(statearr_26317_26396[(2)] = null);

(statearr_26317_26396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (21))){
var inst_26219 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26321_26397 = state_26297__$1;
(statearr_26321_26397[(2)] = inst_26219);

(statearr_26321_26397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (31))){
var inst_26245 = (state_26297[(11)]);
var inst_26249 = done.call(null,null);
var inst_26250 = cljs.core.async.untap_STAR_.call(null,m,inst_26245);
var state_26297__$1 = (function (){var statearr_26322 = state_26297;
(statearr_26322[(19)] = inst_26249);

return statearr_26322;
})();
var statearr_26323_26398 = state_26297__$1;
(statearr_26323_26398[(2)] = inst_26250);

(statearr_26323_26398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (32))){
var inst_26238 = (state_26297[(9)]);
var inst_26240 = (state_26297[(10)]);
var inst_26239 = (state_26297[(20)]);
var inst_26237 = (state_26297[(21)]);
var inst_26252 = (state_26297[(2)]);
var inst_26253 = (inst_26240 + (1));
var tmp26318 = inst_26238;
var tmp26319 = inst_26239;
var tmp26320 = inst_26237;
var inst_26237__$1 = tmp26320;
var inst_26238__$1 = tmp26318;
var inst_26239__$1 = tmp26319;
var inst_26240__$1 = inst_26253;
var state_26297__$1 = (function (){var statearr_26324 = state_26297;
(statearr_26324[(9)] = inst_26238__$1);

(statearr_26324[(10)] = inst_26240__$1);

(statearr_26324[(22)] = inst_26252);

(statearr_26324[(20)] = inst_26239__$1);

(statearr_26324[(21)] = inst_26237__$1);

return statearr_26324;
})();
var statearr_26325_26399 = state_26297__$1;
(statearr_26325_26399[(2)] = null);

(statearr_26325_26399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (40))){
var inst_26265 = (state_26297[(23)]);
var inst_26269 = done.call(null,null);
var inst_26270 = cljs.core.async.untap_STAR_.call(null,m,inst_26265);
var state_26297__$1 = (function (){var statearr_26326 = state_26297;
(statearr_26326[(24)] = inst_26269);

return statearr_26326;
})();
var statearr_26327_26400 = state_26297__$1;
(statearr_26327_26400[(2)] = inst_26270);

(statearr_26327_26400[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (33))){
var inst_26256 = (state_26297[(25)]);
var inst_26258 = cljs.core.chunked_seq_QMARK_.call(null,inst_26256);
var state_26297__$1 = state_26297;
if(inst_26258){
var statearr_26328_26401 = state_26297__$1;
(statearr_26328_26401[(1)] = (36));

} else {
var statearr_26329_26402 = state_26297__$1;
(statearr_26329_26402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (13))){
var inst_26188 = (state_26297[(26)]);
var inst_26191 = cljs.core.async.close_BANG_.call(null,inst_26188);
var state_26297__$1 = state_26297;
var statearr_26330_26403 = state_26297__$1;
(statearr_26330_26403[(2)] = inst_26191);

(statearr_26330_26403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (22))){
var inst_26209 = (state_26297[(8)]);
var inst_26212 = cljs.core.async.close_BANG_.call(null,inst_26209);
var state_26297__$1 = state_26297;
var statearr_26331_26404 = state_26297__$1;
(statearr_26331_26404[(2)] = inst_26212);

(statearr_26331_26404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (36))){
var inst_26256 = (state_26297[(25)]);
var inst_26260 = cljs.core.chunk_first.call(null,inst_26256);
var inst_26261 = cljs.core.chunk_rest.call(null,inst_26256);
var inst_26262 = cljs.core.count.call(null,inst_26260);
var inst_26237 = inst_26261;
var inst_26238 = inst_26260;
var inst_26239 = inst_26262;
var inst_26240 = (0);
var state_26297__$1 = (function (){var statearr_26332 = state_26297;
(statearr_26332[(9)] = inst_26238);

(statearr_26332[(10)] = inst_26240);

(statearr_26332[(20)] = inst_26239);

(statearr_26332[(21)] = inst_26237);

return statearr_26332;
})();
var statearr_26333_26405 = state_26297__$1;
(statearr_26333_26405[(2)] = null);

(statearr_26333_26405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (41))){
var inst_26256 = (state_26297[(25)]);
var inst_26272 = (state_26297[(2)]);
var inst_26273 = cljs.core.next.call(null,inst_26256);
var inst_26237 = inst_26273;
var inst_26238 = null;
var inst_26239 = (0);
var inst_26240 = (0);
var state_26297__$1 = (function (){var statearr_26334 = state_26297;
(statearr_26334[(9)] = inst_26238);

(statearr_26334[(10)] = inst_26240);

(statearr_26334[(20)] = inst_26239);

(statearr_26334[(21)] = inst_26237);

(statearr_26334[(27)] = inst_26272);

return statearr_26334;
})();
var statearr_26335_26406 = state_26297__$1;
(statearr_26335_26406[(2)] = null);

(statearr_26335_26406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (43))){
var state_26297__$1 = state_26297;
var statearr_26336_26407 = state_26297__$1;
(statearr_26336_26407[(2)] = null);

(statearr_26336_26407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (29))){
var inst_26281 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26337_26408 = state_26297__$1;
(statearr_26337_26408[(2)] = inst_26281);

(statearr_26337_26408[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (44))){
var inst_26290 = (state_26297[(2)]);
var state_26297__$1 = (function (){var statearr_26338 = state_26297;
(statearr_26338[(28)] = inst_26290);

return statearr_26338;
})();
var statearr_26339_26409 = state_26297__$1;
(statearr_26339_26409[(2)] = null);

(statearr_26339_26409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (6))){
var inst_26229 = (state_26297[(29)]);
var inst_26228 = cljs.core.deref.call(null,cs);
var inst_26229__$1 = cljs.core.keys.call(null,inst_26228);
var inst_26230 = cljs.core.count.call(null,inst_26229__$1);
var inst_26231 = cljs.core.reset_BANG_.call(null,dctr,inst_26230);
var inst_26236 = cljs.core.seq.call(null,inst_26229__$1);
var inst_26237 = inst_26236;
var inst_26238 = null;
var inst_26239 = (0);
var inst_26240 = (0);
var state_26297__$1 = (function (){var statearr_26340 = state_26297;
(statearr_26340[(9)] = inst_26238);

(statearr_26340[(30)] = inst_26231);

(statearr_26340[(10)] = inst_26240);

(statearr_26340[(20)] = inst_26239);

(statearr_26340[(29)] = inst_26229__$1);

(statearr_26340[(21)] = inst_26237);

return statearr_26340;
})();
var statearr_26341_26410 = state_26297__$1;
(statearr_26341_26410[(2)] = null);

(statearr_26341_26410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (28))){
var inst_26256 = (state_26297[(25)]);
var inst_26237 = (state_26297[(21)]);
var inst_26256__$1 = cljs.core.seq.call(null,inst_26237);
var state_26297__$1 = (function (){var statearr_26342 = state_26297;
(statearr_26342[(25)] = inst_26256__$1);

return statearr_26342;
})();
if(inst_26256__$1){
var statearr_26343_26411 = state_26297__$1;
(statearr_26343_26411[(1)] = (33));

} else {
var statearr_26344_26412 = state_26297__$1;
(statearr_26344_26412[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (25))){
var inst_26240 = (state_26297[(10)]);
var inst_26239 = (state_26297[(20)]);
var inst_26242 = (inst_26240 < inst_26239);
var inst_26243 = inst_26242;
var state_26297__$1 = state_26297;
if(cljs.core.truth_(inst_26243)){
var statearr_26345_26413 = state_26297__$1;
(statearr_26345_26413[(1)] = (27));

} else {
var statearr_26346_26414 = state_26297__$1;
(statearr_26346_26414[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (34))){
var state_26297__$1 = state_26297;
var statearr_26347_26415 = state_26297__$1;
(statearr_26347_26415[(2)] = null);

(statearr_26347_26415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (17))){
var state_26297__$1 = state_26297;
var statearr_26348_26416 = state_26297__$1;
(statearr_26348_26416[(2)] = null);

(statearr_26348_26416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (3))){
var inst_26295 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26297__$1,inst_26295);
} else {
if((state_val_26298 === (12))){
var inst_26224 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26349_26417 = state_26297__$1;
(statearr_26349_26417[(2)] = inst_26224);

(statearr_26349_26417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (2))){
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(4),ch);
} else {
if((state_val_26298 === (23))){
var state_26297__$1 = state_26297;
var statearr_26350_26418 = state_26297__$1;
(statearr_26350_26418[(2)] = null);

(statearr_26350_26418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (35))){
var inst_26279 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26351_26419 = state_26297__$1;
(statearr_26351_26419[(2)] = inst_26279);

(statearr_26351_26419[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (19))){
var inst_26198 = (state_26297[(7)]);
var inst_26202 = cljs.core.chunk_first.call(null,inst_26198);
var inst_26203 = cljs.core.chunk_rest.call(null,inst_26198);
var inst_26204 = cljs.core.count.call(null,inst_26202);
var inst_26178 = inst_26203;
var inst_26179 = inst_26202;
var inst_26180 = inst_26204;
var inst_26181 = (0);
var state_26297__$1 = (function (){var statearr_26352 = state_26297;
(statearr_26352[(13)] = inst_26180);

(statearr_26352[(15)] = inst_26179);

(statearr_26352[(16)] = inst_26178);

(statearr_26352[(17)] = inst_26181);

return statearr_26352;
})();
var statearr_26353_26420 = state_26297__$1;
(statearr_26353_26420[(2)] = null);

(statearr_26353_26420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (11))){
var inst_26198 = (state_26297[(7)]);
var inst_26178 = (state_26297[(16)]);
var inst_26198__$1 = cljs.core.seq.call(null,inst_26178);
var state_26297__$1 = (function (){var statearr_26354 = state_26297;
(statearr_26354[(7)] = inst_26198__$1);

return statearr_26354;
})();
if(inst_26198__$1){
var statearr_26355_26421 = state_26297__$1;
(statearr_26355_26421[(1)] = (16));

} else {
var statearr_26356_26422 = state_26297__$1;
(statearr_26356_26422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (9))){
var inst_26226 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26357_26423 = state_26297__$1;
(statearr_26357_26423[(2)] = inst_26226);

(statearr_26357_26423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (5))){
var inst_26176 = cljs.core.deref.call(null,cs);
var inst_26177 = cljs.core.seq.call(null,inst_26176);
var inst_26178 = inst_26177;
var inst_26179 = null;
var inst_26180 = (0);
var inst_26181 = (0);
var state_26297__$1 = (function (){var statearr_26358 = state_26297;
(statearr_26358[(13)] = inst_26180);

(statearr_26358[(15)] = inst_26179);

(statearr_26358[(16)] = inst_26178);

(statearr_26358[(17)] = inst_26181);

return statearr_26358;
})();
var statearr_26359_26424 = state_26297__$1;
(statearr_26359_26424[(2)] = null);

(statearr_26359_26424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (14))){
var state_26297__$1 = state_26297;
var statearr_26360_26425 = state_26297__$1;
(statearr_26360_26425[(2)] = null);

(statearr_26360_26425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (45))){
var inst_26287 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26361_26426 = state_26297__$1;
(statearr_26361_26426[(2)] = inst_26287);

(statearr_26361_26426[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (26))){
var inst_26229 = (state_26297[(29)]);
var inst_26283 = (state_26297[(2)]);
var inst_26284 = cljs.core.seq.call(null,inst_26229);
var state_26297__$1 = (function (){var statearr_26362 = state_26297;
(statearr_26362[(31)] = inst_26283);

return statearr_26362;
})();
if(inst_26284){
var statearr_26363_26427 = state_26297__$1;
(statearr_26363_26427[(1)] = (42));

} else {
var statearr_26364_26428 = state_26297__$1;
(statearr_26364_26428[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (16))){
var inst_26198 = (state_26297[(7)]);
var inst_26200 = cljs.core.chunked_seq_QMARK_.call(null,inst_26198);
var state_26297__$1 = state_26297;
if(inst_26200){
var statearr_26365_26429 = state_26297__$1;
(statearr_26365_26429[(1)] = (19));

} else {
var statearr_26366_26430 = state_26297__$1;
(statearr_26366_26430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (38))){
var inst_26276 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26367_26431 = state_26297__$1;
(statearr_26367_26431[(2)] = inst_26276);

(statearr_26367_26431[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (30))){
var state_26297__$1 = state_26297;
var statearr_26368_26432 = state_26297__$1;
(statearr_26368_26432[(2)] = null);

(statearr_26368_26432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (10))){
var inst_26179 = (state_26297[(15)]);
var inst_26181 = (state_26297[(17)]);
var inst_26187 = cljs.core._nth.call(null,inst_26179,inst_26181);
var inst_26188 = cljs.core.nth.call(null,inst_26187,(0),null);
var inst_26189 = cljs.core.nth.call(null,inst_26187,(1),null);
var state_26297__$1 = (function (){var statearr_26369 = state_26297;
(statearr_26369[(26)] = inst_26188);

return statearr_26369;
})();
if(cljs.core.truth_(inst_26189)){
var statearr_26370_26433 = state_26297__$1;
(statearr_26370_26433[(1)] = (13));

} else {
var statearr_26371_26434 = state_26297__$1;
(statearr_26371_26434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (18))){
var inst_26222 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26372_26435 = state_26297__$1;
(statearr_26372_26435[(2)] = inst_26222);

(statearr_26372_26435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (42))){
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(45),dchan);
} else {
if((state_val_26298 === (37))){
var inst_26256 = (state_26297[(25)]);
var inst_26169 = (state_26297[(12)]);
var inst_26265 = (state_26297[(23)]);
var inst_26265__$1 = cljs.core.first.call(null,inst_26256);
var inst_26266 = cljs.core.async.put_BANG_.call(null,inst_26265__$1,inst_26169,done);
var state_26297__$1 = (function (){var statearr_26373 = state_26297;
(statearr_26373[(23)] = inst_26265__$1);

return statearr_26373;
})();
if(cljs.core.truth_(inst_26266)){
var statearr_26374_26436 = state_26297__$1;
(statearr_26374_26436[(1)] = (39));

} else {
var statearr_26375_26437 = state_26297__$1;
(statearr_26375_26437[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (8))){
var inst_26180 = (state_26297[(13)]);
var inst_26181 = (state_26297[(17)]);
var inst_26183 = (inst_26181 < inst_26180);
var inst_26184 = inst_26183;
var state_26297__$1 = state_26297;
if(cljs.core.truth_(inst_26184)){
var statearr_26376_26438 = state_26297__$1;
(statearr_26376_26438[(1)] = (10));

} else {
var statearr_26377_26439 = state_26297__$1;
(statearr_26377_26439[(1)] = (11));

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
});})(c__21741__auto___26385,cs,m,dchan,dctr,done))
;
return ((function (switch__21676__auto__,c__21741__auto___26385,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21677__auto__ = null;
var cljs$core$async$mult_$_state_machine__21677__auto____0 = (function (){
var statearr_26381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26381[(0)] = cljs$core$async$mult_$_state_machine__21677__auto__);

(statearr_26381[(1)] = (1));

return statearr_26381;
});
var cljs$core$async$mult_$_state_machine__21677__auto____1 = (function (state_26297){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_26297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e26382){if((e26382 instanceof Object)){
var ex__21680__auto__ = e26382;
var statearr_26383_26440 = state_26297;
(statearr_26383_26440[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26441 = state_26297;
state_26297 = G__26441;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21677__auto__ = function(state_26297){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21677__auto____1.call(this,state_26297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21677__auto____0;
cljs$core$async$mult_$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21677__auto____1;
return cljs$core$async$mult_$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___26385,cs,m,dchan,dctr,done))
})();
var state__21743__auto__ = (function (){var statearr_26384 = f__21742__auto__.call(null);
(statearr_26384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___26385);

return statearr_26384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___26385,cs,m,dchan,dctr,done))
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
var args26442 = [];
var len__5651__auto___26445 = arguments.length;
var i__5652__auto___26446 = (0);
while(true){
if((i__5652__auto___26446 < len__5651__auto___26445)){
args26442.push((arguments[i__5652__auto___26446]));

var G__26447 = (i__5652__auto___26446 + (1));
i__5652__auto___26446 = G__26447;
continue;
} else {
}
break;
}

var G__26444 = args26442.length;
switch (G__26444) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26442.length)].join('')));

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
var len__5651__auto___26459 = arguments.length;
var i__5652__auto___26460 = (0);
while(true){
if((i__5652__auto___26460 < len__5651__auto___26459)){
args__5658__auto__.push((arguments[i__5652__auto___26460]));

var G__26461 = (i__5652__auto___26460 + (1));
i__5652__auto___26460 = G__26461;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((3) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26453){
var map__26454 = p__26453;
var map__26454__$1 = ((((!((map__26454 == null)))?((((map__26454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26454):map__26454);
var opts = map__26454__$1;
var statearr_26456_26462 = state;
(statearr_26456_26462[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26454,map__26454__$1,opts){
return (function (val){
var statearr_26457_26463 = state;
(statearr_26457_26463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26454,map__26454__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26458_26464 = state;
(statearr_26458_26464[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26449){
var G__26450 = cljs.core.first.call(null,seq26449);
var seq26449__$1 = cljs.core.next.call(null,seq26449);
var G__26451 = cljs.core.first.call(null,seq26449__$1);
var seq26449__$2 = cljs.core.next.call(null,seq26449__$1);
var G__26452 = cljs.core.first.call(null,seq26449__$2);
var seq26449__$3 = cljs.core.next.call(null,seq26449__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26450,G__26451,G__26452,seq26449__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26628 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26629){
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
this.meta26629 = meta26629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26630,meta26629__$1){
var self__ = this;
var _26630__$1 = this;
return (new cljs.core.async.t_cljs$core$async26628(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26629__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26630){
var self__ = this;
var _26630__$1 = this;
return self__.meta26629;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26628.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26629","meta26629",463129528,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26628.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26628";

cljs.core.async.t_cljs$core$async26628.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async26628");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26628 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26628(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26629){
return (new cljs.core.async.t_cljs$core$async26628(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26629));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26628(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21741__auto___26791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___26791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___26791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26728){
var state_val_26729 = (state_26728[(1)]);
if((state_val_26729 === (7))){
var inst_26646 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26730_26792 = state_26728__$1;
(statearr_26730_26792[(2)] = inst_26646);

(statearr_26730_26792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (20))){
var inst_26658 = (state_26728[(7)]);
var state_26728__$1 = state_26728;
var statearr_26731_26793 = state_26728__$1;
(statearr_26731_26793[(2)] = inst_26658);

(statearr_26731_26793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (27))){
var state_26728__$1 = state_26728;
var statearr_26732_26794 = state_26728__$1;
(statearr_26732_26794[(2)] = null);

(statearr_26732_26794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (1))){
var inst_26634 = (state_26728[(8)]);
var inst_26634__$1 = calc_state.call(null);
var inst_26636 = (inst_26634__$1 == null);
var inst_26637 = cljs.core.not.call(null,inst_26636);
var state_26728__$1 = (function (){var statearr_26733 = state_26728;
(statearr_26733[(8)] = inst_26634__$1);

return statearr_26733;
})();
if(inst_26637){
var statearr_26734_26795 = state_26728__$1;
(statearr_26734_26795[(1)] = (2));

} else {
var statearr_26735_26796 = state_26728__$1;
(statearr_26735_26796[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (24))){
var inst_26681 = (state_26728[(9)]);
var inst_26702 = (state_26728[(10)]);
var inst_26688 = (state_26728[(11)]);
var inst_26702__$1 = inst_26681.call(null,inst_26688);
var state_26728__$1 = (function (){var statearr_26736 = state_26728;
(statearr_26736[(10)] = inst_26702__$1);

return statearr_26736;
})();
if(cljs.core.truth_(inst_26702__$1)){
var statearr_26737_26797 = state_26728__$1;
(statearr_26737_26797[(1)] = (29));

} else {
var statearr_26738_26798 = state_26728__$1;
(statearr_26738_26798[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (4))){
var inst_26649 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26649)){
var statearr_26739_26799 = state_26728__$1;
(statearr_26739_26799[(1)] = (8));

} else {
var statearr_26740_26800 = state_26728__$1;
(statearr_26740_26800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (15))){
var inst_26675 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26675)){
var statearr_26741_26801 = state_26728__$1;
(statearr_26741_26801[(1)] = (19));

} else {
var statearr_26742_26802 = state_26728__$1;
(statearr_26742_26802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (21))){
var inst_26680 = (state_26728[(12)]);
var inst_26680__$1 = (state_26728[(2)]);
var inst_26681 = cljs.core.get.call(null,inst_26680__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26682 = cljs.core.get.call(null,inst_26680__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26683 = cljs.core.get.call(null,inst_26680__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26728__$1 = (function (){var statearr_26743 = state_26728;
(statearr_26743[(13)] = inst_26682);

(statearr_26743[(9)] = inst_26681);

(statearr_26743[(12)] = inst_26680__$1);

return statearr_26743;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26728__$1,(22),inst_26683);
} else {
if((state_val_26729 === (31))){
var inst_26710 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26710)){
var statearr_26744_26803 = state_26728__$1;
(statearr_26744_26803[(1)] = (32));

} else {
var statearr_26745_26804 = state_26728__$1;
(statearr_26745_26804[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (32))){
var inst_26687 = (state_26728[(14)]);
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26728__$1,(35),out,inst_26687);
} else {
if((state_val_26729 === (33))){
var inst_26680 = (state_26728[(12)]);
var inst_26658 = inst_26680;
var state_26728__$1 = (function (){var statearr_26746 = state_26728;
(statearr_26746[(7)] = inst_26658);

return statearr_26746;
})();
var statearr_26747_26805 = state_26728__$1;
(statearr_26747_26805[(2)] = null);

(statearr_26747_26805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (13))){
var inst_26658 = (state_26728[(7)]);
var inst_26665 = inst_26658.cljs$lang$protocol_mask$partition0$;
var inst_26666 = (inst_26665 & (64));
var inst_26667 = inst_26658.cljs$core$ISeq$;
var inst_26668 = (inst_26666) || (inst_26667);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26668)){
var statearr_26748_26806 = state_26728__$1;
(statearr_26748_26806[(1)] = (16));

} else {
var statearr_26749_26807 = state_26728__$1;
(statearr_26749_26807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (22))){
var inst_26687 = (state_26728[(14)]);
var inst_26688 = (state_26728[(11)]);
var inst_26686 = (state_26728[(2)]);
var inst_26687__$1 = cljs.core.nth.call(null,inst_26686,(0),null);
var inst_26688__$1 = cljs.core.nth.call(null,inst_26686,(1),null);
var inst_26689 = (inst_26687__$1 == null);
var inst_26690 = cljs.core._EQ_.call(null,inst_26688__$1,change);
var inst_26691 = (inst_26689) || (inst_26690);
var state_26728__$1 = (function (){var statearr_26750 = state_26728;
(statearr_26750[(14)] = inst_26687__$1);

(statearr_26750[(11)] = inst_26688__$1);

return statearr_26750;
})();
if(cljs.core.truth_(inst_26691)){
var statearr_26751_26808 = state_26728__$1;
(statearr_26751_26808[(1)] = (23));

} else {
var statearr_26752_26809 = state_26728__$1;
(statearr_26752_26809[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (36))){
var inst_26680 = (state_26728[(12)]);
var inst_26658 = inst_26680;
var state_26728__$1 = (function (){var statearr_26753 = state_26728;
(statearr_26753[(7)] = inst_26658);

return statearr_26753;
})();
var statearr_26754_26810 = state_26728__$1;
(statearr_26754_26810[(2)] = null);

(statearr_26754_26810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (29))){
var inst_26702 = (state_26728[(10)]);
var state_26728__$1 = state_26728;
var statearr_26755_26811 = state_26728__$1;
(statearr_26755_26811[(2)] = inst_26702);

(statearr_26755_26811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (6))){
var state_26728__$1 = state_26728;
var statearr_26756_26812 = state_26728__$1;
(statearr_26756_26812[(2)] = false);

(statearr_26756_26812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (28))){
var inst_26698 = (state_26728[(2)]);
var inst_26699 = calc_state.call(null);
var inst_26658 = inst_26699;
var state_26728__$1 = (function (){var statearr_26757 = state_26728;
(statearr_26757[(15)] = inst_26698);

(statearr_26757[(7)] = inst_26658);

return statearr_26757;
})();
var statearr_26758_26813 = state_26728__$1;
(statearr_26758_26813[(2)] = null);

(statearr_26758_26813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (25))){
var inst_26724 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26759_26814 = state_26728__$1;
(statearr_26759_26814[(2)] = inst_26724);

(statearr_26759_26814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (34))){
var inst_26722 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26760_26815 = state_26728__$1;
(statearr_26760_26815[(2)] = inst_26722);

(statearr_26760_26815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (17))){
var state_26728__$1 = state_26728;
var statearr_26761_26816 = state_26728__$1;
(statearr_26761_26816[(2)] = false);

(statearr_26761_26816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (3))){
var state_26728__$1 = state_26728;
var statearr_26762_26817 = state_26728__$1;
(statearr_26762_26817[(2)] = false);

(statearr_26762_26817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (12))){
var inst_26726 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26728__$1,inst_26726);
} else {
if((state_val_26729 === (2))){
var inst_26634 = (state_26728[(8)]);
var inst_26639 = inst_26634.cljs$lang$protocol_mask$partition0$;
var inst_26640 = (inst_26639 & (64));
var inst_26641 = inst_26634.cljs$core$ISeq$;
var inst_26642 = (inst_26640) || (inst_26641);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26642)){
var statearr_26763_26818 = state_26728__$1;
(statearr_26763_26818[(1)] = (5));

} else {
var statearr_26764_26819 = state_26728__$1;
(statearr_26764_26819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (23))){
var inst_26687 = (state_26728[(14)]);
var inst_26693 = (inst_26687 == null);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26693)){
var statearr_26765_26820 = state_26728__$1;
(statearr_26765_26820[(1)] = (26));

} else {
var statearr_26766_26821 = state_26728__$1;
(statearr_26766_26821[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (35))){
var inst_26713 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26713)){
var statearr_26767_26822 = state_26728__$1;
(statearr_26767_26822[(1)] = (36));

} else {
var statearr_26768_26823 = state_26728__$1;
(statearr_26768_26823[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (19))){
var inst_26658 = (state_26728[(7)]);
var inst_26677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26658);
var state_26728__$1 = state_26728;
var statearr_26769_26824 = state_26728__$1;
(statearr_26769_26824[(2)] = inst_26677);

(statearr_26769_26824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (11))){
var inst_26658 = (state_26728[(7)]);
var inst_26662 = (inst_26658 == null);
var inst_26663 = cljs.core.not.call(null,inst_26662);
var state_26728__$1 = state_26728;
if(inst_26663){
var statearr_26770_26825 = state_26728__$1;
(statearr_26770_26825[(1)] = (13));

} else {
var statearr_26771_26826 = state_26728__$1;
(statearr_26771_26826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (9))){
var inst_26634 = (state_26728[(8)]);
var state_26728__$1 = state_26728;
var statearr_26772_26827 = state_26728__$1;
(statearr_26772_26827[(2)] = inst_26634);

(statearr_26772_26827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (5))){
var state_26728__$1 = state_26728;
var statearr_26773_26828 = state_26728__$1;
(statearr_26773_26828[(2)] = true);

(statearr_26773_26828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (14))){
var state_26728__$1 = state_26728;
var statearr_26774_26829 = state_26728__$1;
(statearr_26774_26829[(2)] = false);

(statearr_26774_26829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (26))){
var inst_26688 = (state_26728[(11)]);
var inst_26695 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26688);
var state_26728__$1 = state_26728;
var statearr_26775_26830 = state_26728__$1;
(statearr_26775_26830[(2)] = inst_26695);

(statearr_26775_26830[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (16))){
var state_26728__$1 = state_26728;
var statearr_26776_26831 = state_26728__$1;
(statearr_26776_26831[(2)] = true);

(statearr_26776_26831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (38))){
var inst_26718 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26777_26832 = state_26728__$1;
(statearr_26777_26832[(2)] = inst_26718);

(statearr_26777_26832[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (30))){
var inst_26682 = (state_26728[(13)]);
var inst_26681 = (state_26728[(9)]);
var inst_26688 = (state_26728[(11)]);
var inst_26705 = cljs.core.empty_QMARK_.call(null,inst_26681);
var inst_26706 = inst_26682.call(null,inst_26688);
var inst_26707 = cljs.core.not.call(null,inst_26706);
var inst_26708 = (inst_26705) && (inst_26707);
var state_26728__$1 = state_26728;
var statearr_26778_26833 = state_26728__$1;
(statearr_26778_26833[(2)] = inst_26708);

(statearr_26778_26833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (10))){
var inst_26634 = (state_26728[(8)]);
var inst_26654 = (state_26728[(2)]);
var inst_26655 = cljs.core.get.call(null,inst_26654,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26656 = cljs.core.get.call(null,inst_26654,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26657 = cljs.core.get.call(null,inst_26654,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26658 = inst_26634;
var state_26728__$1 = (function (){var statearr_26779 = state_26728;
(statearr_26779[(16)] = inst_26655);

(statearr_26779[(17)] = inst_26656);

(statearr_26779[(18)] = inst_26657);

(statearr_26779[(7)] = inst_26658);

return statearr_26779;
})();
var statearr_26780_26834 = state_26728__$1;
(statearr_26780_26834[(2)] = null);

(statearr_26780_26834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (18))){
var inst_26672 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26781_26835 = state_26728__$1;
(statearr_26781_26835[(2)] = inst_26672);

(statearr_26781_26835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (37))){
var state_26728__$1 = state_26728;
var statearr_26782_26836 = state_26728__$1;
(statearr_26782_26836[(2)] = null);

(statearr_26782_26836[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (8))){
var inst_26634 = (state_26728[(8)]);
var inst_26651 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26634);
var state_26728__$1 = state_26728;
var statearr_26783_26837 = state_26728__$1;
(statearr_26783_26837[(2)] = inst_26651);

(statearr_26783_26837[(1)] = (10));


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
});})(c__21741__auto___26791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21676__auto__,c__21741__auto___26791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21677__auto__ = null;
var cljs$core$async$mix_$_state_machine__21677__auto____0 = (function (){
var statearr_26787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26787[(0)] = cljs$core$async$mix_$_state_machine__21677__auto__);

(statearr_26787[(1)] = (1));

return statearr_26787;
});
var cljs$core$async$mix_$_state_machine__21677__auto____1 = (function (state_26728){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_26728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e26788){if((e26788 instanceof Object)){
var ex__21680__auto__ = e26788;
var statearr_26789_26838 = state_26728;
(statearr_26789_26838[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26839 = state_26728;
state_26728 = G__26839;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21677__auto__ = function(state_26728){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21677__auto____1.call(this,state_26728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21677__auto____0;
cljs$core$async$mix_$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21677__auto____1;
return cljs$core$async$mix_$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___26791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21743__auto__ = (function (){var statearr_26790 = f__21742__auto__.call(null);
(statearr_26790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___26791);

return statearr_26790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___26791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26840 = [];
var len__5651__auto___26843 = arguments.length;
var i__5652__auto___26844 = (0);
while(true){
if((i__5652__auto___26844 < len__5651__auto___26843)){
args26840.push((arguments[i__5652__auto___26844]));

var G__26845 = (i__5652__auto___26844 + (1));
i__5652__auto___26844 = G__26845;
continue;
} else {
}
break;
}

var G__26842 = args26840.length;
switch (G__26842) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26840.length)].join('')));

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
var args26848 = [];
var len__5651__auto___26973 = arguments.length;
var i__5652__auto___26974 = (0);
while(true){
if((i__5652__auto___26974 < len__5651__auto___26973)){
args26848.push((arguments[i__5652__auto___26974]));

var G__26975 = (i__5652__auto___26974 + (1));
i__5652__auto___26974 = G__26975;
continue;
} else {
}
break;
}

var G__26850 = args26848.length;
switch (G__26850) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26848.length)].join('')));

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
return (function (p1__26847_SHARP_){
if(cljs.core.truth_(p1__26847_SHARP_.call(null,topic))){
return p1__26847_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26847_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4593__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26851 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26852){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26852 = meta26852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26853,meta26852__$1){
var self__ = this;
var _26853__$1 = this;
return (new cljs.core.async.t_cljs$core$async26851(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26852__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26853){
var self__ = this;
var _26853__$1 = this;
return self__.meta26852;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26852","meta26852",509414975,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26851";

cljs.core.async.t_cljs$core$async26851.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async26851");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26851 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26851(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26852){
return (new cljs.core.async.t_cljs$core$async26851(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26852));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26851(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21741__auto___26977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___26977,mults,ensure_mult,p){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___26977,mults,ensure_mult,p){
return (function (state_26925){
var state_val_26926 = (state_26925[(1)]);
if((state_val_26926 === (7))){
var inst_26921 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26927_26978 = state_26925__$1;
(statearr_26927_26978[(2)] = inst_26921);

(statearr_26927_26978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (20))){
var state_26925__$1 = state_26925;
var statearr_26928_26979 = state_26925__$1;
(statearr_26928_26979[(2)] = null);

(statearr_26928_26979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (1))){
var state_26925__$1 = state_26925;
var statearr_26929_26980 = state_26925__$1;
(statearr_26929_26980[(2)] = null);

(statearr_26929_26980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (24))){
var inst_26904 = (state_26925[(7)]);
var inst_26913 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26904);
var state_26925__$1 = state_26925;
var statearr_26930_26981 = state_26925__$1;
(statearr_26930_26981[(2)] = inst_26913);

(statearr_26930_26981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (4))){
var inst_26856 = (state_26925[(8)]);
var inst_26856__$1 = (state_26925[(2)]);
var inst_26857 = (inst_26856__$1 == null);
var state_26925__$1 = (function (){var statearr_26931 = state_26925;
(statearr_26931[(8)] = inst_26856__$1);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26932_26982 = state_26925__$1;
(statearr_26932_26982[(1)] = (5));

} else {
var statearr_26933_26983 = state_26925__$1;
(statearr_26933_26983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (15))){
var inst_26898 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26934_26984 = state_26925__$1;
(statearr_26934_26984[(2)] = inst_26898);

(statearr_26934_26984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (21))){
var inst_26918 = (state_26925[(2)]);
var state_26925__$1 = (function (){var statearr_26935 = state_26925;
(statearr_26935[(9)] = inst_26918);

return statearr_26935;
})();
var statearr_26936_26985 = state_26925__$1;
(statearr_26936_26985[(2)] = null);

(statearr_26936_26985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (13))){
var inst_26880 = (state_26925[(10)]);
var inst_26882 = cljs.core.chunked_seq_QMARK_.call(null,inst_26880);
var state_26925__$1 = state_26925;
if(inst_26882){
var statearr_26937_26986 = state_26925__$1;
(statearr_26937_26986[(1)] = (16));

} else {
var statearr_26938_26987 = state_26925__$1;
(statearr_26938_26987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (22))){
var inst_26910 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
if(cljs.core.truth_(inst_26910)){
var statearr_26939_26988 = state_26925__$1;
(statearr_26939_26988[(1)] = (23));

} else {
var statearr_26940_26989 = state_26925__$1;
(statearr_26940_26989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (6))){
var inst_26856 = (state_26925[(8)]);
var inst_26904 = (state_26925[(7)]);
var inst_26906 = (state_26925[(11)]);
var inst_26904__$1 = topic_fn.call(null,inst_26856);
var inst_26905 = cljs.core.deref.call(null,mults);
var inst_26906__$1 = cljs.core.get.call(null,inst_26905,inst_26904__$1);
var state_26925__$1 = (function (){var statearr_26941 = state_26925;
(statearr_26941[(7)] = inst_26904__$1);

(statearr_26941[(11)] = inst_26906__$1);

return statearr_26941;
})();
if(cljs.core.truth_(inst_26906__$1)){
var statearr_26942_26990 = state_26925__$1;
(statearr_26942_26990[(1)] = (19));

} else {
var statearr_26943_26991 = state_26925__$1;
(statearr_26943_26991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (25))){
var inst_26915 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26944_26992 = state_26925__$1;
(statearr_26944_26992[(2)] = inst_26915);

(statearr_26944_26992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (17))){
var inst_26880 = (state_26925[(10)]);
var inst_26889 = cljs.core.first.call(null,inst_26880);
var inst_26890 = cljs.core.async.muxch_STAR_.call(null,inst_26889);
var inst_26891 = cljs.core.async.close_BANG_.call(null,inst_26890);
var inst_26892 = cljs.core.next.call(null,inst_26880);
var inst_26866 = inst_26892;
var inst_26867 = null;
var inst_26868 = (0);
var inst_26869 = (0);
var state_26925__$1 = (function (){var statearr_26945 = state_26925;
(statearr_26945[(12)] = inst_26868);

(statearr_26945[(13)] = inst_26869);

(statearr_26945[(14)] = inst_26891);

(statearr_26945[(15)] = inst_26866);

(statearr_26945[(16)] = inst_26867);

return statearr_26945;
})();
var statearr_26946_26993 = state_26925__$1;
(statearr_26946_26993[(2)] = null);

(statearr_26946_26993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (3))){
var inst_26923 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26925__$1,inst_26923);
} else {
if((state_val_26926 === (12))){
var inst_26900 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26947_26994 = state_26925__$1;
(statearr_26947_26994[(2)] = inst_26900);

(statearr_26947_26994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (2))){
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26925__$1,(4),ch);
} else {
if((state_val_26926 === (23))){
var state_26925__$1 = state_26925;
var statearr_26948_26995 = state_26925__$1;
(statearr_26948_26995[(2)] = null);

(statearr_26948_26995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (19))){
var inst_26856 = (state_26925[(8)]);
var inst_26906 = (state_26925[(11)]);
var inst_26908 = cljs.core.async.muxch_STAR_.call(null,inst_26906);
var state_26925__$1 = state_26925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26925__$1,(22),inst_26908,inst_26856);
} else {
if((state_val_26926 === (11))){
var inst_26866 = (state_26925[(15)]);
var inst_26880 = (state_26925[(10)]);
var inst_26880__$1 = cljs.core.seq.call(null,inst_26866);
var state_26925__$1 = (function (){var statearr_26949 = state_26925;
(statearr_26949[(10)] = inst_26880__$1);

return statearr_26949;
})();
if(inst_26880__$1){
var statearr_26950_26996 = state_26925__$1;
(statearr_26950_26996[(1)] = (13));

} else {
var statearr_26951_26997 = state_26925__$1;
(statearr_26951_26997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (9))){
var inst_26902 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26952_26998 = state_26925__$1;
(statearr_26952_26998[(2)] = inst_26902);

(statearr_26952_26998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (5))){
var inst_26863 = cljs.core.deref.call(null,mults);
var inst_26864 = cljs.core.vals.call(null,inst_26863);
var inst_26865 = cljs.core.seq.call(null,inst_26864);
var inst_26866 = inst_26865;
var inst_26867 = null;
var inst_26868 = (0);
var inst_26869 = (0);
var state_26925__$1 = (function (){var statearr_26953 = state_26925;
(statearr_26953[(12)] = inst_26868);

(statearr_26953[(13)] = inst_26869);

(statearr_26953[(15)] = inst_26866);

(statearr_26953[(16)] = inst_26867);

return statearr_26953;
})();
var statearr_26954_26999 = state_26925__$1;
(statearr_26954_26999[(2)] = null);

(statearr_26954_26999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (14))){
var state_26925__$1 = state_26925;
var statearr_26958_27000 = state_26925__$1;
(statearr_26958_27000[(2)] = null);

(statearr_26958_27000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (16))){
var inst_26880 = (state_26925[(10)]);
var inst_26884 = cljs.core.chunk_first.call(null,inst_26880);
var inst_26885 = cljs.core.chunk_rest.call(null,inst_26880);
var inst_26886 = cljs.core.count.call(null,inst_26884);
var inst_26866 = inst_26885;
var inst_26867 = inst_26884;
var inst_26868 = inst_26886;
var inst_26869 = (0);
var state_26925__$1 = (function (){var statearr_26959 = state_26925;
(statearr_26959[(12)] = inst_26868);

(statearr_26959[(13)] = inst_26869);

(statearr_26959[(15)] = inst_26866);

(statearr_26959[(16)] = inst_26867);

return statearr_26959;
})();
var statearr_26960_27001 = state_26925__$1;
(statearr_26960_27001[(2)] = null);

(statearr_26960_27001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (10))){
var inst_26868 = (state_26925[(12)]);
var inst_26869 = (state_26925[(13)]);
var inst_26866 = (state_26925[(15)]);
var inst_26867 = (state_26925[(16)]);
var inst_26874 = cljs.core._nth.call(null,inst_26867,inst_26869);
var inst_26875 = cljs.core.async.muxch_STAR_.call(null,inst_26874);
var inst_26876 = cljs.core.async.close_BANG_.call(null,inst_26875);
var inst_26877 = (inst_26869 + (1));
var tmp26955 = inst_26868;
var tmp26956 = inst_26866;
var tmp26957 = inst_26867;
var inst_26866__$1 = tmp26956;
var inst_26867__$1 = tmp26957;
var inst_26868__$1 = tmp26955;
var inst_26869__$1 = inst_26877;
var state_26925__$1 = (function (){var statearr_26961 = state_26925;
(statearr_26961[(12)] = inst_26868__$1);

(statearr_26961[(13)] = inst_26869__$1);

(statearr_26961[(17)] = inst_26876);

(statearr_26961[(15)] = inst_26866__$1);

(statearr_26961[(16)] = inst_26867__$1);

return statearr_26961;
})();
var statearr_26962_27002 = state_26925__$1;
(statearr_26962_27002[(2)] = null);

(statearr_26962_27002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (18))){
var inst_26895 = (state_26925[(2)]);
var state_26925__$1 = state_26925;
var statearr_26963_27003 = state_26925__$1;
(statearr_26963_27003[(2)] = inst_26895);

(statearr_26963_27003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26926 === (8))){
var inst_26868 = (state_26925[(12)]);
var inst_26869 = (state_26925[(13)]);
var inst_26871 = (inst_26869 < inst_26868);
var inst_26872 = inst_26871;
var state_26925__$1 = state_26925;
if(cljs.core.truth_(inst_26872)){
var statearr_26964_27004 = state_26925__$1;
(statearr_26964_27004[(1)] = (10));

} else {
var statearr_26965_27005 = state_26925__$1;
(statearr_26965_27005[(1)] = (11));

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
});})(c__21741__auto___26977,mults,ensure_mult,p))
;
return ((function (switch__21676__auto__,c__21741__auto___26977,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_26969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26969[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_26969[(1)] = (1));

return statearr_26969;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_26925){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_26925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e26970){if((e26970 instanceof Object)){
var ex__21680__auto__ = e26970;
var statearr_26971_27006 = state_26925;
(statearr_26971_27006[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27007 = state_26925;
state_26925 = G__27007;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_26925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_26925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___26977,mults,ensure_mult,p))
})();
var state__21743__auto__ = (function (){var statearr_26972 = f__21742__auto__.call(null);
(statearr_26972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___26977);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___26977,mults,ensure_mult,p))
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
var args27008 = [];
var len__5651__auto___27011 = arguments.length;
var i__5652__auto___27012 = (0);
while(true){
if((i__5652__auto___27012 < len__5651__auto___27011)){
args27008.push((arguments[i__5652__auto___27012]));

var G__27013 = (i__5652__auto___27012 + (1));
i__5652__auto___27012 = G__27013;
continue;
} else {
}
break;
}

var G__27010 = args27008.length;
switch (G__27010) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27008.length)].join('')));

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
var args27015 = [];
var len__5651__auto___27018 = arguments.length;
var i__5652__auto___27019 = (0);
while(true){
if((i__5652__auto___27019 < len__5651__auto___27018)){
args27015.push((arguments[i__5652__auto___27019]));

var G__27020 = (i__5652__auto___27019 + (1));
i__5652__auto___27019 = G__27020;
continue;
} else {
}
break;
}

var G__27017 = args27015.length;
switch (G__27017) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27015.length)].join('')));

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
var args27022 = [];
var len__5651__auto___27093 = arguments.length;
var i__5652__auto___27094 = (0);
while(true){
if((i__5652__auto___27094 < len__5651__auto___27093)){
args27022.push((arguments[i__5652__auto___27094]));

var G__27095 = (i__5652__auto___27094 + (1));
i__5652__auto___27094 = G__27095;
continue;
} else {
}
break;
}

var G__27024 = args27022.length;
switch (G__27024) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27022.length)].join('')));

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
var c__21741__auto___27097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27063){
var state_val_27064 = (state_27063[(1)]);
if((state_val_27064 === (7))){
var state_27063__$1 = state_27063;
var statearr_27065_27098 = state_27063__$1;
(statearr_27065_27098[(2)] = null);

(statearr_27065_27098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (1))){
var state_27063__$1 = state_27063;
var statearr_27066_27099 = state_27063__$1;
(statearr_27066_27099[(2)] = null);

(statearr_27066_27099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (4))){
var inst_27027 = (state_27063[(7)]);
var inst_27029 = (inst_27027 < cnt);
var state_27063__$1 = state_27063;
if(cljs.core.truth_(inst_27029)){
var statearr_27067_27100 = state_27063__$1;
(statearr_27067_27100[(1)] = (6));

} else {
var statearr_27068_27101 = state_27063__$1;
(statearr_27068_27101[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (15))){
var inst_27059 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27069_27102 = state_27063__$1;
(statearr_27069_27102[(2)] = inst_27059);

(statearr_27069_27102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (13))){
var inst_27052 = cljs.core.async.close_BANG_.call(null,out);
var state_27063__$1 = state_27063;
var statearr_27070_27103 = state_27063__$1;
(statearr_27070_27103[(2)] = inst_27052);

(statearr_27070_27103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (6))){
var state_27063__$1 = state_27063;
var statearr_27071_27104 = state_27063__$1;
(statearr_27071_27104[(2)] = null);

(statearr_27071_27104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (3))){
var inst_27061 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27063__$1,inst_27061);
} else {
if((state_val_27064 === (12))){
var inst_27049 = (state_27063[(8)]);
var inst_27049__$1 = (state_27063[(2)]);
var inst_27050 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27049__$1);
var state_27063__$1 = (function (){var statearr_27072 = state_27063;
(statearr_27072[(8)] = inst_27049__$1);

return statearr_27072;
})();
if(cljs.core.truth_(inst_27050)){
var statearr_27073_27105 = state_27063__$1;
(statearr_27073_27105[(1)] = (13));

} else {
var statearr_27074_27106 = state_27063__$1;
(statearr_27074_27106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (2))){
var inst_27026 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27027 = (0);
var state_27063__$1 = (function (){var statearr_27075 = state_27063;
(statearr_27075[(9)] = inst_27026);

(statearr_27075[(7)] = inst_27027);

return statearr_27075;
})();
var statearr_27076_27107 = state_27063__$1;
(statearr_27076_27107[(2)] = null);

(statearr_27076_27107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (11))){
var inst_27027 = (state_27063[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27063,(10),Object,null,(9));
var inst_27036 = chs__$1.call(null,inst_27027);
var inst_27037 = done.call(null,inst_27027);
var inst_27038 = cljs.core.async.take_BANG_.call(null,inst_27036,inst_27037);
var state_27063__$1 = state_27063;
var statearr_27077_27108 = state_27063__$1;
(statearr_27077_27108[(2)] = inst_27038);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (9))){
var inst_27027 = (state_27063[(7)]);
var inst_27040 = (state_27063[(2)]);
var inst_27041 = (inst_27027 + (1));
var inst_27027__$1 = inst_27041;
var state_27063__$1 = (function (){var statearr_27078 = state_27063;
(statearr_27078[(7)] = inst_27027__$1);

(statearr_27078[(10)] = inst_27040);

return statearr_27078;
})();
var statearr_27079_27109 = state_27063__$1;
(statearr_27079_27109[(2)] = null);

(statearr_27079_27109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (5))){
var inst_27047 = (state_27063[(2)]);
var state_27063__$1 = (function (){var statearr_27080 = state_27063;
(statearr_27080[(11)] = inst_27047);

return statearr_27080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27063__$1,(12),dchan);
} else {
if((state_val_27064 === (14))){
var inst_27049 = (state_27063[(8)]);
var inst_27054 = cljs.core.apply.call(null,f,inst_27049);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27063__$1,(16),out,inst_27054);
} else {
if((state_val_27064 === (16))){
var inst_27056 = (state_27063[(2)]);
var state_27063__$1 = (function (){var statearr_27081 = state_27063;
(statearr_27081[(12)] = inst_27056);

return statearr_27081;
})();
var statearr_27082_27110 = state_27063__$1;
(statearr_27082_27110[(2)] = null);

(statearr_27082_27110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (10))){
var inst_27031 = (state_27063[(2)]);
var inst_27032 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27063__$1 = (function (){var statearr_27083 = state_27063;
(statearr_27083[(13)] = inst_27031);

return statearr_27083;
})();
var statearr_27084_27111 = state_27063__$1;
(statearr_27084_27111[(2)] = inst_27032);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (8))){
var inst_27045 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27085_27112 = state_27063__$1;
(statearr_27085_27112[(2)] = inst_27045);

(statearr_27085_27112[(1)] = (5));


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
});})(c__21741__auto___27097,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21676__auto__,c__21741__auto___27097,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27089[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27089[(1)] = (1));

return statearr_27089;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27063){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27090){if((e27090 instanceof Object)){
var ex__21680__auto__ = e27090;
var statearr_27091_27113 = state_27063;
(statearr_27091_27113[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27114 = state_27063;
state_27063 = G__27114;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27097,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21743__auto__ = (function (){var statearr_27092 = f__21742__auto__.call(null);
(statearr_27092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27097);

return statearr_27092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27097,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27116 = [];
var len__5651__auto___27172 = arguments.length;
var i__5652__auto___27173 = (0);
while(true){
if((i__5652__auto___27173 < len__5651__auto___27172)){
args27116.push((arguments[i__5652__auto___27173]));

var G__27174 = (i__5652__auto___27173 + (1));
i__5652__auto___27173 = G__27174;
continue;
} else {
}
break;
}

var G__27118 = args27116.length;
switch (G__27118) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27116.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21741__auto___27176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27176,out){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27176,out){
return (function (state_27148){
var state_val_27149 = (state_27148[(1)]);
if((state_val_27149 === (7))){
var inst_27127 = (state_27148[(7)]);
var inst_27128 = (state_27148[(8)]);
var inst_27127__$1 = (state_27148[(2)]);
var inst_27128__$1 = cljs.core.nth.call(null,inst_27127__$1,(0),null);
var inst_27129 = cljs.core.nth.call(null,inst_27127__$1,(1),null);
var inst_27130 = (inst_27128__$1 == null);
var state_27148__$1 = (function (){var statearr_27150 = state_27148;
(statearr_27150[(9)] = inst_27129);

(statearr_27150[(7)] = inst_27127__$1);

(statearr_27150[(8)] = inst_27128__$1);

return statearr_27150;
})();
if(cljs.core.truth_(inst_27130)){
var statearr_27151_27177 = state_27148__$1;
(statearr_27151_27177[(1)] = (8));

} else {
var statearr_27152_27178 = state_27148__$1;
(statearr_27152_27178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (1))){
var inst_27119 = cljs.core.vec.call(null,chs);
var inst_27120 = inst_27119;
var state_27148__$1 = (function (){var statearr_27153 = state_27148;
(statearr_27153[(10)] = inst_27120);

return statearr_27153;
})();
var statearr_27154_27179 = state_27148__$1;
(statearr_27154_27179[(2)] = null);

(statearr_27154_27179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (4))){
var inst_27120 = (state_27148[(10)]);
var state_27148__$1 = state_27148;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27148__$1,(7),inst_27120);
} else {
if((state_val_27149 === (6))){
var inst_27144 = (state_27148[(2)]);
var state_27148__$1 = state_27148;
var statearr_27155_27180 = state_27148__$1;
(statearr_27155_27180[(2)] = inst_27144);

(statearr_27155_27180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (3))){
var inst_27146 = (state_27148[(2)]);
var state_27148__$1 = state_27148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27148__$1,inst_27146);
} else {
if((state_val_27149 === (2))){
var inst_27120 = (state_27148[(10)]);
var inst_27122 = cljs.core.count.call(null,inst_27120);
var inst_27123 = (inst_27122 > (0));
var state_27148__$1 = state_27148;
if(cljs.core.truth_(inst_27123)){
var statearr_27157_27181 = state_27148__$1;
(statearr_27157_27181[(1)] = (4));

} else {
var statearr_27158_27182 = state_27148__$1;
(statearr_27158_27182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (11))){
var inst_27120 = (state_27148[(10)]);
var inst_27137 = (state_27148[(2)]);
var tmp27156 = inst_27120;
var inst_27120__$1 = tmp27156;
var state_27148__$1 = (function (){var statearr_27159 = state_27148;
(statearr_27159[(10)] = inst_27120__$1);

(statearr_27159[(11)] = inst_27137);

return statearr_27159;
})();
var statearr_27160_27183 = state_27148__$1;
(statearr_27160_27183[(2)] = null);

(statearr_27160_27183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (9))){
var inst_27128 = (state_27148[(8)]);
var state_27148__$1 = state_27148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27148__$1,(11),out,inst_27128);
} else {
if((state_val_27149 === (5))){
var inst_27142 = cljs.core.async.close_BANG_.call(null,out);
var state_27148__$1 = state_27148;
var statearr_27161_27184 = state_27148__$1;
(statearr_27161_27184[(2)] = inst_27142);

(statearr_27161_27184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (10))){
var inst_27140 = (state_27148[(2)]);
var state_27148__$1 = state_27148;
var statearr_27162_27185 = state_27148__$1;
(statearr_27162_27185[(2)] = inst_27140);

(statearr_27162_27185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27149 === (8))){
var inst_27129 = (state_27148[(9)]);
var inst_27127 = (state_27148[(7)]);
var inst_27120 = (state_27148[(10)]);
var inst_27128 = (state_27148[(8)]);
var inst_27132 = (function (){var cs = inst_27120;
var vec__27125 = inst_27127;
var v = inst_27128;
var c = inst_27129;
return ((function (cs,vec__27125,v,c,inst_27129,inst_27127,inst_27120,inst_27128,state_val_27149,c__21741__auto___27176,out){
return (function (p1__27115_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27115_SHARP_);
});
;})(cs,vec__27125,v,c,inst_27129,inst_27127,inst_27120,inst_27128,state_val_27149,c__21741__auto___27176,out))
})();
var inst_27133 = cljs.core.filterv.call(null,inst_27132,inst_27120);
var inst_27120__$1 = inst_27133;
var state_27148__$1 = (function (){var statearr_27163 = state_27148;
(statearr_27163[(10)] = inst_27120__$1);

return statearr_27163;
})();
var statearr_27164_27186 = state_27148__$1;
(statearr_27164_27186[(2)] = null);

(statearr_27164_27186[(1)] = (2));


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
});})(c__21741__auto___27176,out))
;
return ((function (switch__21676__auto__,c__21741__auto___27176,out){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27168[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27168[(1)] = (1));

return statearr_27168;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27148){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27169){if((e27169 instanceof Object)){
var ex__21680__auto__ = e27169;
var statearr_27170_27187 = state_27148;
(statearr_27170_27187[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27188 = state_27148;
state_27148 = G__27188;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27176,out))
})();
var state__21743__auto__ = (function (){var statearr_27171 = f__21742__auto__.call(null);
(statearr_27171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27176);

return statearr_27171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27176,out))
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
var args27189 = [];
var len__5651__auto___27238 = arguments.length;
var i__5652__auto___27239 = (0);
while(true){
if((i__5652__auto___27239 < len__5651__auto___27238)){
args27189.push((arguments[i__5652__auto___27239]));

var G__27240 = (i__5652__auto___27239 + (1));
i__5652__auto___27239 = G__27240;
continue;
} else {
}
break;
}

var G__27191 = args27189.length;
switch (G__27191) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27189.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21741__auto___27242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27242,out){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27242,out){
return (function (state_27215){
var state_val_27216 = (state_27215[(1)]);
if((state_val_27216 === (7))){
var inst_27197 = (state_27215[(7)]);
var inst_27197__$1 = (state_27215[(2)]);
var inst_27198 = (inst_27197__$1 == null);
var inst_27199 = cljs.core.not.call(null,inst_27198);
var state_27215__$1 = (function (){var statearr_27217 = state_27215;
(statearr_27217[(7)] = inst_27197__$1);

return statearr_27217;
})();
if(inst_27199){
var statearr_27218_27243 = state_27215__$1;
(statearr_27218_27243[(1)] = (8));

} else {
var statearr_27219_27244 = state_27215__$1;
(statearr_27219_27244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (1))){
var inst_27192 = (0);
var state_27215__$1 = (function (){var statearr_27220 = state_27215;
(statearr_27220[(8)] = inst_27192);

return statearr_27220;
})();
var statearr_27221_27245 = state_27215__$1;
(statearr_27221_27245[(2)] = null);

(statearr_27221_27245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (4))){
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27215__$1,(7),ch);
} else {
if((state_val_27216 === (6))){
var inst_27210 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27222_27246 = state_27215__$1;
(statearr_27222_27246[(2)] = inst_27210);

(statearr_27222_27246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (3))){
var inst_27212 = (state_27215[(2)]);
var inst_27213 = cljs.core.async.close_BANG_.call(null,out);
var state_27215__$1 = (function (){var statearr_27223 = state_27215;
(statearr_27223[(9)] = inst_27212);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27215__$1,inst_27213);
} else {
if((state_val_27216 === (2))){
var inst_27192 = (state_27215[(8)]);
var inst_27194 = (inst_27192 < n);
var state_27215__$1 = state_27215;
if(cljs.core.truth_(inst_27194)){
var statearr_27224_27247 = state_27215__$1;
(statearr_27224_27247[(1)] = (4));

} else {
var statearr_27225_27248 = state_27215__$1;
(statearr_27225_27248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (11))){
var inst_27192 = (state_27215[(8)]);
var inst_27202 = (state_27215[(2)]);
var inst_27203 = (inst_27192 + (1));
var inst_27192__$1 = inst_27203;
var state_27215__$1 = (function (){var statearr_27226 = state_27215;
(statearr_27226[(8)] = inst_27192__$1);

(statearr_27226[(10)] = inst_27202);

return statearr_27226;
})();
var statearr_27227_27249 = state_27215__$1;
(statearr_27227_27249[(2)] = null);

(statearr_27227_27249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (9))){
var state_27215__$1 = state_27215;
var statearr_27228_27250 = state_27215__$1;
(statearr_27228_27250[(2)] = null);

(statearr_27228_27250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (5))){
var state_27215__$1 = state_27215;
var statearr_27229_27251 = state_27215__$1;
(statearr_27229_27251[(2)] = null);

(statearr_27229_27251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (10))){
var inst_27207 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27230_27252 = state_27215__$1;
(statearr_27230_27252[(2)] = inst_27207);

(statearr_27230_27252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (8))){
var inst_27197 = (state_27215[(7)]);
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27215__$1,(11),out,inst_27197);
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
});})(c__21741__auto___27242,out))
;
return ((function (switch__21676__auto__,c__21741__auto___27242,out){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27234[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27234[(1)] = (1));

return statearr_27234;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27215){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27235){if((e27235 instanceof Object)){
var ex__21680__auto__ = e27235;
var statearr_27236_27253 = state_27215;
(statearr_27236_27253[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27254 = state_27215;
state_27215 = G__27254;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27242,out))
})();
var state__21743__auto__ = (function (){var statearr_27237 = f__21742__auto__.call(null);
(statearr_27237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27242);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27242,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27262 = (function (map_LT_,f,ch,meta27263){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27263 = meta27263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27264,meta27263__$1){
var self__ = this;
var _27264__$1 = this;
return (new cljs.core.async.t_cljs$core$async27262(self__.map_LT_,self__.f,self__.ch,meta27263__$1));
});

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27264){
var self__ = this;
var _27264__$1 = this;
return self__.meta27263;
});

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27265 = (function (map_LT_,f,ch,meta27263,_,fn1,meta27266){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27263 = meta27263;
this._ = _;
this.fn1 = fn1;
this.meta27266 = meta27266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27267,meta27266__$1){
var self__ = this;
var _27267__$1 = this;
return (new cljs.core.async.t_cljs$core$async27265(self__.map_LT_,self__.f,self__.ch,self__.meta27263,self__._,self__.fn1,meta27266__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27267){
var self__ = this;
var _27267__$1 = this;
return self__.meta27266;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27255_SHARP_){
return f1.call(null,(((p1__27255_SHARP_ == null))?null:self__.f.call(null,p1__27255_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27265.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27263","meta27263",205312359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27262","cljs.core.async/t_cljs$core$async27262",-1175091653,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27266","meta27266",-2018376826,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27265";

cljs.core.async.t_cljs$core$async27265.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async27265");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27265 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27265(map_LT___$1,f__$1,ch__$1,meta27263__$1,___$2,fn1__$1,meta27266){
return (new cljs.core.async.t_cljs$core$async27265(map_LT___$1,f__$1,ch__$1,meta27263__$1,___$2,fn1__$1,meta27266));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27265(self__.map_LT_,self__.f,self__.ch,self__.meta27263,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27263","meta27263",205312359,null)], null);
});

cljs.core.async.t_cljs$core$async27262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27262";

cljs.core.async.t_cljs$core$async27262.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async27262");
});

cljs.core.async.__GT_t_cljs$core$async27262 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27262(map_LT___$1,f__$1,ch__$1,meta27263){
return (new cljs.core.async.t_cljs$core$async27262(map_LT___$1,f__$1,ch__$1,meta27263));
});

}

return (new cljs.core.async.t_cljs$core$async27262(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27271 = (function (map_GT_,f,ch,meta27272){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27272 = meta27272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27273,meta27272__$1){
var self__ = this;
var _27273__$1 = this;
return (new cljs.core.async.t_cljs$core$async27271(self__.map_GT_,self__.f,self__.ch,meta27272__$1));
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27273){
var self__ = this;
var _27273__$1 = this;
return self__.meta27272;
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27272","meta27272",-1902788354,null)], null);
});

cljs.core.async.t_cljs$core$async27271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27271";

cljs.core.async.t_cljs$core$async27271.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async27271");
});

cljs.core.async.__GT_t_cljs$core$async27271 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27271(map_GT___$1,f__$1,ch__$1,meta27272){
return (new cljs.core.async.t_cljs$core$async27271(map_GT___$1,f__$1,ch__$1,meta27272));
});

}

return (new cljs.core.async.t_cljs$core$async27271(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27277 = (function (filter_GT_,p,ch,meta27278){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27278 = meta27278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27279,meta27278__$1){
var self__ = this;
var _27279__$1 = this;
return (new cljs.core.async.t_cljs$core$async27277(self__.filter_GT_,self__.p,self__.ch,meta27278__$1));
});

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27279){
var self__ = this;
var _27279__$1 = this;
return self__.meta27278;
});

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27278","meta27278",-382885868,null)], null);
});

cljs.core.async.t_cljs$core$async27277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27277";

cljs.core.async.t_cljs$core$async27277.cljs$lang$ctorPrWriter = (function (this__5191__auto__,writer__5192__auto__,opt__5193__auto__){
return cljs.core._write.call(null,writer__5192__auto__,"cljs.core.async/t_cljs$core$async27277");
});

cljs.core.async.__GT_t_cljs$core$async27277 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27277(filter_GT___$1,p__$1,ch__$1,meta27278){
return (new cljs.core.async.t_cljs$core$async27277(filter_GT___$1,p__$1,ch__$1,meta27278));
});

}

return (new cljs.core.async.t_cljs$core$async27277(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27280 = [];
var len__5651__auto___27324 = arguments.length;
var i__5652__auto___27325 = (0);
while(true){
if((i__5652__auto___27325 < len__5651__auto___27324)){
args27280.push((arguments[i__5652__auto___27325]));

var G__27326 = (i__5652__auto___27325 + (1));
i__5652__auto___27325 = G__27326;
continue;
} else {
}
break;
}

var G__27282 = args27280.length;
switch (G__27282) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27280.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21741__auto___27328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27328,out){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27328,out){
return (function (state_27303){
var state_val_27304 = (state_27303[(1)]);
if((state_val_27304 === (7))){
var inst_27299 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27305_27329 = state_27303__$1;
(statearr_27305_27329[(2)] = inst_27299);

(statearr_27305_27329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (1))){
var state_27303__$1 = state_27303;
var statearr_27306_27330 = state_27303__$1;
(statearr_27306_27330[(2)] = null);

(statearr_27306_27330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (4))){
var inst_27285 = (state_27303[(7)]);
var inst_27285__$1 = (state_27303[(2)]);
var inst_27286 = (inst_27285__$1 == null);
var state_27303__$1 = (function (){var statearr_27307 = state_27303;
(statearr_27307[(7)] = inst_27285__$1);

return statearr_27307;
})();
if(cljs.core.truth_(inst_27286)){
var statearr_27308_27331 = state_27303__$1;
(statearr_27308_27331[(1)] = (5));

} else {
var statearr_27309_27332 = state_27303__$1;
(statearr_27309_27332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (6))){
var inst_27285 = (state_27303[(7)]);
var inst_27290 = p.call(null,inst_27285);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27290)){
var statearr_27310_27333 = state_27303__$1;
(statearr_27310_27333[(1)] = (8));

} else {
var statearr_27311_27334 = state_27303__$1;
(statearr_27311_27334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (3))){
var inst_27301 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27303__$1,inst_27301);
} else {
if((state_val_27304 === (2))){
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27303__$1,(4),ch);
} else {
if((state_val_27304 === (11))){
var inst_27293 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27312_27335 = state_27303__$1;
(statearr_27312_27335[(2)] = inst_27293);

(statearr_27312_27335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (9))){
var state_27303__$1 = state_27303;
var statearr_27313_27336 = state_27303__$1;
(statearr_27313_27336[(2)] = null);

(statearr_27313_27336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (5))){
var inst_27288 = cljs.core.async.close_BANG_.call(null,out);
var state_27303__$1 = state_27303;
var statearr_27314_27337 = state_27303__$1;
(statearr_27314_27337[(2)] = inst_27288);

(statearr_27314_27337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (10))){
var inst_27296 = (state_27303[(2)]);
var state_27303__$1 = (function (){var statearr_27315 = state_27303;
(statearr_27315[(8)] = inst_27296);

return statearr_27315;
})();
var statearr_27316_27338 = state_27303__$1;
(statearr_27316_27338[(2)] = null);

(statearr_27316_27338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (8))){
var inst_27285 = (state_27303[(7)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27303__$1,(11),out,inst_27285);
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
});})(c__21741__auto___27328,out))
;
return ((function (switch__21676__auto__,c__21741__auto___27328,out){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27320 = [null,null,null,null,null,null,null,null,null];
(statearr_27320[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27320[(1)] = (1));

return statearr_27320;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27303){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27321){if((e27321 instanceof Object)){
var ex__21680__auto__ = e27321;
var statearr_27322_27339 = state_27303;
(statearr_27322_27339[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27340 = state_27303;
state_27303 = G__27340;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27328,out))
})();
var state__21743__auto__ = (function (){var statearr_27323 = f__21742__auto__.call(null);
(statearr_27323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27328);

return statearr_27323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27328,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27341 = [];
var len__5651__auto___27344 = arguments.length;
var i__5652__auto___27345 = (0);
while(true){
if((i__5652__auto___27345 < len__5651__auto___27344)){
args27341.push((arguments[i__5652__auto___27345]));

var G__27346 = (i__5652__auto___27345 + (1));
i__5652__auto___27345 = G__27346;
continue;
} else {
}
break;
}

var G__27343 = args27341.length;
switch (G__27343) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27341.length)].join('')));

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
var c__21741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto__){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto__){
return (function (state_27513){
var state_val_27514 = (state_27513[(1)]);
if((state_val_27514 === (7))){
var inst_27509 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27515_27556 = state_27513__$1;
(statearr_27515_27556[(2)] = inst_27509);

(statearr_27515_27556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (20))){
var inst_27479 = (state_27513[(7)]);
var inst_27490 = (state_27513[(2)]);
var inst_27491 = cljs.core.next.call(null,inst_27479);
var inst_27465 = inst_27491;
var inst_27466 = null;
var inst_27467 = (0);
var inst_27468 = (0);
var state_27513__$1 = (function (){var statearr_27516 = state_27513;
(statearr_27516[(8)] = inst_27468);

(statearr_27516[(9)] = inst_27467);

(statearr_27516[(10)] = inst_27466);

(statearr_27516[(11)] = inst_27490);

(statearr_27516[(12)] = inst_27465);

return statearr_27516;
})();
var statearr_27517_27557 = state_27513__$1;
(statearr_27517_27557[(2)] = null);

(statearr_27517_27557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (1))){
var state_27513__$1 = state_27513;
var statearr_27518_27558 = state_27513__$1;
(statearr_27518_27558[(2)] = null);

(statearr_27518_27558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (4))){
var inst_27454 = (state_27513[(13)]);
var inst_27454__$1 = (state_27513[(2)]);
var inst_27455 = (inst_27454__$1 == null);
var state_27513__$1 = (function (){var statearr_27519 = state_27513;
(statearr_27519[(13)] = inst_27454__$1);

return statearr_27519;
})();
if(cljs.core.truth_(inst_27455)){
var statearr_27520_27559 = state_27513__$1;
(statearr_27520_27559[(1)] = (5));

} else {
var statearr_27521_27560 = state_27513__$1;
(statearr_27521_27560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (15))){
var state_27513__$1 = state_27513;
var statearr_27525_27561 = state_27513__$1;
(statearr_27525_27561[(2)] = null);

(statearr_27525_27561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (21))){
var state_27513__$1 = state_27513;
var statearr_27526_27562 = state_27513__$1;
(statearr_27526_27562[(2)] = null);

(statearr_27526_27562[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (13))){
var inst_27468 = (state_27513[(8)]);
var inst_27467 = (state_27513[(9)]);
var inst_27466 = (state_27513[(10)]);
var inst_27465 = (state_27513[(12)]);
var inst_27475 = (state_27513[(2)]);
var inst_27476 = (inst_27468 + (1));
var tmp27522 = inst_27467;
var tmp27523 = inst_27466;
var tmp27524 = inst_27465;
var inst_27465__$1 = tmp27524;
var inst_27466__$1 = tmp27523;
var inst_27467__$1 = tmp27522;
var inst_27468__$1 = inst_27476;
var state_27513__$1 = (function (){var statearr_27527 = state_27513;
(statearr_27527[(8)] = inst_27468__$1);

(statearr_27527[(14)] = inst_27475);

(statearr_27527[(9)] = inst_27467__$1);

(statearr_27527[(10)] = inst_27466__$1);

(statearr_27527[(12)] = inst_27465__$1);

return statearr_27527;
})();
var statearr_27528_27563 = state_27513__$1;
(statearr_27528_27563[(2)] = null);

(statearr_27528_27563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (22))){
var state_27513__$1 = state_27513;
var statearr_27529_27564 = state_27513__$1;
(statearr_27529_27564[(2)] = null);

(statearr_27529_27564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (6))){
var inst_27454 = (state_27513[(13)]);
var inst_27463 = f.call(null,inst_27454);
var inst_27464 = cljs.core.seq.call(null,inst_27463);
var inst_27465 = inst_27464;
var inst_27466 = null;
var inst_27467 = (0);
var inst_27468 = (0);
var state_27513__$1 = (function (){var statearr_27530 = state_27513;
(statearr_27530[(8)] = inst_27468);

(statearr_27530[(9)] = inst_27467);

(statearr_27530[(10)] = inst_27466);

(statearr_27530[(12)] = inst_27465);

return statearr_27530;
})();
var statearr_27531_27565 = state_27513__$1;
(statearr_27531_27565[(2)] = null);

(statearr_27531_27565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (17))){
var inst_27479 = (state_27513[(7)]);
var inst_27483 = cljs.core.chunk_first.call(null,inst_27479);
var inst_27484 = cljs.core.chunk_rest.call(null,inst_27479);
var inst_27485 = cljs.core.count.call(null,inst_27483);
var inst_27465 = inst_27484;
var inst_27466 = inst_27483;
var inst_27467 = inst_27485;
var inst_27468 = (0);
var state_27513__$1 = (function (){var statearr_27532 = state_27513;
(statearr_27532[(8)] = inst_27468);

(statearr_27532[(9)] = inst_27467);

(statearr_27532[(10)] = inst_27466);

(statearr_27532[(12)] = inst_27465);

return statearr_27532;
})();
var statearr_27533_27566 = state_27513__$1;
(statearr_27533_27566[(2)] = null);

(statearr_27533_27566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (3))){
var inst_27511 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27513__$1,inst_27511);
} else {
if((state_val_27514 === (12))){
var inst_27499 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27534_27567 = state_27513__$1;
(statearr_27534_27567[(2)] = inst_27499);

(statearr_27534_27567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (2))){
var state_27513__$1 = state_27513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27513__$1,(4),in$);
} else {
if((state_val_27514 === (23))){
var inst_27507 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27535_27568 = state_27513__$1;
(statearr_27535_27568[(2)] = inst_27507);

(statearr_27535_27568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (19))){
var inst_27494 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27536_27569 = state_27513__$1;
(statearr_27536_27569[(2)] = inst_27494);

(statearr_27536_27569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (11))){
var inst_27479 = (state_27513[(7)]);
var inst_27465 = (state_27513[(12)]);
var inst_27479__$1 = cljs.core.seq.call(null,inst_27465);
var state_27513__$1 = (function (){var statearr_27537 = state_27513;
(statearr_27537[(7)] = inst_27479__$1);

return statearr_27537;
})();
if(inst_27479__$1){
var statearr_27538_27570 = state_27513__$1;
(statearr_27538_27570[(1)] = (14));

} else {
var statearr_27539_27571 = state_27513__$1;
(statearr_27539_27571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (9))){
var inst_27501 = (state_27513[(2)]);
var inst_27502 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27513__$1 = (function (){var statearr_27540 = state_27513;
(statearr_27540[(15)] = inst_27501);

return statearr_27540;
})();
if(cljs.core.truth_(inst_27502)){
var statearr_27541_27572 = state_27513__$1;
(statearr_27541_27572[(1)] = (21));

} else {
var statearr_27542_27573 = state_27513__$1;
(statearr_27542_27573[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (5))){
var inst_27457 = cljs.core.async.close_BANG_.call(null,out);
var state_27513__$1 = state_27513;
var statearr_27543_27574 = state_27513__$1;
(statearr_27543_27574[(2)] = inst_27457);

(statearr_27543_27574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (14))){
var inst_27479 = (state_27513[(7)]);
var inst_27481 = cljs.core.chunked_seq_QMARK_.call(null,inst_27479);
var state_27513__$1 = state_27513;
if(inst_27481){
var statearr_27544_27575 = state_27513__$1;
(statearr_27544_27575[(1)] = (17));

} else {
var statearr_27545_27576 = state_27513__$1;
(statearr_27545_27576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (16))){
var inst_27497 = (state_27513[(2)]);
var state_27513__$1 = state_27513;
var statearr_27546_27577 = state_27513__$1;
(statearr_27546_27577[(2)] = inst_27497);

(statearr_27546_27577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27514 === (10))){
var inst_27468 = (state_27513[(8)]);
var inst_27466 = (state_27513[(10)]);
var inst_27473 = cljs.core._nth.call(null,inst_27466,inst_27468);
var state_27513__$1 = state_27513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27513__$1,(13),out,inst_27473);
} else {
if((state_val_27514 === (18))){
var inst_27479 = (state_27513[(7)]);
var inst_27488 = cljs.core.first.call(null,inst_27479);
var state_27513__$1 = state_27513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27513__$1,(20),out,inst_27488);
} else {
if((state_val_27514 === (8))){
var inst_27468 = (state_27513[(8)]);
var inst_27467 = (state_27513[(9)]);
var inst_27470 = (inst_27468 < inst_27467);
var inst_27471 = inst_27470;
var state_27513__$1 = state_27513;
if(cljs.core.truth_(inst_27471)){
var statearr_27547_27578 = state_27513__$1;
(statearr_27547_27578[(1)] = (10));

} else {
var statearr_27548_27579 = state_27513__$1;
(statearr_27548_27579[(1)] = (11));

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
});})(c__21741__auto__))
;
return ((function (switch__21676__auto__,c__21741__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21677__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21677__auto____0 = (function (){
var statearr_27552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21677__auto__);

(statearr_27552[(1)] = (1));

return statearr_27552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21677__auto____1 = (function (state_27513){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27553){if((e27553 instanceof Object)){
var ex__21680__auto__ = e27553;
var statearr_27554_27580 = state_27513;
(statearr_27554_27580[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27513;
state_27513 = G__27581;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21677__auto__ = function(state_27513){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21677__auto____1.call(this,state_27513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21677__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21677__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto__))
})();
var state__21743__auto__ = (function (){var statearr_27555 = f__21742__auto__.call(null);
(statearr_27555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto__);

return statearr_27555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto__))
);

return c__21741__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27582 = [];
var len__5651__auto___27585 = arguments.length;
var i__5652__auto___27586 = (0);
while(true){
if((i__5652__auto___27586 < len__5651__auto___27585)){
args27582.push((arguments[i__5652__auto___27586]));

var G__27587 = (i__5652__auto___27586 + (1));
i__5652__auto___27586 = G__27587;
continue;
} else {
}
break;
}

var G__27584 = args27582.length;
switch (G__27584) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27582.length)].join('')));

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
var args27589 = [];
var len__5651__auto___27592 = arguments.length;
var i__5652__auto___27593 = (0);
while(true){
if((i__5652__auto___27593 < len__5651__auto___27592)){
args27589.push((arguments[i__5652__auto___27593]));

var G__27594 = (i__5652__auto___27593 + (1));
i__5652__auto___27593 = G__27594;
continue;
} else {
}
break;
}

var G__27591 = args27589.length;
switch (G__27591) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27589.length)].join('')));

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
var args27596 = [];
var len__5651__auto___27647 = arguments.length;
var i__5652__auto___27648 = (0);
while(true){
if((i__5652__auto___27648 < len__5651__auto___27647)){
args27596.push((arguments[i__5652__auto___27648]));

var G__27649 = (i__5652__auto___27648 + (1));
i__5652__auto___27648 = G__27649;
continue;
} else {
}
break;
}

var G__27598 = args27596.length;
switch (G__27598) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27596.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21741__auto___27651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27651,out){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27651,out){
return (function (state_27622){
var state_val_27623 = (state_27622[(1)]);
if((state_val_27623 === (7))){
var inst_27617 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27624_27652 = state_27622__$1;
(statearr_27624_27652[(2)] = inst_27617);

(statearr_27624_27652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (1))){
var inst_27599 = null;
var state_27622__$1 = (function (){var statearr_27625 = state_27622;
(statearr_27625[(7)] = inst_27599);

return statearr_27625;
})();
var statearr_27626_27653 = state_27622__$1;
(statearr_27626_27653[(2)] = null);

(statearr_27626_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (4))){
var inst_27602 = (state_27622[(8)]);
var inst_27602__$1 = (state_27622[(2)]);
var inst_27603 = (inst_27602__$1 == null);
var inst_27604 = cljs.core.not.call(null,inst_27603);
var state_27622__$1 = (function (){var statearr_27627 = state_27622;
(statearr_27627[(8)] = inst_27602__$1);

return statearr_27627;
})();
if(inst_27604){
var statearr_27628_27654 = state_27622__$1;
(statearr_27628_27654[(1)] = (5));

} else {
var statearr_27629_27655 = state_27622__$1;
(statearr_27629_27655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (6))){
var state_27622__$1 = state_27622;
var statearr_27630_27656 = state_27622__$1;
(statearr_27630_27656[(2)] = null);

(statearr_27630_27656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (3))){
var inst_27619 = (state_27622[(2)]);
var inst_27620 = cljs.core.async.close_BANG_.call(null,out);
var state_27622__$1 = (function (){var statearr_27631 = state_27622;
(statearr_27631[(9)] = inst_27619);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27622__$1,inst_27620);
} else {
if((state_val_27623 === (2))){
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27622__$1,(4),ch);
} else {
if((state_val_27623 === (11))){
var inst_27602 = (state_27622[(8)]);
var inst_27611 = (state_27622[(2)]);
var inst_27599 = inst_27602;
var state_27622__$1 = (function (){var statearr_27632 = state_27622;
(statearr_27632[(7)] = inst_27599);

(statearr_27632[(10)] = inst_27611);

return statearr_27632;
})();
var statearr_27633_27657 = state_27622__$1;
(statearr_27633_27657[(2)] = null);

(statearr_27633_27657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (9))){
var inst_27602 = (state_27622[(8)]);
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27622__$1,(11),out,inst_27602);
} else {
if((state_val_27623 === (5))){
var inst_27599 = (state_27622[(7)]);
var inst_27602 = (state_27622[(8)]);
var inst_27606 = cljs.core._EQ_.call(null,inst_27602,inst_27599);
var state_27622__$1 = state_27622;
if(inst_27606){
var statearr_27635_27658 = state_27622__$1;
(statearr_27635_27658[(1)] = (8));

} else {
var statearr_27636_27659 = state_27622__$1;
(statearr_27636_27659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (10))){
var inst_27614 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27637_27660 = state_27622__$1;
(statearr_27637_27660[(2)] = inst_27614);

(statearr_27637_27660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (8))){
var inst_27599 = (state_27622[(7)]);
var tmp27634 = inst_27599;
var inst_27599__$1 = tmp27634;
var state_27622__$1 = (function (){var statearr_27638 = state_27622;
(statearr_27638[(7)] = inst_27599__$1);

return statearr_27638;
})();
var statearr_27639_27661 = state_27622__$1;
(statearr_27639_27661[(2)] = null);

(statearr_27639_27661[(1)] = (2));


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
});})(c__21741__auto___27651,out))
;
return ((function (switch__21676__auto__,c__21741__auto___27651,out){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27643[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27643[(1)] = (1));

return statearr_27643;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27622){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27644){if((e27644 instanceof Object)){
var ex__21680__auto__ = e27644;
var statearr_27645_27662 = state_27622;
(statearr_27645_27662[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27663 = state_27622;
state_27622 = G__27663;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27651,out))
})();
var state__21743__auto__ = (function (){var statearr_27646 = f__21742__auto__.call(null);
(statearr_27646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27651);

return statearr_27646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27651,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27664 = [];
var len__5651__auto___27734 = arguments.length;
var i__5652__auto___27735 = (0);
while(true){
if((i__5652__auto___27735 < len__5651__auto___27734)){
args27664.push((arguments[i__5652__auto___27735]));

var G__27736 = (i__5652__auto___27735 + (1));
i__5652__auto___27735 = G__27736;
continue;
} else {
}
break;
}

var G__27666 = args27664.length;
switch (G__27666) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27664.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21741__auto___27738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27738,out){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27738,out){
return (function (state_27704){
var state_val_27705 = (state_27704[(1)]);
if((state_val_27705 === (7))){
var inst_27700 = (state_27704[(2)]);
var state_27704__$1 = state_27704;
var statearr_27706_27739 = state_27704__$1;
(statearr_27706_27739[(2)] = inst_27700);

(statearr_27706_27739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (1))){
var inst_27667 = (new Array(n));
var inst_27668 = inst_27667;
var inst_27669 = (0);
var state_27704__$1 = (function (){var statearr_27707 = state_27704;
(statearr_27707[(7)] = inst_27669);

(statearr_27707[(8)] = inst_27668);

return statearr_27707;
})();
var statearr_27708_27740 = state_27704__$1;
(statearr_27708_27740[(2)] = null);

(statearr_27708_27740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (4))){
var inst_27672 = (state_27704[(9)]);
var inst_27672__$1 = (state_27704[(2)]);
var inst_27673 = (inst_27672__$1 == null);
var inst_27674 = cljs.core.not.call(null,inst_27673);
var state_27704__$1 = (function (){var statearr_27709 = state_27704;
(statearr_27709[(9)] = inst_27672__$1);

return statearr_27709;
})();
if(inst_27674){
var statearr_27710_27741 = state_27704__$1;
(statearr_27710_27741[(1)] = (5));

} else {
var statearr_27711_27742 = state_27704__$1;
(statearr_27711_27742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (15))){
var inst_27694 = (state_27704[(2)]);
var state_27704__$1 = state_27704;
var statearr_27712_27743 = state_27704__$1;
(statearr_27712_27743[(2)] = inst_27694);

(statearr_27712_27743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (13))){
var state_27704__$1 = state_27704;
var statearr_27713_27744 = state_27704__$1;
(statearr_27713_27744[(2)] = null);

(statearr_27713_27744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (6))){
var inst_27669 = (state_27704[(7)]);
var inst_27690 = (inst_27669 > (0));
var state_27704__$1 = state_27704;
if(cljs.core.truth_(inst_27690)){
var statearr_27714_27745 = state_27704__$1;
(statearr_27714_27745[(1)] = (12));

} else {
var statearr_27715_27746 = state_27704__$1;
(statearr_27715_27746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (3))){
var inst_27702 = (state_27704[(2)]);
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27704__$1,inst_27702);
} else {
if((state_val_27705 === (12))){
var inst_27668 = (state_27704[(8)]);
var inst_27692 = cljs.core.vec.call(null,inst_27668);
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27704__$1,(15),out,inst_27692);
} else {
if((state_val_27705 === (2))){
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27704__$1,(4),ch);
} else {
if((state_val_27705 === (11))){
var inst_27684 = (state_27704[(2)]);
var inst_27685 = (new Array(n));
var inst_27668 = inst_27685;
var inst_27669 = (0);
var state_27704__$1 = (function (){var statearr_27716 = state_27704;
(statearr_27716[(10)] = inst_27684);

(statearr_27716[(7)] = inst_27669);

(statearr_27716[(8)] = inst_27668);

return statearr_27716;
})();
var statearr_27717_27747 = state_27704__$1;
(statearr_27717_27747[(2)] = null);

(statearr_27717_27747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (9))){
var inst_27668 = (state_27704[(8)]);
var inst_27682 = cljs.core.vec.call(null,inst_27668);
var state_27704__$1 = state_27704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27704__$1,(11),out,inst_27682);
} else {
if((state_val_27705 === (5))){
var inst_27677 = (state_27704[(11)]);
var inst_27669 = (state_27704[(7)]);
var inst_27668 = (state_27704[(8)]);
var inst_27672 = (state_27704[(9)]);
var inst_27676 = (inst_27668[inst_27669] = inst_27672);
var inst_27677__$1 = (inst_27669 + (1));
var inst_27678 = (inst_27677__$1 < n);
var state_27704__$1 = (function (){var statearr_27718 = state_27704;
(statearr_27718[(11)] = inst_27677__$1);

(statearr_27718[(12)] = inst_27676);

return statearr_27718;
})();
if(cljs.core.truth_(inst_27678)){
var statearr_27719_27748 = state_27704__$1;
(statearr_27719_27748[(1)] = (8));

} else {
var statearr_27720_27749 = state_27704__$1;
(statearr_27720_27749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (14))){
var inst_27697 = (state_27704[(2)]);
var inst_27698 = cljs.core.async.close_BANG_.call(null,out);
var state_27704__$1 = (function (){var statearr_27722 = state_27704;
(statearr_27722[(13)] = inst_27697);

return statearr_27722;
})();
var statearr_27723_27750 = state_27704__$1;
(statearr_27723_27750[(2)] = inst_27698);

(statearr_27723_27750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (10))){
var inst_27688 = (state_27704[(2)]);
var state_27704__$1 = state_27704;
var statearr_27724_27751 = state_27704__$1;
(statearr_27724_27751[(2)] = inst_27688);

(statearr_27724_27751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27705 === (8))){
var inst_27677 = (state_27704[(11)]);
var inst_27668 = (state_27704[(8)]);
var tmp27721 = inst_27668;
var inst_27668__$1 = tmp27721;
var inst_27669 = inst_27677;
var state_27704__$1 = (function (){var statearr_27725 = state_27704;
(statearr_27725[(7)] = inst_27669);

(statearr_27725[(8)] = inst_27668__$1);

return statearr_27725;
})();
var statearr_27726_27752 = state_27704__$1;
(statearr_27726_27752[(2)] = null);

(statearr_27726_27752[(1)] = (2));


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
});})(c__21741__auto___27738,out))
;
return ((function (switch__21676__auto__,c__21741__auto___27738,out){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27730[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27730[(1)] = (1));

return statearr_27730;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27704){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27731){if((e27731 instanceof Object)){
var ex__21680__auto__ = e27731;
var statearr_27732_27753 = state_27704;
(statearr_27732_27753[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27754 = state_27704;
state_27704 = G__27754;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27738,out))
})();
var state__21743__auto__ = (function (){var statearr_27733 = f__21742__auto__.call(null);
(statearr_27733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27738);

return statearr_27733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27738,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27755 = [];
var len__5651__auto___27829 = arguments.length;
var i__5652__auto___27830 = (0);
while(true){
if((i__5652__auto___27830 < len__5651__auto___27829)){
args27755.push((arguments[i__5652__auto___27830]));

var G__27831 = (i__5652__auto___27830 + (1));
i__5652__auto___27830 = G__27831;
continue;
} else {
}
break;
}

var G__27757 = args27755.length;
switch (G__27757) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27755.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21741__auto___27833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21741__auto___27833,out){
return (function (){
var f__21742__auto__ = (function (){var switch__21676__auto__ = ((function (c__21741__auto___27833,out){
return (function (state_27799){
var state_val_27800 = (state_27799[(1)]);
if((state_val_27800 === (7))){
var inst_27795 = (state_27799[(2)]);
var state_27799__$1 = state_27799;
var statearr_27801_27834 = state_27799__$1;
(statearr_27801_27834[(2)] = inst_27795);

(statearr_27801_27834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (1))){
var inst_27758 = [];
var inst_27759 = inst_27758;
var inst_27760 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27799__$1 = (function (){var statearr_27802 = state_27799;
(statearr_27802[(7)] = inst_27760);

(statearr_27802[(8)] = inst_27759);

return statearr_27802;
})();
var statearr_27803_27835 = state_27799__$1;
(statearr_27803_27835[(2)] = null);

(statearr_27803_27835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (4))){
var inst_27763 = (state_27799[(9)]);
var inst_27763__$1 = (state_27799[(2)]);
var inst_27764 = (inst_27763__$1 == null);
var inst_27765 = cljs.core.not.call(null,inst_27764);
var state_27799__$1 = (function (){var statearr_27804 = state_27799;
(statearr_27804[(9)] = inst_27763__$1);

return statearr_27804;
})();
if(inst_27765){
var statearr_27805_27836 = state_27799__$1;
(statearr_27805_27836[(1)] = (5));

} else {
var statearr_27806_27837 = state_27799__$1;
(statearr_27806_27837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (15))){
var inst_27789 = (state_27799[(2)]);
var state_27799__$1 = state_27799;
var statearr_27807_27838 = state_27799__$1;
(statearr_27807_27838[(2)] = inst_27789);

(statearr_27807_27838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (13))){
var state_27799__$1 = state_27799;
var statearr_27808_27839 = state_27799__$1;
(statearr_27808_27839[(2)] = null);

(statearr_27808_27839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (6))){
var inst_27759 = (state_27799[(8)]);
var inst_27784 = inst_27759.length;
var inst_27785 = (inst_27784 > (0));
var state_27799__$1 = state_27799;
if(cljs.core.truth_(inst_27785)){
var statearr_27809_27840 = state_27799__$1;
(statearr_27809_27840[(1)] = (12));

} else {
var statearr_27810_27841 = state_27799__$1;
(statearr_27810_27841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (3))){
var inst_27797 = (state_27799[(2)]);
var state_27799__$1 = state_27799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27799__$1,inst_27797);
} else {
if((state_val_27800 === (12))){
var inst_27759 = (state_27799[(8)]);
var inst_27787 = cljs.core.vec.call(null,inst_27759);
var state_27799__$1 = state_27799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27799__$1,(15),out,inst_27787);
} else {
if((state_val_27800 === (2))){
var state_27799__$1 = state_27799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27799__$1,(4),ch);
} else {
if((state_val_27800 === (11))){
var inst_27767 = (state_27799[(10)]);
var inst_27763 = (state_27799[(9)]);
var inst_27777 = (state_27799[(2)]);
var inst_27778 = [];
var inst_27779 = inst_27778.push(inst_27763);
var inst_27759 = inst_27778;
var inst_27760 = inst_27767;
var state_27799__$1 = (function (){var statearr_27811 = state_27799;
(statearr_27811[(7)] = inst_27760);

(statearr_27811[(8)] = inst_27759);

(statearr_27811[(11)] = inst_27779);

(statearr_27811[(12)] = inst_27777);

return statearr_27811;
})();
var statearr_27812_27842 = state_27799__$1;
(statearr_27812_27842[(2)] = null);

(statearr_27812_27842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (9))){
var inst_27759 = (state_27799[(8)]);
var inst_27775 = cljs.core.vec.call(null,inst_27759);
var state_27799__$1 = state_27799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27799__$1,(11),out,inst_27775);
} else {
if((state_val_27800 === (5))){
var inst_27760 = (state_27799[(7)]);
var inst_27767 = (state_27799[(10)]);
var inst_27763 = (state_27799[(9)]);
var inst_27767__$1 = f.call(null,inst_27763);
var inst_27768 = cljs.core._EQ_.call(null,inst_27767__$1,inst_27760);
var inst_27769 = cljs.core.keyword_identical_QMARK_.call(null,inst_27760,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27770 = (inst_27768) || (inst_27769);
var state_27799__$1 = (function (){var statearr_27813 = state_27799;
(statearr_27813[(10)] = inst_27767__$1);

return statearr_27813;
})();
if(cljs.core.truth_(inst_27770)){
var statearr_27814_27843 = state_27799__$1;
(statearr_27814_27843[(1)] = (8));

} else {
var statearr_27815_27844 = state_27799__$1;
(statearr_27815_27844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (14))){
var inst_27792 = (state_27799[(2)]);
var inst_27793 = cljs.core.async.close_BANG_.call(null,out);
var state_27799__$1 = (function (){var statearr_27817 = state_27799;
(statearr_27817[(13)] = inst_27792);

return statearr_27817;
})();
var statearr_27818_27845 = state_27799__$1;
(statearr_27818_27845[(2)] = inst_27793);

(statearr_27818_27845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (10))){
var inst_27782 = (state_27799[(2)]);
var state_27799__$1 = state_27799;
var statearr_27819_27846 = state_27799__$1;
(statearr_27819_27846[(2)] = inst_27782);

(statearr_27819_27846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27800 === (8))){
var inst_27767 = (state_27799[(10)]);
var inst_27759 = (state_27799[(8)]);
var inst_27763 = (state_27799[(9)]);
var inst_27772 = inst_27759.push(inst_27763);
var tmp27816 = inst_27759;
var inst_27759__$1 = tmp27816;
var inst_27760 = inst_27767;
var state_27799__$1 = (function (){var statearr_27820 = state_27799;
(statearr_27820[(7)] = inst_27760);

(statearr_27820[(8)] = inst_27759__$1);

(statearr_27820[(14)] = inst_27772);

return statearr_27820;
})();
var statearr_27821_27847 = state_27799__$1;
(statearr_27821_27847[(2)] = null);

(statearr_27821_27847[(1)] = (2));


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
});})(c__21741__auto___27833,out))
;
return ((function (switch__21676__auto__,c__21741__auto___27833,out){
return (function() {
var cljs$core$async$state_machine__21677__auto__ = null;
var cljs$core$async$state_machine__21677__auto____0 = (function (){
var statearr_27825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27825[(0)] = cljs$core$async$state_machine__21677__auto__);

(statearr_27825[(1)] = (1));

return statearr_27825;
});
var cljs$core$async$state_machine__21677__auto____1 = (function (state_27799){
while(true){
var ret_value__21678__auto__ = (function (){try{while(true){
var result__21679__auto__ = switch__21676__auto__.call(null,state_27799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21679__auto__;
}
break;
}
}catch (e27826){if((e27826 instanceof Object)){
var ex__21680__auto__ = e27826;
var statearr_27827_27848 = state_27799;
(statearr_27827_27848[(5)] = ex__21680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27849 = state_27799;
state_27799 = G__27849;
continue;
} else {
return ret_value__21678__auto__;
}
break;
}
});
cljs$core$async$state_machine__21677__auto__ = function(state_27799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21677__auto____1.call(this,state_27799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21677__auto____0;
cljs$core$async$state_machine__21677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21677__auto____1;
return cljs$core$async$state_machine__21677__auto__;
})()
;})(switch__21676__auto__,c__21741__auto___27833,out))
})();
var state__21743__auto__ = (function (){var statearr_27828 = f__21742__auto__.call(null);
(statearr_27828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21741__auto___27833);

return statearr_27828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21743__auto__);
});})(c__21741__auto___27833,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map