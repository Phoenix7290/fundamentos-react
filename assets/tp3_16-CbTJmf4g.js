import{j as e,c as n,R as a}from"./client-C9r4PM53.js";import{P as c}from"./index-B5sg49pb.js";const r=({status:t})=>{const o=s=>{switch(s){case"ativo":return{backgroundColor:"green",color:"white"};case"inativo":return{backgroundColor:"gray",color:"white"};case"pendente":return{backgroundColor:"orange",color:"white"};default:return{backgroundColor:"red",color:"black"}}};return e.jsx("span",{style:{...o(t),padding:"5px 10px",borderRadius:"5px"},children:t.charAt(0).toUpperCase()+t.slice(1)})};r.propTypes={status:c.string.isRequired};function i(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Status dos Usuários"}),e.jsx(r,{status:"ativo"}),e.jsx(r,{status:"inativo"}),e.jsx(r,{status:"pendente"})]})}n.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(i,{})}));
