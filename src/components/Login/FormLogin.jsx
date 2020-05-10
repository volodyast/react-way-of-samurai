import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/Validators/Validators";
import React from "react";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    console.log(props)
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'Login'} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'Password'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name={'RememberMe'} type={'checkbox'} validate={[]}/> remember me
        </div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>
        }
        <div>
            <button>send</button>
        </div>
    </form>);
}

const LoginRedaxForm = reduxForm({
    form: 'Login'
})(LoginForm)

export default LoginRedaxForm;