import { REHYDRATE } from 'redux-persist';

import {
  NEW_INPUT,
  REMOVE_INPUT,
  FETCH_MONTH,
  REMOVE_MONTH
} from '../types/types';
import getCurrentMonthYear from './months/months';

const initialState = {
  inputs: [],
  currentMonthYear: getCurrentMonthYear(),
  allSaved: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_INPUT:
      const newInputs = [...state.inputs, action.value];
      return {
        ...state,
        inputs: newInputs,
        allSaved: {
          ...state.allSaved,
          ...{ [state.currentMonthYear]: newInputs }
        }
      };
    case REMOVE_INPUT:
      const removeInput = [...state.inputs].filter(
        input => input.key !== action.value
      );
      return {
        ...state,
        inputs: removeInput,
        allSaved: {
          ...state.allSaved,
          ...{ [state.currentMonthYear]: removeInput }
        }
      };
    case FETCH_MONTH:
      return {
        ...state,
        currentMonthYear: action.value,
        inputs: state.allSaved[action.value]
      };
    case REMOVE_MONTH:
      const allSavedMonths = { ...state.allSaved };
      const currentMonthYear = getCurrentMonthYear();
      delete allSavedMonths[action.value];
      return {
        ...state,
        ...(state.currentMonthYear === currentMonthYear ? { inputs: [] } : {}),
        allSaved: allSavedMonths
      };
    case REHYDRATE:
      const allSaved = action.payload
        ? action.payload.allSaved
          ? action.payload.allSaved
          : {}
        : {};
      const restoreInputs =
        Object.keys(allSaved).length > 0
          ? allSaved[state.currentMonthYear]
          : [];
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
