import React from 'react';
import Button from './Button';

const ButtonsPerRow = (props) => {
  return props.elements.map((element) => (
    <Button handlerClick={element.handlerClick} key={element.id}>
      {element.sym}
    </Button>
  ));
};

export default ButtonsPerRow;
