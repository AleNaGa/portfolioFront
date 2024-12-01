import{r as d}from"./index.DhYZZe0J.js";var v={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=d,O=Symbol.for("react.element"),U=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,P=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function N(e,s,u){var o,i={},l=null,c=null;u!==void 0&&(l=""+u),s.key!==void 0&&(l=""+s.key),s.ref!==void 0&&(c=s.ref);for(o in s)E.call(s,o)&&!D.hasOwnProperty(o)&&(i[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps,s)i[o]===void 0&&(i[o]=s[o]);return{$$typeof:O,type:e,key:l,ref:c,props:i,_owner:P.current}}f.Fragment=U;f.jsx=N;f.jsxs=N;v.exports=f;var r=v.exports;const q=({projectId:e,name:s,description:u,startDate:o,endDate:i,repoUrl:l,demoUrl:c,pictureUrl:h,statusName:x,developersNames:m,technologiesNames:p})=>r.jsxs("div",{className:"relative group rounded-xl shadow-lg w-full md:w-1/3 h-80 overflow-hidden font-montserrat",children:[r.jsx("img",{src:h,alt:`Project ${s}`,className:"w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent flex flex-col justify-end p-4 transition-all duration-500 ease-in-out",children:r.jsx("h5",{className:"text-2xl font-bold text-whiteBrkn mb-2 group-hover:opacity-0 transition-opacity duration-300",children:s})}),r.jsxs("div",{className:"absolute inset-0 bg-darkBlue/90 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:[r.jsx("h5",{className:"text-2xl font-bold text-whiteBrkn mb-2",children:s}),r.jsx("p",{className:"text-whiteBrkn text-sm mb-4",children:u}),r.jsx("p",{className:"text-crudo italic text-sm mb-4",children:p.join(", ")}),r.jsx("a",{href:l,target:"_blank",className:"w-12 h-12 flex items-center justify-center bg-whiteBrkn rounded-full transition-transform duration-300 hover:scale-110",children:r.jsx("img",{src:"/gitHubIcon.png",alt:"GitHub Repo",className:"w-8 h-8"})})]})]});typeof process<"u"&&process.stdout&&process.stdout.isTTY;typeof process<"u"&&Object.prototype.toString.call(process);new TextEncoder;new TextDecoder;var y;(function(e){e[e.Include=0]="Include",e[e.None=1]="None"})(y||(y={}));var b;(function(e){e[e.Required=0]="Required",e[e.Ignore=1]="Ignore"})(b||(b={}));var w;(function(e){e[e.Include=0]="Include",e[e.None=1]="None"})(w||(w={}));var j;(function(e){e[e.Required=0]="Required",e[e.Ignore=1]="Ignore"})(j||(j={}));new TextEncoder;new TextDecoder;"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((e,s)=>(e[s.charCodeAt(0)]=s,e),[]);"-0123456789_".split("").reduce((e,s)=>(e[s.charCodeAt(0)]=s,e),[]);const A=()=>{const[e,s]=d.useState(0),[u,o]=d.useState([]),[i,l]=d.useState(1),[c,h]=d.useState(""),[x,m]=d.useState([]),p="http://20.77.2.189:8080/projectmgmt-0.0.1-SNAPSHOT/api/v1",k=p+"/projects",_=[...Array(i).keys()],g=async(t=0)=>{try{const n=await(await fetch(`${k}?size=3&page=${t}`)).json();o(n.content||[]),l(n.totalPages||1)}catch(a){console.error("Error fetching projects:",a),o([])}},B=async()=>{try{const a=await(await fetch(p+"/technologies")).json();m(a)}catch(t){console.error("Error fetching technologies:",t)}},S=async(t="")=>{try{const n=await(await fetch(p+`/projects/byword/${t}?size=3&page=${e}`)).json();n===null||n.content.length===0?alert("No se encontraron proyectos"):(o(n.content||[]),l(n.totalPages||1))}catch(a){alert("No se encontraron proyectos"),console.error(a)}},T=async t=>{try{const n=await(await fetch(p+`/projects/bytech/${t}?size=3&page=${e}`)).json();o(n.content||[]),l(n.totalPages||1)}catch(a){console.error(a)}},I=()=>{S(c)},R=t=>{T(t)};d.useEffect(()=>{g(e),B()},[e]);const C=()=>_.map(t=>r.jsx("button",{onClick:()=>s(t),className:`px-4 py-2 rounded-lg shadow-lg hover:bg-azulMedio ${e===t?"bg-azulMedio text-whiteBrkn":"bg-paleBlue text-darkBlue"}`,children:t+1},t));return r.jsxs("div",{className:"flex flex-col w-full",children:[r.jsx("div",{className:"flex gap-2 mb-4",children:x.map(t=>r.jsx("button",{onClick:()=>R(t.name),className:"px-4 py-2 bg-paleBlue text-darkBlue rounded-lg shadow-lg hover:bg-crudo",children:t.name},t.id))}),r.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[r.jsx("input",{type:"text",placeholder:"Search by name...",value:c,onChange:t=>h(t.target.value),className:"px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-paleBlue"}),r.jsx("button",{onClick:I,disabled:c.length<3,className:`px-4 py-2 rounded-lg shadow-lg ${c.length<3?"bg-gray-400 cursor-not-allowed":"bg-paleBlue text-darkBlue hover:bg-cyan-400"}`,id:"buttonSearch",children:"Search"}),r.jsx("button",{onClick:()=>{h(""),g()},className:"px-4 py-2 bg-crudo text-whiteBrkn rounded-lg shadow-lg hover:bg-red-400",children:"Reset"})]}),r.jsx("div",{className:"flex flex-row gap-4",children:u.map(t=>r.jsx(q,{projectId:t.projectId,name:t.name,description:t.description,startDate:t.startDate,endDate:t.endDate,repoUrl:t.repoUrl,demoUrl:t.demoUrl,pictureUrl:t.pictureUrl,statusName:t.statusName,developersNames:t.developersNames,technologiesNames:t.technologiesNames},t.projectId))}),r.jsx("div",{className:"flex justify-between mt-4",children:r.jsx("span",{className:"text-lg font-semibold flex flex-row gap-5 justify-center w-full",children:C()})})]})};export{A as default};