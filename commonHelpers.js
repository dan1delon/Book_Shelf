import{a as y}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const k=document.getElementById("toggle"),g=localStorage.getItem("theme");g&&(document.documentElement.classList.add(g),g==="dark-mode"&&(k.checked=!0,k.classList.add("dark-mode")));k.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,o=document.getElementById("home-link"),e=document.getElementById("shopping-list-link");t==="/"?(o.classList.add("button"),e.classList.remove("button")):t==="/partials/shopping-list.html"&&(o.classList.remove("button"),e.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,o=document.getElementById("backdrop-home-link"),e=document.getElementById("backdrop-shopping-list-link");t==="/"?(o.classList.add("button"),e.classList.remove("button")):t==="/partials/shopping-list.html"&&(o.classList.remove("button"),e.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),o=document.getElementById("backdrop"),e=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),n=document.getElementById("x-close");function s(){t.checked?(t.checked=!1,o.style.display="none",c.style.height="0",n.style.display="none",e.style.display="block"):(t.checked=!0,o.style.display="block",c.style.height="100vh",n.style.display="block",e.style.display="none")}e.addEventListener("click",s),n.addEventListener("click",s)});async function M(){const{data:t}=await y.get("https://books-backend.p.goit.global/books/category-list");return t}async function v(){const{data:t}=await y.get("https://books-backend.p.goit.global/books/top-books");return t}async function S(t){const{data:o}=await y.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return o}async function E(){try{const t=await v(),o=document.querySelector(".books-list");o.innerHTML="";let e=1;window.innerWidth>=768&&window.innerWidth<1440?e=3:window.innerWidth>=1440&&(e=5),f(t,4).map(n=>{const s=document.createElement("li");s.classList.add("category");const i=document.createElement("h2");i.textContent=n.list_name,i.classList.add("category-title"),s.appendChild(i);const h=f(n.books,e),l=document.createElement("ul");l.classList.add("books-container"),h.map(d=>{const p=document.createElement("li");p.classList.add("book-item");const I=`
          <div class="book-info">
            <img src="${d.book_image}" alt="${d.title}" class="book-image">
            <h3 class="book-title">${d.title}</h3>
            <p class="book-author">${d.author}</p>
          </div>
        `;p.innerHTML=I,l.appendChild(p)}),s.appendChild(l);const a=document.createElement("div");a.classList.add("see-more-button-container");const r=document.createElement("button");r.classList.add("see-more-button"),r.textContent="See more",r.addEventListener("click",()=>{T(n.list_name)}),a.appendChild(r),s.appendChild(a),o.appendChild(s)})}catch(t){console.error("Error fetching books:",t)}}window.addEventListener("resize",E);async function T(t){try{const e=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const s=document.createElement("h1"),i=t.split(" "),h=i.pop();s.innerHTML=i.join(" ")+' <span class="books-section-title-accent">'+h+"</span>",s.classList.add("books-section-title"),c.appendChild(s);const l=document.createElement("div");l.classList.add("books-container"),e.map(a=>{const r=document.createElement("div");r.classList.add("book-item");const d=`
        <div class="book-info book-in-category">
          <img src="${a.book_image}" alt="${a.title}" class="book-image">
          <h3 class="book-title">${a.title}</h3>
          <p class="book-author">${a.author}</p>
        </div>
      `;r.innerHTML=d,l.appendChild(r)}),c.appendChild(l)}catch(o){console.error("Error fetching books:",o)}}function f(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}E();const m=document.querySelector(".category-list"),u=document.querySelector(".books-list");async function _(){try{const t=await M();if(t.length===0)throw new Error;const e=t.map(({list_name:c})=>c).sort((c,n)=>c.localeCompare(n)).map(c=>q(c)).join("");m.insertAdjacentHTML("beforeend",e)}catch(t){console.error(t)}}_();function q(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function w(){try{const t=await v();if(t.length===0)throw new Error;const o=O(t,"Best Sellers Books");u.innerHTML=o}catch(t){console.error(t),u.innerHTML="<h2>Try reloading the page...</h2>"}}function O(t,o){return`${$(o)}
 <ul class="books-bestsellers">
        ${t.map(({books:n,list_name:s})=>A(n,s)).join("")}
 </ul>`}async function H(t){try{const o=await S(t);if(o.length===0)throw new Error;const e=j(o,t);u.innerHTML=e}catch(o){console.error(o),u.innerHTML="<h2>Try reloading the page...</h2>"}}w();function j(t,o){return`${$(o)}
        <ul class="books-category">
            ${t.map(n=>C(n)).join("")}
        </ul>`}function A(t,o){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${o}</p>
            <ul class="books-bestsellers-list">
                ${t.map(e=>C(e)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${o}">
                See more
            </button>
        </li>`}function C(t){const{_id:o,book_image:e,book_image_width:c,book_image_height:n,publisher:s,title:i}=t;return`<li class="books-item" data-id="${o}">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${e}" 
                    width="${c}" 
                    height="${n}"
                    loading="lazy"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${i}</h4>
        <span class="books-author">${s}</span>
    </li>`}function $(t){const o=t.split(" "),e=o.splice(length-1,1).join("");return`<h2 class="books-title">${o.join(" ")}
        <span class="books-title-accent">${e}</span>
    </h2>`}let L="";function B(t){const o=t.target,e=o.dataset.listName;o.tagName!=="BUTTON"||L===e||(e!=="bestsellers"?H(e):w(),L=e,x(e))}function x(t){const e=[...m.querySelectorAll(".category-btn")].find(n=>n.dataset.listName===t),c=m.querySelector(".active");e.classList.add("active"),c.classList.remove("active"),N(e)}function N(t){t.scrollIntoView({behavior:"smooth",block:"center"})}m.addEventListener("click",B);u.addEventListener("click",B);const b={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn")};b.books.addEventListener("click",D);b.xBtn.addEventListener("click",P);async function D(t){t.target.nodeName==="IMG"&&b.modal.classList.add("is-open")}function P(){b.modal.classList.remove("is-open")}document.addEventListener("DOMContentLoaded",function(){function t(){return document.getElementById("shopping-list-books-container").children.length===0}function o(){const e=document.getElementById("cart-content");t()?e.style.display="block":e.style.display="none"}o()});document.addEventListener("DOMContentLoaded",function(){const t="https://books-backend.p.goit.global/books/top-books",o=document.getElementById("shopping-list-books-container");fetch(t).then(e=>{if(!e.ok)throw new Error(`Помилка отримання даних. Статус код: ${e.status}`);return e.json()}).then(e=>{e.forEach(n=>{n.books.forEach(s=>{const i=document.createElement("div");i.classList.add("book-card"),i.innerHTML=`
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
    
`,o.appendChild(i)})}),document.querySelectorAll(".btn-delete").forEach(n=>{n.addEventListener("click",function(){const s=this.getAttribute("data-book-id");W(s),this.closest(".book-card").remove()})})}).catch(e=>{console.error("Сталася помилка:",e)})});function W(t){console.log("Видалення книги з ID:",t)}
//# sourceMappingURL=commonHelpers.js.map
