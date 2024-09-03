import styles from "./Post.module.css";

import { PostHeader } from "./PostHeader";
import { PostType, ProfileType } from "../../../../types/profilePageTypes";
import likeIcon from "../../../../assets/images/profile/about/icon-heart.svg";

type PostTypeProps = {
    profile: ProfileType | null;
    post: PostType;
};

export function Post(props: PostTypeProps) {
    const { profile } = props;
    return (
        <div className={styles.root}>
            <PostHeader profile={profile} />
            <div className={styles.text}>{props.post.message}</div>
            <div className={styles.likes}>
                <img className={styles.likesIcon} src={likeIcon} alt="icon-likes" />
                <span className={styles.likesCount}>{props.post.likesCount}</span>
            </div>
        </div>
    );
}
