import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Login from '../components/screens/login/Login'
import Main from '../components/screens/main/Main'
import PasswordRecovery from '../components/screens/passwordRecovery/PasswordRecovery'
import Register from '../components/screens/register/Register'
import ConfirmEmail from '../components/shared/confirmEmail/ConfirmEmail'
import {
	ADMIN_SCREEN,
	FORGOT_PASSWORD_SCREEN,
	LOGIN_SCREEN,
	MAIN_SCREEN,
	REGISTER_SCREEN,
	REST_PASSWORD_SCREEN,
} from '../configs/screens.config'

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route
					path={`${MAIN_SCREEN}`}
					element={<Navigate to={LOGIN_SCREEN} />}
				/>
				<Route
					path={`${REST_PASSWORD_SCREEN}`}
					element={<PasswordRecovery />}
				/>
				<Route path={`${FORGOT_PASSWORD_SCREEN}`} element={<ConfirmEmail />} />
				<Route path={`${LOGIN_SCREEN}`} element={<Login />} />
				<Route path={`${REGISTER_SCREEN}`} element={<Register />} />
				<Route path={`${ADMIN_SCREEN}`} element={<Layout />}>
					<Route index element={<Main />}></Route>
				</Route>
			</Routes>
		</Router>
	)
}

export default AppRouter
