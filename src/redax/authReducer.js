import {usersAPI} from "../api/api";

const SET_USER_DATA  = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    userId:null,
    email: "",
    login:"",
    isFetching: false,
    isAuth:false
};

export const getAuth = () => {
    return (dispatch) => {
        dispatch(setFetching(true));
        usersAPI.getAuth().then(
            data => {
                dispatch(setFetching(false));
                if(data.resultCode == 0){
                    let {id,login, email} = data.data;
                    dispatch(setUserData(id,email, login))
                }
            })
    }
}
export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data:{userId, email, login}
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
                ...action.data,
                isAuth: true
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