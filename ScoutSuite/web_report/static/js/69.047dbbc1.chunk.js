(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[69],{630:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(669)),c=n(80),i=n(672);t.default=function(e){var t=e.data;return t?Object(a.jsx)(r.a,{data:t,children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(r.c,{label:"Name",valuePath:"name",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Creation Record",valuePath:"creation_record",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Mutation Record",valuePath:"mutation_record",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Conditions",valuePath:"conditions",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Combiner",valuePath:"combiner",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Enabled",valuePath:"enabled",renderValue:c.q})]})}):null}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(663),o=n(7),l=n.n(o),u=n(13),s=n.n(u),d=n(10),b=n.n(d),j=n(666),v=n(80),f=n(88),h=(n(670),n(659)),p=n(201),x=n.n(p),O=n(671),m=n.n(O),P=n(202),g=n(140),C=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),l=o.exceptions,u=o.addException,d=o.removeException,b=Object(P.b)().enqueueSnackbar,j=s()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,a),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},V=n(29),_=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,h=e.className,p=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(V.g)(),_=Object(c.useContext)(j.a),q=Object(c.useContext)(j.b),E=Object(c.useContext)(j.c),N=Object(v.a)(P||q,u),w=m(e.value||s()(_.item,N,e.value));("boolean"===typeof w&&(w=String(w)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(v.a)(P||q,e)})):t=[N];var A=t.some((function(e){return _.path_to_issues.includes(e)})),R=_.level;if(Object(c.useEffect)((function(){A&&E(R)}),[R]),void 0===w||null===w)return null;var k=Object(r.jsx)(C,{service:g.service,finding:g.finding,path:"".concat(_.path,".").concat(t[0])}),z=Object(r.jsxs)("span",{className:l()(A&&l()("issue",R)),children:[w,A&&k]});return Object(r.jsx)(f.a,{className:l()(h,"partial-value",{inline:p}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},O),{},{children:z})):z})};_.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=_},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(667),o=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},672:function(e,t,n){"use strict";var a=n(1);n(0),n(673);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,n){}}]);
//# sourceMappingURL=69.047dbbc1.chunk.js.map