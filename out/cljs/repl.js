// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1592){
var map__1593 = p__1592;
var map__1593__$1 = (((((!((map__1593 == null))))?(((((map__1593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1593):map__1593);
var m = map__1593__$1;
var n = cljs.core.get.call(null,map__1593__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1593__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1595_1627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1596_1628 = null;
var count__1597_1629 = (0);
var i__1598_1630 = (0);
while(true){
if((i__1598_1630 < count__1597_1629)){
var f_1631 = cljs.core._nth.call(null,chunk__1596_1628,i__1598_1630);
cljs.core.println.call(null,"  ",f_1631);


var G__1632 = seq__1595_1627;
var G__1633 = chunk__1596_1628;
var G__1634 = count__1597_1629;
var G__1635 = (i__1598_1630 + (1));
seq__1595_1627 = G__1632;
chunk__1596_1628 = G__1633;
count__1597_1629 = G__1634;
i__1598_1630 = G__1635;
continue;
} else {
var temp__5457__auto___1636 = cljs.core.seq.call(null,seq__1595_1627);
if(temp__5457__auto___1636){
var seq__1595_1637__$1 = temp__5457__auto___1636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1595_1637__$1)){
var c__4609__auto___1638 = cljs.core.chunk_first.call(null,seq__1595_1637__$1);
var G__1639 = cljs.core.chunk_rest.call(null,seq__1595_1637__$1);
var G__1640 = c__4609__auto___1638;
var G__1641 = cljs.core.count.call(null,c__4609__auto___1638);
var G__1642 = (0);
seq__1595_1627 = G__1639;
chunk__1596_1628 = G__1640;
count__1597_1629 = G__1641;
i__1598_1630 = G__1642;
continue;
} else {
var f_1643 = cljs.core.first.call(null,seq__1595_1637__$1);
cljs.core.println.call(null,"  ",f_1643);


var G__1644 = cljs.core.next.call(null,seq__1595_1637__$1);
var G__1645 = null;
var G__1646 = (0);
var G__1647 = (0);
seq__1595_1627 = G__1644;
chunk__1596_1628 = G__1645;
count__1597_1629 = G__1646;
i__1598_1630 = G__1647;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1648 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1648);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1648)))?cljs.core.second.call(null,arglists_1648):arglists_1648));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1599_1649 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1600_1650 = null;
var count__1601_1651 = (0);
var i__1602_1652 = (0);
while(true){
if((i__1602_1652 < count__1601_1651)){
var vec__1613_1653 = cljs.core._nth.call(null,chunk__1600_1650,i__1602_1652);
var name_1654 = cljs.core.nth.call(null,vec__1613_1653,(0),null);
var map__1616_1655 = cljs.core.nth.call(null,vec__1613_1653,(1),null);
var map__1616_1656__$1 = (((((!((map__1616_1655 == null))))?(((((map__1616_1655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1616_1655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1616_1655):map__1616_1655);
var doc_1657 = cljs.core.get.call(null,map__1616_1656__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1658 = cljs.core.get.call(null,map__1616_1656__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1654);

cljs.core.println.call(null," ",arglists_1658);

if(cljs.core.truth_(doc_1657)){
cljs.core.println.call(null," ",doc_1657);
} else {
}


var G__1659 = seq__1599_1649;
var G__1660 = chunk__1600_1650;
var G__1661 = count__1601_1651;
var G__1662 = (i__1602_1652 + (1));
seq__1599_1649 = G__1659;
chunk__1600_1650 = G__1660;
count__1601_1651 = G__1661;
i__1602_1652 = G__1662;
continue;
} else {
var temp__5457__auto___1663 = cljs.core.seq.call(null,seq__1599_1649);
if(temp__5457__auto___1663){
var seq__1599_1664__$1 = temp__5457__auto___1663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1599_1664__$1)){
var c__4609__auto___1665 = cljs.core.chunk_first.call(null,seq__1599_1664__$1);
var G__1666 = cljs.core.chunk_rest.call(null,seq__1599_1664__$1);
var G__1667 = c__4609__auto___1665;
var G__1668 = cljs.core.count.call(null,c__4609__auto___1665);
var G__1669 = (0);
seq__1599_1649 = G__1666;
chunk__1600_1650 = G__1667;
count__1601_1651 = G__1668;
i__1602_1652 = G__1669;
continue;
} else {
var vec__1618_1670 = cljs.core.first.call(null,seq__1599_1664__$1);
var name_1671 = cljs.core.nth.call(null,vec__1618_1670,(0),null);
var map__1621_1672 = cljs.core.nth.call(null,vec__1618_1670,(1),null);
var map__1621_1673__$1 = (((((!((map__1621_1672 == null))))?(((((map__1621_1672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1621_1672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1621_1672):map__1621_1672);
var doc_1674 = cljs.core.get.call(null,map__1621_1673__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1675 = cljs.core.get.call(null,map__1621_1673__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1671);

cljs.core.println.call(null," ",arglists_1675);

if(cljs.core.truth_(doc_1674)){
cljs.core.println.call(null," ",doc_1674);
} else {
}


var G__1676 = cljs.core.next.call(null,seq__1599_1664__$1);
var G__1677 = null;
var G__1678 = (0);
var G__1679 = (0);
seq__1599_1649 = G__1676;
chunk__1600_1650 = G__1677;
count__1601_1651 = G__1678;
i__1602_1652 = G__1679;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__1623 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1624 = null;
var count__1625 = (0);
var i__1626 = (0);
while(true){
if((i__1626 < count__1625)){
var role = cljs.core._nth.call(null,chunk__1624,i__1626);
var temp__5457__auto___1680__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1680__$1)){
var spec_1681 = temp__5457__auto___1680__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1681));
} else {
}


var G__1682 = seq__1623;
var G__1683 = chunk__1624;
var G__1684 = count__1625;
var G__1685 = (i__1626 + (1));
seq__1623 = G__1682;
chunk__1624 = G__1683;
count__1625 = G__1684;
i__1626 = G__1685;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__1623);
if(temp__5457__auto____$1){
var seq__1623__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1623__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__1623__$1);
var G__1686 = cljs.core.chunk_rest.call(null,seq__1623__$1);
var G__1687 = c__4609__auto__;
var G__1688 = cljs.core.count.call(null,c__4609__auto__);
var G__1689 = (0);
seq__1623 = G__1686;
chunk__1624 = G__1687;
count__1625 = G__1688;
i__1626 = G__1689;
continue;
} else {
var role = cljs.core.first.call(null,seq__1623__$1);
var temp__5457__auto___1690__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1690__$2)){
var spec_1691 = temp__5457__auto___1690__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1691));
} else {
}


var G__1692 = cljs.core.next.call(null,seq__1623__$1);
var G__1693 = null;
var G__1694 = (0);
var G__1695 = (0);
seq__1623 = G__1692;
chunk__1624 = G__1693;
count__1625 = G__1694;
i__1626 = G__1695;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1696 = cljs.core.conj.call(null,via,t);
var G__1697 = cljs.core.ex_cause.call(null,t);
via = G__1696;
t = G__1697;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1700 = datafied_throwable;
var map__1700__$1 = (((((!((map__1700 == null))))?(((((map__1700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1700):map__1700);
var via = cljs.core.get.call(null,map__1700__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1700__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1700__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1701 = cljs.core.last.call(null,via);
var map__1701__$1 = (((((!((map__1701 == null))))?(((((map__1701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1701):map__1701);
var type = cljs.core.get.call(null,map__1701__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1701__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1701__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1702 = data;
var map__1702__$1 = (((((!((map__1702 == null))))?(((((map__1702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1702):map__1702);
var problems = cljs.core.get.call(null,map__1702__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1702__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1702__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1703 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1703__$1 = (((((!((map__1703 == null))))?(((((map__1703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1703):map__1703);
var top_data = map__1703__$1;
var source = cljs.core.get.call(null,map__1703__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1708 = phase;
var G__1708__$1 = (((G__1708 instanceof cljs.core.Keyword))?G__1708.fqn:null);
switch (G__1708__$1) {
case "read-source":
var map__1709 = data;
var map__1709__$1 = (((((!((map__1709 == null))))?(((((map__1709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1709):map__1709);
var line = cljs.core.get.call(null,map__1709__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1709__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1711 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1711__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1711,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1711);
var G__1711__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1711__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1711__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1711__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1711__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1712 = top_data;
var G__1712__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1712,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1712);
var G__1712__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1712__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1712__$1);
var G__1712__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1712__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1712__$2);
var G__1712__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1712__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1712__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1712__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1712__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1713 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1713,(0),null);
var method = cljs.core.nth.call(null,vec__1713,(1),null);
var file = cljs.core.nth.call(null,vec__1713,(2),null);
var line = cljs.core.nth.call(null,vec__1713,(3),null);
var G__1716 = top_data;
var G__1716__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1716,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1716);
var G__1716__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1716__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1716__$1);
var G__1716__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__1716__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1716__$2);
var G__1716__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1716__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1716__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1716__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1716__$4;
}

break;
case "execution":
var vec__1717 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1717,(0),null);
var method = cljs.core.nth.call(null,vec__1717,(1),null);
var file = cljs.core.nth.call(null,vec__1717,(2),null);
var line = cljs.core.nth.call(null,vec__1717,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1699_SHARP_){
var or__4185__auto__ = (p1__1699_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1699_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__1720 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1720__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1720,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1720);
var G__1720__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1720__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1720__$1);
var G__1720__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1720__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1720__$2);
var G__1720__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1720__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1720__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1720__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1720__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1708__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1724){
var map__1725 = p__1724;
var map__1725__$1 = (((((!((map__1725 == null))))?(((((map__1725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1725):map__1725);
var triage_data = map__1725__$1;
var phase = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1725__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1727 = phase;
var G__1727__$1 = (((G__1727 instanceof cljs.core.Keyword))?G__1727.fqn:null);
switch (G__1727__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1728_1737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1729_1738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1730_1739 = true;
var _STAR_print_fn_STAR__temp_val__1731_1740 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1730_1739);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1731_1740);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1722_SHARP_){
return cljs.core.dissoc.call(null,p1__1722_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1729_1738);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1728_1737);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1732_1741 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1733_1742 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1734_1743 = true;
var _STAR_print_fn_STAR__temp_val__1735_1744 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1734_1743);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1735_1744);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1723_SHARP_){
return cljs.core.dissoc.call(null,p1__1723_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1733_1742);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1732_1741);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1727__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
