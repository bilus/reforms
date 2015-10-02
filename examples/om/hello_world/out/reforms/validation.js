// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__165612_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__165612_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e165614){if((e165614 instanceof Error)){
var _ = e165614;
return false;
} else {
throw e165614;

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
var len__5767__auto___165617 = arguments.length;
var i__5768__auto___165618 = (0);
while(true){
if((i__5768__auto___165618 < len__5767__auto___165617)){
args__5774__auto__.push((arguments[i__5768__auto___165618]));

var G__165619 = (i__5768__auto___165618 + (1));
i__5768__auto___165618 = G__165619;
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

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq165615){
var G__165616 = cljs.core.first.call(null,seq165615);
var seq165615__$1 = cljs.core.next.call(null,seq165615);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__165616,seq165615__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165627 = arguments.length;
var i__5768__auto___165628 = (0);
while(true){
if((i__5768__auto___165628 < len__5767__auto___165627)){
args__5774__auto__.push((arguments[i__5768__auto___165628]));

var G__165629 = (i__5768__auto___165628 + (1));
i__5768__auto___165628 = G__165629;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_165622 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5481__auto__ = ((function (_STAR_validation_errors_STAR_165622){
return (function reforms$validation$iter__165623(s__165624){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_165622){
return (function (){
var s__165624__$1 = s__165624;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__165624__$1);
if(temp__4425__auto__){
var s__165624__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__165624__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__165624__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__165626 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__165625 = (0);
while(true){
if((i__165625 < size__5480__auto__)){
var field = cljs.core._nth.call(null,c__5479__auto__,i__165625);
cljs.core.chunk_append.call(null,b__165626,field.call(null));

var G__165630 = (i__165625 + (1));
i__165625 = G__165630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__165626),reforms$validation$iter__165623.call(null,cljs.core.chunk_rest.call(null,s__165624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__165626),null);
}
} else {
var field = cljs.core.first.call(null,s__165624__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__165623.call(null,cljs.core.rest.call(null,s__165624__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_165622))
,null,null));
});})(_STAR_validation_errors_STAR_165622))
;
return iter__5481__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_165622;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq165620){
var G__165621 = cljs.core.first.call(null,seq165620);
var seq165620__$1 = cljs.core.next.call(null,seq165620);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__165621,seq165620__$1);
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
var len__5767__auto___165634 = arguments.length;
var i__5768__auto___165635 = (0);
while(true){
if((i__5768__auto___165635 < len__5767__auto___165634)){
args__5774__auto__.push((arguments[i__5768__auto___165635]));

var G__165636 = (i__5768__auto___165635 + (1));
i__5768__auto___165635 = G__165636;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__165631_SHARP_){
return p1__165631_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq165632){
var G__165633 = cljs.core.first.call(null,seq165632);
var seq165632__$1 = cljs.core.next.call(null,seq165632);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__165633,seq165632__$1);
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
var args165637 = [];
var len__5767__auto___165640 = arguments.length;
var i__5768__auto___165641 = (0);
while(true){
if((i__5768__auto___165641 < len__5767__auto___165640)){
args165637.push((arguments[i__5768__auto___165641]));

var G__165642 = (i__5768__auto___165641 + (1));
i__5768__auto___165641 = G__165642;
continue;
} else {
}
break;
}

var G__165639 = args165637.length;
switch (G__165639) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args165637.length)].join('')));

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5481__auto__ = (function reforms$validation$render_errors_$_iter__165648(s__165649){
return (new cljs.core.LazySeq(null,(function (){
var s__165649__$1 = s__165649;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__165649__$1);
if(temp__4425__auto__){
var s__165649__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__165649__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__165649__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__165651 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__165650 = (0);
while(true){
if((i__165650 < size__5480__auto__)){
var failure = cljs.core._nth.call(null,c__5479__auto__,i__165650);
cljs.core.chunk_append.call(null,b__165651,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__165652 = (i__165650 + (1));
i__165650 = G__165652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__165651),reforms$validation$render_errors_$_iter__165648.call(null,cljs.core.chunk_rest.call(null,s__165649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__165651),null);
}
} else {
var failure = cljs.core.first.call(null,s__165649__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__165648.call(null,cljs.core.rest.call(null,s__165649__$2)));
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
var len__5767__auto___165654 = arguments.length;
var i__5768__auto___165655 = (0);
while(true){
if((i__5768__auto___165655 < len__5767__auto___165654)){
args__5774__auto__.push((arguments[i__5768__auto___165655]));

var G__165656 = (i__5768__auto___165655 + (1));
i__5768__auto___165655 = G__165656;
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

reforms.validation.all.cljs$lang$applyTo = (function (seq165653){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165653));
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
var len__5767__auto___165660 = arguments.length;
var i__5768__auto___165661 = (0);
while(true){
if((i__5768__auto___165661 < len__5767__auto___165660)){
args__5774__auto__.push((arguments[i__5768__auto___165661]));

var G__165662 = (i__5768__auto___165661 + (1));
i__5768__auto___165661 = G__165662;
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

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq165657){
var G__165658 = cljs.core.first.call(null,seq165657);
var seq165657__$1 = cljs.core.next.call(null,seq165657);
var G__165659 = cljs.core.first.call(null,seq165657__$1);
var seq165657__$2 = cljs.core.next.call(null,seq165657__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__165658,G__165659,seq165657__$2);
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
var len__5767__auto___165664 = arguments.length;
var i__5768__auto___165665 = (0);
while(true){
if((i__5768__auto___165665 < len__5767__auto___165664)){
args__5774__auto__.push((arguments[i__5768__auto___165665]));

var G__165666 = (i__5768__auto___165665 + (1));
i__5768__auto___165665 = G__165666;
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

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq165663){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165663));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165668 = arguments.length;
var i__5768__auto___165669 = (0);
while(true){
if((i__5768__auto___165669 < len__5767__auto___165668)){
args__5774__auto__.push((arguments[i__5768__auto___165669]));

var G__165670 = (i__5768__auto___165669 + (1));
i__5768__auto___165669 = G__165670;
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

reforms.validation.password.cljs$lang$applyTo = (function (seq165667){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165667));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165672 = arguments.length;
var i__5768__auto___165673 = (0);
while(true){
if((i__5768__auto___165673 < len__5767__auto___165672)){
args__5774__auto__.push((arguments[i__5768__auto___165673]));

var G__165674 = (i__5768__auto___165673 + (1));
i__5768__auto___165673 = G__165674;
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

reforms.validation.text.cljs$lang$applyTo = (function (seq165671){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165671));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165676 = arguments.length;
var i__5768__auto___165677 = (0);
while(true){
if((i__5768__auto___165677 < len__5767__auto___165676)){
args__5774__auto__.push((arguments[i__5768__auto___165677]));

var G__165678 = (i__5768__auto___165677 + (1));
i__5768__auto___165677 = G__165678;
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

reforms.validation.textarea.cljs$lang$applyTo = (function (seq165675){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165675));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165680 = arguments.length;
var i__5768__auto___165681 = (0);
while(true){
if((i__5768__auto___165681 < len__5767__auto___165680)){
args__5774__auto__.push((arguments[i__5768__auto___165681]));

var G__165682 = (i__5768__auto___165681 + (1));
i__5768__auto___165681 = G__165682;
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

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq165679){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165679));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165684 = arguments.length;
var i__5768__auto___165685 = (0);
while(true){
if((i__5768__auto___165685 < len__5767__auto___165684)){
args__5774__auto__.push((arguments[i__5768__auto___165685]));

var G__165686 = (i__5768__auto___165685 + (1));
i__5768__auto___165685 = G__165686;
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

reforms.validation.select.cljs$lang$applyTo = (function (seq165683){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165683));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165688 = arguments.length;
var i__5768__auto___165689 = (0);
while(true){
if((i__5768__auto___165689 < len__5767__auto___165688)){
args__5774__auto__.push((arguments[i__5768__auto___165689]));

var G__165690 = (i__5768__auto___165689 + (1));
i__5768__auto___165689 = G__165690;
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

reforms.validation.button.cljs$lang$applyTo = (function (seq165687){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165687));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165692 = arguments.length;
var i__5768__auto___165693 = (0);
while(true){
if((i__5768__auto___165693 < len__5767__auto___165692)){
args__5774__auto__.push((arguments[i__5768__auto___165693]));

var G__165694 = (i__5768__auto___165693 + (1));
i__5768__auto___165693 = G__165694;
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

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq165691){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165691));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165696 = arguments.length;
var i__5768__auto___165697 = (0);
while(true){
if((i__5768__auto___165697 < len__5767__auto___165696)){
args__5774__auto__.push((arguments[i__5768__auto___165697]));

var G__165698 = (i__5768__auto___165697 + (1));
i__5768__auto___165697 = G__165698;
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

reforms.validation.button_default.cljs$lang$applyTo = (function (seq165695){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165695));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165700 = arguments.length;
var i__5768__auto___165701 = (0);
while(true){
if((i__5768__auto___165701 < len__5767__auto___165700)){
args__5774__auto__.push((arguments[i__5768__auto___165701]));

var G__165702 = (i__5768__auto___165701 + (1));
i__5768__auto___165701 = G__165702;
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

reforms.validation.datetime.cljs$lang$applyTo = (function (seq165699){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165699));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165704 = arguments.length;
var i__5768__auto___165705 = (0);
while(true){
if((i__5768__auto___165705 < len__5767__auto___165704)){
args__5774__auto__.push((arguments[i__5768__auto___165705]));

var G__165706 = (i__5768__auto___165705 + (1));
i__5768__auto___165705 = G__165706;
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

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq165703){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165703));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165708 = arguments.length;
var i__5768__auto___165709 = (0);
while(true){
if((i__5768__auto___165709 < len__5767__auto___165708)){
args__5774__auto__.push((arguments[i__5768__auto___165709]));

var G__165710 = (i__5768__auto___165709 + (1));
i__5768__auto___165709 = G__165710;
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

reforms.validation.date.cljs$lang$applyTo = (function (seq165707){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165707));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165712 = arguments.length;
var i__5768__auto___165713 = (0);
while(true){
if((i__5768__auto___165713 < len__5767__auto___165712)){
args__5774__auto__.push((arguments[i__5768__auto___165713]));

var G__165714 = (i__5768__auto___165713 + (1));
i__5768__auto___165713 = G__165714;
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

reforms.validation.month.cljs$lang$applyTo = (function (seq165711){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165711));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165716 = arguments.length;
var i__5768__auto___165717 = (0);
while(true){
if((i__5768__auto___165717 < len__5767__auto___165716)){
args__5774__auto__.push((arguments[i__5768__auto___165717]));

var G__165718 = (i__5768__auto___165717 + (1));
i__5768__auto___165717 = G__165718;
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

reforms.validation.time.cljs$lang$applyTo = (function (seq165715){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165715));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165720 = arguments.length;
var i__5768__auto___165721 = (0);
while(true){
if((i__5768__auto___165721 < len__5767__auto___165720)){
args__5774__auto__.push((arguments[i__5768__auto___165721]));

var G__165722 = (i__5768__auto___165721 + (1));
i__5768__auto___165721 = G__165722;
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

reforms.validation.week.cljs$lang$applyTo = (function (seq165719){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165719));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165724 = arguments.length;
var i__5768__auto___165725 = (0);
while(true){
if((i__5768__auto___165725 < len__5767__auto___165724)){
args__5774__auto__.push((arguments[i__5768__auto___165725]));

var G__165726 = (i__5768__auto___165725 + (1));
i__5768__auto___165725 = G__165726;
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

reforms.validation.number.cljs$lang$applyTo = (function (seq165723){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165723));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165728 = arguments.length;
var i__5768__auto___165729 = (0);
while(true){
if((i__5768__auto___165729 < len__5767__auto___165728)){
args__5774__auto__.push((arguments[i__5768__auto___165729]));

var G__165730 = (i__5768__auto___165729 + (1));
i__5768__auto___165729 = G__165730;
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

reforms.validation.email.cljs$lang$applyTo = (function (seq165727){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165727));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165732 = arguments.length;
var i__5768__auto___165733 = (0);
while(true){
if((i__5768__auto___165733 < len__5767__auto___165732)){
args__5774__auto__.push((arguments[i__5768__auto___165733]));

var G__165734 = (i__5768__auto___165733 + (1));
i__5768__auto___165733 = G__165734;
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

reforms.validation.url.cljs$lang$applyTo = (function (seq165731){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165731));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165736 = arguments.length;
var i__5768__auto___165737 = (0);
while(true){
if((i__5768__auto___165737 < len__5767__auto___165736)){
args__5774__auto__.push((arguments[i__5768__auto___165737]));

var G__165738 = (i__5768__auto___165737 + (1));
i__5768__auto___165737 = G__165738;
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

reforms.validation.search.cljs$lang$applyTo = (function (seq165735){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165735));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165740 = arguments.length;
var i__5768__auto___165741 = (0);
while(true){
if((i__5768__auto___165741 < len__5767__auto___165740)){
args__5774__auto__.push((arguments[i__5768__auto___165741]));

var G__165742 = (i__5768__auto___165741 + (1));
i__5768__auto___165741 = G__165742;
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

reforms.validation.tel.cljs$lang$applyTo = (function (seq165739){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165739));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5774__auto__ = [];
var len__5767__auto___165744 = arguments.length;
var i__5768__auto___165745 = (0);
while(true){
if((i__5768__auto___165745 < len__5767__auto___165744)){
args__5774__auto__.push((arguments[i__5768__auto___165745]));

var G__165746 = (i__5768__auto___165745 + (1));
i__5768__auto___165745 = G__165746;
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

reforms.validation.color.cljs$lang$applyTo = (function (seq165743){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165743));
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
var len__5767__auto___165748 = arguments.length;
var i__5768__auto___165749 = (0);
while(true){
if((i__5768__auto___165749 < len__5767__auto___165748)){
args__5774__auto__.push((arguments[i__5768__auto___165749]));

var G__165750 = (i__5768__auto___165749 + (1));
i__5768__auto___165749 = G__165750;
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

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq165747){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165747));
});

//# sourceMappingURL=validation.js.map