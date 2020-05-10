import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {logout} from "../../redax/authReducer";

class HeaderApiContainer extends React.Component {

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props} />
        </>
    }
}

const mapStareToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStareToProps, {logout})(HeaderApiContainer);

export default HeaderContainer;