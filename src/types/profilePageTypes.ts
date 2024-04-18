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
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContacts,
    photos: ProfilePhotos
    aboutMe?: string
}

export type ProfilePhotos = {
    small: string
    large: string
}

export type ProfileContacts = {
    [key: string]: string | null
}