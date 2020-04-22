// Compiled by ClojureScript 1.10.597 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$prevent_default$arity$1 == null)))))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__4487__auto__ = (((evt == null))?null:evt);
var m__4488__auto__ = (domina.events.prevent_default[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,evt);
} else {
var m__4485__auto__ = (domina.events.prevent_default["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$stop_propagation$arity$1 == null)))))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__4487__auto__ = (((evt == null))?null:evt);
var m__4488__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,evt);
} else {
var m__4485__auto__ = (domina.events.stop_propagation["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$target$arity$1 == null)))))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__4487__auto__ = (((evt == null))?null:evt);
var m__4488__auto__ = (domina.events.target[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,evt);
} else {
var m__4485__auto__ = (domina.events.target["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$current_target$arity$1 == null)))))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__4487__auto__ = (((evt == null))?null:evt);
var m__4488__auto__ = (domina.events.current_target[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,evt);
} else {
var m__4485__auto__ = (domina.events.current_target["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$event_type$arity$1 == null)))))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__4487__auto__ = (((evt == null))?null:evt);
var m__4488__auto__ = (domina.events.event_type[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,evt);
} else {
var m__4485__auto__ = (domina.events.event_type["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$raw_event$arity$1 == null)))))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__4487__auto__ = (((evt == null))?null:evt);
var m__4488__auto__ = (domina.events.raw_event[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,evt);
} else {
var m__4485__auto__ = (domina.events.raw_event["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events2242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events2242 = (function (f,evt,meta2243){
this.f = f;
this.evt = evt;
this.meta2243 = meta2243;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(domina.events.t_domina$events2242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2244,meta2243__$1){
var self__ = this;
var _2244__$1 = this;
return (new domina.events.t_domina$events2242(self__.f,self__.evt,meta2243__$1));
}));

(domina.events.t_domina$events2242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2244){
var self__ = this;
var _2244__$1 = this;
return self__.meta2243;
}));

(domina.events.t_domina$events2242.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL);

(domina.events.t_domina$events2242.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
}));

(domina.events.t_domina$events2242.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
}));

(domina.events.t_domina$events2242.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
}));

(domina.events.t_domina$events2242.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
}));

(domina.events.t_domina$events2242.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
}));

(domina.events.t_domina$events2242.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
}));

(domina.events.t_domina$events2242.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__5455__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__5455__auto__)){
var val = temp__5455__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
}));

(domina.events.t_domina$events2242.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4185__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(domina.events.t_domina$events2242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta2243","meta2243",-1819540440,null)], null);
}));

(domina.events.t_domina$events2242.cljs$lang$type = true);

(domina.events.t_domina$events2242.cljs$lang$ctorStr = "domina.events/t_domina$events2242");

(domina.events.t_domina$events2242.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"domina.events/t_domina$events2242");
}));

/**
 * Positional factory function for domina.events/t_domina$events2242.
 */
domina.events.__GT_t_domina$events2242 = (function domina$events$create_listener_function_$___GT_t_domina$events2242(f__$1,evt__$1,meta2243){
return (new domina.events.t_domina$events2242(f__$1,evt__$1,meta2243));
});

}

return (new domina.events.t_domina$events2242(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function domina$events$listen_internal_BANG__$_iter__2245(s__2246){
return (new cljs.core.LazySeq(null,(function (){
var s__2246__$1 = s__2246;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2246__$1);
if(temp__5457__auto__){
var s__2246__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2246__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__2246__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__2248 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__2247 = (0);
while(true){
if((i__2247 < size__4581__auto__)){
var node = cljs.core._nth.call(null,c__4580__auto__,i__2247);
cljs.core.chunk_append.call(null,b__2248,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__2249 = (i__2247 + (1));
i__2247 = G__2249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2248),domina$events$listen_internal_BANG__$_iter__2245.call(null,cljs.core.chunk_rest.call(null,s__2246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2248),null);
}
} else {
var node = cljs.core.first.call(null,s__2246__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__2245.call(null,cljs.core.rest.call(null,s__2246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var G__2251 = arguments.length;
switch (G__2251) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
}));

(domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
}));

(domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var G__2254 = arguments.length;
switch (G__2254) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
}));

(domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
}));

(domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var G__2257 = arguments.length;
switch (G__2257) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
}));

(domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
}));

(domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var G__2260 = arguments.length;
switch (G__2260) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
}));

(domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
}));

(domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var G__2263 = arguments.length;
switch (G__2263) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
}));

(domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__2264 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2265 = null;
var count__2266 = (0);
var i__2267 = (0);
while(true){
if((i__2267 < count__2266)){
var node = cljs.core._nth.call(null,chunk__2265,i__2267);
goog.events.removeAll(node);


var G__2273 = seq__2264;
var G__2274 = chunk__2265;
var G__2275 = count__2266;
var G__2276 = (i__2267 + (1));
seq__2264 = G__2273;
chunk__2265 = G__2274;
count__2266 = G__2275;
i__2267 = G__2276;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2264);
if(temp__5457__auto__){
var seq__2264__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2264__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2264__$1);
var G__2277 = cljs.core.chunk_rest.call(null,seq__2264__$1);
var G__2278 = c__4609__auto__;
var G__2279 = cljs.core.count.call(null,c__4609__auto__);
var G__2280 = (0);
seq__2264 = G__2277;
chunk__2265 = G__2278;
count__2266 = G__2279;
i__2267 = G__2280;
continue;
} else {
var node = cljs.core.first.call(null,seq__2264__$1);
goog.events.removeAll(node);


var G__2281 = cljs.core.next.call(null,seq__2264__$1);
var G__2282 = null;
var G__2283 = (0);
var G__2284 = (0);
seq__2264 = G__2281;
chunk__2265 = G__2282;
count__2266 = G__2283;
i__2267 = G__2284;
continue;
}
} else {
return null;
}
}
break;
}
}));

(domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__2268 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2269 = null;
var count__2270 = (0);
var i__2271 = (0);
while(true){
if((i__2271 < count__2270)){
var node = cljs.core._nth.call(null,chunk__2269,i__2271);
goog.events.removeAll(node,type__$1);


var G__2285 = seq__2268;
var G__2286 = chunk__2269;
var G__2287 = count__2270;
var G__2288 = (i__2271 + (1));
seq__2268 = G__2285;
chunk__2269 = G__2286;
count__2270 = G__2287;
i__2271 = G__2288;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2268);
if(temp__5457__auto__){
var seq__2268__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2268__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2268__$1);
var G__2289 = cljs.core.chunk_rest.call(null,seq__2268__$1);
var G__2290 = c__4609__auto__;
var G__2291 = cljs.core.count.call(null,c__4609__auto__);
var G__2292 = (0);
seq__2268 = G__2289;
chunk__2269 = G__2290;
count__2270 = G__2291;
i__2271 = G__2292;
continue;
} else {
var node = cljs.core.first.call(null,seq__2268__$1);
goog.events.removeAll(node,type__$1);


var G__2293 = cljs.core.next.call(null,seq__2268__$1);
var G__2294 = null;
var G__2295 = (0);
var G__2296 = (0);
seq__2268 = G__2293;
chunk__2269 = G__2294;
count__2270 = G__2295;
i__2271 = G__2296;
continue;
}
} else {
return null;
}
}
break;
}
}));

(domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var G__2298 = arguments.length;
switch (G__2298) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
}));

(domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__5455__auto__ = n.parentNode;
if(cljs.core.truth_(temp__5455__auto__)){
var parent = temp__5455__auto__;
var G__2300 = parent;
var G__2301 = cljs.core.cons.call(null,parent,so_far);
n = G__2300;
so_far = G__2301;
continue;
} else {
return so_far;
}
break;
}
}));

(domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2);

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
(evt.target = domina.single_node.call(null,source));

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__2302_2310 = cljs.core.seq.call(null,ancestors);
var chunk__2303_2311 = null;
var count__2304_2312 = (0);
var i__2305_2313 = (0);
while(true){
if((i__2305_2313 < count__2304_2312)){
var n_2314 = cljs.core._nth.call(null,chunk__2303_2311,i__2305_2313);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2314);

goog.events.fireListeners(n_2314,evt.type,true,evt);
}


var G__2315 = seq__2302_2310;
var G__2316 = chunk__2303_2311;
var G__2317 = count__2304_2312;
var G__2318 = (i__2305_2313 + (1));
seq__2302_2310 = G__2315;
chunk__2303_2311 = G__2316;
count__2304_2312 = G__2317;
i__2305_2313 = G__2318;
continue;
} else {
var temp__5457__auto___2319 = cljs.core.seq.call(null,seq__2302_2310);
if(temp__5457__auto___2319){
var seq__2302_2320__$1 = temp__5457__auto___2319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2302_2320__$1)){
var c__4609__auto___2321 = cljs.core.chunk_first.call(null,seq__2302_2320__$1);
var G__2322 = cljs.core.chunk_rest.call(null,seq__2302_2320__$1);
var G__2323 = c__4609__auto___2321;
var G__2324 = cljs.core.count.call(null,c__4609__auto___2321);
var G__2325 = (0);
seq__2302_2310 = G__2322;
chunk__2303_2311 = G__2323;
count__2304_2312 = G__2324;
i__2305_2313 = G__2325;
continue;
} else {
var n_2326 = cljs.core.first.call(null,seq__2302_2320__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2326);

goog.events.fireListeners(n_2326,evt.type,true,evt);
}


var G__2327 = cljs.core.next.call(null,seq__2302_2320__$1);
var G__2328 = null;
var G__2329 = (0);
var G__2330 = (0);
seq__2302_2310 = G__2327;
chunk__2303_2311 = G__2328;
count__2304_2312 = G__2329;
i__2305_2313 = G__2330;
continue;
}
} else {
}
}
break;
}

var seq__2306_2331 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__2307_2332 = null;
var count__2308_2333 = (0);
var i__2309_2334 = (0);
while(true){
if((i__2309_2334 < count__2308_2333)){
var n_2335 = cljs.core._nth.call(null,chunk__2307_2332,i__2309_2334);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2335);

goog.events.fireListeners(n_2335,evt.type,false,evt);
}


var G__2336 = seq__2306_2331;
var G__2337 = chunk__2307_2332;
var G__2338 = count__2308_2333;
var G__2339 = (i__2309_2334 + (1));
seq__2306_2331 = G__2336;
chunk__2307_2332 = G__2337;
count__2308_2333 = G__2338;
i__2309_2334 = G__2339;
continue;
} else {
var temp__5457__auto___2340 = cljs.core.seq.call(null,seq__2306_2331);
if(temp__5457__auto___2340){
var seq__2306_2341__$1 = temp__5457__auto___2340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2306_2341__$1)){
var c__4609__auto___2342 = cljs.core.chunk_first.call(null,seq__2306_2341__$1);
var G__2343 = cljs.core.chunk_rest.call(null,seq__2306_2341__$1);
var G__2344 = c__4609__auto___2342;
var G__2345 = cljs.core.count.call(null,c__4609__auto___2342);
var G__2346 = (0);
seq__2306_2331 = G__2343;
chunk__2307_2332 = G__2344;
count__2308_2333 = G__2345;
i__2309_2334 = G__2346;
continue;
} else {
var n_2347 = cljs.core.first.call(null,seq__2306_2341__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2347);

goog.events.fireListeners(n_2347,evt.type,false,evt);
}


var G__2348 = cljs.core.next.call(null,seq__2306_2341__$1);
var G__2349 = null;
var G__2350 = (0);
var G__2351 = (0);
seq__2306_2331 = G__2348;
chunk__2307_2332 = G__2349;
count__2308_2333 = G__2350;
i__2309_2334 = G__2351;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__4174__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__4174__auto__)){
return o.dispatchEvent;
} else {
return and__4174__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var G__2353 = arguments.length;
switch (G__2353) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
}));

(domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__2354_2371 = cljs.core.seq.call(null,evt_map);
var chunk__2355_2372 = null;
var count__2356_2373 = (0);
var i__2357_2374 = (0);
while(true){
if((i__2357_2374 < count__2356_2373)){
var vec__2364_2375 = cljs.core._nth.call(null,chunk__2355_2372,i__2357_2374);
var k_2376 = cljs.core.nth.call(null,vec__2364_2375,(0),null);
var v_2377 = cljs.core.nth.call(null,vec__2364_2375,(1),null);
(evt[k_2376] = v_2377);


var G__2378 = seq__2354_2371;
var G__2379 = chunk__2355_2372;
var G__2380 = count__2356_2373;
var G__2381 = (i__2357_2374 + (1));
seq__2354_2371 = G__2378;
chunk__2355_2372 = G__2379;
count__2356_2373 = G__2380;
i__2357_2374 = G__2381;
continue;
} else {
var temp__5457__auto___2382 = cljs.core.seq.call(null,seq__2354_2371);
if(temp__5457__auto___2382){
var seq__2354_2383__$1 = temp__5457__auto___2382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2354_2383__$1)){
var c__4609__auto___2384 = cljs.core.chunk_first.call(null,seq__2354_2383__$1);
var G__2385 = cljs.core.chunk_rest.call(null,seq__2354_2383__$1);
var G__2386 = c__4609__auto___2384;
var G__2387 = cljs.core.count.call(null,c__4609__auto___2384);
var G__2388 = (0);
seq__2354_2371 = G__2385;
chunk__2355_2372 = G__2386;
count__2356_2373 = G__2387;
i__2357_2374 = G__2388;
continue;
} else {
var vec__2367_2389 = cljs.core.first.call(null,seq__2354_2383__$1);
var k_2390 = cljs.core.nth.call(null,vec__2367_2389,(0),null);
var v_2391 = cljs.core.nth.call(null,vec__2367_2389,(1),null);
(evt[k_2390] = v_2391);


var G__2392 = cljs.core.next.call(null,seq__2354_2383__$1);
var G__2393 = null;
var G__2394 = (0);
var G__2395 = (0);
seq__2354_2371 = G__2392;
chunk__2355_2372 = G__2393;
count__2356_2373 = G__2394;
i__2357_2374 = G__2395;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
}));

(domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__2396_SHARP_){
return goog.events.getListeners(p1__2396_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
