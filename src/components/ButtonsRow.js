import React, { Component } from 'react';
import ButtonsPerRow from './ButtonsPerRow';

//componente funcional
class ButtonsRow extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    let rowElements = [];
    let row = [];
    for (let i = 0; i < 4; i++) {
      rowElements = this.props.elements.filter(
        (element, index) => index >= 4 * i && index <= 4 * i + 3
      );
      row = [
        ...row,
        <div className="row" key={`row-${i}`}>
          <ButtonsPerRow elements={rowElements} />
        </div>,
      ];
    }
    return row;
  }
}

export default ButtonsRow;
