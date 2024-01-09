import {ActionsType, DialogsPageType, MessageType, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./store";


const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Vicktor'},
        {id: 6, name: 'Andrew'}
    ],
        messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your IT-KAM?'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'YO'}
],
    newMessageBody: "",
    isAuth: false
}

const dialogsReducer = (
    state: DialogsPageType = initialState,
    action: ActionsType
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
                message: action.newMessageBody,
            };
            const newState: DialogsPageType = {
                ...state,
                messages: [...state.messages, newMessage],
            };
            return newState;
        }
        default:
            return state;
    }
};

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

export default dialogsReducer;