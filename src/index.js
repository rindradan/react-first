import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './assets/bootstrap/bootstrap.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(faStroopwafel, faBars, faTimes);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
