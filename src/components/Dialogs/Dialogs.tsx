import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {dialogs, messages, newMessageBody} = props.dialogsPage;

    const dialogsElements = dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = messages.map((m) => <Message message={m.message} key={m.id}/>)

    let newMessage = newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <form >
                <div><textarea
                    onChange={onNewMessageChange}
                    value={newMessage}
                    placeholder="Enter your message"></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </form>
        </div>
    )
};





export default Dialogs;