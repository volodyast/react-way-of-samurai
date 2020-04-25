import {Field, reduxForm} from "redux-form";
import React from "react";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field component="textarea" name="newPostBody" placeholder='Enter some post text'/>
        </div>
        <div>
        <button>Send message</button>
    </div>
    </form>)
}

const AddPostFormRedux = reduxForm({form: "profileAddMessageForm"})(AddPostForm);

export default  AddPostFormRedux;