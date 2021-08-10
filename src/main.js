import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Img from './assets/favicon.png';

document.head.querySelector('#favicon').href = Img;

ReactDOM.render(<App />, document.getElementById('app'));
