const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
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
    },

    _subscribe(observer) {
        console.log("нічого");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscribe();
    },
    addMessage() {
        let newMessageElement = {
            id: 8,
            message: this._state.dialogsPage.newMessageText,
            type: true
        };
        this._state.dialogsPage.messages.push(newMessageElement);
        this._state.dialogsPage.newMessageText = '';
        this._subscribe();
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._subscribe();
    },
    updateMessageText(newText) {
        console.log(this._state)
        this._state.dialogsPage.newMessageText = newText;
        this._subscribe();
    },

    subscribe(observer) {
        this._subscribe = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this.addPost()
                break
            case ADD_MESSAGE:
                this.addMessage()
                break
            case UPDATE_POST_TEXT:
                this.updatePostText(action.newText)
                break
            case UPDATE_MESSAGE_TEXT:
                this.updateMessageText(action.newText)
                break

        }
    }
}



export default store;
Window.store = store;