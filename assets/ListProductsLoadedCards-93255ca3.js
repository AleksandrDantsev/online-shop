import{r as n,_ as l,j as o,G as m}from"./index-ab3a0976.js";const u="_cards_3bvew_1",_="_pagination_3bvew_7",h="_active_3bvew_32",x="_listNotFound_3bvew_37",c={cards:u,pagination:_,active:h,listNotFound:x},j=n.lazy(()=>l(()=>import("./index-ab3a0976.js").then(t=>t.I),["assets/index-ab3a0976.js","assets/index-6af4136f.css"])),g=n.memo(({filterMainArray:t,pagePagination:i,handlerSetPagePagination:d})=>{let a=20;window.scrollTo(0,0);const e=n.useMemo(()=>{const s=Math.ceil(t.length/a);return Array.from({length:s},(v,r)=>r+1)},[t,i]);return o.jsx(n.Fragment,{children:t.length?o.jsxs(n.Fragment,{children:[o.jsx("div",{className:c.cards,children:t?t.slice(i*a-a,i*a).map(s=>o.jsx(n.Suspense,{fallback:o.jsx(m,{}),children:o.jsx(j,{id:s.id,flag:"home",position:"list",img:s.img,color:s.color,name:s.name,cost:s.cost,size:s.size,link:s.link,description:s.description},s.id)},s.id+s.name)):o.jsx("div",{className:c.notFoundQuery,children:o.jsx("span",{children:"Извините, по вашему запросу ничего не найдено"})})}),o.jsx("div",{className:c.pagination,children:o.jsx("ul",{onClick:d,children:e.map(s=>o.jsx("li",{className:i==s?c.active:"",children:s},s))})})]}):o.jsx("div",{className:c.listNotFound,children:o.jsx("span",{children:"К сожалению, товары, с заданными характеристиками, не найдены"})})})});export{g as default};
