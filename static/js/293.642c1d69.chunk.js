"use strict";(self.webpackChunkpet_support_project=self.webpackChunkpet_support_project||[]).push([[293],{89983:function(t,r,e){e.d(r,{w_:function(){return l}});var n=e(72791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return c=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},c.apply(this,arguments)},u=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e};function i(t){return t&&t.map((function(t,r){return n.createElement(t.tag,c({key:r},t.attr),i(t.child))}))}function l(t){return function(r){return n.createElement(s,c({attr:c({},t.attr)},r),i(t.child))}}function s(t){var r=function(r){var e,o=t.attr,a=t.size,i=t.title,l=u(t,["attr","size","title"]),s=a||r.size||"1em";return r.className&&(e=r.className),t.className&&(e=(e?e+" ":"")+t.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,l,{className:e,style:c(c({color:t.color||r.color},r.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return r(t)})):r(o)}},16856:function(t,r,e){e.d(r,{FU5:function(){return o}});var n=e(89983);function o(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}},54261:function(t,r,e){e.d(r,{Z:function(){return s}});var n,o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},a=new Uint8Array(16);function c(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}for(var u=[],i=0;i<256;++i)u.push((i+256).toString(16).slice(1));function l(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(u[t[r+0]]+u[t[r+1]]+u[t[r+2]]+u[t[r+3]]+"-"+u[t[r+4]]+u[t[r+5]]+"-"+u[t[r+6]]+u[t[r+7]]+"-"+u[t[r+8]]+u[t[r+9]]+"-"+u[t[r+10]]+u[t[r+11]]+u[t[r+12]]+u[t[r+13]]+u[t[r+14]]+u[t[r+15]]).toLowerCase()}var s=function(t,r,e){if(o.randomUUID&&!r&&!t)return o.randomUUID();var n=(t=t||{}).random||(t.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var a=0;a<16;++a)r[e+a]=n[a];return r}return l(n)}}}]);
//# sourceMappingURL=293.642c1d69.chunk.js.map