import { instance } from "./instance";

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then((response) => response.data);
    },
};

type GetCaptchaUrlResponseType = {
    url: string;
};
