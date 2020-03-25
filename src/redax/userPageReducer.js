const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SetTotalUsersCountAC';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

export const SetTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalUsers: totalUsersCount
    }
}
export const currentPageAC = (numberPage) => {
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
export const setUsersAC = (Users) => {
    return {
        type: SET_USERS, Users: Users
    }
}
export const setFetchingAC = (Users) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching: Users
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
        case SET_TOTAL_USERS_COUNT:{
            console.log(action.totalUsers);
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        }
    }
    return state;
}
export default userPageReducer;