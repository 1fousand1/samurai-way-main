import { AuthActionType, AuthType } from "../actions/authAction";
import { AUTH_GET_CAPTCHA_URL, AUTH_SET_USER_DATA } from "../actions/actionTypes";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state: AuthType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case AUTH_SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case AUTH_GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
