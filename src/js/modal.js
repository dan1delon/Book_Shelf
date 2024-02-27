const refs = {
  books: document.querySelector('.books-section'),
  modal: document.querySelector('.modal-backdrop'),
  xBtn: document.querySelector('.x-btn'),
};

refs.books.addEventListener('click', openModal);
refs.xBtn.addEventListener('click', closeModal);

async function openModal(e) {

  if (e.target.nodeName !== 'IMG') {
     return
  }
  
  refs.modal.classList.add('is-open');

}
 
function closeModal() {
  refs.modal.classList.remove('is-open');
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
