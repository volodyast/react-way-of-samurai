import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {setFetching, setUserData} from "../../redax/authReducer";

class HeaderApiContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(
            response => {
                this.props.setFetching(false);
                if(response.data.resultCode === 0){
                    let {id,login, email} = response.data.data;
                    this.props.setUserData(id,email, login)
                }
            })
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
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStareToProps, {setFetching, setUserData})(HeaderApiContainer);

export default HeaderContainer;