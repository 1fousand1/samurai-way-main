import React from "react";
import styles from "./Preloader.module.css";

export const Preloader = () => (
    <div className={styles.root}>
        <span className={styles.loader}></span>
    </div>
);
