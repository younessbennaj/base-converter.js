import React from 'react';
import { render, screen, getByRole, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

// utils
import { convertFromTo10 } from '../utils/base10Converter';

let form, group, numberInput, submit;

beforeEach(() => {

    render(<App />);

    form = screen.getByRole('form');

    //option radio button group 
    group = screen.getByRole('group');

    numberInput = screen.queryByLabelText('Number:');

    submit = screen.getByRole('button', { name: /submit/i });

    result = screen.getByRole('textbox', { name: /result:/i });

})

describe('Converter form', () => {
    // test suite block

    test('Converter Form is displayed in the DOM', () => {

        expect(form).toBeInTheDocument();

    })

    test('Converter form should contain elements', () => {

        expect(form).toContainElement(group);
        expect(form).toContainElement(numberInput);
        expect(form).toContainElement(submit);

    })

    test('Converter form should return a result inside the textarea when it is submit', () => {

        //User type a number
        userEvent.type(numberInput,
            '100010101'
        );

        //User click on the submit button 
        userEvent.click(submit);

        //We should return a value inside the result textarea 
        expect(result.value).toBe(convertFromTo10(numberInput.value, 2));
    })
})