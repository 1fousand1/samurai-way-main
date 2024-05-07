import {ReduxStateType} from "../redux-store";

export const getChatMessages = (state: ReduxStateType) => state.chat.messages

export const getChatStatus = (state: ReduxStateType) => state.chat.status