import React from 'react';
import './Income.css';

const Income = props => {
  return (
    <div className="income">
      <div className="income__label">Income</div>
      {props.incomeList.length > 0 &&
        props.incomeList.map(inc => (
          <div className="income__single" key={inc.key}>
            <span className="description">{inc.description}</span>
            <span className="value">
              {'+' + parseFloat(inc.value).toFixed(2)}
            </span>
            <span className="delete">
              <i
                className="icon-delete"
                onClick={() => props.removeInput(inc.key)}
              />
            </span>
          </div>
        ))}
    </div>
  );
};

export default Income;
