// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__78850_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__78850_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e78852){if((e78852 instanceof Error)){
var _ = e78852;
return false;
} else {
throw e78852;

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
var len__5651__auto___78855 = arguments.length;
var i__5652__auto___78856 = (0);
while(true){
if((i__5652__auto___78856 < len__5651__auto___78855)){
args__5658__auto__.push((arguments[i__5652__auto___78856]));

var G__78857 = (i__5652__auto___78856 + (1));
i__5652__auto___78856 = G__78857;
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

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq78853){
var G__78854 = cljs.core.first.call(null,seq78853);
var seq78853__$1 = cljs.core.next.call(null,seq78853);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__78854,seq78853__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78865 = arguments.length;
var i__5652__auto___78866 = (0);
while(true){
if((i__5652__auto___78866 < len__5651__auto___78865)){
args__5658__auto__.push((arguments[i__5652__auto___78866]));

var G__78867 = (i__5652__auto___78866 + (1));
i__5652__auto___78866 = G__78867;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_78860 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5365__auto__ = ((function (_STAR_validation_errors_STAR_78860){
return (function reforms$validation$iter__78861(s__78862){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_78860){
return (function (){
var s__78862__$1 = s__78862;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78862__$1);
if(temp__4425__auto__){
var s__78862__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78862__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__78862__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__78864 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__78863 = (0);
while(true){
if((i__78863 < size__5364__auto__)){
var field = cljs.core._nth.call(null,c__5363__auto__,i__78863);
cljs.core.chunk_append.call(null,b__78864,field.call(null));

var G__78868 = (i__78863 + (1));
i__78863 = G__78868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78864),reforms$validation$iter__78861.call(null,cljs.core.chunk_rest.call(null,s__78862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78864),null);
}
} else {
var field = cljs.core.first.call(null,s__78862__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__78861.call(null,cljs.core.rest.call(null,s__78862__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_78860))
,null,null));
});})(_STAR_validation_errors_STAR_78860))
;
return iter__5365__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_78860;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq78858){
var G__78859 = cljs.core.first.call(null,seq78858);
var seq78858__$1 = cljs.core.next.call(null,seq78858);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__78859,seq78858__$1);
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
var len__5651__auto___78872 = arguments.length;
var i__5652__auto___78873 = (0);
while(true){
if((i__5652__auto___78873 < len__5651__auto___78872)){
args__5658__auto__.push((arguments[i__5652__auto___78873]));

var G__78874 = (i__5652__auto___78873 + (1));
i__5652__auto___78873 = G__78874;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__78869_SHARP_){
return p1__78869_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq78870){
var G__78871 = cljs.core.first.call(null,seq78870);
var seq78870__$1 = cljs.core.next.call(null,seq78870);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__78871,seq78870__$1);
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
var args78875 = [];
var len__5651__auto___78878 = arguments.length;
var i__5652__auto___78879 = (0);
while(true){
if((i__5652__auto___78879 < len__5651__auto___78878)){
args78875.push((arguments[i__5652__auto___78879]));

var G__78880 = (i__5652__auto___78879 + (1));
i__5652__auto___78879 = G__78880;
continue;
} else {
}
break;
}

var G__78877 = args78875.length;
switch (G__78877) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78875.length)].join('')));

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5365__auto__ = (function reforms$validation$render_errors_$_iter__78886(s__78887){
return (new cljs.core.LazySeq(null,(function (){
var s__78887__$1 = s__78887;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78887__$1);
if(temp__4425__auto__){
var s__78887__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78887__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__78887__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__78889 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__78888 = (0);
while(true){
if((i__78888 < size__5364__auto__)){
var failure = cljs.core._nth.call(null,c__5363__auto__,i__78888);
cljs.core.chunk_append.call(null,b__78889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__78890 = (i__78888 + (1));
i__78888 = G__78890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78889),reforms$validation$render_errors_$_iter__78886.call(null,cljs.core.chunk_rest.call(null,s__78887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78889),null);
}
} else {
var failure = cljs.core.first.call(null,s__78887__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__78886.call(null,cljs.core.rest.call(null,s__78887__$2)));
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
var len__5651__auto___78892 = arguments.length;
var i__5652__auto___78893 = (0);
while(true){
if((i__5652__auto___78893 < len__5651__auto___78892)){
args__5658__auto__.push((arguments[i__5652__auto___78893]));

var G__78894 = (i__5652__auto___78893 + (1));
i__5652__auto___78893 = G__78894;
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

reforms.validation.all.cljs$lang$applyTo = (function (seq78891){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78891));
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
var len__5651__auto___78898 = arguments.length;
var i__5652__auto___78899 = (0);
while(true){
if((i__5652__auto___78899 < len__5651__auto___78898)){
args__5658__auto__.push((arguments[i__5652__auto___78899]));

var G__78900 = (i__5652__auto___78899 + (1));
i__5652__auto___78899 = G__78900;
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

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq78895){
var G__78896 = cljs.core.first.call(null,seq78895);
var seq78895__$1 = cljs.core.next.call(null,seq78895);
var G__78897 = cljs.core.first.call(null,seq78895__$1);
var seq78895__$2 = cljs.core.next.call(null,seq78895__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78896,G__78897,seq78895__$2);
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
var len__5651__auto___78902 = arguments.length;
var i__5652__auto___78903 = (0);
while(true){
if((i__5652__auto___78903 < len__5651__auto___78902)){
args__5658__auto__.push((arguments[i__5652__auto___78903]));

var G__78904 = (i__5652__auto___78903 + (1));
i__5652__auto___78903 = G__78904;
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

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq78901){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78901));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78906 = arguments.length;
var i__5652__auto___78907 = (0);
while(true){
if((i__5652__auto___78907 < len__5651__auto___78906)){
args__5658__auto__.push((arguments[i__5652__auto___78907]));

var G__78908 = (i__5652__auto___78907 + (1));
i__5652__auto___78907 = G__78908;
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

reforms.validation.password.cljs$lang$applyTo = (function (seq78905){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78905));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78910 = arguments.length;
var i__5652__auto___78911 = (0);
while(true){
if((i__5652__auto___78911 < len__5651__auto___78910)){
args__5658__auto__.push((arguments[i__5652__auto___78911]));

var G__78912 = (i__5652__auto___78911 + (1));
i__5652__auto___78911 = G__78912;
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

reforms.validation.text.cljs$lang$applyTo = (function (seq78909){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78909));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78914 = arguments.length;
var i__5652__auto___78915 = (0);
while(true){
if((i__5652__auto___78915 < len__5651__auto___78914)){
args__5658__auto__.push((arguments[i__5652__auto___78915]));

var G__78916 = (i__5652__auto___78915 + (1));
i__5652__auto___78915 = G__78916;
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

reforms.validation.textarea.cljs$lang$applyTo = (function (seq78913){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78913));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78918 = arguments.length;
var i__5652__auto___78919 = (0);
while(true){
if((i__5652__auto___78919 < len__5651__auto___78918)){
args__5658__auto__.push((arguments[i__5652__auto___78919]));

var G__78920 = (i__5652__auto___78919 + (1));
i__5652__auto___78919 = G__78920;
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

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq78917){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78917));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78922 = arguments.length;
var i__5652__auto___78923 = (0);
while(true){
if((i__5652__auto___78923 < len__5651__auto___78922)){
args__5658__auto__.push((arguments[i__5652__auto___78923]));

var G__78924 = (i__5652__auto___78923 + (1));
i__5652__auto___78923 = G__78924;
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

reforms.validation.select.cljs$lang$applyTo = (function (seq78921){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78921));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78926 = arguments.length;
var i__5652__auto___78927 = (0);
while(true){
if((i__5652__auto___78927 < len__5651__auto___78926)){
args__5658__auto__.push((arguments[i__5652__auto___78927]));

var G__78928 = (i__5652__auto___78927 + (1));
i__5652__auto___78927 = G__78928;
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

reforms.validation.button.cljs$lang$applyTo = (function (seq78925){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78925));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78930 = arguments.length;
var i__5652__auto___78931 = (0);
while(true){
if((i__5652__auto___78931 < len__5651__auto___78930)){
args__5658__auto__.push((arguments[i__5652__auto___78931]));

var G__78932 = (i__5652__auto___78931 + (1));
i__5652__auto___78931 = G__78932;
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

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq78929){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78929));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78934 = arguments.length;
var i__5652__auto___78935 = (0);
while(true){
if((i__5652__auto___78935 < len__5651__auto___78934)){
args__5658__auto__.push((arguments[i__5652__auto___78935]));

var G__78936 = (i__5652__auto___78935 + (1));
i__5652__auto___78935 = G__78936;
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

reforms.validation.button_default.cljs$lang$applyTo = (function (seq78933){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78933));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78938 = arguments.length;
var i__5652__auto___78939 = (0);
while(true){
if((i__5652__auto___78939 < len__5651__auto___78938)){
args__5658__auto__.push((arguments[i__5652__auto___78939]));

var G__78940 = (i__5652__auto___78939 + (1));
i__5652__auto___78939 = G__78940;
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

reforms.validation.datetime.cljs$lang$applyTo = (function (seq78937){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78937));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78942 = arguments.length;
var i__5652__auto___78943 = (0);
while(true){
if((i__5652__auto___78943 < len__5651__auto___78942)){
args__5658__auto__.push((arguments[i__5652__auto___78943]));

var G__78944 = (i__5652__auto___78943 + (1));
i__5652__auto___78943 = G__78944;
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

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq78941){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78941));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78946 = arguments.length;
var i__5652__auto___78947 = (0);
while(true){
if((i__5652__auto___78947 < len__5651__auto___78946)){
args__5658__auto__.push((arguments[i__5652__auto___78947]));

var G__78948 = (i__5652__auto___78947 + (1));
i__5652__auto___78947 = G__78948;
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

reforms.validation.date.cljs$lang$applyTo = (function (seq78945){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78945));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78950 = arguments.length;
var i__5652__auto___78951 = (0);
while(true){
if((i__5652__auto___78951 < len__5651__auto___78950)){
args__5658__auto__.push((arguments[i__5652__auto___78951]));

var G__78952 = (i__5652__auto___78951 + (1));
i__5652__auto___78951 = G__78952;
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

reforms.validation.month.cljs$lang$applyTo = (function (seq78949){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78949));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78954 = arguments.length;
var i__5652__auto___78955 = (0);
while(true){
if((i__5652__auto___78955 < len__5651__auto___78954)){
args__5658__auto__.push((arguments[i__5652__auto___78955]));

var G__78956 = (i__5652__auto___78955 + (1));
i__5652__auto___78955 = G__78956;
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

reforms.validation.time.cljs$lang$applyTo = (function (seq78953){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78953));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78958 = arguments.length;
var i__5652__auto___78959 = (0);
while(true){
if((i__5652__auto___78959 < len__5651__auto___78958)){
args__5658__auto__.push((arguments[i__5652__auto___78959]));

var G__78960 = (i__5652__auto___78959 + (1));
i__5652__auto___78959 = G__78960;
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

reforms.validation.week.cljs$lang$applyTo = (function (seq78957){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78957));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78962 = arguments.length;
var i__5652__auto___78963 = (0);
while(true){
if((i__5652__auto___78963 < len__5651__auto___78962)){
args__5658__auto__.push((arguments[i__5652__auto___78963]));

var G__78964 = (i__5652__auto___78963 + (1));
i__5652__auto___78963 = G__78964;
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

reforms.validation.number.cljs$lang$applyTo = (function (seq78961){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78961));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78966 = arguments.length;
var i__5652__auto___78967 = (0);
while(true){
if((i__5652__auto___78967 < len__5651__auto___78966)){
args__5658__auto__.push((arguments[i__5652__auto___78967]));

var G__78968 = (i__5652__auto___78967 + (1));
i__5652__auto___78967 = G__78968;
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

reforms.validation.email.cljs$lang$applyTo = (function (seq78965){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78965));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78970 = arguments.length;
var i__5652__auto___78971 = (0);
while(true){
if((i__5652__auto___78971 < len__5651__auto___78970)){
args__5658__auto__.push((arguments[i__5652__auto___78971]));

var G__78972 = (i__5652__auto___78971 + (1));
i__5652__auto___78971 = G__78972;
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

reforms.validation.url.cljs$lang$applyTo = (function (seq78969){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78969));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78974 = arguments.length;
var i__5652__auto___78975 = (0);
while(true){
if((i__5652__auto___78975 < len__5651__auto___78974)){
args__5658__auto__.push((arguments[i__5652__auto___78975]));

var G__78976 = (i__5652__auto___78975 + (1));
i__5652__auto___78975 = G__78976;
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

reforms.validation.search.cljs$lang$applyTo = (function (seq78973){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78973));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78978 = arguments.length;
var i__5652__auto___78979 = (0);
while(true){
if((i__5652__auto___78979 < len__5651__auto___78978)){
args__5658__auto__.push((arguments[i__5652__auto___78979]));

var G__78980 = (i__5652__auto___78979 + (1));
i__5652__auto___78979 = G__78980;
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

reforms.validation.tel.cljs$lang$applyTo = (function (seq78977){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78977));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78982 = arguments.length;
var i__5652__auto___78983 = (0);
while(true){
if((i__5652__auto___78983 < len__5651__auto___78982)){
args__5658__auto__.push((arguments[i__5652__auto___78983]));

var G__78984 = (i__5652__auto___78983 + (1));
i__5652__auto___78983 = G__78984;
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

reforms.validation.color.cljs$lang$applyTo = (function (seq78981){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78981));
});
/**
 * Renders errors for specified key seqs.
 * 
 *   Example:
 * 
 *    (render-errors [:user :name] [:my-custom-error])
 */
reforms.validation.error_alert = (function reforms$validation$error_alert(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78986 = arguments.length;
var i__5652__auto___78987 = (0);
while(true){
if((i__5652__auto___78987 < len__5651__auto___78986)){
args__5658__auto__.push((arguments[i__5652__auto___78987]));

var G__78988 = (i__5652__auto___78987 + (1));
i__5652__auto___78987 = G__78988;
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

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq78985){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78985));
});

//# sourceMappingURL=validation.js.map