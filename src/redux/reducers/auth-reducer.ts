import {AuthActionType, AuthType} from "../actions/authAction";
import {AUTH_SET_USER_DATA} from "../actions/actionTypes";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (
    state: AuthType = initialState,
    action: AuthActionType) => {

    switch (action.type) {
        case AUTH_SET_USER_DATA : {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}


export default authReducer;