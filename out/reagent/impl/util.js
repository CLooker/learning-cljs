// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!(((window["document"]) == null)))));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return (!(((c["props"]["argv"]) == null)));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))),cljs.core.subs.call(null,s,(1))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__634 = clojure.string.split.call(null,name_str,/-/);
var seq__635 = cljs.core.seq.call(null,vec__634);
var first__636 = cljs.core.first.call(null,seq__635);
var seq__635__$1 = cljs.core.next.call(null,seq__635);
var start = first__636;
var parts = seq__635__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__638__delegate = function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var or__4185__auto___639 = self__.p;
if(cljs.core.truth_(or__4185__auto___639)){
} else {
(self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args));
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__638 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__640__i = 0, G__640__a = new Array(arguments.length -  1);
while (G__640__i < G__640__a.length) {G__640__a[G__640__i] = arguments[G__640__i + 1]; ++G__640__i;}
  a = new cljs.core.IndexedSeq(G__640__a,0,null);
} 
return G__638__delegate.call(this,self__,a);};
G__638.cljs$lang$maxFixedArity = 1;
G__638.cljs$lang$applyTo = (function (arglist__641){
var self__ = cljs.core.first(arglist__641);
var a = cljs.core.rest(arglist__641);
return G__638__delegate(self__,a);
});
G__638.cljs$core$IFn$_invoke$arity$variadic = G__638__delegate;
return G__638;
})()
);

(reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args637){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args637)));
}));

(reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__642__delegate = function (a){
var self__ = this;
var _ = this;
var or__4185__auto___643 = self__.p;
if(cljs.core.truth_(or__4185__auto___643)){
} else {
(self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args));
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__642 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__644__i = 0, G__644__a = new Array(arguments.length -  0);
while (G__644__i < G__644__a.length) {G__644__a[G__644__i] = arguments[G__644__i + 0]; ++G__644__i;}
  a = new cljs.core.IndexedSeq(G__644__a,0,null);
} 
return G__642__delegate.call(this,a);};
G__642.cljs$lang$maxFixedArity = 0;
G__642.cljs$lang$applyTo = (function (arglist__645){
var a = cljs.core.seq(arglist__645);
return G__642__delegate(a);
});
G__642.cljs$core$IFn$_invoke$arity$variadic = G__642__delegate;
return G__642;
})()
);

(reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
}));

(reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.impl.util.partial_ifn.cljs$lang$type = true);

(reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn");

(reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reagent.impl.util/partial-ifn");
}));

/**
 * Positional factory function for reagent.impl.util/partial-ifn.
 */
reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5457__auto__)){
var c1 = temp__5457__auto__;
var temp__5457__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5457__auto____$1)){
var c2 = temp__5457__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5457__auto__)){
var s1 = temp__5457__auto__;
var temp__5457__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5457__auto____$1)){
var s2 = temp__5457__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.util !== 'undefined') && (typeof reagent.impl.util.roots !== 'undefined')){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e646){if((e646 instanceof Object)){
var e = e646;
if((typeof console !== 'undefined')){
console.warn(["Warning: ","Error unmounting:"].join(''));
} else {
}

if((typeof console !== 'undefined')){
return console.log(e);
} else {
return null;
}
} else {
throw e646;

}
}});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
try{var _STAR_always_update_STAR__orig_val__648 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__649 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__649);

try{return (React["render"])(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__650 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__651 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__651);

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__650);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__648);
}}catch (e647){if((e647 instanceof Object)){
var e = e647;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e647;

}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__652_656 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__653_657 = null;
var count__654_658 = (0);
var i__655_659 = (0);
while(true){
if((i__655_659 < count__654_658)){
var v_660 = cljs.core._nth.call(null,chunk__653_657,i__655_659);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_660);


var G__661 = seq__652_656;
var G__662 = chunk__653_657;
var G__663 = count__654_658;
var G__664 = (i__655_659 + (1));
seq__652_656 = G__661;
chunk__653_657 = G__662;
count__654_658 = G__663;
i__655_659 = G__664;
continue;
} else {
var temp__5457__auto___665 = cljs.core.seq.call(null,seq__652_656);
if(temp__5457__auto___665){
var seq__652_666__$1 = temp__5457__auto___665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652_666__$1)){
var c__4609__auto___667 = cljs.core.chunk_first.call(null,seq__652_666__$1);
var G__668 = cljs.core.chunk_rest.call(null,seq__652_666__$1);
var G__669 = c__4609__auto___667;
var G__670 = cljs.core.count.call(null,c__4609__auto___667);
var G__671 = (0);
seq__652_656 = G__668;
chunk__653_657 = G__669;
count__654_658 = G__670;
i__655_659 = G__671;
continue;
} else {
var v_672 = cljs.core.first.call(null,seq__652_666__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_672);


var G__673 = cljs.core.next.call(null,seq__652_666__$1);
var G__674 = null;
var G__675 = (0);
var G__676 = (0);
seq__652_656 = G__673;
chunk__653_657 = G__674;
count__654_658 = G__675;
i__655_659 = G__676;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map
