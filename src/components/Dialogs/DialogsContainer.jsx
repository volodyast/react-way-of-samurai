import React from 'react';
import {addMessage, updateNewMessageText} from "../../redax/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStareToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}

const DialogsContainer = connect(mapStareToProps, {updateNewMessageText,addMessage})(Dialogs)

export default DialogsContainer;