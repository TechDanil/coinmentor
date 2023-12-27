import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/2.2/App/resources/css/app.min.css'
import './assets/2.2/App/resources/vendors/zwicon/zwicon.min.css'
import './index.css'
import AuthProvider from './providers/Auth.provider'
import AppRouter from './router/AppRouter'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	</Provider>
)
