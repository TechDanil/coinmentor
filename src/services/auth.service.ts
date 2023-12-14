import { AxiosResponse } from "axios";
import { ILoginRequest, ILoginRespone, IRefreshResponse, IRegisterRequest, IRegisterResponse, IVerifyResponse } from "../shared/interfaces/auth.interface";
import { instance } from "../api/api.interceptor";

export const authService = {
    register: async ({
        username,
        email,
        password,
    }: IRegisterRequest): Promise<AxiosResponse<IRegisterResponse>> => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        console.log(formData)
        return instance.post<IRegisterResponse>('auth/register', formData, { withCredentials: true });
    },

    login: async ({
        email,
        password,
    }: ILoginRequest): Promise<AxiosResponse<ILoginRespone>> => {
        return instance.post<ILoginRespone>('auth/login', {
            email,
            password,
        });
    },

    verify: async (): Promise<AxiosResponse<IVerifyResponse>> => {
        return instance.get<IVerifyResponse>(`auth/verify`)
    },

    refresh: async (): Promise<AxiosResponse<IRefreshResponse>> => {
        return instance.get('auth/refresh');
    }
}