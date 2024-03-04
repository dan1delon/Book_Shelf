import amazon from "../img/icons.svg#icon-amazon";
import appleBook from "../img/icons.svg#icon-ibooks";
import trash from "../img/icons.svg#icon-trash";

function renderBooksFromLocalStorage() {
  const key = 'selected-books';
  const savedBooks = JSON.parse(localStorage.getItem(key)) || [];


  const booksList = document.getElementById("shopping-list-books-container");
  booksList.innerHTML = ''; 


  savedBooks.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const descriptionText = book.description ? book.description : 'We are sorry. There is no description for this book';

    bookCard.innerHTML = `
      <div class="cover">
          <img src="${book.book_image}" alt="Book Cover" class="book-cover">
          <div class="about">
              <h2 class="book-title">${book.title}</h2>
              <p class="book-category">${book.list_name}</p>
              <p class="book-description">${descriptionText}</p>
              <p class="book-author">${book.author}</p>
          </div>
      </div>
      <div class="buy-book">
          <a href="${book.buy_links[0].url}" target="_blank">
              <svg class="amazon-link-img" width="16" height="16">
                  <use href="${amazon}"></use>
              </svg>
          </a>
          <a href="${book.buy_links[1].url}" target="_blank">
              <svg class="apple-link-img" width="16" height="16">
                  <use href="${appleBook}"></use>
              </svg>
          </a>
      </div>
      <button data-book-id="${book._id}" class="btn-delete">
          <div class="icon-trash">
              <svg class="trash" width="16" height="16">
                  <use href="${trash}"></use>
              </svg>
          </div>
      </button>`;
    booksList.appendChild(bookCard);
  });



  const deleteButtons = document.querySelectorAll('.btn-delete');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const bookId = this.getAttribute('data-book-id');
      removeFromShoppingList(bookId);
      
      const bookCard = this.closest('.book-card');
      bookCard.remove();
     
      updateCartView();
    });
  });
}



renderBooksFromLocalStorage();


function removeFromShoppingList(bookId) {
  const key = 'selected-books';
  const savedBooks = JSON.parse(localStorage.getItem(key)) || [];
  
  const updatedBooks = savedBooks.filter(book => book._id !== bookId);
 
  localStorage.setItem(key, JSON.stringify(updatedBooks));
}


function isCartEmpty() {
  const shoppingList = document.getElementById("shopping-list-books-container");
  return shoppingList.children.length === 0;
}


function updateCartView() {
  const cartContent = document.getElementById("cart-content");
  const donationBlock = document.getElementById("donation-block");
  
  if (isCartEmpty()) {
    cartContent.style.display = "block";
    donationBlock.style.display = "none"; // Скрыть блок пожертвований
  } else {
    cartContent.style.display = "none";
    donationBlock.style.display = "block"; // Показать блок пожертвований
  }
}


updateCartView();




