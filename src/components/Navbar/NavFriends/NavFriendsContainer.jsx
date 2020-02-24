import React from 'react';
import {connect} from "react-redux";
import NavFriends from "./NavFriends";


const mapStareToProps = (state) => {
    return {
        sitebar: state.sitebar
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
const NavFriendsContainer = connect(mapStareToProps, mapDispatchToProps)(NavFriends);


export default NavFriendsContainer;