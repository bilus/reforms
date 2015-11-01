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
var len__5651__auto___13542 = arguments.length;
var i__5652__auto___13543 = (0);
while(true){
if((i__5652__auto___13543 < len__5651__auto___13542)){
args__5658__auto__.push((arguments[i__5652__auto___13543]));

var G__13544 = (i__5652__auto___13543 + (1));
i__5652__auto___13543 = G__13544;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13537 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__13537,(0),null);
var vec__13538 = cljs.core.nth.call(null,vec__13537,(1),null);
var title = cljs.core.nth.call(null,vec__13538,(0),null);
var rest_args = cljs.core.nthnext.call(null,vec__13538,(1));
var vec__13539 = reforms.core.impl.parse_options.call(null,rest_args);
var map__13540 = cljs.core.nth.call(null,vec__13539,(0),null);
var map__13540__$1 = ((((!((map__13540 == null)))?((((map__13540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13540):map__13540);
var close = cljs.core.get.call(null,map__13540__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var contents = cljs.core.nth.call(null,vec__13539,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading",new cljs.core.Keyword(null,"key","key",-1516042587),"ph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title",new cljs.core.Keyword(null,"key","key",-1516042587),"pt"], null),title], null),(cljs.core.truth_(close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions pull-right",new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"icon-close","icon-close",-1103973553)], null)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),close], null)], null)], null):null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body",new cljs.core.Keyword(null,"key","key",-1516042587),"pb"], null)], null),contents)], null);
});

reforms.core.panel.cljs$lang$maxFixedArity = (0);

reforms.core.panel.cljs$lang$applyTo = (function (seq13536){
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13536));
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
var len__5651__auto___13548 = arguments.length;
var i__5652__auto___13549 = (0);
while(true){
if((i__5652__auto___13549 < len__5651__auto___13548)){
args__5658__auto__.push((arguments[i__5652__auto___13549]));

var G__13550 = (i__5652__auto___13549 + (1));
i__5652__auto___13549 = G__13550;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13547 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__13545_SHARP_){
return p1__13545_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?"form-horizontal":null)], null),args);
var attrs = cljs.core.nth.call(null,vec__13547,(0),null);
var elems = cljs.core.nth.call(null,vec__13547,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),attrs], null),cljs.core.concat.call(null,elems,(cljs.core.truth_(new cljs.core.Keyword(null,"on-submit","on-submit",1227871159).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"key","key",-1516042587),"fsb"], null)], null)], null):null)));
});

reforms.core.form.cljs$lang$maxFixedArity = (0);

reforms.core.form.cljs$lang$applyTo = (function (seq13546){
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13546));
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
var len__5651__auto___13556 = arguments.length;
var i__5652__auto___13557 = (0);
while(true){
if((i__5652__auto___13557 < len__5651__auto___13556)){
args__5658__auto__.push((arguments[i__5652__auto___13557]));

var G__13558 = (i__5652__auto___13557 + (1));
i__5652__auto___13557 = G__13558;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13552 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title"], null),args);
var attrs = cljs.core.nth.call(null,vec__13552,(0),null);
var vec__13553 = cljs.core.nth.call(null,vec__13552,(1),null);
var title = cljs.core.nth.call(null,vec__13553,(0),null);
var map__13554 = cljs.core.nthnext.call(null,vec__13553,(1));
var map__13554__$1 = ((((!((map__13554 == null)))?((((map__13554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13554):map__13554);
var tag = cljs.core.get.call(null,map__13554__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4593__auto__ = tag;
if(cljs.core.truth_(or__4593__auto__)){
return or__4593__auto__;
} else {
return reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
}
})(),attrs,title], null);
});

reforms.core.group_title.cljs$lang$maxFixedArity = (0);

reforms.core.group_title.cljs$lang$applyTo = (function (seq13551){
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13551));
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
var len__5651__auto___13563 = arguments.length;
var i__5652__auto___13564 = (0);
while(true){
if((i__5652__auto___13564 < len__5651__auto___13563)){
args__5658__auto__.push((arguments[i__5652__auto___13564]));

var G__13565 = (i__5652__auto___13564 + (1));
i__5652__auto___13564 = G__13565;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((1) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((1)),(0))):null);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5659__auto__);
});

reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var vec__13561 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html5-input","html5-input",-1019311487),type], null),cljs.core.PersistentArrayMap.EMPTY,args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__13561,(0),null);
var vec__13562 = cljs.core.nth.call(null,vec__13561,(1),null);
var label = cljs.core.nth.call(null,vec__13562,(0),null);
var placeholder = cljs.core.nth.call(null,vec__13562,(1),null);
var cursor = cljs.core.nth.call(null,vec__13562,(2),null);
var korks = cljs.core.nth.call(null,vec__13562,(3),null);
var opts = cljs.core.nthnext.call(null,vec__13562,(4));
return cljs.core.apply.call(null,reforms.core.impl.html5_input_STAR_,attrs,label,placeholder,cursor,korks,cljs.core.name.call(null,type),opts);
});

reforms.core.html5_input.cljs$lang$maxFixedArity = (1);

reforms.core.html5_input.cljs$lang$applyTo = (function (seq13559){
var G__13560 = cljs.core.first.call(null,seq13559);
var seq13559__$1 = cljs.core.next.call(null,seq13559);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic(G__13560,seq13559__$1);
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
var len__5651__auto___13567 = arguments.length;
var i__5652__auto___13568 = (0);
while(true){
if((i__5652__auto___13568 < len__5651__auto___13567)){
args__5658__auto__.push((arguments[i__5652__auto___13568]));

var G__13569 = (i__5652__auto___13568 + (1));
i__5652__auto___13568 = G__13569;
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

reforms.core.text.cljs$lang$applyTo = (function (seq13566){
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13566));
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
var len__5651__auto___13571 = arguments.length;
var i__5652__auto___13572 = (0);
while(true){
if((i__5652__auto___13572 < len__5651__auto___13571)){
args__5658__auto__.push((arguments[i__5652__auto___13572]));

var G__13573 = (i__5652__auto___13572 + (1));
i__5652__auto___13572 = G__13573;
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

reforms.core.password.cljs$lang$applyTo = (function (seq13570){
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13570));
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
var len__5651__auto___13575 = arguments.length;
var i__5652__auto___13576 = (0);
while(true){
if((i__5652__auto___13576 < len__5651__auto___13575)){
args__5658__auto__.push((arguments[i__5652__auto___13576]));

var G__13577 = (i__5652__auto___13576 + (1));
i__5652__auto___13576 = G__13577;
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

reforms.core.form_buttons.cljs$lang$applyTo = (function (seq13574){
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13574));
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
var len__5651__auto___13583 = arguments.length;
var i__5652__auto___13584 = (0);
while(true){
if((i__5652__auto___13584 < len__5651__auto___13583)){
args__5658__auto__.push((arguments[i__5652__auto___13584]));

var G__13585 = (i__5652__auto___13584 + (1));
i__5652__auto___13584 = G__13585;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13579 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null),args);
var attrs = cljs.core.nth.call(null,vec__13579,(0),null);
var vec__13580 = cljs.core.nth.call(null,vec__13579,(1),null);
var label = cljs.core.nth.call(null,vec__13580,(0),null);
var on_click = cljs.core.nth.call(null,vec__13580,(1),null);
var map__13581 = cljs.core.nthnext.call(null,vec__13580,(2));
var map__13581__$1 = ((((!((map__13581 == null)))?((((map__13581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13581):map__13581);
var in_progress = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var disabled = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13579,attrs,vec__13580,label,on_click,map__13581,map__13581__$1,in_progress,disabled){
return (function (){
if(cljs.core.truth_(disabled)){
return null;
} else {
return on_click.call(null);
}
});})(vec__13579,attrs,vec__13580,label,on_click,map__13581,map__13581__$1,in_progress,disabled))
,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,label,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))], null),attrs)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),(cljs.core.truth_(in_progress)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",reforms.core.impl.spinner.call(null)], null):null)));
});

reforms.core.button.cljs$lang$maxFixedArity = (0);

reforms.core.button.cljs$lang$applyTo = (function (seq13578){
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13578));
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
var len__5651__auto___13589 = arguments.length;
var i__5652__auto___13590 = (0);
while(true){
if((i__5652__auto___13590 < len__5651__auto___13589)){
args__5658__auto__.push((arguments[i__5652__auto___13590]));

var G__13591 = (i__5652__auto___13590 + (1));
i__5652__auto___13590 = G__13591;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13587 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-primary","button-primary",1872052094)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary"], null),args);
var attrs = cljs.core.nth.call(null,vec__13587,(0),null);
var vec__13588 = cljs.core.nth.call(null,vec__13587,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__13588,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_primary.cljs$lang$maxFixedArity = (0);

reforms.core.button_primary.cljs$lang$applyTo = (function (seq13586){
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13586));
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
var len__5651__auto___13595 = arguments.length;
var i__5652__auto___13596 = (0);
while(true){
if((i__5652__auto___13596 < len__5651__auto___13595)){
args__5658__auto__.push((arguments[i__5652__auto___13596]));

var G__13597 = (i__5652__auto___13596 + (1));
i__5652__auto___13596 = G__13597;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13593 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-default","button-default",584285184)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__13593,(0),null);
var vec__13594 = cljs.core.nth.call(null,vec__13593,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__13594,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_default.cljs$lang$maxFixedArity = (0);

reforms.core.button_default.cljs$lang$applyTo = (function (seq13592){
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13592));
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
var len__5651__auto___13601 = arguments.length;
var i__5652__auto___13602 = (0);
while(true){
if((i__5652__auto___13602 < len__5651__auto___13601)){
args__5658__auto__.push((arguments[i__5652__auto___13602]));

var G__13603 = (i__5652__auto___13602 + (1));
i__5652__auto___13602 = G__13603;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13599 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-group","button-group",-1532145548)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button-group"], null),args);
var attrs = cljs.core.nth.call(null,vec__13599,(0),null);
var vec__13600 = cljs.core.nth.call(null,vec__13599,(1),null);
var buttons = cljs.core.nthnext.call(null,vec__13600,(0));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs], null),buttons);
});

