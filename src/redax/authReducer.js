import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    userId: null,
    email: "",
    login: "",
    isFetching: false,
    isAuth: false
};


export const getAuth = () => {
    return (dispatch) => {
        dispatch(setFetching(true));
        return authAPI.me().then(
            response => {
                dispatch(setFetching(false));
                if (response.data.resultCode == 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        authAPI.login(email, password, rememberMe, captcha).then(
            response => {
                dispatch(setFetching(false));
                if (response.data.resultCode === 0) {
                    dispatch(getAuth());
                } else {
                    let message = response.data.messages.length ? response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("Login", {_error: message}))
                }
            })
        dispatch(setFetching(false));
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setFetching(true));
        authAPI.logout().then(
            response => {
                dispatch(setFetching(false));
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
        dispatch(setFetching(false));
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    }
}
export const setFetching = (Users) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching: Users
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}
export default authReducer;