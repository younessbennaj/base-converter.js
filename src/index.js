import React, { Component } from 'react';
import ReactDOM from "react-dom";

//utils
import sum from './utils/sum';
import { convertFrom10To, convertFromTo10 } from './utils/base10Converter';

//components 
import App from './components/App';

// export default App;

const root = document.getElementById("root")

ReactDOM.render(
    <App />,
    root
)

