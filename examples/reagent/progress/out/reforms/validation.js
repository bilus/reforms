// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22540_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__22540_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e22542){if((e22542 instanceof Error)){
var _ = e22542;
return false;
} else {
throw e22542;

}
}});
reforms.validation.present_QMARK_ = (function reforms$validation$present_QMARK_(x){
if(cljs.core.truth_((function (){var and__4581__auto__ = x;
if(cljs.core.truth_(and__4581__auto__)){
return (cljs.core.not.call(null,(function (){var and__4581__auto____$1 = typeof x === 'string';
if(and__4581__auto____$1){
return clojure.string.blank_QMARK_.call(null,x);
} else {
return and__4581__auto____$1;
}
})())) && (cljs.core.not.call(null,(function (){var and__4581__auto____$1 = reforms.validation.sequable_QMARK_.call(null,x);
if(cljs.core.truth_(and__4581__auto____$1)){
return cljs.core.empty_QMARK_.call(null,x);
} else {
return and__4581__auto____$1;
}
})()));
} else {
return and__4581__auto__;
}
})())){
return true;
} else {
return null;
}
});
reforms.validation._STAR_validation_errors_STAR_ = null;
reforms.validation.validating_field = (function reforms$validation$validating_field(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22545 = arguments.length;
var i__5652__auto___22546 = (0);
while(true){
if((i__5652__auto___22546 < len__5651__auto___22545)){
args__5658__auto__.push((arguments[i__5652__auto___22546]));

var G__22547 = (i__5652__auto___22546 + (1));
i__5652__auto___22546 = G__22547;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic = (function (field_fn,args){
if(cljs.core.not_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The validating version uses :validation-error-fn internally."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-2114707554,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),new cljs.core.Symbol(null,"args","args",-1338879193,null))))].join('')));
}

return cljs.core.apply.call(null,field_fn,cljs.core.conj.call(null,cljs.core.vec.call(null,args),new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (korks){
return reforms.validation.valid_QMARK_.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
}),new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),(function (korks){
var temp__4425__auto__ = reforms.validation.find_validation_error.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(err);
} else {
return null;
}
})));
});

reforms.validation.validating_field.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq22543){
var G__22544 = cljs.core.first.call(null,seq22543);
var seq22543__$1 = cljs.core.next.call(null,seq22543);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__22544,seq22543__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22555 = arguments.length;
var i__5652__auto___22556 = (0);
while(true){
if((i__5652__auto___22556 < len__5651__auto___22555)){
args__5658__auto__.push((arguments[i__5652__auto___22556]));

var G__22557 = (i__5652__auto___22556 + (1));
i__5652__auto___22556 = G__22557;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_22550 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5365__auto__ = ((function (_STAR_validation_errors_STAR_22550){
return (function reforms$validation$iter__22551(s__22552){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_22550){
return (function (){
var s__22552__$1 = s__22552;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22552__$1);
if(temp__4425__auto__){
var s__22552__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22552__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__22552__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__22554 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__22553 = (0);
while(true){
if((i__22553 < size__5364__auto__)){
var field = cljs.core._nth.call(null,c__5363__auto__,i__22553);
cljs.core.chunk_append.call(null,b__22554,field.call(null));

var G__22558 = (i__22553 + (1));
i__22553 = G__22558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22554),reforms$validation$iter__22551.call(null,cljs.core.chunk_rest.call(null,s__22552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22554),null);
}
} else {
var field = cljs.core.first.call(null,s__22552__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__22551.call(null,cljs.core.rest.call(null,s__22552__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_22550))
,null,null));
});})(_STAR_validation_errors_STAR_22550))
;
return iter__5365__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_22550;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq22548){
var G__22549 = cljs.core.first.call(null,seq22548);
var seq22548__$1 = cljs.core.next.call(null,seq22548);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__22549,seq22548__$1);
});
/**
 * Returns a validation error for a key sequence.
 * 
 * Arguments:
 * 
 * - korks         - key sequence the error refers to
 * - error-message - string containing the error message
 */
reforms.validation.validation_error = (function reforms$validation$validation_error(korks,error_message){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"korks","korks",-1343842342),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.seq.call(null,korks)),new cljs.core.Keyword(null,"error-message","error-message",1756021561),error_message], null);
});
/**
 * Validates data and returns a list of errors.
 * 
 * Arguments:
 * 
 * - data      - data to validate
 * - validators - seq of validators to use
 */
