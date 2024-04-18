import axios from "axios";
import {PhotosType, ProfilePhotos} from "../types/profilePageTypes";


export type userProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type SavePhotoResponseDataType = {
    photos: ProfilePhotos
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please use profileAPI object.")
        return profileAPI.getUserProfile(userId)
    }

}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<userProfileType>(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)

    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status: status})

    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export enum ResultCode {
    SUCCESS = 0,
    ERROR = 1
}