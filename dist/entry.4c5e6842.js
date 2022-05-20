import{r as c}from"./chunks/chunk.cede50ef.js";var o={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=c.exports,_=Symbol.for("react.element"),x=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,f){var r,n={},l=null,p=null;f!==void 0&&(l=""+f),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)a.call(e,r)&&!m.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:_,type:t,key:l,ref:p,props:n,_owner:d.current}}s.Fragment=x;s.jsx=i;s.jsxs=i;o.exports=s;function y(){return o.exports.jsx("button",{onClick:()=>console.log("clicked"),children:"Hello"})}function v(){return o.exports.jsx("footer",{className:"footer",children:o.exports.jsxs("p",{className:"footer-copyright",children:["Footer",o.exports.jsx(y,{})]})})}export{v as default};
