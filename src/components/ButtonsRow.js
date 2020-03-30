import React from 'react';
import Button from './Button';

//componente funcional
const ButtonsRow = (props) => {
 return (
    <div className="row">
      {props.elements.map((element) => (
        <Button handlerClick={element.handlerClick} key={element.id}>{element.sym}</Button>
      ))}
    </div>
  );
};

export default ButtonsRow;
