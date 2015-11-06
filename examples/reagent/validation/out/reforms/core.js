// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.core');
goog.require('cljs.core');
goog.require('reforms.binding.core');
goog.require('reforms.core.impl');
goog.require('reforms.core.react_keys');
goog.require('reforms.core.options');
/**
 * Get configuration option(s) by key. See [[reforms.core.options]].
 * 
 * Arguments:
 * 
 * - ks - key seq
 */
reforms.core.get_options = reforms.core.options.get_options;
/**
 * Sets configuration options. See [[reforms.core.options]].
 * 
 * Arguments:
 * 
 * - options - a map specifying options to merge into current option map.
 * 
 * **Note:** It intelligently merges options; see the example below.
 * 
 * Example:
 * 
 *     ;; Example initial configuration:
 *     {:form {:horizontal true
 *             :attrs {:style {:background-color "yellow"}}}}
 * 
 *     ;; Setting options
 *     (set-options! {:form {:attrs {:style {:border "1px solid black"}}}{)
 * 
 *     ;; Resulting configuration:
 *     {:form {:horizontal true
 *             :attrs {:style {:background-color "yellow"}}}
 */
reforms.core.set_options_BANG_ = reforms.core.options.set_options_BANG_;
/**
 * A panel. See http://getbootstrap.com/components/#panels
 * 
 * Arguments:
 * 
 * [attrs] title [:close <lambda>] element1 ... element2
 * 
 *  - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 *  - title - panel title; a string or Hiccup/Sablono style template
 *  - :close - (optional) lambda to call when panel is closed; when the option is set, the panel shows a close icon (FontAwesome by default)
 *  - contents - (optional) the contained elements
 * 
 * Examples:
 * 
 *     (panel "A simple panel"
 *         [:div "Contents go here"])
 *     (panel {:class "my-special-panel"} "My special panel" :close #(js/alert "closed")
 *         [:div "Contents go here"])
 */
reforms.core.panel = (function reforms$core$panel(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15462 = arguments.length;
var i__5652__auto___15463 = (0);
while(true){
if((i__5652__auto___15463 < len__5651__auto___15462)){
args__5658__auto__.push((arguments[i__5652__auto___15463]));

var G__15464 = (i__5652__auto___15463 + (1));
i__5652__auto___15463 = G__15464;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15457 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__15457,(0),null);
var vec__15458 = cljs.core.nth.call(null,vec__15457,(1),null);
var title = cljs.core.nth.call(null,vec__15458,(0),null);
var rest_args = cljs.core.nthnext.call(null,vec__15458,(1));
var vec__15459 = reforms.core.impl.parse_options.call(null,rest_args);
var map__15460 = cljs.core.nth.call(null,vec__15459,(0),null);
var map__15460__$1 = ((((!((map__15460 == null)))?((((map__15460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15460):map__15460);
var close = cljs.core.get.call(null,map__15460__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var contents = cljs.core.nth.call(null,vec__15459,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading",new cljs.core.Keyword(null,"key","key",-1516042587),"ph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title",new cljs.core.Keyword(null,"key","key",-1516042587),"pt"], null),title], null),(cljs.core.truth_(close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions pull-right",new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"icon-close","icon-close",-1103973553)], null)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),close], null)], null)], null):null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body",new cljs.core.Keyword(null,"key","key",-1516042587),"pb"], null)], null),contents)], null);
});

reforms.core.panel.cljs$lang$maxFixedArity = (0);

reforms.core.panel.cljs$lang$applyTo = (function (seq15456){
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15456));
});
/**
 * A form. See http://getbootstrap.com/css/#forms
 * 
 * Arguments:
 * 
 * [attrs] element1 ... element2
 * 
 * - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - contents - (optional) the contained elements
 * 
 * Examples:
 * 
 *     (form [:div "Contents go here"])
 *     (form {:style {:background-color "red"}} [:div "Contents go here"])
 */
