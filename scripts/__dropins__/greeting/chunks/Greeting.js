/*! Copyright 2026 Adobe
All Rights Reserved. */
import{jsxs as i,jsx as t}from"@dropins/tools/preact-jsx-runtime.js";import{useState as o}from"@dropins/tools/preact-hooks.js";const g=({placeholder:r="Enter your name",defaultMessage:n="Hello Shopper 👋"})=>{const[e,s]=o("");return i("div",{class:"greeting__wrapper",children:[t("input",{type:"text",class:"greeting__input",placeholder:r,onInput:a=>s(a.target.value.trim())}),t("h2",{class:"greeting__message",children:e?`Hello ${e} 👋`:n})]})};export{g as G};
//# sourceMappingURL=Greeting.js.map
