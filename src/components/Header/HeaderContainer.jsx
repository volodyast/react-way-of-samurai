import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {getAuth} from "../../redax/authReducer";

class HeaderApiContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

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
        login: state.auth.login,
        userId: state.auth.userId
    }
}

const HeaderContainer = connect(mapStareToProps, {getAuth})(HeaderApiContainer);

export default HeaderContainer;