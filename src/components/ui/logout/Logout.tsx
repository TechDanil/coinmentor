import { useNavigate } from 'react-router-dom'
import { LOGIN_SCREEN } from '../../../configs/screens.config'
import { useActions } from '../../../hooks/useActions'
import Button from '../button/Button'

const Logout = () => {
	const { logout } = useActions()
	const navigate = useNavigate()

	const handleLogout = async () => {
		await logout()
		localStorage.removeItem('user')
		navigate(LOGIN_SCREEN)
	}

	return <Button onClick={handleLogout}>Logout</Button>
}

export default Logout
