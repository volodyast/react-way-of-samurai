import state, {addMessage, addPost, updateMessageText, updatePostText} from './redax/state'
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state, addPost, addMessage, updatePostText, updateMessageText);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

