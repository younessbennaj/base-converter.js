import React from 'react';

const NumberInput = ({ handleNumberChange, value, children }) => {
    return (
        <>
            <label htmlFor="number" htmlFor="number">{children}</label><br />
            <input value={value} onChange={handleNumberChange} name="number" id="number" />
        </>
    );
}

export default NumberInput;