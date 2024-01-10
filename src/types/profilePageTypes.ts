export type PostType = {
    id: number
    message: string
    likesCount: number

}
export type PhotosType = {
    large: string;
    small: string;
}


export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts: ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}