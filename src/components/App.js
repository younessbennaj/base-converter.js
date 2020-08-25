import React, { Component } from 'react';

//components 
import Hello from './Hello';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            baseFrom: 10,
            baseTo: 2,
            result: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    {/* Number Input */}
                    <input type="number" name="number" id="number" />
                    {/* Converter Options */}
                    <fieldset>
                        <input type="radio" name="base" id="base2" />
                        <label htmlFor="base2">From base 2 to base 10</label><br />
                        <input type="radio" name="base" id="base10" />
                        <label htmlFor="base10">From base 10 to base 2</label><br />
                    </fieldset>
                    {/* Submit Button */}
                    <input type="submit" value="convert" /><br />
                    {/* Converter Result */}
                    <textarea name="result" id="" cols="30" rows="5"></textarea><br />
                    {/* Copy Button */}
                    <button>copy</button>
                </form>
            </div>
        );
    }
}

export default App;
