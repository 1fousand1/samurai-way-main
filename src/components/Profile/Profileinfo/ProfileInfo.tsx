import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} />
                description
            </div>
        </div>
    );
};

export default ProfileInfo;