import React from 'react';

const ConverterForm = ({ children, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
}

export default ConverterForm;