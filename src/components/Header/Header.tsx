import React, {FC} from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";



export const Header = (props:HeaderContainerPropsType) => {
    return(
            <header className={s.header}>
                <img alt ="logo" src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>

    )
}