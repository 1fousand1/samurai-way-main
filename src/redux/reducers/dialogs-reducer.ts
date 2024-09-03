import { MessageType } from "../../types/dialogsPageTypes";
import avatar1 from "../../assets/images/profile/avatars/avatar-1.webp";
import avatar2 from "../../assets/images/profile/avatars/avatar-2.webp";
import avatar3 from "../../assets/images/profile/avatars/avatar-3.webp";
import avatar4 from "../../assets/images/profile/avatars/avatar-4.webp";
import avatar5 from "../../assets/images/profile/avatars/avatar-5.webp";
import avatar6 from "../../assets/images/profile/avatars/avatar-6.webp";
import avatar7 from "../../assets/images/profile/avatars/avatar-7.webp";
import avatar8 from "../../assets/images/profile/avatars/avatar-8.webp";
import { UsersType } from "../../types/usersTypes";
import { ActionTypes } from "../actions/actionCreatorTypes";
import { MESSAGES_ADD } from "../actions/actionTypes";

const initialState = {
    dialogs: [
        {
            id: 1,
            avatar: avatar1,
            userFirstName: "Ivan",
            userLastName: "Bykov",
        },
        {
            id: 2,
            avatar: avatar2,
            userFirstName: "Liam",
            userLastName: "Moore",
        },
        {
            id: 3,
            avatar: avatar3,
            userFirstName: "Yoko",
            userLastName: "Mizuno",
        },
        {
            id: 4,
            avatar: avatar4,
            userFirstName: "Grace",
            userLastName: "Sheffield",
        },
        {
            id: 5,
            avatar: avatar5,
            userFirstName: "Sophia",
            userLastName: "Orlova",
        },
        {
            id: 6,
            avatar: avatar6,
            userFirstName: "Grace",
            userLastName: "Taylor",
        },
        {
            id: 7,
            avatar: avatar7,
            userFirstName: "Ethan",
            userLastName: "Anderson",
        },
        {
            id: 8,
            avatar: avatar8,
            userFirstName: "Fred",
            userLastName: "Gibson",
        },
    ] as UsersType,
    messages: [
        { id: 1, message: "Hey there!" },
        { id: 2, message: "Good morning!" },
        { id: 3, message: "How's everything?" },
        { id: 4, message: "Any updates?" },
        { id: 5, message: "Need some help?" },
        { id: 6, message: "Hey!" },
        { id: 7, message: "What's up?" },
        { id: 8, message: "Long time no see!" },
    ] as MessageType[],
};

export type InitialStateType = typeof initialState;

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case MESSAGES_ADD:
            const newMessage: MessageType = {
                id: 9,
                message: action.payload.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
};
