import store from './redax/redax-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


export const rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
        <App
            store={store}
        />
    </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();