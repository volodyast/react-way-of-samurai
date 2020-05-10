const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
};

export const addMessage = (messageText) => {
    return {
        type: ADD_MESSAGE,messageText
    }
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 8,
                    message: action.messageText,
                    type: false
                }]
            }
    }
    return state;
}
export default dialogsPageReducer;