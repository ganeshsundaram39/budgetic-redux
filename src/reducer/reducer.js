import { REHYDRATE } from 'redux-persist';

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
  allSaved: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW-INPUT':
      const newInputs = [...state.inputs, action.value];
      return {
        ...state,
        inputs: newInputs,
        allSaved: {
          ...state.allSaved,
          ...{ [getCurrentMonthYear()]: newInputs }
        }
      };
    case 'REMOVE-INPUT':
      const removeInput = [...state.inputs].filter(
        input => input.key !== action.value
      );

      if (removeInput.length === 0) {
        return { ...state };
      }
      return {
        ...state,
        inputs: removeInput,
        allSaved: {
          ...state.allSaved,
          ...{ [getCurrentMonthYear()]: removeInput }
        }
      };
    case 'FETCH-MONTH':
      return {
        ...state,
        inputs: state.allSaved[action.value]
      };
    case REHYDRATE:
      const allSaved = action.payload
        ? action.payload.allSaved
          ? action.payload.allSaved
          : {}
        : {};
      const restoreInputs =
        Object.keys(allSaved).length > 0 ? allSaved[getCurrentMonthYear()] : [];
      return {
        ...state,
        inputs: restoreInputs && restoreInputs.length > 0 ? restoreInputs : [],
        allSaved
      };
    default:
      return state;
  }
};

export default reducer;
