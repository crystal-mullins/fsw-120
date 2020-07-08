import React from 'react';

const Subtract =({number1, number2} ) => {
  const Subtract = Number(number1) - Number(number2)
  return (
   
  <h1>{Subtract}</h1>
   
    
  );
};

export default Subtract;