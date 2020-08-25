import React from 'react';

const NumberInput = ({ handleNumberChange, value }) => {
    return (
        <input value={value} onChange={handleNumberChange} name="number" id="number" />
    );
}

export default NumberInput;