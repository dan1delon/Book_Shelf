const loadingBar = document.getElementById('loading-bar');
const progressBar = document.querySelector('.progress-bar');

function showLoadingBar() {
  loadingBar.style.opacity = 1;
}

function hideLoadingBar() {
  loadingBar.style.opacity = 0;
}

function updateProgressBar(progress) {
  progressBar.style.width = `${progress}%`;
}

// Запуск шкалы при загрузке страницы
window.addEventListener('load', () => {
  showLoadingBar();
  updateProgressBar(100);
  setTimeout(hideLoadingBar, 500); // Скрыть шкалу через 500 мс (для демонстрации)
});

// Запуск шкалы при нажатии кнопки
const Button = document.querySelectorAll('button');
    Button.addEventListener('click', () => {
  showLoadingBar();
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    updateProgressBar(progress);
    if (progress === 100) {
      clearInterval(interval);
      hideLoadingBar();
    }
  }, 100);
});

// Запуск шкалы при переходе по внутренним ссылкам
document.body.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'A' && target.href.startsWith('/')) {
    showLoadingBar();
  }
});

// Скрытие шкалы при переходе на новую страницу
document.addEventListener('pagehide', hideLoadingBar);
