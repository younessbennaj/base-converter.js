import React from 'react';

const ConverterForm = ({ children, handleSubmit }) => {
    return (
        <form aria-label="form" onSubmit={handleSubmit}>
            {children}
        </form>
    );
}

export default ConverterForm;