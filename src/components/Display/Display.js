import React from 'react';
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
          getSaveListContent={props.getSaveListContent}
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
    removeInput: key => dispatch({ type: 'REMOVE-INPUT', value: key }),
    getSaveListContent: month => dispatch({ type: 'FETCH-MONTH', value: month })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
