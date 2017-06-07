import React from 'react';
import ReactDOM from 'react-dom';
import App from './calculator/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
