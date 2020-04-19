// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1466){
var map__1467 = p__1466;
var map__1467__$1 = (((((!((map__1467 == null))))?(((((map__1467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1467):map__1467);
var m = map__1467__$1;
var n = cljs.core.get.call(null,map__1467__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1469_1501 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1470_1502 = null;
var count__1471_1503 = (0);
var i__1472_1504 = (0);
while(true){
if((i__1472_1504 < count__1471_1503)){
var f_1505 = cljs.core._nth.call(null,chunk__1470_1502,i__1472_1504);
cljs.core.println.call(null,"  ",f_1505);


var G__1506 = seq__1469_1501;
var G__1507 = chunk__1470_1502;
var G__1508 = count__1471_1503;
var G__1509 = (i__1472_1504 + (1));
seq__1469_1501 = G__1506;
chunk__1470_1502 = G__1507;
count__1471_1503 = G__1508;
i__1472_1504 = G__1509;
continue;
} else {
var temp__5457__auto___1510 = cljs.core.seq.call(null,seq__1469_1501);
if(temp__5457__auto___1510){
var seq__1469_1511__$1 = temp__5457__auto___1510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1469_1511__$1)){
var c__4609__auto___1512 = cljs.core.chunk_first.call(null,seq__1469_1511__$1);
var G__1513 = cljs.core.chunk_rest.call(null,seq__1469_1511__$1);
var G__1514 = c__4609__auto___1512;
var G__1515 = cljs.core.count.call(null,c__4609__auto___1512);
var G__1516 = (0);
seq__1469_1501 = G__1513;
chunk__1470_1502 = G__1514;
count__1471_1503 = G__1515;
i__1472_1504 = G__1516;
continue;
} else {
var f_1517 = cljs.core.first.call(null,seq__1469_1511__$1);
cljs.core.println.call(null,"  ",f_1517);


var G__1518 = cljs.core.next.call(null,seq__1469_1511__$1);
var G__1519 = null;
var G__1520 = (0);
var G__1521 = (0);
seq__1469_1501 = G__1518;
chunk__1470_1502 = G__1519;
count__1471_1503 = G__1520;
i__1472_1504 = G__1521;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1522 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1522);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1522)))?cljs.core.second.call(null,arglists_1522):arglists_1522));
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
var seq__1473_1523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1474_1524 = null;
var count__1475_1525 = (0);
var i__1476_1526 = (0);
while(true){
if((i__1476_1526 < count__1475_1525)){
var vec__1487_1527 = cljs.core._nth.call(null,chunk__1474_1524,i__1476_1526);
var name_1528 = cljs.core.nth.call(null,vec__1487_1527,(0),null);
var map__1490_1529 = cljs.core.nth.call(null,vec__1487_1527,(1),null);
var map__1490_1530__$1 = (((((!((map__1490_1529 == null))))?(((((map__1490_1529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1490_1529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1490_1529):map__1490_1529);
var doc_1531 = cljs.core.get.call(null,map__1490_1530__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1532 = cljs.core.get.call(null,map__1490_1530__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1528);

cljs.core.println.call(null," ",arglists_1532);

if(cljs.core.truth_(doc_1531)){
cljs.core.println.call(null," ",doc_1531);
} else {
}


var G__1533 = seq__1473_1523;
var G__1534 = chunk__1474_1524;
var G__1535 = count__1475_1525;
var G__1536 = (i__1476_1526 + (1));
seq__1473_1523 = G__1533;
chunk__1474_1524 = G__1534;
count__1475_1525 = G__1535;
i__1476_1526 = G__1536;
continue;
} else {
var temp__5457__auto___1537 = cljs.core.seq.call(null,seq__1473_1523);
if(temp__5457__auto___1537){
var seq__1473_1538__$1 = temp__5457__auto___1537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1473_1538__$1)){
var c__4609__auto___1539 = cljs.core.chunk_first.call(null,seq__1473_1538__$1);
var G__1540 = cljs.core.chunk_rest.call(null,seq__1473_1538__$1);
var G__1541 = c__4609__auto___1539;
var G__1542 = cljs.core.count.call(null,c__4609__auto___1539);
var G__1543 = (0);
seq__1473_1523 = G__1540;
chunk__1474_1524 = G__1541;
count__1475_1525 = G__1542;
i__1476_1526 = G__1543;
continue;
} else {
var vec__1492_1544 = cljs.core.first.call(null,seq__1473_1538__$1);
var name_1545 = cljs.core.nth.call(null,vec__1492_1544,(0),null);
var map__1495_1546 = cljs.core.nth.call(null,vec__1492_1544,(1),null);
var map__1495_1547__$1 = (((((!((map__1495_1546 == null))))?(((((map__1495_1546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1495_1546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1495_1546):map__1495_1546);
var doc_1548 = cljs.core.get.call(null,map__1495_1547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1549 = cljs.core.get.call(null,map__1495_1547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1545);

cljs.core.println.call(null," ",arglists_1549);

if(cljs.core.truth_(doc_1548)){
cljs.core.println.call(null," ",doc_1548);
} else {
}


var G__1550 = cljs.core.next.call(null,seq__1473_1538__$1);
var G__1551 = null;
var G__1552 = (0);
var G__1553 = (0);
seq__1473_1523 = G__1550;
chunk__1474_1524 = G__1551;
count__1475_1525 = G__1552;
i__1476_1526 = G__1553;
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

var seq__1497 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1498 = null;
var count__1499 = (0);
var i__1500 = (0);
while(true){
if((i__1500 < count__1499)){
var role = cljs.core._nth.call(null,chunk__1498,i__1500);
var temp__5457__auto___1554__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1554__$1)){
var spec_1555 = temp__5457__auto___1554__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1555));
} else {
}


var G__1556 = seq__1497;
var G__1557 = chunk__1498;
var G__1558 = count__1499;
var G__1559 = (i__1500 + (1));
seq__1497 = G__1556;
chunk__1498 = G__1557;
count__1499 = G__1558;
i__1500 = G__1559;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__1497);
if(temp__5457__auto____$1){
var seq__1497__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1497__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__1497__$1);
var G__1560 = cljs.core.chunk_rest.call(null,seq__1497__$1);
var G__1561 = c__4609__auto__;
var G__1562 = cljs.core.count.call(null,c__4609__auto__);
var G__1563 = (0);
seq__1497 = G__1560;
chunk__1498 = G__1561;
count__1499 = G__1562;
i__1500 = G__1563;
continue;
} else {
var role = cljs.core.first.call(null,seq__1497__$1);
var temp__5457__auto___1564__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1564__$2)){
var spec_1565 = temp__5457__auto___1564__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1565));
} else {
}


var G__1566 = cljs.core.next.call(null,seq__1497__$1);
var G__1567 = null;
var G__1568 = (0);
var G__1569 = (0);
seq__1497 = G__1566;
chunk__1498 = G__1567;
count__1499 = G__1568;
i__1500 = G__1569;
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
var G__1570 = cljs.core.conj.call(null,via,t);
var G__1571 = cljs.core.ex_cause.call(null,t);
via = G__1570;
t = G__1571;
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
var map__1574 = datafied_throwable;
var map__1574__$1 = (((((!((map__1574 == null))))?(((((map__1574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1574):map__1574);
var via = cljs.core.get.call(null,map__1574__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1574__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1574__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1575 = cljs.core.last.call(null,via);
var map__1575__$1 = (((((!((map__1575 == null))))?(((((map__1575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1575):map__1575);
var type = cljs.core.get.call(null,map__1575__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1575__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1575__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1576 = data;
var map__1576__$1 = (((((!((map__1576 == null))))?(((((map__1576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1576):map__1576);
var problems = cljs.core.get.call(null,map__1576__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1576__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1576__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1577 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1577__$1 = (((((!((map__1577 == null))))?(((((map__1577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1577):map__1577);
var top_data = map__1577__$1;
var source = cljs.core.get.call(null,map__1577__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1582 = phase;
var G__1582__$1 = (((G__1582 instanceof cljs.core.Keyword))?G__1582.fqn:null);
switch (G__1582__$1) {
case "read-source":
var map__1583 = data;
var map__1583__$1 = (((((!((map__1583 == null))))?(((((map__1583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1583):map__1583);
var line = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1585 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1585__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1585,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1585);
var G__1585__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1585__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1585__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1585__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1586 = top_data;
var G__1586__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1586,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1586);
var G__1586__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1586__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1586__$1);
var G__1586__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1586__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1586__$2);
var G__1586__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1586__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1586__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1586__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1586__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1587 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1587,(0),null);
var method = cljs.core.nth.call(null,vec__1587,(1),null);
var file = cljs.core.nth.call(null,vec__1587,(2),null);
var line = cljs.core.nth.call(null,vec__1587,(3),null);
var G__1590 = top_data;
var G__1590__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1590,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1590);
var G__1590__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1590__$1);
var G__1590__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__1590__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1590__$2);
var G__1590__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1590__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1590__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1590__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1590__$4;
}

break;
case "execution":
var vec__1591 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1591,(0),null);
var method = cljs.core.nth.call(null,vec__1591,(1),null);
var file = cljs.core.nth.call(null,vec__1591,(2),null);
var line = cljs.core.nth.call(null,vec__1591,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1573_SHARP_){
var or__4185__auto__ = (p1__1573_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1573_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__1594 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1594__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1594,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1594);
var G__1594__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1594__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1594__$1);
var G__1594__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__1594__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1594__$2);
var G__1594__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1594__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1594__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1594__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1594__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1582__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1598){
var map__1599 = p__1598;
var map__1599__$1 = (((((!((map__1599 == null))))?(((((map__1599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1599):map__1599);
var triage_data = map__1599__$1;
var phase = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1599__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__1601 = phase;
var G__1601__$1 = (((G__1601 instanceof cljs.core.Keyword))?G__1601.fqn:null);
switch (G__1601__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1602_1611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1603_1612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1604_1613 = true;
var _STAR_print_fn_STAR__temp_val__1605_1614 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1604_1613);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1605_1614);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1596_SHARP_){
return cljs.core.dissoc.call(null,p1__1596_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1603_1612);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1602_1611);
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
var _STAR_print_newline_STAR__orig_val__1606_1615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1607_1616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1608_1617 = true;
var _STAR_print_fn_STAR__temp_val__1609_1618 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1608_1617);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1609_1618);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1597_SHARP_){
return cljs.core.dissoc.call(null,p1__1597_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1607_1616);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1606_1615);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1601__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
