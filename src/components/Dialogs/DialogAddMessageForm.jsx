import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../utils/Validators/Validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLength(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter some message'
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default AddMessageFormRedux;