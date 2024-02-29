import{a as c}from"./assets/icons-2c6c07bd.js";import"./assets/vendor-3d873957.js";const l="/Book_Shelf/assets/icons-a18bf9e2.svg#icon-ibooks",d="/Book_Shelf/assets/icons-a18bf9e2.svg#icon-trash";function r(){const o="selected-books",e=JSON.parse(localStorage.getItem(o))||[],n=document.getElementById("shopping-list-books-container");n.innerHTML="",e.forEach(t=>{const s=document.createElement("div");s.classList.add("book-card"),s.innerHTML=`
      <div class="cover">
          <img src="${t.book_image}" alt="Book Cover" class="book-cover">
          <div class="about">
              <h2 class="book-title">${t.title}</h2>
              <p class="book-category">${t.list_name}</p>
              <p class="book-description">${t.description}</p>
              <p class="book-author">${t.author}</p>
          </div>
      </div>
      <div class="buy-book">
          <a href="${t.buy_links[0].url}" target="_blank">
              <svg class="amazon" width="16" height="16">
                  <use href="${c}"></use>
              </svg>
          </a>
          <a href="${t.buy_links[1].url}" target="_blank">
              <svg class="ibook" width="16" height="16">
                  <use href="${l}"></use>
              </svg>
          </a>
      </div>
      <button data-book-id="${t._id}" class="btn-delete">
          <div class="icon-trash">
              <svg class="trash" width="16" height="16">
                  <use href="${d}"></use>
              </svg>
          </div>
      </button>`,n.appendChild(s)}),document.querySelectorAll(".btn-delete").forEach(t=>{t.addEventListener("click",function(){const s=this.getAttribute("data-book-id");h(s),this.closest(".book-card").remove(),i()})})}r();function h(o){const e="selected-books",a=(JSON.parse(localStorage.getItem(e))||[]).filter(t=>t._id!==o);localStorage.setItem(e,JSON.stringify(a))}function k(){return document.getElementById("shopping-list-books-container").children.length===0}function i(){const o=document.getElementById("cart-content"),e=document.getElementById("donation-block");k()?(o.style.display="block",e.style.display="none"):(o.style.display="none",e.style.display="block")}i();
//# sourceMappingURL=commonHelpers2.js.map
