// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__166293_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__166293_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e166295){if((e166295 instanceof Error)){
var _ = e166295;
return false;
} else {
throw e166295;

}
}});
reforms.validation.present_QMARK_ = (function reforms$validation$present_QMARK_(x){
if(cljs.core.truth_((function (){var and__4697__auto__ = x;
if(cljs.core.truth_(and__4697__auto__)){
return (cljs.core.not.call(null,(function (){var and__4697__auto____$1 = typeof x === 'string';
if(and__4697__auto____$1){
return clojure.string.blank_QMARK_.call(null,x);
} else {
return and__4697__auto____$1;
}
})())) && (cljs.core.not.call(null,(function (){var and__4697__auto____$1 = reforms.validation.sequable_QMARK_.call(null,x);
if(cljs.core.truth_(and__4697__auto____$1)){
return cljs.core.empty_QMARK_.call(null,x);
} else {
return and__4697__auto____$1;
}
})()));
} else {
return and__4697__auto__;
}
})())){
return true;
} else {
return null;
}
});
reforms.validation._STAR_validation_errors_STAR_ = null;
reforms.validation.validating_field = (function reforms$validation$validating_field(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166298 = arguments.length;
var i__5768__auto___166299 = (0);
while(true){
if((i__5768__auto___166299 < len__5767__auto___166298)){
args__5774__auto__.push((arguments[i__5768__auto___166299]));

var G__166300 = (i__5768__auto___166299 + (1));
i__5768__auto___166299 = G__166300;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
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

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq166296){
var G__166297 = cljs.core.first.call(null,seq166296);
var seq166296__$1 = cljs.core.next.call(null,seq166296);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__166297,seq166296__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166308 = arguments.length;
var i__5768__auto___166309 = (0);
while(true){
if((i__5768__auto___166309 < len__5767__auto___166308)){
args__5774__auto__.push((arguments[i__5768__auto___166309]));

var G__166310 = (i__5768__auto___166309 + (1));
i__5768__auto___166309 = G__166310;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_166303 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5481__auto__ = ((function (_STAR_validation_errors_STAR_166303){
return (function reforms$validation$iter__166304(s__166305){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_166303){
return (function (){
var s__166305__$1 = s__166305;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__166305__$1);
if(temp__4425__auto__){
var s__166305__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__166305__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__166305__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__166307 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__166306 = (0);
while(true){
if((i__166306 < size__5480__auto__)){
var field = cljs.core._nth.call(null,c__5479__auto__,i__166306);
cljs.core.chunk_append.call(null,b__166307,field.call(null));

var G__166311 = (i__166306 + (1));
i__166306 = G__166311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__166307),reforms$validation$iter__166304.call(null,cljs.core.chunk_rest.call(null,s__166305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__166307),null);
}
} else {
var field = cljs.core.first.call(null,s__166305__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__166304.call(null,cljs.core.rest.call(null,s__166305__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_166303))
,null,null));
});})(_STAR_validation_errors_STAR_166303))
;
return iter__5481__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_166303;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq166301){
var G__166302 = cljs.core.first.call(null,seq166301);
var seq166301__$1 = cljs.core.next.call(null,seq166301);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__166302,seq166301__$1);
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
var args__5774__auto__ = [];
var len__5767__auto___166315 = arguments.length;
var i__5768__auto___166316 = (0);
while(true){
if((i__5768__auto___166316 < len__5767__auto___166315)){
args__5774__auto__.push((arguments[i__5768__auto___166316]));

var G__166317 = (i__5768__auto___166316 + (1));
i__5768__auto___166316 = G__166317;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__166312_SHARP_){
return p1__166312_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq166313){
var G__166314 = cljs.core.first.call(null,seq166313);
var seq166313__$1 = cljs.core.next.call(null,seq166313);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__166314,seq166313__$1);
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
var args166318 = [];
var len__5767__auto___166321 = arguments.length;
var i__5768__auto___166322 = (0);
while(true){
if((i__5768__auto___166322 < len__5767__auto___166321)){
args166318.push((arguments[i__5768__auto___166322]));

var G__166323 = (i__5768__auto___166322 + (1));
i__5768__auto___166322 = G__166323;
continue;
} else {
}
break;
}

var G__166320 = args166318.length;
switch (G__166320) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args166318.length)].join('')));

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5481__auto__ = (function reforms$validation$render_errors_$_iter__166329(s__166330){
return (new cljs.core.LazySeq(null,(function (){
var s__166330__$1 = s__166330;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__166330__$1);
if(temp__4425__auto__){
var s__166330__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__166330__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__166330__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__166332 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__166331 = (0);
while(true){
if((i__166331 < size__5480__auto__)){
var failure = cljs.core._nth.call(null,c__5479__auto__,i__166331);
cljs.core.chunk_append.call(null,b__166332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__166333 = (i__166331 + (1));
i__166331 = G__166333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__166332),reforms$validation$render_errors_$_iter__166329.call(null,cljs.core.chunk_rest.call(null,s__166330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__166332),null);
}
} else {
var failure = cljs.core.first.call(null,s__166330__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__166329.call(null,cljs.core.rest.call(null,s__166330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,errors);
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
var lhs = (function (){var or__4709__auto__ = cljs.core.get_in.call(null,data,korks1);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return "";
}
})();
var rhs = (function (){var or__4709__auto__ = cljs.core.get_in.call(null,data,korks2);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
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
var args__5774__auto__ = [];
var len__5767__auto___166335 = arguments.length;
var i__5768__auto___166336 = (0);
while(true){
if((i__5768__auto___166336 < len__5767__auto___166335)){
args__5774__auto__.push((arguments[i__5768__auto___166336]));

var G__166337 = (i__5768__auto___166336 + (1));
i__5768__auto___166336 = G__166337;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic = (function (validators){
return (function (data){
return cljs.core.apply.call(null,reforms.validation.validate,data,validators);
});
});

reforms.validation.all.cljs$lang$maxFixedArity = (0);

reforms.validation.all.cljs$lang$applyTo = (function (seq166334){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166334));
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
var args__5774__auto__ = [];
var len__5767__auto___166341 = arguments.length;
var i__5768__auto___166342 = (0);
while(true){
if((i__5768__auto___166342 < len__5767__auto___166341)){
args__5774__auto__.push((arguments[i__5768__auto___166342]));

var G__166343 = (i__5768__auto___166342 + (1));
i__5768__auto___166342 = G__166343;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0))):null);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,ui_state_cursor,validators){
var validation_errors = cljs.core.apply.call(null,reforms.validation.validate,reforms.binding.core.deref.call(null,cursor),validators);
reforms.binding.core.reset_BANG_.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null),validation_errors);

return reforms.validation.valid_QMARK_.call(null,validation_errors);
});

reforms.validation.validate_BANG_.cljs$lang$maxFixedArity = (2);

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq166338){
var G__166339 = cljs.core.first.call(null,seq166338);
var seq166338__$1 = cljs.core.next.call(null,seq166338);
var G__166340 = cljs.core.first.call(null,seq166338__$1);
var seq166338__$2 = cljs.core.next.call(null,seq166338__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__166339,G__166340,seq166338__$2);
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
var args__5774__auto__ = [];
var len__5767__auto___166345 = arguments.length;
var i__5768__auto___166346 = (0);
while(true){
if((i__5768__auto___166346 < len__5767__auto___166345)){
args__5774__auto__.push((arguments[i__5768__auto___166346]));

var G__166347 = (i__5768__auto___166346 + (1));
i__5768__auto___166346 = G__166347;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.html5_input,args);
});

reforms.validation.html5_input.cljs$lang$maxFixedArity = (0);

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq166344){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166344));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166349 = arguments.length;
var i__5768__auto___166350 = (0);
while(true){
if((i__5768__auto___166350 < len__5767__auto___166349)){
args__5774__auto__.push((arguments[i__5768__auto___166350]));

var G__166351 = (i__5768__auto___166350 + (1));
i__5768__auto___166350 = G__166351;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.password,args);
});

reforms.validation.password.cljs$lang$maxFixedArity = (0);

reforms.validation.password.cljs$lang$applyTo = (function (seq166348){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166348));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166353 = arguments.length;
var i__5768__auto___166354 = (0);
while(true){
if((i__5768__auto___166354 < len__5767__auto___166353)){
args__5774__auto__.push((arguments[i__5768__auto___166354]));

var G__166355 = (i__5768__auto___166354 + (1));
i__5768__auto___166354 = G__166355;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.text,args);
});

reforms.validation.text.cljs$lang$maxFixedArity = (0);

reforms.validation.text.cljs$lang$applyTo = (function (seq166352){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166352));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166357 = arguments.length;
var i__5768__auto___166358 = (0);
while(true){
if((i__5768__auto___166358 < len__5767__auto___166357)){
args__5774__auto__.push((arguments[i__5768__auto___166358]));

var G__166359 = (i__5768__auto___166358 + (1));
i__5768__auto___166358 = G__166359;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.textarea,args);
});

reforms.validation.textarea.cljs$lang$maxFixedArity = (0);

reforms.validation.textarea.cljs$lang$applyTo = (function (seq166356){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166356));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166361 = arguments.length;
var i__5768__auto___166362 = (0);
while(true){
if((i__5768__auto___166362 < len__5767__auto___166361)){
args__5774__auto__.push((arguments[i__5768__auto___166362]));

var G__166363 = (i__5768__auto___166362 + (1));
i__5768__auto___166362 = G__166363;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.checkbox,args);
});

reforms.validation.checkbox.cljs$lang$maxFixedArity = (0);

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq166360){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166360));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166365 = arguments.length;
var i__5768__auto___166366 = (0);
while(true){
if((i__5768__auto___166366 < len__5767__auto___166365)){
args__5774__auto__.push((arguments[i__5768__auto___166366]));

var G__166367 = (i__5768__auto___166366 + (1));
i__5768__auto___166366 = G__166367;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.select,args);
});

