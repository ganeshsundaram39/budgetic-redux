import React from 'react';
import './Expense.css';
const Expense = props => {
  return (
    <div className="expense">
      {props.expenseList.map(exp => (
        <div
          className="expense__single"
          description={exp.description}
          value={exp.value}
          key={exp.key}
        />
      ))}
    </div>
  );
};

export default Expense;
