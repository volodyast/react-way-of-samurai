import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'Login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'Password'} component={'input'}/>
        </div>
        <div>
            <Field component={'input'} name={'RememberMe'} type={'checkbox'}/> remember me
        </div>
        <div>
            <button>send</button>
        </div>
    </form>);
}

const LoginRedaxForm = reduxForm({
    form: 'Login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (FormData) =>{
        props.setLogin(FormData.Login, FormData.Password, FormData.RememberMe)
    }

    return (
        <div>
            <h3>login</h3>
            <LoginRedaxForm onSubmit={onSubmit}/>
        </div>);
}

export default Login;