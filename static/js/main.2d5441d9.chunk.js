(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{37:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),s=c(25),n=c.n(s),a=c(20),o=c(6),l=c(43),d=c.n(l),j=(c(50),c(3)),p=c(4),u=(c(51),c.p+"static/media/z.1742585b.mp4"),m=c(0),b=function(){return Object(m.jsxs)("div",{id:"home",children:[Object(m.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,id:"hero-video",children:Object(m.jsx)("source",{src:u,type:"video/mp4"})}),Object(m.jsx)(j.c,{className:"hero-button-link",to:"/women",children:Object(m.jsx)("button",{className:"hero-button",children:"SS21 Collection"})}),Object(m.jsx)(j.c,{className:"hero-button-link",to:"/women",children:Object(m.jsx)("button",{className:"hero-button",children:"FW2O Collection"})})]})},h=c(39),O=c.n(h),g=c(40),x=c.n(g),f=c(38),y=c.n(f),k=c(93),v=c(94),S=c(28),N=c.n(S),B=(c(61),function(e){var t=e.click,c=e.cart,i=c.reduce((function(e,t){var c=parseFloat((Number(t.price)*Number(t.quantity)).toFixed(2));return parseFloat(Number(e)+Number(c)).toFixed(2)}),0);return Object(m.jsx)("div",{children:Object(m.jsx)("div",{id:"cart-outer",children:Object(m.jsxs)("div",{id:"cart",children:[Object(m.jsxs)("div",{id:"cart-header",children:[Object(m.jsx)(N.a,{id:"cart-close",style:{color:"black"},onClick:t}),Object(m.jsxs)("p",{id:"total",children:[Object(m.jsx)("span",{id:"cart-sub-total",children:" Subtotal: "})," $",Number(i).toLocaleString("en-US",{useGrouping:!0,minimumFractionDigits:2})]})]}),Object(m.jsx)("div",{id:"cart-scroll",children:Object(m.jsx)("ul",{id:"cart-list",children:c.map((function(e){return Object(m.jsx)(j.b,{to:"/shop/item/".concat(e.title),children:Object(m.jsxs)("li",{className:"cart-item",children:[Object(m.jsx)("img",{className:"cart-item-image",src:e.src,alt:e.key}),Object(m.jsxs)("div",{className:"item-details",children:[Object(m.jsx)("span",{className:"item-name",children:e.title}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:"item-text",children:["$",Number(e.price).toLocaleString("en-US")]}),Object(m.jsxs)("span",{className:"item-text",children:["Quantity: ",e.quantity]})]}),Object(m.jsx)("p",{children:e.size})]})]})},e.key)}))})}),Object(m.jsx)("div",{id:"cart-bottom",children:Object(m.jsx)(j.b,{id:"checkout-link",to:"/checkout",children:Object(m.jsx)("button",{onClick:t,id:"checkout-button",children:"Checkout"})})})]})})})}),L=Object(k.a)((function(){return{badge:{transform:"scale(0.8) translate(50%, -50%)"}}})),C=function(e){var t=e.click,c=e.cart,i=e.setCart,r=L();return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{onClick:t,id:"cart-icon",children:Object(m.jsx)(v.a,{badgeContent:c.length,showZero:!0,color:"error",classes:{badge:r.badge},children:Object(m.jsx)(y.a,{})})}),Object(m.jsx)(B,{cart:c,setCart:i,click:t})]})},w=(c(63),function(e){var t=Object(i.useState)(!1),c=Object(o.a)(t,2),r=c[0],s=c[1],n=e.cart,a=e.setCart;Object(i.useEffect)((function(){if(n.length>0){var e=document.getElementById("cart-icon");e.style.setProperty("animation","bounce 0.8s"),setTimeout((function(){e.style.setProperty("animation","")}),800)}}),[n]),window.onscroll=function(){var e=document.getElementById("nav");document.body.scrollTop>=20||document.documentElement.scrollTop>=20?e.style.setProperty("background-color","black"):!1===r&&e.style.setProperty("background-color","")};var l=function(){var e=document.getElementById("cart-outer"),t=document.getElementById("cart"),c=document.getElementById("nav");!1===r?(s(!0),t.style.setProperty("height","25em"),e.style.setProperty("visibility","visible"),c.style.setProperty("background-color","black")):!0===r&&(s(!1),t.style.setProperty("height","0em"),setTimeout((function(){e.style.setProperty("visibility","hidden")}),600),(!document.body.scrollTop>=20||!document.documentElement.scrollTop>=20)&&c.style.setProperty("background-color",""))};return Object(i.useEffect)((function(){n.length>0&&!1===r&&"/checkout"!==window.location.pathname&&l()}),[n]),Object(m.jsxs)("div",{id:"nav",children:[Object(m.jsxs)("div",{id:"nav-left",children:[Object(m.jsxs)("div",{id:"nav-location",children:[Object(m.jsx)(O.a,{className:"nav-lang",style:{fontSize:"0.8rem"}}),Object(m.jsx)("a",{href:"https://github.com/joshwrn",target:"_blank",className:"nav-text",rel:"noreferrer",children:"Josh Warren"})]}),Object(m.jsx)("p",{className:"nav-text",children:"California"})]}),Object(m.jsxs)("div",{id:"nav-center",children:[Object(m.jsx)("h1",{id:"logo",children:"BRAND"}),Object(m.jsxs)("ul",{className:"nav-links",children:[Object(m.jsx)(j.c,{exact:!0,to:"/",children:Object(m.jsx)("li",{className:"nav-page",children:"Home"})}),Object(m.jsx)(j.c,{to:"/women",children:Object(m.jsx)("li",{className:"nav-page",children:"Women"})}),Object(m.jsx)(j.c,{to:"/men",children:Object(m.jsx)("li",{className:"nav-page",children:"Men"})}),Object(m.jsx)(j.c,{to:"/about",children:Object(m.jsx)("li",{className:"nav-page",children:"About"})})]})]}),Object(m.jsxs)("div",{id:"nav-right",children:[Object(m.jsx)(C,{cart:n,setCart:a,click:l}),Object(m.jsx)(j.b,{to:"/search",children:Object(m.jsx)(x.a,{id:"search-icon"})})]})]})}),R=c(9),T=(c(64),c(65),function(e){var t=e.src,c=e.title,i=e.price,r=e.description,s=e.brand;return Object(m.jsxs)("div",{className:"outer-card",children:[Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"card-image",src:t,alt:"one"}),Object(m.jsx)("div",{className:"card-bottom",children:Object(m.jsxs)("div",{className:"card-text",children:[Object(m.jsx)("p",{className:"item-title",children:c}),Object(m.jsx)("p",{className:"item-brand",children:s}),Object(m.jsx)("p",{className:"item-description",children:r})]})})]}),Object(m.jsx)("div",{className:"card-under",children:Object(m.jsx)("p",{className:"item-price",children:i})})]})}),E=c(16),F=(c(66),function(e){var t=e.cards,c=e.filters,r=e.setFilters,s=e.setItems,n=e.gender,o=e.categories,l=e.setCategories,d=function(e){e.preventDefault();var t=document.getElementById("color-form"),c=document.getElementById("type-form"),i=document.getElementById("brand-form"),s=document.getElementById("sort-form");e.preventDefault(),r((function(e){return Object(a.a)(Object(a.a)({},e),{},{sort:s.value,type:c.value,brand:i.value,color:t.value})}))};Object(i.useEffect)((function(){"default"===c.sort?t.sort((function(e,t){return parseFloat(e.key)-parseFloat(t.key)})):"price-asc"===c.sort?t.sort((function(e,t){return parseFloat(e.price)-parseFloat(t.price)})):"price-desc"===c.sort&&t.sort((function(e,t){return parseFloat(t.price)-parseFloat(e.price)})),j(),function(){var e=document.getElementById("shop-section");e.style.setProperty("opacity","0"),e.style.setProperty("animation",""),setTimeout((function(){e.style.setProperty("animation","fade-in 1.3s forwards")}),0)}()}),[c]);var j=function(){s(t.filter((function(e){return e.gender===n&&(e.type===c.type||"all"===c.type)&&(e.color===c.color||"all"===c.color)&&(e.brand===c.brand||"all"===c.brand)})))},p=function(e,c){var i,r=t.filter((function(e){return e.gender===n}));l((function(e){return Object(R.a)(e)}),Object(E.a)({},o[e],(i=[Object(R.a)(new Set(r.map((function(e){return e[c]}))))],o[e][c]=i[0],i)))};return Object(i.useEffect)((function(){for(var e=0;e<o.length;e++)p(e,Object.keys(o[e])[0])}),[]),Object(m.jsxs)("div",{className:"custom-select",id:"filter-box",children:[Object(m.jsx)("form",{onChange:d,children:Object(m.jsxs)("select",{id:"sort-form",defaultValue:"none",children:[Object(m.jsx)("option",{disabled:!0,value:"none",children:"Sort"}),Object(m.jsx)("option",{value:"default",children:"Default"}),Object(m.jsx)("option",{value:"price-asc",children:"Price: Low to High"}),Object(m.jsx)("option",{value:"price-desc",children:"Price: High to Low"})]})}),Object(m.jsx)("form",{onChange:d,children:Object(m.jsxs)("select",{id:"color-form",defaultValue:"all",children:[Object(m.jsx)("option",{value:"all",children:"All Colors"}),o[2].color.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))]})}),Object(m.jsx)("form",{onChange:d,children:Object(m.jsxs)("select",{id:"brand-form",defaultValue:"all",children:[Object(m.jsx)("option",{value:"all",children:"All Brands"}),o[0].brand.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))]})}),Object(m.jsx)("form",{onChange:d,children:Object(m.jsxs)("select",{id:"type-form",defaultValue:"all",children:[Object(m.jsx)("option",{value:"all",children:"All Types"}),o[1].type.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))]})})]})});function G(){var e=Object(p.useLocation)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var D=function(e){var t=e.cardsArray,c=e.category,r=e.hero,s=e.heroId,n=e.gender,a=e.categories,l=e.setCategories,d=t,p=Object(i.useState)({sort:"default",color:"all",type:"all",brand:"all"}),u=Object(o.a)(p,2),b=u[0],h=u[1],O=Object(i.useState)(Object(R.a)(d)),g=Object(o.a)(O,2),x=g[0],f=g[1];return Object(i.useEffect)((function(){f(d.filter((function(e){return e.gender===n})))}),[]),Object(m.jsxs)("div",{id:"shop",children:[Object(m.jsx)(G,{}),Object(m.jsx)("div",{id:"shop-gradient",children:Object(m.jsx)("h1",{id:"shop-title",children:c})}),Object(m.jsx)("img",{id:s,src:r,alt:"hero"}),Object(m.jsx)("div",{id:"filter-container",children:Object(m.jsx)(F,{filters:b,setFilters:h,currentItems:x,setItems:f,cards:d,gender:n,categories:a,setCategories:l})}),Object(m.jsx)("div",{id:"shop-section",children:x.map((function(e){return Object(m.jsx)(j.b,{to:"/shop/item/".concat(e.title),children:Object(m.jsx)(T,{title:e.title,src:e.src,price:"$".concat(Number(e.price).toLocaleString("en-US")),description:e.description,brand:e.brand})},e.title)}))})]})},A=c.p+"static/media/hero2.abd14c40.jpg",P=(c(37),function(e){var t=e.cards,c=e.categories,i=e.setCategories;return Object(m.jsx)("div",{id:"women",children:Object(m.jsx)(D,{cardsArray:t,category:"WOMEN'S",hero:A,heroId:"shop-hero-woman",gender:"women",categories:c,setCategories:i})})}),I=c.p+"static/media/hero3.861af9ce.jpg",M=function(e){var t=e.cards,c=e.categories,i=e.setCategories;return Object(m.jsx)("div",{id:"women",children:Object(m.jsx)(D,{cardsArray:t,category:"MEN'S",hero:I,heroId:"shop-hero-man",gender:"men",categories:c,setCategories:i})})},U=(c(67),c.p+"static/media/about.598a0cd0.jpg"),z=function(){return Object(m.jsxs)("div",{id:"about",children:[Object(m.jsx)("div",{id:"about-gradient",children:Object(m.jsxs)("div",{id:"about-details",children:[Object(m.jsx)("h1",{id:"about-title",children:"ABOUT US"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros lacus, molestie elementum sollicitudin non, efficitur sit amet ipsum. Fusce commodo hendrerit odio, sodales rutrum sem bibendum sed. Duis dapibus nulla et enim convallis maximus."})]})}),Object(m.jsx)("img",{id:"about-hero",src:U,alt:"hero"})]})},V=(c(68),c(30)),q=c.n(V),J=c(41),H=c.n(J),W=function(e){var t=e.match,c=e.cards,r=e.cart,s=e.setCart,n=Object(i.useState)(""),a=Object(o.a)(n,2),l=a[0],d=a[1],j=c.find((function(e){return e.title===t.params.title})),p=Object.assign({},j),u=r.some((function(e){return e.title===p.title})),b=r.findIndex((function(e){return e.title===p.title&&e.size===l})),h=r.some((function(e){return e.title===p.title&&e.size===l}));Object(i.useEffect)((function(){document.getElementById("size-form").reset(),d("")}),[r]);return Object(m.jsxs)("div",{id:"item-page",children:[Object(m.jsx)(G,{}),Object(m.jsxs)("div",{id:"item-inner",children:[Object(m.jsx)("div",{id:"item-gradient"}),Object(m.jsx)("img",{id:"item-page-image",src:p.src,alt:"one"}),Object(m.jsxs)("div",{id:"item-page-details",children:[Object(m.jsx)("p",{id:"item-brand",children:p.brand}),Object(m.jsxs)("p",{id:"item-page-title",children:[p.title,Object(m.jsx)(H.a,{id:"back-icon",onClick:function(){window.history.back()}})]}),Object(m.jsxs)("p",{id:"item-page-price",children:["$",Number(p.price).toLocaleString("en-US")]}),Object(m.jsx)("p",{id:"item-page-description",children:p.description}),Object(m.jsxs)("form",{id:"size-form",onChange:function(){var e=document.getElementById("size-form-select").value;d(e)},onSubmit:function(e){e.preventDefault();var t=document.getElementById("item-error-message");t.style.setProperty("animation",""),t.style.setProperty("opacity","0"),""===l&&"Accessories"!==p.type||(p.quantity=1,!0!==u||!0!==h?(p.size=l,p.key=q()(),s([p].concat(Object(R.a)(r)))):r[b].quantity<5?s((function(e){return Object(R.a)(e)}),Object(E.a)({},r[b],r[b].quantity=parseFloat(r[b].quantity+1))):t.style.setProperty("animation","fade-in .5s forwards"))},children:["Accessories"!==p.type?Object(m.jsxs)("select",{id:"size-form-select",defaultValue:"none",children:[Object(m.jsx)("option",{disabled:!0,value:"none",children:"Size"}),Object(m.jsx)("option",{value:"S",children:"S"}),Object(m.jsx)("option",{value:"M",children:"M"}),Object(m.jsx)("option",{value:"L",children:"L"})]}):null,Object(m.jsx)("button",{className:"submit-button",type:"submit",children:"ADD TO CART"})]}),Object(m.jsx)("p",{id:"item-error-message",children:"* Max Quantity Reached"})]})]})]})},$=(c(70),c.p+"static/media/search.76a87158.jpg"),Y=function(e){var t=e.cards,c=Object(i.useState)(""),r=Object(o.a)(c,2),s=r[0],n=r[1],a=Object(i.useState)(Object(R.a)(t)),l=Object(o.a)(a,2),d=l[0],p=l[1];Object(i.useEffect)((function(){p([])}),[]),Object(i.useEffect)((function(){var e;e=s,p(t.filter((function(t){return JSON.stringify(t).toLowerCase().includes(e.toLowerCase())})))}),[s]);return Object(m.jsxs)("div",{id:"search",children:[Object(m.jsx)("div",{id:"check-gradient",children:Object(m.jsx)("h1",{id:"check-title",children:"SEARCH"})}),Object(m.jsx)("img",{id:"search-hero",src:$,alt:"hero"}),Object(m.jsxs)("div",{id:"search-section",children:[Object(m.jsx)("form",{children:Object(m.jsx)("input",{id:"search-box",type:"text",value:s,onChange:function(e){n(e.target.value)},placeholder:"Search"})}),Object(m.jsxs)("ul",{id:"check-list",children:[Object(m.jsxs)("p",{id:"current-search",children:['"',""===s?"all":s,'" (',d.length,")"]}),d.map((function(e){return Object(m.jsxs)("li",{className:"check-item",children:[Object(m.jsx)(j.b,{to:"/shop/item/".concat(e.title),children:Object(m.jsx)("img",{className:"check-item-image",src:e.src,alt:e.key})}),Object(m.jsx)("div",{className:"check-details",children:Object(m.jsx)("div",{className:"details-left",children:Object(m.jsxs)(j.b,{to:"/shop/item/".concat(e.title),children:[Object(m.jsx)("span",{className:"check-brand",children:e.brand}),Object(m.jsx)("span",{className:"check-name",children:e.title}),Object(m.jsxs)("span",{className:"check-price",children:["$",Number(e.price).toLocaleString("en-US")]})]},e.title)})})]},e.key)}))]})]})]})},Q=[{title:"Black Snake Dress",src:c.p+"static/media/one.4554ba22.jpeg",price:"1849.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Gucci",gender:"women",key:"1"},{title:"Tattered Silk Coat",src:c.p+"static/media/two.fa12f789.jpeg",price:"1379.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Grey",brand:"Maison Margiela",gender:"women",key:"2"},{title:"Royal Gold Gown",src:c.p+"static/media/three.7d66199a.jpeg",price:"859.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Blue",brand:"Luisa Beccaria",gender:"women",key:"3"},{title:"Fine Ripped Shirt",src:c.p+"static/media/four.1be85152.jpeg",price:"1319.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Maison Margiela",gender:"women",key:"4"},{title:"Renaissance Dress",src:c.p+"static/media/five.b20d9c7f.jpeg",price:"2899.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"White",brand:"Simone Rocha",gender:"women",key:"5"},{title:"Black Buttoned Overcoat",src:c.p+"static/media/six.c7ca21ae.jpeg",price:"659.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Yohji Yamamoto",gender:"women",key:"6"},{title:"Black Layered Top",src:c.p+"static/media/seven.96cbe4c3.jpeg",price:"779.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Anne Sofie Madsen",gender:"women",key:"7"},{title:"White Bracelet Sneakers",src:c.p+"static/media/8.b30e64f3.jpeg",price:"579.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Shoes",color:"White",brand:"Comme De Garcons",gender:"women",key:"8"},{title:"Gold and Black Heels",src:c.p+"static/media/9.056d826d.jpeg",price:"739.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Shoes",color:"Gold",brand:"Dolce & Gabbana",gender:"women",key:"9"},{title:"Gold and Pink Floral Heels",src:c.p+"static/media/11.ac56d754.jpeg",price:"1239.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Shoes",color:"Gold",brand:"Dolce & Gabbana",gender:"women",key:"10"},{title:"Stitched Mouse Top",src:c.p+"static/media/12.dd4f6c05.jpeg",price:"669.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"White",brand:"Dolce & Gabbana",gender:"women",key:"11"},{title:"Black Emblem Bag",src:c.p+"static/media/13.cfd03a44.jpeg",price:"279.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Accessories",color:"Black",brand:"Jean Paul Gaultier",gender:"women",key:"12"},{title:"Glitter Skull Bag",src:c.p+"static/media/14.b4d2eb3d.jpeg",price:"339.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Accessories",color:"Blue",brand:"Manish Arora",gender:"women",key:"13"},{title:"Portrait Bag",src:c.p+"static/media/15.532ea12e.jpeg",price:"489.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Accessories",color:"Gold",brand:"Moschino",gender:"women",key:"14"},{title:"Gold Bow Heels",src:c.p+"static/media/16.d1a2598b.jpeg",price:"1239.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Shoes",color:"Gold",brand:"Versace",gender:"women",key:"15"},{title:"Black Lace Dress",src:c.p+"static/media/17.35007e77.jpeg",price:"2579.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Valentino",gender:"women",key:"16"},{title:"Aged Snake Bag",src:c.p+"static/media/18.f23c39f2.jpeg",price:"899.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Accessories",color:"Gold",brand:"Valentino",gender:"women",key:"17"},{title:"Transparent Stitched Dress",src:c.p+"static/media/19.11364479.jpeg",price:"1529.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Gold",brand:"Valentino",gender:"women",key:"18"},{title:"Red Faces Shirt",src:c.p+"static/media/jean paul gaultier shirt.01b28af9.jpeg",price:"2529.99",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Red",brand:"Jean Paul Gaultier",gender:"men",key:"19"},{title:"Butterfly Suit",src:c.p+"static/media/Alexander McQueen Fall 2016.c64c22a7.jpeg",price:"979.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Alexander McQueen",gender:"men",key:"20"},{title:"Balenciaga Boots",src:c.p+"static/media/balenciaga light shoes.d55e6c54.jpeg",price:"779.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Shoes",color:"Black",brand:"Balenciaga",gender:"men",key:"21"},{title:"Burberry Jacket",src:c.p+"static/media/Burberry Spring 2019.7fffe508.jpeg",price:"779.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Brown",brand:"Burberry",gender:"men",key:"22"},{title:"Gold Leaf Jacket",src:c.p+"static/media/Dolce & Gabbana Fall 2015.832ad5df.jpeg",price:"3779.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Gold",brand:"Dolce & Gabbana",gender:"men",key:"23"},{title:"Snake Coat",src:c.p+"static/media/Dries Van Noten Fall 2016.cb9604af.jpeg",price:"3779.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Blue",brand:"Dries Van Noten",gender:"men",key:"24"},{title:"Bee Pin",src:c.p+"static/media/Gucci AW15.2941a96a.jpeg",price:"279.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Accessories",color:"Gold",brand:"Gucci",gender:"men",key:"25"},{title:"React Shoes",src:c.p+"static/media/nike shoes.07b37cd3.jpeg",price:"349.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Shoes",color:"Red",brand:"Nike",gender:"men",key:"26"},{title:"Portrait Jacket",src:c.p+"static/media/raf coat.95e9d580.jpeg",price:"6349.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Raf Simons",gender:"men",key:"27"},{title:"Red Girl Shirt",src:c.p+"static/media/Raf Simons Men\u2019s Fall 2018.0326d50a.jpeg",price:"1349.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Red",brand:"Raf Simons",gender:"men",key:"28"},{title:"RS Pink Jacket",src:c.p+"static/media/Raf Simons Spring 2015.58df08ed.jpeg",price:"1149.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Red",brand:"Raf Simons",gender:"men",key:"29"},{title:"Playing Card Pants",src:c.p+"static/media/UNDERCOVER 2016.819d0f98.jpeg",price:"949.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Bottom",color:"Black",brand:"Undercover",gender:"men",key:"30"},{title:"Castle Backpack",src:c.p+"static/media/undercover backpack.1a097a78.jpeg",price:"699.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Accessories",color:"Grey",brand:"Undercover",gender:"men",key:"31"},{title:"Black Portrait Jacket",src:c.p+"static/media/UNDERCOVER2020.58f51258.jpeg",price:"1299.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Black",brand:"Undercover",gender:"men",key:"32"},{title:"Face Long Sleeve",src:c.p+"static/media/Yohji Yamamoto Spring 2018.6ad0dea0.jpeg",price:"699.99",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",type:"Top",color:"Red",brand:"Yohji Yamamoto",gender:"men",key:"33"}],K=(c(71),c(72),c(42)),Z=c.n(K),_=function(){return Object(m.jsxs)("div",{id:"success",children:[Object(m.jsx)("div",{id:"success-header",children:Object(m.jsxs)("p",{id:"success-title",children:[Object(m.jsx)(Z.a,{id:"success-check"}),"ORDER SUCCESSFUL"]})}),Object(m.jsxs)("p",{id:"order-id",children:["ORDER ID: #",q()().toUpperCase()]})]})},X=c.p+"static/media/hero.f6d3ef2d.jpg",ee=function(e){var t=e.cart,c=e.setCart,r=Object(i.useState)(0),s=Object(o.a)(r,2),n=s[0],a=s[1],l=Object(i.useState)(!1),d=Object(o.a)(l,2),p=d[0],u=d[1],b=t.reduce((function(e,t){var c=parseFloat((Number(t.price)*Number(t.quantity)).toFixed(2));return parseFloat(Number(e)+Number(c)).toFixed(2)}),0),h=parseFloat((b/7.25).toFixed(2));Object(i.useEffect)((function(){t.length>0?a(parseFloat((Number(b)+Number(h)+15).toFixed(2))):a(0)}),[t,h,b]);var O=function(e){e.preventDefault();var i=e.target.getAttribute("data-key"),r=t.findIndex((function(e){return e.key===i}));c((function(e){return Object(R.a)(e)}),Object(E.a)({},t[r],t[r].quantity=e.target.value))},g=function(e){e.preventDefault();var i=e.target.getAttribute("data-key"),r=t.findIndex((function(e){return e.key===i}));c((function(e){return Object(R.a)(e)}),t.splice(r,1))};return Object(m.jsxs)("div",{id:"checkout",children:[Object(m.jsx)(G,{}),Object(m.jsx)("div",{id:"check-gradient",children:Object(m.jsx)("h1",{id:"check-title",children:"SHOPPING CART"})}),Object(m.jsx)("img",{id:"check-hero",src:X,alt:"hero"}),Object(m.jsxs)("div",{id:"checkout-section",children:[Object(m.jsx)("div",{id:"list-container",children:p?Object(m.jsx)(_,{}):Object(m.jsx)("ul",{id:"check-list",children:t.map((function(e){return Object(m.jsxs)("li",{className:"check-item",children:[Object(m.jsx)(j.b,{to:"/shop/item/".concat(e.title),children:Object(m.jsx)("img",{className:"check-item-image",src:e.src,alt:e.key})}),Object(m.jsxs)("div",{className:"check-details",children:[Object(m.jsxs)("div",{className:"details-left",children:[Object(m.jsxs)(j.b,{to:"/shop/item/".concat(e.title),children:[Object(m.jsx)("span",{className:"check-brand",children:e.brand}),Object(m.jsx)("span",{className:"check-name",children:e.title}),Object(m.jsxs)("span",{className:"check-price",children:["$",Number(e.price).toLocaleString("en-US")]})]},e.title),Object(m.jsxs)("p",{className:"check-size",children:["Size: ",e.size]})]}),Object(m.jsxs)("div",{className:"check-quantity",children:["Quantity:",Object(m.jsx)("form",{onChange:O,children:Object(m.jsxs)("select",{"data-key":e.key,className:"quantity-form",defaultValue:e.quantity,children:[Object(m.jsx)("option",{disabled:!0,value:e.quantity,children:e.quantity}),Object(m.jsx)("option",{value:"1",children:"1"}),Object(m.jsx)("option",{value:"2",children:"2"}),Object(m.jsx)("option",{value:"3",children:"3"}),Object(m.jsx)("option",{value:"4",children:"4"}),Object(m.jsx)("option",{value:"5",children:"5"})]})}),Object(m.jsx)(N.a,{onClick:g,"data-key":e.key,className:"delete-item"})]})]})]},e.key)}))})}),Object(m.jsxs)("div",{id:"checkout-sidebar",children:[Object(m.jsx)("div",{id:"check-sb-header",children:Object(m.jsx)("p",{id:"check-sb-title",children:"ORDER SUMMARY"})}),Object(m.jsxs)("div",{id:"check-totals-div",children:[Object(m.jsxs)("p",{className:"check-sb-text",id:"check-subtotal",children:["Subtotal:"," ",Number(b).toLocaleString("en-US",{useGrouping:!0,minimumFractionDigits:2})]}),Object(m.jsx)("p",{className:"check-sb-text",id:"check-shipping",children:"Shipping: $15"}),Object(m.jsx)("p",{className:"check-sb-text",id:"check-tax",children:"Tax: \n              $".concat(Number(h).toLocaleString("en-US",{useGrouping:!0,minimumFractionDigits:2}))}),Object(m.jsxs)("p",{id:"check-total",children:["Total: $",Number(n).toLocaleString("en-US",{useGrouping:!0,minimumFractionDigits:2})]})]}),Object(m.jsx)("div",{id:"check-sb-buttons",children:Object(m.jsx)("button",{id:"check-sb-checkout",onClick:function(e){e.preventDefault(),t.length>0&&(u(!0),c([]))},children:"CHECKOUT"})})]})]})]})};var te=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)([{brand:[]},{type:[]},{color:[]}]),n=Object(o.a)(s,2),l=n[0],u=n[1];return Object(m.jsx)(d.a,{basename:"/shopping-cart",children:Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(w,{cart:c,setCart:r}),Object(m.jsxs)(p.Switch,{children:[Object(m.jsx)(p.Route,{exact:!0,path:"/",children:Object(m.jsx)(b,{})}),Object(m.jsx)(p.Route,{exact:!0,path:"/women",children:Object(m.jsx)(P,{cards:Q,categories:l,setCategories:u})}),Object(m.jsx)(p.Route,{exact:!0,path:"/men",children:Object(m.jsx)(M,{cards:Q,categories:l,setCategories:u})}),Object(m.jsx)(p.Route,{exact:!0,path:"/about",children:Object(m.jsx)(z,{})}),Object(m.jsx)(p.Route,{exact:!0,path:"/checkout",children:Object(m.jsx)(ee,{cart:c,setCart:r})}),Object(m.jsx)(p.Route,{exact:!0,path:"/shop/item/:title",render:function(e){return Object(m.jsx)(W,Object(a.a)(Object(a.a)({},e),{},{cards:Q,cart:c,setCart:r}))}}),Object(m.jsx)(p.Route,{exact:!0,path:"/search",children:Object(m.jsx)(Y,{cards:Q})})]})]})})})};n.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(te,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.2d5441d9.chunk.js.map