reforms.core.form = (function reforms$core$form(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15468 = arguments.length;
var i__5652__auto___15469 = (0);
while(true){
if((i__5652__auto___15469 < len__5651__auto___15468)){
args__5658__auto__.push((arguments[i__5652__auto___15469]));

var G__15470 = (i__5652__auto___15469 + (1));
i__5652__auto___15469 = G__15470;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15467 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__15465_SHARP_){
return p1__15465_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?"form-horizontal":null)], null),args);
var attrs = cljs.core.nth.call(null,vec__15467,(0),null);
var elems = cljs.core.nth.call(null,vec__15467,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),attrs], null),cljs.core.concat.call(null,elems,(cljs.core.truth_(new cljs.core.Keyword(null,"on-submit","on-submit",1227871159).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"key","key",-1516042587),"fsb"], null)], null)], null):null)));
});

reforms.core.form.cljs$lang$maxFixedArity = (0);

reforms.core.form.cljs$lang$applyTo = (function (seq15466){
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15466));
});
/**
 * A title for a logical group of controls.
 * 
 * Arguments:
 * 
 * [attrs] title [:tag <tag-name>]
 * 
 * - attrs - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - title - the title; a string or Hiccup/Sablono style template
 * - tag   - (optional) name of the tag to use, e.g. :h4
 */
