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
var args__5774__auto__ = [];
var len__5767__auto___164824 = arguments.length;
var i__5768__auto___164825 = (0);
while(true){
if((i__5768__auto___164825 < len__5767__auto___164824)){
args__5774__auto__.push((arguments[i__5768__auto___164825]));

var G__164826 = (i__5768__auto___164825 + (1));
i__5768__auto___164825 = G__164826;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164819 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel panel-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__164819,(0),null);
var vec__164820 = cljs.core.nth.call(null,vec__164819,(1),null);
var title = cljs.core.nth.call(null,vec__164820,(0),null);
var rest_args = cljs.core.nthnext.call(null,vec__164820,(1));
var vec__164821 = reforms.core.impl.parse_options.call(null,rest_args);
var map__164822 = cljs.core.nth.call(null,vec__164821,(0),null);
var map__164822__$1 = ((((!((map__164822 == null)))?((((map__164822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__164822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__164822):map__164822);
var close = cljs.core.get.call(null,map__164822__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var contents = cljs.core.nth.call(null,vec__164821,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading",new cljs.core.Keyword(null,"key","key",-1516042587),"ph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title",new cljs.core.Keyword(null,"key","key",-1516042587),"pt"], null),title], null),(cljs.core.truth_(close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions pull-right",new cljs.core.Keyword(null,"key","key",-1516042587),"c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"icon-close","icon-close",-1103973553)], null)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),close], null)], null)], null):null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body",new cljs.core.Keyword(null,"key","key",-1516042587),"pb"], null)], null),contents)], null);
});

reforms.core.panel.cljs$lang$maxFixedArity = (0);

reforms.core.panel.cljs$lang$applyTo = (function (seq164818){
return reforms.core.panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164818));
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
var args__5774__auto__ = [];
var len__5767__auto___164830 = arguments.length;
var i__5768__auto___164831 = (0);
while(true){
if((i__5768__auto___164831 < len__5767__auto___164830)){
args__5774__auto__.push((arguments[i__5768__auto___164831]));

var G__164832 = (i__5768__auto___164831 + (1));
i__5768__auto___164831 = G__164832;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164829 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__164827_SHARP_){
return p1__164827_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(reforms.core.impl.form_horizontal_QMARK_.call(null))?"form-horizontal":null)], null),args);
var attrs = cljs.core.nth.call(null,vec__164829,(0),null);
var elems = cljs.core.nth.call(null,vec__164829,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),attrs], null),cljs.core.concat.call(null,elems,(cljs.core.truth_(new cljs.core.Keyword(null,"on-submit","on-submit",1227871159).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.Keyword(null,"key","key",-1516042587),"fsb"], null)], null)], null):null)));
});

reforms.core.form.cljs$lang$maxFixedArity = (0);

reforms.core.form.cljs$lang$applyTo = (function (seq164828){
return reforms.core.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164828));
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
var args__5774__auto__ = [];
var len__5767__auto___164838 = arguments.length;
var i__5768__auto___164839 = (0);
while(true){
if((i__5768__auto___164839 < len__5767__auto___164838)){
args__5774__auto__.push((arguments[i__5768__auto___164839]));

var G__164840 = (i__5768__auto___164839 + (1));
i__5768__auto___164839 = G__164840;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164834 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title"], null),args);
var attrs = cljs.core.nth.call(null,vec__164834,(0),null);
var vec__164835 = cljs.core.nth.call(null,vec__164834,(1),null);
var title = cljs.core.nth.call(null,vec__164835,(0),null);
var map__164836 = cljs.core.nthnext.call(null,vec__164835,(1));
var map__164836__$1 = ((((!((map__164836 == null)))?((((map__164836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__164836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__164836):map__164836);
var tag = cljs.core.get.call(null,map__164836__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4709__auto__ = tag;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return reforms.core.get_options.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
}
})(),attrs,title], null);
});

reforms.core.group_title.cljs$lang$maxFixedArity = (0);

reforms.core.group_title.cljs$lang$applyTo = (function (seq164833){
return reforms.core.group_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164833));
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
var args__5774__auto__ = [];
var len__5767__auto___164845 = arguments.length;
var i__5768__auto___164846 = (0);
while(true){
if((i__5768__auto___164846 < len__5767__auto___164845)){
args__5774__auto__.push((arguments[i__5768__auto___164846]));

var G__164847 = (i__5768__auto___164846 + (1));
i__5768__auto___164846 = G__164847;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var vec__164843 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html5-input","html5-input",-1019311487),type], null),cljs.core.PersistentArrayMap.EMPTY,args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__164843,(0),null);
var vec__164844 = cljs.core.nth.call(null,vec__164843,(1),null);
var label = cljs.core.nth.call(null,vec__164844,(0),null);
var placeholder = cljs.core.nth.call(null,vec__164844,(1),null);
var cursor = cljs.core.nth.call(null,vec__164844,(2),null);
var korks = cljs.core.nth.call(null,vec__164844,(3),null);
var opts = cljs.core.nthnext.call(null,vec__164844,(4));
return cljs.core.apply.call(null,reforms.core.impl.html5_input_STAR_,attrs,label,placeholder,cursor,korks,cljs.core.name.call(null,type),opts);
});

reforms.core.html5_input.cljs$lang$maxFixedArity = (1);

reforms.core.html5_input.cljs$lang$applyTo = (function (seq164841){
var G__164842 = cljs.core.first.call(null,seq164841);
var seq164841__$1 = cljs.core.next.call(null,seq164841);
return reforms.core.html5_input.cljs$core$IFn$_invoke$arity$variadic(G__164842,seq164841__$1);
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
var args__5774__auto__ = [];
var len__5767__auto___164849 = arguments.length;
var i__5768__auto___164850 = (0);
while(true){
if((i__5768__auto___164850 < len__5767__auto___164849)){
args__5774__auto__.push((arguments[i__5768__auto___164850]));

var G__164851 = (i__5768__auto___164850 + (1));
i__5768__auto___164850 = G__164851;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"text","text",-1790561697),args);
});

reforms.core.text.cljs$lang$maxFixedArity = (0);

reforms.core.text.cljs$lang$applyTo = (function (seq164848){
return reforms.core.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164848));
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
var args__5774__auto__ = [];
var len__5767__auto___164853 = arguments.length;
var i__5768__auto___164854 = (0);
while(true){
if((i__5768__auto___164854 < len__5767__auto___164853)){
args__5774__auto__.push((arguments[i__5768__auto___164854]));

var G__164855 = (i__5768__auto___164854 + (1));
i__5768__auto___164854 = G__164855;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"password","password",417022471),args);
});

reforms.core.password.cljs$lang$maxFixedArity = (0);

reforms.core.password.cljs$lang$applyTo = (function (seq164852){
return reforms.core.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164852));
});
/**
 * Auto-aligning form buttons.
 * 
 * Arguments:
 * 
 * button-1 ... button-n
 */
reforms.core.form_buttons = (function reforms$core$form_buttons(var_args){
var args__5774__auto__ = [];
var len__5767__auto___164857 = arguments.length;
var i__5768__auto___164858 = (0);
while(true){
if((i__5768__auto___164858 < len__5767__auto___164857)){
args__5774__auto__.push((arguments[i__5768__auto___164858]));

var G__164859 = (i__5768__auto___164858 + (1));
i__5768__auto___164858 = G__164859;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,"form-buttons",false,buttons);
});

reforms.core.form_buttons.cljs$lang$maxFixedArity = (0);

reforms.core.form_buttons.cljs$lang$applyTo = (function (seq164856){
return reforms.core.form_buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164856));
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
var args__5774__auto__ = [];
var len__5767__auto___164865 = arguments.length;
var i__5768__auto___164866 = (0);
while(true){
if((i__5768__auto___164866 < len__5767__auto___164865)){
args__5774__auto__.push((arguments[i__5768__auto___164866]));

var G__164867 = (i__5768__auto___164866 + (1));
i__5768__auto___164866 = G__164867;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164861 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null),args);
var attrs = cljs.core.nth.call(null,vec__164861,(0),null);
var vec__164862 = cljs.core.nth.call(null,vec__164861,(1),null);
var label = cljs.core.nth.call(null,vec__164862,(0),null);
var on_click = cljs.core.nth.call(null,vec__164862,(1),null);
var map__164863 = cljs.core.nthnext.call(null,vec__164862,(2));
var map__164863__$1 = ((((!((map__164863 == null)))?((((map__164863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__164863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__164863):map__164863);
var in_progress = cljs.core.get.call(null,map__164863__$1,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var disabled = cljs.core.get.call(null,map__164863__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__164861,attrs,vec__164862,label,on_click,map__164863,map__164863__$1,in_progress,disabled){
return (function (){
if(cljs.core.truth_(disabled)){
return null;
} else {
return on_click.call(null);
}
});})(vec__164861,attrs,vec__164862,label,on_click,map__164863,map__164863__$1,in_progress,disabled))
,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,label,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))], null),attrs)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),(cljs.core.truth_(in_progress)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",reforms.core.impl.spinner.call(null)], null):null)));
});

