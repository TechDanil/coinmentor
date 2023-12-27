import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { userSelector } from '../../../../store/auth/auth.selectors'

const UserInfo = () => {
	const user = useTypedSelector(userSelector)
	console.log(user)
	// localStorage.setItem('user', JSON.stringify(user))

	console.log(user)

	return (
		<div className='user__info' data-toggle='dropdown'>
			<div>
				<div className='user__name'>{user?.username}</div>
				<div className='user__email'>{user?.email}</div>
			</div>
		</div>
	)
}

export default UserInfo
