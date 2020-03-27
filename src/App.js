import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import ButtonsRow from './components/ButtonsRow';

const firstRow = [
  { id: 0, sym: '7' },
  { id: 1, sym: '8' },
  { id: 2, sym: '9' },
  { id: 3, sym: '/' },
];
const secondRow = [
  { id: 4, sym: '4' },
  { id: 5, sym: '5' },
  { id: 6, sym: '6' },
  { id: 7, sym: '*' },
];
const thirdRow = [
  { id: 8, sym: '1' },
  { id: 9, sym: '2' },
  { id: 10, sym: '3' },
  { id: 11, sym: '+' },
];
const fourthRow = [
  { id: 12, sym: '.' },
  { id: 13, sym: '0' },
  { id: 14, sym: '=' },
  { id: 15, sym: '-' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input></Input>
          </div>
          <ButtonsRow elements={firstRow} />
          <ButtonsRow elements={secondRow} />
          <ButtonsRow elements={thirdRow} />
          <ButtonsRow elements={fourthRow} />
        </div>
      </div>
    );
  }
}

export default App;
