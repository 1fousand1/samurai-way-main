import {ActionsType, UsersPageType, UserType} from "./store";



let initialState ={
    users: [
        {id: 1, followed:false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country:'Belarus'}},
        {id: 1, followed:false, fullName: 'Alexandr', status: 'I am a boss', location: {city: 'Moscow', country:'Russia'}},
        {id: 1, followed:false, fullName: 'Andrew', status: 'I am a boss', location: {city: 'Kiev', country:'Ukraine'}}
    ]
}


 const usersReducer = (
     state: UsersPageType = initialState,
     action: ActionsType): UsersPageType => {

    switch (action.type) {
        case 'FOLLOW' : {
            const newState: UsersPageType = {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            return newState
        }
        case 'UNFOLLOW' :
            {
                const newState: UsersPageType = {
                    ...state,
                    users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
                return newState
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