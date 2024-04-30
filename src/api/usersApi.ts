import {BaseResponseType, instance} from "./instance";
import {UserType} from "../types/usersTypes";

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = "", friend: null | boolean = null) {
        const friendParam = friend === null ? '' : `&friend=${friend}`
        return instance.get<UsersResponseDataType>(`users?page=${currentPage}&count=${pageSize}&term=${term}${friendParam}`)
            .then(response => {
                return response.data
            });
    },
    followUser(userId: number) {
        return instance.post<BaseResponseType>(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },
    unfollowUser(userId: number) {
        return instance.delete<BaseResponseType>(`follow/${userId}`).then((response) => {
            return response.data;
        });
    }

}