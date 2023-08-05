import {ActionsType, authType} from "./store";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
}

const authReducer = (
    state: authType = initialState,
    action: ActionsType) => {

    switch (action.type) {
        case 'SET_USER_DATA' : {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}
export const setUserDataAC = (userId: number, email: string, login: string) => ({type: 'SET_USER_DATA', data: {userId: userId, email: email, login: login}})

export default authReducer;