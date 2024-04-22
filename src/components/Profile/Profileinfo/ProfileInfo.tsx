import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import defaultUserPhoto from "../../../assets/images/user.png";
import { ProfileType} from "../../../types/profilePageTypes";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

import {ProfileData} from "../ProfileData/ProfileData";
import ProfileDataForm, {ProfileDataFormType} from "../ProfileDataForm/ProfileDataForm";



type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    updateProfile: (profile: ProfileDataFormType) => Promise<any>

}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfile}) => {

    let [editMode,setEditMode] = useState(false)
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && savePhoto(e.target.files[0])
    }
    const onSubmit = (formData: ProfileDataFormType) => {
        updateProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt="avatar" src={profile?.photos.large || defaultUserPhoto} className={s.profilePhoto}/>
                <p>{profile?.fullName}</p>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                { editMode
                    ? <ProfileDataForm onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData isOwner={isOwner} activateEditMode={()=>{setEditMode(true)}} profile={profile}/>}

                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;