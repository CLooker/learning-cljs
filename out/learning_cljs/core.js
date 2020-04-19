// Compiled by ClojureScript 1.10.597 {}
goog.provide('learning_cljs.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('domina');
goog.require('domina.events');
if((typeof learning_cljs !== 'undefined') && (typeof learning_cljs.core !== 'undefined') && (typeof learning_cljs.core.conn !== 'undefined')){
} else {
learning_cljs.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
learning_cljs.core.el_id__GT_n = (function learning_cljs$core$el_id__GT_n(el_id){
return window.parseFloat(domina.value.call(null,domina.by_id.call(null,el_id)));
});
learning_cljs.core.arithmetic_mean = (function learning_cljs$core$arithmetic_mean(a,b){
return ((a + b) / (2));
});
learning_cljs.core.geometric_mean = (function learning_cljs$core$geometric_mean(a,b){
return Math.sqrt((a * b));
});
learning_cljs.core.harmonic_mean = (function learning_cljs$core$harmonic_mean(a,b){
return ((2) / (((1) / b) + ((1) / a)));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"averages-btn"),"click",(function (ev){
var a_n = learning_cljs.core.el_id__GT_n.call(null,"A");
var b_n = learning_cljs.core.el_id__GT_n.call(null,"B");
var invalid_QMARK_ = (function (){var or__4185__auto__ = (a_n === (0));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (b_n === (0));
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = isNaN(a_n);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return isNaN(b_n);
}
}
}
})();
if(cljs.core.truth_(invalid_QMARK_)){
return null;
} else {
domina.set_text_BANG_.call(null,domina.by_id.call(null,"arithmetic"),learning_cljs.core.arithmetic_mean.call(null,a_n,b_n));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"geometric"),learning_cljs.core.geometric_mean.call(null,a_n,b_n));

return domina.set_text_BANG_.call(null,domina.by_id.call(null,"harmonic"),learning_cljs.core.harmonic_mean.call(null,a_n,b_n));
}
}));
learning_cljs.core.price = (function learning_cljs$core$price(quantity,unit_price){
return (quantity * unit_price).toFixed((2));
});
learning_cljs.core.discount_rate = (function learning_cljs$core$discount_rate(quantity){
if((quantity <= (10))){
return (0);
} else {
if(((((11) <= quantity)) && ((quantity <= (50))))){
return .01;
} else {
if(((((51) <= quantity)) && ((quantity <= (100))))){
return .03;
} else {
if(((((101) <= quantity)) && ((quantity <= (200))))){
return .05;
} else {
if(((201) <= quantity)){
return .075;
} else {
return null;
}
}
}
}
}
});
learning_cljs.core.discount = (function learning_cljs$core$discount(quantity,unit_price){
return (learning_cljs.core.price.call(null,quantity,unit_price) * learning_cljs.core.discount_rate.call(null,quantity)).toFixed((2));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"discount-btn"),"click",(function (ev){
var qty = learning_cljs.core.el_id__GT_n.call(null,"qty");
var pr = learning_cljs.core.el_id__GT_n.call(null,"price");
if(cljs.core.truth_((function (){var or__4185__auto__ = (qty < (0));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (qty === (0));
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (pr < (0));
if(or__4185__auto____$2){
return or__4185__auto____$2;
} else {
var or__4185__auto____$3 = (pr === (0));
if(or__4185__auto____$3){
return or__4185__auto____$3;
} else {
var or__4185__auto____$4 = isNaN(qty);
if(cljs.core.truth_(or__4185__auto____$4)){
return or__4185__auto____$4;
} else {
return isNaN(pr);
}
}
}
}
}
})())){
return null;
} else {
var price_before_discount = learning_cljs.core.price.call(null,qty,pr);
var disc = learning_cljs.core.discount.call(null,qty,pr);
var price_after_discount = (price_before_discount - disc).toFixed((2));
cljs.core.println.call(null,"disc",disc);

domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-val"),price_before_discount);

domina.set_text_BANG_.call(null,domina.by_id.call(null,"discount-val"),disc);

return domina.set_text_BANG_.call(null,domina.by_id.call(null,"discounted-val"),price_after_discount);
}
}));

//# sourceMappingURL=core.js.map
