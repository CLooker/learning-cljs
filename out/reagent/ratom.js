// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.debug !== 'undefined')){
} else {
reagent.ratom.debug = false;
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom._running !== 'undefined')){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
(obj.cljsCaptured = null);

var _STAR_ratom_context_STAR__orig_val__679 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__680 = obj;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__680);

try{return f.call(null);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__679);
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
(obj.cljsCaptured = null);

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return (obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable));
}
});

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
}));

(reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
}),null,self__.watches);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.assoc.call(null,self__.watches,key,f));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.dissoc.call(null,self__.watches,key));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
}));

(reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.RAtom.cljs$lang$type = true);

(reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom");

(reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/RAtom");
}));

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__684 = arguments.length;
switch (G__684) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___689 = arguments.length;
var i__4790__auto___690 = (0);
while(true){
if((i__4790__auto___690 < len__4789__auto___689)){
args_arr__4810__auto__.push((arguments[i__4790__auto___690]));

var G__691 = (i__4790__auto___690 + (1));
i__4790__auto___690 = G__691;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
}));

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__685){
var map__686 = p__685;
var map__686__$1 = (((((!((map__686 == null))))?(((((map__686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__686):map__686);
var meta = cljs.core.get.call(null,map__686__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__686__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new reagent.ratom.RAtom(x,meta,validator,null));
}));

/** @this {Function} */
(reagent.ratom.atom.cljs$lang$applyTo = (function (seq682){
var G__683 = cljs.core.first.call(null,seq682);
var seq682__$1 = cljs.core.next.call(null,seq682);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__683,seq682__$1);
}));

(reagent.ratom.atom.cljs$lang$maxFixedArity = (1));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return (self__.reaction = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
}),new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?(function (p1__693_SHARP_,p2__692_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__692_SHARP_);
}):(function (p1__695_SHARP_,p2__694_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__694_SHARP_);
}))):reagent.ratom.make_reaction.call(null,(function (){
return self__.ratom.call(null,self__.path);
}),new cljs.core.Keyword(null,"on-set","on-set",-140953470),(function (p1__697_SHARP_,p2__696_SHARP_){
return self__.ratom.call(null,self__.path,p2__696_SHARP_);
}))));
} else {
return self__.reaction;
}
}));

(reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__699 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__700 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__700);

try{return cljs.core._deref.call(null,this$._reaction());
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__699);
}}));

(reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,["#<Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)," "].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
}));

(reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
}));

(reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.RCursor.cljs$lang$type = true);

(reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor");

(reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/RCursor");
}));

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((((!((path == null))))?(((((path.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === path.cljs$core$IDeref$))))?true:(((!path.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,path):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,path))){
if((typeof console !== 'undefined')){
console.warn(["Warning: ","Calling cursor with an atom as the second arg is ","deprecated, in (cursor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," ",cljs.core.pr_str.call(null,path),")"].join(''));
} else {
}

if((((!((path == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === path.reagent$ratom$IReactiveAtom$))))?true:(((!path.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,path):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,path))){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom, not ",cljs.core.pr_str.call(null,path)].join(''),"\n","(satisfies? IReactiveAtom path)"].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4185__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && ((!(cljs.core.vector_QMARK_.call(null,src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.call(null,src)].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (reagent.ratom.dispose_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom.run[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (reagent.ratom.run["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IComputedImpl = function(){};

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IComputedImpl$_update_watching$arity$2 == null)))))){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$,derefed);
} else {
var m__4485__auto__ = (reagent.ratom._update_watching["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$,derefed);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((((!((k == null)))) && ((!((k.reagent$ratom$IComputedImpl$_handle_change$arity$4 == null)))))){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4487__auto__ = (((k == null))?null:k);
var m__4488__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,k,sender,oldval,newval);
} else {
var m__4485__auto__ = (reagent.ratom._handle_change["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,k,sender,oldval,newval);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IComputedImpl$_peek_at$arity$1 == null)))))){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (reagent.ratom._peek_at["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IComputedImpl}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4174__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,self__.dirty_QMARK_)) && ((!((oldval === newval)))));
} else {
return and__4174__auto__;
}
})())){
(self__.dirty_QMARK_ = true);

return (function (){var or__4185__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__705_719 = cljs.core.seq.call(null,derefed);
var chunk__706_720 = null;
var count__707_721 = (0);
var i__708_722 = (0);
while(true){
if((i__708_722 < count__707_721)){
var w_723 = cljs.core._nth.call(null,chunk__706_720,i__708_722);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_723)){
} else {
cljs.core.add_watch.call(null,w_723,this$__$1,reagent.ratom._handle_change);
}


var G__724 = seq__705_719;
var G__725 = chunk__706_720;
var G__726 = count__707_721;
var G__727 = (i__708_722 + (1));
seq__705_719 = G__724;
chunk__706_720 = G__725;
count__707_721 = G__726;
i__708_722 = G__727;
continue;
} else {
var temp__5457__auto___728 = cljs.core.seq.call(null,seq__705_719);
if(temp__5457__auto___728){
var seq__705_729__$1 = temp__5457__auto___728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__705_729__$1)){
var c__4609__auto___730 = cljs.core.chunk_first.call(null,seq__705_729__$1);
var G__731 = cljs.core.chunk_rest.call(null,seq__705_729__$1);
var G__732 = c__4609__auto___730;
var G__733 = cljs.core.count.call(null,c__4609__auto___730);
var G__734 = (0);
seq__705_719 = G__731;
chunk__706_720 = G__732;
count__707_721 = G__733;
i__708_722 = G__734;
continue;
} else {
var w_735 = cljs.core.first.call(null,seq__705_729__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_735)){
} else {
cljs.core.add_watch.call(null,w_735,this$__$1,reagent.ratom._handle_change);
}


var G__736 = cljs.core.next.call(null,seq__705_729__$1);
var G__737 = null;
var G__738 = (0);
var G__739 = (0);
seq__705_719 = G__736;
chunk__706_720 = G__737;
count__707_721 = G__738;
i__708_722 = G__739;
continue;
}
} else {
}
}
break;
}

var seq__709_740 = cljs.core.seq.call(null,self__.watching);
var chunk__710_741 = null;
var count__711_742 = (0);
var i__712_743 = (0);
while(true){
if((i__712_743 < count__711_742)){
var w_744 = cljs.core._nth.call(null,chunk__710_741,i__712_743);
if(cljs.core.contains_QMARK_.call(null,derefed,w_744)){
} else {
cljs.core.remove_watch.call(null,w_744,this$__$1);
}


var G__745 = seq__709_740;
var G__746 = chunk__710_741;
var G__747 = count__711_742;
var G__748 = (i__712_743 + (1));
seq__709_740 = G__745;
chunk__710_741 = G__746;
count__711_742 = G__747;
i__712_743 = G__748;
continue;
} else {
var temp__5457__auto___749 = cljs.core.seq.call(null,seq__709_740);
if(temp__5457__auto___749){
var seq__709_750__$1 = temp__5457__auto___749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__709_750__$1)){
var c__4609__auto___751 = cljs.core.chunk_first.call(null,seq__709_750__$1);
var G__752 = cljs.core.chunk_rest.call(null,seq__709_750__$1);
var G__753 = c__4609__auto___751;
var G__754 = cljs.core.count.call(null,c__4609__auto___751);
var G__755 = (0);
seq__709_740 = G__752;
chunk__710_741 = G__753;
count__711_742 = G__754;
i__712_743 = G__755;
continue;
} else {
var w_756 = cljs.core.first.call(null,seq__709_750__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_756)){
} else {
cljs.core.remove_watch.call(null,w_756,this$__$1);
}


var G__757 = cljs.core.next.call(null,seq__709_750__$1);
var G__758 = null;
var G__759 = (0);
var G__760 = (0);
seq__709_740 = G__757;
chunk__710_741 = G__758;
count__711_742 = G__759;
i__712_743 = G__760;
continue;
}
} else {
}
}
break;
}

return (self__.watching = derefed);
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR__orig_val__713 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__714 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__714);

try{return cljs.core._deref.call(null,this$__$1);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__713);
}}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,["#<Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1)),": "].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
}));

(reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__715_761 = cljs.core.seq.call(null,self__.watching);
var chunk__716_762 = null;
var count__717_763 = (0);
var i__718_764 = (0);
while(true){
if((i__718_764 < count__717_763)){
var w_765 = cljs.core._nth.call(null,chunk__716_762,i__718_764);
cljs.core.remove_watch.call(null,w_765,this$__$1);


var G__766 = seq__715_761;
var G__767 = chunk__716_762;
var G__768 = count__717_763;
var G__769 = (i__718_764 + (1));
seq__715_761 = G__766;
chunk__716_762 = G__767;
count__717_763 = G__768;
i__718_764 = G__769;
continue;
} else {
var temp__5457__auto___770 = cljs.core.seq.call(null,seq__715_761);
if(temp__5457__auto___770){
var seq__715_771__$1 = temp__5457__auto___770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__715_771__$1)){
var c__4609__auto___772 = cljs.core.chunk_first.call(null,seq__715_771__$1);
var G__773 = cljs.core.chunk_rest.call(null,seq__715_771__$1);
var G__774 = c__4609__auto___772;
var G__775 = cljs.core.count.call(null,c__4609__auto___772);
var G__776 = (0);
seq__715_761 = G__773;
chunk__716_762 = G__774;
count__717_763 = G__775;
i__718_764 = G__776;
continue;
} else {
var w_777 = cljs.core.first.call(null,seq__715_771__$1);
cljs.core.remove_watch.call(null,w_777,this$__$1);


var G__778 = cljs.core.next.call(null,seq__715_771__$1);
var G__779 = null;
var G__780 = (0);
var G__781 = (0);
seq__715_761 = G__778;
chunk__716_762 = G__779;
count__717_763 = G__780;
i__718_764 = G__781;
continue;
}
} else {
}
}
break;
}

(self__.watching = null);

(self__.state = null);

(self__.dirty_QMARK_ = true);

if(cljs.core.truth_(self__.active_QMARK_)){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

(self__.active_QMARK_ = false);
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
(self__.state = newval);

if(cljs.core.truth_(self__.on_set)){
(self__.dirty_QMARK_ = true);

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

(self__.active_QMARK_ = true);
}

(self__.dirty_QMARK_ = false);

(self__.state = res);

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,(function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
}),null,self__.watches);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf));
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
(self__.watches = cljs.core.dissoc.call(null,self__.watches,k));

if(((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run)))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4185__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (!((reagent.ratom._STAR_ratom_context_STAR_ == null)));
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_782 = self__.state;
(self__.state = self__.f.call(null));

if((oldstate_782 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_782,self__.state);
}
} else {
}

return self__.state;
}
}));

(reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null);
}));

(reagent.ratom.Reaction.cljs$lang$type = true);

(reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction");

(reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/Reaction");
}));

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__4795__auto__ = [];
var len__4789__auto___788 = arguments.length;
var i__4790__auto___789 = (0);
while(true){
if((i__4790__auto___789 < len__4789__auto___788)){
args__4795__auto__.push((arguments[i__4790__auto___789]));

var G__790 = (i__4790__auto___789 + (1));
i__4790__auto___789 = G__790;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__785){
var map__786 = p__785;
var map__786__$1 = (((((!((map__786 == null))))?(((((map__786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__786):map__786);
var auto_run = cljs.core.get.call(null,map__786__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__786__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__786__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var derefed = cljs.core.get.call(null,map__786__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = (!((derefed == null)));
var dirty = (!(active));
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
}));

(reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq783){
var G__784 = cljs.core.first.call(null,seq783);
var seq783__$1 = cljs.core.next.call(null,seq783);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__784,seq783__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4174__auto__ = self__.changed;
if(cljs.core.truth_(and__4174__auto__)){
return (!((reagent.ratom._STAR_ratom_context_STAR_ == null)));
} else {
return and__4174__auto__;
}
})())){
if((typeof console !== 'undefined')){
console.warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.call(null,this$__$1)].join(''));
} else {
}
} else {
}


return self__.state;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
}),null,self__.watches);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.assoc.call(null,self__.watches,key,f));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.dissoc.call(null,self__.watches,key));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
}));

(reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.ratom.Wrapper.cljs$lang$type = true);

(reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper");

(reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map
