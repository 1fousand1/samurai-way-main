import {ProfilePhotos, ProfileType} from "../types/profilePageTypes";
import {BaseResponseType, instance} from "./instance";

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)

    },
    updateUserStatus(status: string) {
        return instance.put<BaseResponseType>(`profile/status`, {status: status})

    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<BaseResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile: (profile: ProfileType) => {
        return instance.put<BaseResponseType>(`profile`, profile)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please use profileAPI object.")
        return profileAPI.getUserProfile(userId)
            .then(response=> response.data)
    }
}

type SavePhotoResponseDataType = {
    photos: ProfilePhotos
}
