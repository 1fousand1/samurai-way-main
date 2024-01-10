import React from 'react'

import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";
import {PostType} from "../../../types/profilePageTypes";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/actions/profileAction";


type MapStatePropsType = {
    posts: PostType[],
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text:string) => void
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
        ,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:any): MapDispatchPropsType => {
    return {
        updateNewPostText: (text:string) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost:(text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);