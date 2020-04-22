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
var opt_wrapper_1804 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_1805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_1806 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_1806,opt_wrapper_1804,table_section_wrapper_1805,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_1804,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_1805,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_1805,cell_wrapper_1806,table_section_wrapper_1805,table_section_wrapper_1805]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__4174__auto__ = div.firstChild;
if(cljs.core.truth_(and__4174__auto__)){
return div.firstChild.childNodes;
} else {
return and__4174__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__1807 = cljs.core.seq.call(null,tbody);
var chunk__1808 = null;
var count__1809 = (0);
var i__1810 = (0);
while(true){
if((i__1810 < count__1809)){
var child = cljs.core._nth.call(null,chunk__1808,i__1810);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__1811 = seq__1807;
var G__1812 = chunk__1808;
var G__1813 = count__1809;
var G__1814 = (i__1810 + (1));
seq__1807 = G__1811;
chunk__1808 = G__1812;
count__1809 = G__1813;
i__1810 = G__1814;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__1807);
if(temp__5457__auto__){
var seq__1807__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1807__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__1807__$1);
var G__1815 = cljs.core.chunk_rest.call(null,seq__1807__$1);
var G__1816 = c__4609__auto__;
var G__1817 = cljs.core.count.call(null,c__4609__auto__);
var G__1818 = (0);
seq__1807 = G__1815;
chunk__1808 = G__1816;
count__1809 = G__1817;
i__1810 = G__1818;
continue;
} else {
var child = cljs.core.first.call(null,seq__1807__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__1819 = cljs.core.next.call(null,seq__1807__$1);
var G__1820 = null;
var G__1821 = (0);
var G__1822 = (0);
seq__1807 = G__1819;
chunk__1808 = G__1820;
count__1809 = G__1821;
i__1810 = G__1822;
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
var vec__1823 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__1823,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__1823,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__1823,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
(div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),html__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join(''));

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__1826 = wrapper.lastChild;
var G__1827 = (level - (1));
wrapper = G__1826;
level = G__1827;
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
var len__4789__auto___1829 = arguments.length;
var i__4790__auto___1830 = (0);
while(true){
if((i__4790__auto___1830 < len__4789__auto___1829)){
args__4795__auto__.push((arguments[i__4790__auto___1830]));

var G__1831 = (i__4790__auto___1830 + (1));
i__4790__auto___1830 = G__1831;
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
(domina.log_debug.cljs$lang$applyTo = (function (seq1828){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1828));
}));

domina.log = (function domina$log(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1833 = arguments.length;
var i__4790__auto___1834 = (0);
while(true){
if((i__4790__auto___1834 < len__4789__auto___1833)){
args__4795__auto__.push((arguments[i__4790__auto___1834]));

var G__1835 = (i__4790__auto___1834 + (1));
i__4790__auto___1834 = G__1835;
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
(domina.log.cljs$lang$applyTo = (function (seq1832){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1832));
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
var len__4789__auto___1837 = arguments.length;
var i__4790__auto___1838 = (0);
while(true){
if((i__4790__auto___1838 < len__4789__auto___1837)){
args__4795__auto__.push((arguments[i__4790__auto___1838]));

var G__1839 = (i__4790__auto___1838 + (1));
i__4790__auto___1838 = G__1839;
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
(domina.common_ancestor.cljs$lang$applyTo = (function (seq1836){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1836));
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
return cljs.core.map.call(null,(function (p1__1840_SHARP_){
return p1__1840_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__1841_SHARP_,p2__1842_SHARP_){
return goog.dom.insertChildAt(p1__1841_SHARP_,p2__1842_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__1844_SHARP_,p2__1843_SHARP_){
return goog.dom.insertSiblingBefore(p2__1843_SHARP_,p1__1844_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__1846_SHARP_,p2__1845_SHARP_){
return goog.dom.insertSiblingAfter(p2__1845_SHARP_,p1__1846_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__1848_SHARP_,p2__1847_SHARP_){
return goog.dom.replaceNode(p2__1847_SHARP_,p1__1848_SHARP_);
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
var len__4789__auto___1856 = arguments.length;
var i__4790__auto___1857 = (0);
while(true){
if((i__4790__auto___1857 < len__4789__auto___1856)){
args__4795__auto__.push((arguments[i__4790__auto___1857]));

var G__1858 = (i__4790__auto___1857 + (1));
i__4790__auto___1857 = G__1858;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__1852_1859 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1853_1860 = null;
var count__1854_1861 = (0);
var i__1855_1862 = (0);
while(true){
if((i__1855_1862 < count__1854_1861)){
var n_1863 = cljs.core._nth.call(null,chunk__1853_1860,i__1855_1862);
goog.style.setStyle(n_1863,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1864 = seq__1852_1859;
var G__1865 = chunk__1853_1860;
var G__1866 = count__1854_1861;
var G__1867 = (i__1855_1862 + (1));
seq__1852_1859 = G__1864;
chunk__1853_1860 = G__1865;
count__1854_1861 = G__1866;
i__1855_1862 = G__1867;
continue;
} else {
var temp__5457__auto___1868 = cljs.core.seq.call(null,seq__1852_1859);
if(temp__5457__auto___1868){
var seq__1852_1869__$1 = temp__5457__auto___1868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1852_1869__$1)){
var c__4609__auto___1870 = cljs.core.chunk_first.call(null,seq__1852_1869__$1);
var G__1871 = cljs.core.chunk_rest.call(null,seq__1852_1869__$1);
var G__1872 = c__4609__auto___1870;
var G__1873 = cljs.core.count.call(null,c__4609__auto___1870);
var G__1874 = (0);
seq__1852_1859 = G__1871;
chunk__1853_1860 = G__1872;
count__1854_1861 = G__1873;
i__1855_1862 = G__1874;
continue;
} else {
var n_1875 = cljs.core.first.call(null,seq__1852_1869__$1);
goog.style.setStyle(n_1875,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1876 = cljs.core.next.call(null,seq__1852_1869__$1);
var G__1877 = null;
var G__1878 = (0);
var G__1879 = (0);
seq__1852_1859 = G__1876;
chunk__1853_1860 = G__1877;
count__1854_1861 = G__1878;
i__1855_1862 = G__1879;
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
(domina.set_style_BANG_.cljs$lang$applyTo = (function (seq1849){
var G__1850 = cljs.core.first.call(null,seq1849);
var seq1849__$1 = cljs.core.next.call(null,seq1849);
var G__1851 = cljs.core.first.call(null,seq1849__$1);
var seq1849__$2 = cljs.core.next.call(null,seq1849__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1850,G__1851,seq1849__$2);
}));

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1887 = arguments.length;
var i__4790__auto___1888 = (0);
while(true){
if((i__4790__auto___1888 < len__4789__auto___1887)){
args__4795__auto__.push((arguments[i__4790__auto___1888]));

var G__1889 = (i__4790__auto___1888 + (1));
i__4790__auto___1888 = G__1889;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__1883_1890 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1884_1891 = null;
var count__1885_1892 = (0);
var i__1886_1893 = (0);
while(true){
if((i__1886_1893 < count__1885_1892)){
var n_1894 = cljs.core._nth.call(null,chunk__1884_1891,i__1886_1893);
n_1894.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1895 = seq__1883_1890;
var G__1896 = chunk__1884_1891;
var G__1897 = count__1885_1892;
var G__1898 = (i__1886_1893 + (1));
seq__1883_1890 = G__1895;
chunk__1884_1891 = G__1896;
count__1885_1892 = G__1897;
i__1886_1893 = G__1898;
continue;
} else {
var temp__5457__auto___1899 = cljs.core.seq.call(null,seq__1883_1890);
if(temp__5457__auto___1899){
var seq__1883_1900__$1 = temp__5457__auto___1899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1883_1900__$1)){
var c__4609__auto___1901 = cljs.core.chunk_first.call(null,seq__1883_1900__$1);
var G__1902 = cljs.core.chunk_rest.call(null,seq__1883_1900__$1);
var G__1903 = c__4609__auto___1901;
var G__1904 = cljs.core.count.call(null,c__4609__auto___1901);
var G__1905 = (0);
seq__1883_1890 = G__1902;
chunk__1884_1891 = G__1903;
count__1885_1892 = G__1904;
i__1886_1893 = G__1905;
continue;
} else {
var n_1906 = cljs.core.first.call(null,seq__1883_1900__$1);
n_1906.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__1907 = cljs.core.next.call(null,seq__1883_1900__$1);
var G__1908 = null;
var G__1909 = (0);
var G__1910 = (0);
seq__1883_1890 = G__1907;
chunk__1884_1891 = G__1908;
count__1885_1892 = G__1909;
i__1886_1893 = G__1910;
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
(domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq1880){
var G__1881 = cljs.core.first.call(null,seq1880);
var seq1880__$1 = cljs.core.next.call(null,seq1880);
var G__1882 = cljs.core.first.call(null,seq1880__$1);
var seq1880__$2 = cljs.core.next.call(null,seq1880__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1881,G__1882,seq1880__$2);
}));

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__1911_1915 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__1912_1916 = null;
var count__1913_1917 = (0);
var i__1914_1918 = (0);
while(true){
if((i__1914_1918 < count__1913_1917)){
var n_1919 = cljs.core._nth.call(null,chunk__1912_1916,i__1914_1918);
n_1919.removeAttribute(cljs.core.name.call(null,name));


var G__1920 = seq__1911_1915;
var G__1921 = chunk__1912_1916;
var G__1922 = count__1913_1917;
var G__1923 = (i__1914_1918 + (1));
seq__1911_1915 = G__1920;
chunk__1912_1916 = G__1921;
count__1913_1917 = G__1922;
i__1914_1918 = G__1923;
continue;
} else {
var temp__5457__auto___1924 = cljs.core.seq.call(null,seq__1911_1915);
if(temp__5457__auto___1924){
var seq__1911_1925__$1 = temp__5457__auto___1924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1911_1925__$1)){
var c__4609__auto___1926 = cljs.core.chunk_first.call(null,seq__1911_1925__$1);
var G__1927 = cljs.core.chunk_rest.call(null,seq__1911_1925__$1);
var G__1928 = c__4609__auto___1926;
var G__1929 = cljs.core.count.call(null,c__4609__auto___1926);
var G__1930 = (0);
seq__1911_1915 = G__1927;
chunk__1912_1916 = G__1928;
count__1913_1917 = G__1929;
i__1914_1918 = G__1930;
continue;
} else {
var n_1931 = cljs.core.first.call(null,seq__1911_1925__$1);
n_1931.removeAttribute(cljs.core.name.call(null,name));


var G__1932 = cljs.core.next.call(null,seq__1911_1925__$1);
var G__1933 = null;
var G__1934 = (0);
var G__1935 = (0);
seq__1911_1915 = G__1932;
chunk__1912_1916 = G__1933;
count__1913_1917 = G__1934;
i__1914_1918 = G__1935;
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
var vec__1936 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__1936,(0),null);
var v = cljs.core.nth.call(null,vec__1936,(1),null);
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
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__1939_SHARP_){
var attr = attrs.item(p1__1939_SHARP_);
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
var seq__1940_1956 = cljs.core.seq.call(null,styles);
var chunk__1941_1957 = null;
var count__1942_1958 = (0);
var i__1943_1959 = (0);
while(true){
if((i__1943_1959 < count__1942_1958)){
var vec__1950_1960 = cljs.core._nth.call(null,chunk__1941_1957,i__1943_1959);
var name_1961 = cljs.core.nth.call(null,vec__1950_1960,(0),null);
var value_1962 = cljs.core.nth.call(null,vec__1950_1960,(1),null);
domina.set_style_BANG_.call(null,content,name_1961,value_1962);


var G__1963 = seq__1940_1956;
var G__1964 = chunk__1941_1957;
var G__1965 = count__1942_1958;
var G__1966 = (i__1943_1959 + (1));
seq__1940_1956 = G__1963;
chunk__1941_1957 = G__1964;
count__1942_1958 = G__1965;
i__1943_1959 = G__1966;
continue;
} else {
var temp__5457__auto___1967 = cljs.core.seq.call(null,seq__1940_1956);
if(temp__5457__auto___1967){
var seq__1940_1968__$1 = temp__5457__auto___1967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1940_1968__$1)){
var c__4609__auto___1969 = cljs.core.chunk_first.call(null,seq__1940_1968__$1);
var G__1970 = cljs.core.chunk_rest.call(null,seq__1940_1968__$1);
var G__1971 = c__4609__auto___1969;
var G__1972 = cljs.core.count.call(null,c__4609__auto___1969);
var G__1973 = (0);
seq__1940_1956 = G__1970;
chunk__1941_1957 = G__1971;
count__1942_1958 = G__1972;
i__1943_1959 = G__1973;
continue;
} else {
var vec__1953_1974 = cljs.core.first.call(null,seq__1940_1968__$1);
var name_1975 = cljs.core.nth.call(null,vec__1953_1974,(0),null);
var value_1976 = cljs.core.nth.call(null,vec__1953_1974,(1),null);
domina.set_style_BANG_.call(null,content,name_1975,value_1976);


var G__1977 = cljs.core.next.call(null,seq__1940_1968__$1);
var G__1978 = null;
var G__1979 = (0);
var G__1980 = (0);
seq__1940_1956 = G__1977;
chunk__1941_1957 = G__1978;
count__1942_1958 = G__1979;
i__1943_1959 = G__1980;
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
var seq__1981_1997 = cljs.core.seq.call(null,attrs);
var chunk__1982_1998 = null;
var count__1983_1999 = (0);
var i__1984_2000 = (0);
while(true){
if((i__1984_2000 < count__1983_1999)){
var vec__1991_2001 = cljs.core._nth.call(null,chunk__1982_1998,i__1984_2000);
var name_2002 = cljs.core.nth.call(null,vec__1991_2001,(0),null);
var value_2003 = cljs.core.nth.call(null,vec__1991_2001,(1),null);
domina.set_attr_BANG_.call(null,content,name_2002,value_2003);


var G__2004 = seq__1981_1997;
var G__2005 = chunk__1982_1998;
var G__2006 = count__1983_1999;
var G__2007 = (i__1984_2000 + (1));
seq__1981_1997 = G__2004;
chunk__1982_1998 = G__2005;
count__1983_1999 = G__2006;
i__1984_2000 = G__2007;
continue;
} else {
var temp__5457__auto___2008 = cljs.core.seq.call(null,seq__1981_1997);
if(temp__5457__auto___2008){
var seq__1981_2009__$1 = temp__5457__auto___2008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1981_2009__$1)){
var c__4609__auto___2010 = cljs.core.chunk_first.call(null,seq__1981_2009__$1);
var G__2011 = cljs.core.chunk_rest.call(null,seq__1981_2009__$1);
var G__2012 = c__4609__auto___2010;
var G__2013 = cljs.core.count.call(null,c__4609__auto___2010);
var G__2014 = (0);
seq__1981_1997 = G__2011;
chunk__1982_1998 = G__2012;
count__1983_1999 = G__2013;
i__1984_2000 = G__2014;
continue;
} else {
var vec__1994_2015 = cljs.core.first.call(null,seq__1981_2009__$1);
var name_2016 = cljs.core.nth.call(null,vec__1994_2015,(0),null);
var value_2017 = cljs.core.nth.call(null,vec__1994_2015,(1),null);
domina.set_attr_BANG_.call(null,content,name_2016,value_2017);


var G__2018 = cljs.core.next.call(null,seq__1981_2009__$1);
var G__2019 = null;
var G__2020 = (0);
var G__2021 = (0);
seq__1981_1997 = G__2018;
chunk__1982_1998 = G__2019;
count__1983_1999 = G__2020;
i__1984_2000 = G__2021;
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
var seq__2022_2026 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2023_2027 = null;
var count__2024_2028 = (0);
var i__2025_2029 = (0);
while(true){
if((i__2025_2029 < count__2024_2028)){
var node_2030 = cljs.core._nth.call(null,chunk__2023_2027,i__2025_2029);
goog.dom.classes.add(node_2030,class$);


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
goog.dom.classes.add(node_2042,class$);


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
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__2047_2051 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2048_2052 = null;
var count__2049_2053 = (0);
var i__2050_2054 = (0);
while(true){
if((i__2050_2054 < count__2049_2053)){
var node_2055 = cljs.core._nth.call(null,chunk__2048_2052,i__2050_2054);
goog.dom.classes.remove(node_2055,class$);


var G__2056 = seq__2047_2051;
var G__2057 = chunk__2048_2052;
var G__2058 = count__2049_2053;
var G__2059 = (i__2050_2054 + (1));
seq__2047_2051 = G__2056;
chunk__2048_2052 = G__2057;
count__2049_2053 = G__2058;
i__2050_2054 = G__2059;
continue;
} else {
var temp__5457__auto___2060 = cljs.core.seq.call(null,seq__2047_2051);
if(temp__5457__auto___2060){
var seq__2047_2061__$1 = temp__5457__auto___2060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2047_2061__$1)){
var c__4609__auto___2062 = cljs.core.chunk_first.call(null,seq__2047_2061__$1);
var G__2063 = cljs.core.chunk_rest.call(null,seq__2047_2061__$1);
var G__2064 = c__4609__auto___2062;
var G__2065 = cljs.core.count.call(null,c__4609__auto___2062);
var G__2066 = (0);
seq__2047_2051 = G__2063;
chunk__2048_2052 = G__2064;
count__2049_2053 = G__2065;
i__2050_2054 = G__2066;
continue;
} else {
var node_2067 = cljs.core.first.call(null,seq__2047_2061__$1);
goog.dom.classes.remove(node_2067,class$);


var G__2068 = cljs.core.next.call(null,seq__2047_2061__$1);
var G__2069 = null;
var G__2070 = (0);
var G__2071 = (0);
seq__2047_2051 = G__2068;
chunk__2048_2052 = G__2069;
count__2049_2053 = G__2070;
i__2050_2054 = G__2071;
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
var seq__2072_2076 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2073_2077 = null;
var count__2074_2078 = (0);
var i__2075_2079 = (0);
while(true){
if((i__2075_2079 < count__2074_2078)){
var node_2080 = cljs.core._nth.call(null,chunk__2073_2077,i__2075_2079);
goog.dom.classes.toggle(node_2080,class$);


var G__2081 = seq__2072_2076;
var G__2082 = chunk__2073_2077;
var G__2083 = count__2074_2078;
var G__2084 = (i__2075_2079 + (1));
seq__2072_2076 = G__2081;
chunk__2073_2077 = G__2082;
count__2074_2078 = G__2083;
i__2075_2079 = G__2084;
continue;
} else {
var temp__5457__auto___2085 = cljs.core.seq.call(null,seq__2072_2076);
if(temp__5457__auto___2085){
var seq__2072_2086__$1 = temp__5457__auto___2085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2072_2086__$1)){
var c__4609__auto___2087 = cljs.core.chunk_first.call(null,seq__2072_2086__$1);
var G__2088 = cljs.core.chunk_rest.call(null,seq__2072_2086__$1);
var G__2089 = c__4609__auto___2087;
var G__2090 = cljs.core.count.call(null,c__4609__auto___2087);
var G__2091 = (0);
seq__2072_2076 = G__2088;
chunk__2073_2077 = G__2089;
count__2074_2078 = G__2090;
i__2075_2079 = G__2091;
continue;
} else {
var node_2092 = cljs.core.first.call(null,seq__2072_2086__$1);
goog.dom.classes.toggle(node_2092,class$);


var G__2093 = cljs.core.next.call(null,seq__2072_2086__$1);
var G__2094 = null;
var G__2095 = (0);
var G__2096 = (0);
seq__2072_2076 = G__2093;
chunk__2073_2077 = G__2094;
count__2074_2078 = G__2095;
i__2075_2079 = G__2096;
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
var classes_2101__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__2097_2102 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2098_2103 = null;
var count__2099_2104 = (0);
var i__2100_2105 = (0);
while(true){
if((i__2100_2105 < count__2099_2104)){
var node_2106 = cljs.core._nth.call(null,chunk__2098_2103,i__2100_2105);
goog.dom.classes.set(node_2106,classes_2101__$1);


var G__2107 = seq__2097_2102;
var G__2108 = chunk__2098_2103;
var G__2109 = count__2099_2104;
var G__2110 = (i__2100_2105 + (1));
seq__2097_2102 = G__2107;
chunk__2098_2103 = G__2108;
count__2099_2104 = G__2109;
i__2100_2105 = G__2110;
continue;
} else {
var temp__5457__auto___2111 = cljs.core.seq.call(null,seq__2097_2102);
if(temp__5457__auto___2111){
var seq__2097_2112__$1 = temp__5457__auto___2111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2097_2112__$1)){
var c__4609__auto___2113 = cljs.core.chunk_first.call(null,seq__2097_2112__$1);
var G__2114 = cljs.core.chunk_rest.call(null,seq__2097_2112__$1);
var G__2115 = c__4609__auto___2113;
var G__2116 = cljs.core.count.call(null,c__4609__auto___2113);
var G__2117 = (0);
seq__2097_2102 = G__2114;
chunk__2098_2103 = G__2115;
count__2099_2104 = G__2116;
i__2100_2105 = G__2117;
continue;
} else {
var node_2118 = cljs.core.first.call(null,seq__2097_2112__$1);
goog.dom.classes.set(node_2118,classes_2101__$1);


var G__2119 = cljs.core.next.call(null,seq__2097_2112__$1);
var G__2120 = null;
var G__2121 = (0);
var G__2122 = (0);
seq__2097_2102 = G__2119;
chunk__2098_2103 = G__2120;
count__2099_2104 = G__2121;
i__2100_2105 = G__2122;
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
var seq__2123_2127 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2124_2128 = null;
var count__2125_2129 = (0);
var i__2126_2130 = (0);
while(true){
if((i__2126_2130 < count__2125_2129)){
var node_2131 = cljs.core._nth.call(null,chunk__2124_2128,i__2126_2130);
goog.dom.setTextContent(node_2131,value);


var G__2132 = seq__2123_2127;
var G__2133 = chunk__2124_2128;
var G__2134 = count__2125_2129;
var G__2135 = (i__2126_2130 + (1));
seq__2123_2127 = G__2132;
chunk__2124_2128 = G__2133;
count__2125_2129 = G__2134;
i__2126_2130 = G__2135;
continue;
} else {
var temp__5457__auto___2136 = cljs.core.seq.call(null,seq__2123_2127);
if(temp__5457__auto___2136){
var seq__2123_2137__$1 = temp__5457__auto___2136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2123_2137__$1)){
var c__4609__auto___2138 = cljs.core.chunk_first.call(null,seq__2123_2137__$1);
var G__2139 = cljs.core.chunk_rest.call(null,seq__2123_2137__$1);
var G__2140 = c__4609__auto___2138;
var G__2141 = cljs.core.count.call(null,c__4609__auto___2138);
var G__2142 = (0);
seq__2123_2127 = G__2139;
chunk__2124_2128 = G__2140;
count__2125_2129 = G__2141;
i__2126_2130 = G__2142;
continue;
} else {
var node_2143 = cljs.core.first.call(null,seq__2123_2137__$1);
goog.dom.setTextContent(node_2143,value);


var G__2144 = cljs.core.next.call(null,seq__2123_2137__$1);
var G__2145 = null;
var G__2146 = (0);
var G__2147 = (0);
seq__2123_2127 = G__2144;
chunk__2124_2128 = G__2145;
count__2125_2129 = G__2146;
i__2126_2130 = G__2147;
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
var seq__2148_2152 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2149_2153 = null;
var count__2150_2154 = (0);
var i__2151_2155 = (0);
while(true){
if((i__2151_2155 < count__2150_2154)){
var node_2156 = cljs.core._nth.call(null,chunk__2149_2153,i__2151_2155);
goog.dom.forms.setValue(node_2156,value);


var G__2157 = seq__2148_2152;
var G__2158 = chunk__2149_2153;
var G__2159 = count__2150_2154;
var G__2160 = (i__2151_2155 + (1));
seq__2148_2152 = G__2157;
chunk__2149_2153 = G__2158;
count__2150_2154 = G__2159;
i__2151_2155 = G__2160;
continue;
} else {
var temp__5457__auto___2161 = cljs.core.seq.call(null,seq__2148_2152);
if(temp__5457__auto___2161){
var seq__2148_2162__$1 = temp__5457__auto___2161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2148_2162__$1)){
var c__4609__auto___2163 = cljs.core.chunk_first.call(null,seq__2148_2162__$1);
var G__2164 = cljs.core.chunk_rest.call(null,seq__2148_2162__$1);
var G__2165 = c__4609__auto___2163;
var G__2166 = cljs.core.count.call(null,c__4609__auto___2163);
var G__2167 = (0);
seq__2148_2152 = G__2164;
chunk__2149_2153 = G__2165;
count__2150_2154 = G__2166;
i__2151_2155 = G__2167;
continue;
} else {
var node_2168 = cljs.core.first.call(null,seq__2148_2162__$1);
goog.dom.forms.setValue(node_2168,value);


var G__2169 = cljs.core.next.call(null,seq__2148_2162__$1);
var G__2170 = null;
var G__2171 = (0);
var G__2172 = (0);
seq__2148_2152 = G__2169;
chunk__2149_2153 = G__2170;
count__2150_2154 = G__2171;
i__2151_2155 = G__2172;
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
var value_2178 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__2174_2179 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__2175_2180 = null;
var count__2176_2181 = (0);
var i__2177_2182 = (0);
while(true){
if((i__2177_2182 < count__2176_2181)){
var node_2183 = cljs.core._nth.call(null,chunk__2175_2180,i__2177_2182);
(node_2183.innerHTML = value_2178);


var G__2184 = seq__2174_2179;
var G__2185 = chunk__2175_2180;
var G__2186 = count__2176_2181;
var G__2187 = (i__2177_2182 + (1));
seq__2174_2179 = G__2184;
chunk__2175_2180 = G__2185;
count__2176_2181 = G__2186;
i__2177_2182 = G__2187;
continue;
} else {
var temp__5457__auto___2188 = cljs.core.seq.call(null,seq__2174_2179);
if(temp__5457__auto___2188){
var seq__2174_2189__$1 = temp__5457__auto___2188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2174_2189__$1)){
var c__4609__auto___2190 = cljs.core.chunk_first.call(null,seq__2174_2189__$1);
var G__2191 = cljs.core.chunk_rest.call(null,seq__2174_2189__$1);
var G__2192 = c__4609__auto___2190;
var G__2193 = cljs.core.count.call(null,c__4609__auto___2190);
var G__2194 = (0);
seq__2174_2179 = G__2191;
chunk__2175_2180 = G__2192;
count__2176_2181 = G__2193;
i__2177_2182 = G__2194;
continue;
} else {
var node_2195 = cljs.core.first.call(null,seq__2174_2189__$1);
(node_2195.innerHTML = value_2178);


var G__2196 = cljs.core.next.call(null,seq__2174_2189__$1);
var G__2197 = null;
var G__2198 = (0);
var G__2199 = (0);
seq__2174_2179 = G__2196;
chunk__2175_2180 = G__2197;
count__2176_2181 = G__2198;
i__2177_2182 = G__2199;
continue;
}
} else {
}
}
break;
}
}catch (e2173){if((e2173 instanceof Error)){
var e_2200 = e2173;
domina.replace_children_BANG_.call(null,content,value_2178);
} else {
throw e2173;

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
var G__2202 = arguments.length;
switch (G__2202) {
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
var seq__2206_2210 = cljs.core.seq.call(null,children);
var chunk__2207_2211 = null;
var count__2208_2212 = (0);
var i__2209_2213 = (0);
while(true){
if((i__2209_2213 < count__2208_2212)){
var child_2214 = cljs.core._nth.call(null,chunk__2207_2211,i__2209_2213);
frag.appendChild(child_2214);


var G__2215 = seq__2206_2210;
var G__2216 = chunk__2207_2211;
var G__2217 = count__2208_2212;
var G__2218 = (i__2209_2213 + (1));
seq__2206_2210 = G__2215;
chunk__2207_2211 = G__2216;
count__2208_2212 = G__2217;
i__2209_2213 = G__2218;
continue;
} else {
var temp__5457__auto___2219 = cljs.core.seq.call(null,seq__2206_2210);
if(temp__5457__auto___2219){
var seq__2206_2220__$1 = temp__5457__auto___2219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2206_2220__$1)){
var c__4609__auto___2221 = cljs.core.chunk_first.call(null,seq__2206_2220__$1);
var G__2222 = cljs.core.chunk_rest.call(null,seq__2206_2220__$1);
var G__2223 = c__4609__auto___2221;
var G__2224 = cljs.core.count.call(null,c__4609__auto___2221);
var G__2225 = (0);
seq__2206_2210 = G__2222;
chunk__2207_2211 = G__2223;
count__2208_2212 = G__2224;
i__2209_2213 = G__2225;
continue;
} else {
var child_2226 = cljs.core.first.call(null,seq__2206_2220__$1);
frag.appendChild(child_2226);


var G__2227 = cljs.core.next.call(null,seq__2206_2220__$1);
var G__2228 = null;
var G__2229 = (0);
var G__2230 = (0);
seq__2206_2210 = G__2227;
chunk__2207_2211 = G__2228;
count__2208_2212 = G__2229;
i__2209_2213 = G__2230;
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2204_SHARP_,p2__2205_SHARP_){
return f.call(null,p1__2204_SHARP_,p2__2205_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__2232 = arguments.length;
switch (G__2232) {
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
var G__2235 = arguments.length;
switch (G__2235) {
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
