import styles from "./UnderDevelopmentPage.module.css";

import underDevelopmentImage from "../../../assets/images/work-in-progress.png";

export const UnderDevelopmentPage = () => {
    return (
        <div className={styles.root}>
            <img className={styles.img} src={underDevelopmentImage} alt="not-found-404" />
            <h1 className={styles.title}>We are Under Maintenance.</h1>
            <p className={styles.text}>Will be Back Soon!</p>
        </div>
    );
};
