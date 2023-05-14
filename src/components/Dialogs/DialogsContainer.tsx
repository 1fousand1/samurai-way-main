import React from 'react';
import {DialogsPageType, RootStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body:any) => void,
    sendMessage: () => void,
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchPropsType => { //changedTypeFromAnyToDispatch
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