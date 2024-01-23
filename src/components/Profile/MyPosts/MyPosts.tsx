import React from 'react'
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {FormDataType, PostFormRedux} from "./Post/PostForm";


export const MyPosts:React.FC<MyPostsPropsType> = (props) => {


    let postsElements = props.posts.map((p) => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

