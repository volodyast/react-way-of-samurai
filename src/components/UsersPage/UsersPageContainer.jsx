import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    follow,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redax/userPageReducer";
import UsersPage from './UsersPage';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }

    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersPage unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged.bind(this)}
                       followingInProgress={this.props.followingInProgress}/>

        </>
    }
}

const mapStareToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}


const UsersPageContainer = connect(mapStareToProps, {
    follow, unfollow, setCurrentPage, getUsers
})(UsersAPIComponent);
export default UsersPageContainer;

