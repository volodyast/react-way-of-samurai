import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost} from './redax/state'
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter> <App state={state} addPost={addPost} addMessage={addMessage}/></BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
