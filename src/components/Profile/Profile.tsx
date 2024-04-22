import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


import {ProfileType} from "../../types/profilePageTypes";
import {InitialStateType} from "../../redux/reducers/profile-reducer";
import {ProfileDataFormType} from "./ProfileDataForm/ProfileDataForm";

type PropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    updateProfile: (profile: ProfileDataFormType) => Promise<any>

}
export const Profile: React.FC<PropsType> =
    ({
         profile,
         status,
         isOwner,
         updateUserStatus,
         savePhoto,
         updateProfile
     }) => {

        return (
            <div>
                <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto} updateProfile={updateProfile}/>
                <MyPostContainer/>
            </div>
        )
    }