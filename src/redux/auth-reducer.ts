import {ActionsType, AuthType} from "./store";


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
export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null) => ({type: 'SET_USER_DATA', data: {id: id, email: email, login: login} })


export default authReducer;