import{c as i,j as e,r as c}from"./client-333a3c1d.js";const a=["Item1","Item2","Item3","Item4"],d=({menuOpen:s,toggleMenu:n})=>{const t=a.map(o=>e.jsx("li",{children:e.jsx("a",{href:"#",children:o})},o));return e.jsx(e.Fragment,{children:e.jsx("div",{className:"menu",children:e.jsxs("ul",{children:[t,e.jsx("li",{className:`hamburger ${s?"hamburgerOpen":""}`,onClick:n,children:e.jsxs("div",{children:[e.jsx("div",{className:"bar1"}),e.jsx("div",{className:"bar2"}),e.jsx("div",{className:"bar3"})]})})]})})})},x=({menuOpen:s})=>{const n=a.map(t=>e.jsx("li",{children:e.jsx("a",{href:"#",children:t})},t));return e.jsx("div",{className:`sideMenu ${s?"sideMenuOpen":""}`,children:n})},h=()=>{const[s,n]=c.useState(!1),t=()=>{n(!s)};return e.jsxs("nav",{className:"navbar",children:[e.jsx("div",{className:"logo",children:"Logo"}),e.jsx(d,{menuOpen:s,toggleMenu:t}),e.jsx(x,{menuOpen:s})]})},m=()=>{const[s,n]=c.useState("Welcome Message"),t=()=>{n(s==="Welcome Message"?"Have a Good Time!":"Welcome Message")};return e.jsx("div",{className:"hero",children:e.jsx("h1",{id:"heroMessage",onClick:t,children:s})})},j=()=>{const n=["content Box 1","content Box 2","content Box 3","content Box 4"].map(r=>e.jsx("div",{className:"box-item",children:r},r)),[t,o]=c.useState(!1),l=()=>o(!t);return e.jsxs("div",{className:"content",children:[e.jsx("h2",{children:"Section Title"}),e.jsx("div",{className:"box-content",children:n}),e.jsx("button",{onClick:l,children:"Call to Action"}),e.jsx("div",{className:t?"box-content":"hidden-content",children:n})]})},u=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsx(m,{}),e.jsx(j,{})]}),g=i(document.getElementById("root"));g.render(e.jsx(c.StrictMode,{children:e.jsx(u,{})}));
