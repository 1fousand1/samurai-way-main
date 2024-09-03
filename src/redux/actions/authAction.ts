import { AUTH_GET_CAPTCHA_URL, AUTH_SET_USER_DATA } from "./actionTypes";

export type AuthType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    captchaUrl: string | null;
};

export type AuthActionType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof getCaptchaUrlAC>;

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({
        type: AUTH_SET_USER_DATA,
        payload: {
            id: id,
            email: email,
            login: login,
            isAuth: isAuth,
        },
    }) as const;

export const getCaptchaUrlAC = (captchaUrl: string) =>
    ({
        type: AUTH_GET_CAPTCHA_URL,
        payload: {
            captchaUrl,
        },
    }) as const;