reforms.validation.validate = (function reforms$validation$validate(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22562 = arguments.length;
var i__5652__auto___22563 = (0);
while(true){
if((i__5652__auto___22563 < len__5651__auto___22562)){
args__5658__auto__.push((arguments[i__5652__auto___22563]));

var G__22564 = (i__5652__auto___22563 + (1));
i__5652__auto___22563 = G__22564;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__22559_SHARP_){
return p1__22559_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq22560){
var G__22561 = cljs.core.first.call(null,seq22560);
var seq22560__$1 = cljs.core.next.call(null,seq22560);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__22561,seq22560__$1);
});
/**
 * Returns true if there are no errors.
 * 
 * Arguments:
 * 
 * - errors - result of validation
 * - kork   - (optional) match against this key seq
 */
reforms.validation.valid_QMARK_ = (function reforms$validation$valid_QMARK_(var_args){
var args22565 = [];
var len__5651__auto___22568 = arguments.length;
var i__5652__auto___22569 = (0);
while(true){
if((i__5652__auto___22569 < len__5651__auto___22568)){
args22565.push((arguments[i__5652__auto___22569]));

var G__22570 = (i__5652__auto___22569 + (1));
i__5652__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var G__22567 = args22565.length;
switch (G__22567) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22565.length)].join('')));

}
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (errors){
return ((errors == null)) || (cljs.core.empty_QMARK_.call(null,errors));
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (kork,errors){
return (reforms.validation.find_validation_error.call(null,kork,errors) == null);
});

reforms.validation.valid_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Complement of [[valid?]]
 */
reforms.validation.invalid_QMARK_ = cljs.core.complement.call(null,reforms.validation.valid_QMARK_);
/**
 * Renders errors as unordered list.
 * 
 * Arguments:
 * 
 * - errors - results of validation
 */
reforms.validation.render_errors = (function reforms$validation$render_errors(errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5365__auto__ = (function reforms$validation$render_errors_$_iter__22576(s__22577){
return (new cljs.core.LazySeq(null,(function (){
var s__22577__$1 = s__22577;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22577__$1);
if(temp__4425__auto__){
var s__22577__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22577__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__22577__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__22579 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__22578 = (0);
while(true){
if((i__22578 < size__5364__auto__)){
var failure = cljs.core._nth.call(null,c__5363__auto__,i__22578);
cljs.core.chunk_append.call(null,b__22579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__22580 = (i__22578 + (1));
i__22578 = G__22580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22579),reforms$validation$render_errors_$_iter__22576.call(null,cljs.core.chunk_rest.call(null,s__22577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22579),null);
}
} else {
var failure = cljs.core.first.call(null,s__22577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__22576.call(null,cljs.core.rest.call(null,s__22577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5365__auto__.call(null,errors);
})()], null);
} else {
return null;
}
});
/**
 * Equality validator.
 * 
 * Example:
 * 
 *     (equal [:user :password1] [:user :password2] "Passwords do not match"]
 */
reforms.validation.equal = (function reforms$validation$equal(korks1,korks2,error_message){
return (function (data){
var lhs = (function (){var or__4593__auto__ = cljs.core.get_in.call(null,data,korks1);
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return "";
}
})();
var rhs = (function (){var or__4593__auto__ = cljs.core.get_in.call(null,data,korks2);
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return "";
}
})();
if(cljs.core._EQ_.call(null,lhs,rhs)){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks2], null),error_message);
}
});
});
/**
 * Presence validator.
 * 
 *   Example:
 * 
 *    (present [:user :login] "Enter the login"]
 */
