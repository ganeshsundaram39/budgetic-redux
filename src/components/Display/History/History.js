import React from 'react';
import './History.css';

const History = props => {
  return (
    <div className="income">
      <div className="income__label">History</div>
      {props.savedList.length > 0 &&
        props.savedList.map((saveli, i) => (
          <div className="income__single" key={i}>
            <span className="description">{saveli}</span>
            <span className="delete">
              <i
                className="icon-delete"
                onClick={() => props.getSaveListContent(saveli)}
              />
            </span>
          </div>
        ))}
    </div>
  );
};

export default History;
