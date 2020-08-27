import React from 'react';

const ConverterOptions = ({ handleOptionChange }) => {
    return (
        <fieldset onChange={handleOptionChange}>
            <input value={2} defaultChecked={true} type="radio" name="base" id="base2" />
            <label className="label" htmlFor="base2">From base 2 to base 10</label><br />
            <input value={10} type="radio" name="base" id="base10" />
            <label className="label" htmlFor="base10">From base 10 to base 2</label><br />
        </fieldset>
    );
}

export default ConverterOptions;