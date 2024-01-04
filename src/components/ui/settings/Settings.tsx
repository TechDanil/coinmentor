import { useEffect, useRef, useState } from 'react'
import Logout from '../logout/Logout'

const Settings = () => {
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
		<li
			className={`dropdown d-none d-sm-inline-block ${
				isDropdownShown ? 'show' : ''
			}`}
		>
			<a onClick={toggleDropDown} data-toggle='dropdown'>
				<i className='zwicon-more-h'></i>
			</a>

			<div
				className={`dropdown-menu dropdown-menu-right ${
					isDropdownShown ? 'show' : ''
				}`}
			>
				<Logout />
			</div>
		</li>
	)
}

export default Settings
