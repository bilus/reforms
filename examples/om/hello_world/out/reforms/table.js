// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.table');
goog.require('cljs.core');
goog.require('reforms.core.impl');
goog.require('reforms.binding.core');
goog.require('clojure.set');
reforms.table.simple_checkbox = (function reforms$table$simple_checkbox(var_args){
var args__5774__auto__ = [];
var len__5767__auto___157777 = arguments.length;
var i__5768__auto___157778 = (0);
while(true){
if((i__5768__auto___157778 < len__5767__auto___157777)){
args__5774__auto__.push((arguments[i__5768__auto___157778]));

var G__157779 = (i__5768__auto___157778 + (1));
i__5768__auto___157778 = G__157779;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (checked,p__157774){
var map__157775 = p__157774;
var map__157775__$1 = ((((!((map__157775 == null)))?((((map__157775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157775):map__157775);
var on_click = cljs.core.get.call(null,map__157775__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__157775,map__157775__$1,on_click){
return (function (p1__157771_SHARP_){
return on_click.call(null,p1__157771_SHARP_.target.checked);
});})(map__157775,map__157775__$1,on_click))
,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null);
});

reforms.table.simple_checkbox.cljs$lang$maxFixedArity = (1);

reforms.table.simple_checkbox.cljs$lang$applyTo = (function (seq157772){
var G__157773 = cljs.core.first.call(null,seq157772);
var seq157772__$1 = cljs.core.next.call(null,seq157772);
return reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic(G__157773,seq157772__$1);
});
reforms.table.all_selected_QMARK_ = (function reforms$table$all_selected_QMARK_(selected_values,all_values){
return clojure.set.subset_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),selected_values);
});
/**
 * Renders a table of `rows` (col => value). An optional map of columns to labels can be specified which also
 * restricts which columns are visible.
 * 
 * Arguments:
 * 
 *     [attrs] rows [options]
 * 
 *     - attrs - (optional) attributes for <table> handed over to React (see https://github.com/r0man/sablono#html-attributes)
 *     - rows - a vector of col->val maps
 *     - options - (optional) options to customize the table
 * 
 * Options:
 * 
 *     - :columns - map of keys used in `rows` to human-friendly column names
 *     - :checkboxes - use this to support row selection using checkboxes, the map contains:
 *         :selection - atom/cursor to keep selected rows in
 *         :path - (optional) korks/path into the selection atom/cursor
 *         :row-id - function applied to row map to calculate a unique row id to put into the selection set
 *         :nil-selects-all? - (optional) selection set to nil (as opposed to #{}) selects all rows (default: false)
 *       See the second example.
 * 
 * Example:
 * 
 *      (table [{:name "Tom" :id 12} {:name "Jerry" :id 23}]
 *             :columns {:name "Hero name"})
 * 
 * Result:
 *   
 *     | Hero name |
 *     | Tom       |
 *     | Jerry     |
 * 
 * As an option, each row can have an on/off checkbox to the left; to turn this on, `checkboxes` must be a map
 * with :cursor and :korks pointing to where to store the selection.  The resulting selection
 * is either a set containing values or nil; the latter means that all rows are selected.
 * The values are taken from the first val in the respective row or a result of :value function of
 * signature (fn [row]).
 * 
 * Example:
 * 
 *     (table [{:name "Tom" :id 12} {:name "Jerry" :id 23}]
 *            :checkboxes {:selection     app-state
 *                         :path          [:selected-heroes]
 *                         :row-id        :id}
 *            :columns {:name "Hero name"})
 * 
 *      | [ ] Hero name |
 *      | [x] Tom       |
 *      | [ ] Jerry     |
 * 
 *     ;; For the above selection:
 *     (get-in app-state [:selected-heroes]) => #{12}
 * 
 * Depending on the initial value of `app-state` in the above example the table start either
 * 
 * a) with all checkboxes on for `app-state` containing {:selected-heroes nil}, or
 * b) with no selection with {:selected-heroes #{}}.
 */
reforms.table.table = (function reforms$table$table(var_args){
var args__5774__auto__ = [];
var len__5767__auto___157811 = arguments.length;
var i__5768__auto___157812 = (0);
while(true){
if((i__5768__auto___157812 < len__5767__auto___157811)){
args__5774__auto__.push((arguments[i__5768__auto___157812]));

var G__157813 = (i__5768__auto___157812 + (1));
i__5768__auto___157812 = G__157813;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.table.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__157781 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table"], null),args);
var attrs = cljs.core.nth.call(null,vec__157781,(0),null);
var vec__157782 = cljs.core.nth.call(null,vec__157781,(1),null);
var rows = cljs.core.nth.call(null,vec__157782,(0),null);
var map__157783 = cljs.core.nthnext.call(null,vec__157782,(1));
var map__157783__$1 = ((((!((map__157783 == null)))?((((map__157783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157783):map__157783);
var columns = cljs.core.get.call(null,map__157783__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentArrayMap.EMPTY);
var checkboxes = cljs.core.get.call(null,map__157783__$1,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762));
var xf = cljs.core.get.call(null,map__157783__$1,new cljs.core.Keyword(null,"xf","xf",401902988),((function (vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes){
return (function (col,val){
return val;
});})(vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes))
);
var labels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,columns);
var col_keys = (function (){var or__4709__auto__ = cljs.core.not_empty.call(null,cljs.core.map.call(null,cljs.core.first,columns));
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.distinct.call(null,cljs.core.mapcat.call(null,cljs.core.keys,rows));
}
})();
var map__157784 = checkboxes;
var map__157784__$1 = ((((!((map__157784 == null)))?((((map__157784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157784):map__157784);
var selection = cljs.core.get.call(null,map__157784__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var selection_path = cljs.core.get.call(null,map__157784__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var row_id_fn = cljs.core.get.call(null,map__157784__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.comp.call(null,cljs.core.first,cljs.core.vals));
var nil_selects_all_QMARK_ = cljs.core.get.call(null,map__157784__$1,new cljs.core.Keyword(null,"nil-selects-all?","nil-selects-all?",1855939238));
var selected = (cljs.core.truth_(selection)?(function (){var or__4709__auto__ = reforms.binding.core.get_in.call(null,selection,selection_path);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})():null);
var select_all = (cljs.core.truth_(selection)?(function (){var and__4697__auto__ = nil_selects_all_QMARK_;
if(cljs.core.truth_(and__4697__auto__)){
return (reforms.binding.core.get_in.call(null,selection,selection_path) == null);
} else {
return and__4697__auto__;
}
})():null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var all_values = cljs.core.map.call(null,row_id_fn,rows);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),reforms.table.simple_checkbox.call(null,(function (){var or__4709__auto__ = select_all;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return reforms.table.all_selected_QMARK_.call(null,selected,all_values);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (all_values,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (all_values,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(checked)){
return cljs.core.into.call(null,prev_selected,all_values);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});})(all_values,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(all_values,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null);
})());
})():null),(function (){var iter__5481__auto__ = ((function (vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__157787(s__157788){
return (new cljs.core.LazySeq(null,((function (vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__157788__$1 = s__157788;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__157788__$1);
if(temp__4425__auto__){
var s__157788__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__157788__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__157788__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__157790 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__157789 = (0);
while(true){
if((i__157789 < size__5480__auto__)){
var col = cljs.core._nth.call(null,c__5479__auto__,i__157789);
cljs.core.chunk_append.call(null,b__157790,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__4709__auto__ = labels.call(null,col);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return col;
}
})()], null));

var G__157814 = (i__157789 + (1));
i__157789 = G__157814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157790),reforms$table$iter__157787.call(null,cljs.core.chunk_rest.call(null,s__157788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157790),null);
}
} else {
var col = cljs.core.first.call(null,s__157788__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__4709__auto__ = labels.call(null,col);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return col;
}
})()], null),reforms$table$iter__157787.call(null,cljs.core.rest.call(null,s__157788__$2)));
}
} else {
return null;
}
break;
}
});})(vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,col_keys);
})()))], null)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__5481__auto__ = ((function (vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__157791(s__157792){
return (new cljs.core.LazySeq(null,((function (vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__157792__$1 = s__157792;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__157792__$1);
if(temp__4425__auto__){
var s__157792__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__157792__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__157792__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__157794 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__157793 = (0);
while(true){
if((i__157793 < size__5480__auto__)){
var row = cljs.core._nth.call(null,c__5479__auto__,i__157793);
cljs.core.chunk_append.call(null,b__157794,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var value = row_id_fn.call(null,row);
var all_values = cljs.core.map.call(null,row_id_fn,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),reforms.table.simple_checkbox.call(null,(function (){var or__4709__auto__ = select_all;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return selected.call(null,value);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__157793,value,all_values,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (i__157793,value,all_values,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(select_all)){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),value);
} else {
if(cljs.core.truth_(checked)){
return cljs.core.conj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);
} else {
return cljs.core.disj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);

}
}
});})(i__157793,value,all_values,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(i__157793,value,all_values,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null)], null);
})():null),(function (){var iter__5481__auto__ = ((function (i__157793,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__157791_$_iter__157803(s__157804){
return (new cljs.core.LazySeq(null,((function (i__157793,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__157804__$1 = s__157804;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__157804__$1);
if(temp__4425__auto____$1){
var s__157804__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__157804__$2)){
var c__5479__auto____$1 = cljs.core.chunk_first.call(null,s__157804__$2);
var size__5480__auto____$1 = cljs.core.count.call(null,c__5479__auto____$1);
var b__157806 = cljs.core.chunk_buffer.call(null,size__5480__auto____$1);
if((function (){var i__157805 = (0);
while(true){
if((i__157805 < size__5480__auto____$1)){
var col = cljs.core._nth.call(null,c__5479__auto____$1,i__157805);
cljs.core.chunk_append.call(null,b__157806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null));

var G__157815 = (i__157805 + (1));
i__157805 = G__157815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157806),reforms$table$iter__157791_$_iter__157803.call(null,cljs.core.chunk_rest.call(null,s__157804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157806),null);
}
} else {
var col = cljs.core.first.call(null,s__157804__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null),reforms$table$iter__157791_$_iter__157803.call(null,cljs.core.rest.call(null,s__157804__$2)));
}
} else {
return null;
}
break;
}
});})(i__157793,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(i__157793,row,c__5479__auto__,size__5480__auto__,b__157794,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,col_keys);
})())));

var G__157816 = (i__157793 + (1));
i__157793 = G__157816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157794),reforms$table$iter__157791.call(null,cljs.core.chunk_rest.call(null,s__157792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157794),null);
}
} else {
var row = cljs.core.first.call(null,s__157792__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var value = row_id_fn.call(null,row);
var all_values = cljs.core.map.call(null,row_id_fn,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),reforms.table.simple_checkbox.call(null,(function (){var or__4709__auto__ = select_all;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return selected.call(null,value);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,all_values,row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (value,all_values,row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(select_all)){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),value);
} else {
if(cljs.core.truth_(checked)){
return cljs.core.conj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);
} else {
return cljs.core.disj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);

}
}
});})(value,all_values,row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(value,all_values,row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null)], null);
})():null),(function (){var iter__5481__auto__ = ((function (row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__157791_$_iter__157807(s__157808){
return (new cljs.core.LazySeq(null,((function (row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__157808__$1 = s__157808;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__157808__$1);
if(temp__4425__auto____$1){
var s__157808__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__157808__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__157808__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__157810 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__157809 = (0);
while(true){
if((i__157809 < size__5480__auto__)){
var col = cljs.core._nth.call(null,c__5479__auto__,i__157809);
cljs.core.chunk_append.call(null,b__157810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null));

var G__157817 = (i__157809 + (1));
i__157809 = G__157817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157810),reforms$table$iter__157791_$_iter__157807.call(null,cljs.core.chunk_rest.call(null,s__157808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157810),null);
}
} else {
var col = cljs.core.first.call(null,s__157808__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null),reforms$table$iter__157791_$_iter__157807.call(null,cljs.core.rest.call(null,s__157808__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(row,s__157792__$2,temp__4425__auto__,vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,col_keys);
})())),reforms$table$iter__157791.call(null,cljs.core.rest.call(null,s__157792__$2)));
}
} else {
return null;
}
break;
}
});})(vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(vec__157781,attrs,vec__157782,rows,map__157783,map__157783__$1,columns,checkboxes,xf,labels,col_keys,map__157784,map__157784__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,rows);
})())], null));
});

reforms.table.table.cljs$lang$maxFixedArity = (0);

reforms.table.table.cljs$lang$applyTo = (function (seq157780){
return reforms.table.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq157780));
});

//# sourceMappingURL=table.js.map