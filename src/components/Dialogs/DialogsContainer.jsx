import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redax/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStareToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        }
    }
}
const DialogsContainer = connect(mapStareToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;