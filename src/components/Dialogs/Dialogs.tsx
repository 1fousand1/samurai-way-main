import React from "react";
import styles from "./Dialogs.module.css";
import { DialogItems } from "./DialogItems/DialogItems";
import { DialogsPropsType } from "./DialogContainer/DialogsContainer";
import { FormDataType } from "./Message/AddMessageForm";
import { MessageItem } from "./Message/Message";
import { useWindowWidth } from "../../hooks";
import { DialogsFormRedux } from "./DialogsForm";

export const Dialogs = (props: DialogsPropsType) => {
    const { sendMessage } = props;
    const { dialogs, messages } = props.dialogsPage;

    const isDesktop = useWindowWidth(1200);

    const addNewMessage = (values: FormDataType) => {
        sendMessage(values.newMessageBody);
    };

    const dialogsElements = dialogs.map((dialog) => {
        return <DialogItems key={dialog.id} id={dialog.id} dialog={dialog} />;
    });

    const messagesElements = messages.map((message) => {
        return <MessageItem key={message.id} id={message.id} message={message.message} />;
    });

    return (
        <div className={styles.root}>
            {!isDesktop && <div className={styles.dialogs__items}>{dialogsElements}</div>}
            <div className={styles.messages}>
                <div className={styles.messages__items}>{messagesElements}</div>
                <DialogsFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
};
