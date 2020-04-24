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
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events2462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events2462 = (function (f,evt,meta2463){
this.f = f;
this.evt = evt;
this.meta2463 = meta2463;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(domina.events.t_domina$events2462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2464,meta2463__$1){
var self__ = this;
var _2464__$1 = this;
return (new domina.events.t_domina$events2462(self__.f,self__.evt,meta2463__$1));
}));

(domina.events.t_domina$events2462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2464){
var self__ = this;
var _2464__$1 = this;
return self__.meta2463;
}));

(domina.events.t_domina$events2462.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL);

(domina.events.t_domina$events2462.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
}));

(domina.events.t_domina$events2462.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
}));

(domina.events.t_domina$events2462.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
}));

(domina.events.t_domina$events2462.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
}));

(domina.events.t_domina$events2462.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
}));

(domina.events.t_domina$events2462.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
}));

(domina.events.t_domina$events2462.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

(domina.events.t_domina$events2462.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4185__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(domina.events.t_domina$events2462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta2463","meta2463",-1230010961,null)], null);
}));

(domina.events.t_domina$events2462.cljs$lang$type = true);

(domina.events.t_domina$events2462.cljs$lang$ctorStr = "domina.events/t_domina$events2462");

(domina.events.t_domina$events2462.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"domina.events/t_domina$events2462");
}));

/**
 * Positional factory function for domina.events/t_domina$events2462.
 */
domina.events.__GT_t_domina$events2462 = (function domina$events$create_listener_function_$___GT_t_domina$events2462(f__$1,evt__$1,meta2463){
return (new domina.events.t_domina$events2462(f__$1,evt__$1,meta2463));
});

}

