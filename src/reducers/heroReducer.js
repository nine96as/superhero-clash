const initialState = {
  heroes: [],
  loading: false
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_HEROES':
      console.log(action.payload);
      return { ...state, heroes: action.payload, error: false };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default heroReducer;
