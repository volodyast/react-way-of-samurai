import React from 'react';
import {addMessage} from "../../redax/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStareToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
}

export default compose(
    connect(mapStareToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);