import React, { Component } from 'react';

//utils
import { convertFrom10To2, convertFrom2To10 } from '../utils/base10Converter';

//components
import ConverterForm from './ConvertForm';
import NumberInput from './NumberInput';
import ConverterOptions from './ConverterOptions';
import ConverterResult from './ConverterResult';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            baseFrom: 2,
            baseTo: 10,
            result: ''
        }
        //Bind 'this' to the component instance inside event handlers
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    //submit event handler
    handleSubmit(e) {
        const { number, baseFrom, baseTo } = this.state;
        e.preventDefault();
        const result = baseFrom === 2 ? convertFrom2To10(number, baseFrom) : convertFrom10To2(number, baseTo);
        this.setState({ result });
    }

    //input number event handler
    handleNumberChange({ target: { value: number } }) {
        //Be sure that only number will update the state
        if (isNaN(number)) return;
        this.setState({ number });
    }

    //input radio converter option handler
    handleOptionChange({ target: { value: base } }) {
        let baseFrom, baseTo;
        baseFrom = base === '10' ? 10 : 2;
        baseTo = base === '10' ? 2 : 10;
        this.setState({ baseFrom, baseTo });
    }

    //Copy the textarea content 
    handleCopy(e) {
        const { result } = this.state
        navigator.clipboard.writeText(result);
    }

    handleTextareaChange(e) {

    }

    render() {
        return (
            <div className="converter">
                <ConverterForm handleSubmit={this.handleSubmit}>
                    <NumberInput value={this.state.number} handleNumberChange={this.handleNumberChange}>Number:</NumberInput>
                    <ConverterOptions handleOptionChange={this.handleOptionChange} />
                    <input className="btn" type="submit" value="convert" /><br />
                    <ConverterResult result={this.state.result} handleCopy={this.handleCopy} handleTextareaChange={this.handleTextareaChange} />
                </ConverterForm>
            </div>
        );
    }
}

export default App;
