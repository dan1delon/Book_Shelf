function isCartEmpty() {
        const shoppingList = document.getElementById("shopping-list-books-container");
        return shoppingList.children.length === 0; 
    }

    function updateCartView() {
    const cartContent = document.getElementById("cart-content");
    if (isCartEmpty()) {
        cartContent.style.display = "block"; 
    } else {
        cartContent.style.display = "none"; 
    }
}
    updateCartView(); 

  const url = "https://books-backend.p.goit.global/books/top-books";
  const booksList = document.getElementById("shopping-list-books-container");


  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Помилка отримання даних. Статус код: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(list => {
        list.books.forEach(book => {
          const bookCard = document.createElement('div');
          bookCard.classList.add('book-card'); 
          bookCard.innerHTML = `
    <div class="cover">
        <img src="${book.book_image}" alt="Book Cover" class="book-cover">
        <div class="about">
            <h2 class="book-title">${book.title}</h2>
            <p class="book-category">${book.list_name}</p>
            <p class="book-description">${book.description}</p>
            <p class="book-author">${book.author}</p>
        </div>
    </div>
    <div class="buy-book">
        <a href="${book.buy_links[0].url}" target="_blank">
            <svg class="amazon" width="16" height="16">
                <use href="../img/icons.svg#icon-amazon"></use>
            </svg>
        </a>
        <a href="${book.buy_links[1].url}" target="_blank">
            <svg class="ibook" width="16" height="16">
                <use href="../img/icons.svg#icon-ibooks"></use>
            </svg>
        </a>
        </div>
        <button data-book-id="${book._id}" class="btn-delete">
            <div class="icon-trash">
                <svg class="trash" width="16" height="16">
                    <use href="../img/icons.svg#icon-trash"></use>
                </svg>
            </div>
        </button>
    
`;
          booksList.appendChild(bookCard);
        });
      });
    
      const deleteButtons = document.querySelectorAll('.btn-delete');
      deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
          const bookId = this.getAttribute('data-book-id');
          removeFromShoppingList(bookId);
    
          const bookCard = this.closest('.book-card'); 
          bookCard.remove();
        });
      });
    })
    .catch(error => {
      console.error("Сталася помилка:", error);
    });



function removeFromShoppingList(bookId) {
  console.log("Видалення книги з ID:", bookId);
}


 



