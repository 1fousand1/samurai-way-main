import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, setUsersLoadingAC, unfollowAC
} from "../actions/usersAction";
import {followUnfollow} from "../../utils/followUnfollow/followUnfollow";

type ThunkResult<R> = (dispatch: Dispatch) => R;

export const getUsersTC = (currentPage: number, pageSize: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    dispatch(setUsersLoadingAC(true))
    dispatch(setCurrentPageAC(currentPage))

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsersLoadingAC(false))
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount))
}

export const followTC = (userId: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    await followUnfollow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followAC)
}
export const unfollowTC = (userId: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    await followUnfollow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowAC)
}