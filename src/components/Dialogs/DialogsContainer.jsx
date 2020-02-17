import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageOfDialog from './MessageOfDialog/MessageOfDialog';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redax/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }
    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage}
                    updateNewMessageText={onMessageChange} NewMessageText={state.dialogsPage.newMessageText}/>
}

export default DialogsContainer;