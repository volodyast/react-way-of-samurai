import React from 'react';
import {addMessage, updateNewMessageText} from "../../redax/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStareToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}

export default compose(
    connect(mapStareToProps, {updateNewMessageText,addMessage}),
    withAuthRedirect
)(Dialogs);