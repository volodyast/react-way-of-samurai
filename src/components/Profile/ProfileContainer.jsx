import React from 'react';
import Profile from "./Profile";
import {getProfile, getStatus, setUserProfile, updateStatus} from '../../redax/profilePageReducer'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 6667;
        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUserProfile,getProfile, getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);