import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./actionTypes";

export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE as typeof SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY as typeof UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}