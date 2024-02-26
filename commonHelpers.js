import{a as k}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const b=document.getElementById("toggle"),h=localStorage.getItem("theme");h&&(document.documentElement.classList.add(h),h==="dark-mode"&&(b.checked=!0,b.classList.add("dark-mode")));b.addEventListener("change",function(){this.checked?(document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,o=document.getElementById("home-link"),e=document.getElementById("shopping-list-link");t==="/"?(o.classList.add("button"),e.classList.remove("button")):t==="/shopping-list"&&(o.classList.remove("button"),e.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname,o=document.getElementById("backdrop-home-link"),e=document.getElementById("backdrop-shopping-list-link");t==="/"?(o.classList.add("button"),e.classList.remove("button")):t==="/shopping-list"&&(o.classList.remove("button"),e.classList.add("button"))});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),o=document.getElementById("backdrop"),e=document.querySelector(".icon-logo"),i=document.querySelector(".nav-links"),s=document.getElementById("x-close");function n(){t.checked?(t.checked=!1,o.style.display="none",i.style.height="0",s.style.display="none",e.style.display="block"):(t.checked=!0,o.style.display="block",i.style.height="100vh",s.style.display="block",e.style.display="none")}e.addEventListener("click",n),s.addEventListener("click",n)});async function B(){const{data:t}=await k.get("https://books-backend.p.goit.global/books/category-list");return t}async function v(){const{data:t}=await k.get("https://books-backend.p.goit.global/books/top-books");return t}async function I(t){const{data:o}=await k.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return o}async function w(){try{const t=await v(),o=document.querySelector(".books-list");o.innerHTML="";let e=1;window.innerWidth>=768&&window.innerWidth<1440?e=3:window.innerWidth>=1440&&(e=5),y(t,4).map(s=>{const n=document.createElement("li");n.classList.add("category");const r=document.createElement("h2");r.textContent=s.list_name,r.classList.add("category-title"),n.appendChild(r);const p=y(s.books,e),l=document.createElement("ul");l.classList.add("books-container"),p.map(d=>{const g=document.createElement("li");g.classList.add("book-item");const S=`
          <div class="book-info">
            <img src="${d.book_image}" alt="${d.title}" class="book-image">
            <h3 class="book-title">${d.title}</h3>
            <p class="book-author">${d.author}</p>
          </div>
        `;g.innerHTML=S,l.appendChild(g)}),n.appendChild(l);const c=document.createElement("div");c.classList.add("see-more-button-container");const a=document.createElement("button");a.classList.add("see-more-button"),a.textContent="See more",a.addEventListener("click",()=>{M(s.list_name)}),c.appendChild(a),n.appendChild(c),o.appendChild(n)})}catch(t){console.error("Error fetching books:",t)}}window.addEventListener("resize",w);async function M(t){try{const e=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`)).json(),i=document.querySelector(".books-list");i.innerHTML="",document.querySelector(".books-section-title").remove();const n=document.createElement("h1"),r=t.split(" "),p=r.pop();n.innerHTML=r.join(" ")+' <span class="books-section-title-accent">'+p+"</span>",n.classList.add("books-section-title"),i.appendChild(n);const l=document.createElement("div");l.classList.add("books-container"),e.map(c=>{const a=document.createElement("div");a.classList.add("book-item");const d=`
        <div class="book-info book-in-category">
          <img src="${c.book_image}" alt="${c.title}" class="book-image">
          <h3 class="book-title">${c.title}</h3>
          <p class="book-author">${c.author}</p>
        </div>
      `;a.innerHTML=d,l.appendChild(a)}),i.appendChild(l)}catch(o){console.error("Error fetching books:",o)}}function y(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}w();const m=document.querySelector(".category-list"),u=document.querySelector(".books-list");async function T(){try{const t=await B();if(t.length===0)throw new Error;const e=t.map(({list_name:i})=>i).sort((i,s)=>i.localeCompare(s)).map(i=>x(i)).join("");m.insertAdjacentHTML("beforeend",e)}catch(t){console.error(t)}}T();function x(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function L(){try{const t=await v();if(t.length===0)throw new Error;const o=_(t,"Best Sellers Books");u.innerHTML=o}catch(t){console.error(t),u.innerHTML="<h2>Try reloading the page...</h2>"}}function _(t,o){return`${C(o)}
 <ul class="books-bestsellers">
        ${t.map(({books:s,list_name:n})=>j(s,n)).join("")}
 </ul>`}async function O(t){try{const o=await I(t);if(o.length===0)throw new Error;const e=H(o,t);u.innerHTML=e}catch(o){console.error(o),u.innerHTML="<h2>Try reloading the page...</h2>"}}L();function H(t,o){return`${C(o)}
        <ul class="books-category">
            ${t.map(s=>E(s)).join("")}
        </ul>`}function j(t,o){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${o}</p>
            <ul class="books-bestsellers-list">
                ${t.map(e=>E(e)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${o}">
                See more
            </button>
        </li>`}function E(t){const{_id:o,book_image:e,book_image_width:i,book_image_height:s,publisher:n,title:r}=t;return`<li class="books-item" data-id="${o}">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${e}" 
                    width="${i}" 
                    height="${s}"
                    loading="lazy"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${r}</h4>
        <span class="books-author">${n}</span>
    </li>`}function C(t){const o=t.split(" "),e=o.splice(length-1,1).join("");return`<h2 class="books-title">${o.join(" ")}
        <span class="books-title-accent">${e}</span>
    </h2>`}let f="";function $(t){const o=t.target,e=o.dataset.listName;o.tagName!=="BUTTON"||f===e||(e!=="bestsellers"?O(e):L(),f=e,q(e))}function q(t){const e=[...m.querySelectorAll(".category-btn")].find(s=>s.dataset.listName===t),i=m.querySelector(".active");e.classList.add("active"),i.classList.remove("active"),A(e)}function A(t){t.scrollIntoView({behavior:"smooth",block:"center"})}m.addEventListener("click",$);u.addEventListener("click",$);document.addEventListener("DOMContentLoaded",function(){const t=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/save_the_children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/HOPE.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/United_24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/Med.corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/sans_front.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/RAZOM.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/aACTION.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/Vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/SERGIY.png"}];function o(i,s){const n=document.createElement("li");return n.innerHTML=`
        <div style="justify-content: center; align-items: center; gap: 16px; display: inline-flex">
            <div style="color: white; font-size: 14px; font-family: DM Sans; font-weight: 400; line-height: 18px; word-wrap: break-word">${String(s+1).padStart(2,"0")}</div>
            <div style="width: 129px; height: 32px; position: relative">
                <img style="width: 129px; height: 32px; left: 0px; top: 0px; gap: 16px; position: absolute; mix-blend-mode: luminosity" src="${i.img}" />
                <div style="width: 131px; height: 32px; left: -2px; top: 0px; gap: 16px; position: absolute; mix-blend-mode: luminosity;"></div>
            </div>
        </div>
    `,n}const e=document.querySelector(".charity-list");t.forEach((i,s)=>{const n=o(i,s);e.appendChild(n)}),new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0}})});document.addEventListener("DOMContentLoaded",function(){function t(){return document.getElementById("shopping-list-books-container").children.length===0}function o(){const e=document.getElementById("cart-content");t()?e.style.display="block":e.style.display="none"}o()});document.addEventListener("DOMContentLoaded",function(){const t="https://books-backend.p.goit.global/books/top-books",o=document.getElementById("shopping-list-books-container");fetch(t).then(e=>{if(!e.ok)throw new Error(`Помилка отримання даних. Статус код: ${e.status}`);return e.json()}).then(e=>{e.forEach(s=>{s.books.forEach(n=>{const r=document.createElement("div");r.classList.add("book-card"),r.innerHTML=`
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
    
`,o.appendChild(r)})}),document.querySelectorAll(".btn-delete").forEach(s=>{s.addEventListener("click",function(){const n=this.getAttribute("data-book-id");P(n),this.closest(".book-card").remove()})})}).catch(e=>{console.error("Сталася помилка:",e)})});function P(t){console.log("Видалення книги з ID:",t)}
//# sourceMappingURL=commonHelpers.js.map
