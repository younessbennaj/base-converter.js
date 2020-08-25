import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberInput from '../components/NumberInput';

let container = null;

beforeEach(() => {
    //The code here will be executed before each tests in the file runs
    //console.log('Before test');

    //output the NumberInput input html in the console
    // screen.debug();

    //Provide our own HTMLElement container as input should be inside of a <form /> element
    const form = document.createElement("form");
    //render the number input componenet
    render(<NumberInput>Number:</NumberInput>, { container: document.body.appendChild(form) });
})

afterEach(() => {
    // "    "   " after each testes in the files completes
})


describe('Number input component', () => {
    //test suite block here
    //group together related test cases 

    test('Display children element as input label', () => {
        //test case block here

        //Search element by visible text with getByText() method
        expect(screen.getByText('Number:')).toBeInTheDocument();

    })

    test('Input element is correctly displayed', () => {

        //Search element with the role "textbox"
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })

})

