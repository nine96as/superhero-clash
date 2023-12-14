const initialState = {
  p1Value: 0,
  p2Value: 0,
  greater: ''
};

const statReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPARE':
      return action.p1Value > action.p2Value
        ? { ...state, greater: 'p1' }
        : { ...state, greater: 'p2' };
    default:
      return state;
  }
};

export default statReducer;
