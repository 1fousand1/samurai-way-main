import React from 'react';
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body:any) => void,
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch ): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body:any) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())
        }
    }
}



export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs);

