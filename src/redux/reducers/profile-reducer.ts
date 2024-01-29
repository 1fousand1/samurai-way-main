import {profileAPI, usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {PostType, ProfilePageType, ProfileType} from "../../types/profilePageTypes";
import {ActionsType} from "../actions/actionCreatorTypes";



let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11}],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ""
}


const profileReducer = (
    state: ProfilePageType = initialState,
    action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            const newState: ProfilePageType = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return newState;
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }

        default:
            return state;
    }
}

type ThunkResult<R> = (dispatch: Dispatch) => R

export const setUserProfileAC = (profile: ProfileType | null) => ({type: "SET_USER_PROFILE", profile} as const)

export const setUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}

export const setUserStatusAC = (status: string) => ({type: "SET_STATUS", status})

export const getUserStatusTC = (userId: number): ThunkResult<void> => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatusAC(response.data))
    })
}

export const updateUserStatusTC = (status: string): ThunkResult<void> => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }

        })
}

export default profileReducer;