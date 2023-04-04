import React from 'react'
import {addPostActionCreator, PostType, RootStateType, updateNewPostTextActionCreator} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


type MapStatePropsType = {
    posts: PostType[],
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text:string) => void
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
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