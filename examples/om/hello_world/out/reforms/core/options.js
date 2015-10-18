// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.core.options');
goog.require('cljs.core');
/**
 * Note that top-level key corresponds to a helper in [[reforms.core]].
 * 
 *   Common for all form helpers:
 * 
 *   - :attrs - specify attributes to be passed to React node; see see https://github.com/r0man/sablono#html-attributes
 * 
 *   Example:
 * 
 *    ;; Set background of every form to red color.
 *    (set-options! {:form {:attrs {:style {:background-color "red"}}}})
 * 
 *   - :icon-warning           - icon to represent a warning
 *   - :form                   - options for [[reforms.core/form]]
 *    - :horizontal         - set to true for horizontal orientation; see http://getbootstrap.com/css/#forms-horizontal
 *    - :label-column-class - class for the label column (horizontal orientation only), e.g. "col-sm-3"
 *    - :input-column-class - class for the input column (horizontal orientation only), e.g. "col-sm-9"
 *   - :panel                  - options for [[reforms.core/panel]]
 *      - :icon-close       - close panel icon
 *   - :html5-input            - options for [[reforms.core/html5-input]], common for all helpers based on it, e.g. [[reforms.core/text]]
 *   - :text                   - options for [[reforms.core/text]]
 *    Same as for :html-5-input
 *   - group-title             - options for [[reforms.core/group-title]]
 *    - :tag                - tag to use, e.g. :h4
 *   - button-group            - options for [[reforms.core/button-group]]
 *   - :spinner                - options for [[reforms.core/spinner]].
 * 
 *   ... Each helper is supported - :password, :select, :color etc. see [[reforms.core]] for available form helpers...
 * 
 * 
 *   For the defaults, see the source.
 */
reforms.core.options._STAR_options_STAR_ = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),false,new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589),"col-sm-3",new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433),"col-sm-7"], null),new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-close","icon-close",-1103973553),"fa fa-times"], null),new cljs.core.Keyword(null,"html5-input","html5-input",-1019311487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-warning","icon-warning",650510185),"fa fa-warning"], null),new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h2","h2",-372662728)], null),new cljs.core.Keyword(null,"button-group","button-group",-1532145548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"text-left"], null),new cljs.core.Keyword(null,"spinner","spinner",-646071217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-clock-o fa-spin"], null)], null),new cljs.core.Keyword(null,"error-label","error-label",1393895243),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null)], null),new cljs.core.Keyword(null,"warning-label","warning-label",-252042644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"warning"], null)], null)], null);
reforms.core.options.merge_options = (function reforms$core$options$merge_options(var_args){
var args173308 = [];
var len__5767__auto___173311 = arguments.length;
var i__5768__auto___173312 = (0);
while(true){
if((i__5768__auto___173312 < len__5767__auto___173311)){
args173308.push((arguments[i__5768__auto___173312]));

var G__173313 = (i__5768__auto___173312 + (1));
i__5768__auto___173312 = G__173313;
continue;
} else {
}
break;
}

var G__173310 = args173308.length;
switch (G__173310) {
case 1:
return reforms.core.options.merge_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.core.options.merge_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args173308.length)].join('')));

}
});

reforms.core.options.merge_options.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reforms.core.options.merge_options.call(null,reforms.core.options._STAR_options_STAR_,options);
});

reforms.core.options.merge_options.cljs$core$IFn$_invoke$arity$2 = (function (prev_options,new_options){
return cljs.core.merge_with.call(null,(function (old,new$){
if(cljs.core.map_QMARK_.call(null,old)){
return reforms.core.options.merge_options.call(null,old,new$);
} else {
return new$;

}
}),prev_options,new_options);
});

reforms.core.options.merge_options.cljs$lang$maxFixedArity = 2;
/**
 * See [[reforms.core/get-options]]
 */
reforms.core.options.get_options = (function reforms$core$options$get_options(ks){
return cljs.core.get_in.call(null,reforms.core.options._STAR_options_STAR_,ks);
});
/**
 * See [[reforms.core/set-options!]]
 */
reforms.core.options.set_options_BANG_ = (function reforms$core$options$set_options_BANG_(options){
return reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,options);
});

//# sourceMappingURL=options.js.map