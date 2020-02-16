import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sitebarReducer from "./sitebarReducer";


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
            newMessageText: ''
        },
        sitebar: [
            {id: 1, name: 'Толік'},
            {id: 2, name: 'Дімич'},
            {id: 3, name: 'Паша'},
            {id: 4, name: 'Коля'},
            {id: 5, name: 'Саня'},
            {id: 6, name: 'Міша'}]
    },

    _subscribe() {
        console.log("нічого");
    },
    subscribe(observer) {
        this._subscribe = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action)
        this._subscribe()
    }
}

export default store;
Window.store = store;