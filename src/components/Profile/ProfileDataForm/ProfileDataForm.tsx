import React from "react";
import { ProfileContacts, ProfileType } from "../../../types/profilePageTypes";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringKeys, Input, Textarea } from "../../common/FormsControl/FormsControl";
import styles from "./ProfileDataForm.module.css";
import s from "../../Login/Login.module.css";

type ProfileDataFormPropsType = {
    profile: ProfileType | null;
    onSubmit: (formData: ProfileDataFormType) => void;
};

export type ProfileDataFormType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: ProfileContacts;
};

type ProfileDataFormValuesTypeKeys = GetStringKeys<ProfileDataFormType>;
type AllSampleFormProps = ProfileDataFormPropsType & InjectedFormProps<ProfileDataFormType, ProfileDataFormPropsType>;
const ProfileDataForm: React.FC<AllSampleFormProps> = (props) => {
    const { profile, handleSubmit, error } = props;
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.root}>
                <div className={styles.formItems}>
                    <div>
                        <b>Full name</b>: {profile?.fullName}
                        {createField<ProfileDataFormValuesTypeKeys>("Full name", "fullName", [], Input)}
                    </div>
                    <div>
                        <b>About me</b>: {profile?.aboutMe}
                        {createField<ProfileDataFormValuesTypeKeys>("About me", "aboutMe", [], Textarea)}
                    </div>
                    <div className={styles.checkboxContainer}>
                        <div>
                            <b>Looking for a job</b>: {profile?.lookingForAJob ? "Yes" : "No"}
                        </div>
                        {createField<ProfileDataFormValuesTypeKeys>("", "lookingForAJob", [], Input, {
                            type: "checkbox",
                            className: styles.checkbox,
                        })}
                    </div>
                    <div>
                        <b>My professional skills</b>: {profile?.lookingForAJobDescription}
                        {createField<ProfileDataFormValuesTypeKeys>(
                            "My professional skills",
                            "lookingForAJobDescription",
                            [],
                            Textarea,
                        )}
                    </div>
                    {profile?.contacts && (
                        <div className={styles.contacts}>
                            <b>Contacts:</b>{" "}
                            {Object.keys(profile.contacts).map((key) => {
                                return (
                                    <div key={key}>
                                        <b>{key}</b>: {createField(key, "contacts." + key, [], Input)}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <button className={styles.saveButton}>Save</button>
                {error && <div className={s.formSummaryError}>{error}</div>}
            </div>
        </form>
    );
};

export default reduxForm<ProfileDataFormType, ProfileDataFormPropsType>({ form: "edit-profile" })(ProfileDataForm);
