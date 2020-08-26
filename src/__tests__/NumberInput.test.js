import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen, fireEvent } from '@testing-library/react';
//mimics the actual browser behavior
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

let input = null;

beforeEach(() => {
    //The code here will be executed before each tests in the file runs
    //console.log('Before test');

    //output the NumberInput input html in the console
    // screen.debug();

    //Provide our own HTMLElement container
    const container = document.createElement("div");
    //render the App
    render(<App />);

    input = screen.queryByLabelText('Number:');
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
        //assertion => expression that should be evaluated to true 
        //screen.getByText('Number:') => target element 
        //.toBeInTheDocument() => assertive function

    })

    test('Input element is correctly displayed', () => {

        //Search element with the role "textbox"
        expect(screen.getByLabelText('Number:')).toBeInTheDocument();
    })

    test('User should enter a number', () => {

        fireEvent.change(input, {
            target: { value: '45' },
        })

        expect(input.value).toBe('45');
    })

    test('User shouldn\'t enter a string', () => {

        screen.debug(input);

        userEvent.type(input, 'hello');

        screen.debug(input);

        expect(input.value).toBe('');

    })

})

