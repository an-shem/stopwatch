(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{14:function(n,t,e){},19:function(n,t,e){"use strict";e.r(t);var c=e(0),r=e.n(c),i=e(6),o=e.n(i),a=(e(14),e(8)),s=e(4),u=e(21);var b,d,l=e(2),x=e(3),p=x.a.div(b||(b=Object(l.a)(["\n  width: 500px;\n  height: 200px;\n  font-size: 70px;\n  font-weight: 500;\n  align-self: center;\n  line-height: 1.8;\n  padding: 40px;\n  margin-bottom: 30px;\n  text-align: center;\n  background-color: #dddbb5a1;\n  border-radius: 30px;\n  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);\n"]))),f=e(1);function j(n){var t=n.time,e=t.hours,c=t.mins,r=t.secs;return Object(f.jsx)(p,{children:" ".concat(e,"  :  ").concat(c,"  :  ").concat(r," ")})}var h,O,g=x.a.button(d||(d=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  width: 150px;\n  align-items: center;\n  padding: 8px 10px;\n  border: 1px solid #c9c1c1;\n  border-radius: 14px;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: 0.03em;\n  text-align: center;\n  color: #5c6061;\n  background-color: #dddbb5a1;\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.37) inset;\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n  &:hover {\n    background-color: #edda9f;\n  }\n"])));function v(n){var t=n.titel,e=n.handelOnClick;return Object(f.jsx)(g,{type:"button",onClick:e,children:t})}var w=x.a.div(h||(h=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 600px;\n  height: 600px;\n  margin: 10px auto 0;\n  color: #5c6061;\n  background-color: #f5f4d38a;\n  border: 1px solid #c9c1c1;\n  border-radius: 50%;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.37) inset;\n"]))),m=x.a.div(O||(O=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]))),k={hours:"00",mins:"00",secs:"00"};function S(){var n=Object(c.useState)(k),t=Object(s.a)(n,2),e=t[0],r=t[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),b=o[0],d=o[1],l=Object(c.useState)(0),x=Object(s.a)(l,2),p=x[0],h=x[1],O=Object(c.useState)(!1),g=Object(s.a)(O,2),S=g[0],y=g[1],C=Object(c.useState)(0),M=Object(s.a)(C,2),E=M[0],z=M[1],D=Object(c.useRef)();Object(c.useEffect)((function(){var n=function(n){function t(n){return String(n).padStart(2,"0")}return function(n){return{hours:t(Math.floor(n%864e5/36e5)),mins:t(Math.floor(n%36e5/6e4)),secs:t(Math.floor(n%6e4/1e3))}}(n)}(1e3*p);r(Object(a.a)({},n))}),[p]),Object(c.useEffect)((function(){S&&(J(),y(!1))}),[S]);var I=new u.a((function(n){var t=1+p;setInterval((function(){n.next(t++)}),1e3)})),J=function(){b?R():(d(!0),D.current=I.subscribe({next:function(n){h(n)}}))},R=function(){D.current&&D.current.unsubscribe(),r(k),d(!1),h(0),D.current=null};return Object(f.jsxs)(w,{children:[Object(f.jsx)(j,{time:e}),Object(f.jsxs)(m,{children:[Object(f.jsx)(v,{titel:"Start / Stop",handelOnClick:J}),Object(f.jsx)(v,{titel:"Wait",handelOnClick:function(){if(E){var n=Date.now();n-E<=300&&(D.current&&D.current.unsubscribe(),d(!1)),z(n)}else z(Date.now())}}),Object(f.jsx)(v,{titel:"Reset",handelOnClick:function(){D.current&&(R(),y(!0))}})]})]})}o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f8dd15be.chunk.js.map