reforms.validation.present = (function reforms$validation$present(korks,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(reforms.validation.present_QMARK_.call(null,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Regex validator.
 * 
 *   Example:
 * 
 *    (matches [:user :email] #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" "Invalid email address"]
 */
reforms.validation.matches = (function reforms$validation$matches(korks,re,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(cljs.core.re_matches.call(null,re,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Predicate-based validator.
 * 
 *   Example:
 * 
 *   (is-true [:user :email] #(nil? (find-by-email %)) "Email already exists"]
 */
reforms.validation.is_true = (function reforms$validation$is_true(korks,f,error_message){
return (function (data){
if(cljs.core.truth_(f.call(null,cljs.core.get_in.call(null,data,korks)))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Generates an error. Useful for errors not coming from data but from external sources such as Ajax or RPC.
 * 
 * Example:
 * 
 *     (force-error [:server-error] "Problem connecting to the REST API server")
 */
reforms.validation.force_error = (function reforms$validation$force_error(korks,error_message){
return (function (_){
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
});
});
/**
 * Generates a 'no error' placeholder.
 */
reforms.validation.no_error = (function reforms$validation$no_error(){
return (function (_){
return null;
});
});
/**
 * Groups validators using 'and' boolean logic.
 */
reforms.validation.all = (function reforms$validation$all(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22582 = arguments.length;
var i__5652__auto___22583 = (0);
while(true){
if((i__5652__auto___22583 < len__5651__auto___22582)){
args__5658__auto__.push((arguments[i__5652__auto___22583]));

var G__22584 = (i__5652__auto___22583 + (1));
i__5652__auto___22583 = G__22584;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic = (function (validators){
return (function (data){
return cljs.core.apply.call(null,reforms.validation.validate,data,validators);
});
});

reforms.validation.all.cljs$lang$maxFixedArity = (0);

reforms.validation.all.cljs$lang$applyTo = (function (seq22581){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22581));
});
/**
 * Validates data and saves the result. **A stateful method.**
 * 
 * Arguments:
 * 
 * - cursor          - the data to validate
 * - ui-state-cursor - this is where validation result will be stored
 * - validators      - a seq of validators
 */
reforms.validation.validate_BANG_ = (function reforms$validation$validate_BANG_(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22588 = arguments.length;
var i__5652__auto___22589 = (0);
while(true){
if((i__5652__auto___22589 < len__5651__auto___22588)){
args__5658__auto__.push((arguments[i__5652__auto___22589]));

var G__22590 = (i__5652__auto___22589 + (1));
i__5652__auto___22589 = G__22590;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((2) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((2)),(0))):null);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5659__auto__);
});

reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,ui_state_cursor,validators){
var validation_errors = cljs.core.apply.call(null,reforms.validation.validate,reforms.binding.core.deref.call(null,cursor),validators);
reforms.binding.core.reset_BANG_.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null),validation_errors);

return reforms.validation.valid_QMARK_.call(null,validation_errors);
});

reforms.validation.validate_BANG_.cljs$lang$maxFixedArity = (2);

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq22585){
var G__22586 = cljs.core.first.call(null,seq22585);
var seq22585__$1 = cljs.core.next.call(null,seq22585);
var G__22587 = cljs.core.first.call(null,seq22585__$1);
var seq22585__$2 = cljs.core.next.call(null,seq22585__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22586,G__22587,seq22585__$2);
});
/**
 * Returns validation errors saved by [[validate!]] into ui-state-cursor.
 */
reforms.validation.validation_errors = (function reforms$validation$validation_errors(ui_state_cursor){
return reforms.binding.core.get_in.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null));
});
/**
 * Wrapper for [[reforms.core/html5-input]] adding support for validation.
 */
reforms.validation.html5_input = (function reforms$validation$html5_input(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22592 = arguments.length;
var i__5652__auto___22593 = (0);
while(true){
if((i__5652__auto___22593 < len__5651__auto___22592)){
args__5658__auto__.push((arguments[i__5652__auto___22593]));

var G__22594 = (i__5652__auto___22593 + (1));
i__5652__auto___22593 = G__22594;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.html5_input,args);
});

reforms.validation.html5_input.cljs$lang$maxFixedArity = (0);

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq22591){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22591));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22596 = arguments.length;
var i__5652__auto___22597 = (0);
while(true){
if((i__5652__auto___22597 < len__5651__auto___22596)){
args__5658__auto__.push((arguments[i__5652__auto___22597]));

var G__22598 = (i__5652__auto___22597 + (1));
i__5652__auto___22597 = G__22598;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.password,args);
});

reforms.validation.password.cljs$lang$maxFixedArity = (0);

reforms.validation.password.cljs$lang$applyTo = (function (seq22595){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22595));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22600 = arguments.length;
var i__5652__auto___22601 = (0);
while(true){
if((i__5652__auto___22601 < len__5651__auto___22600)){
args__5658__auto__.push((arguments[i__5652__auto___22601]));

var G__22602 = (i__5652__auto___22601 + (1));
i__5652__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.text,args);
});

reforms.validation.text.cljs$lang$maxFixedArity = (0);

reforms.validation.text.cljs$lang$applyTo = (function (seq22599){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22599));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22604 = arguments.length;
var i__5652__auto___22605 = (0);
while(true){
if((i__5652__auto___22605 < len__5651__auto___22604)){
args__5658__auto__.push((arguments[i__5652__auto___22605]));

var G__22606 = (i__5652__auto___22605 + (1));
i__5652__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.textarea,args);
});

reforms.validation.textarea.cljs$lang$maxFixedArity = (0);

reforms.validation.textarea.cljs$lang$applyTo = (function (seq22603){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22603));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22608 = arguments.length;
var i__5652__auto___22609 = (0);
while(true){
if((i__5652__auto___22609 < len__5651__auto___22608)){
args__5658__auto__.push((arguments[i__5652__auto___22609]));

var G__22610 = (i__5652__auto___22609 + (1));
i__5652__auto___22609 = G__22610;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.checkbox,args);
});

reforms.validation.checkbox.cljs$lang$maxFixedArity = (0);

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq22607){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22607));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22612 = arguments.length;
var i__5652__auto___22613 = (0);
while(true){
if((i__5652__auto___22613 < len__5651__auto___22612)){
args__5658__auto__.push((arguments[i__5652__auto___22613]));

var G__22614 = (i__5652__auto___22613 + (1));
i__5652__auto___22613 = G__22614;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.select,args);
});