reforms.core.group_title = (function reforms$core$group_title(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15476 = arguments.length;
var i__5652__auto___15477 = (0);
while(true){
if((i__5652__auto___15477 < len__5651__auto___15476)){
args__5658__auto__.push((arguments[i__5652__auto___15477]));

var G__15478 = (i__5652__auto___15477 + (1));
i__5652__auto___15477 = G__15478;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15472 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title"], null),args);
var attrs = cljs.core.nth.call(null,vec__15472,(0),null);
var vec__15473 = cljs.core.nth.call(null,vec__15472,(1),null);
var title = cljs.core.nth.call(null,vec__15473,(0),null);
var map__15474 = cljs.core.nthnext.call(null,vec__15473,(1));
var map__15474__$1 = ((((!((map__15474 == null)))?((((map__15474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15474):map__15474);
var tag = cljs.core.get.call(null,map__15474__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4593__auto__ = tag;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
}
})(),attrs,title], null);
});

reforms.core.group_title.cljs$lang$maxFixedArity = (0);

reforms.core.group_title.cljs$lang$applyTo = (function (seq15471){
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15471));
});
/**
 * An HTML5-compatible input. Used internally to implement most input types.
 * 
 * Arguments:
 * 
 * type [attrs] [label] cursor korks [:in-progress BOOL] [:warn-fn LAMBDA]
 * [help RENDERABLE] [:inline BOOL] [:large BOOL] [:placeholder STRING] [:valid? BOOL] [:validation-error-fn LAMBDA]
 * 
 * - type                  - input type
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - (optional) the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - :in-progress          - (optional) if true shows progress spinner
 * - :warn-fn              - (optional) a predicate invoked on the input's value; if it returns a RENDERABLE,
 *                           it will be shown as a warning label
 * - :help                 - (optional) help block
 * - :inline               - (optional) if true renders the control inline
 * - :large                - (optional) if true the input will have a larger size
 * - :placeholder          - (optional) the input's placeholder text
 * - :valid?               - (optional) if false shows a validation error; internal
 * - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal
 * 
 * RENDERABLE - string, hiccup-style markup or a React component.
 */
reforms.core.html5_input = (function reforms$core$html5_input(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15483 = arguments.length;
var i__5652__auto___15484 = (0);
while(true){
if((i__5652__auto___15484 < len__5651__auto___15483)){
args__5658__auto__.push((arguments[i__5652__auto___15484]));

var G__15485 = (i__5652__auto___15484 + (1));
i__5652__auto___15484 = G__15485;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var vec__15481 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html5-input","html5-input",-1019311487),type], null),cljs.core.PersistentArrayMap.EMPTY,args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__15481,(0),null);
var vec__15482 = cljs.core.nth.call(null,vec__15481,(1),null);
var label = cljs.core.nth.call(null,vec__15482,(0),null);
var placeholder = cljs.core.nth.call(null,vec__15482,(1),null);
var cursor = cljs.core.nth.call(null,vec__15482,(2),null);
var korks = cljs.core.nth.call(null,vec__15482,(3),null);
var opts = cljs.core.nthnext.call(null,vec__15482,(4));
return cljs.core.apply.call(null,reforms.core.impl.html5_input_STAR_,attrs,label,placeholder,cursor,korks,cljs.core.name.call(null,type),opts);
});

reforms.core.html5_input.cljs$lang$maxFixedArity = (1);

reforms.core.html5_input.cljs$lang$applyTo = (function (seq15479){
var G__15480 = cljs.core.first.call(null,seq15479);
var seq15479__$1 = cljs.core.next.call(null,seq15479);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic(G__15480,seq15479__$1);
});
/**
 * Text input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.text = (function reforms$core$text(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15487 = arguments.length;
var i__5652__auto___15488 = (0);
while(true){
if((i__5652__auto___15488 < len__5651__auto___15487)){
args__5658__auto__.push((arguments[i__5652__auto___15488]));

var G__15489 = (i__5652__auto___15488 + (1));
i__5652__auto___15488 = G__15489;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"text","text",-1790561697),args);
});

reforms.core.text.cljs$lang$maxFixedArity = (0);

reforms.core.text.cljs$lang$applyTo = (function (seq15486){
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15486));
});
/**
 * Password input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.password = (function reforms$core$password(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15491 = arguments.length;
var i__5652__auto___15492 = (0);
while(true){
if((i__5652__auto___15492 < len__5651__auto___15491)){
args__5658__auto__.push((arguments[i__5652__auto___15492]));

var G__15493 = (i__5652__auto___15492 + (1));
i__5652__auto___15492 = G__15493;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"password","password",417022471),args);
});

reforms.core.password.cljs$lang$maxFixedArity = (0);

reforms.core.password.cljs$lang$applyTo = (function (seq15490){
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15490));
});
/**
 * Auto-aligning form buttons.
 * 
 * Arguments:
 * 
 * button-1 ... button-n
 */
reforms.core.form_buttons = (function reforms$core$form_buttons(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15495 = arguments.length;
var i__5652__auto___15496 = (0);
while(true){
if((i__5652__auto___15496 < len__5651__auto___15495)){
args__5658__auto__.push((arguments[i__5652__auto___15496]));

var G__15497 = (i__5652__auto___15496 + (1));
i__5652__auto___15496 = G__15497;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,"form-buttons",false,buttons);
});

reforms.core.form_buttons.cljs$lang$maxFixedArity = (0);

reforms.core.form_buttons.cljs$lang$applyTo = (function (seq15494){
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15494));
});
/**
 * Button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * [attrs] label on-click [:in-progress <bool> :disabled <bool]
 * 
 * - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label        - button label; a string or Hiccup/Sablono style template
 * - on-click     - lambda to handle clicks
 * - :in-progress - true to show an indicator that a background action is in progress and disable the button
 * - :disabled    - true to disable the button
 */
reforms.core.button = (function reforms$core$button(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15503 = arguments.length;
var i__5652__auto___15504 = (0);
while(true){
if((i__5652__auto___15504 < len__5651__auto___15503)){
args__5658__auto__.push((arguments[i__5652__auto___15504]));

var G__15505 = (i__5652__auto___15504 + (1));
i__5652__auto___15504 = G__15505;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15499 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null),args);
var attrs = cljs.core.nth.call(null,vec__15499,(0),null);
var vec__15500 = cljs.core.nth.call(null,vec__15499,(1),null);
var label = cljs.core.nth.call(null,vec__15500,(0),null);
var on_click = cljs.core.nth.call(null,vec__15500,(1),null);
var map__15501 = cljs.core.nthnext.call(null,vec__15500,(2));
var map__15501__$1 = ((((!((map__15501 == null)))?((((map__15501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15501):map__15501);
var in_progress = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var disabled = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__15499,attrs,vec__15500,label,on_click,map__15501,map__15501__$1,in_progress,disabled){
return (function (){
if(cljs.core.truth_(disabled)){
return null;
} else {
return on_click.call(null);
}
});})(vec__15499,attrs,vec__15500,label,on_click,map__15501,map__15501__$1,in_progress,disabled))
,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,label,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))], null),attrs)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),(cljs.core.truth_(in_progress)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",reforms.core.impl.spinner.call(null)], null):null)));
});

reforms.core.button.cljs$lang$maxFixedArity = (0);

reforms.core.button.cljs$lang$applyTo = (function (seq15498){
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15498));
});
/**
 * Primary button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * See `button`.
 */