reforms.core.button.cljs$lang$maxFixedArity = (0);

reforms.core.button.cljs$lang$applyTo = (function (seq164860){
return reforms.core.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164860));
});
/**
 * Primary button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * See `button`.
 */
reforms.core.button_primary = (function reforms$core$button_primary(var_args){
var args__5774__auto__ = [];
var len__5767__auto___164871 = arguments.length;
var i__5768__auto___164872 = (0);
while(true){
if((i__5768__auto___164872 < len__5767__auto___164871)){
args__5774__auto__.push((arguments[i__5768__auto___164872]));

var G__164873 = (i__5768__auto___164872 + (1));
i__5768__auto___164872 = G__164873;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164869 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-primary","button-primary",1872052094)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary"], null),args);
var attrs = cljs.core.nth.call(null,vec__164869,(0),null);
var vec__164870 = cljs.core.nth.call(null,vec__164869,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__164870,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_primary.cljs$lang$maxFixedArity = (0);

reforms.core.button_primary.cljs$lang$applyTo = (function (seq164868){
return reforms.core.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164868));
});
/**
 * Default button. See http://getbootstrap.com/css/#buttons
 * 
 * Arguments:
 * 
 * See `button`.
 */
reforms.core.button_default = (function reforms$core$button_default(var_args){
var args__5774__auto__ = [];
var len__5767__auto___164877 = arguments.length;
var i__5768__auto___164878 = (0);
while(true){
if((i__5768__auto___164878 < len__5767__auto___164877)){
args__5774__auto__.push((arguments[i__5768__auto___164878]));

var G__164879 = (i__5768__auto___164878 + (1));
i__5768__auto___164878 = G__164879;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164875 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-default","button-default",584285184)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null),args);
var attrs = cljs.core.nth.call(null,vec__164875,(0),null);
var vec__164876 = cljs.core.nth.call(null,vec__164875,(1),null);
var rest_args = cljs.core.nthnext.call(null,vec__164876,(0));
return cljs.core.apply.call(null,reforms.core.button,attrs,rest_args);
});

reforms.core.button_default.cljs$lang$maxFixedArity = (0);

reforms.core.button_default.cljs$lang$applyTo = (function (seq164874){
return reforms.core.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164874));
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
var args__5774__auto__ = [];
var len__5767__auto___164883 = arguments.length;
var i__5768__auto___164884 = (0);
while(true){
if((i__5768__auto___164884 < len__5767__auto___164883)){
args__5774__auto__.push((arguments[i__5768__auto___164884]));

var G__164885 = (i__5768__auto___164884 + (1));
i__5768__auto___164884 = G__164885;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164881 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-group","button-group",-1532145548)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button-group"], null),args);
var attrs = cljs.core.nth.call(null,vec__164881,(0),null);
var vec__164882 = cljs.core.nth.call(null,vec__164881,(1),null);
var buttons = cljs.core.nthnext.call(null,vec__164882,(0));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs], null),buttons);
});

reforms.core.button_group.cljs$lang$maxFixedArity = (0);

