import React, { Component } from 'react';

export default class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      finalValue: '',
      pickValue: 'None'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value1: e.target.value });
  }
  handleChange1(e) {
    this.setState({ value2: e.target.value });
  }

  handlePick(e) {
    this.setState({ pickValue: e.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Number:</label>
          <input
            type='number'
            value={this.state.value1}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Second Number:</label>
          <input
            type='number'
            value={this.state.value2}
            onChange={this.handleChange1}
          ></input>
          <br />
          <label>Pick the Operation</label>
          <select value={this.state.pickValue} onChange={this.handlePick}>
            <option value='None'>None</option>
            <option value='Addition'>Addition</option>
            <option value='Subtraction'>Subtraction</option>
            <option value='Division'>Division</option>
            <option value='Multiplication'>Multiplication</option>
          </select>
          <br />
          <input type='submit' value='Calculate' onClick={this.handleSubmit} />
        </form>
        <label>Final Result:</label>
        <input
          type='text'
          value={this.state.finalValue}
          readOnly
          //   onChange={this.handleChange1}
        ></input>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    const firstValue = this.state.value1;
    const secondValue = this.state.value1;
    const pickedOperator = this.state.pickValue;
    var finalResult = 0;

    if (pickedOperator === 'Addition') {
      finalResult = parseInt(firstValue) + parseInt(secondValue);
    }
    if (pickedOperator === 'Subtraction') {
      finalResult = parseInt(secondValue) - parseInt(firstValue);
    }
    if (pickedOperator === 'Division') {
      finalResult = parseInt(firstValue) / parseInt(secondValue);
    }
    if (pickedOperator === 'Multiplication') {
      finalResult = parseInt(firstValue) * parseInt(secondValue);
    }

    console.log('First Number is ' + firstValue);
    console.log('Second Number is ' + secondValue);

    this.setState({ finalValue: finalResult });
    // console.log('Final result is ' + finalresult);
    console.log('Picked Operator is ' + pickedOperator);

    // e.preventDefault();
  }
}
