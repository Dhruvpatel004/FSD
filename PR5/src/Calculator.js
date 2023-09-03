import React, { useState } from 'react'
import './calculator.css';
export default function Calculater() {

    const [input, setInput] = useState('0');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                 // eslint-disable-next-line 
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'AC') {
            setInput('0');
        } else {
            if (input === '0') {
                setInput(value);
            }
            else {

                setInput(input + value);
            }
        }
    };
    return (
        <div className="calculator">
            <div className="calculator__output" >{input}</div>
            <div className="calculator__keys">
                <button className="calculator__key calculator__key--operator" onClick={() => handleButtonClick('+')}>+</button>
                <button className="calculator__key calculator__key--operator" onClick={() => handleButtonClick('-')}>-</button>
                <button className="calculator__key calculator__key--operator" onClick={() => handleButtonClick('*')}>&times;</button>
                <button className="calculator__key calculator__key--operator" onClick={() => handleButtonClick('/')}>÷</button>
                <button className="calculator__key" onClick={() => handleButtonClick('7')}>7</button>
                <button className="calculator__key" onClick={() => handleButtonClick('8')}>8</button>
                <button className="calculator__key" onClick={() => handleButtonClick('9')}>9</button>
                <button className="calculator__key" onClick={() => handleButtonClick('4')}>4</button>
                <button className="calculator__key" onClick={() => handleButtonClick('5')}>5</button>
                <button className="calculator__key" onClick={() => handleButtonClick('6')}>6</button>
                <button className="calculator__key" onClick={() => handleButtonClick('1')}>1</button>
                <button className="calculator__key" onClick={() => handleButtonClick('2')}>2</button>
                <button className="calculator__key" onClick={() => handleButtonClick('3')}>3</button>
                <button className="calculator__key" onClick={() => handleButtonClick('0')}>0</button>
                <button className="calculator__key" onClick={() => handleButtonClick('.')}>.</button>
                <button className="calculator__key" onClick={() => handleButtonClick('AC')}>AC</button>
                <button className="calculator__key calculator__key--enter" onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    )
}