reforms.core.button_group.cljs$lang$maxFixedArity = (0);

reforms.core.button_group.cljs$lang$applyTo = (function (seq13598){
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13598));
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
var len__5651__auto___13610 = arguments.length;
var i__5652__auto___13611 = (0);
while(true){
if((i__5652__auto___13611 < len__5651__auto___13610)){
args__5658__auto__.push((arguments[i__5652__auto___13611]));

var G__13612 = (i__5652__auto___13611 + (1));
i__5652__auto___13611 = G__13612;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13606 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__13606,(0),null);
var vec__13607 = cljs.core.nth.call(null,vec__13606,(1),null);
var label = cljs.core.nth.call(null,vec__13607,(0),null);
var cursor = cljs.core.nth.call(null,vec__13607,(1),null);
var korks = cljs.core.nth.call(null,vec__13607,(2),null);
var map__13608 = cljs.core.nthnext.call(null,vec__13607,(3));
var map__13608__$1 = ((((!((map__13608 == null)))?((((map__13608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13608):map__13608);
var valid_QMARK_ = cljs.core.get.call(null,map__13608__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__13608__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__13608__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4593__auto__ = (valid_QMARK_ == null);
if(or__4593__auto__){
return or__4593__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks),inline,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("checkbox"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" checkbox-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cursor,korks)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cursor,korks)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__13606,attrs,vec__13607,label,cursor,korks,map__13608,map__13608__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__13604_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__13604_SHARP_.target.checked);
});})(vec__13606,attrs,vec__13607,label,cursor,korks,map__13608,map__13608__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
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

reforms.core.checkbox.cljs$lang$applyTo = (function (seq13605){
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13605));
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
var len__5651__auto___13619 = arguments.length;
var i__5652__auto___13620 = (0);
while(true){
if((i__5652__auto___13620 < len__5651__auto___13619)){
args__5658__auto__.push((arguments[i__5652__auto___13620]));

var G__13621 = (i__5652__auto___13620 + (1));
i__5652__auto___13620 = G__13621;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13615 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__13615,(0),null);
var vec__13616 = cljs.core.nth.call(null,vec__13615,(1),null);
var label = cljs.core.nth.call(null,vec__13616,(0),null);
var cursor = cljs.core.nth.call(null,vec__13616,(1),null);
var korks = cljs.core.nth.call(null,vec__13616,(2),null);
var value = cljs.core.nth.call(null,vec__13616,(3),null);
var map__13617 = cljs.core.nthnext.call(null,vec__13616,(4));
var map__13617__$1 = ((((!((map__13617 == null)))?((((map__13617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13617):map__13617);
var valid_QMARK_ = cljs.core.get.call(null,map__13617__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__13617__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__13617__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4593__auto__ = (valid_QMARK_ == null);
if(or__4593__auto__){
return or__4593__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks,value),inline,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("radio"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" radio-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"radio","radio",1323726374),cursor,korks,value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__13615,attrs,vec__13616,label,cursor,korks,value,map__13617,map__13617__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__13613_SHARP_){
if(cljs.core.truth_(p1__13613_SHARP_.target.checked)){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,value);
} else {
return null;
}
});})(vec__13615,attrs,vec__13616,label,cursor,korks,value,map__13617,map__13617__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
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

reforms.core.radio.cljs$lang$applyTo = (function (seq13614){
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13614));
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
var len__5651__auto___13626 = arguments.length;
var i__5652__auto___13627 = (0);
while(true){
if((i__5652__auto___13627 < len__5651__auto___13626)){
args__5658__auto__.push((arguments[i__5652__auto___13627]));

var G__13628 = (i__5652__auto___13627 + (1));
i__5652__auto___13627 = G__13628;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13624 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__13624,(0),null);
var vec__13625 = cljs.core.nth.call(null,vec__13624,(1),null);
var label = cljs.core.nth.call(null,vec__13625,(0),null);
var placeholder = cljs.core.nth.call(null,vec__13625,(1),null);
var cursor = cljs.core.nth.call(null,vec__13625,(2),null);
var korks = cljs.core.nth.call(null,vec__13625,(3),null);
var opts = cljs.core.nthnext.call(null,vec__13625,(4));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var textarea_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__13624,attrs,vec__13625,label,placeholder,cursor,korks,opts,dom_id){
return (function (p1__13622_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__13622_SHARP_.target.value);
});})(vec__13624,attrs,vec__13625,label,placeholder,cursor,korks,opts,dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),reforms.binding.core.get_in.call(null,cursor,korks)], null));
if(cljs.core.truth_(placeholder)){
reforms.core.impl.deprecated.call(null,"Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead.");
} else {
}

return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),textarea_attrs,label,cursor,korks,opts);
});

