import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './containers/App';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render((
    <Router basename="/todoList">
        <App />
    </Router>
), document.getElementById('root'));
