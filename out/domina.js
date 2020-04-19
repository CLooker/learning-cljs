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
var opt_wrapper_1678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_1679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_1680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_1680,opt_wrapper_1678,table_section_wrapper_1679,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_1678,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_1679,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_1679,cell_wrapper_1680,table_section_wrapper_1679,table_section_wrapper_1679]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4174__auto__ = div.firstChild;
if(cljs.core.truth_(and__4174__auto__)){
return div.firstChild.childNodes;
} else {
return and__4174__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__1681 = cljs.core.seq.call(null,tbody);
var chunk__1682 = null;
var count__1683 = (0);
var i__1684 = (0);
while(true){
if((i__1684 < count__1683)){
var child = cljs.core._nth.call(null,chunk__1682,i__1684);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__1685 = seq__1681;
var G__1686 = chunk__1682;
var G__1687 = count__1683;
var G__1688 = (i__1684 + (1));
seq__1681 = G__1685;
chunk__1682 = G__1686;
count__1683 = G__1687;
i__1684 = G__1688;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__1681);
if(temp__5457__auto__){
var seq__1681__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1681__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__1681__$1);
var G__1689 = cljs.core.chunk_rest.call(null,seq__1681__$1);
var G__1690 = c__4609__auto__;
var G__1691 = cljs.core.count.call(null,c__4609__auto__);
var G__1692 = (0);
seq__1681 = G__1689;
chunk__1682 = G__1690;
count__1683 = G__1691;
i__1684 = G__1692;
continue;
} else {
var child = cljs.core.first.call(null,seq__1681__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__1693 = cljs.core.next.call(null,seq__1681__$1);
var G__1694 = null;
var G__1695 = (0);
var G__1696 = (0);
seq__1681 = G__1693;
chunk__1682 = G__1694;
count__1683 = G__1695;
i__1684 = G__1696;
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
var vec__1697 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__1697,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__1697,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__1697,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
(div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),html__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join(''));

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__1700 = wrapper.lastChild;
var G__1701 = (level - (1));
wrapper = G__1700;
level = G__1701;
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
var len__4789__auto___1703 = arguments.length;
var i__4790__auto___1704 = (0);
while(true){
if((i__4790__auto___1704 < len__4789__auto___1703)){
args__4795__auto__.push((arguments[i__4790__auto___1704]));

var G__1705 = (i__4790__auto___1704 + (1));
i__4790__auto___1704 = G__1705;
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
(domina.log_debug.cljs$lang$applyTo = (function (seq1702){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1702));
}));

domina.log = (function domina$log(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1707 = arguments.length;
var i__4790__auto___1708 = (0);
while(true){
if((i__4790__auto___1708 < len__4789__auto___1707)){
args__4795__auto__.push((arguments[i__4790__auto___1708]));

var G__1709 = (i__4790__auto___1708 + (1));
i__4790__auto___1708 = G__1709;
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
(domina.log.cljs$lang$applyTo = (function (seq1706){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1706));
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
var len__4789__auto___1711 = arguments.length;
var i__4790__auto___1712 = (0);
while(true){
if((i__4790__auto___1712 < len__4789__auto___1711)){
args__4795__auto__.push((arguments[i__4790__auto___1712]));

var G__1713 = (i__4790__auto___1712 + (1));
i__4790__auto___1712 = G__1713;
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
(domina.common_ancestor.cljs$lang$applyTo = (function (seq1710){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1710));
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
return cljs.core.map.call(null,(function (p1__1714_SHARP_){
return p1__1714_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__1715_SHARP_,p2__1716_SHARP_){
return goog.dom.insertChildAt(p1__1715_SHARP_,p2__1716_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__1718_SHARP_,p2__1717_SHARP_){
return goog.dom.insertSiblingBefore(p2__1717_SHARP_,p1__1718_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__1720_SHARP_,p2__1719_SHARP_){
return goog.dom.insertSiblingAfter(p2__1719_SHARP_,p1__1720_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__1722_SHARP_,p2__1721_SHARP_){
return goog.dom.replaceNode(p2__1721_SHARP_,p1__1722_SHARP_);
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
var len__4789__auto___1730 = arguments.length;
var i__4790__auto___1731 = (0);
while(true){
if((i__4790__auto___1731 < len__4789__auto___1730)){
args__4795__auto__.push((arguments[i__4790__auto___1731]));

var G__1732 = (i__4790__auto___1731 + (1));
i__4790__auto___1731 = G__1732;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__1726_1733 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1727_1734 = null;
var count__1728_1735 = (0);
var i__1729_1736 = (0);
while(true){
if((i__1729_1736 < count__1728_1735)){
var n_1737 = cljs.core._nth.call(null,chunk__1727_1734,i__1729_1736);
goog.style.setStyle(n_1737,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1738 = seq__1726_1733;
var G__1739 = chunk__1727_1734;
var G__1740 = count__1728_1735;
var G__1741 = (i__1729_1736 + (1));
seq__1726_1733 = G__1738;
chunk__1727_1734 = G__1739;
count__1728_1735 = G__1740;
i__1729_1736 = G__1741;
continue;
} else {
var temp__5457__auto___1742 = cljs.core.seq.call(null,seq__1726_1733);
if(temp__5457__auto___1742){
var seq__1726_1743__$1 = temp__5457__auto___1742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1726_1743__$1)){
var c__4609__auto___1744 = cljs.core.chunk_first.call(null,seq__1726_1743__$1);
var G__1745 = cljs.core.chunk_rest.call(null,seq__1726_1743__$1);
var G__1746 = c__4609__auto___1744;
var G__1747 = cljs.core.count.call(null,c__4609__auto___1744);
var G__1748 = (0);
seq__1726_1733 = G__1745;
chunk__1727_1734 = G__1746;
count__1728_1735 = G__1747;
i__1729_1736 = G__1748;
continue;
} else {
var n_1749 = cljs.core.first.call(null,seq__1726_1743__$1);
goog.style.setStyle(n_1749,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1750 = cljs.core.next.call(null,seq__1726_1743__$1);
var G__1751 = null;
var G__1752 = (0);
var G__1753 = (0);
seq__1726_1733 = G__1750;
chunk__1727_1734 = G__1751;
count__1728_1735 = G__1752;
i__1729_1736 = G__1753;
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
(domina.set_style_BANG_.cljs$lang$applyTo = (function (seq1723){
var G__1724 = cljs.core.first.call(null,seq1723);
var seq1723__$1 = cljs.core.next.call(null,seq1723);
var G__1725 = cljs.core.first.call(null,seq1723__$1);
var seq1723__$2 = cljs.core.next.call(null,seq1723__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1724,G__1725,seq1723__$2);
}));

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1761 = arguments.length;
var i__4790__auto___1762 = (0);
while(true){
if((i__4790__auto___1762 < len__4789__auto___1761)){
args__4795__auto__.push((arguments[i__4790__auto___1762]));

var G__1763 = (i__4790__auto___1762 + (1));
i__4790__auto___1762 = G__1763;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__1757_1764 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1758_1765 = null;
var count__1759_1766 = (0);
var i__1760_1767 = (0);
while(true){
if((i__1760_1767 < count__1759_1766)){
var n_1768 = cljs.core._nth.call(null,chunk__1758_1765,i__1760_1767);
n_1768.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1769 = seq__1757_1764;
var G__1770 = chunk__1758_1765;
var G__1771 = count__1759_1766;
var G__1772 = (i__1760_1767 + (1));
seq__1757_1764 = G__1769;
chunk__1758_1765 = G__1770;
count__1759_1766 = G__1771;
i__1760_1767 = G__1772;
continue;
} else {
var temp__5457__auto___1773 = cljs.core.seq.call(null,seq__1757_1764);
if(temp__5457__auto___1773){
var seq__1757_1774__$1 = temp__5457__auto___1773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1757_1774__$1)){
var c__4609__auto___1775 = cljs.core.chunk_first.call(null,seq__1757_1774__$1);
var G__1776 = cljs.core.chunk_rest.call(null,seq__1757_1774__$1);
var G__1777 = c__4609__auto___1775;
var G__1778 = cljs.core.count.call(null,c__4609__auto___1775);
var G__1779 = (0);
seq__1757_1764 = G__1776;
chunk__1758_1765 = G__1777;
count__1759_1766 = G__1778;
i__1760_1767 = G__1779;
continue;
} else {
var n_1780 = cljs.core.first.call(null,seq__1757_1774__$1);
n_1780.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1781 = cljs.core.next.call(null,seq__1757_1774__$1);
var G__1782 = null;
var G__1783 = (0);
var G__1784 = (0);
seq__1757_1764 = G__1781;
chunk__1758_1765 = G__1782;
count__1759_1766 = G__1783;
i__1760_1767 = G__1784;
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
(domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq1754){
var G__1755 = cljs.core.first.call(null,seq1754);
var seq1754__$1 = cljs.core.next.call(null,seq1754);
var G__1756 = cljs.core.first.call(null,seq1754__$1);
var seq1754__$2 = cljs.core.next.call(null,seq1754__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1755,G__1756,seq1754__$2);
}));

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__1785_1789 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1786_1790 = null;
var count__1787_1791 = (0);
var i__1788_1792 = (0);
while(true){
if((i__1788_1792 < count__1787_1791)){
var n_1793 = cljs.core._nth.call(null,chunk__1786_1790,i__1788_1792);
n_1793.removeAttribute(cljs.core.name.call(null,name));


var G__1794 = seq__1785_1789;
var G__1795 = chunk__1786_1790;
var G__1796 = count__1787_1791;
var G__1797 = (i__1788_1792 + (1));
seq__1785_1789 = G__1794;
chunk__1786_1790 = G__1795;
count__1787_1791 = G__1796;
i__1788_1792 = G__1797;
continue;
} else {
var temp__5457__auto___1798 = cljs.core.seq.call(null,seq__1785_1789);
if(temp__5457__auto___1798){
var seq__1785_1799__$1 = temp__5457__auto___1798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1785_1799__$1)){
var c__4609__auto___1800 = cljs.core.chunk_first.call(null,seq__1785_1799__$1);
var G__1801 = cljs.core.chunk_rest.call(null,seq__1785_1799__$1);
var G__1802 = c__4609__auto___1800;
var G__1803 = cljs.core.count.call(null,c__4609__auto___1800);
var G__1804 = (0);
seq__1785_1789 = G__1801;
chunk__1786_1790 = G__1802;
count__1787_1791 = G__1803;
i__1788_1792 = G__1804;
continue;
} else {
var n_1805 = cljs.core.first.call(null,seq__1785_1799__$1);
n_1805.removeAttribute(cljs.core.name.call(null,name));


var G__1806 = cljs.core.next.call(null,seq__1785_1799__$1);
var G__1807 = null;
var G__1808 = (0);
var G__1809 = (0);
seq__1785_1789 = G__1806;
chunk__1786_1790 = G__1807;
count__1787_1791 = G__1808;
i__1788_1792 = G__1809;
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
var vec__1810 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__1810,(0),null);
var v = cljs.core.nth.call(null,vec__1810,(1),null);
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
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__1813_SHARP_){
var attr = attrs.item(p1__1813_SHARP_);
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
var seq__1814_1830 = cljs.core.seq.call(null,styles);
var chunk__1815_1831 = null;
var count__1816_1832 = (0);
var i__1817_1833 = (0);
while(true){
if((i__1817_1833 < count__1816_1832)){
var vec__1824_1834 = cljs.core._nth.call(null,chunk__1815_1831,i__1817_1833);
var name_1835 = cljs.core.nth.call(null,vec__1824_1834,(0),null);
var value_1836 = cljs.core.nth.call(null,vec__1824_1834,(1),null);
domina.set_style_BANG_.call(null,content,name_1835,value_1836);


var G__1837 = seq__1814_1830;
var G__1838 = chunk__1815_1831;
var G__1839 = count__1816_1832;
var G__1840 = (i__1817_1833 + (1));
seq__1814_1830 = G__1837;
chunk__1815_1831 = G__1838;
count__1816_1832 = G__1839;
i__1817_1833 = G__1840;
continue;
} else {
var temp__5457__auto___1841 = cljs.core.seq.call(null,seq__1814_1830);
if(temp__5457__auto___1841){
var seq__1814_1842__$1 = temp__5457__auto___1841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1814_1842__$1)){
var c__4609__auto___1843 = cljs.core.chunk_first.call(null,seq__1814_1842__$1);
var G__1844 = cljs.core.chunk_rest.call(null,seq__1814_1842__$1);
var G__1845 = c__4609__auto___1843;
var G__1846 = cljs.core.count.call(null,c__4609__auto___1843);
var G__1847 = (0);
seq__1814_1830 = G__1844;
chunk__1815_1831 = G__1845;
count__1816_1832 = G__1846;
i__1817_1833 = G__1847;
continue;
} else {
var vec__1827_1848 = cljs.core.first.call(null,seq__1814_1842__$1);
var name_1849 = cljs.core.nth.call(null,vec__1827_1848,(0),null);
var value_1850 = cljs.core.nth.call(null,vec__1827_1848,(1),null);
domina.set_style_BANG_.call(null,content,name_1849,value_1850);


var G__1851 = cljs.core.next.call(null,seq__1814_1842__$1);
var G__1852 = null;
var G__1853 = (0);
var G__1854 = (0);
seq__1814_1830 = G__1851;
chunk__1815_1831 = G__1852;
count__1816_1832 = G__1853;
i__1817_1833 = G__1854;
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
var seq__1855_1871 = cljs.core.seq.call(null,attrs);
var chunk__1856_1872 = null;
var count__1857_1873 = (0);
var i__1858_1874 = (0);
while(true){
if((i__1858_1874 < count__1857_1873)){
var vec__1865_1875 = cljs.core._nth.call(null,chunk__1856_1872,i__1858_1874);
var name_1876 = cljs.core.nth.call(null,vec__1865_1875,(0),null);
var value_1877 = cljs.core.nth.call(null,vec__1865_1875,(1),null);
domina.set_attr_BANG_.call(null,content,name_1876,value_1877);


var G__1878 = seq__1855_1871;
var G__1879 = chunk__1856_1872;
var G__1880 = count__1857_1873;
var G__1881 = (i__1858_1874 + (1));
seq__1855_1871 = G__1878;
chunk__1856_1872 = G__1879;
count__1857_1873 = G__1880;
i__1858_1874 = G__1881;
continue;
} else {
var temp__5457__auto___1882 = cljs.core.seq.call(null,seq__1855_1871);
if(temp__5457__auto___1882){
var seq__1855_1883__$1 = temp__5457__auto___1882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1855_1883__$1)){
var c__4609__auto___1884 = cljs.core.chunk_first.call(null,seq__1855_1883__$1);
var G__1885 = cljs.core.chunk_rest.call(null,seq__1855_1883__$1);
var G__1886 = c__4609__auto___1884;
var G__1887 = cljs.core.count.call(null,c__4609__auto___1884);
var G__1888 = (0);
seq__1855_1871 = G__1885;
chunk__1856_1872 = G__1886;
count__1857_1873 = G__1887;
i__1858_1874 = G__1888;
continue;
} else {
var vec__1868_1889 = cljs.core.first.call(null,seq__1855_1883__$1);
var name_1890 = cljs.core.nth.call(null,vec__1868_1889,(0),null);
var value_1891 = cljs.core.nth.call(null,vec__1868_1889,(1),null);
domina.set_attr_BANG_.call(null,content,name_1890,value_1891);


var G__1892 = cljs.core.next.call(null,seq__1855_1883__$1);
var G__1893 = null;
var G__1894 = (0);
var G__1895 = (0);
seq__1855_1871 = G__1892;
chunk__1856_1872 = G__1893;
count__1857_1873 = G__1894;
i__1858_1874 = G__1895;
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
var seq__1896_1900 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1897_1901 = null;
var count__1898_1902 = (0);
var i__1899_1903 = (0);
while(true){
if((i__1899_1903 < count__1898_1902)){
var node_1904 = cljs.core._nth.call(null,chunk__1897_1901,i__1899_1903);
goog.dom.classes.add(node_1904,class$);


var G__1905 = seq__1896_1900;
var G__1906 = chunk__1897_1901;
var G__1907 = count__1898_1902;
var G__1908 = (i__1899_1903 + (1));
seq__1896_1900 = G__1905;
chunk__1897_1901 = G__1906;
count__1898_1902 = G__1907;
i__1899_1903 = G__1908;
continue;
} else {
var temp__5457__auto___1909 = cljs.core.seq.call(null,seq__1896_1900);
if(temp__5457__auto___1909){
var seq__1896_1910__$1 = temp__5457__auto___1909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1896_1910__$1)){
var c__4609__auto___1911 = cljs.core.chunk_first.call(null,seq__1896_1910__$1);
var G__1912 = cljs.core.chunk_rest.call(null,seq__1896_1910__$1);
var G__1913 = c__4609__auto___1911;
var G__1914 = cljs.core.count.call(null,c__4609__auto___1911);
var G__1915 = (0);
seq__1896_1900 = G__1912;
chunk__1897_1901 = G__1913;
count__1898_1902 = G__1914;
i__1899_1903 = G__1915;
continue;
} else {
var node_1916 = cljs.core.first.call(null,seq__1896_1910__$1);
goog.dom.classes.add(node_1916,class$);


var G__1917 = cljs.core.next.call(null,seq__1896_1910__$1);
var G__1918 = null;
var G__1919 = (0);
var G__1920 = (0);
seq__1896_1900 = G__1917;
chunk__1897_1901 = G__1918;
count__1898_1902 = G__1919;
i__1899_1903 = G__1920;
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
var seq__1921_1925 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1922_1926 = null;
var count__1923_1927 = (0);
var i__1924_1928 = (0);
while(true){
if((i__1924_1928 < count__1923_1927)){
var node_1929 = cljs.core._nth.call(null,chunk__1922_1926,i__1924_1928);
goog.dom.classes.remove(node_1929,class$);


var G__1930 = seq__1921_1925;
var G__1931 = chunk__1922_1926;
var G__1932 = count__1923_1927;
var G__1933 = (i__1924_1928 + (1));
seq__1921_1925 = G__1930;
chunk__1922_1926 = G__1931;
count__1923_1927 = G__1932;
i__1924_1928 = G__1933;
continue;
} else {
var temp__5457__auto___1934 = cljs.core.seq.call(null,seq__1921_1925);
if(temp__5457__auto___1934){
var seq__1921_1935__$1 = temp__5457__auto___1934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1921_1935__$1)){
var c__4609__auto___1936 = cljs.core.chunk_first.call(null,seq__1921_1935__$1);
var G__1937 = cljs.core.chunk_rest.call(null,seq__1921_1935__$1);
var G__1938 = c__4609__auto___1936;
var G__1939 = cljs.core.count.call(null,c__4609__auto___1936);
var G__1940 = (0);
seq__1921_1925 = G__1937;
chunk__1922_1926 = G__1938;
count__1923_1927 = G__1939;
i__1924_1928 = G__1940;
continue;
} else {
var node_1941 = cljs.core.first.call(null,seq__1921_1935__$1);
goog.dom.classes.remove(node_1941,class$);


var G__1942 = cljs.core.next.call(null,seq__1921_1935__$1);
var G__1943 = null;
var G__1944 = (0);
var G__1945 = (0);
seq__1921_1925 = G__1942;
chunk__1922_1926 = G__1943;
count__1923_1927 = G__1944;
i__1924_1928 = G__1945;
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
var seq__1946_1950 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1947_1951 = null;
var count__1948_1952 = (0);
var i__1949_1953 = (0);
while(true){
if((i__1949_1953 < count__1948_1952)){
var node_1954 = cljs.core._nth.call(null,chunk__1947_1951,i__1949_1953);
goog.dom.classes.toggle(node_1954,class$);


var G__1955 = seq__1946_1950;
var G__1956 = chunk__1947_1951;
var G__1957 = count__1948_1952;
var G__1958 = (i__1949_1953 + (1));
seq__1946_1950 = G__1955;
chunk__1947_1951 = G__1956;
count__1948_1952 = G__1957;
i__1949_1953 = G__1958;
continue;
} else {
var temp__5457__auto___1959 = cljs.core.seq.call(null,seq__1946_1950);
if(temp__5457__auto___1959){
var seq__1946_1960__$1 = temp__5457__auto___1959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1946_1960__$1)){
var c__4609__auto___1961 = cljs.core.chunk_first.call(null,seq__1946_1960__$1);
var G__1962 = cljs.core.chunk_rest.call(null,seq__1946_1960__$1);
var G__1963 = c__4609__auto___1961;
var G__1964 = cljs.core.count.call(null,c__4609__auto___1961);
var G__1965 = (0);
seq__1946_1950 = G__1962;
chunk__1947_1951 = G__1963;
count__1948_1952 = G__1964;
i__1949_1953 = G__1965;
continue;
} else {
var node_1966 = cljs.core.first.call(null,seq__1946_1960__$1);
goog.dom.classes.toggle(node_1966,class$);


var G__1967 = cljs.core.next.call(null,seq__1946_1960__$1);
var G__1968 = null;
var G__1969 = (0);
var G__1970 = (0);
seq__1946_1950 = G__1967;
chunk__1947_1951 = G__1968;
count__1948_1952 = G__1969;
i__1949_1953 = G__1970;
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
var classes_1975__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__1971_1976 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1972_1977 = null;
var count__1973_1978 = (0);
var i__1974_1979 = (0);
while(true){
if((i__1974_1979 < count__1973_1978)){
var node_1980 = cljs.core._nth.call(null,chunk__1972_1977,i__1974_1979);
goog.dom.classes.set(node_1980,classes_1975__$1);


var G__1981 = seq__1971_1976;
var G__1982 = chunk__1972_1977;
var G__1983 = count__1973_1978;
var G__1984 = (i__1974_1979 + (1));
seq__1971_1976 = G__1981;
chunk__1972_1977 = G__1982;
count__1973_1978 = G__1983;
i__1974_1979 = G__1984;
continue;
} else {
var temp__5457__auto___1985 = cljs.core.seq.call(null,seq__1971_1976);
if(temp__5457__auto___1985){
var seq__1971_1986__$1 = temp__5457__auto___1985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1971_1986__$1)){
var c__4609__auto___1987 = cljs.core.chunk_first.call(null,seq__1971_1986__$1);
var G__1988 = cljs.core.chunk_rest.call(null,seq__1971_1986__$1);
var G__1989 = c__4609__auto___1987;
var G__1990 = cljs.core.count.call(null,c__4609__auto___1987);
var G__1991 = (0);
seq__1971_1976 = G__1988;
chunk__1972_1977 = G__1989;
count__1973_1978 = G__1990;
i__1974_1979 = G__1991;
continue;
} else {
var node_1992 = cljs.core.first.call(null,seq__1971_1986__$1);
goog.dom.classes.set(node_1992,classes_1975__$1);


var G__1993 = cljs.core.next.call(null,seq__1971_1986__$1);
var G__1994 = null;
var G__1995 = (0);
var G__1996 = (0);
seq__1971_1976 = G__1993;
chunk__1972_1977 = G__1994;
count__1973_1978 = G__1995;
i__1974_1979 = G__1996;
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
var seq__1997_2001 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1998_2002 = null;
var count__1999_2003 = (0);
var i__2000_2004 = (0);
while(true){
if((i__2000_2004 < count__1999_2003)){
var node_2005 = cljs.core._nth.call(null,chunk__1998_2002,i__2000_2004);
goog.dom.setTextContent(node_2005,value);


var G__2006 = seq__1997_2001;
var G__2007 = chunk__1998_2002;
var G__2008 = count__1999_2003;
var G__2009 = (i__2000_2004 + (1));
seq__1997_2001 = G__2006;
chunk__1998_2002 = G__2007;
count__1999_2003 = G__2008;
i__2000_2004 = G__2009;
continue;
} else {
var temp__5457__auto___2010 = cljs.core.seq.call(null,seq__1997_2001);
if(temp__5457__auto___2010){
var seq__1997_2011__$1 = temp__5457__auto___2010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1997_2011__$1)){
var c__4609__auto___2012 = cljs.core.chunk_first.call(null,seq__1997_2011__$1);
var G__2013 = cljs.core.chunk_rest.call(null,seq__1997_2011__$1);
var G__2014 = c__4609__auto___2012;
var G__2015 = cljs.core.count.call(null,c__4609__auto___2012);
var G__2016 = (0);
seq__1997_2001 = G__2013;
chunk__1998_2002 = G__2014;
count__1999_2003 = G__2015;
i__2000_2004 = G__2016;
continue;
} else {
var node_2017 = cljs.core.first.call(null,seq__1997_2011__$1);
goog.dom.setTextContent(node_2017,value);


var G__2018 = cljs.core.next.call(null,seq__1997_2011__$1);
var G__2019 = null;
var G__2020 = (0);
var G__2021 = (0);
seq__1997_2001 = G__2018;
chunk__1998_2002 = G__2019;
count__1999_2003 = G__2020;
i__2000_2004 = G__2021;
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
var seq__2022_2026 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2023_2027 = null;
var count__2024_2028 = (0);
var i__2025_2029 = (0);
while(true){
if((i__2025_2029 < count__2024_2028)){
var node_2030 = cljs.core._nth.call(null,chunk__2023_2027,i__2025_2029);
goog.dom.forms.setValue(node_2030,value);


var G__2031 = seq__2022_2026;
var G__2032 = chunk__2023_2027;
var G__2033 = count__2024_2028;
var G__2034 = (i__2025_2029 + (1));
seq__2022_2026 = G__2031;
chunk__2023_2027 = G__2032;
count__2024_2028 = G__2033;
i__2025_2029 = G__2034;
continue;
} else {
var temp__5457__auto___2035 = cljs.core.seq.call(null,seq__2022_2026);
if(temp__5457__auto___2035){
var seq__2022_2036__$1 = temp__5457__auto___2035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2022_2036__$1)){
var c__4609__auto___2037 = cljs.core.chunk_first.call(null,seq__2022_2036__$1);
var G__2038 = cljs.core.chunk_rest.call(null,seq__2022_2036__$1);
var G__2039 = c__4609__auto___2037;
var G__2040 = cljs.core.count.call(null,c__4609__auto___2037);
var G__2041 = (0);
seq__2022_2026 = G__2038;
chunk__2023_2027 = G__2039;
count__2024_2028 = G__2040;
i__2025_2029 = G__2041;
continue;
} else {
var node_2042 = cljs.core.first.call(null,seq__2022_2036__$1);
goog.dom.forms.setValue(node_2042,value);


var G__2043 = cljs.core.next.call(null,seq__2022_2036__$1);
var G__2044 = null;
var G__2045 = (0);
var G__2046 = (0);
seq__2022_2026 = G__2043;
chunk__2023_2027 = G__2044;
count__2024_2028 = G__2045;
i__2025_2029 = G__2046;
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
var value_2052 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__2048_2053 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2049_2054 = null;
var count__2050_2055 = (0);
var i__2051_2056 = (0);
while(true){
if((i__2051_2056 < count__2050_2055)){
var node_2057 = cljs.core._nth.call(null,chunk__2049_2054,i__2051_2056);
(node_2057.innerHTML = value_2052);


var G__2058 = seq__2048_2053;
var G__2059 = chunk__2049_2054;
var G__2060 = count__2050_2055;
var G__2061 = (i__2051_2056 + (1));
seq__2048_2053 = G__2058;
chunk__2049_2054 = G__2059;
count__2050_2055 = G__2060;
i__2051_2056 = G__2061;
continue;
} else {
var temp__5457__auto___2062 = cljs.core.seq.call(null,seq__2048_2053);
if(temp__5457__auto___2062){
var seq__2048_2063__$1 = temp__5457__auto___2062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2048_2063__$1)){
var c__4609__auto___2064 = cljs.core.chunk_first.call(null,seq__2048_2063__$1);
var G__2065 = cljs.core.chunk_rest.call(null,seq__2048_2063__$1);
var G__2066 = c__4609__auto___2064;
var G__2067 = cljs.core.count.call(null,c__4609__auto___2064);
var G__2068 = (0);
seq__2048_2053 = G__2065;
chunk__2049_2054 = G__2066;
count__2050_2055 = G__2067;
i__2051_2056 = G__2068;
continue;
} else {
var node_2069 = cljs.core.first.call(null,seq__2048_2063__$1);
(node_2069.innerHTML = value_2052);


var G__2070 = cljs.core.next.call(null,seq__2048_2063__$1);
var G__2071 = null;
var G__2072 = (0);
var G__2073 = (0);
seq__2048_2053 = G__2070;
chunk__2049_2054 = G__2071;
count__2050_2055 = G__2072;
i__2051_2056 = G__2073;
continue;
}
} else {
}
}
break;
}
}catch (e2047){if((e2047 instanceof Error)){
var e_2074 = e2047;
domina.replace_children_BANG_.call(null,content,value_2052);
} else {
throw e2047;

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
var G__2076 = arguments.length;
switch (G__2076) {
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
var seq__2080_2084 = cljs.core.seq.call(null,children);
var chunk__2081_2085 = null;
var count__2082_2086 = (0);
var i__2083_2087 = (0);
while(true){
if((i__2083_2087 < count__2082_2086)){
var child_2088 = cljs.core._nth.call(null,chunk__2081_2085,i__2083_2087);
frag.appendChild(child_2088);


var G__2089 = seq__2080_2084;
var G__2090 = chunk__2081_2085;
var G__2091 = count__2082_2086;
var G__2092 = (i__2083_2087 + (1));
seq__2080_2084 = G__2089;
chunk__2081_2085 = G__2090;
count__2082_2086 = G__2091;
i__2083_2087 = G__2092;
continue;
} else {
var temp__5457__auto___2093 = cljs.core.seq.call(null,seq__2080_2084);
if(temp__5457__auto___2093){
var seq__2080_2094__$1 = temp__5457__auto___2093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2080_2094__$1)){
var c__4609__auto___2095 = cljs.core.chunk_first.call(null,seq__2080_2094__$1);
var G__2096 = cljs.core.chunk_rest.call(null,seq__2080_2094__$1);
var G__2097 = c__4609__auto___2095;
var G__2098 = cljs.core.count.call(null,c__4609__auto___2095);
var G__2099 = (0);
seq__2080_2084 = G__2096;
chunk__2081_2085 = G__2097;
count__2082_2086 = G__2098;
i__2083_2087 = G__2099;
continue;
} else {
var child_2100 = cljs.core.first.call(null,seq__2080_2094__$1);
frag.appendChild(child_2100);


var G__2101 = cljs.core.next.call(null,seq__2080_2094__$1);
var G__2102 = null;
var G__2103 = (0);
var G__2104 = (0);
seq__2080_2084 = G__2101;
chunk__2081_2085 = G__2102;
count__2082_2086 = G__2103;
i__2083_2087 = G__2104;
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2078_SHARP_,p2__2079_SHARP_){
return f.call(null,p1__2078_SHARP_,p2__2079_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__2106 = arguments.length;
switch (G__2106) {
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
var G__2109 = arguments.length;
switch (G__2109) {
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
