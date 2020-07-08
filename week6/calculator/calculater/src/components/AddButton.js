import React from 'react';
// import {number1, number2} from './components/CalculatorForm'

const Sum1 =({number1, number2} ) => {
  const Sum1 = Number(number1) + Number(number2)
  return (
   
  <h1>{Sum1}</h1>
   
    
  );
};

export default Sum1;