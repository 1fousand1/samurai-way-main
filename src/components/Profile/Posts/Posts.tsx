import React from "react";
import styles from "./Posts.module.css";

import { PostType, ProfileType } from "../../../types/profilePageTypes";
import { Post } from "./Post/Post";

type PropsType = {
    profile: ProfileType | null;
    posts: PostType[];
};

export const Posts = React.memo((props: PropsType) => {
    const { posts, profile } = props;

    const postsElements = posts.map((post) => {
        return <Post key={post.id} post={post} profile={profile} />;
    });

    return (
        <div className={styles.timeline}>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
});
