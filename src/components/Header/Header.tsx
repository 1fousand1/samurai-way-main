import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { ProfileType } from "../../types";
import { useWindowWidth } from "../../hooks";
import { UsersSearchForm } from "../Users/UsersSearchForm";
import logo from "../../assets/images/header/icon-logo.svg";
import iconSearch from "../../assets/images/header/icon-search.svg";
import logoutIcon from "../../assets/images/header/icon-logout.svg";

type PropsType = {
    isAuth: boolean;
    login: string | null;
    profile: ProfileType | null;
    logOut: () => void;
    onFilterChanged: (filterSearch: string) => void;
};

export const Header = (props: PropsType) => {
    const { isAuth, logOut, login, onFilterChanged } = props;

    const location = useLocation();
    const currentPath = location.pathname;

    const isTablet = useWindowWidth(690);

    const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

    const handleSearchIconClick = () => setIsSearchFormVisible(!isSearchFormVisible);
    const handleCloseIconClick = () => setIsSearchFormVisible(false);

    return (
        <header className={styles.root}>
            <div className={styles.mainBlock}>
                {!isSearchFormVisible && (
                    <div className={styles.logoBlock}>
                        <NavLink to="/">
                            <div className={styles.menuLogo}>
                                <img src={logo} alt="logo" />
                            </div>
                        </NavLink>
                    </div>
                )}
                {currentPath === "/users" && (
                    <div className={styles.search}>
                        {isTablet && !isSearchFormVisible && (
                            <div className={styles.searchIcon} onClick={handleSearchIconClick}>
                                <img src={iconSearch} alt="icon-search" />
                            </div>
                        )}
                        {(!isTablet || isSearchFormVisible) && (
                            <UsersSearchForm
                                onFilterChanged={onFilterChanged}
                                handleCloseIconClick={handleCloseIconClick}
                            />
                        )}
                    </div>
                )}
            </div>
            {isAuth ? (
                <div className={styles.loginBlock}>
                    {login && <div className={styles.loginName}>{login}</div>}
                    <button className={styles.button} onClick={logOut}>
                        <img src={logoutIcon} alt="logout" />
                    </button>
                </div>
            ) : (
                <NavLink className={styles.navlink} to={"/login"}>
                    Login
                </NavLink>
            )}
        </header>
    );
};
