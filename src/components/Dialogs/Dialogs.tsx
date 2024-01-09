import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageForm, DialogsFormRedux, FormDataType} from "./Message/AddMessageForm";
import {Redirect} from "react-router-dom";


const Dialogs: React.FC<DialogsPropsType> = (props:  DialogsPropsType) => {
    const {sendMessage} = props
    const {dialogs, messages, newMessageBody} = props.dialogsPage;

    const dialogsElements = dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = messages.map((m) => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values: FormDataType) => {
        sendMessage(values.newMessageBody)
    }

 /*   let onSendMessageClick = () => {
        sendMessage();
    }*/

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
            <DialogsFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};





export default Dialogs;