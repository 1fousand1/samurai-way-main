import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import iconChat from "../../../assets/images/aside/icon-chat.svg";
import iconMessages from "../../../assets/images/aside/icon-messages.svg";
import iconUsers from "../../../assets/images/aside/icon-users.svg";
import iconNews from "../../../assets/images/aside/icon-news.svg";
import iconSettings from "../../../assets/images/aside/icon-settings.svg";
import defaultUserPhoto from "../../../assets/images/users/default-user.svg";
import { ProfileType } from "../../../types";

type PropsType = {
    profile: ProfileType | null;
};

export const Navbar = (props: PropsType) => {
    const { profile } = props;
    return (
        <ul className={styles.items}>
            <li className={styles.item}>
                <NavLink to="/profile" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img
                            className={styles.profileAvatar__img}
                            src={profile?.photos.small || defaultUserPhoto}
                            alt="profile-avatar-8"
                        />
                    </div>
                    <span className={styles.span}>Profile</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/users" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconUsers} alt="icon-users" />
                    </div>
                    <span className={styles.span}>Users</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/chat" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconChat} alt="icon-chat" />
                    </div>
                    <span className={styles.span}>Chat</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/messages" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconMessages} alt="icon-messages" />
                    </div>
                    <span className={styles.span}>Messages</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/news" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconNews} alt="icon-news" />
                    </div>
                    <span className={styles.span}>News</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/settings" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconSettings} alt="icon-settings" />
                    </div>
                    <span className={styles.span}>Settings</span>
                </NavLink>
            </li>
        </ul>
    );
};
