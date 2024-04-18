import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


import {ProfileType} from "../../types/profilePageTypes";
import {InitialStateType} from "../../redux/reducers/profile-reducer";

type PropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void

}
export const Profile: React.FC<PropsType> =
    ({
         profile,
         status,
         isOwner,
         updateUserStatus,
         savePhoto
     }) => {

        return (
            <div>
                <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto}/>
                <MyPostContainer/>
            </div>
        )
    }