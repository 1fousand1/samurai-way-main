import React from 'react';
import styles from "./Pagination.module.css";


type UsersPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void;
    totalUsersCount: number;
    pageSize: number;
}

export const Pagination: React.FC<UsersPropsType> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged
    }
) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        {pages.map(p => {
            return <span key={p} className={currentPage === p ? styles.selectedPage : ''}
                         onClick={(event) => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}

    </div>)


}