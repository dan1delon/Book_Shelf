import { getBookById } from "./fetchAPI";

const refs = {
  books: document.querySelector('.books-section'),
  modal: document.querySelector('.modal-backdrop'),
  xBtn: document.querySelector('.x-btn'),
  backdrop: document.querySelector('.modal-backdrop'),
  oneBook: document.querySelectorAll('.books-item'),
  modalContent: document.querySelector('.modal-content-wrapper'),
  descriptionBookEl: document.querySelector('.descr-of-book'),
};

refs.books.addEventListener('click', openModal);

let currentBook = null;
let modalBtn = null;

async function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return
  }

  const bookId = e.target.dataset.id;
  
  refs.modal.classList.add('is-open');
  document.body.classList.add('no-scroll');

  refs.backdrop.addEventListener('click', handleBackdropClick);
  refs.xBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscKeyPress);

  await renderBookById(bookId);

  modalBtn = document.querySelector('.add-to-localSt')
  modalBtn.addEventListener('click', addToLocalStorage);
}
 
function closeModal(e) {
 
  refs.backdrop.removeEventListener('click', handleBackdropClick);
  refs.xBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onEscKeyPress);
  modalBtn.removeEventListener('click', addToLocalStorage);

  document.body.classList.remove('no-scroll');
  refs.modal.classList.remove('is-open');
}

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
      closeModal();
    }
}

function handleBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function addToLocalStorage() {
  
  const key = 'selected-books';
  const savedBooks = JSON.parse(localStorage.getItem(key)) || [];

  const bookId = currentBook._id;
  const isBookSaved = savedBooks.some(book => book._id === bookId);

  if (isBookSaved) {
    const updatedBooks = savedBooks.filter(book => book._id !== bookId);
    localStorage.setItem(key, JSON.stringify(updatedBooks));
  } else {
    savedBooks.push(currentBook);
    localStorage.setItem(key, JSON.stringify(savedBooks));
  }

  const modalBtn = document.querySelector('.add-to-localSt');
  const buttonText = isBookSaved ? 'Add to Shopping List' : 'Remove from Shopping List';
  modalBtn.textContent = buttonText;

  updateButtonState(!isBookSaved);
}

function updateButtonState(isBookSaved) {
  const modalBtn = document.querySelector('.add-to-localSt');
  const buttonText = isBookSaved ? 'Remove from Shopping List' : 'Add to Shopping List';
  modalBtn.textContent = buttonText;
}

async function renderBookById(bookId) {

  refs.modalContent.innerHTML = '';

  try {
    const data = await getBookById(bookId);
    const { book_image, title, author, description, buy_links } = data;
    currentBook = data;

    // if (description === '') {
    //   refs.descriptionBookEl.textContent = 'there is no description of this book';
    // } 

    const isActivBook =  Boolean(
      JSON.parse(localStorage.getItem('selected-books'))?.find(el => el._id === data._id)
    );

    const markup = `<div class="modal-content">
        <img class="book-img-modal" src="${book_image}" alt="book-image">
        <div class="modal-text-wrap">
            <div class="name-of-book">
                <h3 class="title-of-book">${title}</h3>
                <p class="author-of-book">${author}</p>
            </div>
            <p class="descr-of-book">${description}</p>
            <div class="buy-links">
                <a href="${buy_links[0].url}" target="_blank" class="amazon-link"> <svg class="amazon" width="16" height="16">
                  <use href="../img/icons.svg#icon-amazon"></use>
              </svg></a>

                        
             
          </a>
                <a href="${buy_links[1].url}" target="_blank" class="apple-link"><img class="apple-link-img" src="../img/apple-shop-1x.png"
                        alt="link"></a>
            </div>
           </div>
        </div>
        <button class="add-to-localSt" type="button">${isActivBook ? 'remove from the shopping list' : 'add to shopping list'}</button>`;
    
    refs.modalContent.innerHTML = markup;

  } catch (error) {
    alert(`Something went wrong. You caught the following error: ${error.message}.`);
  }
}



        








