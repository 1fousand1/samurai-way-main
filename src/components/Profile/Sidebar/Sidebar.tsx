import styles from "./Sidebar.module.css";
import { ProfileDataFormType } from "../ProfileDataForm/ProfileDataForm";
import { ProfileType, SidebarType } from "../../../types";
import { UserType } from "../../../types/usersPageType";
import { About } from "./About/About";
import { Friends } from "./Friends";

type PropsType = {
    state: SidebarType;
    profile: ProfileType | null;
    isOwner: boolean;
    updateProfile: (profile: ProfileDataFormType) => Promise<any>;
    users: UserType[];
};

export const Sidebar = (props: PropsType) => {
    const { state, profile, isOwner, updateProfile, users } = props;

    return (
        <div className={styles.root}>
            <About about={state.about} profile={profile} isOwner={isOwner} updateProfile={updateProfile} />
            <Friends users={users} />
        </div>
    );
};
