import { AxiosError, AxiosResponse } from 'axios'
import { instance } from '../api/api.interceptor'
import {
	ILoginRequest,
	ILoginResponse,
	IRefreshResponse,
	IRegisterRequest,
	IRegisterResponse,
} from '../shared/interfaces/auth.interface'
import { handleApiError } from '../utils/handleApiError/handleApiError'

export const authService = {
	register: async ({
		username,
		email,
		password,
	}: IRegisterRequest): Promise<AxiosResponse<IRegisterResponse>> => {
		try {
			const response = instance.post<IRegisterResponse>(
				`auth/register`,
				{ username, email, password },
				{ withCredentials: true }
			)

			return response
		} catch (error) {
			throw handleApiError(error as AxiosError)
		}
	},

	login: async ({
		email,
		password,
	}: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> => {
		try {
			const response = instance.post<ILoginResponse>(`auth/login`, {
				email,
				password,
			})

			return response
		} catch (error) {
			throw handleApiError(error as AxiosError)
		}
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
