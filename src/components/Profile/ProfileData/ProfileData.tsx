import React from 'react';
import {ProfileContact} from "../ProfileContact/ProfileContact";
import {ProfileContacts, ProfileType} from "../../../types/profilePageTypes";

type ProfileDataPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    activateEditMode: ()=> void;
}
export const ProfileData: React.FC<ProfileDataPropsType> = (
    {
        profile,
        isOwner,
        activateEditMode
    }) => {

    const onActivateEditModeHandler = () => {
        activateEditMode();
    };

    return (
        <div>
            {isOwner && <div><button onClick={onActivateEditModeHandler}>edit</button></div>}
            <div>
                <b>Looking for a job:</b> {profile?.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile?.lookingForAJobDescription &&
                <div>
                    <b>My professional skills:</b> {profile?.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile?.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {
                profile?.contacts && Object.keys(profile.contacts).map(key => {
                    if (key === 'facebook' || key === 'instagram') {
                        return null;
                    }
                    return <ProfileContact key={key} value={key} title={profile.contacts[key as keyof ProfileContacts]}/>;
                })
            }
            </div>

        </div>

    );
};

