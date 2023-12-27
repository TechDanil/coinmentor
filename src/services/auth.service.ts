import { AxiosResponse } from 'axios'
import { instance } from '../api/api.interceptor'
import {
	ILoginRequest,
	ILoginResponse,
	IRefreshResponse,
	IRegisterRequest,
	IRegisterResponse,
} from '../shared/interfaces/auth.interface'

export const authService = {
	register: async ({
		username,
		email,
		password,
	}: IRegisterRequest): Promise<AxiosResponse<IRegisterResponse>> => {
		return instance.post<IRegisterResponse>(
			`auth/register`,
			{ username, email, password },
			{ withCredentials: true }
		)
	},

	login: async ({
		email,
		password,
	}: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> => {
		return instance.post<ILoginResponse>(`auth/login`, {
			email,
			password,
		})
	},

	logout: async (): Promise<AxiosResponse> => {
		return instance.post<void>('auth/logout')
	},

	refresh: async (): Promise<AxiosResponse<IRefreshResponse>> => {
		return instance.get<IRefreshResponse>(`auth/refresh`, {
			withCredentials: true,
		})
	},
}
