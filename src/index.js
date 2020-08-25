import React, { Component } from 'react';
import ReactDOM from "react-dom";

//utils
import sum from './sum';
import { convertFrom10To, convertFromTo10 } from './base10Converter';

//components 
import Hello from './Hello';

console.log(sum(3, 4));
console.log(convertFrom10To(45, 2));
console.log(convertFromTo10(101101, 2));

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
            <Hello />
        );
    }
}

// export default App;

const root = document.getElementById("root")

ReactDOM.render(
    <App />,
    root
)

