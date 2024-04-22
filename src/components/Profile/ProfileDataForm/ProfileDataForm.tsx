import React from 'react';
import {ProfileContacts, ProfileType} from "../../../types/profilePageTypes";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControl/FormsControl";
import {ProfileContact} from "../ProfileContact/ProfileContact";


type ProfileDataFormPropsType = {
    profile: ProfileType | null
    onSubmit: (formData: ProfileDataFormType) => void
}

export type ProfileDataFormType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: ProfileContacts
}

type ProfileDataFormValuesTypeKeys = GetStringKeys<ProfileDataFormType>;
type AllSampleFormProps = ProfileDataFormPropsType & InjectedFormProps<ProfileDataFormType, ProfileDataFormPropsType>;
const ProfileDataForm: React.FC<AllSampleFormProps> = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            <div>
                <b>Full name</b>: {profile?.fullName}
                {createField<ProfileDataFormValuesTypeKeys>('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>About me</b>: {profile?.aboutMe}
                {createField<ProfileDataFormValuesTypeKeys>('About me', 'aboutMe', [], Textarea)}
            </div>
            <div >
                <div><b>Looking for a job</b>: {profile?.lookingForAJob ? 'Yes' : 'No'}</div>
                {createField<ProfileDataFormValuesTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox', className: ""}, )}
            </div>
            <div>
                <b>My professional skills</b>: {profile?.lookingForAJobDescription}
                {createField<ProfileDataFormValuesTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
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

        </form>
    );
};

export default reduxForm<ProfileDataFormType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

