import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

/*type MyPostsTypeProps = {
    message: string,
    likesCount: number
}*/

export function MyPosts(){
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you'} likesCount={0} />
                <Post message={'Its my first post'} likesCount={23} />
            </div>
        </div>
    )
}