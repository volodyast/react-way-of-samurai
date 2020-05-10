import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {login, logout} from "../../redax/authReducer";

const mapStareToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStareToProps, {login, logout})(Login);