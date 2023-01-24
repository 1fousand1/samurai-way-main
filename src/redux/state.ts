export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    //sidebar: any ///need to fix any
}


type ProfilePagePropsType={
    posts:Array<PostPropsType>
}
type DialogsPagePropsType ={
    dialogs:Array<DialogPropsType>
    messages:Array<MessagePropsType>
}

type PostPropsType = {
    id:number
    message:string
    likesCount:number
}

type DialogPropsType={
    id:number
    name:string
}
type MessagePropsType ={
    id:number
    message:string
}
type SidebarPropsType = {

}



export let state:RootStatePropsType  = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 11}],
        },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Vicktor'},
            {id: 6, name: 'Andrew'}],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT-KAMA'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'YO'}]
        },
    ///sidebar: {}
}

export default  state;