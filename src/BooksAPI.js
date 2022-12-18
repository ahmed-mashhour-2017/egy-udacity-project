import { searchData, allData } from "./store_redux_toolkit/reducers/search_book_silce";



const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = (disptch) =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books).then((d) => {
      console.log(d);
      disptch(allData(d))
    });

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query, maxResults, disptch) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  }).then((res) => res.json()).then((data) => {
    return data.books
  }).then((d) => {
    // console.log(d)
    disptch(searchData(d))
  });