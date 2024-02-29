import{a as D}from"./assets/icons-231ee21f.js";import{a as p}from"./assets/vendor-3d873957.js";async function U(){const{data:t}=await p.get("https://books-backend.p.goit.global/books/category-list");return t}async function w(){const{data:t}=await p.get("https://books-backend.p.goit.global/books/top-books");return t}async function S(t){const{data:o}=await p.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return o}async function F(t){const{data:o}=await p.get(`https://books-backend.p.goit.global/books/${t}`);return o}const L=document.querySelector(".category-list"),k=document.querySelector(".books-list"),C=document.querySelector(".books-section-title");async function j(){try{const t=await U();if(t.length===0)throw new Error;const e=t.map(({list_name:n})=>n).sort((n,s)=>n.localeCompare(s)).map(n=>J(n)).join("");L.insertAdjacentHTML("beforeend",e)}catch(t){console.error(t)}}j();function J(t){return`<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${t}">${t}</button>
  </li>`}async function O(){try{C.style.display="none";const t=await w();if(t.length===0)throw new Error;const o=z(t,"Best Sellers Books");k.innerHTML=o}catch(t){console.error(t),k.innerHTML="<h2>Try reloading the page...</h2>"}}function z(t,o){return`${q(o)}
 <ul class="books-bestsellers">
        ${t.map(({books:s,list_name:a})=>W(s,a)).join("")}
 </ul>`}async function K(t){try{C.style.display="none";const o=await S(t);if(o.length===0)return;const e=E(o,t);k.innerHTML=e}catch(o){console.error(o),k.innerHTML="<h2>Try reloading the page...</h2>"}}M();function E(t,o){return`${q(o)}
        <ul class="books-category">
            ${t.map(s=>$(s)).join("")}
        </ul>`}function W(t,o){return`<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${o}</p>
            <ul class="books-bestsellers-list">
                ${t.map(e=>$(e)).join("")}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${o}">
                See more
            </button>
        </li>`}function $(t){const{_id:o,book_image:e,book_image_width:n,book_image_height:s,publisher:a,title:r}=t;return`<li class="books-item">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${e}"
                    width="${n}"
                    height="${s}"
                    loading="lazy"
                    data-id="${o}"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${r}</h4>
        <span class="books-author">${a}</span>
    </li>`}function q(t){const o=t.split(" "),e=o.splice(length-1,1).join("");return`<h2 class="books-title">${o.join(" ")}
        <span class="books-title-accent">${e}</span>
    </h2>`}let B="";function T(t){const o=t.target,e=o.dataset.listName;o.tagName!=="BUTTON"||B===e||(e!=="bestsellers"?K(e):O(),B=e)}L.addEventListener("click",T);k.addEventListener("click",T);document.querySelector(".books-section-title");async function M(){try{const t=await w(),o=document.querySelector(".books-list");o.innerHTML="";let e=1;window.innerWidth>=768&&window.innerWidth<1440?e=3:window.innerWidth>=1440&&(e=5),A(t,4).map(s=>{const a=document.createElement("li");a.classList.add("category");const r=document.createElement("h2");r.textContent=s.list_name,r.classList.add("category-title"),a.appendChild(r);const i=A(s.books,e),d=document.createElement("ul");d.classList.add("books-container"),i.map(m=>{const g=document.createElement("li");g.classList.add("book-item");const N=`
            <div class = "book-overley-box"><img src="${m.book_image}" alt="${m.title}" class="book-image" data-id="${m._id}"><div class = "book-overley">quick view</div></div>
            <h4 class="book-title">${m.title}</h4>
            <span class="book-author">${m.author}</span>
        `;g.innerHTML=N,d.appendChild(g)}),a.appendChild(d);const u=document.createElement("div");u.classList.add("see-more-button-container");const l=document.createElement("button");l.classList.add("see-more-button"),l.textContent="See more",l.addEventListener("click",()=>{Y(s.list_name)}),u.appendChild(l),a.appendChild(u),o.appendChild(a)})}catch(t){console.error("Error fetching books:",t)}}async function Y(t){try{const o=await S(t),e=document.querySelector(".books-list"),n=E(o,t);e.innerHTML=n}catch(o){console.error("Error fetching books:",o)}}function A(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}M();const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTPp0F/yBEv6aBvuDD/qJDvuHD/yHDvpvGPydA/+eBfyID/t3Fv6bCP////pyGPt9FP2UCPyFD/7Ik/2XB/2NDP/p0/yGJv2wSP7RqPyZSf/+/P7AdP/jxP7ZtHeB0SoAAAAMdFJOUwDove8iMEw9XV3NotV0Y/UAAACySURBVCjPtZLLDoMgEEV9oLbKgIiKWPX/P1PQEVG6aZueQC7M2ZBwo+hHsvzpkWeeIiXcKIlzKQSkh60A2m25bUhQttCGpPgYYYFhAD/F/qjCjpYXY0wKIW1qqwsnJduYpj3lKbuuQznPKM0okH3/mWya5i7N6L+yruu7NCNPLqNSY2+wqa8S0XpP5SShDqXOM7Yhpu/A/0wotzdOXZpdHTWJeUB8liiwCblU8+FxqeZXrJ6sHtCzJFDxAAAAAElFTkSuQmCC",c={books:document.querySelector(".books-section"),modal:document.querySelector(".modal-backdrop"),xBtn:document.querySelector(".x-btn"),backdrop:document.querySelector(".modal-backdrop"),oneBook:document.querySelectorAll(".books-item"),modalContent:document.querySelector(".modal-content-wrapper"),descriptionBookEl:document.querySelector(".descr-of-book")};c.books.addEventListener("click",X);let y=null,h=null;async function X(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const o=t.target.dataset.id;c.modal.classList.add("is-open"),document.body.classList.add("no-scroll"),c.backdrop.addEventListener("click",I),c.xBtn.addEventListener("click",b),window.addEventListener("keydown",P),await R(o),h=document.querySelector(".add-to-localSt"),h.addEventListener("click",x)}function b(t){c.backdrop.removeEventListener("click",I),c.xBtn.removeEventListener("click",b),window.removeEventListener("keydown",P),h.removeEventListener("click",x),document.body.classList.remove("no-scroll"),c.modal.classList.remove("is-open")}function P(t){t.key==="Escape"&&b()}function I(t){t.target===t.currentTarget&&b()}function x(){const t="selected-books",o=JSON.parse(localStorage.getItem(t))||[],e=y._id,n=o.some(r=>r._id===e);if(n){const r=o.filter(i=>i._id!==e);localStorage.setItem(t,JSON.stringify(r))}else o.push(y),localStorage.setItem(t,JSON.stringify(o));const s=document.querySelector(".add-to-localSt"),a=n?"Add to Shopping List":"Remove from Shopping List";s.textContent=a,Q(!n)}function Q(t){const o=document.querySelector(".add-to-localSt"),e=t?"Remove from Shopping List":"Add to Shopping List";o.textContent=e}async function R(t){var o;c.modalContent.innerHTML="";try{const e=await F(t),{book_image:n,title:s,author:a,description:r,buy_links:i}=e;y=e;const d=!!((o=JSON.parse(localStorage.getItem("selected-books")))!=null&&o.find(l=>l._id===e._id)),u=`<div class="modal-content">
        <img class="book-img-modal" src="${n}" alt="book-image">
        <div class="modal-text-wrap">
            <div class="name-of-book">
                <h3 class="title-of-book">${s}</h3>
                <p class="author-of-book">${a}</p>
            </div>
            <p class="descr-of-book">${r}</p>
            <div class="buy-links">
                <a href="${i[0].url}" target="_blank" class="amazon-link"> <svg class="amazon" width="16" height="16">
                  <use href="${D}"></use>
              </svg></a>

                        
             
          </a>
                <a href="${i[1].url}" target="_blank" class="apple-link"><img class="apple-link-img" src="${G}"
                        alt="link"></a>
            </div>
           </div>
        </div>
        <button class="add-to-localSt" type="button">${d?"remove from the shopping list":"add to shopping list"}</button>`;c.modalContent.innerHTML=u}catch(e){alert(`Something went wrong. You caught the following error: ${e.message}.`)}}const _=document.getElementById("loading-bar"),Z=document.querySelector(".progress-bar");function f(){_.style.opacity=1}function v(){_.style.opacity=0}function H(t){Z.style.width=`${t}%`}window.addEventListener("load",()=>{f(),H(100),setTimeout(v,500)});const V=document.querySelectorAll("button");V.forEach(t=>{t.addEventListener("click",()=>{f();let o=0;const e=setInterval(()=>{o+=10,H(o),o===100&&(clearInterval(e),v())},100)})});document.body.addEventListener("click",t=>{const o=t.target;o.tagName==="A"&&o.href.startsWith("/")&&f()});document.addEventListener("pagehide",v);
//# sourceMappingURL=commonHelpers.js.map
