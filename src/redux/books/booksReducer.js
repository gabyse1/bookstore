const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/esaKasLZflBHzDw2HBOr';

const ADD_BOOK_TO_API = 'bookStore/books/ADD_BOOK_TO_API';
const REMOVE_BOOK_FROM_API = 'bookStore/books/REMOVE_BOOK_FROM_API';
const GET_BOOKS_FROM_API = 'bookStore/books/GET_BOOKS_FROM_API';

const initialState = [];

const getBooksAPI = () => async (dispatch) => {
  await fetch(`${baseURL}/books`)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = Object.entries(data).map((ele) => ({
        id: ele[0],
        title: ele[1][0].title.title,
        author: ele[1][0].title.author,
        category: ele[1][0].category,
      }));
      dispatch({
        type: GET_BOOKS_FROM_API,
        payload: newInitializeState,
      });
    });
};

const addBookAPI = (bookInfo) => async (dispatch) => {
  await fetch(`${baseURL}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: bookInfo.id,
      title: { title: bookInfo.title, author: bookInfo.author },
      category: bookInfo.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === 'Created') dispatch(getBooksAPI());
    });
};

const removeBookAPI = (bookId) => async (dispatch) => {
  await fetch(`${baseURL}/books/${bookId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: bookId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      if (data === 'The book was deleted successfully!') dispatch(getBooksAPI());
    });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_API:
      return [...state, action.payload];
    case REMOVE_BOOK_FROM_API:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  addBookAPI,
  removeBookAPI,
  getBooksAPI,
};

export default booksReducer;
