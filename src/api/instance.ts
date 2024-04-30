import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': `${process.env.REACT_APP_API_KEY}`
    }
})

export type BaseResponseType<Data = {}, RC = ResultCode> = {
    resultCode: RC
    messages: string[]
    data: Data
}

export enum ResultCode {
    SUCCESS = 0,
    ERROR = 1,
    CAPTCHA_ERROR = 10
}
