(this["webpackJsonpcompetitive-programming"]=this["webpackJsonpcompetitive-programming"]||[]).push([[8],{234:function(e,t,a){},235:function(e,t,a){"use strict";var n=a(40),c=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(42)).default)(s.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},236:function(e,t,a){"use strict";var n=a(34),c=a(8),s=a(196),i=a(4),r=a(35),o=a(1),l=a.n(o),u=(a(10),a(9)),d=a(11),b=a(12),j=o.forwardRef((function(e,t){var a=e.classes,n=e.className,s=e.component,r=void 0===s?"div":s,l=e.disableGutters,d=void 0!==l&&l,j=e.fixed,m=void 0!==j&&j,p=e.maxWidth,h=void 0===p?"lg":p,x=Object(c.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(r,Object(i.a)({className:Object(u.a)(a.root,n,m&&a.fixed,d&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(b.a)(String(h)))]),ref:t},x))})),m=Object(d.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(j),p=a(105),h=a(235),x=a.n(h),f=a(237),O=a.n(f),g=(a(234),a(6)),v=Object(s.a)((function(e){return{centerGrid:{display:"flex",alignItems:"center",justifyContent:"center"}}})),y=l.a.forwardRef((function(e,t){var a=e.children,s=e.upButton,i=e.onClickUp,r=e.upButtonStyle,o=e.downButton,u=e.onClickDown,d=e.downButtonStyle,b=Object(c.a)(e,["children","upButton","onClickUp","upButtonStyle","downButton","onClickDown","downButtonStyle"]),j=v();return Object(g.jsxs)(m,Object(n.a)(Object(n.a)({ref:t},b),{},{children:[s&&Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsx)("div",{className:j.centerGrid,children:Object(g.jsx)(p.a,{className:"bouncingButton","aria-label":"up",style:r||{color:"black"},onClick:i,children:Object(g.jsx)(O.a,{})})}),Object(g.jsx)("br",{})]}),a,o&&Object(g.jsxs)(l.a.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:j.centerGrid,children:Object(g.jsx)(p.a,{className:"bouncingButton","aria-label":"down",style:d||{color:"black"},onClick:u,children:Object(g.jsx)(x.a,{})})})]})]}))}));t.a=y},237:function(e,t,a){"use strict";var n=a(40),c=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(42)).default)(s.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=i},244:function(e,t,a){},245:function(e,t,a){"use strict";var n=a(40),c=a(41);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(42)).default)(s.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=i},270:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(23),c=a.n(n),s=a(43),i=a(18),r=a(1),o=a.n(r),l=a(130),u=a(84),d=a(245),b=a.n(d),j=a(70),m=a.n(j),p=a(69),h=a.n(p),x=a(71),f=a.n(x),O=a(236),g=a(64),v=a(34),y=a(94),k=a(204),w=a(96),S=a(83),W=a(114),C="cpi-form-responses",N="arn:aws:sns:us-east-2:042242103208:cpi-mailing-list-updates";function L(){return(L=Object(s.a)(c.a.mark((function e(t,a,n,s){var i,r,o,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Object(w.a)(),r={},e.prev=3,e.next=6,Object(W.a)();case 6:r=e.sent,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("User data error",e.t0),r={};case 13:return o={TableName:C,Item:Object(v.a)({id:{S:i},fname:{S:a},lname:{S:n},email:{S:t},message:{S:s}},r)},e.next=16,S.a.send(new y.a(o));case 16:return l=e.sent,console.log("Dynamo Put success:",l),e.prev=18,u={Subject:"New form response at cpicamp.com",Message:"New form response: ".concat(i,"\n Email Address: ").concat(t,"\n Name: ").concat(a," ").concat(n,"\n Message: ").concat(s),TopicArn:N},e.next=22,S.b.send(new k.a(u));case 22:d=e.sent,console.log("SNS success:",d),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(18),console.log("SNS error",e.t1);case 29:return e.abrupt("return",{success:!0,message:"Success! We'll get back to you as soon as possible."});case 32:return e.prev=32,e.t2=e.catch(0),console.log("Dynamo Put error",e.t2),e.abrupt("return",{success:!1,message:"There was an unexpected error. Please try again."});case 36:case"end":return e.stop()}}),e,null,[[0,32],[3,9],[18,26]])})))).apply(this,arguments)}var z=function(e,t,a,n){return L.apply(this,arguments)},E=a(229),M=(a(244),a(6)),B=Object(r.lazy)((function(){return a.e(0).then(a.bind(null,268))})),P=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,205))})),F=Object(r.lazy)((function(){return Promise.resolve().then(a.t.bind(null,106,7))})),G=Object(r.lazy)((function(){return a.e(1).then(a.t.bind(null,264,7))})),_=Object(r.lazy)((function(){return a.e(2).then(a.t.bind(null,265,7))})),D=[["Email:",Object(M.jsx)(h.a,{}),"devmchheda@gmail.com","devmchheda@gmail.com","mailto:devmchheda@gmail.com"],["Phone:",Object(M.jsx)(m.a,{}),"704-981-1789","704-981-1789","tel:704-981-1789"],["Facebook:",Object(M.jsx)(f.a,{}),"facebook.com/competitive.programming.institute","facebook.com/\ncompetitive.programming.institute","https://facebook.com/competitive.programming.institute"]];function R(e){var t=Object(r.useState)(1e3),a=Object(i.a)(t,2),n=a[0],d=a[1];Object(r.useEffect)((function(){d(window.innerWidth)}),[]),Object(r.useEffect)((function(){function e(){d(window.innerWidth)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var j=n<=g.b,m=Object(r.useState)(""),p=Object(i.a)(m,2),h=p[0],x=p[1],f=Object(r.useState)(""),v=Object(i.a)(f,2),y=v[0],k=v[1],w=Object(r.useState)(""),S=Object(i.a)(w,2),W=S[0],C=S[1],N=Object(r.useState)(""),L=Object(i.a)(N,2),R=L[0],A=L[1];var q=Object(r.useState)(0),I=Object(i.a)(q,2),T=I[0],U=I[1],J=Object(r.useState)(""),X=Object(i.a)(J,2),H=X[0],K=X[1],Q=["","#aaa","#4caf50","#f44336"];function V(){return(V=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),U(1),e.next=4,z(h,y,W,R);case 4:a=e.sent,K(a.message),a.success?U(2):U(3);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){"clickaway"!==t&&U(0)}return Object(M.jsxs)(o.a.Fragment,{children:[Object(M.jsx)(r.Suspense,{fallback:Object(M.jsx)(E.a,{}),children:Object(M.jsx)(B,{open:T>=2,autoHideDuration:5e3,onClose:Y,message:H,action:Object(M.jsx)(o.a.Fragment,{children:Object(M.jsx)(P,{size:"small","aria-label":"close",color:"inherit",onClick:Y,children:Object(M.jsx)(F,{fontSize:"small"})})}),ContentProps:{style:{backgroundColor:Q[T]}}})}),Object(M.jsx)("div",{style:{height:30}}),Object(M.jsxs)(O.a,{maxWidth:"md",children:[Object(M.jsx)(l.a,{variant:"h4",style:{textAlign:"left"},children:"Get in touch"}),Object(M.jsx)("div",{style:{height:20}}),D.map((function(e,t){return Object(M.jsxs)("div",{className:"linkWrap",style:{display:"flex",alignItems:"center"},children:[Object(M.jsxs)(u.a,{component:"a",href:e[4],target:"_blank",rel:"noopener noreferrer",style:{maxWidth:j?36:"",minWidth:j?36:""},children:[e[1]," ",j||Object(M.jsx)("div",{style:{marginLeft:10},children:e[0]})]}),Object(M.jsx)("div",{style:{marginLeft:5},className:"linkWrap",children:Object(M.jsx)("a",{href:e[4],target:"_blank",rel:"noopener noreferrer",children:j?e[3]:e[2]})})]},"contactlink".concat(t))}))]}),Object(M.jsx)("div",{style:{height:40}}),Object(M.jsxs)(O.a,{maxWidth:"md",children:[Object(M.jsx)(l.a,{variant:"h6",style:{color:"#000",textAlign:"left"},children:"Or, contact us with this form:"}),Object(M.jsx)("div",{style:{height:20}}),Object(M.jsxs)("form",{onSubmit:function(e){return V.apply(this,arguments)},children:[Object(M.jsx)("input",{autoComplete:"email",type:"email",required:!0,autoFocus:!0,placeholder:"Email Address",style:{width:j?"100%":"50%"},value:h,onChange:function(e){x(e.target.value)}}),Object(M.jsx)("div",{style:{height:10}}),Object(M.jsx)("input",{autoComplete:"first name",type:"text",required:!0,placeholder:"First Name",style:{width:j?"100%":"50%"},value:y,onChange:function(e){k(e.target.value)}}),Object(M.jsx)("div",{style:{height:10}}),Object(M.jsx)("input",{autoComplete:"last name",type:"text",required:!0,placeholder:"Last Name",style:{width:j?"100%":"50%"},value:W,onChange:function(e){C(e.target.value)}}),Object(M.jsx)("div",{style:{height:10}}),Object(M.jsx)("textarea",{type:"text",required:!0,placeholder:"Message",style:{width:j?"100%":"50%",height:200},value:R,onChange:function(e){A(e.target.value)}}),Object(M.jsx)("div",{style:{height:10}}),Object(M.jsx)(u.a,{component:"button",type:"submit",variant:"contained",color:"secondary",style:{backgroundColor:Q[T],width:j?"100%":""},disabled:1===T||2===T,children:Object(M.jsx)(r.Suspense,{fallback:Object(M.jsx)(E.a,{size:25}),children:0===T?Object(M.jsxs)(o.a.Fragment,{children:[Object(M.jsx)(b.a,{})," ",Object(M.jsx)("div",{style:{marginLeft:10},children:"Submit"})]}):1===T?Object(M.jsx)(E.a,{size:25}):2===T?Object(M.jsx)(G,{}):3===T?Object(M.jsx)(_,{}):"Sign up"})})]})]})]})}}}]);
//# sourceMappingURL=8.c903557d.chunk.js.map