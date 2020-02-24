const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'How are you?', likesCount: 23},
        {id: 3, message: 'How you?', likesCount: 23}
    ],
    newPostText: 'it=kamasutra.com'
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT, newText: text
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
    }
    return state;
}
export default profilePageReducer;