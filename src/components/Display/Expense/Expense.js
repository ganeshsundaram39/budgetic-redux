import React from 'react';
import './Expense.css';
const Expense = props => {
  return (
    <div className="expense">
      <div className="expense__label">Expense</div>
      {props.expenseList.length > 0 &&
        props.expenseList.map(exp => (
          <div className="expense__single" key={exp.key}>
            <span className="description">{exp.description}</span>
            <span className="value">
              {'-' + parseFloat(exp.value).toFixed(2)}
            </span>
            <span className="delete">
              <i
                className="icon-delete"
                onClick={() => props.removeInput(exp.key)}
              />
            </span>
          </div>
        ))}
    </div>
  );
};

export default Expense;
