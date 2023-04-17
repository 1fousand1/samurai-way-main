import React from 'react'
import {addPostActionCreator, PostType, RootStateType, updateNewPostTextActionCreator} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";


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
        posts: state.profileReducer.posts
        ,
        newPostText: state.profileReducer.newPostText
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