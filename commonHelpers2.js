import{a as l}from"./assets/icons-579fda80.js";import"./assets/vendor-3d873957.js";const r="/Book_Shelf/assets/icons-a18bf9e2.svg#icon-ibooks",d="/Book_Shelf/assets/icons-a18bf9e2.svg#icon-trash";function h(){const o="selected-books",e=JSON.parse(localStorage.getItem(o))||[],n=document.getElementById("shopping-list-books-container");n.innerHTML="",e.forEach(t=>{const s=document.createElement("div");s.classList.add("book-card");const a=t.description?t.description:"We are sorry. There is no description for this book";s.innerHTML=`
      <div class="cover">
          <img src="${t.book_image}" alt="Book Cover" class="book-cover">
          <div class="about">
              <h2 class="book-title">${t.title}</h2>
              <p class="book-category">${t.list_name}</p>
              <p class="book-description">${a}</p>
              <p class="book-author">${t.author}</p>
          </div>
      </div>
      <div class="buy-book">
          <a href="${t.buy_links[0].url}" target="_blank">
              <svg class="amazon-link-img" width="16" height="16">
                  <use href="${l}"></use>
              </svg>
          </a>
          <a href="${t.buy_links[1].url}" target="_blank">
              <svg class="apple-link-img" width="16" height="16">
                  <use href="${r}"></use>
              </svg>
          </a>
      </div>
      <button data-book-id="${t._id}" class="btn-delete">
          <div class="icon-trash">
              <svg class="trash" width="16" height="16">
                  <use href="${d}"></use>
              </svg>
          </div>
      </button>`,n.appendChild(s)}),document.querySelectorAll(".btn-delete").forEach(t=>{t.addEventListener("click",function(){const s=this.getAttribute("data-book-id");p(s),this.closest(".book-card").remove(),c()})})}h();function p(o){const e="selected-books",i=(JSON.parse(localStorage.getItem(e))||[]).filter(t=>t._id!==o);localStorage.setItem(e,JSON.stringify(i))}function g(){return document.getElementById("shopping-list-books-container").children.length===0}function c(){const o=document.getElementById("cart-content"),e=document.getElementById("donation-block");g()?(o.style.display="block",e.style.display="none"):(o.style.display="none",e.style.display="block")}c();
//# sourceMappingURL=commonHelpers2.js.map
