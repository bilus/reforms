// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__78234_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__78234_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e78236){if((e78236 instanceof Error)){
var _ = e78236;
return false;
} else {
throw e78236;

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
var len__5651__auto___78239 = arguments.length;
var i__5652__auto___78240 = (0);
while(true){
if((i__5652__auto___78240 < len__5651__auto___78239)){
args__5658__auto__.push((arguments[i__5652__auto___78240]));

var G__78241 = (i__5652__auto___78240 + (1));
i__5652__auto___78240 = G__78241;
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

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq78237){
var G__78238 = cljs.core.first.call(null,seq78237);
var seq78237__$1 = cljs.core.next.call(null,seq78237);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__78238,seq78237__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78249 = arguments.length;
var i__5652__auto___78250 = (0);
while(true){
if((i__5652__auto___78250 < len__5651__auto___78249)){
args__5658__auto__.push((arguments[i__5652__auto___78250]));

var G__78251 = (i__5652__auto___78250 + (1));
i__5652__auto___78250 = G__78251;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_78244 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5365__auto__ = ((function (_STAR_validation_errors_STAR_78244){
return (function reforms$validation$iter__78245(s__78246){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_78244){
return (function (){
var s__78246__$1 = s__78246;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78246__$1);
if(temp__4425__auto__){
var s__78246__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78246__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__78246__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__78248 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__78247 = (0);
while(true){
if((i__78247 < size__5364__auto__)){
var field = cljs.core._nth.call(null,c__5363__auto__,i__78247);
cljs.core.chunk_append.call(null,b__78248,field.call(null));

var G__78252 = (i__78247 + (1));
i__78247 = G__78252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78248),reforms$validation$iter__78245.call(null,cljs.core.chunk_rest.call(null,s__78246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78248),null);
}
} else {
var field = cljs.core.first.call(null,s__78246__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__78245.call(null,cljs.core.rest.call(null,s__78246__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_78244))
,null,null));
});})(_STAR_validation_errors_STAR_78244))
;
return iter__5365__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_78244;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq78242){
var G__78243 = cljs.core.first.call(null,seq78242);
var seq78242__$1 = cljs.core.next.call(null,seq78242);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__78243,seq78242__$1);
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
var len__5651__auto___78256 = arguments.length;
var i__5652__auto___78257 = (0);
while(true){
if((i__5652__auto___78257 < len__5651__auto___78256)){
args__5658__auto__.push((arguments[i__5652__auto___78257]));

var G__78258 = (i__5652__auto___78257 + (1));
i__5652__auto___78257 = G__78258;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__78253_SHARP_){
return p1__78253_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq78254){
var G__78255 = cljs.core.first.call(null,seq78254);
var seq78254__$1 = cljs.core.next.call(null,seq78254);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__78255,seq78254__$1);
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
var args78259 = [];
var len__5651__auto___78262 = arguments.length;
var i__5652__auto___78263 = (0);
while(true){
if((i__5652__auto___78263 < len__5651__auto___78262)){
args78259.push((arguments[i__5652__auto___78263]));

var G__78264 = (i__5652__auto___78263 + (1));
i__5652__auto___78263 = G__78264;
continue;
} else {
}
break;
}

var G__78261 = args78259.length;
switch (G__78261) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78259.length)].join('')));

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5365__auto__ = (function reforms$validation$render_errors_$_iter__78270(s__78271){
return (new cljs.core.LazySeq(null,(function (){
var s__78271__$1 = s__78271;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78271__$1);
if(temp__4425__auto__){
var s__78271__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78271__$2)){
var c__5363__auto__ = cljs.core.chunk_first.call(null,s__78271__$2);
var size__5364__auto__ = cljs.core.count.call(null,c__5363__auto__);
var b__78273 = cljs.core.chunk_buffer.call(null,size__5364__auto__);
if((function (){var i__78272 = (0);
while(true){
if((i__78272 < size__5364__auto__)){
var failure = cljs.core._nth.call(null,c__5363__auto__,i__78272);
cljs.core.chunk_append.call(null,b__78273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__78274 = (i__78272 + (1));
i__78272 = G__78274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78273),reforms$validation$render_errors_$_iter__78270.call(null,cljs.core.chunk_rest.call(null,s__78271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78273),null);
}
} else {
var failure = cljs.core.first.call(null,s__78271__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__78270.call(null,cljs.core.rest.call(null,s__78271__$2)));
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
var len__5651__auto___78276 = arguments.length;
var i__5652__auto___78277 = (0);
while(true){
if((i__5652__auto___78277 < len__5651__auto___78276)){
args__5658__auto__.push((arguments[i__5652__auto___78277]));

var G__78278 = (i__5652__auto___78277 + (1));
i__5652__auto___78277 = G__78278;
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

reforms.validation.all.cljs$lang$applyTo = (function (seq78275){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78275));
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
var len__5651__auto___78282 = arguments.length;
var i__5652__auto___78283 = (0);
while(true){
if((i__5652__auto___78283 < len__5651__auto___78282)){
args__5658__auto__.push((arguments[i__5652__auto___78283]));

var G__78284 = (i__5652__auto___78283 + (1));
i__5652__auto___78283 = G__78284;
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

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq78279){
var G__78280 = cljs.core.first.call(null,seq78279);
var seq78279__$1 = cljs.core.next.call(null,seq78279);
var G__78281 = cljs.core.first.call(null,seq78279__$1);
var seq78279__$2 = cljs.core.next.call(null,seq78279__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__78280,G__78281,seq78279__$2);
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
var len__5651__auto___78286 = arguments.length;
var i__5652__auto___78287 = (0);
while(true){
if((i__5652__auto___78287 < len__5651__auto___78286)){
args__5658__auto__.push((arguments[i__5652__auto___78287]));

var G__78288 = (i__5652__auto___78287 + (1));
i__5652__auto___78287 = G__78288;
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

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq78285){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78285));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78290 = arguments.length;
var i__5652__auto___78291 = (0);
while(true){
if((i__5652__auto___78291 < len__5651__auto___78290)){
args__5658__auto__.push((arguments[i__5652__auto___78291]));

var G__78292 = (i__5652__auto___78291 + (1));
i__5652__auto___78291 = G__78292;
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

reforms.validation.password.cljs$lang$applyTo = (function (seq78289){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78289));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78294 = arguments.length;
var i__5652__auto___78295 = (0);
while(true){
if((i__5652__auto___78295 < len__5651__auto___78294)){
args__5658__auto__.push((arguments[i__5652__auto___78295]));

var G__78296 = (i__5652__auto___78295 + (1));
i__5652__auto___78295 = G__78296;
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

reforms.validation.text.cljs$lang$applyTo = (function (seq78293){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78293));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78298 = arguments.length;
var i__5652__auto___78299 = (0);
while(true){
if((i__5652__auto___78299 < len__5651__auto___78298)){
args__5658__auto__.push((arguments[i__5652__auto___78299]));

var G__78300 = (i__5652__auto___78299 + (1));
i__5652__auto___78299 = G__78300;
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

reforms.validation.textarea.cljs$lang$applyTo = (function (seq78297){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78297));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78302 = arguments.length;
var i__5652__auto___78303 = (0);
while(true){
if((i__5652__auto___78303 < len__5651__auto___78302)){
args__5658__auto__.push((arguments[i__5652__auto___78303]));

var G__78304 = (i__5652__auto___78303 + (1));
i__5652__auto___78303 = G__78304;
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

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq78301){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78301));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78306 = arguments.length;
var i__5652__auto___78307 = (0);
while(true){
if((i__5652__auto___78307 < len__5651__auto___78306)){
args__5658__auto__.push((arguments[i__5652__auto___78307]));

var G__78308 = (i__5652__auto___78307 + (1));
i__5652__auto___78307 = G__78308;
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

reforms.validation.select.cljs$lang$applyTo = (function (seq78305){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78305));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78310 = arguments.length;
var i__5652__auto___78311 = (0);
while(true){
if((i__5652__auto___78311 < len__5651__auto___78310)){
args__5658__auto__.push((arguments[i__5652__auto___78311]));

var G__78312 = (i__5652__auto___78311 + (1));
i__5652__auto___78311 = G__78312;
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

reforms.validation.button.cljs$lang$applyTo = (function (seq78309){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78309));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78314 = arguments.length;
var i__5652__auto___78315 = (0);
while(true){
if((i__5652__auto___78315 < len__5651__auto___78314)){
args__5658__auto__.push((arguments[i__5652__auto___78315]));

var G__78316 = (i__5652__auto___78315 + (1));
i__5652__auto___78315 = G__78316;
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

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq78313){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78313));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78318 = arguments.length;
var i__5652__auto___78319 = (0);
while(true){
if((i__5652__auto___78319 < len__5651__auto___78318)){
args__5658__auto__.push((arguments[i__5652__auto___78319]));

var G__78320 = (i__5652__auto___78319 + (1));
i__5652__auto___78319 = G__78320;
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

reforms.validation.button_default.cljs$lang$applyTo = (function (seq78317){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78317));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78322 = arguments.length;
var i__5652__auto___78323 = (0);
while(true){
if((i__5652__auto___78323 < len__5651__auto___78322)){
args__5658__auto__.push((arguments[i__5652__auto___78323]));

var G__78324 = (i__5652__auto___78323 + (1));
i__5652__auto___78323 = G__78324;
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

reforms.validation.datetime.cljs$lang$applyTo = (function (seq78321){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78321));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78326 = arguments.length;
var i__5652__auto___78327 = (0);
while(true){
if((i__5652__auto___78327 < len__5651__auto___78326)){
args__5658__auto__.push((arguments[i__5652__auto___78327]));

var G__78328 = (i__5652__auto___78327 + (1));
i__5652__auto___78327 = G__78328;
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

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq78325){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78325));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78330 = arguments.length;
var i__5652__auto___78331 = (0);
while(true){
if((i__5652__auto___78331 < len__5651__auto___78330)){
args__5658__auto__.push((arguments[i__5652__auto___78331]));

var G__78332 = (i__5652__auto___78331 + (1));
i__5652__auto___78331 = G__78332;
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

reforms.validation.date.cljs$lang$applyTo = (function (seq78329){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78329));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78334 = arguments.length;
var i__5652__auto___78335 = (0);
while(true){
if((i__5652__auto___78335 < len__5651__auto___78334)){
args__5658__auto__.push((arguments[i__5652__auto___78335]));

var G__78336 = (i__5652__auto___78335 + (1));
i__5652__auto___78335 = G__78336;
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

reforms.validation.month.cljs$lang$applyTo = (function (seq78333){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78333));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78338 = arguments.length;
var i__5652__auto___78339 = (0);
while(true){
if((i__5652__auto___78339 < len__5651__auto___78338)){
args__5658__auto__.push((arguments[i__5652__auto___78339]));

var G__78340 = (i__5652__auto___78339 + (1));
i__5652__auto___78339 = G__78340;
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

reforms.validation.time.cljs$lang$applyTo = (function (seq78337){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78337));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78342 = arguments.length;
var i__5652__auto___78343 = (0);
while(true){
if((i__5652__auto___78343 < len__5651__auto___78342)){
args__5658__auto__.push((arguments[i__5652__auto___78343]));

var G__78344 = (i__5652__auto___78343 + (1));
i__5652__auto___78343 = G__78344;
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

reforms.validation.week.cljs$lang$applyTo = (function (seq78341){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78341));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78346 = arguments.length;
var i__5652__auto___78347 = (0);
while(true){
if((i__5652__auto___78347 < len__5651__auto___78346)){
args__5658__auto__.push((arguments[i__5652__auto___78347]));

var G__78348 = (i__5652__auto___78347 + (1));
i__5652__auto___78347 = G__78348;
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

reforms.validation.number.cljs$lang$applyTo = (function (seq78345){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78345));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78350 = arguments.length;
var i__5652__auto___78351 = (0);
while(true){
if((i__5652__auto___78351 < len__5651__auto___78350)){
args__5658__auto__.push((arguments[i__5652__auto___78351]));

var G__78352 = (i__5652__auto___78351 + (1));
i__5652__auto___78351 = G__78352;
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

reforms.validation.email.cljs$lang$applyTo = (function (seq78349){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78349));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78354 = arguments.length;
var i__5652__auto___78355 = (0);
while(true){
if((i__5652__auto___78355 < len__5651__auto___78354)){
args__5658__auto__.push((arguments[i__5652__auto___78355]));

var G__78356 = (i__5652__auto___78355 + (1));
i__5652__auto___78355 = G__78356;
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

reforms.validation.url.cljs$lang$applyTo = (function (seq78353){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78353));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78358 = arguments.length;
var i__5652__auto___78359 = (0);
while(true){
if((i__5652__auto___78359 < len__5651__auto___78358)){
args__5658__auto__.push((arguments[i__5652__auto___78359]));

var G__78360 = (i__5652__auto___78359 + (1));
i__5652__auto___78359 = G__78360;
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

reforms.validation.search.cljs$lang$applyTo = (function (seq78357){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78357));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78362 = arguments.length;
var i__5652__auto___78363 = (0);
while(true){
if((i__5652__auto___78363 < len__5651__auto___78362)){
args__5658__auto__.push((arguments[i__5652__auto___78363]));

var G__78364 = (i__5652__auto___78363 + (1));
i__5652__auto___78363 = G__78364;
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

reforms.validation.tel.cljs$lang$applyTo = (function (seq78361){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78361));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5658__auto__ = [];
var len__5651__auto___78366 = arguments.length;
var i__5652__auto___78367 = (0);
while(true){
if((i__5652__auto___78367 < len__5651__auto___78366)){
args__5658__auto__.push((arguments[i__5652__auto___78367]));

var G__78368 = (i__5652__auto___78367 + (1));
i__5652__auto___78367 = G__78368;
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

reforms.validation.color.cljs$lang$applyTo = (function (seq78365){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78365));
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
var len__5651__auto___78370 = arguments.length;
var i__5652__auto___78371 = (0);
while(true){
if((i__5652__auto___78371 < len__5651__auto___78370)){
args__5658__auto__.push((arguments[i__5652__auto___78371]));

var G__78372 = (i__5652__auto___78371 + (1));
i__5652__auto___78371 = G__78372;
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

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq78369){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78369));
});

//# sourceMappingURL=validation.js.map