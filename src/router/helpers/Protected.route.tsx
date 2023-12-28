import { ReactNode } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { LOGIN_SCREEN } from '../../configs/screens.config'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { isAuthSelector } from '../../store/auth/auth.selectors'

interface Props {
	element: ReactNode
	path: string
}

const ProtectedRoute = ({ element, path }: Props) => {
	const isAuth = useTypedSelector(isAuthSelector)
	return isAuth ? (
		<Route path={path} element={element} />
	) : (
		<Navigate to={LOGIN_SCREEN} />
	)
}

export default ProtectedRoute
