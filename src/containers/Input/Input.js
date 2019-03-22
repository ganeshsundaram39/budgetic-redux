import React, { Component } from 'react';
import './Input.css';
export default class Input extends Component {
  state = {
    input: {
      type: '',
      description: ''
    }
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="input">
        <div className="input-wrapper">
          <select name="type" className="input-type">
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input
            type="text"
            value={this.state.input.description}
            onChange={this.handleChange}
            className="add__description"
          />
          <input
            type="number"
            value={this.state.input.type}
            onChange={this.handleChange}
            className="add__value"
          />
          <button className="add__btn">
            <ion-icon name="checkmark-circle-outline" />
          </button>
        </div>
      </div>
    );
  }
}
