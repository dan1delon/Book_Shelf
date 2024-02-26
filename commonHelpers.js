import{a as p}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const k=document.getElementById("toggle"),g=localStorage.getItem("theme");g&&(document.documentElement.classList.add(g),g==="dark-mode"&&(k.checked=!0,k.classList.add("dark-mode")));k.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,e=document.getElementById("home-link"),o=document.getElementById("shopping-list-link");t==="/"?(e.classList.add("button"),o.classList.remove("button")):t==="/shopping-list"&&(e.classList.remove("button"),o.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),e=document.getElementById("backdrop"),o=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){t.checked?(t.checked=!1,e.style.display="none",c.style.height="0",n.style.opacity="0"):(t.checked=!0,e.style.display="block",c.style.height="100vh",n.style.opacity="1")}o.addEventListener("click",s),e.addEventListener("click",s)});async function I(){const{data:t}=await p.get("https://books-backend.p.goit.global/books/category-list");return t}async function v(){const{data:t}=await p.get("https://books-backend.p.goit.global/books/top-books");return t}async function S(t){const{data:e}=await p.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e}async function L(){try{const t=await v(),e=document.querySelector(".books-list");e.innerHTML="";let o=1;window.innerWidth>=768&&window.innerWidth<1440?o=3:window.innerWidth>=1440&&(o=5),y(t,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const i=document.createElement("h2");i.textContent=n.list_name,i.classList.add("category-title"),s.appendChild(i);const h=y(n.books,o),l=document.createElement("ul");l.classList.add("books-container"),h.map(d=>{const b=document.createElement("li");b.classList.add("book-item");const B=`
          <div class="book-info">
            <img src="${d.book_image}" alt="${d.title}" class="book-image">
            <h3 class="book-title">${d.title}</h3>
            <p class="book-author">${d.author}</p>
          </div>
        `;b.innerHTML=B,l.appendChild(b)}),s.appendChild(l);const a=document.createElement("div");a.classList.add("see-more-button-container");const r=document.createElement("button");r.classList.add("see-more-button"),r.textContent="See more",r.addEventListener("click",()=>{T(n.list_name)}),a.appendChild(r),s.appendChild(a),e.appendChild(s)})}catch(t){console.error("Error fetching books:",t)}}window.addEventListener("resize",L);async function T(t){try{const o=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),i=t.split(" "),h=i.pop();s.innerHTML=i.join(" ")+' <span class="books-section-title-accent">'+h+"</span>",s.classList.add("books-section-title"),c.appendChild(s);const l=document.createElement("div");l.classList.add("books-container"),o.map(a=>{const r=document.createElement("div");r.classList.add("book-item");const d=`
        <div class="book-info book-in-category">
          <img src="${a.book_image}" alt="${a.title}" class="book-image">
          <h3 class="book-title">${a.title}</h3>
          <p class="book-author">${a.author}</p>
        </div>
      `;r.innerHTML=d,l.appendChild(r)}),c.appendChild(l)}catch(e){console.error("Error fetching books:",e)}}function y(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}L();const m=document.querySelector(".category-list"),u=document.querySelector(".books-list");async function M(){try{const t=await I();if(t.length===0)throw new Error;const o=t.map(({list_name:c})=>c).sort((c,n)=>c.localeCompare(n)).map(c=>_(c)).join("");m.insertAdjacentHTML("beforeend",o)}catch(t){console.error(t)}}M();function _(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function E(){try{const t=await v();if(t.length===0)throw new Error;const e=q(t,"Best Sellers Books");u.innerHTML=e}catch(t){console.error(t),u.innerHTML="<h2>Try reloading the page...</h2>"}}function q(t,e){return`${w(e)}
 <ul class="books-bestsellers">
        ${t.map(({books:n,list_name:s})=>j(n,s)).join("")}
 </ul>`}async function H(t){try{const e=await S(t);if(e.length===0)throw new Error;const o=O(e,t);u.innerHTML=o}catch(e){console.error(e),u.innerHTML="<h2>Try reloading the page...</h2>"}}E();function O(t,e){return`${w(e)}
        <ul class="books-category">
            ${t.map(n=>C(n)).join("")}
        </ul>`}function j(t,e){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${e}</p>
            <ul class="books-bestsellers-list">
                ${t.map(o=>C(o)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${e}">
                See more
            </button>
        </li>`}function C(t){const{_id:e,book_image:o,book_image_width:c,book_image_height:n,publisher:s,title:i}=t;return`<li class="books-item" data-id="${e}">
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
    </li>`}function w(t){const e=t.split(" "),o=e.splice(length-1,1).join("");return`<h2 class="books-title">${e.join(" ")}
        <span class="books-title-accent">${o}</span>
    </h2>`}let f="";function $(t){const e=t.target,o=e.dataset.listName;e.tagName!=="BUTTON"||f===o||(o!=="bestsellers"?H(o):E(),f=o,A(o))}function A(t){const o=[...m.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===t),c=m.querySelector(".active");o.classList.add("active"),c.classList.remove("active"),N(o)}function N(t){t.scrollIntoView({behavior:"smooth",block:"center"})}m.addEventListener("click",$);u.addEventListener("click",$);document.addEventListener("DOMContentLoaded",function(){function t(){return document.getElementById("shopping-list-books-container").children.length===0}function e(){const o=document.getElementById("cart-content");t()?o.style.display="block":o.style.display="none"}e()});document.addEventListener("DOMContentLoaded",function(){const t="https://books-backend.p.goit.global/books/top-books",e=document.getElementById("shopping-list-books-container");fetch(t).then(o=>{if(!o.ok)throw new Error(`Помилка отримання даних. Статус код: ${o.status}`);return o.json()}).then(o=>{o.forEach(n=>{n.books.forEach(s=>{const i=document.createElement("div");i.classList.add("book-card"),i.innerHTML=`
    <div class="cover">
        <img src="${s.book_image}" alt="Book Cover" class="book-cover">
        <div class="about">
            <h2 class="book-title">${s.title}</h2>
            <p class="book-category">${s.list_name}</p>
            <p class="book-description">${s.description}</p>
            <p class="book-author">${s.author}</p>
        </div>
    </div>
    <div class="buy-book">
        <a href="${s.buy_links[0].url}" target="_blank">
            <svg class="amazon" width="16" height="16">
                <use href="../img/icons.svg#icon-amazon"></use>
            </svg>
        </a>
        <a href="${s.buy_links[1].url}" target="_blank">
            <svg class="ibook" width="16" height="16">
                <use href="../img/icons.svg#icon-ibooks"></use>
            </svg>
        </a>
        </div>
        <button data-book-id="${s._id}" class="btn-delete">
            <div class="icon-trash">
                <svg class="trash" width="16" height="16">
                    <use href="../img/icons.svg#icon-trash"></use>
                </svg>
            </div>
        </button>
    
`,e.appendChild(i)})}),document.querySelectorAll(".btn-delete").forEach(n=>{n.addEventListener("click",function(){const s=this.getAttribute("data-book-id");D(s),this.closest(".book-card").remove()})})}).catch(o=>{console.error("Сталася помилка:",o)})});function D(t){console.log("Видалення книги з ID:",t)}
//# sourceMappingURL=commonHelpers.js.map
