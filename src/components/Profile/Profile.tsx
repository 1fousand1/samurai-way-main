import React, {FC} from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {AnyAction} from "redux";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: AnyAction) => void
}

export const Profile:FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
                     />
        </div>
    )
}