reforms.core.button_group.cljs$lang$applyTo = (function (seq164880){
return reforms.core.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164880));
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
var args__5774__auto__ = [];
var len__5767__auto___164892 = arguments.length;
var i__5768__auto___164893 = (0);
while(true){
if((i__5768__auto___164893 < len__5767__auto___164892)){
args__5774__auto__.push((arguments[i__5768__auto___164893]));

var G__164894 = (i__5768__auto___164893 + (1));
i__5768__auto___164893 = G__164894;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164888 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__164888,(0),null);
var vec__164889 = cljs.core.nth.call(null,vec__164888,(1),null);
var label = cljs.core.nth.call(null,vec__164889,(0),null);
var cursor = cljs.core.nth.call(null,vec__164889,(1),null);
var korks = cljs.core.nth.call(null,vec__164889,(2),null);
var map__164890 = cljs.core.nthnext.call(null,vec__164889,(3));
var map__164890__$1 = ((((!((map__164890 == null)))?((((map__164890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__164890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__164890):map__164890);
var valid_QMARK_ = cljs.core.get.call(null,map__164890__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__164890__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__164890__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4709__auto__ = (valid_QMARK_ == null);
if(or__4709__auto__){
return or__4709__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks),inline,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("checkbox"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" checkbox-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cursor,korks)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cursor,korks)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__164888,attrs,vec__164889,label,cursor,korks,map__164890,map__164890__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__164886_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__164886_SHARP_.target.checked);
});})(vec__164888,attrs,vec__164889,label,cursor,korks,map__164890,map__164890__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
,new cljs.core.Keyword(null,"checked","checked",-50955819),reforms.binding.core.get_in.call(null,cursor,korks),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),cursor,korks)], null),attrs,cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null)], null)], null),(function (){var temp__4425__auto__ = (function (){var and__4697__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4697__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4697__auto__;
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

reforms.core.checkbox.cljs$lang$applyTo = (function (seq164887){
return reforms.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164887));
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
var args__5774__auto__ = [];
var len__5767__auto___164901 = arguments.length;
var i__5768__auto___164902 = (0);
while(true){
if((i__5768__auto___164902 < len__5767__auto___164901)){
args__5774__auto__.push((arguments[i__5768__auto___164902]));

var G__164903 = (i__5768__auto___164902 + (1));
i__5768__auto___164902 = G__164903;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164897 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null),cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.call(null,vec__164897,(0),null);
var vec__164898 = cljs.core.nth.call(null,vec__164897,(1),null);
var label = cljs.core.nth.call(null,vec__164898,(0),null);
var cursor = cljs.core.nth.call(null,vec__164898,(1),null);
var korks = cljs.core.nth.call(null,vec__164898,(2),null);
var value = cljs.core.nth.call(null,vec__164898,(3),null);
var map__164899 = cljs.core.nthnext.call(null,vec__164898,(4));
var map__164899__$1 = ((((!((map__164899 == null)))?((((map__164899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__164899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__164899):map__164899);
var valid_QMARK_ = cljs.core.get.call(null,map__164899__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var validation_error_fn = cljs.core.get.call(null,map__164899__$1,new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244));
var inline = cljs.core.get.call(null,map__164899__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var valid = (function (){var or__4709__auto__ = (valid_QMARK_ == null);
if(or__4709__auto__){
return or__4709__auto__;
} else {
return valid_QMARK_.call(null,korks);
}
})();
return cljs.core.apply.call(null,reforms.core.impl.unlabeled_control,reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"wrap","wrap",851669987),cursor,korks),inline,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("radio"),cljs.core.str((cljs.core.truth_(valid)?null:" has-error")),cljs.core.str((cljs.core.truth_(inline)?" radio-inline":null))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"radio","radio",1323726374),cursor,korks)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__164897,attrs,vec__164898,label,cursor,korks,value,map__164899,map__164899__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid){
return (function (p1__164895_SHARP_){
if(cljs.core.truth_(p1__164895_SHARP_.target.checked)){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,value);
} else {
return null;
}
});})(vec__164897,attrs,vec__164898,label,cursor,korks,value,map__164899,map__164899__$1,valid_QMARK_,validation_error_fn,inline,dom_id,valid))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,reforms.binding.core.get_in.call(null,cursor,korks)),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"name","name",1843675177),dom_id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,new cljs.core.Keyword(null,"input","input",556931961),cursor,korks)], null),attrs,cljs.core.PersistentArrayMap.EMPTY)], null),label], null)], null)], null),(function (){var temp__4425__auto__ = (function (){var and__4697__auto__ = validation_error_fn;
if(cljs.core.truth_(and__4697__auto__)){
return validation_error_fn.call(null,korks);
} else {
return and__4697__auto__;
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

reforms.core.radio.cljs$lang$applyTo = (function (seq164896){
return reforms.core.radio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164896));
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
var args__5774__auto__ = [];
var len__5767__auto___164908 = arguments.length;
var i__5768__auto___164909 = (0);
while(true){
if((i__5768__auto___164909 < len__5767__auto___164908)){
args__5774__auto__.push((arguments[i__5768__auto___164909]));

var G__164910 = (i__5768__auto___164909 + (1));
i__5768__auto___164909 = G__164910;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164906 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__164906,(0),null);
var vec__164907 = cljs.core.nth.call(null,vec__164906,(1),null);
var label = cljs.core.nth.call(null,vec__164907,(0),null);
var placeholder = cljs.core.nth.call(null,vec__164907,(1),null);
var cursor = cljs.core.nth.call(null,vec__164907,(2),null);
var korks = cljs.core.nth.call(null,vec__164907,(3),null);
var opts = cljs.core.nthnext.call(null,vec__164907,(4));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var textarea_attrs = reforms.core.impl.merge_attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),dom_id,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__164906,attrs,vec__164907,label,placeholder,cursor,korks,opts,dom_id){
return (function (p1__164904_SHARP_){
return reforms.binding.core.reset_BANG_.call(null,cursor,korks,p1__164904_SHARP_.target.value);
});})(vec__164906,attrs,vec__164907,label,placeholder,cursor,korks,opts,dom_id))
,new cljs.core.Keyword(null,"value","value",305978217),reforms.binding.core.get_in.call(null,cursor,korks)], null));
if(cljs.core.truth_(placeholder)){
reforms.core.impl.deprecated.call(null,"Placeholders as positional arguments will be removed in the next major release; use :placeholder option instead.");
} else {
}

