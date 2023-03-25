import React, {FC} from 'react'
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsType, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/store";
import {AnyAction} from "redux";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}



export const MyPosts:FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
       props.dispatch(addPostActionCreator(props.newPostText));

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