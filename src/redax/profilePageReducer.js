import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'How are you?', likesCount: 23},
        {id: 3, message: 'How you?', likesCount: 23}
    ],
    newPostText: 'it=kamasutra.com',
    profile: null,
    status: ''
};


export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.result === 0)
                getStatus(status);
        });
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_USER_STATUS, status
    }
}
export const addPost = (postText) => {
    return {
        type: ADD_POST, postText
    }
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {
                    id: 5,
                    message: action.postText,
                    likesCount: 0
                }]
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
    }
    return state;
}
export default profilePageReducer;