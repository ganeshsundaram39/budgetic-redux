import React, { Component } from 'react';
import './Input.css';
import { connect } from 'react-redux';
var uniqid = require('uniqid');
class Input extends Component {
  state = {
    input: {
      type: 'income',
      description: '',
      value: 0
    }
  };
  handleChange(key, event) {
    const value = event.target.value;
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
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="input">
        <form className="input-wrapper" onSubmit={this.handleSubmit.bind(this)}>
          <select
            name="type"
            className="input-type"
            value={this.state.input.type}
            onChange={this.handleChange.bind(this, 'type')}
          >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input
            type="text"
            value={this.state.input.description}
            onChange={this.handleChange.bind(this, 'description')}
            className="add__description"
          />
          <input
            type="number"
            value={this.state.input.value}
            onChange={this.handleChange.bind(this, 'value')}
            className="add__value"
          />
          <button type="submit" className="add__btn">
            <ion-icon name="checkmark-circle-outline" />
          </button>
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
    storeInputToGlobal: input => dispatch({ type: 'NEW-INPUT', value: input })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
