import {getAuth} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
};


export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth());
        Promise.all([promise]).then(
            () => {
                dispatch(initializedSuccess());
            })
    }
}


export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export default appReducer;