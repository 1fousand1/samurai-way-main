import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

export type UsersProps = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void;
}

export const Users: React.FC<UsersProps> = (
    {
        users,
        currentPage,
        onPageChanged,
        totalUsersCount,
        pageSize,
        followingInProgress,
        follow,
        unfollow
    }) => {

    return <div>
        <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map((user) =>
                <User
                    user={user}
                    key={user.id}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                />
            )
        }
    </div>
}