import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageOfDialog from './MessageOfDialog/MessageOfDialog';
import AddMessageFormRedux from "./DialogAddMessageForm";

const Dialogs = (props) => {

    let dialogsItem = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesItem = props.dialogsPage.messages.map(m => <MessageOfDialog message={m.message} type={m.type}/>);

    const AddNewMessage = (value) => {
        props.addMessage(value.newMessageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesItem}
                </div>
                <AddMessageFormRedux onSubmit={AddNewMessage} />
            </div>
        </div>);
}

    export default Dialogs;