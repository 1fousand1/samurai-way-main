import {UserType} from "../../types/usersTypes";
import {
    USERS_FOLLOW, USERS_FOLLOWING_IN_PROGRESS,
    USERS_IS_LOADING,
    USERS_SET,
    USERS_SET_CURRENT_PAGE,
    USERS_SET_TOTAL_COUNT,
    USERS_UNFOLLOW
} from "./actionTypes";
import {setUserProfileAC, setUserStatusAC} from "./profileAction";


export type UsersActionType = followACType
    | unfollowACType
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setUsersLoadingAC>
    | ReturnType<typeof setUsersFollowingAC>

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export const followAC = (userId: number) => ({type: USERS_FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: number) => ({type: USERS_UNFOLLOW, userId: userId} as const)

export const setUsersAC = (users: UserType[]) => ({
    type: USERS_SET,
    users,
} as const);
export const setCurrentPageAC = (currentPage: number) => ({
    type: USERS_SET_CURRENT_PAGE,
    currentPage: currentPage
} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({
    type: USERS_SET_TOTAL_COUNT,
    totalCount: totalCount
} as const)
export const setUsersLoadingAC = (isLoading: boolean) => ({type: USERS_IS_LOADING, isLoading: isLoading} as const);
export const setUsersFollowingAC = (isFetching: boolean, userId: number) => ({
    type: USERS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
} as const);




