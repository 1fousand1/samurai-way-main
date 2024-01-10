import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./actionTypes";

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST as typeof ADD_POST,
        newPostText: newPostText
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT as typeof UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}