(this["webpackJsonptable-sort--app"]=this["webpackJsonptable-sort--app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=a(4),u=a(3),m=a.n(u),i=a(7),o=a(1),d=(a(16),a(17),function(){return l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"lds-ring"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}),E=(a(18),function(e){var t,a=e.data,n=e.onSort,r=e.sortType,c=e.sortField,s=e.onRowSelect;return t=a?a.map((function(e){return l.a.createElement("tr",{key:e.id,className:"subtitle",onClick:function(){return s(e)}},l.a.createElement("td",{className:"subtitleItem"},e.id),l.a.createElement("td",{className:"subtitleItem"},e.email),l.a.createElement("td",{className:"subtitleItem"},e.username),l.a.createElement("td",{className:"subtitleItem"},e.lastname),l.a.createElement("td",{className:"subtitleItem"},e.password))})):l.a.createElement("tr",null,l.a.createElement("td",null,"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{className:"titleTable"},l.a.createElement("th",{className:"titleItem",onClick:function(){return n("id")}},"id ","id"===c&&l.a.createElement("small",null,"desc"===r?"\u25b2":"\u25bc")),l.a.createElement("th",{className:"titleItem",onClick:function(){return n("email")}},"email ","email"===c&&l.a.createElement("small",null,"desc"===r?"\u25b2":"\u25bc")),l.a.createElement("th",{className:"titleItem",onClick:function(){return n("username")}},"username ","username"===c&&l.a.createElement("small",null,"desc"===r?"\u25b2":"\u25bc")),l.a.createElement("th",{className:"titleItem",onClick:function(){return n("lastname")}},"lastName ","lastname"===c&&l.a.createElement("small",null,"desc"===r?"\u25b2":"\u25bc")),l.a.createElement("th",{className:"titleItem",onClick:function(){return n("password")}},"password ","password"===c&&l.a.createElement("small",null,"desc"===r?"\u25b2":"\u25bc")))),l.a.createElement("tbody",null,t))}),b=a(8),f=a.n(b),p=(a(21),function(e){var t=e.row;return l.a.createElement("div",{className:"row"},"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",l.a.createElement("b",null,t.username),l.a.createElement("br",null),"\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",l.a.createElement("b",null,t.lastname),l.a.createElement("br",null),"email: ",l.a.createElement("b",null,t.email))}),v=(a(22),function(e){var t=e.setMode;return l.a.createElement("div",{className:"loading"},l.a.createElement("button",{onClick:function(){return t("1000")}},"1000 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"),l.a.createElement("button",{onClick:function(){return t("32")}},"32 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"))}),j=a(9),h=a.n(j),O=function(e,t){for(var a=[],n=Math.ceil(e.length/t),l=0;n>0;)a.push(e.slice(l,l+t)),n-=1,l+=t;return a},w=function(e){var t=e.onSearch,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1];return l.a.createElement("div",null,l.a.createElement("input",{onKeyDown:function(e){return t(e,c)},value:c,onChange:function(e){return s(e.currentTarget.value)},type:"text",placeholder:"search..."}))},N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),u=Object(o.a)(c,2),b=u[0],j=u[1],N=Object(n.useState)([]),g=Object(o.a)(N,2),C=g[0],S=g[1],k=Object(n.useState)("asc"),y=Object(o.a)(k,2),I=y[0],x=y[1],L=Object(n.useState)("id"),T=Object(o.a)(L,2),D=T[0],F=T[1],M=Object(n.useState)(null),P=Object(o.a)(M,2),R=P[0],J=P[1],B=Object(n.useState)(0),K=Object(o.a)(B,2),q=K[0],z=K[1],A=Object(n.useState)([]),G=Object(o.a)(A,2),H=G[0],Q=G[1],U=Object(n.useState)(""),V=Object(o.a)(U,2),W=V[0],X=V[1],Y=function(){var e=Object(i.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("http://www.filltext.com/?rows=".concat(a,"&id={index}&email={email}&lastname={lastName}&username={username}&password={randomString|5}&pretty=true"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,S(n),Q(O(n,50)),j(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Y()}),[a]),Object(n.useEffect)((function(){var e=C.filter((function(e){return e.email.toLowerCase().includes(W.toLowerCase())||e.username.toLowerCase().includes(W.toLowerCase())}));Q(O(e,50))}),[W]);return a?l.a.createElement("div",{className:"container"},b?l.a.createElement(d,null):l.a.createElement(n.Fragment,null,l.a.createElement(w,{onSearch:function(e,t){"Enter"===e.key&&(X(t),z(0))}}),l.a.createElement(E,{data:H[q],onSort:function(e){var t=Object(s.a)(H),a="asc"===I?"desc":"asc",n=f()(t[q],e,a);t[q]=Object(s.a)(t[q]=n),Q(t),x(a),F(e)},sortType:I,sortField:D,onRowSelect:function(e){J(e)}})),C.length>50&&0!==H.length&&l.a.createElement(h.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:H.length,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;z(t)},containerClassName:"pagination",activeClassName:"active",forcePage:q}),R&&l.a.createElement(p,{row:R})):l.a.createElement("div",{className:"container"},l.a.createElement(v,{setMode:r}))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7e26fd05.chunk.js.map