import React from "react";

import styles from "./Friend.module.css";

import defaultUserPhoto from "../../../../assets/images/users/default-user.svg";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../../types/usersPageType";

type PropsType = {
    friend: UserType;
};

export const Friend = (props: PropsType) => {
    const { friend } = props;

    return (
        <NavLink className={"friends-links"} to={`/profile/${friend.id}`}>
            <li key={friend.id}>
                <div className={styles.item}>
                    <img className={styles.img} src={friend.photos.large || defaultUserPhoto} alt="avatar-friend" />
                    <a className="help-a">
                        <span className={styles.userName}>{friend.name}</span>
                    </a>
                </div>
            </li>
        </NavLink>
    );
};
