const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageElement = {
                id: 8,
                message: state.newMessageText,
                type: true
            };
            state.messages.push(newMessageElement);
            state.newMessageText = '';
            break
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break
    }
    return state;
}
export default dialogsPageReducer;