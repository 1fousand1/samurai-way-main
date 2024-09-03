import { FilterType } from "../reducers/users-reducer";
import { Dispatch } from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    setUsersFilterAC,
    setUsersLoadingAC,
    unFollowAC,
} from "../actions/usersAction";
import { usersAPI } from "../../api";
import { followUnfollow } from "../../utils/followUnfollow/followUnfollow";

export const getUsersTC = (currentPage: number, pageSize: number, filter: FilterType) => async (dispatch: Dispatch) => {
    dispatch(setUsersLoadingAC(true));
    dispatch(setCurrentPageAC(currentPage));

    dispatch(setUsersFilterAC(filter));

    const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);

    dispatch(setUsersLoadingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUserCountAC(data.totalCount));
};

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, followAC, usersAPI.followUser.bind(usersAPI), dispatch);
};

export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, unFollowAC, usersAPI.unfollowUser.bind(usersAPI), dispatch);
};