reforms.core.button_primary = (function reforms$core$button_primary(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15509 = arguments.length;
var i__5652__auto___15510 = (0);
while(true){
if((i__5652__auto___15510 < len__5651__auto___15509)){
args__5658__auto__.push((arguments[i__5652__auto___15510]));

var G__15511 = (i__5652__auto___15510 + (1));
i__5652__auto___15510 = G__15511;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15507 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-primary","button-primary",1872052094)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary"], null),args);
var attrs = cljs.core.nth.call(null,vec__15507,(0),null);
var vec__15508 = cljs.core.nth.call(null,vec__15507,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__15508,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_primary.cljs$lang$maxFixedArity = (0);

reforms.core.button_primary.cljs$lang$applyTo = (function (seq15506){
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15506));
});
/**
 * Default button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * See `button`.
 */
reforms.core.button_default = (function reforms$core$button_default(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15515 = arguments.length;
var i__5652__auto___15516 = (0);
while(true){
if((i__5652__auto___15516 < len__5651__auto___15515)){
args__5658__auto__.push((arguments[i__5652__auto___15516]));

var G__15517 = (i__5652__auto___15516 + (1));
i__5652__auto___15516 = G__15517;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15513 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-default","button-default",584285184)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__15513,(0),null);
var vec__15514 = cljs.core.nth.call(null,vec__15513,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__15514,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_default.cljs$lang$maxFixedArity = (0);

reforms.core.button_default.cljs$lang$applyTo = (function (seq15512){
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15512));
});
/**
 * Button group.
 * 
 * Arguments:
 * 
 * [attrs] button-1 ... button-n
 * 
 * - attrs        - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 */
reforms.core.button_group = (function reforms$core$button_group(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15521 = arguments.length;
var i__5652__auto___15522 = (0);
while(true){
if((i__5652__auto___15522 < len__5651__auto___15521)){
args__5658__auto__.push((arguments[i__5652__auto___15522]));

var G__15523 = (i__5652__auto___15522 + (1));
i__5652__auto___15522 = G__15523;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15519 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-group","button-group",-1532145548)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button-group"], null),args);
var attrs = cljs.core.nth.call(null,vec__15519,(0),null);
var vec__15520 = cljs.core.nth.call(null,vec__15519,(1),null);
var buttons = cljs.core.nthnext.call(null,vec__15520,(0));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs], null),buttons);
});

reforms.core.button_group.cljs$lang$maxFixedArity = (0);

reforms.core.button_group.cljs$lang$applyTo = (function (seq15518){
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15518));
});
/**
 * Checkbox. See http://getbootstrap.com/css/#checkboxes-and-radios
 * 
 *   Arguments:
 * 
 *   [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - :inline               - (optional) if true renders the control inline
 * - :valid?               - (optional) if false shows a validation error; internal
 * - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal
 */
reforms.core.checkbox = (function reforms$core$checkbox(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15530 = arguments.length;
var i__5652__auto___15531 = (0);
while(true){
if((i__5652__auto___15531 < len__5651__auto___15530)){
args__5658__auto__.push((arguments[i__5652__auto___15531]));

var G__15532 = (i__5652__auto___15531 + (1));
i__5652__auto___15531 = G__15532;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15526 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__15526,(0),null);
var vec__15527 = cljs.core.nth.call(null,vec__15526,(1),null);
var label = cljs.core.nth.call(null,vec__15527,(0),null);
var cursor = cljs.core.nth.call(null,vec__15527,(1),null);
var korks = cljs.core.nth.call(null,vec__15527,(2),null);
var map__15528 = cljs.core.nthnext.call(null,vec__15527,(3));
var map__15528__$1 = ((((!((map__15528 == null)))?((((map__15528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15528):map__15528);
var valid_QMARK_ = cljs.core.get.call(null,map__15528__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__15528__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__15528__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4593__auto__ = (valid_QMARK_ == null);
if(or__4593__auto__){
return or__4593__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks),inline,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("checkbox"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" checkbox-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cursor,korks)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cursor,korks)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__15526,attrs,vec__15527,label,cursor,korks,map__15528,map__15528__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__15524_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__15524_SHARP_.target.checked);
});})(vec__15526,attrs,vec__15527,label,cursor,korks,map__15528,map__15528__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
,new cljs.core.Keyword(null,"checked","checked",-50955819),reforms.binding.core.get_in.call(null,cursor,korks),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),cursor,korks)], null),attrs,cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null)], null)], null),(function (){var temp__4425__auto__ = (function (){var and__4581__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4581__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4581__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var validation_error = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.error_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"error-label","error-label",1393895243))], null),validation_error)], null);
} else {
return null;
}
})()));
});

