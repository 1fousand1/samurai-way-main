import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {withRouterPropsType} from "./ProfileContainer";


export const Profile = (props: withRouterPropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostContainer/>
        </div>
    )
}