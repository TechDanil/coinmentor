import { AxiosResponse } from "axios";
import { INewsResponse } from "../shared/interfaces/news.interface";
import { instance } from "../api/api.interceptor";

export const newsService = {
    fetchNews: async (): Promise<AxiosResponse<INewsResponse>> => {
        return instance.get<INewsResponse>('admin/news')
    }
}