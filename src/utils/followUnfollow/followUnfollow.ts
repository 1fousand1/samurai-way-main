import {Dispatch} from "redux";
import {followACType, setUsersFollowingAC, unfollowACType} from "../../redux/actions/usersAction";
import {ResultCode} from "../../api/api";


type FollowUnfollowAction = followACType | unfollowACType
export const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => Promise<any>, actionCreator: (userId: number) => FollowUnfollowAction) => {
    dispatch(setUsersFollowingAC(true, userId));

    let data = await apiMethod(userId);
    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(actionCreator(userId));
    }
    dispatch(setUsersFollowingAC(false, userId));
}