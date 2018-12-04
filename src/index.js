import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { hydrate } from 'react-dom'

hydrate(<App />, document.getElementById('root'));
registerServiceWorker();
