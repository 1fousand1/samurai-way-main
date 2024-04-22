import {securityApi} from "../../api/securityApi";
import {Dispatch} from "redux";
import {getCaptchaUrlAC} from "../actions/authAction";


type ThunkResult<R> = (dispatch: Dispatch) => R
export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlAC(captchaUrl))

}