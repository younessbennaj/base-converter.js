import React from 'react';

const ConverterResult = ({ handleTextareaChange, handleCopy, result }) => {
    return (
        <>
            <textarea onChange={handleTextareaChange} name="result" id="" cols="30" rows="5" value={result}></textarea><br />
            <button onClick={handleCopy}>copy</button>
        </>
    );
}

export default ConverterResult;