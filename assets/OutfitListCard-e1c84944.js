import{F as s,j as t,L as r}from"./index-f965506f.js";const m="_outfitCard_6onkd_1",c="_img_6onkd_8",e="_bottomInfo_6onkd_19",l="_nameCard_6onkd_27",_="_quantityProd_6onkd_32",a={outfitCard:m,img:c,bottomInfo:e,nameCard:l,quantityProd:_},f=({elems:o,link:d})=>{const[n,i]=s(!1,o.image);return t.jsx("div",{className:a.outfitCard,children:n?t.jsxs(r,{to:d,children:[t.jsx("div",{className:a.img,children:n?t.jsx("img",{src:o.image,alt:o.title,loading:"lazy"}):i}),t.jsxs("div",{className:a.bottomInfo,children:[t.jsx("div",{className:a.nameCard,children:o.title}),t.jsxs("div",{className:a.quantityProd,children:[t.jsx("p",{children:"Количеств товаров:"}),o.products.length]})]})]}):i})};export{f as default};