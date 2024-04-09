import {DialogsPageType, MessageType} from "../../types/dialogsPageTypes";
import {ActionsType} from "../actions/actionCreatorTypes";
import {DIALOGS_SEND_MESSAGE, DIALOGS_UPDATE_NEW_MESSAGE_BODY} from "../actions/actionTypes";
import {DialogsActionType} from "../actions/dialogsActions";



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
    action: DialogsActionType
): DialogsPageType => {
    switch (action.type) {
        case DIALOGS_UPDATE_NEW_MESSAGE_BODY: {
            const newState: DialogsPageType = {
                ...state,
                newMessageBody: action.body,
            };
            return newState;
        }
        case DIALOGS_SEND_MESSAGE: {
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



export default dialogsReducer;