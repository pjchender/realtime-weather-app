import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './WeatherApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeatherApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// 將 unregister 改成 register
serviceWorker.register();
