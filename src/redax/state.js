import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi', likesCount: 0},
            {id: 2, message: 'How are you?', likesCount: 23},
            {id: 3, message: 'How you?', likesCount: 23}
        ],
        newPostText: 'it=kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Толік'},
            {id: 2, name: 'Дімич'},
            {id: 3, name: 'Паша'},
            {id: 4, name: 'Коля'},
            {id: 5, name: 'Саня'},
            {id: 6, name: 'Міша'}
        ],
        messages: [
            {id: 1, message: 'Hi', type: true},
            {id: 2, message: 'How are you?', type: false},
            {id: 3, message: 'What are you doing?', type: false},
            {id: 4, message: 'WAYdD', type: true},
            {id: 5, message: 'Are you sleep?', type: false},
            {id: 6, message: 'What up', type: true}
        ],
        newMessageText: 'it=kamasutra.com'
    },
    sitebar: [
        {id: 1, name: 'Толік'},
        {id: 2, name: 'Дімич'},
        {id: 3, name: 'Паша'},
        {id: 4, name: 'Коля'},
        {id: 5, name: 'Саня'},
        {id: 6, name: 'Міша'}]
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state, addPost, addMessage, updatePostText, updateMessageText);
}
export let addMessage = (newMessage) => {
    let newMessageElement = {
        id: 8,
        message: newMessage,
        type: true
    };
    state.dialogsPage.messages.push(newMessageElement);
    rerenderEntireTree(state, addPost, addMessage, updatePostText, updateMessageText);
}

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state, addPost, addMessage, updatePostText);
}
export let updateMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state, addPost, addMessage, updatePostText, updateMessageText);
}

export default state