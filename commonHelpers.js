import{a as u}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const d=document.getElementById("toggle"),l=localStorage.getItem("theme");l&&(document.documentElement.classList.add(l),l==="dark-mode"&&(d.checked=!0,d.classList.add("dark-mode")));d.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),s=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),s.classList.remove("button")):t==="/shopping-list"&&(e.classList.remove("button"),s.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),s=document.querySelector(".icon-logo"),n=document.querySelector(".nav-links"),o=document.getElementById("x-close");function c(){t.checked?(t.checked=!1,e.style.display="none",n.style.height="0",o.style.opacity="0"):(t.checked=!0,e.style.display="block",n.style.height="100vh",o.style.opacity="1")}s.addEventListener("click",c),e.addEventListener("click",c)});async function p(){const{data:t}=await u.get("https://books-backend.p.goit.global/books/category-list");return t}async function y(){const{data:t}=await u.get("https://books-backend.p.goit.global/books/top-books");return t}async function f(t){const{data:e}=await u.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}const a=document.querySelector(".category-list"),i=document.querySelector(".books-list");async function L(){try{const t=await p();if(t.length===0)throw new Error;const s=t.map(({list_name:n})=>n).sort((n,o)=>n.localeCompare(o)).map(n=>v(n)).join("");a.insertAdjacentHTML("beforeend",s)}catch(t){console.error(t)}}L();function v(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function g(){try{const t=await y();if(t.length===0)throw new Error;const e=w(t,"Best Sellers Books");i.innerHTML=e}catch(t){console.error(t),i.innerHTML="<h2>Try reloading the page...</h2>"}}function w(t,e){return`${h(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:o,list_name:c})=>$(o,c)).join("")}
 </ul>`}async function E(t){try{const e=await f(t);if(e.length===0)throw new Error;const s=B(e,t);i.innerHTML=s}catch(e){console.error(e),i.innerHTML="<h2>Try reloading the page...</h2>"}}g();function B(t,e){return`${h(e)}
        <ul class="books-category">
            ${t.map(o=>b(o)).join("")}
        </ul>`}function $(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(s=>b(s)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function b(t){const{_id:e,book_image:s,book_image_width:n,book_image_height:o,publisher:c,title:r}=t;return`<li class="books-item" data-id="${e}">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${s}" 
                    width="${n}" 
                    height="${o}"
                    loading="lazy"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${r}</h4>
        <span class="books-author">${c}</span>
    </li>`}function h(t){const e=t.split(" "),s=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${s}</span>
    </h2>`}let m="";function k(t){const e=t.target,s=e.dataset.listName;e.tagName!=="BUTTON"||m===s||(s!=="bestsellers"?E(s):g(),m=s,I(s))}function I(t){const s=[...a.querySelectorAll(".category-btn")].find(o=>o.dataset.listName===t),n=a.querySelector(".active");s.classList.add("active"),n.classList.remove("active"),S(s)}function S(t){t.scrollIntoView({behavior:"smooth",block:"center"})}a.addEventListener("click",k);i.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
