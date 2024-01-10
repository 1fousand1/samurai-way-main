import {PhotosType} from "./profilePageTypes";

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: null;
    photos: PhotosType;
    followed: boolean;
    status: string
}

export type UsersType = UserType[]