/*
import React from 'react'

import {MyPosts} from "./Posts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";
import {PostType} from "../../../types/profilePageTypes";
import {addPostActionCreator} from "../../../redux/actions/profileAction";


type MapStatePropsType = {
    posts: PostType[],
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
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
        addPost:(newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);*/
export {};
