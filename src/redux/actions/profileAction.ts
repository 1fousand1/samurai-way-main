import {
    PROFILE_DELETE_POST,
    PROFILE_POST_ADD,
    PROFILE_SET_STATUS,
    PROFILE_SET_USER_PROFILE,
    UPDATE_NEW_POST_TEXT
} from "./actionTypes";
import {ProfileType} from "../../types/profilePageTypes";

export type ProfileActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: PROFILE_POST_ADD as typeof PROFILE_POST_ADD,
        newPostText: newPostText
    } as const
}

export const deletePostAC = (postId: number) => {
    return {
        type: PROFILE_DELETE_POST as typeof PROFILE_DELETE_POST,
        postId: postId
    } as const

}

export const setUserProfileAC = (profile: ProfileType | null) => {
    return {
        type: PROFILE_SET_USER_PROFILE as typeof PROFILE_SET_USER_PROFILE,
        profile: profile
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {
        type: PROFILE_SET_STATUS as typeof PROFILE_SET_STATUS,
        status: status
    } as const
}


export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT as typeof UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