reforms.core.textarea.cljs$lang$maxFixedArity = (0);

reforms.core.textarea.cljs$lang$applyTo = (function (seq13623){
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13623));
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
var len__5651__auto___13635 = arguments.length;
var i__5652__auto___13636 = (0);
while(true){
if((i__5652__auto___13636 < len__5651__auto___13635)){
args__5658__auto__.push((arguments[i__5652__auto___13636]));

var G__13637 = (i__5652__auto___13636 + (1));
i__5652__auto___13636 = G__13637;
continue;
} else {
}
break;
}

var argseq__5659__auto__ = ((((0) < args__5658__auto__.length))?(new cljs.core.IndexedSeq(args__5658__auto__.slice((0)),(0))):null);
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5659__auto__);
});

reforms.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__13631 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__13631,(0),null);
var vec__13632 = cljs.core.nth.call(null,vec__13631,(1),null);
var label = cljs.core.nth.call(null,vec__13632,(0),null);
var cursor = cljs.core.nth.call(null,vec__13632,(1),null);
var korks = cljs.core.nth.call(null,vec__13632,(2),null);
var options = cljs.core.nth.call(null,vec__13632,(3),null);
var map__13633 = cljs.core.nthnext.call(null,vec__13632,(4));
var map__13633__$1 = ((((!((map__13633 == null)))?((((map__13633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13633):map__13633);
var opts = map__13633__$1;
var on_change = cljs.core.get.call(null,map__13633__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var selected_val = reforms.binding.core.get_in.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(selected_val)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__13631,attrs,vec__13632,label,cursor,korks,options,map__13633,map__13633__$1,opts,on_change,dom_id,selected_val){
return (function (dom_event){
reforms.binding.core.reset_BANG_.call(null,cursor,korks,reforms.core.impl.unstr_option.call(null,dom_event.target.value,options));

if(cljs.core.truth_(on_change)){
return on_change.call(null);
} else {
return null;
}
});})(vec__13631,attrs,vec__13632,label,cursor,korks,options,map__13633,map__13633__$1,opts,on_change,dom_id,selected_val))
,new cljs.core.Keyword(null,"id","id",-1388402092),dom_id], null));
return cljs.core.apply.call(null,reforms.core.impl.input_STAR_,new cljs.core.Keyword(null,"select","select",1147833503),input_attrs,label,cursor,korks,opts,cljs.core.map.call(null,((function (vec__13631,attrs,vec__13632,label,cursor,korks,options,map__13633,map__13633__$1,opts,on_change,dom_id,selected_val,input_attrs){
return (function (p1__13629_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.first.call(null,p1__13629_SHARP_))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,cljs.core.first.call(null,p1__13629_SHARP_))], null),cljs.core.second.call(null,p1__13629_SHARP_)],null));
});})(vec__13631,attrs,vec__13632,label,cursor,korks,options,map__13633,map__13633__$1,opts,on_change,dom_id,selected_val,input_attrs))
,options));
});

