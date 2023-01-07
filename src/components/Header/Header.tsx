import React, {FC} from "react";
import s from './Header.module.css';


/*type HeaderTypeProps = {
    src: string
}*/


export const Header/*: React.FC<HeaderTypeProps>*/ = () => {
    return(
            <header className={s.header}>
                <img alt ="logo" src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
            </header>

    )
}