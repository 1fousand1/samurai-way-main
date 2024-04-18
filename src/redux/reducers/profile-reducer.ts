import {PostType, ProfilePageType, ProfileType} from "../../types/profilePageTypes";
import {
    PROFILE_POST_ADD,
    PROFILE_DELETE_POST,
    PROFILE_SET_STATUS, PROFILE_SET_USER_PROFILE, SAVE_PHOTO_SUCCESS
} from "../actions/actionTypes";
import {ProfileActionType} from "../actions/profileAction";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 11}],
    newPostText: 'it-kamasutra',
    profile: null as ProfileType | null,
    status: ""
}

export type InitialStateType = typeof initialState


const profileReducer = (
    state: ProfilePageType = initialState,
    action: ProfileActionType): ProfilePageType => {

    switch (action.type) {
        case PROFILE_POST_ADD: {
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
        case PROFILE_SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case PROFILE_SET_STATUS: {
            return {...state, status: action.status}
        }
        case PROFILE_DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state,
                profile: state.profile
                    ? {...state.profile, photos: action.photos }
                    : null }
        }
        default:
            return state;
    }
}

export default profileReducer;