export const compareStats = (p1Value, p2Value) => {
  return (dispatch) => {
    dispatch({
      type: 'COMPARE',
      p1Value: p1Value,
      p2Value: p2Value
    });
  };
};
