import React from 'react';
import s from './MessageOfDialog.module.css';

const MessageOfDialog = (props) => {
  console.log(props.type);
    return (<div className={ props.type? s.me : s.notMe + " " + s.message}>
        {props.message}
    </div>);
}

export default MessageOfDialog;