import React, {useState} from 'react';
import styles from "./Pagination.module.css";
import cn from "classnames"


type UsersPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void;
    totalItemsCount: number;
    pageSize: number;
    portionSize: number;
}

export const Pagination: React.FC<UsersPropsType> = (
    {
        totalItemsCount,
        pageSize,
        portionSize = 10,
        currentPage,
        onPageChanged
    }
) => {
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (<div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p} className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             onClick={(event) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}

    </div>)


}