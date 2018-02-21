const GET_BOOKS = 'GET_BOOKS';
const GET_LIKES = 'GET_LIKES';
const STORE_DATA = 'STORE_DATA';

export const getBooks = payload => ({
  type: GET_BOOKS,
  payload,
});

export const getLikes = payload => ({
  type: GET_LIKES,
  payload,
});

export const storeData = payload => ({
  type: STORE_DATA,
  payload,
});
