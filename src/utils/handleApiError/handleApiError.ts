import { AxiosError } from 'axios'

export interface ErrorResponse {
	message: string
	errors: string[]
}

export const handleApiError = (error: AxiosError): ErrorResponse | null => {
	if (error.response?.data) {
		const { message, errors } = error.response.data as ErrorResponse
		console.log(message)
		return { message, errors }
	}

	return null
}
