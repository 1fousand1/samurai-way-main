import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { AsidePropsType } from "./AsideContainer/AsideContainer";
import styles from "./Aside.module.css";
import { Contacts } from "./Contacts";

export const Aside = (props: AsidePropsType) => {
    const { users, profile } = props;

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.navbar}>
                    <Navbar profile={profile} />
                </div>
                {currentPath === "/profile" && (
                    <div className={styles.contacts}>
                        <Contacts contacts={users} />
                    </div>
                )}
            </div>
        </aside>
    );
};
