import { savePhotoSuccessAC, setUserProfileAC, setUserStatusAC } from "../actions/profileAction";
import { Dispatch } from "redux";
import { ProfileType } from "../../types";
import { AppStateType, AppThunkType } from "../redux-store";
import { stopSubmit } from "redux-form";
import { profileAPI } from "../../api";
import { ResultCode } from "../../api/instance";

type ThunkResult<R> = (dispatch: Dispatch) => R;

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfileAC(data));
};

export const getUserStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatusAC(data));
};

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(setUserStatusAC(status));
    }
};
export const savePhotoTC = (file: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.savePhoto(file);

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(savePhotoSuccessAC(data.data.photos));
    }
};

export const updateProfileTC =
    (profile: ProfileType): AppThunkType =>
    async (dispatch, getState: () => AppStateType) => {
        const userId = getState().auth.id;

        if (!userId) {
            console.warn("userId not found in the state");
            return;
        }

        const data = await profileAPI.updateProfile(profile);

        if (data.resultCode === ResultCode.SUCCESS) {
            dispatch(getUserProfileTC(userId));
        } else {
            dispatch(stopSubmit("edit-profile", { _error: data.messages[0] || "Incorrect data" }));

            return Promise.reject(data.messages[0]);
        }
    };
