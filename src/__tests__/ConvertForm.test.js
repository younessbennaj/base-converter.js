import React from 'react';
import { render, screen, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

describe('Converter form', () => {
    // test suite block

    render(<App />);

    const form = screen.getByRole('form');

    //option radio button group 
    const group = screen.getByRole('group');

    const numberInput = screen.getByLabelText('Number:');

    const submit = screen.getByRole('button', { name: /submit/i });

    test('Converter Form is displayed in the DOM', () => {

        expect(form).toBeInTheDocument();

    })

    test('Converter form should contain elements', () => {

        expect(form).toContainElement(group);
        expect(form).toContainElement(numberInput);
        expect(form).toContainElement(submit);

    })
})