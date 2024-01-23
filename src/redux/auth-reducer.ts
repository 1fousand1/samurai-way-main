import {AuthType} from "./actions/authAction";
import {ActionsType} from "./actions/actionTypes";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (
    state: AuthType = initialState,
    action: ActionsType) => {

    switch (action.type) {
        case 'SET_USER_DATA' : {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean ) => ({type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0){
                let {id, login, email, isAuth} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })

}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


export default authReducer;