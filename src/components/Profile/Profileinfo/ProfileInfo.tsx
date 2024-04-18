import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import defaultUserPhoto from "../../../assets/images/user.png";
import {ProfileType} from "../../../types/profilePageTypes";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && savePhoto(e.target.files[0])
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt="avatar" src={profile?.photos.large || defaultUserPhoto} className={s.profilePhoto}/>
                <p>{profile?.fullName}</p>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;