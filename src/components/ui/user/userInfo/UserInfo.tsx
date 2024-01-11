import { IUser } from '../../../../shared/interfaces/user.interface'

interface Props {
	user: IUser | null
}

const UserInfo = ({ user }: Props) => {
	console.log(user)

	return (
		user && (
			<div className='user__info' data-toggle='dropdown'>
				<div>
					<div className='user__name'>{user?.username}</div>
					<div className='user__email'>{user?.email}</div>
				</div>
			</div>
		)
	)
}

export default UserInfo
