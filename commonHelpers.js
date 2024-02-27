import{a as f}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const y=document.getElementById("toggle"),g=localStorage.getItem("theme");g&&(document.documentElement.classList.add(g),g==="dark-mode"&&(y.checked=!0,y.classList.add("dark-mode")));y.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,o=document.getElementById("home-link"),e=document.getElementById("shopping-list-link");t==="/"?(o.classList.add("button"),e.classList.remove("button")):t==="/partials/shopping-list.html"&&(o.classList.remove("button"),e.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,o=document.getElementById("backdrop-home-link"),e=document.getElementById("backdrop-shopping-list-link");t==="/"?(o.classList.add("button"),e.classList.remove("button")):t==="/partials/shopping-list.html"&&(o.classList.remove("button"),e.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),o=document.getElementById("backdrop"),e=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),s=document.getElementById("x-close");function n(){t.checked?(t.checked=!1,o.style.display="none",c.style.height="0",s.style.display="none",e.style.display="block"):(t.checked=!0,o.style.display="block",c.style.height="100vh",s.style.display="block",e.style.display="none")}e.addEventListener("click",n),s.addEventListener("click",n)});async function q(){const{data:t}=await f.get("https://books-backend.p.goit.global/books/category-list");return t}async function E(){const{data:t}=await f.get("https://books-backend.p.goit.global/books/top-books");return t}async function _(t){const{data:o}=await f.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return o}async function w(){try{const t=await E(),o=document.querySelector(".books-list");o.innerHTML="";let e=1;window.innerWidth>=768&&window.innerWidth<1440?e=3:window.innerWidth>=1440&&(e=5),v(t,4).map(s=>{const n=document.createElement("li");n.classList.add("category");const i=document.createElement("h2");i.textContent=s.list_name,i.classList.add("category-title"),n.appendChild(i);const p=v(s.books,e),d=document.createElement("ul");d.classList.add("books-container"),p.map(u=>{const h=document.createElement("li");h.classList.add("book-item");const T=`
          <div class="book-info">
            <img src="${u.book_image}" alt="${u.title}" class="book-image">
            <h3 class="book-title">${u.title}</h3>
            <p class="book-author">${u.author}</p>
          </div>
        `;h.innerHTML=T,d.appendChild(h)}),n.appendChild(d);const a=document.createElement("div");a.classList.add("see-more-button-container");const r=document.createElement("button");r.classList.add("see-more-button"),r.textContent="See more",r.addEventListener("click",()=>{O(s.list_name)}),a.appendChild(r),n.appendChild(a),o.appendChild(n)})}catch(t){console.error("Error fetching books:",t)}}window.addEventListener("resize",w);async function O(t){try{const e=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),c=document.querySelector(".books-list");c.innerHTML="",document.querySelector(".books-section-title").remove();const n=document.createElement("h1"),i=t.split(" "),p=i.pop();n.innerHTML=i.join(" ")+' <span class="books-section-title-accent">'+p+"</span>",n.classList.add("books-section-title"),c.appendChild(n);const d=document.createElement("div");d.classList.add("books-container"),e.map(a=>{const r=document.createElement("div");r.classList.add("book-item");const u=`
        <div class="book-info book-in-category">
          <img src="${a.book_image}" alt="${a.title}" class="book-image">
          <h3 class="book-title">${a.title}</h3>
          <p class="book-author">${a.author}</p>
        </div>
      `;r.innerHTML=u,d.appendChild(r)}),c.appendChild(d)}catch(o){console.error("Error fetching books:",o)}}function v(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}w();const b=document.querySelector(".category-list"),m=document.querySelector(".books-list");async function H(){try{const t=await q();if(t.length===0)throw new Error;const e=t.map(({list_name:c})=>c).sort((c,s)=>c.localeCompare(s)).map(c=>j(c)).join("");b.insertAdjacentHTML("beforeend",e)}catch(t){console.error(t)}}H();function j(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function C(){try{const t=await E();if(t.length===0)throw new Error;const o=x(t,"Best Sellers Books");m.innerHTML=o}catch(t){console.error(t),m.innerHTML="<h2>Try reloading the page...</h2>"}}function x(t,o){return`${$(o)}
 <ul class="books-bestsellers">
        ${t.map(({books:s,list_name:n})=>N(s,n)).join("")}
 </ul>`}async function A(t){try{const o=await _(t);if(o.length===0)throw new Error;const e=D(o,t);m.innerHTML=e}catch(o){console.error(o),m.innerHTML="<h2>Try reloading the page...</h2>"}}C();function D(t,o){return`${$(o)}
        <ul class="books-category">
            ${t.map(s=>B(s)).join("")}
        </ul>`}function N(t,o){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${o}</p>
            <ul class="books-bestsellers-list">
                ${t.map(e=>B(e)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${o}">
                See more
            </button>
        </li>`}function B(t){const{_id:o,book_image:e,book_image_width:c,book_image_height:s,publisher:n,title:i}=t;return`<li class="books-item" data-id="${o}">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${e}" 
                    width="${c}" 
                    height="${s}"
                    loading="lazy"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${i}</h4>
        <span class="books-author">${n}</span>
    </li>`}function $(t){const o=t.split(" "),e=o.splice(length-1,1).join("");return`<h2 class="books-title">${o.join(" ")}
        <span class="books-title-accent">${e}</span>
    </h2>`}let L="";function S(t){const o=t.target,e=o.dataset.listName;o.tagName!=="BUTTON"||L===e||(e!=="bestsellers"?A(e):C(),L=e,P(e))}function P(t){const e=[...b.querySelectorAll(".category-btn")].find(s=>s.dataset.listName===t),c=b.querySelector(".active");e.classList.add("active"),c.classList.remove("active"),W(e)}function W(t){t.scrollIntoView({behavior:"smooth",block:"center"})}b.addEventListener("click",S);m.addEventListener("click",S);const l={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn"),modalBtn:document.querySelector(".add-to-localSt"),backdrop:document.querySelector(".modal-backdrop")};l.books.addEventListener("click",z);l.modalBtn.addEventListener("click",F);async function z(t){t.preventDefault(),t.target.nodeName==="IMG"&&(l.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),l.backdrop.addEventListener("click",M),l.xBtn.addEventListener("click",k),window.addEventListener("keydown",I))}function k(t){l.backdrop.removeEventListener("click",M),l.xBtn.removeEventListener("click",k),window.removeEventListener("keydown",I),document.body.classList.remove("no-scroll"),l.modal.classList.remove("is-open")}function I(t){t.key==="Escape"&&k()}function M(t){t.target===t.currentTarget&&k()}function F(){}document.addEventListener("DOMContentLoaded",function(){function t(){return document.getElementById("shopping-list-books-container").children.length===0}function o(){const e=document.getElementById("cart-content");t()?e.style.display="block":e.style.display="none"}o()});document.addEventListener("DOMContentLoaded",function(){const t="https://books-backend.p.goit.global/books/top-books",o=document.getElementById("shopping-list-books-container");fetch(t).then(e=>{if(!e.ok)throw new Error(`Помилка отримання даних. Статус код: ${e.status}`);return e.json()}).then(e=>{e.forEach(s=>{s.books.forEach(n=>{const i=document.createElement("div");i.classList.add("book-card"),i.innerHTML=`
    <div class="cover">
        <img src="${n.book_image}" alt="Book Cover" class="book-cover">
        <div class="about">
            <h2 class="book-title">${n.title}</h2>
            <p class="book-category">${n.list_name}</p>
            <p class="book-description">${n.description}</p>
            <p class="book-author">${n.author}</p>
        </div>
    </div>
    <div class="buy-book">
        <a href="${n.buy_links[0].url}" target="_blank">
            <svg class="amazon" width="16" height="16">
                <use href="../img/icons.svg#icon-amazon"></use>
            </svg>
        </a>
        <a href="${n.buy_links[1].url}" target="_blank">
            <svg class="ibook" width="16" height="16">
                <use href="../img/icons.svg#icon-ibooks"></use>
            </svg>
        </a>
        </div>
        <button data-book-id="${n._id}" class="btn-delete">
            <div class="icon-trash">
                <svg class="trash" width="16" height="16">
                    <use href="../img/icons.svg#icon-trash"></use>
                </svg>
            </div>
        </button>
    
`,o.appendChild(i)})}),document.querySelectorAll(".btn-delete").forEach(s=>{s.addEventListener("click",function(){const n=this.getAttribute("data-book-id");K(n),this.closest(".book-card").remove()})})}).catch(e=>{console.error("Сталася помилка:",e)})});function K(t){console.log("Видалення книги з ID:",t)}
//# sourceMappingURL=commonHelpers.js.map
