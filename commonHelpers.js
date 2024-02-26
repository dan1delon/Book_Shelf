import{a as y}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const h=document.getElementById("toggle"),g=localStorage.getItem("theme");g&&(document.documentElement.classList.add(g),g==="dark-mode"&&(h.checked=!0,h.classList.add("dark-mode")));h.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/shopping-list"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),n=document.querySelector(".nav-links"),s=document.getElementById("x-close");function c(){t.checked?(t.checked=!1,e.style.display="none",n.style.height="0",s.style.opacity="0"):(t.checked=!0,e.style.display="block",n.style.height="100vh",s.style.opacity="1")}o.addEventListener("click",c),e.addEventListener("click",c)});async function v(){try{const e=await(await fetch("https://books-backend.p.goit.global/books/top-books")).json(),o=document.querySelector(".books-list");o.innerHTML="";let n=1;window.innerWidth>=768&&window.innerWidth<1440?n=3:window.innerWidth>=1440&&(n=5),f(e,4).map(c=>{const r=document.createElement("li");r.classList.add("category");const d=document.createElement("h2");d.textContent=c.list_name,d.classList.add("category-title"),r.appendChild(d);const u=f(c.books,n),i=document.createElement("ul");i.classList.add("books-container"),u.map(b=>{const k=document.createElement("li");k.classList.add("book-item");const B=`
          <div class="book-info">
            <img src="${b.book_image}" alt="${b.title}" class="book-image">
            <h3 class="book-title">${b.title}</h3>
            <p class="book-author">${b.author}</p>
          </div>
        `;k.innerHTML=B,i.appendChild(k)}),r.appendChild(i);const a=document.createElement("div");a.classList.add("see-more-button-container");const l=document.createElement("button");l.classList.add("see-more-button"),l.textContent="See more",l.addEventListener("click",()=>{T(c.list_name)}),a.appendChild(l),r.appendChild(a),o.appendChild(r)})}catch(t){console.error("Error fetching books:",t)}}window.addEventListener("resize",v);async function T(t){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),n=document.querySelector(".books-list");n.innerHTML="",document.querySelector(".books-section-title").remove();const c=document.createElement("h1"),r=t.split(" "),d=r.pop();c.innerHTML=r.join(" ")+' <span class="books-section-title-accent">'+d+"</span>",c.classList.add("books-section-title"),n.appendChild(c);const u=document.createElement("div");u.classList.add("books-container"),o.map(i=>{const a=document.createElement("div");a.classList.add("book-item");const l=`
        <div class="book-info book-in-category">
          <img src="${i.book_image}" alt="${i.title}" class="book-image">
          <h3 class="book-title">${i.title}</h3>
          <p class="book-author">${i.author}</p>
        </div>
      `;a.innerHTML=l,u.appendChild(a)}),n.appendChild(u)}catch(e){console.error("Error fetching books:",e)}}function f(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}v();async function S(){const{data:t}=await y.get("https://books-backend.p.goit.global/books/category-list");return t}async function M(){const{data:t}=await y.get("https://books-backend.p.goit.global/books/top-books");return t}async function I(t){const{data:e}=await y.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}const p=document.querySelector(".category-list"),m=document.querySelector(".books-list");async function q(){try{const t=await S();if(t.length===0)throw new Error;const o=t.map(({list_name:n})=>n).sort((n,s)=>n.localeCompare(s)).map(n=>j(n)).join("");p.insertAdjacentHTML("beforeend",o)}catch(t){console.error(t)}}q();function j(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function w(){try{const t=await M();if(t.length===0)throw new Error;const e=H(t,"Best Sellers Books");m.innerHTML=e}catch(t){console.error(t),m.innerHTML="<h2>Try reloading the page...</h2>"}}function H(t,e){return`${C(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:s,list_name:c})=>A(s,c)).join("")}
 </ul>`}async function _(t){try{const e=await I(t);if(e.length===0)throw new Error;const o=O(e,t);m.innerHTML=o}catch(e){console.error(e),m.innerHTML="<h2>Try reloading the page...</h2>"}}w();function O(t,e){return`${C(e)}
        <ul class="books-category">
            ${t.map(s=>E(s)).join("")}
        </ul>`}function A(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(o=>E(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function E(t){const{_id:e,book_image:o,book_image_width:n,book_image_height:s,publisher:c,title:r}=t;return`<li class="books-item" data-id="${e}">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${o}" 
                    width="${n}" 
                    height="${s}"
                    loading="lazy"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${r}</h4>
        <span class="books-author">${c}</span>
    </li>`}function C(t){const e=t.split(" "),o=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let L="";function $(t){const e=t.target,o=e.dataset.listName;e.tagName!=="BUTTON"||L===o||(o!=="bestsellers"?_(o):w(),L=o,N(o))}function N(t){const o=[...p.querySelectorAll(".category-btn")].find(s=>s.dataset.listName===t),n=p.querySelector(".active");o.classList.add("active"),n.classList.remove("active"),x(o)}function x(t){t.scrollIntoView({behavior:"smooth",block:"center"})}p.addEventListener("click",$);m.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
