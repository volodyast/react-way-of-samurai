import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {addMessage, updatePostText} from "./redax/state";


export let rerenderEntireTree = (state, addPost, addMessage,updatePostText, updateMessageText) => {

    ReactDOM.render(<BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updatePostText={updatePostText} updateMessageText={updateMessageText}/>
        </BrowserRouter>, document.getElementById('root'));
}

serviceWorker.unregister();
