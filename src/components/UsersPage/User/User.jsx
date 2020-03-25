import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';


const User = (props) => {
    return (
        <div className={s.item}>
            <spam>
                <NavLink to={'/profile/'+props.user.id}>
                    <img
                        src={props.user.uniqueUrlName ? props.user.uniqueUrlName : 'https://www.kodefork.com/static/users/images/user.png'}
                        className={s.userPhoto}/>
                </NavLink>
                <div>
                    <button
                        onClick={props.user.followed ? () => props.unfollowClick(props.user.id) : () => props.followClick(props.user.id)}>
                        {props.user.followed ? 'follow' : 'unfollow'}
                    </button>
                </div>
            </spam>
            <spam>
                <spam>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </spam>
                <span><div>props.user.location.city</div>
                    <div>props.user.location.country</div></span>
            </spam>
        </div>
    )
}

export default User;