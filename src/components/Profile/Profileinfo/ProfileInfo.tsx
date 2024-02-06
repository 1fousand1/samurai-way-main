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

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} />
                <p>{props.profile?.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;