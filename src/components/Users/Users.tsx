import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

interface UsersProps extends UsersPropsType {
    onPageChanged: (pageNumber: number) => void;
}


export const Users = (props: UsersProps) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.usersPage.users.map((u) =>
                <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      usersAPI.unfollowUser(u.id).then(data => {
                                          if (data.resultCode === 0) {
                                              props.unfollow(u.id);
                                          }
                                      });
                                  }}> Unfollow </button>
                                  : <button onClick={() => {
                                      usersAPI.followUser(u.id).then(data => {
                                          if (data.resultCode === 0) {
                                              props.follow(u.id);
                                          }
                                      });
                                  }}> Follow </button>}
                            </div>
                        </span>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                </div>
            )
        }
    </div>
}