return reforms.core.impl.input_STAR_.call(null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),textarea_attrs,label,cursor,korks,opts);
});

reforms.core.textarea.cljs$lang$maxFixedArity = (0);

reforms.core.textarea.cljs$lang$applyTo = (function (seq164905){
return reforms.core.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164905));
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
var args__5774__auto__ = [];
var len__5767__auto___164917 = arguments.length;
var i__5768__auto___164918 = (0);
while(true){
if((i__5768__auto___164918 < len__5767__auto___164917)){
args__5774__auto__.push((arguments[i__5768__auto___164918]));

var G__164919 = (i__5768__auto___164918 + (1));
i__5768__auto___164918 = G__164919;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__164913 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null),args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.core.impl.attrs_QMARK_,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.complement.call(null,reforms.binding.core.valid_QMARK_),null], null)], null));
var attrs = cljs.core.nth.call(null,vec__164913,(0),null);
var vec__164914 = cljs.core.nth.call(null,vec__164913,(1),null);
var label = cljs.core.nth.call(null,vec__164914,(0),null);
var cursor = cljs.core.nth.call(null,vec__164914,(1),null);
var korks = cljs.core.nth.call(null,vec__164914,(2),null);
var options = cljs.core.nth.call(null,vec__164914,(3),null);
var map__164915 = cljs.core.nthnext.call(null,vec__164914,(4));
var map__164915__$1 = ((((!((map__164915 == null)))?((((map__164915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__164915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__164915):map__164915);
var opts = map__164915__$1;
var on_change = cljs.core.get.call(null,map__164915__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var dom_id = reforms.core.impl.gen_dom_id.call(null,cursor,korks);
var selected_val = reforms.binding.core.get_in.call(null,cursor,korks);
var input_attrs = reforms.core.impl.merge_attrs.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(selected_val)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__164913,attrs,vec__164914,label,cursor,korks,options,map__164915,map__164915__$1,opts,on_change,dom_id,selected_val){
return (function (dom_event){
reforms.binding.core.reset_BANG_.call(null,cursor,korks,reforms.core.impl.unstr_option.call(null,dom_event.target.value,options));

if(cljs.core.truth_(on_change)){
return on_change.call(null);
} else {
return null;
}
});})(vec__164913,attrs,vec__164914,label,cursor,korks,options,map__164915,map__164915__$1,opts,on_change,dom_id,selected_val))
,new cljs.core.Keyword(null,"id","id",-1388402092),dom_id], null));
return cljs.core.apply.call(null,reforms.core.impl.input_STAR_,new cljs.core.Keyword(null,"select","select",1147833503),input_attrs,label,cursor,korks,opts,cljs.core.map.call(null,((function (vec__164913,attrs,vec__164914,label,cursor,korks,options,map__164915,map__164915__$1,opts,on_change,dom_id,selected_val,input_attrs){
return (function (p1__164911_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.first.call(null,p1__164911_SHARP_))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),reforms.core.react_keys.gen_key.call(null,cljs.core.first.call(null,p1__164911_SHARP_))], null),cljs.core.second.call(null,p1__164911_SHARP_)],null));
});})(vec__164913,attrs,vec__164914,label,cursor,korks,options,map__164915,map__164915__$1,opts,on_change,dom_id,selected_val,input_attrs))
,options));
});

