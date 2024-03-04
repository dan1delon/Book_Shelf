function setTheme(theme) {
    const body = document.body;
    const toggleSwitch = document.getElementById('toggle');
    if (theme === 'dark-mode') {
        body.classList.add('dark-theme');
        toggleSwitch.checked = true;
    } else {
        body.classList.remove('dark-theme');
        toggleSwitch.checked = false;
    }
}
// Проверяем, сохранена ли ранее выбранная тема в локальном хранилище
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
});
// Обработчик события изменения состояния переключателя темы
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle');
    toggleSwitch.addEventListener('change', () => {
        const currentTheme = toggleSwitch.checked ? 'dark-mode' : 'light-mode';
        setTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
});
// Проверяем текущий URL страницы и применяем соответствующие стили к ссылкам
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.href;
    const homeLink = document.getElementById('home-link');
    const shoppingListLink = document.getElementById('shopping-list-link');
    // Проверяем, содержит ли текущий URL абсолютный путь к index.html
    if (currentPage.includes('/index.html') || currentPage.endsWith('/')) {
        homeLink.classList.add('button');
        shoppingListLink.classList.remove('button');
    } else if (currentPage.includes('/shopping-list.html')) {
        homeLink.classList.remove('button');
        shoppingListLink.classList.add('button');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.href;
    const homeLink = document.getElementById('backdrop-home-link');
    const shoppingListLink = document.getElementById('backdrop-shopping-list-link');
    // Проверяем, содержит ли текущий URL абсолютный путь к index.html
    if (currentPage.includes('/index.html') || currentPage.endsWith('/')) {
        homeLink.classList.add('button');
        shoppingListLink.classList.remove('button');
    } else if (currentPage.includes('/shopping-list.html')) {
        homeLink.classList.remove('button');
        shoppingListLink.classList.add('button');
    }
});
// Функция для открытия/закрытия меню и показа/скрытия бекдропа
function burgerMenu() {
    const burgerSwitch = document.getElementById('burger');
    const backdrop = document.getElementById('backdrop');
    const burgerIcon = document.querySelector('.icon-logo');
    const navLinks = document.querySelector('.nav-links');
    const closeIcon = document.getElementById('x-close');
    if (burgerSwitch.checked) {
        burgerSwitch.checked = false;
        backdrop.style.display = 'none';
        navLinks.style.height = '0';
        closeIcon.style.display = 'none';
        burgerIcon.style.display = 'block';
    } else {
        burgerSwitch.checked = true;
        backdrop.style.display = 'block';
        navLinks.style.height = '100vh';
        closeIcon.style.display = 'block';
        burgerIcon.style.display = 'none';
    }
}
// Обработчики событий клика на иконки бургер-меню и закрытия
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.icon-logo');
    const closeIcon = document.getElementById('x-close');
    burgerIcon.addEventListener('click', burgerMenu);
    closeIcon.addEventListener('click', burgerMenu);
});
// Функция для прокрутки страницы наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // плавная прокрутка
    });
}
// Функция, чтобы показать кнопку при прокрутке
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("scrollUpButton").style.display = "block";
    } else {
        document.getElementById("scrollUpButton").style.display = "none";
    }
}
// Добавляем обработчик событий клика для кнопки прокрутки наверх
document.getElementById("scrollUpButton").addEventListener("click", scrollToTop);
       