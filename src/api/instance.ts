import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": `c4b28fa4-046a-47ee-989e-c914f3dc0c23`,
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
    },
});

export type BaseResponseType<Data = {}, RC = ResultCode> = {
    resultCode: RC;
    messages: string[];
    data: Data;
};

export enum ResultCode {
    SUCCESS = 0,
    ERROR = 1,
    CAPTCHA_ERROR = 10,
}
