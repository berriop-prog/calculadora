import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import ButtonsRow from './components/ButtonsRow';
import ClearButton from './components/ClearButton';

class App extends Component {
  firstRow = [
    { id: 0, sym: '7', handlerClick: undefined },
    { id: 1, sym: '8', handlerClick: undefined },
    { id: 2, sym: '9', handlerClick: undefined },
    { id: 3, sym: '/', handlerClick: undefined },
  ]; // handlerClick={this.divide}

  secondRow = [
    { id: 4, sym: '4', handlerClick: undefined },
    { id: 5, sym: '5', handlerClick: undefined },
    { id: 6, sym: '6', handlerClick: undefined },
    { id: 7, sym: '*', handlerClick: undefined }, // handlerClick={this.multiply}
  ];
  thirdRow = [
    { id: 8, sym: '1', handlerClick: undefined },
    { id: 9, sym: '2', handlerClick: undefined },
    { id: 10, sym: '3', handlerClick: undefined },
    { id: 11, sym: '+', handlerClick: undefined }, // handlerClick={this.add}
  ];
  fourthRow = [
    { id: 12, sym: '.', handlerClick: undefined }, // handlerClick={this.addDecimal}
    { id: 13, sym: '0', handlerClick: undefined }, // handlerClick={this.addZeroToInput}
    { id: 14, sym: '=', handlerClick: undefined }, // handlerClick={this.evaluate}
    { id: 15, sym: '-', handlerClick: undefined }, // handlerClick={this.subtract}
  ];

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
    this.firstRow[0].handlerClick = this.addToInput;
    this.firstRow[1].handlerClick = this.addToInput;
    this.firstRow[2].handlerClick = this.addToInput;
    this.firstRow[3].handlerClick = this.divide;
    this.secondRow[0].handlerClick = this.addToInput;
    this.secondRow[1].handlerClick = this.addToInput;
    this.secondRow[2].handlerClick = this.addToInput;
    this.secondRow[3].handlerClick = this.multiply;
    this.thirdRow[0].handlerClick = this.addToInput;
    this.thirdRow[1].handlerClick = this.addToInput;
    this.thirdRow[2].handlerClick = this.addToInput;
    this.thirdRow[3].handlerClick = this.add;
    this.fourthRow[0].handlerClick = this.addDecimal;
    this.fourthRow[1].handlerClick = this.addZeroToInput;
    this.fourthRow[2].handlerClick = this.evaluate;
    this.fourthRow[3].handlerClick = this.subtract;
  }

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

          <ButtonsRow elements={this.firstRow} />
          <ButtonsRow elements={this.secondRow} />
          <ButtonsRow elements={this.thirdRow} />
          <ButtonsRow elements={this.fourthRow} />

          <div className="row">
            <ClearButton handlerClick={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
