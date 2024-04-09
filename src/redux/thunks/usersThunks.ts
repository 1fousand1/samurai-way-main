import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, setUsersFollowingAC,
    setUsersIsLoadingAC, unfollowAC
} from "../actions/usersAction";

type ThunkResult<R> = (dispatch: Dispatch) => R;

export const getUsersTC = (currentPage: number, pageSize: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    dispatch(setUsersIsLoadingAC(true))
    dispatch(setCurrentPageAC(currentPage))

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsersIsLoadingAC(false))
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount))
}


export const followTC = (userId: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    dispatch(setUsersFollowingAC(true, userId));
    let data = await usersAPI.followUser(userId)
    if (data.resultCode === 0) {
        dispatch(followAC(userId));
    }
    dispatch(setUsersFollowingAC(false, userId))

}
export const unfollowTC = (userId: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    dispatch(setUsersFollowingAC(true, userId));
    let data = await usersAPI.unfollowUser(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
    }
    dispatch(setUsersFollowingAC(true, userId));

}