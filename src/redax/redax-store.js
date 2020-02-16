import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import sitebarReducer from "./sitebarReducer";


let reducers = combineReducers(
    {
        dialogsPage: dialogsPageReducer,
        profilePage: profilePageReducer,
        sitebar: sitebarReducer
    }
);
let store = createStore(reducers);

export default store;