reforms.validation.select.cljs$lang$maxFixedArity = (0);

reforms.validation.select.cljs$lang$applyTo = (function (seq166364){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166364));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166369 = arguments.length;
var i__5768__auto___166370 = (0);
while(true){
if((i__5768__auto___166370 < len__5767__auto___166369)){
args__5774__auto__.push((arguments[i__5768__auto___166370]));

var G__166371 = (i__5768__auto___166370 + (1));
i__5768__auto___166370 = G__166371;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button,args);
});

reforms.validation.button.cljs$lang$maxFixedArity = (0);

reforms.validation.button.cljs$lang$applyTo = (function (seq166368){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166368));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166373 = arguments.length;
var i__5768__auto___166374 = (0);
while(true){
if((i__5768__auto___166374 < len__5767__auto___166373)){
args__5774__auto__.push((arguments[i__5768__auto___166374]));

var G__166375 = (i__5768__auto___166374 + (1));
i__5768__auto___166374 = G__166375;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_primary,args);
});

reforms.validation.button_primary.cljs$lang$maxFixedArity = (0);

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq166372){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166372));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166377 = arguments.length;
var i__5768__auto___166378 = (0);
while(true){
if((i__5768__auto___166378 < len__5767__auto___166377)){
args__5774__auto__.push((arguments[i__5768__auto___166378]));

var G__166379 = (i__5768__auto___166378 + (1));
i__5768__auto___166378 = G__166379;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_default,args);
});

