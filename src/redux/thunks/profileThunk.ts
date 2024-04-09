import {profileAPI, usersAPI} from "../../api/api";
import {setUserProfileAC, setUserStatusAC} from "../actions/profileAction";
import {Dispatch} from "redux";


type ThunkResult<R> = (dispatch: Dispatch) => R

export const getUserStatusTC = (userId: number): ThunkResult<void> => async (dispatch: Dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatusAC(response.data))
}

export const updateUserStatusTC = (status: string): ThunkResult<void> => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
}



