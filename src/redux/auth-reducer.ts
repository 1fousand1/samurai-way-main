import {AuthType} from "./actions/authAction";
import {ActionsType} from "./actions/actionTypes";


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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}



export default authReducer;