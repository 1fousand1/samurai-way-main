import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"
import {ProfileType} from "../../../types/profilePageTypes";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void

}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus}) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large} />
                <p>{profile?.fullName}</p>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;