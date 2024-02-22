import axios from "axios";

export async function getCategories() {
    const {data} = await axios.get('https://books-backend.p.goit.global/books/category-list');
    return data;
}

export async function getTopBooks() {
    const {data} = await axios.get('https://books-backend.p.goit.global/books/top-books');
    return data;
}

export async function getBooksFromCategory(selectedCategory) {
    const {data} = await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`);
    return data;
}

export async function getBookById(bookId) {
    const {data} = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`);
    return data;
}