reforms.core.checkbox.cljs$lang$maxFixedArity = (0);

reforms.core.checkbox.cljs$lang$applyTo = (function (seq15525){
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15525));
});
/**
 * Radio button. See http://getbootstrap.com/css/#checkboxes-and-radios
 * 
 * Arguments:
 * 
 * [attrs] label cursor korks value [:valid? <bool> :validation-error-fn <lambda> :inline <bool>]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - :inline               - (optional) if true renders the control inline
 * - :valid?               - (optional) if false shows a validation error; internal
 * - :validation-error-fn  - (optional) lambda <korks> -> <error message>; internal
 */
reforms.core.radio = (function reforms$core$radio(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15539 = arguments.length;
var i__5652__auto___15540 = (0);
while(true){
if((i__5652__auto___15540 < len__5651__auto___15539)){
args__5658__auto__.push((arguments[i__5652__auto___15540]));

var G__15541 = (i__5652__auto___15540 + (1));
i__5652__auto___15540 = G__15541;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15535 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__15535,(0),null);
var vec__15536 = cljs.core.nth.call(null,vec__15535,(1),null);
var label = cljs.core.nth.call(null,vec__15536,(0),null);
var cursor = cljs.core.nth.call(null,vec__15536,(1),null);
var korks = cljs.core.nth.call(null,vec__15536,(2),null);
var value = cljs.core.nth.call(null,vec__15536,(3),null);
var map__15537 = cljs.core.nthnext.call(null,vec__15536,(4));
var map__15537__$1 = ((((!((map__15537 == null)))?((((map__15537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15537):map__15537);
var valid_QMARK_ = cljs.core.get.call(null,map__15537__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__15537__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__15537__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4593__auto__ = (valid_QMARK_ == null);
if(or__4593__auto__){
return or__4593__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks,value),inline,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("radio"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" radio-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"radio","radio",1323726374),cursor,korks,value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__15535,attrs,vec__15536,label,cursor,korks,value,map__15537,map__15537__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__15533_SHARP_){
if(cljs.core.truth_(p1__15533_SHARP_.target.checked)){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,value);
} else {
return null;
}
});})(vec__15535,attrs,vec__15536,label,cursor,korks,value,map__15537,map__15537__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,reforms.binding.core.get_in.call(null,cursor,korks)),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"name","name",1843675177),dom_id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),cursor,korks,value)], null),attrs,cljs.core.PersistentArrayMap.EMPTY)], null),label], null)], null)], null),(function (){var temp__4425__auto__ = (function (){var and__4581__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4581__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4581__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var validation_error = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.error_label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"el","el",-1618201118))], null),validation_error)], null);
} else {
return null;
}
})()));
});

reforms.core.radio.cljs$lang$maxFixedArity = (0);

reforms.core.radio.cljs$lang$applyTo = (function (seq15534){
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15534));
});
/**
 * Textarea element. See http://getbootstrap.com/css/#textarea
 * 
 * Arguments:
 * 
 * [attrs] [label] cursor korks [opts]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - (optional) the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - opts                  - see [[html5-input]]
 * 
 * 
 * Examples:
 * 
 *     (f/textarea "Textarea" "A placeholder" data [:some-text])
 *     (f/textarea {:rows 8} "Textarea" "A placeholder" data [:some-text] :inline true)
 */
