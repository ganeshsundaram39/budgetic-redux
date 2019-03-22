import React, { Component } from 'react';
import Header from './components/Header/Header';
import Input from './containers/Input/Input';
import Display from './components/Display/Display';
export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Input />
        <Display />
      </>
    );
  }
}
