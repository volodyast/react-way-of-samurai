import React from 'react';
import {connect} from "react-redux";
import NavFriends from "./NavFriends";


const mapStareToProps = (state) => {
    return {
        sitebar: state.sitebar
    }
}

const NavFriendsContainer = connect(mapStareToProps, {})(NavFriends);


export default NavFriendsContainer;