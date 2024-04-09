import {AUTH_SET_USER_DATA} from "./actionTypes";

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthActionType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: AUTH_SET_USER_DATA,
    payload: {
        id: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
} as const )

