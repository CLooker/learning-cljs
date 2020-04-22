// Compiled by ClojureScript 1.10.597 {}
goog.provide('learning_cljs.grayscale');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('reagent.core');
if((typeof learning_cljs !== 'undefined') && (typeof learning_cljs.grayscale !== 'undefined') && (typeof learning_cljs.grayscale.gray !== 'undefined')){
} else {
learning_cljs.grayscale.gray = reagent.core.atom.call(null,(0));
}
learning_cljs.grayscale.header = (function learning_cljs$grayscale$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.header.title","h1.header.title",-1921694393),"Grayscale"], null);
});
learning_cljs.grayscale.in$ = (function learning_cljs$grayscale$in(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,learning_cljs.grayscale.gray),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"7vw"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
return cljs.core.reset_BANG_.call(null,learning_cljs.grayscale.gray,(function (p1__632_SHARP_){
if(cljs.core.truth_(Number.isNaN(p1__632_SHARP_))){
return (0);
} else {
if((p1__632_SHARP_ < (0))){
return (0);
} else {
if((p1__632_SHARP_ > (255))){
return (255);
} else {
return p1__632_SHARP_;

}
}
}
}).call(null,parseInt(ev.target.value)));
})], null)], null);
});
learning_cljs.grayscale.out = (function learning_cljs$grayscale$out(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"75vh",new cljs.core.Keyword(null,"width","width",-384071477),"75vw",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"background-color","background-color",570434026),["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.grayscale.gray)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.grayscale.gray)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learning_cljs.grayscale.gray)),")"].join('')], null)], null)], null);
});
learning_cljs.grayscale.ui = (function learning_cljs$grayscale$ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.grayscale.in$], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.grayscale.out], null)], null);
});
learning_cljs.grayscale.grayscale_el = document.getElementById("grayscale");
if(cljs.core.truth_(learning_cljs.grayscale.grayscale_el)){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learning_cljs.grayscale.ui], null),learning_cljs.grayscale.grayscale_el);
} else {
}

//# sourceMappingURL=grayscale.js.map
