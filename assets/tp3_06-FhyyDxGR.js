import{j as e,c as a,R as c}from"./client-C9r4PM53.js";import{P as t}from"./index-B5sg49pb.js";const o=({task:r})=>e.jsx("li",{children:r});o.propTypes={task:t.string.isRequired};function s({items:r}){return s.propTypes={items:t.array.isRequired},e.jsx("ul",{children:r.map((i,n)=>e.jsx(o,{task:i},n))})}function d(){const r=["Fazer TP","Jogar","Procurar jogo da Nintendo","Procurar meios alternativos de entretenimento","Fazer PB"];return e.jsx("div",{children:e.jsx(s,{items:r})})}a.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(d,{})}));
