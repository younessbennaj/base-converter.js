import React from 'react';
import { render, screen, getByRole, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

// utils
import { convertFrom2To10 } from '../utils/base10Converter';

let form, group, numberInput, submit, result, copy;

beforeEach(() => {

    render(<App />);

    form = screen.getByRole('form');

    //option radio button group 
    group = screen.getByRole('group');

    numberInput = screen.queryByLabelText('Number:');

    //submit button
    submit = screen.getByRole('button', { name: /submit/i });

    //result textarea
    result = screen.getByRole('textbox', { name: /result:/i });

    //copy button to copy the result in the clipboard 
    copy = screen.getByRole('button', { name: /copy/i });

    navigator.clipboard = {
        writeText: jest.fn()
    };
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
        expect(result.value).toBe(convertFrom2To10(numberInput.value, 2));
    })

    test('Veriry if the copy button works well', () => {

        //User type a number
        userEvent.type(numberInput,
            '100010101'
        );

        //User click on the submit button 
        userEvent.click(submit);

        //User click on the copy button 
        userEvent.click(copy);

        //Very that the writeText() method is called when the user click
        expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    });

})