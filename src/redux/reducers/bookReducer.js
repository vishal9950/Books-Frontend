const defaultState = {
  books: [],
  likes: [],
};

const bookReducer = (prevState = defaultState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    default: return prevState;
  }
};

export default bookReducer;

