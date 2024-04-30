import {BaseResponseType, instance} from "./instance";


type MeResponseDataType = {
    id: number;
    login: string;
    email: string;
}
type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<BaseResponseType<MeResponseDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null) {
        return instance.post<BaseResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<BaseResponseType>(`auth/login`)
    }
}


