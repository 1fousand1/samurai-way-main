import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./Dialogitem/Dialogitem";
import state from "../../redux/state";


const Dialogs = () => {

    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages


    let dialogsElements = dialogs.map((d)=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map((m)=> <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;