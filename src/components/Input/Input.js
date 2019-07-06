import React, { Component } from 'react';
import './Input.css';
import { connect } from 'react-redux';
var uniqid = require('uniqid');
class Input extends Component {
  removeFocusClass = '';
  budgetSaved = false;
  state = {
    input: {
      type: 'income',
      description: '',
      value: ''
    }
  };
  handleChange(key, event) {
    const value = event.target.value;
    if (key === 'type') {
      this.removeFocusClass = value === 'expense' ? 'red-focus' : '';
    }
    this.setState(prevState => {
      return {
        input: {
          ...prevState.input,
          [key]: value
        }
      };
    });
  }
  handleSubmit(event) {
    if (this.state.input.description && this.state.input.value) {
      this.props.storeInputToGlobal({ ...this.state.input, key: uniqid() });
      this.setState(prevState => ({
        input: {
          type: prevState.input.type,
          description: '',
          value: ''
        }
      }));
      this.selectInput.focus();
    }
    event.preventDefault();
  }
  saveBudget = () => {
    this.storeBudgetToLocalStorage();
  };
  render() {
    return (
      <div className="input">
        <form className="input-wrapper" onSubmit={this.handleSubmit.bind(this)}>
          <select
            name="type"
            className={'add__type ' + this.removeFocusClass}
            value={this.state.input.type}
            onChange={this.handleChange.bind(this, 'type')}
            ref={select => {
              this.selectInput = select;
            }}
          >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input
            type="text"
            value={this.state.input.description}
            onChange={this.handleChange.bind(this, 'description')}
            className={'add__description ' + this.removeFocusClass}
            placeholder="Add description"
          />
          <input
            type="number"
            value={this.state.input.value}
            onChange={this.handleChange.bind(this, 'value')}
            className={'add__value ' + this.removeFocusClass}
            step="0.50"
            placeholder="Value"
          />
          <button
            type="submit"
            className={'add__btn ' + (this.removeFocusClass ? 'red' : '')}
          >
            <i className="icon-check" />
          </button>
          {/* <button className="save__btn" onClick={this.saveBudget}>
            <i className="icon-save-on-cloud" />
          </button> */}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    storeInputToGlobal: input => dispatch({ type: 'NEW-INPUT', value: input }),
    storeBudgetToLocalStorage: () => dispatch({ type: 'SAVE-BUDGET' })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
