(this["webpackJsonpgraphql-ast"]=this["webpackJsonpgraphql-ast"]||[]).push([[0],{67:function(n,t,e){},68:function(n,t,e){},75:function(n,t,e){"use strict";e.r(t);var c=e(0),r=e.n(c),a=e(25),i=e.n(a),o=(e(67),e(12)),u=(e(68),e(112)),s=e(113),j=e(115),l=e(109),b=e(110),O=e(51),f=e(2);function h(n,t){if(function(n){var t=JSON.stringify(n);return"["===t[0]&&"]"===t[t.length-1]}(n))return"["+n.map((function(n){return p(n)?h(n,t):"".concat(n)})).join(",\n")+"]";var e=Object.entries(n),c=e.filter((function(n){return g(Object(o.a)(n,2)[1],t)})).map((function(n){var t=Object(o.a)(n,2),e=t[0],c=t[1];return"!!".concat(e,": ").concat(c)})),r=e.filter((function(n){return!g(Object(o.a)(n,2)[1],t)})).map((function(n){var e=Object(o.a)(n,2),c=e[0],r=e[1];return"".concat(c,": ").concat(p(r)?h(r,t):"".concat(r))}));return"{\n"+c.concat(r).join(",\n")+"}"}function p(n){return"object"===typeof n}function g(n,t){return"string"===typeof n&&n===t}var d=function(){var n,t,e,c=r.a.useState(""),a=Object(o.a)(c,2),i=a[0],p=a[1],g=r.a.useState(""),d=Object(o.a)(g,2),x=d[0],m=d[1];try{e=i,n=JSON.stringify(Object(O.a)(Object(b.a)(e)),null,2),t=JSON.parse(n)}catch(v){n="invalid input",t={}}return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(u.a,{container:!0,alignItems:"center",spacing:2,margin:"auto",children:Object(f.jsx)(u.a,{item:!0,children:Object(f.jsxs)(s.a,{children:[Object(f.jsx)(j.a,{children:"Get the Abstract Syntax Tree"}),Object(f.jsx)(l.a,{multiline:!0,onChange:function(n){return p(n.target.value)},children:i}),Object(f.jsx)(j.a,{children:i.split(" ").map((function(n){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{onMouseLeave:function(){return m("")},onMouseOver:function(){console.log(n.replaceAll(/[{}:+-]/gi,"")),m(n.replaceAll(/[{}:+-]/gi,""))},children:n}),Object(f.jsx)("span",{children:" "})]})}))}),Object(f.jsx)("pre",{children:Object(f.jsx)(j.a,{children:n})}),Object(f.jsxs)("span",{children:["FORMAT AST ",h(t,x)]})]})})})})},x=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,116)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),c(n),r(n),a(n),i(n)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(d,{})}),document.getElementById("root")),x()}},[[75,1,2]]]);
//# sourceMappingURL=main.c4a23d12.chunk.js.map