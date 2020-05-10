import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utils/Validators/Validators";

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostBody" placeholder='Enter some post text'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>)
}

const AddPostFormRedux = reduxForm({form: "profileAddMessageForm"})(AddPostForm);

export default AddPostFormRedux;