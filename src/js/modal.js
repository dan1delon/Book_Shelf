const refs = {
  books: document.querySelector('.books-section'),
  modal: document.querySelector('.modal-backdrop'),
  xBtn: document.querySelector('.x-btn'),
  modalBtn: document.querySelector('.add-to-localSt'),
  backdrop: document.querySelector('.modal-backdrop'),
};

refs.books.addEventListener('click', openModal);

async function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
     return
  }
  
  refs.modal.classList.add('is-open');
  document.body.classList.add('no-scroll');

  refs.backdrop.addEventListener('click', handleBackdropClick);
  refs.xBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscKeyPress);
  refs.modalBtn.addEventListener('click', addToLocalStorage);

  // renderBookById(bookId);
}
 
function closeModal(e) {
 
  refs.backdrop.removeEventListener('click', handleBackdropClick);
  refs.xBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modalBtn.removeEventListener('click', addToLocalStorage);

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
  const key = 'shopping-list-books'
    
   localStorage.setItem(key, JSON.stringify(Math.random()));
}
























































// refs.openModalBtn.addEventListener('click', toggleModalOpen);
// refs.closeModalBtn.addEventListener('click', toggleModal);
// window.addEventListener('keydown', handleKeyDown);
// refs.modal.addEventListener('click', handleClickOutsideModal);

// function toggleModalOpen(event) {
//   if (event.target.className !== 'bestsellers-book-cover') {
//     return;
//   }
//   refs.modal.classList.toggle('is-hidden');
//   document.body.style.overflow = refs.modal.classList.contains('is-hidden')
//     ? 'auto'
//     : 'hidden';
// }

// function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
//   document.body.style.overflow = refs.modal.classList.contains('is-hidden')
//     ? 'auto'
//     : 'hidden';
// }

// function handleKeyDown(event) {
//   if (event.key === 'Escape') {
//     refs.modal.classList.add('is-hidden');
//     document.body.style.overflow = 'auto';
//   }
// }

// function handleClickOutsideModal(event) {
//   if (event.target === refs.modal) {
//     refs.modal.classList.add('is-hidden');
//     document.body.style.overflow = 'auto';
//   }
// }

// if (refs.modal.classList.contains('is-hidden') === null) {
//   document.body.style.overflow = 'auto';
// }
