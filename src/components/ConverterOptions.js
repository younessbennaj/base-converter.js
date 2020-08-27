import React from 'react';

const ConverterOptions = ({ handleOptionChange }) => {
    return (
        <fieldset onChange={handleOptionChange}>
            <input value={JSON.stringify({ from: 2, to: 10 })} defaultChecked={true} type="radio" name="base" id="base2" />
            <label className="label" htmlFor="base2">From base 2 to base 10</label><br />
            <input value={JSON.stringify({ from: 10, to: 2 })} type="radio" name="base" id="base10" />
            <label className="label" htmlFor="base10">From base 10 to base 2</label><br />
            <input value={JSON.stringify({ from: 10, to: 16 })} type="radio" name="base" id="base16" />
            <label className="label" htmlFor="base10">From base 10 to base 16</label><br />
        </fieldset>
    );
}

export default ConverterOptions;