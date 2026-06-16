/*! Copyright 2026 Adobe
All Rights Reserved. */
import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import{Render as m}from"@dropins/tools/lib.js";import{useState as c,useEffect as a}from"@dropins/tools/preact-hooks.js";import{IntlProvider as p}from"@dropins/tools/i18n.js";import{events as d}from"@dropins/tools/event-bus.js";const e={"":{}},u={en_US:e},g=({children:n})=>{const[t,s]=c("en_US");a(()=>{const r=d.on("locale",f=>s(f),{eager:!0});return()=>{r==null||r.off()}},[]);const i=u[t]??e;return o(p,{definition:i,children:n})},U=new m(o(g,{}));export{U as r};
//# sourceMappingURL=render.js.map
