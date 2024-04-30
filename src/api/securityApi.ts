import {instance} from "./instance";

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
    }
}

type GetCaptchaUrlResponseType = {
    url: string
}