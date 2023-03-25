import React, {FC} from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem";
import state, {
    DialogsPageType,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../redux/store";
import {AnyAction} from "redux";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: AnyAction) => void
}

const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let dialogs = props.state.dialogs
    let messages = props.state.messages


    let dialogsElements = dialogs.map((d)=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map((m)=> <Message message={m.message}/>)
    let newMessageBody = props.state.newMessageBody;


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                    placeholder="Enter your message"></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>


        </div>
    )
};

export default Dialogs;