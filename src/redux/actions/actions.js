const GET_BOOKS = 'GET_BOOKS';
const GET_LIKES = 'GET_LIKES';

export const getBooks = payload => ({
  type: GET_BOOKS,
  payload,
});

export const getLikes = payload => ({
  type: GET_LIKES,
  payload,
});
