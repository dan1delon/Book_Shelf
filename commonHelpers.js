import{a as h}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const k=document.getElementById("toggle"),g=localStorage.getItem("theme");g&&(document.documentElement.classList.add(g),g==="dark-mode"&&(k.checked=!0,k.classList.add("dark-mode")));k.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/shopping-list"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){t.checked?(t.checked=!1,e.style.display="none",c.style.height="0",n.style.opacity="0"):(t.checked=!0,e.style.display="block",c.style.height="100vh",n.style.opacity="1")}o.addEventListener("click",s),e.addEventListener("click",s)});async function T(){const{data:t}=await h.get("https://books-backend.p.goit.global/books/category-list");return t}async function L(){const{data:t}=await h.get("https://books-backend.p.goit.global/books/top-books");return t}async function S(t){const{data:e}=await h.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}async function v(){try{const t=await L(),e=document.querySelector(".books-list");e.innerHTML="";let o=1;window.innerWidth>=768&&window.innerWidth<1440?o=3:window.innerWidth>=1440&&(o=5),y(t,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const r=document.createElement("h2");r.textContent=n.list_name,r.classList.add("category-title"),s.appendChild(r);const b=y(n.books,o),l=document.createElement("ul");l.classList.add("books-container"),b.map(d=>{const p=document.createElement("li");p.classList.add("book-item");const B=`
          <div class="book-info">
            <img src="${d.book_image}" alt="${d.title}" class="book-image">
            <h3 class="book-title">${d.title}</h3>
            <p class="book-author">${d.author}</p>
          </div>
        `;p.innerHTML=B,l.appendChild(p)}),s.appendChild(l);const i=document.createElement("div");i.classList.add("see-more-button-container");const a=document.createElement("button");a.classList.add("see-more-button"),a.textContent="See more",a.addEventListener("click",()=>{M(n.list_name)}),i.appendChild(a),s.appendChild(i),e.appendChild(s)})}catch(t){console.error("Error fetching books:",t)}}window.addEventListener("resize",v);async function M(t){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),r=t.split(" "),b=r.pop();s.innerHTML=r.join(" ")+' <span class="books-section-title-accent">'+b+"</span>",s.classList.add("books-section-title"),c.appendChild(s);const l=document.createElement("div");l.classList.add("books-container"),o.map(i=>{const a=document.createElement("div");a.classList.add("book-item");const d=`
        <div class="book-info book-in-category">
          <img src="${i.book_image}" alt="${i.title}" class="book-image">
          <h3 class="book-title">${i.title}</h3>
          <p class="book-author">${i.author}</p>
        </div>
      `;a.innerHTML=d,l.appendChild(a)}),c.appendChild(l)}catch(e){console.error("Error fetching books:",e)}}function y(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}v();const m=document.querySelector(".category-list"),u=document.querySelector(".books-list");async function I(){try{const t=await T();if(t.length===0)throw new Error;const o=t.map(({list_name:c})=>c).sort((c,n)=>c.localeCompare(n)).map(c=>q(c)).join("");m.insertAdjacentHTML("beforeend",o)}catch(t){console.error(t)}}I();function q(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function E(){try{const t=await L();if(t.length===0)throw new Error;const e=H(t,"Best Sellers Books");u.innerHTML=e}catch(t){console.error(t),u.innerHTML="<h2>Try reloading the page...</h2>"}}function H(t,e){return`${C(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:n,list_name:s})=>O(n,s)).join("")}
 </ul>`}async function _(t){try{const e=await S(t);if(e.length===0)throw new Error;const o=j(e,t);u.innerHTML=o}catch(e){console.error(e),u.innerHTML="<h2>Try reloading the page...</h2>"}}E();function j(t,e){return`${C(e)}
        <ul class="books-category">
            ${t.map(n=>w(n)).join("")}
        </ul>`}function O(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(o=>w(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function w(t){const{_id:e,book_image:o,book_image_width:c,book_image_height:n,publisher:s,title:r}=t;return`<li class="books-item" data-id="${e}">
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
        <h4 class="books-title-book">${r}</h4>
        <span class="books-author">${s}</span>
    </li>`}function C(t){const e=t.split(" "),o=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let f="";function $(t){const e=t.target,o=e.dataset.listName;e.tagName!=="BUTTON"||f===o||(o!=="bestsellers"?_(o):E(),f=o,A(o))}function A(t){const o=[...m.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===t),c=m.querySelector(".active");o.classList.add("active"),c.classList.remove("active"),N(o)}function N(t){t.scrollIntoView({behavior:"smooth",block:"center"})}m.addEventListener("click",$);u.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
