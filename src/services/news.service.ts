import { AxiosResponse } from 'axios'
import { instance } from '../api/api.interceptor'
import { INewsResponse } from '../shared/interfaces/news.interface'

export const newsService = {
	fetchNews: async (): Promise<AxiosResponse<INewsResponse[]>> => {
		return await instance.get<INewsResponse[]>(`admin/news`, {
			withCredentials: true,
		})
	},
}
