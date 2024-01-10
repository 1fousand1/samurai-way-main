export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    isAuth: boolean
}

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}