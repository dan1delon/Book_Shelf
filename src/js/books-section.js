async function fetchAndDisplayBooks() {
  try {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/top-books'
    );
    const data = await response.json();

    const booksListContainer = document.querySelector('.books-list');

    const randomCategories = getRandomElements(data, 4);

    randomCategories.forEach(category => {
      const categoryElement = document.createElement('div');
      categoryElement.classList.add('category');

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category.list_name;
      categoryElement.appendChild(categoryTitle);

      const randomBooks = getRandomElements(category.books, 4);

      randomBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        const bookInfo = `
          <div class="book-info">
            <img src="${book.book_image}" alt="${book.title}" class="book-image">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
          </div>
        `;
        bookItem.innerHTML = bookInfo;

        categoryElement.appendChild(bookItem);
      });

      const seeMoreButton = document.createElement('button');
      seeMoreButton.classList.add('see-more-button');
      seeMoreButton.textContent = 'See more';
      seeMoreButton.addEventListener('click', () => {
        displayCategoryBooks(category.list_name);
      });
      categoryElement.appendChild(seeMoreButton);

      booksListContainer.appendChild(categoryElement);
    });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

async function displayCategoryBooks(categoryName) {
  try {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${categoryName}`
    );
    const data = await response.json();

    const booksListContainer = document.querySelector('.books-list');
    booksListContainer.innerHTML = '';

    const booksSectionTitle = document.querySelector('.books-section-title');
    booksSectionTitle.remove();

    const categoryTitle = document.createElement('h1');
    const words = categoryName.split(' ');
    const lastWord = words.pop();
    categoryTitle.innerHTML =
      words.join(' ') +
      ' <span class="books-section-title-accent">' +
      lastWord +
      '</span>';
    categoryTitle.classList.add('books-section-title');
    booksListContainer.appendChild(categoryTitle);

    data.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');

      const bookInfo = `
        <div class="book-info">
          <img src="${book.book_image}" alt="${book.title}" class="book-image">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
        </div>
      `;
      bookItem.innerHTML = bookInfo;

      booksListContainer.appendChild(bookItem);
    });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

function getRandomElements(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

fetchAndDisplayBooks();
