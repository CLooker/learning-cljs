// Compiled by ClojureScript 1.10.597 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_2005 = document.createElement("div");
var test_html_2006 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
(div_2005.innerHTML = test_html_2006);

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_2005.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_2005.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_2005.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map
