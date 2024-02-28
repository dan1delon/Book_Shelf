import{a as b,S as j}from"./assets/vendor-3d873957.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const v=document.getElementById("toggle"),y=localStorage.getItem("theme");y&&(document.documentElement.classList.add(y),y==="dark-mode"&&(v.checked=!0,v.classList.add("dark-mode")));v.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/partials/shopping-list.html"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("backdrop-home-link"),o=document.getElementById("backdrop-shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/partials/shopping-list.html"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),i=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){t.checked?(t.checked=!1,e.style.display="none",i.style.height="0",n.style.display="none",o.style.display="block"):(t.checked=!0,e.style.display="block",i.style.height="100vh",n.style.display="block",o.style.display="none")}o.addEventListener("click",s),n.addEventListener("click",s)});async function U(){const{data:t}=await b.get("https://books-backend.p.goit.global/books/category-list");return t}async function $(){const{data:t}=await b.get("https://books-backend.p.goit.global/books/top-books");return t}async function W(t){const{data:e}=await b.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}async function D(t){const{data:e}=await b.get(`https://books-backend.p.goit.global/books/${t}`);return e}async function z(){try{const t=await $(),e=document.querySelector(".books-list");e.innerHTML="";let o=1;window.innerWidth>=768&&window.innerWidth<1440?o=3:window.innerWidth>=1440&&(o=5),B(t,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const a=document.createElement("h2");a.textContent=n.list_name,a.classList.add("category-title"),s.appendChild(a);const d=B(n.books,o),c=document.createElement("ul");c.classList.add("books-container"),d.map(m=>{const h=document.createElement("li");h.classList.add("book-item"),h.setAttribute("id",m._id);const P=`
          <div class="book-info">
            <img src="${m.book_image}" alt="${m.title}" class="book-image">
            <h3 class="book-title">${m.title}</h3>
            <p class="book-author">${m.author}</p>
          </div>
        `;h.innerHTML=P,c.appendChild(h)}),s.appendChild(c);const r=document.createElement("div");r.classList.add("see-more-button-container");const l=document.createElement("button");l.classList.add("see-more-button"),l.textContent="See more",l.addEventListener("click",()=>{F(n.list_name)}),r.appendChild(l),s.appendChild(r),e.appendChild(s)})}catch(t){console.error("Error fetching books:",t)}}async function F(t){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),i=document.querySelector(".books-list");i.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),a=t.split(" "),d=a.pop();s.innerHTML=a.join(" ")+' <span class="books-section-title-accent">'+d+"</span>",s.classList.add("books-section-title"),i.appendChild(s);const c=document.createElement("div");c.classList.add("books-container"),o.map(r=>{const l=document.createElement("div");l.classList.add("book-item"),l.setAttribute("id",r._id);const m=`
        <div class="book-info book-in-category">
          <img src="${r.book_image}" alt="${r.title}" class="book-image">
          <h3 class="book-title">${r.title}</h3>
          <p class="book-author">${r.author}</p>
        </div>
      `;l.innerHTML=m,c.appendChild(l)}),i.appendChild(c)}catch(e){console.error("Error fetching books:",e)}}function B(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}z();const k=document.querySelector(".category-list"),g=document.querySelector(".books-list");async function J(){try{const t=await U();if(t.length===0)throw new Error;const o=t.map(({list_name:i})=>i).sort((i,n)=>i.localeCompare(n)).map(i=>R(i)).join("");k.insertAdjacentHTML("beforeend",o)}catch(t){console.error(t)}}J();function R(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function T(){try{const t=await $();if(t.length===0)throw new Error;const e=K(t,"Best Sellers Books");g.innerHTML=e}catch(t){console.error(t),g.innerHTML="<h2>Try reloading the page...</h2>"}}function K(t,e){return`${q(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:n,list_name:s})=>Y(n,s)).join("")}
 </ul>`}async function G(t){try{const e=await W(t);if(e.length===0)throw new Error;const o=V(e,t);g.innerHTML=o}catch(e){console.error(e),g.innerHTML="<h2>Try reloading the page...</h2>"}}T();function V(t,e){return`${q(e)}
        <ul class="books-category">
            ${t.map(n=>M(n)).join("")}
        </ul>`}function Y(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(o=>M(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function M(t){const{_id:e,book_image:o,book_image_width:i,book_image_height:n,publisher:s,title:a}=t;return`<li class="books-item">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${o}" 
                    width="${i}" 
                    height="${n}"
                    loading="lazy"
                    data-id="${e}"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${a}</h4>
        <span class="books-author">${s}</span>
    </li>`}function q(t){const e=t.split(" "),o=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let C="";function _(t){const e=t.target,o=e.dataset.listName;e.tagName!=="BUTTON"||C===o||(o!=="bestsellers"?G(o):T(),C=o,Z(o))}function Z(t){const o=[...k.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===t),i=k.querySelector(".active");o.classList.add("active"),i.classList.remove("active"),Q(o)}function Q(t){t.scrollIntoView({behavior:"smooth",block:"center"})}k.addEventListener("click",_);g.addEventListener("click",_);const X=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/SupportUkraine/01-found-1.png",width:131,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/SupportUkraine/02-found-1.png",width:62,height:32},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/SupportUkraine/03-found-1.png",width:114,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/SupportUkraine/04-found-1.png",width:103,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/SupportUkraine/05-found-1.png",width:78,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/SupportUkraine/06-found-1.png",width:82,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/SupportUkraine/07-found-1.png",width:55,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/SupportUkraine/08-found-1.png",width:81,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/SupportUkraine/09-found-1.png",width:115,height:32}],tt=document.querySelector(".splide__list");let x=[];X.forEach(({title:t,url:e,img:o,width:i,height:n},s)=>{const a=(s+1).toString().padStart(2,"0"),d=document.createElement("li"),c=document.createElement("a"),r=document.createElement("img"),l=document.createElement("p");r.src=o,r.alt=t,r.width=i,r.height=n,c.href=e,l.textContent=a,c.target="_blank",c.append(r),d.append(l),d.append(c),d.classList.add("splide__slide"),d.classList.add("item-donation"),c.classList.add("item-link-donation"),r.classList.add("item-img-donation"),l.classList.add("p-num-donation"),x.push(d)});tt.append(...x);const p=new j(".splide",{direction:"ttb",height:292,pagination:!1,perMove:4,perPage:6,gap:20,fixedHeight:32,arrows:!1,speed:800});p.mount();let L=0;const et=document.querySelector(".scroll-button-donations"),I=document.querySelector(".use-svg");et.addEventListener("click",()=>{L===0?(p.go(p.length-1,!1),L=p.length-1,I.style.transform="rotate(180deg)"):(p.go(0,!1),L=0,I.style.transform="rotate(0deg)")});const u={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn"),backdrop:document.querySelector(".modal-backdrop"),oneBook:document.querySelectorAll(".books-item"),modalContent:document.querySelector(".modal-content-wrapper"),descriptionBookEl:document.querySelector(".descr-of-book")};u.books.addEventListener("click",ot);let w=[];async function ot(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const e=t.target.dataset.id;u.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),u.backdrop.addEventListener("click",O),u.xBtn.addEventListener("click",f),window.addEventListener("keydown",A),await it(e),document.querySelector(".add-to-localSt").addEventListener("click",nt)}function f(t){u.backdrop.removeEventListener("click",O),u.xBtn.removeEventListener("click",f),window.removeEventListener("keydown",A),document.body.classList.remove("no-scroll"),u.modal.classList.remove("is-open")}function A(t){t.key==="Escape"&&f()}function O(t){t.target===t.currentTarget&&f()}function nt(){const t="selected-books",e=JSON.parse(localStorage.getItem(t))||[],o=w[0]._id,i=e.some(a=>a._id===o);if(i){const a=e.filter(d=>d._id!==o);localStorage.setItem(t,JSON.stringify(a))}else e.push(w[0]),localStorage.setItem(t,JSON.stringify(e));const n=document.querySelector(".add-to-localSt"),s=i?"Add to Shopping List":"Remove from Shopping List";n.textContent=s,st(!i)}function st(t){const e=document.querySelector(".add-to-localSt"),o=t?"Remove from Shopping List":"Add to Shopping List";e.textContent=o}async function it(t){var e;u.modalContent.innerHTML="";try{const o=await D(t),{book_image:i,title:n,author:s,description:a,buy_links:d}=o;w.push(o);const c=!!((e=JSON.parse(localStorage.getItem("selected-books")))!=null&&e.find(l=>l._id===o._id)),r=`<div class="modal-content">
        <img class="book-img-modal" src="${i}" alt="book-image">
        <div class="modal-text-wrap">
            <div class="name-of-book">
                <h3 class="title-of-book">${n}</h3>
                <p class="author-of-book">${s}</p>
            </div>
            <p class="descr-of-book">${a}</p>
            <div class="buy-links">
                <a href="${d[0].url}" target="_blank" class="amazon-link"><img class="amazon-link-img"
                        src="../img/amazon-shop-1x.png" alt="link"></a>
                <a href="${d[1].url}" target="_blank" class="apple-link"><img class="apple-link-img" src="../img/apple-shop-1x.png"
                        alt="link"></a>
            </div>
           </div>
        </div>
        <button class="add-to-localSt" type="button">${c?"remove from the shopping list":"add to shopping list"}</button>`;u.modalContent.innerHTML=r}catch(o){alert(`Something went wrong. You caught the following error: ${o.message}.`)}}const H=document.getElementById("loading-bar"),at=document.querySelector(".progress-bar");function S(){H.style.opacity=1}function E(){H.style.opacity=0}function N(t){at.style.width=`${t}%`}window.addEventListener("load",()=>{S(),N(100),setTimeout(E,500)});const rt=document.querySelectorAll("button");rt.forEach(t=>{t.addEventListener("click",()=>{S();let e=0;const o=setInterval(()=>{e+=10,N(e),e===100&&(clearInterval(o),E())},100)})});document.body.addEventListener("click",t=>{const e=t.target;e.tagName==="A"&&e.href.startsWith("/")&&S()});document.addEventListener("pagehide",E);
//# sourceMappingURL=commonHelpers.js.map
