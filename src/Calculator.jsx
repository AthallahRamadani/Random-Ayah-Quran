import React, { useState } from 'react';
import './Calculator.css'; // Tambahkan ini untuk memisahkan CSS (opsional)

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        
        
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        

        <button onClick={() => handleClick('0')}>0</button>
        
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
