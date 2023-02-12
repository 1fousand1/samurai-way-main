import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem";
import state, {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = () => {


    let state = props.store.getState().dialogsPage

    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages


    let dialogsElements = dialogs.map((d)=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map((m)=> <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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