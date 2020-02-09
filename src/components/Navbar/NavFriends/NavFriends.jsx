import React from 'react';
import s from './NavFriends.module.css';
import Friend from './Friend/Friend';

const NavFriends = (props) => {
    let Friends = props.state.slice(0,3).map(m => <Friend state={m} />);
    return <div className={s.navFriends}>
        {Friends}
    </div>
}

export default NavFriends;