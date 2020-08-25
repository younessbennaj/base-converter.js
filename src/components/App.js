import React, { Component } from 'react';

//utils 
import { convertFrom10To, convertFromTo10 } from '../utils/base10Converter';

//components 
import Hello from './Hello';

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

    handleTextareaChange() {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Number Input */}
                    <input onChange={this.handleNumberChange} type="number" name="number" id="number" />
                    {/* Converter Options */}
                    <fieldset onChange={this.handleOptionChange}>
                        <input value={2} defaultChecked={true} type="radio" name="base" id="base2" />
                        <label htmlFor="base2">From base 2 to base 10</label><br />
                        <input value={10} type="radio" name="base" id="base10" />
                        <label htmlFor="base10">From base 10 to base 2</label><br />
                    </fieldset>
                    {/* Submit Button */}
                    <input type="submit" value="convert" /><br />
                    {/* Converter Result */}
                    <textarea onChange={this.handleTextareaChange} name="result" id="" cols="30" rows="5" value={this.state.result}></textarea><br />
                    {/* Copy Button */}
                    <button>copy</button>
                </form>
            </div>
        );
    }
}

export default App;
