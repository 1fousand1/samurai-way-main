import React, { memo } from "react";
import { ChatMessageType } from "../../../../api/chatApi";
import styles from "./ChatMessage.module.css";
import { NavLink } from "react-router-dom";

type ChatMessagePropsType = {
    id: number;
    message: ChatMessageType;
};

export const ChatMessage = memo((props: ChatMessagePropsType) => {
    const { message } = props;
    let path = `/profile/${message.userId}`;

    return (
        <div className={styles.root}>
            <NavLink key={message.userId} to={path}>
                <li className={styles.item}>
                    <div className={styles.item__image}>
                        <img className={styles.item__avatar} src={message.photo} alt="contact-avatar" />
                    </div>
                    <div className={styles.userAndMessage}>
                        <a>
                            <div className={styles.item__userName}>{`${message.userName}`}</div>
                            <div className={styles.userMessage}>{message.message}</div>
                        </a>
                    </div>
                </li>
            </NavLink>
        </div>
    );
});
