import {ActionsType, UsersPageType, UserType} from "./store";


let initialState ={
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    totalCount: 0
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
                    return {...state, users: action.users}
            }
            case 'SET_CURRENT_PAGE': {
                    return {...state, currentPage: action.currentPage}
            }
            case 'SET_TOTAL_USERS_COUNT': {
                    return {...state, totalUsersCount: action.totalCount}
            }

        default:
            return state;
    }
}
export const followAC = (userId: number) => ({type: 'FOLLOW', userId: userId })
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId: userId})
export const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users: users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage: currentPage})
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount: totalCount})
export default usersReducer;