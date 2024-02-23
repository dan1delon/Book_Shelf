import { getCategories, getBooksFromCategory } from './fetchAPI/';
const categoryList = document.querySelector('.category-list');

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
    console.log(listNames);
  } catch (err) {
    Notify.failure('Oops! Something went wrong...');
    console.error(err);
  }
}

createItem();
function createMarkup(type) {
  return `<li class="category-item">
    <button class="category-btn" type="button" data-list-name="${type}">${type}</button>
  </li>`;
}
