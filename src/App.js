import React, { Component } from 'react';
import BodyComponent from './Components/BodyComponent';

export default class MainApp extends Component {
  render() {
    return (
      <div>
        <h1>React Calculator</h1>
        <BodyComponent />
      </div>
    );
  }
}
