import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Increase the limit to 20 listeners (adjust as necessary)
emitter.setMaxListeners(20);

root.render(
    <App/>
)