import{c as a,j as e,r as c}from"./client-333a3c1d.js";const r=["Item1","Item2","Item3","Item4"],l=({menuOpen:s,toggleMenu:t})=>{const n=r.map(o=>e.jsx("li",{children:e.jsx("a",{href:"#",children:o})},o));return e.jsx(e.Fragment,{children:e.jsx("div",{className:"menu",children:e.jsxs("ul",{children:[n,e.jsx("li",{className:`hamburger ${s?"hamburgerOpen":""}`,onClick:t,children:e.jsxs("div",{children:[e.jsx("div",{className:"bar1"}),e.jsx("div",{className:"bar2"}),e.jsx("div",{className:"bar3"})]})})]})})})},i=({menuOpen:s})=>{const t=r.map(n=>e.jsx("li",{children:e.jsx("a",{href:"#",children:n})},n));return e.jsx("div",{className:`sideMenu ${s?"sideMenuOpen":""}`,children:t})},x=()=>{const[s,t]=c.useState(0),n=()=>{t(s?0:1)};return e.jsxs("nav",{className:"navbar",children:[e.jsx("div",{className:"logo",children:"Logo"}),e.jsx(l,{menuOpen:s,toggleMenu:n}),e.jsx(i,{menuOpen:s})]})},d=()=>{const[s,t]=c.useState("Welcome Message"),n=()=>{t(s==="Welcome Message"?"Have a Good Time!":"Welcome Message")};return e.jsx("div",{className:"hero",children:e.jsx("h1",{id:"heroMessage",onClick:n,children:s})})},m=()=>{const t=["content Box 1","content Box 2","content Box 3","content Box 4"].map(n=>e.jsx("div",{className:"box-item",children:n},n));return e.jsxs("div",{className:"content",children:[e.jsx("h2",{children:"Section Title"}),e.jsx("div",{className:"box-content",children:t}),e.jsx("button",{children:"Call to Action"})]})},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx(d,{}),e.jsx(m,{})]}),h=a(document.getElementById("root"));h.render(e.jsx(c.StrictMode,{children:e.jsx(j,{})}));