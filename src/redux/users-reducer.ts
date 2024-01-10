import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {UserType} from "../types/usersTypes";
import {UsersPageType} from "../types/usersPageType";
import {ActionsType} from "./actions/actionTypes";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    totalCount: 0,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (
    state: UsersPageType = initialState,
    action: ActionsType): UsersPageType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }

        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }

        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            };
        }


        default:
            return state;
    }
}
export const followAC = (userId: number) => ({type: 'FOLLOW', userId: userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId: userId} as const)
export const setUsersAC = (users: UserType[]) => ({
    type: 'SET_USERS',
    users,
} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage: currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount: totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching} as const);
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId,
} as const);


type ThunkResult<R> = (dispatch: Dispatch) => R;

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkResult<void>  => {
   return (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPageAC(currentPage))
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount))
        });
    }
}


export const followTC = (userId: number): ThunkResult<void> => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            });

    }
}
export const unfollowTC = (userId: number): ThunkResult<void> => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            });

    }
}

export default usersReducer;










