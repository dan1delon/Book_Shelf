import{a as b}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const f=document.getElementById("toggle"),y=localStorage.getItem("theme");y&&(document.documentElement.classList.add(y),y==="dark-mode"&&(f.checked=!0,f.classList.add("dark-mode")));f.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/partials/shopping-list.html"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("backdrop-home-link"),o=document.getElementById("backdrop-shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/partials/shopping-list.html"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){t.checked?(t.checked=!1,e.style.display="none",c.style.height="0",n.style.display="none",o.style.display="block"):(t.checked=!0,e.style.display="block",c.style.height="100vh",n.style.display="block",o.style.display="none")}o.addEventListener("click",s),n.addEventListener("click",s)});async function O(){const{data:t}=await b.get("https://books-backend.p.goit.global/books/category-list");return t}async function w(){const{data:t}=await b.get("https://books-backend.p.goit.global/books/top-books");return t}async function N(t){const{data:e}=await b.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}async function H(t){const{data:e}=await b.get(`https://books-backend.p.goit.global/books/${t}`);return e}async function j(){try{const t=await w(),e=document.querySelector(".books-list");e.innerHTML="";let o=1;window.innerWidth>=768&&window.innerWidth<1440?o=3:window.innerWidth>=1440&&(o=5),S(t,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const a=document.createElement("h2");a.textContent=n.list_name,a.classList.add("category-title"),s.appendChild(a);const u=S(n.books,o),l=document.createElement("ul");l.classList.add("books-container"),u.map(m=>{const k=document.createElement("li");k.classList.add("book-item"),k.setAttribute("id",m._id);const A=`
          <div class="book-info">
            <img src="${m.book_image}" alt="${m.title}" class="book-image">
            <h3 class="book-title">${m.title}</h3>
            <p class="book-author">${m.author}</p>
          </div>
        `;k.innerHTML=A,l.appendChild(k)}),s.appendChild(l);const i=document.createElement("div");i.classList.add("see-more-button-container");const r=document.createElement("button");r.classList.add("see-more-button"),r.textContent="See more",r.addEventListener("click",()=>{P(n.list_name)}),i.appendChild(r),s.appendChild(i),e.appendChild(s)})}catch(t){console.error("Error fetching books:",t)}}async function P(t){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),a=t.split(" "),u=a.pop();s.innerHTML=a.join(" ")+' <span class="books-section-title-accent">'+u+"</span>",s.classList.add("books-section-title"),c.appendChild(s);const l=document.createElement("div");l.classList.add("books-container"),o.map(i=>{const r=document.createElement("div");r.classList.add("book-item"),r.setAttribute("id",i._id);const m=`
        <div class="book-info book-in-category">
          <img src="${i.book_image}" alt="${i.title}" class="book-image">
          <h3 class="book-title">${i.title}</h3>
          <p class="book-author">${i.author}</p>
        </div>
      `;r.innerHTML=m,l.appendChild(r)}),c.appendChild(l)}catch(e){console.error("Error fetching books:",e)}}function S(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}j();const g=document.querySelector(".category-list"),p=document.querySelector(".books-list");async function W(){try{const t=await O();if(t.length===0)throw new Error;const o=t.map(({list_name:c})=>c).sort((c,n)=>c.localeCompare(n)).map(c=>D(c)).join("");g.insertAdjacentHTML("beforeend",o)}catch(t){console.error(t)}}W();function D(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function C(){try{const t=await w();if(t.length===0)throw new Error;const e=z(t,"Best Sellers Books");p.innerHTML=e}catch(t){console.error(t),p.innerHTML="<h2>Try reloading the page...</h2>"}}function z(t,e){return`${I(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:n,list_name:s})=>F(n,s)).join("")}
 </ul>`}async function J(t){try{const e=await N(t);if(e.length===0)throw new Error;const o=R(e,t);p.innerHTML=o}catch(e){console.error(e),p.innerHTML="<h2>Try reloading the page...</h2>"}}C();function R(t,e){return`${I(e)}
        <ul class="books-category">
            ${t.map(n=>$(n)).join("")}
        </ul>`}function F(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(o=>$(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function $(t){const{_id:e,book_image:o,book_image_width:c,book_image_height:n,publisher:s,title:a}=t;return`<li class="books-item">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${o}" 
                    width="${c}" 
                    height="${n}"
                    loading="lazy"
                    data-id="${e}"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${a}</h4>
        <span class="books-author">${s}</span>
    </li>`}function I(t){const e=t.split(" "),o=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let B="";function T(t){const e=t.target,o=e.dataset.listName;e.tagName!=="BUTTON"||B===o||(o!=="bestsellers"?J(o):C(),B=o,K(o))}function K(t){const o=[...g.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===t),c=g.querySelector(".active");o.classList.add("active"),c.classList.remove("active"),G(o)}function G(t){t.scrollIntoView({behavior:"smooth",block:"center"})}g.addEventListener("click",T);p.addEventListener("click",T);const d={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn"),backdrop:document.querySelector(".modal-backdrop"),oneBook:document.querySelectorAll(".books-item"),modalContent:document.querySelector(".modal-content-wrapper"),descriptionBookEl:document.querySelector(".descr-of-book")};d.books.addEventListener("click",U);let L=[];async function U(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const e=t.target.dataset.id;d.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),d.backdrop.addEventListener("click",q),d.xBtn.addEventListener("click",h),window.addEventListener("keydown",M),await Q(e),document.querySelector(".add-to-localSt").addEventListener("click",V)}function h(t){d.backdrop.removeEventListener("click",q),d.xBtn.removeEventListener("click",h),window.removeEventListener("keydown",M),document.body.classList.remove("no-scroll"),d.modal.classList.remove("is-open")}function M(t){t.key==="Escape"&&h()}function q(t){t.target===t.currentTarget&&h()}function V(){const t="selected-books",e=JSON.parse(localStorage.getItem(t))||[],o=L[0]._id,c=e.some(a=>a._id===o);if(c){const a=e.filter(u=>u._id!==o);localStorage.setItem(t,JSON.stringify(a))}else e.push(L[0]),localStorage.setItem(t,JSON.stringify(e));const n=document.querySelector(".add-to-localSt"),s=c?"Add to Shopping List":"Remove from Shopping List";n.textContent=s,Y(!c)}function Y(t){const e=document.querySelector(".add-to-localSt"),o=t?"Remove from Shopping List":"Add to Shopping List";e.textContent=o}async function Q(t){var e;d.modalContent.innerHTML="";try{const o=await H(t),{book_image:c,title:n,author:s,description:a,buy_links:u}=o;L.push(o);const l=!!((e=JSON.parse(localStorage.getItem("selected-books")))!=null&&e.find(r=>r._id===o._id)),i=`<div class="modal-content">
        <img class="book-img-modal" src="${c}" alt="book-image">
        <div class="modal-text-wrap">
            <div class="name-of-book">
                <h3 class="title-of-book">${n}</h3>
                <p class="author-of-book">${s}</p>
            </div>
            <p class="descr-of-book">${a}</p>
            <div class="buy-links">
                <a href="${u[0].url}" target="_blank" class="amazon-link"><img class="amazon-link-img"
                        src="../img/amazon-shop-1x.png" alt="link"></a>
                <a href="${u[1].url}" target="_blank" class="apple-link"><img class="apple-link-img" src="../img/apple-shop-1x.png"
                        alt="link"></a>
            </div>
           </div>
        </div>
        <button class="add-to-localSt" type="button">${l?"remove from the shopping list":"add to shopping list"}</button>`;d.modalContent.innerHTML=i}catch(o){alert(`Something went wrong. You caught the following error: ${o.message}.`)}}const _=document.getElementById("loading-bar"),X=document.querySelector(".progress-bar");function v(){_.style.opacity=1}function E(){_.style.opacity=0}function x(t){X.style.width=`${t}%`}window.addEventListener("load",()=>{v(),x(100),setTimeout(E,500)});const Z=document.querySelectorAll("button");Z.forEach(t=>{t.addEventListener("click",()=>{v();let e=0;const o=setInterval(()=>{e+=10,x(e),e===100&&(clearInterval(o),E())},100)})});document.body.addEventListener("click",t=>{const e=t.target;e.tagName==="A"&&e.href.startsWith("/")&&v()});document.addEventListener("pagehide",E);
//# sourceMappingURL=commonHelpers.js.map
