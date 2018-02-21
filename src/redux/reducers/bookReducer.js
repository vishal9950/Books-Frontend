const defaultState = {
  books: [],
  likes: [],
};

const bookReducer = (prevState = defaultState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case 'GET_BOOKS': {
      return {
        ...prevState,
        books: action.payload,
      };
    }
    case 'GET_LIKES': {
      return {
        ...prevState,
        likes: action.payload,
      };
    }
    default: return prevState;
  }
};

export default bookReducer;

