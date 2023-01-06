import React from "react";
import s from './Header.module.css';

export function Header(){
    return(
            <header className={s.header}>
                <img alt ="logo" src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
            </header>

    )
}