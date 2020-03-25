import React from 'react';
import {connect} from 'react-redux';
import {
    currentPageAC,
    followAC,
    setFetchingAC,
    SetTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redax/userPageReducer";
import * as axios from 'axios';
import UsersPage from './UsersPage';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersPage unfollowUser={this.props.unfollowUser}
                       followUser={this.props.followUser}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged.bind(this)}
                       isFetching={this.props.isFetching}/>
        </>
    }
}

const mapStareToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTotalUsersCount: (totalUsersCount) => {
            let action = SetTotalUsersCountAC(totalUsersCount);
            dispatch(action)
        },
        followUser: (IDUser) => {
            let action = followAC(IDUser);
            dispatch(action)
        },
        unfollowUser: (IDUser) => {
            let action = unfollowAC(IDUser);
            dispatch(action)
        },
        setCurrentPage: (currentPage) => {
            let action = currentPageAC(currentPage);
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action)
        },
        setIsFetching: (users) => {
            let action = setFetchingAC(users);
            dispatch(action)
        }
    }
}

const UsersPageContainer = connect(mapStareToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersPageContainer;