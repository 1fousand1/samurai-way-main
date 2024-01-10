export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null) => ({type: 'SET_USER_DATA', data: {id: id, email: email, login: login} })