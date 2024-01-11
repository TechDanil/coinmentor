import axios from 'axios'
import { ReactNode, useEffect } from 'react'
import { API_URL } from '../configs/api.config'
import { IRefreshResponse } from '../shared/interfaces/auth.interface'

interface Props {
	children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
	useEffect(() => {
		if (localStorage.getItem('token')) {
			const checkAuth = async () => {
				try {
					const response = await axios.get<IRefreshResponse>(
						`${API_URL}auth/refresh`,
						{ withCredentials: true }
					)

					localStorage.setItem('token', response.data.accessToken)
				} catch (error) {
					throw error
				}
			}

			checkAuth()
		}
	}, [])

	return <>{children}</>
}

export default AuthProvider
