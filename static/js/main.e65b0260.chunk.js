(this["webpackJsonpreact-typing"]=this["webpackJsonpreact-typing"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(4),r=n.n(c),u=(n(9),n(10),n(2));var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=Object(i.useState)(""),n=Object(u.a)(e,2),c=n[0],r=n[1],a=Object(i.useState)(t),o=Object(u.a)(a,2),s=o[0],f=o[1],b=Object(i.useState)(!1),j=Object(u.a)(b,2),d=j[0],l=j[1],h=Object(i.useState)(0),g=Object(u.a)(h,2),O=g[0],m=g[1],x=Object(i.useRef)(null);function v(t){var e=t.target.value;r(e)}function p(t){return t.trim().split(" ").filter((function(t){return""!==t})).length}function C(){l(!0),f(t),r(""),x.current.disabled=!1,x.current.focus()}function R(){l(!1),m(p(c))}return Object(i.useEffect)((function(){d&&s>0?setTimeout((function(){f((function(t){return t-1}))}),1e3):0===s&&R()}),[s,d]),{textBoxRef:x,handleChange:v,text:c,isTimeRunning:d,timeRemaining:s,startGame:C,wordCount:O}},o=n(1);var s=function(){var t=a(),e=t.textBoxRef,n=t.handleChange,i=t.text,c=t.isTimeRunning,r=t.timeRemaining,u=t.startGame,s=t.wordCount;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"How fast do you type?"}),Object(o.jsx)("textarea",{ref:e,onChange:n,value:i,disabled:!c}),Object(o.jsxs)("h4",{children:["Time remaining: ",r]}),Object(o.jsx)("button",{onClick:u,disabled:c,children:"Start"}),Object(o.jsxs)("h1",{children:["Word count: ",s]})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),i(t),c(t),r(t),u(t)}))};r.a.render(Object(o.jsx)(s,{}),document.getElementById("root")),f()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e65b0260.chunk.js.map