reforms.validation.button_default.cljs$lang$maxFixedArity = (0);

reforms.validation.button_default.cljs$lang$applyTo = (function (seq166376){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166376));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166381 = arguments.length;
var i__5768__auto___166382 = (0);
while(true){
if((i__5768__auto___166382 < len__5767__auto___166381)){
args__5774__auto__.push((arguments[i__5768__auto___166382]));

var G__166383 = (i__5768__auto___166382 + (1));
i__5768__auto___166382 = G__166383;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime,args);
});

reforms.validation.datetime.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime.cljs$lang$applyTo = (function (seq166380){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166380));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166385 = arguments.length;
var i__5768__auto___166386 = (0);
while(true){
if((i__5768__auto___166386 < len__5767__auto___166385)){
args__5774__auto__.push((arguments[i__5768__auto___166386]));

var G__166387 = (i__5768__auto___166386 + (1));
i__5768__auto___166386 = G__166387;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime_local,args);
});

reforms.validation.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq166384){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166384));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166389 = arguments.length;
var i__5768__auto___166390 = (0);
while(true){
if((i__5768__auto___166390 < len__5767__auto___166389)){
args__5774__auto__.push((arguments[i__5768__auto___166390]));

var G__166391 = (i__5768__auto___166390 + (1));
i__5768__auto___166390 = G__166391;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.date,args);
});

reforms.validation.date.cljs$lang$maxFixedArity = (0);

reforms.validation.date.cljs$lang$applyTo = (function (seq166388){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166388));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166393 = arguments.length;
var i__5768__auto___166394 = (0);
while(true){
if((i__5768__auto___166394 < len__5767__auto___166393)){
args__5774__auto__.push((arguments[i__5768__auto___166394]));

var G__166395 = (i__5768__auto___166394 + (1));
i__5768__auto___166394 = G__166395;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.month,args);
});

reforms.validation.month.cljs$lang$maxFixedArity = (0);

reforms.validation.month.cljs$lang$applyTo = (function (seq166392){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166392));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166397 = arguments.length;
var i__5768__auto___166398 = (0);
while(true){
if((i__5768__auto___166398 < len__5767__auto___166397)){
args__5774__auto__.push((arguments[i__5768__auto___166398]));

var G__166399 = (i__5768__auto___166398 + (1));
i__5768__auto___166398 = G__166399;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.time,args);
});

