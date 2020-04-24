import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {setLogin} from "../../redax/authReducer";

const mapStareToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStareToProps, {setLogin})
)(Login);