import { Link } from 'react-router-dom'
import { LOGIN_SCREEN } from '../../../configs/screens.config'
import { useActions } from '../../../hooks/useActions'
import Button from '../button/Button'

const Logout = () => {
	const { logout } = useActions()

	const handleLogout = async () => {
		logout()
	}

	return (
		<Button onClick={handleLogout}>
			<Link to={LOGIN_SCREEN}>Logout</Link>
		</Button>
	)
}

export default Logout
