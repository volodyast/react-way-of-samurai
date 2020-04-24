import {usersAPI} from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SetTotalUsersCountAC';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

//thunk
export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(
            data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowAC(userId))
                dispatch(toggleFollowingProgress(false, userId))
            }
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(userId))
                dispatch(toggleFollowingProgress(false, userId))
            }
        })
    }
}
//AC

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalUsers: totalUsersCount
    }
}
export const setCurrentPage = (numberPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage: numberPage
    }
}
export const followAC = (UserID) => {
    return {
        type: FOLLOW, UserID: UserID
    }
}
export const unfollowAC = (UserID) => {
    return {
        type: UNFOLLOW, UserID: UserID
    }
}
export const setUsers = (Users) => {
    return {
        type: SET_USERS, Users: Users
    }
}
export const setIsFetching = (Users) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching: Users
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.UserID)
                        return {...u, followed: true};
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.UserID)
                        return {...u, followed: false};
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.Users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
    }
    return state;
}


export default userPageReducer;

