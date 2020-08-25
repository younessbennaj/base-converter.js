import React, { Component } from 'react';

//utils 
import { convertFrom10To } from '../utils/base10Converter';

//components 
import Hello from './Hello';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 4,
            baseFrom: 2,
            baseTo: 10,
            result: ''
        }
        //Bind 'this' to the component instance inside event handlers
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //submit event handler
    handleSubmit(e) {
        const { number, baseFrom } = this.state;
        e.preventDefault();
        const result = convertFrom10To(number, baseFrom);
        this.setState({ result });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Number Input */}
                    <input value={this.state.number} type="number" name="number" id="number" />
                    {/* Converter Options */}
                    <fieldset>
                        <input checked type="radio" name="base" id="base2" />
                        <label htmlFor="base2">From base 2 to base 10</label><br />
                        <input type="radio" name="base" id="base10" />
                        <label htmlFor="base10">From base 10 to base 2</label><br />
                    </fieldset>
                    {/* Submit Button */}
                    <input type="submit" value="convert" /><br />
                    {/* Converter Result */}
                    <textarea name="result" id="" cols="30" rows="5" value={this.state.result}></textarea><br />
                    {/* Copy Button */}
                    <button>copy</button>
                </form>
            </div>
        );
    }
}

export default App;
