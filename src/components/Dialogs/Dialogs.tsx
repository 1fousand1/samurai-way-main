import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType ={
    name: string
    id: string
}


const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

};

type MessagePropsType = {
    text: string;
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>Hi</div>
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ={'Dimych'} id={'1'}/>
                <DialogItem name ={'Andrey'} id={'2'}/>
                <DialogItem name ={'Sveta'} id={'3'}/>
                <DialogItem name ={'Sasha'} id={'4'}/>
                <DialogItem name ={'Viktor'} id={'5'}/>
                <DialogItem name ={'Valera'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message text={'Hi'} />
                <Message text={'How is your IT'} />
                <Message text={'YO'} />
                <Message text={'YO'} />
            </div>
        </div>
    )
};

export default Dialogs;