reforms.core.select.cljs$lang$maxFixedArity = (0);

reforms.core.select.cljs$lang$applyTo = (function (seq13630){
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13630));
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
var len__5651__auto___13639 = arguments.length;
var i__5652__auto___13640 = (0);
while(true){
if((i__5652__auto___13640 < len__5651__auto___13639)){
args__5658__auto__.push((arguments[i__5652__auto___13640]));

var G__13641 = (i__5652__auto___13640 + (1));
i__5652__auto___13640 = G__13641;
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

reforms.core.datetime.cljs$lang$applyTo = (function (seq13638){
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13638));
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
var len__5651__auto___13643 = arguments.length;
var i__5652__auto___13644 = (0);
while(true){
if((i__5652__auto___13644 < len__5651__auto___13643)){
args__5658__auto__.push((arguments[i__5652__auto___13644]));

var G__13645 = (i__5652__auto___13644 + (1));
i__5652__auto___13644 = G__13645;
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

reforms.core.datetime_local.cljs$lang$applyTo = (function (seq13642){
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13642));
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
var len__5651__auto___13647 = arguments.length;
var i__5652__auto___13648 = (0);
while(true){
if((i__5652__auto___13648 < len__5651__auto___13647)){
args__5658__auto__.push((arguments[i__5652__auto___13648]));

var G__13649 = (i__5652__auto___13648 + (1));
i__5652__auto___13648 = G__13649;
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

reforms.core.date.cljs$lang$applyTo = (function (seq13646){
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13646));
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
var len__5651__auto___13651 = arguments.length;
var i__5652__auto___13652 = (0);
while(true){
if((i__5652__auto___13652 < len__5651__auto___13651)){
args__5658__auto__.push((arguments[i__5652__auto___13652]));

var G__13653 = (i__5652__auto___13652 + (1));
i__5652__auto___13652 = G__13653;
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

reforms.core.month.cljs$lang$applyTo = (function (seq13650){
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13650));
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
var len__5651__auto___13655 = arguments.length;
var i__5652__auto___13656 = (0);
while(true){
if((i__5652__auto___13656 < len__5651__auto___13655)){
args__5658__auto__.push((arguments[i__5652__auto___13656]));

var G__13657 = (i__5652__auto___13656 + (1));
i__5652__auto___13656 = G__13657;
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

reforms.core.time.cljs$lang$applyTo = (function (seq13654){
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13654));
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
var len__5651__auto___13659 = arguments.length;
var i__5652__auto___13660 = (0);
while(true){
if((i__5652__auto___13660 < len__5651__auto___13659)){
args__5658__auto__.push((arguments[i__5652__auto___13660]));

var G__13661 = (i__5652__auto___13660 + (1));
i__5652__auto___13660 = G__13661;
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

reforms.core.week.cljs$lang$applyTo = (function (seq13658){
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13658));
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
var len__5651__auto___13663 = arguments.length;
var i__5652__auto___13664 = (0);
while(true){
if((i__5652__auto___13664 < len__5651__auto___13663)){
args__5658__auto__.push((arguments[i__5652__auto___13664]));

var G__13665 = (i__5652__auto___13664 + (1));
i__5652__auto___13664 = G__13665;
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

reforms.core.number.cljs$lang$applyTo = (function (seq13662){
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13662));
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
var len__5651__auto___13667 = arguments.length;
var i__5652__auto___13668 = (0);
while(true){
if((i__5652__auto___13668 < len__5651__auto___13667)){
args__5658__auto__.push((arguments[i__5652__auto___13668]));

var G__13669 = (i__5652__auto___13668 + (1));
i__5652__auto___13668 = G__13669;
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

reforms.core.email.cljs$lang$applyTo = (function (seq13666){
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13666));
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
var len__5651__auto___13671 = arguments.length;
var i__5652__auto___13672 = (0);
while(true){
if((i__5652__auto___13672 < len__5651__auto___13671)){
args__5658__auto__.push((arguments[i__5652__auto___13672]));

var G__13673 = (i__5652__auto___13672 + (1));
i__5652__auto___13672 = G__13673;
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

reforms.core.url.cljs$lang$applyTo = (function (seq13670){
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13670));
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
var len__5651__auto___13675 = arguments.length;
var i__5652__auto___13676 = (0);
while(true){
if((i__5652__auto___13676 < len__5651__auto___13675)){
args__5658__auto__.push((arguments[i__5652__auto___13676]));

var G__13677 = (i__5652__auto___13676 + (1));
i__5652__auto___13676 = G__13677;
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

reforms.core.search.cljs$lang$applyTo = (function (seq13674){
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13674));
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
var len__5651__auto___13679 = arguments.length;
var i__5652__auto___13680 = (0);
while(true){
if((i__5652__auto___13680 < len__5651__auto___13679)){
args__5658__auto__.push((arguments[i__5652__auto___13680]));

var G__13681 = (i__5652__auto___13680 + (1));
i__5652__auto___13680 = G__13681;
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

reforms.core.tel.cljs$lang$applyTo = (function (seq13678){
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13678));
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
var len__5651__auto___13683 = arguments.length;
var i__5652__auto___13684 = (0);
while(true){
if((i__5652__auto___13684 < len__5651__auto___13683)){
args__5658__auto__.push((arguments[i__5652__auto___13684]));

var G__13685 = (i__5652__auto___13684 + (1));
i__5652__auto___13684 = G__13685;
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

reforms.core.color.cljs$lang$applyTo = (function (seq13682){
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13682));
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
var len__5651__auto___13687 = arguments.length;
var i__5652__auto___13688 = (0);
while(true){
if((i__5652__auto___13688 < len__5651__auto___13687)){
args__5658__auto__.push((arguments[i__5652__auto___13688]));

var G__13689 = (i__5652__auto___13688 + (1));
i__5652__auto___13688 = G__13689;
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

reforms.core.spinner.cljs$lang$applyTo = (function (seq13686){
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13686));
});

//# sourceMappingURL=core.js.map