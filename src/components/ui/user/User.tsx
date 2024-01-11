import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { userSelector } from '../../../store/auth/auth.selectors'
import UserInfo from './userInfo/UserInfo'

const User = () => {
	const user = useTypedSelector(userSelector)

	return (
		<div className='user'>
			<UserInfo user={user} />
		</div>
	)
}

export default User
