const initialState = {
  budget: 0,
  inputs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW-INPUT':
      return {
        ...state,
        inputs: [...state.inputs, action.value]
      };
    default:
  }
  return state;
};

export default reducer;
