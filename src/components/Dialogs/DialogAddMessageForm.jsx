import {Field, reduxForm} from "redux-form";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field component="textarea" name="newMessageBody" placeholder='Enter some message'/>
        </div>
        <div>
        <button>Send message</button>
    </div>
    </form>)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default  AddMessageFormRedux;