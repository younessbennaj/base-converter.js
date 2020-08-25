import React, { Component } from 'react';

//utils
import { convertFrom10To, convertFromTo10 } from '../utils/base10Converter';

//components
import ConverterForm from './ConvertForm';
import NumberInput from './NumberInput';
import ConverterOptions from './ConverterOptions';
import ConverterResult from './ConverterResult';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
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
        const result = baseFrom === 2 ? convertFromTo10(number, baseFrom) : convertFrom10To(number, baseTo);
        this.setState({ result });
    }

    //input number event handler
    handleNumberChange({ target: { value: number } }) {
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
            <div>
                <ConverterForm handleSubmit={this.handleSubmit}>
                    <NumberInput handleNumberChange={this.handleNumberChange} />
                    <ConverterOptions handleOptionChange={this.handleOptionChange} />
                    <input type="submit" value="convert" /><br />
                    <ConverterResult result={this.state.result} handleCopy={this.handleCopy} handleTextareaChange={this.handleTextareaChange} />
                </ConverterForm>
            </div>
        );
    }
}

export default App;
