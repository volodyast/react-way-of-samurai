import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageOfDialog from './MessageOfDialog/MessageOfDialog';
import {addMessage} from "../../redax/state";



const Dialogs = (props) => {
    
    let dialogsItem = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messagesItem = props.state.messages.map(m => <MessageOfDialog message={m.message} type = {m.type} />);
let newMessageItem = React.createRef();
let addMessage = () => {
    let text=newMessageItem.current.value;
    props.addMessage(text);
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
           <div> <div className={s.messages}>
                {messagesItem}
            </div>
               <div>
                   <div>
                       <textarea ref={newMessageItem}></textarea>
                   </div>
                   <div>
                       <button onClick={addMessage}>Send message</button>
                   </div>
               </div>
           </div>
        </div>);
}

export default Dialogs;