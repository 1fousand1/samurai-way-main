import {Dispatch} from "redux";
import {setAuthUserDataAC} from "../actions/authAction";
import {stopSubmit} from "redux-form";
import {authAPI} from "../../api/authApi";
import {getCaptchaUrl} from "./securityThunk";
import {ResultCode} from "../../api/instance";

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserDataAC(id, email, login, true))
    }

}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === ResultCode.SUCCESS) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === ResultCode.CAPTCHA_ERROR) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}