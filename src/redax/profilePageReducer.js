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

const profilePageReducer = (state =initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            break
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            break
    }
    return state;
}
export  default profilePageReducer;