reforms.validation.select.cljs$lang$maxFixedArity = (0);

reforms.validation.select.cljs$lang$applyTo = (function (seq22611){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22611));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22616 = arguments.length;
var i__5652__auto___22617 = (0);
while(true){
if((i__5652__auto___22617 < len__5651__auto___22616)){
args__5658__auto__.push((arguments[i__5652__auto___22617]));

var G__22618 = (i__5652__auto___22617 + (1));
i__5652__auto___22617 = G__22618;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button,args);
});

reforms.validation.button.cljs$lang$maxFixedArity = (0);

reforms.validation.button.cljs$lang$applyTo = (function (seq22615){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22615));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22620 = arguments.length;
var i__5652__auto___22621 = (0);
while(true){
if((i__5652__auto___22621 < len__5651__auto___22620)){
args__5658__auto__.push((arguments[i__5652__auto___22621]));

var G__22622 = (i__5652__auto___22621 + (1));
i__5652__auto___22621 = G__22622;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_primary,args);
});

reforms.validation.button_primary.cljs$lang$maxFixedArity = (0);

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq22619){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22619));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22624 = arguments.length;
var i__5652__auto___22625 = (0);
while(true){
if((i__5652__auto___22625 < len__5651__auto___22624)){
args__5658__auto__.push((arguments[i__5652__auto___22625]));

var G__22626 = (i__5652__auto___22625 + (1));
i__5652__auto___22625 = G__22626;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_default,args);
});

reforms.validation.button_default.cljs$lang$maxFixedArity = (0);

reforms.validation.button_default.cljs$lang$applyTo = (function (seq22623){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22623));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22628 = arguments.length;
var i__5652__auto___22629 = (0);
while(true){
if((i__5652__auto___22629 < len__5651__auto___22628)){
args__5658__auto__.push((arguments[i__5652__auto___22629]));

var G__22630 = (i__5652__auto___22629 + (1));
i__5652__auto___22629 = G__22630;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime,args);
});

reforms.validation.datetime.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime.cljs$lang$applyTo = (function (seq22627){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22627));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22632 = arguments.length;
var i__5652__auto___22633 = (0);
while(true){
if((i__5652__auto___22633 < len__5651__auto___22632)){
args__5658__auto__.push((arguments[i__5652__auto___22633]));

var G__22634 = (i__5652__auto___22633 + (1));
i__5652__auto___22633 = G__22634;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime_local,args);
});

reforms.validation.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq22631){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22631));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
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

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.date,args);
});

reforms.validation.date.cljs$lang$maxFixedArity = (0);

reforms.validation.date.cljs$lang$applyTo = (function (seq22635){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22635));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22640 = arguments.length;
var i__5652__auto___22641 = (0);
while(true){
if((i__5652__auto___22641 < len__5651__auto___22640)){
args__5658__auto__.push((arguments[i__5652__auto___22641]));

var G__22642 = (i__5652__auto___22641 + (1));
i__5652__auto___22641 = G__22642;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.month,args);
});

reforms.validation.month.cljs$lang$maxFixedArity = (0);

reforms.validation.month.cljs$lang$applyTo = (function (seq22639){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22639));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22644 = arguments.length;
var i__5652__auto___22645 = (0);
while(true){
if((i__5652__auto___22645 < len__5651__auto___22644)){
args__5658__auto__.push((arguments[i__5652__auto___22645]));

var G__22646 = (i__5652__auto___22645 + (1));
i__5652__auto___22645 = G__22646;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.time,args);
});

