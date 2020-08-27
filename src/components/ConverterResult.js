import React from 'react';

const ConverterResult = ({ handleTextareaChange, handleCopy, result }) => {
    return (
        <>
            <label className="label" htmlFor="result">Result:</label><br />
            <textarea className="converter__textarea" onChange={handleTextareaChange} name="result" id="result" cols="30" rows="5" value={result}></textarea><br />
            <button className="btn" onClick={handleCopy}>copy</button>
        </>
    );
}

export default ConverterResult;