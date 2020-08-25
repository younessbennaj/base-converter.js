import React from 'react';

const NumberInput = ({ handleNumberChange }) => {
    return (
        <input onChange={handleNumberChange} type="number" name="number" id="number" />
    );
}

export default NumberInput;