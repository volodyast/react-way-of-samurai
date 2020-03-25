import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import sitebarReducer from "./sitebarReducer";
import userPageReducer from "./userPageReducer";
import authReducer from "./authReducer";


let reducers = combineReducers(
    {
        dialogsPage: dialogsPageReducer,
        profilePage: profilePageReducer,
        sitebar: sitebarReducer,
        UsersPage: userPageReducer,
        auth:authReducer
    }
);

let store = createStore(reducers);
window.store = store;
export default store;