reforms.validation.time.cljs$lang$maxFixedArity = (0);

reforms.validation.time.cljs$lang$applyTo = (function (seq166396){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166396));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166401 = arguments.length;
var i__5768__auto___166402 = (0);
while(true){
if((i__5768__auto___166402 < len__5767__auto___166401)){
args__5774__auto__.push((arguments[i__5768__auto___166402]));

var G__166403 = (i__5768__auto___166402 + (1));
i__5768__auto___166402 = G__166403;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.week,args);
});

reforms.validation.week.cljs$lang$maxFixedArity = (0);

reforms.validation.week.cljs$lang$applyTo = (function (seq166400){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166400));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166405 = arguments.length;
var i__5768__auto___166406 = (0);
while(true){
if((i__5768__auto___166406 < len__5767__auto___166405)){
args__5774__auto__.push((arguments[i__5768__auto___166406]));

var G__166407 = (i__5768__auto___166406 + (1));
i__5768__auto___166406 = G__166407;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.number,args);
});

reforms.validation.number.cljs$lang$maxFixedArity = (0);

reforms.validation.number.cljs$lang$applyTo = (function (seq166404){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166404));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166409 = arguments.length;
var i__5768__auto___166410 = (0);
while(true){
if((i__5768__auto___166410 < len__5767__auto___166409)){
args__5774__auto__.push((arguments[i__5768__auto___166410]));

var G__166411 = (i__5768__auto___166410 + (1));
i__5768__auto___166410 = G__166411;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.email,args);
});

reforms.validation.email.cljs$lang$maxFixedArity = (0);

reforms.validation.email.cljs$lang$applyTo = (function (seq166408){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166408));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166413 = arguments.length;
var i__5768__auto___166414 = (0);
while(true){
if((i__5768__auto___166414 < len__5767__auto___166413)){
args__5774__auto__.push((arguments[i__5768__auto___166414]));

var G__166415 = (i__5768__auto___166414 + (1));
i__5768__auto___166414 = G__166415;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.url,args);
});

reforms.validation.url.cljs$lang$maxFixedArity = (0);

reforms.validation.url.cljs$lang$applyTo = (function (seq166412){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166412));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166417 = arguments.length;
var i__5768__auto___166418 = (0);
while(true){
if((i__5768__auto___166418 < len__5767__auto___166417)){
args__5774__auto__.push((arguments[i__5768__auto___166418]));

var G__166419 = (i__5768__auto___166418 + (1));
i__5768__auto___166418 = G__166419;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.search,args);
});

reforms.validation.search.cljs$lang$maxFixedArity = (0);

reforms.validation.search.cljs$lang$applyTo = (function (seq166416){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166416));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166421 = arguments.length;
var i__5768__auto___166422 = (0);
while(true){
if((i__5768__auto___166422 < len__5767__auto___166421)){
args__5774__auto__.push((arguments[i__5768__auto___166422]));

var G__166423 = (i__5768__auto___166422 + (1));
i__5768__auto___166422 = G__166423;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.tel,args);
});

reforms.validation.tel.cljs$lang$maxFixedArity = (0);

reforms.validation.tel.cljs$lang$applyTo = (function (seq166420){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166420));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166425 = arguments.length;
var i__5768__auto___166426 = (0);
while(true){
if((i__5768__auto___166426 < len__5767__auto___166425)){
args__5774__auto__.push((arguments[i__5768__auto___166426]));

var G__166427 = (i__5768__auto___166426 + (1));
i__5768__auto___166426 = G__166427;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.color,args);
});

reforms.validation.color.cljs$lang$maxFixedArity = (0);

reforms.validation.color.cljs$lang$applyTo = (function (seq166424){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166424));
});
/**
 * Renders errors for specified key seqs.
 * 
 *   Example:
 * 
 *    (render-errors [:user :name] [:my-custom-error])
 */
reforms.validation.error_alert = (function reforms$validation$error_alert(var_args){
var args__5774__auto__ = [];
var len__5767__auto___166429 = arguments.length;
var i__5768__auto___166430 = (0);
while(true){
if((i__5768__auto___166430 < len__5767__auto___166429)){
args__5774__auto__.push((arguments[i__5768__auto___166430]));

var G__166431 = (i__5768__auto___166430 + (1));
i__5768__auto___166430 = G__166431;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
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

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq166428){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166428));
});

//# sourceMappingURL=validation.js.map