import React from 'react';
import {Redirect} from "react-router-dom";
import LoginRedaxForm from "./FormLogin";



const Login = (props) => {

    const onSubmit = (FormData) => {
        props.login(FormData.Login, FormData.Password, FormData.RememberMe)
    }

    return (
        props.isAuth ?
            <Redirect to="/profile"/>
            :
            (<div>
                <h3>login</h3>
                <LoginRedaxForm {...props} onSubmit={onSubmit}/>
            </div>)
    );
}

export default Login;