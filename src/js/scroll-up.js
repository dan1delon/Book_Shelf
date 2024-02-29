const scrollBtn = document.querySelector('.scroll-up-btn');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});