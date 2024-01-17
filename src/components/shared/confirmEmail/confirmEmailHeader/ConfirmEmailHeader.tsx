import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	LOGIN_SCREEN,
	REGISTER_SCREEN,
} from '../../../../configs/screens.config'
import styles from './ConfirmEmailHeader.module.scss'

const ConfirmEmailHeader = () => {
	const [isDropdownShown, setDropdownShown] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggleDropDown = () => {
		setDropdownShown(!isDropdownShown)
	}

	const handleClickOutside = (e: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(e.target as Node)
		) {
			setDropdownShown(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div className={styles.form__block_header}>
			<i className='zwicon-user-circle'></i>
			Recover your password
			<div className='actions actions--inverse login__block__actions'>
				<div
					ref={dropdownRef}
					className={`dropdown ${isDropdownShown ? 'show' : ''}`}
				>
					<i
						onClick={toggleDropDown}
						data-toggle='dropdown'
						className='zwicon-more-h actions__item'
					></i>

					<div
						className={`dropdown-menu dropdown-menu-right ${
							isDropdownShown ? 'show' : ''
						}`}
					>
						<Link
							className='dropdown-item'
							data-sa-action='login-switch'
							data-sa-target='#l-login'
							to={REGISTER_SCREEN}
						>
							Create an account
						</Link>
						<Link
							className='dropdown-item'
							data-sa-action='login-switch'
							data-sa-target='#l-forget-password'
							to={LOGIN_SCREEN}
						>
							Log in
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfirmEmailHeader
