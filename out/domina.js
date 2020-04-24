// Compiled by ClojureScript 1.10.597 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_2024 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_2025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_2026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_2026,opt_wrapper_2024,table_section_wrapper_2025,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_2024,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_2025,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_2025,cell_wrapper_2026,table_section_wrapper_2025,table_section_wrapper_2025]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4174__auto__ = div.firstChild;
if(cljs.core.truth_(and__4174__auto__)){
return div.firstChild.childNodes;
} else {
return and__4174__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__2027 = cljs.core.seq.call(null,tbody);
var chunk__2028 = null;
var count__2029 = (0);
var i__2030 = (0);
while(true){
if((i__2030 < count__2029)){
var child = cljs.core._nth.call(null,chunk__2028,i__2030);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__2031 = seq__2027;
var G__2032 = chunk__2028;
var G__2033 = count__2029;
var G__2034 = (i__2030 + (1));
seq__2027 = G__2031;
chunk__2028 = G__2032;
count__2029 = G__2033;
i__2030 = G__2034;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2027);
if(temp__5457__auto__){
var seq__2027__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2027__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__2027__$1);
var G__2035 = cljs.core.chunk_rest.call(null,seq__2027__$1);
var G__2036 = c__4609__auto__;
var G__2037 = cljs.core.count.call(null,c__4609__auto__);
var G__2038 = (0);
seq__2027 = G__2035;
chunk__2028 = G__2036;
count__2029 = G__2037;
i__2030 = G__2038;
continue;
} else {
var child = cljs.core.first.call(null,seq__2027__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__2039 = cljs.core.next.call(null,seq__2027__$1);
var G__2040 = null;
var G__2041 = (0);
var G__2042 = (0);
seq__2027 = G__2039;
chunk__2028 = G__2040;
count__2029 = G__2041;
i__2030 = G__2042;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1))).toLowerCase();
var vec__2043 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__2043,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__2043,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__2043,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
(div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),html__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join(''));

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__2046 = wrapper.lastChild;
var G__2047 = (level - (1));
wrapper = G__2046;
level = G__2047;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((((!(domina.support.leading_whitespace_QMARK_)))?cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1):false))){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((((!((content == null)))) && ((!((content.domina$DomContent$nodes$arity$1 == null)))))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4487__auto__ = (((content == null))?null:content);
var m__4488__auto__ = (domina.nodes[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,content);
} else {
var m__4485__auto__ = (domina.nodes["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((((!((nodeseq == null)))) && ((!((nodeseq.domina$DomContent$single_node$arity$1 == null)))))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4487__auto__ = (((nodeseq == null))?null:nodeseq);
var m__4488__auto__ = (domina.single_node[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,nodeseq);
} else {
var m__4485__auto__ = (domina.single_node["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__4795__auto__ = [];
var len__4789__auto___2049 = arguments.length;
var i__4790__auto___2050 = (0);
while(true){
if((i__4790__auto___2050 < len__4789__auto___2049)){
args__4795__auto__.push((arguments[i__4790__auto___2050]));

var G__2051 = (i__4790__auto___2050 + (1));
i__4790__auto___2050 = G__2051;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(((domina._STAR_debug_STAR_) && ((!(cljs.core._EQ_.call(null,window.console,undefined)))))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
}));

(domina.log_debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.log_debug.cljs$lang$applyTo = (function (seq2048){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2048));
}));

domina.log = (function domina$log(var_args){
var args__4795__auto__ = [];
var len__4789__auto___2053 = arguments.length;
var i__4790__auto___2054 = (0);
while(true){
if((i__4790__auto___2054 < len__4789__auto___2053)){
args__4795__auto__.push((arguments[i__4790__auto___2054]));

var G__2055 = (i__4790__auto___2054 + (1));
i__4790__auto___2054 = G__2055;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
}));

(domina.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.log.cljs$lang$applyTo = (function (seq2052){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2052));
}));

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__4795__auto__ = [];
var len__4789__auto___2057 = arguments.length;
var i__4790__auto___2058 = (0);
while(true){
if((i__4790__auto___2058 < len__4789__auto___2057)){
args__4795__auto__.push((arguments[i__4790__auto___2058]));

var G__2059 = (i__4790__auto___2058 + (1));
i__4790__auto___2058 = G__2059;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
}));

(domina.common_ancestor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.common_ancestor.cljs$lang$applyTo = (function (seq2056){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2056));
}));

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__2060_SHARP_){
return p1__2060_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__2061_SHARP_,p2__2062_SHARP_){
return goog.dom.insertChildAt(p1__2061_SHARP_,p2__2062_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2064_SHARP_,p2__2063_SHARP_){
return goog.dom.insertSiblingBefore(p2__2063_SHARP_,p1__2064_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2066_SHARP_,p2__2065_SHARP_){
return goog.dom.insertSiblingAfter(p2__2065_SHARP_,p1__2066_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2068_SHARP_,p2__2067_SHARP_){
return goog.dom.replaceNode(p2__2067_SHARP_,p1__2068_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___2076 = arguments.length;
var i__4790__auto___2077 = (0);
while(true){
if((i__4790__auto___2077 < len__4789__auto___2076)){
args__4795__auto__.push((arguments[i__4790__auto___2077]));

var G__2078 = (i__4790__auto___2077 + (1));
i__4790__auto___2077 = G__2078;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__2072_2079 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2073_2080 = null;
var count__2074_2081 = (0);
var i__2075_2082 = (0);
while(true){
if((i__2075_2082 < count__2074_2081)){
var n_2083 = cljs.core._nth.call(null,chunk__2073_2080,i__2075_2082);
goog.style.setStyle(n_2083,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2084 = seq__2072_2079;
var G__2085 = chunk__2073_2080;
var G__2086 = count__2074_2081;
var G__2087 = (i__2075_2082 + (1));
seq__2072_2079 = G__2084;
chunk__2073_2080 = G__2085;
count__2074_2081 = G__2086;
i__2075_2082 = G__2087;
continue;
} else {
var temp__5457__auto___2088 = cljs.core.seq.call(null,seq__2072_2079);
if(temp__5457__auto___2088){
var seq__2072_2089__$1 = temp__5457__auto___2088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2072_2089__$1)){
var c__4609__auto___2090 = cljs.core.chunk_first.call(null,seq__2072_2089__$1);
var G__2091 = cljs.core.chunk_rest.call(null,seq__2072_2089__$1);
var G__2092 = c__4609__auto___2090;
var G__2093 = cljs.core.count.call(null,c__4609__auto___2090);
var G__2094 = (0);
seq__2072_2079 = G__2091;
chunk__2073_2080 = G__2092;
count__2074_2081 = G__2093;
i__2075_2082 = G__2094;
continue;
} else {
var n_2095 = cljs.core.first.call(null,seq__2072_2089__$1);
goog.style.setStyle(n_2095,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2096 = cljs.core.next.call(null,seq__2072_2089__$1);
var G__2097 = null;
var G__2098 = (0);
var G__2099 = (0);
seq__2072_2079 = G__2096;
chunk__2073_2080 = G__2097;
count__2074_2081 = G__2098;
i__2075_2082 = G__2099;
continue;
}
} else {
}
}
break;
}

return content;
}));

(domina.set_style_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(domina.set_style_BANG_.cljs$lang$applyTo = (function (seq2069){
var G__2070 = cljs.core.first.call(null,seq2069);
var seq2069__$1 = cljs.core.next.call(null,seq2069);
var G__2071 = cljs.core.first.call(null,seq2069__$1);
var seq2069__$2 = cljs.core.next.call(null,seq2069__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2070,G__2071,seq2069__$2);
}));

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___2107 = arguments.length;
var i__4790__auto___2108 = (0);
while(true){
if((i__4790__auto___2108 < len__4789__auto___2107)){
args__4795__auto__.push((arguments[i__4790__auto___2108]));

var G__2109 = (i__4790__auto___2108 + (1));
i__4790__auto___2108 = G__2109;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__2103_2110 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2104_2111 = null;
var count__2105_2112 = (0);
var i__2106_2113 = (0);
while(true){
if((i__2106_2113 < count__2105_2112)){
var n_2114 = cljs.core._nth.call(null,chunk__2104_2111,i__2106_2113);
n_2114.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2115 = seq__2103_2110;
var G__2116 = chunk__2104_2111;
var G__2117 = count__2105_2112;
var G__2118 = (i__2106_2113 + (1));
seq__2103_2110 = G__2115;
chunk__2104_2111 = G__2116;
count__2105_2112 = G__2117;
i__2106_2113 = G__2118;
continue;
} else {
var temp__5457__auto___2119 = cljs.core.seq.call(null,seq__2103_2110);
if(temp__5457__auto___2119){
var seq__2103_2120__$1 = temp__5457__auto___2119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2103_2120__$1)){
var c__4609__auto___2121 = cljs.core.chunk_first.call(null,seq__2103_2120__$1);
var G__2122 = cljs.core.chunk_rest.call(null,seq__2103_2120__$1);
var G__2123 = c__4609__auto___2121;
var G__2124 = cljs.core.count.call(null,c__4609__auto___2121);
var G__2125 = (0);
seq__2103_2110 = G__2122;
chunk__2104_2111 = G__2123;
count__2105_2112 = G__2124;
i__2106_2113 = G__2125;
continue;
} else {
var n_2126 = cljs.core.first.call(null,seq__2103_2120__$1);
n_2126.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__2127 = cljs.core.next.call(null,seq__2103_2120__$1);
var G__2128 = null;
var G__2129 = (0);
var G__2130 = (0);
seq__2103_2110 = G__2127;
chunk__2104_2111 = G__2128;
count__2105_2112 = G__2129;
i__2106_2113 = G__2130;
continue;
}
} else {
}
}
break;
}

return content;
}));

(domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq2100){
var G__2101 = cljs.core.first.call(null,seq2100);
var seq2100__$1 = cljs.core.next.call(null,seq2100);
var G__2102 = cljs.core.first.call(null,seq2100__$1);
var seq2100__$2 = cljs.core.next.call(null,seq2100__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2101,G__2102,seq2100__$2);
}));

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__2131_2135 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2132_2136 = null;
var count__2133_2137 = (0);
var i__2134_2138 = (0);
while(true){
if((i__2134_2138 < count__2133_2137)){
var n_2139 = cljs.core._nth.call(null,chunk__2132_2136,i__2134_2138);
n_2139.removeAttribute(cljs.core.name.call(null,name));


var G__2140 = seq__2131_2135;
var G__2141 = chunk__2132_2136;
var G__2142 = count__2133_2137;
var G__2143 = (i__2134_2138 + (1));
seq__2131_2135 = G__2140;
chunk__2132_2136 = G__2141;
count__2133_2137 = G__2142;
i__2134_2138 = G__2143;
continue;
} else {
var temp__5457__auto___2144 = cljs.core.seq.call(null,seq__2131_2135);
if(temp__5457__auto___2144){
var seq__2131_2145__$1 = temp__5457__auto___2144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2131_2145__$1)){
var c__4609__auto___2146 = cljs.core.chunk_first.call(null,seq__2131_2145__$1);
var G__2147 = cljs.core.chunk_rest.call(null,seq__2131_2145__$1);
var G__2148 = c__4609__auto___2146;
var G__2149 = cljs.core.count.call(null,c__4609__auto___2146);
var G__2150 = (0);
seq__2131_2135 = G__2147;
chunk__2132_2136 = G__2148;
count__2133_2137 = G__2149;
i__2134_2138 = G__2150;
continue;
} else {
var n_2151 = cljs.core.first.call(null,seq__2131_2145__$1);
n_2151.removeAttribute(cljs.core.name.call(null,name));


var G__2152 = cljs.core.next.call(null,seq__2131_2145__$1);
var G__2153 = null;
var G__2154 = (0);
var G__2155 = (0);
seq__2131_2135 = G__2152;
chunk__2132_2136 = G__2153;
count__2133_2137 = G__2154;
i__2134_2138 = G__2155;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__2156 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__2156,(0),null);
var v = cljs.core.nth.call(null,vec__2156,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = k;
if(cljs.core.truth_(and__4174__auto__)){
return v;
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__2159_SHARP_){
var attr = attrs.item(p1__2159_SHARP_);
var value = attr.nodeValue;
if(((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
}),cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__2160_2176 = cljs.core.seq.call(null,styles);
var chunk__2161_2177 = null;
var count__2162_2178 = (0);
var i__2163_2179 = (0);
while(true){
if((i__2163_2179 < count__2162_2178)){
var vec__2170_2180 = cljs.core._nth.call(null,chunk__2161_2177,i__2163_2179);
var name_2181 = cljs.core.nth.call(null,vec__2170_2180,(0),null);
var value_2182 = cljs.core.nth.call(null,vec__2170_2180,(1),null);
domina.set_style_BANG_.call(null,content,name_2181,value_2182);


var G__2183 = seq__2160_2176;
var G__2184 = chunk__2161_2177;
var G__2185 = count__2162_2178;
var G__2186 = (i__2163_2179 + (1));
seq__2160_2176 = G__2183;
chunk__2161_2177 = G__2184;
count__2162_2178 = G__2185;
i__2163_2179 = G__2186;
continue;
} else {
var temp__5457__auto___2187 = cljs.core.seq.call(null,seq__2160_2176);
if(temp__5457__auto___2187){
var seq__2160_2188__$1 = temp__5457__auto___2187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2160_2188__$1)){
var c__4609__auto___2189 = cljs.core.chunk_first.call(null,seq__2160_2188__$1);
var G__2190 = cljs.core.chunk_rest.call(null,seq__2160_2188__$1);
var G__2191 = c__4609__auto___2189;
var G__2192 = cljs.core.count.call(null,c__4609__auto___2189);
var G__2193 = (0);
seq__2160_2176 = G__2190;
chunk__2161_2177 = G__2191;
count__2162_2178 = G__2192;
i__2163_2179 = G__2193;
continue;
} else {
var vec__2173_2194 = cljs.core.first.call(null,seq__2160_2188__$1);
var name_2195 = cljs.core.nth.call(null,vec__2173_2194,(0),null);
var value_2196 = cljs.core.nth.call(null,vec__2173_2194,(1),null);
domina.set_style_BANG_.call(null,content,name_2195,value_2196);


var G__2197 = cljs.core.next.call(null,seq__2160_2188__$1);
var G__2198 = null;
var G__2199 = (0);
var G__2200 = (0);
seq__2160_2176 = G__2197;
chunk__2161_2177 = G__2198;
count__2162_2178 = G__2199;
i__2163_2179 = G__2200;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__2201_2217 = cljs.core.seq.call(null,attrs);
var chunk__2202_2218 = null;
var count__2203_2219 = (0);
var i__2204_2220 = (0);
while(true){
if((i__2204_2220 < count__2203_2219)){
var vec__2211_2221 = cljs.core._nth.call(null,chunk__2202_2218,i__2204_2220);
var name_2222 = cljs.core.nth.call(null,vec__2211_2221,(0),null);
var value_2223 = cljs.core.nth.call(null,vec__2211_2221,(1),null);
domina.set_attr_BANG_.call(null,content,name_2222,value_2223);


var G__2224 = seq__2201_2217;
var G__2225 = chunk__2202_2218;
var G__2226 = count__2203_2219;
var G__2227 = (i__2204_2220 + (1));
seq__2201_2217 = G__2224;
chunk__2202_2218 = G__2225;
count__2203_2219 = G__2226;
i__2204_2220 = G__2227;
continue;
} else {
var temp__5457__auto___2228 = cljs.core.seq.call(null,seq__2201_2217);
if(temp__5457__auto___2228){
var seq__2201_2229__$1 = temp__5457__auto___2228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2201_2229__$1)){
var c__4609__auto___2230 = cljs.core.chunk_first.call(null,seq__2201_2229__$1);
var G__2231 = cljs.core.chunk_rest.call(null,seq__2201_2229__$1);
var G__2232 = c__4609__auto___2230;
var G__2233 = cljs.core.count.call(null,c__4609__auto___2230);
var G__2234 = (0);
seq__2201_2217 = G__2231;
chunk__2202_2218 = G__2232;
count__2203_2219 = G__2233;
i__2204_2220 = G__2234;
continue;
} else {
var vec__2214_2235 = cljs.core.first.call(null,seq__2201_2229__$1);
var name_2236 = cljs.core.nth.call(null,vec__2214_2235,(0),null);
var value_2237 = cljs.core.nth.call(null,vec__2214_2235,(1),null);
domina.set_attr_BANG_.call(null,content,name_2236,value_2237);


var G__2238 = cljs.core.next.call(null,seq__2201_2229__$1);
var G__2239 = null;
var G__2240 = (0);
var G__2241 = (0);
seq__2201_2217 = G__2238;
chunk__2202_2218 = G__2239;
count__2203_2219 = G__2240;
i__2204_2220 = G__2241;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__2242_2246 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2243_2247 = null;
var count__2244_2248 = (0);
var i__2245_2249 = (0);
while(true){
if((i__2245_2249 < count__2244_2248)){
var node_2250 = cljs.core._nth.call(null,chunk__2243_2247,i__2245_2249);
goog.dom.classes.add(node_2250,class$);


var G__2251 = seq__2242_2246;
var G__2252 = chunk__2243_2247;
var G__2253 = count__2244_2248;
var G__2254 = (i__2245_2249 + (1));
seq__2242_2246 = G__2251;
chunk__2243_2247 = G__2252;
count__2244_2248 = G__2253;
i__2245_2249 = G__2254;
continue;
} else {
var temp__5457__auto___2255 = cljs.core.seq.call(null,seq__2242_2246);
if(temp__5457__auto___2255){
var seq__2242_2256__$1 = temp__5457__auto___2255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2242_2256__$1)){
var c__4609__auto___2257 = cljs.core.chunk_first.call(null,seq__2242_2256__$1);
var G__2258 = cljs.core.chunk_rest.call(null,seq__2242_2256__$1);
var G__2259 = c__4609__auto___2257;
var G__2260 = cljs.core.count.call(null,c__4609__auto___2257);
var G__2261 = (0);
seq__2242_2246 = G__2258;
chunk__2243_2247 = G__2259;
count__2244_2248 = G__2260;
i__2245_2249 = G__2261;
continue;
} else {
var node_2262 = cljs.core.first.call(null,seq__2242_2256__$1);
goog.dom.classes.add(node_2262,class$);


var G__2263 = cljs.core.next.call(null,seq__2242_2256__$1);
var G__2264 = null;
var G__2265 = (0);
var G__2266 = (0);
seq__2242_2246 = G__2263;
chunk__2243_2247 = G__2264;
count__2244_2248 = G__2265;
i__2245_2249 = G__2266;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__2267_2271 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2268_2272 = null;
var count__2269_2273 = (0);
var i__2270_2274 = (0);
while(true){
if((i__2270_2274 < count__2269_2273)){
var node_2275 = cljs.core._nth.call(null,chunk__2268_2272,i__2270_2274);
goog.dom.classes.remove(node_2275,class$);


var G__2276 = seq__2267_2271;
var G__2277 = chunk__2268_2272;
var G__2278 = count__2269_2273;
var G__2279 = (i__2270_2274 + (1));
seq__2267_2271 = G__2276;
chunk__2268_2272 = G__2277;
count__2269_2273 = G__2278;
i__2270_2274 = G__2279;
continue;
} else {
var temp__5457__auto___2280 = cljs.core.seq.call(null,seq__2267_2271);
if(temp__5457__auto___2280){
var seq__2267_2281__$1 = temp__5457__auto___2280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2267_2281__$1)){
var c__4609__auto___2282 = cljs.core.chunk_first.call(null,seq__2267_2281__$1);
var G__2283 = cljs.core.chunk_rest.call(null,seq__2267_2281__$1);
var G__2284 = c__4609__auto___2282;
var G__2285 = cljs.core.count.call(null,c__4609__auto___2282);
var G__2286 = (0);
seq__2267_2271 = G__2283;
chunk__2268_2272 = G__2284;
count__2269_2273 = G__2285;
i__2270_2274 = G__2286;
continue;
} else {
var node_2287 = cljs.core.first.call(null,seq__2267_2281__$1);
goog.dom.classes.remove(node_2287,class$);


var G__2288 = cljs.core.next.call(null,seq__2267_2281__$1);
var G__2289 = null;
var G__2290 = (0);
var G__2291 = (0);
seq__2267_2271 = G__2288;
chunk__2268_2272 = G__2289;
count__2269_2273 = G__2290;
i__2270_2274 = G__2291;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__2292_2296 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2293_2297 = null;
var count__2294_2298 = (0);
var i__2295_2299 = (0);
while(true){
if((i__2295_2299 < count__2294_2298)){
var node_2300 = cljs.core._nth.call(null,chunk__2293_2297,i__2295_2299);
goog.dom.classes.toggle(node_2300,class$);


var G__2301 = seq__2292_2296;
var G__2302 = chunk__2293_2297;
var G__2303 = count__2294_2298;
var G__2304 = (i__2295_2299 + (1));
seq__2292_2296 = G__2301;
chunk__2293_2297 = G__2302;
count__2294_2298 = G__2303;
i__2295_2299 = G__2304;
continue;
} else {
var temp__5457__auto___2305 = cljs.core.seq.call(null,seq__2292_2296);
if(temp__5457__auto___2305){
var seq__2292_2306__$1 = temp__5457__auto___2305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2292_2306__$1)){
var c__4609__auto___2307 = cljs.core.chunk_first.call(null,seq__2292_2306__$1);
var G__2308 = cljs.core.chunk_rest.call(null,seq__2292_2306__$1);
var G__2309 = c__4609__auto___2307;
var G__2310 = cljs.core.count.call(null,c__4609__auto___2307);
var G__2311 = (0);
seq__2292_2296 = G__2308;
chunk__2293_2297 = G__2309;
count__2294_2298 = G__2310;
i__2295_2299 = G__2311;
continue;
} else {
var node_2312 = cljs.core.first.call(null,seq__2292_2306__$1);
goog.dom.classes.toggle(node_2312,class$);


var G__2313 = cljs.core.next.call(null,seq__2292_2306__$1);
var G__2314 = null;
var G__2315 = (0);
var G__2316 = (0);
seq__2292_2296 = G__2313;
chunk__2293_2297 = G__2314;
count__2294_2298 = G__2315;
i__2295_2299 = G__2316;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_2321__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__2317_2322 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2318_2323 = null;
var count__2319_2324 = (0);
var i__2320_2325 = (0);
while(true){
if((i__2320_2325 < count__2319_2324)){
var node_2326 = cljs.core._nth.call(null,chunk__2318_2323,i__2320_2325);
goog.dom.classes.set(node_2326,classes_2321__$1);


var G__2327 = seq__2317_2322;
var G__2328 = chunk__2318_2323;
var G__2329 = count__2319_2324;
var G__2330 = (i__2320_2325 + (1));
seq__2317_2322 = G__2327;
chunk__2318_2323 = G__2328;
count__2319_2324 = G__2329;
i__2320_2325 = G__2330;
continue;
} else {
var temp__5457__auto___2331 = cljs.core.seq.call(null,seq__2317_2322);
if(temp__5457__auto___2331){
var seq__2317_2332__$1 = temp__5457__auto___2331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2317_2332__$1)){
var c__4609__auto___2333 = cljs.core.chunk_first.call(null,seq__2317_2332__$1);
var G__2334 = cljs.core.chunk_rest.call(null,seq__2317_2332__$1);
var G__2335 = c__4609__auto___2333;
var G__2336 = cljs.core.count.call(null,c__4609__auto___2333);
var G__2337 = (0);
seq__2317_2322 = G__2334;
chunk__2318_2323 = G__2335;
count__2319_2324 = G__2336;
i__2320_2325 = G__2337;
continue;
} else {
var node_2338 = cljs.core.first.call(null,seq__2317_2332__$1);
goog.dom.classes.set(node_2338,classes_2321__$1);


var G__2339 = cljs.core.next.call(null,seq__2317_2332__$1);
var G__2340 = null;
var G__2341 = (0);
var G__2342 = (0);
seq__2317_2322 = G__2339;
chunk__2318_2323 = G__2340;
count__2319_2324 = G__2341;
i__2320_2325 = G__2342;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__2343_2347 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2344_2348 = null;
var count__2345_2349 = (0);
var i__2346_2350 = (0);
while(true){
if((i__2346_2350 < count__2345_2349)){
var node_2351 = cljs.core._nth.call(null,chunk__2344_2348,i__2346_2350);
goog.dom.setTextContent(node_2351,value);


var G__2352 = seq__2343_2347;
var G__2353 = chunk__2344_2348;
var G__2354 = count__2345_2349;
var G__2355 = (i__2346_2350 + (1));
seq__2343_2347 = G__2352;
chunk__2344_2348 = G__2353;
count__2345_2349 = G__2354;
i__2346_2350 = G__2355;
continue;
} else {
var temp__5457__auto___2356 = cljs.core.seq.call(null,seq__2343_2347);
if(temp__5457__auto___2356){
var seq__2343_2357__$1 = temp__5457__auto___2356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2343_2357__$1)){
var c__4609__auto___2358 = cljs.core.chunk_first.call(null,seq__2343_2357__$1);
var G__2359 = cljs.core.chunk_rest.call(null,seq__2343_2357__$1);
var G__2360 = c__4609__auto___2358;
var G__2361 = cljs.core.count.call(null,c__4609__auto___2358);
var G__2362 = (0);
seq__2343_2347 = G__2359;
chunk__2344_2348 = G__2360;
count__2345_2349 = G__2361;
i__2346_2350 = G__2362;
continue;
} else {
var node_2363 = cljs.core.first.call(null,seq__2343_2357__$1);
goog.dom.setTextContent(node_2363,value);


var G__2364 = cljs.core.next.call(null,seq__2343_2357__$1);
var G__2365 = null;
var G__2366 = (0);
var G__2367 = (0);
seq__2343_2347 = G__2364;
chunk__2344_2348 = G__2365;
count__2345_2349 = G__2366;
i__2346_2350 = G__2367;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__2368_2372 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2369_2373 = null;
var count__2370_2374 = (0);
var i__2371_2375 = (0);
while(true){
if((i__2371_2375 < count__2370_2374)){
var node_2376 = cljs.core._nth.call(null,chunk__2369_2373,i__2371_2375);
goog.dom.forms.setValue(node_2376,value);


var G__2377 = seq__2368_2372;
var G__2378 = chunk__2369_2373;
var G__2379 = count__2370_2374;
var G__2380 = (i__2371_2375 + (1));
seq__2368_2372 = G__2377;
chunk__2369_2373 = G__2378;
count__2370_2374 = G__2379;
i__2371_2375 = G__2380;
continue;
} else {
var temp__5457__auto___2381 = cljs.core.seq.call(null,seq__2368_2372);
if(temp__5457__auto___2381){
var seq__2368_2382__$1 = temp__5457__auto___2381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2368_2382__$1)){
var c__4609__auto___2383 = cljs.core.chunk_first.call(null,seq__2368_2382__$1);
var G__2384 = cljs.core.chunk_rest.call(null,seq__2368_2382__$1);
var G__2385 = c__4609__auto___2383;
var G__2386 = cljs.core.count.call(null,c__4609__auto___2383);
var G__2387 = (0);
seq__2368_2372 = G__2384;
chunk__2369_2373 = G__2385;
count__2370_2374 = G__2386;
i__2371_2375 = G__2387;
continue;
} else {
var node_2388 = cljs.core.first.call(null,seq__2368_2382__$1);
goog.dom.forms.setValue(node_2388,value);


var G__2389 = cljs.core.next.call(null,seq__2368_2382__$1);
var G__2390 = null;
var G__2391 = (0);
var G__2392 = (0);
seq__2368_2372 = G__2389;
chunk__2369_2373 = G__2390;
count__2370_2374 = G__2391;
i__2371_2375 = G__2392;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(((allows_inner_html_QMARK_) && (((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_)))) && ((!(special_tag_QMARK_))))){
var value_2398 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__2394_2399 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2395_2400 = null;
var count__2396_2401 = (0);
var i__2397_2402 = (0);
while(true){
if((i__2397_2402 < count__2396_2401)){
var node_2403 = cljs.core._nth.call(null,chunk__2395_2400,i__2397_2402);
(node_2403.innerHTML = value_2398);


var G__2404 = seq__2394_2399;
var G__2405 = chunk__2395_2400;
var G__2406 = count__2396_2401;
var G__2407 = (i__2397_2402 + (1));
seq__2394_2399 = G__2404;
chunk__2395_2400 = G__2405;
count__2396_2401 = G__2406;
i__2397_2402 = G__2407;
continue;
} else {
var temp__5457__auto___2408 = cljs.core.seq.call(null,seq__2394_2399);
if(temp__5457__auto___2408){
var seq__2394_2409__$1 = temp__5457__auto___2408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2394_2409__$1)){
var c__4609__auto___2410 = cljs.core.chunk_first.call(null,seq__2394_2409__$1);
var G__2411 = cljs.core.chunk_rest.call(null,seq__2394_2409__$1);
var G__2412 = c__4609__auto___2410;
var G__2413 = cljs.core.count.call(null,c__4609__auto___2410);
var G__2414 = (0);
seq__2394_2399 = G__2411;
chunk__2395_2400 = G__2412;
count__2396_2401 = G__2413;
i__2397_2402 = G__2414;
continue;
} else {
var node_2415 = cljs.core.first.call(null,seq__2394_2409__$1);
(node_2415.innerHTML = value_2398);


var G__2416 = cljs.core.next.call(null,seq__2394_2409__$1);
var G__2417 = null;
var G__2418 = (0);
var G__2419 = (0);
seq__2394_2399 = G__2416;
chunk__2395_2400 = G__2417;
count__2396_2401 = G__2418;
i__2397_2402 = G__2419;
continue;
}
} else {
}
}
break;
}
}catch (e2393){if((e2393 instanceof Error)){
var e_2420 = e2393;
domina.replace_children_BANG_.call(null,content,value_2398);
} else {
throw e2393;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__2422 = arguments.length;
switch (G__2422) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
}));

(domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4174__auto__ = bubble;
if(cljs.core.truth_(and__4174__auto__)){
return (value == null);
} else {
return and__4174__auto__;
}
})())){
var temp__5457__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
}));

(domina.get_data.cljs$lang$maxFixedArity = 3);

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__4185__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value));
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__2426_2430 = cljs.core.seq.call(null,children);
var chunk__2427_2431 = null;
var count__2428_2432 = (0);
var i__2429_2433 = (0);
while(true){
if((i__2429_2433 < count__2428_2432)){
var child_2434 = cljs.core._nth.call(null,chunk__2427_2431,i__2429_2433);
frag.appendChild(child_2434);


var G__2435 = seq__2426_2430;
var G__2436 = chunk__2427_2431;
var G__2437 = count__2428_2432;
var G__2438 = (i__2429_2433 + (1));
seq__2426_2430 = G__2435;
chunk__2427_2431 = G__2436;
count__2428_2432 = G__2437;
i__2429_2433 = G__2438;
continue;
} else {
var temp__5457__auto___2439 = cljs.core.seq.call(null,seq__2426_2430);
if(temp__5457__auto___2439){
var seq__2426_2440__$1 = temp__5457__auto___2439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2426_2440__$1)){
var c__4609__auto___2441 = cljs.core.chunk_first.call(null,seq__2426_2440__$1);
var G__2442 = cljs.core.chunk_rest.call(null,seq__2426_2440__$1);
var G__2443 = c__4609__auto___2441;
var G__2444 = cljs.core.count.call(null,c__4609__auto___2441);
var G__2445 = (0);
seq__2426_2430 = G__2442;
chunk__2427_2431 = G__2443;
count__2428_2432 = G__2444;
i__2429_2433 = G__2445;
continue;
} else {
var child_2446 = cljs.core.first.call(null,seq__2426_2440__$1);
frag.appendChild(child_2446);


var G__2447 = cljs.core.next.call(null,seq__2426_2440__$1);
var G__2448 = null;
var G__2449 = (0);
var G__2450 = (0);
seq__2426_2430 = G__2447;
chunk__2427_2431 = G__2448;
count__2428_2432 = G__2449;
i__2429_2433 = G__2450;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),(function (){
return first_child.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2424_SHARP_,p2__2425_SHARP_){
return f.call(null,p1__2424_SHARP_,p2__2425_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__2452 = arguments.length;
switch (G__2452) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
}));

(domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
}));

(domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2);

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__2455 = arguments.length;
switch (G__2455) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
}));

(domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
}));

(domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2);

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__4174__auto__ = obj;
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core.not.call(null,obj.nodeName)){
return obj.length;
} else {
return false;
}
} else {
return and__4174__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((list_thing == null))))?(((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$))))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.DomContent,"string",true);

goog.object.set(domina.nodes,"string",(function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

goog.object.set(domina.single_node,"string",(function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

goog.object.set(domina.DomContent,"_",true);

goog.object.set(domina.nodes,"_",(function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

goog.object.set(domina.single_node,"_",(function (content){
if((content == null)){
return null;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
(NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
}));

(NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
}));

(NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
}));

(NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
}));
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
(StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
}));

(StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
}));

(StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
}));

(StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
}));
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
(HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
}));

(HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
}));

(HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
}));

(HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
}));
} else {
}

//# sourceMappingURL=domina.js.map
