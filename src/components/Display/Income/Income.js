import React from 'react';
import './Income.css';

const Income = props => {
  return (
    <div className="income">
      {props.incomeList.map(inc => (
        <div className="income__single" key={inc.key}>
          <span className="description">{inc.description}</span>
          <span className="value">{inc.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Income;
