import React from "react";
import styles from "./Profile.module.css";

import { ProfileType } from "../../types";
import { InitialStateType } from "../../redux/reducers/profile-reducer";
import { ProfileDataFormType } from "./ProfileDataForm";
import { UserType } from "../../types/usersPageType";
import { ProfileInfo } from "./Profileinfo";
import { Sidebar } from "./Sidebar";
import { PostHeader } from "./Posts/Post/PostHeader";
import { Posts } from "./Posts/Posts";
import { FormDataType } from "./Posts/Post/PostForm";
import { PostFormRedux } from "./PostForm";

type PropsType = {
    profilePage: InitialStateType;
    profile: ProfileType | null;
    status: string;
    isOwner: boolean;
    addPost: (newPostText: string) => void;
    updateUserStatus: (status: string) => void;
    savePhoto: (file: File) => void;
    updateProfile: (profile: ProfileDataFormType) => Promise<any>;
    users: UserType[];
};
export const Profile = (props: PropsType) => {
    const { profile, status, profilePage, isOwner, updateUserStatus, addPost, savePhoto, updateProfile, users } = props;

    const onAddPost = (values: FormDataType) => {
        addPost(values.newPostText);
    };

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo
                    isOwner={isOwner}
                    profile={profile}
                    status={status}
                    updateUserStatus={updateUserStatus}
                    savePhoto={savePhoto}
                />
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <div className={styles.postForm}>
                            <div className={styles.imgAndTextarea}>
                                <PostHeader profile={profile} showMore={false} />
                                <PostFormRedux onSubmit={onAddPost} />
                            </div>
                        </div>
                        <Posts profile={profile} posts={profilePage.posts} />
                    </div>
                    <Sidebar
                        state={profilePage.sidebar}
                        profile={profile}
                        isOwner={isOwner}
                        updateProfile={updateProfile}
                        users={users}
                    />
                </div>
            </div>
        </div>
    );
};
