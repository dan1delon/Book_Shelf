import{a as f}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const y=document.getElementById("toggle"),h=localStorage.getItem("theme");h&&(document.documentElement.classList.add(h),h==="dark-mode"&&(y.checked=!0,y.classList.add("dark-mode")));y.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/partials/shopping-list.html"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("backdrop-home-link"),o=document.getElementById("backdrop-shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/partials/shopping-list.html"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){t.checked?(t.checked=!1,e.style.display="none",c.style.height="0",n.style.display="none",o.style.display="block"):(t.checked=!0,e.style.display="block",c.style.height="100vh",n.style.display="block",o.style.display="none")}o.addEventListener("click",s),n.addEventListener("click",s)});async function H(){const{data:t}=await f.get("https://books-backend.p.goit.global/books/category-list");return t}async function B(){const{data:t}=await f.get("https://books-backend.p.goit.global/books/top-books");return t}async function N(t){const{data:e}=await f.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}async function j(){try{const t=await B(),e=document.querySelector(".books-list");e.innerHTML="";let o=1;window.innerWidth>=768&&window.innerWidth<1440?o=3:window.innerWidth>=1440&&(o=5),E(t,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const r=document.createElement("h2");r.textContent=n.list_name,r.classList.add("category-title"),s.appendChild(r);const g=E(n.books,o),d=document.createElement("ul");d.classList.add("books-container"),g.map(u=>{const p=document.createElement("li");p.classList.add("book-item"),p.setAttribute("id",u._id);const O=`
          <div class="book-info">
            <img src="${u.book_image}" alt="${u.title}" class="book-image">
            <h3 class="book-title">${u.title}</h3>
            <p class="book-author">${u.author}</p>
          </div>
        `;p.innerHTML=O,d.appendChild(p)}),s.appendChild(d);const i=document.createElement("div");i.classList.add("see-more-button-container");const a=document.createElement("button");a.classList.add("see-more-button"),a.textContent="See more",a.addEventListener("click",()=>{x(n.list_name)}),i.appendChild(a),s.appendChild(i),e.appendChild(s)})}catch(t){console.error("Error fetching books:",t)}}async function x(t){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),r=t.split(" "),g=r.pop();s.innerHTML=r.join(" ")+' <span class="books-section-title-accent">'+g+"</span>",s.classList.add("books-section-title"),c.appendChild(s);const d=document.createElement("div");d.classList.add("books-container"),o.map(i=>{const a=document.createElement("div");a.classList.add("book-item"),a.setAttribute("id",i._id);const u=`
        <div class="book-info book-in-category">
          <img src="${i.book_image}" alt="${i.title}" class="book-image">
          <h3 class="book-title">${i.title}</h3>
          <p class="book-author">${i.author}</p>
        </div>
      `;a.innerHTML=u,d.appendChild(a)}),c.appendChild(d)}catch(e){console.error("Error fetching books:",e)}}function E(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}j();const b=document.querySelector(".category-list"),m=document.querySelector(".books-list");async function P(){try{const t=await H();if(t.length===0)throw new Error;const o=t.map(({list_name:c})=>c).sort((c,n)=>c.localeCompare(n)).map(c=>W(c)).join("");b.insertAdjacentHTML("beforeend",o)}catch(t){console.error(t)}}P();function W(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function C(){try{const t=await B();if(t.length===0)throw new Error;const e=D(t,"Best Sellers Books");m.innerHTML=e}catch(t){console.error(t),m.innerHTML="<h2>Try reloading the page...</h2>"}}function D(t,e){return`${$(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:n,list_name:s})=>z(n,s)).join("")}
 </ul>`}async function F(t){try{const e=await N(t);if(e.length===0)throw new Error;const o=K(e,t);m.innerHTML=o}catch(e){console.error(e),m.innerHTML="<h2>Try reloading the page...</h2>"}}C();function K(t,e){return`${$(e)}
        <ul class="books-category">
            ${t.map(n=>S(n)).join("")}
        </ul>`}function z(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(o=>S(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function S(t){const{_id:e,book_image:o,book_image_width:c,book_image_height:n,publisher:s,title:r}=t;return`<li class="books-item">
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
        <h4 class="books-title-book">${r}</h4>
        <span class="books-author">${s}</span>
    </li>`}function $(t){const e=t.split(" "),o=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let w="";function I(t){const e=t.target,o=e.dataset.listName;e.tagName!=="BUTTON"||w===o||(o!=="bestsellers"?F(o):C(),w=o,G(o))}function G(t){const o=[...b.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===t),c=b.querySelector(".active");o.classList.add("active"),c.classList.remove("active"),J(o)}function J(t){t.scrollIntoView({behavior:"smooth",block:"center"})}b.addEventListener("click",I);m.addEventListener("click",I);const l={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn"),modalBtn:document.querySelector(".add-to-localSt"),backdrop:document.querySelector(".modal-backdrop")};l.books.addEventListener("click",R);async function R(t){t.preventDefault(),t.target.nodeName==="IMG"&&(l.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),l.backdrop.addEventListener("click",M),l.xBtn.addEventListener("click",k),window.addEventListener("keydown",T),l.modalBtn.addEventListener("click",q))}function k(t){l.backdrop.removeEventListener("click",M),l.xBtn.removeEventListener("click",k),window.removeEventListener("keydown",T),l.modalBtn.removeEventListener("click",q),document.body.classList.remove("no-scroll"),l.modal.classList.remove("is-open")}function T(t){t.key==="Escape"&&k()}function M(t){t.target===t.currentTarget&&k()}function q(){const t="shopping-list-books";localStorage.setItem(t,JSON.stringify(Math.random()))}const _=document.getElementById("loading-bar"),U=document.querySelector(".progress-bar");function L(){_.style.opacity=1}function v(){_.style.opacity=0}function A(t){U.style.width=`${t}%`}window.addEventListener("load",()=>{L(),A(100),setTimeout(v,500)});const V=document.querySelectorAll("button");V.forEach(t=>{t.addEventListener("click",()=>{L();let e=0;const o=setInterval(()=>{e+=10,A(e),e===100&&(clearInterval(o),v())},100)})});document.body.addEventListener("click",t=>{const e=t.target;e.tagName==="A"&&e.href.startsWith("/")&&L()});document.addEventListener("pagehide",v);
//# sourceMappingURL=commonHelpers.js.map
