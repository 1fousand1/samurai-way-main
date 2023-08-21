import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import ProfileStatus from "./ProfileStatus"

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
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;