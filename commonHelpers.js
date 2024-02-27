import{a as f}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const y=document.getElementById("toggle"),h=localStorage.getItem("theme");h&&(document.documentElement.classList.add(h),h==="dark-mode"&&(y.checked=!0,y.classList.add("dark-mode")));y.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");e==="/"?(t.classList.add("button"),o.classList.remove("button")):e==="/partials/shopping-list.html"&&(t.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.getElementById("backdrop-home-link"),o=document.getElementById("backdrop-shopping-list-link");e==="/"?(t.classList.add("button"),o.classList.remove("button")):e==="/partials/shopping-list.html"&&(t.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger"),t=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){e.checked?(e.checked=!1,t.style.display="none",c.style.height="0",n.style.display="none",o.style.display="block"):(e.checked=!0,t.style.display="block",c.style.height="100vh",n.style.display="block",o.style.display="none")}o.addEventListener("click",s),n.addEventListener("click",s)});async function q(){const{data:e}=await f.get("https://books-backend.p.goit.global/books/category-list");return e}async function E(){const{data:e}=await f.get("https://books-backend.p.goit.global/books/top-books");return e}async function O(e){const{data:t}=await f.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t}async function H(){try{const e=await E(),t=document.querySelector(".books-list");t.innerHTML="";let o=1;window.innerWidth>=768&&window.innerWidth<1440?o=3:window.innerWidth>=1440&&(o=5),L(e,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const i=document.createElement("h2");i.textContent=n.list_name,i.classList.add("category-title"),s.appendChild(i);const p=L(n.books,o),d=document.createElement("ul");d.classList.add("books-container"),p.map(u=>{const g=document.createElement("li");g.classList.add("book-item");const I=`
          <div class="book-info">
            <img src="${u.book_image}" alt="${u.title}" class="book-image">
            <h3 class="book-title">${u.title}</h3>
            <p class="book-author">${u.author}</p>
          </div>
        `;g.innerHTML=I,d.appendChild(g)}),s.appendChild(d);const a=document.createElement("div");a.classList.add("see-more-button-container");const l=document.createElement("button");l.classList.add("see-more-button"),l.textContent="See more",l.addEventListener("click",()=>{_(n.list_name)}),a.appendChild(l),s.appendChild(a),t.appendChild(s)})}catch(e){console.error("Error fetching books:",e)}}async function _(e){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),i=e.split(" "),p=i.pop();s.innerHTML=i.join(" ")+' <span class="books-section-title-accent">'+p+"</span>",s.classList.add("books-section-title"),c.appendChild(s);const d=document.createElement("div");d.classList.add("books-container"),o.map(a=>{const l=document.createElement("div");l.classList.add("book-item");const u=`
        <div class="book-info book-in-category">
          <img src="${a.book_image}" alt="${a.title}" class="book-image">
          <h3 class="book-title">${a.title}</h3>
          <p class="book-author">${a.author}</p>
        </div>
      `;l.innerHTML=u,d.appendChild(l)}),c.appendChild(d)}catch(t){console.error("Error fetching books:",t)}}function L(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}H();const k=document.querySelector(".category-list"),m=document.querySelector(".books-list");async function j(){try{const e=await q();if(e.length===0)throw new Error;const o=e.map(({list_name:c})=>c).sort((c,n)=>c.localeCompare(n)).map(c=>x(c)).join("");k.insertAdjacentHTML("beforeend",o)}catch(e){console.error(e)}}j();function x(e){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${e}">${e}</button>
  </li>`}async function w(){try{const e=await E();if(e.length===0)throw new Error;const t=N(e,"Best Sellers Books");m.innerHTML=t}catch(e){console.error(e),m.innerHTML="<h2>Try reloading the page...</h2>"}}function N(e,t){return`${C(t)}
 <ul class="books-bestsellers">
        ${e.map(({books:n,list_name:s})=>D(n,s)).join("")}
 </ul>`}async function A(e){try{const t=await O(e);if(t.length===0)throw new Error;const o=P(t,e);m.innerHTML=o}catch(t){console.error(t),m.innerHTML="<h2>Try reloading the page...</h2>"}}w();function P(e,t){return`${C(t)}
        <ul class="books-category">
            ${e.map(n=>B(n)).join("")}
        </ul>`}function D(e,t){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${t}</p>
            <ul class="books-bestsellers-list">
                ${e.map(o=>B(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${t}">
                See more
            </button>
        </li>`}function B(e){const{_id:t,book_image:o,book_image_width:c,book_image_height:n,publisher:s,title:i}=e;return`<li class="books-item" data-id="${t}">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${o}" 
                    width="${c}" 
                    height="${n}"
                    loading="lazy"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${i}</h4>
        <span class="books-author">${s}</span>
    </li>`}function C(e){const t=e.split(" "),o=t.splice(length-1,1).join("");return`<h2 class="books-title">${t.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let v="";function S(e){const t=e.target,o=t.dataset.listName;t.tagName!=="BUTTON"||v===o||(o!=="bestsellers"?A(o):w(),v=o,W(o))}function W(e){const o=[...k.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===e),c=k.querySelector(".active");o.classList.add("active"),c.classList.remove("active"),F(o)}function F(e){e.scrollIntoView({behavior:"smooth",block:"center"})}k.addEventListener("click",S);m.addEventListener("click",S);const r={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn"),modalBtn:document.querySelector(".add-to-localSt"),backdrop:document.querySelector(".modal-backdrop")};r.books.addEventListener("click",K);async function K(e){e.preventDefault(),e.target.nodeName==="IMG"&&(r.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),r.backdrop.addEventListener("click",M),r.xBtn.addEventListener("click",b),window.addEventListener("keydown",$),r.modalBtn.addEventListener("click",T))}function b(e){r.backdrop.removeEventListener("click",M),r.xBtn.removeEventListener("click",b),window.removeEventListener("keydown",$),r.modalBtn.removeEventListener("click",T),document.body.classList.remove("no-scroll"),r.modal.classList.remove("is-open")}function $(e){e.key==="Escape"&&b()}function M(e){e.target===e.currentTarget&&b()}function T(){const e="shopping-list-books";localStorage.setItem(e,JSON.stringify(Math.random()))}
//# sourceMappingURL=commonHelpers.js.map
