import React, { useEffect } from "react";
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatForm from "./ChatForm/ChatForm";
import { Preloader } from "../common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { startChatMessagesListeningTC, stopChatMessagesListeningTC } from "../../redux/thunks/chatThunk";
import { getChatStatus } from "../../redux/selectors/chatSelectors";
import styles from "./Chat.module.css";

const Chat: React.FC = () => {
    const status = useSelector(getChatStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChatMessagesListeningTC());

        return () => {
            dispatch(stopChatMessagesListeningTC());
        };
    }, []);

    if (status === "pending") return <Preloader />;

    return (
        <div className={styles.root}>
            <div className={styles.messages}>
                {status === "error" && <div>Some error occured, Please Refresh the page!</div>}
                <ChatMessages />
                <ChatForm />
            </div>
        </div>
    );
};

export default Chat;
