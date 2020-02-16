const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

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

const profilePageReducer = (state, action) =>{
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