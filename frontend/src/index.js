import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';
import { createBrowserHistory } from "history";

import { Router } from "react-router";
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        {/* to get match to remember url path */}
        <Router history={history}>
            <App /> 
        </Router>
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
