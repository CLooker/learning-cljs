// Compiled by ClojureScript 1.10.597 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_1659 = document.createElement("div");
var test_html_1660 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
(div_1659.innerHTML = test_html_1660);

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_1659.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_1659.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_1659.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map
