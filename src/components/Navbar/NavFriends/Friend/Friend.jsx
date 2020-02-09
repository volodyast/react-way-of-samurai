import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return <div className={s.friends}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Misha_Collins_%2848478243687%29_%28cropped%29.jpg' className={s.imgDialos } />
        <NavLink to={'/dialogs/' + props.state.id} activeClassName={s.friend + ' ' + s.active }>  {props.state.name} </NavLink>
    </div>
}

export default Friend;