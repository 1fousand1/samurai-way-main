import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { Dialogs } from "../Dialogs";
import { addMessageAC } from "../../../redux/actions/dialogsActions";
import { InitialStateType } from "../../../redux/reducers/dialogs-reducer";
import { withRouter } from "react-router-dom";
import { AppStateType } from "../../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: InitialStateType;
};

type MapDispatchToProps = {
    sendMessage: (newMessageBody: string) => void;
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessage: addMessageAC,
    }),
    withRouter,
    withAuthRedirect,
)(Dialogs);
