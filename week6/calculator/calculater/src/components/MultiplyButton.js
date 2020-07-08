import React from 'react';

const Multiply =({number1, number2} ) => {
  const Multiply = Number(number1) * Number(number2)
  return (
   
  <h1>{Multiply}</h1>
   
    
  );
};

export default Multiply;