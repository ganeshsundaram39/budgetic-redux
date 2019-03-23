import React from 'react';
import './Display.css';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import { connect } from 'react-redux';
function Display(props) {
  return (
    <div className="display">
      <div className="income__wrapper">
        <Income incomeList={props.incomeList} />
      </div>
      <div className="expense__wrapper">
        <Expense expenseList={props.expenseList} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    incomeList: state.inputs.filter(input => input.type === 'income') || [],
    expenseList: state.inputs.filter(input => input.type === 'expense') || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // storeInputToGlobal: input => dispatch({ type: 'NEW-INPUT', value: input })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
