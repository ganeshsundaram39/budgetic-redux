import React from 'react';
import { FETCH_MONTH, REMOVE_INPUT, REMOVE_MONTH } from '../../types/types';
import './Display.css';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import History from './History/History';
import { connect } from 'react-redux';
function Display(props) {
  return (
    <div className="display">
      <div className="income__wrapper">
        <Income incomeList={props.incomeList} removeInput={props.removeInput} />
      </div>
      <div className="expense__wrapper">
        <Expense
          expenseList={props.expenseList}
          removeInput={props.removeInput}
        />
      </div>
      <div className="history__wrapper">
        <History
          savedList={props.savedList}
          getSavedListContent={props.getSavedListContent}
          removeMonth={props.removeMonth}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    incomeList:
      state.inputs && state.inputs.length > 0
        ? state.inputs.filter(input => input.type === 'income')
        : [],
    expenseList:
      state.inputs && state.inputs.length > 0
        ? state.inputs.filter(input => input.type === 'expense')
        : [],
    savedList:
      state.allSaved && Object.keys(state.allSaved).length > 0
        ? Object.keys(state.allSaved)
        : []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSavedListContent: month => dispatch({ type: FETCH_MONTH, value: month }),
    removeInput: key => dispatch({ type: REMOVE_INPUT, value: key }),
    removeMonth: month => dispatch({ type: REMOVE_MONTH, value: month })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
