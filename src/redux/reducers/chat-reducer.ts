import { ChatMessageType } from "../../api/chatApi";

import { CHAT_MESSAGES_RECEVIED, CHAT_SET_STATUS } from "../actions/actionTypes";
import { ActionTypes } from "../actions/actionCreatorTypes";
import { v1 } from "uuid";

export type ChatStatusType = "pending" | "ready" | "error";

let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as ChatStatusType,
};

const chatReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case CHAT_MESSAGES_RECEVIED: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    ...action.payload.messages.map((message) => ({
                        ...message,
                        id: v1(),
                    })),
                ].filter((_, index, array) => index >= array.length - 100),
            };
        }
        case CHAT_SET_STATUS: {
            return {
                ...state,
                status: action.payload.status,
            };
        }
        default:
            return state;
    }
};

export default chatReducer;
