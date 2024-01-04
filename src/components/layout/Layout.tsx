import { Outlet } from 'react-router-dom'
import Header from '../shared/header/Header'
import Navigation from '../shared/navigation/Navigation'
import SideBar from '../shared/sideBar/SideBar'

const Layout = () => {
	return (
		<main className='main'>
			<Header className='header'>
				<Navigation />
			</Header>
			<SideBar />
			<Outlet />
		</main>
	)
}

export default Layout
