import React from 'react';

const InputBox = ({ value }) => {
    // const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <div className="wrapper" >
      <input name="inputBox1" type="number">{{value}}</input>
    <input name="inputBox2" type="number">{{value}}</input>
    </div>
    

  );
};

export default InputBox;