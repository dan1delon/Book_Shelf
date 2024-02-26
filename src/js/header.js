   const toggleSwitch = document.getElementById('toggle');

    // Проверяем, сохранен ли ранее выбор в локальном хранилище
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
            // Применяем начальные стили переключателя в зависимости от его состояния
            toggleSwitch.classList.add('dark-mode');
        }
    }

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.classList.add('dark-mode');
            // Сохраняем выбор в локальном хранилище
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
            // Сохраняем выбор в локальном хранилище
            localStorage.setItem('theme', 'light-mode');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
      // Проверяем текущую страницу и применяем соответствующие стили к ссылкам
      const currentPage = window.location.pathname;
      const homeLink = document.getElementById('home-link');
      const shoppingListLink = document.getElementById('shopping-list-link');
      
      if (currentPage === '/') {
        homeLink.classList.add('button');
        shoppingListLink.classList.remove('button');
      } else if (currentPage === '/shopping-list') {
        homeLink.classList.remove('button');
        shoppingListLink.classList.add('button');
      }
    });

 document.addEventListener('DOMContentLoaded', function() {
      // Проверяем текущую страницу и применяем соответствующие стили к ссылкам
      const currentPage = window.location.pathname;
      const homeLink = document.getElementById('backdrop-home-link');
      const shoppingListLink = document.getElementById('backdrop-shopping-list-link');
      
      if (currentPage === '/') {
        homeLink.classList.add('button');
        shoppingListLink.classList.remove('button');
      } else if (currentPage === '/shopping-list') {
        homeLink.classList.remove('button');
        shoppingListLink.classList.add('button');
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
  const burgerSwitch = document.getElementById('burger');
  const backdrop = document.getElementById('backdrop');
  const burgerIcon = document.querySelector('.icon-logo');
  const navLinks = document.querySelector('.nav-links');
  const closeIcon = document.getElementById('x-close'); // Получаем иконку закрытия

  // Функция для открытия/закрытия меню и показа/скрытия бекдропа
  function burgerMenu() {
    if (burgerSwitch.checked) {
      burgerSwitch.checked = false;
      backdrop.style.display = 'none';
      navLinks.style.height = '0';
      closeIcon.style.display = 'none'; // Скрываем иконку закрытия
      burgerIcon.style.display = 'block'; // Показываем иконку бургера
    } else {
      burgerSwitch.checked = true;
      backdrop.style.display = 'block';
      navLinks.style.height = '100vh';
      closeIcon.style.display = 'block'; // Показываем иконку закрытия
      burgerIcon.style.display = 'none'; // Скрываем иконку бургера
    }
  }

  // Обработчик клика на иконку бургер-меню
  burgerIcon.addEventListener('click', burgerMenu);

  // Обработчик клика на иконку закрытия
  closeIcon.addEventListener('click', burgerMenu);
});


