import {AuthType} from "../actions/authAction";
import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ActionsType} from "../actions/actionCreatorTypes";


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
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", { _error: message}))
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