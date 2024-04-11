import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/usersTypes";

export type UsersProps = {
    user: UserType;
    key: number;
    followingInProgress: number[];
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
}


export const User: React.FC<UsersProps> = ({user, followingInProgress, follow, unfollow}) => {

    return (<div>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                              {user.followed
                                  ? <button disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                unfollow(user.id)
                                            }}> Unfollow </button>
                                  :
                                  <button disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                follow(user.id)
                                            }}> Follow </button>}
                            </div>
                        </span>
        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
        <span>
                            <div>{"user.location.city"}</div>
                        </span>
    </div>)

}