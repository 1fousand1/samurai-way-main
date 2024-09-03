import { BaseResponseType, instance } from "./instance";

type MeResponseDataType = {
    id: number;
    login: string;
    email: string;
};
type LoginResponseDataType = {
    userId: number;
};

export const authAPI = {
    me() {
        return instance.get<BaseResponseType<MeResponseDataType>>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<BaseResponseType<LoginResponseDataType>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        });
    },
    logout() {
        return instance.delete<BaseResponseType>(`auth/login`).then((response) => response.data);
    },
};
