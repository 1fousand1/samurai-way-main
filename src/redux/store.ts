import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type StoreType = {
    _state: RootStateType
    _onChange: (newState: RootStateType) => void
    subscribe: (callback: (newState: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action:ActionsType) => void
}



export type ActionsType = ActionTypesProfile | ActionTypesDialogs

type ActionTypesProfile = { type: 'ADD-POST', postText: string } | { type: 'UPDATE-NEW-POST-TEXT'; newText: string };

export type ActionTypesDialogs = { type: 'UPDATE-NEW-MESSAGE-BODY'; body: string } | { type: 'SEND-MESSAGE' };

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

    //sidebar: any ///need to fix any
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number

}

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string

}
type SidebarType = {}



export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 11}],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
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
                {id: 2, message: 'How is your IT-KAMA'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'YO'}
            ],
            newMessageBody: ""

        },
        ///sidebar: {}
    },
    _onChange(newState: RootStateType) {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(callback: (newState: RootStateType) => void) {
        this._onChange = callback;
    },

    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        /*this._state.sidebar = sidebarReducer(this._state.sidebar, action);*/

        this._onChange(this._state);
    }
}

export const addPostActionCreator = (postText: string) => {
    return {
        type: ADD_POST as typeof ADD_POST,
        postText: postText
    } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT as typeof UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE as typeof SEND_MESSAGE
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY as typeof UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default store;
