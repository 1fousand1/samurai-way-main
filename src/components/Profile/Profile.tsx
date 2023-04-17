import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}