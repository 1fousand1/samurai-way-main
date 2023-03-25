import {ActionsType, DialogsPageType, MessageType, UPDATE_NEW_MESSAGE_BODY} from "./store";





const dialogsReducer = (
    state: DialogsPageType,
    action: ActionsType
): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            const newState: DialogsPageType = {
                ...state,
                newMessageBody: action.body,
            };
            return newState;
        }
        case 'SEND-MESSAGE': {
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