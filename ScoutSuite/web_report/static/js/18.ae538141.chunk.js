(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[18],{595:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(672),i=n(669),l=n(80),s=n(674),u=n(81),o=n(680),d=n(667),j=function(e,t){return Object(l.l)(e,"",(function(e){return function(e){var n=t.find((function(t){return t.role_id===e.id})).subscription_id;return Object(a.jsxs)("span",{children:[Object(a.jsx)(u.a,{service:"rbac",resource:"roles",id:e.id,name:e.name})," ","(subscription ",n,")"]})}(e)}))};t.default=function(e){var t,n=e.data,b=e.item,p=Object(r.useMemo)((function(){return b.roles.map((function(e){return e.role_id}))}),[b.roles]),f=Object(o.a)("rbac","roles",p).data;return n?Object(a.jsxs)(i.a,{data:n,children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(i.c,{label:"ID",valuePath:"id",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Tags",valuePath:"tags",renderValue:function(e){return Object(l.l)(e,l.q)}}),Object(a.jsx)(i.c,{label:"App",valuePath:"app_name",renderValue:function(e){return function(e,t){return e?Object(a.jsx)(u.a,{service:"aad",resource:"applications",id:t,name:e}):Object(a.jsx)("span",{children:"None"})}(e,b.app_id)}}),Object(a.jsx)(i.c,{label:"Status",valuePath:"account_enabled",renderValue:l.c}),Object(a.jsx)(i.c,{label:"App Owner Tenant ID",valuePath:"app_owner_tenant_id",renderValue:l.q}),Object(a.jsx)(i.c,{label:"App Role Assignment Required",valuePath:"app_role_assignment_required",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Type",valuePath:"object_type",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Service Principal Type",valuePath:"service_principal_type",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Publisher Name",valuePath:"publisher_name",renderValue:l.q}),Object(a.jsx)(i.c,{label:"Deletion Timestamp",valuePath:"deletion_timestamp",renderValue:l.q})]}),Object(a.jsxs)(s.b,{children:[Object(a.jsx)(s.a,{title:"Roles",children:j(f,b.roles)}),Object(a.jsx)(s.a,{title:"Keys",children:(t=b.key_credentials,t&&0!==t.length?Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsx)(d.a,{path:"keys.".concat(t),children:Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:e.key_id}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{label:"Type",valuePath:"type",renderValue:l.q})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{label:"Usage",valuePath:"usage",renderValue:l.q})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{label:"Start Date",valuePath:"start_date",renderValue:l.h})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{label:"End Date",valuePath:"end_date",renderValue:l.h})})]})]})},t)}))}):Object(a.jsx)("span",{children:"None"}))})]})]}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),l=r.a.createContext(""),s=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,l=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(l,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(663),l=n(7),s=n.n(l),u=n(13),o=n.n(u),d=n(10),j=n.n(d),b=n(666),p=n(80),f=n(88),h=(n(670),n(659)),O=n(201),v=n.n(O),x=n(671),m=n.n(x),P=n(202),_=n(140),g=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(c.useContext)(_.a),s=l.exceptions,u=l.addException,d=l.removeException,j=Object(P.b)().enqueueSnackbar,b=o()(s,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:b?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{size:"small",className:"exception-btn",onClick:b?function(){d(t,n,a),j("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),j("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:b?Object(r.jsx)(m.a,{}):Object(r.jsx)(v.a,{})})})},V=n(29),y=function(e){var t,n=e.label,l=e.separator,u=e.valuePath,d=e.errorPath,h=e.className,O=e.inline,v=e.tooltip,x=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,_=Object(V.g)(),y=Object(c.useContext)(b.a),q=Object(c.useContext)(b.b),k=Object(c.useContext)(b.c),C=Object(p.a)(P||q,u),N=m(e.value||o()(y.item,C,e.value));("boolean"===typeof N&&(N=String(N)),d)?t=(j()(d)?d:[d]).map((function(e){return Object(p.a)(P||q,e)})):t=[C];var S=t.some((function(e){return y.path_to_issues.includes(e)})),w=y.level;if(Object(c.useEffect)((function(){S&&k(w)}),[w]),void 0===N||null===N)return null;var A=Object(r.jsx)(g,{service:_.service,finding:_.finding,path:"".concat(y.path,".").concat(t[0])}),D=Object(r.jsxs)("span",{className:s()(S&&s()("issue",w)),children:[N,S&&A]});return Object(r.jsx)(f.a,{className:s()(h,"partial-value",{inline:O}),label:n,separator:l,value:v?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:N},x),{},{children:D})):D})};y.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=y},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),r=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(667),l=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},672:function(e,t,n){"use strict";var a=n(1);n(0),n(673);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,n){},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s.b}));var a=n(1),r=n(17),c=n(0),i=n(7),l=n.n(i),s=n(114),u=n(666),o=n(58),d=(n(675),function(e){var t=e.title,n=e.isSelected,i=e.disabled,d=e.onClick,j=e.children,b=Object(c.useState)(""),p=Object(r.a)(b,2),f=p[0],h=p[1],O=f?Object(a.jsxs)(a.Fragment,{children:[t,o.a[f].icon]}):t;return Object(a.jsx)(u.c.Provider,{value:h,children:Object(a.jsx)(s.a,{title:O,className:l()("partial-tab-pane",f),isSelected:n,disabled:i,onClick:d,children:j})})})},675:function(e,t,n){},680:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(46),r=n.n(a),c=n(89),i=n(17),l=n(0),s=n(203),u=function(e,t,n){var a=Object(l.useState)([]),u=Object(i.a)(a,2),o=u[0],d=u[1],j=Object(l.useState)(!0),b=Object(i.a)(j,2),p=b[0],f=b[1];return Object(l.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){var c,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&t&&n)){a.next=15;break}return f(!0),a.prev=2,c=n.map((function(n){return s.a("services/".concat(e,"/resources/").concat(t,"/").concat(n))})),a.next=6,Promise.all(c);case 6:i=a.sent,console.info("useResources response",e,t,n,i),d(i),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.error(a.t0.message);case 14:f(!1);case 15:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}})()()}),[n]),{data:o,loading:p}}}}]);
//# sourceMappingURL=18.ae538141.chunk.js.map