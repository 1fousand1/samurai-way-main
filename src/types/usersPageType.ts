import {UserType} from "./usersTypes";

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    totalCount: number
    isLoading: boolean
    followingInProgress: number[]
}