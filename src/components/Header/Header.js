import React from 'react';
import './Header.css';

import { connect } from 'react-redux';
const Header = props => {
  return (
    <div className="header">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{' '}
          <span className="budget__title--month">{props.currentMonthYear}</span>
          :
        </div>
        <div className="budget__value">
          {parseFloat(props.budget) === 0 ? '-' + props.budget : props.budget}
        </div>
        <div className="budget__income ">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              {'+' + props.totalIncome}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expenses ">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right ">
            <div className="budget__expenses--value">
              {'-' + props.totalExpense}
            </div>
            <div className="budget__expenses--percentage">
              {props.expensePercentage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const getInputs = state => ({
  incomeList: state.inputs
    ? state.inputs.filter(input => input.type === 'income')
    : [],
  expenseList: state.inputs
    ? state.inputs.filter(input => input.type === 'expense')
    : []
});

const getTotal = list =>
  list.reduce((total, input) => total + parseFloat(input.value), 0);

const getBudget = budget =>
  budget > 0 ? '+' + budget.toFixed(2) : budget.toFixed(2);

const getExpensePercentage = (totalIncome, totalExpense) =>
  Math.round((totalExpense / totalIncome) * 100);

const mapStateToProps = (
  state,
  inputs = getInputs(state),
  totalIncome = getTotal(inputs.incomeList).toFixed(2),
  totalExpense = getTotal(inputs.expenseList).toFixed(2),
  budget = getBudget(totalIncome - totalExpense),
  expensePercentage = getExpensePercentage(totalIncome, totalExpense)
    ? getExpensePercentage(totalIncome, totalExpense) + '%'
    : '---'
) => ({
  budget,
  totalIncome,
  totalExpense,
  currentMonthYear: state.currentMonthYear,
  expensePercentage
});
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