reforms.core.textarea = (function reforms$core$textarea(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15546 = arguments.length;
var i__5652__auto___15547 = (0);
while(true){
if((i__5652__auto___15547 < len__5651__auto___15546)){
args__5658__auto__.push((arguments[i__5652__auto___15547]));

var G__15548 = (i__5652__auto___15547 + (1));
i__5652__auto___15547 = G__15548;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15544 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__15544,(0),null);
var vec__15545 = cljs.core.nth.call(null,vec__15544,(1),null);
var label = cljs.core.nth.call(null,vec__15545,(0),null);
var placeholder = cljs.core.nth.call(null,vec__15545,(1),null);
var cursor = cljs.core.nth.call(null,vec__15545,(2),null);
var korks = cljs.core.nth.call(null,vec__15545,(3),null);
var opts = cljs.core.nthnext.call(null,vec__15545,(4));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var textarea_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__15544,attrs,vec__15545,label,placeholder,cursor,korks,opts,dom_id){
return (function (p1__15542_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__15542_SHARP_.target.value);
});})(vec__15544,attrs,vec__15545,label,placeholder,cursor,korks,opts,dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),reforms.binding.core.get_in.call(null,cursor,korks)], null));
if(cljs.core.truth_(placeholder)){
reforms.core.impl.deprecated.call(null,"Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead.");
} else {
}

return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),textarea_attrs,label,cursor,korks,opts);
});

reforms.core.textarea.cljs$lang$maxFixedArity = (0);

reforms.core.textarea.cljs$lang$applyTo = (function (seq15543){
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15543));
});
/**
 * Select element. See http://getbootstrap.com/css/#selects
 * 
 * Arguments:
 * 
 * [attrs] label cursor korks options [:on-change <lambda>]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 * - label                 - (optional) the label; a string or Hiccup/Sablono style template
 * - cursor, korks         - data to bind to
 * - options               - a vector containing options and their labels (see examples below)
 * - :on-change            - (optional) lambda to call on selection
 * 
 * 
 * Examples:
 * 
 *     (f/select "Select" data [:select]
 *         [[:option1 "Option 1"] [:option2 "Option 2"] [:option3 "Option 3"]])
 *     (f/select {:class "my-special-selector"} "Select" data [:select]
 *         :on-change #(js/alert @data)
 *         [[:option1 "Option 1"] [:option2 "Option 2"] [:option3 "Option 3"]])
 */
reforms.core.select = (function reforms$core$select(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15555 = arguments.length;
var i__5652__auto___15556 = (0);
while(true){
if((i__5652__auto___15556 < len__5651__auto___15555)){
args__5658__auto__.push((arguments[i__5652__auto___15556]));

var G__15557 = (i__5652__auto___15556 + (1));
i__5652__auto___15556 = G__15557;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15551 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__15551,(0),null);
var vec__15552 = cljs.core.nth.call(null,vec__15551,(1),null);
var label = cljs.core.nth.call(null,vec__15552,(0),null);
var cursor = cljs.core.nth.call(null,vec__15552,(1),null);
var korks = cljs.core.nth.call(null,vec__15552,(2),null);
var options = cljs.core.nth.call(null,vec__15552,(3),null);
var map__15553 = cljs.core.nthnext.call(null,vec__15552,(4));
var map__15553__$1 = ((((!((map__15553 == null)))?((((map__15553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15553):map__15553);
var opts = map__15553__$1;
var on_change = cljs.core.get.call(null,map__15553__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var selected_val = reforms.binding.core.get_in.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(selected_val)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__15551,attrs,vec__15552,label,cursor,korks,options,map__15553,map__15553__$1,opts,on_change,dom_id,selected_val){
return (function (dom_event){
reforms.binding.core.reset_BANG_.call(null,cursor,korks,reforms.core.impl.unstr_option.call(null,dom_event.target.value,options));

if(cljs.core.truth_(on_change)){
return on_change.call(null);
} else {
return null;
}
});})(vec__15551,attrs,vec__15552,label,cursor,korks,options,map__15553,map__15553__$1,opts,on_change,dom_id,selected_val))
,new cljs.core.Keyword(null,"id","id",-1388402092),dom_id], null));
return cljs.core.apply.call(null,reforms.core.impl.input_STAR_,new cljs.core.Keyword(null,"select","select",1147833503),input_attrs,label,cursor,korks,opts,cljs.core.map.call(null,((function (vec__15551,attrs,vec__15552,label,cursor,korks,options,map__15553,map__15553__$1,opts,on_change,dom_id,selected_val,input_attrs){
return (function (p1__15549_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.first.call(null,p1__15549_SHARP_))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,cljs.core.first.call(null,p1__15549_SHARP_))], null),cljs.core.second.call(null,p1__15549_SHARP_)],null));
});})(vec__15551,attrs,vec__15552,label,cursor,korks,options,map__15553,map__15553__$1,opts,on_change,dom_id,selected_val,input_attrs))
,options));
});

