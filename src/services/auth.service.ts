import { AxiosResponse } from "axios";
import { IRefreshResponse, IRegisterRequest, IRegisterResponse } from "../shared/interfaces/auth.interface";
import { instance } from "../api/api.interceptor";

export const authService = {
    register: async ({
        username,
        email,
        password,
    }: IRegisterRequest): Promise<AxiosResponse<IRegisterResponse>> => {
        const formData = new FormData();
        formData.append('user', username);
        formData.append('email', email);
        formData.append('password', password);
        return instance.post<IRegisterResponse>('auth/register', formData);
    },

    refresh: async (): Promise<AxiosResponse<IRefreshResponse>> => {
        return instance.get('auth/refresh');
    }
}