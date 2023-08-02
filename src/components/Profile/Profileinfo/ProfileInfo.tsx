import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} />
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;