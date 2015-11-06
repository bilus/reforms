// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16005_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__16005_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e16007){if((e16007 instanceof Error)){
var _ = e16007;
return false;
} else {
throw e16007;

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
var len__5651__auto___16010 = arguments.length;
var i__5652__auto___16011 = (0);
while(true){
if((i__5652__auto___16011 < len__5651__auto___16010)){
args__5658__auto__.push((arguments[i__5652__auto___16011]));

var G__16012 = (i__5652__auto___16011 + (1));
i__5652__auto___16011 = G__16012;
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

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq16008){
var G__16009 = cljs.core.first.call(null,seq16008);
var seq16008__$1 = cljs.core.next.call(null,seq16008);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__16009,seq16008__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16020 = arguments.length;
var i__5652__auto___16021 = (0);
while(true){
if((i__5652__auto___16021 < len__5651__auto___16020)){
args__5658__auto__.push((arguments[i__5652__auto___16021]));

var G__16022 = (i__5652__auto___16021 + (1));
i__5652__auto___16021 = G__16022;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_16015 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5365__auto__ = ((function (_STAR_validation_errors_STAR_16015){
return (function reforms$validation$iter__16016(s__16017){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_16015){
return (function (){
var s__16017__$1 = s__16017;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16017__$1);
if(temp__4425__auto__){
var s__16017__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16017__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__16017__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__16019 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__16018 = (0);
while(true){
if((i__16018 < size__5364__auto__)){
var field = cljs.core._nth.call(null,c__5363__auto__,i__16018);
cljs.core.chunk_append.call(null,b__16019,field.call(null));

var G__16023 = (i__16018 + (1));
i__16018 = G__16023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16019),reforms$validation$iter__16016.call(null,cljs.core.chunk_rest.call(null,s__16017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16019),null);
}
} else {
var field = cljs.core.first.call(null,s__16017__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__16016.call(null,cljs.core.rest.call(null,s__16017__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_16015))
,null,null));
});})(_STAR_validation_errors_STAR_16015))
;
return iter__5365__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_16015;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq16013){
var G__16014 = cljs.core.first.call(null,seq16013);
var seq16013__$1 = cljs.core.next.call(null,seq16013);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__16014,seq16013__$1);
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
var len__5651__auto___16027 = arguments.length;
var i__5652__auto___16028 = (0);
while(true){
if((i__5652__auto___16028 < len__5651__auto___16027)){
args__5658__auto__.push((arguments[i__5652__auto___16028]));

var G__16029 = (i__5652__auto___16028 + (1));
i__5652__auto___16028 = G__16029;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__16024_SHARP_){
return p1__16024_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq16025){
var G__16026 = cljs.core.first.call(null,seq16025);
var seq16025__$1 = cljs.core.next.call(null,seq16025);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__16026,seq16025__$1);
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
var args16030 = [];
var len__5651__auto___16033 = arguments.length;
var i__5652__auto___16034 = (0);
while(true){
if((i__5652__auto___16034 < len__5651__auto___16033)){
args16030.push((arguments[i__5652__auto___16034]));

var G__16035 = (i__5652__auto___16034 + (1));
i__5652__auto___16034 = G__16035;
continue;
} else {
}
break;
}

var G__16032 = args16030.length;
switch (G__16032) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16030.length)].join('')));

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5365__auto__ = (function reforms$validation$render_errors_$_iter__16041(s__16042){
return (new cljs.core.LazySeq(null,(function (){
var s__16042__$1 = s__16042;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16042__$1);
if(temp__4425__auto__){
var s__16042__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16042__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__16042__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__16044 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__16043 = (0);
while(true){
if((i__16043 < size__5364__auto__)){
var failure = cljs.core._nth.call(null,c__5363__auto__,i__16043);
cljs.core.chunk_append.call(null,b__16044,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__16045 = (i__16043 + (1));
i__16043 = G__16045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16044),reforms$validation$render_errors_$_iter__16041.call(null,cljs.core.chunk_rest.call(null,s__16042__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16044),null);
}
} else {
var failure = cljs.core.first.call(null,s__16042__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__16041.call(null,cljs.core.rest.call(null,s__16042__$2)));
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
var len__5651__auto___16047 = arguments.length;
var i__5652__auto___16048 = (0);
while(true){
if((i__5652__auto___16048 < len__5651__auto___16047)){
args__5658__auto__.push((arguments[i__5652__auto___16048]));

var G__16049 = (i__5652__auto___16048 + (1));
i__5652__auto___16048 = G__16049;
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

reforms.validation.all.cljs$lang$applyTo = (function (seq16046){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16046));
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
var len__5651__auto___16053 = arguments.length;
var i__5652__auto___16054 = (0);
while(true){
if((i__5652__auto___16054 < len__5651__auto___16053)){
args__5658__auto__.push((arguments[i__5652__auto___16054]));

var G__16055 = (i__5652__auto___16054 + (1));
i__5652__auto___16054 = G__16055;
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

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq16050){
var G__16051 = cljs.core.first.call(null,seq16050);
var seq16050__$1 = cljs.core.next.call(null,seq16050);
var G__16052 = cljs.core.first.call(null,seq16050__$1);
var seq16050__$2 = cljs.core.next.call(null,seq16050__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16051,G__16052,seq16050__$2);
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
var len__5651__auto___16057 = arguments.length;
var i__5652__auto___16058 = (0);
while(true){
if((i__5652__auto___16058 < len__5651__auto___16057)){
args__5658__auto__.push((arguments[i__5652__auto___16058]));

var G__16059 = (i__5652__auto___16058 + (1));
i__5652__auto___16058 = G__16059;
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

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq16056){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16056));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16061 = arguments.length;
var i__5652__auto___16062 = (0);
while(true){
if((i__5652__auto___16062 < len__5651__auto___16061)){
args__5658__auto__.push((arguments[i__5652__auto___16062]));

var G__16063 = (i__5652__auto___16062 + (1));
i__5652__auto___16062 = G__16063;
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

reforms.validation.password.cljs$lang$applyTo = (function (seq16060){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16060));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16065 = arguments.length;
var i__5652__auto___16066 = (0);
while(true){
if((i__5652__auto___16066 < len__5651__auto___16065)){
args__5658__auto__.push((arguments[i__5652__auto___16066]));

var G__16067 = (i__5652__auto___16066 + (1));
i__5652__auto___16066 = G__16067;
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

reforms.validation.text.cljs$lang$applyTo = (function (seq16064){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16064));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16069 = arguments.length;
var i__5652__auto___16070 = (0);
while(true){
if((i__5652__auto___16070 < len__5651__auto___16069)){
args__5658__auto__.push((arguments[i__5652__auto___16070]));

var G__16071 = (i__5652__auto___16070 + (1));
i__5652__auto___16070 = G__16071;
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

reforms.validation.textarea.cljs$lang$applyTo = (function (seq16068){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16068));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16073 = arguments.length;
var i__5652__auto___16074 = (0);
while(true){
if((i__5652__auto___16074 < len__5651__auto___16073)){
args__5658__auto__.push((arguments[i__5652__auto___16074]));

var G__16075 = (i__5652__auto___16074 + (1));
i__5652__auto___16074 = G__16075;
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

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq16072){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16072));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16077 = arguments.length;
var i__5652__auto___16078 = (0);
while(true){
if((i__5652__auto___16078 < len__5651__auto___16077)){
args__5658__auto__.push((arguments[i__5652__auto___16078]));

var G__16079 = (i__5652__auto___16078 + (1));
i__5652__auto___16078 = G__16079;
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

reforms.validation.select.cljs$lang$applyTo = (function (seq16076){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16076));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16081 = arguments.length;
var i__5652__auto___16082 = (0);
while(true){
if((i__5652__auto___16082 < len__5651__auto___16081)){
args__5658__auto__.push((arguments[i__5652__auto___16082]));

var G__16083 = (i__5652__auto___16082 + (1));
i__5652__auto___16082 = G__16083;
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

reforms.validation.button.cljs$lang$applyTo = (function (seq16080){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16080));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16085 = arguments.length;
var i__5652__auto___16086 = (0);
while(true){
if((i__5652__auto___16086 < len__5651__auto___16085)){
args__5658__auto__.push((arguments[i__5652__auto___16086]));

var G__16087 = (i__5652__auto___16086 + (1));
i__5652__auto___16086 = G__16087;
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

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq16084){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16084));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16089 = arguments.length;
var i__5652__auto___16090 = (0);
while(true){
if((i__5652__auto___16090 < len__5651__auto___16089)){
args__5658__auto__.push((arguments[i__5652__auto___16090]));

var G__16091 = (i__5652__auto___16090 + (1));
i__5652__auto___16090 = G__16091;
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

reforms.validation.button_default.cljs$lang$applyTo = (function (seq16088){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16088));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16093 = arguments.length;
var i__5652__auto___16094 = (0);
while(true){
if((i__5652__auto___16094 < len__5651__auto___16093)){
args__5658__auto__.push((arguments[i__5652__auto___16094]));

var G__16095 = (i__5652__auto___16094 + (1));
i__5652__auto___16094 = G__16095;
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

reforms.validation.datetime.cljs$lang$applyTo = (function (seq16092){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16092));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16097 = arguments.length;
var i__5652__auto___16098 = (0);
while(true){
if((i__5652__auto___16098 < len__5651__auto___16097)){
args__5658__auto__.push((arguments[i__5652__auto___16098]));

var G__16099 = (i__5652__auto___16098 + (1));
i__5652__auto___16098 = G__16099;
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

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq16096){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16096));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16101 = arguments.length;
var i__5652__auto___16102 = (0);
while(true){
if((i__5652__auto___16102 < len__5651__auto___16101)){
args__5658__auto__.push((arguments[i__5652__auto___16102]));

var G__16103 = (i__5652__auto___16102 + (1));
i__5652__auto___16102 = G__16103;
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

reforms.validation.date.cljs$lang$applyTo = (function (seq16100){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16100));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16105 = arguments.length;
var i__5652__auto___16106 = (0);
while(true){
if((i__5652__auto___16106 < len__5651__auto___16105)){
args__5658__auto__.push((arguments[i__5652__auto___16106]));

var G__16107 = (i__5652__auto___16106 + (1));
i__5652__auto___16106 = G__16107;
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

reforms.validation.month.cljs$lang$applyTo = (function (seq16104){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16104));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16109 = arguments.length;
var i__5652__auto___16110 = (0);
while(true){
if((i__5652__auto___16110 < len__5651__auto___16109)){
args__5658__auto__.push((arguments[i__5652__auto___16110]));

var G__16111 = (i__5652__auto___16110 + (1));
i__5652__auto___16110 = G__16111;
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

reforms.validation.time.cljs$lang$applyTo = (function (seq16108){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16108));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16113 = arguments.length;
var i__5652__auto___16114 = (0);
while(true){
if((i__5652__auto___16114 < len__5651__auto___16113)){
args__5658__auto__.push((arguments[i__5652__auto___16114]));

var G__16115 = (i__5652__auto___16114 + (1));
i__5652__auto___16114 = G__16115;
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

reforms.validation.week.cljs$lang$applyTo = (function (seq16112){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16112));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16117 = arguments.length;
var i__5652__auto___16118 = (0);
while(true){
if((i__5652__auto___16118 < len__5651__auto___16117)){
args__5658__auto__.push((arguments[i__5652__auto___16118]));

var G__16119 = (i__5652__auto___16118 + (1));
i__5652__auto___16118 = G__16119;
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

reforms.validation.number.cljs$lang$applyTo = (function (seq16116){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16116));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16121 = arguments.length;
var i__5652__auto___16122 = (0);
while(true){
if((i__5652__auto___16122 < len__5651__auto___16121)){
args__5658__auto__.push((arguments[i__5652__auto___16122]));

var G__16123 = (i__5652__auto___16122 + (1));
i__5652__auto___16122 = G__16123;
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

reforms.validation.email.cljs$lang$applyTo = (function (seq16120){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16120));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16125 = arguments.length;
var i__5652__auto___16126 = (0);
while(true){
if((i__5652__auto___16126 < len__5651__auto___16125)){
args__5658__auto__.push((arguments[i__5652__auto___16126]));

var G__16127 = (i__5652__auto___16126 + (1));
i__5652__auto___16126 = G__16127;
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

reforms.validation.url.cljs$lang$applyTo = (function (seq16124){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16124));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16129 = arguments.length;
var i__5652__auto___16130 = (0);
while(true){
if((i__5652__auto___16130 < len__5651__auto___16129)){
args__5658__auto__.push((arguments[i__5652__auto___16130]));

var G__16131 = (i__5652__auto___16130 + (1));
i__5652__auto___16130 = G__16131;
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

reforms.validation.search.cljs$lang$applyTo = (function (seq16128){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16128));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16133 = arguments.length;
var i__5652__auto___16134 = (0);
while(true){
if((i__5652__auto___16134 < len__5651__auto___16133)){
args__5658__auto__.push((arguments[i__5652__auto___16134]));

var G__16135 = (i__5652__auto___16134 + (1));
i__5652__auto___16134 = G__16135;
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

reforms.validation.tel.cljs$lang$applyTo = (function (seq16132){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16132));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5658__auto__ = [];
var len__5651__auto___16137 = arguments.length;
var i__5652__auto___16138 = (0);
while(true){
if((i__5652__auto___16138 < len__5651__auto___16137)){
args__5658__auto__.push((arguments[i__5652__auto___16138]));

var G__16139 = (i__5652__auto___16138 + (1));
i__5652__auto___16138 = G__16139;
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

reforms.validation.color.cljs$lang$applyTo = (function (seq16136){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16136));
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
var len__5651__auto___16141 = arguments.length;
var i__5652__auto___16142 = (0);
while(true){
if((i__5652__auto___16142 < len__5651__auto___16141)){
args__5658__auto__.push((arguments[i__5652__auto___16142]));

var G__16143 = (i__5652__auto___16142 + (1));
i__5652__auto___16142 = G__16143;
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

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq16140){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16140));
});

//# sourceMappingURL=validation.js.map