reforms.core.select.cljs$lang$maxFixedArity = (0);

reforms.core.select.cljs$lang$applyTo = (function (seq15550){
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15550));
});
/**
 * Datetime input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.datetime = (function reforms$core$datetime(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15559 = arguments.length;
var i__5652__auto___15560 = (0);
while(true){
if((i__5652__auto___15560 < len__5651__auto___15559)){
args__5658__auto__.push((arguments[i__5652__auto___15560]));

var G__15561 = (i__5652__auto___15560 + (1));
i__5652__auto___15560 = G__15561;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"datetime","datetime",494675702),args);
});

reforms.core.datetime.cljs$lang$maxFixedArity = (0);

reforms.core.datetime.cljs$lang$applyTo = (function (seq15558){
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15558));
});
/**
 * Datetime-local input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.datetime_local = (function reforms$core$datetime_local(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15563 = arguments.length;
var i__5652__auto___15564 = (0);
while(true){
if((i__5652__auto___15564 < len__5651__auto___15563)){
args__5658__auto__.push((arguments[i__5652__auto___15564]));

var G__15565 = (i__5652__auto___15564 + (1));
i__5652__auto___15564 = G__15565;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072),args);
});

reforms.core.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.core.datetime_local.cljs$lang$applyTo = (function (seq15562){
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15562));
});
/**
 * Date input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.date = (function reforms$core$date(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15567 = arguments.length;
var i__5652__auto___15568 = (0);
while(true){
if((i__5652__auto___15568 < len__5651__auto___15567)){
args__5658__auto__.push((arguments[i__5652__auto___15568]));

var G__15569 = (i__5652__auto___15568 + (1));
i__5652__auto___15568 = G__15569;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"date","date",-1463434462),args);
});

reforms.core.date.cljs$lang$maxFixedArity = (0);

reforms.core.date.cljs$lang$applyTo = (function (seq15566){
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15566));
});
/**
 * Month input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.month = (function reforms$core$month(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15571 = arguments.length;
var i__5652__auto___15572 = (0);
while(true){
if((i__5652__auto___15572 < len__5651__auto___15571)){
args__5658__auto__.push((arguments[i__5652__auto___15572]));

var G__15573 = (i__5652__auto___15572 + (1));
i__5652__auto___15572 = G__15573;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"month","month",-1960248533),args);
});

reforms.core.month.cljs$lang$maxFixedArity = (0);

reforms.core.month.cljs$lang$applyTo = (function (seq15570){
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15570));
});
/**
 * Time input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.time = (function reforms$core$time(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15575 = arguments.length;
var i__5652__auto___15576 = (0);
while(true){
if((i__5652__auto___15576 < len__5651__auto___15575)){
args__5658__auto__.push((arguments[i__5652__auto___15576]));

var G__15577 = (i__5652__auto___15576 + (1));
i__5652__auto___15576 = G__15577;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"time","time",1385887882),args);
});

reforms.core.time.cljs$lang$maxFixedArity = (0);

reforms.core.time.cljs$lang$applyTo = (function (seq15574){
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15574));
});
/**
 * Week input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.week = (function reforms$core$week(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15579 = arguments.length;
var i__5652__auto___15580 = (0);
while(true){
if((i__5652__auto___15580 < len__5651__auto___15579)){
args__5658__auto__.push((arguments[i__5652__auto___15580]));

var G__15581 = (i__5652__auto___15580 + (1));
i__5652__auto___15580 = G__15581;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"week","week",-1326473278),args);
});

reforms.core.week.cljs$lang$maxFixedArity = (0);

reforms.core.week.cljs$lang$applyTo = (function (seq15578){
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15578));
});
/**
 * Number input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.number = (function reforms$core$number(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15583 = arguments.length;
var i__5652__auto___15584 = (0);
while(true){
if((i__5652__auto___15584 < len__5651__auto___15583)){
args__5658__auto__.push((arguments[i__5652__auto___15584]));

var G__15585 = (i__5652__auto___15584 + (1));
i__5652__auto___15584 = G__15585;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"number","number",1570378438),args);
});

reforms.core.number.cljs$lang$maxFixedArity = (0);

reforms.core.number.cljs$lang$applyTo = (function (seq15582){
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15582));
});
/**
 * Email input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.email = (function reforms$core$email(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15587 = arguments.length;
var i__5652__auto___15588 = (0);
while(true){
if((i__5652__auto___15588 < len__5651__auto___15587)){
args__5658__auto__.push((arguments[i__5652__auto___15588]));

var G__15589 = (i__5652__auto___15588 + (1));
i__5652__auto___15588 = G__15589;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"email","email",1415816706),args);
});

reforms.core.email.cljs$lang$maxFixedArity = (0);

reforms.core.email.cljs$lang$applyTo = (function (seq15586){
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15586));
});
/**
 * Url input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.url = (function reforms$core$url(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15591 = arguments.length;
var i__5652__auto___15592 = (0);
while(true){
if((i__5652__auto___15592 < len__5651__auto___15591)){
args__5658__auto__.push((arguments[i__5652__auto___15592]));

var G__15593 = (i__5652__auto___15592 + (1));
i__5652__auto___15592 = G__15593;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"url","url",276297046),args);
});

reforms.core.url.cljs$lang$maxFixedArity = (0);

reforms.core.url.cljs$lang$applyTo = (function (seq15590){
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15590));
});
/**
 * Search input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.search = (function reforms$core$search(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15595 = arguments.length;
var i__5652__auto___15596 = (0);
while(true){
if((i__5652__auto___15596 < len__5651__auto___15595)){
args__5658__auto__.push((arguments[i__5652__auto___15596]));

var G__15597 = (i__5652__auto___15596 + (1));
i__5652__auto___15596 = G__15597;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"search","search",1564939822),args);
});

reforms.core.search.cljs$lang$maxFixedArity = (0);

reforms.core.search.cljs$lang$applyTo = (function (seq15594){
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15594));
});
/**
 * Tel input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.tel = (function reforms$core$tel(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15599 = arguments.length;
var i__5652__auto___15600 = (0);
while(true){
if((i__5652__auto___15600 < len__5651__auto___15599)){
args__5658__auto__.push((arguments[i__5652__auto___15600]));

var G__15601 = (i__5652__auto___15600 + (1));
i__5652__auto___15600 = G__15601;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"tel","tel",224138159),args);
});

reforms.core.tel.cljs$lang$maxFixedArity = (0);

reforms.core.tel.cljs$lang$applyTo = (function (seq15598){
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15598));
});
/**
 * Color input. See http://getbootstrap.com/css/#inputs
 * 
 * Arguments:
 * 
 * See [[html5-input]]
 * 
 * **Important:** May be unsupported by some popular browsers.
 * For compatilibity and available attributes see http://www.w3schools.com/html/html_form_input_types.asp
 */
