parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CRJu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t,r,n=o(require("react")),a=require("react-router-dom"),l=d(require("styled-components")),u=d(require("../../Utils/DateUtils")),i=require("../../Utils/Requests");function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=a?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const s=l.default.div(e||(e=f(["\n  display: flex;\n"]))),p=l.default.img(t||(t=f(["\n  border-radius: 4px;\n  box-shadow: 4px 4px 10px ","90;\n  margin-left: auto;\n  margin-top: 1.7rem;\n  height: 18vw;\n  width: 18vw;\n\n  @media (min-width: 992px) {\n    width: 12vh;\n    height: 12vh;\n  }\n"])),e=>e.theme.cardText),m=l.default.p(r||(r=f(["\n  font-size: 0.8rem;\n"]))),h=()=>{const[e,t]=(0,n.useState)(""),{articleId:r}=(0,a.useParams)();return(0,n.useEffect)(()=>{(0,i.getBlogArticleById)(r).then(e=>{t(e)}).catch(e=>console.error(e))},[]),n.default.createElement(n.default.Fragment,null,n.default.createElement(s,null,n.default.createElement("div",null,n.default.createElement("h1",{id:"article-title"},e.title),n.default.createElement(m,{id:"article-date-published"},(0,u.default)(e.date))),n.default.createElement(p,{alt:"".concat(e.title," header image"),src:e.headerImageUrl})),n.default.createElement("hr",null),n.default.createElement("div",{id:"article-content",dangerouslySetInnerHTML:{__html:e.content}}))};var v=h;exports.default=v;
},{"react":"n8MK","react-router-dom":"uc19","styled-components":"tFSs","../../Utils/DateUtils":"x8SB","../../Utils/Requests":"tycZ"}]},{},[], null)
//# sourceMappingURL=/ArticleContent.84568afe.js.map