import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import state from "../../../redux/state";


export function MyPosts() {

    let posts = state.profilePage.posts

    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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