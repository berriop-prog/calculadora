import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import ButtonsRow from './components/ButtonsRow';
import ClearButton from './components/ClearButton';
import { rows } from './rows';

let calcRows = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
    this.assignFunction();
  }

  assignFunction = () => {
    calcRows = rows.map((row) => {
      if (row.sym === '+') {
        return { ...row, handlerClick: this.add };
      } else if (row.sym === '-') {
        return { ...row, handlerClick: this.subtract };
      } else if (row.sym === '*') {
        return { ...row, handlerClick: this.multiply };
      } else if (row.sym === '/') {
        return { ...row, handlerClick: this.divide };
      } else if (row.sym === '=') {
        return { ...row, handlerClick: this.evaluate };
      } else if (row.sym === '.') {
        return { ...row, handlerClick: this.addDecimal };
      } else if (row.sym === '0') {
        return { ...row, handlerClick: this.addZeroToInput };
      } else {
        return { ...row, handlerClick: this.addToInput };
      }
    });
   
  };

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (val) => {
    //only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== '') {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'plus',
    });
  };

  subtract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'subtract',
    });
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'multiply',
    });
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'divide',
    });
  };

  evaluate = () => {
    this.setState({ currentNumber: this.state.input }, () => {
      if (this.state.operator === 'plus') {
        console.log(this.state.previousNumber, this.state.currentNumber);
        this.setState({
          input:
            parseInt(this.state.previousNumber) +
            parseInt(this.state.currentNumber),
        });
      } else if (this.state.operator === 'subtract') {
        this.setState({
          input:
            parseInt(this.state.previousNumber) -
            parseInt(this.state.currentNumber),
        });
      } else if (this.state.operator === 'multiply') {
        this.setState({
          input:
            parseInt(this.state.previousNumber) *
            parseInt(this.state.currentNumber),
        });
      } else if (this.state.operator === 'divide') {
        this.setState({
          input:
            parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber),
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <ButtonsRow elements={calcRows} />

          <div className="row">
            <ClearButton handlerClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
