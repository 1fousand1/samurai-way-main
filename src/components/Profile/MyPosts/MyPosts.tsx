import React, {FC} from 'react'
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {
    ADD_POST,
    addPostActionCreator, PostType,
    ProfilePageType, StoreType,
    updateNewPostTextActionCreator
} from "../../../redux/state";
import {AnyAction} from "redux";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: AnyAction) => void
}

export const MyPosts:FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
       props.dispatch(addPostActionCreator(props.newPostText));
        /*store.dispatch({ type: ADD_POST, postText: props.newPostText });*/

    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            let action = updateNewPostTextActionCreator(text);
            props.dispatch(action);
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}