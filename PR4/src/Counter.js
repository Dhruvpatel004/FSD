import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleIncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const resetCount = () => {
        setCount(0);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={resetCount}>Reset</button>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleIncrementFive}>Increment 5</button>
            </div>
            <br />
            <div>
                <h1>Welcome to CHARUSAT!!!</h1>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                </div>
            </div>
        </>
    );
}

export default Counter;
