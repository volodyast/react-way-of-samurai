import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageOfDialog from './MessageOfDialog/MessageOfDialog';

const Dialogs = (props) => {

    let dialogsItem = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesItem = props.state.messages.map(m => <MessageOfDialog message={m.message} type={m.type}/>);
    let newMessageItem = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageItem.current.value;
        props.updateMessageText(text);
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
                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageItem} value={props.state.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Dialogs;