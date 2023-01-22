import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number

}


const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

};

type MessagePropsType = {
    message:string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>Hi</div>
}


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Vicktor'},
        {id: 6, name: 'Andrew'}]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'YO'}]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
};

export default Dialogs;