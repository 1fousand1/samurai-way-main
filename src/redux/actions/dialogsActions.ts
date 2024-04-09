import {
    DIALOGS_SEND_MESSAGE,
    DIALOGS_UPDATE_NEW_MESSAGE_BODY,
} from "./actionTypes";


export type DialogsActionType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: DIALOGS_SEND_MESSAGE as typeof DIALOGS_SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: DIALOGS_UPDATE_NEW_MESSAGE_BODY as typeof DIALOGS_UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}