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
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events2116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events2116 = (function (f,evt,meta2117){
this.f = f;
this.evt = evt;
this.meta2117 = meta2117;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(domina.events.t_domina$events2116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2118,meta2117__$1){
var self__ = this;
var _2118__$1 = this;
return (new domina.events.t_domina$events2116(self__.f,self__.evt,meta2117__$1));
}));

(domina.events.t_domina$events2116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2118){
var self__ = this;
var _2118__$1 = this;
return self__.meta2117;
}));

(domina.events.t_domina$events2116.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL);

(domina.events.t_domina$events2116.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
}));

(domina.events.t_domina$events2116.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
}));

(domina.events.t_domina$events2116.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
}));

(domina.events.t_domina$events2116.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
}));

(domina.events.t_domina$events2116.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
}));

(domina.events.t_domina$events2116.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
}));

(domina.events.t_domina$events2116.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

(domina.events.t_domina$events2116.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4185__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(domina.events.t_domina$events2116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta2117","meta2117",1034602064,null)], null);
}));

(domina.events.t_domina$events2116.cljs$lang$type = true);

(domina.events.t_domina$events2116.cljs$lang$ctorStr = "domina.events/t_domina$events2116");

(domina.events.t_domina$events2116.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"domina.events/t_domina$events2116");
}));

/**
 * Positional factory function for domina.events/t_domina$events2116.
 */
domina.events.__GT_t_domina$events2116 = (function domina$events$create_listener_function_$___GT_t_domina$events2116(f__$1,evt__$1,meta2117){
return (new domina.events.t_domina$events2116(f__$1,evt__$1,meta2117));
});

}

return (new domina.events.t_domina$events2116(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function domina$events$listen_internal_BANG__$_iter__2119(s__2120){
return (new cljs.core.LazySeq(null,(function (){
var s__2120__$1 = s__2120;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2120__$1);
if(temp__5457__auto__){
var s__2120__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2120__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__2120__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__2122 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__2121 = (0);
while(true){
if((i__2121 < size__4581__auto__)){
var node = cljs.core._nth.call(null,c__4580__auto__,i__2121);
cljs.core.chunk_append.call(null,b__2122,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__2123 = (i__2121 + (1));
i__2121 = G__2123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2122),domina$events$listen_internal_BANG__$_iter__2119.call(null,cljs.core.chunk_rest.call(null,s__2120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2122),null);
}
} else {
var node = cljs.core.first.call(null,s__2120__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__2119.call(null,cljs.core.rest.call(null,s__2120__$2)));
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
var G__2125 = arguments.length;
switch (G__2125) {
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
var G__2128 = arguments.length;
switch (G__2128) {
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
var G__2131 = arguments.length;
switch (G__2131) {
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
var G__2134 = arguments.length;
switch (G__2134) {
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
var G__2137 = arguments.length;
switch (G__2137) {
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
var seq__2138 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2139 = null;
var count__2140 = (0);
var i__2141 = (0);
while(true){
if((i__2141 < count__2140)){
var node = cljs.core._nth.call(null,chunk__2139,i__2141);
goog.events.removeAll(node);


var G__2147 = seq__2138;
var G__2148 = chunk__2139;
var G__2149 = count__2140;
var G__2150 = (i__2141 + (1));
seq__2138 = G__2147;
chunk__2139 = G__2148;
count__2140 = G__2149;
i__2141 = G__2150;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2138);
if(temp__5457__auto__){
var seq__2138__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2138__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2138__$1);
var G__2151 = cljs.core.chunk_rest.call(null,seq__2138__$1);
var G__2152 = c__4609__auto__;
var G__2153 = cljs.core.count.call(null,c__4609__auto__);
var G__2154 = (0);
seq__2138 = G__2151;
chunk__2139 = G__2152;
count__2140 = G__2153;
i__2141 = G__2154;
continue;
} else {
var node = cljs.core.first.call(null,seq__2138__$1);
goog.events.removeAll(node);


var G__2155 = cljs.core.next.call(null,seq__2138__$1);
var G__2156 = null;
var G__2157 = (0);
var G__2158 = (0);
seq__2138 = G__2155;
chunk__2139 = G__2156;
count__2140 = G__2157;
i__2141 = G__2158;
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
var seq__2142 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2143 = null;
var count__2144 = (0);
var i__2145 = (0);
while(true){
if((i__2145 < count__2144)){
var node = cljs.core._nth.call(null,chunk__2143,i__2145);
goog.events.removeAll(node,type__$1);


var G__2159 = seq__2142;
var G__2160 = chunk__2143;
var G__2161 = count__2144;
var G__2162 = (i__2145 + (1));
seq__2142 = G__2159;
chunk__2143 = G__2160;
count__2144 = G__2161;
i__2145 = G__2162;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2142);
if(temp__5457__auto__){
var seq__2142__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2142__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2142__$1);
var G__2163 = cljs.core.chunk_rest.call(null,seq__2142__$1);
var G__2164 = c__4609__auto__;
var G__2165 = cljs.core.count.call(null,c__4609__auto__);
var G__2166 = (0);
seq__2142 = G__2163;
chunk__2143 = G__2164;
count__2144 = G__2165;
i__2145 = G__2166;
continue;
} else {
var node = cljs.core.first.call(null,seq__2142__$1);
goog.events.removeAll(node,type__$1);


var G__2167 = cljs.core.next.call(null,seq__2142__$1);
var G__2168 = null;
var G__2169 = (0);
var G__2170 = (0);
seq__2142 = G__2167;
chunk__2143 = G__2168;
count__2144 = G__2169;
i__2145 = G__2170;
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
var G__2172 = arguments.length;
switch (G__2172) {
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
var G__2174 = parent;
var G__2175 = cljs.core.cons.call(null,parent,so_far);
n = G__2174;
so_far = G__2175;
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
var seq__2176_2184 = cljs.core.seq.call(null,ancestors);
var chunk__2177_2185 = null;
var count__2178_2186 = (0);
var i__2179_2187 = (0);
while(true){
if((i__2179_2187 < count__2178_2186)){
var n_2188 = cljs.core._nth.call(null,chunk__2177_2185,i__2179_2187);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2188);

goog.events.fireListeners(n_2188,evt.type,true,evt);
}


var G__2189 = seq__2176_2184;
var G__2190 = chunk__2177_2185;
var G__2191 = count__2178_2186;
var G__2192 = (i__2179_2187 + (1));
seq__2176_2184 = G__2189;
chunk__2177_2185 = G__2190;
count__2178_2186 = G__2191;
i__2179_2187 = G__2192;
continue;
} else {
var temp__5457__auto___2193 = cljs.core.seq.call(null,seq__2176_2184);
if(temp__5457__auto___2193){
var seq__2176_2194__$1 = temp__5457__auto___2193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2176_2194__$1)){
var c__4609__auto___2195 = cljs.core.chunk_first.call(null,seq__2176_2194__$1);
var G__2196 = cljs.core.chunk_rest.call(null,seq__2176_2194__$1);
var G__2197 = c__4609__auto___2195;
var G__2198 = cljs.core.count.call(null,c__4609__auto___2195);
var G__2199 = (0);
seq__2176_2184 = G__2196;
chunk__2177_2185 = G__2197;
count__2178_2186 = G__2198;
i__2179_2187 = G__2199;
continue;
} else {
var n_2200 = cljs.core.first.call(null,seq__2176_2194__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2200);

goog.events.fireListeners(n_2200,evt.type,true,evt);
}


var G__2201 = cljs.core.next.call(null,seq__2176_2194__$1);
var G__2202 = null;
var G__2203 = (0);
var G__2204 = (0);
seq__2176_2184 = G__2201;
chunk__2177_2185 = G__2202;
count__2178_2186 = G__2203;
i__2179_2187 = G__2204;
continue;
}
} else {
}
}
break;
}

var seq__2180_2205 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__2181_2206 = null;
var count__2182_2207 = (0);
var i__2183_2208 = (0);
while(true){
if((i__2183_2208 < count__2182_2207)){
var n_2209 = cljs.core._nth.call(null,chunk__2181_2206,i__2183_2208);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2209);

goog.events.fireListeners(n_2209,evt.type,false,evt);
}


var G__2210 = seq__2180_2205;
var G__2211 = chunk__2181_2206;
var G__2212 = count__2182_2207;
var G__2213 = (i__2183_2208 + (1));
seq__2180_2205 = G__2210;
chunk__2181_2206 = G__2211;
count__2182_2207 = G__2212;
i__2183_2208 = G__2213;
continue;
} else {
var temp__5457__auto___2214 = cljs.core.seq.call(null,seq__2180_2205);
if(temp__5457__auto___2214){
var seq__2180_2215__$1 = temp__5457__auto___2214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2180_2215__$1)){
var c__4609__auto___2216 = cljs.core.chunk_first.call(null,seq__2180_2215__$1);
var G__2217 = cljs.core.chunk_rest.call(null,seq__2180_2215__$1);
var G__2218 = c__4609__auto___2216;
var G__2219 = cljs.core.count.call(null,c__4609__auto___2216);
var G__2220 = (0);
seq__2180_2205 = G__2217;
chunk__2181_2206 = G__2218;
count__2182_2207 = G__2219;
i__2183_2208 = G__2220;
continue;
} else {
var n_2221 = cljs.core.first.call(null,seq__2180_2215__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_2221);

goog.events.fireListeners(n_2221,evt.type,false,evt);
}


var G__2222 = cljs.core.next.call(null,seq__2180_2215__$1);
var G__2223 = null;
var G__2224 = (0);
var G__2225 = (0);
seq__2180_2205 = G__2222;
chunk__2181_2206 = G__2223;
count__2182_2207 = G__2224;
i__2183_2208 = G__2225;
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
var G__2227 = arguments.length;
switch (G__2227) {
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
var seq__2228_2245 = cljs.core.seq.call(null,evt_map);
var chunk__2229_2246 = null;
var count__2230_2247 = (0);
var i__2231_2248 = (0);
while(true){
if((i__2231_2248 < count__2230_2247)){
var vec__2238_2249 = cljs.core._nth.call(null,chunk__2229_2246,i__2231_2248);
var k_2250 = cljs.core.nth.call(null,vec__2238_2249,(0),null);
var v_2251 = cljs.core.nth.call(null,vec__2238_2249,(1),null);
(evt[k_2250] = v_2251);


var G__2252 = seq__2228_2245;
var G__2253 = chunk__2229_2246;
var G__2254 = count__2230_2247;
var G__2255 = (i__2231_2248 + (1));
seq__2228_2245 = G__2252;
chunk__2229_2246 = G__2253;
count__2230_2247 = G__2254;
i__2231_2248 = G__2255;
continue;
} else {
var temp__5457__auto___2256 = cljs.core.seq.call(null,seq__2228_2245);
if(temp__5457__auto___2256){
var seq__2228_2257__$1 = temp__5457__auto___2256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2228_2257__$1)){
var c__4609__auto___2258 = cljs.core.chunk_first.call(null,seq__2228_2257__$1);
var G__2259 = cljs.core.chunk_rest.call(null,seq__2228_2257__$1);
var G__2260 = c__4609__auto___2258;
var G__2261 = cljs.core.count.call(null,c__4609__auto___2258);
var G__2262 = (0);
seq__2228_2245 = G__2259;
chunk__2229_2246 = G__2260;
count__2230_2247 = G__2261;
i__2231_2248 = G__2262;
continue;
} else {
var vec__2241_2263 = cljs.core.first.call(null,seq__2228_2257__$1);
var k_2264 = cljs.core.nth.call(null,vec__2241_2263,(0),null);
var v_2265 = cljs.core.nth.call(null,vec__2241_2263,(1),null);
(evt[k_2264] = v_2265);


var G__2266 = cljs.core.next.call(null,seq__2228_2257__$1);
var G__2267 = null;
var G__2268 = (0);
var G__2269 = (0);
seq__2228_2245 = G__2266;
chunk__2229_2246 = G__2267;
count__2230_2247 = G__2268;
i__2231_2248 = G__2269;
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
return cljs.core.mapcat.call(null,(function (p1__2270_SHARP_){
return goog.events.getListeners(p1__2270_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
