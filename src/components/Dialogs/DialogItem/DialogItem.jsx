import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Misha_Collins_%2848478243687%29_%28cropped%29.jpg' className={s.imgDialos} />
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;