reforms.validation.time.cljs$lang$maxFixedArity = (0);

reforms.validation.time.cljs$lang$applyTo = (function (seq22643){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22643));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22648 = arguments.length;
var i__5652__auto___22649 = (0);
while(true){
if((i__5652__auto___22649 < len__5651__auto___22648)){
args__5658__auto__.push((arguments[i__5652__auto___22649]));

var G__22650 = (i__5652__auto___22649 + (1));
i__5652__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.week,args);
});

reforms.validation.week.cljs$lang$maxFixedArity = (0);

reforms.validation.week.cljs$lang$applyTo = (function (seq22647){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22647));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22652 = arguments.length;
var i__5652__auto___22653 = (0);
while(true){
if((i__5652__auto___22653 < len__5651__auto___22652)){
args__5658__auto__.push((arguments[i__5652__auto___22653]));

var G__22654 = (i__5652__auto___22653 + (1));
i__5652__auto___22653 = G__22654;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.number,args);
});

reforms.validation.number.cljs$lang$maxFixedArity = (0);

reforms.validation.number.cljs$lang$applyTo = (function (seq22651){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22651));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22656 = arguments.length;
var i__5652__auto___22657 = (0);
while(true){
if((i__5652__auto___22657 < len__5651__auto___22656)){
args__5658__auto__.push((arguments[i__5652__auto___22657]));

var G__22658 = (i__5652__auto___22657 + (1));
i__5652__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.email,args);
});

reforms.validation.email.cljs$lang$maxFixedArity = (0);

reforms.validation.email.cljs$lang$applyTo = (function (seq22655){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22655));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22660 = arguments.length;
var i__5652__auto___22661 = (0);
while(true){
if((i__5652__auto___22661 < len__5651__auto___22660)){
args__5658__auto__.push((arguments[i__5652__auto___22661]));

var G__22662 = (i__5652__auto___22661 + (1));
i__5652__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.url,args);
});

reforms.validation.url.cljs$lang$maxFixedArity = (0);

reforms.validation.url.cljs$lang$applyTo = (function (seq22659){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22659));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22664 = arguments.length;
var i__5652__auto___22665 = (0);
while(true){
if((i__5652__auto___22665 < len__5651__auto___22664)){
args__5658__auto__.push((arguments[i__5652__auto___22665]));

var G__22666 = (i__5652__auto___22665 + (1));
i__5652__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.search,args);
});

reforms.validation.search.cljs$lang$maxFixedArity = (0);

reforms.validation.search.cljs$lang$applyTo = (function (seq22663){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22663));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22668 = arguments.length;
var i__5652__auto___22669 = (0);
while(true){
if((i__5652__auto___22669 < len__5651__auto___22668)){
args__5658__auto__.push((arguments[i__5652__auto___22669]));

var G__22670 = (i__5652__auto___22669 + (1));
i__5652__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.tel,args);
});

reforms.validation.tel.cljs$lang$maxFixedArity = (0);

reforms.validation.tel.cljs$lang$applyTo = (function (seq22667){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22667));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22672 = arguments.length;
var i__5652__auto___22673 = (0);
while(true){
if((i__5652__auto___22673 < len__5651__auto___22672)){
args__5658__auto__.push((arguments[i__5652__auto___22673]));

var G__22674 = (i__5652__auto___22673 + (1));
i__5652__auto___22673 = G__22674;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.color,args);
});

reforms.validation.color.cljs$lang$maxFixedArity = (0);

reforms.validation.color.cljs$lang$applyTo = (function (seq22671){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22671));
});
/**
 * Renders errors for specified key seqs.
 * 
 *   Example:
 * 
 *    (error-alert [:user :name] [:my-custom-error])
 */
reforms.validation.error_alert = (function reforms$validation$error_alert(var_args){
var args__5658__auto__ = [];
var len__5651__auto___22676 = arguments.length;
var i__5652__auto___22677 = (0);
while(true){
if((i__5652__auto___22677 < len__5651__auto___22676)){
args__5658__auto__.push((arguments[i__5652__auto___22677]));

var G__22678 = (i__5652__auto___22677 + (1));
i__5652__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic = (function (korks){
return reforms.validation.render_errors.call(null,cljs.core.keep.call(null,(function (kork){
var temp__4425__auto__ = reforms.validation.find_validation_error.call(null,kork,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return err;
} else {
return null;
}
}),korks));
});

reforms.validation.error_alert.cljs$lang$maxFixedArity = (0);

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq22675){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22675));
});

//# sourceMappingURL=validation.js.map