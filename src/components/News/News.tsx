import { UnderDevelopmentPage } from "../../components/common/UnderDevelopmentPage";

import styles from "./News.module.css";

type PropsType = {};

export const News = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <UnderDevelopmentPage />
        </div>
    );
};
