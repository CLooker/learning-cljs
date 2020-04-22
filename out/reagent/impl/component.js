// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
return reagent.impl.template.as_element(x);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__2521 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__2522 = c;
(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__2522);

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error("Assert failed: (ifn? f)"))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?f.call(null,c):(function (){var argv = (p["argv"]);
var n = cljs.core.count.call(null,argv);
var G__2523 = n;
switch (G__2523) {
case (1):
return f.call(null);

break;
case (2):
return f.call(null,cljs.core.nth.call(null,argv,(1)));

break;
case (3):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)));

break;
case (4):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)),cljs.core.nth.call(null,argv,(3)));

break;
case (5):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)),cljs.core.nth.call(null,argv,(3)),cljs.core.nth.call(null,argv,(4)));

break;
default:
return cljs.core.apply.call(null,f,cljs.core.subvec.call(null,argv,(1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
(c["cljsRender"] = res);

return reagent.impl.component.do_render.call(null,c);
} else {
return res;
}
}
}finally {(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__2521);
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var c = this;
if(cljs.core.not.call(null,reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively.call(null,c,(function (){
return reagent.impl.component.do_render.call(null,c);
}));
} else {
return reagent.impl.component.do_render.call(null,c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__2525 = key;
var G__2525__$1 = (((G__2525 instanceof cljs.core.Keyword))?G__2525.fqn:null);
switch (G__2525__$1) {
case "getDefaultProps":
throw (new Error(["Assert failed: ","getDefaultProps not supported yet","\n","false"].join('')));


break;
case "getInitialState":
return (function (){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(null,c));
});

break;
case "componentWillReceiveProps":
return (function (props){
var c = this;
return f.call(null,c,(props["argv"]));
});

break;
case "shouldComponentUpdate":
return (function (nextprops,nextstate){
var or__4185__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return (((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.call(null,old_argv,new_argv)));
} else {
return f.call(null,c,old_argv,new_argv);
}
}
});

break;
case "componentWillUpdate":
return (function (nextprops){
var c = this;
return f.call(null,c,(nextprops["argv"]));
});

break;
case "componentDidUpdate":
return (function (oldprops){
var c = this;
return f.call(null,c,(oldprops["argv"]));
});

break;
case "componentWillMount":
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(null,c);
}
});

break;
case "componentWillUnmount":
return (function (){
var c = this;
reagent.impl.batching.dispose.call(null,c);

if((f == null)){
return null;
} else {
return f.call(null,c);
}
});

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
return (function() { 
var G__2527__delegate = function (args){
var c = this;
return cljs.core.apply.call(null,f,c,args);
};
var G__2527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2528__i = 0, G__2528__a = new Array(arguments.length -  0);
while (G__2528__i < G__2528__a.length) {G__2528__a[G__2528__i] = arguments[G__2528__i + 0]; ++G__2528__i;}
  args = new cljs.core.IndexedSeq(G__2528__a,0,null);
} 
return G__2527__delegate.call(this,args);};
G__2527.cljs$lang$maxFixedArity = 0;
G__2527.cljs$lang$applyTo = (function (arglist__2529){
var args = cljs.core.seq(arglist__2529);
return G__2527__delegate(args);
});
G__2527.cljs$core$IFn$_invoke$arity$variadic = G__2527__delegate;
return G__2527;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cljsRender","cljsRender",247449928),null,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"cljsName","cljsName",999824949),null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_.call(null,f)){
var G__2530 = f;
(G__2530["__reactDontBind"] = true);

return G__2530;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_(reagent.impl.component.dont_wrap.call(null,key))){
return reagent.impl.component.dont_bind.call(null,f);
} else {
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__4174__auto__ = wrap;
if(cljs.core.truth_(and__4174__auto__)){
return f;
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected function in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),"\n","(ifn? f)"].join('')));
}
} else {
}

var or__4185__auto__ = wrap;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reagent.impl.component.default_wrapper.call(null,f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"cljsRender","cljsRender",247449928),render_f,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
return cljs.core.assoc.call(null,fm,new cljs.core.Keyword(null,"cljsName","cljsName",999824949),(function (){
return name;
}));

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__4185__auto__ = ((cljs.core.fn_QMARK_.call(null,f))?(function (){var or__4185__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (f["name"]);
}
})():false);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (((((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false))?cljs.core.name.call(null,f):false);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__5459__auto__ = new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__5459__auto__ == null)){
return fmap;
} else {
var cf = temp__5459__auto__;
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,fmap,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),cf),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104));
}
})();
var render_fun = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_.call(null,render_fun))?null:(function(){throw (new Error(["Assert failed: ",["Render must be a function, not ",cljs.core.pr_str.call(null,render_fun)].join(''),"\n","(ifn? render-fun)"].join('')))})());
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reagent.impl.component.fun_name.call(null,render_fun);
}
})());
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_.call(null,name))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent")):name);
var fmap__$1 = reagent.impl.component.add_render.call(null,cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name_SINGLEQUOTE_));
}),cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__2537 = o;
(G__2537[cljs.core.name.call(null,k)] = v);

return G__2537;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var spec = reagent.impl.component.cljsify.call(null,body);
var res = (React["createClass"])(spec);
var f = (function() { 
var G__2538__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__2538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2539__i = 0, G__2539__a = new Array(arguments.length -  0);
while (G__2539__i < G__2539__a.length) {G__2539__a[G__2539__i] = arguments[G__2539__i + 0]; ++G__2539__i;}
  args = new cljs.core.IndexedSeq(G__2539__a,0,null);
} 
return G__2538__delegate.call(this,args);};
G__2538.cljs$lang$maxFixedArity = 0;
G__2538.cljs$lang$applyTo = (function (arglist__2540){
var args = cljs.core.seq(arglist__2540);
return G__2538__delegate(args);
});
G__2538.cljs$core$IFn$_invoke$arity$variadic = G__2538__delegate;
return G__2538;
})()
;
reagent.impl.util.cache_react_class.call(null,f,res);

reagent.impl.util.cache_react_class.call(null,res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__2541 = reagent.impl.component._STAR_current_component_STAR_;
if((G__2541 == null)){
return null;
} else {
return (G__2541["cljsName"])();
}
})();
if((!(cljs.core.empty_QMARK_.call(null,n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__2542(s__2543){
return (new cljs.core.LazySeq(null,(function (){
var s__2543__$1 = s__2543;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2543__$1);
if(temp__5457__auto__){
var s__2543__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2543__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__2543__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__2545 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__2544 = (0);
while(true){
if((i__2544 < size__4581__auto__)){
var k = cljs.core._nth.call(null,c__4580__auto__,i__2544);
cljs.core.chunk_append.call(null,b__2545,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(o[k])], null));

var G__2546 = (i__2544 + (1));
i__2544 = G__2546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2545),reagent$impl$component$shallow_obj_to_map_$_iter__2542.call(null,cljs.core.chunk_rest.call(null,s__2543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2545),null);
}
} else {
var k = cljs.core.first.call(null,s__2543__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__2542.call(null,cljs.core.rest.call(null,s__2543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.js_keys.call(null,o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])(({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.call(null,reagent.impl.component.shallow_obj_to_map.call(null,(this$["props"])),new cljs.core.Keyword(null,"-elem-count","-elem-count",663797079),(reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1))))], null));
})}));
});

//# sourceMappingURL=component.js.map
