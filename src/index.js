import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";


ReactDOM.render(
    <Router>
        <Header />
        <App />
    </Router>,
    document.getElementById('root')
);
