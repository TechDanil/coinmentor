import { ReactNode, useEffect } from 'react'
import { authService } from '../services/auth.service'

interface Props {
	children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
	useEffect(() => {
		if (localStorage.getItem('token')) {
			const checkAuth = async () => {
				try {
					await authService.refresh()
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
