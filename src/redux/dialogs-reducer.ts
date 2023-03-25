import {ActionType, DialogsPageType, MessageType, UPDATE_NEW_MESSAGE_BODY} from "./state";





const dialogsReducer = (
    state: DialogsPageType,
    action: ActionType
): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': {
            const newState: DialogsPageType = {
                ...state,
                newMessageBody: action.body,
            };
            return newState;
        }
        case 'SEND_MESSAGE': {
            const newMessage: MessageType = {
                id: state.messages.length + 1,
                message: state.newMessageBody,
            };
            const newState: DialogsPageType = {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: '',
            };
            return newState;
        }
        default:
            return state;
    }
};

export default dialogsReducer;