reforms.core.select.cljs$lang$maxFixedArity = (0);

reforms.core.select.cljs$lang$applyTo = (function (seq164912){
return reforms.core.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164912));
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
var args__5774__auto__ = [];
var len__5767__auto___164921 = arguments.length;
var i__5768__auto___164922 = (0);
while(true){
if((i__5768__auto___164922 < len__5767__auto___164921)){
args__5774__auto__.push((arguments[i__5768__auto___164922]));

var G__164923 = (i__5768__auto___164922 + (1));
i__5768__auto___164922 = G__164923;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"datetime","datetime",494675702),args);
});

reforms.core.datetime.cljs$lang$maxFixedArity = (0);

reforms.core.datetime.cljs$lang$applyTo = (function (seq164920){
return reforms.core.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164920));
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
var args__5774__auto__ = [];
var len__5767__auto___164925 = arguments.length;
var i__5768__auto___164926 = (0);
while(true){
if((i__5768__auto___164926 < len__5767__auto___164925)){
args__5774__auto__.push((arguments[i__5768__auto___164926]));

var G__164927 = (i__5768__auto___164926 + (1));
i__5768__auto___164926 = G__164927;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072),args);
});

reforms.core.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.core.datetime_local.cljs$lang$applyTo = (function (seq164924){
return reforms.core.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164924));
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
var args__5774__auto__ = [];
var len__5767__auto___164929 = arguments.length;
var i__5768__auto___164930 = (0);
while(true){
if((i__5768__auto___164930 < len__5767__auto___164929)){
args__5774__auto__.push((arguments[i__5768__auto___164930]));

var G__164931 = (i__5768__auto___164930 + (1));
i__5768__auto___164930 = G__164931;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"date","date",-1463434462),args);
});

reforms.core.date.cljs$lang$maxFixedArity = (0);

reforms.core.date.cljs$lang$applyTo = (function (seq164928){
return reforms.core.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164928));
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
var args__5774__auto__ = [];
var len__5767__auto___164933 = arguments.length;
var i__5768__auto___164934 = (0);
while(true){
if((i__5768__auto___164934 < len__5767__auto___164933)){
args__5774__auto__.push((arguments[i__5768__auto___164934]));

var G__164935 = (i__5768__auto___164934 + (1));
i__5768__auto___164934 = G__164935;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"month","month",-1960248533),args);
});

reforms.core.month.cljs$lang$maxFixedArity = (0);

reforms.core.month.cljs$lang$applyTo = (function (seq164932){
return reforms.core.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164932));
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
var args__5774__auto__ = [];
var len__5767__auto___164937 = arguments.length;
var i__5768__auto___164938 = (0);
while(true){
if((i__5768__auto___164938 < len__5767__auto___164937)){
args__5774__auto__.push((arguments[i__5768__auto___164938]));

var G__164939 = (i__5768__auto___164938 + (1));
i__5768__auto___164938 = G__164939;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"time","time",1385887882),args);
});

reforms.core.time.cljs$lang$maxFixedArity = (0);

reforms.core.time.cljs$lang$applyTo = (function (seq164936){
return reforms.core.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164936));
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
var args__5774__auto__ = [];
var len__5767__auto___164941 = arguments.length;
var i__5768__auto___164942 = (0);
while(true){
if((i__5768__auto___164942 < len__5767__auto___164941)){
args__5774__auto__.push((arguments[i__5768__auto___164942]));

var G__164943 = (i__5768__auto___164942 + (1));
i__5768__auto___164942 = G__164943;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"week","week",-1326473278),args);
});

reforms.core.week.cljs$lang$maxFixedArity = (0);

