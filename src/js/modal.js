// document.addEventListener("DOMContentLoaded", function() {

//     const modal = document.getElementById("myModal");

//     const btn = document.getElementById("bookCard");

//     const span = document.getElementsByClassName("close")[0];

//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape') {
//             modal.style.display = "none";
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('bookCard');
  const span = document.getElementsByClassName('close')[0];
  let bookData;

  function fetchBookData(bookId) {
    fetch(`https://books-backend.p.goit.global/books/${bookId}`)
      .then(response => response.json())
      .then(data => {
        bookData = data;
      })
      .catch(error =>
        console.error('Ошибка при загрузке данных о книге:', error)
      );
  }

  function updateModalContent() {
    if (bookData) {
      modal.querySelector('img').src = bookData.image;
      modal.querySelector('h2').textContent = bookData.title;
      modal.querySelector('p.author').textContent =
        'Author: ' + bookData.author;
      modal.querySelector('p.description').textContent =
        'Description: ' + bookData.description;

      modal.querySelector('.category').textContent =
        'Category: ' + bookData.category;
      modal.querySelector('.amazon-link').href = bookData.amazonLink;
      modal.querySelector('.apple-link').href = bookData.appleLink;
    }
  }

  btn.onclick = function () {
    fetchBookData();
    modal.style.display = 'block';
    updateModalContent();
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the modal
//     var modal = document.getElementById("myModal");

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     // Add functionality for closing modal on ESC key press
//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape') {
//             modal.style.display = "none";
//         }
//     });

//     // Function to fetch book data by ID
//     function fetchBookData(bookId) {
//         // Функция для загрузки информации о книге из API по ее ID
// function fetchBookData(bookId) {
//     // Отправляем GET запрос к API для получения информации о книге
//     fetch(`https://books-backend.p.goit.global/books/${bookId}`)
//         .then(response => {
//             // Проверяем, был ли получен успешный ответ от сервера
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             // Преобразуем полученный ответ в формат JSON
//             return response.json();
//         })
//         .then(data => {
//             // Обновляем содержимое модального окна с данными о книге
//             document.getElementById("modalBookCover").src = data.coverUrl;
//             document.getElementById("modalBookTitle").textContent = data.title;
//             document.getElementById("modalBookCategory").textContent = `Category: ${data.category}`;
//             document.getElementById("modalBookDescription").textContent = `Description: ${data.description}`;
//             document.getElementById("modalBookAuthor").textContent = `Author: ${data.author}`;

//             // Создаем ссылки на торговые площадки
//             var buyLinksDiv = document.getElementById("modalBuyLinks");
//             buyLinksDiv.innerHTML = "";
//             data.stores.forEach(store => {
//                 var link = document.createElement("a");
//                 link.href = store.url;
//                 link.textContent = store.name;
//                 buyLinksDiv.appendChild(link);
//             });

//             // Показываем модальное окно
//             modal.style.display = "block";
//         })
//         .catch(error => {
//             // Обрабатываем ошибку, если что-то пошло не так при запросе к API
//             console.error('Error fetching book data:', error);
//         });
// }

//     }

//     // Attach event listener to book card to open modal on click
//     var bookCard = document.getElementById("bookCard");
//     bookCard.addEventListener("click", function() {
//         var bookId = this.dataset.bookId;
//         fetchBookData(bookId);
//     });
// });
