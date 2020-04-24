// Compiled by ClojureScript 1.10.597 {}
goog.provide('learning_cljs.color_viewer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.color');
learning_cljs.color_viewer.centered_cols_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null);
learning_cljs.color_viewer.input_width = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"7vw"], null);
if((typeof learning_cljs !== 'undefined') && (typeof learning_cljs.color_viewer !== 'undefined') && (typeof learning_cljs.color_viewer.state !== 'undefined')){
} else {
learning_cljs.color_viewer.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"g","g",1738089905),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"hex","hex",41691346),"#000000"], null));
}
learning_cljs.color_viewer.hex_change = (function learning_cljs$color_viewer$hex_change(ev){
var hex = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev.target.value)].join('');
if(goog.color.isValidColor(hex)){
var vec__894 = goog.color.hexToRgb(hex);
var r = cljs.core.nth.call(null,vec__894,(0),null);
var g = cljs.core.nth.call(null,vec__894,(1),null);
var b = cljs.core.nth.call(null,vec__894,(2),null);
return cljs.core.swap_BANG_.call(null,learning_cljs.color_viewer.state,cljs.core.assoc,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"hex","hex",41691346),hex);
} else {
return cljs.core.swap_BANG_.call(null,learning_cljs.color_viewer.state,cljs.core.assoc,new cljs.core.Keyword(null,"hex","hex",41691346),hex);
}
});
learning_cljs.color_viewer.hex_in = (function learning_cljs$color_viewer$hex_in(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"width","width",-384071477),"5vw",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subs.call(null,new cljs.core.Keyword(null,"hex","hex",41691346).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.color_viewer.state)),(1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),learning_cljs.color_viewer.hex_change,new cljs.core.Keyword(null,"style","style",-496642736),learning_cljs.color_viewer.input_width], null)], null);
});
learning_cljs.color_viewer.in_range = (function learning_cljs$color_viewer$in_range(min,max,x){
if(cljs.core.truth_(Number.isNaN(x))){
return min;
} else {
if((((x < min)) && ((min < max)))){
return min;
} else {
if((((min < x)) && ((x < max)))){
return x;
} else {
if((((min < max)) && ((max < x)))){
return max;
} else {
return null;
}
}
}
}
});
learning_cljs.color_viewer.in_rgb_range = cljs.core.partial.call(null,learning_cljs.color_viewer.in_range,(0),(255));
learning_cljs.color_viewer.rgb_change = (function learning_cljs$color_viewer$rgb_change(k,ev){
var v = ev.target.value;
cljs.core.swap_BANG_.call(null,learning_cljs.color_viewer.state,cljs.core.assoc,k,((cljs.core._EQ_.call(null,v,""))?v:learning_cljs.color_viewer.in_rgb_range.call(null,v)));

return cljs.core.swap_BANG_.call(null,learning_cljs.color_viewer.state,cljs.core.assoc,new cljs.core.Keyword(null,"hex","hex",41691346),goog.color.rgbToHex(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.color_viewer.state)),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.color_viewer.state)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.color_viewer.state))));
});
learning_cljs.color_viewer.rgb_in = (function learning_cljs$color_viewer$rgb_in(k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,learning_cljs.color_viewer.state).call(null,k),new cljs.core.Keyword(null,"style","style",-496642736),learning_cljs.color_viewer.input_width,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
return learning_cljs.color_viewer.rgb_change.call(null,k,ev);
})], null)], null);
});
learning_cljs.color_viewer.ins = (function learning_cljs$color_viewer$ins(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),learning_cljs.color_viewer.centered_cols_style,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Hex: #"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.hex_in], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.75em"], null)], null),"RGB: "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.rgb_in,new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.rgb_in,new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.rgb_in,new cljs.core.Keyword(null,"b","b",1482224470)], null)], null)], null)], null);
});
learning_cljs.color_viewer.out = (function learning_cljs$color_viewer$out(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"40vh",new cljs.core.Keyword(null,"width","width",-384071477),"66vw",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1.25em",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref.call(null,learning_cljs.color_viewer.state).call(null,new cljs.core.Keyword(null,"hex","hex",41691346))], null)], null)], null);
});
learning_cljs.color_viewer.ui = (function learning_cljs$color_viewer$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),learning_cljs.color_viewer.centered_cols_style,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.out], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.ins], null)], null);
});
learning_cljs.color_viewer.color_viewer_el = document.getElementById("color-viewer");
if(cljs.core.truth_(learning_cljs.color_viewer.color_viewer_el)){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.color_viewer.ui], null),learning_cljs.color_viewer.color_viewer_el);
} else {
}

//# sourceMappingURL=color_viewer.js.map
