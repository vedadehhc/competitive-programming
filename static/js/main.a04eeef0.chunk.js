(this["webpackJsonpcompetitive-programming"]=this["webpackJsonpcompetitive-programming"]||[]).push([[4],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(23),c=n.n(a),r=n(42),o=n(93),i=n.n(o),s=[{name:"Windows Phone",value:"Windows Phone",version:"OS"},{name:"Windows",value:"Win",version:"NT"},{name:"iPhone",value:"iPhone",version:"OS"},{name:"iPad",value:"iPad",version:"OS"},{name:"Kindle",value:"Silk",version:"Silk"},{name:"Android",value:"Android",version:"Android"},{name:"PlayBook",value:"PlayBook",version:"OS"},{name:"BlackBerry",value:"BlackBerry",version:"/"},{name:"Macintosh",value:"Mac",version:"OS X"},{name:"Linux",value:"Linux",version:"rv"},{name:"Palm",value:"Palm",version:"PalmOS"}],l=[{name:"Chrome",value:"Chrome",version:"Chrome"},{name:"Firefox",value:"Firefox",version:"Firefox"},{name:"Safari",value:"Safari",version:"Version"},{name:"Internet Explorer",value:"MSIE",version:"MSIE"},{name:"Opera",value:"Opera",version:"Opera"},{name:"BlackBerry",value:"CLDC",version:"CLDC"},{name:"Mozilla",value:"Mozilla",version:"Mozilla"}],u=[navigator.platform,navigator.userAgent,navigator.appVersion,navigator.vendor,window.opera].join(" ");function b(e,t){var n,a,c,r=0,o=0;for(r=0;r<t.length;r+=1)if(new RegExp(t[r].value,"i").test(e)){if(n=new RegExp(t[r].version+"[- /:;]([\\d._]+)","i"),c="",(a=e.match(n))&&a[1]&&(a=a[1]),a)for(a=a.split(/[._]+/),o=0;o<a.length;o+=1)c+=0===o?a[o]+".":a[o];else c="0";return{name:t[r].name,version:c}}return{name:"unknown",version:0}}function j(){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.v4();case 2:return t=e.sent,e.next=5,i.a.v6({fallbackUrls:["https://ifconfig.co/ip"]});case 5:return n=e.sent,a=b(u,s),r=b(u,l),e.abrupt("return",{ipv4:{S:t},ipv6:{S:n},os:{S:"".concat(a.name," ").concat(a.version)},browser:{S:"".concat(r.name," ").concat(r.version)}});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},146:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),o=n.n(r),i=(n(146),n(63)),s=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,265)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},l=n(6);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{})}),document.getElementById("root")),s()},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return oe}));var a=n(65),c=n(43),r=n(116),o=n(115),i=n(1),s=n.n(i),l=n(126),u=n(230),b=n(31),j=n(14),d=n(23),f=n.n(d),m=n(33),h=n(42),p=n(18),O=n(8),v=n(195),x=n(88),g=n(129),y=n(82),w=n(229),k=n(228),S=n(77),C=n.n(S),P=n(79),z=n.n(P),B=n(70),N=n.n(B),M=n(69),E=n.n(M),A=n(80),D=n.n(A),I=n(71),H=n.n(I),T=n(72),W=n(6),L=Object(i.lazy)((function(){return n.e(1).then(n.t.bind(null,263,7))})),F=Object(i.lazy)((function(){return n.e(2).then(n.t.bind(null,264,7))})),G=Object(i.lazy)((function(){return Promise.resolve().then(n.t.bind(null,104,7))})),_=Object(i.lazy)((function(){return n.e(0).then(n.bind(null,267))})),q=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,204))})),J=Object(v.a)((function(e){return{bottomBar:{display:"flex",backgroundColor:e.palette.primary.dark,padding:e.spacing(2,5)},leftDiv:{flexGrow:1,display:"flex",flexWrap:"wrap",justifyContent:"flex-start",width:"50%"},rightDiv:{flexGrow:1,flexWrap:"wrap",justifyContent:"flex-end",width:"50%"},link:{color:"white","&:hover":{color:e.palette.secondary.light}},break:{flexBasis:"100%",height:0}}})),K=[["Home","/",Object(W.jsx)(C.a,{})],["About","/about",Object(W.jsx)(z.a,{})],["Contact","/contact",Object(W.jsx)(D.a,{})]],R=[[Object(W.jsx)(E.a,{}),"mailto:devmchheda@gmail.com"],[Object(W.jsx)(N.a,{}),"tel:704-981-1789"],[Object(W.jsx)(H.a,{}),"https://www.facebook.com/competitive.programming.institute"]];function U(e){var t=J(),n=Object(i.useState)(""),a=Object(p.a)(n,2),c=a[0],r=a[1],o=Object(i.useState)(0),l=Object(p.a)(o,2),u=l[0],j=l[1],d=Object(i.useState)(""),m=Object(p.a)(d,2),O=m[0],v=m[1],x=["","#aaa","#4caf50","#f44336"];function S(e,t){"clickaway"!==t&&j(0)}function C(){return(C=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(1),e.next=4,Object(T.a)(c);case 4:n=e.sent,v(n.message),n.success?j(2):j(3);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(W.jsxs)("div",{className:t.bottomBar,style:{minHeight:e.botHeight||150},children:[Object(W.jsx)(i.Suspense,{fallback:Object(W.jsx)(k.a,{}),children:Object(W.jsx)(_,{open:u>=2,autoHideDuration:5e3,onClose:S,message:O,action:Object(W.jsx)(s.a.Fragment,{children:Object(W.jsx)(q,{size:"small","aria-label":"close",color:"inherit",onClick:S,children:Object(W.jsx)(G,{fontSize:"small"})})}),ContentProps:{style:{backgroundColor:x[u]}}})}),Object(W.jsxs)("div",{className:t.leftDiv,children:[Object(W.jsx)(g.a,{variant:"h6",style:{color:"white",width:"100%"},children:"Competitive Programming Institute"}),K.map((function(e,n){return Object(W.jsx)("div",{style:{width:"100%"},children:Object(W.jsx)(b.b,{className:t.link,to:e[1],children:e[0]},"navlink".concat(n))},"navlinkdiv".concat(n))})),Object(W.jsx)("div",{style:{width:"100%"},children:Object(W.jsx)("a",{href:"tel:704-981-1789",className:t.link,children:"704-981-1789"})}),Object(W.jsx)("div",{style:{marginTop:"auto"},children:R.map((function(e,n){return Object(W.jsx)(i.Suspense,{fallback:Object(W.jsx)(k.a,{size:20}),children:Object(W.jsx)(q,{href:e[1],className:t.link,target:"_blank",rel:"noopener noreferrer",children:e[0]},"extrabutton".concat(n))},"extrasuspense".concat(n))}))})]}),Object(W.jsxs)("div",{className:t.rightDiv,children:[Object(W.jsx)(g.a,{style:{color:"#f55",textAlign:"right",fontSize:18,maxWidth:"100%"},children:"Sign up for our email newsletter for new courses and special discounts!"}),Object(W.jsx)("br",{}),Object(W.jsx)("form",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},onSubmit:function(e){return C.apply(this,arguments)},children:Object(W.jsxs)(w.a,{container:!0,spacing:1,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[Object(W.jsx)(w.a,{item:!0,xs:12,md:8,children:Object(W.jsx)("input",{autoComplete:"email",type:"email",required:!0,placeholder:"Email Address",style:{width:"100%"},value:c,onChange:function(e){r(e.target.value)}})}),Object(W.jsx)(w.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(y.a,{component:"button",type:"submit",variant:"contained",color:"secondary",style:{width:"100%",backgroundColor:x[u]},disabled:1===u||2===u,children:Object(W.jsx)(i.Suspense,{fallback:Object(W.jsx)(k.a,{size:25}),children:0===u?"Sign up":1===u?Object(W.jsx)(k.a,{size:25}):2===u?Object(W.jsx)(L,{}):3===u?Object(W.jsx)(F,{}):"Sign up"})})})]})})]})]})}var V=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,270))})),Y=Object(i.lazy)((function(){return n.e(1).then(n.t.bind(null,263,7))})),X=Object(i.lazy)((function(){return n.e(2).then(n.t.bind(null,264,7))})),Q=Object(i.lazy)((function(){return Promise.resolve().then(n.t.bind(null,104,7))})),Z=Object(i.lazy)((function(){return n.e(0).then(n.bind(null,267))})),$=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,204))})),ee=Object(v.a)((function(e){return{root:{},content:{flexGrow:1},bottomBar:{position:"fixed"}}}));function te(e){var t=e.component,n=e.title,a=e.menu,c=e.backgroundColor,r=e.pagePadding,o=e.navProps,l=e.botProps,u=Object(O.a)(e,["component","title","menu","backgroundColor","pagePadding","navProps","botProps"]),b=ee(),d=o&&o.minNavHeight||x.c,v=l&&l.botHeight||150,S=Object(i.useState)(null),C=Object(p.a)(S,2),P=C[0],z=C[1];Object(i.useEffect)((function(){z(window.innerWidth)}),[]),Object(i.useEffect)((function(){function e(){z(window.innerWidth)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var B=P<=oe,N=Object(i.useState)(""),M=Object(p.a)(N,2),E=M[0],A=M[1],D=Object(i.useState)(0),I=Object(p.a)(D,2),H=I[0],L=I[1],F=Object(i.useState)(""),G=Object(p.a)(F,2),_=G[0],q=G[1],J=["","#aaa","#4caf50","#f44336"];function K(e,t){"clickaway"!==t&&L(0)}function R(e){A(e.target.value)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),L(1),e.next=4,Object(T.a)(E);case 4:n=e.sent,q(n.message),n.success?L(2):L(3);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(W.jsx)(j.b,Object(m.a)(Object(m.a)({},u),{},{render:function(e){return Object(W.jsxs)("div",{className:b.root,children:[Object(W.jsx)(i.Suspense,{fallback:Object(W.jsx)(k.a,{}),children:Object(W.jsx)(Z,{open:H>=2,autoHideDuration:5e3,onClose:K,message:_,action:Object(W.jsx)(s.a.Fragment,{children:Object(W.jsx)($,{size:"small","aria-label":"close",color:"inherit",onClick:K,children:Object(W.jsx)(Q,{fontSize:"small"})})}),ContentProps:{style:{backgroundColor:J[H]}}})}),Object(W.jsx)(x.a,Object(m.a)({title:n,menu:a},o)),Object(W.jsxs)("main",{className:b.content,style:{backgroundColor:c||"#fff",padding:r||"8px",minHeight:"calc(100vh - ".concat(d,"px - ").concat(v,"px)")},children:[Object(W.jsx)(t,Object(m.a)(Object(m.a)({},e),{},{navProps:o})),Object(W.jsx)("br",{})]}),Object(W.jsx)(U,Object(m.a)({className:b.bottomBar},l)),Object(W.jsx)(i.Suspense,{fallback:Object(W.jsx)(k.a,{}),children:Object(W.jsxs)(V,{isMobile:B,children:[Object(W.jsx)(g.a,{variant:"h4",style:{color:"black",textAlign:"left"},children:"Leaving so soon?"}),Object(W.jsx)(g.a,{variant:"h4",style:{color:"#f55",textAlign:"left"},children:"Sign up for our newsletter first."}),Object(W.jsx)("br",{}),Object(W.jsx)("p",{style:{color:"black",fontSize:18},children:"When you sign up, you will receive updates on our newest competitive programming courses and camps, special discounts, and free resources for competitive programming."}),Object(W.jsx)("p",{style:{color:"black",fontSize:24},children:"It's free and easy \u2014 just enter your email below."}),Object(W.jsx)("form",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},onSubmit:te,children:Object(W.jsxs)(w.a,{container:!0,spacing:1,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(W.jsx)(w.a,{item:!0,xs:12,md:8,children:Object(W.jsx)("input",{autoComplete:"email",type:"email",required:!0,autoFocus:!0,placeholder:"Email Address",style:{width:"100%",height:40},value:E,onChange:R})}),Object(W.jsx)(w.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(y.a,{component:"button",type:"submit",variant:"contained",color:"secondary",style:{width:"100%",backgroundColor:J[H]},disabled:1===H||2===H,children:0===H?"Sign up":1===H?Object(W.jsx)(k.a,{size:25}):2===H?Object(W.jsx)(Y,{}):3===H?Object(W.jsx)(X,{}):"Sign up"})})]})})]})})]})}}))}function ne(){var e=Object(j.g)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ae=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,268))})),ce=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,266))})),re=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,269))})),oe=800,ie=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=Object(l.a)({palette:{primary:{main:"rgb(50,100,200)"},secondary:{main:"#ffe082"}}});return Object(W.jsx)(u.a,{theme:e,children:Object(W.jsx)(b.a,{basename:"/",children:Object(W.jsxs)(i.Suspense,{fallback:Object(W.jsx)(k.a,{}),children:[Object(W.jsx)(ne,{}),Object(W.jsxs)(j.d,{children:[Object(W.jsx)(te,{exact:!0,path:"/",title:"Home",menu:"/",component:ae,navProps:{noGutter:!0},pagePadding:"0px",backgroundColor:"#fff"}),Object(W.jsx)(te,{exact:!0,path:"/about",menu:"/about",title:"About us",component:ce,backgroundColor:e.palette.secondary.main}),Object(W.jsx)(te,{exact:!0,path:"/contact",menu:"/contact",title:"Contact",component:re}),Object(W.jsx)(j.b,{render:function(){return Object(W.jsx)(j.a,{to:"/"})}})]})]})})})}}]),n}(i.Component);t.a=ie},72:function(e,t,n){"use strict";var a=n(23),c=n.n(a),r=n(33),o=n(42),i=n(91),s=n(92),l=n(203),u=n(81),b=n(112),j="cpi-mailing-list",d="arn:aws:sns:us-east-2:042242103208:cpi-mailing-list-updates";function f(){return(f=Object(o.a)(c.a.mark((function e(t){var n,a,o,f,m,h,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={TableName:j,Key:{id:{S:t}}},e.next=4,u.a.send(new i.a(n));case 4:if(a=e.sent,console.log("Dynamo Get success",a),!a.Item){e.next=8;break}return e.abrupt("return",{success:!0,message:"You are already subscribed!"});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Dynamo Get error",e.t0);case 13:return e.prev=13,o={},e.prev=15,e.next=18,Object(b.a)();case 18:o=e.sent,e.next=25;break;case 21:e.prev=21,e.t1=e.catch(15),console.log("User data error",e.t1),o={};case 25:return f={TableName:j,Item:Object(r.a)({id:{S:t},email:{S:t}},o)},e.next=28,u.a.send(new s.a(f));case 28:return m=e.sent,console.log("Dynamo Put success:",m),e.prev=30,h={Subject:"New Subscription to cpi-mailing-list",Message:"A new person just subscribed to the mailing list: ".concat(t),TopicArn:d},e.next=34,u.b.send(new l.a(h));case 34:p=e.sent,console.log("SNS success:",p),e.next=41;break;case 38:e.prev=38,e.t2=e.catch(30),console.log("SNS error",e.t2);case 41:return e.abrupt("return",{success:!0,message:"Success! You are now on our mailing list."});case 44:return e.prev=44,e.t3=e.catch(13),console.log("Dynamo Put error",e.t3),e.abrupt("return",{success:!1,message:"There was an unexpected error. Please try again."});case 48:case"end":return e.stop()}}),e,null,[[0,10],[13,44],[15,21],[30,38]])})))).apply(this,arguments)}t.a=function(e){return f.apply(this,arguments)}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(199),c=n(201),r=n(130),o=n(131),i="us-east-2",s="us-east-2:b05bf792-94ce-484b-94ed-dba2e934eab2",l=new a.a({region:i,credentials:Object(o.a)({client:new r.a({region:i}),identityPoolId:s})}),u=new c.a({region:i,credentials:Object(o.a)({client:new r.a({region:i}),identityPoolId:s})})},88:function(e,t,n){"use strict";n.d(t,"c",(function(){return I})),n.d(t,"b",(function(){return H}));var a=n(18),c=n(1),r=n.n(c),o=n(196),i=n(198),s=n(129),l=n(31),u=n(82),b=n(103),j=n(202),d=n(77),f=n.n(d),m=n(79),h=n.n(m),p=n(70),O=n.n(p),v=n(69),x=n.n(v),g=n(80),y=n.n(g),w=n(71),k=n.n(w),S=n(120),C=n.n(S),P=n(104),z=n.n(P),B=n(195),N=n(63),M=n(6),E=Object(B.a)((function(e){return{list:{overflow:"auto"},logoDiv:{maxWidth:380,textAlign:"left",flexShrink:1},logoButton:{padding:e.spacing(0),textAlign:"left"},logo:{margin:e.spacing(0,1,0,0),color:e.palette.secondary.main,float:"left",minWidth:0,minHeight:0},title:{margin:e.spacing(1,0,1),textTransform:"none",textAlign:"left",color:"white"},titleDiv:{flexGrow:1},topText:{margin:e.spacing(0,2,0),textAlign:"center"},navButton:{color:"#fff","&:hover":{color:"#000",backgroundColor:"#fff"}},navButtonSelected:{color:"#333",backgroundColor:"#fff","&:hover":{backgroundColor:"#fff"}},navButtonMobile:{color:"#fff",width:"100%"},navButtonMobileSelected:{backgroundColor:"#fff",color:"#000",width:"100%"}}})),A=[["Home","/",Object(M.jsx)(f.a,{})],["About","/about",Object(M.jsx)(h.a,{})],["Contact","/contact",Object(M.jsx)(y.a,{})]],D=[[Object(M.jsx)(x.a,{}),"mailto:devmchheda@gmail.com"],[Object(M.jsx)(O.a,{}),"tel:704-981-1789"],[Object(M.jsx)(k.a,{}),"https://www.facebook.com/competitive.programming.institute"]],I=60,H=100;t.a=function(e){var t=E(),n=Object(c.useState)(null),d=Object(a.a)(n,2),f=d[0],m=d[1];Object(c.useEffect)((function(){m(window.innerWidth)}),[]),Object(c.useEffect)((function(){function e(){m(window.innerWidth)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(c.useEffect)((function(){window.onscroll=function(){!function(){var e=document.body.scrollTop||document.documentElement.scrollTop;switch(P){case O:break;case v:V(0===e?0:4);break;case x:J(Math.max(w-S*e,y)),V(0===e?0:4);break;case g:S*e>w-y?(J(y),V(4)):(J(w),V(0))}}()}}));var h=f<=N.b,p="linear",O="none",v="elevate",x="linear",g="step",y=e.minNavHeight||I,w=h?y:e.maxNavHeight||H,k=e.navTransition||"0.4s",S=e.navSpeed||1,P=e.navScrollMode||p,B=e.noGutter||!1,T=Object(c.useState)(!1),W=Object(a.a)(T,2),L=W[0],F=W[1],G=Object(c.useState)(w),_=Object(a.a)(G,2),q=_[0],J=_[1],K=Object(c.useState)(0),R=Object(a.a)(K,2),U=R[0],V=R[1];function Y(){F(!0)}function X(){F(!1)}var Q=Object(c.useState)(!1),Z=Object(a.a)(Q,2),$=Z[0],ee=Z[1];return Object(M.jsxs)(r.a.Fragment,{children:[Object(M.jsx)(o.a,{position:"fixed",elevation:U,style:{height:q,transition:k},children:Object(M.jsxs)(i.a,{style:{height:q,transition:k},children:[Object(M.jsx)("div",{children:Object(M.jsx)(u.a,{component:l.b,to:"/",className:t.logoButton,children:Object(M.jsx)(s.a,{variant:"h6",className:t.title,children:h?"CPI":"Competitive Programming Institute"})})}),Object(M.jsx)("div",{className:t.titleDiv,children:Object(M.jsx)(s.a,{variant:"h5",className:t.topText,style:{fontSize:1.5+1*(y===w?0:(q-y)/(w-y))+"rem",transition:k}})}),Object(M.jsxs)("div",{children:[h||A.map((function(n,a){return Object(M.jsx)(u.a,{component:l.b,to:n[1],className:e.menu!==n[1]||L?t.navButton:t.navButtonSelected,onMouseEnter:Y,onMouseLeave:X,children:n[0]},"navbar-navlink".concat(a))})),D.map((function(n,a){return Object(M.jsx)(b.a,{href:n[1],className:e.menu!==n[1]||L?t.navButton:t.navButtonSelected,onMouseEnter:Y,onMouseLeave:X,target:"_blank",rel:"noopener noreferrer",children:n[0]},"navbar-extrabutton".concat(a))})),h&&Object(M.jsxs)(r.a.Fragment,{children:[Object(M.jsx)(b.a,{className:t.navButton,onClick:function(){return ee(!0)},children:Object(M.jsx)(C.a,{})}),Object(M.jsx)(j.a,{anchor:"top",open:$,onClose:function(){return ee(!1)},children:Object(M.jsxs)("div",{style:{height:"100vh",backgroundColor:"rgb(50,100,200)"},children:[Object(M.jsx)(u.a,{onClick:function(){return ee(!1)},className:t.navButtonMobile,style:{height:"".concat(Math.floor(100/(A.length+1)),"%"),maxHeight:100},children:Object(M.jsx)(z.a,{})}),A.map((function(n,a){return Object(M.jsxs)(u.a,{component:l.b,to:n[1],onClick:function(){return ee(!1)},className:e.menu===n[1]?t.navButtonMobileSelected:t.navButtonMobile,style:{height:"".concat(Math.floor(100/(A.length+1)),"%"),maxHeight:100},children:[n[2],Object(M.jsx)("div",{style:{width:20}}),n[0]]},"navbar-mobile-navlink".concat(a))}))]})})]})]})]})}),B||Object(M.jsx)("div",{style:{height:q,transition:k}})]})}}},[[194,5,6]]]);
//# sourceMappingURL=main.a04eeef0.chunk.js.map