reforms.core.color = (function reforms$core$color(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15603 = arguments.length;
var i__5652__auto___15604 = (0);
while(true){
if((i__5652__auto___15604 < len__5651__auto___15603)){
args__5658__auto__.push((arguments[i__5652__auto___15604]));

var G__15605 = (i__5652__auto___15604 + (1));
i__5652__auto___15604 = G__15605;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"color","color",1011675173),args);
});

reforms.core.color.cljs$lang$maxFixedArity = (0);

reforms.core.color.cljs$lang$applyTo = (function (seq15602){
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15602));
});
/**
 * A spinner.
 * 
 * Arguments:
 * 
 * [attrs]
 * 
 * - attrs                 - (optional) attributes handed over to React (see https://github.com/r0man/sablono#html-attributes)
 */
reforms.core.spinner = (function reforms$core$spinner(var_args){
var args__5658__auto__ = [];
var len__5651__auto___15607 = arguments.length;
var i__5652__auto___15608 = (0);
while(true){
if((i__5652__auto___15608 < len__5651__auto___15607)){
args__5658__auto__.push((arguments[i__5652__auto___15608]));

var G__15609 = (i__5652__auto___15608 + (1));
i__5652__auto___15608 = G__15609;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.impl.spinner,args);
});

reforms.core.spinner.cljs$lang$maxFixedArity = (0);

reforms.core.spinner.cljs$lang$applyTo = (function (seq15606){
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15606));
});

//# sourceMappingURL=core.js.map