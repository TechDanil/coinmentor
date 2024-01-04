import { ReactNode } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { LOGIN_SCREEN } from '../../configs/screens.config'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { isAuthSelector } from '../../store/auth/auth.selectors'

interface Props {
	element: ReactNode
	children?: React.ReactNode
}

const ProtectedRoute = ({ element, children, ...rest }: Props) => {
	const isAuth = useTypedSelector(isAuthSelector)
	return isAuth ? (
		<Route {...rest}>{children}</Route>
	) : (
		<Navigate to={LOGIN_SCREEN} />
	)
}

export default ProtectedRoute