reforms.core.week.cljs$lang$applyTo = (function (seq164940){
return reforms.core.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164940));
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
var args__5774__auto__ = [];
var len__5767__auto___164945 = arguments.length;
var i__5768__auto___164946 = (0);
while(true){
if((i__5768__auto___164946 < len__5767__auto___164945)){
args__5774__auto__.push((arguments[i__5768__auto___164946]));

var G__164947 = (i__5768__auto___164946 + (1));
i__5768__auto___164946 = G__164947;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"number","number",1570378438),args);
});

reforms.core.number.cljs$lang$maxFixedArity = (0);

reforms.core.number.cljs$lang$applyTo = (function (seq164944){
return reforms.core.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164944));
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
var args__5774__auto__ = [];
var len__5767__auto___164949 = arguments.length;
var i__5768__auto___164950 = (0);
while(true){
if((i__5768__auto___164950 < len__5767__auto___164949)){
args__5774__auto__.push((arguments[i__5768__auto___164950]));

var G__164951 = (i__5768__auto___164950 + (1));
i__5768__auto___164950 = G__164951;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"email","email",1415816706),args);
});

reforms.core.email.cljs$lang$maxFixedArity = (0);

reforms.core.email.cljs$lang$applyTo = (function (seq164948){
return reforms.core.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164948));
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
var args__5774__auto__ = [];
var len__5767__auto___164953 = arguments.length;
var i__5768__auto___164954 = (0);
while(true){
if((i__5768__auto___164954 < len__5767__auto___164953)){
args__5774__auto__.push((arguments[i__5768__auto___164954]));

var G__164955 = (i__5768__auto___164954 + (1));
i__5768__auto___164954 = G__164955;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"url","url",276297046),args);
});

reforms.core.url.cljs$lang$maxFixedArity = (0);

reforms.core.url.cljs$lang$applyTo = (function (seq164952){
return reforms.core.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164952));
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
var args__5774__auto__ = [];
var len__5767__auto___164957 = arguments.length;
var i__5768__auto___164958 = (0);
while(true){
if((i__5768__auto___164958 < len__5767__auto___164957)){
args__5774__auto__.push((arguments[i__5768__auto___164958]));

var G__164959 = (i__5768__auto___164958 + (1));
i__5768__auto___164958 = G__164959;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"search","search",1564939822),args);
});

reforms.core.search.cljs$lang$maxFixedArity = (0);

reforms.core.search.cljs$lang$applyTo = (function (seq164956){
return reforms.core.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164956));
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
var args__5774__auto__ = [];
var len__5767__auto___164961 = arguments.length;
var i__5768__auto___164962 = (0);
while(true){
if((i__5768__auto___164962 < len__5767__auto___164961)){
args__5774__auto__.push((arguments[i__5768__auto___164962]));

var G__164963 = (i__5768__auto___164962 + (1));
i__5768__auto___164962 = G__164963;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"tel","tel",224138159),args);
});

reforms.core.tel.cljs$lang$maxFixedArity = (0);

reforms.core.tel.cljs$lang$applyTo = (function (seq164960){
return reforms.core.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164960));
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
var args__5774__auto__ = [];
var len__5767__auto___164965 = arguments.length;
var i__5768__auto___164966 = (0);
while(true){
if((i__5768__auto___164966 < len__5767__auto___164965)){
args__5774__auto__.push((arguments[i__5768__auto___164966]));

var G__164967 = (i__5768__auto___164966 + (1));
i__5768__auto___164966 = G__164967;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.html5_input,new cljs.core.Keyword(null,"color","color",1011675173),args);
});

reforms.core.color.cljs$lang$maxFixedArity = (0);

reforms.core.color.cljs$lang$applyTo = (function (seq164964){
return reforms.core.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164964));
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
var args__5774__auto__ = [];
var len__5767__auto___164969 = arguments.length;
var i__5768__auto___164970 = (0);
while(true){
if((i__5768__auto___164970 < len__5767__auto___164969)){
args__5774__auto__.push((arguments[i__5768__auto___164970]));

var G__164971 = (i__5768__auto___164970 + (1));
i__5768__auto___164970 = G__164971;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.core.impl.spinner,args);
});

reforms.core.spinner.cljs$lang$maxFixedArity = (0);

reforms.core.spinner.cljs$lang$applyTo = (function (seq164968){
return reforms.core.spinner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164968));
});

//# sourceMappingURL=core.js.map