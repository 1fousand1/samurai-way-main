
import {savePhotoSuccessAC, setUserProfileAC, setUserStatusAC} from "../actions/profileAction";
import {Dispatch} from "redux";
import {ProfileType} from "../../types/profilePageTypes";
import {AppThunkType, ReduxStateType} from "../redux-store";
import {stopSubmit} from "redux-form";
import {profileAPI} from "../../api/profileApi";
import {ResultCode} from "../../api/instance";


type ThunkResult<R> = (dispatch: Dispatch) => R


export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(data))
}

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
export const savePhotoTC = (file: string): ThunkResult<void> => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos))
    }

}

export const updateProfileTC = (profile: ProfileType): AppThunkType => async (dispatch, getState: () => ReduxStateType) => {
    const userId = getState().auth.id

    if (!userId) {
        console.warn('userId not found in the state')
        return
    }

    const data = await profileAPI.updateProfile(profile)

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(getUserProfileTC(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0] || 'Incorrect data'}))


        return Promise.reject(data.messages[0])
    }
}
