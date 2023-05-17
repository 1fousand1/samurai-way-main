import {ActionsType, UsersPageType, UserType} from "./store";


let initialState ={
    users: []
}


 const usersReducer = (
     state: UsersPageType = initialState,
     action: ActionsType): UsersPageType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW' :
            {
                return {
                    ...state,
                    users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
            }
            case 'SET_USERS': {
                    return {...state, users: [...state.users,...action.users]}
            }

        default:
            return state;
    }
}
export const followAC = (userId: number) => ({type: 'FOLLOW', userId: userId })
export const unfollowAC = ( userId: number) => ({type: 'UNFOLLOW', userId: userId})
export const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users: users})

export default usersReducer;