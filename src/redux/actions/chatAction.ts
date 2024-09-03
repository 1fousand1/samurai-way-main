import { ChatMessageType } from "../../api/chatApi";
import { CHAT_MESSAGES_RECEVIED, CHAT_SET_STATUS } from "./actionTypes";
import { ChatStatusType } from "../reducers/chat-reducer";

export type ChatActionType = ReturnType<typeof chatMessagesReceivedAC> | ReturnType<typeof chatSetStatusAC>;
export const chatMessagesReceivedAC = (messages: ChatMessageType[]) =>
    ({
        type: CHAT_MESSAGES_RECEVIED,
        payload: {
            messages,
        },
    }) as const;

export const chatSetStatusAC = (status: ChatStatusType) =>
    ({
        type: CHAT_SET_STATUS,
        payload: {
            status,
        },
    }) as const;
