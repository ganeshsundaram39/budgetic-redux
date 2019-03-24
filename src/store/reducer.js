const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const getCurrentMonthYear = () =>
  monthNames[new Date().getMonth()] + ' ' + new Date().getFullYear();

const initialState = {
  inputs: [],
  currentMonthYear: getCurrentMonthYear(),
  allMonths: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW-INPUT':
      return {
        ...state,
        inputs: [...state.inputs, action.value]
      };
    case 'REMOVE-INPUT':
      return {
        ...state,
        inputs: [...state.inputs].filter(input => input.key !== action.value)
      };
    default:
  }
  return state;
};

export default reducer;
