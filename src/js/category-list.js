import { getCategories, getBooksFromCategory, getTopBooks } from './fetchAPI/';
import { fetchAndDisplayBooks } from './books-section';
const categoryList = document.querySelector('.category-list');
const booksContent = document.querySelector('.books-list');
const bestTitle = document.querySelector('.books-section-title');

async function createItem() {
  try {
    const listNames = await getCategories();

    if (listNames.length === 0) {
      throw new Error();
    }
    const typesBooks = listNames.map(({ list_name }) => list_name);
    const categoryItem = typesBooks
      .sort((firstType, secondType) => firstType.localeCompare(secondType))
      .map(type => createMarkup(type))
      .join('');
    categoryList.insertAdjacentHTML('beforeend', categoryItem);
  } catch (err) {
    console.error(err);
  }
}

createItem();
function createMarkup(type) {
  return `<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${type}">${type}</button>
  </li>`;
}

async function bestsellersContent() {
  try {
    bestTitle.style.display = 'none';
    const bestBooks = await getTopBooks();
    if (bestBooks.length === 0) {
      throw new Error();
    }
    const content = bestsellersMarkup(bestBooks, 'Best Sellers Books');
    booksContent.innerHTML = content;
  } catch (err) {
    console.error(err);
    booksContent.innerHTML = '<h2>Try reloading the page...</h2>';
  }
}

function bestsellersMarkup(bestBooks, name) {
  const title = styleTitle(name);
  const markup = `${title}
 <ul class="books-bestsellers">
        ${bestBooks
          .map(({ books, list_name }) => createCategories(books, list_name))
          .join('')}
 </ul>`;
  return markup;
}

async function categoryBooks(selectedCategory) {
  try {
    bestTitle.style.display = 'none';
    const currentBooks = await getBooksFromCategory(selectedCategory);
    if (currentBooks.length === 0) {
      return;
    }
    const content = booksMarkup(currentBooks, selectedCategory);
    booksContent.innerHTML = content;
  } catch (err) {
    console.error(err);
    booksContent.innerHTML = '<h2>Try reloading the page...</h2>';
  }
}

fetchAndDisplayBooks();

export function booksMarkup(books, name) {
  const title = styleTitle(name);

  const markup = `${title}
        <ul class="books-category">
            ${books.map(book => createCard(book)).join('')}
        </ul>`;
  return markup;
}

function createCategories(books, name) {
  return `<li class="books-bestsellers-item">
            <p class="books-bestsellers-list-name">${name}</p>
            <ul class="books-bestsellers-list">
                ${books.map(book => createCard(book)).join('')}
            </ul>
            <button
                class="books-bestsellers-btn"
                type="button"
                data-list-name="${name}">
                See more
            </button>
        </li>`;
}

function createCard(book) {
  const {
    _id,
    book_image,
    book_image_width,
    book_image_height,
    publisher,
    title,
  } = book;

  return `<li class="books-item">
        <div class="books-overley-box">
            <img
                class="books-image"
                src="${book_image}"
                    width="${book_image_width}"
                    height="${book_image_height}"
                    loading="lazy"
                    data-id="${_id}"
                />
            <div class="books-overley">quick view</div>
        </div>
        <h4 class="books-title-book">${title}</h4>
        <span class="books-author">${publisher}</span>
    </li>`;
}

function styleTitle(name) {
  const titleArray = name.split(' ');
  const lastWord = titleArray.splice(length - 1, 1).join('');
  const title = titleArray.join(' ');

  return `<h2 class="books-title">${title}
        <span class="books-title-accent">${lastWord}</span>
    </h2>`;
}

let prevCategory = '';

function handleContent(e) {
  const currentBtn = e.target;
  const currentCategory = currentBtn.dataset.listName;

  if (currentBtn.tagName !== 'BUTTON' || prevCategory === currentCategory) {
    return;
  }

  currentCategory !== 'bestsellers'
    ? categoryBooks(currentCategory)
    : bestsellersContent();
  prevCategory = currentCategory;
  changeActiveCategory(currentCategory);
}

function changeActiveCategory(currentItem) {
  const buttons = [...categoryList.querySelectorAll('.category-btn')];
  const activeBtn = buttons.find(
    button => button.dataset.listName === currentItem
  );

  const prevActiveBtn = categoryList.querySelector('.active');

  activeBtn.classList.add('active');
  prevActiveBtn.classList.remove('active');

  scrollToStart(activeBtn);
}

function scrollToStart(activeBtn) {
  activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

categoryList.addEventListener('click', handleContent);
booksContent.addEventListener('click', handleContent);
