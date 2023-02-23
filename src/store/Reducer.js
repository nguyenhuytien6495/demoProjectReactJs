const reducer = (state, action) => {
  switch (action.type) {
    case "INCRE":
      return {
        ...state,
        count: state.count + action.payLoad,
      };
    case "DECRE":
      return {
        ...state,
        count: state.count - action.payLoad,
      };

    default:
      return { ...state };
  }
};

export default reducer;
