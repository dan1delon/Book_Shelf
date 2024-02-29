import { getTopBooks, getBooksFromCategory } from './fetchAPI';
import { booksMarkup } from './category-list';
const booksSectionTitle = document.querySelector('.books-section-title');
export async function fetchAndDisplayBooks() {
  try {
    const data = await getTopBooks();

    const booksListContainer = document.querySelector('.books-list');
    booksListContainer.innerHTML = '';

    let booksToShow = 1;

    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      booksToShow = 3;
    } else if (window.innerWidth >= 1440) {
      booksToShow = 5;
    }

    const randomCategories = getRandomElements(data, 4);

    randomCategories.map(category => {
      const categoryElement = document.createElement('li');
      categoryElement.classList.add('category');

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category.list_name;
      categoryTitle.classList.add('category-title');
      categoryElement.appendChild(categoryTitle);

      const randomBooks = getRandomElements(category.books, booksToShow);

      const booksContainer = document.createElement('ul');
      booksContainer.classList.add('books-container');

      randomBooks.map(book => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('book-item');

        const bookInfo = `
            <div class = "book-overley-box"><img src="${book.book_image}" alt="${book.title}" class="book-image" data-id="${book._id}"><div class = "book-overley">quick view</div></div>
            <h4 class="book-title">${book.title}</h4>
            <span class="book-author">${book.author}</span>
        `;
        bookItem.innerHTML = bookInfo;

        booksContainer.appendChild(bookItem);
      });

      categoryElement.appendChild(booksContainer);

      const seeMoreButtonContainer = document.createElement('div');
      seeMoreButtonContainer.classList.add('see-more-button-container');
      const seeMoreButton = document.createElement('button');
      seeMoreButton.classList.add('see-more-button');
      seeMoreButton.textContent = 'See more';
      seeMoreButton.addEventListener('click', () => {
        displayCategoryBooks(selectedCategory);
      });
      seeMoreButtonContainer.appendChild(seeMoreButton);
      categoryElement.appendChild(seeMoreButtonContainer);

      booksListContainer.appendChild(categoryElement);
    });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

async function displayCategoryBooks(selectedCategory) {
  try {
    const response = await getBooksFromCategory(selectedCategory);

    const booksListContainer = document.querySelector('.books-list');
    const content = booksMarkup(response, selectedCategory);
    booksListContainer.innerHTML = content;

    // const categoryTitle = document.createElement('h1');
    // const words = selectedCategory.split(' ');
    // const lastWord = words.pop();
    // categoryTitle.innerHTML =
    //   words.join(' ') +
    //   ' <span class="books-section-title-accent">' +
    //   lastWord +
    //   '</span>';
    // categoryTitle.classList.add('books-section-title');
    // booksListContainer.appendChild(categoryTitle);

    // const booksContainer = document.createElement('div');
    // booksContainer.classList.add('books-container');

    // response.map(book => {
    //   const bookItem = document.createElement('div');
    //   bookItem.classList.add('book-item');
    //   bookItem.setAttribute('id', book._id);

    //   const bookInfo = `
    //     <div class="book-info book-in-category">
    //       <img src="${book.book_image}" alt="${book.title}" class="book-image">
    //       <h3 class="book-title">${book.title}</h3>
    //       <p class="book-author">${book.author}</p>
    //     </div>
    //   `;
    //   bookItem.innerHTML = bookInfo;

    //   booksContainer.appendChild(bookItem);
    // });

    // booksListContainer.appendChild(booksContainer);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

function getRandomElements(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

fetchAndDisplayBooks();