return (new domina.events.t_domina$events2462(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function domina$events$listen_internal_BANG__$_iter__2465(s__2466){
return (new cljs.core.LazySeq(null,(function (){
var s__2466__$1 = s__2466;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2466__$1);
if(temp__5457__auto__){
var s__2466__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2466__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__2466__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__2468 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__2467 = (0);
while(true){
if((i__2467 < size__4581__auto__)){
var node = cljs.core._nth.call(null,c__4580__auto__,i__2467);
cljs.core.chunk_append.call(null,b__2468,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__2469 = (i__2467 + (1));
i__2467 = G__2469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2468),domina$events$listen_internal_BANG__$_iter__2465.call(null,cljs.core.chunk_rest.call(null,s__2466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2468),null);
}
} else {
var node = cljs.core.first.call(null,s__2466__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__2465.call(null,cljs.core.rest.call(null,s__2466__$2)));
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
var G__2471 = arguments.length;
switch (G__2471) {
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
var G__2474 = arguments.length;
switch (G__2474) {
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
var G__2477 = arguments.length;
switch (G__2477) {
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
var G__2480 = arguments.length;
switch (G__2480) {
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
var G__2483 = arguments.length;
switch (G__2483) {
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
var seq__2484 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2485 = null;
var count__2486 = (0);
var i__2487 = (0);
while(true){
if((i__2487 < count__2486)){
var node = cljs.core._nth.call(null,chunk__2485,i__2487);
goog.events.removeAll(node);


var G__2493 = seq__2484;
var G__2494 = chunk__2485;
var G__2495 = count__2486;
var G__2496 = (i__2487 + (1));
seq__2484 = G__2493;
chunk__2485 = G__2494;
count__2486 = G__2495;
i__2487 = G__2496;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2484);
if(temp__5457__auto__){
var seq__2484__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2484__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2484__$1);
var G__2497 = cljs.core.chunk_rest.call(null,seq__2484__$1);
var G__2498 = c__4609__auto__;
var G__2499 = cljs.core.count.call(null,c__4609__auto__);
var G__2500 = (0);
seq__2484 = G__2497;
chunk__2485 = G__2498;
count__2486 = G__2499;
i__2487 = G__2500;
continue;
} else {
var node = cljs.core.first.call(null,seq__2484__$1);
goog.events.removeAll(node);


var G__2501 = cljs.core.next.call(null,seq__2484__$1);
var G__2502 = null;
var G__2503 = (0);
var G__2504 = (0);
seq__2484 = G__2501;
chunk__2485 = G__2502;
count__2486 = G__2503;
i__2487 = G__2504;
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
var seq__2488 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2489 = null;
var count__2490 = (0);
var i__2491 = (0);
while(true){
if((i__2491 < count__2490)){
var node = cljs.core._nth.call(null,chunk__2489,i__2491);
goog.events.removeAll(node,type__$1);


var G__2505 = seq__2488;
var G__2506 = chunk__2489;
var G__2507 = count__2490;
var G__2508 = (i__2491 + (1));
seq__2488 = G__2505;
chunk__2489 = G__2506;
count__2490 = G__2507;
i__2491 = G__2508;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2488);
if(temp__5457__auto__){
var seq__2488__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2488__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2488__$1);
var G__2509 = cljs.core.chunk_rest.call(null,seq__2488__$1);
var G__2510 = c__4609__auto__;
var G__2511 = cljs.core.count.call(null,c__4609__auto__);
var G__2512 = (0);
seq__2488 = G__2509;
chunk__2489 = G__2510;
count__2490 = G__2511;
i__2491 = G__2512;
continue;
} else {
var node = cljs.core.first.call(null,seq__2488__$1);
goog.events.removeAll(node,type__$1);


var G__2513 = cljs.core.next.call(null,seq__2488__$1);
var G__2514 = null;
var G__2515 = (0);
var G__2516 = (0);
seq__2488 = G__2513;
chunk__2489 = G__2514;
count__2490 = G__2515;
i__2491 = G__2516;
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
var G__2518 = arguments.length;
switch (G__2518) {
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
var G__2520 = parent;
var G__2521 = cljs.core.cons.call(null,parent,so_far);
n = G__2520;
so_far = G__2521;
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
var seq__2522_2530 = cljs.core.seq.call(null,ancestors);
var chunk__2523_2531 = null;
var count__2524_2532 = (0);
var i__2525_2533 = (0);
while(true){
if((i__2525_2533 < count__2524_2532)){
var n_2534 = cljs.core._nth.call(null,chunk__2523_2531,i__2525_2533);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2534);

goog.events.fireListeners(n_2534,evt.type,true,evt);
}


var G__2535 = seq__2522_2530;
var G__2536 = chunk__2523_2531;
var G__2537 = count__2524_2532;
var G__2538 = (i__2525_2533 + (1));
seq__2522_2530 = G__2535;
chunk__2523_2531 = G__2536;
count__2524_2532 = G__2537;
i__2525_2533 = G__2538;
continue;
} else {
var temp__5457__auto___2539 = cljs.core.seq.call(null,seq__2522_2530);
if(temp__5457__auto___2539){
var seq__2522_2540__$1 = temp__5457__auto___2539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2522_2540__$1)){
var c__4609__auto___2541 = cljs.core.chunk_first.call(null,seq__2522_2540__$1);
var G__2542 = cljs.core.chunk_rest.call(null,seq__2522_2540__$1);
var G__2543 = c__4609__auto___2541;
var G__2544 = cljs.core.count.call(null,c__4609__auto___2541);
var G__2545 = (0);
seq__2522_2530 = G__2542;
chunk__2523_2531 = G__2543;
count__2524_2532 = G__2544;
i__2525_2533 = G__2545;
continue;
} else {
var n_2546 = cljs.core.first.call(null,seq__2522_2540__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2546);

goog.events.fireListeners(n_2546,evt.type,true,evt);
}


var G__2547 = cljs.core.next.call(null,seq__2522_2540__$1);
var G__2548 = null;
var G__2549 = (0);
var G__2550 = (0);
seq__2522_2530 = G__2547;
chunk__2523_2531 = G__2548;
count__2524_2532 = G__2549;
i__2525_2533 = G__2550;
continue;
}
} else {
}
}
break;
}

var seq__2526_2551 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__2527_2552 = null;
var count__2528_2553 = (0);
var i__2529_2554 = (0);
while(true){
if((i__2529_2554 < count__2528_2553)){
var n_2555 = cljs.core._nth.call(null,chunk__2527_2552,i__2529_2554);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2555);

goog.events.fireListeners(n_2555,evt.type,false,evt);
}


var G__2556 = seq__2526_2551;
var G__2557 = chunk__2527_2552;
var G__2558 = count__2528_2553;
var G__2559 = (i__2529_2554 + (1));
seq__2526_2551 = G__2556;
chunk__2527_2552 = G__2557;
count__2528_2553 = G__2558;
i__2529_2554 = G__2559;
continue;
} else {
var temp__5457__auto___2560 = cljs.core.seq.call(null,seq__2526_2551);
if(temp__5457__auto___2560){
var seq__2526_2561__$1 = temp__5457__auto___2560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2526_2561__$1)){
var c__4609__auto___2562 = cljs.core.chunk_first.call(null,seq__2526_2561__$1);
var G__2563 = cljs.core.chunk_rest.call(null,seq__2526_2561__$1);
var G__2564 = c__4609__auto___2562;
var G__2565 = cljs.core.count.call(null,c__4609__auto___2562);
var G__2566 = (0);
seq__2526_2551 = G__2563;
chunk__2527_2552 = G__2564;
count__2528_2553 = G__2565;
i__2529_2554 = G__2566;
continue;
} else {
var n_2567 = cljs.core.first.call(null,seq__2526_2561__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2567);

goog.events.fireListeners(n_2567,evt.type,false,evt);
}


var G__2568 = cljs.core.next.call(null,seq__2526_2561__$1);
var G__2569 = null;
var G__2570 = (0);
var G__2571 = (0);
seq__2526_2551 = G__2568;
chunk__2527_2552 = G__2569;
count__2528_2553 = G__2570;
i__2529_2554 = G__2571;
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
var G__2573 = arguments.length;
switch (G__2573) {
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
var seq__2574_2591 = cljs.core.seq.call(null,evt_map);
var chunk__2575_2592 = null;
var count__2576_2593 = (0);
var i__2577_2594 = (0);
while(true){
if((i__2577_2594 < count__2576_2593)){
var vec__2584_2595 = cljs.core._nth.call(null,chunk__2575_2592,i__2577_2594);
var k_2596 = cljs.core.nth.call(null,vec__2584_2595,(0),null);
var v_2597 = cljs.core.nth.call(null,vec__2584_2595,(1),null);
(evt[k_2596] = v_2597);


var G__2598 = seq__2574_2591;
var G__2599 = chunk__2575_2592;
var G__2600 = count__2576_2593;
var G__2601 = (i__2577_2594 + (1));
seq__2574_2591 = G__2598;
chunk__2575_2592 = G__2599;
count__2576_2593 = G__2600;
i__2577_2594 = G__2601;
continue;
} else {
var temp__5457__auto___2602 = cljs.core.seq.call(null,seq__2574_2591);
if(temp__5457__auto___2602){
var seq__2574_2603__$1 = temp__5457__auto___2602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2574_2603__$1)){
var c__4609__auto___2604 = cljs.core.chunk_first.call(null,seq__2574_2603__$1);
var G__2605 = cljs.core.chunk_rest.call(null,seq__2574_2603__$1);
var G__2606 = c__4609__auto___2604;
var G__2607 = cljs.core.count.call(null,c__4609__auto___2604);
var G__2608 = (0);
seq__2574_2591 = G__2605;
chunk__2575_2592 = G__2606;
count__2576_2593 = G__2607;
i__2577_2594 = G__2608;
continue;
} else {
var vec__2587_2609 = cljs.core.first.call(null,seq__2574_2603__$1);
var k_2610 = cljs.core.nth.call(null,vec__2587_2609,(0),null);
var v_2611 = cljs.core.nth.call(null,vec__2587_2609,(1),null);
(evt[k_2610] = v_2611);


var G__2612 = cljs.core.next.call(null,seq__2574_2603__$1);
var G__2613 = null;
var G__2614 = (0);
var G__2615 = (0);
seq__2574_2591 = G__2612;
chunk__2575_2592 = G__2613;
count__2576_2593 = G__2614;
i__2577_2594 = G__2615;
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
return cljs.core.mapcat.call(null,(function (p1__2616_SHARP_){
return goog.events.getListeners(p1__2616_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
