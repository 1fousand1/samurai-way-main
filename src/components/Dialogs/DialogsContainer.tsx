import React from 'react';
import {DialogsPageType, RootStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body:any) => void,
    sendMessage: () => void,
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:any): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body:any) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;